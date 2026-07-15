import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material.module';
import { StokvelService } from '../../services/stokvel/stokvel.service';
import { RotationQueueDto, RotationSlotDto } from '../../models/stokvel';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from '../../services/user/user-service.service';
import { catchError, switchMap, take } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-rotation-queue',
  standalone: true,
  imports: [CommonModule, MaterialModule],
  templateUrl: './rotation-queue.component.html',
  styleUrls: ['./rotation-queue.component.scss']
})
export class RotationQueueComponent implements OnChanges {
  @Input() stokvelId!: number;
  /** If true, show admin-only controls (advance / reset). */
  @Input() isAdmin = false;

  queue: RotationQueueDto | null = null;
  myPosition: {
    position: number;
    scheduledPayoutDate: string;
    payoutAmount: number;
    isCurrent: boolean;
    hasReceived: boolean;
    totalSlots: number;
  } | null = null;

  loading = true;
  advancing = false;
  resetting = false;
  currentUserAuth0Id = '';

  constructor(
    private stokvelService: StokvelService,
    private userService: UserService,
    private snack: MatSnackBar
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['stokvelId'] && this.stokvelId) {
      this.load();
    }
  }

  load(): void {
    this.loading = true;
    this.userService.user$.pipe(take(1)).subscribe(u => {
      this.currentUserAuth0Id = u?.id ?? '';
    });

    this.stokvelService.getRotationQueue(this.stokvelId).pipe(
      catchError(() => of(null))
    ).subscribe(q => {
      this.queue = q;
      this.loading = false;
    });

    this.stokvelService.getMyRotationPosition(this.stokvelId).pipe(
      catchError(() => of(null))
    ).subscribe(pos => {
      this.myPosition = pos;
    });
  }

  advance(): void {
    if (!this.stokvelId) return;
    this.advancing = true;
    this.stokvelService.advanceRotation(this.stokvelId).subscribe({
      next: (res) => {
        this.advancing = false;
        this.snack.open(
          `✅ Rotation advanced to slot ${res.currentSlot} of ${res.totalSlots}`,
          'Close', { duration: 4000 }
        );
        this.load();
      },
      error: (err) => {
        this.advancing = false;
        this.snack.open(err?.error?.message || 'Could not advance rotation', 'Close', { duration: 4000 });
      }
    });
  }

  reset(): void {
    if (!this.stokvelId) return;
    const confirmed = window.confirm(
      'Reset and re-shuffle the entire rotation queue?\nAll "has received" flags will be cleared.'
    );
    if (!confirmed) return;
    this.resetting = true;
    this.stokvelService.resetRotation(this.stokvelId).subscribe({
      next: () => {
        this.resetting = false;
        this.snack.open('✅ Rotation queue reset and shuffled.', 'Close', { duration: 4000 });
        this.load();
      },
      error: (err) => {
        this.resetting = false;
        this.snack.open(err?.error?.message || 'Could not reset rotation', 'Close', { duration: 4000 });
      }
    });
  }

  trackByPosition(_: number, slot: RotationSlotDto): number {
    return slot.position;
  }
}

