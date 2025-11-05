import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { Observable } from 'rxjs';
import {AppUser, UserService} from "../../services/user/user-service.service";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  standalone: false
})
export class ToolbarComponent implements OnInit {
  sidenavOpened = false;
  isScrolled = false;
  user$: Observable<AppUser | null>;
  userName$: Observable<string | null>;
  isLoggedIn = false;

  menuItems = [
    { label: 'Home', route: '/home' },
    { label: 'Portfolio', route: '/dashboard' },
    { label: 'Refer & Earn', route: '/refer-earn' },
    { label: 'About', route: '/about-us' },
    { label: 'Blog', route: '/blog' },
    { label: 'Contact', route: '/contact' }
  ];

  constructor(
    private router: Router,
    public auth: AuthService,
    private userService: UserService
  ) {
    this.user$ = this.userService.user$;
    this.userName$ = this.userService.userName$;
  }

  ngOnInit(): void {
    this.auth.isAuthenticated$.subscribe(isAuth => {
      this.isLoggedIn = isAuth;
    });
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || 0;
    this.isScrolled = scrollPosition > 100;
  }

  toggleSidenav() {
    this.sidenavOpened = !this.sidenavOpened;
  }

  navigate(route: string) {
    this.router.navigate([route]);
    this.sidenavOpened = false;
  }

  login() {
    this.auth.loginWithRedirect({ appState: { target: this.router.url } });
  }

  logout() {
    this.auth.logout({ logoutParams: { returnTo: '' } });
  }

  get visibleMenuItems() {
    return this.menuItems.filter(item => {
      if (item.label === 'Portfolio') {
        return this.isLoggedIn;
      }
      return true;
    });
  }

  isActive(route: string): boolean {
    if (route === '/' || route === '/home') {
      return false;
    }

    const currentUrl = this.router.url.split('?')[0];
    return currentUrl === route || currentUrl.startsWith(route + '/');
  }
}
