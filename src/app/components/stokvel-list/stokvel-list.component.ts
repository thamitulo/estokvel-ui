import { Component, OnInit, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { PageEvent } from '@angular/material/paginator';
import { forkJoin, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MaterialModule } from '../../material.module';
import { StokvelService } from '../../services/stokvel/stokvel.service';
import { StokvelResponse } from '../../models/stokvel';
import { StokvelUtils } from '../../utils/StokvelUtils';
import { UserService } from '../../services/user/user-service.service';
import { JoinStokvelModalComponent } from '../stokvel-join/join-stokvel-modal';

@Component({
  selector: 'app-stokvel-list',
  imports: [CommonModule, ReactiveFormsModule, RouterModule, MaterialModule],
  templateUrl: './stokvel-list.component.html',
  standalone: true,
  styleUrls: ['./stokvel-list.component.scss']
})
export class StokvelListComponent implements OnInit {
  stokvelService = inject(StokvelService);
  dialog         = inject(MatDialog);
  snack          = inject(MatSnackBar);
  router         = inject(Router);
  userService    = inject(UserService);

  sourceStokvels:   StokvelResponse[] = [];
  filteredStokvels: StokvelResponse[] = [];
  pagedStokvels:    StokvelResponse[] = [];

  /** IDs of stokvels the current user is already a member/admin of */
  joinedStokvelIds = new Set<number>();
  /** IDs of stokvels the current user is an admin of */
  adminStokvelIds  = new Set<number>();

  pageIndex = 0;
  pageSize  = 9;
  isLoading = false;
  viewMode: 'grid' | 'list' = 'grid';
  activeFilter = 'ALL';

  searchControl = new FormControl('');

  // ── Hero stats
  get totalMembers(): number {
    // totalMembers = adminCount + memberCount (everyone in the stokvel)
    return this.sourceStokvels.reduce((s, st) => s + (st.totalMembers ?? (st.memberCount ?? 0) + (st.adminCount ?? 0)), 0);
  }
  get totalMonthly(): number {
    return this.sourceStokvels.reduce((s, st) => s + (st.monthlyContribution ?? 0), 0);
  }

  ngOnInit(): void {
    this.isLoading = true;

    // Load public stokvels + user membership data in parallel
    forkJoin({
      public:  this.stokvelService.getPublicStokvels(),
      joined:  this.stokvelService.getJoinedStokvelIds().pipe(catchError(() => of([] as number[]))),
      admin:   this.stokvelService.getAdminStokvelIds().pipe(catchError(() => of([] as number[])))
    }).subscribe({
      next: ({ public: response, joined, admin }) => {
        this.joinedStokvelIds = new Set(joined);
        this.adminStokvelIds  = new Set(admin);
        this.sourceStokvels   = response.content;
        this.filteredStokvels = [...response.content];
        this.updatePagedData();
        this.isLoading = false;
      },
      error: () => { this.isLoading = false; }
    });

    this.searchControl.valueChanges.subscribe(value => {
      this.applyFilters(value ?? '');
    });
  }

  // ── Membership helpers
  isAdmin(stokvel: StokvelResponse): boolean   { return this.adminStokvelIds.has(stokvel.id); }
  isMember(stokvel: StokvelResponse): boolean  { return this.joinedStokvelIds.has(stokvel.id); }
  isPublic(stokvel: StokvelResponse): boolean  { return stokvel.privacy?.toUpperCase() === 'PUBLIC'; }
  isFull(stokvel: StokvelResponse): boolean {
    const total = stokvel.totalMembers ?? (stokvel.memberCount + stokvel.adminCount);
    return total >= stokvel.maxMembers;
  }

  /** Non-member can request to join only if the stokvel is PUBLIC and not full */
  canRequestJoin(stokvel: StokvelResponse): boolean {
    return !this.isMember(stokvel) && this.isPublic(stokvel) && !this.isFull(stokvel);
  }

  setFilter(type: string): void {
    this.activeFilter = type;
    this.applyFilters(this.searchControl.value ?? '');
  }

  private applyFilters(search: string): void {
    const term = search.trim().toLowerCase();
    this.filteredStokvels = this.sourceStokvels.filter(s => {
      const matchesSearch = !term ||
        s.name?.toLowerCase().includes(term) ||
        s.description?.toLowerCase().includes(term) ||
        s.type?.toLowerCase().includes(term);
      const matchesType = this.activeFilter === 'ALL' ||
        s.type?.toUpperCase() === this.activeFilter;
      return matchesSearch && matchesType;
    });
    this.pageIndex = 0;
    this.updatePagedData();
  }

  updatePagedData(): void {
    const start = this.pageIndex * this.pageSize;
    this.pagedStokvels = this.filteredStokvels.slice(start, start + this.pageSize);
  }

  pageChange(event: PageEvent): void {
    this.pageIndex = event.pageIndex;
    this.pageSize  = event.pageSize;
    this.updatePagedData();
  }

  trackById(_: number, s: StokvelResponse): number { return s.id; }

  // ── StokvelUtils delegates
  progress(stokvel: StokvelResponse): number        { return StokvelUtils.getProgress(stokvel); }
  progressColor(stokvel: StokvelResponse): string   { return StokvelUtils.progressColor(stokvel); }
  getCollectedAmount(stokvel: StokvelResponse): number { return StokvelUtils.getCollectedAmount(stokvel); }

  getSeatsFillPercent(stokvel: StokvelResponse): number {
    if (!stokvel.maxMembers) return 0;
    const total = stokvel.totalMembers ?? (stokvel.memberCount + stokvel.adminCount);
    return Math.min((total / stokvel.maxMembers) * 100, 100);
  }

  // ── Type helpers
  getTypeIcon(type: string): string {
    const map: Record<string, string> = {
      INVESTMENT: 'trending_up',
      PROPERTY:   'home',
      FAMILY:     'diversity_3',
      BURIAL:     'favorite',
      ROTATIONAL: 'autorenew',
    };
    return map[type?.toUpperCase()] ?? 'savings';
  }

  getTypeLabel(type: string): string {
    const map: Record<string, string> = {
      INVESTMENT: 'Investment Club',
      PROPERTY:   'Property Stokvel',
      FAMILY:     'Family Fund',
      BURIAL:     'Burial Society',
      ROTATIONAL: 'Rotational Savings',
    };
    return map[type?.toUpperCase()] ?? type;
  }

  getTypeBannerClass(type: string): string {
    const map: Record<string, string> = {
      INVESTMENT: 'banner-investment',
      PROPERTY:   'banner-property',
      FAMILY:     'banner-family',
      BURIAL:     'banner-burial',
      ROTATIONAL: 'banner-rotational',
    };
    return map[type?.toUpperCase()] ?? 'banner-default';
  }

  // ── Actions
  viewDetail(stokvel: StokvelResponse): void {
    this.router.navigate(['/stokvels', stokvel.id]);
  }

  manageStokvel(stokvel: StokvelResponse): void {
    this.router.navigate(['/stokvels', stokvel.id, 'manage']);
  }

  joinStokvel(stokvel: StokvelResponse): void {
    this.userService.user$.subscribe(user => {
      const dialogRef = this.dialog.open(JoinStokvelModalComponent, {
        width: '500px',
        data: {
          stokvelId: stokvel.id,
          stokvelName: stokvel.name,
          currentUserId: user?.id ?? '',
          userProfile: user,
          monthlyContribution: stokvel.monthlyContribution
        }
      });
      dialogRef.afterClosed().subscribe(result => {
        if (result) this.snack.open('Join request submitted!', 'Close', { duration: 4000 });
      });
    });
  }

  leaveStokvel(stokvel: StokvelResponse): void {
    const confirmed = window.confirm(
      `Are you sure you want to leave "${stokvel.name}"?\nThis action cannot be undone.`
    );
    if (!confirmed) return;

    this.stokvelService.leaveStokvel(stokvel.id).subscribe({
      next: () => {
        this.joinedStokvelIds.delete(stokvel.id);
        this.snack.open(`You have left "${stokvel.name}"`, 'Close', { duration: 4000 });
      },
      error: (err) => {
        const msg = err?.error?.message || 'Could not leave stokvel. You may be the last admin.';
        this.snack.open(msg, 'Close', { duration: 5000, panelClass: 'error-snackbar' });
      }
    });
  }

  messageAdmins(stokvel: StokvelResponse): void {
    if (stokvel.adminMembers?.length) {
      const emails = stokvel.adminMembers.map(a => a.userEmail).join(',');
      window.open(`mailto:${emails}?subject=Re: ${stokvel.name}&body=Hi admin,`, '_blank');
    } else {
      this.snack.open('No admin contact found for this stokvel.', 'Close', { duration: 3000 });
    }
  }
}
