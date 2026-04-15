"use strict";
(self["webpackChunkestokvel_ui"] = self["webpackChunkestokvel_ui"] || []).push([["default-src_app_components_stokvel-join_join-stokvel-modal_ts"],{

/***/ 3570:
/*!***************************************************************!*\
  !*** ./src/app/components/stokvel-join/join-stokvel-modal.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JoinStokvelModalComponent: () => (/* binding */ JoinStokvelModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ 7760);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../material.module */ 9439);
/* harmony import */ var _dashboard_common_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dashboard/common.util */ 3693);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2481);
/* harmony import */ var _services_stokvel_stokvel_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/stokvel/stokvel.service */ 7093);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ 8388);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ 5541);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ 3840);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ 9885);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/card */ 3777);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/checkbox */ 7024);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/progress-spinner */ 1134);
var _staticBlock;


















function JoinStokvelModalComponent_img_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "img", 38);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", (ctx_r0.data.userProfile == null ? null : ctx_r0.data.userProfile.picture) || "assets/default-avatar.png", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
  }
}
function JoinStokvelModalComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 39)(1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "person");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function JoinStokvelModalComponent_mat_error_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Contribution amount is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function JoinStokvelModalComponent_mat_error_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Amount must be at least R 1 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function JoinStokvelModalComponent_mat_error_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Amount cannot exceed R 100,000 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function JoinStokvelModalComponent_div_51_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 23)(1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "trending_up");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Stokvel's standard contribution: ", ctx_r0.formatCurrency(ctx_r0.data.monthlyContribution));
  }
}
function JoinStokvelModalComponent_mat_error_70_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " You must agree to the terms to continue ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function JoinStokvelModalComponent_span_75_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Send Join Request");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function JoinStokvelModalComponent_div_76_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "mat-spinner", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Sending...");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
class JoinStokvelModalComponent {
  constructor(dialogRef, data, fb, stokvelService, snackBar) {
    this.dialogRef = dialogRef;
    this.data = data;
    this.fb = fb;
    this.stokvelService = stokvelService;
    this.snackBar = snackBar;
    this.isLoading = false;
    this.joinForm = this.fb.group({
      contributionAmount: [this.data.monthlyContribution || 500, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.min(100), _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.max(100000000)]],
      agreeToTerms: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.requiredTrue]
    });
  }
  onSubmit() {
    if (this.joinForm.valid) {
      this.isLoading = true;
      const joinRequest = {
        stokvelId: this.data.stokvelId,
        stokvelName: this.data.stokvelName,
        // From modal data
        userId: this.data.currentUserId,
        fullName: this.data.userProfile?.name || 'User',
        userEmail: this.data.userProfile?.email || '',
        message: 'I would like to join this stokvel and participate in the community savings.',
        contributionAmount: this.joinForm.get('contributionAmount')?.value
      };
      this.stokvelService.joinStokvel(joinRequest).subscribe({
        next: response => {
          this.isLoading = false;
          this.snackBar.open('Join request sent successfully! Administrators will review your profile.', 'Close', {
            duration: 5000,
            panelClass: ['success-snackbar']
          });
          this.dialogRef.close(true);
        },
        error: error => {
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
  onCancel() {
    this.dialogRef.close(false);
  }
  formatCurrency(value) {
    return (0,_dashboard_common_util__WEBPACK_IMPORTED_MODULE_4__.formatCurrency)(value);
  }
  static #_ = _staticBlock = () => (this.ɵfac = function JoinStokvelModalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || JoinStokvelModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_stokvel_stokvel_service__WEBPACK_IMPORTED_MODULE_6__.StokvelService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__.MatSnackBar));
  }, this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: JoinStokvelModalComponent,
    selectors: [["app-join-stokvel-modal"]],
    decls: 77,
    vars: 18,
    consts: [[1, "modal-container"], [1, "modal-header"], [1, "modal-title"], ["mat-icon-button", "", 1, "close-button", 3, "click"], [1, "modal-content"], [1, "confirmation-section"], [1, "profile-card", "mat-elevation-z4"], [1, "profile-header"], [1, "profile-avatar-container"], ["alt", "Profile picture", "class", "profile-avatar", 3, "src", 4, "ngIf"], ["class", "profile-avatar-placeholder", 4, "ngIf"], [1, "profile-info"], [1, "profile-name"], [1, "profile-email"], [1, "member-since"], [1, "member-icon"], [1, "contribution-card", "mat-elevation-z2"], [1, "contribution-form", 3, "formGroup"], ["appearance", "outline", 1, "full-width"], ["matPrefix", ""], ["matInput", "", "type", "number", "formControlName", "contributionAmount", "placeholder", "Enter amount", "min", "1", "max", "100000", "step", "50"], [4, "ngIf"], [1, "contribution-info"], [1, "info-item"], ["class", "info-item", 4, "ngIf"], [1, "info-message"], [1, "info-icon"], [1, "info-content"], [1, "agreement-form", 3, "formGroup"], [1, "agreement-card", "mat-elevation-z2"], ["formControlName", "agreeToTerms", "color", "primary", 1, "agreement-checkbox"], [1, "agreement-text"], [1, "agreement-subtext"], ["class", "agreement-error", 4, "ngIf"], [1, "modal-actions"], ["mat-button", "", 1, "cancel-button", 3, "click", "disabled"], ["mat-raised-button", "", "color", "primary", 1, "submit-button", 3, "click", "disabled"], ["class", "loading-content", 4, "ngIf"], ["alt", "Profile picture", 1, "profile-avatar", 3, "src"], [1, "profile-avatar-placeholder"], [1, "agreement-error"], [1, "loading-content"], ["diameter", "20"]],
    template: function JoinStokvelModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function JoinStokvelModalComponent_Template_button_click_4_listener() {
          return ctx.onCancel();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "mat-dialog-content", 4)(8, "div", 5)(9, "mat-card", 6)(10, "div", 7)(11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](12, JoinStokvelModalComponent_img_12_Template, 1, 1, "img", 9)(13, JoinStokvelModalComponent_div_13_Template, 3, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 11)(15, "h3", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "div", 14)(20, "mat-icon", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, "calendar_today");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "mat-card", 16)(25, "mat-card-header")(26, "mat-card-title")(27, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28, "payments");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](29, " Proposed Contribution Amount ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](31, " This will be your monthly contribution to the stokvel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "mat-card-content")(33, "form", 17)(34, "mat-form-field", 18)(35, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](36, "Monthly Contribution Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](38, "R \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](39, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "mat-hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](42, JoinStokvelModalComponent_mat_error_42_Template, 2, 0, "mat-error", 21)(43, JoinStokvelModalComponent_mat_error_43_Template, 2, 0, "mat-error", 21)(44, JoinStokvelModalComponent_mat_error_44_Template, 2, 0, "mat-error", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](45, "div", 22)(46, "div", 23)(47, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](48, "info");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](49, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](50, "This amount indicates what you're comfortable contributing monthly");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](51, JoinStokvelModalComponent_div_51_Template, 5, 1, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](52, "div", 25)(53, "div", 26)(54, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](55, "info");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](56, "div", 27)(57, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](58, "Your profile and contribution amount will be shared");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](59, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](60, "The stokvel administrators will review your profile and proposed contribution amount. Make sure your profile is up to date!");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](61, "form", 28)(62, "mat-card", 29)(63, "mat-card-content")(64, "mat-checkbox", 30)(65, "div", 31)(66, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](67, "I agree to abide by the stokvel's rules and constitution");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](68, "p", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](69, "I understand that my profile information and proposed contribution amount will be shared with the stokvel administrators for review purposes.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](70, JoinStokvelModalComponent_mat_error_70_Template, 2, 0, "mat-error", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](71, "mat-dialog-actions", 34)(72, "button", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function JoinStokvelModalComponent_Template_button_click_72_listener() {
          return ctx.onCancel();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](73, " Cancel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](74, "button", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function JoinStokvelModalComponent_Template_button_click_74_listener() {
          return ctx.onSubmit();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](75, JoinStokvelModalComponent_span_75_Template, 2, 0, "span", 21)(76, JoinStokvelModalComponent_div_76_Template, 4, 0, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        let tmp_8_0;
        let tmp_9_0;
        let tmp_10_0;
        let tmp_13_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Request to Join ", ctx.data.stokvelName);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.data.userProfile == null ? null : ctx.data.userProfile.picture);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !(ctx.data.userProfile == null ? null : ctx.data.userProfile.picture));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"]((ctx.data.userProfile == null ? null : ctx.data.userProfile.name) || "User");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"]((ctx.data.userProfile == null ? null : ctx.data.userProfile.email) || "Email not provided");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Member since ", (ctx.data.userProfile == null ? null : ctx.data.userProfile.joinDate) || "recently");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.joinForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" Suggested: ", ctx.formatCurrency(ctx.data.monthlyContribution || 500), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (tmp_8_0 = ctx.joinForm.get("contributionAmount")) == null ? null : tmp_8_0.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (tmp_9_0 = ctx.joinForm.get("contributionAmount")) == null ? null : tmp_9_0.hasError("min"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (tmp_10_0 = ctx.joinForm.get("contributionAmount")) == null ? null : tmp_10_0.hasError("max"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.data.monthlyContribution);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.joinForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ((tmp_13_0 = ctx.joinForm.get("agreeToTerms")) == null ? null : tmp_13_0.hasError("required")) && ((tmp_13_0 = ctx.joinForm.get("agreeToTerms")) == null ? null : tmp_13_0.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx.joinForm.invalid || ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isLoading);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgIf, _material_module__WEBPACK_IMPORTED_MODULE_3__.MaterialModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatHint, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatError, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatPrefix, _angular_material_input__WEBPACK_IMPORTED_MODULE_9__.MatInput, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatIconButton, _angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCardSubtitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCardTitle, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__.MatCheckbox, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogActions, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogContent, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__.MatProgressSpinner, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.MaxValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName],
    styles: ["\n\n.modal-container[_ngcontent-%COMP%] {\n  min-width: 500px;\n  max-width: 600px;\n  border-radius: 12px;\n  overflow: hidden;\n}\n\n\n\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 24px 24px 0;\n  background: linear-gradient(135deg, rgba(13, 71, 161, 0.95) 0%, rgba(21, 101, 192, 0.95) 100%);\n  color: white;\n  position: relative;\n}\n.modal-header[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  bottom: -2px;\n  left: 0;\n  right: 0;\n  height: 4px;\n  background: linear-gradient(135deg, #0d47a1 0%, #1565c0 100%);\n}\n\n.modal-title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 24px;\n  font-weight: 500;\n  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\n}\n\n.close-button[_ngcontent-%COMP%] {\n  color: white;\n}\n.close-button[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.1);\n}\n\n\n\n.modal-content[_ngcontent-%COMP%] {\n  padding: 0 !important;\n  margin: 0;\n  background: #f8f9fa;\n}\n\n.confirmation-section[_ngcontent-%COMP%] {\n  padding: 24px;\n}\n\n\n\n.profile-card[_ngcontent-%COMP%] {\n  border-radius: 12px;\n  overflow: hidden;\n  margin-bottom: 20px;\n}\n\n.profile-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 20px;\n}\n\n.profile-avatar-container[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n}\n\n.profile-avatar[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  object-fit: cover;\n  border: 3px solid #1565c0;\n}\n\n.profile-avatar-placeholder[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  background: linear-gradient(135deg, #0d47a1 0%, #1565c0 100%);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.profile-avatar-placeholder[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 40px;\n  width: 40px;\n  height: 40px;\n}\n\n.profile-info[_ngcontent-%COMP%] {\n  flex: 1;\n}\n\n.profile-name[_ngcontent-%COMP%] {\n  margin: 0 0 4px 0;\n  font-size: 20px;\n  font-weight: 500;\n  color: #333;\n}\n\n.profile-email[_ngcontent-%COMP%] {\n  margin: 0 0 8px 0;\n  color: #666;\n  font-size: 14px;\n}\n\n.member-since[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  color: #888;\n  font-size: 13px;\n}\n.member-since[_ngcontent-%COMP%]   .member-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n}\n\n\n\n.profile-stats[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 16px;\n  padding: 20px;\n}\n\n.stat-item[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 12px;\n  background: linear-gradient(135deg, rgba(13, 71, 161, 0.05) 0%, rgba(21, 101, 192, 0.05) 100%);\n  border-radius: 8px;\n  border: 1px solid rgba(13, 71, 161, 0.1);\n}\n\n.stat-value[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 600;\n  color: #0d47a1;\n  margin-bottom: 4px;\n}\n\n.stat-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #666;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n\n\n\n.profile-details[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n\n.detail-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px 0;\n  border-bottom: 1px solid #f0f0f0;\n}\n.detail-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n\n.detail-icon[_ngcontent-%COMP%] {\n  color: #0d47a1;\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n}\n\n.detail-label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #333;\n  min-width: 80px;\n}\n\n.detail-value[_ngcontent-%COMP%] {\n  color: #666;\n  flex: 1;\n}\n\n\n\n.info-message[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 16px;\n  background: linear-gradient(135deg, rgba(33, 150, 243, 0.1) 0%, rgba(30, 136, 229, 0.1) 100%);\n  border-left: 4px solid #2196f3;\n  padding: 16px;\n  border-radius: 8px;\n  margin: 16px 0;\n}\n\n.info-icon[_ngcontent-%COMP%] {\n  color: #2196f3;\n  flex-shrink: 0;\n}\n.info-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n  width: 24px;\n  height: 24px;\n}\n\n.info-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0 0 4px 0;\n  color: #1976d2;\n  font-size: 16px;\n  font-weight: 500;\n}\n.info-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #1565c0;\n  font-size: 14px;\n  line-height: 1.4;\n}\n\n\n\n.agreement-form[_ngcontent-%COMP%] {\n  padding: 0 24px 24px;\n}\n\n.agreement-card[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  border: 1px solid #e0e0e0;\n}\n\n.agreement-checkbox[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.agreement-checkbox[_ngcontent-%COMP%]     .mat-checkbox-layout {\n  align-items: flex-start !important;\n  white-space: normal !important;\n}\n.agreement-checkbox[_ngcontent-%COMP%]     .mat-checkbox-inner-container {\n  margin-top: 2px;\n}\n\n.agreement-text[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}\n.agreement-text[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #333;\n  font-size: 14px;\n  display: block;\n  margin-bottom: 4px;\n}\n\n.agreement-subtext[_ngcontent-%COMP%] {\n  color: #666;\n  font-size: 13px;\n  line-height: 1.4;\n  margin: 0;\n}\n\n.agreement-error[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 8px;\n  font-size: 12px;\n  color: #f44336;\n}\n\n\n\n.modal-actions[_ngcontent-%COMP%] {\n  padding: 16px 24px !important;\n  margin: 0 !important;\n  border-top: 1px solid #e0e0e0;\n  background: white;\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n}\n\n.cancel-button[_ngcontent-%COMP%] {\n  color: #666;\n  border: 1px solid #ddd;\n}\n.cancel-button[_ngcontent-%COMP%]:hover {\n  background: #f5f5f5;\n}\n\n.submit-button[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #0d47a1 0%, #1565c0 100%);\n  color: white;\n  font-weight: 500;\n  min-width: 140px;\n}\n.submit-button[_ngcontent-%COMP%]:hover:not([disabled]) {\n  background: linear-gradient(135deg, #092e6b 0%, #1565c0 100%);\n  transform: translateY(-1px);\n  box-shadow: 0 4px 12px rgba(13, 71, 161, 0.3);\n}\n.submit-button[_ngcontent-%COMP%]:disabled {\n  background: #ccc;\n  transform: none;\n  box-shadow: none;\n}\n\n.loading-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.loading-content[_ngcontent-%COMP%]     .mat-progress-spinner circle {\n  stroke: white;\n}\n\n\n\n@media (max-width: 600px) {\n  .modal-container[_ngcontent-%COMP%] {\n    min-width: unset;\n    width: 95vw;\n    max-width: 95vw;\n  }\n  .modal-header[_ngcontent-%COMP%] {\n    padding: 16px 16px 0;\n  }\n  .modal-title[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n  .confirmation-section[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .profile-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    text-align: center;\n    gap: 12px;\n  }\n  .profile-stats[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 12px;\n  }\n  .agreement-form[_ngcontent-%COMP%] {\n    padding: 0 16px 16px;\n  }\n  .modal-actions[_ngcontent-%COMP%] {\n    padding: 12px 16px !important;\n    flex-direction: column-reverse;\n  }\n  .modal-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    width: 100%;\n    margin: 0 !important;\n  }\n}\n\n\n[_nghost-%COMP%] {\n  animation: _ngcontent-%COMP%_slideIn 0.3s ease-out;\n}\n\n@keyframes _ngcontent-%COMP%_slideIn {\n  from {\n    opacity: 0;\n    transform: translateY(-20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n\n\n.contribution-card[_ngcontent-%COMP%] {\n  margin: 20px 0;\n  border-left: 4px solid #4caf50;\n}\n.contribution-card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%] {\n  padding: 20px 20px 0;\n}\n.contribution-card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%]   mat-card-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  color: #2e7d32;\n  font-size: 18px;\n  font-weight: 500;\n}\n.contribution-card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%]   mat-card-title[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #4caf50;\n}\n.contribution-card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%]   mat-card-subtitle[_ngcontent-%COMP%] {\n  color: #666;\n  font-size: 14px;\n}\n.contribution-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%] {\n  padding: 16px 20px 20px;\n}\n\n.contribution-form[_ngcontent-%COMP%]   .full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.contribution-form[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n.contribution-form[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]   .mat-form-field-prefix[_ngcontent-%COMP%] {\n  color: #4caf50;\n  font-weight: 500;\n}\n.contribution-form[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]   .mat-input-element[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 500;\n  color: #2e7d32;\n}\n.contribution-form[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]   .mat-hint[_ngcontent-%COMP%] {\n  color: #666;\n  font-size: 12px;\n}\n\n.contribution-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  margin-top: 16px;\n}\n\n.info-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  padding: 12px;\n  background: rgba(76, 175, 80, 0.05);\n  border-radius: 8px;\n  border: 1px solid rgba(76, 175, 80, 0.2);\n}\n.info-item[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #4caf50;\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  flex-shrink: 0;\n  margin-top: 1px;\n}\n.info-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #2e7d32;\n  font-size: 14px;\n  line-height: 1.4;\n}\n\n.agreement-subtext[_ngcontent-%COMP%] {\n  color: #666;\n  font-size: 13px;\n  line-height: 1.4;\n  margin: 4px 0 0 0;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9zdG9rdmVsLWpvaW4vam9pbi1zdG9rdmVsLW1vZGFsLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsc0NBQUE7QUFDQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUEsV0FBQTtBQUNBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLDhGQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBQ0Y7QUFDRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSw2REFBQTtBQUNKOztBQUdBO0VBQ0UsU0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHlDQUFBO0FBQUY7O0FBR0E7RUFDRSxZQUFBO0FBQUY7QUFFRTtFQUNFLG9DQUFBO0FBQUo7O0FBSUEsWUFBQTtBQUNBO0VBQ0UscUJBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7QUFERjs7QUFJQTtFQUNFLGFBQUE7QUFERjs7QUFJQSxpQkFBQTtBQUNBO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBREY7O0FBSUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtBQURGOztBQUlBO0VBQ0UsY0FBQTtBQURGOztBQUlBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7QUFERjs7QUFJQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSw2REFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBREY7QUFHRTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFESjs7QUFLQTtFQUNFLE9BQUE7QUFGRjs7QUFLQTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQUZGOztBQUtBO0VBQ0UsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQUZGOztBQUtBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBRkY7QUFJRTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUZKOztBQU1BLGtCQUFBO0FBQ0E7RUFDRSxhQUFBO0VBQ0EscUNBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtBQUhGOztBQU1BO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsOEZBQUE7RUFDQSxrQkFBQTtFQUNBLHdDQUFBO0FBSEY7O0FBTUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFIRjs7QUFNQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtBQUhGOztBQU1BLG9CQUFBO0FBQ0E7RUFDRSxhQUFBO0FBSEY7O0FBTUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGdDQUFBO0FBSEY7QUFLRTtFQUNFLG1CQUFBO0FBSEo7O0FBT0E7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBSkY7O0FBT0E7RUFDRSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBSkY7O0FBT0E7RUFDRSxXQUFBO0VBQ0EsT0FBQTtBQUpGOztBQU9BLGlCQUFBO0FBQ0E7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxTQUFBO0VBQ0EsNkZBQUE7RUFDQSw4QkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFKRjs7QUFPQTtFQUNFLGNBQUE7RUFDQSxjQUFBO0FBSkY7QUFNRTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUpKOztBQVNFO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBTko7QUFTRTtFQUNFLFNBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBUEo7O0FBV0EsbUJBQUE7QUFDQTtFQUNFLG9CQUFBO0FBUkY7O0FBV0E7RUFDRSxrQkFBQTtFQUNBLHlCQUFBO0FBUkY7O0FBV0E7RUFDRSxXQUFBO0FBUkY7QUFVRTtFQUNFLGtDQUFBO0VBQ0EsOEJBQUE7QUFSSjtBQVdFO0VBQ0UsZUFBQTtBQVRKOztBQWFBO0VBQ0UsZ0JBQUE7QUFWRjtBQVlFO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFWSjs7QUFjQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0FBWEY7O0FBY0E7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBWEY7O0FBY0EsWUFBQTtBQUNBO0VBQ0UsNkJBQUE7RUFDQSxvQkFBQTtFQUNBLDZCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxTQUFBO0FBWEY7O0FBY0E7RUFDRSxXQUFBO0VBQ0Esc0JBQUE7QUFYRjtBQWFFO0VBQ0UsbUJBQUE7QUFYSjs7QUFlQTtFQUNFLDZEQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFaRjtBQWNFO0VBQ0UsNkRBQUE7RUFDQSwyQkFBQTtFQUNBLDZDQUFBO0FBWko7QUFlRTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBYko7O0FBaUJBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtBQWRGO0FBZ0JFO0VBQ0UsYUFBQTtBQWRKOztBQWtCQSxzQkFBQTtBQUNBO0VBQ0U7SUFDRSxnQkFBQTtJQUNBLFdBQUE7SUFDQSxlQUFBO0VBZkY7RUFrQkE7SUFDRSxvQkFBQTtFQWhCRjtFQW1CQTtJQUNFLGVBQUE7RUFqQkY7RUFvQkE7SUFDRSxhQUFBO0VBbEJGO0VBcUJBO0lBQ0Usc0JBQUE7SUFDQSxrQkFBQTtJQUNBLFNBQUE7RUFuQkY7RUFzQkE7SUFDRSwwQkFBQTtJQUNBLFNBQUE7RUFwQkY7RUF1QkE7SUFDRSxvQkFBQTtFQXJCRjtFQXdCQTtJQUNFLDZCQUFBO0lBQ0EsOEJBQUE7RUF0QkY7RUF3QkU7SUFDRSxXQUFBO0lBQ0Esb0JBQUE7RUF0Qko7QUFDRjtBQTBCQSxjQUFBO0FBQ0E7RUFDRSxnQ0FBQTtBQXhCRjs7QUEyQkE7RUFDRTtJQUNFLFVBQUE7SUFDQSw0QkFBQTtFQXhCRjtFQTBCQTtJQUNFLFVBQUE7SUFDQSx3QkFBQTtFQXhCRjtBQUNGO0FBNEJBLDZDQUFBO0FBRUE7RUFDRSxjQUFBO0VBQ0EsOEJBQUE7QUEzQkY7QUE2QkU7RUFDRSxvQkFBQTtBQTNCSjtBQTZCSTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBM0JOO0FBNkJNO0VBQ0UsY0FBQTtBQTNCUjtBQStCSTtFQUNFLFdBQUE7RUFDQSxlQUFBO0FBN0JOO0FBaUNFO0VBQ0UsdUJBQUE7QUEvQko7O0FBb0NFO0VBQ0UsV0FBQTtBQWpDSjtBQW9DRTtFQUNFLG1CQUFBO0FBbENKO0FBb0NJO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0FBbENOO0FBcUNJO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQW5DTjtBQXNDSTtFQUNFLFdBQUE7RUFDQSxlQUFBO0FBcENOOztBQXlDQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtBQXRDRjs7QUF5Q0E7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtFQUNBLG1DQUFBO0VBQ0Esa0JBQUE7RUFDQSx3Q0FBQTtBQXRDRjtBQXdDRTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQXRDSjtBQXlDRTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUF2Q0o7O0FBMkNBO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBeENGIiwic291cmNlc0NvbnRlbnQiOlsiLyogam9pbi1zdG9rdmVsLW1vZGFsLmNvbXBvbmVudC5zY3NzICovXHJcbi5tb2RhbC1jb250YWluZXIge1xyXG4gIG1pbi13aWR0aDogNTAwcHg7XHJcbiAgbWF4LXdpZHRoOiA2MDBweDtcclxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi8qIEhlYWRlciAqL1xyXG4ubW9kYWwtaGVhZGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDI0cHggMjRweCAwO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYmEoMTMsIDcxLCAxNjEsIDAuOTUpIDAlLCByZ2JhKDIxLCAxMDEsIDE5MiwgMC45NSkgMTAwJSk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgJjo6YWZ0ZXIge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IC0ycHg7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBoZWlnaHQ6IDRweDtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMwZDQ3YTEgMCUsICMxNTY1YzAgMTAwJSk7XHJcbiAgfVxyXG59XHJcblxyXG4ubW9kYWwtdGl0bGUge1xyXG4gIG1hcmdpbjogMDtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICB0ZXh0LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxufVxyXG5cclxuLmNsb3NlLWJ1dHRvbiB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcclxuICB9XHJcbn1cclxuXHJcbi8qIENvbnRlbnQgKi9cclxuLm1vZGFsLWNvbnRlbnQge1xyXG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxuICBtYXJnaW46IDA7XHJcbiAgYmFja2dyb3VuZDogI2Y4ZjlmYTtcclxufVxyXG5cclxuLmNvbmZpcm1hdGlvbi1zZWN0aW9uIHtcclxuICBwYWRkaW5nOiAyNHB4O1xyXG59XHJcblxyXG4vKiBQcm9maWxlIENhcmQgKi9cclxuLnByb2ZpbGUtY2FyZCB7XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi5wcm9maWxlLWhlYWRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMTZweDtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcblxyXG4ucHJvZmlsZS1hdmF0YXItY29udGFpbmVyIHtcclxuICBmbGV4LXNocmluazogMDtcclxufVxyXG5cclxuLnByb2ZpbGUtYXZhdGFyIHtcclxuICB3aWR0aDogODBweDtcclxuICBoZWlnaHQ6IDgwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gIGJvcmRlcjogM3B4IHNvbGlkICMxNTY1YzA7XHJcbn1cclxuXHJcbi5wcm9maWxlLWF2YXRhci1wbGFjZWhvbGRlciB7XHJcbiAgd2lkdGg6IDgwcHg7XHJcbiAgaGVpZ2h0OiA4MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMGQ0N2ExIDAlLCAjMTU2NWMwIDEwMCUpO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgbWF0LWljb24ge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4ucHJvZmlsZS1pbmZvIHtcclxuICBmbGV4OiAxO1xyXG59XHJcblxyXG4ucHJvZmlsZS1uYW1lIHtcclxuICBtYXJnaW46IDAgMCA0cHggMDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBjb2xvcjogIzMzMztcclxufVxyXG5cclxuLnByb2ZpbGUtZW1haWwge1xyXG4gIG1hcmdpbjogMCAwIDhweCAwO1xyXG4gIGNvbG9yOiAjNjY2O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuLm1lbWJlci1zaW5jZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogOHB4O1xyXG4gIGNvbG9yOiAjODg4O1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuXHJcbiAgLm1lbWJlci1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIHdpZHRoOiAxNnB4O1xyXG4gICAgaGVpZ2h0OiAxNnB4O1xyXG4gIH1cclxufVxyXG5cclxuLyogUHJvZmlsZSBTdGF0cyAqL1xyXG4ucHJvZmlsZS1zdGF0cyB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xyXG4gIGdhcDogMTZweDtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcblxyXG4uc3RhdC1pdGVtIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMTJweDtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2JhKDEzLCA3MSwgMTYxLCAwLjA1KSAwJSwgcmdiYSgyMSwgMTAxLCAxOTIsIDAuMDUpIDEwMCUpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDEzLCA3MSwgMTYxLCAwLjEpO1xyXG59XHJcblxyXG4uc3RhdC12YWx1ZSB7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgY29sb3I6ICMwZDQ3YTE7XHJcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xyXG59XHJcblxyXG4uc3RhdC1sYWJlbCB7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGNvbG9yOiAjNjY2O1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xyXG59XHJcblxyXG4vKiBQcm9maWxlIERldGFpbHMgKi9cclxuLnByb2ZpbGUtZGV0YWlscyB7XHJcbiAgcGFkZGluZzogMjBweDtcclxufVxyXG5cclxuLmRldGFpbC1yb3cge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDEycHg7XHJcbiAgcGFkZGluZzogMTJweCAwO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjBmMGYwO1xyXG5cclxuICAmOmxhc3QtY2hpbGQge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcbi5kZXRhaWwtaWNvbiB7XHJcbiAgY29sb3I6ICMwZDQ3YTE7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIHdpZHRoOiAyMHB4O1xyXG4gIGhlaWdodDogMjBweDtcclxufVxyXG5cclxuLmRldGFpbC1sYWJlbCB7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBjb2xvcjogIzMzMztcclxuICBtaW4td2lkdGg6IDgwcHg7XHJcbn1cclxuXHJcbi5kZXRhaWwtdmFsdWUge1xyXG4gIGNvbG9yOiAjNjY2O1xyXG4gIGZsZXg6IDE7XHJcbn1cclxuXHJcbi8qIEluZm8gTWVzc2FnZSAqL1xyXG4uaW5mby1tZXNzYWdlIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gIGdhcDogMTZweDtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2JhKDMzLCAxNTAsIDI0MywgMC4xKSAwJSwgcmdiYSgzMCwgMTM2LCAyMjksIDAuMSkgMTAwJSk7XHJcbiAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCAjMjE5NmYzO1xyXG4gIHBhZGRpbmc6IDE2cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIG1hcmdpbjogMTZweCAwO1xyXG59XHJcblxyXG4uaW5mby1pY29uIHtcclxuICBjb2xvcjogIzIxOTZmMztcclxuICBmbGV4LXNocmluazogMDtcclxuXHJcbiAgbWF0LWljb24ge1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgd2lkdGg6IDI0cHg7XHJcbiAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgfVxyXG59XHJcblxyXG4uaW5mby1jb250ZW50IHtcclxuICBoNCB7XHJcbiAgICBtYXJnaW46IDAgMCA0cHggMDtcclxuICAgIGNvbG9yOiAjMTk3NmQyO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICB9XHJcblxyXG4gIHAge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgY29sb3I6ICMxNTY1YzA7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMS40O1xyXG4gIH1cclxufVxyXG5cclxuLyogQWdyZWVtZW50IEZvcm0gKi9cclxuLmFncmVlbWVudC1mb3JtIHtcclxuICBwYWRkaW5nOiAwIDI0cHggMjRweDtcclxufVxyXG5cclxuLmFncmVlbWVudC1jYXJkIHtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2UwZTBlMDtcclxufVxyXG5cclxuLmFncmVlbWVudC1jaGVja2JveCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcblxyXG4gIDo6bmctZGVlcCAubWF0LWNoZWNrYm94LWxheW91dCB7XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydCAhaW1wb3J0YW50O1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgOjpuZy1kZWVwIC5tYXQtY2hlY2tib3gtaW5uZXItY29udGFpbmVyIHtcclxuICAgIG1hcmdpbi10b3A6IDJweDtcclxuICB9XHJcbn1cclxuXHJcbi5hZ3JlZW1lbnQtdGV4dCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDhweDtcclxuXHJcbiAgc3Ryb25nIHtcclxuICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0cHg7XHJcbiAgfVxyXG59XHJcblxyXG4uYWdyZWVtZW50LXN1YnRleHQge1xyXG4gIGNvbG9yOiAjNjY2O1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBsaW5lLWhlaWdodDogMS40O1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuLmFncmVlbWVudC1lcnJvciB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luLXRvcDogOHB4O1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBjb2xvcjogI2Y0NDMzNjtcclxufVxyXG5cclxuLyogQWN0aW9ucyAqL1xyXG4ubW9kYWwtYWN0aW9ucyB7XHJcbiAgcGFkZGluZzogMTZweCAyNHB4ICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlMGUwZTA7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gIGdhcDogMTJweDtcclxufVxyXG5cclxuLmNhbmNlbC1idXR0b24ge1xyXG4gIGNvbG9yOiAjNjY2O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcclxuICB9XHJcbn1cclxuXHJcbi5zdWJtaXQtYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMGQ0N2ExIDAlLCAjMTU2NWMwIDEwMCUpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIG1pbi13aWR0aDogMTQwcHg7XHJcblxyXG4gICY6aG92ZXI6bm90KFtkaXNhYmxlZF0pIHtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMwOTJlNmIgMCUsICMxNTY1YzAgMTAwJSk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XHJcbiAgICBib3gtc2hhZG93OiAwIDRweCAxMnB4IHJnYmEoMTMsIDcxLCAxNjEsIDAuMyk7XHJcbiAgfVxyXG5cclxuICAmOmRpc2FibGVkIHtcclxuICAgIGJhY2tncm91bmQ6ICNjY2M7XHJcbiAgICB0cmFuc2Zvcm06IG5vbmU7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gIH1cclxufVxyXG5cclxuLmxvYWRpbmctY29udGVudCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogOHB4O1xyXG5cclxuICA6Om5nLWRlZXAgLm1hdC1wcm9ncmVzcy1zcGlubmVyIGNpcmNsZSB7XHJcbiAgICBzdHJva2U6IHdoaXRlO1xyXG4gIH1cclxufVxyXG5cclxuLyogUmVzcG9uc2l2ZSBEZXNpZ24gKi9cclxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgLm1vZGFsLWNvbnRhaW5lciB7XHJcbiAgICBtaW4td2lkdGg6IHVuc2V0O1xyXG4gICAgd2lkdGg6IDk1dnc7XHJcbiAgICBtYXgtd2lkdGg6IDk1dnc7XHJcbiAgfVxyXG5cclxuICAubW9kYWwtaGVhZGVyIHtcclxuICAgIHBhZGRpbmc6IDE2cHggMTZweCAwO1xyXG4gIH1cclxuXHJcbiAgLm1vZGFsLXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICB9XHJcblxyXG4gIC5jb25maXJtYXRpb24tc2VjdGlvbiB7XHJcbiAgICBwYWRkaW5nOiAxNnB4O1xyXG4gIH1cclxuXHJcbiAgLnByb2ZpbGUtaGVhZGVyIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBnYXA6IDEycHg7XHJcbiAgfVxyXG5cclxuICAucHJvZmlsZS1zdGF0cyB7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICAgIGdhcDogMTJweDtcclxuICB9XHJcblxyXG4gIC5hZ3JlZW1lbnQtZm9ybSB7XHJcbiAgICBwYWRkaW5nOiAwIDE2cHggMTZweDtcclxuICB9XHJcblxyXG4gIC5tb2RhbC1hY3Rpb25zIHtcclxuICAgIHBhZGRpbmc6IDEycHggMTZweCAhaW1wb3J0YW50O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xyXG5cclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8qIEFuaW1hdGlvbiAqL1xyXG46aG9zdCB7XHJcbiAgYW5pbWF0aW9uOiBzbGlkZUluIDAuM3MgZWFzZS1vdXQ7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc2xpZGVJbiB7XHJcbiAgZnJvbSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMHB4KTtcclxuICB9XHJcbiAgdG8ge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICB9XHJcbn1cclxuXHJcblxyXG4vKiBBZGQgdG8gam9pbi1zdG9rdmVsLW1vZGFsLmNvbXBvbmVudC5zY3NzICovXHJcblxyXG4uY29udHJpYnV0aW9uLWNhcmQge1xyXG4gIG1hcmdpbjogMjBweCAwO1xyXG4gIGJvcmRlci1sZWZ0OiA0cHggc29saWQgIzRjYWY1MDtcclxuXHJcbiAgbWF0LWNhcmQtaGVhZGVyIHtcclxuICAgIHBhZGRpbmc6IDIwcHggMjBweCAwO1xyXG5cclxuICAgIG1hdC1jYXJkLXRpdGxlIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgZ2FwOiA4cHg7XHJcbiAgICAgIGNvbG9yOiAjMmU3ZDMyO1xyXG4gICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcblxyXG4gICAgICBtYXQtaWNvbiB7XHJcbiAgICAgICAgY29sb3I6ICM0Y2FmNTA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBtYXQtY2FyZC1zdWJ0aXRsZSB7XHJcbiAgICAgIGNvbG9yOiAjNjY2O1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBtYXQtY2FyZC1jb250ZW50IHtcclxuICAgIHBhZGRpbmc6IDE2cHggMjBweCAyMHB4O1xyXG4gIH1cclxufVxyXG5cclxuLmNvbnRyaWJ1dGlvbi1mb3JtIHtcclxuICAuZnVsbC13aWR0aCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gIG1hdC1mb3JtLWZpZWxkIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcblxyXG4gICAgLm1hdC1mb3JtLWZpZWxkLXByZWZpeCB7XHJcbiAgICAgIGNvbG9yOiAjNGNhZjUwO1xyXG4gICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5tYXQtaW5wdXQtZWxlbWVudCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgY29sb3I6ICMyZTdkMzI7XHJcbiAgICB9XHJcblxyXG4gICAgLm1hdC1oaW50IHtcclxuICAgICAgY29sb3I6ICM2NjY7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5jb250cmlidXRpb24taW5mbyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGdhcDogMTJweDtcclxuICBtYXJnaW4tdG9wOiAxNnB4O1xyXG59XHJcblxyXG4uaW5mby1pdGVtIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gIGdhcDogMTJweDtcclxuICBwYWRkaW5nOiAxMnB4O1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoNzYsIDE3NSwgODAsIDAuMDUpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDc2LCAxNzUsIDgwLCAwLjIpO1xyXG5cclxuICBtYXQtaWNvbiB7XHJcbiAgICBjb2xvcjogIzRjYWY1MDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIHdpZHRoOiAxOHB4O1xyXG4gICAgaGVpZ2h0OiAxOHB4O1xyXG4gICAgZmxleC1zaHJpbms6IDA7XHJcbiAgICBtYXJnaW4tdG9wOiAxcHg7XHJcbiAgfVxyXG5cclxuICBzcGFuIHtcclxuICAgIGNvbG9yOiAjMmU3ZDMyO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNDtcclxuICB9XHJcbn1cclxuXHJcbi5hZ3JlZW1lbnQtc3VidGV4dCB7XHJcbiAgY29sb3I6ICM2NjY7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XHJcbiAgbWFyZ2luOiA0cHggMCAwIDA7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  }));
}
_staticBlock();

/***/ }),

/***/ 3693:
/*!*****************************************************!*\
  !*** ./src/app/components/dashboard/common.util.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formatCurrency: () => (/* binding */ formatCurrency)
/* harmony export */ });
function formatCurrency(value) {
  return 'R ' + value.toLocaleString('en-ZA', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
}

/***/ })

}]);
//# sourceMappingURL=default-src_app_components_stokvel-join_join-stokvel-modal_ts.js.map