import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-compliance',
  imports: [CommonModule, RouterModule, MatIconModule, MatButtonModule],
  templateUrl: './compliance.component.html',
  styleUrl: './compliance.component.scss',
  standalone: true
})
export class ComplianceComponent {}
