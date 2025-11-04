import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule} from '@angular/forms';

import { MatSnackBar } from '@angular/material/snack-bar';
import {MaterialModule} from "../../material.module";
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    MaterialModule,
    FormsModule
  ],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  // WhatsApp chat state
  whatsappChatOpen: boolean = false;
  chatMessage: string = '';

  // Contact form
  contactForm: FormGroup;
  isSubmitting: boolean = false;

  readonly whatsappNumber: string = '27721234567';
  readonly supportEmail: string = 'support@estokvel.co.za';
  readonly supportPhone: string = '0112345678';
  readonly emergencyPhone: string = '0112345679';

  constructor(
    private fb: FormBuilder,
    private snackBar: MatSnackBar
  ) {
    this.contactForm = this.createContactForm();
  }

  // Create contact form
  private createContactForm(): FormGroup {
    return this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      subject: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  openWhatsAppChat(): void {
    const message = `Hello eStokvel support! I need assistance with:`;
    const url = `https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');

    this.snackBar.open('Opening WhatsApp...', 'Close', {
      duration: 3000
    });
  }

  // Open simulated WhatsApp chat window
  openWhatsAppChatWindow(): void {
    this.whatsappChatOpen = true;
  }

  // Close WhatsApp chat window
  closeWhatsAppChat(): void {
    this.whatsappChatOpen = false;
    this.chatMessage = '';
  }

  // Send chat message
  sendChatMessage(): void {
    if (this.chatMessage.trim()) {
      // In a real app, this would send the message to your backend/WhatsApp API
      this.snackBar.open('Message sent! We\'ll reply shortly.', 'Close', {
        duration: 3000
      });

      // Simulate auto-reply after 2 seconds
      setTimeout(() => {
        this.snackBar.open('New message received in WhatsApp!', 'Close', {
          duration: 3000
        });
      }, 2000);

      this.chatMessage = '';
    }
  }

  // Send quick message
  sendQuickMessage(message: string): void {
    this.chatMessage = message;
    this.sendChatMessage();
  }

  // Open email client
  openEmail(): void {
    const subject = 'eStokvel Support Request';
    const body = `Hello eStokvel team,\n\nI would like to get help with:\n\n`;
    const url = `mailto:${this.supportEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(url, '_blank');
  }

  // Call support
  callSupport(): void {
    window.open(`tel:${this.supportPhone}`, '_self');
  }

  // Call emergency support
  callEmergency(): void {
    window.open(`tel:${this.emergencyPhone}`, '_self');
  }

  // Open help center
  openHelpCenter(): void {
    this.snackBar.open('Opening Help Center...', 'Close', {
      duration: 3000
    });
    // In a real app, this would navigate to the help center
  }

  // Submit contact form
  onSubmit(): void {
    if (this.contactForm.valid) {
      this.isSubmitting = true;

      // Simulate API call
      setTimeout(() => {
        console.log('Form submitted:', this.contactForm.value);

        this.snackBar.open('Thank you for your message! We\'ll get back to you within 24 hours.', 'Close', {
          duration: 5000,
          panelClass: ['success-snackbar']
        });

        this.contactForm.reset();
        this.isSubmitting = false;
      }, 2000);
    } else {
      this.snackBar.open('Please fill in all required fields correctly', 'Close', {
        duration: 3000,
        panelClass: ['error-snackbar']
      });
    }
  }

  // Get current year for footer
  get currentYear(): number {
    return new Date().getFullYear();
  }
}
