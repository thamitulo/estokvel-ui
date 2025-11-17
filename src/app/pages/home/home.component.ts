import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material.module';
import { ActionSectionComponent } from "src/app/shared/action-section/action-section.component";
import { Observable, map } from 'rxjs';
import { AuthService } from '@auth0/auth0-angular';
import { trigger, transition, style, animate } from '@angular/animations';
import { MatSnackBar } from "@angular/material/snack-bar";
import { MatDialog } from "@angular/material/dialog";
import { PageEvent } from "@angular/material/paginator";
import { Router, RouterLink } from "@angular/router";
import { HttpClient, HttpHeaders } from '@angular/common/http';

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
  pagedStokvels: any[] = [];
  stokvels: any[] = [];

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
    public auth: AuthService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.userName$ = this.auth.user$.pipe(
      map(user => user?.name || user?.email || null)
    );

    // Fetch secured API data
    this.auth.isAuthenticated$.subscribe(isAuthenticated => {
      if (isAuthenticated) {
        this.auth.getAccessTokenSilently({
          authorizationParams: {
            audience: 'https://dev-5vp2r4v7ipexzaw3.us.auth0.com/api/v2/'
          }
        }).subscribe({
          next: token => this.loadStokvels(token),
          error: err => console.error('Token error:', err)
        });
      }
    });

    this.updatePagedData();
  }

  private loadStokvels(token: string) {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    this.http.get<any[]>('http://localhost:8080/api/stokvels', { headers })
      .subscribe({
        next: data => {
          console.log('Backend response:', data);
          this.stokvels = data;
          this.updatePagedData();
        },
        error: err => console.error('Backend error:', err)
      });
  }

  updatePagedData() {
    const start = this.currentPage * this.pageSize;
    this.pagedStokvels = this.stokvels.slice(start, start + this.pageSize);
  }

  onPageChange(event: PageEvent) {
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;
    this.updatePagedData();
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
  joinStokvel(stokvel: any) { console.log('Join stokvel', stokvel); }
  learnMore() { console.log('Learn more'); }

  openCampaign(campaignId: any) {
    this.snackBar.open(`Opening campaign ${campaignId} details...`, 'Close', { duration: 3000 });
  }

  getCollectedAmount(stokvel: any): number { return stokvel.contributionAmount; }

  getProgress(stokvel: any): number {
    const collected = this.getCollectedAmount(stokvel);
    return Math.min((collected / stokvel.targetAmount) * 100);
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
}
