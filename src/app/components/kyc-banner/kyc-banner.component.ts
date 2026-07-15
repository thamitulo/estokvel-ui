import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { MaterialModule } from '../../material.module';
import { KycService, KycStatusResponse } from '../../services/kyc/kyc.service';

@Component({
  selector: 'app-kyc-banner',
  standalone: true,
  imports: [CommonModule, RouterModule, MaterialModule],
  template: `
    <div class="kyc-banner" *ngIf="status$ | async as status">
      <ng-container [ngSwitch]="status.kycStatus">

        <!-- NOT_STARTED -->
        <div class="kyc-banner-inner warn" *ngSwitchCase="'NOT_STARTED'">
          <mat-icon>verified_user</mat-icon>
          <div class="kyc-text">
            <strong>Complete your KYC verification</strong>
            <span>Verify your identity to join or create stokvels and make contributions.</span>
          </div>
          <button class="kyc-btn" routerLink="/kyc">Verify Now</button>
        </div>

        <!-- PENDING -->
        <div class="kyc-banner-inner info" *ngSwitchCase="'PENDING'">
          <mat-icon>hourglass_top</mat-icon>
          <div class="kyc-text">
            <strong>KYC under review</strong>
            <span>Your documents are being reviewed. You'll be notified once verification is complete.</span>
          </div>
        </div>

        <!-- REJECTED -->
        <div class="kyc-banner-inner error" *ngSwitchCase="'REJECTED'">
          <mat-icon>warning</mat-icon>
          <div class="kyc-text">
            <strong>KYC rejected</strong>
            <span>{{ status.rejectionReason || 'Your verification was not approved.' }} Please re-submit.</span>
          </div>
          <button class="kyc-btn danger" routerLink="/kyc">Re-submit</button>
        </div>

      </ng-container>
    </div>
  `,
  styles: [`
    .kyc-banner { margin-bottom: 16px; }
    .kyc-banner-inner {
      display: flex; align-items: center; gap: 12px;
      padding: 12px 16px; border-radius: 8px; border-left: 4px solid;
    }
    .kyc-banner-inner.warn   { background: #fffbe6; border-color: #f59e0b; color: #92400e; }
    .kyc-banner-inner.info   { background: #eff6ff; border-color: #3b82f6; color: #1e40af; }
    .kyc-banner-inner.error  { background: #fef2f2; border-color: #ef4444; color: #991b1b; }
    .kyc-text { flex: 1; display: flex; flex-direction: column; font-size: 14px; }
    .kyc-text strong { font-weight: 600; margin-bottom: 2px; }
    .kyc-btn {
      padding: 6px 14px; border-radius: 6px; border: none; cursor: pointer;
      background: #059669; color: #fff; font-weight: 600;
    }
    .kyc-btn.danger { background: #dc2626; }
  `]
})
export class KycBannerComponent implements OnInit {
  status$!: Observable<KycStatusResponse | null>;

  constructor(private kyc: KycService) {}

  ngOnInit(): void {
    this.status$ = this.kyc.status$;
    this.kyc.loadStatus().subscribe();
  }
}

