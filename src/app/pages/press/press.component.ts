import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-press',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatSnackBarModule,
    MatProgressSpinnerModule
  ],
  templateUrl: './press.component.html',
  styleUrl: './press.component.scss',
  standalone: true
})
export class PressComponent implements OnInit {
  newsletterForm: FormGroup;
  isSubmitting: boolean = false;

  constructor(
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private clipboard: Clipboard
  ) {
    this.newsletterForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      consent: [false, Validators.requiredTrue]
    });
  }

  ngOnInit(): void {}

  shareArticle(): void {
    const articleUrl = 'https://www.itweb.co.za/article/estokvel-turns-stokvels-into-business-entities/KwbrpOqgjpAMDLZn';
    const articleTitle = 'eStokvel turns stokvels into business entities - ITWeb';
    const shareText = `Check out this article about eStokvel transforming traditional stokvels into business entities:`;

    if (navigator.share) {
      navigator.share({
        title: articleTitle,
        text: shareText,
        url: articleUrl
      }).catch(error => {
        console.log('Error sharing:', error);
        this.copyToClipboard(articleUrl);
      });
    } else {
      this.copyToClipboard(articleUrl);
    }
  }

  private copyToClipboard(text: string): void {
    this.clipboard.copy(text);
    this.snackBar.open('Article link copied to clipboard!', 'Close', {
      duration: 3000,
      panelClass: ['success-snackbar']
    });
  }

  downloadAsset(assetType: string): void {
    // use to trigger actual downloads
    // For now, show a snackbar message

    let message = '';
    switch(assetType) {
      case 'logos':
        message = 'Downloading brand logos...';
        break;
      case 'photos':
        message = 'Downloading team photos...';
        break;
      case 'presskit':
        message = 'Downloading press kit...';
        break;
      default:
        message = 'Downloading media asset...';
    }

    this.snackBar.open(message, 'Close', {
      duration: 3000,
      panelClass: ['info-snackbar']
    });

    // Simulate download
    setTimeout(() => {
      this.snackBar.open('Download complete!', 'Close', {
        duration: 2000
      });
    }, 1000);
  }

  openContactForm(): void {
    const email = 'press@estokvel.co.za';
    const subject = 'Press Inquiry - eStokvel';
    const body = `Dear eStokvel Press Team,\n\nI would like to inquire about:\n\n[Please describe your inquiry here]\n\nBest regards,\n[Your Name]\n[Your Media Outlet]`;

    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoLink, '_blank');
  }

  onSubmitNewsletter(): void {
    if (this.newsletterForm.valid) {
      this.isSubmitting = true;

      // Simulate API call
      setTimeout(() => {
        this.isSubmitting = false;
        this.newsletterForm.reset();

        this.snackBar.open('Thank you for subscribing to our press updates!', 'Close', {
          duration: 4000,
          panelClass: ['success-snackbar']
        });
      }, 1500);
    }
  }
}
