import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material.module';
import {Observable, map, last} from 'rxjs';
import { AuthService } from '@auth0/auth0-angular';
import { trigger, transition, style, animate } from '@angular/animations';
import { MatSnackBar } from "@angular/material/snack-bar";
import { MatDialog } from "@angular/material/dialog";
import { PageEvent } from "@angular/material/paginator";
import { Router, RouterLink } from "@angular/router";
import { HttpClient } from '@angular/common/http';
import { StokvelService } from "../../services/stokvel/stokvel.service";
import { StokvelResponse } from "../../models";
import { JoinStokvelModalComponent } from "../../components/stokvel-join/join-stokvel-modal";
import { AppUser, UserService } from "../../services/user/user-service.service";
import {stokvelMemberCount} from "../../components/dashboard/stats.util";

@Component({
  selector: 'app-home',
  imports: [CommonModule, FormsModule, MaterialModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  animations: [
    trigger('fade', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('600ms ease-in', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('600ms ease-out', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {
  today = new Date();
  currentIndex = 0;

  pageSize = 3;
  currentPage = 0;
  totalStokvels = 0;
  pagedStokvels: StokvelResponse[] = [];

  currentUser$: Observable<AppUser | null>;
  isAuthenticated$: Observable<boolean>;

  isLoading = true;

  images = [
    'assets/hero/hero1.png',
    'assets/hero/hero2.png',
    'assets/hero/hero3.png',
  ];

  typeImgClassMap: any = {
    'Savings': 'education-img',
    'Grocery': 'investment-img',
    'Property': 'property-img'
  };

  userName$: Observable<string | null> = new Observable();
  searchValue = '';

  constructor(
    private router: Router,
    public authService: AuthService,
    private userService: UserService,
    private stokvelService: StokvelService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    private http: HttpClient
  ) {
    this.currentUser$ = this.userService.user$;
    this.isAuthenticated$ = this.authService.isAuthenticated$;
  }

  ngOnInit() {
    this.userName$ = this.authService.user$.pipe(
      map(user => user?.name || user?.email || null)
    );
    this.loadStokvels();
  }

  loadStokvels() {
    this.isLoading = true;

    this.stokvelService.getPublicStokvels(this.currentPage, this.pageSize)
      .subscribe({
        next: (response) => {
          this.pagedStokvels = response.content;
          this.totalStokvels = response.totalElements;
          this.isLoading = false;
        },
        error: (error) => {
          console.error('Error loading stokvels:', error);
          this.isLoading = false;
          this.snackBar.open('Failed to load stokvels. Please try again.', 'Close', { duration: 3000 });
          this.pagedStokvels = [];
          this.totalStokvels = 0;
        }
      });
  }

  onPageChange(event: PageEvent) {
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;
    this.loadStokvels(); // Fetch new page from server
  }

  getImageClass(type: string): string {
    return this.typeImgClassMap[type] || 'default-img';
  }

  search() {
    console.log('Searching for', this.searchValue);
  }

  createNewStokvel(): void {
    this.router.navigate(['/create-stokvel']);
  }

  startStokvel() { console.log('Navigate to start stokvel'); }

  joinStokvel(stokvel: StokvelResponse): void {
    this.isAuthenticated$.subscribe(isAuthenticated => {
      if (!isAuthenticated) {
        this.authService.loginWithRedirect({
          appState: { target: '/home' }
        });
        return;
      }

      this.currentUser$.subscribe(user => {
        if (!user?.id) {
          console.error('User ID not available');
          return;
        }

        const dialogRef = this.dialog.open(JoinStokvelModalComponent, {
          width: '600px',
          data: {
            stokvelId: stokvel.id,
            stokvelName: stokvel.name,
            currentUserId: user.id,
            userName: user.name || user.email,
            userProfile: user,
            monthlyContribution: stokvel.monthlyContribution || 0
          }
        });

        dialogRef.afterClosed().subscribe(result => {
          if (result) {
            console.log('Join request submitted successfully');
          }
        });
      });
    });
  }

  learnMore() { console.log('Learn more'); }

  openCampaign(campaignId: any) {
    this.snackBar.open(`Opening campaign ${campaignId} details...`, 'Close', { duration: 3000 });
  }

  getCollectedAmount(stokvel: any): number { return stokvel.contributionAmount || 0; }

  getProgress(stokvel: any): number {
    const collected = this.getCollectedAmount(stokvel);
    return Math.min((collected / (stokvel.targetAmount || 1)) * 100);
  }

  getRemainingAmount(stokvel: any): number {
    const remaining = stokvel.targetAmount - this.getCollectedAmount(stokvel);
    return remaining > 0 ? remaining : 0;
  }

  getProgressColor(stokvel: any): string {
    const progress = this.getProgress(stokvel);
    if (progress >= 100) return 'warn';
    if (progress >= 50) return 'accent';
    return 'primary';
  }

  hasReachedGoal(stokvel: any): boolean {
    return this.getProgress(stokvel) >= 100;
  }

  protected readonly last = last;
  protected readonly length = length;
  protected readonly stokvelMemberCount = stokvelMemberCount;
}
