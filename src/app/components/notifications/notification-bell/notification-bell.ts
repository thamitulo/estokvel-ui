import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Subscription, interval } from 'rxjs';
import {NotificationService} from "../../../services/notifications/notifications.service";
import {MaterialModule} from "../../../material.module";
import {Notification} from "../../../models/notifications/notification.interface";

@Component({
  selector: 'app-notification-bell',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ],
  templateUrl: 'notification-bell.html',
  styleUrls: ['notification-bell.scss']
})
export class NotificationBellComponent implements OnInit, OnDestroy {
  notifications: Notification[] = [];
  unreadCount: number = 0;
  isLoading: boolean = false;
  isMenuOpen: boolean = false;
  backendUnavailable: boolean = false;  // true when backend is unreachable

  private pollSubscription: Subscription | undefined;
  private refreshInterval = 30000;
  private consecutiveFailures = 0;
  private readonly maxConsecutiveFailures = 3; // pause polling after 3 failures

  constructor(private notificationService: NotificationService) {}

  ngOnInit(): void {
    this.loadNotifications();
    this.startPolling();
  }

  ngOnDestroy(): void {
    if (this.pollSubscription) {
      this.pollSubscription.unsubscribe();
    }
  }

  loadNotifications(): void {
    this.isLoading = true;
    this.notificationService.getRecentNotifications(5).subscribe({
      next: (notifications) => {
        this.notifications = notifications;
        this.unreadCount = notifications.filter(n => n.isUnread).length;
        this.isLoading = false;
        this.consecutiveFailures = 0;
        this.backendUnavailable = false;
      },
      error: (error) => {
        this.isLoading = false;
        this.consecutiveFailures++;

        if (error.status === 0) {
          // Network error (ERR_CONNECTION_REFUSED) — backend is down
          this.backendUnavailable = true;
          if (this.consecutiveFailures <= 1) {
            // Only log once to avoid console spam
            console.warn('Notification service unavailable: backend not reachable at localhost:8080');
          }
        } else if (error.status === 401) {
          // Not authenticated yet — expected during page load before token is ready, suppress noise
        } else {
          console.error('Failed to load notifications:', error);
        }
      }
    });
  }

  startPolling(): void {
    this.pollSubscription = interval(this.refreshInterval).subscribe(() => {
      // Pause polling if backend is unreachable (avoid flooding console/network)
      if (this.isMenuOpen) return;
      if (this.consecutiveFailures >= this.maxConsecutiveFailures) {
        // After 3 failures, retry only every 5th interval (~2.5 min) to detect recovery
        if (this.consecutiveFailures % 5 !== 0) {
          this.consecutiveFailures++;
          return;
        }
      }
      this.loadNotifications();
    });
  }

  markAsRead(notificationId: number): void {
    this.notificationService.markAsRead(notificationId).subscribe({
      next: () => {
        const notification = this.notifications.find(n => n.id === notificationId);
        if (notification) {
          notification.isUnread = false;
          this.unreadCount = Math.max(0, this.unreadCount - 1);
        }
      },
      error: (error) => {
        console.error('Failed to mark notification as read:', error);
      }
    });
  }

  markAllAsRead(): void {
    this.notificationService.markAllAsRead().subscribe({
      next: () => {
        this.notifications.forEach(n => n.isUnread = false);
        this.unreadCount = 0;
      },
      error: (error) => {
        console.error('Failed to mark all as read:', error);
      }
    });
  }

  onMenuOpened(): void {
    this.isMenuOpen = true;
  }

  onMenuClosed(): void {
    this.isMenuOpen = false;
  }

  getNotificationIcon(type: string): string {
    switch (type) {
      case 'STOKVEL_JOIN_REQUEST':
        return 'person_add';
      case 'STOKVEL_JOIN_APPROVED':
        return 'check_circle';
      case 'STOKVEL_JOIN_REJECTED':
        return 'cancel';
      case 'PAYMENT_RECEIVED':
        return 'payments';
      case 'SYSTEM_ANNOUNCEMENT':
        return 'campaign';
      default:
        return 'notifications';
    }
  }

  getNotificationColor(type: string): string {
    switch (type) {
      case 'STOKVEL_JOIN_REQUEST':
        return 'primary';
      case 'STOKVEL_JOIN_APPROVED':
        return 'success';
      case 'STOKVEL_JOIN_REJECTED':
        return 'warn';
      default:
        return 'default';
    }
  }

  formatTime(dateString: string): string {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 1) return 'Just now';
    if (diffMins < 60) return `${diffMins}m ago`;
    if (diffHours < 24) return `${diffHours}h ago`;
    if (diffDays < 7) return `${diffDays}d ago`;

    return date.toLocaleDateString();
  }
}
