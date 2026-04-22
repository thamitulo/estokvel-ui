import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-legal',
  imports: [CommonModule, RouterModule, MatIconModule, MatButtonModule],
  templateUrl: './legal.component.html',
  styleUrl: './legal.component.scss',
  standalone: true
})
export class LegalComponent {}
