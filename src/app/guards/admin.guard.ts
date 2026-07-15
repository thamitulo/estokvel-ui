import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AdminService } from '../services/admin/admin.service';

@Injectable({ providedIn: 'root' })
export class AdminGuard implements CanActivate {
  constructor(private admin: AdminService, private router: Router) {}

  canActivate(): boolean {
    if (this.admin.hasToken()) return true;
    this.router.navigate(['/admin/login']);
    return false;
  }
}

