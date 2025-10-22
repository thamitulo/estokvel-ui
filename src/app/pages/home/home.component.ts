import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material.module';
import { ActionSectionComponent } from "src/app/shared/action-section/action-section.component";
import { Observable, map } from 'rxjs';
import { AuthService } from '@auth0/auth0-angular';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, MaterialModule, ActionSectionComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
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

  images = [
    'assets/hero/hero1.png',
    'assets/hero/hero2.png',
    'assets/hero/hero3.png',
  ];

  stokvels = [
    {
      name: 'Savings Club',
      description: 'Monthly savings stokvel for community members',
      stokvelType: { name: 'Savings' },
      startDate: [2025, 1, 15],
      active: true,
      contributionAmount: 500,
      adminUser: 'john'
    },
    {
      name: 'Grocery Stokvel',
      description: 'For shared bulk grocery purchases',
      stokvelType: { name: 'Grocery' },
      startDate: [2025, 3, 10],
      active: false,
      contributionAmount: 300,
      adminUser: 'mary'
    }
  ];

  userName$: Observable<string | null> = new Observable();
  searchValue = '';

  constructor(public auth: AuthService) {}

  ngOnInit() {
    // Extract name or fallback to email
    this.userName$ = this.auth.user$.pipe(
      map(user => user?.name || user?.email || null)
    );
  }

  search() {
    console.log('Searching for', this.searchValue);
  }

  createStokvel() {
    console.log('Navigate to create stokvel');
  }
}
