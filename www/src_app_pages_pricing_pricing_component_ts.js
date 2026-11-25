"use strict";
(self["webpackChunkikage_ui"] = self["webpackChunkikage_ui"] || []).push([["src_app_pages_pricing_pricing_component_ts"],{

/***/ 5135:
/*!****************************************************!*\
  !*** ./src/app/pages/pricing/pricing.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PricingComponent: () => (/* binding */ PricingComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 4487);
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../material.module */ 9439);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2481);
/* harmony import */ var _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @auth0/auth0-angular */ 7989);
/* harmony import */ var _services_subscription_subscription_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/subscription/subscription.service */ 601);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 5422);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 3840);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/expansion */ 9322);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/progress-spinner */ 1134);
var _staticBlock;












function PricingComponent_div_8_span_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" \u00A0\u00B7 R", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](2, 1, ctx_r0.creditBalance, "1.2-2"), " referral credit ");
  }
}
function PricingComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 11)(1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "verified");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, " You're on the ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, " plan ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, PricingComponent_div_8_span_7_Template, 3, 4, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.currentTier);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.creditBalance > 0);
  }
}
function PricingComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "mat-spinner", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Loading your plan\u2026");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function PricingComponent_section_10_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Most Popular");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function PricingComponent_section_10_div_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 36)(1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "check_circle");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, " Current Plan ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function PricingComponent_section_10_div_1_span_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Free");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function PricingComponent_section_10_div_1_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "R");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "/mo");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const tier_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](tier_r3.monthlyAmountZar);
  }
}
function PricingComponent_section_10_div_1_li_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li")(1, "mat-icon", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "check");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const f_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", f_r4, " ");
  }
}
function PricingComponent_section_10_div_1_mat_spinner_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "mat-spinner", 41);
  }
}
function PricingComponent_section_10_div_1_ng_container_31_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Current Plan");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function PricingComponent_section_10_div_1_ng_container_31_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Switch to Free");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function PricingComponent_section_10_div_1_ng_container_31_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const tier_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Get ", tier_r3.name);
  }
}
function PricingComponent_section_10_div_1_ng_container_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, PricingComponent_section_10_div_1_ng_container_31_span_1_Template, 2, 0, "span", 26)(2, PricingComponent_section_10_div_1_ng_container_31_span_2_Template, 2, 0, "span", 26)(3, PricingComponent_section_10_div_1_ng_container_31_span_3_Template, 2, 1, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const tier_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", tier_r3.current);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !tier_r3.current && tier_r3.monthlyAmountZar === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !tier_r3.current && tier_r3.monthlyAmountZar > 0);
  }
}
function PricingComponent_section_10_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, PricingComponent_section_10_div_1_div_1_Template, 2, 0, "div", 19)(2, PricingComponent_section_10_div_1_div_2_Template, 4, 0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 21)(4, "div", 22)(5, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "h2", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, PricingComponent_section_10_div_1_span_10_Template, 2, 0, "span", 25)(11, PricingComponent_section_10_div_1_ng_container_11_Template, 7, 1, "ng-container", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 27)(13, "mat-icon", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "percent");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 29)(17, "div", 30)(18, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "groups");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "div", 30)(23, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, "account_balance");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "ul", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](28, PricingComponent_section_10_div_1_li_28_Template, 4, 1, "li", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PricingComponent_section_10_div_1_Template_button_click_29_listener() {
      const tier_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r0.selectTier(tier_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](30, PricingComponent_section_10_div_1_mat_spinner_30_Template, 1, 0, "mat-spinner", 34)(31, PricingComponent_section_10_div_1_ng_container_31_Template, 4, 3, "ng-container", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const tier_r3 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("tier-popular", tier_r3.code === "PRO")("tier-current", tier_r3.current);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", tier_r3.code === "PRO");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", tier_r3.current);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](tier_r3.code === "FREE" ? "savings" : tier_r3.code === "PRO" ? "star" : "business");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](tier_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", tier_r3.monthlyAmountZar === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", tier_r3.monthlyAmountZar > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r0.feeLabel(tier_r3), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", ctx_r0.memberLabel(tier_r3.maxMembersPerStokvel), " members per stokvel");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("", ctx_r0.stokvelLabel(tier_r3.maxStokvels), " stokvel", tier_r3.maxStokvels !== 1 ? "s" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", tier_r3.features);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("cta-primary", tier_r3.code === "PRO")("cta-current", tier_r3.current);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", tier_r3.current || ctx_r0.upgradeLoading === tier_r3.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.upgradeLoading === tier_r3.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.upgradeLoading !== tier_r3.code);
  }
}
function PricingComponent_section_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "section", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, PricingComponent_section_10_div_1_Template, 32, 22, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r0.tiers);
  }
}
class PricingComponent {
  constructor(authService, subscriptionService, snackBar, router) {
    this.authService = authService;
    this.subscriptionService = subscriptionService;
    this.snackBar = snackBar;
    this.router = router;
    this.isAuthenticated = false;
    this.isLoading = false;
    this.upgradeLoading = null;
    this.subscription = null;
    this.tiers = [];
    // Static fallback when user is not logged in
    this.staticTiers = [{
      code: 'FREE',
      name: 'Free',
      feeRatePercent: 3,
      maxFeePerTransaction: 15,
      monthlyAmountZar: 0,
      maxStokvels: 1,
      maxMembersPerStokvel: 10,
      features: ['1 stokvel', 'Up to 10 members', '3% transaction fee (max R15)', 'Basic notifications', 'Join request management'],
      current: false
    }, {
      code: 'PRO',
      name: 'Pro',
      feeRatePercent: 1.5,
      maxFeePerTransaction: null,
      monthlyAmountZar: 99,
      maxStokvels: -1,
      maxMembersPerStokvel: -1,
      features: ['Unlimited stokvels', 'Unlimited members', '1.5% transaction fee', 'Priority email support', 'Advanced analytics', 'Rotation queue management', 'Referral programme'],
      current: false
    }, {
      code: 'BUSINESS',
      name: 'Business',
      feeRatePercent: 1,
      maxFeePerTransaction: null,
      monthlyAmountZar: 299,
      maxStokvels: -1,
      maxMembersPerStokvel: -1,
      features: ['Everything in Pro', '1% transaction fee', 'Dedicated account manager', 'White-label options', 'API access', 'Custom payout schedules', 'FSCA compliance reports'],
      current: false
    }];
  }
  ngOnInit() {
    this.authService.isAuthenticated$.subscribe(auth => {
      this.isAuthenticated = auth;
      if (auth) {
        this.loadSubscription();
      } else {
        this.tiers = this.staticTiers;
      }
    });
  }
  loadSubscription() {
    this.isLoading = true;
    this.subscriptionService.load().subscribe({
      next: sub => {
        this.subscription = sub;
        this.tiers = sub.availableTiers ?? this.staticTiers;
        this.isLoading = false;
      },
      error: () => {
        this.tiers = this.staticTiers;
        this.isLoading = false;
      }
    });
  }
  selectTier(tier) {
    if (!this.isAuthenticated) {
      this.snackBar.open('Please log in to manage your subscription', 'Login', {
        duration: 4000
      }).onAction().subscribe(() => this.authService.loginWithRedirect({
        appState: {
          target: '/pricing'
        }
      }));
      return;
    }
    if (tier.current) return;
    this.upgradeLoading = tier.code;
    this.subscriptionService.changeTier(tier.code).subscribe({
      next: sub => {
        this.subscription = sub;
        this.tiers = sub.availableTiers ?? this.tiers;
        this.upgradeLoading = null;
        this.snackBar.open(`Switched to ${tier.name} plan ✓`, 'OK', {
          duration: 3000
        });
      },
      error: () => {
        this.upgradeLoading = null;
        this.snackBar.open('Failed to change plan. Please try again.', 'Close', {
          duration: 3000
        });
      }
    });
  }
  get currentTier() {
    return this.subscription?.tierDisplayName ?? 'Free';
  }
  get creditBalance() {
    return this.subscription?.referralCreditBalance ?? 0;
  }
  feeLabel(tier) {
    const cap = tier.maxFeePerTransaction != null ? ` (max R${tier.maxFeePerTransaction})` : '';
    return `${tier.feeRatePercent}% per transaction${cap}`;
  }
  memberLabel(n) {
    return n === -1 ? 'Unlimited' : n.toString();
  }
  stokvelLabel(n) {
    return n === -1 ? 'Unlimited' : n.toString();
  }
  static #_ = _staticBlock = () => (this.ɵfac = function PricingComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || PricingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_5__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_subscription_subscription_service__WEBPACK_IMPORTED_MODULE_6__.SubscriptionService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router));
  }, this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: PricingComponent,
    selectors: [["app-pricing"]],
    decls: 70,
    vars: 3,
    consts: [[1, "pricing-page"], [1, "pricing-hero"], [1, "hero-pill"], [1, "hero-sub"], ["class", "current-plan-chip", 4, "ngIf"], ["class", "pricing-loading", 4, "ngIf"], ["class", "tier-grid", 4, "ngIf"], [1, "fee-explainer"], [1, "explainer-grid"], [1, "explainer-card"], [1, "pricing-faq"], [1, "current-plan-chip"], ["class", "credit-badge", 4, "ngIf"], [1, "credit-badge"], [1, "pricing-loading"], ["diameter", "40"], [1, "tier-grid"], ["class", "tier-card", 3, "tier-popular", "tier-current", 4, "ngFor", "ngForOf"], [1, "tier-card"], ["class", "popular-badge", 4, "ngIf"], ["class", "current-badge", 4, "ngIf"], [1, "tier-header"], [1, "tier-icon"], [1, "tier-name"], [1, "tier-price"], ["class", "price-amount", 4, "ngIf"], [4, "ngIf"], [1, "tier-fee"], [1, "fee-icon"], [1, "tier-limits"], [1, "limit-row"], [1, "tier-features"], [4, "ngFor", "ngForOf"], [1, "tier-cta", 3, "click", "disabled"], ["diameter", "18", 4, "ngIf"], [1, "popular-badge"], [1, "current-badge"], [1, "price-amount"], [1, "price-currency"], [1, "price-period"], [1, "check-icon"], ["diameter", "18"]],
    template: function PricingComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "section", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Transparent Pricing");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Pay only for what you use");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, " Start free. Upgrade when your stokvel grows. No hidden charges \u2014 just a small transaction fee on contributions that keeps the platform running. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, PricingComponent_div_8_Template, 8, 2, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, PricingComponent_div_9_Template, 4, 0, "div", 5)(10, PricingComponent_section_10_Template, 2, 1, "section", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "section", 7)(12, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "How the transaction fee works");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 8)(15, "div", 9)(16, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "calculate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "Per contribution");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, " The fee is charged each time a member contributes to a stokvel. A R1 000 contribution on the Free plan incurs a R15 fee (3%, capped at R15). On Pro it's R15. On Business, R10. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "div", 9)(23, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, "redeem");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26, "Referral credits offset fees");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28, " Every successful referral earns you ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](30, "R50 credit");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31, ". Your friend gets ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33, "R25 credit");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34, " on signup. Credits are automatically applied before cash fees are charged \u2014 so active referrers often pay nothing. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "div", 9)(36, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](37, "security");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](39, "No payout fees");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](41, " We only charge on contributions \u2014 never on payouts. When it's your turn to receive the pool, 100% of the accumulated contributions land in your account. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "section", 10)(43, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](44, "Common Questions");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "mat-accordion")(46, "mat-expansion-panel")(47, "mat-expansion-panel-header")(48, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](49, "Can I switch tiers at any time?");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](50, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](51, "Yes. Upgrades take effect immediately. Downgrades take effect at your next billing cycle. Switching to Free is always instant.");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](52, "mat-expansion-panel")(53, "mat-expansion-panel-header")(54, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](55, "What happens to my referral credits if I cancel?");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](56, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](57, "Credits never expire and carry over regardless of your tier. Even on the Free plan, your credits will offset the 3% fee.");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](58, "mat-expansion-panel")(59, "mat-expansion-panel-header")(60, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](61, "Is VAT included?");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](62, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](63, "All prices shown are VAT-inclusive. iKage is registered with SARS and issues valid tax invoices on request.");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](64, "mat-expansion-panel")(65, "mat-expansion-panel-header")(66, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](67, "What payment methods do you accept?");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](68, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](69, "We currently support EFT (instant EFT via Stitch) and major debit/credit cards. SnapScan and PayShap coming soon.");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isAuthenticated && ctx.subscription);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.isLoading);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule, _material_module__WEBPACK_IMPORTED_MODULE_2__.MaterialModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIcon, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__.MatAccordion, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__.MatExpansionPanel, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__.MatExpansionPanelHeader, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__.MatExpansionPanelTitle, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__.MatProgressSpinner, _angular_common__WEBPACK_IMPORTED_MODULE_0__.DecimalPipe],
    styles: ["@charset \"UTF-8\";\n.pricing-page[_ngcontent-%COMP%] {\n  max-width: 1100px;\n  margin: 0 auto;\n  padding: 0 24px 64px;\n}\n\n\n\n.pricing-hero[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 64px 0 48px;\n}\n.pricing-hero[_ngcontent-%COMP%]   .hero-pill[_ngcontent-%COMP%] {\n  display: inline-block;\n  background: #e8f5e9;\n  color: #2e7d32;\n  font-size: 12px;\n  font-weight: 700;\n  letter-spacing: 1px;\n  text-transform: uppercase;\n  padding: 4px 14px;\n  border-radius: 20px;\n  margin-bottom: 16px;\n}\n.pricing-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 2.4rem;\n  font-weight: 800;\n  margin: 0 0 16px;\n  color: #1a1a1a;\n}\n.pricing-hero[_ngcontent-%COMP%]   .hero-sub[_ngcontent-%COMP%] {\n  color: #555;\n  font-size: 1.1rem;\n  max-width: 560px;\n  margin: 0 auto 24px;\n  line-height: 1.6;\n}\n.pricing-hero[_ngcontent-%COMP%]   .current-plan-chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  background: #e8f5e9;\n  color: #2e7d32;\n  padding: 8px 18px;\n  border-radius: 24px;\n  font-size: 14px;\n  font-weight: 600;\n}\n.pricing-hero[_ngcontent-%COMP%]   .current-plan-chip[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  height: 18px;\n  width: 18px;\n}\n.pricing-hero[_ngcontent-%COMP%]   .current-plan-chip[_ngcontent-%COMP%]   .credit-badge[_ngcontent-%COMP%] {\n  color: #f57c00;\n}\n\n.pricing-loading[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 60px;\n}\n.pricing-loading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #777;\n  margin-top: 16px;\n}\n\n\n\n.tier-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 24px;\n  margin-bottom: 64px;\n}\n\n.tier-card[_ngcontent-%COMP%] {\n  position: relative;\n  background: #fff;\n  border: 2px solid #e0e0e0;\n  border-radius: 16px;\n  padding: 32px 28px;\n  display: flex;\n  flex-direction: column;\n  transition: box-shadow 0.2s, transform 0.2s;\n}\n.tier-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);\n  transform: translateY(-2px);\n}\n.tier-card.tier-popular[_ngcontent-%COMP%] {\n  border-color: #1565c0;\n  box-shadow: 0 4px 24px rgba(21, 101, 192, 0.18);\n}\n.tier-card.tier-current[_ngcontent-%COMP%] {\n  border-color: #2e7d32;\n  background: #e8f5e9;\n}\n.tier-card[_ngcontent-%COMP%]   .popular-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -14px;\n  left: 50%;\n  transform: translateX(-50%);\n  background: #1565c0;\n  color: #fff;\n  font-size: 11px;\n  font-weight: 700;\n  letter-spacing: 0.5px;\n  padding: 4px 14px;\n  border-radius: 20px;\n  white-space: nowrap;\n}\n.tier-card[_ngcontent-%COMP%]   .current-badge[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  color: #2e7d32;\n  font-size: 12px;\n  font-weight: 700;\n  margin-bottom: 8px;\n}\n.tier-card[_ngcontent-%COMP%]   .current-badge[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  height: 16px;\n  width: 16px;\n}\n\n.tier-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 20px;\n}\n.tier-header[_ngcontent-%COMP%]   .tier-icon[_ngcontent-%COMP%] {\n  width: 52px;\n  height: 52px;\n  border-radius: 50%;\n  background: #e8f5e9;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto 12px;\n}\n.tier-header[_ngcontent-%COMP%]   .tier-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #2e7d32;\n  font-size: 26px;\n}\n.tier-popular[_ngcontent-%COMP%]   .tier-header[_ngcontent-%COMP%]   .tier-icon[_ngcontent-%COMP%] {\n  background: #e3f2fd;\n}\n.tier-popular[_ngcontent-%COMP%]   .tier-header[_ngcontent-%COMP%]   .tier-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #1565c0;\n}\n.tier-header[_ngcontent-%COMP%]   .tier-name[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  font-weight: 700;\n  margin: 0 0 8px;\n}\n.tier-header[_ngcontent-%COMP%]   .tier-price[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  justify-content: center;\n  gap: 2px;\n  margin-bottom: 8px;\n}\n.tier-header[_ngcontent-%COMP%]   .tier-price[_ngcontent-%COMP%]   .price-currency[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  font-weight: 600;\n  color: #444;\n}\n.tier-header[_ngcontent-%COMP%]   .tier-price[_ngcontent-%COMP%]   .price-amount[_ngcontent-%COMP%] {\n  font-size: 2.4rem;\n  font-weight: 800;\n  color: #1a1a1a;\n}\n.tier-header[_ngcontent-%COMP%]   .tier-price[_ngcontent-%COMP%]   .price-period[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: #777;\n}\n.tier-header[_ngcontent-%COMP%]   .tier-fee[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 4px;\n  font-size: 13px;\n  color: #555;\n  background: #f5f5f5;\n  padding: 4px 12px;\n  border-radius: 12px;\n}\n.tier-header[_ngcontent-%COMP%]   .tier-fee[_ngcontent-%COMP%]   .fee-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  height: 16px;\n  width: 16px;\n}\n\n.tier-limits[_ngcontent-%COMP%] {\n  border-top: 1px solid #eee;\n  border-bottom: 1px solid #eee;\n  padding: 12px 0;\n  margin-bottom: 16px;\n}\n.tier-limits[_ngcontent-%COMP%]   .limit-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 13px;\n  color: #555;\n  padding: 4px 0;\n}\n.tier-limits[_ngcontent-%COMP%]   .limit-row[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  height: 18px;\n  width: 18px;\n  color: #888;\n}\n\n.tier-features[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0 0 24px;\n  flex: 1;\n}\n.tier-features[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 8px;\n  font-size: 14px;\n  color: #444;\n  padding: 5px 0;\n}\n.tier-features[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .check-icon[_ngcontent-%COMP%] {\n  font-size: 17px;\n  height: 17px;\n  width: 17px;\n  color: #2e7d32;\n  flex-shrink: 0;\n  margin-top: 1px;\n}\n\n.tier-cta[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px 0;\n  border-radius: 8px;\n  border: 2px solid #2e7d32;\n  background: transparent;\n  color: #2e7d32;\n  font-size: 15px;\n  font-weight: 700;\n  cursor: pointer;\n  transition: background 0.2s, color 0.2s;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n}\n.tier-cta[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #2e7d32;\n  color: #fff;\n}\n.tier-cta[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: default;\n}\n.tier-cta.cta-primary[_ngcontent-%COMP%] {\n  background: #1565c0;\n  border-color: #1565c0;\n  color: #fff;\n}\n.tier-cta.cta-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: rgb(16.9774647887, 81.6535211268, 155.2225352113);\n}\n.tier-cta.cta-current[_ngcontent-%COMP%] {\n  border-color: #2e7d32;\n  background: #2e7d32;\n  color: #fff;\n  cursor: default;\n}\n\n\n\n.fee-explainer[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  border-radius: 16px;\n  padding: 48px 40px;\n  margin-bottom: 48px;\n}\n.fee-explainer[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.6rem;\n  font-weight: 700;\n  margin: 0 0 32px;\n  text-align: center;\n}\n.fee-explainer[_ngcontent-%COMP%]   .explainer-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\n  gap: 24px;\n}\n.fee-explainer[_ngcontent-%COMP%]   .explainer-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  padding: 24px;\n}\n.fee-explainer[_ngcontent-%COMP%]   .explainer-card[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 32px;\n  height: 32px;\n  width: 32px;\n  color: #2e7d32;\n  margin-bottom: 12px;\n}\n.fee-explainer[_ngcontent-%COMP%]   .explainer-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 700;\n  margin: 0 0 8px;\n}\n.fee-explainer[_ngcontent-%COMP%]   .explainer-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #555;\n  line-height: 1.6;\n  margin: 0;\n}\n\n\n\n.pricing-faq[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.6rem;\n  font-weight: 700;\n  margin: 0 0 24px;\n}\n.pricing-faq[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 14px;\n  color: #555;\n  line-height: 1.6;\n}\n\n@media (max-width: 600px) {\n  .pricing-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 1.7rem;\n  }\n  .fee-explainer[_ngcontent-%COMP%] {\n    padding: 32px 20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvcHJpY2luZy9wcmljaW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQVNoQjtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0FBUEY7O0FBVUEsZUFBQTtBQUNBO0VBQ0Usa0JBQUE7RUFDQSxvQkFBQTtBQVBGO0FBU0U7RUFDRSxxQkFBQTtFQUNBLG1CQW5CVTtFQW9CVixjQXJCSTtFQXNCSixlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBUEo7QUFVRTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFSSjtBQVdFO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBVEo7QUFZRTtFQUNFLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0VBQ0EsbUJBakRVO0VBa0RWLGNBbkRJO0VBb0RKLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFWSjtBQVlJO0VBQVcsZUFBQTtFQUFpQixZQUFBO0VBQWMsV0FBQTtBQVA5QztBQVNJO0VBQWdCLGNBQUE7QUFOcEI7O0FBVUE7RUFDRSxrQkFBQTtFQUNBLGFBQUE7QUFQRjtBQVFFO0VBQUksV0FBQTtFQUFhLGdCQUFBO0FBSm5COztBQU9BLG9CQUFBO0FBQ0E7RUFDRSxhQUFBO0VBQ0EsMkRBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7QUFKRjs7QUFPQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQ0FBQTtBQUpGO0FBTUU7RUFBVSwwQ0FBQTtFQUF3QywyQkFBQTtBQUZwRDtBQUlFO0VBQ0UscUJBeEZFO0VBeUZG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QSwyREFBQTtFQUNBLFNBQUE7QUErQko7QUE1QkU7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQThCSjtBQTVCSTtFQUFXLGVBQUE7RUFBaUIsWUFBQTtFQUFjLFdBQUE7RUFBYSxjQTNRbkQ7RUEyUWtFLG1CQUFBO0FBbUMxRTtBQWxDSTtFQUFLLGVBQUE7RUFBaUIsZ0JBQUE7RUFBa0IsZUFBQTtBQXVDNUM7QUF0Q0k7RUFBSSxlQUFBO0VBQWlCLFdBQUE7RUFBYSxnQkFBQTtFQUFrQixTQUFBO0FBNEN4RDs7QUF4Q0EsY0FBQTtBQUVFO0VBQUssaUJBQUE7RUFBbUIsZ0JBQUE7RUFBa0IsZ0JBQUE7QUE2QzVDO0FBNUNFO0VBQUksU0FBQTtFQUFXLGVBQUE7RUFBaUIsV0FBQTtFQUFhLGdCQUFBO0FBa0QvQzs7QUEvQ0E7RUFDRTtJQUFtQixpQkFBQTtFQW1EbkI7RUFsREE7SUFBaUIsa0JBQUE7RUFxRGpCO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJAdXNlICdzYXNzOmNvbG9yJztcclxuXHJcbiRicmFuZDogIzJlN2QzMjtcclxuJGJyYW5kLWxpZ2h0OiAjZThmNWU5O1xyXG4kcHJvOiAjMTU2NWMwO1xyXG4kcHJvLWxpZ2h0OiAjZTNmMmZkO1xyXG4kYml6OiAjNGExNDhjO1xyXG4kYml6LWxpZ2h0OiAjZjNlNWY1O1xyXG5cclxuLnByaWNpbmctcGFnZSB7XHJcbiAgbWF4LXdpZHRoOiAxMTAwcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgcGFkZGluZzogMCAyNHB4IDY0cHg7XHJcbn1cclxuXHJcbi8qIMOiwpTCgMOiwpTCgCBIZXJvIMOiwpTCgMOiwpTCgCAqL1xyXG4ucHJpY2luZy1oZXJvIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogNjRweCAwIDQ4cHg7XHJcblxyXG4gIC5oZXJvLXBpbGwge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgYmFja2dyb3VuZDogJGJyYW5kLWxpZ2h0O1xyXG4gICAgY29sb3I6ICRicmFuZDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIHBhZGRpbmc6IDRweCAxNHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbiAgfVxyXG5cclxuICBoMSB7XHJcbiAgICBmb250LXNpemU6IDIuNHJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICBtYXJnaW46IDAgMCAxNnB4O1xyXG4gICAgY29sb3I6ICMxYTFhMWE7XHJcbiAgfVxyXG5cclxuICAuaGVyby1zdWIge1xyXG4gICAgY29sb3I6ICM1NTU7XHJcbiAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgIG1heC13aWR0aDogNTYwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0byAyNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNjtcclxuICB9XHJcblxyXG4gIC5jdXJyZW50LXBsYW4tY2hpcCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6IDZweDtcclxuICAgIGJhY2tncm91bmQ6ICRicmFuZC1saWdodDtcclxuICAgIGNvbG9yOiAkYnJhbmQ7XHJcbiAgICBwYWRkaW5nOiA4cHggMThweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI0cHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG5cclxuICAgIG1hdC1pY29uIHsgZm9udC1zaXplOiAxOHB4OyBoZWlnaHQ6IDE4cHg7IHdpZHRoOiAxOHB4OyB9XHJcblxyXG4gICAgLmNyZWRpdC1iYWRnZSB7IGNvbG9yOiAjZjU3YzAwOyB9XHJcbiAgfVxyXG59XHJcblxyXG4ucHJpY2luZy1sb2FkaW5nIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogNjBweDtcclxuICBwIHsgY29sb3I6ICM3Nzc7IG1hcmdpbi10b3A6IDE2cHg7IH1cclxufVxyXG5cclxuLyogw6LClMKAw6LClMKAIFRpZXIgZ3JpZCDDosKUwoDDosKUwoAgKi9cclxuLnRpZXItZ3JpZCB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDI4MHB4LCAxZnIpKTtcclxuICBnYXA6IDI0cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNjRweDtcclxufVxyXG5cclxuLnRpZXItY2FyZCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgYm9yZGVyOiAycHggc29saWQgI2UwZTBlMDtcclxuICBib3JkZXItcmFkaXVzOiAxNnB4O1xyXG4gIHBhZGRpbmc6IDMycHggMjhweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAuMnMsIHRyYW5zZm9ybSAuMnM7XHJcblxyXG4gICY6aG92ZXIgeyBib3gtc2hhZG93OiAwIDhweCAzMnB4IHJnYmEoMCwwLDAsLjEyKTsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpOyB9XHJcblxyXG4gICYudGllci1wb3B1bGFyIHtcclxuICAgIGJvcmRlci1jb2xvcjogJHBybztcclxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDI0cHggcmdiYSgyMSwxMDEsMTkyLC4xOCk7XHJcbiAgfVxyXG5cclxuICAmLnRpZXItY3VycmVudCB7XHJcbiAgICBib3JkZXItY29sb3I6ICRicmFuZDtcclxuICAgIGJhY2tncm91bmQ6ICRicmFuZC1saWdodDtcclxuICB9XHJcblxyXG4gIC5wb3B1bGFyLWJhZGdlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogLTE0cHg7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgICBiYWNrZ3JvdW5kOiAkcHJvO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC41cHg7XHJcbiAgICBwYWRkaW5nOiA0cHggMTRweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIH1cclxuXHJcbiAgLmN1cnJlbnQtYmFkZ2Uge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6IDRweDtcclxuICAgIGNvbG9yOiAkYnJhbmQ7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gICAgbWF0LWljb24geyBmb250LXNpemU6IDE2cHg7IGhlaWdodDogMTZweDsgd2lkdGg6IDE2cHg7IH1cclxuICB9XHJcbn1cclxuXHJcbi50aWVyLWhlYWRlciB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcblxyXG4gIC50aWVyLWljb24ge1xyXG4gICAgd2lkdGg6IDUycHg7XHJcbiAgICBoZWlnaHQ6IDUycHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBiYWNrZ3JvdW5kOiAkYnJhbmQtbGlnaHQ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAwIGF1dG8gMTJweDtcclxuXHJcbiAgICBtYXQtaWNvbiB7IGNvbG9yOiAkYnJhbmQ7IGZvbnQtc2l6ZTogMjZweDsgfVxyXG4gIH1cclxuXHJcbiAgLnRpZXItcG9wdWxhciAmIC50aWVyLWljb24geyBiYWNrZ3JvdW5kOiAkcHJvLWxpZ2h0OyBtYXQtaWNvbiB7IGNvbG9yOiAkcHJvOyB9IH1cclxuXHJcbiAgLnRpZXItbmFtZSB7XHJcbiAgICBmb250LXNpemU6IDEuNHJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBtYXJnaW46IDAgMCA4cHg7XHJcbiAgfVxyXG5cclxuICAudGllci1wcmljZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBnYXA6IDJweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxuXHJcbiAgICAucHJpY2UtY3VycmVuY3kgeyBmb250LXNpemU6IDEuMnJlbTsgZm9udC13ZWlnaHQ6IDYwMDsgY29sb3I6ICM0NDQ7IH1cclxuICAgIC5wcmljZS1hbW91bnQgeyBmb250LXNpemU6IDIuNHJlbTsgZm9udC13ZWlnaHQ6IDgwMDsgY29sb3I6ICMxYTFhMWE7IH1cclxuICAgIC5wcmljZS1wZXJpb2QgeyBmb250LXNpemU6IC45cmVtOyBjb2xvcjogIzc3NzsgfVxyXG4gIH1cclxuXHJcbiAgLnRpZXItZmVlIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBnYXA6IDRweDtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGNvbG9yOiAjNTU1O1xyXG4gICAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcclxuICAgIHBhZGRpbmc6IDRweCAxMnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuXHJcbiAgICAuZmVlLWljb24geyBmb250LXNpemU6IDE2cHg7IGhlaWdodDogMTZweDsgd2lkdGg6IDE2cHg7IH1cclxuICB9XHJcbn1cclxuXHJcbi50aWVyLWxpbWl0cyB7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlZWU7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZWU7XHJcbiAgcGFkZGluZzogMTJweCAwO1xyXG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcblxyXG4gIC5saW1pdC1yb3cge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6IDhweDtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGNvbG9yOiAjNTU1O1xyXG4gICAgcGFkZGluZzogNHB4IDA7XHJcbiAgICBtYXQtaWNvbiB7IGZvbnQtc2l6ZTogMThweDsgaGVpZ2h0OiAxOHB4OyB3aWR0aDogMThweDsgY29sb3I6ICM4ODg7IH1cclxuICB9XHJcbn1cclxuXHJcbi50aWVyLWZlYXR1cmVzIHtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWFyZ2luOiAwIDAgMjRweDtcclxuICBmbGV4OiAxO1xyXG5cclxuICBsaSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICBnYXA6IDhweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGNvbG9yOiAjNDQ0O1xyXG4gICAgcGFkZGluZzogNXB4IDA7XHJcblxyXG4gICAgLmNoZWNrLWljb24geyBmb250LXNpemU6IDE3cHg7IGhlaWdodDogMTdweDsgd2lkdGg6IDE3cHg7IGNvbG9yOiAkYnJhbmQ7IGZsZXgtc2hyaW5rOiAwOyBtYXJnaW4tdG9wOiAxcHg7IH1cclxuICB9XHJcbn1cclxuXHJcbi50aWVyLWN0YSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMTJweCAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBib3JkZXI6IDJweCBzb2xpZCAkYnJhbmQ7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgY29sb3I6ICRicmFuZDtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAuMnMsIGNvbG9yIC4ycztcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZ2FwOiA4cHg7XHJcblxyXG4gICY6aG92ZXI6bm90KDpkaXNhYmxlZCkgeyBiYWNrZ3JvdW5kOiAkYnJhbmQ7IGNvbG9yOiAjZmZmOyB9XHJcbiAgJjpkaXNhYmxlZCB7IG9wYWNpdHk6IC41OyBjdXJzb3I6IGRlZmF1bHQ7IH1cclxuXHJcbiAgJi5jdGEtcHJpbWFyeSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAkcHJvO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAkcHJvO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICAmOmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHsgYmFja2dyb3VuZDogY29sb3IuYWRqdXN0KCRwcm8sICRsaWdodG5lc3M6IC04JSk7IH1cclxuICB9XHJcblxyXG4gICYuY3RhLWN1cnJlbnQge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAkYnJhbmQ7XHJcbiAgICBiYWNrZ3JvdW5kOiAkYnJhbmQ7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGN1cnNvcjogZGVmYXVsdDtcclxuICB9XHJcbn1cclxuXHJcbi8qIMOiwpTCgMOiwpTCgCBGZWUgZXhwbGFpbmVyIMOiwpTCgMOiwpTCgCAqL1xyXG4uZmVlLWV4cGxhaW5lciB7XHJcbiAgYmFja2dyb3VuZDogI2Y4ZjlmYTtcclxuICBib3JkZXItcmFkaXVzOiAxNnB4O1xyXG4gIHBhZGRpbmc6IDQ4cHggNDBweDtcclxuICBtYXJnaW4tYm90dG9tOiA0OHB4O1xyXG5cclxuICBoMiB7IGZvbnQtc2l6ZTogMS42cmVtOyBmb250LXdlaWdodDogNzAwOyBtYXJnaW46IDAgMCAzMnB4OyB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cclxuXHJcbiAgLmV4cGxhaW5lci1ncmlkIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDIyMHB4LCAxZnIpKTtcclxuICAgIGdhcDogMjRweDtcclxuICB9XHJcblxyXG4gIC5leHBsYWluZXItY2FyZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgIHBhZGRpbmc6IDI0cHg7XHJcblxyXG4gICAgbWF0LWljb24geyBmb250LXNpemU6IDMycHg7IGhlaWdodDogMzJweDsgd2lkdGg6IDMycHg7IGNvbG9yOiAkYnJhbmQ7IG1hcmdpbi1ib3R0b206IDEycHg7IH1cclxuICAgIGgzIHsgZm9udC1zaXplOiAxcmVtOyBmb250LXdlaWdodDogNzAwOyBtYXJnaW46IDAgMCA4cHg7IH1cclxuICAgIHAgeyBmb250LXNpemU6IDE0cHg7IGNvbG9yOiAjNTU1OyBsaW5lLWhlaWdodDogMS42OyBtYXJnaW46IDA7IH1cclxuICB9XHJcbn1cclxuXHJcbi8qIMOiwpTCgMOiwpTCgCBGQVEgw6LClMKAw6LClMKAICovXHJcbi5wcmljaW5nLWZhcSB7XHJcbiAgaDIgeyBmb250LXNpemU6IDEuNnJlbTsgZm9udC13ZWlnaHQ6IDcwMDsgbWFyZ2luOiAwIDAgMjRweDsgfVxyXG4gIHAgeyBtYXJnaW46IDA7IGZvbnQtc2l6ZTogMTRweDsgY29sb3I6ICM1NTU7IGxpbmUtaGVpZ2h0OiAxLjY7IH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgLnByaWNpbmctaGVybyBoMSB7IGZvbnQtc2l6ZTogMS43cmVtOyB9XHJcbiAgLmZlZS1leHBsYWluZXIgeyBwYWRkaW5nOiAzMnB4IDIwcHg7IH1cclxufVxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  }));
}
_staticBlock();

/***/ })

}]);
//# sourceMappingURL=src_app_pages_pricing_pricing_component_ts.js.map