export enum NotificationType {
  STOKVEL_JOIN_REQUEST = 'STOKVEL_JOIN_REQUEST',
  STOKVEL_JOIN_APPROVED = 'STOKVEL_JOIN_APPROVED',
  STOKVEL_JOIN_REJECTED = 'STOKVEL_JOIN_REJECTED',
  STOKVEL_MEMBER_REMOVED = 'STOKVEL_MEMBER_REMOVED',
  STOKVEL_ROLE_CHANGED = 'STOKVEL_ROLE_CHANGED',
  STOKVEL_CONTRIBUTION_DUE = 'STOKVEL_CONTRIBUTION_DUE',
  STOKVEL_PAYOUT_PROCESSED = 'STOKVEL_PAYOUT_PROCESSED',
  USER_WELCOME = 'USER_WELCOME',
  USER_PROFILE_UPDATED = 'USER_PROFILE_UPDATED',
  USER_REFERRAL_REWARD = 'USER_REFERRAL_REWARD',
  SYSTEM_ANNOUNCEMENT = 'SYSTEM_ANNOUNCEMENT',
  SYSTEM_UPDATE = 'SYSTEM_UPDATE',
  SECURITY_ALERT = 'SECURITY_ALERT',
  LOGIN_ATTEMPT = 'LOGIN_ATTEMPT',
  PAYMENT_RECEIVED = 'PAYMENT_RECEIVED',
  PAYMENT_FAILED = 'PAYMENT_FAILED',
  WALLET_CREDITED = 'WALLET_CREDITED',
  WALLET_DEBITED = 'WALLET_DEBITED'
}

export enum NotificationStatus {
  UNREAD = 'UNREAD',
  READ = 'READ',
  ARCHIVED = 'ARCHIVED',
  DELETED = 'DELETED'
}

export interface Notification {
  id: number;
  type: NotificationType;
  title: string;
  message: string;
  status: NotificationStatus;
  createdAt: string;
  readAt?: string;
  actionUrl?: string;
  relatedEntityId?: number;
  relatedEntityType?: string;
  senderId?: string;    // Auth0 user ID (string, not number)
  senderName?: string;
  stokvelId?: number;
  stokvelName?: string;
  isUnread: boolean;
}

/**
 * Paginated notification response matching the backend PaginatedResponse<NotificationDTO> format.
 * The backend now returns a simplified pagination structure after Phase 1 updates.
 */
export interface NotificationResponse {
  content: Notification[];
  page: number;
  size: number;
  totalElements: number;
  totalPages: number;
}

export interface JoinRequestResponse {
  approved: boolean;
  notes?: string;
}

export interface NotificationCountResponse {
  unreadCount: number;
  totalCount: number;
}
