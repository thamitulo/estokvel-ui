import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material.module';

@Component({
  selector: 'app-action-section',
  imports: [CommonModule, MaterialModule],
  templateUrl: './action-section.component.html',
  standalone: true,
  styleUrls: ['./action-section.component.scss']
})
export class ActionSectionComponent {}
