export interface ReferralStats {
  referredCount: number;
  totalEarnings: number;
  pendingReferrals: number;
  completedReferrals: number;
  referralCode: string;
}

export interface ReferralHistory {
  id: number;
  friendName: string;
  friendEmail: string;
  friendCellphone: string;
  invitationDate: string;
  completedDate?: string;
  status: 'PENDING' | 'COMPLETED' | 'FAILED' | 'EXPIRED' | 'CANCELLED';
  rewardAmount: number;
  stokvelName?: string;
  displayDate: string;
  statusBadge: string;
  formattedAmount: string;
}

export interface CreateReferralRequest {
  friendName: string;
  email: string;
  cellphone: string;
  stokvelId?: number;
  notes?: string;
}

export interface ShareReferralRequest {
  shareMethod: 'WHATSAPP' | 'EMAIL' | 'SMS' | 'LINK';
  customMessage?: string;
  recipientEmail?: string;
  recipientPhone?: string;
}

export interface ReferralResponse {
  id: number;
  friendName: string;
  email: string;
  cellphone: string;
  invitationDate: string;
  status: 'PENDING' | 'COMPLETED' | 'FAILED' | 'EXPIRED' | 'CANCELLED';
  amount: number;
  referralCode: string;
  shareableLink: string;
  stokvelName?: string;
  notes?: string;
  completedDate?: string;
}

export interface ApiResponse<T> {
  data: T;
  message?: string;
  timestamp: string;
}
