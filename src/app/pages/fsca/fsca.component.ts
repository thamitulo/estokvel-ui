import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-fsca',
  imports: [CommonModule, RouterModule, MatIconModule, MatButtonModule],
  templateUrl: './fsca.component.html',
  styleUrl: './fsca.component.scss',
  standalone: true
})
export class FscaComponent {}

