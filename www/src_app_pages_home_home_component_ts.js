"use strict";
(self["webpackChunkestokvel_ui"] = self["webpackChunkestokvel_ui"] || []).push([["src_app_pages_home_home_component_ts"],{

/***/ 5047:
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeComponent: () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var src_app_material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/material.module */ 9439);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 3942);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 2157);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 271);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/animations */ 1351);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 4487);
/* harmony import */ var _components_stokvel_join_join_stokvel_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/stokvel-join/join-stokvel-modal */ 3570);
/* harmony import */ var _components_dashboard_stats_util__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/dashboard/stats.util */ 5329);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 2481);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 5422);
/* harmony import */ var _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @auth0/auth0-angular */ 7989);
/* harmony import */ var _services_user_user_service_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../services/user/user-service.service */ 2915);
/* harmony import */ var _services_stokvel_stokvel_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../services/stokvel/stokvel.service */ 7093);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/dialog */ 7760);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common/http */ 3855);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/icon */ 3840);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/paginator */ 4624);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/tooltip */ 9710);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/progress-spinner */ 1134);
var _staticBlock;





















const _c0 = () => [3, 6];
const _c1 = () => [1, 2, 3, 4, 5];
function HomeComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "button", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function HomeComponent_Conditional_21_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r1.login());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, "rocket_launch");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3, " Get Started Free ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function HomeComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "button", 14)(1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, "dashboard");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3, " Go to Dashboard ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function HomeComponent_div_186_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "div", 93);
  }
}
function HomeComponent_div_186_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 89)(1, "div", 90)(2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](10, HomeComponent_div_186_div_10_Template, 1, 0, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const step_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    const last_r5 = ctx.last;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](step_r3.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("0", i_r4 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](step_r3.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](step_r3.desc);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !last_r5);
  }
}
function HomeComponent_div_196_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](8, "div", 96)(9, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](10, "arrow_forward");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const t_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", t_r6.bannerClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](t_r6.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](t_r6.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](t_r6.desc);
  }
}
function HomeComponent_div_271_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "mat-spinner", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3, "Loading stokvels\u2026");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
}
function HomeComponent_div_272_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 99)(1, "div", 100)(2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3, "savings");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5, "No stokvels yet");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](7, "Be the first to create one!");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](8, "button", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function HomeComponent_div_272_Template_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r7);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r1.createNewStokvel());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](9, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](10, "add_circle");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](11, " Create Stokvel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
}
function HomeComponent_div_273_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function HomeComponent_div_273_div_1_Template_div_click_0_listener() {
      const s_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r8).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r1.openCampaign(s_r9));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "div", 105)(2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "span", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "div", 107)(7, "div", 108)(8, "span", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](10, "span", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](12, "div", 111)(13, "span", 112)(14, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](17, "span", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](18, "\u00B7");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](19, "span", 114)(20, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](21, "person");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](23, "p", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](25, "div", 116)(26, "span", 117)(27, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](28, "group");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](30, "span", 118)(31, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](32, "payments");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](34, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](35, "span", 117)(36, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](37, "event_repeat");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](39, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](40, "div", 119)(41, "div", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](42, "div", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](43, "span", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](44);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](45, "div", 123)(46, "button", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function HomeComponent_div_273_div_1_Template_button_click_46_listener($event) {
      const s_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r8).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      ctx_r1.joinStokvel(s_r9);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](47, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](48, "group_add");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](49, "button", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function HomeComponent_div_273_div_1_Template_button_click_49_listener($event) {
      const s_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r8).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      ctx_r1.openCampaign(s_r9);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](50, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](51, "chevron_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const s_r9 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", ctx_r1.getTypeBannerClass(s_r9.type));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r1.getTypeIcon(s_r9.type));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r1.getTypeLabel(s_r9.type));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](s_r9.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassProp"]("pill-active", (s_r9.status == null ? null : s_r9.status.toLowerCase()) === "active");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", s_r9.status, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassProp"]("privacy-public", s_r9.privacy === "PUBLIC");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](s_r9.privacy === "PUBLIC" ? "public" : "lock");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", s_r9.privacy === "PUBLIC" ? "Open to all" : "Invite only", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", s_r9.createdBy, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](s_r9.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate2"](" ", ctx_r1.stokvelMemberCount(s_r9), "/", s_r9.maxMembers, " members ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" R", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](34, 24, s_r9.monthlyContribution), "/mo ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](39, 26, s_r9.payoutCycle), " payout ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵstyleProp"]("width", ctx_r1.stokvelMemberCount(s_r9) / s_r9.maxMembers * 100, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassProp"]("seats-full", ctx_r1.stokvelMemberCount(s_r9) >= s_r9.maxMembers);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassProp"]("seats-full-label", ctx_r1.stokvelMemberCount(s_r9) >= s_r9.maxMembers);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", s_r9.maxMembers - ctx_r1.stokvelMemberCount(s_r9) > 0 ? s_r9.maxMembers - ctx_r1.stokvelMemberCount(s_r9) + " seat" + (s_r9.maxMembers - ctx_r1.stokvelMemberCount(s_r9) !== 1 ? "s" : "") + " available" : "Group full", " ");
  }
}
function HomeComponent_div_273_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, HomeComponent_div_273_div_1_Template, 52, 28, "div", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r1.pagedStokvels);
  }
}
function HomeComponent_div_274_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 126)(1, "mat-paginator", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("page", function HomeComponent_div_274_Template_mat_paginator_page_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r10);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r1.onPageChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("length", ctx_r1.totalStokvels)("pageSize", ctx_r1.pageSize)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](4, _c0))("pageIndex", ctx_r1.currentPage);
  }
}
function HomeComponent_div_282_mat_icon_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "star");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function HomeComponent_div_282_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 128)(1, "div", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](2, HomeComponent_div_282_mat_icon_2_Template, 2, 0, "mat-icon", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "div", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "div", 132)(6, "div", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](8, "div")(9, "div", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](11, "div", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const t_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](7, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("\"", t_r11.quote, "\"");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵstyleProp"]("background", t_r11.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](t_r11.initials);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](t_r11.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](t_r11.role);
  }
}
class HomeComponent {
  constructor(router, authService, userService, stokvelService, dialog, snackBar, http) {
    this.router = router;
    this.authService = authService;
    this.userService = userService;
    this.stokvelService = stokvelService;
    this.dialog = dialog;
    this.snackBar = snackBar;
    this.http = http;
    this.today = new Date();
    this.currentIndex = 0;
    this.pageSize = 3;
    this.currentPage = 0;
    this.totalStokvels = 0;
    this.pagedStokvels = [];
    this.isLoading = true;
    this.images = ['assets/hero/hero1.png', 'assets/hero/hero2.png', 'assets/hero/hero3.png'];
    this.userName$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Observable();
    this.searchValue = '';
    /** Floating particles for hero background */
    this.particles = Array.from({
      length: 20
    }, () => ({
      x: Math.random() * 100 + '%',
      y: Math.random() * 100 + '%',
      delay: (Math.random() * 6).toFixed(1) + 's',
      duration: (4 + Math.random() * 6).toFixed(1) + 's'
    }));
    this.steps = [{
      icon: 'person_add',
      title: 'Create Account',
      desc: 'Sign up free in under 60 seconds. No paperwork.'
    }, {
      icon: 'group_add',
      title: 'Form Your Group',
      desc: 'Invite members or join an existing public stokvel.'
    }, {
      icon: 'payments',
      title: 'Contribute',
      desc: 'Set up recurring digital contributions easily.'
    }, {
      icon: 'celebration',
      title: 'Receive Payouts',
      desc: 'Get your lump-sum payout on your scheduled rotation.'
    }];
    this.stokvelTypes = [{
      icon: 'trending_up',
      name: 'Investment Club',
      desc: 'Pool resources to invest together.',
      bannerClass: 'banner-investment'
    }, {
      icon: 'home',
      name: 'Property Stokvel',
      desc: 'Save collectively for real estate goals.',
      bannerClass: 'banner-property'
    }, {
      icon: 'diversity_3',
      name: 'Family Fund',
      desc: 'Family-centred financial support savings.',
      bannerClass: 'banner-family'
    }, {
      icon: 'favorite',
      name: 'Burial Society',
      desc: 'Dignified cover for unexpected costs.',
      bannerClass: 'banner-burial'
    }, {
      icon: 'autorenew',
      name: 'Rotational Savings',
      desc: 'Classic stokvel: take turns receiving payouts.',
      bannerClass: 'banner-rotational'
    }, {
      icon: 'savings',
      name: 'Contribution',
      desc: 'Regular savings towards a shared goal.',
      bannerClass: 'banner-contribution'
    }, {
      icon: 'agriculture',
      name: 'Livestock',
      desc: 'Group buying power for livestock purchases.',
      bannerClass: 'banner-livestock'
    }, {
      icon: 'celebration',
      name: 'Party / Events',
      desc: 'Fund celebrations and community events.',
      bannerClass: 'banner-party'
    }];
    this.testimonials = [{
      quote: 'eStokvel transformed how our family saves. Transparent, easy and no more chasing people for contributions!',
      name: 'Nomsa Dlamini',
      role: 'Family Fund Admin',
      initials: 'ND',
      color: 'linear-gradient(135deg,#0d47a1,#1565c0)'
    }, {
      quote: 'Our investment club has grown 18% this year. The dashboard makes it so easy to track everything in real time.',
      name: 'Sipho Mkhize',
      role: 'Investment Club Member',
      initials: 'SM',
      color: 'linear-gradient(135deg,#059669,#047857)'
    }, {
      quote: 'Setting up our burial society took minutes. The automated reminders alone are worth it.',
      name: 'Thandeka Mokoena',
      role: 'Group Secretary',
      initials: 'TM',
      color: 'linear-gradient(135deg,#d97706,#b45309)'
    }];
    this.typeImgClassMap = {
      'Savings': 'education-img',
      'Grocery': 'investment-img',
      'Property': 'property-img'
    };
    this.last = rxjs__WEBPACK_IMPORTED_MODULE_4__.last;
    this.length = length;
    this.stokvelMemberCount = _components_dashboard_stats_util__WEBPACK_IMPORTED_MODULE_9__.stokvelMemberCount;
    this.currentUser$ = this.userService.user$;
    this.isAuthenticated$ = this.authService.isAuthenticated$;
  }
  ngOnInit() {
    this.userName$ = this.authService.user$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.map)(user => user?.name || user?.email || null));
    this.loadStokvels();
  }
  loadStokvels() {
    this.isLoading = true;
    this.stokvelService.getPublicStokvels(this.currentPage, this.pageSize).subscribe({
      next: response => {
        this.pagedStokvels = response.content;
        this.totalStokvels = response.totalElements;
        this.isLoading = false;
      },
      error: error => {
        console.error('Error loading stokvels:', error);
        this.isLoading = false;
        this.snackBar.open('Failed to load stokvels. Please try again.', 'Close', {
          duration: 3000
        });
        this.pagedStokvels = [];
        this.totalStokvels = 0;
      }
    });
  }
  onPageChange(event) {
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;
    this.loadStokvels(); // Fetch new page from server
  }
  getImageClass(type) {
    return this.typeImgClassMap[type] || 'default-img';
  }
  search() {
    console.log('Searching for', this.searchValue);
  }
  createNewStokvel() {
    this.router.navigate(['/create-stokvel']);
  }
  startStokvel() {
    console.log('Navigate to start stokvel');
  }
  joinStokvel(stokvel) {
    this.isAuthenticated$.subscribe(isAuthenticated => {
      if (!isAuthenticated) {
        this.authService.loginWithRedirect({
          appState: {
            target: '/home'
          }
        });
        return;
      }
      this.currentUser$.subscribe(user => {
        if (!user?.id) {
          console.error('User ID not available');
          return;
        }
        const dialogRef = this.dialog.open(_components_stokvel_join_join_stokvel_modal__WEBPACK_IMPORTED_MODULE_8__.JoinStokvelModalComponent, {
          width: '600px',
          data: {
            stokvelId: stokvel.id,
            stokvelName: stokvel.name,
            currentUserId: user.id,
            userName: user.name || user.email,
            userProfile: user,
            monthlyContribution: stokvel.monthlyContribution || 0
          }
        });
        dialogRef.afterClosed().subscribe(result => {
          if (result) {
            console.log('Join request submitted successfully');
          }
        });
      });
    });
  }
  learnMore() {
    console.log('Learn more');
  }
  getTypeBannerClass(type) {
    const map = {
      INVESTMENT: 'banner-investment',
      PROPERTY: 'banner-property',
      FAMILY: 'banner-family',
      BURIAL: 'banner-burial',
      ROTATIONAL: 'banner-rotational',
      CONTRIBUTION: 'banner-contribution',
      LIVESTOCK: 'banner-livestock',
      PARTY: 'banner-party'
    };
    return map[type?.toUpperCase()] ?? 'banner-default';
  }
  getTypeIcon(type) {
    const map = {
      INVESTMENT: 'trending_up',
      PROPERTY: 'home',
      FAMILY: 'diversity_3',
      BURIAL: 'favorite',
      ROTATIONAL: 'autorenew',
      CONTRIBUTION: 'savings',
      LIVESTOCK: 'agriculture',
      PARTY: 'celebration'
    };
    return map[type?.toUpperCase()] ?? 'savings';
  }
  getTypeLabel(type) {
    const map = {
      INVESTMENT: 'Investment Club',
      PROPERTY: 'Property Stokvel',
      FAMILY: 'Family Fund',
      BURIAL: 'Burial Society',
      ROTATIONAL: 'Rotational',
      CONTRIBUTION: 'Contribution',
      LIVESTOCK: 'Livestock',
      PARTY: 'Party / Events'
    };
    return map[type?.toUpperCase()] ?? type;
  }
  openCampaign(campaignId) {
    if (campaignId?.id) {
      this.router.navigate(['/stokvels', campaignId.id]);
    }
  }
  login() {
    this.authService.loginWithRedirect({
      appState: {
        target: '/dashboard'
      }
    });
  }
  getCollectedAmount(stokvel) {
    return stokvel.contributionAmount || 0;
  }
  getProgress(stokvel) {
    const collected = this.getCollectedAmount(stokvel);
    return Math.min(collected / (stokvel.targetAmount || 1) * 100);
  }
  getRemainingAmount(stokvel) {
    const remaining = stokvel.targetAmount - this.getCollectedAmount(stokvel);
    return remaining > 0 ? remaining : 0;
  }
  getProgressColor(stokvel) {
    const progress = this.getProgress(stokvel);
    if (progress >= 100) return 'warn';
    if (progress >= 50) return 'accent';
    return 'primary';
  }
  hasReachedGoal(stokvel) {
    return this.getProgress(stokvel) >= 100;
  }
  static #_ = _staticBlock = () => (this.ɵfac = function HomeComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_13__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_services_user_user_service_service__WEBPACK_IMPORTED_MODULE_14__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_services_stokvel_stokvel_service__WEBPACK_IMPORTED_MODULE_15__.StokvelService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_17__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_18__.HttpClient));
  }, this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({
    type: HomeComponent,
    selectors: [["app-home"]],
    decls: 309,
    vars: 10,
    consts: [[1, "hero"], [1, "hero-mesh"], [1, "hero-orbs"], [1, "orb", "orb-a"], [1, "orb", "orb-b"], [1, "orb", "orb-c"], [1, "hero-inner"], [1, "hero-copy"], [1, "hero-eyebrow"], [1, "hero-h1"], [1, "hero-h1-accent"], [1, "hero-sub"], [1, "hero-actions"], [1, "btn-hero-primary"], ["routerLink", "/dashboard", 1, "btn-hero-primary"], ["routerLink", "/stokvels", 1, "btn-hero-ghost"], [1, "hero-social-proof"], [1, "avatars"], [1, "av", 2, "background", "linear-gradient(135deg,#0d47a1,#1565c0)"], [1, "av", 2, "background", "linear-gradient(135deg,#059669,#047857)"], [1, "av", 2, "background", "linear-gradient(135deg,#d97706,#b45309)"], [1, "av", 2, "background", "linear-gradient(135deg,#1565c0,#00897b)"], [1, "hero-stats-card"], [1, "hsc-header"], [1, "hsc-stats"], [1, "hsc-stat"], [1, "hsc-stat-top"], [1, "hsc-val"], [1, "hsc-lbl"], [1, "hsc-bar"], [1, "hsc-fill", 2, "width", "78%"], [1, "hsc-fill", 2, "width", "62%"], [1, "hsc-fill", 2, "width", "98%", "background", "linear-gradient(90deg,#059669,#10b981)"], [1, "hsc-trust"], [1, "hero-pills"], [1, "pill"], [1, "features-section"], [1, "section-header"], [1, "section-eyebrow"], [1, "features-grid"], [1, "feat-card"], [1, "feat-icon-wrap", "navy"], [1, "feat-list"], [1, "feat-card", "featured"], [1, "feat-icon-wrap", "teal"], [1, "feat-icon-wrap", "gold"], [1, "hiw-section"], [1, "section-header", "light"], [1, "hiw-steps"], ["class", "hiw-step", 4, "ngFor", "ngForOf"], [1, "types-section"], [1, "types-grid"], ["class", "type-tile", "routerLink", "/stokvels", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "split-section"], [1, "split-inner"], [1, "split-left"], [1, "split-tagline"], [1, "tag-navy"], [1, "tag-teal"], [1, "tag-gold"], [1, "split-body"], [1, "split-benefits"], ["routerLink", "/stokvel-basics", 1, "btn-learn-more"], [1, "split-right"], [1, "trending-header"], [1, "th-left"], [1, "th-icon"], [1, "trending-sub"], [1, "th-right"], ["matTooltip", "Personal information is protected under POPIA", 1, "popia-badge"], ["routerLink", "/stokvels", 1, "btn-view-all"], ["class", "loading-state", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], ["class", "trending-list", 4, "ngIf"], ["class", "trending-footer", 4, "ngIf"], [1, "testimonials-section"], [1, "testimonials-grid"], ["class", "testi-card", 4, "ngFor", "ngForOf"], [1, "cta-banner"], [1, "cta-bg"], [1, "cta-orb", "cta-orb-a"], [1, "cta-orb", "cta-orb-b"], [1, "cta-content"], [1, "cta-eyebrow"], [1, "cta-actions"], [1, "btn-cta-primary", 3, "click"], ["routerLink", "/create-stokvel", 1, "btn-cta-ghost"], [1, "cta-footnote"], [1, "btn-hero-primary", 3, "click"], [1, "hiw-step"], [1, "hiw-icon-wrap"], [1, "hiw-num"], ["class", "hiw-connector", 4, "ngIf"], [1, "hiw-connector"], ["routerLink", "/stokvels", 1, "type-tile", 3, "ngClass"], [1, "tile-bg-pattern"], [1, "tile-arrow"], [1, "loading-state"], ["diameter", "32"], [1, "empty-state"], [1, "empty-icon-wrap"], [1, "btn-create-first", 3, "click"], [1, "trending-list"], ["class", "trending-card", 3, "click", 4, "ngFor", "ngForOf"], [1, "trending-card", 3, "click"], [1, "tc-badge", 3, "ngClass"], [1, "tc-badge-label"], [1, "tc-info"], [1, "tc-name-row"], [1, "tc-name"], [1, "tc-pill"], [1, "tc-meta"], [1, "tc-privacy"], [1, "tc-dot"], [1, "tc-created-by"], [1, "tc-desc"], [1, "tc-chips"], [1, "tc-chip"], [1, "tc-chip", "tc-chip-gold"], [1, "tc-seats"], [1, "tc-seats-track"], [1, "tc-seats-fill"], [1, "tc-seats-label"], [1, "tc-actions"], ["matTooltip", "Request to Join", 1, "tc-btn-primary", 3, "click"], ["matTooltip", "View Details", 1, "tc-btn-secondary", 3, "click"], [1, "trending-footer"], ["hidePageSize", "", 3, "page", "length", "pageSize", "pageSizeOptions", "pageIndex"], [1, "testi-card"], [1, "testi-stars"], [4, "ngFor", "ngForOf"], [1, "testi-quote"], [1, "testi-author"], [1, "testi-avatar"], [1, "testi-name"], [1, "testi-role"]],
    template: function HomeComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](3, "div", 3)(4, "div", 4)(5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "div", 6)(7, "div", 7)(8, "div", 8)(9, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](10, "verified_user");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](11, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](12, "South Africa's Most Trusted Digital Stokvel");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](13, "h1", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](14, " Save Together.");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](16, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](17, "Grow Together.");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](18, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](19, " Bank-level security, complete transparency and a thriving community \u2014 all in one platform. Start your stokvel journey today. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](20, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵconditionalCreate"](21, HomeComponent_Conditional_21_Template, 4, 0, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](22, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵconditionalBranchCreate"](23, HomeComponent_Conditional_23_Template, 4, 0, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](24, "button", 15)(25, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](26, "explore");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](27, " Browse Stokvels ");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](28, "div", 16)(29, "div", 17)(30, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](31, "N");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](32, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](33, "S");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](34, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](35, "T");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](36, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](37, "M");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](38, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](39, "Joined by ");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](40, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](41, "10,000+");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](42, " South Africans");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](43, "div", 22)(44, "div", 23)(45, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](46, "show_chart");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](47, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](48, "Community at a glance");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](49, "div", 24)(50, "div", 25)(51, "div", 26)(52, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](53, "R 50M+");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](54, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](55, "Total Saved");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](56, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](57, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](58, "div", 25)(59, "div", 26)(60, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](61, "2,400+");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](62, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](63, "Active Stokvels");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](64, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](65, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](66, "div", 25)(67, "div", 26)(68, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](69, "98%");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](70, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](71, "On-time Payouts");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](72, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](73, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](74, "div", 33)(75, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](76, "lock");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](77, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](78, "256-bit encrypted \u00B7 POPIA compliant");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](79, "div", 34)(80, "div", 35)(81, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](82, "security");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](83, " Bank-level Security");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](84, "div", 35)(85, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](86, "groups");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](87, " 10,000+ Members");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](88, "div", 35)(89, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](90, "account_balance_wallet");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](91, " R50M+ Saved");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](92, "div", 35)(93, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](94, "verified");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](95, " POPIA Compliant");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](96, "section", 36)(97, "div", 37)(98, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](99, "Why eStokvel?");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](100, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](101, "Built for trust. Designed for growth.");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](102, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](103, "Everything your savings group needs \u2014 from first contribution to final payout.");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](104, "div", 39)(105, "div", 40)(106, "div", 41)(107, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](108, "shield");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](109, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](110, "Bank-Level Security");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](111, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](112, "256-bit encryption protects every transaction. No cash, no risk. Your money stays safe.");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](113, "ul", 42)(114, "li")(115, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](116, "check_circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](117, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](118, "Encrypted digital payments");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](119, "li")(120, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](121, "check_circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](122, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](123, "Secure fund storage");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](124, "li")(125, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](126, "check_circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](127, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](128, "Full audit trail");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](129, "div", 43)(130, "div", 44)(131, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](132, "bar_chart");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](133, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](134, "Full Transparency");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](135, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](136, "Real-time dashboards show every rand, every member, every cycle. No secrets, no surprises.");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](137, "ul", 42)(138, "li")(139, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](140, "check_circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](141, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](142, "Live contribution tracking");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](143, "li")(144, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](145, "check_circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](146, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](147, "Transparent payout cycles");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](148, "li")(149, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](150, "check_circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](151, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](152, "Member activity log");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](153, "div", 40)(154, "div", 45)(155, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](156, "bolt");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](157, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](158, "Effortless Management");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](159, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](160, "Manage your stokvel 24/7 from any device. Automated reminders replace manual follow-ups.");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](161, "ul", 42)(162, "li")(163, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](164, "check_circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](165, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](166, "24/7 access anywhere");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](167, "li")(168, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](169, "check_circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](170, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](171, "Automated reminders");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](172, "li")(173, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](174, "check_circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](175, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](176, "Digital constitution");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](177, "section", 46)(178, "div", 47)(179, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](180, "Simple Process");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](181, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](182, "Up and running in minutes");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](183, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](184, "Four easy steps from sign-up to your first payout");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](185, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](186, HomeComponent_div_186_Template, 11, 5, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](187, "section", 50)(188, "div", 37)(189, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](190, "Savings Models");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](191, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](192, "Choose your stokvel type");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](193, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](194, "Multiple structures to fit every financial goal");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](195, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](196, HomeComponent_div_196_Template, 11, 4, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](197, "section", 53)(198, "div", 54)(199, "div", 55)(200, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](201, "Learn More");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](202, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](203, "What is a Stokvel?");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](204, "div", 56)(205, "span", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](206, "Community.");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](207, "span", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](208, "Savings.");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](209, "span", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](210, "Growth.");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](211, "p", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](212, " A stokvel is a savings or investment society where members regularly contribute agreed amounts and receive lump sum payouts in rotation. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](213, "p", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](214, " With eStokvel, choose between ");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](215, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](216, "private (invite-only)");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](217, " or ");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](218, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](219, "public (anyone can join)");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](220, " stokvels. Minimum of 3 members required to start. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](221, "ul", 61)(222, "li")(223, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](224, "payments");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](225, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](226, "Secure digital payments");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](227, "li")(228, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](229, "groups");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](230, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](231, "Trusted community members");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](232, "li")(233, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](234, "smartphone");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](235, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](236, "No physical meetings required");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](237, "li")(238, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](239, "bolt");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](240, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](241, "Real-time contribution tracking");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](242, "li")(243, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](244, "insert_chart");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](245, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](246, "Transparent financial management");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](247, "button", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](248, " Learn More ");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](249, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](250, "arrow_forward");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](251, "div", 63)(252, "div", 64)(253, "div", 65)(254, "div", 66)(255, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](256, "trending_up");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](257, "div")(258, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](259, "Trending Stokvels");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](260, "p", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](261, "Active \u00B7 Public \u00B7 Open to join");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](262, "div", 68)(263, "span", 69)(264, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](265, "shield");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](266, " POPIA ");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](267, "button", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](268, " View All ");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](269, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](270, "arrow_forward");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](271, HomeComponent_div_271_Template, 4, 0, "div", 71)(272, HomeComponent_div_272_Template, 12, 0, "div", 72)(273, HomeComponent_div_273_Template, 2, 1, "div", 73)(274, HomeComponent_div_274_Template, 2, 5, "div", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](275, "section", 75)(276, "div", 37)(277, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](278, "Real Stories");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](279, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](280, "What our members say");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](281, "div", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](282, HomeComponent_div_282_Template, 13, 8, "div", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](283, "section", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](284, "div", 79)(285, "div", 80)(286, "div", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](287, "div", 82)(288, "div", 83)(289, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](290, "savings");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](291, " Start Today \u2014 It's Free");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](292, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](293, "Ready to start your savings journey?");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](294, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](295, "Join thousands of South Africans building wealth together. Takes less than 2 minutes to set up.");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](296, "div", 84)(297, "button", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_297_listener() {
          return ctx.login();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](298, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](299, "rocket_launch");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](300, " Open a Free Account ");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](301, "button", 86)(302, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](303, "add_circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](304, " Create a Stokvel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](305, "div", 87)(306, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](307, "lock");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](308, " No credit card required \u00B7 POPIA compliant \u00B7 Cancel anytime ");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵconditional"](!_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](22, 8, ctx.isAuthenticated$) ? 21 : 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](165);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx.steps);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx.stokvelTypes);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](75);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !ctx.isLoading && ctx.pagedStokvels.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !ctx.isLoading && ctx.pagedStokvels.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !ctx.isLoading && ctx.totalStokvels > ctx.pageSize);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx.testimonials);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, src_app_material_module__WEBPACK_IMPORTED_MODULE_2__.MaterialModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__.MatIcon, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_20__.MatPaginator, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_21__.MatTooltip, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_22__.MatProgressSpinner, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_0__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_0__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_0__.TitleCasePipe],
    styles: ["@charset \"UTF-8\";\n@keyframes _ngcontent-%COMP%_float {\n  0%, 100% {\n    transform: translateY(0) scale(1);\n  }\n  50% {\n    transform: translateY(-22px) scale(1.04);\n  }\n}\n@keyframes _ngcontent-%COMP%_fadeUp {\n  from {\n    opacity: 0;\n    transform: translateY(24px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_shimmer {\n  0% {\n    background-position: -200% center;\n  }\n  100% {\n    background-position: 200% center;\n  }\n}\n.section-header[_ngcontent-%COMP%] {\n  text-align: center;\n  max-width: 640px;\n  margin: 0 auto 56px;\n}\n.section-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: clamp(26px, 4vw, 40px);\n  font-weight: 800;\n  color: #0f172a;\n  margin: 8px 0 14px;\n  letter-spacing: -0.03em;\n}\n.section-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 17px;\n  color: #64748b;\n  line-height: 1.6;\n}\n.section-header.light[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.section-header.light[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.75);\n}\n.section-header.light[_ngcontent-%COMP%]   .section-eyebrow[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.15);\n  color: #fff;\n  border-color: rgba(255, 255, 255, 0.25);\n}\n\n.section-eyebrow[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 5px 14px;\n  border-radius: 999px;\n  border: 1.5px solid rgba(13, 71, 161, 0.2);\n  background: rgba(13, 71, 161, 0.06);\n  color: #0d47a1;\n  font-size: 12px;\n  font-weight: 700;\n  letter-spacing: 0.8px;\n  text-transform: uppercase;\n  margin-bottom: 12px;\n}\n\n.hero[_ngcontent-%COMP%] {\n  position: relative;\n  background: linear-gradient(135deg, #061d4a 0%, #0d47a1 55%, #1565c0 100%);\n  color: #fff;\n  overflow: hidden;\n  padding: 120px 24px 0;\n}\n\n.hero-mesh[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  pointer-events: none;\n  background-image: radial-gradient(circle at 15% 25%, rgba(255, 255, 255, 0.04) 0%, transparent 50%), radial-gradient(circle at 85% 70%, rgba(255, 255, 255, 0.04) 0%, transparent 50%);\n}\n\n.hero-orbs[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  pointer-events: none;\n}\n.hero-orbs[_ngcontent-%COMP%]   .orb[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.07);\n}\n.hero-orbs[_ngcontent-%COMP%]   .orb.orb-a[_ngcontent-%COMP%] {\n  width: 420px;\n  height: 420px;\n  top: -120px;\n  right: -80px;\n  animation: _ngcontent-%COMP%_float 10s ease-in-out infinite;\n}\n.hero-orbs[_ngcontent-%COMP%]   .orb.orb-b[_ngcontent-%COMP%] {\n  width: 260px;\n  height: 260px;\n  bottom: 60px;\n  left: -60px;\n  animation: _ngcontent-%COMP%_float 14s ease-in-out infinite reverse;\n}\n.hero-orbs[_ngcontent-%COMP%]   .orb.orb-c[_ngcontent-%COMP%] {\n  width: 160px;\n  height: 160px;\n  top: 35%;\n  right: 22%;\n  animation: _ngcontent-%COMP%_float 8s ease-in-out infinite;\n}\n\n.hero-inner[_ngcontent-%COMP%] {\n  position: relative;\n  max-width: 1280px;\n  margin: 0 auto;\n  display: grid;\n  grid-template-columns: 1fr 420px;\n  gap: 56px;\n  align-items: center;\n  padding-bottom: 72px;\n}\n\n.hero-copy[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fadeUp 0.7s ease both;\n}\n\n.hero-eyebrow[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  background: rgba(255, 255, 255, 0.12);\n  -webkit-backdrop-filter: blur(8px);\n          backdrop-filter: blur(8px);\n  border: 1px solid rgba(255, 255, 255, 0.25);\n  padding: 7px 18px;\n  border-radius: 999px;\n  font-size: 13px;\n  font-weight: 600;\n  letter-spacing: 0.4px;\n  margin-bottom: 24px;\n}\n.hero-eyebrow[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n  color: #10b981;\n}\n\n.hero-h1[_ngcontent-%COMP%] {\n  font-size: clamp(36px, 5.5vw, 64px);\n  font-weight: 800;\n  line-height: 1.1;\n  letter-spacing: -0.03em;\n  margin: 0 0 24px;\n}\n\n.hero-h1-accent[_ngcontent-%COMP%] {\n  background: linear-gradient(90deg, #d97706, #fbbf24);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n\n.hero-sub[_ngcontent-%COMP%] {\n  font-size: 18px;\n  line-height: 1.65;\n  color: rgba(255, 255, 255, 0.82);\n  max-width: 520px;\n  margin: 0 0 36px;\n}\n\n.hero-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 14px;\n  flex-wrap: wrap;\n  margin-bottom: 36px;\n}\n\n.btn-hero-primary[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 14px 28px;\n  border-radius: 12px;\n  border: none;\n  cursor: pointer;\n  background: linear-gradient(135deg, #b45309, #d97706);\n  color: #fff;\n  font-size: 15px;\n  font-weight: 700;\n  font-family: inherit;\n  box-shadow: 0 8px 24px rgba(180, 83, 9, 0.45);\n  transition: all 0.25s;\n}\n.btn-hero-primary[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n}\n.btn-hero-primary[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px);\n  box-shadow: 0 14px 32px rgba(180, 83, 9, 0.55);\n}\n\n.btn-hero-ghost[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 14px 28px;\n  border-radius: 12px;\n  cursor: pointer;\n  background: rgba(255, 255, 255, 0.12);\n  -webkit-backdrop-filter: blur(8px);\n          backdrop-filter: blur(8px);\n  border: 1.5px solid rgba(255, 255, 255, 0.3);\n  color: #fff;\n  font-size: 15px;\n  font-weight: 600;\n  font-family: inherit;\n  transition: all 0.25s;\n}\n.btn-hero-ghost[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n}\n.btn-hero-ghost[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.2);\n  transform: translateY(-3px);\n}\n\n.hero-social-proof[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  font-size: 14px;\n  color: rgba(255, 255, 255, 0.8);\n}\n.hero-social-proof[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #fff;\n}\n\n.avatars[_ngcontent-%COMP%] {\n  display: flex;\n}\n.avatars[_ngcontent-%COMP%]   .av[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  border: 2.5px solid rgba(255, 255, 255, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 13px;\n  font-weight: 700;\n  color: #fff;\n  margin-left: -10px;\n}\n.avatars[_ngcontent-%COMP%]   .av[_ngcontent-%COMP%]:first-child {\n  margin-left: 0;\n}\n\n.hero-stats-card[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.1);\n  -webkit-backdrop-filter: blur(20px);\n          backdrop-filter: blur(20px);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  border-radius: 24px;\n  padding: 32px;\n  animation: _ngcontent-%COMP%_fadeUp 0.7s 0.2s ease both;\n}\n\n.hsc-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 14px;\n  font-weight: 600;\n  color: rgba(255, 255, 255, 0.75);\n  margin-bottom: 28px;\n}\n.hsc-header[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n  color: #10b981;\n}\n\n.hsc-stats[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 22px;\n}\n\n.hsc-stat[_ngcontent-%COMP%]   .hsc-stat-top[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: baseline;\n  margin-bottom: 8px;\n}\n.hsc-stat[_ngcontent-%COMP%]   .hsc-val[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 800;\n  color: #fff;\n  letter-spacing: -0.03em;\n}\n.hsc-stat[_ngcontent-%COMP%]   .hsc-lbl[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: rgba(255, 255, 255, 0.6);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n\n.hsc-bar[_ngcontent-%COMP%] {\n  height: 6px;\n  background: rgba(255, 255, 255, 0.15);\n  border-radius: 99px;\n  overflow: hidden;\n}\n.hsc-bar[_ngcontent-%COMP%]   .hsc-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 99px;\n  background: linear-gradient(90deg, #1565c0, #10b981);\n  transition: width 0.8s ease;\n}\n\n.hsc-trust[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-top: 24px;\n  padding-top: 20px;\n  border-top: 1px solid rgba(255, 255, 255, 0.15);\n  font-size: 12px;\n  color: rgba(255, 255, 255, 0.6);\n}\n.hsc-trust[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n  width: 14px;\n  height: 14px;\n  color: #10b981;\n}\n\n.hero-pills[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  gap: 12px;\n  padding: 0 24px 0;\n  margin: 0 -24px;\n  background: rgba(0, 0, 0, 0.18);\n  -webkit-backdrop-filter: blur(12px);\n          backdrop-filter: blur(12px);\n  border-top: 1px solid rgba(255, 255, 255, 0.1);\n  padding: 20px 24px;\n}\n\n.pill[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  padding: 8px 18px;\n  border-radius: 999px;\n  background: rgba(255, 255, 255, 0.1);\n  border: 1px solid rgba(255, 255, 255, 0.18);\n  font-size: 13px;\n  font-weight: 600;\n  color: rgba(255, 255, 255, 0.9);\n}\n.pill[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n  color: #10b981;\n}\n\n.features-section[_ngcontent-%COMP%] {\n  padding: 96px 24px;\n  background: #fff;\n  max-width: 1280px;\n  margin: 0 auto;\n}\n\n.features-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 28px;\n}\n\n.feat-card[_ngcontent-%COMP%] {\n  position: relative;\n  background: #f0f5fb;\n  border: 1.5px solid #e2e8f0;\n  border-radius: 20px;\n  padding: 36px 32px;\n  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s;\n}\n.feat-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-6px);\n  box-shadow: 0 20px 48px rgba(13, 71, 161, 0.1);\n  border-color: rgba(13, 71, 161, 0.25);\n}\n.feat-card.featured[_ngcontent-%COMP%] {\n  background: linear-gradient(145deg, #f0f7ff 0%, #e8f4fe 100%);\n  border-color: rgba(13, 71, 161, 0.2);\n  box-shadow: 0 8px 32px rgba(13, 71, 161, 0.1);\n}\n.feat-card.featured[_ngcontent-%COMP%]::before {\n  content: \"\u2B50 Most Popular\";\n  position: absolute;\n  top: -14px;\n  left: 50%;\n  transform: translateX(-50%);\n  background: linear-gradient(135deg, #0d47a1, #1565c0);\n  color: #fff;\n  font-size: 11px;\n  font-weight: 700;\n  padding: 4px 14px;\n  border-radius: 999px;\n  white-space: nowrap;\n  letter-spacing: 0.5px;\n}\n.feat-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 20px 0 12px;\n}\n.feat-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #64748b;\n  line-height: 1.65;\n  margin: 0 0 20px;\n}\n\n.feat-icon-wrap[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  border-radius: 16px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.feat-icon-wrap[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 28px;\n  width: 28px;\n  height: 28px;\n  color: #fff;\n}\n.feat-icon-wrap.navy[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #061d4a, #1565c0);\n}\n.feat-icon-wrap.teal[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #059669, #10b981);\n}\n.feat-icon-wrap.gold[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #b45309, #d97706);\n}\n\n.feat-list[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.feat-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 13px;\n  font-weight: 500;\n  color: #374151;\n}\n.feat-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n  color: #059669;\n  flex-shrink: 0;\n}\n\n.hiw-section[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #061d4a 0%, #0d47a1 60%, #1565c0 100%);\n  padding: 96px 24px;\n  position: relative;\n  overflow: hidden;\n}\n.hiw-section[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  inset: 0;\n  background: radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.04), transparent 55%);\n  pointer-events: none;\n}\n\n.hiw-steps[_ngcontent-%COMP%] {\n  position: relative;\n  max-width: 1100px;\n  margin: 0 auto;\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 0;\n}\n\n.hiw-step[_ngcontent-%COMP%] {\n  position: relative;\n  text-align: center;\n  padding: 0 24px;\n}\n.hiw-step[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 17px;\n  font-weight: 700;\n  color: #fff;\n  margin: 12px 0 8px;\n}\n.hiw-step[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: rgba(255, 255, 255, 0.65);\n  line-height: 1.6;\n}\n\n.hiw-icon-wrap[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 64px;\n  border-radius: 20px;\n  background: rgba(255, 255, 255, 0.12);\n  -webkit-backdrop-filter: blur(8px);\n          backdrop-filter: blur(8px);\n  border: 1.5px solid rgba(255, 255, 255, 0.22);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto 8px;\n  transition: background 0.25s;\n}\n.hiw-icon-wrap[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 28px;\n  width: 28px;\n  height: 28px;\n  color: #fff;\n}\n.hiw-step[_ngcontent-%COMP%]:hover   .hiw-icon-wrap[_ngcontent-%COMP%] {\n  background: rgba(217, 119, 6, 0.25);\n  border-color: rgba(217, 119, 6, 0.4);\n}\n\n.hiw-num[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 800;\n  color: rgba(255, 255, 255, 0.35);\n  letter-spacing: 1.5px;\n  margin-bottom: 10px;\n}\n\n.hiw-connector[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 32px;\n  right: -50%;\n  width: 100%;\n  height: 1.5px;\n  background: linear-gradient(90deg, rgba(255, 255, 255, 0.25), rgba(255, 255, 255, 0.06));\n  pointer-events: none;\n  z-index: 0;\n}\n\n.types-section[_ngcontent-%COMP%] {\n  padding: 96px 24px;\n  background: #f0f5fb;\n}\n\n.types-grid[_ngcontent-%COMP%] {\n  max-width: 1280px;\n  margin: 0 auto;\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 20px;\n}\n\n.type-tile[_ngcontent-%COMP%] {\n  position: relative;\n  border-radius: 20px;\n  padding: 32px 24px 28px;\n  color: #fff;\n  overflow: hidden;\n  cursor: pointer;\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\n  min-height: 200px;\n  display: flex;\n  flex-direction: column;\n}\n.type-tile[_ngcontent-%COMP%]:hover {\n  transform: translateY(-6px);\n  box-shadow: 0 20px 48px rgba(0, 0, 0, 0.22);\n}\n.type-tile[_ngcontent-%COMP%]:hover   .tile-arrow[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: translateX(0);\n}\n.type-tile[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 36px;\n  width: 36px;\n  height: 36px;\n  margin-bottom: 14px;\n  opacity: 0.9;\n}\n.type-tile[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  margin: 0 0 8px;\n}\n.type-tile[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 13px;\n  opacity: 0.75;\n  line-height: 1.5;\n  flex: 1;\n  margin: 0;\n}\n\n.tile-bg-pattern[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  pointer-events: none;\n  background-image: radial-gradient(circle at 85% 15%, rgba(255, 255, 255, 0.12) 0%, transparent 55%);\n}\n\n.tile-arrow[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.2);\n  margin-top: 16px;\n  opacity: 0;\n  transform: translateX(-8px);\n  transition: opacity 0.25s, transform 0.25s;\n  align-self: flex-start;\n}\n.tile-arrow[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n}\n\n.banner-investment[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #1565c0, #0d47a1);\n}\n\n.banner-property[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #388e3c, #1b5e20);\n}\n\n.banner-family[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #f57c00, #e65100);\n}\n\n.banner-burial[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #795548, #3e2723);\n}\n\n.banner-rotational[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #00897b, #004d40);\n}\n\n.banner-contribution[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #1976d2, #0288d1);\n}\n\n.banner-livestock[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #558b2f, #33691e);\n}\n\n.banner-party[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #6a1b9a, #4a148c);\n}\n\n.banner-default[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #0d47a1, #061d4a);\n}\n\n.split-section[_ngcontent-%COMP%] {\n  padding: 96px 24px;\n  background: #fff;\n}\n\n.split-inner[_ngcontent-%COMP%] {\n  max-width: 1280px;\n  margin: 0 auto;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 56px;\n  align-items: start;\n}\n\n.split-left[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: clamp(26px, 3.5vw, 38px);\n  font-weight: 800;\n  color: #0f172a;\n  margin: 10px 0 16px;\n  letter-spacing: -0.03em;\n}\n\n.split-tagline[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  margin-bottom: 24px;\n  flex-wrap: wrap;\n}\n\n.tag-navy[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 800;\n  color: #0d47a1;\n}\n\n.tag-teal[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 800;\n  color: #059669;\n}\n\n.tag-gold[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 800;\n  color: #b45309;\n}\n\n.split-body[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: #64748b;\n  line-height: 1.7;\n  margin-bottom: 14px;\n}\n.split-body[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #0f172a;\n}\n\n.split-benefits[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 24px 0 32px;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.split-benefits[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 14px;\n  font-weight: 500;\n  color: #0f172a;\n}\n.split-benefits[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n  color: #059669;\n  flex-shrink: 0;\n}\n\n.btn-learn-more[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 24px;\n  border-radius: 10px;\n  border: 1.5px solid #0d47a1;\n  background: transparent;\n  color: #0d47a1;\n  font-size: 14px;\n  font-weight: 700;\n  cursor: pointer;\n  font-family: inherit;\n  transition: all 0.25s;\n}\n.btn-learn-more[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.btn-learn-more[_ngcontent-%COMP%]:hover {\n  background: #0d47a1;\n  color: #fff;\n}\n\n.split-right[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 24px;\n  border: 1.5px solid #e2e8f0;\n  box-shadow: 0 8px 40px rgba(13, 71, 161, 0.07);\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n}\n\n.trending-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 20px 20px 18px;\n  background: linear-gradient(135deg, #061d4a 0%, #0d47a1 100%);\n  gap: 12px;\n}\n\n.th-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n\n.th-icon[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 12px;\n  background: rgba(255, 255, 255, 0.15);\n  border: 1px solid rgba(255, 255, 255, 0.25);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.th-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n  color: #d97706;\n}\n\n.trending-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  color: #fff;\n  margin: 0 0 2px;\n}\n\n.trending-sub[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: rgba(255, 255, 255, 0.65);\n  margin: 0;\n}\n\n.btn-view-all[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 7px 14px;\n  border-radius: 8px;\n  border: 1.5px solid rgba(255, 255, 255, 0.3);\n  background: rgba(255, 255, 255, 0.1);\n  color: #fff;\n  font-size: 12px;\n  font-weight: 700;\n  cursor: pointer;\n  font-family: inherit;\n  white-space: nowrap;\n  flex-shrink: 0;\n  transition: all 0.2s;\n}\n.btn-view-all[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 15px;\n  width: 15px;\n  height: 15px;\n}\n.btn-view-all[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.22);\n  border-color: rgba(255, 255, 255, 0.5);\n}\n\n.th-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-shrink: 0;\n}\n\n.popia-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 4px 10px;\n  border-radius: 999px;\n  background: rgba(16, 185, 129, 0.2);\n  border: 1px solid rgba(16, 185, 129, 0.4);\n  color: #6ee7b7;\n  font-size: 10px;\n  font-weight: 800;\n  letter-spacing: 0.5px;\n  text-transform: uppercase;\n  cursor: default;\n}\n.popia-badge[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 11px;\n  width: 11px;\n  height: 11px;\n}\n\n.loading-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 14px;\n  padding: 48px 24px;\n}\n.loading-state[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #64748b;\n}\n\n.empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 48px 24px;\n  text-align: center;\n}\n.empty-state[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 12px 0 6px;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #64748b;\n  margin: 0 0 20px;\n}\n\n.empty-icon-wrap[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 64px;\n  border-radius: 20px;\n  background: #f0f5fb;\n  border: 1.5px solid #e2e8f0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.empty-icon-wrap[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 30px;\n  width: 30px;\n  height: 30px;\n  color: #94a3b8;\n}\n\n.btn-create-first[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 20px;\n  border-radius: 10px;\n  border: none;\n  background: linear-gradient(135deg, #0d47a1, #1565c0);\n  color: #fff;\n  font-size: 13px;\n  font-weight: 700;\n  cursor: pointer;\n  font-family: inherit;\n}\n.btn-create-first[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n}\n\n.trending-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  overflow-y: auto;\n  flex: 1;\n}\n.trending-list[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 4px;\n}\n.trending-list[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: transparent;\n}\n.trending-list[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #e2e8f0;\n  border-radius: 99px;\n}\n\n.trending-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 14px;\n  padding: 16px;\n  border-bottom: 1px solid #e2e8f0;\n  cursor: pointer;\n  transition: background 0.18s;\n}\n.trending-card[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.trending-card[_ngcontent-%COMP%]:hover {\n  background: #f5f8ff;\n}\n\n.tc-badge[_ngcontent-%COMP%] {\n  width: 54px;\n  min-width: 54px;\n  border-radius: 14px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 4px;\n  padding: 10px 6px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.16);\n  flex-shrink: 0;\n}\n.tc-badge[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n  color: #fff;\n}\n\n.tc-badge-label[_ngcontent-%COMP%] {\n  font-size: 9px;\n  font-weight: 700;\n  color: rgba(255, 255, 255, 0.85);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  text-align: center;\n  line-height: 1.2;\n}\n\n.tc-info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n\n.tc-name-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n\n.tc-name[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 700;\n  color: #0f172a;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  flex: 1;\n  min-width: 0;\n}\n\n.tc-pill[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 700;\n  letter-spacing: 0.4px;\n  text-transform: uppercase;\n  padding: 2px 7px;\n  border-radius: 999px;\n  background: #f1f5f9;\n  color: #64748b;\n  flex-shrink: 0;\n}\n.tc-pill.pill-active[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #16a34a;\n}\n\n.tc-meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 11px;\n  color: #64748b;\n}\n\n.tc-privacy[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 3px;\n  font-size: 11px;\n  font-weight: 600;\n  color: #64748b;\n}\n.tc-privacy[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 11px;\n  width: 11px;\n  height: 11px;\n}\n.tc-privacy.privacy-public[_ngcontent-%COMP%] {\n  color: #0369a1;\n}\n.tc-privacy.privacy-public[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #0369a1;\n}\n\n.tc-dot[_ngcontent-%COMP%] {\n  color: #e2e8f0;\n  font-size: 14px;\n  line-height: 1;\n}\n\n.tc-created-by[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 3px;\n  font-size: 11px;\n  color: #64748b;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  max-width: 130px;\n}\n.tc-created-by[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 11px;\n  width: 11px;\n  height: 11px;\n}\n\n.tc-desc[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #64748b;\n  margin: 0;\n  line-height: 1.5;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n\n.tc-chips[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 5px;\n  flex-wrap: wrap;\n}\n\n.tc-chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 3px;\n  padding: 3px 7px;\n  border-radius: 6px;\n  background: #f0f5fb;\n  border: 1px solid #e2e8f0;\n  font-size: 11px;\n  font-weight: 600;\n  color: #64748b;\n}\n.tc-chip[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 11px;\n  width: 11px;\n  height: 11px;\n  color: #0d47a1;\n}\n.tc-chip.tc-chip-gold[_ngcontent-%COMP%] {\n  background: #fffbeb;\n  border-color: #fde68a;\n  color: #b45309;\n}\n.tc-chip.tc-chip-gold[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #b45309;\n}\n\n.tc-seats[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-top: 2px;\n}\n\n.tc-seats-track[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 4px;\n  border-radius: 99px;\n  background: #e2e8f0;\n  overflow: hidden;\n}\n\n.tc-seats-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 99px;\n  background: linear-gradient(90deg, #0d47a1, #1565c0);\n  transition: width 0.4s ease;\n}\n.tc-seats-fill.seats-full[_ngcontent-%COMP%] {\n  background: linear-gradient(90deg, #dc2626, #ef4444);\n}\n\n.tc-seats-label[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 700;\n  color: #059669;\n  white-space: nowrap;\n}\n.tc-seats-label.seats-full-label[_ngcontent-%COMP%] {\n  color: #dc2626;\n}\n\n.tc-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  flex-shrink: 0;\n  padding-top: 2px;\n}\n\n.tc-btn-primary[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  border-radius: 10px;\n  border: none;\n  background: linear-gradient(135deg, #0d47a1, #1565c0);\n  color: #fff;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 3px 10px rgba(13, 71, 161, 0.3);\n  transition: all 0.2s;\n}\n.tc-btn-primary[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 17px;\n  width: 17px;\n  height: 17px;\n}\n.tc-btn-primary[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 6px 16px rgba(13, 71, 161, 0.45);\n  transform: scale(1.06);\n}\n\n.tc-btn-secondary[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  border-radius: 10px;\n  border: 1.5px solid #e2e8f0;\n  background: #fff;\n  color: #64748b;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.2s;\n}\n.tc-btn-secondary[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 17px;\n  width: 17px;\n  height: 17px;\n}\n.tc-btn-secondary[_ngcontent-%COMP%]:hover {\n  border-color: #0d47a1;\n  color: #0d47a1;\n  background: rgba(13, 71, 161, 0.04);\n}\n\n.trending-footer[_ngcontent-%COMP%] {\n  border-top: 1px solid #e2e8f0;\n  background: #f0f5fb;\n  padding: 2px 8px;\n}\n.trending-footer[_ngcontent-%COMP%]     .mat-mdc-paginator {\n  background: transparent;\n  font-size: 12px;\n}\n.trending-footer[_ngcontent-%COMP%]     .mat-mdc-paginator-range-label {\n  font-size: 12px;\n  color: #64748b;\n}\n\n.testimonials-section[_ngcontent-%COMP%] {\n  padding: 96px 24px;\n  background: #f0f5fb;\n}\n\n.testimonials-grid[_ngcontent-%COMP%] {\n  max-width: 1280px;\n  margin: 0 auto;\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 24px;\n}\n\n.testi-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1.5px solid #e2e8f0;\n  border-radius: 20px;\n  padding: 32px;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  transition: transform 0.3s, box-shadow 0.3s;\n}\n.testi-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 16px 40px rgba(13, 71, 161, 0.08);\n  border-color: rgba(13, 71, 161, 0.18);\n}\n\n.testi-stars[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 2px;\n}\n.testi-stars[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  color: #d97706;\n}\n\n.testi-quote[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: #0f172a;\n  line-height: 1.7;\n  font-style: italic;\n  flex: 1;\n}\n\n.testi-author[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n\n.testi-avatar[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 16px;\n  font-weight: 700;\n  color: #fff;\n  flex-shrink: 0;\n}\n\n.testi-name[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 700;\n  color: #0f172a;\n}\n\n.testi-role[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #64748b;\n}\n\n.cta-banner[_ngcontent-%COMP%] {\n  position: relative;\n  background: linear-gradient(135deg, #061d4a 0%, #0d47a1 55%, #1565c0 100%);\n  padding: 96px 24px;\n  text-align: center;\n  overflow: hidden;\n  color: #fff;\n}\n\n.cta-bg[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background-image: url(\"https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1600&q=60\");\n  background-size: cover;\n  background-position: center;\n  opacity: 0.06;\n}\n\n.cta-orb[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 50%;\n  pointer-events: none;\n  background: rgba(255, 255, 255, 0.06);\n}\n.cta-orb.cta-orb-a[_ngcontent-%COMP%] {\n  width: 500px;\n  height: 500px;\n  top: -160px;\n  right: -120px;\n}\n.cta-orb.cta-orb-b[_ngcontent-%COMP%] {\n  width: 300px;\n  height: 300px;\n  bottom: -80px;\n  left: -80px;\n}\n\n.cta-content[_ngcontent-%COMP%] {\n  position: relative;\n  max-width: 680px;\n  margin: 0 auto;\n}\n\n.cta-eyebrow[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  background: rgba(255, 255, 255, 0.12);\n  border: 1px solid rgba(255, 255, 255, 0.22);\n  padding: 6px 18px;\n  border-radius: 999px;\n  font-size: 12px;\n  font-weight: 700;\n  letter-spacing: 0.6px;\n  text-transform: uppercase;\n  margin-bottom: 20px;\n}\n.cta-eyebrow[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n  width: 14px;\n  height: 14px;\n  color: #d97706;\n}\n\n.cta-banner[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: clamp(28px, 4.5vw, 48px);\n  font-weight: 800;\n  margin: 0 0 16px;\n  letter-spacing: -0.03em;\n}\n\n.cta-banner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 17px;\n  color: rgba(255, 255, 255, 0.78);\n  line-height: 1.65;\n  margin: 0 0 40px;\n}\n\n.cta-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  gap: 14px;\n  flex-wrap: wrap;\n  margin-bottom: 28px;\n}\n\n.btn-cta-primary[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 10px;\n  padding: 16px 32px;\n  border-radius: 12px;\n  border: none;\n  cursor: pointer;\n  background: linear-gradient(135deg, #b45309, #d97706);\n  color: #fff;\n  font-size: 16px;\n  font-weight: 700;\n  font-family: inherit;\n  box-shadow: 0 8px 28px rgba(180, 83, 9, 0.5);\n  transition: all 0.25s;\n}\n.btn-cta-primary[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 22px;\n  width: 22px;\n  height: 22px;\n}\n.btn-cta-primary[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px);\n  box-shadow: 0 16px 36px rgba(180, 83, 9, 0.6);\n}\n\n.btn-cta-ghost[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 10px;\n  padding: 16px 32px;\n  border-radius: 12px;\n  cursor: pointer;\n  background: rgba(255, 255, 255, 0.12);\n  border: 1.5px solid rgba(255, 255, 255, 0.3);\n  color: #fff;\n  font-size: 16px;\n  font-weight: 600;\n  font-family: inherit;\n  transition: all 0.25s;\n}\n.btn-cta-ghost[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 22px;\n  width: 22px;\n  height: 22px;\n}\n.btn-cta-ghost[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.2);\n  transform: translateY(-3px);\n}\n\n.cta-footnote[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  font-size: 13px;\n  color: rgba(255, 255, 255, 0.5);\n}\n.cta-footnote[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n  width: 14px;\n  height: 14px;\n}\n\n@media (max-width: 1100px) {\n  .types-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n@media (max-width: 900px) {\n  .hero-inner[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .hero-stats-card[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .hero-h1[_ngcontent-%COMP%] {\n    font-size: clamp(32px, 6vw, 52px);\n  }\n  .features-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .hiw-steps[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n    gap: 32px;\n  }\n  .hiw-connector[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .types-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .split-inner[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 40px;\n  }\n  .testimonials-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n@media (max-width: 600px) {\n  .hero[_ngcontent-%COMP%] {\n    padding: 96px 16px 0;\n  }\n  .hero-inner[_ngcontent-%COMP%] {\n    padding-bottom: 48px;\n  }\n  .hero-pills[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .hiw-steps[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .types-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n  }\n  .cta-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: center;\n  }\n  .btn-cta-primary[_ngcontent-%COMP%], .btn-cta-ghost[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n  }\n}\n@media (max-width: 400px) {\n  .types-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.features-wrapper[_ngcontent-%COMP%] {\n  background: #fff;\n}\n.features-wrapper[_ngcontent-%COMP%]   .features-section[_ngcontent-%COMP%] {\n  padding: 96px 24px;\n  max-width: 1280px;\n  margin: 0 auto;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQWFoQjtFQUNFO0lBQVcsaUNBQUE7RUFWWDtFQVdBO0lBQVksd0NBQUE7RUFSWjtBQUNGO0FBU0E7RUFDRTtJQUFPLFVBQUE7SUFBWSwyQkFBQTtFQUxuQjtFQU1BO0lBQU8sVUFBQTtJQUFZLHdCQUFBO0VBRm5CO0FBQ0Y7QUFHQTtFQUNFO0lBQU8saUNBQUE7RUFBUDtFQUNBO0lBQU8sZ0NBQUE7RUFFUDtBQUNGO0FBQ0E7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFDRjtBQUNFO0VBQ0UsaUNBQUE7RUFDQSxnQkFBQTtFQUNBLGNBM0JTO0VBNEJULGtCQUFBO0VBQ0EsdUJBQUE7QUFDSjtBQUNFO0VBQ0UsZUFBQTtFQUNBLGNBaENTO0VBaUNULGdCQUFBO0FBQ0o7QUFDRTtFQUFhLFdBQUE7QUFFZjtBQURFO0VBQWEsZ0NBQUE7QUFJZjtBQUhFO0VBQTJCLHFDQUFBO0VBQW1DLFdBQUE7RUFBYSx1Q0FBQTtBQVE3RTs7QUFMQTtFQUNFLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLDBDQUFBO0VBQ0EsbUNBQUE7RUFDQSxjQXhEVztFQXlEWCxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUFRRjs7QUFKQTtFQUNFLGtCQUFBO0VBQ0EsMEVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBQU9GOztBQUpBO0VBQ0Usa0JBQUE7RUFBb0IsUUFBQTtFQUFVLG9CQUFBO0VBQzlCLHNMQUNFO0FBUUo7O0FBSkE7RUFDRSxrQkFBQTtFQUFvQixRQUFBO0VBQVUsb0JBQUE7QUFTaEM7QUFSRTtFQUNFLGtCQUFBO0VBQW9CLGtCQUFBO0VBQ3BCLHFDQUFBO0FBV0o7QUFWSTtF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OUM7O0FBL2hCQTtFQUNFLGFBQUE7RUFBZSxtQkFBQTtFQUFxQix1QkFBQTtFQUF5QixRQUFBO0VBQzdELGVBQUE7RUFBaUIsK0JBQUE7QUFzaUJuQjtBQXJpQkU7RUFBVyxlQUFBO0VBQWlCLFdBQUE7RUFBYSxZQUFBO0FBMGlCM0M7O0FBdGlCQTtFQUNFO0lBQWMscUNBQUE7RUEwaUJkO0FBQ0Y7QUF4aUJBO0VBQ0U7SUFBYywwQkFBQTtFQTJpQmQ7RUExaUJBO0lBQW1CLGFBQUE7RUE2aUJuQjtFQTVpQkE7SUFBVyxpQ0FBQTtFQStpQlg7RUE5aUJBO0lBQWlCLDBCQUFBO0VBaWpCakI7RUFoakJBO0lBQWEscUNBQUE7SUFBdUMsU0FBQTtFQW9qQnBEO0VBbmpCQTtJQUFpQixhQUFBO0VBc2pCakI7RUFyakJBO0lBQWMscUNBQUE7RUF3akJkO0VBdmpCQTtJQUFlLDBCQUFBO0lBQTRCLFNBQUE7RUEyakIzQztFQTFqQkE7SUFBcUIsMEJBQUE7RUE2akJyQjtBQUNGO0FBM2pCQTtFQUNFO0lBQVEsb0JBQUE7RUE4akJSO0VBN2pCQTtJQUFjLG9CQUFBO0VBZ2tCZDtFQS9qQkE7SUFBYyxhQUFBO0VBa2tCZDtFQWprQkE7SUFBYSwwQkFBQTtFQW9rQmI7RUFua0JBO0lBQWMsOEJBQUE7RUFza0JkO0VBcmtCQTtJQUFlLHNCQUFBO0lBQXdCLG1CQUFBO0VBeWtCdkM7RUF4a0JBO0lBQW1DLFdBQUE7SUFBYSx1QkFBQTtFQTRrQmhEO0FBQ0Y7QUExa0JBO0VBQ0U7SUFBYywwQkFBQTtFQTZrQmQ7QUFDRjtBQXprQkE7RUFDRSxnQkFBQTtBQTJrQkY7QUExa0JFO0VBQW9CLGtCQUFBO0VBQW9CLGlCQUFBO0VBQW1CLGNBQUE7QUEra0I3RCIsInNvdXJjZXNDb250ZW50IjpbIi8vIMOiwpTCgMOiwpTCgMOiwpTCgCBWYXJpYWJsZXMgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXHJcbiRuYXZ5OiAgICAgICAjMGQ0N2ExO1xyXG4kbmF2eS1kYXJrOiAgIzA2MWQ0YTtcclxuJG5hdnktbWlkOiAgICMxNTY1YzA7XHJcbiR0ZWFsOiAgICAgICAjMDU5NjY5O1xyXG4kdGVhbC1saWdodDogIzEwYjk4MTtcclxuJGdvbGQ6ICAgICAgICNkOTc3MDY7XHJcbiRnb2xkLWRhcms6ICAjYjQ1MzA5O1xyXG4kdGV4dDogICAgICAgIzBmMTcyYTtcclxuJG11dGVkOiAgICAgICM2NDc0OGI7XHJcbiRib3JkZXI6ICAgICAjZTJlOGYwO1xyXG4kYmc6ICAgICAgICAgI2YwZjVmYjtcclxuXHJcbkBrZXlmcmFtZXMgZmxvYXQge1xyXG4gIDAlLCAxMDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApIHNjYWxlKDEpOyB9XHJcbiAgNTAlICAgICAgIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMnB4KSBzY2FsZSgxLjA0KTsgfVxyXG59XHJcbkBrZXlmcmFtZXMgZmFkZVVwIHtcclxuICBmcm9tIHsgb3BhY2l0eTogMDsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDI0cHgpOyB9XHJcbiAgdG8gICB7IG9wYWNpdHk6IDE7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgfVxyXG59XHJcbkBrZXlmcmFtZXMgc2hpbW1lciB7XHJcbiAgMCUgICB7IGJhY2tncm91bmQtcG9zaXRpb246IC0yMDAlIGNlbnRlcjsgfVxyXG4gIDEwMCUgeyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAgMjAwJSBjZW50ZXI7IH1cclxufVxyXG5cclxuLy8gw6LClMKAw6LClMKAw6LClMKAIFNoYXJlZCBzZWN0aW9uIGhlbHBlcnMgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXHJcbi5zZWN0aW9uLWhlYWRlciB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1heC13aWR0aDogNjQwcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG8gNTZweDtcclxuXHJcbiAgaDIge1xyXG4gICAgZm9udC1zaXplOiBjbGFtcCgyNnB4LCA0dncsIDQwcHgpO1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgIGNvbG9yOiAkdGV4dDtcclxuICAgIG1hcmdpbjogOHB4IDAgMTRweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAtMC4wM2VtO1xyXG4gIH1cclxuICBwIHtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIGNvbG9yOiAkbXV0ZWQ7XHJcbiAgICBsaW5lLWhlaWdodDogMS42O1xyXG4gIH1cclxuICAmLmxpZ2h0IGgyIHsgY29sb3I6ICNmZmY7IH1cclxuICAmLmxpZ2h0IHAgIHsgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsLjc1KTsgfVxyXG4gICYubGlnaHQgLnNlY3Rpb24tZXllYnJvdyB7IGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsLjE1KTsgY29sb3I6ICNmZmY7IGJvcmRlci1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwuMjUpOyB9XHJcbn1cclxuXHJcbi5zZWN0aW9uLWV5ZWJyb3cge1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiA2cHg7XHJcbiAgcGFkZGluZzogNXB4IDE0cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogOTk5cHg7XHJcbiAgYm9yZGVyOiAxLjVweCBzb2xpZCByZ2JhKCRuYXZ5LCAuMik7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgkbmF2eSwgLjA2KTtcclxuICBjb2xvcjogJG5hdnk7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IC44cHg7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xyXG59XHJcblxyXG4vLyDDosKUwoDDosKUwoDDosKUwoAgSEVSTyDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcclxuLmhlcm8ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAkbmF2eS1kYXJrIDAlLCAkbmF2eSA1NSUsICRuYXZ5LW1pZCAxMDAlKTtcclxuICBjb2xvcjogI2ZmZjtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHBhZGRpbmc6IDEyMHB4IDI0cHggMDtcclxufVxyXG5cclxuLmhlcm8tbWVzaCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlOyBpbnNldDogMDsgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTpcclxuICAgIHJhZGlhbC1ncmFkaWVudChjaXJjbGUgYXQgMTUlIDI1JSwgcmdiYSgyNTUsMjU1LDI1NSwuMDQpIDAlLCB0cmFuc3BhcmVudCA1MCUpLFxyXG4gICAgcmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCA4NSUgNzAlLCByZ2JhKDI1NSwyNTUsMjU1LC4wNCkgMCUsIHRyYW5zcGFyZW50IDUwJSk7XHJcbn1cclxuXHJcbi5oZXJvLW9yYnMge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTsgaW5zZXQ6IDA7IHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gIC5vcmIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlOyBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LC4wNyk7XHJcbiAgICAmLm9yYi1hIHsgd2lkdGg6IDQyMHB4OyBoZWlnaHQ6IDQyMHB4OyB0b3A6IC0xMjBweDsgcmlnaHQ6IC04MHB4OyBhbmltYXRpb246IGZsb2F0IDEwcyBlYXNlLWluLW91dCBpbmZpbml0ZTsgfVxyXG4gICAgJi5vcmItYiB7IHdpZHRoOiAyNjBweDsgaGVpZ2h0OiAyNjBweDsgYm90dG9tOiA2MHB4OyBsZWZ0OiAtNjBweDsgYW5pbWF0aW9uOiBmbG9hdCAxNHMgZWFzZS1pbi1vdXQgaW5maW5pdGUgcmV2ZXJzZTsgfVxyXG4gICAgJi5vcmItYyB7IHdpZHRoOiAxNjBweDsgaGVpZ2h0OiAxNjBweDsgdG9wOiAzNSU7IHJpZ2h0OiAyMiU7IGFuaW1hdGlvbjogZmxvYXQgOHMgZWFzZS1pbi1vdXQgaW5maW5pdGU7IH1cclxuICB9XHJcbn1cclxuXHJcbi5oZXJvLWlubmVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWF4LXdpZHRoOiAxMjgwcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA0MjBweDtcclxuICBnYXA6IDU2cHg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nLWJvdHRvbTogNzJweDtcclxufVxyXG5cclxuLy8gw6LClMKAw6LClMKAIEhlcm8gY29weSDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcclxuLmhlcm8tY29weSB7IGFuaW1hdGlvbjogZmFkZVVwIC43cyBlYXNlIGJvdGg7IH1cclxuXHJcbi5oZXJvLWV5ZWJyb3cge1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDhweDtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LC4xMik7XHJcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDhweCk7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwuMjUpO1xyXG4gIHBhZGRpbmc6IDdweCAxOHB4OyBib3JkZXItcmFkaXVzOiA5OTlweDtcclxuICBmb250LXNpemU6IDEzcHg7IGZvbnQtd2VpZ2h0OiA2MDA7IGxldHRlci1zcGFjaW5nOiAuNHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XHJcbiAgbWF0LWljb24geyBmb250LXNpemU6IDE2cHg7IHdpZHRoOiAxNnB4OyBoZWlnaHQ6IDE2cHg7IGNvbG9yOiAkdGVhbC1saWdodDsgfVxyXG59XHJcblxyXG4uaGVyby1oMSB7XHJcbiAgZm9udC1zaXplOiBjbGFtcCgzNnB4LCA1LjV2dywgNjRweCk7XHJcbiAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICBsaW5lLWhlaWdodDogMS4xO1xyXG4gIGxldHRlci1zcGFjaW5nOiAtMC4wM2VtO1xyXG4gIG1hcmdpbjogMCAwIDI0cHg7XHJcbn1cclxuXHJcbi5oZXJvLWgxLWFjY2VudCB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAkZ29sZCwgI2ZiYmYyNCk7XHJcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XHJcbiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4uaGVyby1zdWIge1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBsaW5lLWhlaWdodDogMS42NTtcclxuICBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwuODIpO1xyXG4gIG1heC13aWR0aDogNTIwcHg7XHJcbiAgbWFyZ2luOiAwIDAgMzZweDtcclxufVxyXG5cclxuLmhlcm8tYWN0aW9ucyB7XHJcbiAgZGlzcGxheTogZmxleDsgZ2FwOiAxNHB4OyBmbGV4LXdyYXA6IHdyYXA7IG1hcmdpbi1ib3R0b206IDM2cHg7XHJcbn1cclxuXHJcbi5idG4taGVyby1wcmltYXJ5IHtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZ2FwOiA4cHg7XHJcbiAgcGFkZGluZzogMTRweCAyOHB4OyBib3JkZXItcmFkaXVzOiAxMnB4OyBib3JkZXI6IG5vbmU7IGN1cnNvcjogcG9pbnRlcjtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAkZ29sZC1kYXJrLCAkZ29sZCk7XHJcbiAgY29sb3I6ICNmZmY7IGZvbnQtc2l6ZTogMTVweDsgZm9udC13ZWlnaHQ6IDcwMDsgZm9udC1mYW1pbHk6IGluaGVyaXQ7XHJcbiAgYm94LXNoYWRvdzogMCA4cHggMjRweCByZ2JhKCRnb2xkLWRhcmssIC40NSk7XHJcbiAgdHJhbnNpdGlvbjogYWxsIC4yNXM7XHJcbiAgbWF0LWljb24geyBmb250LXNpemU6IDIwcHg7IHdpZHRoOiAyMHB4OyBoZWlnaHQ6IDIwcHg7IH1cclxuICAmOmhvdmVyIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zcHgpOyBib3gtc2hhZG93OiAwIDE0cHggMzJweCByZ2JhKCRnb2xkLWRhcmssIC41NSk7IH1cclxufVxyXG5cclxuLmJ0bi1oZXJvLWdob3N0IHtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZ2FwOiA4cHg7XHJcbiAgcGFkZGluZzogMTRweCAyOHB4OyBib3JkZXItcmFkaXVzOiAxMnB4OyBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwuMTIpOyBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoOHB4KTtcclxuICBib3JkZXI6IDEuNXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsLjMpO1xyXG4gIGNvbG9yOiAjZmZmOyBmb250LXNpemU6IDE1cHg7IGZvbnQtd2VpZ2h0OiA2MDA7IGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG4gIHRyYW5zaXRpb246IGFsbCAuMjVzO1xyXG4gIG1hdC1pY29uIHsgZm9udC1zaXplOiAyMHB4OyB3aWR0aDogMjBweDsgaGVpZ2h0OiAyMHB4OyB9XHJcbiAgJjpob3ZlciB7IGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsLjIpOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNweCk7IH1cclxufVxyXG5cclxuLmhlcm8tc29jaWFsLXByb29mIHtcclxuICBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDE0cHg7XHJcbiAgZm9udC1zaXplOiAxNHB4OyBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwuOCk7XHJcbiAgc3Ryb25nIHsgY29sb3I6ICNmZmY7IH1cclxufVxyXG5cclxuLmF2YXRhcnMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgLmF2IHtcclxuICAgIHdpZHRoOiAzNnB4OyBoZWlnaHQ6IDM2cHg7IGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJvcmRlcjogMi41cHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwuNSk7XHJcbiAgICBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMTNweDsgZm9udC13ZWlnaHQ6IDcwMDsgY29sb3I6ICNmZmY7XHJcbiAgICBtYXJnaW4tbGVmdDogLTEwcHg7XHJcbiAgICAmOmZpcnN0LWNoaWxkIHsgbWFyZ2luLWxlZnQ6IDA7IH1cclxuICB9XHJcbn1cclxuXHJcbi8vIMOiwpTCgMOiwpTCgCBIZXJvIHN0YXRzIGNhcmQgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXHJcbi5oZXJvLXN0YXRzLWNhcmQge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsLjEwKTtcclxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMjBweCk7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwuMik7XHJcbiAgYm9yZGVyLXJhZGl1czogMjRweDtcclxuICBwYWRkaW5nOiAzMnB4O1xyXG4gIGFuaW1hdGlvbjogZmFkZVVwIC43cyAuMnMgZWFzZSBib3RoO1xyXG59XHJcblxyXG4uaHNjLWhlYWRlciB7XHJcbiAgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZ2FwOiAxMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTRweDsgZm9udC13ZWlnaHQ6IDYwMDsgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsLjc1KTtcclxuICBtYXJnaW4tYm90dG9tOiAyOHB4O1xyXG4gIG1hdC1pY29uIHsgZm9udC1zaXplOiAyMHB4OyB3aWR0aDogMjBweDsgaGVpZ2h0OiAyMHB4OyBjb2xvcjogJHRlYWwtbGlnaHQ7IH1cclxufVxyXG5cclxuLmhzYy1zdGF0cyB7IGRpc3BsYXk6IGZsZXg7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IGdhcDogMjJweDsgfVxyXG5cclxuLmhzYy1zdGF0IHtcclxuICAuaHNjLXN0YXQtdG9wIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7IGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgYWxpZ24taXRlbXM6IGJhc2VsaW5lOyBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgfVxyXG4gIC5oc2MtdmFsIHtcclxuICAgIGZvbnQtc2l6ZTogMjJweDsgZm9udC13ZWlnaHQ6IDgwMDsgY29sb3I6ICNmZmY7IGxldHRlci1zcGFjaW5nOiAtLjAzZW07XHJcbiAgfVxyXG4gIC5oc2MtbGJsIHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDsgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsLjYpOyB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyBsZXR0ZXItc3BhY2luZzogLjVweDtcclxuICB9XHJcbn1cclxuXHJcbi5oc2MtYmFyIHtcclxuICBoZWlnaHQ6IDZweDsgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwuMTUpOyBib3JkZXItcmFkaXVzOiA5OXB4OyBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIC5oc2MtZmlsbCB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7IGJvcmRlci1yYWRpdXM6IDk5cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICRuYXZ5LW1pZCwgJHRlYWwtbGlnaHQpO1xyXG4gICAgdHJhbnNpdGlvbjogd2lkdGggLjhzIGVhc2U7XHJcbiAgfVxyXG59XHJcblxyXG4uaHNjLXRydXN0IHtcclxuICBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDhweDtcclxuICBtYXJnaW4tdG9wOiAyNHB4OyBwYWRkaW5nLXRvcDogMjBweDtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwuMTUpO1xyXG4gIGZvbnQtc2l6ZTogMTJweDsgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsLjYpO1xyXG4gIG1hdC1pY29uIHsgZm9udC1zaXplOiAxNHB4OyB3aWR0aDogMTRweDsgaGVpZ2h0OiAxNHB4OyBjb2xvcjogJHRlYWwtbGlnaHQ7IH1cclxufVxyXG5cclxuLy8gw6LClMKAw6LClMKAIEhlcm8gcGlsbHMgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXHJcbi5oZXJvLXBpbGxzIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogZmxleDsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IGZsZXgtd3JhcDogd3JhcDsgZ2FwOiAxMnB4O1xyXG4gIHBhZGRpbmc6IDAgMjRweCAwO1xyXG4gIG1hcmdpbjogMCAtMjRweDtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLC4xOCk7XHJcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEycHgpO1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LC4xKTtcclxuICBwYWRkaW5nOiAyMHB4IDI0cHg7XHJcbn1cclxuXHJcbi5waWxsIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZ2FwOiA3cHg7XHJcbiAgcGFkZGluZzogOHB4IDE4cHg7IGJvcmRlci1yYWRpdXM6IDk5OXB4O1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsLjEwKTtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LC4xOCk7XHJcbiAgZm9udC1zaXplOiAxM3B4OyBmb250LXdlaWdodDogNjAwOyBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwuOSk7XHJcbiAgbWF0LWljb24geyBmb250LXNpemU6IDE2cHg7IHdpZHRoOiAxNnB4OyBoZWlnaHQ6IDE2cHg7IGNvbG9yOiAkdGVhbC1saWdodDsgfVxyXG59XHJcblxyXG4vLyDDosKUwoDDosKUwoDDosKUwoAgRkVBVFVSRVMgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXHJcbi5mZWF0dXJlcy1zZWN0aW9uIHtcclxuICBwYWRkaW5nOiA5NnB4IDI0cHg7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBtYXgtd2lkdGg6IDEyODBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuLmZlYXR1cmVzLWdyaWQge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcclxuICBnYXA6IDI4cHg7XHJcbn1cclxuXHJcbi5mZWF0LWNhcmQge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBiYWNrZ3JvdW5kOiAkYmc7XHJcbiAgYm9yZGVyOiAxLjVweCBzb2xpZCAkYm9yZGVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgcGFkZGluZzogMzZweCAzMnB4O1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuM3MgZWFzZSwgYm94LXNoYWRvdyAuM3MgZWFzZSwgYm9yZGVyLWNvbG9yIC4zcztcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTZweCk7XHJcbiAgICBib3gtc2hhZG93OiAwIDIwcHggNDhweCByZ2JhKCRuYXZ5LCAuMTApO1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKCRuYXZ5LCAuMjUpO1xyXG4gIH1cclxuXHJcbiAgJi5mZWF0dXJlZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTQ1ZGVnLCAjZjBmN2ZmIDAlLCAjZThmNGZlIDEwMCUpO1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKCRuYXZ5LCAuMik7XHJcbiAgICBib3gtc2hhZG93OiAwIDhweCAzMnB4IHJnYmEoJG5hdnksIC4xMCk7XHJcblxyXG4gICAgJjo6YmVmb3JlIHtcclxuICAgICAgY29udGVudDogJ8Oiwq3CkCBNb3N0IFBvcHVsYXInO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogLTE0cHg7IGxlZnQ6IDUwJTsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAkbmF2eSwgJG5hdnktbWlkKTtcclxuICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTFweDsgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgcGFkZGluZzogNHB4IDE0cHg7IGJvcmRlci1yYWRpdXM6IDk5OXB4O1xyXG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwOyBsZXR0ZXItc3BhY2luZzogLjVweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGgzIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDsgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGNvbG9yOiAkdGV4dDsgbWFyZ2luOiAyMHB4IDAgMTJweDtcclxuICB9XHJcblxyXG4gIHAge1xyXG4gICAgZm9udC1zaXplOiAxNHB4OyBjb2xvcjogJG11dGVkO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNjU7IG1hcmdpbjogMCAwIDIwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4uZmVhdC1pY29uLXdyYXAge1xyXG4gIHdpZHRoOiA2MHB4OyBoZWlnaHQ6IDYwcHg7IGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbiAgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgbWF0LWljb24geyBmb250LXNpemU6IDI4cHg7IHdpZHRoOiAyOHB4OyBoZWlnaHQ6IDI4cHg7IGNvbG9yOiAjZmZmOyB9XHJcblxyXG4gICYubmF2eSAgeyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAkbmF2eS1kYXJrLCAkbmF2eS1taWQpOyB9XHJcbiAgJi50ZWFsICB7IGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICR0ZWFsLCAgICAgICAkdGVhbC1saWdodCk7IH1cclxuICAmLmdvbGQgIHsgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgJGdvbGQtZGFyaywgICRnb2xkKTsgfVxyXG59XHJcblxyXG4uZmVhdC1saXN0IHtcclxuICBsaXN0LXN0eWxlOiBub25lOyBwYWRkaW5nOiAwOyBtYXJnaW46IDA7XHJcbiAgZGlzcGxheTogZmxleDsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgZ2FwOiAxMHB4O1xyXG5cclxuICBsaSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDEzcHg7IGZvbnQtd2VpZ2h0OiA1MDA7IGNvbG9yOiAjMzc0MTUxO1xyXG5cclxuICAgIG1hdC1pY29uIHtcclxuICAgICAgZm9udC1zaXplOiAxNnB4OyB3aWR0aDogMTZweDsgaGVpZ2h0OiAxNnB4O1xyXG4gICAgICBjb2xvcjogJHRlYWw7IGZsZXgtc2hyaW5rOiAwO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gw6LClMKAw6LClMKAw6LClMKAIEhPVyBJVCBXT1JLUyDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcclxuLmhpdy1zZWN0aW9uIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAkbmF2eS1kYXJrIDAlLCAkbmF2eSA2MCUsICRuYXZ5LW1pZCAxMDAlKTtcclxuICBwYWRkaW5nOiA5NnB4IDI0cHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG4gICY6OmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgaW5zZXQ6IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0IDgwJSAyMCUsIHJnYmEoMjU1LDI1NSwyNTUsLjA0KSwgdHJhbnNwYXJlbnQgNTUlKTtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gIH1cclxufVxyXG5cclxuLmhpdy1zdGVwcyB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1heC13aWR0aDogMTEwMHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcclxuICBnYXA6IDA7XHJcbn1cclxuXHJcbi5oaXctc3RlcCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAwIDI0cHg7XHJcblxyXG4gIGg0IHtcclxuICAgIGZvbnQtc2l6ZTogMTdweDsgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGNvbG9yOiAjZmZmOyBtYXJnaW46IDEycHggMCA4cHg7XHJcbiAgfVxyXG4gIHAge1xyXG4gICAgZm9udC1zaXplOiAxM3B4OyBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwuNjUpO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNjtcclxuICB9XHJcbn1cclxuXHJcbi5oaXctaWNvbi13cmFwIHtcclxuICB3aWR0aDogNjRweDsgaGVpZ2h0OiA2NHB4OyBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsLjEyKTtcclxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoOHB4KTtcclxuICBib3JkZXI6IDEuNXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsLjIyKTtcclxuICBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBtYXJnaW46IDAgYXV0byA4cHg7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAuMjVzO1xyXG5cclxuICBtYXQtaWNvbiB7XHJcbiAgICBmb250LXNpemU6IDI4cHg7IHdpZHRoOiAyOHB4OyBoZWlnaHQ6IDI4cHg7IGNvbG9yOiAjZmZmO1xyXG4gIH1cclxuXHJcbiAgLmhpdy1zdGVwOmhvdmVyICYge1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgkZ29sZCwgLjI1KTtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiYSgkZ29sZCwgLjQpO1xyXG4gIH1cclxufVxyXG5cclxuLmhpdy1udW0ge1xyXG4gIGZvbnQtc2l6ZTogMTFweDsgZm9udC13ZWlnaHQ6IDgwMDtcclxuICBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwuMzUpO1xyXG4gIGxldHRlci1zcGFjaW5nOiAxLjVweDsgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLmhpdy1jb25uZWN0b3Ige1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDMycHg7IHJpZ2h0OiAtNTAlO1xyXG4gIHdpZHRoOiAxMDAlOyBoZWlnaHQ6IDEuNXB4O1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiYSgyNTUsMjU1LDI1NSwuMjUpLCByZ2JhKDI1NSwyNTUsMjU1LC4wNikpO1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gIHotaW5kZXg6IDA7XHJcbn1cclxuXHJcbi8vIMOiwpTCgMOiwpTCgMOiwpTCgCBTVE9LVkVMIFRZUEVTIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxyXG4udHlwZXMtc2VjdGlvbiB7XHJcbiAgcGFkZGluZzogOTZweCAyNHB4O1xyXG4gIGJhY2tncm91bmQ6ICRiZztcclxufVxyXG5cclxuLnR5cGVzLWdyaWQge1xyXG4gIG1heC13aWR0aDogMTI4MHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcclxuICBnYXA6IDIwcHg7XHJcbn1cclxuXHJcbi50eXBlLXRpbGUge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIHBhZGRpbmc6IDMycHggMjRweCAyOHB4O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuM3MgZWFzZSwgYm94LXNoYWRvdyAuM3MgZWFzZTtcclxuICBtaW4taGVpZ2h0OiAyMDBweDtcclxuICBkaXNwbGF5OiBmbGV4OyBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNnB4KTtcclxuICAgIGJveC1zaGFkb3c6IDAgMjBweCA0OHB4IHJnYmEoMCwwLDAsLjIyKTtcclxuXHJcbiAgICAudGlsZS1hcnJvdyB7IG9wYWNpdHk6IDE7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTsgfVxyXG4gIH1cclxuXHJcbiAgbWF0LWljb24ge1xyXG4gICAgZm9udC1zaXplOiAzNnB4OyB3aWR0aDogMzZweDsgaGVpZ2h0OiAzNnB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTRweDtcclxuICAgIG9wYWNpdHk6IC45O1xyXG4gIH1cclxuXHJcbiAgaDQgeyBmb250LXNpemU6IDE2cHg7IGZvbnQtd2VpZ2h0OiA3MDA7IG1hcmdpbjogMCAwIDhweDsgfVxyXG4gIHAgIHsgZm9udC1zaXplOiAxM3B4OyBvcGFjaXR5OiAuNzU7IGxpbmUtaGVpZ2h0OiAxLjU7IGZsZXg6IDE7IG1hcmdpbjogMDsgfVxyXG59XHJcblxyXG4udGlsZS1iZy1wYXR0ZXJuIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7IGluc2V0OiAwOyBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0IDg1JSAxNSUsIHJnYmEoMjU1LDI1NSwyNTUsLjEyKSAwJSwgdHJhbnNwYXJlbnQgNTUlKTtcclxufVxyXG5cclxuLnRpbGUtYXJyb3cge1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB3aWR0aDogMzJweDsgaGVpZ2h0OiAzMnB4OyBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwuMik7XHJcbiAgbWFyZ2luLXRvcDogMTZweDtcclxuICBvcGFjaXR5OiAwOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLThweCk7XHJcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAuMjVzLCB0cmFuc2Zvcm0gLjI1cztcclxuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xyXG4gIG1hdC1pY29uIHsgZm9udC1zaXplOiAxNnB4OyB3aWR0aDogMTZweDsgaGVpZ2h0OiAxNnB4OyB9XHJcbn1cclxuXHJcbi8vIFR5cGUgYmFubmVyIGNvbG91cnNcclxuLmJhbm5lci1pbnZlc3RtZW50IHsgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzE1NjVjMCwgIzBkNDdhMSk7IH1cclxuLmJhbm5lci1wcm9wZXJ0eSAgIHsgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzM4OGUzYywgIzFiNWUyMCk7IH1cclxuLmJhbm5lci1mYW1pbHkgICAgIHsgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2Y1N2MwMCwgI2U2NTEwMCk7IH1cclxuLmJhbm5lci1idXJpYWwgICAgIHsgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzc5NTU0OCwgIzNlMjcyMyk7IH1cclxuLmJhbm5lci1yb3RhdGlvbmFsIHsgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzAwODk3YiwgIzAwNGQ0MCk7IH1cclxuLmJhbm5lci1jb250cmlidXRpb24geyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMTk3NmQyLCAjMDI4OGQxKTsgfVxyXG4uYmFubmVyLWxpdmVzdG9jayAgeyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjNTU4YjJmLCAjMzM2OTFlKTsgfVxyXG4uYmFubmVyLXBhcnR5ICAgICAgeyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjNmExYjlhLCAjNGExNDhjKTsgfVxyXG4uYmFubmVyLWRlZmF1bHQgICAgeyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAkbmF2eSwgICAkbmF2eS1kYXJrKTsgfVxyXG5cclxuLy8gw6LClMKAw6LClMKAw6LClMKAIFNQTElUIFNFQ1RJT04gw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXHJcbi5zcGxpdC1zZWN0aW9uIHtcclxuICBwYWRkaW5nOiA5NnB4IDI0cHg7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxufVxyXG5cclxuLnNwbGl0LWlubmVyIHtcclxuICBtYXgtd2lkdGg6IDEyODBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcclxuICBnYXA6IDU2cHg7XHJcbiAgYWxpZ24taXRlbXM6IHN0YXJ0O1xyXG59XHJcblxyXG4vLyDDosKUwoDDosKUwoAgTGVmdDogV2hhdCBpcyBhIHN0b2t2ZWwgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXHJcbi5zcGxpdC1sZWZ0IHtcclxuICBoMiB7XHJcbiAgICBmb250LXNpemU6IGNsYW1wKDI2cHgsIDMuNXZ3LCAzOHB4KTtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7IGNvbG9yOiAkdGV4dDtcclxuICAgIG1hcmdpbjogMTBweCAwIDE2cHg7IGxldHRlci1zcGFjaW5nOiAtLjAzZW07XHJcbiAgfVxyXG59XHJcblxyXG4uc3BsaXQtdGFnbGluZSB7XHJcbiAgZGlzcGxheTogZmxleDsgZ2FwOiAxMnB4OyBtYXJnaW4tYm90dG9tOiAyNHB4OyBmbGV4LXdyYXA6IHdyYXA7XHJcbn1cclxuXHJcbi50YWctbmF2eSAgeyBmb250LXNpemU6IDIwcHg7IGZvbnQtd2VpZ2h0OiA4MDA7IGNvbG9yOiAkbmF2eTsgfVxyXG4udGFnLXRlYWwgIHsgZm9udC1zaXplOiAyMHB4OyBmb250LXdlaWdodDogODAwOyBjb2xvcjogJHRlYWw7IH1cclxuLnRhZy1nb2xkICB7IGZvbnQtc2l6ZTogMjBweDsgZm9udC13ZWlnaHQ6IDgwMDsgY29sb3I6ICRnb2xkLWRhcms7IH1cclxuXHJcbi5zcGxpdC1ib2R5IHtcclxuICBmb250LXNpemU6IDE1cHg7IGNvbG9yOiAkbXV0ZWQ7IGxpbmUtaGVpZ2h0OiAxLjc7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTRweDtcclxuICBzdHJvbmcgeyBjb2xvcjogJHRleHQ7IH1cclxufVxyXG5cclxuLnNwbGl0LWJlbmVmaXRzIHtcclxuICBsaXN0LXN0eWxlOiBub25lOyBwYWRkaW5nOiAwOyBtYXJnaW46IDI0cHggMCAzMnB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IGdhcDogMTRweDtcclxuXHJcbiAgbGkge1xyXG4gICAgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZ2FwOiAxMnB4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4OyBmb250LXdlaWdodDogNTAwOyBjb2xvcjogJHRleHQ7XHJcblxyXG4gICAgbWF0LWljb24ge1xyXG4gICAgICBmb250LXNpemU6IDIwcHg7IHdpZHRoOiAyMHB4OyBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgIGNvbG9yOiAkdGVhbDsgZmxleC1zaHJpbms6IDA7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uYnRuLWxlYXJuLW1vcmUge1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDhweDtcclxuICBwYWRkaW5nOiAxMnB4IDI0cHg7IGJvcmRlci1yYWRpdXM6IDEwcHg7IGJvcmRlcjogMS41cHggc29saWQgJG5hdnk7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7IGNvbG9yOiAkbmF2eTtcclxuICBmb250LXNpemU6IDE0cHg7IGZvbnQtd2VpZ2h0OiA3MDA7IGN1cnNvcjogcG9pbnRlcjsgZm9udC1mYW1pbHk6IGluaGVyaXQ7XHJcbiAgdHJhbnNpdGlvbjogYWxsIC4yNXM7XHJcbiAgbWF0LWljb24geyBmb250LXNpemU6IDE4cHg7IHdpZHRoOiAxOHB4OyBoZWlnaHQ6IDE4cHg7IH1cclxuICAmOmhvdmVyIHsgYmFja2dyb3VuZDogJG5hdnk7IGNvbG9yOiAjZmZmOyB9XHJcbn1cclxuXHJcbi8vIMOiwpTCgMOiwpTCgCBSaWdodDogVHJlbmRpbmcgU3Rva3ZlbHMgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXHJcbi5zcGxpdC1yaWdodCB7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBib3JkZXItcmFkaXVzOiAyNHB4O1xyXG4gIGJvcmRlcjogMS41cHggc29saWQgJGJvcmRlcjtcclxuICBib3gtc2hhZG93OiAwIDhweCA0MHB4IHJnYmEoJG5hdnksIC4wNyk7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi8vIMOiwpTCgMOiwpTCgCBIZWFkZXJcclxuLnRyZW5kaW5nLWhlYWRlciB7XHJcbiAgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIHBhZGRpbmc6IDIwcHggMjBweCAxOHB4O1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICRuYXZ5LWRhcmsgMCUsICRuYXZ5IDEwMCUpO1xyXG4gIGdhcDogMTJweDtcclxufVxyXG5cclxuLnRoLWxlZnQge1xyXG4gIGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGdhcDogMTJweDtcclxufVxyXG5cclxuLnRoLWljb24ge1xyXG4gIHdpZHRoOiA0MHB4OyBoZWlnaHQ6IDQwcHg7IGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwuMTUpO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsLjI1KTtcclxuICBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBmbGV4LXNocmluazogMDtcclxuICBtYXQtaWNvbiB7IGZvbnQtc2l6ZTogMjBweDsgd2lkdGg6IDIwcHg7IGhlaWdodDogMjBweDsgY29sb3I6ICRnb2xkOyB9XHJcbn1cclxuXHJcbi50cmVuZGluZy1oZWFkZXIgaDMge1xyXG4gIGZvbnQtc2l6ZTogMTZweDsgZm9udC13ZWlnaHQ6IDcwMDsgY29sb3I6ICNmZmY7IG1hcmdpbjogMCAwIDJweDtcclxufVxyXG5cclxuLnRyZW5kaW5nLXN1YiB7XHJcbiAgZm9udC1zaXplOiAxMnB4OyBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwuNjUpOyBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5idG4tdmlldy1hbGwge1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDVweDtcclxuICBwYWRkaW5nOiA3cHggMTRweDsgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIGJvcmRlcjogMS41cHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwuMyk7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwuMSk7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgZm9udC1zaXplOiAxMnB4OyBmb250LXdlaWdodDogNzAwOyBjdXJzb3I6IHBvaW50ZXI7IGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7IGZsZXgtc2hyaW5rOiAwO1xyXG4gIHRyYW5zaXRpb246IGFsbCAuMnM7XHJcbiAgbWF0LWljb24geyBmb250LXNpemU6IDE1cHg7IHdpZHRoOiAxNXB4OyBoZWlnaHQ6IDE1cHg7IH1cclxuICAmOmhvdmVyIHsgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwuMjIpOyBib3JkZXItY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsLjUpOyB9XHJcbn1cclxuXHJcbi50aC1yaWdodCB7XHJcbiAgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZ2FwOiA4cHg7IGZsZXgtc2hyaW5rOiAwO1xyXG59XHJcblxyXG4ucG9waWEtYmFkZ2Uge1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDRweDtcclxuICBwYWRkaW5nOiA0cHggMTBweDsgYm9yZGVyLXJhZGl1czogOTk5cHg7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgxNiwxODUsMTI5LC4yKTsgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxNiwxODUsMTI5LC40KTtcclxuICBjb2xvcjogIzZlZTdiNzsgZm9udC1zaXplOiAxMHB4OyBmb250LXdlaWdodDogODAwO1xyXG4gIGxldHRlci1zcGFjaW5nOiAuNXB4OyB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyBjdXJzb3I6IGRlZmF1bHQ7XHJcbiAgbWF0LWljb24geyBmb250LXNpemU6IDExcHg7IHdpZHRoOiAxMXB4OyBoZWlnaHQ6IDExcHg7IH1cclxufVxyXG5cclxuLy8gw6LClMKAw6LClMKAIExvYWRpbmcgLyBFbXB0eVxyXG4ubG9hZGluZy1zdGF0ZSB7XHJcbiAgZGlzcGxheTogZmxleDsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZ2FwOiAxNHB4OyBwYWRkaW5nOiA0OHB4IDI0cHg7XHJcbiAgc3BhbiB7IGZvbnQtc2l6ZTogMTRweDsgY29sb3I6ICRtdXRlZDsgfVxyXG59XHJcblxyXG4uZW1wdHktc3RhdGUge1xyXG4gIGRpc3BsYXk6IGZsZXg7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogNDhweCAyNHB4OyB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgaDQgeyBmb250LXNpemU6IDE2cHg7IGZvbnQtd2VpZ2h0OiA3MDA7IGNvbG9yOiAkdGV4dDsgbWFyZ2luOiAxMnB4IDAgNnB4OyB9XHJcbiAgcCAgeyBmb250LXNpemU6IDEzcHg7IGNvbG9yOiAkbXV0ZWQ7IG1hcmdpbjogMCAwIDIwcHg7IH1cclxufVxyXG5cclxuLmVtcHR5LWljb24td3JhcCB7XHJcbiAgd2lkdGg6IDY0cHg7IGhlaWdodDogNjRweDsgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBiYWNrZ3JvdW5kOiAkYmc7IGJvcmRlcjogMS41cHggc29saWQgJGJvcmRlcjtcclxuICBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBtYXQtaWNvbiB7IGZvbnQtc2l6ZTogMzBweDsgd2lkdGg6IDMwcHg7IGhlaWdodDogMzBweDsgY29sb3I6ICM5NGEzYjg7IH1cclxufVxyXG5cclxuLmJ0bi1jcmVhdGUtZmlyc3Qge1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDhweDtcclxuICBwYWRkaW5nOiAxMHB4IDIwcHg7IGJvcmRlci1yYWRpdXM6IDEwcHg7IGJvcmRlcjogbm9uZTtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAkbmF2eSwgJG5hdnktbWlkKTtcclxuICBjb2xvcjogI2ZmZjsgZm9udC1zaXplOiAxM3B4OyBmb250LXdlaWdodDogNzAwOyBjdXJzb3I6IHBvaW50ZXI7IGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG4gIG1hdC1pY29uIHsgZm9udC1zaXplOiAxNnB4OyB3aWR0aDogMTZweDsgaGVpZ2h0OiAxNnB4OyB9XHJcbn1cclxuXHJcbi8vIMOiwpTCgMOiwpTCgCBDYXJkIGxpc3RcclxuLnRyZW5kaW5nLWxpc3Qge1xyXG4gIGRpc3BsYXk6IGZsZXg7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgb3ZlcmZsb3cteTogYXV0bzsgZmxleDogMTtcclxuXHJcbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXIgeyB3aWR0aDogNHB4OyB9XHJcbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sgeyBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDsgfVxyXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHsgYmFja2dyb3VuZDogJGJvcmRlcjsgYm9yZGVyLXJhZGl1czogOTlweDsgfVxyXG59XHJcblxyXG4vLyDDosKUwoDDosKUwoAgSW5kaXZpZHVhbCBjYXJkIMOiwoDClCBob3Jpem9udGFsIGxheW91dFxyXG4udHJlbmRpbmctY2FyZCB7XHJcbiAgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7IGdhcDogMTRweDtcclxuICBwYWRkaW5nOiAxNnB4O1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkYm9yZGVyO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIC4xOHM7XHJcblxyXG4gICY6bGFzdC1jaGlsZCB7IGJvcmRlci1ib3R0b206IG5vbmU7IH1cclxuICAmOmhvdmVyIHsgYmFja2dyb3VuZDogI2Y1ZjhmZjsgfVxyXG59XHJcblxyXG4vLyDDosKUwoDDosKUwoAgTGVmdDogY29sb3VyZWQgaWNvbiBiYWRnZSAodmVydGljYWwgw6LCgMKUIGljb24gKyBsYWJlbClcclxuLnRjLWJhZGdlIHtcclxuICB3aWR0aDogNTRweDsgbWluLXdpZHRoOiA1NHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDE0cHg7XHJcbiAgZGlzcGxheTogZmxleDsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgZ2FwOiA0cHg7XHJcbiAgcGFkZGluZzogMTBweCA2cHg7XHJcbiAgYm94LXNoYWRvdzogMCA0cHggMTJweCByZ2JhKDAsMCwwLC4xNik7XHJcbiAgZmxleC1zaHJpbms6IDA7XHJcblxyXG4gIG1hdC1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDsgd2lkdGg6IDIwcHg7IGhlaWdodDogMjBweDsgY29sb3I6ICNmZmY7XHJcbiAgfVxyXG59XHJcblxyXG4udGMtYmFkZ2UtbGFiZWwge1xyXG4gIGZvbnQtc2l6ZTogOXB4OyBmb250LXdlaWdodDogNzAwOyBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwuODUpO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7IGxldHRlci1zcGFjaW5nOiAuNXB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjsgbGluZS1oZWlnaHQ6IDEuMjtcclxufVxyXG5cclxuLy8gw6LClMKAw6LClMKAIENlbnRyZTogaW5mbyBibG9ja1xyXG4udGMtaW5mbyB7XHJcbiAgZmxleDogMTsgbWluLXdpZHRoOiAwOyBkaXNwbGF5OiBmbGV4OyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBnYXA6IDVweDtcclxufVxyXG5cclxuLy8gTmFtZSArIHN0YXR1cyBwaWxsXHJcbi50Yy1uYW1lLXJvdyB7XHJcbiAgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZ2FwOiA4cHg7XHJcbn1cclxuXHJcbi50Yy1uYW1lIHtcclxuICBmb250LXNpemU6IDE0cHg7IGZvbnQtd2VpZ2h0OiA3MDA7IGNvbG9yOiAkdGV4dDtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwOyBvdmVyZmxvdzogaGlkZGVuOyB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICBmbGV4OiAxOyBtaW4td2lkdGg6IDA7XHJcbn1cclxuXHJcbi50Yy1waWxsIHtcclxuICBmb250LXNpemU6IDEwcHg7IGZvbnQtd2VpZ2h0OiA3MDA7IGxldHRlci1zcGFjaW5nOiAuNHB4O1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7IHBhZGRpbmc6IDJweCA3cHg7IGJvcmRlci1yYWRpdXM6IDk5OXB4O1xyXG4gIGJhY2tncm91bmQ6ICNmMWY1Zjk7IGNvbG9yOiAkbXV0ZWQ7IGZsZXgtc2hyaW5rOiAwO1xyXG4gICYucGlsbC1hY3RpdmUgeyBiYWNrZ3JvdW5kOiAjZGNmY2U3OyBjb2xvcjogIzE2YTM0YTsgfVxyXG59XHJcblxyXG4vLyBQcml2YWN5ICsgY3JlYXRlZC1ieSBtZXRhIHJvd1xyXG4udGMtbWV0YSB7XHJcbiAgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZ2FwOiA2cHg7XHJcbiAgZm9udC1zaXplOiAxMXB4OyBjb2xvcjogJG11dGVkO1xyXG59XHJcblxyXG4udGMtcHJpdmFjeSB7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGdhcDogM3B4O1xyXG4gIGZvbnQtc2l6ZTogMTFweDsgZm9udC13ZWlnaHQ6IDYwMDsgY29sb3I6ICRtdXRlZDtcclxuXHJcbiAgbWF0LWljb24geyBmb250LXNpemU6IDExcHg7IHdpZHRoOiAxMXB4OyBoZWlnaHQ6IDExcHg7IH1cclxuXHJcbiAgJi5wcml2YWN5LXB1YmxpYyB7XHJcbiAgICBjb2xvcjogIzAzNjlhMTtcclxuICAgIG1hdC1pY29uIHsgY29sb3I6ICMwMzY5YTE7IH1cclxuICB9XHJcbn1cclxuXHJcbi50Yy1kb3QgeyBjb2xvcjogJGJvcmRlcjsgZm9udC1zaXplOiAxNHB4OyBsaW5lLWhlaWdodDogMTsgfVxyXG5cclxuLnRjLWNyZWF0ZWQtYnkge1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDNweDtcclxuICBmb250LXNpemU6IDExcHg7IGNvbG9yOiAkbXV0ZWQ7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDsgb3ZlcmZsb3c6IGhpZGRlbjsgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgbWF4LXdpZHRoOiAxMzBweDtcclxuICBtYXQtaWNvbiB7IGZvbnQtc2l6ZTogMTFweDsgd2lkdGg6IDExcHg7IGhlaWdodDogMTFweDsgfVxyXG59XHJcblxyXG4vLyBEZXNjcmlwdGlvbiDDosKAwpQgMiBsaW5lc1xyXG4udGMtZGVzYyB7XHJcbiAgZm9udC1zaXplOiAxMnB4OyBjb2xvcjogJG11dGVkOyBtYXJnaW46IDA7IGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7IC13ZWJraXQtbGluZS1jbGFtcDogMjtcclxuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsOyBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4vLyBTdGF0IGNoaXBzXHJcbi50Yy1jaGlwcyB7XHJcbiAgZGlzcGxheTogZmxleDsgZ2FwOiA1cHg7IGZsZXgtd3JhcDogd3JhcDtcclxufVxyXG5cclxuLnRjLWNoaXAge1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDNweDtcclxuICBwYWRkaW5nOiAzcHggN3B4OyBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgYmFja2dyb3VuZDogJGJnOyBib3JkZXI6IDFweCBzb2xpZCAkYm9yZGVyO1xyXG4gIGZvbnQtc2l6ZTogMTFweDsgZm9udC13ZWlnaHQ6IDYwMDsgY29sb3I6ICRtdXRlZDtcclxuICBtYXQtaWNvbiB7IGZvbnQtc2l6ZTogMTFweDsgd2lkdGg6IDExcHg7IGhlaWdodDogMTFweDsgY29sb3I6ICRuYXZ5OyB9XHJcblxyXG4gICYudGMtY2hpcC1nb2xkIHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZiZWI7IGJvcmRlci1jb2xvcjogI2ZkZTY4YTsgY29sb3I6ICRnb2xkLWRhcms7XHJcbiAgICBtYXQtaWNvbiB7IGNvbG9yOiAkZ29sZC1kYXJrOyB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyBTZWF0cyBhdmFpbGFiaWxpdHkgYmFyXHJcbi50Yy1zZWF0cyB7XHJcbiAgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZ2FwOiA4cHg7IG1hcmdpbi10b3A6IDJweDtcclxufVxyXG5cclxuLnRjLXNlYXRzLXRyYWNrIHtcclxuICBmbGV4OiAxOyBoZWlnaHQ6IDRweDsgYm9yZGVyLXJhZGl1czogOTlweDtcclxuICBiYWNrZ3JvdW5kOiAjZTJlOGYwOyBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4udGMtc2VhdHMtZmlsbCB7XHJcbiAgaGVpZ2h0OiAxMDAlOyBib3JkZXItcmFkaXVzOiA5OXB4O1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgJG5hdnksICRuYXZ5LW1pZCk7XHJcbiAgdHJhbnNpdGlvbjogd2lkdGggLjRzIGVhc2U7XHJcblxyXG4gICYuc2VhdHMtZnVsbCB7IGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgI2RjMjYyNiwgI2VmNDQ0NCk7IH1cclxufVxyXG5cclxuLnRjLXNlYXRzLWxhYmVsIHtcclxuICBmb250LXNpemU6IDEwcHg7IGZvbnQtd2VpZ2h0OiA3MDA7IGNvbG9yOiAkdGVhbDsgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAmLnNlYXRzLWZ1bGwtbGFiZWwgeyBjb2xvcjogI2RjMjYyNjsgfVxyXG59XHJcblxyXG4vLyDDosKUwoDDosKUwoAgUmlnaHQ6IGFjdGlvbiBjb2x1bW5cclxuLnRjLWFjdGlvbnMge1xyXG4gIGRpc3BsYXk6IGZsZXg7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IGdhcDogNnB4OyBmbGV4LXNocmluazogMDsgcGFkZGluZy10b3A6IDJweDtcclxufVxyXG5cclxuLnRjLWJ0bi1wcmltYXJ5IHtcclxuICB3aWR0aDogMzRweDsgaGVpZ2h0OiAzNHB4OyBib3JkZXItcmFkaXVzOiAxMHB4OyBib3JkZXI6IG5vbmU7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgJG5hdnksICRuYXZ5LW1pZCk7XHJcbiAgY29sb3I6ICNmZmY7IGN1cnNvcjogcG9pbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBib3gtc2hhZG93OiAwIDNweCAxMHB4IHJnYmEoJG5hdnksIC4zKTtcclxuICB0cmFuc2l0aW9uOiBhbGwgLjJzO1xyXG4gIG1hdC1pY29uIHsgZm9udC1zaXplOiAxN3B4OyB3aWR0aDogMTdweDsgaGVpZ2h0OiAxN3B4OyB9XHJcbiAgJjpob3ZlciB7IGJveC1zaGFkb3c6IDAgNnB4IDE2cHggcmdiYSgkbmF2eSwgLjQ1KTsgdHJhbnNmb3JtOiBzY2FsZSgxLjA2KTsgfVxyXG59XHJcblxyXG4udGMtYnRuLXNlY29uZGFyeSB7XHJcbiAgd2lkdGg6IDM0cHg7IGhlaWdodDogMzRweDsgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBib3JkZXI6IDEuNXB4IHNvbGlkICRib3JkZXI7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjsgY29sb3I6ICRtdXRlZDsgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHRyYW5zaXRpb246IGFsbCAuMnM7XHJcbiAgbWF0LWljb24geyBmb250LXNpemU6IDE3cHg7IHdpZHRoOiAxN3B4OyBoZWlnaHQ6IDE3cHg7IH1cclxuICAmOmhvdmVyIHsgYm9yZGVyLWNvbG9yOiAkbmF2eTsgY29sb3I6ICRuYXZ5OyBiYWNrZ3JvdW5kOiByZ2JhKCRuYXZ5LCAuMDQpOyB9XHJcbn1cclxuXHJcbi8vIMOiwpTCgMOiwpTCgCBGb290ZXIgcGFnaW5hdG9yXHJcbi50cmVuZGluZy1mb290ZXIge1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAkYm9yZGVyO1xyXG4gIGJhY2tncm91bmQ6ICRiZztcclxuICBwYWRkaW5nOiAycHggOHB4O1xyXG5cclxuICA6Om5nLWRlZXAgLm1hdC1tZGMtcGFnaW5hdG9yIHtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gIH1cclxuICA6Om5nLWRlZXAgLm1hdC1tZGMtcGFnaW5hdG9yLXJhbmdlLWxhYmVsIHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDsgY29sb3I6ICRtdXRlZDtcclxuICB9XHJcbn1cclxuXHJcbi8vIMOiwpTCgMOiwpTCgMOiwpTCgCBURVNUSU1PTklBTFMgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXHJcbi50ZXN0aW1vbmlhbHMtc2VjdGlvbiB7XHJcbiAgcGFkZGluZzogOTZweCAyNHB4O1xyXG4gIGJhY2tncm91bmQ6ICRiZztcclxufVxyXG5cclxuLnRlc3RpbW9uaWFscy1ncmlkIHtcclxuICBtYXgtd2lkdGg6IDEyODBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XHJcbiAgZ2FwOiAyNHB4O1xyXG59XHJcblxyXG4udGVzdGktY2FyZCB7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBib3JkZXI6IDEuNXB4IHNvbGlkICRib3JkZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBwYWRkaW5nOiAzMnB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IGdhcDogMjBweDtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjNzLCBib3gtc2hhZG93IC4zcztcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTRweCk7XHJcbiAgICBib3gtc2hhZG93OiAwIDE2cHggNDBweCByZ2JhKCRuYXZ5LCAuMDgpO1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKCRuYXZ5LCAuMTgpO1xyXG4gIH1cclxufVxyXG5cclxuLnRlc3RpLXN0YXJzIHtcclxuICBkaXNwbGF5OiBmbGV4OyBnYXA6IDJweDtcclxuICBtYXQtaWNvbiB7IGZvbnQtc2l6ZTogMThweDsgd2lkdGg6IDE4cHg7IGhlaWdodDogMThweDsgY29sb3I6ICRnb2xkOyB9XHJcbn1cclxuXHJcbi50ZXN0aS1xdW90ZSB7XHJcbiAgZm9udC1zaXplOiAxNXB4OyBjb2xvcjogJHRleHQ7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNzsgZm9udC1zdHlsZTogaXRhbGljOyBmbGV4OiAxO1xyXG59XHJcblxyXG4udGVzdGktYXV0aG9yIHtcclxuICBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDEycHg7XHJcbn1cclxuXHJcbi50ZXN0aS1hdmF0YXIge1xyXG4gIHdpZHRoOiA0NHB4OyBoZWlnaHQ6IDQ0cHg7IGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBmb250LXNpemU6IDE2cHg7IGZvbnQtd2VpZ2h0OiA3MDA7IGNvbG9yOiAjZmZmO1xyXG4gIGZsZXgtc2hyaW5rOiAwO1xyXG59XHJcblxyXG4udGVzdGktbmFtZSB7IGZvbnQtc2l6ZTogMTRweDsgZm9udC13ZWlnaHQ6IDcwMDsgY29sb3I6ICR0ZXh0OyB9XHJcbi50ZXN0aS1yb2xlIHsgZm9udC1zaXplOiAxMnB4OyBjb2xvcjogJG11dGVkOyB9XHJcblxyXG4vLyDDosKUwoDDosKUwoDDosKUwoAgQ1RBIEJBTk5FUiDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcclxuLmN0YS1iYW5uZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAkbmF2eS1kYXJrIDAlLCAkbmF2eSA1NSUsICRuYXZ5LW1pZCAxMDAlKTtcclxuICBwYWRkaW5nOiA5NnB4IDI0cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5jdGEtYmcge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTsgaW5zZXQ6IDA7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTUyMTc5MTEzNjA2NC03OTg2YzI5MjAyMTY/YXV0bz1mb3JtYXQmZml0PWNyb3Amdz0xNjAwJnE9NjAnKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgb3BhY2l0eTogLjA2O1xyXG59XHJcblxyXG4uY3RhLW9yYiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlOyBib3JkZXItcmFkaXVzOiA1MCU7IHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsLjA2KTtcclxuICAmLmN0YS1vcmItYSB7IHdpZHRoOiA1MDBweDsgaGVpZ2h0OiA1MDBweDsgdG9wOiAtMTYwcHg7IHJpZ2h0OiAtMTIwcHg7IH1cclxuICAmLmN0YS1vcmItYiB7IHdpZHRoOiAzMDBweDsgaGVpZ2h0OiAzMDBweDsgYm90dG9tOiAtODBweDsgbGVmdDogLTgwcHg7IH1cclxufVxyXG5cclxuLmN0YS1jb250ZW50IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWF4LXdpZHRoOiA2ODBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuLmN0YS1leWVicm93IHtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZ2FwOiA4cHg7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwuMTIpO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsLjIyKTtcclxuICBwYWRkaW5nOiA2cHggMThweDsgYm9yZGVyLXJhZGl1czogOTk5cHg7XHJcbiAgZm9udC1zaXplOiAxMnB4OyBmb250LXdlaWdodDogNzAwOyBsZXR0ZXItc3BhY2luZzogLjZweDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIG1hdC1pY29uIHsgZm9udC1zaXplOiAxNHB4OyB3aWR0aDogMTRweDsgaGVpZ2h0OiAxNHB4OyBjb2xvcjogJGdvbGQ7IH1cclxufVxyXG5cclxuLmN0YS1iYW5uZXIgaDIge1xyXG4gIGZvbnQtc2l6ZTogY2xhbXAoMjhweCwgNC41dncsIDQ4cHgpO1xyXG4gIGZvbnQtd2VpZ2h0OiA4MDA7IG1hcmdpbjogMCAwIDE2cHg7IGxldHRlci1zcGFjaW5nOiAtLjAzZW07XHJcbn1cclxuXHJcbi5jdGEtYmFubmVyIHAge1xyXG4gIGZvbnQtc2l6ZTogMTdweDsgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsLjc4KTtcclxuICBsaW5lLWhlaWdodDogMS42NTsgbWFyZ2luOiAwIDAgNDBweDtcclxufVxyXG5cclxuLmN0YS1hY3Rpb25zIHtcclxuICBkaXNwbGF5OiBmbGV4OyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgZ2FwOiAxNHB4OyBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjhweDtcclxufVxyXG5cclxuLmJ0bi1jdGEtcHJpbWFyeSB7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGdhcDogMTBweDtcclxuICBwYWRkaW5nOiAxNnB4IDMycHg7IGJvcmRlci1yYWRpdXM6IDEycHg7IGJvcmRlcjogbm9uZTsgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICRnb2xkLWRhcmssICRnb2xkKTtcclxuICBjb2xvcjogI2ZmZjsgZm9udC1zaXplOiAxNnB4OyBmb250LXdlaWdodDogNzAwOyBmb250LWZhbWlseTogaW5oZXJpdDtcclxuICBib3gtc2hhZG93OiAwIDhweCAyOHB4IHJnYmEoJGdvbGQtZGFyaywgLjUpO1xyXG4gIHRyYW5zaXRpb246IGFsbCAuMjVzO1xyXG4gIG1hdC1pY29uIHsgZm9udC1zaXplOiAyMnB4OyB3aWR0aDogMjJweDsgaGVpZ2h0OiAyMnB4OyB9XHJcbiAgJjpob3ZlciB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtM3B4KTsgYm94LXNoYWRvdzogMCAxNnB4IDM2cHggcmdiYSgkZ29sZC1kYXJrLCAuNik7IH1cclxufVxyXG5cclxuLmJ0bi1jdGEtZ2hvc3Qge1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDEwcHg7XHJcbiAgcGFkZGluZzogMTZweCAzMnB4OyBib3JkZXItcmFkaXVzOiAxMnB4OyBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwuMTIpO1xyXG4gIGJvcmRlcjogMS41cHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwuMyk7XHJcbiAgY29sb3I6ICNmZmY7IGZvbnQtc2l6ZTogMTZweDsgZm9udC13ZWlnaHQ6IDYwMDsgZm9udC1mYW1pbHk6IGluaGVyaXQ7XHJcbiAgdHJhbnNpdGlvbjogYWxsIC4yNXM7XHJcbiAgbWF0LWljb24geyBmb250LXNpemU6IDIycHg7IHdpZHRoOiAyMnB4OyBoZWlnaHQ6IDIycHg7IH1cclxuICAmOmhvdmVyIHsgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwuMik7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtM3B4KTsgfVxyXG59XHJcblxyXG4uY3RhLWZvb3Rub3RlIHtcclxuICBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgZ2FwOiA4cHg7XHJcbiAgZm9udC1zaXplOiAxM3B4OyBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwuNSk7XHJcbiAgbWF0LWljb24geyBmb250LXNpemU6IDE0cHg7IHdpZHRoOiAxNHB4OyBoZWlnaHQ6IDE0cHg7IH1cclxufVxyXG5cclxuLy8gw6LClMKAw6LClMKAw6LClMKAIFJFU1BPTlNJVkUgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMTAwcHgpIHtcclxuICAudHlwZXMtZ3JpZCB7IGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7IH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDkwMHB4KSB7XHJcbiAgLmhlcm8taW5uZXIgeyBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjsgfVxyXG4gIC5oZXJvLXN0YXRzLWNhcmQgeyBkaXNwbGF5OiBub25lOyB9XHJcbiAgLmhlcm8taDEgeyBmb250LXNpemU6IGNsYW1wKDMycHgsIDZ2dywgNTJweCk7IH1cclxuICAuZmVhdHVyZXMtZ3JpZCB7IGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyOyB9XHJcbiAgLmhpdy1zdGVwcyB7IGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7IGdhcDogMzJweDsgfVxyXG4gIC5oaXctY29ubmVjdG9yIHsgZGlzcGxheTogbm9uZTsgfVxyXG4gIC50eXBlcy1ncmlkIHsgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTsgfVxyXG4gIC5zcGxpdC1pbm5lciB7IGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyOyBnYXA6IDQwcHg7IH1cclxuICAudGVzdGltb25pYWxzLWdyaWQgeyBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjsgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAuaGVybyB7IHBhZGRpbmc6IDk2cHggMTZweCAwOyB9XHJcbiAgLmhlcm8taW5uZXIgeyBwYWRkaW5nLWJvdHRvbTogNDhweDsgfVxyXG4gIC5oZXJvLXBpbGxzIHsgZGlzcGxheTogbm9uZTsgfVxyXG4gIC5oaXctc3RlcHMgeyBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjsgfVxyXG4gIC50eXBlcy1ncmlkIHsgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyOyB9XHJcbiAgLmN0YS1hY3Rpb25zIHsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxyXG4gIC5idG4tY3RhLXByaW1hcnksIC5idG4tY3RhLWdob3N0IHsgd2lkdGg6IDEwMCU7IGp1c3RpZnktY29udGVudDogY2VudGVyOyB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA0MDBweCkge1xyXG4gIC50eXBlcy1ncmlkIHsgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7IH1cclxufVxyXG5cclxuXHJcbi8vIMOiwpTCgMOiwpTCgMOiwpTCgCBGZWF0dXJlcyBzZWN0aW9uIGZ1bGwtYmxlZWQgd3JhcHBlciDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcclxuLmZlYXR1cmVzLXdyYXBwZXIge1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgLmZlYXR1cmVzLXNlY3Rpb24geyBwYWRkaW5nOiA5NnB4IDI0cHg7IG1heC13aWR0aDogMTI4MHB4OyBtYXJnaW46IDAgYXV0bzsgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"],
    data: {
      animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.trigger)('fade', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.style)({
        opacity: 0
      }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.animate)('600ms ease-in', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.style)({
        opacity: 1
      }))]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.transition)(':leave', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.animate)('600ms ease-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.style)({
        opacity: 0
      }))])])]
    }
  }));
}
_staticBlock();

/***/ }),

/***/ 5329:
/*!****************************************************!*\
  !*** ./src/app/components/dashboard/stats.util.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   countStokvelsJoinedLastMonth: () => (/* binding */ countStokvelsJoinedLastMonth),
/* harmony export */   percentageIncreaseForJoinedStokvels: () => (/* binding */ percentageIncreaseForJoinedStokvels),
/* harmony export */   stokvelMemberCount: () => (/* binding */ stokvelMemberCount)
/* harmony export */ });
function countStokvelsJoinedLastMonth(memberships) {
  const now = new Date();
  const oneMonthAgo = new Date();
  oneMonthAgo.setMonth(now.getMonth() - 1);
  return memberships.filter(m => new Date(m.joinedAt) >= oneMonthAgo).length;
}
function percentageIncreaseForJoinedStokvels(memberships) {
  const now = new Date();
  const oneMonthAgo = new Date(now);
  const twoMonthsAgo = new Date(now);
  oneMonthAgo.setMonth(now.getMonth() - 1);
  twoMonthsAgo.setMonth(now.getMonth() - 2);
  let current = 0;
  let previous = 0;
  memberships.forEach(m => {
    const joined = new Date(m.joinedAt);
    if (isNaN(joined.getTime())) return;
    if (joined >= oneMonthAgo) {
      current++;
    } else if (joined >= twoMonthsAgo && joined < oneMonthAgo) {
      previous++;
    }
  });
  if (previous === 0) {
    if (current === 0) return 0;
    return 100;
  }
  return (current - previous) / previous * 100;
}
function stokvelMemberCount(stokvel) {
  return stokvel.members.filter(member => member.membershipStatus === 'ACTIVE').length;
}

/***/ })

}]);
//# sourceMappingURL=src_app_pages_home_home_component_ts.js.map