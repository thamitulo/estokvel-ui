import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { StokvelService } from '../../services/stokvel.service';
import { BanksService } from 'src/app/services/banks.service';
import { MatCard, MatCardModule } from '@angular/material/card';
import {Stokvel} from "../../models/stokvel";

@Component({
  selector: 'app-create-stokvel',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule
  ],
  templateUrl: './stokvel-create.component.html',
  standalone: true,
  styleUrls: ['./stokvel-create.component.scss']
})
export class CreateStokvelComponent implements OnInit {
  stokvelForm!: FormGroup;
  banks: string[] = [];
  stokvelTypes: string[] = [];
  savingsTerms: string[] = [];
  preExistingOptions = ['True', 'False'];
  privacyOptions = ['Private', 'Open to public'];
  preferredDebitDays = Array.from({ length: 31 }, (_, i) => i + 1);
  isSavings = false;
  formSubmitted = false;
  minDate: Date;


  constructor(
    private fb: FormBuilder,
    private router: Router,
    private stokvelService: StokvelService,
    private banksService: BanksService
  ) {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    this.minDate = tomorrow;
  }

  ngOnInit(): void {
    this.stokvelForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      description: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(50)]],
      preExisting: ['', Validators.required],
      startDate: ['', Validators.required],
      stokvelType: ['', Validators.required],
      savingsTerms: [''],
      contributionAmount: ['', [Validators.required, Validators.min(100), Validators.max(5000)]],
      privacyOption: ['', Validators.required],
      bankName: ['', Validators.required],
      accHolderName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      accountNumber: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(11)]],
      accountType: ['', Validators.required],
      debitDay: ['', Validators.required],
      debitAuthorization: [false, Validators.requiredTrue]
    });

    // Load banks and types
   // this.banksService.getBanks().subscribe(b => this.banks = b);
    this.stokvelService.getStokvelTypes().subscribe(t => this.stokvelTypes = t);
  }

  onStokvelTypeChange(): void {
    const type = this.stokvelForm.get('stokvelType')?.value;
    if (type === 'SAVINGS') {
      this.isSavings = true;
      this.stokvelService.getSavingsTerms().subscribe(t => this.savingsTerms = t);
    } else {
      this.isSavings = false;
      this.stokvelForm.get('savingsTerms')?.setValue('');
    }
  }

  onSubmit(): void {
    if (!this.stokvelForm.valid) {
      this.stokvelForm.markAllAsTouched();
      return;
    }

    const formValue = this.stokvelForm.value;

          this.stokvelService.createStokvel(formValue).subscribe({
            next: (stokvel: Stokvel) => {
              console.log('Stokvel created', stokvel);
              this.router.navigate(['/']);
            },
            error: err => console.error('Error creating stokvel', err)
          });

  }
}
