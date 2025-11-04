import { Component, OnInit, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import {Stokvel} from "../models/stokvel";
import {StokvelService} from "../services/stokvel.service";
import {MaterialModule} from "../material.module";

@Component({
  selector: 'app-stokvel-list',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  templateUrl: './stokvel-list.component.html',
  styleUrls: ['./stokvel-list.component.scss']
})
export class StokvelListComponent implements OnInit {
  stokvelService = inject(StokvelService);
  dialog = inject(MatDialog);
  snack = inject(MatSnackBar);

  pagedStokvels: Stokvel[] = [
    {
      name: 'Savings Club',
      description: 'Monthly savings stokvel for community members',
      stokvelType: { name: 'Savings' },
      startDate: '2025-11-03',
      active: true,
      contributionAmount: 500,
      targetAmount: 350000,
      adminUser: 'john'
    },
    {
      name: 'Grocery Stokvel',
      description: 'For shared bulk grocery purchases',
      stokvelType: { name: 'Grocery' },
      startDate: '2025-11-03',
      active: false,
      contributionAmount: 12500,
      targetAmount: 25000,
      adminUser: 'mary'
    },
    {
      name: 'My Property Stokvel',
      description: 'For buing properties together',
      stokvelType: { name: 'Property' },
      startDate: '2025-11-03',
      active: false,
      contributionAmount: 40000,
      targetAmount: 120000,
      adminUser: 'mary'
    },
    {
      name: 'My Party Stokvel',
      description: 'For throwing parties',
      stokvelType: { name: 'Property' },
      startDate: '2025-11-03',
      active: false,
      contributionAmount: 300,
      targetAmount: 500,
      adminUser: 'mary'
    },
    {
      name: 'Funeral Cover',
      description: 'Helping hand during bereavement',
      stokvelType: { name: 'Funeral' },
      startDate: '2025-11-03',
      active: false,
      contributionAmount: 150,
      targetAmount: 500,
      adminUser: 'mary'
    }
  ];

  filteredStokvels: Stokvel[] = [];

  pageIndex = 0;
  pageSize = 3;

  searchControl = new FormControl('');

  ngOnInit(): void {
    this.stokvelService.getStokvels().subscribe(data => {
      this.pagedStokvels = data;
      this.filteredStokvels = [...this.pagedStokvels];
      this.updatePagedData();
    });

    this.searchControl.valueChanges.subscribe(value => {
      const searchTerm = value?.trim().toLowerCase() || '';
      this.filteredStokvels = this.pagedStokvels.filter(s =>
        (s.name?.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (s.description?.toLowerCase().includes(searchTerm.toLowerCase()))
      );
      this.pageIndex = 0;
      this.updatePagedData();
    });
  }

  updatePagedData() {
    const start = this.pageIndex * this.pageSize;
    this.pagedStokvels = this.filteredStokvels.slice(start, start + this.pageSize);
  }

  pageChange(event: PageEvent) {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.updatePagedData();
  }

  progress(stokvel: Stokvel): number {
    return Math.min(Math.round((stokvel.totalContributions ?? 0) / (stokvel.targetAmount ?? 1) * 100));
  }

  progressColor(stokvel: Stokvel): string {
    const pct = this.progress(stokvel);
    if (pct >= 100) return 'primary';
    if (pct >= 50) return 'accent';
    return 'warn';
  }

  remainingAmount(stokvel: Stokvel): number {
    const remaining = ( stokvel.targetAmount ?? 0 ) - (stokvel.contributionAmount ?? 0);
    return remaining > 0 ? remaining : 0;
  }

  joinStokvel(stokvel: any){
    console.log('joining');
  }
}
