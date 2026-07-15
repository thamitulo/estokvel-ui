import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { MaterialModule } from '../../material.module';
import { AppUser, UserService } from '../../services/user/user-service.service';
import { StokvelService } from '../../services/stokvel/stokvel.service';
import { TransactionService, Transaction } from '../../services/stokvel/transaction.service';
import { StokvelResponse } from '../../models/stokvel';
import { map, switchMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { Auth0ManagementService } from '../../services/auth0-management/auth0-management.service';
import { KycBannerComponent } from '../../components/kyc-banner/kyc-banner.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule, MaterialModule, KycBannerComponent],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user$: Observable<AppUser | null>;
  userStokvels$: Observable<StokvelResponse[]>;
  recentTransactions$: Observable<Transaction[]>;
  walletBalance$: Observable<number>;

  activeTab = 0;

  // Phone editing
  phoneForm: FormGroup;
  phoneEditing = false;
  phoneSaving = false;

  constructor(
    private userService: UserService,
    private stokvelService: StokvelService,
    private txService: TransactionService,
    private auth0Mgmt: Auth0ManagementService,
    private router: Router,
    private snack: MatSnackBar,
    private fb: FormBuilder
  ) {
    this.user$ = this.userService.user$;

    this.userStokvels$ = this.user$.pipe(
      switchMap(user => user?.id
        ? this.stokvelService.getUserStokvels(user.id).pipe(catchError(() => of([])))
        : of([]))
    );

    this.recentTransactions$ = this.txService.getRecentTransactions(10).pipe(catchError(() => of([])));

    this.walletBalance$ = this.txService.getBalance().pipe(
      map((res: any) => (res as any).balance ?? 0),
      catchError(() => of(0))
    );

    this.phoneForm = this.fb.group({
      phoneNumber: ['', [Validators.required, Validators.pattern(/^\+?[0-9]{9,15}$/)]]
    });
  }

  ngOnInit(): void {
    // Pre-fill phone form if we already have a number cached
    this.user$.pipe(
      catchError(() => of(null))
    ).subscribe(user => {
      if (user?.phoneNumber) {
        this.phoneForm.patchValue({ phoneNumber: user.phoneNumber });
      }
    });
  }

  startPhoneEdit(): void {
    this.phoneEditing = true;
  }

  cancelPhoneEdit(): void {
    this.phoneEditing = false;
  }

  savePhone(): void {
    if (this.phoneForm.invalid) return;
    this.phoneSaving = true;
    const phone = this.phoneForm.value.phoneNumber;

    this.auth0Mgmt.updatePhoneNumber(phone).subscribe({
      next: (profile) => {
        this.phoneSaving = false;
        this.phoneEditing = false;
        this.userService.updateCachedPhone(profile.phoneNumber ?? phone);
        this.snack.open('✅ Phone number updated', 'Close', { duration: 4000 });
      },
      error: (err) => {
        this.phoneSaving = false;
        this.snack.open(err?.error?.message || 'Could not update phone number', 'Close', { duration: 5000 });
      }
    });
  }

  getInitials(name?: string): string {
    if (!name) return '?';
    return name.split(' ').slice(0, 2).map(w => w[0]).join('').toUpperCase();
  }

  getTxIcon(type: string): string {
    return type === 'CREDIT' ? 'add_circle' : 'remove_circle';
  }

  getTxColor(type: string): string {
    return type === 'CREDIT' ? '#10b981' : '#ef4444';
  }

  navigateTo(path: string): void {
    this.router.navigate([path]);
  }
}

