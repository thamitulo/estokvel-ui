"use strict";
(self["webpackChunkestokvel_ui"] = self["webpackChunkestokvel_ui"] || []).push([["default-src_app_components_kyc-banner_kyc-banner_component_ts-src_app_components_rotation-que-12181a"],{

/***/ 3161:
/*!*********************************************!*\
  !*** ./src/app/services/kyc/kyc.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KycService: () => (/* binding */ KycService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 5797);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 9452);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 1318);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 8764);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment */ 6052);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 3855);
var _staticBlock;





class KycService {
  constructor(http) {
    this.http = http;
    this._status$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(null);
    this.status$ = this._status$.asObservable();
  }
  /** Load KYC status from the backend and cache in the subject. */
  loadStatus() {
    return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_5__.environment.apiUrl}kyc/status`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(res => this._status$.next(res)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(() => {
      const fallback = {
        kycStatus: 'NOT_STARTED'
      };
      this._status$.next(fallback);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(fallback);
    }));
  }
  /** Returns true synchronously if the cached status is VERIFIED. */
  get isVerified() {
    return this._status$.value?.kycStatus === 'VERIFIED';
  }
  /** Observable that emits true only when KYC is VERIFIED. */
  isVerified$() {
    return this.status$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(s => s?.kycStatus === 'VERIFIED'));
  }
  /** Submit KYC documents/data for review. */
  submitKyc(payload) {
    return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_5__.environment.apiUrl}kyc/submit`, payload).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(res => this._status$.next(res)));
  }
  static #_ = _staticBlock = () => (this.ɵfac = function KycService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || KycService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClient));
  }, this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
    token: KycService,
    factory: KycService.ɵfac,
    providedIn: 'root'
  }));
}
_staticBlock();

/***/ }),

/***/ 4407:
/*!***********************************************************************!*\
  !*** ./src/app/components/rotation-queue/rotation-queue.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RotationQueueComponent: () => (/* binding */ RotationQueueComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../material.module */ 9439);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 1318);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 4334);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 9452);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2481);
/* harmony import */ var _services_stokvel_stokvel_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/stokvel/stokvel.service */ 7093);
/* harmony import */ var _services_user_user_service_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/user/user-service.service */ 2915);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ 3840);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/progress-spinner */ 1134);
var _staticBlock;











function RotationQueueComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "mat-spinner", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Loading rotation queue\u2026");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function RotationQueueComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 7)(1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "autorenew");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "Rotation queue not yet initialised. Activate the rotation from the admin panel.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function RotationQueueComponent_div_3_div_5_mat_spinner_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "mat-spinner", 13);
  }
}
function RotationQueueComponent_div_3_div_5_mat_icon_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "shuffle");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function RotationQueueComponent_div_3_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 10)(1, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function RotationQueueComponent_div_3_div_5_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.reset());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, RotationQueueComponent_div_3_div_5_mat_spinner_2_Template, 1, 0, "mat-spinner", 12)(3, RotationQueueComponent_div_3_div_5_mat_icon_3_Template, 2, 0, "mat-icon", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx_r1.resetting);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.resetting);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r1.resetting);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r1.resetting ? "Initialising\u2026" : "Initialise Rotation", " ");
  }
}
function RotationQueueComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 8)(1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "pause_circle");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "Rotation is not yet active for this stokvel.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, RotationQueueComponent_div_3_div_5_Template, 5, 4, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.isAdmin);
  }
}
function RotationQueueComponent_ng_container_4_div_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "stars");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "\uD83C\uDF89 It's your turn!");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, " You are the current payout recipient. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
}
function RotationQueueComponent_ng_container_4_div_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "event");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, " Your payout is at position ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](10, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, " \u00B7 Amount: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](14, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r1.myPosition.position);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" of ", ctx_r1.myPosition.totalSlots, ". Estimated date: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](10, 4, ctx_r1.myPosition.scheduledPayoutDate, "mediumDate"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("R", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](14, 7, ctx_r1.myPosition.payoutAmount));
  }
}
function RotationQueueComponent_ng_container_4_div_1_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "check_circle");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "You have already received your payout this cycle.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
}
function RotationQueueComponent_ng_container_4_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, RotationQueueComponent_ng_container_4_div_1_ng_container_1_Template, 6, 0, "ng-container", 4)(2, RotationQueueComponent_ng_container_4_div_1_ng_container_2_Template, 15, 9, "ng-container", 4)(3, RotationQueueComponent_ng_container_4_div_1_ng_container_3_Template, 5, 0, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.myPosition.isCurrent);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r1.myPosition.isCurrent && !ctx_r1.myPosition.hasReceived);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.myPosition.hasReceived);
  }
}
function RotationQueueComponent_ng_container_4_div_28_mat_spinner_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "mat-spinner", 13);
  }
}
function RotationQueueComponent_ng_container_4_div_28_mat_icon_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "skip_next");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function RotationQueueComponent_ng_container_4_div_28_mat_spinner_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "mat-spinner", 13);
  }
}
function RotationQueueComponent_ng_container_4_div_28_mat_icon_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "shuffle");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function RotationQueueComponent_ng_container_4_div_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 10)(1, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function RotationQueueComponent_ng_container_4_div_28_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.advance());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, RotationQueueComponent_ng_container_4_div_28_mat_spinner_2_Template, 1, 0, "mat-spinner", 12)(3, RotationQueueComponent_ng_container_4_div_28_mat_icon_3_Template, 2, 0, "mat-icon", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function RotationQueueComponent_ng_container_4_div_28_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.reset());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, RotationQueueComponent_ng_container_4_div_28_mat_spinner_6_Template, 1, 0, "mat-spinner", 12)(7, RotationQueueComponent_ng_container_4_div_28_mat_icon_7_Template, 2, 0, "mat-icon", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx_r1.advancing);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.advancing);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r1.advancing);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r1.advancing ? "Advancing\u2026" : "Advance Rotation", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx_r1.resetting);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.resetting);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r1.resetting);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r1.resetting ? "Resetting\u2026" : "Re-shuffle & Reset", " ");
  }
}
function RotationQueueComponent_ng_container_4_div_41_mat_icon_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-icon", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "star");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function RotationQueueComponent_ng_container_4_div_41_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const slot_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](slot_r4.position);
  }
}
function RotationQueueComponent_ng_container_4_div_41_span_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Current");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function RotationQueueComponent_ng_container_4_div_41_span_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Received");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function RotationQueueComponent_ng_container_4_div_41_span_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function RotationQueueComponent_ng_container_4_div_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 24)(1, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, RotationQueueComponent_ng_container_4_div_41_mat_icon_2_Template, 2, 0, "mat-icon", 26)(3, RotationQueueComponent_ng_container_4_div_41_span_3_Template, 2, 1, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 27)(5, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](11, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](14, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](16, RotationQueueComponent_ng_container_4_div_41_span_16_Template, 2, 0, "span", 33)(17, RotationQueueComponent_ng_container_4_div_41_span_17_Template, 2, 0, "span", 34)(18, RotationQueueComponent_ng_container_4_div_41_span_18_Template, 2, 0, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const slot_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("current-slot", slot_r4.isCurrent)("received-slot", slot_r4.hasReceived);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", slot_r4.isCurrent);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !slot_r4.isCurrent);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("current-av", slot_r4.isCurrent);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", (slot_r4.memberName || "?").charAt(0).toUpperCase(), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](slot_r4.memberName);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](11, 15, slot_r4.scheduledPayoutDate, "mediumDate"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("R", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](14, 18, slot_r4.payoutAmount));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", slot_r4.isCurrent);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", slot_r4.hasReceived);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !slot_r4.isCurrent && !slot_r4.hasReceived);
  }
}
function RotationQueueComponent_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, RotationQueueComponent_ng_container_4_div_1_Template, 4, 3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 15)(3, "div", 16)(4, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "looks_one");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div")(7, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "Current Slot");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div", 16)(12, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, "format_list_numbered");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "div")(15, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18, "Total Slots");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "div", 16)(20, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21, "autorenew");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "div")(23, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](25, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](27, "Payout Cycle");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](28, RotationQueueComponent_ng_container_4_div_28_Template, 9, 8, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "div", 19)(30, "div", 20)(31, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](32, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](33, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](34, "Member");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](35, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](36, "Payout Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](37, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](38, "Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](39, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](40, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](41, RotationQueueComponent_ng_container_4_div_41_Template, 19, 20, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.myPosition);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r1.queue.currentSlot);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r1.queue.totalSlots);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](25, 7, ctx_r1.queue.payoutCycle));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.isAdmin);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r1.queue.queue)("ngForTrackBy", ctx_r1.trackByPosition);
  }
}
class RotationQueueComponent {
  constructor(stokvelService, userService, snack) {
    this.stokvelService = stokvelService;
    this.userService = userService;
    this.snack = snack;
    /** If true, show admin-only controls (advance / reset). */
    this.isAdmin = false;
    this.queue = null;
    this.myPosition = null;
    this.loading = true;
    this.advancing = false;
    this.resetting = false;
    this.currentUserAuth0Id = '';
  }
  ngOnChanges(changes) {
    if (changes['stokvelId'] && this.stokvelId) {
      this.load();
    }
  }
  load() {
    this.loading = true;
    this.userService.user$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.take)(1)).subscribe(u => {
      this.currentUserAuth0Id = u?.id ?? '';
    });
    this.stokvelService.getRotationQueue(this.stokvelId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(null))).subscribe(q => {
      this.queue = q;
      this.loading = false;
    });
    this.stokvelService.getMyRotationPosition(this.stokvelId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(null))).subscribe(pos => {
      this.myPosition = pos;
    });
  }
  advance() {
    if (!this.stokvelId) return;
    this.advancing = true;
    this.stokvelService.advanceRotation(this.stokvelId).subscribe({
      next: res => {
        this.advancing = false;
        this.snack.open(`✅ Rotation advanced to slot ${res.currentSlot} of ${res.totalSlots}`, 'Close', {
          duration: 4000
        });
        this.load();
      },
      error: err => {
        this.advancing = false;
        this.snack.open(err?.error?.message || 'Could not advance rotation', 'Close', {
          duration: 4000
        });
      }
    });
  }
  reset() {
    if (!this.stokvelId) return;
    const confirmed = window.confirm('Reset and re-shuffle the entire rotation queue?\nAll "has received" flags will be cleared.');
    if (!confirmed) return;
    this.resetting = true;
    this.stokvelService.resetRotation(this.stokvelId).subscribe({
      next: () => {
        this.resetting = false;
        this.snack.open('✅ Rotation queue reset and shuffled.', 'Close', {
          duration: 4000
        });
        this.load();
      },
      error: err => {
        this.resetting = false;
        this.snack.open(err?.error?.message || 'Could not reset rotation', 'Close', {
          duration: 4000
        });
      }
    });
  }
  trackByPosition(_, slot) {
    return slot.position;
  }
  static #_ = _staticBlock = () => (this.ɵfac = function RotationQueueComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || RotationQueueComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_stokvel_stokvel_service__WEBPACK_IMPORTED_MODULE_7__.StokvelService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_user_user_service_service__WEBPACK_IMPORTED_MODULE_8__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__.MatSnackBar));
  }, this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: RotationQueueComponent,
    selectors: [["app-rotation-queue"]],
    inputs: {
      stokvelId: "stokvelId",
      isAdmin: "isAdmin"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵNgOnChangesFeature"]],
    decls: 5,
    vars: 4,
    consts: [[1, "rq-wrap"], ["class", "rq-loading", 4, "ngIf"], ["class", "rq-empty", 4, "ngIf"], ["class", "rq-inactive", 4, "ngIf"], [4, "ngIf"], [1, "rq-loading"], ["diameter", "32"], [1, "rq-empty"], [1, "rq-inactive"], ["class", "rq-admin-actions", 4, "ngIf"], [1, "rq-admin-actions"], [1, "btn-reset", 3, "click", "disabled"], ["diameter", "16", 4, "ngIf"], ["diameter", "16"], ["class", "my-position-banner", 4, "ngIf"], [1, "rq-summary"], [1, "rqs-stat"], [1, "stat-val"], [1, "stat-lbl"], [1, "rq-table"], [1, "rq-head"], ["class", "rq-row", 3, "current-slot", "received-slot", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "my-position-banner"], [1, "btn-advance", 3, "click", "disabled"], [1, "rq-row"], [1, "slot-pos"], ["class", "current-icon", 4, "ngIf"], [1, "slot-member"], [1, "slot-avatar"], [1, "slot-name"], [1, "slot-date"], [1, "slot-amount"], [1, "slot-status"], ["class", "badge-current", 4, "ngIf"], ["class", "badge-received", 4, "ngIf"], ["class", "badge-pending", 4, "ngIf"], [1, "current-icon"], [1, "badge-current"], [1, "badge-received"], [1, "badge-pending"]],
    template: function RotationQueueComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, RotationQueueComponent_div_1_Template, 4, 0, "div", 1)(2, RotationQueueComponent_div_2_Template, 5, 0, "div", 2)(3, RotationQueueComponent_div_3_Template, 6, 1, "div", 3)(4, RotationQueueComponent_ng_container_4_Template, 42, 9, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.loading && !ctx.queue);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.loading && ctx.queue && !ctx.queue.rotationActive);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.loading && ctx.queue && ctx.queue.rotationActive);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgIf, _material_module__WEBPACK_IMPORTED_MODULE_1__.MaterialModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIcon, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__.MatProgressSpinner, _angular_common__WEBPACK_IMPORTED_MODULE_0__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_0__.TitleCasePipe, _angular_common__WEBPACK_IMPORTED_MODULE_0__.DatePipe],
    styles: [".rq-wrap[_ngcontent-%COMP%] {\n  padding: 8px 0;\n}\n\n.rq-loading[_ngcontent-%COMP%], .rq-empty[_ngcontent-%COMP%], .rq-inactive[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 12px;\n  padding: 32px 16px;\n  color: #6b7280;\n  text-align: center;\n}\n.rq-loading[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], .rq-empty[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], .rq-inactive[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 40px;\n  width: 40px;\n  height: 40px;\n}\n\n.my-position-banner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  background: #f0fdf4;\n  border: 1px solid #86efac;\n  border-radius: 8px;\n  padding: 12px 16px;\n  margin-bottom: 16px;\n  font-size: 14px;\n  color: #166534;\n}\n.my-position-banner[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #16a34a;\n}\n\n.rq-summary[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 24px;\n  flex-wrap: wrap;\n  background: #f8fafc;\n  border-radius: 8px;\n  padding: 16px;\n  margin-bottom: 16px;\n}\n\n.rqs-stat[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.rqs-stat[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #6366f1;\n}\n.rqs-stat[_ngcontent-%COMP%]   .stat-val[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n  display: block;\n  color: #1e293b;\n}\n.rqs-stat[_ngcontent-%COMP%]   .stat-lbl[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #64748b;\n  text-transform: uppercase;\n}\n\n.rq-admin-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  margin-bottom: 20px;\n  flex-wrap: wrap;\n}\n\n.btn-advance[_ngcontent-%COMP%], .btn-reset[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 16px;\n  border-radius: 8px;\n  border: none;\n  cursor: pointer;\n  font-weight: 600;\n}\n\n.btn-advance[_ngcontent-%COMP%] {\n  background: #6366f1;\n  color: #fff;\n}\n\n.btn-advance[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n\n.btn-reset[_ngcontent-%COMP%] {\n  background: #f59e0b;\n  color: #fff;\n}\n\n.btn-reset[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n\n.rq-table[_ngcontent-%COMP%] {\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  overflow: hidden;\n}\n\n.rq-head[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 48px 1fr 140px 100px 90px;\n  background: #f1f5f9;\n  padding: 10px 16px;\n  font-size: 12px;\n  font-weight: 700;\n  text-transform: uppercase;\n  color: #64748b;\n}\n\n.rq-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 48px 1fr 140px 100px 90px;\n  padding: 12px 16px;\n  border-top: 1px solid #e2e8f0;\n  align-items: center;\n  transition: background 0.15s;\n}\n.rq-row[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n}\n.rq-row.current-slot[_ngcontent-%COMP%] {\n  background: #eff6ff;\n}\n.rq-row.received-slot[_ngcontent-%COMP%] {\n  opacity: 0.65;\n}\n\n.slot-pos[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #64748b;\n}\n\n.current-icon[_ngcontent-%COMP%] {\n  color: #f59e0b;\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n}\n\n.slot-member[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n\n.slot-avatar[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  background: #e2e8f0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 700;\n  font-size: 13px;\n  color: #475569;\n}\n.slot-avatar.current-av[_ngcontent-%COMP%] {\n  background: #6366f1;\n  color: #fff;\n}\n\n.slot-name[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n}\n\n.slot-date[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #475569;\n}\n\n.slot-amount[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #059669;\n}\n\n.badge-current[_ngcontent-%COMP%] {\n  background: #dbeafe;\n  color: #1d4ed8;\n  padding: 2px 8px;\n  border-radius: 12px;\n  font-size: 12px;\n  font-weight: 600;\n}\n\n.badge-received[_ngcontent-%COMP%] {\n  background: #d1fae5;\n  color: #065f46;\n  padding: 2px 8px;\n  border-radius: 12px;\n  font-size: 12px;\n  font-weight: 600;\n}\n\n.badge-pending[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  color: #64748b;\n  padding: 2px 8px;\n  border-radius: 12px;\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9yb3RhdGlvbi1xdWV1ZS9yb3RhdGlvbi1xdWV1ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFXLGNBQUE7QUFFWDs7QUFBQTtFQUNFLGFBQUE7RUFBZSxzQkFBQTtFQUF3QixtQkFBQTtFQUN2QyxTQUFBO0VBQVcsa0JBQUE7RUFBb0IsY0FBQTtFQUFnQixrQkFBQTtBQVFqRDtBQVBFO0VBQVcsZUFBQTtFQUFpQixXQUFBO0VBQWEsWUFBQTtBQVkzQzs7QUFUQTtFQUNFLGFBQUE7RUFBZSxtQkFBQTtFQUFxQixTQUFBO0VBQ3BDLG1CQUFBO0VBQXFCLHlCQUFBO0VBQTJCLGtCQUFBO0VBQ2hELGtCQUFBO0VBQW9CLG1CQUFBO0VBQXFCLGVBQUE7RUFBaUIsY0FBQTtBQW1CNUQ7QUFsQkU7RUFBVyxjQUFBO0FBcUJiOztBQWxCQTtFQUNFLGFBQUE7RUFBZSxTQUFBO0VBQVcsZUFBQTtFQUMxQixtQkFBQTtFQUFxQixrQkFBQTtFQUFvQixhQUFBO0VBQ3pDLG1CQUFBO0FBeUJGOztBQXZCQTtFQUNFLGFBQUE7RUFBZSxtQkFBQTtFQUFxQixRQUFBO0FBNEJ0QztBQTNCRTtFQUFXLGNBQUE7QUE4QmI7QUE3QkU7RUFBWSxlQUFBO0VBQWlCLGdCQUFBO0VBQWtCLGNBQUE7RUFBZ0IsY0FBQTtBQW1DakU7QUFsQ0U7RUFBWSxlQUFBO0VBQWlCLGNBQUE7RUFBZ0IseUJBQUE7QUF1Qy9DOztBQXBDQTtFQUNFLGFBQUE7RUFBZSxTQUFBO0VBQVcsbUJBQUE7RUFBcUIsZUFBQTtBQTBDakQ7O0FBeENBO0VBQ0Usb0JBQUE7RUFBc0IsbUJBQUE7RUFBcUIsUUFBQTtFQUMzQyxpQkFBQTtFQUFtQixrQkFBQTtFQUFvQixZQUFBO0VBQWMsZUFBQTtFQUFpQixnQkFBQTtBQWlEeEU7O0FBL0NBO0VBQWUsbUJBQUE7RUFBcUIsV0FBQTtBQW9EcEM7O0FBbkRBO0VBQXdCLFlBQUE7RUFBYyxtQkFBQTtBQXdEdEM7O0FBdkRBO0VBQWEsbUJBQUE7RUFBcUIsV0FBQTtBQTREbEM7O0FBM0RBO0VBQXNCLFlBQUE7RUFBYyxtQkFBQTtBQWdFcEM7O0FBOURBO0VBQVkseUJBQUE7RUFBMkIsa0JBQUE7RUFBb0IsZ0JBQUE7QUFvRTNEOztBQW5FQTtFQUNFLGFBQUE7RUFBZSxnREFBQTtFQUNmLG1CQUFBO0VBQXFCLGtCQUFBO0VBQ3JCLGVBQUE7RUFBaUIsZ0JBQUE7RUFBa0IseUJBQUE7RUFBMkIsY0FBQTtBQTJFaEU7O0FBekVBO0VBQ0UsYUFBQTtFQUFlLGdEQUFBO0VBQ2Ysa0JBQUE7RUFBb0IsNkJBQUE7RUFBK0IsbUJBQUE7RUFDbkQsNEJBQUE7QUErRUY7QUE5RUU7RUFBVSxtQkFBQTtBQWlGWjtBQWhGRTtFQUFpQixtQkFBQTtBQW1GbkI7QUFsRkU7RUFBa0IsYUFBQTtBQXFGcEI7O0FBbkZBO0VBQVksZ0JBQUE7RUFBa0IsY0FBQTtBQXdGOUI7O0FBdkZBO0VBQWdCLGNBQUE7RUFBZ0IsZUFBQTtFQUFpQixXQUFBO0VBQWEsWUFBQTtBQThGOUQ7O0FBN0ZBO0VBQWUsYUFBQTtFQUFlLG1CQUFBO0VBQXFCLFNBQUE7QUFtR25EOztBQWxHQTtFQUNFLFdBQUE7RUFBYSxZQUFBO0VBQWMsa0JBQUE7RUFDM0IsbUJBQUE7RUFBcUIsYUFBQTtFQUFlLG1CQUFBO0VBQXFCLHVCQUFBO0VBQ3pELGdCQUFBO0VBQWtCLGVBQUE7RUFBaUIsY0FBQTtBQTRHckM7QUEzR0U7RUFBZSxtQkFBQTtFQUFxQixXQUFBO0FBK0d0Qzs7QUE3R0E7RUFBYSxlQUFBO0VBQWlCLGdCQUFBO0FBa0g5Qjs7QUFqSEE7RUFBYSxlQUFBO0VBQWlCLGNBQUE7QUFzSDlCOztBQXJIQTtFQUFlLGdCQUFBO0VBQWtCLGNBQUE7QUEwSGpDOztBQXhIQTtFQUFrQixtQkFBQTtFQUFxQixjQUFBO0VBQWdCLGdCQUFBO0VBQWtCLG1CQUFBO0VBQXFCLGVBQUE7RUFBaUIsZ0JBQUE7QUFpSS9HOztBQWhJQTtFQUFrQixtQkFBQTtFQUFxQixjQUFBO0VBQWdCLGdCQUFBO0VBQWtCLG1CQUFBO0VBQXFCLGVBQUE7RUFBaUIsZ0JBQUE7QUF5SS9HOztBQXhJQTtFQUFrQixtQkFBQTtFQUFxQixjQUFBO0VBQWdCLGdCQUFBO0VBQWtCLG1CQUFBO0VBQXFCLGVBQUE7QUFnSjlGIiwic291cmNlc0NvbnRlbnQiOlsiLnJxLXdyYXAgeyBwYWRkaW5nOiA4cHggMDsgfVxyXG5cclxuLnJxLWxvYWRpbmcsIC5ycS1lbXB0eSwgLnJxLWluYWN0aXZlIHtcclxuICBkaXNwbGF5OiBmbGV4OyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMTJweDsgcGFkZGluZzogMzJweCAxNnB4OyBjb2xvcjogIzZiNzI4MDsgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hdC1pY29uIHsgZm9udC1zaXplOiA0MHB4OyB3aWR0aDogNDBweDsgaGVpZ2h0OiA0MHB4OyB9XHJcbn1cclxuXHJcbi5teS1wb3NpdGlvbi1iYW5uZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGdhcDogMTBweDtcclxuICBiYWNrZ3JvdW5kOiAjZjBmZGY0OyBib3JkZXI6IDFweCBzb2xpZCAjODZlZmFjOyBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgcGFkZGluZzogMTJweCAxNnB4OyBtYXJnaW4tYm90dG9tOiAxNnB4OyBmb250LXNpemU6IDE0cHg7IGNvbG9yOiAjMTY2NTM0O1xyXG4gIG1hdC1pY29uIHsgY29sb3I6ICMxNmEzNGE7IH1cclxufVxyXG5cclxuLnJxLXN1bW1hcnkge1xyXG4gIGRpc3BsYXk6IGZsZXg7IGdhcDogMjRweDsgZmxleC13cmFwOiB3cmFwO1xyXG4gIGJhY2tncm91bmQ6ICNmOGZhZmM7IGJvcmRlci1yYWRpdXM6IDhweDsgcGFkZGluZzogMTZweDtcclxuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG59XHJcbi5ycXMtc3RhdCB7XHJcbiAgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZ2FwOiA4cHg7XHJcbiAgbWF0LWljb24geyBjb2xvcjogIzYzNjZmMTsgfVxyXG4gIC5zdGF0LXZhbCB7IGZvbnQtc2l6ZTogMjBweDsgZm9udC13ZWlnaHQ6IDcwMDsgZGlzcGxheTogYmxvY2s7IGNvbG9yOiAjMWUyOTNiOyB9XHJcbiAgLnN0YXQtbGJsIHsgZm9udC1zaXplOiAxMnB4OyBjb2xvcjogIzY0NzQ4YjsgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgfVxyXG59XHJcblxyXG4ucnEtYWRtaW4tYWN0aW9ucyB7XHJcbiAgZGlzcGxheTogZmxleDsgZ2FwOiAxMnB4OyBtYXJnaW4tYm90dG9tOiAyMHB4OyBmbGV4LXdyYXA6IHdyYXA7XHJcbn1cclxuLmJ0bi1hZHZhbmNlLCAuYnRuLXJlc2V0IHtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZ2FwOiA2cHg7XHJcbiAgcGFkZGluZzogOHB4IDE2cHg7IGJvcmRlci1yYWRpdXM6IDhweDsgYm9yZGVyOiBub25lOyBjdXJzb3I6IHBvaW50ZXI7IGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuLmJ0bi1hZHZhbmNlIHsgYmFja2dyb3VuZDogIzYzNjZmMTsgY29sb3I6ICNmZmY7IH1cclxuLmJ0bi1hZHZhbmNlOmRpc2FibGVkIHsgb3BhY2l0eTogMC41OyBjdXJzb3I6IG5vdC1hbGxvd2VkOyB9XHJcbi5idG4tcmVzZXQgeyBiYWNrZ3JvdW5kOiAjZjU5ZTBiOyBjb2xvcjogI2ZmZjsgfVxyXG4uYnRuLXJlc2V0OmRpc2FibGVkIHsgb3BhY2l0eTogMC41OyBjdXJzb3I6IG5vdC1hbGxvd2VkOyB9XHJcblxyXG4ucnEtdGFibGUgeyBib3JkZXI6IDFweCBzb2xpZCAjZTJlOGYwOyBib3JkZXItcmFkaXVzOiA4cHg7IG92ZXJmbG93OiBoaWRkZW47IH1cclxuLnJxLWhlYWQge1xyXG4gIGRpc3BsYXk6IGdyaWQ7IGdyaWQtdGVtcGxhdGUtY29sdW1uczogNDhweCAxZnIgMTQwcHggMTAwcHggOTBweDtcclxuICBiYWNrZ3JvdW5kOiAjZjFmNWY5OyBwYWRkaW5nOiAxMHB4IDE2cHg7XHJcbiAgZm9udC1zaXplOiAxMnB4OyBmb250LXdlaWdodDogNzAwOyB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyBjb2xvcjogIzY0NzQ4YjtcclxufVxyXG4ucnEtcm93IHtcclxuICBkaXNwbGF5OiBncmlkOyBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDQ4cHggMWZyIDE0MHB4IDEwMHB4IDkwcHg7XHJcbiAgcGFkZGluZzogMTJweCAxNnB4OyBib3JkZXItdG9wOiAxcHggc29saWQgI2UyZThmMDsgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMTVzO1xyXG4gICY6aG92ZXIgeyBiYWNrZ3JvdW5kOiAjZjhmYWZjOyB9XHJcbiAgJi5jdXJyZW50LXNsb3QgeyBiYWNrZ3JvdW5kOiAjZWZmNmZmOyB9XHJcbiAgJi5yZWNlaXZlZC1zbG90IHsgb3BhY2l0eTogMC42NTsgfVxyXG59XHJcbi5zbG90LXBvcyB7IGZvbnQtd2VpZ2h0OiA3MDA7IGNvbG9yOiAjNjQ3NDhiOyB9XHJcbi5jdXJyZW50LWljb24geyBjb2xvcjogI2Y1OWUwYjsgZm9udC1zaXplOiAyMHB4OyB3aWR0aDogMjBweDsgaGVpZ2h0OiAyMHB4OyB9XHJcbi5zbG90LW1lbWJlciB7IGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGdhcDogMTBweDsgfVxyXG4uc2xvdC1hdmF0YXIge1xyXG4gIHdpZHRoOiAzMnB4OyBoZWlnaHQ6IDMycHg7IGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBiYWNrZ3JvdW5kOiAjZTJlOGYwOyBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBmb250LXdlaWdodDogNzAwOyBmb250LXNpemU6IDEzcHg7IGNvbG9yOiAjNDc1NTY5O1xyXG4gICYuY3VycmVudC1hdiB7IGJhY2tncm91bmQ6ICM2MzY2ZjE7IGNvbG9yOiAjZmZmOyB9XHJcbn1cclxuLnNsb3QtbmFtZSB7IGZvbnQtc2l6ZTogMTRweDsgZm9udC13ZWlnaHQ6IDUwMDsgfVxyXG4uc2xvdC1kYXRlIHsgZm9udC1zaXplOiAxM3B4OyBjb2xvcjogIzQ3NTU2OTsgfVxyXG4uc2xvdC1hbW91bnQgeyBmb250LXdlaWdodDogNjAwOyBjb2xvcjogIzA1OTY2OTsgfVxyXG5cclxuLmJhZGdlLWN1cnJlbnQgIHsgYmFja2dyb3VuZDogI2RiZWFmZTsgY29sb3I6ICMxZDRlZDg7IHBhZGRpbmc6IDJweCA4cHg7IGJvcmRlci1yYWRpdXM6IDEycHg7IGZvbnQtc2l6ZTogMTJweDsgZm9udC13ZWlnaHQ6IDYwMDsgfVxyXG4uYmFkZ2UtcmVjZWl2ZWQgeyBiYWNrZ3JvdW5kOiAjZDFmYWU1OyBjb2xvcjogIzA2NWY0NjsgcGFkZGluZzogMnB4IDhweDsgYm9yZGVyLXJhZGl1czogMTJweDsgZm9udC1zaXplOiAxMnB4OyBmb250LXdlaWdodDogNjAwOyB9XHJcbi5iYWRnZS1wZW5kaW5nICB7IGJhY2tncm91bmQ6ICNmMWY1Zjk7IGNvbG9yOiAjNjQ3NDhiOyBwYWRkaW5nOiAycHggOHB4OyBib3JkZXItcmFkaXVzOiAxMnB4OyBmb250LXNpemU6IDEycHg7IH1cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  }));
}
_staticBlock();

/***/ }),

/***/ 5647:
/*!***************************************************************!*\
  !*** ./src/app/components/kyc-banner/kyc-banner.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KycBannerComponent: () => (/* binding */ KycBannerComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 4487);
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../material.module */ 9439);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2481);
/* harmony import */ var _services_kyc_kyc_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/kyc/kyc.service */ 3161);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ 3840);
var _staticBlock;








function KycBannerComponent_div_0_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 6)(1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "verified_user");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 7)(4, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Complete your KYC verification");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Verify your identity to join or create stokvels and make contributions.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Verify Now");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function KycBannerComponent_div_0_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 9)(1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "hourglass_top");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 7)(4, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "KYC under review");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Your documents are being reviewed. You'll be notified once verification is complete.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
}
function KycBannerComponent_div_0_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 10)(1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "warning");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 7)(4, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "KYC rejected");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Re-submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const status_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", status_r1.rejectionReason || "Your verification was not approved.", " Please re-submit.");
  }
}
function KycBannerComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](1, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, KycBannerComponent_div_0_div_2_Template, 10, 0, "div", 3)(3, KycBannerComponent_div_0_div_3_Template, 8, 0, "div", 4)(4, KycBannerComponent_div_0_div_4_Template, 10, 1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const status_r1 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitch", status_r1.kycStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitchCase", "NOT_STARTED");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitchCase", "PENDING");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitchCase", "REJECTED");
  }
}
class KycBannerComponent {
  constructor(kyc) {
    this.kyc = kyc;
  }
  ngOnInit() {
    this.status$ = this.kyc.status$;
    this.kyc.loadStatus().subscribe();
  }
  static #_ = _staticBlock = () => (this.ɵfac = function KycBannerComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || KycBannerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_kyc_kyc_service__WEBPACK_IMPORTED_MODULE_4__.KycService));
  }, this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: KycBannerComponent,
    selectors: [["app-kyc-banner"]],
    decls: 2,
    vars: 3,
    consts: [["class", "kyc-banner", 4, "ngIf"], [1, "kyc-banner"], [3, "ngSwitch"], ["class", "kyc-banner-inner warn", 4, "ngSwitchCase"], ["class", "kyc-banner-inner info", 4, "ngSwitchCase"], ["class", "kyc-banner-inner error", 4, "ngSwitchCase"], [1, "kyc-banner-inner", "warn"], [1, "kyc-text"], ["routerLink", "/kyc", 1, "kyc-btn"], [1, "kyc-banner-inner", "info"], [1, "kyc-banner-inner", "error"], ["routerLink", "/kyc", 1, "kyc-btn", "danger"]],
    template: function KycBannerComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, KycBannerComponent_div_0_Template, 5, 4, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](1, "async");
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](1, 1, ctx.status$));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgSwitchCase, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink, _material_module__WEBPACK_IMPORTED_MODULE_2__.MaterialModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIcon, _angular_common__WEBPACK_IMPORTED_MODULE_0__.AsyncPipe],
    styles: [".kyc-banner[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n\n.kyc-banner-inner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px 16px;\n  border-radius: 8px;\n  border-left: 4px solid;\n}\n\n.kyc-banner-inner.warn[_ngcontent-%COMP%] {\n  background: #fffbe6;\n  border-color: #f59e0b;\n  color: #92400e;\n}\n\n.kyc-banner-inner.info[_ngcontent-%COMP%] {\n  background: #eff6ff;\n  border-color: #3b82f6;\n  color: #1e40af;\n}\n\n.kyc-banner-inner.error[_ngcontent-%COMP%] {\n  background: #fef2f2;\n  border-color: #ef4444;\n  color: #991b1b;\n}\n\n.kyc-text[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  font-size: 14px;\n}\n\n.kyc-text[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-weight: 600;\n  margin-bottom: 2px;\n}\n\n.kyc-btn[_ngcontent-%COMP%] {\n  padding: 6px 14px;\n  border-radius: 6px;\n  border: none;\n  cursor: pointer;\n  background: #059669;\n  color: #fff;\n  font-weight: 600;\n}\n\n.kyc-btn.danger[_ngcontent-%COMP%] {\n  background: #dc2626;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9reWMtYmFubmVyL2t5Yy1iYW5uZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQWMsbUJBQUE7QUFDbEI7O0FBQUk7RUFDRSxhQUFBO0VBQWUsbUJBQUE7RUFBcUIsU0FBQTtFQUNwQyxrQkFBQTtFQUFvQixrQkFBQTtFQUFvQixzQkFBQTtBQU85Qzs7QUFMSTtFQUEyQixtQkFBQTtFQUFxQixxQkFBQTtFQUF1QixjQUFBO0FBVzNFOztBQVZJO0VBQTJCLG1CQUFBO0VBQXFCLHFCQUFBO0VBQXVCLGNBQUE7QUFnQjNFOztBQWZJO0VBQTJCLG1CQUFBO0VBQXFCLHFCQUFBO0VBQXVCLGNBQUE7QUFxQjNFOztBQXBCSTtFQUFZLE9BQUE7RUFBUyxhQUFBO0VBQWUsc0JBQUE7RUFBd0IsZUFBQTtBQTJCaEU7O0FBMUJJO0VBQW1CLGdCQUFBO0VBQWtCLGtCQUFBO0FBK0J6Qzs7QUE5Qkk7RUFDRSxpQkFBQTtFQUFtQixrQkFBQTtFQUFvQixZQUFBO0VBQWMsZUFBQTtFQUNyRCxtQkFBQTtFQUFxQixXQUFBO0VBQWEsZ0JBQUE7QUFzQ3hDOztBQXBDSTtFQUFrQixtQkFBQTtBQXdDdEIiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAua3ljLWJhbm5lciB7IG1hcmdpbi1ib3R0b206IDE2cHg7IH1cbiAgICAua3ljLWJhbm5lci1pbm5lciB7XG4gICAgICBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDEycHg7XG4gICAgICBwYWRkaW5nOiAxMnB4IDE2cHg7IGJvcmRlci1yYWRpdXM6IDhweDsgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZDtcbiAgICB9XG4gICAgLmt5Yy1iYW5uZXItaW5uZXIud2FybiAgIHsgYmFja2dyb3VuZDogI2ZmZmJlNjsgYm9yZGVyLWNvbG9yOiAjZjU5ZTBiOyBjb2xvcjogIzkyNDAwZTsgfVxuICAgIC5reWMtYmFubmVyLWlubmVyLmluZm8gICB7IGJhY2tncm91bmQ6ICNlZmY2ZmY7IGJvcmRlci1jb2xvcjogIzNiODJmNjsgY29sb3I6ICMxZTQwYWY7IH1cbiAgICAua3ljLWJhbm5lci1pbm5lci5lcnJvciAgeyBiYWNrZ3JvdW5kOiAjZmVmMmYyOyBib3JkZXItY29sb3I6ICNlZjQ0NDQ7IGNvbG9yOiAjOTkxYjFiOyB9XG4gICAgLmt5Yy10ZXh0IHsgZmxleDogMTsgZGlzcGxheTogZmxleDsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgZm9udC1zaXplOiAxNHB4OyB9XG4gICAgLmt5Yy10ZXh0IHN0cm9uZyB7IGZvbnQtd2VpZ2h0OiA2MDA7IG1hcmdpbi1ib3R0b206IDJweDsgfVxuICAgIC5reWMtYnRuIHtcbiAgICAgIHBhZGRpbmc6IDZweCAxNHB4OyBib3JkZXItcmFkaXVzOiA2cHg7IGJvcmRlcjogbm9uZTsgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgYmFja2dyb3VuZDogIzA1OTY2OTsgY29sb3I6ICNmZmY7IGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgfVxuICAgIC5reWMtYnRuLmRhbmdlciB7IGJhY2tncm91bmQ6ICNkYzI2MjY7IH1cbiAgIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  }));
}
_staticBlock();

/***/ })

}]);
//# sourceMappingURL=default-src_app_components_kyc-banner_kyc-banner_component_ts-src_app_components_rotation-que-12181a.js.map