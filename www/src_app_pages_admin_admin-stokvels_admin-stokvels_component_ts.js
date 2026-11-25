"use strict";
(self["webpackChunkikage_ui"] = self["webpackChunkikage_ui"] || []).push([["src_app_pages_admin_admin-stokvels_admin-stokvels_component_ts"],{

/***/ 2143:
/*!************************************************************************!*\
  !*** ./src/app/pages/admin/admin-stokvels/admin-stokvels.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminStokvelsComponent: () => (/* binding */ AdminStokvelsComponent)
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
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/progress-spinner */ 1134);
var _staticBlock;













function AdminStokvelsComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "mat-spinner", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function AdminStokvelsComponent_div_16_ng_container_19_span_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const s_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("\u00A0+", s_r2.pendingMemberCount, " pending");
  }
}
function AdminStokvelsComponent_div_16_ng_container_19_div_28_div_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 29)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Rotation Started");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const s_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](5, 1, s_r2.rotationStartedAt));
  }
}
function AdminStokvelsComponent_div_16_ng_container_19_div_28_div_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 29)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Current Slot");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const s_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("#", s_r2.currentRotationSlot);
  }
}
function AdminStokvelsComponent_div_16_ng_container_19_div_28_div_48_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 34)(1, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div")(4, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](10, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const a_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"]((a_r4.name || a_r4.email)[0] == null ? null : (a_r4.name || a_r4.email)[0].toUpperCase());
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](a_r4.name || "\u2014");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](a_r4.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Joined ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](10, 4, a_r4.joinedAt, "dd MMM yy"));
  }
}
function AdminStokvelsComponent_div_16_ng_container_19_div_28_div_49_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "No admins");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function AdminStokvelsComponent_div_16_ng_container_19_div_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 26)(1, "div", 27)(2, "div", 28)(3, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Overview");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 29)(6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 29)(11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "Payout Cycle");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 29)(16, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, "KYC Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "div", 29)(21, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22, "Total Contributions");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](25, AdminStokvelsComponent_div_16_ng_container_19_div_28_div_25_Template, 6, 3, "div", 30)(26, AdminStokvelsComponent_div_16_ng_container_19_div_28_div_26_Template, 5, 1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "div", 28)(28, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](29, "Creator");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "div", 29)(31, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](32, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "div", 29)(36, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](37, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "div", 29)(41, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](42, "Auth0 ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](45, "div", 28)(46, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](48, AdminStokvelsComponent_div_16_ng_container_19_div_28_div_48_Template, 11, 7, "div", 32)(49, AdminStokvelsComponent_div_16_ng_container_19_div_28_div_49_Template, 2, 0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const s_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](s_r2.description || "\u2014");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](s_r2.payoutCycle);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("yes", s_r2.kycRequired)("no", !s_r2.kycRequired);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", s_r2.kycRequired ? "Yes (" + s_r2.minimumKycLevel + ")" : "No", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r2.contributionStr(s_r2.totalContributions));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", s_r2.rotationStartedAt);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", s_r2.currentRotationSlot);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](s_r2.createdByName);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](s_r2.createdByEmail);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](s_r2.createdByAuth0Id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Admins (", (s_r2.admins == null ? null : s_r2.admins.length) ?? 0, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", s_r2.admins);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !(s_r2.admins == null ? null : s_r2.admins.length));
  }
}
function AdminStokvelsComponent_div_16_ng_container_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AdminStokvelsComponent_div_16_ng_container_19_Template_div_click_1_listener() {
      const s_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.toggleExpand(s_r2.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "span")(5, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](9, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "span")(11, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "span")(14, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](18, AdminStokvelsComponent_div_16_ng_container_19_span_18_Template, 2, 1, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](25, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "mat-icon", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](28, AdminStokvelsComponent_div_16_ng_container_19_div_28_Template, 50, 16, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const s_r2 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("expanded", ctx_r2.expandedId === s_r2.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](s_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"](s_r2.type == null ? null : s_r2.type.toLowerCase());
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](s_r2.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](9, 18, s_r2.privacy));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"](ctx_r2.statusClass(s_r2.status));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](s_r2.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](s_r2.activeMemberCount);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" / ", s_r2.maxMembers);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", s_r2.pendingMemberCount > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r2.contributionStr(s_r2.monthlyContribution));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r2.adminNames(s_r2));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](25, 20, s_r2.createdAt, "dd MMM yy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r2.expandedId === s_r2.id ? "expand_less" : "expand_more");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.expandedId === s_r2.id);
  }
}
function AdminStokvelsComponent_div_16_div_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 39)(1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "account_balance");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "No stokvels found");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function AdminStokvelsComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 12)(1, "div", 13)(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "Privacy");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "Members");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "Monthly");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, "Admins");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, "Created");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](18, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](19, AdminStokvelsComponent_div_16_ng_container_19_Template, 29, 23, "ng-container", 14)(20, AdminStokvelsComponent_div_16_div_20_Template, 5, 0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r2.stokvels);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r2.stokvels.length);
  }
}
function AdminStokvelsComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 40)(1, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AdminStokvelsComponent_div_17_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.prevPage());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "chevron_left");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AdminStokvelsComponent_div_17_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5);
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
class AdminStokvelsComponent {
  constructor(adminService) {
    this.adminService = adminService;
    this.stokvels = [];
    this.loading = true;
    this.search = '';
    this.page = 0;
    this.size = 20;
    this.totalElements = 0;
    this.totalPages = 0;
    this.expandedId = null;
  }
  ngOnInit() {
    this.load();
  }
  load() {
    this.loading = true;
    this.adminService.getStokvels(this.search, this.page, this.size).subscribe({
      next: res => {
        this.stokvels = res.content;
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
  toggleExpand(id) {
    this.expandedId = this.expandedId === id ? null : id;
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
  statusClass(s) {
    return s?.toLowerCase() === 'active' ? 'status-active' : 'status-inactive';
  }
  adminNames(stokvel) {
    return stokvel.admins?.map(a => a.name || a.email).join(', ') || '—';
  }
  contributionStr(n) {
    if (!n) return 'R0';
    return 'R' + n.toLocaleString('en-ZA', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
  }
  static #_ = _staticBlock = () => (this.ɵfac = function AdminStokvelsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || AdminStokvelsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_admin_admin_service__WEBPACK_IMPORTED_MODULE_6__.AdminService));
  }, this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: AdminStokvelsComponent,
    selectors: [["app-admin-stokvels"]],
    decls: 18,
    vars: 5,
    consts: [[1, "admin-page"], [1, "page-header"], [1, "total-badge"], [1, "search-bar"], ["appearance", "outline", 1, "search-field"], ["matInput", "", "placeholder", "e.g. Kasi Savers", 3, "ngModelChange", "input", "ngModel"], ["matSuffix", ""], ["class", "loading-state", 4, "ngIf"], ["class", "stokvels-table", 4, "ngIf"], ["class", "pagination", 4, "ngIf"], [1, "loading-state"], ["diameter", "40"], [1, "stokvels-table"], [1, "st-head"], [4, "ngFor", "ngForOf"], ["class", "empty-state", 4, "ngIf"], [1, "st-row", 3, "click"], [1, "s-name"], [1, "type-chip"], [1, "muted"], [1, "status-chip"], ["class", "pending-badge", 4, "ngIf"], [1, "muted", "admins-cell"], [1, "expand-icon"], ["class", "st-detail", 4, "ngIf"], [1, "pending-badge"], [1, "st-detail"], [1, "detail-grid"], [1, "detail-section"], [1, "detail-row"], ["class", "detail-row", 4, "ngIf"], [1, "mono"], ["class", "admin-chip", 4, "ngFor", "ngForOf"], ["class", "muted", 4, "ngIf"], [1, "admin-chip"], [1, "admin-av"], [1, "admin-name"], [1, "admin-email"], [1, "admin-joined"], [1, "empty-state"], [1, "pagination"], ["mat-icon-button", "", 3, "click", "disabled"]],
    template: function AdminStokvelsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h1")(3, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "account_balance");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, " All Stokvels");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 3)(9, "mat-form-field", 4)(10, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "Search by name\u2026");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function AdminStokvelsComponent_Template_input_ngModelChange_12_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx.search, $event) || (ctx.search = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("input", function AdminStokvelsComponent_Template_input_input_12_listener() {
          return ctx.onSearch();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](15, AdminStokvelsComponent_div_15_Template, 2, 0, "div", 7)(16, AdminStokvelsComponent_div_16_Template, 21, 2, "div", 8)(17, AdminStokvelsComponent_div_17_Template, 9, 4, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", ctx.totalElements, " total");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx.search);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.totalPages > 1);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel, _material_module__WEBPACK_IMPORTED_MODULE_3__.MaterialModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatSuffix, _angular_material_input__WEBPACK_IMPORTED_MODULE_8__.MatInput, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatIconButton, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__.MatProgressSpinner, _angular_common__WEBPACK_IMPORTED_MODULE_0__.TitleCasePipe, _angular_common__WEBPACK_IMPORTED_MODULE_0__.DatePipe],
    styles: [".admin-page[_ngcontent-%COMP%] {\n  padding: 32px;\n  max-width: 1400px;\n}\n\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 28px;\n}\n.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 1.5rem;\n  font-weight: 800;\n  margin: 0;\n  color: #1a1a2e;\n}\n.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #4ade80;\n}\n.page-header[_ngcontent-%COMP%]   .timestamp[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #999;\n}\n\n.loading-state[_ngcontent-%COMP%], .error-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 60px;\n  color: #888;\n}\n.loading-state[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], .error-state[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 40px;\n  height: 40px;\n  width: 40px;\n  margin-bottom: 12px;\n  color: #e53935;\n}\n\n.kpi-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\n  gap: 16px;\n  margin-bottom: 28px;\n}\n\n.kpi-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  padding: 24px;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);\n}\n.kpi-card[_ngcontent-%COMP%]   .kpi-icon[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 12px;\n}\n.kpi-card[_ngcontent-%COMP%]   .kpi-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 22px;\n  height: 22px;\n  width: 22px;\n  color: #fff;\n}\n.kpi-card[_ngcontent-%COMP%]   .kpi-icon.green[_ngcontent-%COMP%] {\n  background: #2e7d32;\n}\n.kpi-card[_ngcontent-%COMP%]   .kpi-icon.blue[_ngcontent-%COMP%] {\n  background: #1565c0;\n}\n.kpi-card[_ngcontent-%COMP%]   .kpi-icon.orange[_ngcontent-%COMP%] {\n  background: #e65100;\n}\n.kpi-card[_ngcontent-%COMP%]   .kpi-icon.purple[_ngcontent-%COMP%] {\n  background: #6a1b9a;\n}\n.kpi-card[_ngcontent-%COMP%]   .kpi-val[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 800;\n  color: #1a1a2e;\n}\n.kpi-card[_ngcontent-%COMP%]   .kpi-label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: #555;\n  margin-bottom: 4px;\n}\n.kpi-card[_ngcontent-%COMP%]   .kpi-sub[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #888;\n}\n\n.section-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 1rem;\n  font-weight: 700;\n  color: #1a1a2e;\n  margin: 8px 0 16px;\n}\n.section-title[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #6a1b9a;\n}\n\n.revenue-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 16px;\n  margin-bottom: 28px;\n}\n\n.rev-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  padding: 20px;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);\n}\n.rev-card[_ngcontent-%COMP%]   .rev-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #777;\n  margin-bottom: 6px;\n}\n.rev-card[_ngcontent-%COMP%]   .rev-val[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 800;\n  color: #1a1a2e;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.rev-card[_ngcontent-%COMP%]   .rev-badge[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 700;\n  padding: 2px 8px;\n  border-radius: 10px;\n  letter-spacing: 0.5px;\n}\n.rev-card[_ngcontent-%COMP%]   .rev-badge.pro[_ngcontent-%COMP%] {\n  background: #e3f2fd;\n  color: #1565c0;\n}\n.rev-card[_ngcontent-%COMP%]   .rev-badge.biz[_ngcontent-%COMP%] {\n  background: #f3e5f5;\n  color: #6a1b9a;\n}\n.rev-card[_ngcontent-%COMP%]   .rev-progress[_ngcontent-%COMP%] {\n  background: #eee;\n  border-radius: 4px;\n  height: 6px;\n  margin: 10px 0 4px;\n  overflow: hidden;\n}\n.rev-card[_ngcontent-%COMP%]   .rev-bar[_ngcontent-%COMP%] {\n  background: #1565c0;\n  height: 100%;\n  border-radius: 4px;\n  transition: width 0.4s;\n}\n.rev-card[_ngcontent-%COMP%]   .rev-bar.biz-bar[_ngcontent-%COMP%] {\n  background: #6a1b9a;\n}\n.rev-card[_ngcontent-%COMP%]   .rev-pct[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #888;\n}\n\n.top-table[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);\n  overflow: hidden;\n}\n\n.tt-head[_ngcontent-%COMP%], .tt-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 40px 1fr 100px 80px 120px 1fr 48px;\n  align-items: center;\n  padding: 12px 20px;\n  gap: 12px;\n  font-size: 13px;\n}\n\n.tt-head[_ngcontent-%COMP%] {\n  background: #f5f5f5;\n  font-weight: 700;\n  color: #555;\n  font-size: 12px;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n\n.tt-row[_ngcontent-%COMP%] {\n  border-top: 1px solid #f0f0f0;\n}\n.tt-row[_ngcontent-%COMP%]:hover {\n  background: #fafafa;\n}\n\n.rank[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #1a1a2e;\n}\n\n.sname[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n\n.muted[_ngcontent-%COMP%] {\n  color: #888;\n}\n\n.type-chip[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  padding: 2px 10px;\n  border-radius: 10px;\n}\n.type-chip.rotational[_ngcontent-%COMP%] {\n  background: #e3f2fd;\n  color: #1565c0;\n}\n.type-chip.savings[_ngcontent-%COMP%] {\n  background: #e8f5e9;\n  color: #2e7d32;\n}\n.type-chip.investment[_ngcontent-%COMP%] {\n  background: #fff3e0;\n  color: #e65100;\n}\n\n.view-link[_ngcontent-%COMP%] {\n  color: #888;\n  display: flex;\n  align-items: center;\n}\n.view-link[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  height: 18px;\n  width: 18px;\n}\n.view-link[_ngcontent-%COMP%]:hover {\n  color: #1565c0;\n}\n\n.tt-empty[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 32px;\n  color: #aaa;\n  font-size: 14px;\n}\n\n.search-bar[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n\n.search-field[_ngcontent-%COMP%] {\n  width: 320px;\n}\n\n.total-badge[_ngcontent-%COMP%] {\n  background: #e8f5e9;\n  color: #2e7d32;\n  font-size: 12px;\n  font-weight: 700;\n  padding: 4px 12px;\n  border-radius: 12px;\n}\n\n.stokvels-table[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);\n  overflow: hidden;\n  margin-bottom: 16px;\n}\n\n.st-head[_ngcontent-%COMP%], .st-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 2fr 90px 80px 80px 120px 90px 1fr 90px 36px;\n  align-items: center;\n  padding: 12px 20px;\n  gap: 12px;\n  font-size: 13px;\n}\n\n.st-head[_ngcontent-%COMP%] {\n  background: #f5f5f5;\n  font-weight: 700;\n  font-size: 12px;\n  color: #555;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n\n.st-row[_ngcontent-%COMP%] {\n  border-top: 1px solid #f0f0f0;\n  cursor: pointer;\n  transition: background 0.1s;\n}\n.st-row[_ngcontent-%COMP%]:hover {\n  background: #fafafa;\n}\n.st-row.expanded[_ngcontent-%COMP%] {\n  background: #f0f7ff;\n}\n\n.s-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #1a1a2e;\n}\n\n.muted[_ngcontent-%COMP%] {\n  color: #888;\n  font-size: 12px;\n}\n\n.admins-cell[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.type-chip[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  padding: 2px 10px;\n  border-radius: 10px;\n}\n.type-chip.rotational[_ngcontent-%COMP%] {\n  background: #e3f2fd;\n  color: #1565c0;\n}\n.type-chip.savings[_ngcontent-%COMP%] {\n  background: #e8f5e9;\n  color: #2e7d32;\n}\n.type-chip.investment[_ngcontent-%COMP%] {\n  background: #fff3e0;\n  color: #e65100;\n}\n\n.status-chip[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  padding: 2px 10px;\n  border-radius: 10px;\n}\n.status-chip.status-active[_ngcontent-%COMP%] {\n  background: #e8f5e9;\n  color: #2e7d32;\n}\n.status-chip.status-inactive[_ngcontent-%COMP%] {\n  background: #ffebee;\n  color: #c62828;\n}\n\n.pending-badge[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #f57c00;\n  font-weight: 600;\n}\n\n.expand-icon[_ngcontent-%COMP%] {\n  color: #ccc;\n  font-size: 20px;\n  height: 20px;\n  width: 20px;\n}\n\n.st-detail[_ngcontent-%COMP%] {\n  border-top: 2px solid #e3f2fd;\n  background: #f8fbff;\n  padding: 24px;\n}\n\n.detail-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));\n  gap: 24px;\n}\n\n.detail-section[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 700;\n  color: #1a1a2e;\n  margin: 0 0 12px;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n\n.detail-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  padding: 6px 0;\n  font-size: 13px;\n  border-bottom: 1px solid #eef0f2;\n  gap: 8px;\n}\n.detail-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child {\n  color: #777;\n  flex-shrink: 0;\n}\n.detail-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child {\n  color: #1a1a2e;\n  font-weight: 500;\n  text-align: right;\n}\n.detail-row[_ngcontent-%COMP%]   .yes[_ngcontent-%COMP%] {\n  color: #2e7d32;\n}\n.detail-row[_ngcontent-%COMP%]   .no[_ngcontent-%COMP%] {\n  color: #888;\n}\n.detail-row[_ngcontent-%COMP%]   .mono[_ngcontent-%COMP%] {\n  font-family: monospace;\n  font-size: 11px;\n}\n\n.admin-chip[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 10px;\n  padding: 8px 0;\n  border-bottom: 1px solid #eef0f2;\n}\n.admin-chip[_ngcontent-%COMP%]   .admin-av[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  background: #1a1a2e;\n  color: #4ade80;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 13px;\n  font-weight: 700;\n  flex-shrink: 0;\n}\n.admin-chip[_ngcontent-%COMP%]   .admin-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 13px;\n}\n.admin-chip[_ngcontent-%COMP%]   .admin-email[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #777;\n}\n.admin-chip[_ngcontent-%COMP%]   .admin-joined[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #aaa;\n}\n\n.pagination[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 16px;\n  padding: 16px 0;\n  font-size: 14px;\n  color: #555;\n}\n\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 48px;\n}\n.empty-state[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 40px;\n  height: 40px;\n  width: 40px;\n  color: #ccc;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #aaa;\n  margin-top: 8px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvYWRtaW4vYWRtaW4tZGFzaGJvYXJkL2FkbWluLWRhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvYWRtaW4vYWRtaW4tc3Rva3ZlbHMvYWRtaW4tc3Rva3ZlbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSxhQUFBO0VBQ0EsaUJBQUE7QUNGRjs7QURLQTtFQUNFLGFBQUE7RUFBZSxtQkFBQTtFQUFxQiw4QkFBQTtFQUNwQyxtQkFBQTtBQ0FGO0FERUU7RUFDRSxhQUFBO0VBQWUsbUJBQUE7RUFBcUIsU0FBQTtFQUNwQyxpQkFBQTtFQUFtQixnQkFBQTtFQUFrQixTQUFBO0VBQVcsY0FBQTtBQ0twRDtBREpJO0VBQVcsY0FBQTtBQ09mO0FESkU7RUFBYSxlQUFBO0VBQWlCLFdBQUE7QUNRaEM7O0FETEE7RUFDRSxhQUFBO0VBQWUsc0JBQUE7RUFBd0IsbUJBQUE7RUFDdkMsYUFBQTtFQUFlLFdBQUE7QUNXakI7QURWRTtFQUFXLGVBQUE7RUFBaUIsWUFBQTtFQUFjLFdBQUE7RUFBYSxtQkFBQTtFQUFxQixjQUFBO0FDaUI5RTs7QURiQTtFQUNFLGFBQUE7RUFDQSwyREFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtBQ2dCRjs7QURiQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EseUNBQUE7QUNnQkY7QURkRTtFQUNFLFdBQUE7RUFBYSxZQUFBO0VBQ2IsbUJBQUE7RUFDQSxhQUFBO0VBQWUsbUJBQUE7RUFBcUIsdUJBQUE7RUFDcEMsbUJBQUE7QUNtQko7QURsQkk7RUFBVyxlQUFBO0VBQWlCLFlBQUE7RUFBYyxXQUFBO0VBQWEsV0FBQTtBQ3dCM0Q7QUR0Qkk7RUFBVyxtQkFBQTtBQ3lCZjtBRHhCSTtFQUFXLG1CQUFBO0FDMkJmO0FEMUJJO0VBQVcsbUJBQUE7QUM2QmY7QUQ1Qkk7RUFBVyxtQkFBQTtBQytCZjtBRDVCRTtFQUFhLGVBQUE7RUFBaUIsZ0JBQUE7RUFBa0IsY0FBQTtBQ2lDbEQ7QURoQ0U7RUFBYSxlQUFBO0VBQWlCLGdCQUFBO0VBQWtCLFdBQUE7RUFBYSxrQkFBQTtBQ3NDL0Q7QURyQ0U7RUFBYSxlQUFBO0VBQWlCLFdBQUE7QUN5Q2hDOztBRHJDQTtFQUNFLGFBQUE7RUFBZSxtQkFBQTtFQUFxQixRQUFBO0VBQ3BDLGVBQUE7RUFBaUIsZ0JBQUE7RUFBa0IsY0FBQTtFQUNuQyxrQkFBQTtBQzRDRjtBRDNDRTtFQUFXLGNBQUE7QUM4Q2I7O0FEMUNBO0VBQ0UsYUFBQTtFQUNBLDJEQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0FDNkNGOztBRDFDQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EseUNBQUE7QUM2Q0Y7QUQzQ0U7RUFBYSxlQUFBO0VBQWlCLFdBQUE7RUFBYSxrQkFBQTtBQ2dEN0M7QUQvQ0U7RUFBYSxpQkFBQTtFQUFtQixnQkFBQTtFQUFrQixjQUFBO0VBQ3JDLGFBQUE7RUFBZSxtQkFBQTtFQUFxQixRQUFBO0FDc0RuRDtBRHBERTtFQUNFLGVBQUE7RUFBaUIsZ0JBQUE7RUFBa0IsZ0JBQUE7RUFDbkMsbUJBQUE7RUFBcUIscUJBQUE7QUN5RHpCO0FEeERJO0VBQVEsbUJBQUE7RUFBcUIsY0FBQTtBQzREakM7QUQzREk7RUFBUSxtQkFBQTtFQUFxQixjQUFBO0FDK0RqQztBRDVERTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQzhESjtBRDNERTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7QUM2REo7QUQ1REk7RUFBWSxtQkFBQTtBQytEaEI7QUQ1REU7RUFBVyxlQUFBO0VBQWlCLFdBQUE7QUNnRTlCOztBRDVEQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5Q0FBQTtFQUNBLGdCQUFBO0FDK0RGOztBRDVEQTtFQUNFLGFBQUE7RUFDQSx5REFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtBQytERjs7QUQ1REE7RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0FDK0RGOztBRDVEQTtFQUNFLDZCQUFBO0FDK0RGO0FEOURFO0VBQVUsbUJBQUE7QUNpRVo7O0FEOURBO0VBQVEsZ0JBQUE7RUFBa0IsY0FBQTtBQ21FMUI7O0FEbEVBO0VBQVMsZ0JBQUE7QUNzRVQ7O0FEckVBO0VBQVMsV0FBQTtBQ3lFVDs7QUR2RUE7RUFDRSxlQUFBO0VBQWlCLGdCQUFBO0VBQ2pCLGlCQUFBO0VBQW1CLG1CQUFBO0FDNEVyQjtBRDNFRTtFQUFlLG1CQUFBO0VBQXFCLGNBQUE7QUMrRXRDO0FEOUVFO0VBQWUsbUJBQUE7RUFBcUIsY0FBQTtBQ2tGdEM7QURqRkU7RUFBZSxtQkFBQTtFQUFxQixjQUFBO0FDcUZ0Qzs7QURsRkE7RUFDRSxXQUFBO0VBQWEsYUFBQTtFQUFlLG1CQUFBO0FDdUY5QjtBRHRGRTtFQUFXLGVBQUE7RUFBaUIsWUFBQTtFQUFjLFdBQUE7QUMyRjVDO0FEMUZFO0VBQVUsY0FBQTtBQzZGWjs7QUQxRkE7RUFDRSxrQkFBQTtFQUFvQixhQUFBO0VBQWUsV0FBQTtFQUFhLGVBQUE7QUNnR2xEOztBQS9QQTtFQUFjLG1CQUFBO0FBbVFkOztBQWxRQTtFQUFnQixZQUFBO0FBc1FoQjs7QUFyUUE7RUFDRSxtQkFBQTtFQUFxQixjQUFBO0VBQ3JCLGVBQUE7RUFBaUIsZ0JBQUE7RUFDakIsaUJBQUE7RUFBbUIsbUJBQUE7QUEyUXJCOztBQXZRQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5Q0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUEwUUY7O0FBdlFBO0VBQ0UsYUFBQTtFQUNBLGtFQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0FBMFFGOztBQXZRQTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7RUFBa0IsZUFBQTtFQUNsQixXQUFBO0VBQWEseUJBQUE7RUFBMkIscUJBQUE7QUE2UTFDOztBQTFRQTtFQUNFLDZCQUFBO0VBQ0EsZUFBQTtFQUFpQiwyQkFBQTtBQThRbkI7QUE3UUU7RUFBVSxtQkFBQTtBQWdSWjtBQS9RRTtFQUFhLG1CQUFBO0FBa1JmOztBQS9RQTtFQUFVLGdCQUFBO0VBQWtCLGNBQUE7QUFvUjVCOztBQW5SQTtFQUFTLFdBQUE7RUFBYSxlQUFBO0FBd1J0Qjs7QUF2UkE7RUFBZSxtQkFBQTtFQUFxQixnQkFBQTtFQUFrQix1QkFBQTtBQTZSdEQ7O0FBM1JBO0VBQ0UsZUFBQTtFQUFpQixnQkFBQTtFQUNqQixpQkFBQTtFQUFtQixtQkFBQTtBQWdTckI7QUEvUkU7RUFBZSxtQkFBQTtFQUFxQixjQUFBO0FBbVN0QztBQWxTRTtFQUFlLG1CQUFBO0VBQXFCLGNBQUE7QUFzU3RDO0FBclNFO0VBQWUsbUJBQUE7RUFBcUIsY0FBQTtBQXlTdEM7O0FBdFNBO0VBQ0UsZUFBQTtFQUFpQixnQkFBQTtFQUNqQixpQkFBQTtFQUFtQixtQkFBQTtBQTJTckI7QUExU0U7RUFBb0IsbUJBQUE7RUFBcUIsY0FBQTtBQThTM0M7QUE3U0U7RUFBb0IsbUJBQUE7RUFBcUIsY0FBQTtBQWlUM0M7O0FBOVNBO0VBQ0UsZUFBQTtFQUFpQixjQUFBO0VBQWdCLGdCQUFBO0FBbVRuQzs7QUFoVEE7RUFBZSxXQUFBO0VBQWEsZUFBQTtFQUFpQixZQUFBO0VBQWMsV0FBQTtBQXVUM0Q7O0FBcFRBO0VBQ0UsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QUF1VEY7O0FBcFRBO0VBQ0UsYUFBQTtFQUNBLDJEQUFBO0VBQ0EsU0FBQTtBQXVURjs7QUFuVEU7RUFBSyxlQUFBO0VBQWlCLGdCQUFBO0VBQWtCLGNBQUE7RUFBZ0IsZ0JBQUE7RUFDbkQseUJBQUE7RUFBMkIscUJBQUE7QUEyVGxDOztBQXhUQTtFQUNFLGFBQUE7RUFBZSw4QkFBQTtFQUFnQyx1QkFBQTtFQUMvQyxjQUFBO0VBQWdCLGVBQUE7RUFDaEIsZ0NBQUE7RUFDQSxRQUFBO0FBOFRGO0FBNVRFO0VBQW1CLFdBQUE7RUFBYSxjQUFBO0FBZ1VsQztBQS9URTtFQUFtQixjQUFBO0VBQWdCLGdCQUFBO0VBQWtCLGlCQUFBO0FBb1V2RDtBQWxVRTtFQUFPLGNBQUE7QUFxVVQ7QUFwVUU7RUFBTyxXQUFBO0FBdVVUO0FBdFVFO0VBQVEsc0JBQUE7RUFBd0IsZUFBQTtBQTBVbEM7O0FBdlVBO0VBQ0UsYUFBQTtFQUFlLHVCQUFBO0VBQXlCLFNBQUE7RUFDeEMsY0FBQTtFQUFnQixnQ0FBQTtBQTZVbEI7QUEzVUU7RUFDRSxXQUFBO0VBQWEsWUFBQTtFQUFjLGtCQUFBO0VBQzNCLG1CQUFBO0VBQXFCLGNBQUE7RUFDckIsYUFBQTtFQUFlLG1CQUFBO0VBQXFCLHVCQUFBO0VBQ3BDLGVBQUE7RUFBaUIsZ0JBQUE7RUFBa0IsY0FBQTtBQW9WdkM7QUFqVkU7RUFBZSxnQkFBQTtFQUFrQixlQUFBO0FBcVZuQztBQXBWRTtFQUFlLGVBQUE7RUFBaUIsV0FBQTtBQXdWbEM7QUF2VkU7RUFBZSxlQUFBO0VBQWlCLFdBQUE7QUEyVmxDOztBQXZWQTtFQUNFLGFBQUE7RUFBZSxtQkFBQTtFQUFxQix1QkFBQTtFQUF5QixTQUFBO0VBQzdELGVBQUE7RUFDQSxlQUFBO0VBQWlCLFdBQUE7QUE4Vm5COztBQTNWQTtFQUNFLGtCQUFBO0VBQW9CLGFBQUE7QUErVnRCO0FBOVZFO0VBQVcsZUFBQTtFQUFpQixZQUFBO0VBQWMsV0FBQTtFQUFhLFdBQUE7QUFvV3pEO0FBbldFO0VBQUksV0FBQTtFQUFhLGVBQUE7QUF1V25CIiwic291cmNlc0NvbnRlbnQiOlsiQHVzZSAnc2Fzczpjb2xvcic7XHJcblxyXG4vLyBzaGFyZWQgYWRtaW4gcGFnZSBzdHlsZXNcclxuLmFkbWluLXBhZ2Uge1xyXG4gIHBhZGRpbmc6IDMycHg7XHJcbiAgbWF4LXdpZHRoOiAxNDAwcHg7XHJcbn1cclxuXHJcbi5wYWdlLWhlYWRlciB7XHJcbiAgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIG1hcmdpbi1ib3R0b206IDI4cHg7XHJcblxyXG4gIGgxIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGdhcDogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtOyBmb250LXdlaWdodDogODAwOyBtYXJnaW46IDA7IGNvbG9yOiAjMWExYTJlO1xyXG4gICAgbWF0LWljb24geyBjb2xvcjogIzRhZGU4MDsgfVxyXG4gIH1cclxuXHJcbiAgLnRpbWVzdGFtcCB7IGZvbnQtc2l6ZTogMTJweDsgY29sb3I6ICM5OTk7IH1cclxufVxyXG5cclxuLmxvYWRpbmctc3RhdGUsIC5lcnJvci1zdGF0ZSB7XHJcbiAgZGlzcGxheTogZmxleDsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nOiA2MHB4OyBjb2xvcjogIzg4ODtcclxuICBtYXQtaWNvbiB7IGZvbnQtc2l6ZTogNDBweDsgaGVpZ2h0OiA0MHB4OyB3aWR0aDogNDBweDsgbWFyZ2luLWJvdHRvbTogMTJweDsgY29sb3I6ICNlNTM5MzU7IH1cclxufVxyXG5cclxuLy8gw6LClMKAw6LClMKAIEtQSSBncmlkIMOiwpTCgMOiwpTCgFxyXG4ua3BpLWdyaWQge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyMjBweCwgMWZyKSk7XHJcbiAgZ2FwOiAxNnB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDI4cHg7XHJcbn1cclxuXHJcbi5rcGktY2FyZCB7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIHBhZGRpbmc6IDI0cHg7XHJcbiAgYm94LXNoYWRvdzogMCAxcHggNHB4IHJnYmEoMCwwLDAsLjA4KTtcclxuXHJcbiAgLmtwaS1pY29uIHtcclxuICAgIHdpZHRoOiA0NHB4OyBoZWlnaHQ6IDQ0cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xyXG4gICAgbWF0LWljb24geyBmb250LXNpemU6IDIycHg7IGhlaWdodDogMjJweDsgd2lkdGg6IDIycHg7IGNvbG9yOiAjZmZmOyB9XHJcblxyXG4gICAgJi5ncmVlbiAgeyBiYWNrZ3JvdW5kOiAjMmU3ZDMyOyB9XHJcbiAgICAmLmJsdWUgICB7IGJhY2tncm91bmQ6ICMxNTY1YzA7IH1cclxuICAgICYub3JhbmdlIHsgYmFja2dyb3VuZDogI2U2NTEwMDsgfVxyXG4gICAgJi5wdXJwbGUgeyBiYWNrZ3JvdW5kOiAjNmExYjlhOyB9XHJcbiAgfVxyXG5cclxuICAua3BpLXZhbCAgIHsgZm9udC1zaXplOiAycmVtOyBmb250LXdlaWdodDogODAwOyBjb2xvcjogIzFhMWEyZTsgfVxyXG4gIC5rcGktbGFiZWwgeyBmb250LXNpemU6IDEzcHg7IGZvbnQtd2VpZ2h0OiA2MDA7IGNvbG9yOiAjNTU1OyBtYXJnaW4tYm90dG9tOiA0cHg7IH1cclxuICAua3BpLXN1YiAgIHsgZm9udC1zaXplOiAxMnB4OyBjb2xvcjogIzg4ODsgfVxyXG59XHJcblxyXG4vLyDDosKUwoDDosKUwoAgU2VjdGlvbiB0aXRsZSDDosKUwoDDosKUwoBcclxuLnNlY3Rpb24tdGl0bGUge1xyXG4gIGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGdhcDogOHB4O1xyXG4gIGZvbnQtc2l6ZTogMXJlbTsgZm9udC13ZWlnaHQ6IDcwMDsgY29sb3I6ICMxYTFhMmU7XHJcbiAgbWFyZ2luOiA4cHggMCAxNnB4O1xyXG4gIG1hdC1pY29uIHsgY29sb3I6ICM2YTFiOWE7IH1cclxufVxyXG5cclxuLy8gw6LClMKAw6LClMKAIFJldmVudWUgZ3JpZCDDosKUwoDDosKUwoBcclxuLnJldmVudWUtZ3JpZCB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDIwMHB4LCAxZnIpKTtcclxuICBnYXA6IDE2cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjhweDtcclxufVxyXG5cclxuLnJldi1jYXJkIHtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBib3gtc2hhZG93OiAwIDFweCA0cHggcmdiYSgwLDAsMCwuMDgpO1xyXG5cclxuICAucmV2LWxhYmVsIHsgZm9udC1zaXplOiAxMnB4OyBjb2xvcjogIzc3NzsgbWFyZ2luLWJvdHRvbTogNnB4OyB9XHJcbiAgLnJldi12YWwgICB7IGZvbnQtc2l6ZTogMS41cmVtOyBmb250LXdlaWdodDogODAwOyBjb2xvcjogIzFhMWEyZTtcclxuICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZ2FwOiA4cHg7IH1cclxuXHJcbiAgLnJldi1iYWRnZSB7XHJcbiAgICBmb250LXNpemU6IDEwcHg7IGZvbnQtd2VpZ2h0OiA3MDA7IHBhZGRpbmc6IDJweCA4cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4OyBsZXR0ZXItc3BhY2luZzogLjVweDtcclxuICAgICYucHJvIHsgYmFja2dyb3VuZDogI2UzZjJmZDsgY29sb3I6ICMxNTY1YzA7IH1cclxuICAgICYuYml6IHsgYmFja2dyb3VuZDogI2YzZTVmNTsgY29sb3I6ICM2YTFiOWE7IH1cclxuICB9XHJcblxyXG4gIC5yZXYtcHJvZ3Jlc3Mge1xyXG4gICAgYmFja2dyb3VuZDogI2VlZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGhlaWdodDogNnB4O1xyXG4gICAgbWFyZ2luOiAxMHB4IDAgNHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB9XHJcblxyXG4gIC5yZXYtYmFyIHtcclxuICAgIGJhY2tncm91bmQ6ICMxNTY1YzA7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICB0cmFuc2l0aW9uOiB3aWR0aCAuNHM7XHJcbiAgICAmLmJpei1iYXIgeyBiYWNrZ3JvdW5kOiAjNmExYjlhOyB9XHJcbiAgfVxyXG5cclxuICAucmV2LXBjdCB7IGZvbnQtc2l6ZTogMTFweDsgY29sb3I6ICM4ODg7IH1cclxufVxyXG5cclxuLy8gw6LClMKAw6LClMKAIFRvcCB0YWJsZSDDosKUwoDDosKUwoBcclxuLnRvcC10YWJsZSB7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIGJveC1zaGFkb3c6IDAgMXB4IDRweCByZ2JhKDAsMCwwLC4wOCk7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLnR0LWhlYWQsIC50dC1yb3cge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA0MHB4IDFmciAxMDBweCA4MHB4IDEyMHB4IDFmciA0OHB4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMTJweCAyMHB4O1xyXG4gIGdhcDogMTJweDtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbn1cclxuXHJcbi50dC1oZWFkIHtcclxuICBiYWNrZ3JvdW5kOiAjZjVmNWY1O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgY29sb3I6ICM1NTU7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IC40cHg7XHJcbn1cclxuXHJcbi50dC1yb3cge1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZjBmMGYwO1xyXG4gICY6aG92ZXIgeyBiYWNrZ3JvdW5kOiAjZmFmYWZhOyB9XHJcbn1cclxuXHJcbi5yYW5rIHsgZm9udC13ZWlnaHQ6IDcwMDsgY29sb3I6ICMxYTFhMmU7IH1cclxuLnNuYW1lIHsgZm9udC13ZWlnaHQ6IDYwMDsgfVxyXG4ubXV0ZWQgeyBjb2xvcjogIzg4ODsgfVxyXG5cclxuLnR5cGUtY2hpcCB7XHJcbiAgZm9udC1zaXplOiAxMXB4OyBmb250LXdlaWdodDogNzAwO1xyXG4gIHBhZGRpbmc6IDJweCAxMHB4OyBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICYucm90YXRpb25hbCB7IGJhY2tncm91bmQ6ICNlM2YyZmQ7IGNvbG9yOiAjMTU2NWMwOyB9XHJcbiAgJi5zYXZpbmdzICAgIHsgYmFja2dyb3VuZDogI2U4ZjVlOTsgY29sb3I6ICMyZTdkMzI7IH1cclxuICAmLmludmVzdG1lbnQgeyBiYWNrZ3JvdW5kOiAjZmZmM2UwOyBjb2xvcjogI2U2NTEwMDsgfVxyXG59XHJcblxyXG4udmlldy1saW5rIHtcclxuICBjb2xvcjogIzg4ODsgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXQtaWNvbiB7IGZvbnQtc2l6ZTogMThweDsgaGVpZ2h0OiAxOHB4OyB3aWR0aDogMThweDsgfVxyXG4gICY6aG92ZXIgeyBjb2xvcjogIzE1NjVjMDsgfVxyXG59XHJcblxyXG4udHQtZW1wdHkge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjsgcGFkZGluZzogMzJweDsgY29sb3I6ICNhYWE7IGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuIiwiQGltcG9ydCAnLi4vYWRtaW4tZGFzaGJvYXJkL2FkbWluLWRhc2hib2FyZC5jb21wb25lbnQnO1xyXG5cclxuLnNlYXJjaC1iYXIgeyBtYXJnaW4tYm90dG9tOiAxNnB4OyB9XHJcbi5zZWFyY2gtZmllbGQgeyB3aWR0aDogMzIwcHg7IH1cclxuLnRvdGFsLWJhZGdlIHtcclxuICBiYWNrZ3JvdW5kOiAjZThmNWU5OyBjb2xvcjogIzJlN2QzMjtcclxuICBmb250LXNpemU6IDEycHg7IGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgcGFkZGluZzogNHB4IDEycHg7IGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbn1cclxuXHJcbi8vIFRhYmxlXHJcbi5zdG9rdmVscy10YWJsZSB7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIGJveC1zaGFkb3c6IDAgMXB4IDRweCByZ2JhKDAsMCwwLC4wOCk7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG59XHJcblxyXG4uc3QtaGVhZCwgLnN0LXJvdyB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciA5MHB4IDgwcHggODBweCAxMjBweCA5MHB4IDFmciA5MHB4IDM2cHg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAxMnB4IDIwcHg7XHJcbiAgZ2FwOiAxMnB4O1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxufVxyXG5cclxuLnN0LWhlYWQge1xyXG4gIGJhY2tncm91bmQ6ICNmNWY1ZjU7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDsgZm9udC1zaXplOiAxMnB4O1xyXG4gIGNvbG9yOiAjNTU1OyB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyBsZXR0ZXItc3BhY2luZzogLjRweDtcclxufVxyXG5cclxuLnN0LXJvdyB7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNmMGYwZjA7XHJcbiAgY3Vyc29yOiBwb2ludGVyOyB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIC4xcztcclxuICAmOmhvdmVyIHsgYmFja2dyb3VuZDogI2ZhZmFmYTsgfVxyXG4gICYuZXhwYW5kZWQgeyBiYWNrZ3JvdW5kOiAjZjBmN2ZmOyB9XHJcbn1cclxuXHJcbi5zLW5hbWUgeyBmb250LXdlaWdodDogNjAwOyBjb2xvcjogIzFhMWEyZTsgfVxyXG4ubXV0ZWQgeyBjb2xvcjogIzg4ODsgZm9udC1zaXplOiAxMnB4OyB9XHJcbi5hZG1pbnMtY2VsbCB7IHdoaXRlLXNwYWNlOiBub3dyYXA7IG92ZXJmbG93OiBoaWRkZW47IHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzOyB9XHJcblxyXG4udHlwZS1jaGlwIHtcclxuICBmb250LXNpemU6IDExcHg7IGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgcGFkZGluZzogMnB4IDEwcHg7IGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgJi5yb3RhdGlvbmFsIHsgYmFja2dyb3VuZDogI2UzZjJmZDsgY29sb3I6ICMxNTY1YzA7IH1cclxuICAmLnNhdmluZ3MgICAgeyBiYWNrZ3JvdW5kOiAjZThmNWU5OyBjb2xvcjogIzJlN2QzMjsgfVxyXG4gICYuaW52ZXN0bWVudCB7IGJhY2tncm91bmQ6ICNmZmYzZTA7IGNvbG9yOiAjZTY1MTAwOyB9XHJcbn1cclxuXHJcbi5zdGF0dXMtY2hpcCB7XHJcbiAgZm9udC1zaXplOiAxMXB4OyBmb250LXdlaWdodDogNzAwO1xyXG4gIHBhZGRpbmc6IDJweCAxMHB4OyBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICYuc3RhdHVzLWFjdGl2ZSAgIHsgYmFja2dyb3VuZDogI2U4ZjVlOTsgY29sb3I6ICMyZTdkMzI7IH1cclxuICAmLnN0YXR1cy1pbmFjdGl2ZSB7IGJhY2tncm91bmQ6ICNmZmViZWU7IGNvbG9yOiAjYzYyODI4OyB9XHJcbn1cclxuXHJcbi5wZW5kaW5nLWJhZGdlIHtcclxuICBmb250LXNpemU6IDExcHg7IGNvbG9yOiAjZjU3YzAwOyBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4uZXhwYW5kLWljb24geyBjb2xvcjogI2NjYzsgZm9udC1zaXplOiAyMHB4OyBoZWlnaHQ6IDIwcHg7IHdpZHRoOiAyMHB4OyB9XHJcblxyXG4vLyBEZXRhaWwgcGFuZWxcclxuLnN0LWRldGFpbCB7XHJcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICNlM2YyZmQ7XHJcbiAgYmFja2dyb3VuZDogI2Y4ZmJmZjtcclxuICBwYWRkaW5nOiAyNHB4O1xyXG59XHJcblxyXG4uZGV0YWlsLWdyaWQge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyNDBweCwgMWZyKSk7XHJcbiAgZ2FwOiAyNHB4O1xyXG59XHJcblxyXG4uZGV0YWlsLXNlY3Rpb24ge1xyXG4gIGg0IHsgZm9udC1zaXplOiAxM3B4OyBmb250LXdlaWdodDogNzAwOyBjb2xvcjogIzFhMWEyZTsgbWFyZ2luOiAwIDAgMTJweDtcclxuICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7IGxldHRlci1zcGFjaW5nOiAuNHB4OyB9XHJcbn1cclxuXHJcbi5kZXRhaWwtcm93IHtcclxuICBkaXNwbGF5OiBmbGV4OyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gIHBhZGRpbmc6IDZweCAwOyBmb250LXNpemU6IDEzcHg7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZWYwZjI7XHJcbiAgZ2FwOiA4cHg7XHJcblxyXG4gIHNwYW46Zmlyc3QtY2hpbGQgeyBjb2xvcjogIzc3NzsgZmxleC1zaHJpbms6IDA7IH1cclxuICBzcGFuOmxhc3QtY2hpbGQgIHsgY29sb3I6ICMxYTFhMmU7IGZvbnQtd2VpZ2h0OiA1MDA7IHRleHQtYWxpZ246IHJpZ2h0OyB9XHJcblxyXG4gIC55ZXMgeyBjb2xvcjogIzJlN2QzMjsgfVxyXG4gIC5ubyAgeyBjb2xvcjogIzg4ODsgfVxyXG4gIC5tb25vIHsgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTsgZm9udC1zaXplOiAxMXB4OyB9XHJcbn1cclxuXHJcbi5hZG1pbi1jaGlwIHtcclxuICBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogZmxleC1zdGFydDsgZ2FwOiAxMHB4O1xyXG4gIHBhZGRpbmc6IDhweCAwOyBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VlZjBmMjtcclxuXHJcbiAgLmFkbWluLWF2IHtcclxuICAgIHdpZHRoOiAzMnB4OyBoZWlnaHQ6IDMycHg7IGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJhY2tncm91bmQ6ICMxYTFhMmU7IGNvbG9yOiAjNGFkZTgwO1xyXG4gICAgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDEzcHg7IGZvbnQtd2VpZ2h0OiA3MDA7IGZsZXgtc2hyaW5rOiAwO1xyXG4gIH1cclxuXHJcbiAgLmFkbWluLW5hbWUgIHsgZm9udC13ZWlnaHQ6IDYwMDsgZm9udC1zaXplOiAxM3B4OyB9XHJcbiAgLmFkbWluLWVtYWlsIHsgZm9udC1zaXplOiAxMnB4OyBjb2xvcjogIzc3NzsgfVxyXG4gIC5hZG1pbi1qb2luZWR7IGZvbnQtc2l6ZTogMTFweDsgY29sb3I6ICNhYWE7IH1cclxufVxyXG5cclxuLy8gUGFnaW5hdGlvblxyXG4ucGFnaW5hdGlvbiB7XHJcbiAgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IGdhcDogMTZweDtcclxuICBwYWRkaW5nOiAxNnB4IDA7XHJcbiAgZm9udC1zaXplOiAxNHB4OyBjb2xvcjogIzU1NTtcclxufVxyXG5cclxuLmVtcHR5LXN0YXRlIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7IHBhZGRpbmc6IDQ4cHg7XHJcbiAgbWF0LWljb24geyBmb250LXNpemU6IDQwcHg7IGhlaWdodDogNDBweDsgd2lkdGg6IDQwcHg7IGNvbG9yOiAjY2NjOyB9XHJcbiAgcCB7IGNvbG9yOiAjYWFhOyBtYXJnaW4tdG9wOiA4cHg7IH1cclxufVxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  }));
}
_staticBlock();

/***/ })

}]);
//# sourceMappingURL=src_app_pages_admin_admin-stokvels_admin-stokvels_component_ts.js.map