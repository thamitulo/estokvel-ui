"use strict";
(self["webpackChunkikage_ui"] = self["webpackChunkikage_ui"] || []).push([["src_app_pages_admin_admin-users_admin-users_component_ts"],{

/***/ 7952:
/*!******************************************************************!*\
  !*** ./src/app/pages/admin/admin-users/admin-users.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminUsersComponent: () => (/* binding */ AdminUsersComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 4487);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../material.module */ 9439);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2481);
/* harmony import */ var _services_admin_admin_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/admin/admin.service */ 4545);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ 8388);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ 5541);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 3840);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 9885);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/tooltip */ 9710);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/progress-spinner */ 1134);
var _staticBlock;














function AdminUsersComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "mat-spinner", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function AdminUsersComponent_div_16_div_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 20)(1, "div", 21)(2, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div")(5, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](9, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "span")(13, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "span")(16, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "span")(19, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AdminUsersComponent_div_16_div_21_Template_button_click_31_listener() {
      const u_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.openMirror(u_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](33, "manage_search");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const u_r2 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r2.initials(u_r2.fullName || u_r2.email));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](u_r2.fullName || "\u2014");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind3"](9, 20, u_r2.auth0Id, 0, 20), "\u2026");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](u_r2.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"](ctx_r2.kycClass(u_r2.kycStatus));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](u_r2.kycStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"](ctx_r2.tierClass(u_r2.subscriptionTier));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](u_r2.subscriptionTier);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](u_r2.activeStokvels);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" active / ", u_r2.totalMemberships);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r2.money(u_r2.totalContributed));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("recent", u_r2.loginCount > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r2.lastLogin(u_r2));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](u_r2.loginCount ?? 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("has-credit", u_r2.referralCreditBalance > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r2.money(u_r2.referralCreditBalance), " ");
  }
}
function AdminUsersComponent_div_16_div_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 32)(1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "people_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "No users found");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function AdminUsersComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 16)(1, "div", 17)(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "User");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "KYC");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "Tier");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "Stokvels");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "Contributed");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, "Last Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, "Logins");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, "Credit");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](20, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](21, AdminUsersComponent_div_16_div_21_Template, 34, 24, "div", 18)(22, AdminUsersComponent_div_16_div_22_Template, 5, 0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r2.users);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r2.users.length);
  }
}
function AdminUsersComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 33)(1, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AdminUsersComponent_div_17_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.prevPage());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "chevron_left");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AdminUsersComponent_div_17_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.nextPage());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "chevron_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx_r2.page === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"]("Page ", ctx_r2.page + 1, " of ", ctx_r2.totalPages);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx_r2.page >= ctx_r2.totalPages - 1);
  }
}
function AdminUsersComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AdminUsersComponent_div_18_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.closeMirror());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function AdminUsersComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "mat-spinner", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Loading user session\u2026");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function AdminUsersComponent_ng_container_21_div_107_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "No memberships");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function AdminUsersComponent_ng_container_21_div_108_span_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Slot: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const s_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("#", s_r7.memberNumber);
  }
}
function AdminUsersComponent_ng_container_21_div_108_span_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Next Payout: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const s_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](4, 1, s_r7.nextPayOutDate, "dd MMM yyyy"));
  }
}
function AdminUsersComponent_ng_container_21_div_108_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 48)(1, "div", 49)(2, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 53)(9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Contributed: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, AdminUsersComponent_ng_container_21_div_108_span_13_Template, 4, 1, "span", 13)(14, AdminUsersComponent_ng_container_21_div_108_span_14_Template, 5, 4, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const s_r7 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](s_r7.stokvelName);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("admin", s_r7.role === "ADMIN");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](s_r7.role);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("status-active", s_r7.membershipStatus === "ACTIVE")("status-inactive", s_r7.membershipStatus !== "ACTIVE");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", s_r7.membershipStatus, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r2.money(s_r7.totalContributed ?? 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", s_r7.memberNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", s_r7.nextPayOutDate);
  }
}
function AdminUsersComponent_ng_container_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 38)(2, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 40)(5, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AdminUsersComponent_ng_container_21_Template_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.closeMirror());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 43)(13, "h3")(14, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, "badge");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, " Identity");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div", 44)(18, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, "Auth0 ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "div", 44)(23, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24, "Email Verified");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "div", 44)(28, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](29, "KYC Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "div", 44)(33, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](34, "Phone");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "div", 43)(38, "h3")(39, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](40, "history");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](41, " Session & Activity");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](42, "div", 44)(43, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](44, "Last Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](45, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](47, "div", 44)(48, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](49, "Total Logins");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](50, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](51);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](52, "div", 44)(53, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](54, "Last IP");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](55, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](57, "div", 43)(58, "h3")(59, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](60, "star");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](61, " Subscription");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](62, "div", 44)(63, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](64, "Tier");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](65, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](66);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](67, "div", 44)(68, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](69, "Referral Credits");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](70, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](71);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](72, "div", 44)(73, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](74, "Referrals Sent");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](75, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](76);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](77, "div", 44)(78, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](79, "Referrals Converted");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](80, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](81);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](82, "div", 43)(83, "h3")(84, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](85, "savings");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](86, " Financial Summary");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](87, "div", 44)(88, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](89, "Total Contributed");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](90, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](91);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](92, "div", 44)(93, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](94, "Active Stokvels");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](95, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](96);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](97, "div", 44)(98, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](99, "All Memberships");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](100, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](101);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](102, "div", 43)(103, "h3")(104, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](105, "account_balance");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](106, " Stokvel Memberships");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](107, AdminUsersComponent_ng_container_21_div_107_Template, 2, 0, "div", 45)(108, AdminUsersComponent_ng_container_21_div_108_Template, 15, 12, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r2.initials(ctx_r2.mirrorUser.fullName || ctx_r2.mirrorUser.email));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r2.mirrorUser.fullName || ctx_r2.mirrorUser.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r2.mirrorUser.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r2.mirrorUser.auth0Id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("yes", ctx_r2.mirrorUser.emailVerified);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r2.mirrorUser.emailVerified ? "\u2713 Yes" : "\u2717 No");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"](ctx_r2.kycClass(ctx_r2.mirrorUser.kycStatus));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r2.mirrorUser.kycStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r2.mirrorUser.phoneNumber || "\u2014");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r2.lastLogin(ctx_r2.mirrorUser));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r2.mirrorUser.loginCount);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r2.mirrorUser.lastLoginAt || "\u2014");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"](ctx_r2.tierClass(ctx_r2.mirrorUser.subscriptionTier));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r2.mirrorUser.subscriptionTier);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("has-credit", ctx_r2.mirrorUser.referralCreditBalance > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r2.money(ctx_r2.mirrorUser.referralCreditBalance), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r2.mirrorUser.referralsSent);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r2.mirrorUser.referralsConverted);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r2.money(ctx_r2.mirrorUser.totalContributed));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r2.mirrorUser.activeStokvels);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r2.mirrorUser.totalMemberships);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !(ctx_r2.mirrorUser.stokvels == null ? null : ctx_r2.mirrorUser.stokvels.length));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r2.mirrorUser.stokvels);
  }
}
class AdminUsersComponent {
  constructor(adminService) {
    this.adminService = adminService;
    this.users = [];
    this.mirrorUser = null;
    this.loading = true;
    this.mirrorLoading = false;
    this.search = '';
    this.page = 0;
    this.size = 20;
    this.totalElements = 0;
    this.totalPages = 0;
  }
  ngOnInit() {
    this.load();
  }
  load() {
    this.loading = true;
    this.adminService.getUsers(this.search, this.page, this.size).subscribe({
      next: res => {
        this.users = res.content;
        this.totalElements = res.totalElements;
        this.totalPages = res.totalPages;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  onSearch() {
    clearTimeout(this.searchTimeout);
    this.searchTimeout = setTimeout(() => {
      this.page = 0;
      this.load();
    }, 350);
  }
  openMirror(user) {
    this.mirrorLoading = true;
    this.adminService.mirrorUser(user.auth0Id).subscribe({
      next: u => {
        this.mirrorUser = u;
        this.mirrorLoading = false;
      },
      error: () => {
        this.mirrorLoading = false;
      }
    });
  }
  closeMirror() {
    this.mirrorUser = null;
  }
  prevPage() {
    if (this.page > 0) {
      this.page--;
      this.load();
    }
  }
  nextPage() {
    if (this.page < this.totalPages - 1) {
      this.page++;
      this.load();
    }
  }
  initials(name) {
    return (name || '?').split(' ').map(p => p[0]).join('').substring(0, 2).toUpperCase();
  }
  lastLogin(u) {
    if (!u.lastLoginAt) return 'Never';
    const d = new Date(u.lastLoginAt);
    const now = new Date();
    const diffH = Math.floor((now.getTime() - d.getTime()) / 3_600_000);
    if (diffH < 1) return 'Just now';
    if (diffH < 24) return diffH + 'h ago';
    const diffD = Math.floor(diffH / 24);
    if (diffD < 30) return diffD + 'd ago';
    return d.toLocaleDateString('en-ZA');
  }
  money(n) {
    return 'R' + (n || 0).toLocaleString('en-ZA', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
  }
  kycClass(status) {
    switch (status) {
      case 'VERIFIED':
        return 'kyc-ok';
      case 'PENDING':
        return 'kyc-pending';
      case 'REJECTED':
        return 'kyc-fail';
      default:
        return 'kyc-none';
    }
  }
  tierClass(tier) {
    if (tier?.toUpperCase() === 'PRO') return 'tier-pro';
    if (tier?.toUpperCase() === 'BUSINESS') return 'tier-biz';
    return 'tier-free';
  }
  static #_ = _staticBlock = () => (this.ɵfac = function AdminUsersComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || AdminUsersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_admin_admin_service__WEBPACK_IMPORTED_MODULE_6__.AdminService));
  }, this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: AdminUsersComponent,
    selectors: [["app-admin-users"]],
    decls: 22,
    vars: 10,
    consts: [[1, "admin-page"], [1, "page-header"], [1, "total-badge"], [1, "search-bar"], ["appearance", "outline", 1, "search-field"], ["matInput", "", 3, "ngModelChange", "input", "ngModel"], ["matSuffix", ""], ["class", "loading-state", 4, "ngIf"], ["class", "users-table", 4, "ngIf"], ["class", "pagination", 4, "ngIf"], ["class", "mirror-overlay", 3, "click", 4, "ngIf"], [1, "mirror-drawer"], ["class", "mirror-loading", 4, "ngIf"], [4, "ngIf"], [1, "loading-state"], ["diameter", "40"], [1, "users-table"], [1, "ut-head"], ["class", "ut-row", 4, "ngFor", "ngForOf"], ["class", "empty-state", 4, "ngIf"], [1, "ut-row"], [1, "user-cell"], [1, "user-av"], [1, "user-name"], [1, "user-id"], [1, "muted", "email-col"], [1, "kyc-badge"], [1, "tier-badge"], [1, "muted"], [1, "last-login"], [1, "credit-col"], ["matTooltip", "Mirror this user's session", 1, "mirror-btn", 3, "click"], [1, "empty-state"], [1, "pagination"], ["mat-icon-button", "", 3, "click", "disabled"], [1, "mirror-overlay", 3, "click"], [1, "mirror-loading"], ["diameter", "36"], [1, "mirror-header"], [1, "mirror-av"], [1, "mirror-title"], [1, "mirror-sub"], ["mat-icon-button", "", 1, "close-btn", 3, "click"], [1, "mirror-section"], [1, "mirror-row"], ["class", "empty-state sm", 4, "ngIf"], ["class", "stokvel-row", 4, "ngFor", "ngForOf"], [1, "empty-state", "sm"], [1, "stokvel-row"], [1, "sr-top"], [1, "sr-name"], [1, "role-chip"], [1, "status-chip"], [1, "sr-details"]],
    template: function AdminUsersComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h1")(3, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "people");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, " All Users");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 3)(9, "mat-form-field", 4)(10, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "Search by name or email\u2026");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function AdminUsersComponent_Template_input_ngModelChange_12_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx.search, $event) || (ctx.search = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("input", function AdminUsersComponent_Template_input_input_12_listener() {
          return ctx.onSearch();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](15, AdminUsersComponent_div_15_Template, 2, 0, "div", 7)(16, AdminUsersComponent_div_16_Template, 23, 2, "div", 8)(17, AdminUsersComponent_div_17_Template, 9, 4, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](18, AdminUsersComponent_div_18_Template, 1, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](20, AdminUsersComponent_div_20_Template, 4, 0, "div", 12)(21, AdminUsersComponent_ng_container_21_Template, 109, 27, "ng-container", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", ctx.totalElements, " users");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx.search);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.totalPages > 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.mirrorUser || ctx.mirrorLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("open", ctx.mirrorUser || ctx.mirrorLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.mirrorLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.mirrorUser);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel, _material_module__WEBPACK_IMPORTED_MODULE_3__.MaterialModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatSuffix, _angular_material_input__WEBPACK_IMPORTED_MODULE_8__.MatInput, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatIconButton, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__.MatTooltip, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__.MatProgressSpinner, _angular_common__WEBPACK_IMPORTED_MODULE_0__.SlicePipe, _angular_common__WEBPACK_IMPORTED_MODULE_0__.DatePipe],
    styles: [".admin-page[_ngcontent-%COMP%] {\n  padding: 32px;\n  max-width: 1400px;\n}\n\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 28px;\n}\n.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 1.5rem;\n  font-weight: 800;\n  margin: 0;\n  color: #1a1a2e;\n}\n.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #4ade80;\n}\n.page-header[_ngcontent-%COMP%]   .timestamp[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #999;\n}\n\n.loading-state[_ngcontent-%COMP%], .error-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 60px;\n  color: #888;\n}\n.loading-state[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], .error-state[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 40px;\n  height: 40px;\n  width: 40px;\n  margin-bottom: 12px;\n  color: #e53935;\n}\n\n.kpi-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\n  gap: 16px;\n  margin-bottom: 28px;\n}\n\n.kpi-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  padding: 24px;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);\n}\n.kpi-card[_ngcontent-%COMP%]   .kpi-icon[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 12px;\n}\n.kpi-card[_ngcontent-%COMP%]   .kpi-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 22px;\n  height: 22px;\n  width: 22px;\n  color: #fff;\n}\n.kpi-card[_ngcontent-%COMP%]   .kpi-icon.green[_ngcontent-%COMP%] {\n  background: #2e7d32;\n}\n.kpi-card[_ngcontent-%COMP%]   .kpi-icon.blue[_ngcontent-%COMP%] {\n  background: #1565c0;\n}\n.kpi-card[_ngcontent-%COMP%]   .kpi-icon.orange[_ngcontent-%COMP%] {\n  background: #e65100;\n}\n.kpi-card[_ngcontent-%COMP%]   .kpi-icon.purple[_ngcontent-%COMP%] {\n  background: #6a1b9a;\n}\n.kpi-card[_ngcontent-%COMP%]   .kpi-val[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 800;\n  color: #1a1a2e;\n}\n.kpi-card[_ngcontent-%COMP%]   .kpi-label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: #555;\n  margin-bottom: 4px;\n}\n.kpi-card[_ngcontent-%COMP%]   .kpi-sub[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #888;\n}\n\n.section-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 1rem;\n  font-weight: 700;\n  color: #1a1a2e;\n  margin: 8px 0 16px;\n}\n.section-title[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #6a1b9a;\n}\n\n.revenue-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 16px;\n  margin-bottom: 28px;\n}\n\n.rev-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  padding: 20px;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);\n}\n.rev-card[_ngcontent-%COMP%]   .rev-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #777;\n  margin-bottom: 6px;\n}\n.rev-card[_ngcontent-%COMP%]   .rev-val[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 800;\n  color: #1a1a2e;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.rev-card[_ngcontent-%COMP%]   .rev-badge[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 700;\n  padding: 2px 8px;\n  border-radius: 10px;\n  letter-spacing: 0.5px;\n}\n.rev-card[_ngcontent-%COMP%]   .rev-badge.pro[_ngcontent-%COMP%] {\n  background: #e3f2fd;\n  color: #1565c0;\n}\n.rev-card[_ngcontent-%COMP%]   .rev-badge.biz[_ngcontent-%COMP%] {\n  background: #f3e5f5;\n  color: #6a1b9a;\n}\n.rev-card[_ngcontent-%COMP%]   .rev-progress[_ngcontent-%COMP%] {\n  background: #eee;\n  border-radius: 4px;\n  height: 6px;\n  margin: 10px 0 4px;\n  overflow: hidden;\n}\n.rev-card[_ngcontent-%COMP%]   .rev-bar[_ngcontent-%COMP%] {\n  background: #1565c0;\n  height: 100%;\n  border-radius: 4px;\n  transition: width 0.4s;\n}\n.rev-card[_ngcontent-%COMP%]   .rev-bar.biz-bar[_ngcontent-%COMP%] {\n  background: #6a1b9a;\n}\n.rev-card[_ngcontent-%COMP%]   .rev-pct[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #888;\n}\n\n.top-table[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);\n  overflow: hidden;\n}\n\n.tt-head[_ngcontent-%COMP%], .tt-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 40px 1fr 100px 80px 120px 1fr 48px;\n  align-items: center;\n  padding: 12px 20px;\n  gap: 12px;\n  font-size: 13px;\n}\n\n.tt-head[_ngcontent-%COMP%] {\n  background: #f5f5f5;\n  font-weight: 700;\n  color: #555;\n  font-size: 12px;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n\n.tt-row[_ngcontent-%COMP%] {\n  border-top: 1px solid #f0f0f0;\n}\n.tt-row[_ngcontent-%COMP%]:hover {\n  background: #fafafa;\n}\n\n.rank[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #1a1a2e;\n}\n\n.sname[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n\n.muted[_ngcontent-%COMP%] {\n  color: #888;\n}\n\n.type-chip[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  padding: 2px 10px;\n  border-radius: 10px;\n}\n.type-chip.rotational[_ngcontent-%COMP%] {\n  background: #e3f2fd;\n  color: #1565c0;\n}\n.type-chip.savings[_ngcontent-%COMP%] {\n  background: #e8f5e9;\n  color: #2e7d32;\n}\n.type-chip.investment[_ngcontent-%COMP%] {\n  background: #fff3e0;\n  color: #e65100;\n}\n\n.view-link[_ngcontent-%COMP%] {\n  color: #888;\n  display: flex;\n  align-items: center;\n}\n.view-link[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  height: 18px;\n  width: 18px;\n}\n.view-link[_ngcontent-%COMP%]:hover {\n  color: #1565c0;\n}\n\n.tt-empty[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 32px;\n  color: #aaa;\n  font-size: 14px;\n}\n\n.admin-page[_ngcontent-%COMP%] {\n  padding: 32px;\n  max-width: 1400px;\n}\n\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 28px;\n}\n.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 1.5rem;\n  font-weight: 800;\n  margin: 0;\n  color: #1a1a2e;\n}\n.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #4ade80;\n}\n.page-header[_ngcontent-%COMP%]   .timestamp[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #999;\n}\n\n.loading-state[_ngcontent-%COMP%], .error-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 60px;\n  color: #888;\n}\n.loading-state[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], .error-state[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 40px;\n  height: 40px;\n  width: 40px;\n  margin-bottom: 12px;\n  color: #e53935;\n}\n\n.kpi-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\n  gap: 16px;\n  margin-bottom: 28px;\n}\n\n.kpi-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  padding: 24px;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);\n}\n.kpi-card[_ngcontent-%COMP%]   .kpi-icon[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 12px;\n}\n.kpi-card[_ngcontent-%COMP%]   .kpi-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 22px;\n  height: 22px;\n  width: 22px;\n  color: #fff;\n}\n.kpi-card[_ngcontent-%COMP%]   .kpi-icon.green[_ngcontent-%COMP%] {\n  background: #2e7d32;\n}\n.kpi-card[_ngcontent-%COMP%]   .kpi-icon.blue[_ngcontent-%COMP%] {\n  background: #1565c0;\n}\n.kpi-card[_ngcontent-%COMP%]   .kpi-icon.orange[_ngcontent-%COMP%] {\n  background: #e65100;\n}\n.kpi-card[_ngcontent-%COMP%]   .kpi-icon.purple[_ngcontent-%COMP%] {\n  background: #6a1b9a;\n}\n.kpi-card[_ngcontent-%COMP%]   .kpi-val[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 800;\n  color: #1a1a2e;\n}\n.kpi-card[_ngcontent-%COMP%]   .kpi-label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: #555;\n  margin-bottom: 4px;\n}\n.kpi-card[_ngcontent-%COMP%]   .kpi-sub[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #888;\n}\n\n.section-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 1rem;\n  font-weight: 700;\n  color: #1a1a2e;\n  margin: 8px 0 16px;\n}\n.section-title[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #6a1b9a;\n}\n\n.revenue-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 16px;\n  margin-bottom: 28px;\n}\n\n.rev-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  padding: 20px;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);\n}\n.rev-card[_ngcontent-%COMP%]   .rev-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #777;\n  margin-bottom: 6px;\n}\n.rev-card[_ngcontent-%COMP%]   .rev-val[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 800;\n  color: #1a1a2e;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.rev-card[_ngcontent-%COMP%]   .rev-badge[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 700;\n  padding: 2px 8px;\n  border-radius: 10px;\n  letter-spacing: 0.5px;\n}\n.rev-card[_ngcontent-%COMP%]   .rev-badge.pro[_ngcontent-%COMP%] {\n  background: #e3f2fd;\n  color: #1565c0;\n}\n.rev-card[_ngcontent-%COMP%]   .rev-badge.biz[_ngcontent-%COMP%] {\n  background: #f3e5f5;\n  color: #6a1b9a;\n}\n.rev-card[_ngcontent-%COMP%]   .rev-progress[_ngcontent-%COMP%] {\n  background: #eee;\n  border-radius: 4px;\n  height: 6px;\n  margin: 10px 0 4px;\n  overflow: hidden;\n}\n.rev-card[_ngcontent-%COMP%]   .rev-bar[_ngcontent-%COMP%] {\n  background: #1565c0;\n  height: 100%;\n  border-radius: 4px;\n  transition: width 0.4s;\n}\n.rev-card[_ngcontent-%COMP%]   .rev-bar.biz-bar[_ngcontent-%COMP%] {\n  background: #6a1b9a;\n}\n.rev-card[_ngcontent-%COMP%]   .rev-pct[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #888;\n}\n\n.top-table[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);\n  overflow: hidden;\n}\n\n.tt-head[_ngcontent-%COMP%], .tt-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 40px 1fr 100px 80px 120px 1fr 48px;\n  align-items: center;\n  padding: 12px 20px;\n  gap: 12px;\n  font-size: 13px;\n}\n\n.tt-head[_ngcontent-%COMP%] {\n  background: #f5f5f5;\n  font-weight: 700;\n  color: #555;\n  font-size: 12px;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n\n.tt-row[_ngcontent-%COMP%] {\n  border-top: 1px solid #f0f0f0;\n}\n.tt-row[_ngcontent-%COMP%]:hover {\n  background: #fafafa;\n}\n\n.rank[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #1a1a2e;\n}\n\n.sname[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n\n.muted[_ngcontent-%COMP%] {\n  color: #888;\n}\n\n.type-chip[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  padding: 2px 10px;\n  border-radius: 10px;\n}\n.type-chip.rotational[_ngcontent-%COMP%] {\n  background: #e3f2fd;\n  color: #1565c0;\n}\n.type-chip.savings[_ngcontent-%COMP%] {\n  background: #e8f5e9;\n  color: #2e7d32;\n}\n.type-chip.investment[_ngcontent-%COMP%] {\n  background: #fff3e0;\n  color: #e65100;\n}\n\n.view-link[_ngcontent-%COMP%] {\n  color: #888;\n  display: flex;\n  align-items: center;\n}\n.view-link[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  height: 18px;\n  width: 18px;\n}\n.view-link[_ngcontent-%COMP%]:hover {\n  color: #1565c0;\n}\n\n.tt-empty[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 32px;\n  color: #aaa;\n  font-size: 14px;\n}\n\n.search-bar[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n\n.search-field[_ngcontent-%COMP%] {\n  width: 320px;\n}\n\n.total-badge[_ngcontent-%COMP%] {\n  background: #e8f5e9;\n  color: #2e7d32;\n  font-size: 12px;\n  font-weight: 700;\n  padding: 4px 12px;\n  border-radius: 12px;\n}\n\n.stokvels-table[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);\n  overflow: hidden;\n  margin-bottom: 16px;\n}\n\n.st-head[_ngcontent-%COMP%], .st-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 2fr 90px 80px 80px 120px 90px 1fr 90px 36px;\n  align-items: center;\n  padding: 12px 20px;\n  gap: 12px;\n  font-size: 13px;\n}\n\n.st-head[_ngcontent-%COMP%] {\n  background: #f5f5f5;\n  font-weight: 700;\n  font-size: 12px;\n  color: #555;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n\n.st-row[_ngcontent-%COMP%] {\n  border-top: 1px solid #f0f0f0;\n  cursor: pointer;\n  transition: background 0.1s;\n}\n.st-row[_ngcontent-%COMP%]:hover {\n  background: #fafafa;\n}\n.st-row.expanded[_ngcontent-%COMP%] {\n  background: #f0f7ff;\n}\n\n.s-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #1a1a2e;\n}\n\n.muted[_ngcontent-%COMP%] {\n  color: #888;\n  font-size: 12px;\n}\n\n.admins-cell[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.type-chip[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  padding: 2px 10px;\n  border-radius: 10px;\n}\n.type-chip.rotational[_ngcontent-%COMP%] {\n  background: #e3f2fd;\n  color: #1565c0;\n}\n.type-chip.savings[_ngcontent-%COMP%] {\n  background: #e8f5e9;\n  color: #2e7d32;\n}\n.type-chip.investment[_ngcontent-%COMP%] {\n  background: #fff3e0;\n  color: #e65100;\n}\n\n.status-chip[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  padding: 2px 10px;\n  border-radius: 10px;\n}\n.status-chip.status-active[_ngcontent-%COMP%] {\n  background: #e8f5e9;\n  color: #2e7d32;\n}\n.status-chip.status-inactive[_ngcontent-%COMP%] {\n  background: #ffebee;\n  color: #c62828;\n}\n\n.pending-badge[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #f57c00;\n  font-weight: 600;\n}\n\n.expand-icon[_ngcontent-%COMP%] {\n  color: #ccc;\n  font-size: 20px;\n  height: 20px;\n  width: 20px;\n}\n\n.st-detail[_ngcontent-%COMP%] {\n  border-top: 2px solid #e3f2fd;\n  background: #f8fbff;\n  padding: 24px;\n}\n\n.detail-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));\n  gap: 24px;\n}\n\n.detail-section[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 700;\n  color: #1a1a2e;\n  margin: 0 0 12px;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n\n.detail-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  padding: 6px 0;\n  font-size: 13px;\n  border-bottom: 1px solid #eef0f2;\n  gap: 8px;\n}\n.detail-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child {\n  color: #777;\n  flex-shrink: 0;\n}\n.detail-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child {\n  color: #1a1a2e;\n  font-weight: 500;\n  text-align: right;\n}\n.detail-row[_ngcontent-%COMP%]   .yes[_ngcontent-%COMP%] {\n  color: #2e7d32;\n}\n.detail-row[_ngcontent-%COMP%]   .no[_ngcontent-%COMP%] {\n  color: #888;\n}\n.detail-row[_ngcontent-%COMP%]   .mono[_ngcontent-%COMP%] {\n  font-family: monospace;\n  font-size: 11px;\n}\n\n.admin-chip[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 10px;\n  padding: 8px 0;\n  border-bottom: 1px solid #eef0f2;\n}\n.admin-chip[_ngcontent-%COMP%]   .admin-av[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  background: #1a1a2e;\n  color: #4ade80;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 13px;\n  font-weight: 700;\n  flex-shrink: 0;\n}\n.admin-chip[_ngcontent-%COMP%]   .admin-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 13px;\n}\n.admin-chip[_ngcontent-%COMP%]   .admin-email[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #777;\n}\n.admin-chip[_ngcontent-%COMP%]   .admin-joined[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #aaa;\n}\n\n.pagination[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 16px;\n  padding: 16px 0;\n  font-size: 14px;\n  color: #555;\n}\n\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 48px;\n}\n.empty-state[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 40px;\n  height: 40px;\n  width: 40px;\n  color: #ccc;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #aaa;\n  margin-top: 8px;\n}\n\n.email-col[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n\n.users-table[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);\n  overflow: hidden;\n  margin-bottom: 16px;\n}\n\n.ut-head[_ngcontent-%COMP%], .ut-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 200px 180px 90px 80px 120px 110px 90px 60px 100px 44px;\n  align-items: center;\n  padding: 12px 16px;\n  gap: 10px;\n  font-size: 12px;\n}\n\n.ut-head[_ngcontent-%COMP%] {\n  background: #f5f5f5;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n  color: #555;\n}\n\n.ut-row[_ngcontent-%COMP%] {\n  border-top: 1px solid #f0f0f0;\n}\n.ut-row[_ngcontent-%COMP%]:hover {\n  background: #fafafa;\n}\n\n.user-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n\n.user-av[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  background: #1a1a2e;\n  color: #4ade80;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 12px;\n  font-weight: 700;\n  flex-shrink: 0;\n}\n\n.user-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 13px;\n}\n\n.user-id[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: #aaa;\n}\n\n.kyc-badge[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 700;\n  padding: 2px 8px;\n  border-radius: 10px;\n}\n.kyc-badge.kyc-ok[_ngcontent-%COMP%] {\n  background: #e8f5e9;\n  color: #2e7d32;\n}\n.kyc-badge.kyc-pending[_ngcontent-%COMP%] {\n  background: #fff3e0;\n  color: #e65100;\n}\n.kyc-badge.kyc-fail[_ngcontent-%COMP%] {\n  background: #ffebee;\n  color: #c62828;\n}\n.kyc-badge.kyc-none[_ngcontent-%COMP%] {\n  background: #f5f5f5;\n  color: #888;\n}\n\n.tier-badge[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 700;\n  padding: 2px 8px;\n  border-radius: 10px;\n}\n.tier-badge.tier-free[_ngcontent-%COMP%] {\n  background: #f5f5f5;\n  color: #888;\n}\n.tier-badge.tier-pro[_ngcontent-%COMP%] {\n  background: #e3f2fd;\n  color: #1565c0;\n}\n.tier-badge.tier-biz[_ngcontent-%COMP%] {\n  background: #f3e5f5;\n  color: #6a1b9a;\n}\n\n.last-login[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #888;\n}\n.last-login.recent[_ngcontent-%COMP%] {\n  color: #2e7d32;\n}\n\n.credit-col[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #888;\n}\n.credit-col.has-credit[_ngcontent-%COMP%] {\n  color: #2e7d32;\n  font-weight: 700;\n}\n\n.mirror-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: #888;\n  padding: 4px;\n  border-radius: 6px;\n  display: flex;\n  align-items: center;\n}\n.mirror-btn[_ngcontent-%COMP%]:hover {\n  background: #e3f2fd;\n  color: #1565c0;\n}\n.mirror-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  height: 20px;\n  width: 20px;\n}\n\n.mirror-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.4);\n  z-index: 200;\n}\n\n.mirror-drawer[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  right: -560px;\n  bottom: 0;\n  width: 540px;\n  background: #fff;\n  z-index: 201;\n  overflow-y: auto;\n  transition: right 0.25s ease;\n  box-shadow: -4px 0 24px rgba(0, 0, 0, 0.18);\n}\n.mirror-drawer.open[_ngcontent-%COMP%] {\n  right: 0;\n}\n\n.mirror-loading[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 60px;\n  color: #888;\n}\n.mirror-loading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 12px;\n}\n\n.mirror-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 24px;\n  border-bottom: 1px solid #eee;\n  position: sticky;\n  top: 0;\n  background: #fff;\n  z-index: 10;\n}\n\n.mirror-av[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border-radius: 50%;\n  background: #1a1a2e;\n  color: #4ade80;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 16px;\n  font-weight: 700;\n  flex-shrink: 0;\n}\n\n.mirror-title[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.mirror-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 700;\n  margin: 0 0 4px;\n}\n.mirror-title[_ngcontent-%COMP%]   .mirror-sub[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #777;\n}\n\n.close-btn[_ngcontent-%COMP%] {\n  margin-left: auto;\n}\n\n.mirror-section[_ngcontent-%COMP%] {\n  padding: 20px 24px;\n  border-bottom: 1px solid #f0f0f0;\n}\n.mirror-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 13px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n  color: #555;\n  margin: 0 0 12px;\n}\n.mirror-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 17px;\n  height: 17px;\n  width: 17px;\n}\n\n.mirror-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 7px 0;\n  font-size: 13px;\n  border-bottom: 1px solid #f5f5f5;\n}\n.mirror-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child {\n  color: #777;\n}\n.mirror-row[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  font-size: 11px;\n  background: #f5f5f5;\n  padding: 2px 6px;\n  border-radius: 4px;\n}\n.mirror-row[_ngcontent-%COMP%]   .yes[_ngcontent-%COMP%] {\n  color: #2e7d32;\n}\n.mirror-row[_ngcontent-%COMP%]   .has-credit[_ngcontent-%COMP%] {\n  color: #2e7d32;\n  font-weight: 700;\n}\n\n.stokvel-row[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  border-radius: 8px;\n  padding: 12px;\n  margin-bottom: 8px;\n}\n\n.sr-top[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 6px;\n}\n\n.sr-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 13px;\n  flex: 1;\n}\n\n.role-chip[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 700;\n  padding: 2px 8px;\n  border-radius: 10px;\n  background: #f5f5f5;\n  color: #777;\n}\n.role-chip.admin[_ngcontent-%COMP%] {\n  background: #fff3e0;\n  color: #e65100;\n}\n\n.sr-details[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  font-size: 12px;\n  color: #666;\n  flex-wrap: wrap;\n}\n\n.empty-state.sm[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 16px;\n  color: #aaa;\n  flex-direction: row;\n}\n.empty-state.sm[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvYWRtaW4vYWRtaW4tZGFzaGJvYXJkL2FkbWluLWRhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvYWRtaW4vYWRtaW4tdXNlcnMvYWRtaW4tdXNlcnMuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXBwL3BhZ2VzL2FkbWluL2FkbWluLXN0b2t2ZWxzL2FkbWluLXN0b2t2ZWxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0FDRkY7O0FES0E7RUFDRSxhQUFBO0VBQWUsbUJBQUE7RUFBcUIsOEJBQUE7RUFDcEMsbUJBQUE7QUNBRjtBREVFO0VBQ0UsYUFBQTtFQUFlLG1CQUFBO0VBQXFCLFNBQUE7RUFDcEMsaUJBQUE7RUFBbUIsZ0JBQUE7RUFBa0IsU0FBQTtFQUFXLGNBQUE7QUNLcEQ7QURKSTtFQUFXLGNBQUE7QUNPZjtBREpFO0VBQWEsZUFBQTtFQUFpQixXQUFBO0FDUWhDOztBRExBO0VBQ0UsYUFBQTtFQUFlLHNCQUFBO0VBQXdCLG1CQUFBO0VBQ3ZDLGFBQUE7RUFBZSxXQUFBO0FDV2pCO0FEVkU7RUFBVyxlQUFBO0VBQWlCLFlBQUE7RUFBYyxXQUFBO0VBQWEsbUJBQUE7RUFBcUIsY0FBQTtBQ2lCOUU7O0FEYkE7RUFDRSxhQUFBO0VBQ0EsMkRBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7QUNnQkY7O0FEYkE7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHlDQUFBO0FDZ0JGO0FEZEU7RUFDRSxXQUFBO0VBQWEsWUFBQTtFQUNiLG1CQUFBO0VBQ0EsYUFBQTtFQUFlLG1CQUFBO0VBQXFCLHVCQUFBO0VBQ3BDLG1CQUFBO0FDbUJKO0FEbEJJO0VBQVcsZUFBQTtFQUFpQixZQUFBO0VBQWMsV0FBQTtFQUFhLFdBQUE7QUN3QjNEO0FEdEJJO0VBQVcs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QUE7RUFBZ0IsZ0JBQUE7QUF3MkJoQzs7QUFyMkJBO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQXcyQkY7O0FBcjJCQTtFQUNFLGFBQUE7RUFBZSxtQkFBQTtFQUFxQixRQUFBO0VBQVUsa0JBQUE7QUEyMkJoRDs7QUF4MkJBO0VBQVcsZ0JBQUE7RUFBa0IsZUFBQTtFQUFpQixPQUFBO0FBODJCOUM7O0FBNTJCQTtFQUNFLGVBQUE7RUFBaUIsZ0JBQUE7RUFBa0IsZ0JBQUE7RUFBa0IsbUJBQUE7RUFDckQsbUJBQUE7RUFBcUIsV0FBQTtBQW0zQnZCO0FBbDNCRTtFQUFVLG1CQUFBO0VBQXFCLGNBQUE7QUFzM0JqQzs7QUFuM0JBO0VBQ0UsYUFBQTtFQUFlLFNBQUE7RUFBVyxlQUFBO0VBQWlCLFdBQUE7RUFDM0MsZUFBQTtBQXkzQkY7O0FBdDNCQTtFQUNFLGtCQUFBO0VBQW9CLGFBQUE7RUFBZSxXQUFBO0VBQ25DLG1CQUFBO0FBMjNCRjtBQTEzQkU7RUFBVyxhQUFBO0FBNjNCYiIsInNvdXJjZXNDb250ZW50IjpbIkB1c2UgJ3Nhc3M6Y29sb3InO1xyXG5cclxuLy8gc2hhcmVkIGFkbWluIHBhZ2Ugc3R5bGVzXHJcbi5hZG1pbi1wYWdlIHtcclxuICBwYWRkaW5nOiAzMnB4O1xyXG4gIG1heC13aWR0aDogMTQwMHB4O1xyXG59XHJcblxyXG4ucGFnZS1oZWFkZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBtYXJnaW4tYm90dG9tOiAyOHB4O1xyXG5cclxuICBoMSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTsgZm9udC13ZWlnaHQ6IDgwMDsgbWFyZ2luOiAwOyBjb2xvcjogIzFhMWEyZTtcclxuICAgIG1hdC1pY29uIHsgY29sb3I6ICM0YWRlODA7IH1cclxuICB9XHJcblxyXG4gIC50aW1lc3RhbXAgeyBmb250LXNpemU6IDEycHg7IGNvbG9yOiAjOTk5OyB9XHJcbn1cclxuXHJcbi5sb2FkaW5nLXN0YXRlLCAuZXJyb3Itc3RhdGUge1xyXG4gIGRpc3BsYXk6IGZsZXg7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogNjBweDsgY29sb3I6ICM4ODg7XHJcbiAgbWF0LWljb24geyBmb250LXNpemU6IDQwcHg7IGhlaWdodDogNDBweDsgd2lkdGg6IDQwcHg7IG1hcmdpbi1ib3R0b206IDEycHg7IGNvbG9yOiAjZTUzOTM1OyB9XHJcbn1cclxuXHJcbi8vIMOiwpTCgMOiwpTCgCBLUEkgZ3JpZCDDosKUwoDDosKUwoBcclxuLmtwaS1ncmlkIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjIwcHgsIDFmcikpO1xyXG4gIGdhcDogMTZweDtcclxuICBtYXJnaW4tYm90dG9tOiAyOHB4O1xyXG59XHJcblxyXG4ua3BpLWNhcmQge1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICBwYWRkaW5nOiAyNHB4O1xyXG4gIGJveC1zaGFkb3c6IDAgMXB4IDRweCByZ2JhKDAsMCwwLC4wOCk7XHJcblxyXG4gIC5rcGktaWNvbiB7XHJcbiAgICB3aWR0aDogNDRweDsgaGVpZ2h0OiA0NHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTJweDtcclxuICAgIG1hdC1pY29uIHsgZm9udC1zaXplOiAyMnB4OyBoZWlnaHQ6IDIycHg7IHdpZHRoOiAyMnB4OyBjb2xvcjogI2ZmZjsgfVxyXG5cclxuICAgICYuZ3JlZW4gIHsgYmFja2dyb3VuZDogIzJlN2QzMjsgfVxyXG4gICAgJi5ibHVlICAgeyBiYWNrZ3JvdW5kOiAjMTU2NWMwOyB9XHJcbiAgICAmLm9yYW5nZSB7IGJhY2tncm91bmQ6ICNlNjUxMDA7IH1cclxuICAgICYucHVycGxlIHsgYmFja2dyb3VuZDogIzZhMWI5YTsgfVxyXG4gIH1cclxuXHJcbiAgLmtwaS12YWwgICB7IGZvbnQtc2l6ZTogMnJlbTsgZm9udC13ZWlnaHQ6IDgwMDsgY29sb3I6ICMxYTFhMmU7IH1cclxuICAua3BpLWxhYmVsIHsgZm9udC1zaXplOiAxM3B4OyBmb250LXdlaWdodDogNjAwOyBjb2xvcjogIzU1NTsgbWFyZ2luLWJvdHRvbTogNHB4OyB9XHJcbiAgLmtwaS1zdWIgICB7IGZvbnQtc2l6ZTogMTJweDsgY29sb3I6ICM4ODg7IH1cclxufVxyXG5cclxuLy8gw6LClMKAw6LClMKAIFNlY3Rpb24gdGl0bGUgw6LClMKAw6LClMKAXHJcbi5zZWN0aW9uLXRpdGxlIHtcclxuICBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDhweDtcclxuICBmb250LXNpemU6IDFyZW07IGZvbnQtd2VpZ2h0OiA3MDA7IGNvbG9yOiAjMWExYTJlO1xyXG4gIG1hcmdpbjogOHB4IDAgMTZweDtcclxuICBtYXQtaWNvbiB7IGNvbG9yOiAjNmExYjlhOyB9XHJcbn1cclxuXHJcbi8vIMOiwpTCgMOiwpTCgCBSZXZlbnVlIGdyaWQgw6LClMKAw6LClMKAXHJcbi5yZXZlbnVlLWdyaWQge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyMDBweCwgMWZyKSk7XHJcbiAgZ2FwOiAxNnB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDI4cHg7XHJcbn1cclxuXHJcbi5yZXYtY2FyZCB7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgYm94LXNoYWRvdzogMCAxcHggNHB4IHJnYmEoMCwwLDAsLjA4KTtcclxuXHJcbiAgLnJldi1sYWJlbCB7IGZvbnQtc2l6ZTogMTJweDsgY29sb3I6ICM3Nzc7IG1hcmdpbi1ib3R0b206IDZweDsgfVxyXG4gIC5yZXYtdmFsICAgeyBmb250LXNpemU6IDEuNXJlbTsgZm9udC13ZWlnaHQ6IDgwMDsgY29sb3I6ICMxYTFhMmU7XHJcbiAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGdhcDogOHB4OyB9XHJcblxyXG4gIC5yZXYtYmFkZ2Uge1xyXG4gICAgZm9udC1zaXplOiAxMHB4OyBmb250LXdlaWdodDogNzAwOyBwYWRkaW5nOiAycHggOHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDsgbGV0dGVyLXNwYWNpbmc6IC41cHg7XHJcbiAgICAmLnBybyB7IGJhY2tncm91bmQ6ICNlM2YyZmQ7IGNvbG9yOiAjMTU2NWMwOyB9XHJcbiAgICAmLmJpeiB7IGJhY2tncm91bmQ6ICNmM2U1ZjU7IGNvbG9yOiAjNmExYjlhOyB9XHJcbiAgfVxyXG5cclxuICAucmV2LXByb2dyZXNzIHtcclxuICAgIGJhY2tncm91bmQ6ICNlZWU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBoZWlnaHQ6IDZweDtcclxuICAgIG1hcmdpbjogMTBweCAwIDRweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgfVxyXG5cclxuICAucmV2LWJhciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMTU2NWMwO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgdHJhbnNpdGlvbjogd2lkdGggLjRzO1xyXG4gICAgJi5iaXotYmFyIHsgYmFja2dyb3VuZDogIzZhMWI5YTsgfVxyXG4gIH1cclxuXHJcbiAgLnJldi1wY3QgeyBmb250LXNpemU6IDExcHg7IGNvbG9yOiAjODg4OyB9XHJcbn1cclxuXHJcbi8vIMOiwpTCgMOiwpTCgCBUb3AgdGFibGUgw6LClMKAw6LClMKAXHJcbi50b3AtdGFibGUge1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICBib3gtc2hhZG93OiAwIDFweCA0cHggcmdiYSgwLDAsMCwuMDgpO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi50dC1oZWFkLCAudHQtcm93IHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNDBweCAxZnIgMTAwcHggODBweCAxMjBweCAxZnIgNDhweDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDEycHggMjBweDtcclxuICBnYXA6IDEycHg7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG59XHJcblxyXG4udHQtaGVhZCB7XHJcbiAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGNvbG9yOiAjNTU1O1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGxldHRlci1zcGFjaW5nOiAuNHB4O1xyXG59XHJcblxyXG4udHQtcm93IHtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgI2YwZjBmMDtcclxuICAmOmhvdmVyIHsgYmFja2dyb3VuZDogI2ZhZmFmYTsgfVxyXG59XHJcblxyXG4ucmFuayB7IGZvbnQtd2VpZ2h0OiA3MDA7IGNvbG9yOiAjMWExYTJlOyB9XHJcbi5zbmFtZSB7IGZvbnQtd2VpZ2h0OiA2MDA7IH1cclxuLm11dGVkIHsgY29sb3I6ICM4ODg7IH1cclxuXHJcbi50eXBlLWNoaXAge1xyXG4gIGZvbnQtc2l6ZTogMTFweDsgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBwYWRkaW5nOiAycHggMTBweDsgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAmLnJvdGF0aW9uYWwgeyBiYWNrZ3JvdW5kOiAjZTNmMmZkOyBjb2xvcjogIzE1NjVjMDsgfVxyXG4gICYuc2F2aW5ncyAgICB7IGJhY2tncm91bmQ6ICNlOGY1ZTk7IGNvbG9yOiAjMmU3ZDMyOyB9XHJcbiAgJi5pbnZlc3RtZW50IHsgYmFja2dyb3VuZDogI2ZmZjNlMDsgY29sb3I6ICNlNjUxMDA7IH1cclxufVxyXG5cclxuLnZpZXctbGluayB7XHJcbiAgY29sb3I6ICM4ODg7IGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWF0LWljb24geyBmb250LXNpemU6IDE4cHg7IGhlaWdodDogMThweDsgd2lkdGg6IDE4cHg7IH1cclxuICAmOmhvdmVyIHsgY29sb3I6ICMxNTY1YzA7IH1cclxufVxyXG5cclxuLnR0LWVtcHR5IHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7IHBhZGRpbmc6IDMycHg7IGNvbG9yOiAjYWFhOyBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbiIsIkBpbXBvcnQgJy4uL2FkbWluLWRhc2hib2FyZC9hZG1pbi1kYXNoYm9hcmQuY29tcG9uZW50JztcclxuQGltcG9ydCAnLi4vYWRtaW4tc3Rva3ZlbHMvYWRtaW4tc3Rva3ZlbHMuY29tcG9uZW50JztcclxuXHJcbi5lbWFpbC1jb2wgeyBmb250LXNpemU6IDEycHg7IH1cclxuXHJcbi8vIFVzZXJzIHRhYmxlXHJcbi51c2Vycy10YWJsZSB7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIGJveC1zaGFkb3c6IDAgMXB4IDRweCByZ2JhKDAsMCwwLC4wOCk7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG59XHJcblxyXG4udXQtaGVhZCwgLnV0LXJvdyB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwMHB4IDE4MHB4IDkwcHggODBweCAxMjBweCAxMTBweCA5MHB4IDYwcHggMTAwcHggNDRweDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDEycHggMTZweDtcclxuICBnYXA6IDEwcHg7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG4udXQtaGVhZCB7XHJcbiAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcclxuICBmb250LXdlaWdodDogNzAwOyB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyBsZXR0ZXItc3BhY2luZzogLjRweDsgY29sb3I6ICM1NTU7XHJcbn1cclxuXHJcbi51dC1yb3cge1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZjBmMGYwO1xyXG4gICY6aG92ZXIgeyBiYWNrZ3JvdW5kOiAjZmFmYWZhOyB9XHJcbn1cclxuXHJcbi51c2VyLWNlbGwgeyBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDEwcHg7IH1cclxuLnVzZXItYXYge1xyXG4gIHdpZHRoOiAzMnB4OyBoZWlnaHQ6IDMycHg7IGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBiYWNrZ3JvdW5kOiAjMWExYTJlOyBjb2xvcjogIzRhZGU4MDtcclxuICBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBmb250LXNpemU6IDEycHg7IGZvbnQtd2VpZ2h0OiA3MDA7IGZsZXgtc2hyaW5rOiAwO1xyXG59XHJcbi51c2VyLW5hbWUgeyBmb250LXdlaWdodDogNjAwOyBmb250LXNpemU6IDEzcHg7IH1cclxuLnVzZXItaWQgICB7IGZvbnQtc2l6ZTogMTBweDsgY29sb3I6ICNhYWE7IH1cclxuXHJcbi5reWMtYmFkZ2Uge1xyXG4gIGZvbnQtc2l6ZTogMTBweDsgZm9udC13ZWlnaHQ6IDcwMDsgcGFkZGluZzogMnB4IDhweDsgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAmLmt5Yy1vayAgICAgIHsgYmFja2dyb3VuZDogI2U4ZjVlOTsgY29sb3I6ICMyZTdkMzI7IH1cclxuICAmLmt5Yy1wZW5kaW5nIHsgYmFja2dyb3VuZDogI2ZmZjNlMDsgY29sb3I6ICNlNjUxMDA7IH1cclxuICAmLmt5Yy1mYWlsICAgIHsgYmFja2dyb3VuZDogI2ZmZWJlZTsgY29sb3I6ICNjNjI4Mjg7IH1cclxuICAmLmt5Yy1ub25lICAgIHsgYmFja2dyb3VuZDogI2Y1ZjVmNTsgY29sb3I6ICM4ODg7ICAgIH1cclxufVxyXG5cclxuLnRpZXItYmFkZ2Uge1xyXG4gIGZvbnQtc2l6ZTogMTBweDsgZm9udC13ZWlnaHQ6IDcwMDsgcGFkZGluZzogMnB4IDhweDsgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAmLnRpZXItZnJlZSB7IGJhY2tncm91bmQ6ICNmNWY1ZjU7IGNvbG9yOiAjODg4OyB9XHJcbiAgJi50aWVyLXBybyAgeyBiYWNrZ3JvdW5kOiAjZTNmMmZkOyBjb2xvcjogIzE1NjVjMDsgfVxyXG4gICYudGllci1iaXogIHsgYmFja2dyb3VuZDogI2YzZTVmNTsgY29sb3I6ICM2YTFiOWE7IH1cclxufVxyXG5cclxuLmxhc3QtbG9naW4geyBmb250LXNpemU6IDEycHg7IGNvbG9yOiAjODg4OyAmLnJlY2VudCB7IGNvbG9yOiAjMmU3ZDMyOyB9IH1cclxuLmNyZWRpdC1jb2wgeyBmb250LXNpemU6IDEycHg7IGNvbG9yOiAjODg4OyAmLmhhcy1jcmVkaXQgeyBjb2xvcjogIzJlN2QzMjsgZm9udC13ZWlnaHQ6IDcwMDsgfSB9XHJcblxyXG4ubWlycm9yLWJ0biB7XHJcbiAgYmFja2dyb3VuZDogbm9uZTsgYm9yZGVyOiBub25lOyBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgY29sb3I6ICM4ODg7IHBhZGRpbmc6IDRweDtcclxuICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAmOmhvdmVyIHsgYmFja2dyb3VuZDogI2UzZjJmZDsgY29sb3I6ICMxNTY1YzA7IH1cclxuICBtYXQtaWNvbiB7IGZvbnQtc2l6ZTogMjBweDsgaGVpZ2h0OiAyMHB4OyB3aWR0aDogMjBweDsgfVxyXG59XHJcblxyXG4vLyDDosKUwoDDosKUwoAgTWlycm9yIGRyYXdlciDDosKUwoDDosKUwoBcclxuLm1pcnJvci1vdmVybGF5IHtcclxuICBwb3NpdGlvbjogZml4ZWQ7IGluc2V0OiAwO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsLjQpO1xyXG4gIHotaW5kZXg6IDIwMDtcclxufVxyXG5cclxuLm1pcnJvci1kcmF3ZXIge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7IHJpZ2h0OiAtNTYwcHg7IGJvdHRvbTogMDtcclxuICB3aWR0aDogNTQwcHg7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICB6LWluZGV4OiAyMDE7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxuICB0cmFuc2l0aW9uOiByaWdodCAuMjVzIGVhc2U7XHJcbiAgYm94LXNoYWRvdzogLTRweCAwIDI0cHggcmdiYSgwLDAsMCwuMTgpO1xyXG5cclxuICAmLm9wZW4geyByaWdodDogMDsgfVxyXG59XHJcblxyXG4ubWlycm9yLWxvYWRpbmcge1xyXG4gIGRpc3BsYXk6IGZsZXg7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogNjBweDsgY29sb3I6ICM4ODg7XHJcbiAgcCB7IG1hcmdpbi10b3A6IDEycHg7IH1cclxufVxyXG5cclxuLm1pcnJvci1oZWFkZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGdhcDogMTJweDtcclxuICBwYWRkaW5nOiAyNHB4O1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWVlO1xyXG4gIHBvc2l0aW9uOiBzdGlja3k7IHRvcDogMDsgYmFja2dyb3VuZDogI2ZmZjsgei1pbmRleDogMTA7XHJcbn1cclxuXHJcbi5taXJyb3ItYXYge1xyXG4gIHdpZHRoOiA0OHB4OyBoZWlnaHQ6IDQ4cHg7IGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBiYWNrZ3JvdW5kOiAjMWExYTJlOyBjb2xvcjogIzRhZGU4MDtcclxuICBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBmb250LXNpemU6IDE2cHg7IGZvbnQtd2VpZ2h0OiA3MDA7IGZsZXgtc2hyaW5rOiAwO1xyXG59XHJcblxyXG4ubWlycm9yLXRpdGxlIHtcclxuICBmbGV4OiAxO1xyXG4gIGgyIHsgZm9udC1zaXplOiAxcmVtOyBmb250LXdlaWdodDogNzAwOyBtYXJnaW46IDAgMCA0cHg7IH1cclxuICAubWlycm9yLXN1YiB7IGZvbnQtc2l6ZTogMTJweDsgY29sb3I6ICM3Nzc7IH1cclxufVxyXG5cclxuLmNsb3NlLWJ0biB7IG1hcmdpbi1sZWZ0OiBhdXRvOyB9XHJcblxyXG4ubWlycm9yLXNlY3Rpb24ge1xyXG4gIHBhZGRpbmc6IDIwcHggMjRweDtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2YwZjBmMDtcclxuXHJcbiAgaDMge1xyXG4gICAgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZ2FwOiA2cHg7XHJcbiAgICBmb250LXNpemU6IDEzcHg7IGZvbnQtd2VpZ2h0OiA3MDA7IHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLjRweDsgY29sb3I6ICM1NTU7IG1hcmdpbjogMCAwIDEycHg7XHJcbiAgICBtYXQtaWNvbiB7IGZvbnQtc2l6ZTogMTdweDsgaGVpZ2h0OiAxN3B4OyB3aWR0aDogMTdweDsgfVxyXG4gIH1cclxufVxyXG5cclxuLm1pcnJvci1yb3cge1xyXG4gIGRpc3BsYXk6IGZsZXg7IGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nOiA3cHggMDsgZm9udC1zaXplOiAxM3B4O1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjVmNWY1O1xyXG5cclxuICBzcGFuOmZpcnN0LWNoaWxkIHsgY29sb3I6ICM3Nzc7IH1cclxuICBjb2RlIHsgZm9udC1zaXplOiAxMXB4OyBiYWNrZ3JvdW5kOiAjZjVmNWY1OyBwYWRkaW5nOiAycHggNnB4OyBib3JkZXItcmFkaXVzOiA0cHg7IH1cclxuICAueWVzIHsgY29sb3I6ICMyZTdkMzI7IH1cclxuICAuaGFzLWNyZWRpdCB7IGNvbG9yOiAjMmU3ZDMyOyBmb250LXdlaWdodDogNzAwOyB9XHJcbn1cclxuXHJcbi5zdG9rdmVsLXJvdyB7XHJcbiAgYmFja2dyb3VuZDogI2Y4ZjlmYTtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgcGFkZGluZzogMTJweDtcclxuICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbn1cclxuXHJcbi5zci10b3Age1xyXG4gIGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGdhcDogOHB4OyBtYXJnaW4tYm90dG9tOiA2cHg7XHJcbn1cclxuXHJcbi5zci1uYW1lIHsgZm9udC13ZWlnaHQ6IDYwMDsgZm9udC1zaXplOiAxM3B4OyBmbGV4OiAxOyB9XHJcblxyXG4ucm9sZS1jaGlwIHtcclxuICBmb250LXNpemU6IDEwcHg7IGZvbnQtd2VpZ2h0OiA3MDA7IHBhZGRpbmc6IDJweCA4cHg7IGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgYmFja2dyb3VuZDogI2Y1ZjVmNTsgY29sb3I6ICM3Nzc7XHJcbiAgJi5hZG1pbiB7IGJhY2tncm91bmQ6ICNmZmYzZTA7IGNvbG9yOiAjZTY1MTAwOyB9XHJcbn1cclxuXHJcbi5zci1kZXRhaWxzIHtcclxuICBkaXNwbGF5OiBmbGV4OyBnYXA6IDE2cHg7IGZvbnQtc2l6ZTogMTJweDsgY29sb3I6ICM2NjY7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG59XHJcblxyXG4uZW1wdHktc3RhdGUuc20ge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjsgcGFkZGluZzogMTZweDsgY29sb3I6ICNhYWE7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBtYXQtaWNvbiB7IGRpc3BsYXk6IG5vbmU7IH1cclxufVxyXG5cclxuIiwiQGltcG9ydCAnLi4vYWRtaW4tZGFzaGJvYXJkL2FkbWluLWRhc2hib2FyZC5jb21wb25lbnQnO1xyXG5cclxuLnNlYXJjaC1iYXIgeyBtYXJnaW4tYm90dG9tOiAxNnB4OyB9XHJcbi5zZWFyY2gtZmllbGQgeyB3aWR0aDogMzIwcHg7IH1cclxuLnRvdGFsLWJhZGdlIHtcclxuICBiYWNrZ3JvdW5kOiAjZThmNWU5OyBjb2xvcjogIzJlN2QzMjtcclxuICBmb250LXNpemU6IDEycHg7IGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgcGFkZGluZzogNHB4IDEycHg7IGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbn1cclxuXHJcbi8vIFRhYmxlXHJcbi5zdG9rdmVscy10YWJsZSB7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIGJveC1zaGFkb3c6IDAgMXB4IDRweCByZ2JhKDAsMCwwLC4wOCk7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG59XHJcblxyXG4uc3QtaGVhZCwgLnN0LXJvdyB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciA5MHB4IDgwcHggODBweCAxMjBweCA5MHB4IDFmciA5MHB4IDM2cHg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAxMnB4IDIwcHg7XHJcbiAgZ2FwOiAxMnB4O1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxufVxyXG5cclxuLnN0LWhlYWQge1xyXG4gIGJhY2tncm91bmQ6ICNmNWY1ZjU7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDsgZm9udC1zaXplOiAxMnB4O1xyXG4gIGNvbG9yOiAjNTU1OyB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyBsZXR0ZXItc3BhY2luZzogLjRweDtcclxufVxyXG5cclxuLnN0LXJvdyB7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNmMGYwZjA7XHJcbiAgY3Vyc29yOiBwb2ludGVyOyB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIC4xcztcclxuICAmOmhvdmVyIHsgYmFja2dyb3VuZDogI2ZhZmFmYTsgfVxyXG4gICYuZXhwYW5kZWQgeyBiYWNrZ3JvdW5kOiAjZjBmN2ZmOyB9XHJcbn1cclxuXHJcbi5zLW5hbWUgeyBmb250LXdlaWdodDogNjAwOyBjb2xvcjogIzFhMWEyZTsgfVxyXG4ubXV0ZWQgeyBjb2xvcjogIzg4ODsgZm9udC1zaXplOiAxMnB4OyB9XHJcbi5hZG1pbnMtY2VsbCB7IHdoaXRlLXNwYWNlOiBub3dyYXA7IG92ZXJmbG93OiBoaWRkZW47IHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzOyB9XHJcblxyXG4udHlwZS1jaGlwIHtcclxuICBmb250LXNpemU6IDExcHg7IGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgcGFkZGluZzogMnB4IDEwcHg7IGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgJi5yb3RhdGlvbmFsIHsgYmFja2dyb3VuZDogI2UzZjJmZDsgY29sb3I6ICMxNTY1YzA7IH1cclxuICAmLnNhdmluZ3MgICAgeyBiYWNrZ3JvdW5kOiAjZThmNWU5OyBjb2xvcjogIzJlN2QzMjsgfVxyXG4gICYuaW52ZXN0bWVudCB7IGJhY2tncm91bmQ6ICNmZmYzZTA7IGNvbG9yOiAjZTY1MTAwOyB9XHJcbn1cclxuXHJcbi5zdGF0dXMtY2hpcCB7XHJcbiAgZm9udC1zaXplOiAxMXB4OyBmb250LXdlaWdodDogNzAwO1xyXG4gIHBhZGRpbmc6IDJweCAxMHB4OyBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICYuc3RhdHVzLWFjdGl2ZSAgIHsgYmFja2dyb3VuZDogI2U4ZjVlOTsgY29sb3I6ICMyZTdkMzI7IH1cclxuICAmLnN0YXR1cy1pbmFjdGl2ZSB7IGJhY2tncm91bmQ6ICNmZmViZWU7IGNvbG9yOiAjYzYyODI4OyB9XHJcbn1cclxuXHJcbi5wZW5kaW5nLWJhZGdlIHtcclxuICBmb250LXNpemU6IDExcHg7IGNvbG9yOiAjZjU3YzAwOyBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4uZXhwYW5kLWljb24geyBjb2xvcjogI2NjYzsgZm9udC1zaXplOiAyMHB4OyBoZWlnaHQ6IDIwcHg7IHdpZHRoOiAyMHB4OyB9XHJcblxyXG4vLyBEZXRhaWwgcGFuZWxcclxuLnN0LWRldGFpbCB7XHJcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICNlM2YyZmQ7XHJcbiAgYmFja2dyb3VuZDogI2Y4ZmJmZjtcclxuICBwYWRkaW5nOiAyNHB4O1xyXG59XHJcblxyXG4uZGV0YWlsLWdyaWQge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyNDBweCwgMWZyKSk7XHJcbiAgZ2FwOiAyNHB4O1xyXG59XHJcblxyXG4uZGV0YWlsLXNlY3Rpb24ge1xyXG4gIGg0IHsgZm9udC1zaXplOiAxM3B4OyBmb250LXdlaWdodDogNzAwOyBjb2xvcjogIzFhMWEyZTsgbWFyZ2luOiAwIDAgMTJweDtcclxuICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7IGxldHRlci1zcGFjaW5nOiAuNHB4OyB9XHJcbn1cclxuXHJcbi5kZXRhaWwtcm93IHtcclxuICBkaXNwbGF5OiBmbGV4OyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gIHBhZGRpbmc6IDZweCAwOyBmb250LXNpemU6IDEzcHg7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZWYwZjI7XHJcbiAgZ2FwOiA4cHg7XHJcblxyXG4gIHNwYW46Zmlyc3QtY2hpbGQgeyBjb2xvcjogIzc3NzsgZmxleC1zaHJpbms6IDA7IH1cclxuICBzcGFuOmxhc3QtY2hpbGQgIHsgY29sb3I6ICMxYTFhMmU7IGZvbnQtd2VpZ2h0OiA1MDA7IHRleHQtYWxpZ246IHJpZ2h0OyB9XHJcblxyXG4gIC55ZXMgeyBjb2xvcjogIzJlN2QzMjsgfVxyXG4gIC5ubyAgeyBjb2xvcjogIzg4ODsgfVxyXG4gIC5tb25vIHsgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTsgZm9udC1zaXplOiAxMXB4OyB9XHJcbn1cclxuXHJcbi5hZG1pbi1jaGlwIHtcclxuICBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogZmxleC1zdGFydDsgZ2FwOiAxMHB4O1xyXG4gIHBhZGRpbmc6IDhweCAwOyBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VlZjBmMjtcclxuXHJcbiAgLmFkbWluLWF2IHtcclxuICAgIHdpZHRoOiAzMnB4OyBoZWlnaHQ6IDMycHg7IGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJhY2tncm91bmQ6ICMxYTFhMmU7IGNvbG9yOiAjNGFkZTgwO1xyXG4gICAgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDEzcHg7IGZvbnQtd2VpZ2h0OiA3MDA7IGZsZXgtc2hyaW5rOiAwO1xyXG4gIH1cclxuXHJcbiAgLmFkbWluLW5hbWUgIHsgZm9udC13ZWlnaHQ6IDYwMDsgZm9udC1zaXplOiAxM3B4OyB9XHJcbiAgLmFkbWluLWVtYWlsIHsgZm9udC1zaXplOiAxMnB4OyBjb2xvcjogIzc3NzsgfVxyXG4gIC5hZG1pbi1qb2luZWR7IGZvbnQtc2l6ZTogMTFweDsgY29sb3I6ICNhYWE7IH1cclxufVxyXG5cclxuLy8gUGFnaW5hdGlvblxyXG4ucGFnaW5hdGlvbiB7XHJcbiAgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IGdhcDogMTZweDtcclxuICBwYWRkaW5nOiAxNnB4IDA7XHJcbiAgZm9udC1zaXplOiAxNHB4OyBjb2xvcjogIzU1NTtcclxufVxyXG5cclxuLmVtcHR5LXN0YXRlIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7IHBhZGRpbmc6IDQ4cHg7XHJcbiAgbWF0LWljb24geyBmb250LXNpemU6IDQwcHg7IGhlaWdodDogNDBweDsgd2lkdGg6IDQwcHg7IGNvbG9yOiAjY2NjOyB9XHJcbiAgcCB7IGNvbG9yOiAjYWFhOyBtYXJnaW4tdG9wOiA4cHg7IH1cclxufVxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  }));
}
_staticBlock();

/***/ })

}]);
//# sourceMappingURL=src_app_pages_admin_admin-users_admin-users_component_ts.js.map