// Subscription tier models

export type TierCode = 'FREE' | 'PRO' | 'BUSINESS';

export interface SubscriptionTierInfo {
  code: TierCode;
  name: string;
  feeRatePercent: number;
  maxFeePerTransaction: number | null; // null = no cap
  monthlyAmountZar: number;
  maxStokvels: number;           // -1 = unlimited
  maxMembersPerStokvel: number;  // -1 = unlimited
  features: string[];
  current: boolean;
}

export interface UserSubscriptionDto {
  id?: number;
  userAuth0Id?: string;
  tier: TierCode;
  tierDisplayName: string;
  status: string;
  activeFrom: string;
  activeUntil: string | null;
  monthlyAmountPaid: number;
  referralCreditBalance: number;
  feeRatePercent: number;
  maxFeePerTransaction: number | null;
  maxStokvels: number;
  maxMembersPerStokvel: number;
  availableTiers: SubscriptionTierInfo[];
}

export interface UpgradeRequest {
  tier: TierCode;
}

