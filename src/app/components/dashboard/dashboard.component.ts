// dashboard.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {MaterialModule} from "../../material.module";

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
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  // User Data
  userName = 'Thabo';

  // Portfolio Overview
  totalPortfolioValue = 125000;
  portfolioChange = 2500;
  portfolioChangePercent = 2.1;
  daysUntilPayout = 14;
  monthlyChange = 5000;
  totalMembers = 48;

  // Stats
  userStokvelsCount = 4;
  totalContributions = 89000;
  nextPayout = 25000;
  totalSavings = 125000;

  // Portfolio Distribution
  portfolioDistribution: PortfolioSegment[] = [
    { name: 'Contribution Stokvels', percentage: 45, color: '#c2185b', rotation: 0, opacity: 1 },
    { name: 'Investment Stokvels', percentage: 30, color: '#e91e63', rotation: 162, opacity: 0.9 },
    { name: 'Property Stokvels', percentage: 15, color: '#9c27b0', rotation: 252, opacity: 0.8 },
    { name: 'Family Stokvels', percentage: 10, color: '#673ab7', rotation: 324, opacity: 0.7 }
  ];

  // User Stokvels
  userStokvels: Stokvel[] = [
    {
      id: '1',
      name: 'Mabogo Dinku Stokvel',
      type: 'Contribution',
      status: 'active',
      memberCount: 12,
      collectedAmount: 45000,
      targetAmount: 60000,
      monthlyContribution: 5000,
      nextPayoutDate: new Date('2024-12-15'),
      myNextPayout: new Date('2024-12-15')
    },
    {
      id: '2',
      name: 'Investment Club',
      type: 'Investment',
      status: 'active',
      memberCount: 8,
      collectedAmount: 35000,
      targetAmount: 50000,
      monthlyContribution: 2500,
      nextPayoutDate: new Date('2024-11-30')
    },
    {
      id: '3',
      name: 'Property Investment Group',
      type: 'Property',
      status: 'active',
      memberCount: 15,
      collectedAmount: 25000,
      targetAmount: 100000,
      monthlyContribution: 2000,
      nextPayoutDate: new Date('2025-03-20')
    },
    {
      id: '4',
      name: 'Family Savings Fund',
      type: 'Family',
      status: 'active',
      memberCount: 10,
      collectedAmount: 20000,
      targetAmount: 30000,
      monthlyContribution: 1500,
      nextPayoutDate: new Date('2024-12-01'),
      myNextPayout: new Date('2024-12-01')
    }
  ];

  // Recent Activities
  recentActivities: Activity[] = [
    {
      type: 'contribution',
      description: 'Monthly contribution made',
      stokvelName: 'Mabogo Dinku Stokvel',
      date: new Date('2024-01-15'),
      amount: 5000
    },
    {
      type: 'payout',
      description: 'Payout received',
      stokvelName: 'Investment Club',
      date: new Date('2024-01-10'),
      amount: 7500
    },
    {
      type: 'invitation',
      description: 'Invited to join new stokvel',
      stokvelName: 'Tech Investment Group',
      date: new Date('2024-01-08')
    },
    {
      type: 'update',
      description: 'Stokvel rules updated',
      stokvelName: 'Family Savings Fund',
      date: new Date('2024-01-05')
    },
    {
      type: 'contribution',
      description: 'Additional contribution',
      stokvelName: 'Property Investment Group',
      date: new Date('2024-01-03'),
      amount: 2000
    }
  ];

  ngOnInit(): void {
    // Initialize any data that needs to be fetched
  }

  // Portfolio Methods
  getPortfolioAmount(percentage: number): number {
    return (this.totalPortfolioValue * percentage) / 100;
  }

  // Stokvel Methods
  getStokvelProgress(stokvel: Stokvel): number {
    return (stokvel.collectedAmount / stokvel.targetAmount) * 100;
  }

  getStokvelImageClass(type: string): string {
    const imageMap: { [key: string]: string } = {
      'Contribution': 'contribution',
      'Investment': 'investment',
      'Property': 'property',
      'Family': 'family'
    };
    return imageMap[type] || 'contribution';
  }

  // Activity Methods
  getActivityIcon(type: string): string {
    const iconMap: { [key: string]: string } = {
      'contribution': 'payments',
      'payout': 'savings',
      'invitation': 'group_add',
      'update': 'update'
    };
    return iconMap[type] || 'info';
  }

  // Action Methods
  createNewStokvel(): void {
    console.log('Create new stokvel clicked');
    // Implement navigation or modal opening
  }

  joinStokvel(): void {
    console.log('Join stokvel clicked');
    // Implement navigation or modal opening
  }

  makeContribution(): void {
    console.log('Make contribution clicked');
    // Implement navigation or modal opening
  }

  viewReports(): void {
    console.log('View reports clicked');
    // Implement navigation
  }

  viewStokvelDetails(stokvel: Stokvel): void {
    console.log('View stokvel details:', stokvel);
    // Implement navigation
  }

  makeStokvelContribution(stokvel: Stokvel): void {
    console.log('Make contribution to stokvel:', stokvel);
    // Implement contribution logic
  }

  viewAllActivity(): void {
    console.log('View all activity clicked');
    // Implement navigation
  }

  viewAllStokvels(): void {
    console.log('View all stokvels clicked');
    // Implement navigation
  }
}
