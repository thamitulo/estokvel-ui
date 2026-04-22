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

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule, MaterialModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user$: Observable<AppUser | null>;
  userStokvels$: Observable<StokvelResponse[]>;
  recentTransactions$: Observable<Transaction[]>;
  walletBalance$: Observable<number>;

  activeTab = 0;

  constructor(
    private userService: UserService,
    private stokvelService: StokvelService,
    private txService: TransactionService,
    private router: Router,
    private snack: MatSnackBar
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
  }

  ngOnInit(): void {}

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

