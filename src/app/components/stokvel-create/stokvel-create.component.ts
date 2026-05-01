import {Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CommonModule } from '@angular/common';

import {MaterialModule} from "../../material.module";
import {StokvelUtils} from "../../utils/StokvelUtils";
import {StokvelService} from "../../services/stokvel/stokvel.service";
import {StokvelTypeDto, SavingsTermDto, CreateStokvelRequest} from "../../models";

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

  // API-driven types and terms
  stokvelTypes: StokvelTypeDto[] = [];
  savingsTerms: SavingsTermDto[] = [];
  isLoadingTypes = false;
  isLoadingTerms = false;

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

  ngOnInit(): void {
    this.loadStokvelTypes();
    this.loadSavingsTerms();
  }

  private loadStokvelTypes(): void {
    this.isLoadingTypes = true;
    this.stokvelService.getStokvelTypes().subscribe({
      next: (types) => {
        this.stokvelTypes = types;
        // Set default selection to first type
        if (types.length > 0 && !this.basicInfoForm.get('type')?.value) {
          this.basicInfoForm.patchValue({ type: types[0].id });
        }
        this.isLoadingTypes = false;
      },
      error: (err) => {
        console.error('Failed to load stokvel types:', err);
        this.isLoadingTypes = false;
      }
    });
  }

  private loadSavingsTerms(): void {
    this.isLoadingTerms = true;
    this.stokvelService.getSavingsTerms().subscribe({
      next: (terms) => {
        this.savingsTerms = terms;
        this.isLoadingTerms = false;
      },
      error: (err) => {
        console.error('Failed to load savings terms:', err);
        this.isLoadingTerms = false;
      }
    });
  }

  createBasicInfoForm(): FormGroup {
    return this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', [Validators.required, Validators.minLength(10)]],
      type: [null, Validators.required],
      privacy: ['private', Validators.required]
    });
  }

  createFinancialForm(): FormGroup {
    return this.fb.group({
      monthlyContribution: [500, [Validators.required, Validators.min(50)]],
      targetAmount: [null],
      savingsTermId: [null],
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


  createStokvel(): void {
    if (this.formSubmitted) {
      return;
    }

    this.formSubmitted = true;
    this.isCreating = true;

    if (this.basicInfoForm.valid && this.financialForm.valid && this.rulesForm.valid) {
      // Get the selected stokvel type from loaded API types
      const selectedTypeId = this.basicInfoForm.get('type')?.value;
      const selectedStokvelType = this.stokvelTypes.find(type => type.id === selectedTypeId);

      // Backend expects type as uppercase ID (e.g. "INVESTMENT", "ROTATIONAL")
      const typePayload = selectedStokvelType ? selectedStokvelType.id.toUpperCase() : null;

      const stokvelData: CreateStokvelRequest = {
        name: this.basicInfoForm.value.name,
        description: this.basicInfoForm.value.description,
        type: typePayload ?? '',
        typeName: selectedStokvelType?.name ?? '',
        privacy: this.basicInfoForm.value.privacy,
        monthlyContribution: this.financialForm.value.monthlyContribution,
        targetAmount: this.financialForm.value.targetAmount ?? undefined,
        savingsTermId: this.financialForm.value.savingsTermId ?? undefined,
        payoutCycle: this.financialForm.value.payoutCycle,
        maxMembers: this.financialForm.value.maxMembers,
        rotationOrder: this.financialForm.value.rotationOrder ?? undefined,
        rules: [
          ...this.defaultRules.filter(rule => rule.enabled),
          ...this.customRules.value
        ]
      };

      // Call the actual service
      this.stokvelService.createStokvel(stokvelData).subscribe({
        next: (response) => {
          console.log('Stokvel created successfully:', response);

          this.isCreating = false;
          this.formSubmitted = false;

          this.snackBar.open('Stokvel created successfully!', 'View Stokvel', {
            duration: 6000,
            panelClass: ['success-snackbar']
          }).onAction().subscribe(() => {
            this.router.navigate(['/stokvels', response.id]);
          });

          // Navigate to the newly created stokvel detail page
          this.router.navigate(['/stokvels', response.id]);
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
