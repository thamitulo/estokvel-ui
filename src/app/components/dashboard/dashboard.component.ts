import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { MaterialModule } from '../../material.module';
import { Observable, of, combineLatest } from 'rxjs';
import { map, switchMap, shareReplay, take } from 'rxjs/operators';
import { AppUser, UserService } from "../../services/user/user-service.service";
import { StokvelUtils } from "../../utils/StokvelUtils";
import { StokvelResponse, StokvelType } from "../../models/stokvel";
import { StokvelService } from "../../services/stokvel/stokvel.service";
import { DashboardService, DashboardData } from '../../services/dashboard/dashboard.service';

export interface Activity {
  type: 'contribution' | 'payout' | 'invitation' | 'update';
  description: string;
  stokvelName: string;
  date: Date;
  amount?: number;
}

export interface PortfolioSegment {
  name: string;
  percentage: number;
  color: string;
  rotation: number;
  opacity: number;
  isOwner?: boolean;
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

  // Use DashboardService as the single source of truth
  dashboardData$: Observable<DashboardData>;

  // Individual observables for template with caching
  totalPortfolioValue$: Observable<number>;
  portfolioChange$: Observable<number>;
  portfolioChangePercent$: Observable<number>;
  userStokvelsCount$: Observable<number>;
  totalContributions$: Observable<number>;
  monthlyChange$: Observable<number>;
  nextPayout$: Observable<number>;
  daysUntilPayout$: Observable<number>;
  totalSavings$: Observable<number>;
  portfolioDistribution$: Observable<any[]>;
  recentActivities$: Observable<any[]>;

  // User stokvels with caching
  userStokvels$: Observable<StokvelResponse[]>;

  ngOnInit(): void {
    console.log('Dashboard component initialized');
  }

  constructor(
    private router: Router,
    private userService: UserService,
    private stokvelService: StokvelService,
    private dashboardService: DashboardService
  ) {
    this.user$ = this.userService.user$.pipe(shareReplay(1));
    this.userName$ = this.userService.userName$.pipe(shareReplay(1));

    // Initialize dashboard data with caching
    this.dashboardData$ = this.dashboardService.getDashboardData().pipe(
      shareReplay(1)
    );

    // Set up individual observables with caching
    this.totalPortfolioValue$ = this.dashboardData$.pipe(
      map(data => data.totalPortfolioValue),
      shareReplay(1)
    );
    this.portfolioChange$ = this.dashboardData$.pipe(
      map(data => data.portfolioChange),
      shareReplay(1)
    );
    this.portfolioChangePercent$ = this.dashboardData$.pipe(
      map(data => data.portfolioChangePercent),
      shareReplay(1)
    );
    this.userStokvelsCount$ = this.dashboardData$.pipe(
      map(data => data.userStokvelsCount),
      shareReplay(1)
    );
    this.totalContributions$ = this.dashboardData$.pipe(
      map(data => data.totalContributions),
      shareReplay(1)
    );
    this.monthlyChange$ = this.dashboardData$.pipe(
      map(data => data.monthlyChange),
      shareReplay(1)
    );
    this.nextPayout$ = this.dashboardData$.pipe(
      map(data => data.nextPayout),
      shareReplay(1)
    );
    this.daysUntilPayout$ = this.dashboardData$.pipe(
      map(data => data.daysUntilPayout),
      shareReplay(1)
    );
    this.totalSavings$ = this.dashboardData$.pipe(
      map(data => data.totalSavings),
      shareReplay(1)
    );
    this.portfolioDistribution$ = this.dashboardData$.pipe(
      map(data => data.portfolioDistribution),
      shareReplay(1)
    );
    this.recentActivities$ = this.dashboardData$.pipe(
      map(data => data.recentActivities),
      shareReplay(1)
    );

    // User stokvels with caching and proper ownership check
    this.userStokvels$ = this.user$.pipe(
      switchMap(user => {
        if (user?.id) {
          return this.stokvelService.getUserStokvels(user.id).pipe(
            take(1), // Ensure only one request
            map(stokvels => stokvels.map(stokvel => ({
              ...stokvel,
              isOwner: stokvel.createdBy === user.id
            }))),
            shareReplay(1)
          );
        } else {
          return of([]);
        }
      })
    );
  }

  // Enhanced helper methods that use your StokvelUtils
  getPortfolioAmount(percentage: number): number {
    return (percentage / 100) * 250000;
  }

  getStokvelProgress(stokvel: StokvelResponse): number {
    return StokvelUtils.getProgress(stokvel);
  }

  getStokvelCollectedAmount(stokvel: StokvelResponse): number {
    return StokvelUtils.getCollectedAmount(stokvel);
  }

  getStokvelRemainingAmount(stokvel: StokvelResponse): number {
    return StokvelUtils.getRemainingAmount(stokvel);
  }

  isStokvelTargetReached(stokvel: StokvelResponse): boolean {
    return StokvelUtils.isTargetReached(stokvel);
  }

  getStokvelProgressColor(stokvel: StokvelResponse): string {
    return StokvelUtils.progressColor(stokvel);
  }

  getStokvelImageClass(type: string): string {
    const map: Record<string, string> = {
      'INVESTMENT': 'investment',
      'PROPERTY': 'property',
      'FAMILY': 'family',
      'BURIAL': 'burial',
      'MONTHLY': 'monthly'
    };
    return map[type.toUpperCase()] || 'monthly';
  }

  getActivityIcon(type: string): string {
    const map: Record<string, string> = {
      contribution: 'payments',
      payout: 'savings',
      invitation: 'group_add',
      update: 'update'
    };
    return map[type] || 'info';
  }

  // Enhanced helper for template ownership checks
  isStokvelOwner(stokvel: StokvelResponse): Observable<boolean> {
    return this.user$.pipe(
      map(user => stokvel.createdBy === user?.id)
    );
  }

  // Get stokvel type display name using your utility
  getStokvelTypeDisplayName(typeName: string): string {
    return StokvelUtils.getStokvelTypeDisplayName(typeName);
  }

  // Action methods
  createNewStokvel(): void {
    this.router.navigate(['/create-stokvel']);
  }

  joinStokvel(): void {
    console.log('Join stokvel');
  }

  makeContribution(): void {
    console.log('Make contribution');
  }

  viewReports(): void {
    console.log('View reports');
  }

  viewStokvelDetails(stokvel: StokvelResponse): void {
    console.log('View stokvel details:', stokvel);
    this.router.navigate(['/stokvel', stokvel.id]);
  }

  makeStokvelContribution(stokvel: StokvelResponse): void {
    console.log('Contribution to stokvel:', stokvel);
  }

  viewAllActivity(): void {
    console.log('View all activity');
    this.router.navigate(['/activity']);
  }

  viewAllStokvels(): void {
    console.log('View all stokvels');
    this.router.navigate(['/my-stokvels']);
  }

  protected readonly StokvelType = StokvelType;
}
