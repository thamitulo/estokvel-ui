import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, of } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { MaterialModule } from '../../material.module';
import { StokvelService } from '../../services/stokvel/stokvel.service';
import { UserService } from '../../services/user/user-service.service';
import { StokvelResponse } from '../../models/stokvel';
import { StokvelUtils } from '../../utils/StokvelUtils';
import { JoinStokvelModalComponent } from '../stokvel-join/join-stokvel-modal';

@Component({
  selector: 'app-stokvel-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, MaterialModule],
  templateUrl: './stokvel-detail.component.html',
  styleUrls: ['./stokvel-detail.component.scss']
})
export class StokvelDetailComponent implements OnInit {
  stokvel$!: Observable<StokvelResponse | null>;

  private readonly CIRCUMFERENCE = 251.2;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private stokvelService: StokvelService,
    private userService: UserService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.stokvel$ = this.route.paramMap.pipe(
      switchMap(params => {
        const id = Number(params.get('id'));
        return this.stokvelService.getStokvelById(id).pipe(
          catchError((err) => {
            if (err?.status === 403) {
              this.snackBar.open('This is a private stokvel — you need an invitation to view it.', 'Close', { duration: 5000 });
              this.router.navigate(['/stokvels']);
              return of(null);
            }
            return this.stokvelService.getPublicStokvelById(id).pipe(
              catchError(() => {
                this.snackBar.open('Could not load stokvel details', 'Close', { duration: 4000 });
                return of(null);
              })
            );
          })
        );
      })
    );
  }

  // ── Membership helpers ──────────────────────────────────────────────────
  isAdmin(s: StokvelResponse): boolean         { return s.currentUserRole === 'ADMIN' || s.isOwner === true; }
  isMember(s: StokvelResponse): boolean        { return s.isMember === true; }
  isPublicStokvel(s: StokvelResponse): boolean { return s.privacy?.toUpperCase() === 'PUBLIC'; }
  isFull(s: StokvelResponse): boolean {
    const total = s.totalMembers ?? (s.memberCount + s.adminCount);
    return total >= s.maxMembers;
  }

  // ── Navigation ──────────────────────────────────────────────────────────
  goBack(): void                                { this.router.navigate(['/stokvels']); }
  manageStokvel(s: StokvelResponse): void      { this.router.navigate(['/stokvels', s.id, 'manage']); }

  // ── Actions ─────────────────────────────────────────────────────────────
  leaveStokvel(stokvel: StokvelResponse): void {
    const confirmed = window.confirm(
      `Are you sure you want to leave "${stokvel.name}"?\nThis action cannot be undone.`
    );
    if (!confirmed) return;

    this.stokvelService.leaveStokvel(stokvel.id).subscribe({
      next: () => {
        this.snackBar.open(`You have left "${stokvel.name}"`, 'Close', { duration: 4000 });
        this.router.navigate(['/stokvels']);
      },
      error: (err) => {
        const msg = err?.error?.message || 'Could not leave stokvel. You may be the last admin.';
        this.snackBar.open(msg, 'Close', { duration: 5000, panelClass: 'error-snackbar' });
      }
    });
  }

  messageAdmins(stokvel: StokvelResponse): void {
    if (stokvel.adminMembers?.length) {
      const emails = stokvel.adminMembers.map(a => a.userEmail).join(',');
      window.open(`mailto:${emails}?subject=Re: ${stokvel.name}&body=Hi admin,`, '_blank');
    } else {
      this.snackBar.open('No admin contact info available.', 'Close', { duration: 3000 });
    }
  }

  openJoinModal(stokvel: StokvelResponse): void {
    this.userService.user$.pipe(
      switchMap(user => {
        const ref = this.dialog.open(JoinStokvelModalComponent, {
          width: '500px',
          data: {
            stokvelId: stokvel.id,
            stokvelName: stokvel.name,
            currentUserId: user?.id ?? '',
            userProfile: user,
            monthlyContribution: stokvel.monthlyContribution
          }
        });
        return ref.afterClosed();
      })
    ).subscribe(result => {
      if (result) this.snackBar.open('Join request submitted!', 'Close', { duration: 3000 });
    });
  }

  // ── Type helpers ────────────────────────────────────────────────────────
  getTypeIcon(type: string): string {
    return ({ INVESTMENT:'trending_up', PROPERTY:'home', FAMILY:'diversity_3',
               BURIAL:'favorite', ROTATIONAL:'autorenew' } as Record<string,string>)[type?.toUpperCase()] ?? 'savings';
  }
  getTypeLabel(type: string): string {
    return ({ INVESTMENT:'Investment Club', PROPERTY:'Property Stokvel', FAMILY:'Family Fund',
               BURIAL:'Burial Society', ROTATIONAL:'Rotational Savings' } as Record<string,string>)[type?.toUpperCase()] ?? type;
  }
  getBannerClass(type: string): string {
    return ({ INVESTMENT:'banner-investment', PROPERTY:'banner-property', FAMILY:'banner-family',
               BURIAL:'banner-burial', ROTATIONAL:'banner-rotational' } as Record<string,string>)[type?.toUpperCase()] ?? 'banner-default';
  }

  // ── Progress ────────────────────────────────────────────────────────────
  getProgress(s: StokvelResponse): number      { return StokvelUtils.getProgress(s); }
  getProgressColor(s: StokvelResponse): string { return StokvelUtils.progressColor(s); }
  getCollected(s: StokvelResponse): number     { return StokvelUtils.getCollectedAmount(s); }
  getRemaining(s: StokvelResponse): number     { return StokvelUtils.getRemainingAmount(s); }

  // ── SVG gauge ───────────────────────────────────────────────────────────
  getGaugeDashOffset(s: StokvelResponse): number {
    if (!s.maxMembers) return this.CIRCUMFERENCE;
    const total = s.totalMembers ?? (s.memberCount + s.adminCount);
    return this.CIRCUMFERENCE * (1 - Math.min(total / s.maxMembers, 1));
  }

  // ── Avatar initials ─────────────────────────────────────────────────────
  getInitials(name: string): string {
    if (!name) return '?';
    return name.split(' ').slice(0, 2).map(w => w[0]).join('').toUpperCase();
  }

  /**
   * Mask an email for non-admin viewers (POPIA compliance).
   * admin@example.com → ad***@ex***.com
   * Returns the original if the viewer is an admin.
   */
  maskEmail(email: string | undefined, stokvel: StokvelResponse): string {
    if (!email) return '';
    if (this.isAdmin(stokvel)) return email; // admins see full email
    const [local, domain] = email.split('@');
    if (!domain) return email;
    const maskedLocal = local.slice(0, 2) + '***';
    const [domainName, ...tldParts] = domain.split('.');
    const maskedDomain = domainName.slice(0, 2) + '***';
    return `${maskedLocal}@${maskedDomain}.${tldParts.join('.')}`;
  }
}

