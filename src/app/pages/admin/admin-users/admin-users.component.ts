import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../../../material.module';
import { AdminService } from '../../../services/admin/admin.service';
import { AdminUser } from '../../../models/admin';

@Component({
  selector: 'app-admin-users',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, MaterialModule],
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.scss']
})
export class AdminUsersComponent implements OnInit {
  users: AdminUser[] = [];
  mirrorUser: AdminUser | null = null;
  loading = true;
  mirrorLoading = false;
  search = '';
  page = 0;
  size = 20;
  totalElements = 0;
  totalPages = 0;
  searchTimeout: any;

  constructor(private adminService: AdminService) {}

  ngOnInit(): void { this.load(); }

  load(): void {
    this.loading = true;
    this.adminService.getUsers(this.search, this.page, this.size).subscribe({
      next: res => {
        this.users = res.content;
        this.totalElements = res.totalElements;
        this.totalPages = res.totalPages;
        this.loading = false;
      },
      error: () => { this.loading = false; }
    });
  }

  onSearch(): void {
    clearTimeout(this.searchTimeout);
    this.searchTimeout = setTimeout(() => { this.page = 0; this.load(); }, 350);
  }

  openMirror(user: AdminUser): void {
    this.mirrorLoading = true;
    this.adminService.mirrorUser(user.auth0Id).subscribe({
      next: u => { this.mirrorUser = u; this.mirrorLoading = false; },
      error: () => { this.mirrorLoading = false; }
    });
  }

  closeMirror(): void { this.mirrorUser = null; }

  prevPage(): void { if (this.page > 0) { this.page--; this.load(); } }
  nextPage(): void { if (this.page < this.totalPages - 1) { this.page++; this.load(); } }

  initials(name: string): string {
    return (name || '?').split(' ').map(p => p[0]).join('').substring(0, 2).toUpperCase();
  }

  lastLogin(u: AdminUser): string {
    if (!u.lastLoginAt) return 'Never';
    const d = new Date(u.lastLoginAt);
    const now = new Date();
    const diffH = Math.floor((now.getTime() - d.getTime()) / 3_600_000);
    if (diffH < 1)   return 'Just now';
    if (diffH < 24)  return diffH + 'h ago';
    const diffD = Math.floor(diffH / 24);
    if (diffD < 30)  return diffD + 'd ago';
    return d.toLocaleDateString('en-ZA');
  }

  money(n: number): string {
    return 'R' + (n || 0).toLocaleString('en-ZA', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  }

  kycClass(status: string): string {
    switch (status) {
      case 'VERIFIED': return 'kyc-ok';
      case 'PENDING':  return 'kyc-pending';
      case 'REJECTED': return 'kyc-fail';
      default:         return 'kyc-none';
    }
  }

  tierClass(tier: string): string {
    if (tier?.toUpperCase() === 'PRO')      return 'tier-pro';
    if (tier?.toUpperCase() === 'BUSINESS') return 'tier-biz';
    return 'tier-free';
  }
}

