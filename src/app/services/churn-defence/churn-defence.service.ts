import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MaterialModule } from '../../material.module';

/** Data passed into the churn defence dialog. */
export interface ChurnDefenceData {
  stokvelName: string;
  memberName: string;
  rotationSlot?: number;
  scheduledPayoutDate?: string;
  scheduledPayoutAmount?: number;
  currentSlot?: number;
  totalSlots?: number;
  totalContributed?: number;
}

/**
 * Standalone dialog component shown when a member is about to leave a
 * ROTATIONAL stokvel and will forfeit their queue position.
 */
@Component({
  selector: 'app-churn-defence-dialog',
  standalone: true,
  imports: [CommonModule, MaterialModule, MatDialogModule],
  template: `
    <div class="cd-dialog">
      <div class="cd-header">
        <mat-icon class="cd-warn-icon">warning_amber</mat-icon>
        <h2 mat-dialog-title>Think before you leave</h2>
      </div>

      <mat-dialog-content>
        <p class="cd-intro">
          You're about to remove <strong>{{ data.memberName }}</strong> from
          <strong>{{ data.stokvelName }}</strong>.
        </p>

        <div class="cd-cost-card" *ngIf="data.rotationSlot">
          <div class="cd-cost-row">
            <mat-icon>queue</mat-icon>
            <span>Rotation slot <strong>#{{ data.rotationSlot }}</strong> of {{ data.totalSlots }}</span>
          </div>
          <div class="cd-cost-row" *ngIf="data.scheduledPayoutDate">
            <mat-icon>event</mat-icon>
            <span>Scheduled payout: <strong>{{ data.scheduledPayoutDate }}</strong></span>
          </div>
          <div class="cd-cost-row" *ngIf="data.scheduledPayoutAmount">
            <mat-icon>payments</mat-icon>
            <span>Expected payout: <strong>R{{ data.scheduledPayoutAmount | number }}</strong></span>
          </div>
          <div class="cd-cost-row" *ngIf="data.totalContributed">
            <mat-icon>savings</mat-icon>
            <span>Contributed so far: <strong>R{{ data.totalContributed | number }}</strong></span>
          </div>
        </div>

        <p class="cd-consequence">
          <mat-icon class="inline-icon">info_outline</mat-icon>
          Removing this member will <strong>forfeit their rotation slot</strong>.
          Their position will be removed from the queue. This action cannot be undone.
        </p>
      </mat-dialog-content>

      <mat-dialog-actions align="end">
        <button mat-button (click)="close(false)">
          <mat-icon>arrow_back</mat-icon> Keep Member
        </button>
        <button mat-flat-button color="warn" (click)="close(true)">
          <mat-icon>person_remove</mat-icon> Remove Anyway
        </button>
      </mat-dialog-actions>
    </div>
  `,
  styles: [`
    .cd-dialog { padding: 8px; }
    .cd-header { display: flex; align-items: center; gap: 12px; margin-bottom: 8px; }
    .cd-warn-icon { font-size: 32px; height: 32px; width: 32px; color: #f57c00; }
    h2 { margin: 0; font-size: 1.2rem; }
    .cd-intro { margin: 0 0 16px; color: #555; }
    .cd-cost-card {
      background: #fff3e0;
      border: 1px solid #ffe0b2;
      border-radius: 8px;
      padding: 16px;
      margin-bottom: 16px;
    }
    .cd-cost-row {
      display: flex; align-items: center; gap: 10px;
      font-size: 14px; color: #333; padding: 4px 0;
      mat-icon { font-size: 18px; height: 18px; width: 18px; color: #f57c00; }
    }
    .cd-consequence {
      display: flex; align-items: flex-start; gap: 8px;
      font-size: 13px; color: #555; margin: 0;
      .inline-icon { font-size: 18px; height: 18px; width: 18px; flex-shrink: 0; margin-top: 1px; }
    }
  `]
})
export class ChurnDefenceDialogComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: ChurnDefenceData,
    private ref: MatDialogRef<ChurnDefenceDialogComponent>
  ) {}

  close(confirmed: boolean): void {
    this.ref.close(confirmed);
  }
}

/**
 * Service that gates destructive member-removal actions behind a churn-
 * defence dialog when the member has a future rotation slot.
 */
@Injectable({ providedIn: 'root' })
export class ChurnDefenceService {
  constructor(private dialog: MatDialog) {}

  /**
   * Show the churn-defence dialog when the member has a future rotation slot.
   * Returns an Observable<boolean> — true = user confirmed removal, false = cancelled.
   *
   * If no churn data is relevant (no rotation slot), resolves immediately with true.
   */
  confirmRemoval(data: ChurnDefenceData): Observable<boolean> {
    if (!data.rotationSlot) {
      // No rotation slot — proceed without dialog
      return of(true);
    }

    const ref = this.dialog.open(ChurnDefenceDialogComponent, {
      data,
      width: '440px',
      disableClose: true
    });

    return ref.afterClosed().pipe(
      switchMap(confirmed => of(!!confirmed))
    );
  }
}

