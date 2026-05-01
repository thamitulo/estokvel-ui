import { Injectable } from '@angular/core';
import { Observable, map, switchMap, shareReplay, take, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../user/user-service.service';
import { environment } from '../../environments/environment';
import { ActivityDto } from '../../models/activity.model';
import { StokvelResponse } from '../../models/stokvel';

export interface DashboardData {
  user: any;
  totalPortfolioValue: number;
  portfolioChange: number;
  portfolioChangePercent: number;
  userStokvelsCount: number;
  newlyJoinedStokvelCount: number;
  percentageChangeForJoinedStokvels: number;
  totalContributions: number;
  monthlyChange: number;
  nextPayout: number;
  daysUntilPayout: number;
  nextPayoutStokvelName: string | null;
  nextPayoutDate: string | null;
  totalGrowth: number;
  totalGrowthPercent: number;
  totalSavings: number;
  portfolioDistribution: any[];
  userStokvels: StokvelResponse[];
  recentActivities: ActivityDto[];
}

@Injectable({ providedIn: 'root' })
export class DashboardService {

  private readonly summaryUrl = `${environment.apiUrl}dashboard/summary`;

  constructor(
    private http: HttpClient,
    private userService: UserService
  ) {}

  getDashboardData(): Observable<DashboardData> {
    return this.userService.user$.pipe(
      take(1),
      switchMap(user => {
        if (!user?.id) return of(this.getDefaultDashboardData(null));
        return this.http.get<any>(this.summaryUrl).pipe(
          map(summary => this.mapSummaryToData(summary, user))
        );
      }),
      shareReplay(1)
    );
  }

  /** Force refresh – bypass any cached stream */
  refreshDashboard(): Observable<DashboardData> {
    return this.userService.user$.pipe(
      take(1),
      switchMap(user => {
        if (!user?.id) return of(this.getDefaultDashboardData(null));
        return this.http.get<any>(this.summaryUrl).pipe(
          map(summary => this.mapSummaryToData(summary, user))
        );
      })
    );
  }

  /** Get portfolio total value */
  getPortfolioValue(): Observable<{ totalValue: number; change: number; changePercent: number }> {
    return this.http.get<{ totalValue: number; change: number; changePercent: number }>(
      `${environment.apiUrl}dashboard/portfolio-value`
    );
  }

  /** Get portfolio distribution by stokvel type */
  getPortfolioDistribution(): Observable<any[]> {
    return this.http.get<any[]>(`${environment.apiUrl}dashboard/portfolio-distribution`);
  }

  /** Get recent dashboard activities */
  getRecentActivities(limit: number = 10): Observable<any[]> {
    return this.http.get<any[]>(`${environment.apiUrl}dashboard/recent-activities`, {
      params: { limit: limit.toString() }
    });
  }

  /** Get detailed info for user's stokvels */
  getMyStokvelsDetailed(): Observable<any[]> {
    return this.http.get<any[]>(`${environment.apiUrl}dashboard/my-stokvels-detailed`);
  }

  private mapSummaryToData(summary: any, user: any): DashboardData {
    return {
      user,
      totalPortfolioValue: Number(summary.totalPortfolioValue) || 0,
      portfolioChange:     Number(summary.portfolioChange)     || 0,
      portfolioChangePercent: Number(summary.portfolioChangePercent) || 0,
      userStokvelsCount:   Number(summary.userStokvelsCount)   || 0,
      newlyJoinedStokvelCount: Number(summary.newlyJoinedStokvelCount) || 0,
      percentageChangeForJoinedStokvels: Number(summary.percentageChangeForJoinedStokvels) || 0,
      totalContributions:  Number(summary.totalContributions)  || 0,
      monthlyChange:       Number(summary.monthlyChange)       || 0,
      nextPayout:          Number(summary.nextPayout)          || 0,
      daysUntilPayout:     Number(summary.daysUntilPayout)     || 0,
      nextPayoutStokvelName: summary.nextPayoutStokvelName || null,
      nextPayoutDate:      summary.nextPayoutDate || null,
      totalGrowth:         Number(summary.totalGrowth)         || 0,
      totalGrowthPercent:  Number(summary.totalGrowthPercent)  || 0,
      totalSavings:        Number(summary.totalSavings)        || 0,
      portfolioDistribution: summary.portfolioDistribution     || [],
      userStokvels:        summary.userStokvels                || [],
      recentActivities:    summary.recentActivities            || [],
    };
  }

  private getDefaultDashboardData(user: any): DashboardData {
    return {
      user,
      totalPortfolioValue: 0, portfolioChange: 0, portfolioChangePercent: 0,
      userStokvelsCount: 0, newlyJoinedStokvelCount: 0, percentageChangeForJoinedStokvels: 0,
      totalContributions: 0, monthlyChange: 0, nextPayout: 0, daysUntilPayout: 0,
      nextPayoutStokvelName: null, nextPayoutDate: null,
      totalGrowth: 0, totalGrowthPercent: 0, totalSavings: 0,
      portfolioDistribution: [], userStokvels: [], recentActivities: []
    };
  }
}
