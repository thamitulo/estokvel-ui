"use strict";
(self["webpackChunkestokvel_ui"] = self["webpackChunkestokvel_ui"] || []).push([["src_app_pages_referals_refer-and-earn_component_ts"],{

/***/ 294:
/*!************************************************************!*\
  !*** ./src/app/pages/referals/refer-and-earn.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReferAndEarnComponent: () => (/* binding */ ReferAndEarnComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 4487);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 2510);
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../material.module */ 9439);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2481);
/* harmony import */ var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/clipboard */ 2352);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);
/* harmony import */ var _services_referrals_referral_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/referrals/referral.service */ 8948);
/* harmony import */ var _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @auth0/auth0-angular */ 7989);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 5422);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ 3840);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ 9885);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/card */ 3777);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/tooltip */ 9710);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/expansion */ 9322);
var _staticBlock;
















function ReferAndEarnComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 30)(1, "div", 31)(2, "div", 32)(3, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "people");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 33)(6, "h3", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "p", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "Friends Referred");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 31)(11, "div", 32)(12, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "savings");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 33)(15, "h3", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](17, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "p", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, "Total Earnings");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "div", 31)(21, "div", 32)(22, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23, "pending_actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "div", 33)(25, "h3", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "p", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28, "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r0.referredCount);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("R", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](17, 3, ctx_r0.totalEarnings));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r0.getSafePendingReferrals());
  }
}
function ReferAndEarnComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 36)(1, "div", 37)(2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Start Earning Today!");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Sign up to get your unique referral code and start earning R50 for each friend who joins");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 38)(7, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ReferAndEarnComponent_div_20_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r0.login());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "person_add");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, " Sign Up Free ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ReferAndEarnComponent_div_20_Template_button_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r0.login());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "login");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, " Login to Get Started ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
  }
}
function ReferAndEarnComponent_ng_container_22_div_83_div_11_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const referral_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" +R", referral_r5.amount, " ");
  }
}
function ReferAndEarnComponent_ng_container_22_div_83_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 71)(1, "div", 72)(2, "div", 73)(3, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "person");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 74)(6, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](10, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 75)(12, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](14, ReferAndEarnComponent_ng_container_22_div_83_div_11_div_14_Template, 2, 1, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const referral_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](referral_r5.friendName);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](10, 5, referral_r5.date, "mediumDate"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", referral_r5.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](referral_r5.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", referral_r5.amount);
  }
}
function ReferAndEarnComponent_ng_container_22_div_83_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 65)(1, "mat-card", 66)(2, "mat-card-content")(3, "div", 67)(4, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Referral History");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "button", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ReferAndEarnComponent_ng_container_22_div_83_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r0.viewAllHistory());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, " View All ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "arrow_forward");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](11, ReferAndEarnComponent_ng_container_22_div_83_div_11_Template, 15, 8, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r0.getSafeReferralHistory());
  }
}
function ReferAndEarnComponent_ng_container_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 41)(2, "div", 42)(3, "mat-card", 43)(4, "mat-card-content")(5, "div", 44)(6, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "Your Referral Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "Share this code with friends and earn R50 when they sign up and create their first stokvel");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 45)(11, "div", 46)(12, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ReferAndEarnComponent_ng_container_22_Template_button_click_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r0.copyReferralCode());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div", 49)(18, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ReferAndEarnComponent_ng_container_22_Template_button_click_18_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r0.shareReferral());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20, "share");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, " Share Referral ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "div", 51)(23, "mat-card", 52)(24, "mat-card-header")(25, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26, "How It Works");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "mat-card-content")(28, "div", 53)(29, "div", 54)(30, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](31, "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "div", 56)(33, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](34, "Share Your Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](36, "Send your unique referral code to friends and family");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "div", 54)(38, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](39, "2");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "div", 56)(41, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](42, "They Sign Up");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](44, "Your friends use your code when creating their eStokvel account");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](45, "div", 54)(46, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](47, "3");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](48, "div", 56)(49, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](50, "They Create Stokvel");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](51, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](52, "Friends create or join their first stokvel on the platform");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](53, "div", 54)(54, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](55, "4");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](56, "div", 56)(57, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](58, "You Get Rewarded");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](59, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](60, "Earn R50 for each friend who successfully joins and creates a stokvel");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](61, "div", 57)(62, "mat-card", 58)(63, "mat-card-content")(64, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](65, "Share via");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](66, "div", 59)(67, "button", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ReferAndEarnComponent_ng_container_22_Template_button_click_67_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r0.shareViaWhatsApp());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](68, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](69, "whatsapp");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](70, " WhatsApp ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](71, "button", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ReferAndEarnComponent_ng_container_22_Template_button_click_71_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r0.shareViaEmail());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](72, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](73, "email");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](74, " Email ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](75, "button", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ReferAndEarnComponent_ng_container_22_Template_button_click_75_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r0.shareViaSMS());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](76, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](77, "sms");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](78, " SMS ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](79, "button", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ReferAndEarnComponent_ng_container_22_Template_button_click_79_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r0.copyReferralLink());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](80, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](81, "link");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](82, " Copy Link ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](83, ReferAndEarnComponent_ng_container_22_div_83_Template, 12, 1, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r0.getSafeReferralCode());
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matTooltip", ctx_r0.copyTooltip);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r0.copyIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](67);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.isLoggedIn && ctx_r0.getSafeReferralHistory().length > 0);
  }
}
function ReferAndEarnComponent_ng_container_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 51)(2, "mat-card", 52)(3, "mat-card-header")(4, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "How It Works");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "mat-card-content")(7, "div", 53)(8, "div", 54)(9, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 56)(12, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "Sign Up Free");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, "Create your eStokvel account in minutes");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "div", 54)(17, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, "2");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "div", 56)(20, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, "Get Your Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23, "Receive your unique referral code immediately");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "div", 54)(25, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26, "3");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "div", 56)(28, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](29, "Share with Friends");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](31, "Share your code via WhatsApp, Email, or SMS");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "div", 54)(33, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](34, "4");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "div", 56)(36, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](37, "Earn Rewards");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](39, "Get R50 for each friend who joins and creates a stokvel");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "div", 78)(41, "mat-card", 79)(42, "mat-card-content")(43, "div", 80)(44, "div", 81)(45, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](46, "celebration");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](47, "div", 82)(48, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](49, "Ready to Start Earning?");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](50, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](51, "Join thousands of users who are already earning extra income by referring friends to eStokvel.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](52, "ul", 83)(53, "li")(54, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](55, "check_circle");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](56, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](57, "Get R50 for each successful referral");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](58, "li")(59, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](60, "check_circle");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](61, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](62, "Your friends get R25 bonus too");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](63, "li")(64, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](65, "check_circle");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](66, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](67, "Unlimited earning potential");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](68, "li")(69, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](70, "check_circle");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](71, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](72, "Instant payout to your wallet");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](73, "div", 84)(74, "button", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ReferAndEarnComponent_ng_container_23_Template_button_click_74_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r0.login());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](75, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](76, "rocket_launch");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](77, " Start Earning Now ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](78, "p", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](79, "Already have an account? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](80, "a", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ReferAndEarnComponent_ng_container_23_Template_a_click_80_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      ctx_r0.login();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"]($event.preventDefault());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](81, "Login to get your referral code");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
}
function ReferAndEarnComponent_mat_expansion_panel_96_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-expansion-panel")(1, "mat-expansion-panel-header")(2, "mat-panel-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "How do I get started?");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Simply sign up for a free eStokvel account, and you'll immediately receive your unique referral code to start sharing.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function ReferAndEarnComponent_mat_expansion_panel_97_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-expansion-panel")(1, "mat-expansion-panel-header")(2, "mat-panel-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Is there any cost to participate?");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "No, participating in the referral program is completely free. Both you and your friends earn bonuses at no cost.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function ReferAndEarnComponent_div_98_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 88)(1, "div", 89)(2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Don't Miss Out on Easy Earnings!");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Join now and start earning R50 for every friend you refer. It's free, easy, and rewarding!");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 90)(7, "button", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ReferAndEarnComponent_div_98_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r0.login());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "person_add");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, " Sign Up & Start Earning ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "button", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ReferAndEarnComponent_div_98_Template_button_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r0.login());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "login");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, " Login to Continue ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
  }
}
class ReferAndEarnComponent {
  constructor(clipboard, snackBar, referralService, authService, router) {
    this.clipboard = clipboard;
    this.snackBar = snackBar;
    this.referralService = referralService;
    this.authService = authService;
    this.router = router;
    // Authentication state
    this.isLoggedIn = false;
    // User stats (for logged in users)
    this.referredCount = 0;
    this.totalEarnings = 0;
    this.pendingReferrals = 0;
    // Referral code (for logged in users)
    this.referralCode = 'ESTOKVEL50';
    this.copyIcon = 'content_copy';
    this.copyTooltip = 'Copy referral code';
    // Referral history (for logged in users)
    this.referralHistory = [];
    // Loading states
    this.isLoading = false;
    this.isLoadingHistory = false;
    // Error states
    this.hasError = false;
    this.errorMessage = '';
    // Subscriptions
    this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subscription();
  }
  ngOnInit() {
    this.checkAuthentication();
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  checkAuthentication() {
    const authSub = this.authService.isAuthenticated$.subscribe(isAuthenticated => {
      this.isLoggedIn = isAuthenticated;
      // If user just logged in, load data
      if (isAuthenticated) {
        this.loadReferralData();
      } else {
        // Reset data for non-logged in users
        this.resetUserData();
      }
    });
    this.subscriptions.add(authSub);
  }
  loadReferralData() {
    if (!this.isLoggedIn) return;
    this.isLoading = true;
    this.isLoadingHistory = true;
    this.hasError = false;
    this.errorMessage = '';
    // Load stats
    const statsSub = this.referralService.getStats().subscribe({
      next: stats => {
        if (stats) {
          this.referredCount = stats.referredCount || 0;
          this.totalEarnings = stats.totalEarnings || 0;
          this.pendingReferrals = stats.pendingReferrals || 0;
          this.referralCode = stats.referralCode || 'ESTOKVEL50';
        } else {
          // Use default values if stats is null/undefined
          this.setDefaultStats();
        }
        this.isLoading = false;
      },
      error: error => {
        console.error('Failed to load referral stats:', error);
        this.setDefaultStats();
        this.isLoading = false;
        this.hasError = true;
        this.errorMessage = 'Failed to load referral data. Please try again.';
        this.snackBar.open('Failed to load referral data', 'Close', {
          duration: 3000,
          panelClass: ['error-snackbar']
        });
      },
      complete: () => {
        this.isLoading = false;
      }
    });
    // Load recent history
    const historySub = this.referralService.getRecentHistory(5).subscribe({
      next: history => {
        if (history && Array.isArray(history)) {
          this.referralHistory = history.map(item => ({
            friendName: item.friendName || 'Unknown Friend',
            date: item.invitationDate ? new Date(item.invitationDate) : new Date(),
            status: item.status ? item.status.toLowerCase() : 'pending',
            amount: item.rewardAmount || 0,
            email: item.friendEmail || '',
            cellphone: item.friendCellphone || ''
          })).filter(item => item.friendName !== 'Unknown Friend');
        } else {
          this.referralHistory = [];
        }
        this.isLoadingHistory = false;
      },
      error: error => {
        console.error('Failed to load referral history:', error);
        this.referralHistory = [];
        this.isLoadingHistory = false;
      },
      complete: () => {
        this.isLoadingHistory = false;
      }
    });
    this.subscriptions.add(statsSub);
    this.subscriptions.add(historySub);
  }
  setDefaultStats() {
    this.referredCount = 0;
    this.totalEarnings = 0;
    this.pendingReferrals = 0;
    this.referralCode = 'ESTOKVEL50';
  }
  resetUserData() {
    this.setDefaultStats();
    this.referralHistory = [];
    this.hasError = false;
    this.errorMessage = '';
  }
  getSafeReferredCount() {
    return this.referredCount || 0;
  }
  getSafeTotalEarnings() {
    return this.totalEarnings || 0;
  }
  getSafePendingReferrals() {
    return this.pendingReferrals || 0;
  }
  getSafeReferralCode() {
    return this.referralCode || 'ESTOKVEL50';
  }
  getSafeReferralHistory() {
    return Array.isArray(this.referralHistory) ? this.referralHistory : [];
  }
  // Copy referral code to clipboard (logged in users only)
  copyReferralCode() {
    if (!this.isLoggedIn) {
      this.showLoginPrompt();
      return;
    }
    const code = this.getSafeReferralCode();
    this.clipboard.copy(code);
    this.copyIcon = 'check';
    this.copyTooltip = 'Copied!';
    this.snackBar.open('Referral code copied to clipboard!', 'Close', {
      duration: 3000,
      panelClass: ['success-snackbar']
    });
    setTimeout(() => {
      this.copyIcon = 'content_copy';
      this.copyTooltip = 'Copy referral code';
    }, 2000);
  }
  copyReferralLink() {
    if (!this.isLoggedIn) {
      this.showLoginPrompt();
      return;
    }
    const code = this.getSafeReferralCode();
    const referralLink = `https://estokvel.co.za/signup?ref=${code}`;
    this.clipboard.copy(referralLink);
    this.snackBar.open('Referral link copied to clipboard!', 'Close', {
      duration: 3000,
      panelClass: ['success-snackbar']
    });
  }
  // Share via WhatsApp
  shareViaWhatsApp() {
    if (!this.isLoggedIn) {
      this.showLoginPrompt();
      return;
    }
    const code = this.getSafeReferralCode();
    const message = `Join eStokvel - the modern way to manage your stokvels! Use my referral code ${code} to get R25 bonus when you create your first stokvel. Sign up here: https://estokvel.co.za/signup?ref=${code}`;
    const url = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  }
  // Share via Email
  shareViaEmail() {
    if (!this.isLoggedIn) {
      this.showLoginPrompt();
      return;
    }
    const code = this.getSafeReferralCode();
    const subject = 'Join eStokvel with my referral code!';
    const body = `Hi there!\n\nI'm using eStokvel to manage my stokvels and thought you might be interested too!\n\nUse my referral code ${code} when you sign up and we'll both get rewards:\n- You get R25 bonus when you create your first stokvel\n- I get R50 when you join\n\nSign up here: https://estokvel.co.za/signup?ref=${code}\n\nLet's grow our savings together!`;
    const url = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(url, '_blank');
  }
  // Share via SMS
  shareViaSMS() {
    if (!this.isLoggedIn) {
      this.showLoginPrompt();
      return;
    }
    const code = this.getSafeReferralCode();
    const message = `Join eStokvel! Use my code ${code} for R25 bonus. Sign up: https://estokvel.co.za/signup?ref=${code}`;
    const url = `sms:?&body=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  }
  // General share method
  shareReferral() {
    if (!this.isLoggedIn) {
      this.showLoginPrompt();
      return;
    }
    if (navigator.share) {
      const code = this.getSafeReferralCode();
      navigator.share({
        title: 'Join eStokvel',
        text: `Use my referral code ${code} to get R25 bonus when you join eStokvel!`,
        url: `https://estokvel.co.za/signup?ref=${code}`
      }).catch(error => {
        console.error('Error sharing:', error);
        // Fallback to copying link
        this.copyReferralLink();
      });
    } else {
      this.copyReferralLink();
    }
  }
  viewAllHistory() {
    this.snackBar.open('Opening full referral history...', 'Close', {
      duration: 2000
    });
    // You can navigate to a detailed history page here
    // this.router.navigate(['/referrals/history']);
  }
  // Show login prompt for non-logged in users
  showLoginPrompt() {
    this.snackBar.open('Please login or sign up to access referral features', 'Login', {
      duration: 5000,
      panelClass: ['info-snackbar']
    }).onAction().subscribe(() => {
      this.authService.loginWithRedirect({
        appState: {
          target: '/refer-earn'
        }
      });
    });
  }
  // Reload data
  reloadData() {
    if (this.isLoggedIn) {
      this.loadReferralData();
    }
  }
  get currentYear() {
    return new Date().getFullYear();
  }
  login() {
    this.authService.loginWithRedirect({
      appState: {
        target: this.router.url
      }
    });
  }
  static #_ = _staticBlock = () => (this.ɵfac = function ReferAndEarnComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ReferAndEarnComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_6__.Clipboard), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_referrals_referral_service__WEBPACK_IMPORTED_MODULE_8__.ReferralService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_9__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router));
  }, this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: ReferAndEarnComponent,
    selectors: [["app-refer-earn"]],
    decls: 99,
    vars: 7,
    consts: [[1, "refer-earn-container"], [1, "refer-hero"], [1, "hero-background"], [1, "floating-shapes"], [1, "shape", "shape-1"], [1, "shape", "shape-2"], [1, "shape", "shape-3"], [1, "hero-content"], [1, "breadcrumb-nav"], ["routerLink", "/home", 1, "breadcrumb-link"], [1, "breadcrumb-separator"], [1, "breadcrumb-active"], [1, "hero-title"], [1, "hero-subtitle"], ["class", "reward-stats", 4, "ngIf"], ["class", "cta-section", 4, "ngIf"], [1, "refer-content"], [4, "ngIf"], [1, "rewards-section"], [1, "rewards-card"], [1, "rewards-grid"], [1, "reward-item"], [1, "reward-icon", "primary"], [1, "reward-content"], [1, "reward-icon", "accent"], [1, "reward-icon", "success"], [1, "reward-icon", "warning"], [1, "faq-section"], [1, "faq-card"], ["class", "final-cta-section", 4, "ngIf"], [1, "reward-stats"], [1, "stat-card"], [1, "stat-icon"], [1, "stat-content"], [1, "stat-value"], [1, "stat-label"], [1, "cta-section"], [1, "cta-content"], [1, "cta-actions"], ["mat-raised-button", "", "color", "primary", 1, "cta-button", 3, "click"], ["mat-stroked-button", "", "color", "primary", 1, "cta-button", 3, "click"], [1, "content-grid"], [1, "referral-section"], [1, "referral-card"], [1, "referral-header"], [1, "referral-code-container"], [1, "referral-code"], [1, "code-text"], ["mat-icon-button", "", "matTooltipPosition", "above", 1, "copy-btn", 3, "click", "matTooltip"], [1, "code-actions"], ["mat-raised-button", "", "color", "primary", 1, "share-btn", 3, "click"], [1, "how-it-works-section"], [1, "works-card"], [1, "steps-container"], [1, "step-item"], [1, "step-number"], [1, "step-content"], [1, "share-section"], [1, "share-card"], [1, "share-options"], ["mat-raised-button", "", 1, "share-option", "whatsapp", 3, "click"], ["mat-raised-button", "", 1, "share-option", "email", 3, "click"], ["mat-raised-button", "", 1, "share-option", "sms", 3, "click"], ["mat-raised-button", "", 1, "share-option", "link", 3, "click"], ["class", "history-section", 4, "ngIf"], [1, "history-section"], [1, "history-card"], [1, "history-header"], ["mat-button", "", "color", "primary", 3, "click"], [1, "history-list"], ["class", "history-item", 4, "ngFor", "ngForOf"], [1, "history-item"], [1, "referral-info"], [1, "referral-avatar"], [1, "referral-details"], [1, "referral-status", 3, "ngClass"], ["class", "referral-amount", 4, "ngIf"], [1, "referral-amount"], [1, "signup-cta-section"], [1, "signup-cta-card"], [1, "signup-content"], [1, "signup-icon"], [1, "signup-text"], [1, "benefits-list"], [1, "signup-action"], ["mat-raised-button", "", "color", "primary", 1, "signup-button", 3, "click"], [1, "signup-note"], [1, "login-link", 3, "click"], [1, "final-cta-section"], [1, "final-cta-content"], [1, "final-cta-actions"], ["mat-raised-button", "", "color", "primary", 1, "cta-primary", 3, "click"], ["mat-stroked-button", "", "color", "primary", 1, "cta-secondary", 3, "click"]],
    template: function ReferAndEarnComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "div", 4)(5, "div", 5)(6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 7)(8, "nav", 8)(9, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "/");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "Refer & Earn");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "h1", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "Refer Friends & Earn Rewards");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, "Share eStokvel with your friends and get rewarded when they join");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](19, ReferAndEarnComponent_div_19_Template, 29, 5, "div", 14)(20, ReferAndEarnComponent_div_20_Template, 15, 0, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](22, ReferAndEarnComponent_ng_container_22_Template, 84, 4, "ng-container", 17)(23, ReferAndEarnComponent_ng_container_23_Template, 82, 0, "ng-container", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "div", 18)(25, "mat-card", 19)(26, "mat-card-content")(27, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28, "Rewards & Benefits");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "div", 20)(30, "div", 21)(31, "div", 22)(32, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](33, "celebration");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "div", 23)(35, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](36, "R50 Cash Bonus");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](38, "Get R50 deposited to your eStokvel wallet for each successful referral");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "div", 21)(40, "div", 24)(41, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](42, "group_add");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "div", 23)(44, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](45, "Friend Gets R25");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](47, "Your friend also receives R25 when they create their first stokvel");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](48, "div", 21)(49, "div", 25)(50, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](51, "trending_up");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](52, "div", 23)(53, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](54, "No Limits");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](55, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](56, "Refer as many friends as you want - unlimited earning potential");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](57, "div", 21)(58, "div", 26)(59, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](60, "bolt");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](61, "div", 23)(62, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](63, "Instant Payout");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](64, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](65, "Rewards are paid instantly once your friend creates their stokvel");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](66, "div", 27)(67, "mat-card", 28)(68, "mat-card-content")(69, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](70, "Frequently Asked Questions");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](71, "mat-accordion")(72, "mat-expansion-panel")(73, "mat-expansion-panel-header")(74, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](75, "How much can I earn per referral?");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](76, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](77, "You earn R50 for each friend who signs up using your referral code and creates their first stokvel.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](78, "mat-expansion-panel")(79, "mat-expansion-panel-header")(80, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](81, "When do I receive my reward?");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](82, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](83, "Rewards are paid instantly once your friend successfully creates their first stokvel on the platform.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](84, "mat-expansion-panel")(85, "mat-expansion-panel-header")(86, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](87, "Is there a limit to how many people I can refer?");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](88, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](89, "No, there's no limit! You can refer as many friends as you want and earn R50 for each successful referral.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](90, "mat-expansion-panel")(91, "mat-expansion-panel-header")(92, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](93, "What if my friend doesn't create a stokvel?");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](94, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](95, "You only receive the reward when your friend creates or joins their first stokvel. Simply signing up is not enough.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](96, ReferAndEarnComponent_mat_expansion_panel_96_Template, 6, 0, "mat-expansion-panel", 17)(97, ReferAndEarnComponent_mat_expansion_panel_97_Template, 6, 0, "mat-expansion-panel", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](98, ReferAndEarnComponent_div_98_Template, 15, 0, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isLoggedIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.isLoggedIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isLoggedIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.isLoggedIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](73);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.isLoggedIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.isLoggedIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.isLoggedIn);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink, _material_module__WEBPACK_IMPORTED_MODULE_3__.MaterialModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatIconButton, _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCardHeader, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__.MatTooltip, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__.MatAccordion, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__.MatExpansionPanel, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__.MatExpansionPanelHeader, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__.MatExpansionPanelTitle, _angular_common__WEBPACK_IMPORTED_MODULE_0__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_0__.DatePipe],
    styles: [".refer-earn-container[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  background: white;\n}\n\n\n\n.refer-hero[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #092e6b 0%, #0d47a1 100%);\n  color: white;\n  padding: 80px 20px 60px;\n  position: relative;\n  overflow: hidden;\n}\n\n.hero-background[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  opacity: 0.1;\n}\n.hero-background[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: radial-gradient(circle at 20% 80%, rgba(255, 255, 255, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.05) 0%, transparent 50%);\n}\n\n.floating-shapes[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n.floating-shapes[_ngcontent-%COMP%]   .shape[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.1);\n}\n.floating-shapes[_ngcontent-%COMP%]   .shape.shape-1[_ngcontent-%COMP%] {\n  width: 120px;\n  height: 120px;\n  top: 10%;\n  right: 10%;\n  animation: _ngcontent-%COMP%_float 8s ease-in-out infinite;\n}\n.floating-shapes[_ngcontent-%COMP%]   .shape.shape-2[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  bottom: 20%;\n  left: 5%;\n  animation: _ngcontent-%COMP%_float 6s ease-in-out infinite reverse;\n}\n.floating-shapes[_ngcontent-%COMP%]   .shape.shape-3[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  top: 40%;\n  right: 20%;\n  animation: _ngcontent-%COMP%_float 10s ease-in-out infinite;\n}\n\n@keyframes _ngcontent-%COMP%_float {\n  0%, 100% {\n    transform: translateY(0px) rotate(0deg);\n  }\n  50% {\n    transform: translateY(-20px) rotate(180deg);\n  }\n}\n.hero-content[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  max-width: 1200px;\n  margin: 0 auto;\n  text-align: center;\n}\n\n.breadcrumb-nav[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  margin-bottom: 30px;\n  font-size: 14px;\n}\n\n.breadcrumb-link[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.8);\n  text-decoration: none;\n  transition: color 0.3s;\n}\n.breadcrumb-link[_ngcontent-%COMP%]:hover {\n  color: white;\n}\n\n.breadcrumb-separator[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.6);\n}\n\n.breadcrumb-active[_ngcontent-%COMP%] {\n  color: white;\n  font-weight: 600;\n}\n\n.hero-title[_ngcontent-%COMP%] {\n  font-size: 48px;\n  font-weight: 700;\n  margin: 0 0 20px;\n  color: white;\n}\n@media (max-width: 768px) {\n  .hero-title[_ngcontent-%COMP%] {\n    font-size: 36px;\n  }\n}\n\n.hero-subtitle[_ngcontent-%COMP%] {\n  font-size: 20px;\n  opacity: 0.9;\n  margin: 0 0 40px;\n  font-weight: 400;\n  max-width: 600px;\n  margin-left: auto;\n  margin-right: auto;\n}\n@media (max-width: 768px) {\n  .hero-subtitle[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n}\n\n.reward-stats[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  gap: 30px;\n  flex-wrap: wrap;\n  margin-top: 40px;\n}\n@media (max-width: 768px) {\n  .reward-stats[_ngcontent-%COMP%] {\n    gap: 20px;\n  }\n}\n\n.stat-card[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.15);\n  -webkit-backdrop-filter: blur(10px);\n          backdrop-filter: blur(10px);\n  border-radius: 12px;\n  padding: 24px;\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  min-width: 200px;\n}\n@media (max-width: 768px) {\n  .stat-card[_ngcontent-%COMP%] {\n    min-width: 150px;\n    padding: 20px;\n  }\n}\n\n.stat-icon[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  background: rgba(255, 255, 255, 0.2);\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.stat-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n  height: 24px;\n  width: 24px;\n  color: white;\n}\n\n.stat-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 700;\n  margin: 0 0 4px;\n  color: white;\n}\n@media (max-width: 768px) {\n  .stat-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 24px;\n  }\n}\n.stat-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 14px;\n  opacity: 0.9;\n  color: rgba(255, 255, 255, 0.9);\n}\n\n\n\n.cta-section[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.15);\n  -webkit-backdrop-filter: blur(10px);\n          backdrop-filter: blur(10px);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  border-radius: 16px;\n  padding: 40px 30px;\n  max-width: 600px;\n  margin: 40px auto 0;\n  text-align: center;\n}\n@media (max-width: 768px) {\n  .cta-section[_ngcontent-%COMP%] {\n    padding: 30px 20px;\n    margin-top: 30px;\n  }\n}\n\n.cta-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 32px;\n  font-weight: 700;\n  margin: 0 0 16px;\n  color: white;\n}\n@media (max-width: 768px) {\n  .cta-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 26px;\n  }\n}\n.cta-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 18px;\n  opacity: 0.9;\n  margin: 0 0 32px;\n  line-height: 1.6;\n  color: rgba(255, 255, 255, 0.95);\n}\n@media (max-width: 768px) {\n  .cta-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 16px;\n    margin-bottom: 24px;\n  }\n}\n\n.cta-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  justify-content: center;\n  flex-wrap: wrap;\n}\n.cta-actions[_ngcontent-%COMP%]   .cta-button[_ngcontent-%COMP%] {\n  padding: 14px 32px;\n  font-size: 16px;\n  font-weight: 600;\n  border-radius: 10px;\n  min-width: 180px;\n  transition: transform 0.3s, box-shadow 0.3s;\n}\n.cta-actions[_ngcontent-%COMP%]   .cta-button[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);\n}\n.cta-actions[_ngcontent-%COMP%]   .cta-button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}\n.cta-actions[_ngcontent-%COMP%]   .cta-button[_ngcontent-%COMP%]:first-child {\n  background: white;\n  color: #0d47a1;\n}\n.cta-actions[_ngcontent-%COMP%]   .cta-button[_ngcontent-%COMP%]:last-child {\n  background: transparent;\n  border: 2px solid white;\n  color: white;\n}\n\n\n\n.refer-content[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 60px 20px;\n}\n@media (max-width: 768px) {\n  .refer-content[_ngcontent-%COMP%] {\n    padding: 40px 15px;\n  }\n}\n\n.content-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 30px;\n  margin-bottom: 40px;\n}\n@media (max-width: 968px) {\n  .content-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n\n\n\nmat-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);\n  overflow: hidden;\n  transition: transform 0.3s, box-shadow 0.3s;\n}\nmat-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5px);\n  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);\n}\n\n\n\n.referral-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 30px;\n}\n.referral-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 700;\n  margin: 0 0 12px;\n  color: #333;\n}\n@media (max-width: 768px) {\n  .referral-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 24px;\n  }\n}\n.referral-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #666;\n  margin: 0;\n  line-height: 1.5;\n}\n\n.referral-code-container[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.referral-code[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 16px;\n  padding: 20px 30px;\n  background: linear-gradient(135deg, #f8fafc, #e2e8f0);\n  border: 2px dashed #0d47a1;\n  border-radius: 12px;\n  margin-bottom: 24px;\n}\n.referral-code[_ngcontent-%COMP%]   .code-text[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 700;\n  color: #0d47a1;\n  letter-spacing: 2px;\n  font-family: \"Courier New\", monospace;\n}\n@media (max-width: 768px) {\n  .referral-code[_ngcontent-%COMP%]   .code-text[_ngcontent-%COMP%] {\n    font-size: 22px;\n  }\n}\n.referral-code[_ngcontent-%COMP%]   .copy-btn[_ngcontent-%COMP%] {\n  color: #0d47a1;\n}\n.referral-code[_ngcontent-%COMP%]   .copy-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(13, 71, 161, 0.1);\n}\n\n.code-actions[_ngcontent-%COMP%]   .share-btn[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #092e6b, #0d47a1);\n  color: white;\n  padding: 12px 24px;\n  font-weight: 600;\n}\n.code-actions[_ngcontent-%COMP%]   .share-btn[_ngcontent-%COMP%]:hover {\n  background: linear-gradient(135deg, #0d47a1, #1565c0);\n}\n.code-actions[_ngcontent-%COMP%]   .share-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}\n\n\n\n.works-card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%] {\n  padding: 30px 30px 0;\n}\n.works-card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 700;\n  color: #333;\n  margin: 0;\n}\n\n.steps-container[_ngcontent-%COMP%] {\n  padding: 20px 0;\n}\n\n.step-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 20px;\n  padding: 24px 0;\n  border-bottom: 1px solid #f0f0f0;\n}\n.step-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n\n.step-number[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  background: linear-gradient(135deg, #092e6b, #0d47a1);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  font-weight: 700;\n  font-size: 18px;\n  flex-shrink: 0;\n}\n\n.step-content[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.step-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  margin: 0 0 8px;\n  color: #333;\n}\n.step-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 14px;\n  color: #666;\n  line-height: 1.5;\n}\n\n\n\n.share-section[_ngcontent-%COMP%] {\n  margin-bottom: 40px;\n}\n\n.share-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%] {\n  padding: 30px;\n  text-align: center;\n}\n.share-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 700;\n  margin: 0 0 24px;\n  color: #333;\n}\n\n.share-options[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));\n  gap: 16px;\n}\n@media (max-width: 768px) {\n  .share-options[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n@media (max-width: 480px) {\n  .share-options[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n\n.share-option[_ngcontent-%COMP%] {\n  padding: 16px 20px;\n  font-weight: 600;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  transition: all 0.3s ease;\n}\n.share-option.whatsapp[_ngcontent-%COMP%] {\n  background: #25D366;\n  color: white;\n}\n.share-option.whatsapp[_ngcontent-%COMP%]:hover {\n  background: #128C7E;\n}\n.share-option.email[_ngcontent-%COMP%] {\n  background: #EA4335;\n  color: white;\n}\n.share-option.email[_ngcontent-%COMP%]:hover {\n  background: #D14836;\n}\n.share-option.sms[_ngcontent-%COMP%] {\n  background: #34B7F1;\n  color: white;\n}\n.share-option.sms[_ngcontent-%COMP%]:hover {\n  background: #0A8ED9;\n}\n.share-option.link[_ngcontent-%COMP%] {\n  background: #666;\n  color: white;\n}\n.share-option.link[_ngcontent-%COMP%]:hover {\n  background: #555;\n}\n.share-option[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  height: 20px;\n  width: 20px;\n}\n\n\n\n.signup-cta-section[_ngcontent-%COMP%] {\n  margin-bottom: 40px;\n}\n\n.signup-cta-card[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%) !important;\n  border: 2px solid #e0e0e0 !important;\n}\n.signup-cta-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%] {\n  padding: 40px;\n}\n\n.signup-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n}\n.signup-content[_ngcontent-%COMP%]   .signup-icon[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.signup-content[_ngcontent-%COMP%]   .signup-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 64px;\n  height: 64px;\n  width: 64px;\n  color: #0d47a1;\n}\n.signup-content[_ngcontent-%COMP%]   .signup-text[_ngcontent-%COMP%] {\n  max-width: 700px;\n  margin-bottom: 32px;\n}\n.signup-content[_ngcontent-%COMP%]   .signup-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 32px;\n  font-weight: 700;\n  margin: 0 0 16px;\n  color: #333;\n}\n@media (max-width: 768px) {\n  .signup-content[_ngcontent-%COMP%]   .signup-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 26px;\n  }\n}\n.signup-content[_ngcontent-%COMP%]   .signup-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #666;\n  margin: 0 0 24px;\n  line-height: 1.6;\n}\n@media (max-width: 768px) {\n  .signup-content[_ngcontent-%COMP%]   .signup-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n}\n.signup-content[_ngcontent-%COMP%]   .benefits-list[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  max-width: 500px;\n  margin: 0 auto 32px;\n  text-align: left;\n}\n.signup-content[_ngcontent-%COMP%]   .benefits-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-bottom: 16px;\n  font-size: 16px;\n  color: #333;\n}\n.signup-content[_ngcontent-%COMP%]   .benefits-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.signup-content[_ngcontent-%COMP%]   .benefits-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #4caf50;\n  margin-right: 12px;\n  flex-shrink: 0;\n}\n.signup-content[_ngcontent-%COMP%]   .signup-action[_ngcontent-%COMP%]   .signup-button[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #092e6b, #0d47a1);\n  color: white;\n  padding: 16px 40px;\n  font-size: 18px;\n  font-weight: 600;\n  border-radius: 10px;\n  margin-bottom: 20px;\n  transition: transform 0.3s, box-shadow 0.3s;\n}\n.signup-content[_ngcontent-%COMP%]   .signup-action[_ngcontent-%COMP%]   .signup-button[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 25px rgba(13, 71, 161, 0.3);\n}\n.signup-content[_ngcontent-%COMP%]   .signup-action[_ngcontent-%COMP%]   .signup-button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  margin-right: 12px;\n}\n.signup-content[_ngcontent-%COMP%]   .signup-action[_ngcontent-%COMP%]   .signup-note[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: #666;\n}\n.signup-content[_ngcontent-%COMP%]   .signup-action[_ngcontent-%COMP%]   .signup-note[_ngcontent-%COMP%]   .login-link[_ngcontent-%COMP%] {\n  color: #0d47a1;\n  text-decoration: none;\n  font-weight: 600;\n  margin-left: 4px;\n}\n.signup-content[_ngcontent-%COMP%]   .signup-action[_ngcontent-%COMP%]   .signup-note[_ngcontent-%COMP%]   .login-link[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n\n\n\n.rewards-section[_ngcontent-%COMP%] {\n  margin-bottom: 40px;\n}\n\n.rewards-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%] {\n  padding: 30px;\n}\n.rewards-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 700;\n  margin: 0 0 30px;\n  color: #333;\n  text-align: center;\n}\n\n.rewards-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 24px;\n}\n\n.reward-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 16px;\n  padding: 20px;\n  background: #f8f9fa;\n  border-radius: 10px;\n  border-left: 4px solid #0d47a1;\n}\n\n.reward-icon[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.reward-icon.primary[_ngcontent-%COMP%] {\n  background: rgba(13, 71, 161, 0.1);\n  color: #0d47a1;\n}\n.reward-icon.accent[_ngcontent-%COMP%] {\n  background: rgba(255, 64, 129, 0.1);\n  color: #d97706;\n}\n.reward-icon.success[_ngcontent-%COMP%] {\n  background: rgba(76, 175, 80, 0.1);\n  color: #4caf50;\n}\n.reward-icon.warning[_ngcontent-%COMP%] {\n  background: rgba(255, 152, 0, 0.1);\n  color: #ff9800;\n}\n.reward-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n  height: 24px;\n  width: 24px;\n}\n\n.reward-content[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.reward-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  margin: 0 0 8px;\n  color: #333;\n}\n.reward-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 14px;\n  color: #666;\n  line-height: 1.5;\n}\n\n\n\n.history-section[_ngcontent-%COMP%] {\n  margin-bottom: 40px;\n}\n\n.history-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%] {\n  padding: 30px;\n}\n\n.history-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 24px;\n}\n.history-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 700;\n  margin: 0;\n  color: #333;\n}\n.history-header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n\n.history-list[_ngcontent-%COMP%]   .history-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 16px 0;\n  border-bottom: 1px solid #f0f0f0;\n}\n.history-list[_ngcontent-%COMP%]   .history-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n\n.referral-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  flex: 1;\n}\n\n.referral-avatar[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  background: #f0f0f0;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.referral-avatar[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #666;\n}\n\n.referral-details[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  margin: 0 0 4px;\n  color: #333;\n}\n.referral-details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 12px;\n  color: #666;\n}\n\n.referral-status[_ngcontent-%COMP%] {\n  padding: 6px 12px;\n  border-radius: 20px;\n  font-size: 12px;\n  font-weight: 600;\n  text-transform: uppercase;\n}\n.referral-status.completed[_ngcontent-%COMP%] {\n  background: rgba(76, 175, 80, 0.1);\n  color: #4caf50;\n}\n.referral-status.pending[_ngcontent-%COMP%] {\n  background: rgba(255, 152, 0, 0.1);\n  color: #ff9800;\n}\n.referral-status.failed[_ngcontent-%COMP%] {\n  background: rgba(244, 67, 54, 0.1);\n  color: #f44336;\n}\n\n.referral-amount[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  color: #4caf50;\n  margin-left: 16px;\n}\n\n\n\n.faq-section[_ngcontent-%COMP%] {\n  margin-bottom: 40px;\n}\n\n.faq-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%] {\n  padding: 30px;\n}\n.faq-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 700;\n  margin: 0 0 24px;\n  color: #333;\n  text-align: center;\n}\n\nmat-expansion-panel[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n  border-radius: 8px !important;\n}\nmat-expansion-panel[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n\nmat-panel-title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #333;\n}\n\n\n\n.final-cta-section[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #092e6b 0%, #0d47a1 100%);\n  color: white;\n  border-radius: 16px;\n  padding: 50px 40px;\n  text-align: center;\n  margin-top: 40px;\n}\n@media (max-width: 768px) {\n  .final-cta-section[_ngcontent-%COMP%] {\n    padding: 40px 20px;\n    margin-top: 30px;\n  }\n}\n\n.final-cta-content[_ngcontent-%COMP%] {\n  max-width: 700px;\n  margin: 0 auto;\n}\n.final-cta-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 36px;\n  font-weight: 700;\n  margin: 0 0 20px;\n  color: white;\n}\n@media (max-width: 768px) {\n  .final-cta-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 28px;\n  }\n}\n.final-cta-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 18px;\n  opacity: 0.9;\n  margin: 0 0 32px;\n  line-height: 1.6;\n}\n@media (max-width: 768px) {\n  .final-cta-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 16px;\n    margin-bottom: 24px;\n  }\n}\n\n.final-cta-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  justify-content: center;\n  flex-wrap: wrap;\n}\n.final-cta-actions[_ngcontent-%COMP%]   .cta-primary[_ngcontent-%COMP%] {\n  background: white;\n  color: #0d47a1;\n  padding: 14px 32px;\n  font-size: 16px;\n  font-weight: 600;\n  border-radius: 10px;\n  min-width: 200px;\n  transition: transform 0.3s, box-shadow 0.3s;\n}\n.final-cta-actions[_ngcontent-%COMP%]   .cta-primary[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);\n}\n.final-cta-actions[_ngcontent-%COMP%]   .cta-primary[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}\n.final-cta-actions[_ngcontent-%COMP%]   .cta-secondary[_ngcontent-%COMP%] {\n  background: transparent;\n  border: 2px solid white;\n  color: white;\n  padding: 14px 32px;\n  font-size: 16px;\n  font-weight: 600;\n  border-radius: 10px;\n  min-width: 200px;\n  transition: all 0.3s;\n}\n.final-cta-actions[_ngcontent-%COMP%]   .cta-secondary[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.1);\n  transform: translateY(-2px);\n}\n.final-cta-actions[_ngcontent-%COMP%]   .cta-secondary[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}\n\n\n\n.loading-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 40px;\n}\n.loading-container[_ngcontent-%COMP%]   mat-spinner[_ngcontent-%COMP%] {\n  margin-right: 16px;\n}\n\n\n\n@media (max-width: 768px) {\n  .refer-hero[_ngcontent-%COMP%] {\n    padding: 60px 20px 40px;\n  }\n  .hero-title[_ngcontent-%COMP%] {\n    font-size: 36px;\n  }\n  .hero-subtitle[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n  .reward-stats[_ngcontent-%COMP%] {\n    gap: 16px;\n  }\n  .stat-card[_ngcontent-%COMP%] {\n    min-width: 140px;\n    padding: 16px;\n  }\n  .stat-icon[_ngcontent-%COMP%] {\n    width: 40px;\n    height: 40px;\n  }\n  .stat-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n  .stat-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 22px;\n  }\n  .cta-section[_ngcontent-%COMP%] {\n    padding: 30px 20px;\n    margin-top: 30px;\n  }\n  .cta-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 26px;\n  }\n  .cta-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: center;\n  }\n  .cta-button[_ngcontent-%COMP%] {\n    width: 100%;\n    max-width: 280px;\n  }\n  .content-grid[_ngcontent-%COMP%] {\n    gap: 20px;\n  }\n  .referral-code[_ngcontent-%COMP%] {\n    padding: 16px 24px;\n  }\n  .referral-code[_ngcontent-%COMP%]   .code-text[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n  .step-item[_ngcontent-%COMP%] {\n    flex-direction: column;\n    text-align: center;\n    gap: 12px;\n  }\n  .history-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 12px;\n  }\n  .signup-content[_ngcontent-%COMP%]   .signup-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 26px;\n  }\n  .signup-cta-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%] {\n    padding: 30px 20px;\n  }\n  .signup-action[_ngcontent-%COMP%]   .signup-button[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .final-cta-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 28px;\n  }\n  .final-cta-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: center;\n  }\n  .cta-primary[_ngcontent-%COMP%], \n   .cta-secondary[_ngcontent-%COMP%] {\n    width: 100%;\n    max-width: 280px;\n  }\n}\n@media (max-width: 480px) {\n  .hero-title[_ngcontent-%COMP%] {\n    font-size: 28px;\n  }\n  .hero-subtitle[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n  .reward-stats[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: center;\n  }\n  .stat-card[_ngcontent-%COMP%] {\n    width: 100%;\n    max-width: 250px;\n  }\n  .referral-code[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 12px;\n  }\n  .share-options[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .rewards-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n\n\n  .success-snackbar {\n  background: #4caf50 !important;\n  color: white !important;\n}\n  .error-snackbar {\n  background: #f44336 !important;\n  color: white !important;\n}\n  .info-snackbar {\n  background: #2196f3 !important;\n  color: white !important;\n}\n  .warning-snackbar {\n  background: #ff9800 !important;\n  color: white !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvcmVmZXJhbHMvcmVmZXItYW5kLWVhcm4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0FBQUY7O0FBR0EsaUJBQUE7QUFDQTtFQUNFLDZEQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUFGOztBQUdBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtBQUFGO0FBRUU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsK0tBQ0U7QUFETjs7QUFNQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFIRjtBQUtFO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG9DQUFBO0FBSEo7QUFLSTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSx3Q0FBQTtBQUhOO0FBTUk7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0VBQ0EsZ0RBQUE7QUFKTjtBQU9JO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLHlDQUFBO0FBTE47O0FBVUE7RUFDRTtJQUFXLHVDQUFBO0VBTlg7RUFPQTtJQUFNLDJDQUFBO0VBSk47QUFDRjtBQU1BO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFKRjs7QUFPQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsUUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQUpGOztBQU9BO0VBQ0UsK0JBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0FBSkY7QUFNRTtFQUNFLFlBQUE7QUFKSjs7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LGdCQUFBO0VBdkdGO0FBQ0Y7QUEwR0E7RUFDRTtJQUNFLGVBQUE7RUF4R0Y7RUEyR0E7SUFDRSxlQUFBO0VBekdGO0VBNEdBO0lBQ0Usc0JBQUE7SUFDQSxtQkFBQTtFQTFHRjtFQTZHQTtJQUNFLFdBQUE7SUFDQSxnQkFBQTtFQTNHRjtFQThHQTtJQUNFLHNCQUFBO0lBQ0EsU0FBQTtFQTVHRjtFQStHQTtJQUNFLDBCQUFBO0VBN0dGO0VBZ0hBO0lBQ0UsMEJBQUE7RUE5R0Y7QUFDRjtBQWlIQSxvQkFBQTtBQUVFO0VBQ0UsOEJBQUE7RUFDQSx1QkFBQTtBQWhISjtBQW1IRTtFQUNFLDhCQUFBO0VBQ0EsdUJBQUE7QUFqSEo7QUFvSEU7RUFDRSw4QkFBQTtFQUNBLHVCQUFBO0FBbEhKO0FBcUhFO0VBQ0UsOEJBQUE7RUFDQSx1QkFBQTtBQW5ISiIsInNvdXJjZXNDb250ZW50IjpbIi8vIHJlZmVyLWVhcm4uY29tcG9uZW50LnNjc3NcclxuLnJlZmVyLWVhcm4tY29udGFpbmVyIHtcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxufVxyXG5cclxuLyogSGVybyBTZWN0aW9uICovXHJcbi5yZWZlci1oZXJvIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMDkyZTZiIDAlLCAjMGQ0N2ExIDEwMCUpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiA4MHB4IDIwcHggNjBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLmhlcm8tYmFja2dyb3VuZCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBvcGFjaXR5OiAwLjE7XHJcblxyXG4gICY6OmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGJhY2tncm91bmQ6XHJcbiAgICAgIHJhZGlhbC1ncmFkaWVudChjaXJjbGUgYXQgMjAlIDgwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpIDAlLCB0cmFuc3BhcmVudCA1MCUpLFxyXG4gICAgICByYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0IDgwJSAyMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNSkgMCUsIHRyYW5zcGFyZW50IDUwJSk7XHJcbiAgfVxyXG59XHJcblxyXG4uZmxvYXRpbmctc2hhcGVzIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuICAuc2hhcGUge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xyXG5cclxuICAgICYuc2hhcGUtMSB7XHJcbiAgICAgIHdpZHRoOiAxMjBweDtcclxuICAgICAgaGVpZ2h0OiAxMjBweDtcclxuICAgICAgdG9wOiAxMCU7XHJcbiAgICAgIHJpZ2h0OiAxMCU7XHJcbiAgICAgIGFuaW1hdGlvbjogZmxvYXQgOHMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XHJcbiAgICB9XHJcblxyXG4gICAgJi5zaGFwZS0yIHtcclxuICAgICAgd2lkdGg6IDgwcHg7XHJcbiAgICAgIGhlaWdodDogODBweDtcclxuICAgICAgYm90dG9tOiAyMCU7XHJcbiAgICAgIGxlZnQ6IDUlO1xyXG4gICAgICBhbmltYXRpb246IGZsb2F0IDZzIGVhc2UtaW4tb3V0IGluZmluaXRlIHJldmVyc2U7XHJcbiAgICB9XHJcblxyXG4gICAgJi5zaGFwZS0zIHtcclxuICAgICAgd2lkdGg6IDYwcHg7XHJcbiAgICAgIGhlaWdodDogNjBweDtcclxuICAgICAgdG9wOiA0MCU7XHJcbiAgICAgIHJpZ2h0OiAyMCU7XHJcbiAgICAgIGFuaW1hdGlvbjogZmxvYXQgMTBzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBmbG9hdCB7XHJcbiAgMCUsIDEwMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KSByb3RhdGUoMGRlZyk7IH1cclxuICA1MCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwcHgpIHJvdGF0ZSgxODBkZWcpOyB9XHJcbn1cclxuXHJcbi5oZXJvLWNvbnRlbnQge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiAyO1xyXG4gIG1heC13aWR0aDogMTIwMHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmJyZWFkY3J1bWItbmF2IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZ2FwOiA4cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbi5icmVhZGNydW1iLWxpbmsge1xyXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIHRyYW5zaXRpb246IGNvbG9yIDAuM3M7XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxufVxyXG5cclxuLmJyZWFkY3J1bWItc2VwYXJhdG9yIHtcclxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpO1xyXG59XHJcblxyXG4uYnJlYWRjcnVtYi1hY3RpdmUge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4uaGVyby10aXRsZSB7XHJcbiAgZm9udC1zaXplOiA0OHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgbWFyZ2luOiAwIDAgMjBweDtcclxuICBjb2xvcjogd2hpdGU7XHJcblxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgZm9udC1zaXplOiAzNnB4O1xyXG4gIH1cclxufVxyXG5cclxuLmhlcm8tc3VidGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBvcGFjaXR5OiAwLjk7XHJcbiAgbWFyZ2luOiAwIDAgNDBweDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIG1heC13aWR0aDogNjAwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICB9XHJcbn1cclxuXHJcbi5yZXdhcmQtc3RhdHMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZ2FwOiAzMHB4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBtYXJnaW4tdG9wOiA0MHB4O1xyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIGdhcDogMjBweDtcclxuICB9XHJcbn1cclxuXHJcbi5zdGF0LWNhcmQge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSk7XHJcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgcGFkZGluZzogMjRweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAxNnB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcclxuICBtaW4td2lkdGg6IDIwMHB4O1xyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIG1pbi13aWR0aDogMTUwcHg7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gIH1cclxufVxyXG5cclxuLnN0YXQtaWNvbiB7XHJcbiAgd2lkdGg6IDUwcHg7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgbWF0LWljb24ge1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgd2lkdGg6IDI0cHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG59XHJcblxyXG4uc3RhdC1jb250ZW50IHtcclxuICBoMyB7XHJcbiAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgbWFyZ2luOiAwIDAgNHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG5cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIG9wYWNpdHk6IDAuOTtcclxuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSk7XHJcbiAgfVxyXG59XHJcblxyXG4vKiBDVEEgU2VjdGlvbiBmb3IgTm9uLUxvZ2dlZCBJbiBVc2VycyAqL1xyXG4uY3RhLXNlY3Rpb24ge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSk7XHJcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcclxuICBib3JkZXItcmFkaXVzOiAxNnB4O1xyXG4gIHBhZGRpbmc6IDQwcHggMzBweDtcclxuICBtYXgtd2lkdGg6IDYwMHB4O1xyXG4gIG1hcmdpbjogNDBweCBhdXRvIDA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIHBhZGRpbmc6IDMwcHggMjBweDtcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4uY3RhLWNvbnRlbnQge1xyXG4gIGgyIHtcclxuICAgIGZvbnQtc2l6ZTogMzJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBtYXJnaW46IDAgMCAxNnB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG5cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgICBmb250LXNpemU6IDI2cHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwIHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIG9wYWNpdHk6IDAuOTtcclxuICAgIG1hcmdpbjogMCAwIDMycHg7XHJcbiAgICBsaW5lLWhlaWdodDogMS42O1xyXG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45NSk7XHJcblxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMjRweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5jdGEtYWN0aW9ucyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBnYXA6IDE2cHg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG5cclxuICAuY3RhLWJ1dHRvbiB7XHJcbiAgICBwYWRkaW5nOiAxNHB4IDMycHg7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIG1pbi13aWR0aDogMTgwcHg7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcywgYm94LXNoYWRvdyAwLjNzO1xyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XHJcbiAgICAgIGJveC1zaGFkb3c6IDAgNnB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgfVxyXG5cclxuICAgIG1hdC1pY29uIHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgICB9XHJcblxyXG4gICAgJjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICBjb2xvcjogIzBkNDdhMTtcclxuICAgIH1cclxuXHJcbiAgICAmOmxhc3QtY2hpbGQge1xyXG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8qIE1haW4gQ29udGVudCAqL1xyXG4ucmVmZXItY29udGVudCB7XHJcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgcGFkZGluZzogNjBweCAyMHB4O1xyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIHBhZGRpbmc6IDQwcHggMTVweDtcclxuICB9XHJcbn1cclxuXHJcbi5jb250ZW50LWdyaWQge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xyXG4gIGdhcDogMzBweDtcclxuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogOTY4cHgpIHtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gIH1cclxufVxyXG5cclxuLyogQ2FyZHMgKi9cclxubWF0LWNhcmQge1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgYm94LXNoYWRvdzogMCA0cHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcywgYm94LXNoYWRvdyAwLjNzO1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNXB4KTtcclxuICAgIGJveC1zaGFkb3c6IDAgOHB4IDMwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxuICB9XHJcbn1cclxuXHJcbi8qIFJlZmVycmFsIENvZGUgU2VjdGlvbiAqL1xyXG4ucmVmZXJyYWwtaGVhZGVyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuXHJcbiAgaDIge1xyXG4gICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIG1hcmdpbjogMCAwIDEycHg7XHJcbiAgICBjb2xvcjogIzMzMztcclxuXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcCB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBjb2xvcjogIzY2NjtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgfVxyXG59XHJcblxyXG4ucmVmZXJyYWwtY29kZS1jb250YWluZXIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnJlZmVycmFsLWNvZGUge1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAxNnB4O1xyXG4gIHBhZGRpbmc6IDIwcHggMzBweDtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZjhmYWZjLCAjZTJlOGYwKTtcclxuICBib3JkZXI6IDJweCBkYXNoZWQgIzBkNDdhMTtcclxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XHJcblxyXG4gIC5jb2RlLXRleHQge1xyXG4gICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGNvbG9yOiAjMGQ0N2ExO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBtb25vc3BhY2U7XHJcblxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5jb3B5LWJ0biB7XHJcbiAgICBjb2xvcjogIzBkNDdhMTtcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgYmFja2dyb3VuZDogcmdiYSgxMywgNzEsIDE2MSwgMC4xKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5jb2RlLWFjdGlvbnMge1xyXG4gIC5zaGFyZS1idG4ge1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzA5MmU2YiwgIzBkNDdhMSk7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDI0cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMGQ0N2ExLCAjMTU2NWMwKTtcclxuICAgIH1cclxuXHJcbiAgICBtYXQtaWNvbiB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLyogSG93IEl0IFdvcmtzICovXHJcbi53b3Jrcy1jYXJkIHtcclxuICBtYXQtY2FyZC1oZWFkZXIge1xyXG4gICAgcGFkZGluZzogMzBweCAzMHB4IDA7XHJcblxyXG4gICAgaDIge1xyXG4gICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uc3RlcHMtY29udGFpbmVyIHtcclxuICBwYWRkaW5nOiAyMHB4IDA7XHJcbn1cclxuXHJcbi5zdGVwLWl0ZW0ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgZ2FwOiAyMHB4O1xyXG4gIHBhZGRpbmc6IDI0cHggMDtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2YwZjBmMDtcclxuXHJcbiAgJjpsYXN0LWNoaWxkIHtcclxuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbiAgfVxyXG59XHJcblxyXG4uc3RlcC1udW1iZXIge1xyXG4gIHdpZHRoOiA0MHB4O1xyXG4gIGhlaWdodDogNDBweDtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMDkyZTZiLCAjMGQ0N2ExKTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBmbGV4LXNocmluazogMDtcclxufVxyXG5cclxuLnN0ZXAtY29udGVudCB7XHJcbiAgZmxleDogMTtcclxuXHJcbiAgaDMge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIG1hcmdpbjogMCAwIDhweDtcclxuICAgIGNvbG9yOiAjMzMzO1xyXG4gIH1cclxuXHJcbiAgcCB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBjb2xvcjogIzY2NjtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgfVxyXG59XHJcblxyXG4vKiBTaGFyZSBPcHRpb25zICovXHJcbi5zaGFyZS1zZWN0aW9uIHtcclxuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG59XHJcblxyXG4uc2hhcmUtY2FyZCB7XHJcbiAgbWF0LWNhcmQtY29udGVudCB7XHJcbiAgICBwYWRkaW5nOiAzMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgIGgyIHtcclxuICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICBtYXJnaW46IDAgMCAyNHB4O1xyXG4gICAgICBjb2xvcjogIzMzMztcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5zaGFyZS1vcHRpb25zIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMTUwcHgsIDFmcikpO1xyXG4gIGdhcDogMTZweDtcclxuXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gIH1cclxufVxyXG5cclxuLnNoYXJlLW9wdGlvbiB7XHJcbiAgcGFkZGluZzogMTZweCAyMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGdhcDogOHB4O1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcblxyXG4gICYud2hhdHNhcHAge1xyXG4gICAgYmFja2dyb3VuZDogIzI1RDM2NjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgYmFja2dyb3VuZDogIzEyOEM3RTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICYuZW1haWwge1xyXG4gICAgYmFja2dyb3VuZDogI0VBNDMzNTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgYmFja2dyb3VuZDogI0QxNDgzNjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICYuc21zIHtcclxuICAgIGJhY2tncm91bmQ6ICMzNEI3RjE7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICMwQThFRDk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmLmxpbmsge1xyXG4gICAgYmFja2dyb3VuZDogIzY2NjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgYmFja2dyb3VuZDogIzU1NTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG1hdC1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gIH1cclxufVxyXG5cclxuLyogU2lnbiBVcCBDVEEgU2VjdGlvbiAqL1xyXG4uc2lnbnVwLWN0YS1zZWN0aW9uIHtcclxuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG59XHJcblxyXG4uc2lnbnVwLWN0YS1jYXJkIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZjhmOWZhIDAlLCAjZTllY2VmIDEwMCUpICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyOiAycHggc29saWQgI2UwZTBlMCAhaW1wb3J0YW50O1xyXG5cclxuICBtYXQtY2FyZC1jb250ZW50IHtcclxuICAgIHBhZGRpbmc6IDQwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4uc2lnbnVwLWNvbnRlbnQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgLnNpZ251cC1pY29uIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XHJcblxyXG4gICAgbWF0LWljb24ge1xyXG4gICAgICBmb250LXNpemU6IDY0cHg7XHJcbiAgICAgIGhlaWdodDogNjRweDtcclxuICAgICAgd2lkdGg6IDY0cHg7XHJcbiAgICAgIGNvbG9yOiAjMGQ0N2ExO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnNpZ251cC10ZXh0IHtcclxuICAgIG1heC13aWR0aDogNzAwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMnB4O1xyXG5cclxuICAgIGgyIHtcclxuICAgICAgZm9udC1zaXplOiAzMnB4O1xyXG4gICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICBtYXJnaW46IDAgMCAxNnB4O1xyXG4gICAgICBjb2xvcjogIzMzMztcclxuXHJcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjZweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHAge1xyXG4gICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgIGNvbG9yOiAjNjY2O1xyXG4gICAgICBtYXJnaW46IDAgMCAyNHB4O1xyXG4gICAgICBsaW5lLWhlaWdodDogMS42O1xyXG5cclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuYmVuZWZpdHMtbGlzdCB7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1heC13aWR0aDogNTAwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0byAzMnB4O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuXHJcbiAgICBsaSB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgY29sb3I6ICMzMzM7XHJcblxyXG4gICAgICAmOmxhc3QtY2hpbGQge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIG1hdC1pY29uIHtcclxuICAgICAgICBjb2xvcjogIzRjYWY1MDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XHJcbiAgICAgICAgZmxleC1zaHJpbms6IDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5zaWdudXAtYWN0aW9uIHtcclxuICAgIC5zaWdudXAtYnV0dG9uIHtcclxuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzA5MmU2YiwgIzBkNDdhMSk7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgcGFkZGluZzogMTZweCA0MHB4O1xyXG4gICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzLCBib3gtc2hhZG93IDAuM3M7XHJcblxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCA4cHggMjVweCByZ2JhKDEzLCA3MSwgMTYxLCAwLjMpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBtYXQtaWNvbiB7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnNpZ251cC1ub3RlIHtcclxuICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICBjb2xvcjogIzY2NjtcclxuXHJcbiAgICAgIC5sb2dpbi1saW5rIHtcclxuICAgICAgICBjb2xvcjogIzBkNDdhMTtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogNHB4O1xyXG5cclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLyogUmV3YXJkcyBTZWN0aW9uICovXHJcbi5yZXdhcmRzLXNlY3Rpb24ge1xyXG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbn1cclxuXHJcbi5yZXdhcmRzLWNhcmQge1xyXG4gIG1hdC1jYXJkLWNvbnRlbnQge1xyXG4gICAgcGFkZGluZzogMzBweDtcclxuXHJcbiAgICBoMiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgbWFyZ2luOiAwIDAgMzBweDtcclxuICAgICAgY29sb3I6ICMzMzM7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5yZXdhcmRzLWdyaWQge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyNTBweCwgMWZyKSk7XHJcbiAgZ2FwOiAyNHB4O1xyXG59XHJcblxyXG4ucmV3YXJkLWl0ZW0ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgZ2FwOiAxNnB4O1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgYmFja2dyb3VuZDogI2Y4ZjlmYTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGJvcmRlci1sZWZ0OiA0cHggc29saWQgIzBkNDdhMTtcclxufVxyXG5cclxuLnJld2FyZC1pY29uIHtcclxuICB3aWR0aDogNTBweDtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZmxleC1zaHJpbms6IDA7XHJcblxyXG4gICYucHJpbWFyeSB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDEzLCA3MSwgMTYxLCAwLjEpO1xyXG4gICAgY29sb3I6ICMwZDQ3YTE7XHJcbiAgfVxyXG5cclxuICAmLmFjY2VudCB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgNjQsIDEyOSwgMC4xKTtcclxuICAgIGNvbG9yOiAjZDk3NzA2O1xyXG4gIH1cclxuXHJcbiAgJi5zdWNjZXNzIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoNzYsIDE3NSwgODAsIDAuMSk7XHJcbiAgICBjb2xvcjogIzRjYWY1MDtcclxuICB9XHJcblxyXG4gICYud2FybmluZyB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMTUyLCAwLCAwLjEpO1xyXG4gICAgY29sb3I6ICNmZjk4MDA7XHJcbiAgfVxyXG5cclxuICBtYXQtaWNvbiB7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICB3aWR0aDogMjRweDtcclxuICB9XHJcbn1cclxuXHJcbi5yZXdhcmQtY29udGVudCB7XHJcbiAgZmxleDogMTtcclxuXHJcbiAgaDMge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIG1hcmdpbjogMCAwIDhweDtcclxuICAgIGNvbG9yOiAjMzMzO1xyXG4gIH1cclxuXHJcbiAgcCB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBjb2xvcjogIzY2NjtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgfVxyXG59XHJcblxyXG4vKiBIaXN0b3J5IFNlY3Rpb24gKi9cclxuLmhpc3Rvcnktc2VjdGlvbiB7XHJcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxufVxyXG5cclxuLmhpc3RvcnktY2FyZCB7XHJcbiAgbWF0LWNhcmQtY29udGVudCB7XHJcbiAgICBwYWRkaW5nOiAzMHB4O1xyXG4gIH1cclxufVxyXG5cclxuLmhpc3RvcnktaGVhZGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XHJcblxyXG4gIGgyIHtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBjb2xvcjogIzMzMztcclxuICB9XHJcblxyXG4gIGJ1dHRvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdhcDogNHB4O1xyXG4gIH1cclxufVxyXG5cclxuLmhpc3RvcnktbGlzdCB7XHJcbiAgLmhpc3RvcnktaXRlbSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHBhZGRpbmc6IDE2cHggMDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjBmMGYwO1xyXG5cclxuICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4ucmVmZXJyYWwtaW5mbyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMTJweDtcclxuICBmbGV4OiAxO1xyXG59XHJcblxyXG4ucmVmZXJyYWwtYXZhdGFyIHtcclxuICB3aWR0aDogNDBweDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgYmFja2dyb3VuZDogI2YwZjBmMDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICBtYXQtaWNvbiB7XHJcbiAgICBjb2xvcjogIzY2NjtcclxuICB9XHJcbn1cclxuXHJcbi5yZWZlcnJhbC1kZXRhaWxzIHtcclxuICBoNCB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgbWFyZ2luOiAwIDAgNHB4O1xyXG4gICAgY29sb3I6ICMzMzM7XHJcbiAgfVxyXG5cclxuICBwIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGNvbG9yOiAjNjY2O1xyXG4gIH1cclxufVxyXG5cclxuLnJlZmVycmFsLXN0YXR1cyB7XHJcbiAgcGFkZGluZzogNnB4IDEycHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG5cclxuICAmLmNvbXBsZXRlZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDc2LCAxNzUsIDgwLCAwLjEpO1xyXG4gICAgY29sb3I6ICM0Y2FmNTA7XHJcbiAgfVxyXG5cclxuICAmLnBlbmRpbmcge1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDE1MiwgMCwgMC4xKTtcclxuICAgIGNvbG9yOiAjZmY5ODAwO1xyXG4gIH1cclxuXHJcbiAgJi5mYWlsZWQge1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNDQsIDY3LCA1NCwgMC4xKTtcclxuICAgIGNvbG9yOiAjZjQ0MzM2O1xyXG4gIH1cclxufVxyXG5cclxuLnJlZmVycmFsLWFtb3VudCB7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgY29sb3I6ICM0Y2FmNTA7XHJcbiAgbWFyZ2luLWxlZnQ6IDE2cHg7XHJcbn1cclxuXHJcbi8qIEZBUSBTZWN0aW9uICovXHJcbi5mYXEtc2VjdGlvbiB7XHJcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxufVxyXG5cclxuLmZhcS1jYXJkIHtcclxuICBtYXQtY2FyZC1jb250ZW50IHtcclxuICAgIHBhZGRpbmc6IDMwcHg7XHJcblxyXG4gICAgaDIge1xyXG4gICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgIG1hcmdpbjogMCAwIDI0cHg7XHJcbiAgICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5tYXQtZXhwYW5zaW9uLXBhbmVsIHtcclxuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweCAhaW1wb3J0YW50O1xyXG5cclxuICAmOmxhc3QtY2hpbGQge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICB9XHJcbn1cclxuXHJcbm1hdC1wYW5lbC10aXRsZSB7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBjb2xvcjogIzMzMztcclxufVxyXG5cclxuLyogRmluYWwgQ1RBIFNlY3Rpb24gKi9cclxuLmZpbmFsLWN0YS1zZWN0aW9uIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMDkyZTZiIDAlLCAjMGQ0N2ExIDEwMCUpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiAxNnB4O1xyXG4gIHBhZGRpbmc6IDUwcHggNDBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogNDBweDtcclxuXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICBwYWRkaW5nOiA0MHB4IDIwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gIH1cclxufVxyXG5cclxuLmZpbmFsLWN0YS1jb250ZW50IHtcclxuICBtYXgtd2lkdGg6IDcwMHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG5cclxuICBoMiB7XHJcbiAgICBmb250LXNpemU6IDM2cHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgbWFyZ2luOiAwIDAgMjBweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcCB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBvcGFjaXR5OiAwLjk7XHJcbiAgICBtYXJnaW46IDAgMCAzMnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNjtcclxuXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmZpbmFsLWN0YS1hY3Rpb25zIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGdhcDogMTZweDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcblxyXG4gIC5jdGEtcHJpbWFyeSB7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGNvbG9yOiAjMGQ0N2ExO1xyXG4gICAgcGFkZGluZzogMTRweCAzMnB4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBtaW4td2lkdGg6IDIwMHB4O1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MsIGJveC1zaGFkb3cgMC4zcztcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xyXG4gICAgICBib3gtc2hhZG93OiAwIDZweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgIH1cclxuXHJcbiAgICBtYXQtaWNvbiB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmN0YS1zZWNvbmRhcnkge1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDE0cHggMzJweDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgbWluLXdpZHRoOiAyMDBweDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcclxuICAgIH1cclxuXHJcbiAgICBtYXQtaWNvbiB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLyogTG9hZGluZyBTdGF0ZXMgKi9cclxuLmxvYWRpbmctY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogNDBweDtcclxuXHJcbiAgbWF0LXNwaW5uZXIge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xyXG4gIH1cclxufVxyXG5cclxuLyogUmVzcG9uc2l2ZSBEZXNpZ24gKi9cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgLnJlZmVyLWhlcm8ge1xyXG4gICAgcGFkZGluZzogNjBweCAyMHB4IDQwcHg7XHJcbiAgfVxyXG5cclxuICAuaGVyby10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDM2cHg7XHJcbiAgfVxyXG5cclxuICAuaGVyby1zdWJ0aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgfVxyXG5cclxuICAucmV3YXJkLXN0YXRzIHtcclxuICAgIGdhcDogMTZweDtcclxuICB9XHJcblxyXG4gIC5zdGF0LWNhcmQge1xyXG4gICAgbWluLXdpZHRoOiAxNDBweDtcclxuICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgfVxyXG5cclxuICAuc3RhdC1pY29uIHtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG5cclxuICAgIG1hdC1pY29uIHtcclxuICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnN0YXQtY29udGVudCBoMyB7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgfVxyXG5cclxuICAuY3RhLXNlY3Rpb24ge1xyXG4gICAgcGFkZGluZzogMzBweCAyMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICB9XHJcblxyXG4gIC5jdGEtY29udGVudCBoMiB7XHJcbiAgICBmb250LXNpemU6IDI2cHg7XHJcbiAgfVxyXG5cclxuICAuY3RhLWFjdGlvbnMge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAuY3RhLWJ1dHRvbiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1heC13aWR0aDogMjgwcHg7XHJcbiAgfVxyXG5cclxuICAuY29udGVudC1ncmlkIHtcclxuICAgIGdhcDogMjBweDtcclxuICB9XHJcblxyXG4gIC5yZWZlcnJhbC1jb2RlIHtcclxuICAgIHBhZGRpbmc6IDE2cHggMjRweDtcclxuXHJcbiAgICAuY29kZS10ZXh0IHtcclxuICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnN0ZXAtaXRlbSB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZ2FwOiAxMnB4O1xyXG4gIH1cclxuXHJcbiAgLmhpc3RvcnktaGVhZGVyIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgIGdhcDogMTJweDtcclxuICB9XHJcblxyXG4gIC5zaWdudXAtY29udGVudCAuc2lnbnVwLXRleHQgaDIge1xyXG4gICAgZm9udC1zaXplOiAyNnB4O1xyXG4gIH1cclxuXHJcbiAgLnNpZ251cC1jdGEtY2FyZCBtYXQtY2FyZC1jb250ZW50IHtcclxuICAgIHBhZGRpbmc6IDMwcHggMjBweDtcclxuICB9XHJcblxyXG4gIC5zaWdudXAtYWN0aW9uIC5zaWdudXAtYnV0dG9uIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLmZpbmFsLWN0YS1jb250ZW50IGgyIHtcclxuICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICB9XHJcblxyXG4gIC5maW5hbC1jdGEtYWN0aW9ucyB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5jdGEtcHJpbWFyeSxcclxuICAuY3RhLXNlY29uZGFyeSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1heC13aWR0aDogMjgwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcclxuICAuaGVyby10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgfVxyXG5cclxuICAuaGVyby1zdWJ0aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgfVxyXG5cclxuICAucmV3YXJkLXN0YXRzIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLnN0YXQtY2FyZCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1heC13aWR0aDogMjUwcHg7XHJcbiAgfVxyXG5cclxuICAucmVmZXJyYWwtY29kZSB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZ2FwOiAxMnB4O1xyXG4gIH1cclxuXHJcbiAgLnNoYXJlLW9wdGlvbnMge1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgfVxyXG5cclxuICAucmV3YXJkcy1ncmlkIHtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gIH1cclxufVxyXG5cclxuLyogU25hY2tiYXIgU3R5bGVzICovXHJcbjo6bmctZGVlcCB7XHJcbiAgLnN1Y2Nlc3Mtc25hY2tiYXIge1xyXG4gICAgYmFja2dyb3VuZDogIzRjYWY1MCAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuZXJyb3Itc25hY2tiYXIge1xyXG4gICAgYmFja2dyb3VuZDogI2Y0NDMzNiAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuaW5mby1zbmFja2JhciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMjE5NmYzICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC53YXJuaW5nLXNuYWNrYmFyIHtcclxuICAgIGJhY2tncm91bmQ6ICNmZjk4MDAgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  }));
}
_staticBlock();

/***/ }),

/***/ 8948:
/*!********************************************************!*\
  !*** ./src/app/services/referrals/referral.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReferralService: () => (/* binding */ ReferralService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 3855);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 7919);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 1318);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ 6052);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4205);
var _staticBlock;





class ReferralService {
  constructor(http) {
    this.http = http;
    this.apiUrl = `${_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.apiUrl}` + `referrals`;
  }
  /**
   * Get referral statistics for the current user
   */
  getStats() {
    return this.http.get(`${this.apiUrl}/stats`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
  }
  /**
   * Create a new referral
   */
  createReferral(request) {
    return this.http.post(this.apiUrl, request).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
  }
  /**
   * Get referral history with pagination
   */
  getHistory(page = 0, size = 10) {
    const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams().set('page', page.toString()).set('size', size.toString());
    return this.http.get(`${this.apiUrl}/history`, {
      params
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
  }
  /**
   * Get recent referrals
   */
  getRecentHistory(limit = 5) {
    const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams().set('limit', limit.toString());
    return this.http.get(`${this.apiUrl}/recent`, {
      params
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
  }
  /**
   * Share referral via different methods
   */
  shareReferral(request) {
    return this.http.post(`${this.apiUrl}/share`, request).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
  }
  /**
   * Get or generate referral code
   */
  getReferralCode() {
    return this.http.get(`${this.apiUrl}/code`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
  }
  /**
   * Get referral by ID
   */
  getReferralById(id) {
    return this.http.get(`${this.apiUrl}/${id}`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
  }
  /**
   * Update referral status
   */
  updateStatus(id, status) {
    const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams().set('status', status);
    return this.http.patch(`${this.apiUrl}/${id}/status`, null, {
      params
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
  }
  /**
   * Delete referral
   */
  deleteReferral(id) {
    return this.http.delete(`${this.apiUrl}/${id}`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
  }
  /**
   * Filter referrals by status
   */
  getReferralsByStatus(status, page = 0, size = 10) {
    const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams().set('status', status).set('page', page.toString()).set('size', size.toString());
    return this.http.get(`${this.apiUrl}/filter`, {
      params
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
  }
  /**
   * Get total earnings from referrals
   */
  getTotalEarnings() {
    return this.http.get(`${this.apiUrl}/earnings`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
  }
  /**
   * Validate a referral code
   */
  validateReferralCode(code) {
    return this.http.get(`${this.apiUrl}/validate/${code}`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
  }
  /**
   * Get shareable link for a referral code
   */
  getShareableLink(referralCode) {
    return `${_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.apiUrl}/signup?ref=${referralCode}`;
  }
  /**
   * Generate WhatsApp share message
   */
  generateWhatsAppShareMessage(referralCode) {
    const message = `Join eStokvel - the modern way to manage your stokvels! Use my referral code ${referralCode} to get R25 bonus when you create your first stokvel. Sign up here: ${this.getShareableLink(referralCode)}`;
    return `https://wa.me/?text=${encodeURIComponent(message)}`;
  }
  /**
   * Generate email share content
   */
  generateEmailShareContent(referralCode) {
    const subject = 'Join eStokvel with my referral code!';
    const body = `Hi there!

I'm using eStokvel to manage my stokvels and thought you might be interested too!

Use my referral code ${referralCode} when you sign up and we'll both get rewards:
- You get R25 bonus when you create your first stokvel
- I get R50 when you join

Sign up here: ${this.getShareableLink(referralCode)}

Let's grow our savings together!`;
    return {
      subject,
      body
    };
  }
  /**
   * Generate SMS share content
   */
  generateSmsShareContent(referralCode) {
    return `Join eStokvel! Use my code ${referralCode} for R25 bonus. Sign up: ${this.getShareableLink(referralCode)}`;
  }
  /**
   * Share via WhatsApp using Web API
   */
  shareViaWhatsApp(referralCode) {
    const message = `Join eStokvel - the modern way to manage your stokvels! Use my referral code ${referralCode} to get R25 bonus when you create your first stokvel. Sign up here: ${this.getShareableLink(referralCode)}`;
    const url = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  }
  /**
   * Share via email using mailto
   */
  shareViaEmail(referralCode, recipientEmail) {
    const content = this.generateEmailShareContent(referralCode);
    const mailtoUrl = `mailto:${recipientEmail || ''}?subject=${encodeURIComponent(content.subject)}&body=${encodeURIComponent(content.body)}`;
    window.open(mailtoUrl, '_blank');
  }
  /**
   * Share via SMS using sms protocol
   */
  shareViaSMS(referralCode, recipientPhone) {
    const message = this.generateSmsShareContent(referralCode);
    const smsUrl = `sms:${recipientPhone || ''}?&body=${encodeURIComponent(message)}`;
    window.open(smsUrl, '_blank');
  }
  /**
   * Share using Web Share API if available
   */
  shareViaWebShare(referralCode) {
    if (navigator.share) {
      navigator.share({
        title: 'Join eStokvel',
        text: `Use my referral code ${referralCode} to get R25 bonus when you join eStokvel!`,
        url: this.getShareableLink(referralCode)
      }).catch(error => {
        console.error('Error sharing:', error);
        // Fallback to copying link
        this.copyToClipboard(this.getShareableLink(referralCode));
      });
    } else {
      // Fallback for browsers that don't support Web Share API
      this.copyToClipboard(this.getShareableLink(referralCode));
    }
  }
  /**
   * Copy text to clipboard
   */
  copyToClipboard(text) {
    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(text);
    } else {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = text;
      textArea.style.position = 'fixed';
      textArea.style.left = '-999999px';
      textArea.style.top = '-999999px';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      return new Promise((resolve, reject) => {
        try {
          document.execCommand('copy');
          textArea.remove();
          resolve();
        } catch (error) {
          textArea.remove();
          reject(error);
        }
      });
    }
  }
  /**
   * Format currency
   */
  formatCurrency(amount) {
    return new Intl.NumberFormat('en-ZA', {
      style: 'currency',
      currency: 'ZAR',
      minimumFractionDigits: 2
    }).format(amount);
  }
  /**
   * Format date for display
   */
  formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-ZA', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  }
  /**
   * Get status badge class
   */
  getStatusBadgeClass(status) {
    switch (status) {
      case 'COMPLETED':
        return 'badge-success';
      case 'PENDING':
        return 'badge-warning';
      case 'FAILED':
        return 'badge-danger';
      case 'EXPIRED':
        return 'badge-secondary';
      default:
        return 'badge-info';
    }
  }
  /**
   * Handle API errors
   */
  handleError(error) {
    let errorMessage = 'An error occurred';
    if (error.error instanceof ErrorEvent) {
      // Client-side error
      errorMessage = error.error.message;
    } else {
      // Server-side error
      if (error.status === 409) {
        errorMessage = error.error?.message || 'You already have a pending referral for this email.';
      } else if (error.status === 404) {
        errorMessage = 'Resource not found.';
      } else if (error.status === 403) {
        errorMessage = 'You do not have permission to perform this action.';
      } else if (error.status === 401) {
        errorMessage = 'Please login to continue.';
      } else if (error.status === 400) {
        errorMessage = error.error?.message || 'Invalid request. Please check your input.';
      } else if (error.status === 500) {
        errorMessage = 'Server error. Please try again later.';
      } else {
        errorMessage = error.error?.message || error.message || 'Unknown error occurred.';
      }
    }
    console.error('Referral Service Error:', error);
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.throwError)(() => new Error(errorMessage));
  }
  static #_ = _staticBlock = () => (this.ɵfac = function ReferralService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ReferralService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient));
  }, this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
    token: ReferralService,
    factory: ReferralService.ɵfac,
    providedIn: 'root'
  }));
}
_staticBlock();

/***/ })

}]);
//# sourceMappingURL=src_app_pages_referals_refer-and-earn_component_ts.js.map