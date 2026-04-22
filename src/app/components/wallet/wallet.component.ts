import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MaterialModule } from '../../material.module';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { catchError, finalize, switchMap, take } from 'rxjs/operators';
import { TransactionService, Transaction } from '../../services/stokvel/transaction.service';
import { StokvelService } from '../../services/stokvel/stokvel.service';
import { UserService } from '../../services/user/user-service.service';
import { StokvelResponse } from '../../models/stokvel';

type WalletTab = 'overview' | 'deposit' | 'transfer' | 'history';

@Component({
  selector: 'app-wallet',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule, MaterialModule],
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss']
})
export class WalletComponent implements OnInit {
  activeTab: WalletTab = 'overview';

  balance$: Observable<number>;
  transactions$: Observable<Transaction[]>;
  userStokvels$: Observable<StokvelResponse[]>;

  /** Resolved list used synchronously in deposit/transfer handlers */
  stokvels: StokvelResponse[] = [];

  private balanceRefresh$ = new BehaviorSubject<void>(undefined);
  private txRefresh$ = new BehaviorSubject<void>(undefined);

  depositForm: FormGroup;
  transferForm: FormGroup;

  depositSubmitting = false;
  transferSubmitting = false;

  /** Last deposit routing result */
  lastDepositResult: { routedToStokvel: boolean; linkedStokvelName?: string; routingMessage?: string } | null = null;

  constructor(
    private fb: FormBuilder,
    private txService: TransactionService,
    private stokvelService: StokvelService,
    private userService: UserService,
    private snack: MatSnackBar
  ) {
    // stokvelId = null means "wallet only"; a chosen stokvel routes directly there
    this.depositForm = this.fb.group({
      amount:    ['', [Validators.required, Validators.min(1)]],
      stokvelId: [null]   // optional — null = deposit to wallet
    });

    this.transferForm = this.fb.group({
      stokvelId:   [null, Validators.required],
      amount:      ['', [Validators.required, Validators.min(1)]],
      reference:   [''],
      description: ['']
    });

    this.balance$ = this.balanceRefresh$.pipe(
      switchMap(() => this.txService.getBalance().pipe(catchError(() => of({ balance: 0 })))),
      switchMap(res => of((res as any).balance ?? 0))
    );

    this.transactions$ = this.txRefresh$.pipe(
      switchMap(() => this.txService.getRecentTransactions(20).pipe(catchError(() => of([]))))
    );

    this.userStokvels$ = this.userService.user$.pipe(
      switchMap(user => user?.id
        ? this.stokvelService.getUserStokvels(user.id).pipe(catchError(() => of([])))
        : of([]))
    );
  }

  ngOnInit(): void {
    // Cache stokvels locally for form logic
    this.userStokvels$.subscribe(list => { this.stokvels = list; });

    // Deposit form: auto-fill amount when a stokvel is selected
    this.depositForm.get('stokvelId')!.valueChanges.subscribe(id => {
      if (id) {
        const s = this.stokvels.find(x => x.id === id);
        if (s?.monthlyContribution && !this.depositForm.get('amount')!.value) {
          this.depositForm.get('amount')!.setValue(s.monthlyContribution);
        }
      }
    });

    // Transfer form: auto-fill amount + description when stokvel changes
    this.transferForm.get('stokvelId')!.valueChanges.subscribe(id => {
      const s = this.stokvels.find(x => x.id === id);
      if (s?.monthlyContribution) {
        this.transferForm.get('amount')!.setValue(s.monthlyContribution);
        this.transferForm.get('description')!.setValue(`Contribution to ${s.name}`);
      }
    });
  }

  setTab(tab: WalletTab): void {
    this.activeTab = tab;
    if (tab === 'deposit') this.lastDepositResult = null;
  }

  get selectedDepositStokvel(): StokvelResponse | null {
    const id = this.depositForm.get('stokvelId')?.value;
    return id ? (this.stokvels.find(s => s.id === id) ?? null) : null;
  }

  deposit(): void {
    if (this.depositForm.invalid || this.depositSubmitting) return;
    this.depositSubmitting = true;
    this.lastDepositResult = null;

    const { amount, stokvelId } = this.depositForm.value;
    const selectedStokvel = stokvelId ? this.stokvels.find(s => s.id === stokvelId) : null;

    // Build reference from selected stokvel name/id or leave blank for wallet-only
    const reference = selectedStokvel
      ? `STK-${selectedStokvel.id}`
      : undefined;

    this.txService.depositToWallet(amount, reference)
      .pipe(finalize(() => this.depositSubmitting = false))
      .subscribe({
        next: (tx) => {
          this.lastDepositResult = {
            routedToStokvel: tx.routedToStokvel ?? false,
            linkedStokvelName: tx.linkedStokvelName,
            routingMessage: tx.routingMessage
          };

          const msg = tx.routedToStokvel
            ? `✅ R${Number(amount).toLocaleString()} contributed to "${tx.linkedStokvelName}"!`
            : `✅ R${Number(amount).toLocaleString()} deposited to your wallet.`;

          this.snack.open(msg, 'Close', {
            duration: 5000,
            panelClass: 'success-snackbar'
          });
          this.depositForm.reset();
          this.balanceRefresh$.next();
          this.txRefresh$.next();
        },
        error: (err) => {
          const msg = err?.error?.message || 'Deposit failed. Please try again.';
          this.snack.open(`❌ ${msg}`, 'Close', { duration: 5000, panelClass: 'error-snackbar' });
        }
      });
  }

  transfer(): void {
    if (this.transferForm.invalid || this.transferSubmitting) return;
    this.transferSubmitting = true;
    const { stokvelId, amount, reference, description } = this.transferForm.value;

    // Client-side balance check before calling backend
    this.balance$.pipe(take(1)).subscribe(balance => {
      if (Number(amount) > balance) {
        this.transferSubmitting = false;
        this.snack.open(
          `❌ Insufficient balance. Available: R${Number(balance).toLocaleString('en-ZA', { minimumFractionDigits: 2 })}`,
          'Close', { duration: 5000, panelClass: 'error-snackbar' }
        );
        return;
      }

      this.txService.transferToStokvel({
        stokvelId, amount,
        reference: reference || `wallet-transfer-${stokvelId}-${Date.now()}`,
        description: description || `Wallet transfer to stokvel`,
        currency: 'ZAR'
      }).pipe(finalize(() => this.transferSubmitting = false))
        .subscribe({
          next: () => {
            this.snack.open(`✅ R${Number(amount).toLocaleString()} transferred to stokvel!`, 'Close', {
              duration: 4000, panelClass: 'success-snackbar'
            });
            this.transferForm.reset();
            this.balanceRefresh$.next();
            this.txRefresh$.next();
            this.setTab('overview');
          },
          error: (err) => {
            const msg = err?.error?.message || 'Transfer failed. Please try again.';
            this.snack.open(`❌ ${msg}`, 'Close', { duration: 5000, panelClass: 'error-snackbar' });
          }
        });
    });
  }

  getTransactionIcon(type: string): string {
    const m: Record<string, string> = {
      CREDIT: 'add_circle', DEBIT: 'remove_circle',
      CREDIT_REVERSAL: 'undo', DEBIT_REVERSAL: 'redo'
    };
    return m[type] || 'swap_horiz';
  }

  getTransactionColor(type: string): string {
    return type === 'CREDIT' ? '#10b981' : '#ef4444';
  }

  getStatusColor(status: string): string {
    const m: Record<string, string> = {
      COMPLETED: '#10b981', PENDING: '#f59e0b',
      FAILED: '#ef4444', REVERSED: '#8b5cf6'
    };
    return m[status] || '#6b7280';
  }
}

