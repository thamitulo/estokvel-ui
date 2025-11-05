import { Component, OnInit, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {PageEvent} from '@angular/material/paginator';
import {MaterialModule} from "../../material.module";
import {StokvelService} from "../../services/stokvel/stokvel.service";
import {Stokvel, StokvelType} from "../../models/stokvel";
import {StokvelUtils} from "../../utils/StokvelUtils";

@Component({
  selector: 'app-stokvel-list',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  templateUrl: './stokvel-list.component.html',
  standalone: true,
  styleUrls: ['./stokvel-list.component.scss']
})
export class StokvelListComponent implements OnInit {
  stokvelService = inject(StokvelService);
  dialog = inject(MatDialog);
  snack = inject(MatSnackBar);

  sourceStokvels: Stokvel[] = [];
  filteredStokvels: Stokvel[] = [];
  pagedStokvels: Stokvel[] = [];

  pageIndex = 0;
  pageSize = 3;

  searchControl = new FormControl('');

  ngOnInit(): void {
    this.stokvelService.getStokvels().subscribe(data => {
      this.sourceStokvels = data;
      this.filteredStokvels = [...data];
      this.updatePagedData();
    });

    this.searchControl.valueChanges.subscribe(value => {
      const searchTerm = (value || '').trim().toLowerCase();
      this.filteredStokvels = this.sourceStokvels.filter(s =>
        s.name?.toLowerCase().includes(searchTerm) ||
        s.description?.toLowerCase().includes(searchTerm)
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
    return StokvelUtils.getProgress(stokvel);
  }

  progressColor(stokvel: Stokvel): string {
      return StokvelUtils.progressColor(stokvel)
  }

  remainingAmount(stokvel: Stokvel): number {
    return  StokvelUtils.getRemainingAmount(stokvel);
  }

  getCollectedAmount(stokvel: Stokvel): number {
    return StokvelUtils.getCollectedAmount(stokvel);
  }

  joinStokvel(stokvel: any){
    console.log('joining');
  }
}
