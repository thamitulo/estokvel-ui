import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Clipboard } from '@angular/cdk/clipboard';
import {MaterialModule} from "../../material.module";
import {MatAccordion, MatExpansionPanel, MatExpansionPanelTitle} from "@angular/material/expansion";
import {MatSnackBar} from "@angular/material/snack-bar";


interface ReferralHistory {
  friendName: string;
  date: Date;
  status: 'completed' | 'pending' | 'failed';
  amount?: number;
}

@Component({
  selector: 'app-refer-earn',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    MatExpansionPanel,
    MatExpansionPanelTitle,
    MatAccordion
  ],
  templateUrl: './refer-and-earn.component.html',
  styleUrls: ['./refer-and-earn.component.scss']
})
export class ReferAndEarnComponent {
  // User stats
  referredCount: number = 8;
  totalEarnings: number = 400;
  pendingReferrals: number = 2;

  // Referral code
  referralCode: string = 'ESTOKVEL50';
  copyIcon: string = 'content_copy';
  copyTooltip: string = 'Copy referral code';

  // Referral history
  referralHistory: ReferralHistory[] = [
    {
      friendName: 'Sarah Johnson',
      date: new Date('2024-01-15'),
      status: 'completed',
      amount: 50
    },
    {
      friendName: 'Mike Thompson',
      date: new Date('2024-01-12'),
      status: 'completed',
      amount: 50
    },
    {
      friendName: 'Lisa Brown',
      date: new Date('2024-01-10'),
      status: 'pending'
    },
    {
      friendName: 'David Wilson',
      date: new Date('2024-01-08'),
      status: 'completed',
      amount: 50
    },
    {
      friendName: 'Emma Davis',
      date: new Date('2024-01-05'),
      status: 'pending'
    }
  ];

  constructor(
    private clipboard: Clipboard,
    private snackBar: MatSnackBar
  ) {}

  // Copy referral code to clipboard
  copyReferralCode(): void {
    this.clipboard.copy(this.referralCode);
    this.copyIcon = 'check';
    this.copyTooltip = 'Copied!';

    this.snackBar.open('Referral code copied to clipboard!', 'Close', {
      duration: 3000,
      panelClass: ['success-snackbar']
    });

    // Reset icon after 2 seconds
    setTimeout(() => {
      this.copyIcon = 'content_copy';
      this.copyTooltip = 'Copy referral code';
    }, 2000);
  }

  // Copy referral link to clipboard
  copyReferralLink(): void {
    const referralLink = `https://estokvel.co.za/signup?ref=${this.referralCode}`;
    this.clipboard.copy(referralLink);

    this.snackBar.open('Referral link copied to clipboard!', 'Close', {
      duration: 3000,
      panelClass: ['success-snackbar']
    });
  }

  // Share via WhatsApp
  shareViaWhatsApp(): void {
    const message = `Join eStokvel - the modern way to manage your stokvels! Use my referral code ${this.referralCode} to get R25 bonus when you create your first stokvel. Sign up here: https://estokvel.co.za/signup?ref=${this.referralCode}`;
    const url = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  }

  // Share via Email
  shareViaEmail(): void {
    const subject = 'Join eStokvel with my referral code!';
    const body = `Hi there!

I'm using eStokvel to manage my stokvels and thought you might be interested too!

Use my referral code ${this.referralCode} when you sign up and we'll both get rewards:
- You get R25 bonus when you create your first stokvel
- I get R50 when you join

Sign up here: https://estokvel.co.za/signup?ref=${this.referralCode}

Let's grow our savings together!`;

    const url = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(url, '_blank');
  }

  // Share via SMS
  shareViaSMS(): void {
    const message = `Join eStokvel! Use my code ${this.referralCode} for R25 bonus. Sign up: https://estokvel.co.za/signup?ref=${this.referralCode}`;
    const url = `sms:?&body=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  }

  // General share method
  shareReferral(): void {
    if (navigator.share) {
      navigator.share({
        title: 'Join eStokvel',
        text: `Use my referral code ${this.referralCode} to get R25 bonus when you join eStokvel!`,
        url: `https://estokvel.co.za/signup?ref=${this.referralCode}`
      });
    } else {
      // Fallback to copying link
      this.copyReferralLink();
    }
  }

  viewAllHistory(): void {
    // Navigate to detailed history page or show modal
    this.snackBar.open('Opening full referral history...', 'Close', {
      duration: 2000
    });
  }

  get currentYear(): number {
    return new Date().getFullYear();
  }
}
