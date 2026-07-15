import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { MaterialModule } from '../../../material.module';
import { AdminService } from '../../../services/admin/admin.service';

@Component({
  selector: 'app-admin-layout',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterOutlet, MaterialModule],
  template: `
    <div class="admin-shell">

      <!-- Sidebar -->
      <aside class="admin-sidebar">
        <div class="sidebar-brand">
          <mat-icon class="brand-icon">shield</mat-icon>
          <span>eStokvel<br><strong>Backoffice</strong></span>
        </div>

        <div class="admin-user-chip" *ngIf="user">
          <div class="admin-avatar">{{ initials }}</div>
          <div class="admin-user-info">
            <span class="admin-name">{{ user.displayName }}</span>
            <span class="admin-role">Super Admin</span>
          </div>
        </div>

        <nav class="sidebar-nav">
          <a class="nav-item" routerLink="/admin/dashboard" routerLinkActive="active">
            <mat-icon>dashboard</mat-icon><span>Dashboard</span>
          </a>
          <a class="nav-item" routerLink="/admin/stokvels" routerLinkActive="active">
            <mat-icon>account_balance</mat-icon><span>Stokvels</span>
          </a>
          <a class="nav-item" routerLink="/admin/users" routerLinkActive="active">
            <mat-icon>people</mat-icon><span>Users</span>
          </a>
        </nav>

        <div class="sidebar-footer">
          <button class="logout-btn" (click)="logout()">
            <mat-icon>logout</mat-icon><span>Sign Out</span>
          </button>
        </div>
      </aside>

      <!-- Main content area -->
      <main class="admin-main">
        <router-outlet></router-outlet>
      </main>
    </div>
  `,
  styles: [`
    .admin-shell { display: flex; min-height: 100vh; background: #f0f2f5; }

    /* ── Sidebar ── */
    .admin-sidebar {
      width: 240px;
      min-height: 100vh;
      background: #1a1a2e;
      color: #fff;
      display: flex;
      flex-direction: column;
      position: fixed;
      top: 0; left: 0; bottom: 0;
      z-index: 100;
    }

    .sidebar-brand {
      display: flex; align-items: center; gap: 10px;
      padding: 24px 20px;
      border-bottom: 1px solid rgba(255,255,255,.1);
      font-size: 14px; line-height: 1.4;
      .brand-icon { font-size: 28px; height: 28px; width: 28px; color: #4ade80; }
      strong { font-size: 15px; }
    }

    .admin-user-chip {
      display: flex; align-items: center; gap: 10px;
      padding: 16px 20px;
      border-bottom: 1px solid rgba(255,255,255,.1);
    }

    .admin-avatar {
      width: 36px; height: 36px; border-radius: 50%;
      background: #16213e; color: #4ade80;
      display: flex; align-items: center; justify-content: center;
      font-size: 13px; font-weight: 700; flex-shrink: 0;
    }

    .admin-user-info { display: flex; flex-direction: column; overflow: hidden; }
    .admin-name { font-size: 13px; font-weight: 600; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
    .admin-role { font-size: 11px; color: #4ade80; }

    .sidebar-nav {
      flex: 1;
      padding: 16px 0;
    }

    .nav-item {
      display: flex; align-items: center; gap: 12px;
      padding: 12px 20px;
      color: rgba(255,255,255,.7);
      text-decoration: none;
      font-size: 14px;
      border-left: 3px solid transparent;
      transition: all .15s;

      &:hover { color: #fff; background: rgba(255,255,255,.06); }

      &.active {
        color: #4ade80;
        border-left-color: #4ade80;
        background: rgba(74,222,128,.08);
      }

      mat-icon { font-size: 20px; height: 20px; width: 20px; }
    }

    .sidebar-footer {
      padding: 16px 20px;
      border-top: 1px solid rgba(255,255,255,.1);
    }

    .logout-btn {
      display: flex; align-items: center; gap: 10px;
      background: none; border: none;
      color: rgba(255,255,255,.6);
      font-size: 14px; cursor: pointer;
      padding: 8px 0; width: 100%;
      transition: color .15s;

      &:hover { color: #ff6b6b; }
      mat-icon { font-size: 20px; height: 20px; width: 20px; }
    }

    /* ── Main ── */
    .admin-main {
      margin-left: 240px;
      flex: 1;
      padding: 0;
      min-height: 100vh;
    }
  `]
})
export class AdminLayoutComponent implements OnInit {
  user: { username: string; displayName: string; email: string } | null = null;

  constructor(private adminService: AdminService, private router: Router) {}

  ngOnInit(): void {
    this.user = this.adminService.currentUser;
  }

  get initials(): string {
    if (!this.user?.displayName) return 'SA';
    return this.user.displayName.split(' ').map(p => p[0]).join('').substring(0, 2).toUpperCase();
  }

  logout(): void {
    this.adminService.logout();
    this.router.navigate(['/admin/login']);
  }
}

