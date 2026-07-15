import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../../../material.module';
import { AdminService } from '../../../services/admin/admin.service';
import { AdminStokvel } from '../../../models/admin';

@Component({
  selector: 'app-admin-stokvels',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, MaterialModule],
  templateUrl: './admin-stokvels.component.html',
  styleUrls: ['./admin-stokvels.component.scss']
})
export class AdminStokvelsComponent implements OnInit {
  stokvels: AdminStokvel[] = [];
  loading = true;
  search = '';
  page = 0;
  size = 20;
  totalElements = 0;
  totalPages = 0;
  expandedId: number | null = null;
  searchTimeout: any;

  constructor(private adminService: AdminService) {}

  ngOnInit(): void { this.load(); }

  load(): void {
    this.loading = true;
    this.adminService.getStokvels(this.search, this.page, this.size).subscribe({
      next: res => {
        this.stokvels = res.content;
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

  toggleExpand(id: number): void {
    this.expandedId = this.expandedId === id ? null : id;
  }

  prevPage(): void { if (this.page > 0) { this.page--; this.load(); } }
  nextPage(): void { if (this.page < this.totalPages - 1) { this.page++; this.load(); } }

  statusClass(s: string): string {
    return s?.toLowerCase() === 'active' ? 'status-active' : 'status-inactive';
  }

  adminNames(stokvel: AdminStokvel): string {
    return stokvel.admins?.map(a => a.name || a.email).join(', ') || '—';
  }

  contributionStr(n: number): string {
    if (!n) return 'R0';
    return 'R' + n.toLocaleString('en-ZA', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  }
}

