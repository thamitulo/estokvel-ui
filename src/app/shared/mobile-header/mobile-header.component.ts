import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatBadgeModule } from '@angular/material/badge';
import { MatDividerModule } from '@angular/material/divider';
import { AuthService } from '@auth0/auth0-angular';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { NotificationBellComponent } from '../../components/notifications/notification-bell/notification-bell';

@Component({
  selector: 'app-mobile-header',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatBadgeModule,
    MatDividerModule,
    NotificationBellComponent
  ],
  templateUrl: './mobile-header.component.html',
  styleUrls: ['./mobile-header.component.scss']
})
export class MobileHeaderComponent {
  isAuthenticated$: Observable<boolean>;
  user$: Observable<any>;

  constructor(public auth: AuthService, private router: Router) {
    this.isAuthenticated$ = auth.isAuthenticated$;
    this.user$ = auth.user$;
  }

  login(): void {
    this.auth.loginWithRedirect({ appState: { target: this.router.url } });
  }

  logout(): void {
    this.auth.logout({ logoutParams: { returnTo: window.location.origin } });
  }

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }
}

