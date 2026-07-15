export interface AdminLoginRequest {
  username: string;
  password: string;
}

export interface AdminLoginResponse {
  token: string;
  username: string;
  displayName: string;
  email: string;
  expiresAt: string;
}

export interface PlatformStats {
  totalStokvels: number;
  activeStokvels: number;
  rotationalStokvels: number;
  stokvelsCreatedThisMonth: number;
  totalUsers: number;
  activeUsers: number;
  totalMemberships: number;
  kycVerifiedUsers: number;
  totalContributionsAllTime: number;
  totalContributionsThisMonth: number;
  totalReferrals: number;
  completedReferrals: number;
  totalReferralRewardsPaid: number;
  totalFeesCollected: number;
  proSubscribers: number;
  businessSubscribers: number;
  recentEvents: RecentEvent[];
  topStokvels: TopStokvel[];
}

export interface RecentEvent {
  timestamp: string;
  type: string;
  description: string;
  actorName: string;
}

export interface TopStokvel {
  id: number;
  name: string;
  type: string;
  memberCount: number;
  totalContributions: number;
  createdByName: string;
}

export interface AdminStokvelMemberSlim {
  auth0Id: string;
  email: string;
  name: string;
  joinedAt: string;
}

export interface AdminStokvel {
  id: number;
  uuid: string;
  name: string;
  description: string;
  type: string;
  privacy: string;
  status: string;
  payoutCycle: string;
  monthlyContribution: number;
  maxMembers: number;
  createdByAuth0Id: string;
  createdByEmail: string;
  createdByName: string;
  createdAt: string;
  kycRequired: boolean;
  minimumKycLevel: string;
  currentRotationSlot: number | null;
  rotationStartedAt: string | null;
  activeMemberCount: number;
  pendingMemberCount: number;
  totalMemberCount: number;
  totalContributions: number;
  admins: AdminStokvelMemberSlim[];
}

export interface AdminUserStokvelSlim {
  stokvelId: number;
  stokvelName: string;
  type: string;
  role: string;
  membershipStatus: string;
  totalContributed: number;
  nextPayOutDate: string | null;
  memberNumber: number | null;
}

export interface AdminUser {
  auth0Id: string;
  email: string;
  firstName: string;
  lastName: string;
  fullName: string;
  phoneNumber: string;
  status: string;
  emailVerified: boolean;
  lastLoginAt: string | null;
  loginCount: number;
  kycStatus: string;
  subscriptionTier: string;
  referralCreditBalance: number;
  activeStokvels: number;
  totalMemberships: number;
  totalContributed: number;
  referralsSent: number;
  referralsConverted: number;
  stokvels: AdminUserStokvelSlim[];
}

export interface PagedResponse<T> {
  content: T[];
  totalElements: number;
  totalPages: number;
  number: number;
  size: number;
}

