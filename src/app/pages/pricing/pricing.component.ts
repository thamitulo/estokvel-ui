import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from '@auth0/auth0-angular';
import { MaterialModule } from '../../material.module';
import { SubscriptionService } from '../../services/subscription/subscription.service';
import { UserSubscriptionDto, SubscriptionTierInfo, TierCode } from '../../models/subscription';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [CommonModule, RouterModule, MaterialModule],
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})
export class PricingComponent implements OnInit {
  isAuthenticated = false;
  isLoading = false;
  upgradeLoading: TierCode | null = null;
  subscription: UserSubscriptionDto | null = null;
  tiers: SubscriptionTierInfo[] = [];

  // Static fallback when user is not logged in
  readonly staticTiers: SubscriptionTierInfo[] = [
    {
      code: 'FREE',
      name: 'Free',
      feeRatePercent: 3,
      maxFeePerTransaction: 15,
      monthlyAmountZar: 0,
      maxStokvels: 1,
      maxMembersPerStokvel: 10,
      features: [
        '1 stokvel',
        'Up to 10 members',
        '3% transaction fee (max R15)',
        'Basic notifications',
        'Join request management'
      ],
      current: false
    },
    {
      code: 'PRO',
      name: 'Pro',
      feeRatePercent: 1.5,
      maxFeePerTransaction: null,
      monthlyAmountZar: 99,
      maxStokvels: -1,
      maxMembersPerStokvel: -1,
      features: [
        'Unlimited stokvels',
        'Unlimited members',
        '1.5% transaction fee',
        'Priority email support',
        'Advanced analytics',
        'Rotation queue management',
        'Referral programme'
      ],
      current: false
    },
    {
      code: 'BUSINESS',
      name: 'Business',
      feeRatePercent: 1,
      maxFeePerTransaction: null,
      monthlyAmountZar: 299,
      maxStokvels: -1,
      maxMembersPerStokvel: -1,
      features: [
        'Everything in Pro',
        '1% transaction fee',
        'Dedicated account manager',
        'White-label options',
        'API access',
        'Custom payout schedules',
        'FSCA compliance reports'
      ],
      current: false
    }
  ];

  constructor(
    private authService: AuthService,
    private subscriptionService: SubscriptionService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.authService.isAuthenticated$.subscribe(auth => {
      this.isAuthenticated = auth;
      if (auth) {
        this.loadSubscription();
      } else {
        this.tiers = this.staticTiers;
      }
    });
  }

  loadSubscription(): void {
    this.isLoading = true;
    this.subscriptionService.load().subscribe({
      next: sub => {
        this.subscription = sub;
        this.tiers = sub.availableTiers ?? this.staticTiers;
        this.isLoading = false;
      },
      error: () => {
        this.tiers = this.staticTiers;
        this.isLoading = false;
      }
    });
  }

  selectTier(tier: SubscriptionTierInfo): void {
    if (!this.isAuthenticated) {
      this.snackBar.open('Please log in to manage your subscription', 'Login', { duration: 4000 })
        .onAction().subscribe(() => this.authService.loginWithRedirect({ appState: { target: '/pricing' } }));
      return;
    }

    if (tier.current) return;

    this.upgradeLoading = tier.code;
    this.subscriptionService.changeTier(tier.code).subscribe({
      next: sub => {
        this.subscription = sub;
        this.tiers = sub.availableTiers ?? this.tiers;
        this.upgradeLoading = null;
        this.snackBar.open(`Switched to ${tier.name} plan ✓`, 'OK', { duration: 3000 });
      },
      error: () => {
        this.upgradeLoading = null;
        this.snackBar.open('Failed to change plan. Please try again.', 'Close', { duration: 3000 });
      }
    });
  }

  get currentTier(): string {
    return this.subscription?.tierDisplayName ?? 'Free';
  }

  get creditBalance(): number {
    return this.subscription?.referralCreditBalance ?? 0;
  }

  feeLabel(tier: SubscriptionTierInfo): string {
    const cap = tier.maxFeePerTransaction != null ? ` (max R${tier.maxFeePerTransaction})` : '';
    return `${tier.feeRatePercent}% per transaction${cap}`;
  }

  memberLabel(n: number): string {
    return n === -1 ? 'Unlimited' : n.toString();
  }

  stokvelLabel(n: number): string {
    return n === -1 ? 'Unlimited' : n.toString();
  }
}

