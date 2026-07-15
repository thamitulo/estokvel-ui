import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MaterialModule } from '../../material.module';
import { KycService, KycStatusResponse } from '../../services/kyc/kyc.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-kyc',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MaterialModule],
  templateUrl: './kyc.component.html'
})
export class KycComponent implements OnInit {
  kycForm: FormGroup;
  submitting = false;
  status$!: Observable<KycStatusResponse | null>;

  constructor(
    private fb: FormBuilder,
    private kyc: KycService,
    private router: Router,
    private snack: MatSnackBar
  ) {
    this.kycForm = this.fb.group({
      idType: ['RSA_ID', Validators.required],
      idNumber: ['', [Validators.required, Validators.minLength(8)]],
      dateOfBirth: ['', Validators.required],
      phoneNumber: ['', [Validators.required, Validators.pattern(/^\+?[0-9]{9,15}$/)]]
    });
  }

  ngOnInit(): void {
    this.status$ = this.kyc.status$;
    this.kyc.loadStatus().subscribe(s => {
      if (s.kycStatus === 'VERIFIED') {
        this.router.navigate(['/dashboard']);
      }
    });
  }

  submit(): void {
    if (this.kycForm.invalid) return;
    this.submitting = true;
    this.kyc.submitKyc(this.kycForm.value).subscribe({
      next: (res) => {
        this.submitting = false;
        this.snack.open(
          res.kycStatus === 'VERIFIED'
            ? '✅ KYC verified! You can now access all features.'
            : '📋 KYC submitted. We\'ll review your documents shortly.',
          'Close', { duration: 6000 }
        );
        if (res.kycStatus === 'VERIFIED') this.router.navigate(['/dashboard']);
      },
      error: (err) => {
        this.submitting = false;
        this.snack.open(err?.error?.message || 'KYC submission failed. Please try again.', 'Close', { duration: 5000 });
      }
    });
  }
}

