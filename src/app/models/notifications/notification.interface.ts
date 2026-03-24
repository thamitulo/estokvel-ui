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
  senderId?: number;
  senderName?: string;
  stokvelId?: number;
  stokvelName?: string;
  isUnread: boolean;
}

export interface NotificationResponse {
  content: Notification[];
  pageable: {
    pageNumber: number;
    pageSize: number;
    sort: {
      empty: boolean;
      sorted: boolean;
      unsorted: boolean;
    };
    offset: number;
    paged: boolean;
    unpaged: boolean;
  };
  last: boolean;
  totalElements: number;
  totalPages: number;
  size: number;
  number: number;
  sort: {
    empty: boolean;
    sorted: boolean;
    unsorted: boolean;
  };
  first: boolean;
  numberOfElements: number;
  empty: boolean;
}

export interface JoinRequestResponse {
  approved: boolean;
  notes?: string;
}

export interface NotificationCountResponse {
  unreadCount: number;
  totalCount: number;
}
