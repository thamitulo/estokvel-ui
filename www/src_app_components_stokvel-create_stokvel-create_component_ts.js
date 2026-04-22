"use strict";
(self["webpackChunkestokvel_ui"] = self["webpackChunkestokvel_ui"] || []).push([["src_app_components_stokvel-create_stokvel-create_component_ts"],{

/***/ 2337:
/*!***********************************************************************!*\
  !*** ./src/app/components/stokvel-create/stokvel-create.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StokvelCreateComponent: () => (/* binding */ StokvelCreateComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../material.module */ 9439);
/* harmony import */ var _utils_StokvelUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/StokvelUtils */ 9259);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2481);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 5422);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);
/* harmony import */ var _services_stokvel_stokvel_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/stokvel/stokvel.service */ 7093);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ 8388);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ 5541);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ 8724);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/select */ 6060);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ 3840);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ 9885);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/card */ 3777);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/checkbox */ 7024);
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/stepper */ 6622);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/progress-spinner */ 1134);
var _staticBlock;


















const _forTrack0 = ($index, $item) => $item.id;
function StokvelCreateComponent_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](0, "Basic Information");
  }
}
function StokvelCreateComponent_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Stokvel name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function StokvelCreateComponent_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Description is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function StokvelCreateComponent_Conditional_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Loading types...");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function StokvelCreateComponent_For_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const stokvelType_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", stokvelType_r2.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"](" ", stokvelType_r2.icon, " ", stokvelType_r2.name, " ");
  }
}
function StokvelCreateComponent_Conditional_48_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Stokvel type is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function StokvelCreateComponent_ng_template_69_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](0, "Financial Settings");
  }
}
function StokvelCreateComponent_Conditional_94_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Contribution amount is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function StokvelCreateComponent_Conditional_95_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Contribution must be at least R50");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function StokvelCreateComponent_Conditional_120_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Loading terms...");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function StokvelCreateComponent_For_122_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const term_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", term_r3.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate3"](" ", term_r3.name, " (", term_r3.months, " months) \u2014 ", term_r3.description, " ");
  }
}
function StokvelCreateComponent_Conditional_153_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Minimum 3 members required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function StokvelCreateComponent_Conditional_154_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 16)(1, "mat-form-field", 17)(2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Rotation Order");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "mat-select", 64)(5, "mat-option", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "Alphabetical by Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "mat-option", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Order of Joining");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "mat-option", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Random");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "mat-option", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "Manual Selection");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "How will payout order be determined?");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
}
function StokvelCreateComponent_ng_template_165_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](0, "Rules & Agreement");
  }
}
function StokvelCreateComponent_For_177_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-card", 50)(1, "mat-card-content")(2, "div", 69)(3, "mat-checkbox", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function StokvelCreateComponent_For_177_Template_mat_checkbox_change_3_listener($event) {
      const rule_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4).$implicit;
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r5.toggleRule(rule_r5, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "p", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const rule_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("checked", rule_r5.enabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", rule_r5.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](rule_r5.description);
  }
}
function StokvelCreateComponent_For_185_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 54)(1, "mat-form-field", 17)(2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Rule Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "input", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "button", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function StokvelCreateComponent_For_185_Template_button_click_5_listener() {
      const ɵ$index_363_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7).$index;
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r5.removeCustomRule(ɵ$index_363_r8));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ɵ$index_363_r8 = ctx.$index;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroupName", ɵ$index_363_r8);
  }
}
function StokvelCreateComponent_Conditional_210_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "You must accept the terms to continue");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function StokvelCreateComponent_Conditional_218_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "check_circle");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function StokvelCreateComponent_Conditional_219_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "mat-spinner", 63);
  }
}
class StokvelCreateComponent {
  constructor(fb, router, snackBar, stokvelService) {
    this.fb = fb;
    this.router = router;
    this.snackBar = snackBar;
    this.stokvelService = stokvelService;
    this.isCreating = false;
    this.formSubmitted = false;
    this.defaultRules = _utils_StokvelUtils__WEBPACK_IMPORTED_MODULE_3__.StokvelUtils.defaultRules();
    // API-driven types and terms
    this.stokvelTypes = [];
    this.savingsTerms = [];
    this.isLoadingTypes = false;
    this.isLoadingTerms = false;
    this.basicInfoForm = this.createBasicInfoForm();
    this.financialForm = this.createFinancialForm();
    this.rulesForm = this.createRulesForm();
  }
  ngOnInit() {
    this.loadStokvelTypes();
    this.loadSavingsTerms();
  }
  loadStokvelTypes() {
    this.isLoadingTypes = true;
    this.stokvelService.getStokvelTypes().subscribe({
      next: types => {
        this.stokvelTypes = types;
        // Set default selection to first type
        if (types.length > 0 && !this.basicInfoForm.get('type')?.value) {
          this.basicInfoForm.patchValue({
            type: types[0].id
          });
        }
        this.isLoadingTypes = false;
      },
      error: err => {
        console.error('Failed to load stokvel types:', err);
        this.isLoadingTypes = false;
      }
    });
  }
  loadSavingsTerms() {
    this.isLoadingTerms = true;
    this.stokvelService.getSavingsTerms().subscribe({
      next: terms => {
        this.savingsTerms = terms;
        this.isLoadingTerms = false;
      },
      error: err => {
        console.error('Failed to load savings terms:', err);
        this.isLoadingTerms = false;
      }
    });
  }
  createBasicInfoForm() {
    return this.fb.group({
      name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.minLength(3)]],
      description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.minLength(10)]],
      type: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required],
      privacy: ['private', _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required]
    });
  }
  createFinancialForm() {
    return this.fb.group({
      monthlyContribution: [500, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.min(50)]],
      targetAmount: [null],
      savingsTermId: [null],
      payoutCycle: ['monthly', _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required],
      maxMembers: [10, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.min(3), _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.max(50)]],
      rotationOrder: ['alphabetical']
    });
  }
  createRulesForm() {
    return this.fb.group({
      customRules: this.fb.array([]),
      agreeToTerms: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.requiredTrue]
    });
  }
  getStokvelTypeDisplayName(typeName) {
    return _utils_StokvelUtils__WEBPACK_IMPORTED_MODULE_3__.StokvelUtils.getStokvelTypeDisplayName(typeName);
  }
  get customRules() {
    return this.rulesForm.get('customRules');
  }
  addCustomRule() {
    this.customRules.push(this.fb.group({
      description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required]
    }));
  }
  removeCustomRule(index) {
    this.customRules.removeAt(index);
  }
  toggleRule(rule, event) {
    rule.enabled = event.checked;
  }
  createStokvel() {
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
      const stokvelData = {
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
        rules: [...this.defaultRules.filter(rule => rule.enabled), ...this.customRules.value]
      };
      // Call the actual service
      this.stokvelService.createStokvel(stokvelData).subscribe({
        next: response => {
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
        error: error => {
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
  markFormGroupTouched(formGroup) {
    Object.keys(formGroup.controls).forEach(key => {
      const control = formGroup.get(key);
      if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormGroup) {
        this.markFormGroupTouched(control);
      } else {
        control?.markAsTouched();
      }
    });
  }
  static #_ = _staticBlock = () => (this.ɵfac = function StokvelCreateComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || StokvelCreateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_stokvel_stokvel_service__WEBPACK_IMPORTED_MODULE_8__.StokvelService));
  }, this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: StokvelCreateComponent,
    selectors: [["app-stokvel-create"]],
    decls: 222,
    vars: 23,
    consts: [["stepper", ""], [1, "create-stokvel-container"], [1, "create-header-section"], [1, "create-header-background"], [1, "create-header-content"], [1, "create-header-title"], [1, "create-header-subtitle"], [1, "progress-section-wrapper"], [1, "progress-section", "mat-elevation-z8"], ["linear", ""], [3, "stepControl"], ["matStepLabel", ""], [1, "step-form", 3, "ngSubmit", "formGroup"], [1, "form-section"], [1, "form-section-title"], [1, "form-section-subtitle"], [1, "form-row"], ["appearance", "outline", 1, "form-field-full"], ["matInput", "", "formControlName", "name", "placeholder", "e.g., Family Savings Group 2024"], ["matSuffix", ""], ["matInput", "", "formControlName", "description", "rows", "3", "placeholder", "Describe the purpose and goals of your stokvel..."], ["appearance", "outline", 1, "form-field-half"], ["formControlName", "type"], ["disabled", ""], [3, "value"], ["formControlName", "privacy"], ["value", "private"], [1, "privacy-option"], ["value", "public"], [1, "step-actions"], ["mat-raised-button", "", "color", "primary", "matStepperNext", "", 3, "disabled"], [1, "step-form", 3, "formGroup"], [1, "financial-cards"], [1, "financial-card", "mat-elevation-z2"], [1, "financial-icon"], ["matInput", "", "type", "number", "formControlName", "monthlyContribution", "placeholder", "0.00", "min", "0"], ["matPrefix", ""], ["matInput", "", "type", "number", "formControlName", "targetAmount", "placeholder", "0.00", "min", "0"], ["formControlName", "savingsTermId"], ["formControlName", "payoutCycle"], ["value", "monthly"], ["value", "quarterly"], ["value", "biannual"], ["value", "annual"], ["value", "rotational"], ["matInput", "", "type", "number", "formControlName", "maxMembers", "min", "3", "max", "50"], ["mat-button", "", "matStepperPrevious", "", 1, "back-button"], [1, "rules-section"], [1, "rules-title"], [1, "rules-list"], [1, "rule-card", "mat-elevation-z1"], [1, "custom-rules"], [1, "rules-subtitle"], ["formArrayName", "customRules", 1, "custom-rules-list"], [1, "custom-rule-item", 3, "formGroupName"], ["mat-button", "", "color", "primary", 1, "add-rule-button", 3, "click"], [1, "agreement-card", "mat-elevation-z2"], [1, "agreement-title"], [1, "agreement-content"], [1, "agreement-terms"], ["formControlName", "agreeToTerms", "color", "primary"], ["mat-raised-button", "", "type", "submit", "color", "primary", 1, "create-button", 3, "click", "disabled"], [1, "button-content"], ["diameter", "20", "strokeWidth", "3"], ["formControlName", "rotationOrder"], ["value", "alphabetical"], ["value", "joining"], ["value", "random"], ["value", "manual"], [1, "rule-header"], [3, "change", "checked"], [1, "rule-description"], ["matInput", "", "formControlName", "description", "placeholder", "e.g., All members must attend monthly meetings"], ["mat-icon-button", "", "matSuffix", "", 3, "click"]],
    template: function StokvelCreateComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 1)(1, "section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 4)(4, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Create Your Stokvel");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "Start your savings journey with a trusted community");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 7)(9, "div", 8)(10, "mat-stepper", 9, 0)(12, "mat-step", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, StokvelCreateComponent_ng_template_13_Template, 1, 0, "ng-template", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "form", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngSubmit", function StokvelCreateComponent_Template_form_ngSubmit_14_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx.createStokvel());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 13)(16, "h2", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, "Stokvel Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, "Enter the basic information about your stokvel");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "div", 16)(21, "mat-form-field", 17)(22, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23, "Stokvel Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](24, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "mat-icon", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26, "groups");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "mat-hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28, "Choose a descriptive name for your stokvel");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditionalCreate"](29, StokvelCreateComponent_Conditional_29_Template, 2, 0, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "div", 16)(31, "mat-form-field", 17)(32, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](33, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](34, "textarea", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "mat-hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](36, "What is this stokvel about? What are your goals?");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditionalCreate"](37, StokvelCreateComponent_Conditional_37_Template, 2, 0, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "div", 16)(39, "mat-form-field", 21)(40, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](41, "Stokvel Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](42, "mat-select", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditionalCreate"](43, StokvelCreateComponent_Conditional_43_Template, 2, 0, "mat-option", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeaterCreate"](44, StokvelCreateComponent_For_45_Template, 2, 3, "mat-option", 24, _forTrack0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "mat-icon", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](47, "category");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditionalCreate"](48, StokvelCreateComponent_Conditional_48_Template, 2, 0, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](49, "mat-form-field", 21)(50, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](51, "Privacy Setting");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](52, "mat-select", 25)(53, "mat-option", 26)(54, "div", 27)(55, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](56, "Private (Invite Only)");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](57, "mat-option", 28)(58, "div", 27)(59, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](60, "Public (Anyone can join)");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](61, "mat-hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](62, "Choose who can see and join your stokvel");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](63, "div", 29)(64, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](65, " Continue to Financials ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](66, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](67, "arrow_forward");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](68, "mat-step", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](69, StokvelCreateComponent_ng_template_69_Template, 1, 0, "ng-template", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](70, "form", 31)(71, "div", 13)(72, "h2", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](73, "Financial Configuration");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](74, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](75, "Set up the financial rules for your stokvel");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](76, "div", 32)(77, "mat-card", 33)(78, "mat-card-content")(79, "div", 34)(80, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](81, "savings");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](82, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](83, "Contribution Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](84, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](85, "Set the regular contribution amount for members");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](86, "mat-form-field", 17)(87, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](88, "Monthly Contribution (ZAR)");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](89, "input", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](90, "span", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](91, "R\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](92, "mat-hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](93, "Amount each member contributes monthly");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditionalCreate"](94, StokvelCreateComponent_Conditional_94_Template, 2, 0, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditionalCreate"](95, StokvelCreateComponent_Conditional_95_Template, 2, 0, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](96, "mat-card", 33)(97, "mat-card-content")(98, "div", 34)(99, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](100, "target");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](101, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](102, "Savings Target");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](103, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](104, "Set your stokvel's financial goal (optional)");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](105, "mat-form-field", 17)(106, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](107, "Target Amount (ZAR)");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](108, "input", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](109, "span", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](110, "R\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](111, "mat-hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](112, "Leave empty for ongoing stokvel");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](113, "div", 16)(114, "mat-form-field", 21)(115, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](116, "Savings Term");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](117, "mat-select", 38)(118, "mat-option", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](119, "No fixed term (ongoing)");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditionalCreate"](120, StokvelCreateComponent_Conditional_120_Template, 2, 0, "mat-option", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeaterCreate"](121, StokvelCreateComponent_For_122_Template, 2, 4, "mat-option", 24, _forTrack0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](123, "mat-icon", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](124, "hourglass_empty");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](125, "mat-hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](126, "Optional: set a fixed duration for the stokvel");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](127, "mat-form-field", 21)(128, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](129, "Payout Cycle");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](130, "mat-select", 39)(131, "mat-option", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](132, "Monthly");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](133, "mat-option", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](134, "Quarterly");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](135, "mat-option", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](136, "Every 6 Months");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](137, "mat-option", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](138, "Annual");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](139, "mat-option", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](140, "Rotational");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](141, "mat-icon", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](142, "calendar_today");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](143, "mat-hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](144, "How often will payouts occur?");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](145, "mat-form-field", 21)(146, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](147, "Maximum Members");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](148, "input", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](149, "mat-icon", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](150, "people");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](151, "mat-hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](152, "Minimum 3 members required");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditionalCreate"](153, StokvelCreateComponent_Conditional_153_Template, 2, 0, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditionalCreate"](154, StokvelCreateComponent_Conditional_154_Template, 15, 0, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](155, "div", 29)(156, "button", 46)(157, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](158, "arrow_back");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](159, " Back ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](160, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](161, " Continue to Rules ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](162, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](163, "arrow_forward");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](164, "mat-step", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](165, StokvelCreateComponent_ng_template_165_Template, 1, 0, "ng-template", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](166, "form", 31)(167, "div", 13)(168, "h2", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](169, "Stokvel Rules");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](170, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](171, "Define the rules and terms for your stokvel");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](172, "div", 47)(173, "h3", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](174, "Default Rules");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](175, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeaterCreate"](176, StokvelCreateComponent_For_177_Template, 7, 3, "mat-card", 50, _forTrack0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](178, "div", 51)(179, "h3", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](180, "Custom Rules");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](181, "p", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](182, "Add your own specific rules (optional)");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](183, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeaterCreate"](184, StokvelCreateComponent_For_185_Template, 8, 1, "div", 54, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeaterTrackByIndex"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](186, "button", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function StokvelCreateComponent_Template_button_click_186_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx.addCustomRule());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](187, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](188, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](189, " Add Custom Rule ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](190, "mat-card", 56)(191, "mat-card-content")(192, "h3", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](193, "Stokvel Agreement");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](194, "div", 58)(195, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](196, "By creating this stokvel, you agree to:");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](197, "ul", 59)(198, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](199, "Act as the stokvel administrator");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](200, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](201, "Ensure transparent financial management");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](202, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](203, "Communicate regularly with members");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](204, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](205, "Follow the established rules and payout schedules");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](206, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](207, "Maintain accurate records of all transactions");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](208, "mat-checkbox", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](209, " I accept the terms and responsibilities of being a stokvel administrator ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditionalCreate"](210, StokvelCreateComponent_Conditional_210_Template, 2, 0, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](211, "div", 29)(212, "button", 46)(213, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](214, "arrow_back");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](215, " Back ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](216, "button", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function StokvelCreateComponent_Template_button_click_216_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx.createStokvel());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](217, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditionalCreate"](218, StokvelCreateComponent_Conditional_218_Template, 2, 0, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditionalCreate"](219, StokvelCreateComponent_Conditional_219_Template, 1, 0, "mat-spinner", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](220, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](221);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()()()()();
      }
      if (rf & 2) {
        let tmp_3_0;
        let tmp_4_0;
        let tmp_7_0;
        let tmp_11_0;
        let tmp_12_0;
        let tmp_16_0;
        let tmp_17_0;
        let tmp_23_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("stepControl", ctx.basicInfoForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.basicInfoForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](((tmp_3_0 = ctx.basicInfoForm.get("name")) == null ? null : tmp_3_0.hasError("required")) ? 29 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](((tmp_4_0 = ctx.basicInfoForm.get("description")) == null ? null : tmp_4_0.hasError("required")) ? 37 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](ctx.isLoadingTypes ? 43 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeater"](ctx.stokvelTypes);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](((tmp_7_0 = ctx.basicInfoForm.get("type")) == null ? null : tmp_7_0.hasError("required")) ? 48 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", !ctx.basicInfoForm.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("stepControl", ctx.financialForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.financialForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](((tmp_11_0 = ctx.financialForm.get("monthlyContribution")) == null ? null : tmp_11_0.hasError("required")) ? 94 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](((tmp_12_0 = ctx.financialForm.get("monthlyContribution")) == null ? null : tmp_12_0.hasError("min")) ? 95 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", null);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](ctx.isLoadingTerms ? 120 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeater"](ctx.savingsTerms);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](((tmp_16_0 = ctx.financialForm.get("maxMembers")) == null ? null : tmp_16_0.hasError("min")) ? 153 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](((tmp_17_0 = ctx.financialForm.get("payoutCycle")) == null ? null : tmp_17_0.value) === "rotational" ? 154 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", !ctx.financialForm.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("stepControl", ctx.rulesForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.rulesForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeater"](ctx.defaultRules);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeater"](ctx.customRules.controls);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](((tmp_23_0 = ctx.rulesForm.get("agreeToTerms")) == null ? null : tmp_23_0.hasError("required")) && ((tmp_23_0 = ctx.rulesForm.get("agreeToTerms")) == null ? null : tmp_23_0.touched) ? 210 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", !ctx.rulesForm.valid || ctx.isCreating);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](!ctx.isCreating ? 218 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](ctx.isCreating ? 219 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.isCreating ? "Creating Stokvel..." : "Create Stokvel");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.MaxValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormGroupName, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormArrayName, _material_module__WEBPACK_IMPORTED_MODULE_2__.MaterialModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatHint, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatError, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatPrefix, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatSuffix, _angular_material_input__WEBPACK_IMPORTED_MODULE_10__.MatInput, _angular_material_select__WEBPACK_IMPORTED_MODULE_12__.MatSelect, _angular_material_select__WEBPACK_IMPORTED_MODULE_11__.MatOption, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_14__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_15__.MatIconButton, _angular_material_card__WEBPACK_IMPORTED_MODULE_16__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_16__.MatCardContent, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__.MatCheckbox, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_18__.MatStep, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_18__.MatStepLabel, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_18__.MatStepper, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_18__.MatStepperNext, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_18__.MatStepperPrevious, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_19__.MatProgressSpinner],
    styles: ["@charset \"UTF-8\";\n\n\n.create-stokvel-container[_ngcontent-%COMP%] {\n  padding-bottom: 60px;\n}\n\n\n\n.create-header-section[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, rgba(13, 71, 161, 0.85) 0%, rgba(21, 101, 192, 0.85) 100%);\n  color: white;\n  padding: 120px 20px 60px;\n  text-align: center;\n  position: relative;\n  overflow: hidden;\n}\n\n.create-header-background[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-image: url(\"https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80\");\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  z-index: -1;\n}\n\n.create-header-content[_ngcontent-%COMP%] {\n  max-width: 800px;\n  margin: 0 auto;\n  position: relative;\n  z-index: 1;\n}\n\n.create-header-title[_ngcontent-%COMP%] {\n  font-size: 48px;\n  margin-bottom: 20px;\n  line-height: 1.2;\n  font-weight: 500;\n  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);\n}\n\n.create-header-subtitle[_ngcontent-%COMP%] {\n  font-size: 20px;\n  margin-bottom: 30px;\n  opacity: 0.95;\n  font-weight: 300;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);\n}\n\n\n\n.progress-section-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  justify-content: center;\n  width: 100%;\n  margin-top: -3.5rem;\n  margin-bottom: 4rem;\n  z-index: 2;\n}\n\n.progress-section[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  padding: 40px;\n  width: 90%;\n  max-width: 1000px;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);\n}\n\n\n\n  .mat-stepper-horizontal {\n  background: transparent;\n}\n\n  .mat-step-header {\n  border-radius: 8px;\n  margin-bottom: 30px;\n}\n\n  .mat-step-header .mat-step-icon {\n  background: linear-gradient(135deg, #0d47a1 0%, #1565c0 100%);\n  color: white;\n}\n\n  .mat-step-header .mat-step-label {\n  font-weight: 500;\n  color: #333;\n}\n\n  .mat-step-header .mat-step-label-active {\n  color: #0d47a1;\n}\n\n\n\n.step-form[_ngcontent-%COMP%] {\n  padding: 20px 0;\n}\n\n.form-section[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n}\n\n.form-section-title[_ngcontent-%COMP%] {\n  font-size: 28px;\n  margin-bottom: 10px;\n  background: linear-gradient(135deg, #0d47a1 0%, #1565c0 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  font-weight: 500;\n}\n\n.form-section-subtitle[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #666;\n  margin-bottom: 30px;\n  font-weight: 300;\n}\n\n.form-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 20px;\n  margin-bottom: 20px;\n  flex-wrap: wrap;\n}\n\n.form-field-full[_ngcontent-%COMP%] {\n  flex: 1 1 100%;\n}\n\n.form-field-half[_ngcontent-%COMP%] {\n  flex: 1 1 calc(50% - 10px);\n}\n\n.form-field-third[_ngcontent-%COMP%] {\n  flex: 1 1 calc(33.333% - 14px);\n}\n\n\n\n  .mat-form-field-appearance-outline .mat-form-field-outline {\n  color: #e0e0e0;\n}\n\n  .mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick {\n  color: #0d47a1;\n}\n\n  .mat-form-field.mat-focused .mat-form-field-label {\n  color: #0d47a1;\n}\n\n  .mat-form-field-appearance-outline .mat-form-field-infix {\n  padding: 12px 0;\n}\n\n  .mat-form-field-appearance-outline .mat-form-field-wrapper {\n  margin: 0;\n}\n\n\n\n.privacy-option[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n\n.privacy-option[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  height: 18px;\n  width: 18px;\n}\n\n\n\n.financial-cards[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 25px;\n  margin-bottom: 30px;\n}\n\n.financial-card[_ngcontent-%COMP%] {\n  padding: 25px;\n  text-align: center;\n  transition: transform 0.3s ease;\n}\n\n.financial-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px);\n}\n\n.financial-icon[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  background: linear-gradient(135deg, #0d47a1 0%, #1565c0 100%);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto 20px;\n}\n\n.financial-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 30px;\n  height: 30px;\n  width: 30px;\n  color: white;\n}\n\n.financial-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 20px;\n  margin-bottom: 10px;\n  color: #333;\n  font-weight: 600;\n}\n\n.financial-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #666;\n  margin-bottom: 20px;\n  line-height: 1.5;\n}\n\n\n\n.rules-section[_ngcontent-%COMP%] {\n  margin-top: 30px;\n}\n\n.rules-title[_ngcontent-%COMP%] {\n  font-size: 22px;\n  margin-bottom: 20px;\n  color: #333;\n  font-weight: 600;\n}\n\n.rules-subtitle[_ngcontent-%COMP%] {\n  color: #666;\n  margin-bottom: 20px;\n  font-size: 14px;\n}\n\n.rules-list[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 15px;\n  margin-bottom: 30px;\n}\n\n.rule-card[_ngcontent-%COMP%] {\n  transition: transform 0.2s ease;\n}\n\n.rule-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n}\n\n.rule-header[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n\n.rule-description[_ngcontent-%COMP%] {\n  color: #666;\n  font-size: 14px;\n  line-height: 1.5;\n  margin: 0;\n  padding-left: 30px;\n}\n\n\n\n.custom-rules[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n}\n\n.custom-rules-list[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 15px;\n  margin-bottom: 20px;\n}\n\n.custom-rule-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n\n.add-rule-button[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n\n\n\n.agreement-card[_ngcontent-%COMP%] {\n  margin-top: 30px;\n  border-left: 4px solid #0d47a1;\n}\n\n.agreement-title[_ngcontent-%COMP%] {\n  font-size: 20px;\n  margin-bottom: 15px;\n  color: #333;\n  font-weight: 600;\n}\n\n.agreement-content[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n\n.agreement-terms[_ngcontent-%COMP%] {\n  padding-left: 20px;\n  color: #666;\n  line-height: 1.6;\n}\n\n.agreement-terms[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n}\n\n\n\n.step-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: 40px;\n  padding-top: 20px;\n  border-top: 1px solid #f0f0f0;\n}\n\n.back-button[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  color: #666;\n}\n\n.back-button[_ngcontent-%COMP%]:hover {\n  color: #0d47a1;\n}\n\n\n\n.types-reference-section[_ngcontent-%COMP%] {\n  padding: 60px 20px;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n\n.types-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 25px;\n  margin-top: 40px;\n}\n\n.type-card[_ngcontent-%COMP%] {\n  transition: all 0.3s ease;\n  cursor: pointer;\n  border: 2px solid transparent;\n}\n\n.type-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5px);\n  border-color: #1565c0;\n}\n\n.type-card.selected[_ngcontent-%COMP%] {\n  border-color: #0d47a1;\n  background: rgba(13, 71, 161, 0.05);\n}\n\n.type-image[_ngcontent-%COMP%] {\n  height: 120px;\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n\n.type-image.contribution-image[_ngcontent-%COMP%] {\n  background-image: url(\"https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80\");\n}\n\n.type-image.investment-image[_ngcontent-%COMP%] {\n  background-image: url(\"https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80\");\n}\n\n.type-image.property-image[_ngcontent-%COMP%] {\n  background-image: url(\"https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2073&q=80\");\n}\n\n.type-image.livestock-image[_ngcontent-%COMP%] {\n  background-image: url(\"https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80\");\n}\n\n.type-image.family-image[_ngcontent-%COMP%] {\n  background-image: url(\"https://images.unsplash.com/photo-1515377905703-c4788e51af15?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80\");\n}\n\n.type-image.party-image[_ngcontent-%COMP%] {\n  background-image: url(\"https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80\");\n}\n\n.type-icon[_ngcontent-%COMP%] {\n  font-size: 32px;\n  height: 32px;\n  width: 32px;\n  background: linear-gradient(135deg, #0d47a1 0%, #1565c0 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  margin: 15px 0 10px;\n}\n\n.type-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 18px;\n  margin-bottom: 10px;\n  color: #333;\n  font-weight: 600;\n}\n\n.type-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #666;\n  margin-bottom: 15px;\n  line-height: 1.5;\n  font-size: 14px;\n}\n\n.type-features[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n\n.type-features[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding: 5px 0;\n  font-size: 13px;\n  color: #666;\n  position: relative;\n  padding-left: 20px;\n}\n\n.type-features[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:before {\n  content: \"\u2713\";\n  position: absolute;\n  left: 0;\n  color: #0d47a1;\n  font-weight: bold;\n}\n\n\n\n.help-section[_ngcontent-%COMP%] {\n  padding: 0 20px 40px;\n  max-width: 1000px;\n  margin: 0 auto;\n}\n\n.help-card[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);\n  border-left: 4px solid #0d47a1;\n}\n\n.help-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 30px;\n  padding: 30px;\n}\n\n.help-icon[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  background: linear-gradient(135deg, #0d47a1 0%, #1565c0 100%);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n\n.help-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 30px;\n  height: 30px;\n  width: 30px;\n  color: white;\n}\n\n.help-text[_ngcontent-%COMP%] {\n  flex: 1;\n}\n\n.help-text[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 22px;\n  margin-bottom: 10px;\n  color: #333;\n  font-weight: 600;\n}\n\n.help-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #666;\n  line-height: 1.5;\n  margin: 0;\n}\n\n.help-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 15px;\n  flex-shrink: 0;\n}\n\n\n\n.section-title[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 50px;\n}\n\n.section-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 36px;\n  background: linear-gradient(135deg, #0d47a1 0%, #1565c0 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  margin-bottom: 15px;\n  font-weight: 500;\n}\n\n.section-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #666;\n  max-width: 600px;\n  margin: 0 auto;\n  font-weight: 300;\n}\n\n\n\n@media (max-width: 768px) {\n  .create-header-section[_ngcontent-%COMP%] {\n    padding: 100px 20px 40px;\n  }\n  .create-header-title[_ngcontent-%COMP%] {\n    font-size: 36px;\n  }\n  .create-header-subtitle[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n  .progress-section-wrapper[_ngcontent-%COMP%] {\n    margin-top: -2.5rem;\n  }\n  .progress-section[_ngcontent-%COMP%] {\n    width: 95%;\n    padding: 25px;\n  }\n  .form-row[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .form-field-half[_ngcontent-%COMP%], \n   .form-field-third[_ngcontent-%COMP%] {\n    flex: 1 1 100%;\n  }\n  .financial-cards[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .types-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .help-content[_ngcontent-%COMP%] {\n    flex-direction: column;\n    text-align: center;\n    gap: 20px;\n  }\n  .help-actions[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n  .step-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 15px;\n    align-items: stretch;\n  }\n  .back-button[_ngcontent-%COMP%] {\n    order: 2;\n  }\n}\n@media (max-width: 480px) {\n  .create-header-title[_ngcontent-%COMP%] {\n    font-size: 28px;\n  }\n  .progress-section[_ngcontent-%COMP%] {\n    padding: 20px;\n  }\n  .form-section-title[_ngcontent-%COMP%] {\n    font-size: 24px;\n  }\n  .section-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 28px;\n  }\n  .help-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n    width: 100%;\n  }\n  .help-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n\n\n.fade-in[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fadeIn 0.8s ease-in;\n}\n\n.slide-up[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_slideUp 0.6s ease-out;\n}\n\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_slideUp {\n  from {\n    opacity: 0;\n    transform: translateY(30px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n\n\n.creating-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(255, 255, 255, 0.9);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n}\n\n.creating-content[_ngcontent-%COMP%] {\n  text-align: center;\n  background: white;\n  padding: 40px;\n  border-radius: 12px;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);\n}\n\n.creating-spinner[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n\n.creating-text[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #333;\n  font-weight: 500;\n}\n\n.create-button[_ngcontent-%COMP%] {\n  min-width: 160px;\n}\n.create-button[_ngcontent-%COMP%]:disabled {\n  opacity: 0.7;\n  cursor: not-allowed;\n}\n\n.button-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n\nmat-spinner[_ngcontent-%COMP%]     circle {\n  stroke: white;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9zdG9rdmVsLWNyZWF0ZS9zdG9rdmVsLWNyZWF0ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFBaEIsa0NBQUE7QUFDQTtFQUNFLG9CQUFBO0FBRUY7O0FBQ0EsbUJBQUE7QUFDQTtFQUNFLDhGQUFBO0VBQ0EsWUFBQTtFQUNBLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBRUY7O0FBQ0E7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxrSUFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLFdBQUE7QUFFRjs7QUFDQTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQUVGOztBQUNBO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHlDQUFBO0FBRUY7O0FBQ0E7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5Q0FBQTtBQUVGOztBQUNBLDZCQUFBO0FBQ0E7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtBQUVGOztBQUNBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSx5Q0FBQTtBQUVGOztBQUNBLG9CQUFBO0FBQ0E7RUFDRSx1QkFBQTtBQUVGOztBQUNBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtBQUVGOztBQUNBO0VBQ0UsNkRBQUE7RUFDQSxZQUFBO0FBRUY7O0FBQ0E7RUFDRSxnQkFBQTtFQUNBLFdBQUE7QUFFRjs7QUFDQTtFQUNFLGNBQUE7QUFFRjs7QUFDQSxpQkFBQTtBQUNBO0VBQ0UsZUFBQTtBQUVGOztBQUNBO0VBQ0UsbUJBQUE7QUFFRjs7QUFDQTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtFQUNBLDZEQUFBO0VBQ0EsNkJBQUE7RUFDQSxvQ0FBQTtFQUNBLGdCQUFBO0FBRUY7O0FBQ0E7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFFRjs7QUFDQTtFQUNFLGFBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBRUY7O0FBQ0E7RUFDRSxjQUFBO0FBRUY7O0FBQ0E7RUFDRSwwQkFBQTtBQUVGOztBQUNBO0VBQ0UsOEJBQUE7QUFFRjs7QUFDQSxzQ0FBQTtBQUNBO0VBQ0UsY0FBQTtBQUVGOztBQUNBO0VBQ0UsY0FBQTtBQUVGOztBQUNBO0VBQ0UsY0FBQTtBQUVGOztBQUNBO0VBQ0UsZUFBQTtBQUVGOztBQUNBO0VBQ0UsU0FBQTtBQUVGOztBQUNBLDJCQUFBO0FBQ0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0FBRUY7O0FBQ0E7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFFRjs7QUFDQSxvQkFBQTtBQUNBO0VBQ0UsYUFBQTtFQUNBLDJEQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0FBRUY7O0FBQ0E7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQkFBQTtBQUVGOztBQUNBO0VBQ0UsMkJBQUE7QUFFRjs7QUFDQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsNkRBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFFRjs7QUFDQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFFRjs7QUFDQTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQUVGOztBQUNBO0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFFRjs7QUFDQSxrQkFBQTtBQUNBO0VBQ0UsZ0JBQUE7QUFFRjs7QUFDQTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQUVGOztBQUNBO0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQUVGOztBQUNBO0VBQ0UsYUFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtBQUVGOztBQUNBO0VBQ0UsK0JBQUE7QUFFRjs7QUFDQTtFQUNFLDJCQUFBO0FBRUY7O0FBQ0E7RUFDRSxtQkFBQTtBQUVGOztBQUNBO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtBQUVGOztBQUNBLGlCQUFBO0FBQ0E7RUFDRSxtQkFBQTtBQUVGOztBQUNBO0VBQ0UsYUFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtBQUVGOztBQUNBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtBQUVGOztBQUNBO0VBQ0UsZ0JBQUE7QUFFRjs7QUFDQSxtQkFBQTtBQUNBO0VBQ0UsZ0JBQUE7RUFDQSw4QkFBQTtBQUVGOztBQUNBO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBRUY7O0FBQ0E7RUFDRSxtQkFBQTtBQUVGOztBQUNBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUFFRjs7QUFDQTtFQUNFLGtCQUFBO0FBRUY7O0FBQ0EsaUJBQUE7QUFDQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLDZCQUFBO0FBRUY7O0FBQ0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtBQUVGOztBQUNBO0VBQ0UsY0FBQTtBQUVGOztBQUNBLDRCQUFBO0FBQ0E7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQUVGOztBQUNBO0VBQ0UsYUFBQTtFQUNBLDJEQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0FBRUY7O0FBQ0E7RUFDRSx5QkFBQTtFQUNBLGVBQUE7RUFDQSw2QkFBQTtBQUVGOztBQUNBO0VBQ0UsMkJBQUE7RUFDQSxxQkFBQTtBQUVGOztBQUNBO0VBQ0UscUJBQUE7RUFDQSxtQ0FBQTtBQUVGOztBQUNBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtBQUVGOztBQUNBO0VBQ0UscUlBQUE7QUFFRjs7QUFDQTtFQUNFLHFJQUFBO0FBRUY7O0FBQ0E7RUFDRSxrSUFBQTtBQUVGOztBQUNBO0VBQ0Usa0lBQUE7QUFFRjs7QUFDQTtFQUNFLHFJQUFBO0FBRUY7O0FBQ0E7RUFDRSxxSUFBQTtBQUVGOztBQUNBO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsNkRBQUE7RUFDQSw2QkFBQTtFQUNBLG9DQUFBO0VBQ0EsbUJBQUE7QUFFRjs7QUFDQTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQUVGOztBQUNBO0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBRUY7O0FBQ0E7RUFDRSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FBRUY7O0FBQ0E7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBRUY7O0FBQ0E7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBRUY7O0FBQ0EsaUJBQUE7QUFDQTtFQUNFLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBRUY7O0FBQ0E7RUFDRSw2REFBQTtFQUNBLDhCQUFBO0FBRUY7O0FBQ0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtBQUVGOztBQUNBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSw2REFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0FBRUY7O0FBQ0E7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBRUY7O0FBQ0E7RUFDRSxPQUFBO0FBRUY7O0FBQ0E7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUFFRjs7QUFDQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7QUFFRjs7QUFDQTtFQUNFLGFBQUE7RUFDQSxTQUFBO0VBQ0EsY0FBQTtBQUVGOztBQUNBLHFEQUFBO0FBQ0E7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0FBRUY7O0FBQ0E7RUFDRSxlQUFBO0VBQ0EsNkRBQUE7RUFDQSw2QkFBQTtFQUNBLG9DQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUVGOztBQUNBO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQUVGOztBQUNBLHNCQUFBO0FBQ0E7RUFDRTtJQUNFLHdCQUFBO0VBRUY7RUFDQTtJQUNFLGVBQUE7RUFDRjtFQUVBO0lBQ0UsZUFBQTtFQUFGO0VBR0E7SUFDRSxtQkFBQTtFQURGO0VBSUE7SUFDRSxVQUFBO0lBQ0EsYUFBQTtFQUZGO0VBS0E7SUFDRSxzQkFBQTtFQUhGO0VBTUE7O0lBRUUsY0FBQTtFQUpGO0VBT0E7SUFDRSwwQkFBQTtFQUxGO0VBUUE7SUFDRSwwQkFBQTtFQU5GO0VBU0E7SUFDRSxzQkFBQTtJQUNBLGtCQUFBO0lBQ0EsU0FBQTtFQVBGO0VBVUE7SUFDRSx1QkFBQTtFQVJGO0VBV0E7SUFDRSxzQkFBQTtJQUNBLFNBQUE7SUFDQSxvQkFBQTtFQVRGO0VBWUE7SUFDRSxRQUFBO0VBVkY7QUFDRjtBQWFBO0VBQ0U7SUFDRSxlQUFBO0VBWEY7RUFjQTtJQUNFLGFBQUE7RUFaRjtFQWVBO0lBQ0UsZUFBQTtFQWJGO0VBZ0JBO0lBQ0UsZUFBQTtFQWRGO0VBaUJBO0lBQ0Usc0JBQUE7SUFDQSxXQUFBO0VBZkY7RUFrQkE7SUFDRSxXQUFBO0VBaEJGO0FBQ0Y7QUFtQkEsc0JBQUE7QUFDQTtFQUNFLDhCQUFBO0FBakJGOztBQW9CQTtFQUNFLGdDQUFBO0FBakJGOztBQW9CQTtFQUNFO0lBQ0UsVUFBQTtFQWpCRjtFQW1CQTtJQUNFLFVBQUE7RUFqQkY7QUFDRjtBQW9CQTtFQUNFO0lBQ0UsVUFBQTtJQUNBLDJCQUFBO0VBbEJGO0VBb0JBO0lBQ0UsVUFBQTtJQUNBLHdCQUFBO0VBbEJGO0FBQ0Y7QUFxQkEsa0JBQUE7QUFDQTtFQUNFLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0Esb0NBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7QUFuQkY7O0FBc0JBO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHlDQUFBO0FBbkJGOztBQXNCQTtFQUNFLG1CQUFBO0FBbkJGOztBQXNCQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUFuQkY7O0FBcUJBO0VBQ0UsZ0JBQUE7QUFsQkY7QUFvQkU7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7QUFsQko7O0FBc0JBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtBQW5CRjs7QUF1QkU7RUFDRSxhQUFBO0FBcEJKIiwic291cmNlc0NvbnRlbnQiOlsiLyogc3Rva3ZlbC1jcmVhdGUuY29tcG9uZW50LnNjc3MgKi9cclxuLmNyZWF0ZS1zdG9rdmVsLWNvbnRhaW5lciB7XHJcbiAgcGFkZGluZy1ib3R0b206IDYwcHg7XHJcbn1cclxuXHJcbi8qIEhlYWRlciBTZWN0aW9uICovXHJcbi5jcmVhdGUtaGVhZGVyLXNlY3Rpb24ge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYmEoMTMsIDcxLCAxNjEsIDAuODUpIDAlLCByZ2JhKDIxLCAxMDEsIDE5MiwgMC44NSkgMTAwJSk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDEyMHB4IDIwcHggNjBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5jcmVhdGUtaGVhZGVyLWJhY2tncm91bmQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICBib3R0b206IDA7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTU1MjY2NDczMC1kMzA3Y2E4ODQ5Nzg/aXhsaWI9cmItNC4wLjMmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz0yMDcwJnE9ODAnKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIHotaW5kZXg6IC0xO1xyXG59XHJcblxyXG4uY3JlYXRlLWhlYWRlci1jb250ZW50IHtcclxuICBtYXgtd2lkdGg6IDgwMHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiAxO1xyXG59XHJcblxyXG4uY3JlYXRlLWhlYWRlci10aXRsZSB7XHJcbiAgZm9udC1zaXplOiA0OHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDEuMjtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIHRleHQtc2hhZG93OiAwIDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG59XHJcblxyXG4uY3JlYXRlLWhlYWRlci1zdWJ0aXRsZSB7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgb3BhY2l0eTogMC45NTtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIHRleHQtc2hhZG93OiAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG59XHJcblxyXG4vKiBQcm9ncmVzcyBTdGVwcGVyIFNlY3Rpb24gKi9cclxuLnByb2dyZXNzLXNlY3Rpb24td3JhcHBlciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luLXRvcDogLTMuNXJlbTtcclxuICBtYXJnaW4tYm90dG9tOiA0cmVtO1xyXG4gIHotaW5kZXg6IDI7XHJcbn1cclxuXHJcbi5wcm9ncmVzcy1zZWN0aW9uIHtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgcGFkZGluZzogNDBweDtcclxuICB3aWR0aDogOTAlO1xyXG4gIG1heC13aWR0aDogMTAwMHB4O1xyXG4gIGJveC1zaGFkb3c6IDAgOHB4IDMycHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG59XHJcblxyXG4vKiBTdGVwcGVyIFN0eWxpbmcgKi9cclxuOjpuZy1kZWVwIC5tYXQtc3RlcHBlci1ob3Jpem9udGFsIHtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtc3RlcC1oZWFkZXIge1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1zdGVwLWhlYWRlciAubWF0LXN0ZXAtaWNvbiB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzBkNDdhMSAwJSwgIzE1NjVjMCAxMDAlKTtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LXN0ZXAtaGVhZGVyIC5tYXQtc3RlcC1sYWJlbCB7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBjb2xvcjogIzMzMztcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtc3RlcC1oZWFkZXIgLm1hdC1zdGVwLWxhYmVsLWFjdGl2ZSB7XHJcbiAgY29sb3I6ICMwZDQ3YTE7XHJcbn1cclxuXHJcbi8qIEZvcm0gU3R5bGluZyAqL1xyXG4uc3RlcC1mb3JtIHtcclxuICBwYWRkaW5nOiAyMHB4IDA7XHJcbn1cclxuXHJcbi5mb3JtLXNlY3Rpb24ge1xyXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbn1cclxuXHJcbi5mb3JtLXNlY3Rpb24tdGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMjhweDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMwZDQ3YTEgMCUsICMxNTY1YzAgMTAwJSk7XHJcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XHJcbiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbi5mb3JtLXNlY3Rpb24tc3VidGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBjb2xvcjogIzY2NjtcclxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbn1cclxuXHJcbi5mb3JtLXJvdyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBnYXA6IDIwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbn1cclxuXHJcbi5mb3JtLWZpZWxkLWZ1bGwge1xyXG4gIGZsZXg6IDEgMSAxMDAlO1xyXG59XHJcblxyXG4uZm9ybS1maWVsZC1oYWxmIHtcclxuICBmbGV4OiAxIDEgY2FsYyg1MCUgLSAxMHB4KTtcclxufVxyXG5cclxuLmZvcm0tZmllbGQtdGhpcmQge1xyXG4gIGZsZXg6IDEgMSBjYWxjKDMzLjMzMyUgLSAxNHB4KTtcclxufVxyXG5cclxuLyogTWF0ZXJpYWwgRm9ybSBGaWVsZCBDdXN0b21pemF0aW9uICovXHJcbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lIHtcclxuICBjb2xvcjogI2UwZTBlMDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtdGhpY2sge1xyXG4gIGNvbG9yOiAjMGQ0N2ExO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XHJcbiAgY29sb3I6ICMwZDQ3YTE7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIC5tYXQtZm9ybS1maWVsZC1pbmZpeCB7XHJcbiAgcGFkZGluZzogMTJweCAwO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZSAubWF0LWZvcm0tZmllbGQtd3JhcHBlciB7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4vKiBQcml2YWN5IE9wdGlvbiBTdHlsaW5nICovXHJcbi5wcml2YWN5LW9wdGlvbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogOHB4O1xyXG59XHJcblxyXG4ucHJpdmFjeS1vcHRpb24gbWF0LWljb24ge1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBoZWlnaHQ6IDE4cHg7XHJcbiAgd2lkdGg6IDE4cHg7XHJcbn1cclxuXHJcbi8qIEZpbmFuY2lhbCBDYXJkcyAqL1xyXG4uZmluYW5jaWFsLWNhcmRzIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMzAwcHgsIDFmcikpO1xyXG4gIGdhcDogMjVweDtcclxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG59XHJcblxyXG4uZmluYW5jaWFsLWNhcmQge1xyXG4gIHBhZGRpbmc6IDI1cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2U7XHJcbn1cclxuXHJcbi5maW5hbmNpYWwtY2FyZDpob3ZlciB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zcHgpO1xyXG59XHJcblxyXG4uZmluYW5jaWFsLWljb24ge1xyXG4gIHdpZHRoOiA2MHB4O1xyXG4gIGhlaWdodDogNjBweDtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMGQ0N2ExIDAlLCAjMTU2NWMwIDEwMCUpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgbWFyZ2luOiAwIGF1dG8gMjBweDtcclxufVxyXG5cclxuLmZpbmFuY2lhbC1pY29uIG1hdC1pY29uIHtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIHdpZHRoOiAzMHB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmZpbmFuY2lhbC1jYXJkIGgzIHtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICBjb2xvcjogIzMzMztcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4uZmluYW5jaWFsLWNhcmQgcCB7XHJcbiAgY29sb3I6ICM2NjY7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICBsaW5lLWhlaWdodDogMS41O1xyXG59XHJcblxyXG4vKiBSdWxlcyBTZWN0aW9uICovXHJcbi5ydWxlcy1zZWN0aW9uIHtcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG59XHJcblxyXG4ucnVsZXMtdGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMjJweDtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIGNvbG9yOiAjMzMzO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbi5ydWxlcy1zdWJ0aXRsZSB7XHJcbiAgY29sb3I6ICM2NjY7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbi5ydWxlcy1saXN0IHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdhcDogMTVweDtcclxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG59XHJcblxyXG4ucnVsZS1jYXJkIHtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBlYXNlO1xyXG59XHJcblxyXG4ucnVsZS1jYXJkOmhvdmVyIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XHJcbn1cclxuXHJcbi5ydWxlLWhlYWRlciB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLnJ1bGUtZGVzY3JpcHRpb24ge1xyXG4gIGNvbG9yOiAjNjY2O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBsaW5lLWhlaWdodDogMS41O1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XHJcbn1cclxuXHJcbi8qIEN1c3RvbSBSdWxlcyAqL1xyXG4uY3VzdG9tLXJ1bGVzIHtcclxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG59XHJcblxyXG4uY3VzdG9tLXJ1bGVzLWxpc3Qge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ2FwOiAxNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi5jdXN0b20tcnVsZS1pdGVtIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAxMHB4O1xyXG59XHJcblxyXG4uYWRkLXJ1bGUtYnV0dG9uIHtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG4vKiBBZ3JlZW1lbnQgQ2FyZCAqL1xyXG4uYWdyZWVtZW50LWNhcmQge1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCAjMGQ0N2ExO1xyXG59XHJcblxyXG4uYWdyZWVtZW50LXRpdGxlIHtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICBjb2xvcjogIzMzMztcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4uYWdyZWVtZW50LWNvbnRlbnQge1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi5hZ3JlZW1lbnQtdGVybXMge1xyXG4gIHBhZGRpbmctbGVmdDogMjBweDtcclxuICBjb2xvcjogIzY2NjtcclxuICBsaW5lLWhlaWdodDogMS42O1xyXG59XHJcblxyXG4uYWdyZWVtZW50LXRlcm1zIGxpIHtcclxuICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbn1cclxuXHJcbi8qIFN0ZXAgQWN0aW9ucyAqL1xyXG4uc3RlcC1hY3Rpb25zIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNmMGYwZjA7XHJcbn1cclxuXHJcbi5iYWNrLWJ1dHRvbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogOHB4O1xyXG4gIGNvbG9yOiAjNjY2O1xyXG59XHJcblxyXG4uYmFjay1idXR0b246aG92ZXIge1xyXG4gIGNvbG9yOiAjMGQ0N2ExO1xyXG59XHJcblxyXG4vKiBTdG9rdmVsIFR5cGVzIFJlZmVyZW5jZSAqL1xyXG4udHlwZXMtcmVmZXJlbmNlLXNlY3Rpb24ge1xyXG4gIHBhZGRpbmc6IDYwcHggMjBweDtcclxuICBtYXgtd2lkdGg6IDEyMDBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuLnR5cGVzLWdyaWQge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgzMDBweCwgMWZyKSk7XHJcbiAgZ2FwOiAyNXB4O1xyXG4gIG1hcmdpbi10b3A6IDQwcHg7XHJcbn1cclxuXHJcbi50eXBlLWNhcmQge1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4udHlwZS1jYXJkOmhvdmVyIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCk7XHJcbiAgYm9yZGVyLWNvbG9yOiAjMTU2NWMwO1xyXG59XHJcblxyXG4udHlwZS1jYXJkLnNlbGVjdGVkIHtcclxuICBib3JkZXItY29sb3I6ICMwZDQ3YTE7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgxMywgNzEsIDE2MSwgMC4wNSk7XHJcbn1cclxuXHJcbi50eXBlLWltYWdlIHtcclxuICBoZWlnaHQ6IDEyMHB4O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbn1cclxuXHJcbi50eXBlLWltYWdlLmNvbnRyaWJ1dGlvbi1pbWFnZSB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTU3OTYyMTk3MDU2My1lYmVjNzU2MGZmM2U/aXhsaWI9cmItNC4wLjMmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz0yMDcwJnE9ODAnKTtcclxufVxyXG5cclxuLnR5cGUtaW1hZ2UuaW52ZXN0bWVudC1pbWFnZSB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTYxMTk3NDc4OTg1NS05YzJhMGE3MjM2YTM/aXhsaWI9cmItNC4wLjMmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz0yMDcwJnE9ODAnKTtcclxufVxyXG5cclxuLnR5cGUtaW1hZ2UucHJvcGVydHktaW1hZ2Uge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1NjA1MTg4ODMtY2UwOTA1OWVlZmZhP2l4bGliPXJiLTQuMC4zJmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9MjA3MyZxPTgwJyk7XHJcbn1cclxuXHJcbi50eXBlLWltYWdlLmxpdmVzdG9jay1pbWFnZSB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTU0NDU1MTc2My00NmEwMTNiYjcwZDU/aXhsaWI9cmItNC4wLjMmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz0yMDcwJnE9ODAnKTtcclxufVxyXG5cclxuLnR5cGUtaW1hZ2UuZmFtaWx5LWltYWdlIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTE1Mzc3OTA1NzAzLWM0Nzg4ZTUxYWYxNT9peGxpYj1yYi00LjAuMyZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTIwNzAmcT04MCcpO1xyXG59XHJcblxyXG4udHlwZS1pbWFnZS5wYXJ0eS1pbWFnZSB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTUzMDEwMzg2MjY3Ni1kZThjOWRlYmFkMWQ/aXhsaWI9cmItNC4wLjMmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz0yMDcwJnE9ODAnKTtcclxufVxyXG5cclxuLnR5cGUtaWNvbiB7XHJcbiAgZm9udC1zaXplOiAzMnB4O1xyXG4gIGhlaWdodDogMzJweDtcclxuICB3aWR0aDogMzJweDtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMGQ0N2ExIDAlLCAjMTU2NWMwIDEwMCUpO1xyXG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xyXG4gIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBtYXJnaW46IDE1cHggMCAxMHB4O1xyXG59XHJcblxyXG4udHlwZS1jYXJkIGgzIHtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICBjb2xvcjogIzMzMztcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4udHlwZS1jYXJkIHAge1xyXG4gIGNvbG9yOiAjNjY2O1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbi50eXBlLWZlYXR1cmVzIHtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4udHlwZS1mZWF0dXJlcyBsaSB7XHJcbiAgcGFkZGluZzogNXB4IDA7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIGNvbG9yOiAjNjY2O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbn1cclxuXHJcbi50eXBlLWZlYXR1cmVzIGxpOmJlZm9yZSB7XHJcbiAgY29udGVudDogJ8OiwpzCkyc7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgY29sb3I6ICMwZDQ3YTE7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi8qIEhlbHAgU2VjdGlvbiAqL1xyXG4uaGVscC1zZWN0aW9uIHtcclxuICBwYWRkaW5nOiAwIDIwcHggNDBweDtcclxuICBtYXgtd2lkdGg6IDEwMDBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuLmhlbHAtY2FyZCB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2Y4ZjlmYSAwJSwgI2U5ZWNlZiAxMDAlKTtcclxuICBib3JkZXItbGVmdDogNHB4IHNvbGlkICMwZDQ3YTE7XHJcbn1cclxuXHJcbi5oZWxwLWNvbnRlbnQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDMwcHg7XHJcbiAgcGFkZGluZzogMzBweDtcclxufVxyXG5cclxuLmhlbHAtaWNvbiB7XHJcbiAgd2lkdGg6IDYwcHg7XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMwZDQ3YTEgMCUsICMxNTY1YzAgMTAwJSk7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBmbGV4LXNocmluazogMDtcclxufVxyXG5cclxuLmhlbHAtaWNvbiBtYXQtaWNvbiB7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIGhlaWdodDogMzBweDtcclxuICB3aWR0aDogMzBweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5oZWxwLXRleHQge1xyXG4gIGZsZXg6IDE7XHJcbn1cclxuXHJcbi5oZWxwLXRleHQgaDMge1xyXG4gIGZvbnQtc2l6ZTogMjJweDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIGNvbG9yOiAjMzMzO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbi5oZWxwLXRleHQgcCB7XHJcbiAgY29sb3I6ICM2NjY7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5oZWxwLWFjdGlvbnMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZ2FwOiAxNXB4O1xyXG4gIGZsZXgtc2hyaW5rOiAwO1xyXG59XHJcblxyXG4vKiBTZWN0aW9uIFRpdGxlIChSZXVzZWQgZnJvbSB5b3VyIGV4aXN0aW5nIHN0eWxlcykgKi9cclxuLnNlY3Rpb24tdGl0bGUge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG59XHJcblxyXG4uc2VjdGlvbi10aXRsZSBoMiB7XHJcbiAgZm9udC1zaXplOiAzNnB4O1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMwZDQ3YTEgMCUsICMxNTY1YzAgMTAwJSk7XHJcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XHJcbiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuLnNlY3Rpb24tdGl0bGUgcCB7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGNvbG9yOiAjNjY2O1xyXG4gIG1heC13aWR0aDogNjAwcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxufVxyXG5cclxuLyogUmVzcG9uc2l2ZSBEZXNpZ24gKi9cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgLmNyZWF0ZS1oZWFkZXItc2VjdGlvbiB7XHJcbiAgICBwYWRkaW5nOiAxMDBweCAyMHB4IDQwcHg7XHJcbiAgfVxyXG5cclxuICAuY3JlYXRlLWhlYWRlci10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDM2cHg7XHJcbiAgfVxyXG5cclxuICAuY3JlYXRlLWhlYWRlci1zdWJ0aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgfVxyXG5cclxuICAucHJvZ3Jlc3Mtc2VjdGlvbi13cmFwcGVyIHtcclxuICAgIG1hcmdpbi10b3A6IC0yLjVyZW07XHJcbiAgfVxyXG5cclxuICAucHJvZ3Jlc3Mtc2VjdGlvbiB7XHJcbiAgICB3aWR0aDogOTUlO1xyXG4gICAgcGFkZGluZzogMjVweDtcclxuICB9XHJcblxyXG4gIC5mb3JtLXJvdyB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIH1cclxuXHJcbiAgLmZvcm0tZmllbGQtaGFsZixcclxuICAuZm9ybS1maWVsZC10aGlyZCB7XHJcbiAgICBmbGV4OiAxIDEgMTAwJTtcclxuICB9XHJcblxyXG4gIC5maW5hbmNpYWwtY2FyZHMge1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgfVxyXG5cclxuICAudHlwZXMtZ3JpZCB7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICB9XHJcblxyXG4gIC5oZWxwLWNvbnRlbnQge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGdhcDogMjBweDtcclxuICB9XHJcblxyXG4gIC5oZWxwLWFjdGlvbnMge1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAuc3RlcC1hY3Rpb25zIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBnYXA6IDE1cHg7XHJcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcclxuICB9XHJcblxyXG4gIC5iYWNrLWJ1dHRvbiB7XHJcbiAgICBvcmRlcjogMjtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xyXG4gIC5jcmVhdGUtaGVhZGVyLXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICB9XHJcblxyXG4gIC5wcm9ncmVzcy1zZWN0aW9uIHtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgfVxyXG5cclxuICAuZm9ybS1zZWN0aW9uLXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICB9XHJcblxyXG4gIC5zZWN0aW9uLXRpdGxlIGgyIHtcclxuICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICB9XHJcblxyXG4gIC5oZWxwLWFjdGlvbnMge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLmhlbHAtYWN0aW9ucyBidXR0b24ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG59XHJcblxyXG4vKiBBbmltYXRpb24gQ2xhc3NlcyAqL1xyXG4uZmFkZS1pbiB7XHJcbiAgYW5pbWF0aW9uOiBmYWRlSW4gMC44cyBlYXNlLWluO1xyXG59XHJcblxyXG4uc2xpZGUtdXAge1xyXG4gIGFuaW1hdGlvbjogc2xpZGVVcCAwLjZzIGVhc2Utb3V0O1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGZhZGVJbiB7XHJcbiAgZnJvbSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxuICB0byB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBzbGlkZVVwIHtcclxuICBmcm9tIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMzBweCk7XHJcbiAgfVxyXG4gIHRvIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgfVxyXG59XHJcblxyXG4vKiBMb2FkaW5nIFN0YXRlICovXHJcbi5jcmVhdGluZy1vdmVybGF5IHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgei1pbmRleDogMTAwMDtcclxufVxyXG5cclxuLmNyZWF0aW5nLWNvbnRlbnQge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBwYWRkaW5nOiA0MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgYm94LXNoYWRvdzogMCA4cHggMzJweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbn1cclxuXHJcbi5jcmVhdGluZy1zcGlubmVyIHtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4uY3JlYXRpbmctdGV4dCB7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGNvbG9yOiAjMzMzO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuLmNyZWF0ZS1idXR0b24ge1xyXG4gIG1pbi13aWR0aDogMTYwcHg7XHJcblxyXG4gICY6ZGlzYWJsZWQge1xyXG4gICAgb3BhY2l0eTogMC43O1xyXG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcclxuICB9XHJcbn1cclxuXHJcbi5idXR0b24tY29udGVudCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogOHB4O1xyXG59XHJcblxyXG5tYXQtc3Bpbm5lciB7XHJcbiAgOjpuZy1kZWVwIGNpcmNsZSB7XHJcbiAgICBzdHJva2U6IHdoaXRlO1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  }));
}
_staticBlock();

/***/ })

}]);
//# sourceMappingURL=src_app_components_stokvel-create_stokvel-create_component_ts.js.map