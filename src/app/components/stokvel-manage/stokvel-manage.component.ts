import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { forkJoin, of } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { MaterialModule } from '../../material.module';
import { StokvelService } from '../../services/stokvel/stokvel.service';
import { UserService } from '../../services/user/user-service.service';
import { StokvelResponse, StokvelMemberDto } from '../../models/stokvel';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-stokvel-manage',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule, MaterialModule],
  templateUrl: './stokvel-manage.component.html',
  styleUrls: ['./stokvel-manage.component.scss']
})
export class StokvelManageComponent implements OnInit {

  stokvel: StokvelResponse | null = null;
  pendingRequests: any[] = [];
  isLoading = true;
  activeTab = 0;

  // Invite form
  inviteForm: FormGroup;
  inviteLoading = false;

  // Payment request form
  paymentForm: FormGroup;
  paymentLoading = false;

  // Outstanding members preview
  outstandingMembers: any[] = [];
  outstandingLoading = false;

  // Remove confirmation
  removingMemberId: number | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private stokvelService: StokvelService,
    private userService: UserService,
    private http: HttpClient,
    private fb: FormBuilder,
    private snack: MatSnackBar
  ) {
    this.inviteForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      role: ['MEMBER']
    });

    this.paymentForm = this.fb.group({
      amount: ['', [Validators.required, Validators.min(1)]],
      message: ['']
    });
  }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap(params => {
        const id = Number(params.get('id'));
        return forkJoin({
          stokvel: this.stokvelService.getStokvelById(id).pipe(catchError(() => of(null))),
          pending: this.stokvelService.getPendingJoinRequests(id).pipe(catchError(() => of([])))
        });
      })
    ).subscribe(({ stokvel, pending }) => {
      this.stokvel = stokvel;
      this.pendingRequests = pending as any[];

      if (!stokvel || (!stokvel.isOwner && stokvel.currentUserRole !== 'ADMIN')) {
        this.snack.open('Access denied – admins only', 'Close', { duration: 4000 });
        this.router.navigate(['/stokvels', this.stokvel?.id ?? '']);
        return;
      }

      // Auto-fill amount with monthly contribution
      if (stokvel.monthlyContribution) {
        this.paymentForm.get('amount')!.setValue(stokvel.monthlyContribution);
      }
      this.isLoading = false;
      this.loadOutstandingMembers();
    });
  }

  get allMembers(): StokvelMemberDto[] {
    if (!this.stokvel) return [];
    return [...(this.stokvel.adminMembers ?? []), ...(this.stokvel.regularMembers ?? [])];
  }

  // ── Join Request actions ──────────────────────────────────────────────────
  approveRequest(requestId: number): void {
    this.stokvelService.updateJoinRequestStatus(requestId, 'APPROVED', 'Welcome to the stokvel!')
      .subscribe({
        next: () => {
          this.pendingRequests = this.pendingRequests.filter(r => r.id !== requestId);
          this.snack.open('✅ Join request approved', 'Close', { duration: 3000 });
          // Refresh stokvel to update member list
          this.stokvelService.getStokvelById(this.stokvel!.id).subscribe(s => this.stokvel = s);
        },
        error: err => this.snack.open(err?.error?.message || 'Failed to approve', 'Close', { duration: 4000 })
      });
  }

  rejectRequest(requestId: number): void {
    this.stokvelService.updateJoinRequestStatus(requestId, 'REJECTED', 'Thank you for your interest.')
      .subscribe({
        next: () => {
          this.pendingRequests = this.pendingRequests.filter(r => r.id !== requestId);
          this.snack.open('Request rejected', 'Close', { duration: 3000 });
        },
        error: err => this.snack.open(err?.error?.message || 'Failed to reject', 'Close', { duration: 4000 })
      });
  }

  // ── Invite member by email ───────────────────────────────────────────────
  inviteMember(): void {
    if (this.inviteForm.invalid || !this.stokvel) return;
    this.inviteLoading = true;
    const { email, role } = this.inviteForm.value;

    this.http.post(`${environment.apiUrl}stokvels/${this.stokvel.id}/members`,
      null, { params: { userEmail: email, role } })
      .subscribe({
        next: () => {
          this.inviteLoading = false;
          this.snack.open(`✅ Invitation sent to ${email}`, 'Close', { duration: 4000 });
          this.inviteForm.reset({ email: '', role: 'MEMBER' });
          // Refresh member list
          this.stokvelService.getStokvelById(this.stokvel!.id).subscribe(s => this.stokvel = s);
        },
        error: err => {
          this.inviteLoading = false;
          this.snack.open(err?.error?.message || 'Failed to invite member', 'Close', { duration: 5000, panelClass: 'error-snackbar' });
        }
      });
  }

  // ── Remove member ────────────────────────────────────────────────────────
  removeMember(member: StokvelMemberDto): void {
    if (!member.id || !this.stokvel) return;
    const confirmed = window.confirm(`Remove ${member.displayName || member.userName} from "${this.stokvel.name}"?`);
    if (!confirmed) return;
    this.removingMemberId = member.id;

    this.stokvelService.removeMember(this.stokvel.id, member.id).subscribe({
      next: () => {
        this.removingMemberId = null;
        this.snack.open(`${member.displayName || member.userName} removed`, 'Close', { duration: 3000 });
        this.stokvelService.getStokvelById(this.stokvel!.id).subscribe(s => this.stokvel = s);
      },
      error: err => {
        this.removingMemberId = null;
        this.snack.open(err?.error?.message || 'Could not remove member', 'Close', { duration: 5000, panelClass: 'error-snackbar' });
      }
    });
  }

  // ── Outstanding members ──────────────────────────────────────────────────
  loadOutstandingMembers(): void {
    if (!this.stokvel) return;
    this.outstandingLoading = true;
    this.http.get<any[]>(`${environment.apiUrl}stokvels/${this.stokvel.id}/members/outstanding`)
      .subscribe({
        next: (data) => { this.outstandingMembers = data; this.outstandingLoading = false; },
        error: () => { this.outstandingLoading = false; }
      });
  }

  get outstandingCount(): number {
    return this.outstandingMembers.filter(m => m.hasOutstanding).length;
  }

  // ── Request payment ──────────────────────────────────────────────────────
  requestPayment(): void {
    if (this.paymentForm.invalid || !this.stokvel) return;
    this.paymentLoading = true;
    const { amount } = this.paymentForm.value;

    this.http.post(`${environment.apiUrl}stokvels/${this.stokvel.id}/request-payment`, { amount })
      .subscribe({
        next: (res: any) => {
          this.paymentLoading = false;
          const count = res?.remindersCount ?? 0;
          if (count === 0) {
            this.snack.open('🎉 All members are up to date — no reminders sent!', 'Close', { duration: 5000 });
          } else {
            this.snack.open(`✅ Reminders sent to ${count} member${count !== 1 ? 's' : ''} with outstanding contributions`, 'Close', { duration: 5000 });
          }
          this.loadOutstandingMembers(); // refresh list
        },
        error: err => {
          this.paymentLoading = false;
          this.snack.open(err?.error?.message || 'Failed to send reminders', 'Close', { duration: 5000, panelClass: 'error-snackbar' });
        }
      });
  }

  // ── Helpers ──────────────────────────────────────────────────────────────
  getInitials(name: string): string {
    if (!name) return '?';
    return name.split(' ').slice(0, 2).map(w => w[0]).join('').toUpperCase();
  }

  goBack(): void {
    this.router.navigate(['/stokvels', this.stokvel?.id]);
  }
}

