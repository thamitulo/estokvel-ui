export class StokvelType {
  private constructor(public readonly name: string) {}

  static readonly INVESTMENT = new StokvelType('investment');
  static readonly PROPERTY = new StokvelType('property');
  static readonly FAMILY = new StokvelType('family');
  static readonly BURIAL = new StokvelType('burial');
  static readonly ROTATIONAL = new StokvelType('rotational');

  static values(): StokvelType[] {
    return [
      StokvelType.INVESTMENT,
      StokvelType.PROPERTY,
      StokvelType.FAMILY,
      StokvelType.BURIAL,
      StokvelType.ROTATIONAL
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
  isOwner?: boolean;
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
  collectedAmount?: number;   // total amount collected so far (sum of all contributions)

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
  isOwner?: boolean;
  isMember?: boolean;
  currentUserRole?: string; // 'ADMIN' | 'MEMBER' | null

  // ── Rotational stokvel metadata ──────────────────────────────────────────
  rotationStartedAt?: string;     // ISO date when rotation was initialised
  currentRotationSlot?: number;   // which slot (1-based) is currently active
  totalRotationSlots?: number;    // total number of slots in the current rotation
}

// ── Rotation queue DTOs ──────────────────────────────────────────────────────

export interface RotationSlotDto {
  position: number;
  memberId: number;
  memberName: string;
  memberEmail: string;
  userAuth0Id: string;
  scheduledPayoutDate: string;  // ISO date
  payoutAmount: number;
  isCurrent: boolean;
  hasReceived: boolean;
}

export interface RotationQueueDto {
  stokvelId: number;
  stokvelName: string;
  payoutCycle: string;
  rotationActive: boolean;
  rotationStartedAt: string;  // ISO date
  currentSlot: number;
  totalSlots: number;
  queue: RotationSlotDto[];
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
  totalContributed?: number;
  nextPayoutAmount?: number;
  nextPayOutDate?: string;
  memberNumber?: number;
  stokvelId?: number;
  stokvelName?: string;
}

export interface CreateStokvelRequest {
  name: string;
  description: string;
  type: string;
  typeName?: string;
  privacy: 'public' | 'private';
  monthlyContribution: number;
  targetAmount?: number;
  savingsTermId?: number;
  payoutCycle: string;
  maxMembers: number;
  rotationOrder?: string;
  rules?: StokvelRuleDto[];
}

export interface JoinRequestDTO {
  stokvelId: number;
  stokvelName?: string;
  userId?: string;
  fullName: string;
  userEmail?: string;
  message?: string;
  contributionAmount?: number;
}

export interface JoinRequestResponseDTO {
  id: number;
  stokvelId: number;
  stokvelName: string;
  userId: string;
  fullName: string;
  userEmail: string;
  message?: string;
  contributionAmount?: number;
  status: 'PENDING' | 'APPROVED' | 'REJECTED';
  adminNotes?: string;
  createdAt: string;
  updatedAt: string;
}
