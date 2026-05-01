import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
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
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule, MaterialModule],
  templateUrl: './stokvel-manage.component.html',
  styleUrls: ['./stokvel-manage.component.scss']
})
export class StokvelManageComponent implements OnInit {

  stokvel: StokvelResponse | null = null;
  pendingRequests: any[] = [];
  pendingProposals: any[] = [];   // admin removal proposals
  currentUserAuth0Id = '';
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

  // Proposal state
  proposalTargetMember: StokvelMemberDto | null = null;
  proposalReason = '';
  proposalLoading = false;
  showProposalForm = false;

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
    // Get current user ID for proposal logic
    this.userService.user$.subscribe(u => { if (u?.id) this.currentUserAuth0Id = u.id; });

    this.route.paramMap.pipe(
      switchMap(params => {
        const id = Number(params.get('id'));
        return forkJoin({
          stokvel:   this.stokvelService.getStokvelById(id).pipe(catchError(() => of(null))),
          pending:   this.stokvelService.getPendingJoinRequests(id).pipe(catchError(() => of([]))),
          proposals: this.stokvelService.getPendingRemovalProposals(id).pipe(catchError(() => of([])))
        });
      })
    ).subscribe(({ stokvel, pending, proposals }) => {
      this.stokvel = stokvel;
      this.pendingRequests = pending as any[];
      this.pendingProposals = proposals as any[];

      if (!stokvel || (!stokvel.isOwner && stokvel.currentUserRole !== 'ADMIN')) {
        this.snack.open('Access denied – admins only', 'Close', { duration: 4000 });
        const redirectId = stokvel?.id ?? this.route.snapshot.paramMap.get('id');
        this.router.navigate(redirectId ? ['/stokvels', redirectId] : ['/stokvels']);
        return;
      }

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

  get adminCount(): number {
    return this.stokvel?.adminMembers?.length ?? 0;
  }

  /** True if this member is the ONLY admin */
  isLastAdmin(member: StokvelMemberDto): boolean {
    return member.role === 'ADMIN' && this.adminCount <= 1;
  }

  /** True if removing this admin requires a proposal (multiple admins) */
  requiresProposal(member: StokvelMemberDto): boolean {
    return member.role === 'ADMIN' && this.adminCount > 1;
  }

  /** True if current user already has a pending proposal targeting this member */
  hasPendingProposalFor(member: StokvelMemberDto): boolean {
    return this.pendingProposals.some(p => p.targetMemberId === member.id);
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

  // ── Invite member ────────────────────────────────────────────────────────
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

  // ── Remove REGULAR member (immediate) ────────────────────────────────────
  removeMember(member: StokvelMemberDto): void {
    if (!member.id || !this.stokvel) return;

    if (this.isLastAdmin(member)) {
      this.snack.open('❌ Cannot remove the only admin. Assign another admin first.', 'Close', { duration: 5000 });
      return;
    }
    if (this.requiresProposal(member)) {
      this.snack.open('Admin removal requires ratification — use "Propose Removal" below.', 'Close', { duration: 5000 });
      return;
    }

    const name = member.displayName || member.userName;
    const confirmed = window.confirm(`Remove ${name} from "${this.stokvel.name}"?\nThis action cannot be undone.`);
    if (!confirmed) return;
    this.removingMemberId = member.id;

    this.stokvelService.removeMember(this.stokvel.id, member.id).subscribe({
      next: () => {
        this.removingMemberId = null;
        this.snack.open(`${name} removed`, 'Close', { duration: 3000 });
        this.stokvelService.getStokvelById(this.stokvel!.id).subscribe(s => this.stokvel = s);
      },
      error: err => {
        this.removingMemberId = null;
        this.snack.open(err?.error?.message || 'Could not remove member', 'Close', { duration: 5000, panelClass: 'error-snackbar' });
      }
    });
  }

  // ── Propose removal of an ADMIN (requires ratification) ──────────────────
  openProposalForm(member: StokvelMemberDto): void {
    this.proposalTargetMember = member;
    this.proposalReason = '';
    this.showProposalForm = true;
  }

  cancelProposalForm(): void {
    this.showProposalForm = false;
    this.proposalTargetMember = null;
  }

  submitProposal(): void {
    if (!this.proposalTargetMember?.id || !this.stokvel) return;
    this.proposalLoading = true;

    this.stokvelService.proposeAdminRemoval(
      this.stokvel.id,
      this.proposalTargetMember.id,
      this.proposalReason
    ).subscribe({
      next: (p) => {
        this.proposalLoading = false;
        this.showProposalForm = false;
        this.pendingProposals = [...this.pendingProposals, p];
        this.snack.open(
          `✅ Removal proposal submitted. Other admins have been notified to ratify.`,
          'Close', { duration: 6000 }
        );
        this.proposalTargetMember = null;
      },
      error: err => {
        this.proposalLoading = false;
        this.snack.open(err?.error?.error || 'Failed to submit proposal', 'Close', { duration: 5000, panelClass: 'error-snackbar' });
      }
    });
  }

  // Ratify proposal (another admin approves the removal)
  proposalApproveId: number | null = null;
  proposalApproveNote = '';
  proposalRejectId: number | null = null;
  proposalRejectNote = '';

  openApproveForm(proposal: any): void {
    this.proposalApproveId = proposal.id;
    this.proposalApproveNote = '';
    this.proposalRejectId = null;
  }

  openRejectForm(proposal: any): void {
    this.proposalRejectId = proposal.id;
    this.proposalRejectNote = '';
    this.proposalApproveId = null;
  }

  approveProposal(proposal: any): void {
    if (!this.stokvel) return;
    this.stokvelService.approveRemovalProposal(this.stokvel.id, proposal.id, this.proposalApproveNote).subscribe({
      next: () => {
        this.pendingProposals = this.pendingProposals.filter(p => p.id !== proposal.id);
        this.proposalApproveId = null;
        this.snack.open(`✅ Admin removal approved and executed.`, 'Close', { duration: 4000 });
        this.stokvelService.getStokvelById(this.stokvel!.id).subscribe(s => this.stokvel = s);
      },
      error: err => this.snack.open(err?.error?.error || 'Could not approve proposal', 'Close', { duration: 5000, panelClass: 'error-snackbar' })
    });
  }

  rejectProposal(proposal: any): void {
    if (!this.stokvel) return;
    this.stokvelService.rejectRemovalProposal(this.stokvel.id, proposal.id, this.proposalRejectNote).subscribe({
      next: () => {
        this.pendingProposals = this.pendingProposals.filter(p => p.id !== proposal.id);
        this.proposalRejectId = null;
        this.snack.open('Removal proposal rejected.', 'Close', { duration: 3000 });
      },
      error: err => this.snack.open(err?.error?.error || 'Could not reject proposal', 'Close', { duration: 5000, panelClass: 'error-snackbar' })
    });
  }

  cancelProposal(proposal: any): void {
    if (!this.stokvel) return;
    this.stokvelService.cancelRemovalProposal(this.stokvel.id, proposal.id).subscribe({
      next: () => {
        this.pendingProposals = this.pendingProposals.filter(p => p.id !== proposal.id);
        this.snack.open('Proposal cancelled.', 'Close', { duration: 3000 });
      },
      error: err => this.snack.open(err?.error?.error || 'Could not cancel', 'Close', { duration: 4000 })
    });
  }

  /** Whether the current user is the proposer */
  isProposer(proposal: any): boolean {
    return proposal.proposedByAuth0Id === this.currentUserAuth0Id;
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

