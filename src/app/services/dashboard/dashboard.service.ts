import { Injectable } from '@angular/core';
import { Observable, map, combineLatest, of, switchMap, shareReplay, take } from 'rxjs';
import { StokvelService } from "../stokvel/stokvel.service";
import { StokvelMemberService } from "../stokvel/stokvel-member.service";
import { UserService } from "../user/user-service.service";
import {countStokvelsJoinedLastMonth, percentageIncreaseForJoinedStokvels} from "../../components/dashboard/stats.util";

export interface DashboardData {
  user: any;
  totalPortfolioValue: number;
  portfolioChange: number;
  portfolioChangePercent: number;
  userStokvelsCount: number;
  newlyJoinedStokvelCount: number;
  percentageChangeForJoinedStokvels: number,
  totalContributions: number;
  monthlyChange: number;
  nextPayout: number;
  daysUntilPayout: number;
  totalSavings: number;
  portfolioDistribution: any[];
  userStokvels: any[];
  recentActivities: any[];
}

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(
    private stokvelService: StokvelService,
    private stokvelMemberService: StokvelMemberService,
    private userService: UserService
  ) {}

  getDashboardData(): Observable<DashboardData> {
    return this.userService.user$.pipe(
      take(1), // Take only the first user value to prevent duplicates
      switchMap(user => {
        const auth0Id = user?.id;

        if (!auth0Id) {
          return of(this.getDefaultDashboardData());
        }

        return combineLatest({
          userStokvels: this.getUserStokvels(auth0Id),
          stokvelMembers: this.getUserStokvelMemberships(auth0Id),
          recentActivities: this.getRecentActivities(auth0Id)
        }).pipe(
          map(({ userStokvels, stokvelMembers, recentActivities }) => {
            const portfolioData = this.calculatePortfolioData(userStokvels, stokvelMembers, auth0Id);
            const stats = this.calculateStats(userStokvels, stokvelMembers, auth0Id);
            const distribution = this.calculatePortfolioDistribution(userStokvels, auth0Id);

            return {
              user: user,
              totalPortfolioValue: portfolioData.totalValue,
              portfolioChange: portfolioData.dailyChange,
              portfolioChangePercent: portfolioData.dailyChangePercent,
              userStokvelsCount: stats.stokvelsCount,
              newlyJoinedStokvelCount: stats.newlyJoinedStokvelCount,
              percentageChangeForJoinedStokvels: stats.percentageChangeForJoinedStokvels,
              totalContributions: stats.totalContributions,
              monthlyChange: stats.monthlyChange,
              nextPayout: stats.nextPayout,
              daysUntilPayout: stats.daysUntilPayout,
              totalSavings: stats.totalSavings,
              portfolioDistribution: distribution,
              userStokvels: userStokvels,
              recentActivities: recentActivities
            };
          })
        );
      }),
      shareReplay(1) // Cache the dashboard data
    );
  }

  private getDefaultDashboardData(): DashboardData {
    return {
      user: null,
      totalPortfolioValue: 0,
      portfolioChange: 0,
      portfolioChangePercent: 0,
      userStokvelsCount: 0,
      newlyJoinedStokvelCount: 0,
      percentageChangeForJoinedStokvels: 0,
      totalContributions: 0,
      monthlyChange: 0,
      nextPayout: 0,
      daysUntilPayout: 0,
      totalSavings: 0,
      portfolioDistribution: [],
      userStokvels: [],
      recentActivities: []
    };
  }

  private getUserStokvels(auth0Id: string): Observable<any[]> {
    return this.stokvelService.getUserStokvels(auth0Id).pipe(
      take(1), // Ensure only one request
      map(stokvels => stokvels.map(stokvel => ({
        ...stokvel,
        // Use both possible property names for compatibility
        isOwner: stokvel.createdBy === auth0Id
      }))),
      shareReplay(1)
    );
  }

  private getUserStokvelMemberships(auth0Id: string): Observable<any[]> {
    return this.stokvelMemberService.getUserMemberships(auth0Id).pipe(
      take(1),
      shareReplay(1)
    );
  }

  private calculatePortfolioData(userStokvels: any[], stokvelMembers: any[], auth0Id: string): any {
    let totalValue = 0;
    let totalContributions = 0;

    // Calculate total portfolio value from stokvel members
    stokvelMembers.forEach(member => {
      if (member.totalContributed) {
        totalContributions += Number(member.totalContributed) || 0;
      }
      if (member.nextPayoutAmount) {
        totalValue += Number(member.nextPayoutAmount) || 0;
      }
    });

    // Add stokvel target amounts for created stokvels
    userStokvels.forEach(stokvel => {
      // Check both possible property names for ownership
      const isOwner = stokvel.createdBy === auth0Id || stokvel.createdByAuth0Id === auth0Id;
      if (stokvel.targetAmount && isOwner) {
        totalValue += Number(stokvel.targetAmount) || 0;
      }
    });

    // Mock daily change
    const dailyChange = totalValue * 0.023;
    const dailyChangePercent = 2.3;

    return {
      totalValue,
      dailyChange,
      dailyChangePercent
    };
  }

  private calculateStats(userStokvels: any[], stokvelMemberships: any[], auth0Id: string): any {
    const stokvelsCount = userStokvels.length;

    const now = new Date();

    const newlyJoinedStokvelCount = countStokvelsJoinedLastMonth(stokvelMemberships) ;
    const percentageChangeForJoinedStokvels = percentageIncreaseForJoinedStokvels(stokvelMemberships);

    // Calculate total contributions from members
    const totalContributions = stokvelMemberships.reduce((sum, member) => {
      return sum + (Number(member.totalContributed) || 0);
    }, 0);

    // Mock changes
    const monthlyChange = totalContributions * 0.083;
    const nextPayout = stokvelMemberships.reduce((sum, member) => {
      if (member.nextPayoutAmount && member.nextPayOutDate) {
        return sum + (Number(member.nextPayoutAmount) || 0);
      }
      return sum;
    }, 0);

    const daysUntilPayout = 7;
    const totalSavings = this.calculatePortfolioData(userStokvels, stokvelMemberships, auth0Id).totalValue;

    return {
      stokvelsCount,
      newlyJoinedStokvelCount,
      percentageChangeForJoinedStokvels,
      totalContributions,
      monthlyChange,
      nextPayout,
      daysUntilPayout,
      totalSavings
    };
  }

  private calculatePortfolioDistribution(userStokvels: any[], auth0Id: string): any[] {
    if (userStokvels.length === 0) {
      return [
        { name: 'No Stokvels', percentage: 100, color: '#6B7280', rotation: 0, opacity: 1 }
      ];
    }

    const colors = ['#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6', '#06B6D4'];
    const totalValue = userStokvels.reduce((sum, stokvel) => {
      return sum + (Number(stokvel.targetAmount) || Number(stokvel.monthlyContribution) * 12 || 0);
    }, 0);

    let currentRotation = 0;
    const distribution = userStokvels.map((stokvel, index) => {
      const value = Number(stokvel.targetAmount) || Number(stokvel.monthlyContribution) * 12 || 0;
      const percentage = totalValue > 0 ? (value / totalValue) * 100 : 0;

      // Check both possible property names for ownership
      const isOwner = stokvel.createdBy === auth0Id || stokvel.createdByAuth0Id === auth0Id;

      const segment = {
        name: stokvel.name,
        percentage: Math.round(percentage),
        color: colors[index % colors.length],
        rotation: currentRotation,
        opacity: 1,
        isOwner: isOwner
      };
      currentRotation += (percentage / 100) * 360;
      return segment;
    });

    return distribution;
  }

  private getRecentActivities(auth0Id: string): Observable<any[]> {
    // Mock recent activities
    return of([
      {
        type: 'contribution',
        description: 'Monthly contribution made',
        stokvelName: 'Mabogo Dinku Stokvel',
        amount: 1500,
        date: new Date(Date.now() - 2 * 60 * 60 * 1000)
      },
      {
        type: 'payout',
        description: 'Payout received',
        stokvelName: 'Family Fund',
        amount: 18000,
        date: new Date(Date.now() - 24 * 60 * 60 * 1000)
      }
    ]).pipe(
      take(1),
      shareReplay(1)
    );
  }

  getPortfolioAmount(percentage: number): number {
    return (percentage / 100) * 250000;
  }

  getStokvelProgress(stokvel: any): number {
    if (!stokvel.targetAmount) return 0;
    const collected = Number(stokvel.targetAmount) * 0.75;
    return (collected / Number(stokvel.targetAmount)) * 100;
  }

  getActivityIcon(activityType: string): string {
    const icons: { [key: string]: string } = {
      contribution: 'payments',
      payout: 'savings',
      member_joined: 'person_add',
      stokvel_created: 'add_circle',
      default: 'notifications'
    };
    return icons[activityType] || 'rotational';
  }

  getStokvelImageClass(stokvelType: string): string {
    const typeMap: { [key: string]: string } = {
      'savings': 'stokvel-image-savings',
      'investment': 'stokvel-image-investment',
      'rotational': 'stokvel-image-rotational',
      'family': 'stokvel-image-family',
      'default': 'stokvel-image-default'
    };
    return typeMap[stokvelType.toLowerCase()] || 'rotational';
  }
}
