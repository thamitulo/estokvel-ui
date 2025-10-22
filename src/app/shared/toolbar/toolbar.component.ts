import { Component, OnInit } from '@angular/core';
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

  menuItems = [
    { label: 'Home', route: '/home' },
    { label: 'My Stokvels', route: '/stokvels' },
    { label: 'About', route: '/about' },
    { label: 'Contact', route: '/contact' }
  ];

  constructor(public auth: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.auth.user$.subscribe(user => {
      this.userProfile = user;
    });
  }

  toggleSidenav() {
    this.sidenavOpened = !this.sidenavOpened;
  }

  navigate(route: string) {
    this.router.navigate([route]);
    this.sidenavOpened = false;
  }

  login() {
    this.auth.loginWithRedirect();
  }

  logout() {
    this.auth.logout({ logoutParams: { returnTo: window.location.origin } });
  }
}
