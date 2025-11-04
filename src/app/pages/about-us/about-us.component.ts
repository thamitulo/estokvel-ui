import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {MaterialModule} from "../../material.module";


@Component({
  selector: 'about-us',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ],
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent {

  onDocumentDownload(documentType: string): void {
    // Need to Track document downloads for analytics
    console.log(`Document downloaded: ${documentType}`);
  }
}
