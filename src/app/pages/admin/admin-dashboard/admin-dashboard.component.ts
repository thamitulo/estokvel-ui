import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../../../material.module';
import { AdminService } from '../../../services/admin/admin.service';
import { PlatformStats, TopStokvel } from '../../../models/admin';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule, MaterialModule],
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {
  stats: PlatformStats | null = null;
  loading = true;
  error = '';

  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    this.adminService.getStats().subscribe({
      next: s => { this.stats = s; this.loading = false; },
      error: () => { this.error = 'Failed to load stats'; this.loading = false; }
    });
  }

  fmt(n: number | undefined | null): string {
    if (n == null) return '0';
    if (n >= 1_000_000) return (n / 1_000_000).toFixed(1) + 'M';
    if (n >= 1_000)     return (n / 1_000).toFixed(1) + 'k';
    return n.toFixed(0);
  }

  money(n: number | undefined | null): string {
    if (n == null) return 'R0';
    if (n >= 1_000_000) return 'R' + (n / 1_000_000).toFixed(2) + 'M';
    if (n >= 1_000)     return 'R' + (n / 1_000).toFixed(1) + 'k';
    return 'R' + n.toFixed(2);
  }

  tierPercent(tier: 'PRO' | 'BUSINESS'): number {
    if (!this.stats || !this.stats.totalUsers) return 0;
    const n = tier === 'PRO' ? this.stats.proSubscribers : this.stats.businessSubscribers;
    return Math.round((n / this.stats.totalUsers) * 100);
  }
}

