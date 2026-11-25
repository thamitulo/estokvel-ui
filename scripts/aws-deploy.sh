#!/usr/bin/env bash
# Deploys iKage's web app to AWS through this repo's GitHub Actions workflows, the same way a merge to
# main does: the build runs in CI and secrets stay in AWS Secrets Manager. To start iKage again after
# scripts/aws-stop.sh, deploy the API (thamitulo/ikage).
#
#   scripts/aws-deploy.sh staging         build the latest commit on main and deploy it to staging
#   scripts/aws-deploy.sh staging <sha>   deploy an older commit to staging again (re-runs its staging run)
#   scripts/aws-deploy.sh prod            release the latest commit on main to prod (it must be on staging)
#   scripts/aws-deploy.sh prod <sha>      release that commit to prod (it must have reached staging)
#
# Needs the GitHub CLI (gh), logged in with access to thamitulo/ikage-ui.
set -euo pipefail

REPO=thamitulo/ikage-ui
STAGING_WORKFLOW=deploy.yml # builds and deploys to staging
PROD_WORKFLOW=promote.yml     # deploys a staging build to prod, unchanged

usage() { sed -n '6,9p' "$0" | sed 's/^# *//' >&2; exit 2; }

env=${1:-}
sha=${2:-}
[[ -z $sha || $sha =~ ^[0-9a-f]{7,40}$ ]] || { echo "not a commit SHA: $sha" >&2; exit 2; }
command -v gh >/dev/null || { echo "install the GitHub CLI (gh) first" >&2; exit 1; }

watch() {
  echo "Watching https://github.com/$REPO/actions/runs/$1"
  gh run watch "$1" --repo "$REPO" --exit-status --interval 10
}

# A run started with `gh workflow run`: its URL is printed, or it's the newest manual run of the workflow.
started_run() {
  local wf=$1 out=$2 id
  id=$(grep -o 'actions/runs/[0-9]*' <<<"$out" | head -1 | cut -d/ -f3 || true)
  for _ in $(seq 1 15); do
    [[ -n $id ]] && { echo "$id"; return; }
    sleep 2
    id=$(gh run list --repo "$REPO" --workflow "$wf" --event workflow_dispatch --limit 1 \
      --json databaseId,createdAt --jq ".[] | select(.createdAt >= \"$3\") | .databaseId" | tr -d '\r')
  done
  echo "the $wf run didn't show up; check https://github.com/$REPO/actions" >&2
  exit 1
}

case $env in
  staging)
    if [[ -z $sha ]]; then
      since=$(date -u +%Y-%m-%dT%H:%M:%SZ)
      out=$(gh workflow run "$STAGING_WORKFLOW" --repo "$REPO" --ref main 2>&1) || { echo "$out" >&2; exit 1; }
      watch "$(started_run "$STAGING_WORKFLOW" "$out" "$since")"
    else
      run=$(gh run list --repo "$REPO" --workflow "$STAGING_WORKFLOW" --commit "$(gh api "repos/$REPO/commits/$sha" --jq .sha)" \
        --limit 1 --json databaseId --jq '.[0].databaseId // empty' | tr -d '\r')
      [[ -n $run ]] || { echo "$sha was never deployed to staging; only commits on main are" >&2; exit 1; }
      gh run rerun "$run" --repo "$REPO"
      sleep 3
      watch "$run"
    fi
    ;;
  prod)
    fields=()
    [[ -z $sha ]] || fields=(-f "sha=$(gh api "repos/$REPO/commits/$sha" --jq .sha | tr -d '\r')")
    read -rp "Release ${sha:-the latest commit on main} of $REPO to PROD? [y/N] " ok
    [[ $ok == [yY]* ]] || { echo "Cancelled."; exit 1; }
    since=$(date -u +%Y-%m-%dT%H:%M:%SZ)
    out=$(gh workflow run "$PROD_WORKFLOW" --repo "$REPO" --ref main "${fields[@]}" 2>&1) || { echo "$out" >&2; exit 1; }
    watch "$(started_run "$PROD_WORKFLOW" "$out" "$since")"
    ;;
  *) usage ;;
esac
