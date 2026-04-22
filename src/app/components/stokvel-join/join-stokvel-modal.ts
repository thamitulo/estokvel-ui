import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import {StokvelJoinData, JoinRequestDTO} from "../../models";
import {StokvelService} from "../../services/stokvel/stokvel.service";
import {MaterialModule} from "../../material.module";
import {formatCurrency} from "../dashboard/common.util";
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-join-stokvel-modal',
  templateUrl: './join-stokvel-modal.html',
  styleUrls: ['./join-stokvel-modal.scss'],
  imports: [CommonModule, MaterialModule, ReactiveFormsModule],
  standalone: true
})
export class JoinStokvelModalComponent {
  joinForm: FormGroup;
  isLoading = false;

  constructor(
    public dialogRef: MatDialogRef<JoinStokvelModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: StokvelJoinData,
    private fb: FormBuilder,
    private stokvelService: StokvelService,
    private snackBar: MatSnackBar
  ) {
    this.joinForm = this.fb.group({
      contributionAmount: [
        this.data.monthlyContribution || 500,
        [Validators.required, Validators.min(100), Validators.max(100000000)]
      ],
      agreeToTerms: [false, Validators.requiredTrue]
    });
  }

  onSubmit(): void {
    if (this.joinForm.valid) {
      this.isLoading = true;

      const joinRequest: JoinRequestDTO = {
        stokvelId: this.data.stokvelId,
        stokvelName: this.data.stokvelName,
        userId: this.data.currentUserId,
        fullName: this.data.userProfile?.name || 'User',
        userEmail: this.data.userProfile?.email || '',
        message: 'I would like to join this stokvel and participate in the community savings.',
        contributionAmount: this.joinForm.get('contributionAmount')?.value
      };

      this.stokvelService.joinStokvel(joinRequest).subscribe({
        next: (response) => {
          this.isLoading = false;
          this.snackBar.open('Join request sent successfully! Administrators will review your profile.', 'Close', {
            duration: 5000,
            panelClass: ['success-snackbar']
          });
          this.dialogRef.close(true);
        },
        error: (error: HttpErrorResponse) => {
          this.isLoading = false;

          let errorMessage = 'Error sending join request. Please try again.';

          if (error.status === 409) {
            errorMessage = error.error?.message || 'You already have a pending join request for this stokvel.';
          }

          this.snackBar.open(errorMessage, 'Close', {
            duration: 8000,
            panelClass: error.status === 409 ? ['warning-snackbar'] : ['error-snackbar']
          });
          console.error('Join request error:', error);
        }
      });
    }
  }

  onCancel(): void {
    this.dialogRef.close(false);
  }

  formatCurrency(value: number): string {
    return formatCurrency(value);
  }
}
