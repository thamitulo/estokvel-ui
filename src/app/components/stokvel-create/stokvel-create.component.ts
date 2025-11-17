import {Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CommonModule } from '@angular/common';

import {MaterialModule} from "../../material.module";
import {StokvelUtils} from "../../utils/StokvelUtils";
import {StokvelType} from "../../models/stokvel";
import {StokvelService} from "../../services/stokvel/stokvel.service";

@Component({
  selector: 'app-stokvel-create',
  templateUrl: './stokvel-create.component.html',
  styleUrls: ['./stokvel-create.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class StokvelCreateComponent implements OnInit {
  basicInfoForm: FormGroup;
  financialForm: FormGroup;
  rulesForm: FormGroup;

  isCreating = false;
  private formSubmitted = false;

  defaultRules = StokvelUtils.defaultRules();
  stokvelTypes = StokvelType.values();

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private snackBar: MatSnackBar,
    private stokvelService: StokvelService
  ) {
    this.basicInfoForm = this.createBasicInfoForm();
    this.financialForm = this.createFinancialForm();
    this.rulesForm = this.createRulesForm();
  }

  ngOnInit(): void {}

  createBasicInfoForm(): FormGroup {
    return this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', [Validators.required, Validators.minLength(10)]],
      type: [StokvelType.MONTHLY.name, Validators.required],
      privacy: ['private', Validators.required]
    });
  }

  createFinancialForm(): FormGroup {
    return this.fb.group({
      monthlyContribution: [500, [Validators.required, Validators.min(50)]],
      targetAmount: [null],
      payoutCycle: ['monthly', Validators.required],
      maxMembers: [10, [Validators.required, Validators.min(3), Validators.max(50)]],
      rotationOrder: ['alphabetical']
    });
  }

  createRulesForm(): FormGroup {
    return this.fb.group({
      customRules: this.fb.array([]),
      agreeToTerms: [false, Validators.requiredTrue]
    });
  }

  getStokvelTypeDisplayName(typeName: string): string {
    return StokvelUtils.getStokvelTypeDisplayName(typeName);
  }

  get customRules(): FormArray {
    return this.rulesForm.get('customRules') as FormArray;
  }

  addCustomRule(): void {
    this.customRules.push(this.fb.group({
      description: ['', Validators.required]
    }));
  }

  removeCustomRule(index: number): void {
    this.customRules.removeAt(index);
  }

  toggleRule(rule: any, event: any): void {
    rule.enabled = event.checked;
  }

  selectStokvelType(type: string): void {
    this.basicInfoForm.patchValue({ type });
  }

  createStokvel(): void {
    if (this.formSubmitted) {
      return;
    }

    this.formSubmitted = true;
    this.isCreating = true;

    if (this.basicInfoForm.valid && this.financialForm.valid && this.rulesForm.valid) {
      // Get the selected stokvel type as StokvelType instance
      const selectedTypeName = this.basicInfoForm.get('type')?.value;
      const selectedStokvelType = this.stokvelTypes.find(type => type.name === selectedTypeName);

      const typePayload = selectedStokvelType ? selectedStokvelType.name.toUpperCase() : null;

      const stokvelData = {
        ...this.basicInfoForm.value,
        ...this.financialForm.value,
        type: typePayload,
        typeName: selectedStokvelType
          ? this.getStokvelTypeDisplayName(selectedStokvelType.name)
          : '',
        rules: [
          ...this.defaultRules.filter(rule => rule.enabled),
          ...this.customRules.value
        ],
        status: 'active'
      };

      // Call the actual service
      this.stokvelService.createStokvel(stokvelData).subscribe({
        next: (response) => {
          console.log('Stokvel created successfully:', response);

          // Reset states
          this.isCreating = false;
          this.formSubmitted = false;

          this.snackBar.open('Stokvel created successfully!', 'Close', {
            duration: 5000,
            panelClass: ['success-snackbar']
          });

          // Navigate to dashboard or stokvel details
          this.router.navigate(['/dashboard']);
          // Alternatively, navigate to the newly created stokvel:
          // this.router.navigate(['/stokvel', response.id]);
        },
        error: (error) => {
          console.error('Error creating stokvel:', error);

          // Reset states
          this.isCreating = false;
          this.formSubmitted = false;

          // Show error message
          const errorMessage = error.message || 'Failed to create stokvel. Please try again.';
          this.snackBar.open(errorMessage, 'Close', {
            duration: 5000,
            panelClass: ['error-snackbar']
          });
        },
        complete: () => {
          // Look into what i might need to do here after for clean up
        }
      });
    } else {
      // Form is invalid
      this.isCreating = false;
      this.formSubmitted = false;

      this.markFormGroupTouched(this.basicInfoForm);
      this.markFormGroupTouched(this.financialForm);
      this.markFormGroupTouched(this.rulesForm);

      this.snackBar.open('Please complete all required fields', 'Close', {
        duration: 5000,
        panelClass: ['error-snackbar']
      });
    }
  }

  private markFormGroupTouched(formGroup: FormGroup): void {
    Object.keys(formGroup.controls).forEach(key => {
      const control = formGroup.get(key);
      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      } else {
        control?.markAsTouched();
      }
    });
  }
}
