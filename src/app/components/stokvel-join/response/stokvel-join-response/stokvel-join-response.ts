import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import {  MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {MaterialModule} from "../../../../material.module";

export interface JoinRequestResponseDialogData {
  notification: any;
  stokvelId: number;
  stokvelName: string;
  requesterName: string;
}

@Component({
  selector: 'app-join-request-response-dialog',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  templateUrl: 'stokvel-join-response.html',
  styleUrls: ['stokvel-join-response.scss']
})
export class JoinRequestResponseDialogComponent {
  responseForm: FormGroup;
  isSubmitting: boolean = false;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<JoinRequestResponseDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: JoinRequestResponseDialogData
  ) {
    this.responseForm = this.fb.group({
      decision: ['approve', Validators.required],
      notes: ['']
    });
  }

  onSubmit(): void {
    if (this.responseForm.valid) {
      const formValue = this.responseForm.value;
      this.isSubmitting = true;

      // Simulate processing
      setTimeout(() => {
        this.dialogRef.close({
          approved: formValue.decision === 'approve',
          notes: formValue.notes
        });
        this.isSubmitting = false;
      }, 1000);
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
