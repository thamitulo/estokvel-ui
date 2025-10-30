import {Component, HostListener, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  sidenavOpened = false;
  userProfile: any;
  isScrolled = false;

  menuItems = [
    { label: 'Start', route: '/start' },
    { label: 'Pricing', route: '/pricing' },
    { label: 'About', route: '/about' },
    { label: 'Blog', route: '/blog' },
    { label: 'Contact', route: '/contact' }
  ];

  constructor(public auth: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.auth.user$.subscribe(user => {
      this.userProfile = user;
    });


    // Debug: Check if auth service is working
    this.auth.isAuthenticated$.subscribe(isAuthenticated => {
      console.log('Is Authenticated:', isAuthenticated);
    });

    this.auth.error$.subscribe(error => {
      console.error('Auth Error:', error);
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
    console.log('Login button clicked'); // Debug log
    this.auth.loginWithRedirect({
      appState: { target: this.router.url }
    }).subscribe({
      next: (result) => {
        console.log('Login redirect initiated', result);
      },
      error: (error) => {
        console.error('Login error:', error);
      }
    });
  }

  logout() {
    this.auth.logout({ logoutParams: { returnTo: window.location.origin } });
  }

  get visibleMenuItems() {
    return this.menuItems.filter(item => item.label !== 'My Stokvels' || this.auth.user$);
  }
}
