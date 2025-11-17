export class StokvelType {
  private constructor(public readonly name: string) {}

  static readonly INVESTMENT = new StokvelType('investment');
  static readonly PROPERTY = new StokvelType('property');
  static readonly FAMILY = new StokvelType('family');
  static readonly BURIAL = new StokvelType('burial');
  static readonly MONTHLY = new StokvelType('monthly');

  static values(): StokvelType[] {
    return [
      StokvelType.INVESTMENT,
      StokvelType.PROPERTY,
      StokvelType.FAMILY,
      StokvelType.BURIAL,
      StokvelType.MONTHLY
    ];
  }
}

export interface Stokvel {
  id?: number;
  name: string;
  description: string;
  stokvelType: StokvelType;
  startDate: string;
  active?: boolean;
  memberCount?: number;
  contributionPerMember?: number;
  totalContributions?: number;
  targetAmount?: number;
  contributionAmount: number,
  adminUser?: string
  status: 'active' | 'pending' | 'completed';
  collectedAmount: number;
  monthlyContribution: number;
  nextPayoutDate: Date;
  myNextPayout?: Date;
  progress: number;
}

export interface StokvelResponse {
  id: number;
  uuid: string;
  name: string;
  description: string;

  // type
  type: string;
  typeName: string;

  // privacy + payout
  privacy: string;
  payoutCycle: string;
  rotationOrder: string;

  // financials
  monthlyContribution: number;
  targetAmount: number;

  // size + membership
  maxMembers: number;
  totalMembers: number;
  adminCount: number;
  memberCount: number;

  // status
  status: string;

  // created info
  createdBy: string;
  createdAt: string;
  updatedAt: string;

  // nested data
  rules: StokvelRuleDto[];
  members: StokvelMemberDto[];
  adminMembers: StokvelMemberDto[];
  regularMembers: StokvelMemberDto[];
}

export interface StokvelRuleDto {
  id?: number;
  title: string;
  description: string;
  isDefault?: boolean;
  enabled?: boolean;
}

export interface StokvelMemberDto {
  id?: number;
  userAuth0Id: string;
  userEmail: string;
  userName: string;
  displayName: string;
  role: 'ADMIN' | 'MEMBER';
  joinedAt: string;
  joinedDate: string;
  status: string;
  membershipStatus: string;
}

