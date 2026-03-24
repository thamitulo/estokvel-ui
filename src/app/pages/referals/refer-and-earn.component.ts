import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { Clipboard } from '@angular/cdk/clipboard';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';
import { MaterialModule } from "../../material.module";
import {ReferralService} from "../../services/referrals/referral.service";
import {AuthService} from "@auth0/auth0-angular";

@Component({
  selector: 'app-refer-earn',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ],
  templateUrl: './refer-and-earn.component.html',
  styleUrls: ['./refer-and-earn.component.scss']
})
export class ReferAndEarnComponent implements OnInit, OnDestroy {
  // Authentication state
  isLoggedIn: boolean = false;

  // User stats (for logged in users)
  referredCount: number = 0;
  totalEarnings: number = 0;
  pendingReferrals: number = 0;

  // Referral code (for logged in users)
  referralCode: string = 'ESTOKVEL50';
  copyIcon: string = 'content_copy';
  copyTooltip: string = 'Copy referral code';

  // Referral history (for logged in users)
  referralHistory: any[] = [];

  // Loading states
  isLoading: boolean = false;
  isLoadingHistory: boolean = false;

  // Error states
  hasError: boolean = false;
  errorMessage: string = '';

  // Subscriptions
  private subscriptions = new Subscription();

  constructor(
    private clipboard: Clipboard,
    private snackBar: MatSnackBar,
    private referralService: ReferralService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.checkAuthentication();
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  checkAuthentication(): void {
    const authSub = this.authService.isAuthenticated$.subscribe(
      (isAuthenticated) => {
        this.isLoggedIn = isAuthenticated;

        // If user just logged in, load data
        if (isAuthenticated) {
          this.loadReferralData();
        } else {
          // Reset data for non-logged in users
          this.resetUserData();
        }
      }
    );
    this.subscriptions.add(authSub);
  }

  loadReferralData(): void {
    if (!this.isLoggedIn) return;

    this.isLoading = true;
    this.isLoadingHistory = true;
    this.hasError = false;
    this.errorMessage = '';

    // Load stats
    const statsSub = this.referralService.getStats().subscribe({
      next: (stats) => {
        if (stats) {
          this.referredCount = stats.referredCount || 0;
          this.totalEarnings = stats.totalEarnings || 0;
          this.pendingReferrals = stats.pendingReferrals || 0;
          this.referralCode = stats.referralCode || 'ESTOKVEL50';
        } else {
          // Use default values if stats is null/undefined
          this.setDefaultStats();
        }
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Failed to load referral stats:', error);
        this.setDefaultStats();
        this.isLoading = false;
        this.hasError = true;
        this.errorMessage = 'Failed to load referral data. Please try again.';
        this.snackBar.open('Failed to load referral data', 'Close', {
          duration: 3000,
          panelClass: ['error-snackbar']
        });
      },
      complete: () => {
        this.isLoading = false;
      }
    });

    // Load recent history
    const historySub = this.referralService.getRecentHistory(5).subscribe({
      next: (history) => {
        if (history && Array.isArray(history)) {
          this.referralHistory = history.map(item => ({
            friendName: item.friendName || 'Unknown Friend',
            date: item.invitationDate ? new Date(item.invitationDate) : new Date(),
            status: item.status ? item.status.toLowerCase() : 'pending',
            amount: item.rewardAmount || 0,
            email: item.friendEmail || '',
            cellphone: item.friendCellphone || ''
          })).filter(item => item.friendName !== 'Unknown Friend');
        } else {
          this.referralHistory = [];
        }
        this.isLoadingHistory = false;
      },
      error: (error) => {
        console.error('Failed to load referral history:', error);
        this.referralHistory = [];
        this.isLoadingHistory = false;
      },
      complete: () => {
        this.isLoadingHistory = false;
      }
    });

    this.subscriptions.add(statsSub);
    this.subscriptions.add(historySub);
  }

  setDefaultStats(): void {
    this.referredCount = 0;
    this.totalEarnings = 0;
    this.pendingReferrals = 0;
    this.referralCode = 'ESTOKVEL50';
  }

  resetUserData(): void {
    this.setDefaultStats();
    this.referralHistory = [];
    this.hasError = false;
    this.errorMessage = '';
  }

  getSafeReferredCount(): number {
    return this.referredCount || 0;
  }

  getSafeTotalEarnings(): number {
    return this.totalEarnings || 0;
  }

  getSafePendingReferrals(): number {
    return this.pendingReferrals || 0;
  }

  getSafeReferralCode(): string {
    return this.referralCode || 'ESTOKVEL50';
  }

  getSafeReferralHistory(): any[] {
    return Array.isArray(this.referralHistory) ? this.referralHistory : [];
  }

  // Copy referral code to clipboard (logged in users only)
  copyReferralCode(): void {
    if (!this.isLoggedIn) {
      this.showLoginPrompt();
      return;
    }

    const code = this.getSafeReferralCode();
    this.clipboard.copy(code);
    this.copyIcon = 'check';
    this.copyTooltip = 'Copied!';

    this.snackBar.open('Referral code copied to clipboard!', 'Close', {
      duration: 3000,
      panelClass: ['success-snackbar']
    });

    setTimeout(() => {
      this.copyIcon = 'content_copy';
      this.copyTooltip = 'Copy referral code';
    }, 2000);
  }

  copyReferralLink(): void {
    if (!this.isLoggedIn) {
      this.showLoginPrompt();
      return;
    }

    const code = this.getSafeReferralCode();
    const referralLink = `https://estokvel.co.za/signup?ref=${code}`;

    this.clipboard.copy(referralLink);
    this.snackBar.open('Referral link copied to clipboard!', 'Close', {
      duration: 3000,
      panelClass: ['success-snackbar']
    });
  }

  // Share via WhatsApp
  shareViaWhatsApp(): void {
    if (!this.isLoggedIn) {
      this.showLoginPrompt();
      return;
    }

    const code = this.getSafeReferralCode();
    const message = `Join eStokvel - the modern way to manage your stokvels! Use my referral code ${code} to get R25 bonus when you create your first stokvel. Sign up here: https://estokvel.co.za/signup?ref=${code}`;
    const url = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  }

  // Share via Email
  shareViaEmail(): void {
    if (!this.isLoggedIn) {
      this.showLoginPrompt();
      return;
    }

    const code = this.getSafeReferralCode();
    const subject = 'Join eStokvel with my referral code!';
    const body = `Hi there!\n\nI'm using eStokvel to manage my stokvels and thought you might be interested too!\n\nUse my referral code ${code} when you sign up and we'll both get rewards:\n- You get R25 bonus when you create your first stokvel\n- I get R50 when you join\n\nSign up here: https://estokvel.co.za/signup?ref=${code}\n\nLet's grow our savings together!`;
    const url = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(url, '_blank');
  }

  // Share via SMS
  shareViaSMS(): void {
    if (!this.isLoggedIn) {
      this.showLoginPrompt();
      return;
    }

    const code = this.getSafeReferralCode();
    const message = `Join eStokvel! Use my code ${code} for R25 bonus. Sign up: https://estokvel.co.za/signup?ref=${code}`;
    const url = `sms:?&body=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  }

  // General share method
  shareReferral(): void {
    if (!this.isLoggedIn) {
      this.showLoginPrompt();
      return;
    }

    if (navigator.share) {
      const code = this.getSafeReferralCode();
      navigator.share({
        title: 'Join eStokvel',
        text: `Use my referral code ${code} to get R25 bonus when you join eStokvel!`,
        url: `https://estokvel.co.za/signup?ref=${code}`
      }).catch(error => {
        console.error('Error sharing:', error);
        // Fallback to copying link
        this.copyReferralLink();
      });
    } else {
      this.copyReferralLink();
    }
  }

  viewAllHistory(): void {
    this.snackBar.open('Opening full referral history...', 'Close', {
      duration: 2000
    });
    // You can navigate to a detailed history page here
    // this.router.navigate(['/referrals/history']);
  }

  // Show login prompt for non-logged in users
  private showLoginPrompt(): void {
    this.snackBar.open('Please login or sign up to access referral features', 'Login', {
      duration: 5000,
      panelClass: ['info-snackbar']
    }).onAction().subscribe(() => {
      this.router.navigate(['/auth/login']);
    });
  }

  // Reload data
  reloadData(): void {
    if (this.isLoggedIn) {
      this.loadReferralData();
    }
  }

  get currentYear(): number {
    return new Date().getFullYear();
  }

  login() {
    this.authService.loginWithRedirect({ appState: { target: this.router.url } });
  }
}
