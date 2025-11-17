import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Router, RouterModule} from '@angular/router';
import { MaterialModule } from '../../material.module';
import {Observable, of} from 'rxjs';
import {AppUser, UserService} from "../../services/user/user-service.service";
import {StokvelUtils} from "../../utils/StokvelUtils";
import {Stokvel, StokvelResponse, StokvelType} from "../../models/stokvel";
import {StokvelService} from "../../services/stokvel/stokvel.service";
import {switchMap} from "rxjs/operators";

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

  totalPortfolioValue = 125000;
  portfolioChange = 2500;
  portfolioChangePercent = 2.1;
  daysUntilPayout = 14;
  monthlyChange = 5000;
  totalMembers = 48;

  userStokvelsCount = 4;
  totalContributions = 89000;
  nextPayout = 25000;
  totalSavings = 125000;

  portfolioDistribution: PortfolioSegment[] = [
    { name: 'Contribution Stokvels', percentage: 45, color: '#c2185b', rotation: 0, opacity: 1 },
    { name: 'Investment Stokvels', percentage: 30, color: '#e91e63', rotation: 162, opacity: 0.9 },
    { name: 'Property Stokvels', percentage: 15, color: '#9c27b0', rotation: 252, opacity: 0.8 },
    { name: 'Family Stokvels', percentage: 10, color: '#673ab7', rotation: 324, opacity: 0.7 }
  ];

  // Mock data for simplicity
  userStokvels$: Observable<StokvelResponse[]> = of([]);
  recentActivities: Activity[] = [];

  constructor(private router: Router,private userService: UserService, private stokvelService: StokvelService) {
    this.user$ = this.userService.user$;
    this.userName$ = this.userService.userName$;
  }

  ngOnInit(): void {
    this.userStokvels$ = this.user$.pipe(
      switchMap(user => {
        if (user?.id) {
          return this.stokvelService.getUserStokvels(user.id);
        } else {
          return of([]);
        }
      })
    );
  }

  getPortfolioAmount(percentage: number): number {
    return (this.totalPortfolioValue * percentage) / 100;
  }

  getStokvelProgress(stokvel: StokvelResponse): number {
    return StokvelUtils.getProgress(stokvel);
  }

  getStokvelImageClass(type: string): string {
    const map: Record<string, string> = {
      INVESTMENT: 'investment',
      PROPERTY: 'property',
      FAMILY: 'family',
      BURIAL: 'burial',
      MONTHLY: 'monthly'
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

  createNewStokvel(): void {
    this.router.navigate(['/create-stokvel']);
  }

  joinStokvel(): void { console.log('Join stokvel'); }
  makeContribution(): void { console.log('Make contribution'); }
  viewReports(): void { console.log('View reports'); }
  viewStokvelDetails(stokvel: StokvelResponse): void { console.log('View stokvel details:', stokvel); }
  makeStokvelContribution(stokvel: StokvelResponse): void { console.log('Contribution to stokvel:', stokvel); }
  viewAllActivity(): void { console.log('View all activity'); }
  viewAllStokvels(): void { console.log('View all stokvels'); }

  protected readonly StokvelType = StokvelType;
}
