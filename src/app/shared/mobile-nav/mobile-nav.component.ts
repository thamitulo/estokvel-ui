import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';
import { AuthService } from '@auth0/auth0-angular';
import { Observable } from 'rxjs';
import { MobilePlatformService } from '../../services/mobile-platform.service';

interface NavTab {
  label: string;
  icon: string;
  activeIcon: string;
  route: string;
  requiresAuth?: boolean;
}

@Component({
  selector: 'app-mobile-nav',
  standalone: true,
  imports: [CommonModule, RouterModule, MatIconModule, MatRippleModule],
  templateUrl: './mobile-nav.component.html',
  styleUrls: ['./mobile-nav.component.scss']
})
export class MobileNavComponent implements OnInit {
  isAuthenticated$: Observable<boolean>;

  tabs: NavTab[] = [
    { label: 'Home', icon: 'home_outline', activeIcon: 'home', route: '/home' },
    { label: 'Stokvels', icon: 'groups_outline', activeIcon: 'groups', route: '/stokvels' },
    { label: 'Wallet', icon: 'account_balance_wallet', activeIcon: 'account_balance_wallet', route: '/wallet', requiresAuth: true },
    { label: 'Dashboard', icon: 'dashboard_outline', activeIcon: 'dashboard', route: '/dashboard', requiresAuth: true },
    { label: 'Profile', icon: 'person_outline', activeIcon: 'person', route: '/profile', requiresAuth: true },
  ];

  constructor(
    public router: Router,
    public auth: AuthService,
    private platformService: MobilePlatformService
  ) {
    this.isAuthenticated$ = auth.isAuthenticated$;
  }

  ngOnInit(): void {}

  isActive(route: string): boolean {
    const currentUrl = this.router.url.split('?')[0];
    if (route === '/home') {
      return currentUrl === '/home' || currentUrl === '/';
    }
    return currentUrl === route || currentUrl.startsWith(route + '/');
  }

  async navigate(tab: NavTab, isAuthenticated: boolean): Promise<void> {
    await this.platformService.triggerHaptic('light');
    if (tab.requiresAuth && !isAuthenticated) {
      this.auth.loginWithRedirect({ appState: { target: tab.route } });
      return;
    }
    this.router.navigate([tab.route]);
  }
}

