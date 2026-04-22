import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-popia',
  imports: [CommonModule, RouterModule, MatIconModule, MatButtonModule],
  templateUrl: './popia.component.html',
  styleUrl: './popia.component.scss',
  standalone: true
})
export class PopiaComponent {}
