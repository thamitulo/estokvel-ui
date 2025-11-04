import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../../material.module';
import { UserService, AppUser } from '../../services/user-service.service';
import { Observable } from 'rxjs';

export interface Stokvel {
  id: string;
  name: string;
  type: string;
  status: 'active' | 'pending' | 'completed';
  memberCount: number;
  collectedAmount: number;
  targetAmount: number;
  monthlyContribution: number;
  nextPayoutDate: Date;
  myNextPayout?: Date;
}

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
  userStokvels: Stokvel[] = [/*...same as before...*/];
  recentActivities: Activity[] = [/*...same as before...*/];

  constructor(private userService: UserService) {
    this.user$ = this.userService.user$;
    this.userName$ = this.userService.userName$;
  }

  ngOnInit(): void {}

  getPortfolioAmount(percentage: number): number {
    return (this.totalPortfolioValue * percentage) / 100;
  }

  getStokvelProgress(stokvel: Stokvel): number {
    return (stokvel.collectedAmount / stokvel.targetAmount) * 100;
  }

  getStokvelImageClass(type: string): string {
    const map: Record<string, string> = {
      Contribution: 'contribution',
      Investment: 'investment',
      Property: 'property',
      Family: 'family'
    };
    return map[type] || 'contribution';
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

  createNewStokvel(): void { console.log('Create new stokvel'); }
  joinStokvel(): void { console.log('Join stokvel'); }
  makeContribution(): void { console.log('Make contribution'); }
  viewReports(): void { console.log('View reports'); }
  viewStokvelDetails(stokvel: Stokvel): void { console.log('View stokvel details:', stokvel); }
  makeStokvelContribution(stokvel: Stokvel): void { console.log('Contribution to stokvel:', stokvel); }
  viewAllActivity(): void { console.log('View all activity'); }
  viewAllStokvels(): void { console.log('View all stokvels'); }
}
