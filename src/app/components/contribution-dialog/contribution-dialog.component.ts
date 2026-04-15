import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { StokvelResponse } from '../../models/stokvel';
import { environment } from '../../environments/environment';
import { finalize } from 'rxjs/operators';

export interface ContributionDialogData {
  stokvels: StokvelResponse[];
  preselectedStokvel?: StokvelResponse;
}

@Component({
  selector: 'app-contribution-dialog',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatSnackBarModule
  ],
  templateUrl: './contribution-dialog.component.html',
  styleUrls: ['./contribution-dialog.component.scss']
})
export class ContributionDialogComponent implements OnInit {
  form: FormGroup;
  submitting = false;
  success = false;

  get stokvels(): StokvelResponse[] {
    return this.data.stokvels ?? [];
  }

  get selectedStokvel(): StokvelResponse | undefined {
    const id = this.form?.get('stokvelId')?.value;
    return this.stokvels.find(s => s.id === id);
  }

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private snack: MatSnackBar,
    public dialogRef: MatDialogRef<ContributionDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ContributionDialogData
  ) {
    this.form = this.fb.group({
      stokvelId: [data.preselectedStokvel?.id ?? null, Validators.required],
      amount: [
        data.preselectedStokvel?.monthlyContribution ?? '',
        [Validators.required, Validators.min(1)]
      ],
      reference: [''],
      description: ['']
    });
  }

  ngOnInit(): void {
    // When stokvel selection changes, auto-fill monthly contribution amount
    this.form.get('stokvelId')!.valueChanges.subscribe(id => {
      const stokvel = this.stokvels.find(s => s.id === id);
      if (stokvel?.monthlyContribution) {
        this.form.get('amount')!.setValue(stokvel.monthlyContribution);
      }
    });
  }

  submit(): void {
    if (this.form.invalid || this.submitting) return;
    this.submitting = true;

    const { stokvelId, amount, reference, description } = this.form.value;
    const payload = {
      stokvelId,
      amount,
      reference: reference || `contrib-${stokvelId}-${Date.now()}`,
      description: description || `Contribution to ${this.selectedStokvel?.name}`,
      currency: 'ZAR'
    };

    this.http.post(`${environment.apiUrl}transactions/contribute`, payload)
      .pipe(finalize(() => this.submitting = false))
      .subscribe({
        next: () => {
          this.success = true;
          this.snack.open(
            `✅ Contribution of R${Number(amount).toLocaleString()} recorded successfully!`,
            'Close',
            { duration: 4000, panelClass: 'success-snackbar' }
          );
          this.dialogRef.close({ success: true, stokvelId, amount });
        },
        error: (err) => {
          const msg = err?.error?.message || 'Failed to record contribution. Please try again.';
          this.snack.open(`❌ ${msg}`, 'Close', { duration: 5000, panelClass: 'error-snackbar' });
        }
      });
  }

  cancel(): void {
    this.dialogRef.close(null);
  }
}

