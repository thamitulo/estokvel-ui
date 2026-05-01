import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { MaterialModule } from '../../material.module';
import { Observable, of } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AppUser, UserService } from '../../services/user/user-service.service';
import { StokvelUtils } from '../../utils/StokvelUtils';
import { StokvelResponse, StokvelType } from '../../models/stokvel';
import { DashboardService, DashboardData } from '../../services/dashboard/dashboard.service';
import { MatDialog } from '@angular/material/dialog';
import {
  ContributionDialogComponent,
  ContributionDialogData
} from '../contribution-dialog/contribution-dialog.component';

export interface Activity {
  type: 'contribution' | 'payout' | 'invitation' | 'update';
  description: string;
  stokvelName: string;
  date: Date;
  amount?: number;
}

@Component({
  selector: 'dashboard',
  imports: [CommonModule, RouterModule, MaterialModule],
  templateUrl: './dashboard.component.html',
  standalone: true,
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  user$: Observable<AppUser | null>;
  userName$: Observable<string | null>;

  dashboardData$: Observable<DashboardData>;

  // Stat card observables
  totalPortfolioValue$: Observable<number>;
  portfolioChange$: Observable<number>;
  portfolioChangePercent$: Observable<number>;
  userStokvelsCount$: Observable<number>;
  newlyJoinedStokvelCount$: Observable<number>;
  percentageChangeForJoinedStokvels$: Observable<number>;
  totalContributions$: Observable<number>;
  monthlyChange$: Observable<number>;
  nextPayout$: Observable<number>;
  daysUntilPayout$: Observable<number>;
  nextPayoutStokvelName$: Observable<string | null>;
  totalGrowth$: Observable<number>;
  totalGrowthPercent$: Observable<number>;
  totalSavings$: Observable<number>;
  portfolioDistribution$: Observable<any[]>;
  recentActivities$: Observable<any[]>;
  userStokvels$: Observable<StokvelResponse[]>;

  // Hero state
  hasStokvels$: Observable<boolean>;
  heroEmoji$: Observable<string>;
  heroSubtitle$: Observable<string>;
  heroSubtitleClass$: Observable<string>;

  constructor(
    private router: Router,
    private userService: UserService,
    private dashboardService: DashboardService,
    private dialog: MatDialog
  ) {
    this.user$ = this.userService.user$.pipe(shareReplay(1));
    this.userName$ = this.userService.userName$.pipe(shareReplay(1));

    this.dashboardData$ = this.dashboardService.getDashboardData().pipe(shareReplay(1));

    this.totalPortfolioValue$ = this.dashboardData$.pipe(map(d => d.totalPortfolioValue), shareReplay(1));
    this.portfolioChange$     = this.dashboardData$.pipe(map(d => d.portfolioChange), shareReplay(1));
    this.portfolioChangePercent$ = this.dashboardData$.pipe(map(d => d.portfolioChangePercent), shareReplay(1));
    this.userStokvelsCount$   = this.dashboardData$.pipe(map(d => d.userStokvelsCount), shareReplay(1));
    this.newlyJoinedStokvelCount$ = this.dashboardData$.pipe(map(d => d.newlyJoinedStokvelCount), shareReplay(1));
    this.percentageChangeForJoinedStokvels$ = this.dashboardData$.pipe(map(d => d.percentageChangeForJoinedStokvels), shareReplay(1));
    this.totalContributions$  = this.dashboardData$.pipe(map(d => d.totalContributions), shareReplay(1));
    this.monthlyChange$       = this.dashboardData$.pipe(map(d => d.monthlyChange), shareReplay(1));
    this.nextPayout$          = this.dashboardData$.pipe(map(d => d.nextPayout), shareReplay(1));
    this.daysUntilPayout$     = this.dashboardData$.pipe(map(d => d.daysUntilPayout), shareReplay(1));
    this.nextPayoutStokvelName$ = this.dashboardData$.pipe(map(d => d.nextPayoutStokvelName), shareReplay(1));
    this.totalGrowth$         = this.dashboardData$.pipe(map(d => d.totalGrowth), shareReplay(1));
    this.totalGrowthPercent$  = this.dashboardData$.pipe(map(d => d.totalGrowthPercent), shareReplay(1));
    this.totalSavings$        = this.dashboardData$.pipe(map(d => d.totalSavings), shareReplay(1));
    this.portfolioDistribution$ = this.dashboardData$.pipe(map(d => d.portfolioDistribution), shareReplay(1));
    this.recentActivities$    = this.dashboardData$.pipe(map(d => d.recentActivities), shareReplay(1));
    this.userStokvels$        = this.dashboardData$.pipe(map(d => d.userStokvels), shareReplay(1));

    this.hasStokvels$ = this.userStokvelsCount$.pipe(map(c => c > 0), shareReplay(1));

    this.heroEmoji$ = this.userStokvelsCount$.pipe(
      map(c => c === 0 ? '👋 Hello there!' : '🎉 Welcome back!'), shareReplay(1));

    this.heroSubtitle$ = this.userStokvelsCount$.pipe(
      map(c => {
        if (c === 0) return "You haven't joined any stokvels yet — let's change that!";
        if (c === 1) return 'Great start! Your first stokvel is active.';
        if (c < 4)  return `You're part of ${c} stokvels — keep it up!`;
        return `Your stokvel portfolio is growing beautifully ✨`;
      }), shareReplay(1));

    this.heroSubtitleClass$ = this.userStokvelsCount$.pipe(
      map(c => c === 0 ? 'subtitle-new' : 'subtitle-active'), shareReplay(1));
  }

  ngOnInit(): void {}

  // ── Preview / demo data shown when user has no stokvels yet ─────────────
  readonly previewSegments = [
    { name: 'Savings Stokvel',    pct: 36, color: '#3B82F6', amount: 18000 },
    { name: 'Investment Club',    pct: 27, color: '#10B981', amount: 13500 },
    { name: 'Family Fund',        pct: 22, color: '#F59E0B', amount: 11000 },
    { name: 'Burial Society',     pct: 15, color: '#8B5CF6', amount:  7500 },
  ];

  readonly previewHighlights = [
    { role: '⭐ Admin', name: 'Mabogo Dinku Stokvel', monthly: 1500, members: 8, max: 10 },
    { role: '👤 Member', name: 'Kasi Investment Club', monthly: 3000, members: 5, max: 12 },
    { role: '👤 Member', name: 'Family Burial Society', monthly: 500,  members: 20, max: 30 },
  ];

  // ── Stokvel helpers ───────────────────────────────────────────────────────
  getStokvelProgress(stokvel: StokvelResponse): number { return StokvelUtils.getProgress(stokvel); }
  getStokvelCollectedAmount(stokvel: StokvelResponse): number { return StokvelUtils.getCollectedAmount(stokvel); }
  getStokvelRemainingAmount(stokvel: StokvelResponse): number { return StokvelUtils.getRemainingAmount(stokvel); }
  isStokvelTargetReached(stokvel: StokvelResponse): boolean { return StokvelUtils.isTargetReached(stokvel); }
  getStokvelProgressColor(stokvel: StokvelResponse): string { return StokvelUtils.progressColor(stokvel); }
  getPortfolioAmount(percentage: number): number { return (percentage / 100) * 250000; }

  getStokvelImageClass(type: string): string {
    const m: Record<string, string> = {
      INVESTMENT: 'investment', PROPERTY: 'property',
      FAMILY: 'family', BURIAL: 'burial', MONTHLY: 'monthly'
    };
    return m[type?.toUpperCase()] || 'monthly';
  }

  getStokvelTypeDisplayName(typeName: string): string { return StokvelUtils.getStokvelTypeDisplayName(typeName); }

  getActivityIcon(type: string): string {
    const m: Record<string, string> = {
      contribution: 'payments', payout: 'savings',
      invitation: 'group_add', update: 'update',
      member_joined: 'person_add', stokvel_created: 'add_circle'
    };
    return m[type] || 'info';
  }

  // ── Contribution dialog ──────────────────────────────────────────────────
  makeContribution(): void {
    this.userStokvels$.subscribe(stokvels => {
      this.openContributionDialog(stokvels, undefined);
    }).unsubscribe();
  }

  makeStokvelContribution(stokvel: StokvelResponse): void {
    this.userStokvels$.subscribe(stokvels => {
      this.openContributionDialog(stokvels, stokvel);
    }).unsubscribe();
  }

  private openContributionDialog(stokvels: StokvelResponse[], preselected?: StokvelResponse): void {
    const ref = this.dialog.open(ContributionDialogComponent, {
      data: { stokvels, preselectedStokvel: preselected } as ContributionDialogData,
      width: '520px',
      maxWidth: '95vw',
      disableClose: false,
      panelClass: 'contribution-dialog-panel'
    });

    ref.afterClosed().subscribe(result => {
      if (result?.success) {
        // Refresh dashboard data to reflect new contribution
        this.dashboardData$ = this.dashboardService.refreshDashboard().pipe(shareReplay(1));
        this.totalContributions$ = this.dashboardData$.pipe(map(d => d.totalContributions), shareReplay(1));
        this.recentActivities$   = this.dashboardData$.pipe(map(d => d.recentActivities), shareReplay(1));
        this.userStokvels$       = this.dashboardData$.pipe(map(d => d.userStokvels), shareReplay(1));
      }
    });
  }

  // ── Navigation actions ───────────────────────────────────────────────────
  createNewStokvel(): void { this.router.navigate(['/create-stokvel']); }
  joinStokvel(): void { this.router.navigate(['/stokvels']); }
  viewReports(): void { this.router.navigate(['/wallet']); }
  openWallet(): void { this.router.navigate(['/wallet']); }
  viewStokvelDetails(stokvel: StokvelResponse): void { this.router.navigate(['/stokvels', stokvel.id]); }
  viewAllActivity(): void { this.router.navigate(['/notifications']); }
  viewAllStokvels(): void { this.router.navigate(['/stokvels']); }

  protected readonly StokvelType = StokvelType;
}
