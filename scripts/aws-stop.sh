#!/usr/bin/env bash
# Stops iKage on AWS: its API containers on the shared Bluetank server go down and stay down, also
# when the server restarts, until the API is deployed again (scripts/aws-deploy.sh in thamitulo/ikage;
# this repo's deploy only uploads the web app). The web pages stay up but can't reach the API. The
# database and volumes are kept. It runs iKage's own SSM command (bluetank-<env>-ikage-stop, from
# bluetank-infra), which waits for a deploy that's in progress.
#
#   scripts/aws-stop.sh staging|prod
#
# Needs the AWS CLI, logged in to the Bluetank account (AWS_PROFILE is honoured).
set -euo pipefail

APP=ikage
REGION=af-south-1

env=${1:-}
[[ $env == staging || $env == prod ]] || { echo "usage: scripts/aws-stop.sh staging|prod" >&2; exit 2; }

read -r instance state < <(aws ec2 describe-instances --region "$REGION" \
  --filters "Name=tag:Name,Values=bluetank-$env-server" "Name=instance-state-name,Values=pending,running,stopping,stopped" \
  --query 'Reservations[0].Instances[0].[InstanceId,State.Name]' --output text | tr -d '\r')
[[ -n ${instance:-} && $instance != None ]] || { echo "no bluetank-$env server found" >&2; exit 1; }
if [[ $state != running ]]; then
  echo "The $env server is $state. $APP comes back when the server starts; start the server, then run this again." >&2
  exit 1
fi

if [[ $env == prod ]]; then
  read -rp "Stop $APP in PROD? Users can't use it until it's deployed again. [y/N] " ok
  [[ $ok == [yY]* ]] || { echo "Cancelled."; exit 1; }
fi

cmd=$(aws ssm send-command --region "$REGION" --instance-ids "$instance" \
  --document-name "bluetank-$env-$APP-stop" --comment "stop $APP" \
  --query Command.CommandId --output text | tr -d '\r')
echo "Stopping $APP in $env (SSM command $cmd)..."
aws ssm wait command-executed --region "$REGION" --command-id "$cmd" --instance-id "$instance" 2>/dev/null || true
result() {
  aws ssm get-command-invocation --region "$REGION" --command-id "$cmd" --instance-id "$instance" \
    --query "$1" --output text | tr -d '\r'
}
result StandardOutputContent
status=$(result Status)
[[ $status == Success ]] || { result StandardErrorContent >&2; echo "Stop failed: $status" >&2; exit 1; }
