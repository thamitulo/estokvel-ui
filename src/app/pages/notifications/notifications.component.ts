import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Subject, takeUntil } from 'rxjs';
import { NotificationService } from '../../services/notifications/notifications.service';
import { Notification, NotificationResponse } from '../../models/notifications/notification.interface';

@Component({
  selector: 'app-notifications-page',
  imports: [CommonModule, RouterModule, MatIconModule, MatButtonModule, MatProgressSpinnerModule, MatSnackBarModule],
  templateUrl: './notifications.component.html',
  styleUrl: './notifications.component.scss',
  standalone: true
})
export class NotificationsPageComponent implements OnInit, OnDestroy {
  activeFilter: 'all' | 'unread' = 'all';
  notifications: Notification[] = [];
  isLoading = true;
  error: string | null = null;

  private currentPage = 0;
  private pageSize = 20;
  hasMore = false;
  totalElements = 0;

  private destroy$ = new Subject<void>();

  constructor(
    private notificationService: NotificationService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.loadNotifications();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  loadNotifications(): void {
    this.isLoading = true;
    this.error = null;
    this.notificationService.getAllNotifications(this.currentPage, this.pageSize)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response: NotificationResponse) => {
          this.notifications = response.content ?? [];
          this.totalElements = response.totalElements ?? 0;
          this.hasMore = (this.currentPage + 1) < (response.totalPages ?? 1);
          this.isLoading = false;
        },
        error: (err) => {
          this.error = err?.status === 0
            ? 'Backend is unavailable. Please try again later.'
            : 'Could not load notifications.';
          this.isLoading = false;
          // Fall back to recent notifications on paginated endpoint failure
          this.loadRecentFallback();
        }
      });
  }

  private loadRecentFallback(): void {
    this.notificationService.getRecentNotifications(20)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (list) => {
          this.notifications = list;
          this.error = null;
          this.isLoading = false;
        },
        error: () => { this.isLoading = false; }
      });
  }

  get unreadCount(): number {
    return this.notifications.filter(n => n.isUnread || n.status === 'UNREAD').length;
  }

  get displayedNotifications(): Notification[] {
    return this.activeFilter === 'unread'
      ? this.notifications.filter(n => n.isUnread || n.status === 'UNREAD')
      : this.notifications;
  }

  markAllRead(): void {
    this.notificationService.markAllAsRead()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: () => {
          this.notifications.forEach(n => { n.isUnread = false; (n as any).status = 'READ'; });
          this.snackBar.open('All notifications marked as read', 'Close', { duration: 3000 });
        },
        error: () => this.snackBar.open('Could not update notifications', 'Close', { duration: 3000 })
      });
  }

  markRead(notification: Notification): void {
    if (!notification.isUnread && notification.status !== 'UNREAD') return;
    this.notificationService.markAsRead(notification.id)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: () => { notification.isUnread = false; (notification as any).status = 'READ'; }
      });
  }

  deleteNotification(notification: Notification): void {
    this.notificationService.deleteNotification(notification.id)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: () => {
          this.notifications = this.notifications.filter(n => n.id !== notification.id);
          this.snackBar.open('Notification removed', 'Close', { duration: 2000 });
        },
        error: () => this.snackBar.open('Could not delete notification', 'Close', { duration: 3000 })
      });
  }

  setFilter(filter: 'all' | 'unread'): void {
    this.activeFilter = filter;
  }

  getNotificationIcon(type: string): string {
    const map: Record<string, string> = {
      STOKVEL_JOIN_REQUEST: 'person_add',
      STOKVEL_JOIN_APPROVED: 'check_circle',
      STOKVEL_JOIN_REJECTED: 'cancel',
      STOKVEL_CONTRIBUTION_DUE: 'notification_important',
      STOKVEL_PAYOUT_PROCESSED: 'account_balance_wallet',
      PAYMENT_RECEIVED: 'payments',
      WALLET_CREDITED: 'add_circle',
      WALLET_DEBITED: 'remove_circle',
      USER_REFERRAL_REWARD: 'star',
      SECURITY_ALERT: 'security',
      SYSTEM_ANNOUNCEMENT: 'campaign',
    };
    return map[type] ?? 'notifications';
  }

  getIconClass(type: string): string {
    const map: Record<string, string> = {
      STOKVEL_JOIN_REQUEST: 'icon-navy',
      STOKVEL_JOIN_APPROVED: 'icon-teal',
      STOKVEL_JOIN_REJECTED: 'icon-red',
      STOKVEL_CONTRIBUTION_DUE: 'icon-red',
      STOKVEL_PAYOUT_PROCESSED: 'icon-gold',
      PAYMENT_RECEIVED: 'icon-teal',
      WALLET_CREDITED: 'icon-teal',
      WALLET_DEBITED: 'icon-red',
      USER_REFERRAL_REWARD: 'icon-gold',
      SECURITY_ALERT: 'icon-navy',
      SYSTEM_ANNOUNCEMENT: 'icon-navy',
    };
    return map[type] ?? 'icon-navy';
  }

  formatTime(dateStr: string): string {
    if (!dateStr) return '';
    const date = new Date(dateStr);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const mins = Math.floor(diffMs / 60000);
    const hours = Math.floor(diffMs / 3600000);
    const days = Math.floor(diffMs / 86400000);
    if (mins < 1) return 'Just now';
    if (mins < 60) return `${mins}m ago`;
    if (hours < 24) return `${hours}h ago`;
    if (days < 7) return `${days}d ago`;
    return date.toLocaleDateString('en-ZA');
  }
}
