import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

interface Notification {
  id: number;
  icon: string;
  iconClass: string;
  title: string;
  message: string;
  time: string;
  read: boolean;
}

@Component({
  selector: 'app-notifications-page',
  imports: [CommonModule, RouterModule, MatIconModule, MatButtonModule],
  templateUrl: './notifications.component.html',
  styleUrl: './notifications.component.scss',
  standalone: true
})
export class NotificationsPageComponent implements OnInit {
  activeFilter: 'all' | 'unread' = 'all';

  notifications: Notification[] = [
    { id: 1, icon: 'payments', iconClass: 'icon-teal', title: 'Contribution Received', message: 'Your monthly contribution of R1,500 for "Family Savings Club" has been received and confirmed.', time: '2 hours ago', read: false },
    { id: 2, icon: 'group_add', iconClass: 'icon-navy', title: 'New Member Joined', message: 'Sipho Nkosi has joined your stokvel "Neighbourhood Savers". You now have 8/10 members.', time: '5 hours ago', read: false },
    { id: 3, icon: 'account_balance_wallet', iconClass: 'icon-gold', title: 'Payout Processed', message: 'Your payout of R12,000 from "Office Stokvel" has been processed and sent to your wallet.', time: '1 day ago', read: false },
    { id: 4, icon: 'notification_important', iconClass: 'icon-red', title: 'Contribution Due Tomorrow', message: 'Reminder: Your contribution of R800 for "Women\'s Investment Club" is due tomorrow, 23 April 2026.', time: '1 day ago', read: true },
    { id: 5, icon: 'check_circle', iconClass: 'icon-teal', title: 'Stokvel Activated', message: 'Your stokvel "Family Savings Club" is now active. All members have confirmed participation.', time: '3 days ago', read: true },
    { id: 6, icon: 'person_add', iconClass: 'icon-navy', title: 'Invitation Accepted', message: 'Nomsa Dlamini has accepted your invitation to join "Neighbourhood Savers".', time: '4 days ago', read: true },
    { id: 7, icon: 'security', iconClass: 'icon-navy', title: 'Security Alert', message: 'A new device logged into your eStokvel account. If this was not you, please change your password immediately.', time: '1 week ago', read: true },
    { id: 8, icon: 'star', iconClass: 'icon-gold', title: 'Referral Bonus Earned', message: 'You\'ve earned a R50 referral bonus! Your friend Thabo Molefe joined eStokvel using your referral link.', time: '1 week ago', read: true },
  ];

  ngOnInit() {}

  get unreadCount() {
    return this.notifications.filter(n => !n.read).length;
  }

  get displayedNotifications() {
    return this.activeFilter === 'unread'
      ? this.notifications.filter(n => !n.read)
      : this.notifications;
  }

  markAllRead() {
    this.notifications.forEach(n => n.read = true);
  }

  markRead(notification: Notification) {
    notification.read = true;
  }

  setFilter(filter: 'all' | 'unread') {
    this.activeFilter = filter;
  }
}

