import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-regulatory',
  imports: [CommonModule, RouterModule, MatIconModule, MatButtonModule],
  templateUrl: './regulatory.component.html',
  styleUrl: './regulatory.component.scss',
  standalone: true
})
export class RegulatoryComponent {}
