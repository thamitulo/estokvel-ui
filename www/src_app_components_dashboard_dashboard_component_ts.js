"use strict";
(self["webpackChunkestokvel_ui"] = self["webpackChunkestokvel_ui"] || []).push([["src_app_components_dashboard_dashboard_component_ts"],{

/***/ 4265:
/*!*********************************************************!*\
  !*** ./src/app/services/dashboard/dashboard.service.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DashboardService: () => (/* binding */ DashboardService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 9452);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 271);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 6301);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 6647);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 4334);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment */ 6052);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 3855);
/* harmony import */ var _user_user_service_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../user/user-service.service */ 2915);
var _staticBlock;





class DashboardService {
  constructor(http, userService) {
    this.http = http;
    this.userService = userService;
    this.summaryUrl = `${_environments_environment__WEBPACK_IMPORTED_MODULE_5__.environment.apiUrl}dashboard/summary`;
  }
  getDashboardData() {
    return this.userService.user$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.take)(1), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.switchMap)(user => {
      if (!user?.id) return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(this.getDefaultDashboardData(null));
      return this.http.get(this.summaryUrl).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(summary => this.mapSummaryToData(summary, user)));
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.shareReplay)(1));
  }
  /** Force refresh – bypass any cached stream */
  refreshDashboard() {
    return this.userService.user$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.take)(1), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.switchMap)(user => {
      if (!user?.id) return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(this.getDefaultDashboardData(null));
      return this.http.get(this.summaryUrl).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(summary => this.mapSummaryToData(summary, user)));
    }));
  }
  mapSummaryToData(summary, user) {
    return {
      user,
      totalPortfolioValue: Number(summary.totalPortfolioValue) || 0,
      portfolioChange: Number(summary.portfolioChange) || 0,
      portfolioChangePercent: Number(summary.portfolioChangePercent) || 0,
      userStokvelsCount: Number(summary.userStokvelsCount) || 0,
      newlyJoinedStokvelCount: Number(summary.newlyJoinedStokvelCount) || 0,
      percentageChangeForJoinedStokvels: Number(summary.percentageChangeForJoinedStokvels) || 0,
      totalContributions: Number(summary.totalContributions) || 0,
      monthlyChange: Number(summary.monthlyChange) || 0,
      nextPayout: Number(summary.nextPayout) || 0,
      daysUntilPayout: Number(summary.daysUntilPayout) || 0,
      nextPayoutStokvelName: summary.nextPayoutStokvelName || null,
      nextPayoutDate: summary.nextPayoutDate || null,
      totalGrowth: Number(summary.totalGrowth) || 0,
      totalGrowthPercent: Number(summary.totalGrowthPercent) || 0,
      totalSavings: Number(summary.totalSavings) || 0,
      portfolioDistribution: summary.portfolioDistribution || [],
      userStokvels: summary.userStokvels || [],
      recentActivities: summary.recentActivities || []
    };
  }
  getDefaultDashboardData(user) {
    return {
      user,
      totalPortfolioValue: 0,
      portfolioChange: 0,
      portfolioChangePercent: 0,
      userStokvelsCount: 0,
      newlyJoinedStokvelCount: 0,
      percentageChangeForJoinedStokvels: 0,
      totalContributions: 0,
      monthlyChange: 0,
      nextPayout: 0,
      daysUntilPayout: 0,
      nextPayoutStokvelName: null,
      nextPayoutDate: null,
      totalGrowth: 0,
      totalGrowthPercent: 0,
      totalSavings: 0,
      portfolioDistribution: [],
      userStokvels: [],
      recentActivities: []
    };
  }
  static #_ = _staticBlock = () => (this.ɵfac = function DashboardService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || DashboardService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_user_user_service_service__WEBPACK_IMPORTED_MODULE_8__.UserService));
  }, this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
    token: DashboardService,
    factory: DashboardService.ɵfac,
    providedIn: 'root'
  }));
}
_staticBlock();

/***/ }),

/***/ 4441:
/*!*************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DashboardComponent: () => (/* binding */ DashboardComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 4487);
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../material.module */ 9439);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 6301);
/* harmony import */ var _utils_StokvelUtils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/StokvelUtils */ 9259);
/* harmony import */ var _models_stokvel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models/stokvel */ 6121);
/* harmony import */ var _contribution_dialog_contribution_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../contribution-dialog/contribution-dialog.component */ 7861);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2481);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 5422);
/* harmony import */ var _services_user_user_service_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services/user/user-service.service */ 2915);
/* harmony import */ var _services_dashboard_dashboard_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../services/dashboard/dashboard.service */ 4265);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/dialog */ 7760);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ 3840);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/card */ 3777);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/progress-bar */ 6354);
var _staticBlock;

















const _c0 = (a0, a1, a2, a3) => ({
  contribution: a0,
  payout: a1,
  invitation: a2,
  update: a3
});
function DashboardComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 66)(1, "button", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function DashboardComponent_div_22_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r2.createNewStokvel());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, "add_circle");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4, " Create your first stokvel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "button", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function DashboardComponent_div_22_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r2.joinStokvel());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](7, "explore");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8, " Browse public stokvels ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
}
function DashboardComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 69)(1, "div", 70)(2, "div", 71)(3, "span", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4, "Total Portfolio Value");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "h2", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](7, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](8, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "div", 74)(10, "div", 75)(11, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](12, "trending_up");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](15, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](16, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](17, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](18, "div", 76)(19, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](20, "svg", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](21, "path", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("R", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](8, 5, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](7, 3, ctx_r2.totalPortfolioValue$)));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate2"]("+R", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](16, 9, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](15, 7, ctx_r2.portfolioChange$)), " (", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](17, 11, ctx_r2.portfolioChangePercent$), "%) today");
  }
}
function DashboardComponent_ng_template_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 80)(1, "div", 81)(2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, "account_balance_wallet");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "p", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5, "Your portfolio starts here");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "p", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](7, "Join or create a stokvel to begin building your wealth");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
}
function DashboardComponent_ng_container_92_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "h3", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](3, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const nextPayout_r4 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("stat-zero", nextPayout_r4 === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", nextPayout_r4 === 0 ? "\u2014" : "R" + _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](3, 3, nextPayout_r4), " ");
  }
}
function DashboardComponent_ng_template_94_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "h3", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "\u2014");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function DashboardComponent_div_98_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const name_r5 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" \uD83D\uDCCD ", name_r5, " ");
  }
}
function DashboardComponent_ng_template_100_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "No upcoming payout scheduled");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function DashboardComponent_ng_container_142_div_5_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "div", 101);
  }
  if (rf & 2) {
    const segment_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵstyleProp"]("background", segment_r6.color)("transform", "rotate(" + segment_r6.rotation + "deg)")("opacity", segment_r6.opacity);
  }
}
function DashboardComponent_ng_container_142_div_5_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 102)(1, "div", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "div", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "div", 105)(4, "span", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "span", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](8, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "span", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](11, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵstyleProp"]("background", item_r7.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](item_r7.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](8, 5, item_r7.percentage, "1.0-1"), "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("R", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](11, 8, item_r7.amount));
  }
}
function DashboardComponent_ng_container_142_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 91)(1, "div", 92)(2, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](3, DashboardComponent_ng_container_142_div_5_div_3_Template, 1, 6, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "div", 95)(5, "div", 96)(6, "span", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](7, "Total Value");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "span", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](10, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](11, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "div", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](13, DashboardComponent_ng_container_142_div_5_div_13_Template, 12, 10, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const distribution_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().ngIf;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", distribution_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("R", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](11, 5, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](10, 3, ctx_r2.totalPortfolioValue$)));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", distribution_r8);
  }
}
function DashboardComponent_ng_container_142_ng_template_6_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 122)(1, "div", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "div", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "div", 105)(4, "span", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "span", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "span", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](10, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const demo_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵstyleProp"]("background", demo_r9.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](demo_r9.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", demo_r9.pct, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("R", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](10, 5, demo_r9.amount));
  }
}
function DashboardComponent_ng_container_142_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 109)(1, "div", 92)(2, "div", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](3, "div", 111)(4, "div", 112)(5, "div", 113)(6, "div", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "div", 115)(8, "div", 96)(9, "span", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](10, "Your future");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "span", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](12, "portfolio");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](13, "div", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "div", 118)(15, "div", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](16, "Example breakdown");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](17, DashboardComponent_ng_container_142_ng_template_6_div_17_Template, 11, 7, "div", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](18, "div", 121)(19, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](20, "info_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](21, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](22, "Join or create a stokvel to see your real allocation here.");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r2.previewSegments);
  }
}
function DashboardComponent_ng_container_142_ng_container_13_ng_container_1_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 130)(1, "div", 131)(2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, "savings");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "div", 132)(5, "span", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "span", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "span", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](11, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const demo_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](demo_r10.role);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](demo_r10.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate3"](" R", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](11, 5, demo_r10.monthly), "/mo \u00B7 ", demo_r10.members, "/", demo_r10.max, " members ");
  }
}
function DashboardComponent_ng_container_142_ng_container_13_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 127)(2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, "insights");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5, "Once you join stokvels, highlights like these will appear:");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "div", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](7, DashboardComponent_ng_container_142_ng_container_13_ng_container_1_div_7_Template, 12, 7, "div", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "div", 121)(9, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](10, "info_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](12, "Your actual stokvels will replace this preview.");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r2.previewHighlights);
  }
}
function DashboardComponent_ng_container_142_ng_container_13_div_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 138)(1, "div", 131)(2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, "savings");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "div", 132)(5, "span", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "span", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "span", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](11, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const s_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](s_r11.isOwner || s_r11.currentUserRole === "ADMIN" ? "\u2B50 Admin" : "\uD83D\uDC64 Member");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](s_r11.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate3"](" R", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](11, 5, s_r11.monthlyContribution), "/mo \u00B7 ", s_r11.totalMembers ?? s_r11.memberCount + s_r11.adminCount, "/", s_r11.maxMembers, " members ");
  }
}
function DashboardComponent_ng_container_142_ng_container_13_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, DashboardComponent_ng_container_142_ng_container_13_div_2_div_1_Template, 12, 7, "div", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const stokvels_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind3"](2, 1, stokvels_r12, 0, 3));
  }
}
function DashboardComponent_ng_container_142_ng_container_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, DashboardComponent_ng_container_142_ng_container_13_ng_container_1_Template, 13, 1, "ng-container", 48)(2, DashboardComponent_ng_container_142_ng_container_13_div_2_Template, 3, 5, "div", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const stokvels_r12 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", stokvels_r12.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", stokvels_r12.length > 0);
  }
}
function DashboardComponent_ng_container_142_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 86)(2, "mat-card", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](3, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](5, DashboardComponent_ng_container_142_div_5_Template, 14, 7, "div", 88)(6, DashboardComponent_ng_container_142_ng_template_6_Template, 23, 1, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "mat-card", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](9, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "mat-card-content")(11, "h3", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](12, "Performance Highlights");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](13, DashboardComponent_ng_container_142_ng_container_13_Template, 3, 2, "ng-container", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](14, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const distribution_r8 = ctx.ngIf;
    const previewChart_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](7);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", distribution_r8.length > 0)("ngIfElse", previewChart_r13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](14, 3, ctx_r2.userStokvels$));
  }
}
function DashboardComponent_div_229_mat_card_1_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 165)(1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "star");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4, "You created this stokvel");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
}
function DashboardComponent_div_229_mat_card_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-card", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "div", 145)(3, "div", 146)(4, "div", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](5, "div", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "div", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "div", 150)(9, "h3", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "p", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "div", 153)(14, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](15, "people");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](16, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](18, DashboardComponent_div_229_mat_card_1_div_18_Template, 5, 0, "div", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](19, "mat-card-content")(20, "div", 155)(21, "div", 156)(22, "span", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](23, "Contribution Progress");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](24, "span", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](26, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](27, "mat-progress-bar", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](28, "div", 160)(29, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](31, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](32, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](34, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](35, "div", 161)(36, "div", 162)(37, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](38, "payments");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](39, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](40);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](41, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](42, "div", 162)(43, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](44, "people");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](45, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](46);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](47, "div", 162)(48, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](49, "manage_accounts");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](50, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](51);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](52, "mat-card-actions")(53, "button", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function DashboardComponent_div_229_mat_card_1_Template_button_click_53_listener() {
      const stokvel_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r14).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r2.viewStokvelDetails(stokvel_r15));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](54, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](55, "visibility");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](56, " View Details ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](57, "button", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function DashboardComponent_div_229_mat_card_1_Template_button_click_57_listener() {
      const stokvel_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r14).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r2.makeStokvelContribution(stokvel_r15));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](58, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](59, "payment");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](60, " Contribute ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const stokvel_r15 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", ctx_r2.getStokvelImageClass(stokvel_r15.type));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", stokvel_r15.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", stokvel_r15.status, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](stokvel_r15.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r2.getStokvelTypeDisplayName(stokvel_r15.typeName));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", stokvel_r15.totalMembers ?? stokvel_r15.memberCount + stokvel_r15.adminCount, " members");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", stokvel_r15.isOwner);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](26, 16, ctx_r2.getStokvelProgress(stokvel_r15), "1.0-1"), "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", ctx_r2.getStokvelProgress(stokvel_r15))("color", ctx_r2.getStokvelProgressColor(stokvel_r15));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("R", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](31, 19, ctx_r2.getStokvelCollectedAmount(stokvel_r15)), " collected");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("R", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](34, 21, stokvel_r15.targetAmount), " target");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("Monthly: R", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](41, 23, stokvel_r15.monthlyContribution));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate2"]("", stokvel_r15.memberCount + stokvel_r15.adminCount, "/", stokvel_r15.maxMembers, " members");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("Role: ", stokvel_r15.currentUserRole || (stokvel_r15.isOwner ? "ADMIN" : "MEMBER"));
  }
}
function DashboardComponent_div_229_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, DashboardComponent_div_229_mat_card_1_Template, 61, 25, "mat-card", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const userStokvels_r16 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", userStokvels_r16);
  }
}
function DashboardComponent_ng_template_231_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 166)(1, "div", 167)(2, "div", 168)(3, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4, "savings");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6, "You're not part of any stokvels yet");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8, "Join an existing stokvel or create your own to start your savings journey");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "div", 169)(10, "button", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function DashboardComponent_ng_template_231_Template_button_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r17);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r2.joinStokvel());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](11, " Join a Stokvel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "button", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function DashboardComponent_ng_template_231_Template_button_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r17);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r2.createNewStokvel());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](13, " Create a Stokvel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
  }
}
function DashboardComponent_ng_container_248_div_1_div_1_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 184);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const activity_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵstyleProp"]("color", activity_r18.type === "payout" ? "#10b981" : "#ef4444");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate2"](" ", activity_r18.type === "payout" ? "+" : "-", "R", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 4, activity_r18.amount), " ");
  }
}
function DashboardComponent_ng_container_248_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 176)(1, "div", 177)(2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "div", 178)(5, "div", 179);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "div", 180)(8, "span", 181);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "span", 182);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](12, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](13, DashboardComponent_ng_container_248_div_1_div_1_div_13_Template, 3, 6, "div", 183);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const activity_r18 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction4"](9, _c0, activity_r18.type === "contribution", activity_r18.type === "payout", activity_r18.type === "invitation" || activity_r18.type === "member_joined", activity_r18.type === "update" || activity_r18.type === "stokvel_created"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r2.getActivityIcon(activity_r18.type));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](activity_r18.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](activity_r18.stokvelName);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](12, 6, activity_r18.date, "medium"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", activity_r18.amount);
  }
}
function DashboardComponent_ng_container_248_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, DashboardComponent_ng_container_248_div_1_div_1_Template, 14, 14, "div", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const activities_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", activities_r19);
  }
}
function DashboardComponent_ng_container_248_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 185)(1, "div", 186)(2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, "history");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5, "No recent activity \u2014 make your first contribution to get started!");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
  }
}
function DashboardComponent_ng_container_248_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, DashboardComponent_ng_container_248_div_1_Template, 2, 1, "div", 172)(2, DashboardComponent_ng_container_248_div_2_Template, 6, 0, "div", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const activities_r19 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", activities_r19.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", activities_r19.length === 0);
  }
}
class DashboardComponent {
  constructor(router, userService, dashboardService, dialog) {
    this.router = router;
    this.userService = userService;
    this.dashboardService = dashboardService;
    this.dialog = dialog;
    // ── Preview / demo data shown when user has no stokvels yet ─────────────
    this.previewSegments = [{
      name: 'Savings Stokvel',
      pct: 36,
      color: '#3B82F6',
      amount: 18000
    }, {
      name: 'Investment Club',
      pct: 27,
      color: '#10B981',
      amount: 13500
    }, {
      name: 'Family Fund',
      pct: 22,
      color: '#F59E0B',
      amount: 11000
    }, {
      name: 'Burial Society',
      pct: 15,
      color: '#8B5CF6',
      amount: 7500
    }];
    this.previewHighlights = [{
      role: '⭐ Admin',
      name: 'Mabogo Dinku Stokvel',
      monthly: 1500,
      members: 8,
      max: 10
    }, {
      role: '👤 Member',
      name: 'Kasi Investment Club',
      monthly: 3000,
      members: 5,
      max: 12
    }, {
      role: '👤 Member',
      name: 'Family Burial Society',
      monthly: 500,
      members: 20,
      max: 30
    }];
    this.StokvelType = _models_stokvel__WEBPACK_IMPORTED_MODULE_6__.StokvelType;
    this.user$ = this.userService.user$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.shareReplay)(1));
    this.userName$ = this.userService.userName$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.shareReplay)(1));
    this.dashboardData$ = this.dashboardService.getDashboardData().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.shareReplay)(1));
    this.totalPortfolioValue$ = this.dashboardData$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(d => d.totalPortfolioValue), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.shareReplay)(1));
    this.portfolioChange$ = this.dashboardData$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(d => d.portfolioChange), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.shareReplay)(1));
    this.portfolioChangePercent$ = this.dashboardData$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(d => d.portfolioChangePercent), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.shareReplay)(1));
    this.userStokvelsCount$ = this.dashboardData$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(d => d.userStokvelsCount), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.shareReplay)(1));
    this.newlyJoinedStokvelCount$ = this.dashboardData$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(d => d.newlyJoinedStokvelCount), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.shareReplay)(1));
    this.percentageChangeForJoinedStokvels$ = this.dashboardData$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(d => d.percentageChangeForJoinedStokvels), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.shareReplay)(1));
    this.totalContributions$ = this.dashboardData$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(d => d.totalContributions), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.shareReplay)(1));
    this.monthlyChange$ = this.dashboardData$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(d => d.monthlyChange), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.shareReplay)(1));
    this.nextPayout$ = this.dashboardData$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(d => d.nextPayout), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.shareReplay)(1));
    this.daysUntilPayout$ = this.dashboardData$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(d => d.daysUntilPayout), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.shareReplay)(1));
    this.nextPayoutStokvelName$ = this.dashboardData$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(d => d.nextPayoutStokvelName), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.shareReplay)(1));
    this.totalGrowth$ = this.dashboardData$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(d => d.totalGrowth), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.shareReplay)(1));
    this.totalGrowthPercent$ = this.dashboardData$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(d => d.totalGrowthPercent), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.shareReplay)(1));
    this.totalSavings$ = this.dashboardData$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(d => d.totalSavings), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.shareReplay)(1));
    this.portfolioDistribution$ = this.dashboardData$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(d => d.portfolioDistribution), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.shareReplay)(1));
    this.recentActivities$ = this.dashboardData$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(d => d.recentActivities), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.shareReplay)(1));
    this.userStokvels$ = this.dashboardData$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(d => d.userStokvels), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.shareReplay)(1));
    this.hasStokvels$ = this.userStokvelsCount$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(c => c > 0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.shareReplay)(1));
    this.heroEmoji$ = this.userStokvelsCount$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(c => c === 0 ? '👋 Hello there!' : '🎉 Welcome back!'), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.shareReplay)(1));
    this.heroSubtitle$ = this.userStokvelsCount$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(c => {
      if (c === 0) return "You haven't joined any stokvels yet — let's change that!";
      if (c === 1) return 'Great start! Your first stokvel is active.';
      if (c < 4) return `You're part of ${c} stokvels — keep it up!`;
      return `Your stokvel portfolio is growing beautifully ✨`;
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.shareReplay)(1));
    this.heroSubtitleClass$ = this.userStokvelsCount$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(c => c === 0 ? 'subtitle-new' : 'subtitle-active'), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.shareReplay)(1));
  }
  ngOnInit() {}
  // ── Stokvel helpers ───────────────────────────────────────────────────────
  getStokvelProgress(stokvel) {
    return _utils_StokvelUtils__WEBPACK_IMPORTED_MODULE_5__.StokvelUtils.getProgress(stokvel);
  }
  getStokvelCollectedAmount(stokvel) {
    return _utils_StokvelUtils__WEBPACK_IMPORTED_MODULE_5__.StokvelUtils.getCollectedAmount(stokvel);
  }
  getStokvelRemainingAmount(stokvel) {
    return _utils_StokvelUtils__WEBPACK_IMPORTED_MODULE_5__.StokvelUtils.getRemainingAmount(stokvel);
  }
  isStokvelTargetReached(stokvel) {
    return _utils_StokvelUtils__WEBPACK_IMPORTED_MODULE_5__.StokvelUtils.isTargetReached(stokvel);
  }
  getStokvelProgressColor(stokvel) {
    return _utils_StokvelUtils__WEBPACK_IMPORTED_MODULE_5__.StokvelUtils.progressColor(stokvel);
  }
  getPortfolioAmount(percentage) {
    return percentage / 100 * 250000;
  }
  getStokvelImageClass(type) {
    const m = {
      INVESTMENT: 'investment',
      PROPERTY: 'property',
      FAMILY: 'family',
      BURIAL: 'burial',
      MONTHLY: 'monthly'
    };
    return m[type?.toUpperCase()] || 'monthly';
  }
  getStokvelTypeDisplayName(typeName) {
    return _utils_StokvelUtils__WEBPACK_IMPORTED_MODULE_5__.StokvelUtils.getStokvelTypeDisplayName(typeName);
  }
  getActivityIcon(type) {
    const m = {
      contribution: 'payments',
      payout: 'savings',
      invitation: 'group_add',
      update: 'update',
      member_joined: 'person_add',
      stokvel_created: 'add_circle'
    };
    return m[type] || 'info';
  }
  // ── Contribution dialog ──────────────────────────────────────────────────
  makeContribution() {
    this.userStokvels$.subscribe(stokvels => {
      this.openContributionDialog(stokvels, undefined);
    }).unsubscribe();
  }
  makeStokvelContribution(stokvel) {
    this.userStokvels$.subscribe(stokvels => {
      this.openContributionDialog(stokvels, stokvel);
    }).unsubscribe();
  }
  openContributionDialog(stokvels, preselected) {
    const ref = this.dialog.open(_contribution_dialog_contribution_dialog_component__WEBPACK_IMPORTED_MODULE_7__.ContributionDialogComponent, {
      data: {
        stokvels,
        preselectedStokvel: preselected
      },
      width: '520px',
      maxWidth: '95vw',
      disableClose: false,
      panelClass: 'contribution-dialog-panel'
    });
    ref.afterClosed().subscribe(result => {
      if (result?.success) {
        // Refresh dashboard data to reflect new contribution
        this.dashboardData$ = this.dashboardService.refreshDashboard().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.shareReplay)(1));
        this.totalContributions$ = this.dashboardData$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(d => d.totalContributions), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.shareReplay)(1));
        this.recentActivities$ = this.dashboardData$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(d => d.recentActivities), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.shareReplay)(1));
        this.userStokvels$ = this.dashboardData$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(d => d.userStokvels), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.shareReplay)(1));
      }
    });
  }
  // ── Navigation actions ───────────────────────────────────────────────────
  createNewStokvel() {
    this.router.navigate(['/create-stokvel']);
  }
  joinStokvel() {
    this.router.navigate(['/stokvels']);
  }
  viewReports() {
    this.router.navigate(['/wallet']);
  }
  openWallet() {
    this.router.navigate(['/wallet']);
  }
  viewStokvelDetails(stokvel) {
    this.router.navigate(['/stokvels', stokvel.id]);
  }
  viewAllActivity() {
    this.router.navigate(['/notifications']);
  }
  viewAllStokvels() {
    this.router.navigate(['/stokvels']);
  }
  static #_ = _staticBlock = () => (this.ɵfac = function DashboardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_user_user_service_service__WEBPACK_IMPORTED_MODULE_11__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_dashboard_dashboard_service__WEBPACK_IMPORTED_MODULE_12__.DashboardService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__.MatDialog));
  }, this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
    type: DashboardComponent,
    selectors: [["dashboard"]],
    decls: 250,
    vars: 70,
    consts: [["noPortfolio", ""], ["noPayoutStat", ""], ["noPayoutHint", ""], ["noStokvels", ""], ["previewChart", ""], [1, "dashboard-container"], [1, "dashboard-header"], [1, "dashboard-hero"], [1, "hero-background"], [1, "floating-shapes"], [1, "shape", "shape-1"], [1, "shape", "shape-2"], [1, "shape", "shape-3"], [1, "shape", "shape-4"], [1, "dashboard-hero-content"], [1, "hero-text"], [1, "welcome-badge"], [1, "dashboard-title"], [1, "dashboard-subtitle", 3, "ngClass"], ["class", "hero-cta-new", 4, "ngIf"], ["class", "portfolio-summary", 4, "ngIf", "ngIfElse"], [1, "dashboard-stats"], [1, "stat-card", "performance-card"], [1, "card-glow"], [1, "stat-header"], [1, "stat-icon"], [1, "icon-wrapper"], [1, "stat-trend", "positive"], [1, "stat-content"], [1, "stat-value"], [1, "stat-label"], [1, "stat-comparison"], [1, "stat-decoration"], [1, "decoration-dots"], [1, "stat-card", "contributions-card"], [1, "decoration-wave"], [1, "stat-card", "payout-card"], [1, "stat-indicator", "upcoming"], [4, "ngIf", "ngIfElse"], ["class", "stat-comparison", 4, "ngIf", "ngIfElse"], [1, "decoration-confetti"], [1, "stat-card", "growth-card"], [1, "decoration-line"], [1, "portfolio-distribution-section"], [1, "section-header"], [1, "section-title"], [1, "section-actions"], ["mat-raised-button", "", 1, "view-all-btn", "gradient-btn"], [4, "ngIf"], [1, "quick-actions-section"], [1, "quick-actions-grid"], [1, "action-card", "primary-action", 3, "click"], [1, "action-icon"], [1, "icon-background"], [1, "action-content"], [1, "action-arrow"], [1, "action-card", "accent-action", 3, "click"], [1, "action-card", "secondary-action", 3, "click"], [1, "action-card", "success-action", 3, "click"], [1, "action-card", "wallet-action", 3, "click"], [1, "my-stokvels-section"], ["mat-button", "", 1, "view-all-btn", 3, "click"], ["class", "stokvels-grid", 4, "ngIf", "ngIfElse"], [1, "recent-activity-section"], [1, "activity-card", "glass-card"], [1, "card-pattern"], [1, "hero-cta-new"], [1, "hero-btn-create", 3, "click"], [1, "hero-btn-browse", 3, "click"], [1, "portfolio-summary"], [1, "portfolio-value-card"], [1, "value-content"], [1, "value-label"], [1, "value-amount"], [1, "value-change", "positive"], [1, "change-indicator"], [1, "value-sparkline"], [1, "sparkline-chart"], ["viewBox", "0 0 100 40", 1, "chart-line"], ["d", "M0,35 L20,25 L40,15 L60,20 L80,10 L100,5", "stroke", "currentColor", "stroke-width", "2", "fill", "none", "stroke-linecap", "round"], [1, "portfolio-empty-card"], [1, "empty-portfolio-icon"], [1, "empty-portfolio-label"], [1, "empty-portfolio-sub"], [1, "stat-value", "stat-zero"], [1, "stat-comparison", "stat-hint"], [1, "distribution-grid"], [1, "distribution-chart-card", "glass-card"], ["class", "pie-chart-visual", 4, "ngIf", "ngIfElse"], [1, "performance-highlights-card", "glass-card"], [1, "highlights-title"], [1, "pie-chart-visual"], [1, "chart-wrapper"], [1, "pie-chart"], ["class", "chart-segment", 3, "background", "transform", "opacity", 4, "ngFor", "ngForOf"], [1, "chart-center"], [1, "center-content"], [1, "chart-total"], [1, "chart-amount"], [1, "chart-legends"], ["class", "legend-item", 4, "ngFor", "ngForOf"], [1, "chart-segment"], [1, "legend-item"], [1, "legend-marker"], [1, "legend-color"], [1, "legend-info"], [1, "legend-label"], [1, "legend-percentage"], [1, "legend-amount"], [1, "pie-chart-visual", "preview-mode"], [1, "pie-chart", "preview-chart"], [1, "chart-segment", 2, "background", "#3B82F6", "transform", "rotate(0deg)"], [1, "chart-segment", 2, "background", "#10B981", "transform", "rotate(130deg)"], [1, "chart-segment", 2, "background", "#F59E0B", "transform", "rotate(230deg)"], [1, "chart-segment", 2, "background", "#8B5CF6", "transform", "rotate(300deg)"], [1, "chart-center", "preview-center"], [1, "chart-amount", "preview-amount"], [1, "preview-blur-overlay"], [1, "chart-legends", "preview-legends"], [1, "preview-legend-label"], ["class", "legend-item preview-item", 4, "ngFor", "ngForOf"], [1, "preview-cta"], [1, "legend-item", "preview-item"], [1, "legend-label", "preview-text"], [1, "legend-percentage", "preview-text"], [1, "legend-amount", "preview-text"], ["class", "highlights-list", 4, "ngIf"], [1, "highlights-empty"], [1, "highlights-list", "preview-highlights"], ["class", "highlight-item positive preview-item", 4, "ngFor", "ngForOf"], [1, "highlight-item", "positive", "preview-item"], [1, "highlight-icon"], [1, "highlight-content"], [1, "highlight-title", "preview-text"], [1, "highlight-value", "preview-text"], [1, "highlight-change", "preview-text"], [1, "highlights-list"], ["class", "highlight-item positive", 4, "ngFor", "ngForOf"], [1, "highlight-item", "positive"], [1, "highlight-title"], [1, "highlight-value"], [1, "highlight-change"], [1, "stokvels-grid"], ["class", "stokvel-card glass-card", 4, "ngFor", "ngForOf"], [1, "stokvel-card", "glass-card"], [1, "stokvel-header"], [1, "stokvel-image-container"], [1, "stokvel-image", 3, "ngClass"], [1, "image-overlay"], [1, "stokvel-status", 3, "ngClass"], [1, "stokvel-info"], [1, "stokvel-name"], [1, "stokvel-type"], [1, "stokvel-members"], ["class", "owner-badge", 4, "ngIf"], [1, "stokvel-progress"], [1, "progress-header"], [1, "progress-label"], [1, "progress-percentage"], ["mode", "determinate", 3, "value", "color"], [1, "progress-details"], [1, "stokvel-details"], [1, "detail-item"], ["mat-button", "", "color", "primary", 3, "click"], ["mat-button", "", "color", "accent", 3, "click"], [1, "owner-badge"], [1, "no-stokvels-container", "glass-card"], [1, "no-stokvels-content"], [1, "no-stokvels-icon"], [1, "no-stokvels-actions"], ["mat-raised-button", "", "color", "primary", 3, "click"], ["mat-raised-button", "", "color", "accent", 3, "click"], ["class", "activity-list", 4, "ngIf"], ["class", "no-activity", 4, "ngIf"], [1, "activity-list"], ["class", "activity-item", 4, "ngFor", "ngForOf"], [1, "activity-item"], [1, "activity-icon", 3, "ngClass"], [1, "activity-details"], [1, "activity-description"], [1, "activity-meta"], [1, "activity-stokvel"], [1, "activity-date"], ["class", "activity-amount", 3, "color", 4, "ngIf"], [1, "activity-amount"], [1, "no-activity"], [1, "no-activity-content"]],
    template: function DashboardComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "section", 5)(1, "div", 6)(2, "div", 7)(3, "div", 8)(4, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](5, "div", 10)(6, "div", 11)(7, "div", 12)(8, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "div", 14)(10, "div", 15)(11, "div", 16)(12, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](14, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "h1", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](17, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](18, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](19, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](21, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](22, DashboardComponent_div_22_Template, 9, 0, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](23, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](24, DashboardComponent_div_24_Template, 22, 13, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](25, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](26, DashboardComponent_ng_template_26_Template, 8, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](28, "div", 21)(29, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](30, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](31, "div", 24)(32, "div", 25)(33, "div", 26)(34, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](35, "rocket_launch");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](36, "div", 27)(37, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](38, "arrow_upward");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](39, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](41, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](42, "div", 28)(43, "h3", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](45, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](46, "p", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](47, "Active Stokvels");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](48, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](49);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](50, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](51, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](52, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](53, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](54, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](55, "div", 24)(56, "div", 25)(57, "div", 26)(58, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](59, "savings");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](60, "div", 27)(61, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](62, "arrow_upward");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](63, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](64, "8.3%");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](65, "div", 28)(66, "h3", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](67);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](68, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](69, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](70, "p", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](71, "Total Contributions");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](72, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](73);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](74, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](75, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](76, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](77, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](78, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](79, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](80, "div", 24)(81, "div", 25)(82, "div", 26)(83, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](84, "celebration");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](85, "div", 37)(86, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](87, "schedule");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](88, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](89);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](90, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](91, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](92, DashboardComponent_ng_container_92_Template, 4, 5, "ng-container", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](93, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](94, DashboardComponent_ng_template_94_Template, 2, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](96, "p", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](97, "Next Payout");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](98, DashboardComponent_div_98_Template, 2, 1, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](99, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](100, DashboardComponent_ng_template_100_Template, 2, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](102, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](103, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](104, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](105, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](106, "div", 24)(107, "div", 25)(108, "div", 26)(109, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](110, "show_chart");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](111, "div", 27)(112, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](113, "arrow_upward");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](114, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](115);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](116, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](117, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](118, "div", 28)(119, "h3", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](120);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](121, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](122, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](123, "p", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](124, "Total Growth");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](125, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](126, "Portfolio value \u2212 contributions");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](127, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](128, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](129, "section", 43)(130, "div", 44)(131, "div", 45)(132, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](133, "Portfolio Distribution");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](134, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](135, "How your stokvel investments are allocated");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](136, "div", 46)(137, "button", 47)(138, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](139, "Detailed Analysis");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](140, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](141, "insights");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](142, DashboardComponent_ng_container_142_Template, 15, 5, "ng-container", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](143, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](144, "section", 49)(145, "div", 44)(146, "div", 45)(147, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](148, "Quick Actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](149, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](150, "Manage your stokvels with ease");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](151, "div", 50)(152, "button", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function DashboardComponent_Template_button_click_152_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx.createNewStokvel());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](153, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](154, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](155, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](156, "add_circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](157, "div", 54)(158, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](159, "Create Stokvel");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](160, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](161, "Start a new savings group");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](162, "div", 55)(163, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](164, "arrow_forward");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](165, "button", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function DashboardComponent_Template_button_click_165_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx.joinStokvel());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](166, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](167, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](168, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](169, "group_add");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](170, "div", 54)(171, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](172, "Join Stokvel");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](173, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](174, "Become a member");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](175, "div", 55)(176, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](177, "arrow_forward");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](178, "button", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function DashboardComponent_Template_button_click_178_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx.makeContribution());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](179, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](180, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](181, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](182, "payments");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](183, "div", 54)(184, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](185, "Contribute");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](186, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](187, "Make a payment");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](188, "div", 55)(189, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](190, "arrow_forward");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](191, "button", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function DashboardComponent_Template_button_click_191_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx.viewReports());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](192, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](193, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](194, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](195, "analytics");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](196, "div", 54)(197, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](198, "Analytics");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](199, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](200, "View reports");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](201, "div", 55)(202, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](203, "arrow_forward");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](204, "button", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function DashboardComponent_Template_button_click_204_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx.openWallet());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](205, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](206, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](207, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](208, "account_balance_wallet");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](209, "div", 54)(210, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](211, "My Wallet");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](212, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](213, "Deposit & transfer funds");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](214, "div", 55)(215, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](216, "arrow_forward");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](217, "section", 60)(218, "div", 44)(219, "div", 45)(220, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](221, "My Stokvels");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](222, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](223, "Manage and track your stokvel memberships");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](224, "div", 46)(225, "button", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function DashboardComponent_Template_button_click_225_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx.viewAllStokvels());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](226, " View All ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](227, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](228, "arrow_forward");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](229, DashboardComponent_div_229_Template, 2, 1, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](230, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](231, DashboardComponent_ng_template_231_Template, 14, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](233, "section", 63)(234, "div", 44)(235, "div", 45)(236, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](237, "Recent Activity");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](238, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](239, "Your latest stokvel transactions and updates");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](240, "div", 46)(241, "button", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function DashboardComponent_Template_button_click_241_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx.viewAllActivity());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](242, " View All ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](243, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](244, "arrow_forward");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](245, "mat-card", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](246, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](247, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](248, DashboardComponent_ng_container_248_Template, 3, 2, "ng-container", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](249, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        const noPortfolio_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](27);
        const noPayoutStat_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](95);
        const noPayoutHint_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](101);
        const noStokvels_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](232);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](14, 23, ctx.heroEmoji$));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("Hello, ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](17, 25, ctx.userName$) || "Guest", "!");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](19, 27, ctx.heroSubtitleClass$));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](21, 29, ctx.heroSubtitle$), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](23, 31, ctx.hasStokvels$) === false);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](25, 33, ctx.hasStokvels$))("ngIfElse", noPortfolio_r20);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](41, 35, ctx.percentageChangeForJoinedStokvels$));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](45, 37, ctx.userStokvelsCount$));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("+", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](50, 39, ctx.newlyJoinedStokvelCount$), " from last month");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("R", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](69, 43, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](68, 41, ctx.totalContributions$)));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("R", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](75, 47, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](74, 45, ctx.monthlyChange$)), " this month");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](90, 49, ctx.daysUntilPayout$), " days");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](93, 51, ctx.nextPayout$))("ngIfElse", noPayoutStat_r21);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](99, 53, ctx.nextPayoutStokvelName$))("ngIfElse", noPayoutHint_r22);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](117, 57, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](116, 55, ctx.totalGrowthPercent$), "1.1-1"), "%");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("R", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](122, 62, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](121, 60, ctx.totalGrowth$)));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](143, 64, ctx.portfolioDistribution$));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](87);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](230, 66, ctx.userStokvels$))("ngIfElse", noStokvels_r23);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](249, 68, ctx.recentActivities$));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule, _material_module__WEBPACK_IMPORTED_MODULE_2__.MaterialModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_15__.MatButton, _angular_material_card__WEBPACK_IMPORTED_MODULE_16__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_16__.MatCardActions, _angular_material_card__WEBPACK_IMPORTED_MODULE_16__.MatCardContent, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_17__.MatProgressBar, _angular_common__WEBPACK_IMPORTED_MODULE_0__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_0__.SlicePipe, _angular_common__WEBPACK_IMPORTED_MODULE_0__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_0__.DatePipe],
    styles: ["@charset \"UTF-8\";\n.dashboard-container[_ngcontent-%COMP%] {\n  padding: 24px;\n  max-width: 1400px;\n  margin: 0 auto;\n  background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 50%, #e2e8f0 100%);\n  min-height: 100vh;\n}\n\n\n\n.dashboard-header[_ngcontent-%COMP%] {\n  margin-bottom: 32px;\n}\n\n.dashboard-hero[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, rgba(6, 29, 74, 0.97) 0%, rgba(13, 71, 161, 0.93) 50%, rgba(21, 101, 192, 0.88) 100%);\n  color: white;\n  padding: 48px 40px;\n  border-radius: 24px;\n  position: relative;\n  overflow: hidden;\n  box-shadow: 0 20px 40px rgba(13, 71, 161, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.08);\n  -webkit-backdrop-filter: blur(20px);\n          backdrop-filter: blur(20px);\n}\n\n.hero-background[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  opacity: 0.1;\n}\n\n.floating-shapes[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n.floating-shapes[_ngcontent-%COMP%]   .shape[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.1);\n}\n.floating-shapes[_ngcontent-%COMP%]   .shape.shape-1[_ngcontent-%COMP%] {\n  width: 120px;\n  height: 120px;\n  top: -30px;\n  right: 10%;\n  animation: _ngcontent-%COMP%_float 6s ease-in-out infinite;\n}\n.floating-shapes[_ngcontent-%COMP%]   .shape.shape-2[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  bottom: 20%;\n  left: 5%;\n  animation: _ngcontent-%COMP%_float 8s ease-in-out infinite reverse;\n}\n.floating-shapes[_ngcontent-%COMP%]   .shape.shape-3[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  top: 40%;\n  right: 20%;\n  animation: _ngcontent-%COMP%_float 10s ease-in-out infinite;\n}\n.floating-shapes[_ngcontent-%COMP%]   .shape.shape-4[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 100px;\n  bottom: -20px;\n  right: 30%;\n  animation: _ngcontent-%COMP%_float 7s ease-in-out infinite reverse;\n}\n\n@keyframes _ngcontent-%COMP%_float {\n  0%, 100% {\n    transform: translateY(0px) rotate(0deg);\n  }\n  50% {\n    transform: translateY(-20px) rotate(180deg);\n  }\n}\n.dashboard-hero-content[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 48px;\n}\n\n.hero-text[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.hero-text[_ngcontent-%COMP%]   .welcome-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  background: rgba(255, 255, 255, 0.2);\n  -webkit-backdrop-filter: blur(10px);\n          backdrop-filter: blur(10px);\n  padding: 8px 16px;\n  border-radius: 20px;\n  margin-bottom: 16px;\n  border: 1px solid rgba(255, 255, 255, 0.3);\n}\n.hero-text[_ngcontent-%COMP%]   .welcome-badge[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n}\n\n.dashboard-title[_ngcontent-%COMP%] {\n  font-size: 42px;\n  margin-bottom: 8px;\n  font-weight: 800;\n  background: linear-gradient(135deg, #fff 0%, #e0f0ff 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  text-shadow: none;\n}\n\n.dashboard-subtitle[_ngcontent-%COMP%] {\n  font-size: 18px;\n  opacity: 0.9;\n  font-weight: 400;\n  margin: 0 0 4px;\n}\n.dashboard-subtitle.subtitle-new[_ngcontent-%COMP%] {\n  font-size: 16px;\n  opacity: 0.75;\n  font-style: italic;\n}\n.dashboard-subtitle.subtitle-active[_ngcontent-%COMP%] {\n  opacity: 0.95;\n}\n\n.hero-cta-new[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  margin-top: 20px;\n  flex-wrap: wrap;\n}\n\n.hero-btn-create[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 11px 22px;\n  border-radius: 10px;\n  border: none;\n  cursor: pointer;\n  background: linear-gradient(135deg, #d97706, #f59e0b);\n  color: #fff;\n  font-size: 14px;\n  font-weight: 700;\n  font-family: inherit;\n  box-shadow: 0 4px 16px rgba(217, 119, 6, 0.4);\n  transition: all 0.2s;\n}\n.hero-btn-create[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.hero-btn-create[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 24px rgba(217, 119, 6, 0.5);\n}\n\n.hero-btn-browse[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 11px 22px;\n  border-radius: 10px;\n  cursor: pointer;\n  background: rgba(255, 255, 255, 0.15);\n  border: 1.5px solid rgba(255, 255, 255, 0.35);\n  color: #fff;\n  font-size: 14px;\n  font-weight: 600;\n  font-family: inherit;\n  transition: all 0.2s;\n}\n.hero-btn-browse[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.hero-btn-browse[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.25);\n}\n\n.portfolio-empty-card[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.12);\n  -webkit-backdrop-filter: blur(16px);\n          backdrop-filter: blur(16px);\n  border-radius: 20px;\n  border: 1.5px dashed rgba(255, 255, 255, 0.3);\n  padding: 28px 32px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n  min-width: 280px;\n  text-align: center;\n}\n\n.empty-portfolio-icon[_ngcontent-%COMP%] {\n  width: 52px;\n  height: 52px;\n  border-radius: 16px;\n  background: rgba(255, 255, 255, 0.15);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 4px;\n}\n.empty-portfolio-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 26px;\n  width: 26px;\n  height: 26px;\n  color: rgba(255, 255, 255, 0.7);\n}\n\n.empty-portfolio-label[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 700;\n  color: rgba(255, 255, 255, 0.9);\n  margin: 0;\n}\n\n.empty-portfolio-sub[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: rgba(255, 255, 255, 0.55);\n  margin: 0;\n  line-height: 1.5;\n}\n\n.stat-zero[_ngcontent-%COMP%] {\n  opacity: 0.45;\n  font-size: 28px !important;\n}\n\n.stat-hint[_ngcontent-%COMP%] {\n  font-style: italic;\n  opacity: 0.55;\n  font-size: 11px !important;\n}\n\n.highlights-empty[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 10px;\n  padding: 32px 16px;\n  text-align: center;\n}\n.highlights-empty[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 36px;\n  width: 36px;\n  height: 36px;\n  color: #cbd5e1;\n}\n.highlights-empty[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #94a3b8;\n  margin: 0;\n  line-height: 1.5;\n}\n\n.portfolio-summary[_ngcontent-%COMP%]   .portfolio-value-card[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.15);\n  -webkit-backdrop-filter: blur(20px);\n          backdrop-filter: blur(20px);\n  border-radius: 20px;\n  padding: 24px;\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  display: flex;\n  align-items: center;\n  gap: 24px;\n  min-width: 320px;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);\n}\n.portfolio-summary[_ngcontent-%COMP%]   .portfolio-value-card[_ngcontent-%COMP%]   .value-content[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.portfolio-summary[_ngcontent-%COMP%]   .portfolio-value-card[_ngcontent-%COMP%]   .value-content[_ngcontent-%COMP%]   .value-label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  opacity: 0.8;\n  margin-bottom: 8px;\n  display: block;\n  font-weight: 500;\n}\n.portfolio-summary[_ngcontent-%COMP%]   .portfolio-value-card[_ngcontent-%COMP%]   .value-content[_ngcontent-%COMP%]   .value-amount[_ngcontent-%COMP%] {\n  font-size: 32px;\n  margin: 0 0 12px;\n  font-weight: 700;\n  background: linear-gradient(135deg, #fff 0%, #dbeafe 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n.portfolio-summary[_ngcontent-%COMP%]   .portfolio-value-card[_ngcontent-%COMP%]   .value-content[_ngcontent-%COMP%]   .value-change[_ngcontent-%COMP%]   .change-indicator[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 14px;\n  font-weight: 600;\n  padding: 6px 12px;\n  background: rgba(76, 175, 80, 0.2);\n  border-radius: 12px;\n  border: 1px solid rgba(76, 175, 80, 0.3);\n}\n.portfolio-summary[_ngcontent-%COMP%]   .portfolio-value-card[_ngcontent-%COMP%]   .value-content[_ngcontent-%COMP%]   .value-change[_ngcontent-%COMP%]   .change-indicator.positive[_ngcontent-%COMP%] {\n  color: #a5d6a7;\n}\n.portfolio-summary[_ngcontent-%COMP%]   .portfolio-value-card[_ngcontent-%COMP%]   .value-content[_ngcontent-%COMP%]   .value-change[_ngcontent-%COMP%]   .change-indicator[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  height: 16px;\n  width: 16px;\n}\n.portfolio-summary[_ngcontent-%COMP%]   .portfolio-value-card[_ngcontent-%COMP%]   .value-sparkline[_ngcontent-%COMP%]   .sparkline-chart[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 40px;\n  color: rgba(255, 255, 255, 0.8);\n}\n.portfolio-summary[_ngcontent-%COMP%]   .portfolio-value-card[_ngcontent-%COMP%]   .value-sparkline[_ngcontent-%COMP%]   .sparkline-chart[_ngcontent-%COMP%]   .chart-line[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n\n\n.dashboard-stats[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 24px;\n  position: relative;\n  z-index: 2;\n}\n\n.stat-card[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.15);\n  -webkit-backdrop-filter: blur(20px);\n          backdrop-filter: blur(20px);\n  border-radius: 20px;\n  padding: 28px;\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  position: relative;\n  overflow: hidden;\n  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);\n}\n.stat-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-8px) scale(1.02);\n  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.2);\n}\n.stat-card[_ngcontent-%COMP%]:hover   .card-glow[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: scale(1.1);\n}\n.stat-card[_ngcontent-%COMP%]   .card-glow[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 100%;\n  background: linear-gradient(135deg, rgba(255, 255, 255, 0.3) 0%, transparent 50%);\n  opacity: 0;\n  transition: all 0.4s ease;\n  pointer-events: none;\n}\n\n.stat-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 24px;\n}\n\n.stat-icon[_ngcontent-%COMP%]   .icon-wrapper[_ngcontent-%COMP%] {\n  width: 56px;\n  height: 56px;\n  background: rgba(255, 255, 255, 0.2);\n  border-radius: 16px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid rgba(255, 255, 255, 0.3);\n  -webkit-backdrop-filter: blur(10px);\n          backdrop-filter: blur(10px);\n}\n.stat-icon[_ngcontent-%COMP%]   .icon-wrapper[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 28px;\n  height: 28px;\n  width: 28px;\n  color: white;\n}\n\n.stat-trend[_ngcontent-%COMP%], .stat-indicator[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 12px;\n  border-radius: 12px;\n  font-size: 12px;\n  font-weight: 700;\n  -webkit-backdrop-filter: blur(10px);\n          backdrop-filter: blur(10px);\n}\n.stat-trend.positive[_ngcontent-%COMP%], .stat-indicator.positive[_ngcontent-%COMP%] {\n  background: rgba(76, 175, 80, 0.3);\n  color: #c8e6c9;\n  border: 1px solid rgba(76, 175, 80, 0.4);\n}\n.stat-trend.upcoming[_ngcontent-%COMP%], .stat-indicator.upcoming[_ngcontent-%COMP%] {\n  background: rgba(255, 152, 0, 0.3);\n  color: #ffe0b2;\n  border: 1px solid rgba(255, 152, 0, 0.4);\n}\n.stat-trend[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], .stat-indicator[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n  height: 14px;\n  width: 14px;\n}\n\n.stat-content[_ngcontent-%COMP%]   h3.stat-value[_ngcontent-%COMP%] {\n  font-size: 32px;\n  margin: 0 0 8px;\n  font-weight: 700;\n  background: linear-gradient(135deg, #fff 0%, #ffebf3 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n.stat-content[_ngcontent-%COMP%]   .stat-label[_ngcontent-%COMP%] {\n  font-size: 16px;\n  opacity: 0.9;\n  margin: 0 0 8px;\n  font-weight: 500;\n}\n.stat-content[_ngcontent-%COMP%]   .stat-comparison[_ngcontent-%COMP%] {\n  font-size: 13px;\n  opacity: 0.8;\n  font-weight: 400;\n}\n\n.stat-decoration[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  opacity: 0.1;\n}\n.stat-decoration[_ngcontent-%COMP%]   .decoration-dots[_ngcontent-%COMP%], .stat-decoration[_ngcontent-%COMP%]   .decoration-wave[_ngcontent-%COMP%], .stat-decoration[_ngcontent-%COMP%]   .decoration-confetti[_ngcontent-%COMP%], .stat-decoration[_ngcontent-%COMP%]   .decoration-line[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 100px;\n  background-size: contain;\n  background-repeat: no-repeat;\n}\n\n\n\n.glass-card[_ngcontent-%COMP%], .activity-card[_ngcontent-%COMP%], .no-stokvels-container[_ngcontent-%COMP%], .stokvel-card[_ngcontent-%COMP%], .distribution-chart-card[_ngcontent-%COMP%], .performance-highlights-card[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.8);\n  -webkit-backdrop-filter: blur(20px);\n          backdrop-filter: blur(20px);\n  border-radius: 20px;\n  border: 1px solid rgba(255, 255, 255, 0.3);\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1), 0 2px 8px rgba(0, 0, 0, 0.05);\n  position: relative;\n  overflow: hidden;\n}\n.glass-card[_ngcontent-%COMP%]   .card-pattern[_ngcontent-%COMP%], .activity-card[_ngcontent-%COMP%]   .card-pattern[_ngcontent-%COMP%], .no-stokvels-container[_ngcontent-%COMP%]   .card-pattern[_ngcontent-%COMP%], .stokvel-card[_ngcontent-%COMP%]   .card-pattern[_ngcontent-%COMP%], .distribution-chart-card[_ngcontent-%COMP%]   .card-pattern[_ngcontent-%COMP%], .performance-highlights-card[_ngcontent-%COMP%]   .card-pattern[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: radial-gradient(circle at 20% 80%, rgba(13, 71, 161, 0.05) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(21, 101, 192, 0.05) 0%, transparent 50%);\n  pointer-events: none;\n}\n\n\n\n.section-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n  margin-bottom: 32px;\n}\n.section-header[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 32px;\n  font-weight: 700;\n  background: linear-gradient(135deg, #1a202c 0%, #4a5568 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  margin: 0 0 8px;\n}\n.section-header[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #718096;\n  margin: 0;\n  font-weight: 400;\n}\n\n.gradient-btn[_ngcontent-%COMP%], .view-all-btn[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #0d47a1 0%, #1565c0 100%);\n  color: white;\n  border: none;\n  border-radius: 12px;\n  padding: 12px 24px;\n  font-weight: 600;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  transition: all 0.3s ease;\n  box-shadow: 0 4px 15px rgba(13, 71, 161, 0.28);\n}\n.gradient-btn[_ngcontent-%COMP%]:hover, .view-all-btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 25px rgba(13, 71, 161, 0.4);\n}\n.gradient-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], .view-all-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  height: 18px;\n  width: 18px;\n}\n\n\n\n.portfolio-distribution-section[_ngcontent-%COMP%] {\n  margin-bottom: 48px;\n}\n\n.distribution-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 2fr 1fr;\n  gap: 24px;\n}\n\n.distribution-chart-card[_ngcontent-%COMP%], .performance-highlights-card[_ngcontent-%COMP%] {\n  padding: 32px;\n}\n\n.pie-chart-visual[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 40px;\n  align-items: center;\n}\n\n.chart-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  width: 200px;\n  height: 200px;\n}\n.chart-wrapper[_ngcontent-%COMP%]   .pie-chart[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  position: relative;\n  overflow: hidden;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);\n}\n.chart-wrapper[_ngcontent-%COMP%]   .chart-segment[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  clip-path: polygon(50% 50%, 50% 0%, 100% 0%, 100% 100%, 50% 100%);\n  transform-origin: center;\n  transition: all 0.3s ease;\n}\n.chart-wrapper[_ngcontent-%COMP%]   .chart-segment[_ngcontent-%COMP%]:hover {\n  opacity: 0.9 !important;\n  transform: scale(1.05) rotate(var(--rotation, 0deg)) !important;\n}\n.chart-wrapper[_ngcontent-%COMP%]   .chart-center[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background: white;\n  width: 100px;\n  height: 100px;\n  border-radius: 50%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);\n}\n.chart-wrapper[_ngcontent-%COMP%]   .chart-center[_ngcontent-%COMP%]   .center-content[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.chart-wrapper[_ngcontent-%COMP%]   .chart-center[_ngcontent-%COMP%]   .center-content[_ngcontent-%COMP%]   .chart-total[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #718096;\n  margin-bottom: 4px;\n  display: block;\n}\n.chart-wrapper[_ngcontent-%COMP%]   .chart-center[_ngcontent-%COMP%]   .center-content[_ngcontent-%COMP%]   .chart-amount[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 700;\n  color: #1a202c;\n}\n\n.chart-legends[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.chart-legends[_ngcontent-%COMP%]   .legend-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 16px 0;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.06);\n  transition: all 0.3s ease;\n}\n.chart-legends[_ngcontent-%COMP%]   .legend-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.chart-legends[_ngcontent-%COMP%]   .legend-item[_ngcontent-%COMP%]:hover {\n  background: rgba(0, 0, 0, 0.02);\n  border-radius: 12px;\n  padding-left: 12px;\n  padding-right: 12px;\n  margin: 0 -12px;\n}\n\n.legend-marker[_ngcontent-%COMP%]   .legend-color[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  border-radius: 4px;\n}\n\n.legend-info[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n}\n.legend-info[_ngcontent-%COMP%]   .legend-label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: #1a202c;\n  margin-bottom: 2px;\n}\n.legend-info[_ngcontent-%COMP%]   .legend-percentage[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #718096;\n}\n\n.legend-amount[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 700;\n  color: #0d47a1;\n}\n\n\n\n.highlights-title[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n  margin-bottom: 24px;\n  color: #1a202c;\n}\n\n.highlights-list[_ngcontent-%COMP%]   .highlight-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 16px;\n  border-radius: 12px;\n  margin-bottom: 12px;\n  transition: all 0.3s ease;\n}\n.highlights-list[_ngcontent-%COMP%]   .highlight-item[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.highlights-list[_ngcontent-%COMP%]   .highlight-item.positive[_ngcontent-%COMP%] {\n  background: rgba(76, 175, 80, 0.1);\n  border: 1px solid rgba(76, 175, 80, 0.2);\n}\n.highlights-list[_ngcontent-%COMP%]   .highlight-item.upcoming[_ngcontent-%COMP%] {\n  background: rgba(255, 152, 0, 0.1);\n  border: 1px solid rgba(255, 152, 0, 0.2);\n}\n.highlights-list[_ngcontent-%COMP%]   .highlight-item.milestone[_ngcontent-%COMP%] {\n  background: rgba(156, 39, 176, 0.1);\n  border: 1px solid rgba(156, 39, 176, 0.2);\n}\n.highlights-list[_ngcontent-%COMP%]   .highlight-item[_ngcontent-%COMP%]:hover {\n  transform: translateX(8px);\n}\n\n.highlight-icon[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.highlight-item.positive[_ngcontent-%COMP%]   .highlight-icon[_ngcontent-%COMP%] {\n  background: rgba(76, 175, 80, 0.2);\n  color: #4caf50;\n}\n.highlight-item.upcoming[_ngcontent-%COMP%]   .highlight-icon[_ngcontent-%COMP%] {\n  background: rgba(255, 152, 0, 0.2);\n  color: #ff9800;\n}\n.highlight-item.milestone[_ngcontent-%COMP%]   .highlight-icon[_ngcontent-%COMP%] {\n  background: rgba(156, 39, 176, 0.2);\n  color: #1565c0;\n}\n.highlight-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  height: 20px;\n  width: 20px;\n}\n\n.highlight-content[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n}\n.highlight-content[_ngcontent-%COMP%]   .highlight-title[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #718096;\n  margin-bottom: 2px;\n  text-transform: uppercase;\n  font-weight: 600;\n}\n.highlight-content[_ngcontent-%COMP%]   .highlight-value[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: #1a202c;\n  margin-bottom: 2px;\n}\n.highlight-content[_ngcontent-%COMP%]   .highlight-change[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #718096;\n}\n\n\n\n.quick-actions-section[_ngcontent-%COMP%] {\n  margin-bottom: 48px;\n}\n\n.quick-actions-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 20px;\n}\n\n.action-card[_ngcontent-%COMP%] {\n  background: white;\n  border: none;\n  border-radius: 16px;\n  padding: 24px;\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  cursor: pointer;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  position: relative;\n  overflow: hidden;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);\n}\n.action-card[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: linear-gradient(135deg, var(--gradient-start), var(--gradient-end));\n  opacity: 0;\n  transition: opacity 0.3s ease;\n}\n.action-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);\n}\n.action-card[_ngcontent-%COMP%]:hover::before {\n  opacity: 0.05;\n}\n.action-card[_ngcontent-%COMP%]:hover   .action-arrow[_ngcontent-%COMP%] {\n  transform: translateX(4px);\n}\n.action-card.primary-action[_ngcontent-%COMP%] {\n  --gradient-start: #0d47a1;\n  --gradient-end: #1565c0;\n  border-left: 4px solid #0d47a1;\n}\n.action-card.accent-action[_ngcontent-%COMP%] {\n  --gradient-start: #d97706;\n  --gradient-end: #f59e0b;\n  border-left: 4px solid #d97706;\n}\n.action-card.secondary-action[_ngcontent-%COMP%] {\n  --gradient-start: #059669;\n  --gradient-end: #10b981;\n  border-left: 4px solid #059669;\n}\n.action-card.success-action[_ngcontent-%COMP%] {\n  --gradient-start: #388e3c;\n  --gradient-end: #2e7d32;\n  border-left: 4px solid #388e3c;\n}\n.action-card.wallet-action[_ngcontent-%COMP%] {\n  --gradient-start: #6366f1;\n  --gradient-end: #8b5cf6;\n  border-left: 4px solid #6366f1;\n}\n\n.action-icon[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n}\n.action-icon[_ngcontent-%COMP%]   .icon-background[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.primary-action[_ngcontent-%COMP%]   .action-icon[_ngcontent-%COMP%]   .icon-background[_ngcontent-%COMP%] {\n  background: rgba(13, 71, 161, 0.1);\n  color: #0d47a1;\n}\n.accent-action[_ngcontent-%COMP%]   .action-icon[_ngcontent-%COMP%]   .icon-background[_ngcontent-%COMP%] {\n  background: rgba(217, 119, 6, 0.1);\n  color: #d97706;\n}\n.secondary-action[_ngcontent-%COMP%]   .action-icon[_ngcontent-%COMP%]   .icon-background[_ngcontent-%COMP%] {\n  background: rgba(5, 150, 105, 0.1);\n  color: #059669;\n}\n.success-action[_ngcontent-%COMP%]   .action-icon[_ngcontent-%COMP%]   .icon-background[_ngcontent-%COMP%] {\n  background: rgba(56, 142, 60, 0.1);\n  color: #388e3c;\n}\n.wallet-action[_ngcontent-%COMP%]   .action-icon[_ngcontent-%COMP%]   .icon-background[_ngcontent-%COMP%] {\n  background: rgba(99, 102, 241, 0.1);\n  color: #6366f1;\n}\n.action-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n  height: 24px;\n  width: 24px;\n}\n\n.action-content[_ngcontent-%COMP%] {\n  flex: 1;\n  position: relative;\n  z-index: 2;\n}\n.action-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  margin: 0 0 4px;\n  color: #1a202c;\n}\n.action-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #718096;\n  margin: 0;\n}\n\n.action-arrow[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  transition: transform 0.3s ease;\n  color: #718096;\n}\n.action-arrow[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  height: 20px;\n  width: 20px;\n}\n\n\n\n.my-stokvels-section[_ngcontent-%COMP%] {\n  margin-bottom: 48px;\n}\n\n.stokvels-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));\n  gap: 24px;\n}\n\n.stokvel-card[_ngcontent-%COMP%] {\n  padding: 24px;\n  transition: all 0.3s ease;\n}\n.stokvel-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.3);\n}\n\n.stokvel-header[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  margin-bottom: 20px;\n}\n\n.stokvel-image-container[_ngcontent-%COMP%] {\n  position: relative;\n  flex: 0 0 80px;\n}\n\n.stokvel-image[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  border-radius: 12px;\n  background-size: cover;\n  background-position: center;\n  position: relative;\n  overflow: hidden;\n}\n.stokvel-image.monthly[_ngcontent-%COMP%] {\n  background-image: url(\"https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80\");\n}\n.stokvel-image.investment[_ngcontent-%COMP%] {\n  background-image: url(\"https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80\");\n}\n.stokvel-image.property[_ngcontent-%COMP%] {\n  background-image: url(\"https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2073&q=80\");\n}\n.stokvel-image.family[_ngcontent-%COMP%] {\n  background-image: url(\"https://images.unsplash.com/photo-1515377905703-c4788e51af15?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80\");\n}\n.stokvel-image[_ngcontent-%COMP%]   .image-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: linear-gradient(135deg, rgba(13, 71, 161, 0.2), rgba(21, 101, 192, 0.2));\n  border-radius: 12px;\n}\n\n.stokvel-status[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 8px;\n  right: 8px;\n  padding: 4px 8px;\n  border-radius: 8px;\n  font-size: 10px;\n  font-weight: 700;\n  text-transform: uppercase;\n  -webkit-backdrop-filter: blur(10px);\n          backdrop-filter: blur(10px);\n}\n.stokvel-status.active[_ngcontent-%COMP%] {\n  background: rgba(76, 175, 80, 0.9);\n  color: white;\n}\n.stokvel-status.pending[_ngcontent-%COMP%] {\n  background: rgba(255, 152, 0, 0.9);\n  color: white;\n}\n.stokvel-status.completed[_ngcontent-%COMP%] {\n  background: rgba(158, 158, 158, 0.9);\n  color: white;\n}\n\n.stokvel-info[_ngcontent-%COMP%] {\n  flex: 1;\n}\n\n.stokvel-name[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n  margin: 0 0 4px;\n  color: #1a202c;\n}\n\n.stokvel-type[_ngcontent-%COMP%] {\n  color: #718096;\n  margin: 0 0 12px;\n  font-size: 14px;\n}\n\n.stokvel-members[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  color: #718096;\n  font-size: 14px;\n}\n.stokvel-members[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  height: 16px;\n  width: 16px;\n}\n\n.stokvel-progress[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n\n.progress-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 8px;\n}\n\n.progress-label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #718096;\n  font-weight: 500;\n}\n\n.progress-percentage[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #0d47a1;\n}\n\n.progress-details[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  font-size: 12px;\n  color: #718096;\n  margin-top: 6px;\n}\n\n.stokvel-details[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n\n.detail-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 8px;\n  font-size: 14px;\n  color: #4a5568;\n}\n.detail-item[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  height: 16px;\n  width: 16px;\n  color: #1565c0;\n}\n\n.stokvel-card[_ngcontent-%COMP%]   mat-card-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  padding: 8px 0 0;\n}\n.stokvel-card[_ngcontent-%COMP%]   mat-card-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-weight: 600;\n}\n\n\n\n.no-stokvels-container[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 60px 40px;\n}\n.no-stokvels-container[_ngcontent-%COMP%]   .no-stokvels-content[_ngcontent-%COMP%]   .no-stokvels-icon[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  background: linear-gradient(135deg, #0d47a1, #1565c0);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto 24px;\n  box-shadow: 0 8px 24px rgba(13, 71, 161, 0.3);\n}\n.no-stokvels-container[_ngcontent-%COMP%]   .no-stokvels-content[_ngcontent-%COMP%]   .no-stokvels-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 40px;\n  height: 40px;\n  width: 40px;\n  color: white;\n}\n.no-stokvels-container[_ngcontent-%COMP%]   .no-stokvels-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 24px;\n  margin-bottom: 12px;\n  color: #1a202c;\n  font-weight: 700;\n}\n.no-stokvels-container[_ngcontent-%COMP%]   .no-stokvels-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #718096;\n  margin-bottom: 32px;\n  max-width: 400px;\n  margin-left: auto;\n  margin-right: auto;\n  font-size: 16px;\n}\n\n.no-stokvels-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  justify-content: center;\n}\n.no-stokvels-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border-radius: 12px;\n  padding: 12px 24px;\n  font-weight: 600;\n}\n\n\n\n.recent-activity-section[_ngcontent-%COMP%] {\n  margin-bottom: 48px;\n}\n\n.activity-card[_ngcontent-%COMP%] {\n  padding: 0;\n}\n\n.activity-list[_ngcontent-%COMP%] {\n  max-height: 400px;\n  overflow-y: auto;\n  padding: 24px;\n}\n\n.activity-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 16px 0;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.06);\n  transition: all 0.3s ease;\n}\n.activity-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.activity-item[_ngcontent-%COMP%]:hover {\n  background: rgba(0, 0, 0, 0.02);\n  border-radius: 12px;\n  padding-left: 16px;\n  padding-right: 16px;\n  margin: 0 -16px;\n}\n\n.activity-icon[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.activity-icon.contribution[_ngcontent-%COMP%] {\n  background: rgba(76, 175, 80, 0.1);\n}\n.activity-icon.contribution[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #4caf50;\n}\n.activity-icon.payout[_ngcontent-%COMP%] {\n  background: rgba(33, 150, 243, 0.1);\n}\n.activity-icon.payout[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #2196f3;\n}\n.activity-icon.invitation[_ngcontent-%COMP%] {\n  background: rgba(255, 152, 0, 0.1);\n}\n.activity-icon.invitation[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #ff9800;\n}\n.activity-icon.update[_ngcontent-%COMP%] {\n  background: rgba(156, 39, 176, 0.1);\n}\n.activity-icon.update[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #1565c0;\n}\n.activity-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  height: 20px;\n  width: 20px;\n}\n\n.activity-details[_ngcontent-%COMP%] {\n  flex: 1;\n}\n\n.activity-description[_ngcontent-%COMP%] {\n  font-weight: 600;\n  margin-bottom: 4px;\n  color: #1a202c;\n  font-size: 14px;\n}\n\n.activity-meta[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  font-size: 12px;\n  color: #718096;\n}\n\n.activity-stokvel[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n\n.activity-amount[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #4caf50;\n  flex-shrink: 0;\n  font-size: 14px;\n}\n\n.no-activity[_ngcontent-%COMP%] {\n  padding: 60px 40px;\n  text-align: center;\n}\n.no-activity[_ngcontent-%COMP%]   .no-activity-content[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 48px;\n  height: 48px;\n  width: 48px;\n  color: #cbd5e0;\n  margin-bottom: 16px;\n}\n.no-activity[_ngcontent-%COMP%]   .no-activity-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #718096;\n  margin: 0;\n  font-size: 16px;\n}\n\n\n\n.preview-mode[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.preview-chart[_ngcontent-%COMP%] {\n  filter: blur(1.5px) saturate(0.6);\n  opacity: 0.55;\n}\n\n.preview-center[_ngcontent-%COMP%]   .chart-amount.preview-amount[_ngcontent-%COMP%] {\n  font-size: 11px !important;\n  font-weight: 600;\n  color: #94a3b8;\n  -webkit-text-fill-color: #94a3b8;\n  background: none;\n}\n\n.preview-blur-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  border-radius: 50%;\n  background: radial-gradient(circle, transparent 35%, rgba(255, 255, 255, 0.25) 100%);\n  pointer-events: none;\n}\n\n.preview-legends[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.preview-legend-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  color: #94a3b8;\n  margin-bottom: 8px;\n  padding-bottom: 8px;\n  border-bottom: 1px dashed rgba(0, 0, 0, 0.08);\n}\n\n\n\n.preview-text[_ngcontent-%COMP%] {\n  filter: blur(3.5px);\n  -webkit-user-select: none;\n          user-select: none;\n  pointer-events: none;\n}\n\n.preview-item[_ngcontent-%COMP%] {\n  opacity: 0.65;\n}\n\n.preview-cta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 8px;\n  margin-top: 14px;\n  padding: 10px 12px;\n  background: rgba(13, 71, 161, 0.06);\n  border: 1px solid rgba(13, 71, 161, 0.14);\n  border-radius: 10px;\n  font-size: 12px;\n  color: #1565c0;\n  line-height: 1.5;\n}\n.preview-cta[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n  flex-shrink: 0;\n  margin-top: 1px;\n}\n\n.preview-highlights[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n\n\n\n@media (max-width: 1200px) {\n  .distribution-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .pie-chart-visual[_ngcontent-%COMP%] {\n    flex-direction: column;\n    text-align: center;\n  }\n}\n@media (max-width: 768px) {\n  .dashboard-container[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .dashboard-hero[_ngcontent-%COMP%] {\n    padding: 32px 24px;\n  }\n  .dashboard-hero-content[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 24px;\n  }\n  .portfolio-value-card[_ngcontent-%COMP%] {\n    min-width: auto !important;\n  }\n  .dashboard-stats[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .section-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 16px;\n  }\n  .quick-actions-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .stokvels-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .stokvel-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    text-align: center;\n  }\n  .stokvel-image-container[_ngcontent-%COMP%] {\n    align-self: center;\n  }\n  .no-stokvels-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: center;\n  }\n}\n@media (max-width: 480px) {\n  .dashboard-hero[_ngcontent-%COMP%] {\n    padding: 24px 20px;\n  }\n  .dashboard-title[_ngcontent-%COMP%] {\n    font-size: 32px;\n  }\n  .value-amount[_ngcontent-%COMP%] {\n    font-size: 28px;\n  }\n  .section-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 24px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUFoQjtFQUNFLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSwwRUFBQTtFQUNBLGlCQUFBO0FBRUY7O0FBQ0Esd0NBQUE7QUFDQTtFQUNFLG1CQUFBO0FBRUY7O0FBQ0E7RUFDRSx5SEFBQTtFQUlBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1GQUNFO0VBRUYsbUNBQUE7VUFBQSwyQkFBQTtBQUhGOztBQU1BO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtBQUhGOztBQU1BO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUhGO0FBS0U7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0NBQUE7QUFISjtBQUtJO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLHdDQUFBO0FBSE47QUFNSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFDQSxnREFBQTtBQUpOO0FBT0k7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EseUNBQUE7QUFMTjtBQVFJO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtFQUNBLGdEQUFBO0FBTk47O0FBV0E7RUFDRTtJQUFXLHVDQUFBO0VBUFg7RUFRQTtJQUFNLDJDQUFBO0VBTE47QUFDRjtBQU9BO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUxGOztBQVFBO0VBQ0UsT0FBQTtBQUxGO0FBT0U7RUFDRSxxQkFBQTtFQUNBLG9DQUFBO0VBQ0EsbUNBQUE7VUFBQSwyQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLDBDQUFBO0FBTEo7QUFPSTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQUxOOztBQVVBO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwREFBQTtFQUNBLDZCQUFBO0VBQ0Esb0NBQUE7RUFDQSxpQkFBQTtBQVBGOztBQVVBO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFQRjtBQVNFO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQVBKO0FBVUU7RUFDRSxhQUFBO0FBUko7O0FBYUE7RUFDRSxhQUFBO0VBQWUsU0FBQTtFQUFXLGdCQUFBO0VBQWtCLGVBQUE7QUFQOUM7O0FBVUE7RUFDRSxvQkFBQTtFQUFzQixtQkFBQTtFQUFxQixRQUFBO0VBQzNDLGtCQUFBO0VBQW9CLG1CQUFBO0VBQXFCLFlBQUE7RUFBYyxlQUFBO0VBQ3ZELHFEQUFBO0VBQ0EsV0FBQTtFQUFhLGVBQUE7RUFBaUIsZ0JBQUE7RUFBa0Isb0JBQUE7RUFDaEQsNkNBQUE7RUFDQSxvQkFBQTtBQUNGO0FBQUU7RUFBVyxlQUFBO0VBQWlCLFdBQUE7RUFBYSxZQUFBO0FBSzNDO0FBSkU7RUFBVSwyQkFBQTtFQUE2Qiw2Q0FBQTtBQVF6Qzs7QUFMQTtFQUNFLG9CQUFBO0VBQXNCLG1CQUFBO0VBQXFCLFFBQUE7RUFDM0Msa0JBQUE7RUFBb0IsbUJBQUE7RUFBcUIsZUFBQTtFQUN6QyxxQ0FBQTtFQUFtQyw2Q0FBQTtFQUNuQyxXQUFBO0VBQWEsZUFBQTtFQUFpQixnQkFBQTtFQUFrQixvQkFBQTtFQUNoRCxvQkFBQTtBQWdCRjtBQWZFO0VBQVcsZUFBQTtFQUFpQixXQUFBO0VBQWEsWUFBQTtBQW9CM0M7QUFuQkU7RUFBVSxxQ0FBQTtBQXNCWjs7QUFsQkE7RUFDRSxxQ0FBQTtFQUNBLG1DQUFBO1VBQUEsMkJBQUE7RUFDQSxtQkFBQTtFQUNBLDZDQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQWUsc0JBQUE7RUFBd0IsbUJBQUE7RUFDdkMsUUFBQTtFQUFVLGdCQUFBO0VBQWtCLGtCQUFBO0FBeUI5Qjs7QUF0QkE7RUFDRSxXQUFBO0VBQWEsWUFBQTtFQUFjLG1CQUFBO0VBQzNCLHFDQUFBO0VBQ0EsYUFBQTtFQUFlLG1CQUFBO0VBQXFCLHVCQUFBO0VBQ3BDLGtCQUFBO0FBNkJGO0FBNUJFO0VBQVcsZUFBQTtFQUFpQixXQUFBO0VBQWEsWUFBQTtFQUFjLCtCQUFBO0FBa0N6RDs7QUEvQkE7RUFDRSxlQUFBO0VBQWlCLGdCQUFBO0VBQWtCLCtCQUFBO0VBQTZCLFNBQUE7QUFxQ2xFOztBQW5DQTtFQUNFLGVBQUE7RUFBaUIsZ0NBQUE7RUFBOEIsU0FBQTtFQUFXLGdCQUFBO0FBeUM1RDs7QUFyQ0E7RUFDRSxhQUFBO0VBQ0EsMEJBQUE7QUF3Q0Y7O0FBckNBO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsMEJBQUE7QUF3Q0Y7O0FBcENBO0VBQ0UsYUFBQTtFQUFlLHNCQUFBO0VBQXdCLG1CQUFBO0VBQ3ZDLFNBQUE7RUFBVyxrQkFBQTtFQUFvQixrQkFBQTtBQTJDakM7QUExQ0U7RUFBVyxlQUFBO0VBQWlCLFdBQUE7RUFBYSxZQUFBO0VBQWMsY0FBQTtBQWdEekQ7QUEvQ0U7RUFBSSxlQUFBO0VBQWlCLGNBQUE7RUFBZ0IsU0FBQTtFQUFXLGdCQUFBO0FBcURsRDs7QUFqREU7RUFDRSxxQ0FBQTtFQUNBLG1DQUFBO1VBQUEsMkJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSwwQ0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLHlDQUFBO0FBb0RKO0FBbERJO0VBQ0UsT0FBQTtBQW9ETjtBQWxETTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFvRFI7QUFqRE07RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLDBEQUFBO0VBQ0EsNkJBQUE7RUFDQSxvQ0FBQTtBQW1EUjtBQS9DUTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtDQUFBO0VBQ0EsbUJBQUE7RUFDQSx3Q0FBQTtBQWlEVjtBQS9DVTtFQUNFLGNBQUE7QUFpRFo7QUE5Q1U7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFnRFo7QUF6Q007RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLCtCQUFBO0FBMkNSO0FBekNRO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUEyQ1Y7O0FBcENBLHlCQUFBO0FBQ0E7RUFDRSxhQUFBO0VBQ0EsMkRBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FBdUNGOztBQXBDQTtFQUNFLHFDQUFBO0VBQ0EsbUNBQUE7VUFBQSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLDBDQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLDREQUFBO0VBQ0EseUNBQUE7QUF1Q0Y7QUFyQ0U7RUFDRSx1Q0FBQTtFQUNBLCtFQUNFO0FBc0NOO0FBbkNJO0VBQ0UsVUFBQTtFQUNBLHFCQUFBO0FBcUNOO0FBakNFO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0EsaUZBQUE7RUFHQSxVQUFBO0VBQ0EseUJBQUE7RUFDQSxvQkFBQTtBQWlDSjs7QUE3QkE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBZ0NGOztBQTVCRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0NBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsMENBQUE7RUFDQSxtQ0FBQTtVQUFBLDJCQUFBO0FBK0JKO0FBN0JJO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQStCTjs7QUExQkE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1DQUFBO1VBQUEsMkJBQUE7QUE2QkY7QUEzQkU7RUFDRSxrQ0FBQTtFQUNBLGNBQUE7RUFDQSx3Q0FBQTtBQTZCSjtBQTFCRTtFQUNFLGtDQUFBO0VBQ0EsY0FBQTtFQUNBLHdDQUFBO0FBNEJKO0FBekJFO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBMkJKOztBQXRCRTtFQUNFLGVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwREFBQTtFQUNBLDZCQUFBO0VBQ0Esb0NBQUE7QUF5Qko7QUF0QkU7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQXdCSjtBQXJCRTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUF1Qko7O0FBbkJBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7QUFzQkY7QUFwQkU7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHdCQUFBO0VBQ0EsNEJBQUE7QUFzQko7O0FBbEJBLHFCQUFBO0FBQ0E7RUFDRSxvQ0FBQTtFQUNBLG1DQUFBO1VBQUEsMkJBQUE7RUFDQSxtQkFBQTtFQUNBLDBDQUFBO0VBQ0Esd0VBQ0U7RUFFRixrQkFBQTtFQUNBLGdCQUFBO0FBbUJGO0FBakJFO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsNktBQ0U7RUFFRixvQkFBQTtBQWlCSjs7QUFiQSxtQkFBQTtBQUNBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQWdCRjtBQWJJO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsNkRBQUE7RUFDQSw2QkFBQTtFQUNBLG9DQUFBO0VBQ0EsZUFBQTtBQWVOO0FBWkk7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtBQWNOOztBQVRBO0VBQ0UsNkRBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7RUFDQSx5QkFBQTtFQUNBLDhDQUFBO0FBWUY7QUFWRTtFQUNFLDJCQUFBO0VBQ0EsNkNBQUE7QUFZSjtBQVRFO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBV0o7O0FBUEEsMkJBQUE7QUFDQTtFQUNFLG1CQUFBO0FBVUY7O0FBUEE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxTQUFBO0FBVUY7O0FBUEE7RUFFRSxhQUFBO0FBU0Y7O0FBTkE7RUFDRSxhQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0FBU0Y7O0FBTkE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBU0Y7QUFQRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUNBQUE7QUFTSjtBQU5FO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlFQUFBO0VBQ0Esd0JBQUE7RUFDQSx5QkFBQTtBQVFKO0FBTkk7RUFDRSx1QkFBQTtFQUNBLCtEQUFBO0FBUU47QUFKRTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSx5Q0FBQTtBQU1KO0FBSkk7RUFDRSxrQkFBQTtBQU1OO0FBSk07RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQU1SO0FBSE07RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBS1I7O0FBQ0E7RUFDRSxPQUFBO0FBRUY7QUFBRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsNENBQUE7RUFDQSx5QkFBQTtBQUVKO0FBQUk7RUFDRSxtQkFBQTtBQUVOO0FBQ0k7RUFDRSwrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFDTjs7QUFLRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFGSjs7QUFNQTtFQUNFLE9BQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUFIRjtBQUtFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBSEo7QUFNRTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FBSko7O0FBUUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBTEY7O0FBUUEsMkJBQUE7QUFDQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQUxGOztBQVNFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QUFOSjtBQVFJO0VBQ0UsZ0JBQUE7QUFOTjtBQVNJO0VBQ0Usa0NBQUE7RUFDQSx3Q0FBQTtBQVBOO0FBVUk7RUFDRSxrQ0FBQTtFQUNBLHdDQUFBO0FBUk47QUFXSTtFQUNFLG1DQUFBO0VBQ0EseUNBQUE7QUFUTjtBQVlJO0VBQ0UsMEJBQUE7QUFWTjs7QUFlQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQVpGO0FBY0U7RUFDRSxrQ0FBQTtFQUNBLGNBQUE7QUFaSjtBQWVFO0VBQ0Usa0NBQUE7RUFDQSxjQUFBO0FBYko7QUFnQkU7RUFDRSxtQ0FBQTtFQUNBLGNBQUE7QUFkSjtBQWlCRTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQWZKOztBQW1CQTtFQUNFLE9BQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUFoQkY7QUFrQkU7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtBQWhCSjtBQW1CRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQWpCSjtBQW9CRTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FBbEJKOztBQXNCQSxrQkFBQTtBQUNBO0VBQ0UsbUJBQUE7QUFuQkY7O0FBc0JBO0VBQ0UsYUFBQTtFQUNBLDJEQUFBO0VBQ0EsU0FBQTtBQW5CRjs7QUFzQkE7RUFDRSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGlEQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLDBDQUFBO0FBbkJGO0FBcUJFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLCtFQUFBO0VBQ0EsVUFBQTtFQUNBLDZCQUFBO0FBbkJKO0FBc0JFO0VBQ0UsMkJBQUE7RUFDQSwyQ0FBQTtBQXBCSjtBQXNCSTtFQUNFLGFBQUE7QUFwQk47QUF1Qkk7RUFDRSwwQkFBQTtBQXJCTjtBQXlCRTtFQUNFLHlCQUFBO0VBQ0EsdUJBQUE7RUFDQSw4QkFBQTtBQXZCSjtBQTBCRTtFQUNFLHlCQUFBO0VBQ0EsdUJBQUE7RUFDQSw4QkFBQTtBQXhCSjtBQTJCRTtFQUNFLHlCQUFBO0VBQ0EsdUJBQUE7RUFDQSw4QkFBQTtBQXpCSjtBQTRCRTtFQUNFLHlCQUFBO0VBQ0EsdUJBQUE7RUFDQSw4QkFBQTtBQTFCSjtBQTZCRTtFQUNFLHlCQUFBO0VBQ0EsdUJBQUE7RUFDQSw4QkFBQTtBQTNCSjs7QUErQkE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7QUE1QkY7QUE4QkU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUE1Qko7QUE4Qkk7RUFDRSxrQ0FBQTtFQUNBLGNBQUE7QUE1Qk47QUErQkk7RUFDRSxrQ0FBQTtFQUNBLGNBQUE7QUE3Qk47QUFnQ0k7RUFDRSxrQ0FBQTtFQUNBLGNBQUE7QUE5Qk47QUFpQ0k7RUFDRSxrQ0FBQTtFQUNBLGNBQUE7QUEvQk47QUFrQ0k7RUFDRSxtQ0FBQTtFQUNBLGNBQUE7QUFoQ047QUFvQ0U7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFsQ0o7O0FBc0NBO0VBQ0UsT0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQW5DRjtBQXFDRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBbkNKO0FBc0NFO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxTQUFBO0FBcENKOztBQXdDQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLCtCQUFBO0VBQ0EsY0FBQTtBQXJDRjtBQXVDRTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQXJDSjs7QUF5Q0Esd0JBQUE7QUFDQTtFQUNFLG1CQUFBO0FBdENGOztBQXlDQTtFQUNFLGFBQUE7RUFDQSw0REFBQTtFQUNBLFNBQUE7QUF0Q0Y7O0FBeUNBO0VBRUUsYUFBQTtFQUNBLHlCQUFBO0FBdkNGO0FBeUNFO0VBQ0UsMkJBQUE7RUFDQSwrRUFDRTtBQXhDTjs7QUE2Q0E7RUFDRSxhQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0FBMUNGOztBQTZDQTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtBQTFDRjs7QUE2Q0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUExQ0Y7QUE0Q0U7RUFDRSxxSUFBQTtBQTFDSjtBQTZDRTtFQUNFLHFJQUFBO0FBM0NKO0FBOENFO0VBQ0Usa0lBQUE7QUE1Q0o7QUErQ0U7RUFDRSxxSUFBQTtBQTdDSjtBQWdERTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLG9GQUFBO0VBQ0EsbUJBQUE7QUE5Q0o7O0FBa0RBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLG1DQUFBO1VBQUEsMkJBQUE7QUEvQ0Y7QUFpREU7RUFDRSxrQ0FBQTtFQUNBLFlBQUE7QUEvQ0o7QUFrREU7RUFDRSxrQ0FBQTtFQUNBLFlBQUE7QUFoREo7QUFtREU7RUFDRSxvQ0FBQTtFQUNBLFlBQUE7QUFqREo7O0FBcURBO0VBQ0UsT0FBQTtBQWxERjs7QUFxREE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQWxERjs7QUFxREE7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBbERGOztBQXFEQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQWxERjtBQW9ERTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQWxESjs7QUFzREE7RUFDRSxtQkFBQTtBQW5ERjs7QUFzREE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtBQW5ERjs7QUFzREE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBbkRGOztBQXNEQTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtBQW5ERjs7QUFzREE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFuREY7O0FBc0RBO0VBQ0UsbUJBQUE7QUFuREY7O0FBc0RBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFuREY7QUFxREU7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0FBbkRKOztBQXVEQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0FBcERGO0FBc0RFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtFQUNBLGdCQUFBO0FBcERKOztBQXdEQSxzQkFBQTtBQUNBO0VBRUUsa0JBQUE7RUFDQSxrQkFBQTtBQXRERjtBQXlESTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EscURBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSw2Q0FBQTtBQXZETjtBQXlETTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUF2RFI7QUEyREk7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUF6RE47QUE0REk7RUFDRSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBMUROOztBQStEQTtFQUNFLGFBQUE7RUFDQSxTQUFBO0VBQ0EsdUJBQUE7QUE1REY7QUE4REU7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUE1REo7O0FBZ0VBLDRCQUFBO0FBQ0E7RUFDRSxtQkFBQTtBQTdERjs7QUFnRUE7RUFFRSxVQUFBO0FBOURGOztBQWlFQTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FBOURGOztBQWlFQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsNENBQUE7RUFDQSx5QkFBQTtBQTlERjtBQWdFRTtFQUNFLG1CQUFBO0FBOURKO0FBaUVFO0VBQ0UsK0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBL0RKOztBQW1FQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7QUFoRUY7QUFrRUU7RUFDRSxrQ0FBQTtBQWhFSjtBQWtFSTtFQUNFLGNBQUE7QUFoRU47QUFvRUU7RUFDRSxtQ0FBQTtBQWxFSjtBQW9FSTtFQUNFLGNBQUE7QUFsRU47QUFzRUU7RUFDRSxrQ0FBQTtBQXBFSjtBQXNFSTtFQUNFLGNBQUE7QUFwRU47QUF3RUU7RUFDRSxtQ0FBQTtBQXRFSjtBQXdFSTtFQUNFLGNBQUE7QUF0RU47QUEwRUU7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUF4RUo7O0FBNEVBO0VBQ0UsT0FBQTtBQXpFRjs7QUE0RUE7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUF6RUY7O0FBNEVBO0VBQ0UsYUFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQXpFRjs7QUE0RUE7RUFDRSxnQkFBQTtBQXpFRjs7QUE0RUE7RUFDRSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQXpFRjs7QUE0RUE7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0FBekVGO0FBNEVJO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FBMUVOO0FBNkVJO0VBQ0UsY0FBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0FBM0VOOztBQWdGQSw4RUFBQTtBQUNBO0VBQ0Usa0JBQUE7QUE3RUY7O0FBZ0ZBO0VBQ0UsaUNBQUE7RUFDQSxhQUFBO0FBN0VGOztBQWdGQTtFQUNFLDBCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0NBQUE7RUFDQSxnQkFBQTtBQTdFRjs7QUFnRkE7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtFQUNBLG9GQUFBO0VBQ0Esb0JBQUE7QUE3RUY7O0FBZ0ZBO0VBQ0Usa0JBQUE7QUE3RUY7O0FBZ0ZBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNkNBQUE7QUE3RUY7O0FBZ0ZBLHlDQUFBO0FBQ0E7RUFDRSxtQkFBQTtFQUNBLHlCQUFBO1VBQUEsaUJBQUE7RUFDQSxvQkFBQTtBQTdFRjs7QUFnRkE7RUFDRSxhQUFBO0FBN0VGOztBQWdGQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLFFBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUNBQUE7RUFDQSx5Q0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQTdFRjtBQStFRTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBN0VKOztBQWlGQTtFQUNFLG9CQUFBO0FBOUVGOztBQWlGQSxzQkFBQTtBQUNBO0VBQ0U7SUFDRSwwQkFBQTtFQTlFRjtFQWlGQTtJQUNFLHNCQUFBO0lBQ0Esa0JBQUE7RUEvRUY7QUFDRjtBQWtGQTtFQUNFO0lBQ0UsYUFBQTtFQWhGRjtFQW1GQTtJQUNFLGtCQUFBO0VBakZGO0VBb0ZBO0lBQ0Usc0JBQUE7SUFDQSxTQUFBO0VBbEZGO0VBcUZBO0lBQ0UsMEJBQUE7RUFuRkY7RUFzRkE7SUFDRSwwQkFBQTtFQXBGRjtFQXVGQTtJQUNFLHNCQUFBO0lBQ0EsdUJBQUE7SUFDQSxTQUFBO0VBckZGO0VBd0ZBO0lBQ0UsMEJBQUE7RUF0RkY7RUF5RkE7SUFDRSwwQkFBQTtFQXZGRjtFQTBGQTtJQUNFLHNCQUFBO0lBQ0Esa0JBQUE7RUF4RkY7RUEyRkE7SUFDRSxrQkFBQTtFQXpGRjtFQTRGQTtJQUNFLHNCQUFBO0lBQ0EsbUJBQUE7RUExRkY7QUFDRjtBQTZGQTtFQUNFO0lBQ0Usa0JBQUE7RUEzRkY7RUE4RkE7SUFDRSxlQUFBO0VBNUZGO0VBK0ZBO0lBQ0UsZUFBQTtFQTdGRjtFQWdHQTtJQUNFLGVBQUE7RUE5RkY7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5kYXNoYm9hcmQtY29udGFpbmVyIHtcclxuICBwYWRkaW5nOiAyNHB4O1xyXG4gIG1heC13aWR0aDogMTQwMHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNmOGZhZmMgMCUsICNmMWY1ZjkgNTAlLCAjZTJlOGYwIDEwMCUpO1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG59XHJcblxyXG4vKiBCZWF1dGlmdWwgSGVhZGVyIHdpdGggR2xhc3Ntb3JwaGlzbSAqL1xyXG4uZGFzaGJvYXJkLWhlYWRlciB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzJweDtcclxufVxyXG5cclxuLmRhc2hib2FyZC1oZXJvIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLFxyXG4gICAgcmdiYSg2LCAyOSwgNzQsIDAuOTcpIDAlLFxyXG4gICAgcmdiYSgxMywgNzEsIDE2MSwgMC45MykgNTAlLFxyXG4gICAgcmdiYSgyMSwgMTAxLCAxOTIsIDAuODgpIDEwMCUpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiA0OHB4IDQwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMjRweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBib3gtc2hhZG93OlxyXG4gICAgMCAyMHB4IDQwcHggcmdiYSgxMywgNzEsIDE2MSwgMC4zMCksXHJcbiAgICAwIDAgMCAxcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA4KTtcclxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMjBweCk7XHJcbn1cclxuXHJcbi5oZXJvLWJhY2tncm91bmQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICBib3R0b206IDA7XHJcbiAgb3BhY2l0eTogMC4xO1xyXG59XHJcblxyXG4uZmxvYXRpbmctc2hhcGVzIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuICAuc2hhcGUge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xyXG5cclxuICAgICYuc2hhcGUtMSB7XHJcbiAgICAgIHdpZHRoOiAxMjBweDtcclxuICAgICAgaGVpZ2h0OiAxMjBweDtcclxuICAgICAgdG9wOiAtMzBweDtcclxuICAgICAgcmlnaHQ6IDEwJTtcclxuICAgICAgYW5pbWF0aW9uOiBmbG9hdCA2cyBlYXNlLWluLW91dCBpbmZpbml0ZTtcclxuICAgIH1cclxuXHJcbiAgICAmLnNoYXBlLTIge1xyXG4gICAgICB3aWR0aDogODBweDtcclxuICAgICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgICBib3R0b206IDIwJTtcclxuICAgICAgbGVmdDogNSU7XHJcbiAgICAgIGFuaW1hdGlvbjogZmxvYXQgOHMgZWFzZS1pbi1vdXQgaW5maW5pdGUgcmV2ZXJzZTtcclxuICAgIH1cclxuXHJcbiAgICAmLnNoYXBlLTMge1xyXG4gICAgICB3aWR0aDogNjBweDtcclxuICAgICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgICB0b3A6IDQwJTtcclxuICAgICAgcmlnaHQ6IDIwJTtcclxuICAgICAgYW5pbWF0aW9uOiBmbG9hdCAxMHMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XHJcbiAgICB9XHJcblxyXG4gICAgJi5zaGFwZS00IHtcclxuICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgICBib3R0b206IC0yMHB4O1xyXG4gICAgICByaWdodDogMzAlO1xyXG4gICAgICBhbmltYXRpb246IGZsb2F0IDdzIGVhc2UtaW4tb3V0IGluZmluaXRlIHJldmVyc2U7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGZsb2F0IHtcclxuICAwJSwgMTAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpIHJvdGF0ZSgwZGVnKTsgfVxyXG4gIDUwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjBweCkgcm90YXRlKDE4MGRlZyk7IH1cclxufVxyXG5cclxuLmRhc2hib2FyZC1oZXJvLWNvbnRlbnQge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiAyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gIG1hcmdpbi1ib3R0b206IDQ4cHg7XHJcbn1cclxuXHJcbi5oZXJvLXRleHQge1xyXG4gIGZsZXg6IDE7XHJcblxyXG4gIC53ZWxjb21lLWJhZGdlIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcclxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcclxuICAgIHBhZGRpbmc6IDhweCAxNnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XHJcblxyXG4gICAgc3BhbiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5kYXNoYm9hcmQtdGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogNDJweDtcclxuICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZmZmIDAlLCAjZTBmMGZmIDEwMCUpO1xyXG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xyXG4gIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICB0ZXh0LXNoYWRvdzogbm9uZTtcclxufVxyXG5cclxuLmRhc2hib2FyZC1zdWJ0aXRsZSB7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIG9wYWNpdHk6IDAuOTtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIG1hcmdpbjogMCAwIDRweDtcclxuXHJcbiAgJi5zdWJ0aXRsZS1uZXcge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgb3BhY2l0eTogMC43NTtcclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICB9XHJcblxyXG4gICYuc3VidGl0bGUtYWN0aXZlIHtcclxuICAgIG9wYWNpdHk6IDAuOTU7XHJcbiAgfVxyXG59XHJcblxyXG4vLyDDosKUwoDDosKUwoAgSGVybyBDVEEgZm9yIG5ldyB1c2VycyDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcclxuLmhlcm8tY3RhLW5ldyB7XHJcbiAgZGlzcGxheTogZmxleDsgZ2FwOiAxMnB4OyBtYXJnaW4tdG9wOiAyMHB4OyBmbGV4LXdyYXA6IHdyYXA7XHJcbn1cclxuXHJcbi5oZXJvLWJ0bi1jcmVhdGUge1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDhweDtcclxuICBwYWRkaW5nOiAxMXB4IDIycHg7IGJvcmRlci1yYWRpdXM6IDEwcHg7IGJvcmRlcjogbm9uZTsgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNkOTc3MDYsICNmNTllMGIpO1xyXG4gIGNvbG9yOiAjZmZmOyBmb250LXNpemU6IDE0cHg7IGZvbnQtd2VpZ2h0OiA3MDA7IGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDE2cHggcmdiYSgyMTcsMTE5LDYsLjQpO1xyXG4gIHRyYW5zaXRpb246IGFsbCAuMnM7XHJcbiAgbWF0LWljb24geyBmb250LXNpemU6IDE4cHg7IHdpZHRoOiAxOHB4OyBoZWlnaHQ6IDE4cHg7IH1cclxuICAmOmhvdmVyIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpOyBib3gtc2hhZG93OiAwIDhweCAyNHB4IHJnYmEoMjE3LDExOSw2LC41KTsgfVxyXG59XHJcblxyXG4uaGVyby1idG4tYnJvd3NlIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZ2FwOiA4cHg7XHJcbiAgcGFkZGluZzogMTFweCAyMnB4OyBib3JkZXItcmFkaXVzOiAxMHB4OyBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwuMTUpOyBib3JkZXI6IDEuNXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsLjM1KTtcclxuICBjb2xvcjogI2ZmZjsgZm9udC1zaXplOiAxNHB4OyBmb250LXdlaWdodDogNjAwOyBmb250LWZhbWlseTogaW5oZXJpdDtcclxuICB0cmFuc2l0aW9uOiBhbGwgLjJzO1xyXG4gIG1hdC1pY29uIHsgZm9udC1zaXplOiAxOHB4OyB3aWR0aDogMThweDsgaGVpZ2h0OiAxOHB4OyB9XHJcbiAgJjpob3ZlciB7IGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsLjI1KTsgfVxyXG59XHJcblxyXG4vLyDDosKUwoDDosKUwoAgUG9ydGZvbGlvIGVtcHR5IHBsYWNlaG9sZGVyIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxyXG4ucG9ydGZvbGlvLWVtcHR5LWNhcmQge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsLjEyKTtcclxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTZweCk7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBib3JkZXI6IDEuNXB4IGRhc2hlZCByZ2JhKDI1NSwyNTUsMjU1LC4zKTtcclxuICBwYWRkaW5nOiAyOHB4IDMycHg7XHJcbiAgZGlzcGxheTogZmxleDsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDhweDsgbWluLXdpZHRoOiAyODBweDsgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uZW1wdHktcG9ydGZvbGlvLWljb24ge1xyXG4gIHdpZHRoOiA1MnB4OyBoZWlnaHQ6IDUycHg7IGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwuMTUpO1xyXG4gIGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIG1hcmdpbi1ib3R0b206IDRweDtcclxuICBtYXQtaWNvbiB7IGZvbnQtc2l6ZTogMjZweDsgd2lkdGg6IDI2cHg7IGhlaWdodDogMjZweDsgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsLjcpOyB9XHJcbn1cclxuXHJcbi5lbXB0eS1wb3J0Zm9saW8tbGFiZWwge1xyXG4gIGZvbnQtc2l6ZTogMTVweDsgZm9udC13ZWlnaHQ6IDcwMDsgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsLjkpOyBtYXJnaW46IDA7XHJcbn1cclxuLmVtcHR5LXBvcnRmb2xpby1zdWIge1xyXG4gIGZvbnQtc2l6ZTogMTJweDsgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsLjU1KTsgbWFyZ2luOiAwOyBsaW5lLWhlaWdodDogMS41O1xyXG59XHJcblxyXG4vLyDDosKUwoDDosKUwoAgU3RhdCBjYXJkIHplcm8gLyBoaW50IHN0YXRlcyDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcclxuLnN0YXQtemVybyB7XHJcbiAgb3BhY2l0eTogMC40NTtcclxuICBmb250LXNpemU6IDI4cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLnN0YXQtaGludCB7XHJcbiAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gIG9wYWNpdHk6IDAuNTU7XHJcbiAgZm9udC1zaXplOiAxMXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8vIMOiwpTCgMOiwpTCgCBQZXJmb3JtYW5jZSBoaWdobGlnaHRzIGVtcHR5IHN0YXRlIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxyXG4uaGlnaGxpZ2h0cy1lbXB0eSB7XHJcbiAgZGlzcGxheTogZmxleDsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDEwcHg7IHBhZGRpbmc6IDMycHggMTZweDsgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hdC1pY29uIHsgZm9udC1zaXplOiAzNnB4OyB3aWR0aDogMzZweDsgaGVpZ2h0OiAzNnB4OyBjb2xvcjogI2NiZDVlMTsgfVxyXG4gIHAgeyBmb250LXNpemU6IDEzcHg7IGNvbG9yOiAjOTRhM2I4OyBtYXJnaW46IDA7IGxpbmUtaGVpZ2h0OiAxLjU7IH1cclxufVxyXG5cclxuLnBvcnRmb2xpby1zdW1tYXJ5IHtcclxuICAucG9ydGZvbGlvLXZhbHVlLWNhcmQge1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KTtcclxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigyMHB4KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBwYWRkaW5nOiAyNHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6IDI0cHg7XHJcbiAgICBtaW4td2lkdGg6IDMyMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMCA4cHggMzJweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcblxyXG4gICAgLnZhbHVlLWNvbnRlbnQge1xyXG4gICAgICBmbGV4OiAxO1xyXG5cclxuICAgICAgLnZhbHVlLWxhYmVsIHtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgb3BhY2l0eTogMC44O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAudmFsdWUtYW1vdW50IHtcclxuICAgICAgICBmb250LXNpemU6IDMycHg7XHJcbiAgICAgICAgbWFyZ2luOiAwIDAgMTJweDtcclxuICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNmZmYgMCUsICNkYmVhZmUgMTAwJSk7XHJcbiAgICAgICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XHJcbiAgICAgICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAudmFsdWUtY2hhbmdlIHtcclxuICAgICAgICAuY2hhbmdlLWluZGljYXRvciB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIGdhcDogOHB4O1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgIHBhZGRpbmc6IDZweCAxMnB4O1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiYSg3NiwgMTc1LCA4MCwgMC4yKTtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDc2LCAxNzUsIDgwLCAwLjMpO1xyXG5cclxuICAgICAgICAgICYucG9zaXRpdmUge1xyXG4gICAgICAgICAgICBjb2xvcjogI2E1ZDZhNztcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBtYXQtaWNvbiB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxNnB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMTZweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAudmFsdWUtc3BhcmtsaW5lIHtcclxuICAgICAgLnNwYXJrbGluZS1jaGFydCB7XHJcbiAgICAgICAgd2lkdGg6IDgwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XHJcblxyXG4gICAgICAgIC5jaGFydC1saW5lIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLyogRW5oYW5jZWQgU3RhdHMgQ2FyZHMgKi9cclxuLmRhc2hib2FyZC1zdGF0cyB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDI4MHB4LCAxZnIpKTtcclxuICBnYXA6IDI0cHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHotaW5kZXg6IDI7XHJcbn1cclxuXHJcbi5zdGF0LWNhcmQge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSk7XHJcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDIwcHgpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgcGFkZGluZzogMjhweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHMgY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpO1xyXG4gIGJveC1zaGFkb3c6IDAgOHB4IDMycHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtOHB4KSBzY2FsZSgxLjAyKTtcclxuICAgIGJveC1zaGFkb3c6XHJcbiAgICAgIDAgMjBweCA0MHB4IHJnYmEoMCwgMCwgMCwgMC4xNSksXHJcbiAgICAgIDAgMCAwIDFweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XHJcblxyXG4gICAgLmNhcmQtZ2xvdyB7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5jYXJkLWdsb3cge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZyxcclxuICAgICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpIDAlLFxyXG4gICAgICB0cmFuc3BhcmVudCA1MCUpO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcbi5zdGF0LWhlYWRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcclxufVxyXG5cclxuLnN0YXQtaWNvbiB7XHJcbiAgLmljb24td3JhcHBlciB7XHJcbiAgICB3aWR0aDogNTZweDtcclxuICAgIGhlaWdodDogNTZweDtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xyXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xyXG5cclxuICAgIG1hdC1pY29uIHtcclxuICAgICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgICBoZWlnaHQ6IDI4cHg7XHJcbiAgICAgIHdpZHRoOiAyOHB4O1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uc3RhdC10cmVuZCwgLnN0YXQtaW5kaWNhdG9yIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiA2cHg7XHJcbiAgcGFkZGluZzogOHB4IDEycHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XHJcblxyXG4gICYucG9zaXRpdmUge1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSg3NiwgMTc1LCA4MCwgMC4zKTtcclxuICAgIGNvbG9yOiAjYzhlNmM5O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSg3NiwgMTc1LCA4MCwgMC40KTtcclxuICB9XHJcblxyXG4gICYudXBjb21pbmcge1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDE1MiwgMCwgMC4zKTtcclxuICAgIGNvbG9yOiAjZmZlMGIyO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDE1MiwgMCwgMC40KTtcclxuICB9XHJcblxyXG4gIG1hdC1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGhlaWdodDogMTRweDtcclxuICAgIHdpZHRoOiAxNHB4O1xyXG4gIH1cclxufVxyXG5cclxuLnN0YXQtY29udGVudCB7XHJcbiAgaDMuc3RhdC12YWx1ZSB7XHJcbiAgICBmb250LXNpemU6IDMycHg7XHJcbiAgICBtYXJnaW46IDAgMCA4cHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2ZmZiAwJSwgI2ZmZWJmMyAxMDAlKTtcclxuICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xyXG4gICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIH1cclxuXHJcbiAgLnN0YXQtbGFiZWwge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgb3BhY2l0eTogMC45O1xyXG4gICAgbWFyZ2luOiAwIDAgOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICB9XHJcblxyXG4gIC5zdGF0LWNvbXBhcmlzb24ge1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgb3BhY2l0eTogMC44O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICB9XHJcbn1cclxuXHJcbi5zdGF0LWRlY29yYXRpb24ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgb3BhY2l0eTogMC4xO1xyXG5cclxuICAuZGVjb3JhdGlvbi1kb3RzLCAuZGVjb3JhdGlvbi13YXZlLCAuZGVjb3JhdGlvbi1jb25mZXR0aSwgLmRlY29yYXRpb24tbGluZSB7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICB9XHJcbn1cclxuXHJcbi8qIEdsYXNzIENhcmQgU3R5bGUgKi9cclxuLmdsYXNzLWNhcmQge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcclxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMjBweCk7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XHJcbiAgYm94LXNoYWRvdzpcclxuICAgIDAgOHB4IDMycHggcmdiYSgwLCAwLCAwLCAwLjEpLFxyXG4gICAgMCAycHggOHB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG4gIC5jYXJkLXBhdHRlcm4ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgYmFja2dyb3VuZDpcclxuICAgICAgcmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCAyMCUgODAlLCByZ2JhKDEzLCA3MSwgMTYxLCAwLjA1KSAwJSwgdHJhbnNwYXJlbnQgNTAlKSxcclxuICAgICAgcmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCA4MCUgMjAlLCByZ2JhKDIxLCAxMDEsIDE5MiwgMC4wNSkgMCUsIHRyYW5zcGFyZW50IDUwJSk7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcbi8qIFNlY3Rpb24gU3R5bGVzICovXHJcbi5zZWN0aW9uLWhlYWRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gIG1hcmdpbi1ib3R0b206IDMycHg7XHJcblxyXG4gIC5zZWN0aW9uLXRpdGxlIHtcclxuICAgIGgyIHtcclxuICAgICAgZm9udC1zaXplOiAzMnB4O1xyXG4gICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMWEyMDJjIDAlLCAjNGE1NTY4IDEwMCUpO1xyXG4gICAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcclxuICAgICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICBtYXJnaW46IDAgMCA4cHg7XHJcbiAgICB9XHJcblxyXG4gICAgcCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgY29sb3I6ICM3MTgwOTY7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5ncmFkaWVudC1idG4sIC52aWV3LWFsbC1idG4ge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMwZDQ3YTEgMCUsICMxNTY1YzAgMTAwJSk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIHBhZGRpbmc6IDEycHggMjRweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDhweDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDE1cHggcmdiYSgxMywgNzEsIDE2MSwgMC4yOCk7XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xyXG4gICAgYm94LXNoYWRvdzogMCA4cHggMjVweCByZ2JhKDEzLCA3MSwgMTYxLCAwLjQwKTtcclxuICB9XHJcblxyXG4gIG1hdC1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGhlaWdodDogMThweDtcclxuICAgIHdpZHRoOiAxOHB4O1xyXG4gIH1cclxufVxyXG5cclxuLyogUG9ydGZvbGlvIERpc3RyaWJ1dGlvbiAqL1xyXG4ucG9ydGZvbGlvLWRpc3RyaWJ1dGlvbi1zZWN0aW9uIHtcclxuICBtYXJnaW4tYm90dG9tOiA0OHB4O1xyXG59XHJcblxyXG4uZGlzdHJpYnV0aW9uLWdyaWQge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgMWZyO1xyXG4gIGdhcDogMjRweDtcclxufVxyXG5cclxuLmRpc3RyaWJ1dGlvbi1jaGFydC1jYXJkLCAucGVyZm9ybWFuY2UtaGlnaGxpZ2h0cy1jYXJkIHtcclxuICBAZXh0ZW5kIC5nbGFzcy1jYXJkO1xyXG4gIHBhZGRpbmc6IDMycHg7XHJcbn1cclxuXHJcbi5waWUtY2hhcnQtdmlzdWFsIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGdhcDogNDBweDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uY2hhcnQtd3JhcHBlciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICBoZWlnaHQ6IDIwMHB4O1xyXG5cclxuICAucGllLWNoYXJ0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGJveC1zaGFkb3c6IDAgOHB4IDMycHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gIH1cclxuXHJcbiAgLmNoYXJ0LXNlZ21lbnQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oNTAlIDUwJSwgNTAlIDAlLCAxMDAlIDAlLCAxMDAlIDEwMCUsIDUwJSAxMDAlKTtcclxuICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIG9wYWNpdHk6IDAuOSAhaW1wb3J0YW50O1xyXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpIHJvdGF0ZSh2YXIoLS1yb3RhdGlvbiwgMGRlZykpICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuY2hhcnQtY2VudGVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG5cclxuICAgIC5jZW50ZXItY29udGVudCB7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICAgIC5jaGFydC10b3RhbCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIGNvbG9yOiAjNzE4MDk2O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgfVxyXG5cclxuICAgICAgLmNoYXJ0LWFtb3VudCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgY29sb3I6ICMxYTIwMmM7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5jaGFydC1sZWdlbmRzIHtcclxuICBmbGV4OiAxO1xyXG5cclxuICAubGVnZW5kLWl0ZW0ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6IDE2cHg7XHJcbiAgICBwYWRkaW5nOiAxNnB4IDA7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjA2KTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcblxyXG4gICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjAyKTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgICAgcGFkZGluZy1sZWZ0OiAxMnB4O1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OiAxMnB4O1xyXG4gICAgICBtYXJnaW46IDAgLTEycHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4ubGVnZW5kLW1hcmtlciB7XHJcbiAgLmxlZ2VuZC1jb2xvciB7XHJcbiAgICB3aWR0aDogMTZweDtcclxuICAgIGhlaWdodDogMTZweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICB9XHJcbn1cclxuXHJcbi5sZWdlbmQtaW5mbyB7XHJcbiAgZmxleDogMTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG4gIC5sZWdlbmQtbGFiZWwge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGNvbG9yOiAjMWEyMDJjO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMnB4O1xyXG4gIH1cclxuXHJcbiAgLmxlZ2VuZC1wZXJjZW50YWdlIHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGNvbG9yOiAjNzE4MDk2O1xyXG4gIH1cclxufVxyXG5cclxuLmxlZ2VuZC1hbW91bnQge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGNvbG9yOiAjMGQ0N2ExO1xyXG59XHJcblxyXG4vKiBQZXJmb3JtYW5jZSBIaWdobGlnaHRzICovXHJcbi5oaWdobGlnaHRzLXRpdGxlIHtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xyXG4gIGNvbG9yOiAjMWEyMDJjO1xyXG59XHJcblxyXG4uaGlnaGxpZ2h0cy1saXN0IHtcclxuICAuaGlnaGxpZ2h0LWl0ZW0ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6IDE2cHg7XHJcbiAgICBwYWRkaW5nOiAxNnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEycHg7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG5cclxuICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICB9XHJcblxyXG4gICAgJi5wb3NpdGl2ZSB7XHJcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoNzYsIDE3NSwgODAsIDAuMSk7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoNzYsIDE3NSwgODAsIDAuMik7XHJcbiAgICB9XHJcblxyXG4gICAgJi51cGNvbWluZyB7XHJcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAxNTIsIDAsIDAuMSk7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAxNTIsIDAsIDAuMik7XHJcbiAgICB9XHJcblxyXG4gICAgJi5taWxlc3RvbmUge1xyXG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDE1NiwgMzksIDE3NiwgMC4xKTtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxNTYsIDM5LCAxNzYsIDAuMik7XHJcbiAgICB9XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg4cHgpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmhpZ2hsaWdodC1pY29uIHtcclxuICB3aWR0aDogNDBweDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gIC5oaWdobGlnaHQtaXRlbS5wb3NpdGl2ZSAmIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoNzYsIDE3NSwgODAsIDAuMik7XHJcbiAgICBjb2xvcjogIzRjYWY1MDtcclxuICB9XHJcblxyXG4gIC5oaWdobGlnaHQtaXRlbS51cGNvbWluZyAmIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAxNTIsIDAsIDAuMik7XHJcbiAgICBjb2xvcjogI2ZmOTgwMDtcclxuICB9XHJcblxyXG4gIC5oaWdobGlnaHQtaXRlbS5taWxlc3RvbmUgJiB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDE1NiwgMzksIDE3NiwgMC4yKTtcclxuICAgIGNvbG9yOiAjMTU2NWMwO1xyXG4gIH1cclxuXHJcbiAgbWF0LWljb24ge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4uaGlnaGxpZ2h0LWNvbnRlbnQge1xyXG4gIGZsZXg6IDE7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICAuaGlnaGxpZ2h0LXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGNvbG9yOiAjNzE4MDk2O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMnB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgfVxyXG5cclxuICAuaGlnaGxpZ2h0LXZhbHVlIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBjb2xvcjogIzFhMjAyYztcclxuICAgIG1hcmdpbi1ib3R0b206IDJweDtcclxuICB9XHJcblxyXG4gIC5oaWdobGlnaHQtY2hhbmdlIHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGNvbG9yOiAjNzE4MDk2O1xyXG4gIH1cclxufVxyXG5cclxuLyogUXVpY2sgQWN0aW9ucyAqL1xyXG4ucXVpY2stYWN0aW9ucy1zZWN0aW9uIHtcclxuICBtYXJnaW4tYm90dG9tOiA0OHB4O1xyXG59XHJcblxyXG4ucXVpY2stYWN0aW9ucy1ncmlkIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjgwcHgsIDFmcikpO1xyXG4gIGdhcDogMjBweDtcclxufVxyXG5cclxuLmFjdGlvbi1jYXJkIHtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcclxuICBwYWRkaW5nOiAyNHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDE2cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgYm94LXNoYWRvdzogMCA0cHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xyXG5cclxuICAmOjpiZWZvcmUge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCB2YXIoLS1ncmFkaWVudC1zdGFydCksIHZhcigtLWdyYWRpZW50LWVuZCkpO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBlYXNlO1xyXG4gIH1cclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTRweCk7XHJcbiAgICBib3gtc2hhZG93OiAwIDEycHggNDBweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xyXG5cclxuICAgICY6OmJlZm9yZSB7XHJcbiAgICAgIG9wYWNpdHk6IDAuMDU7XHJcbiAgICB9XHJcblxyXG4gICAgLmFjdGlvbi1hcnJvdyB7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg0cHgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJi5wcmltYXJ5LWFjdGlvbiB7XHJcbiAgICAtLWdyYWRpZW50LXN0YXJ0OiAjMGQ0N2ExO1xyXG4gICAgLS1ncmFkaWVudC1lbmQ6ICMxNTY1YzA7XHJcbiAgICBib3JkZXItbGVmdDogNHB4IHNvbGlkICMwZDQ3YTE7XHJcbiAgfVxyXG5cclxuICAmLmFjY2VudC1hY3Rpb24ge1xyXG4gICAgLS1ncmFkaWVudC1zdGFydDogI2Q5NzcwNjtcclxuICAgIC0tZ3JhZGllbnQtZW5kOiAjZjU5ZTBiO1xyXG4gICAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCAjZDk3NzA2O1xyXG4gIH1cclxuXHJcbiAgJi5zZWNvbmRhcnktYWN0aW9uIHtcclxuICAgIC0tZ3JhZGllbnQtc3RhcnQ6ICMwNTk2Njk7XHJcbiAgICAtLWdyYWRpZW50LWVuZDogIzEwYjk4MTtcclxuICAgIGJvcmRlci1sZWZ0OiA0cHggc29saWQgIzA1OTY2OTtcclxuICB9XHJcblxyXG4gICYuc3VjY2Vzcy1hY3Rpb24ge1xyXG4gICAgLS1ncmFkaWVudC1zdGFydDogIzM4OGUzYztcclxuICAgIC0tZ3JhZGllbnQtZW5kOiAjMmU3ZDMyO1xyXG4gICAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCAjMzg4ZTNjO1xyXG4gIH1cclxuXHJcbiAgJi53YWxsZXQtYWN0aW9uIHtcclxuICAgIC0tZ3JhZGllbnQtc3RhcnQ6ICM2MzY2ZjE7XHJcbiAgICAtLWdyYWRpZW50LWVuZDogIzhiNWNmNjtcclxuICAgIGJvcmRlci1sZWZ0OiA0cHggc29saWQgIzYzNjZmMTtcclxuICB9XHJcbn1cclxuXHJcbi5hY3Rpb24taWNvbiB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHotaW5kZXg6IDI7XHJcblxyXG4gIC5pY29uLWJhY2tncm91bmQge1xyXG4gICAgd2lkdGg6IDQ4cHg7XHJcbiAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgICAucHJpbWFyeS1hY3Rpb24gJiB7XHJcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMTMsIDcxLCAxNjEsIDAuMTApO1xyXG4gICAgICBjb2xvcjogIzBkNDdhMTtcclxuICAgIH1cclxuXHJcbiAgICAuYWNjZW50LWFjdGlvbiAmIHtcclxuICAgICAgYmFja2dyb3VuZDogcmdiYSgyMTcsIDExOSwgNiwgMC4xMCk7XHJcbiAgICAgIGNvbG9yOiAjZDk3NzA2O1xyXG4gICAgfVxyXG5cclxuICAgIC5zZWNvbmRhcnktYWN0aW9uICYge1xyXG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDUsIDE1MCwgMTA1LCAwLjEwKTtcclxuICAgICAgY29sb3I6ICMwNTk2Njk7XHJcbiAgICB9XHJcblxyXG4gICAgLnN1Y2Nlc3MtYWN0aW9uICYge1xyXG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDU2LCAxNDIsIDYwLCAwLjEpO1xyXG4gICAgICBjb2xvcjogIzM4OGUzYztcclxuICAgIH1cclxuXHJcbiAgICAud2FsbGV0LWFjdGlvbiAmIHtcclxuICAgICAgYmFja2dyb3VuZDogcmdiYSg5OSwgMTAyLCAyNDEsIDAuMSk7XHJcbiAgICAgIGNvbG9yOiAjNjM2NmYxO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbWF0LWljb24ge1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgd2lkdGg6IDI0cHg7XHJcbiAgfVxyXG59XHJcblxyXG4uYWN0aW9uLWNvbnRlbnQge1xyXG4gIGZsZXg6IDE7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHotaW5kZXg6IDI7XHJcblxyXG4gIGgzIHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBtYXJnaW46IDAgMCA0cHg7XHJcbiAgICBjb2xvcjogIzFhMjAyYztcclxuICB9XHJcblxyXG4gIHAge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6ICM3MTgwOTY7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG59XHJcblxyXG4uYWN0aW9uLWFycm93IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgei1pbmRleDogMjtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlO1xyXG4gIGNvbG9yOiAjNzE4MDk2O1xyXG5cclxuICBtYXQtaWNvbiB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICB9XHJcbn1cclxuXHJcbi8qIE15IFN0b2t2ZWxzIFNlY3Rpb24gKi9cclxuLm15LXN0b2t2ZWxzLXNlY3Rpb24ge1xyXG4gIG1hcmdpbi1ib3R0b206IDQ4cHg7XHJcbn1cclxuXHJcbi5zdG9rdmVscy1ncmlkIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDM4MHB4LCAxZnIpKTtcclxuICBnYXA6IDI0cHg7XHJcbn1cclxuXHJcbi5zdG9rdmVsLWNhcmQge1xyXG4gIEBleHRlbmQgLmdsYXNzLWNhcmQ7XHJcbiAgcGFkZGluZzogMjRweDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNHB4KTtcclxuICAgIGJveC1zaGFkb3c6XHJcbiAgICAgIDAgMTJweCA0MHB4IHJnYmEoMCwgMCwgMCwgMC4xNSksXHJcbiAgICAgIDAgMCAwIDFweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XHJcbiAgfVxyXG59XHJcblxyXG4uc3Rva3ZlbC1oZWFkZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZ2FwOiAxNnB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi5zdG9rdmVsLWltYWdlLWNvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGZsZXg6IDAgMCA4MHB4O1xyXG59XHJcblxyXG4uc3Rva3ZlbC1pbWFnZSB7XHJcbiAgd2lkdGg6IDgwcHg7XHJcbiAgaGVpZ2h0OiA4MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG4gICYubW9udGhseSB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTc5NjIxOTcwNTYzLWViZWM3NTYwZmYzZT9peGxpYj1yYi00LjAuMyZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTIwNzAmcT04MCcpO1xyXG4gIH1cclxuXHJcbiAgJi5pbnZlc3RtZW50IHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE2MTE5NzQ3ODk4NTUtOWMyYTBhNzIzNmEzP2l4bGliPXJiLTQuMC4zJmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9MjA3MCZxPTgwJyk7XHJcbiAgfVxyXG5cclxuICAmLnByb3BlcnR5IHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1NjA1MTg4ODMtY2UwOTA1OWVlZmZhP2l4bGliPXJiLTQuMC4zJmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9MjA3MyZxPTgwJyk7XHJcbiAgfVxyXG5cclxuICAmLmZhbWlseSB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTE1Mzc3OTA1NzAzLWM0Nzg4ZTUxYWYxNT9peGxpYj1yYi00LjAuMyZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTIwNzAmcT04MCcpO1xyXG4gIH1cclxuXHJcbiAgLmltYWdlLW92ZXJsYXkge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiYSgxMywgNzEsIDE2MSwgMC4yKSwgcmdiYSgyMSwgMTAxLCAxOTIsIDAuMikpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICB9XHJcbn1cclxuXHJcbi5zdG9rdmVsLXN0YXR1cyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogOHB4O1xyXG4gIHJpZ2h0OiA4cHg7XHJcbiAgcGFkZGluZzogNHB4IDhweDtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XHJcblxyXG4gICYuYWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoNzYsIDE3NSwgODAsIDAuOSk7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG5cclxuICAmLnBlbmRpbmcge1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDE1MiwgMCwgMC45KTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcblxyXG4gICYuY29tcGxldGVkIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMTU4LCAxNTgsIDE1OCwgMC45KTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbn1cclxuXHJcbi5zdG9rdmVsLWluZm8ge1xyXG4gIGZsZXg6IDE7XHJcbn1cclxuXHJcbi5zdG9rdmVsLW5hbWUge1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIG1hcmdpbjogMCAwIDRweDtcclxuICBjb2xvcjogIzFhMjAyYztcclxufVxyXG5cclxuLnN0b2t2ZWwtdHlwZSB7XHJcbiAgY29sb3I6ICM3MTgwOTY7XHJcbiAgbWFyZ2luOiAwIDAgMTJweDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbi5zdG9rdmVsLW1lbWJlcnMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDZweDtcclxuICBjb2xvcjogIzcxODA5NjtcclxuICBmb250LXNpemU6IDE0cHg7XHJcblxyXG4gIG1hdC1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGhlaWdodDogMTZweDtcclxuICAgIHdpZHRoOiAxNnB4O1xyXG4gIH1cclxufVxyXG5cclxuLnN0b2t2ZWwtcHJvZ3Jlc3Mge1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi5wcm9ncmVzcy1oZWFkZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIG1hcmdpbi1ib3R0b206IDhweDtcclxufVxyXG5cclxuLnByb2dyZXNzLWxhYmVsIHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgY29sb3I6ICM3MTgwOTY7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuLnByb2dyZXNzLXBlcmNlbnRhZ2Uge1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgY29sb3I6ICMwZDQ3YTE7XHJcbn1cclxuXHJcbi5wcm9ncmVzcy1kZXRhaWxzIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgY29sb3I6ICM3MTgwOTY7XHJcbiAgbWFyZ2luLXRvcDogNnB4O1xyXG59XHJcblxyXG4uc3Rva3ZlbC1kZXRhaWxzIHtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4uZGV0YWlsLWl0ZW0ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDhweDtcclxuICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGNvbG9yOiAjNGE1NTY4O1xyXG5cclxuICBtYXQtaWNvbiB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBoZWlnaHQ6IDE2cHg7XHJcbiAgICB3aWR0aDogMTZweDtcclxuICAgIGNvbG9yOiAjMTU2NWMwO1xyXG4gIH1cclxufVxyXG5cclxuLnN0b2t2ZWwtY2FyZCBtYXQtY2FyZC1hY3Rpb25zIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBwYWRkaW5nOiA4cHggMCAwO1xyXG5cclxuICBidXR0b24ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6IDZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgfVxyXG59XHJcblxyXG4vKiBObyBTdG9rdmVscyBTdGF0ZSAqL1xyXG4ubm8tc3Rva3ZlbHMtY29udGFpbmVyIHtcclxuICBAZXh0ZW5kIC5nbGFzcy1jYXJkO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiA2MHB4IDQwcHg7XHJcblxyXG4gIC5uby1zdG9rdmVscy1jb250ZW50IHtcclxuICAgIC5uby1zdG9rdmVscy1pY29uIHtcclxuICAgICAgd2lkdGg6IDgwcHg7XHJcbiAgICAgIGhlaWdodDogODBweDtcclxuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzBkNDdhMSwgIzE1NjVjMCk7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIG1hcmdpbjogMCBhdXRvIDI0cHg7XHJcbiAgICAgIGJveC1zaGFkb3c6IDAgOHB4IDI0cHggcmdiYSgxMyw3MSwxNjEsLjMpO1xyXG5cclxuICAgICAgbWF0LWljb24ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaDMge1xyXG4gICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDEycHg7XHJcbiAgICAgIGNvbG9yOiAjMWEyMDJjO1xyXG4gICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgfVxyXG5cclxuICAgIHAge1xyXG4gICAgICBjb2xvcjogIzcxODA5NjtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMzJweDtcclxuICAgICAgbWF4LXdpZHRoOiA0MDBweDtcclxuICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLm5vLXN0b2t2ZWxzLWFjdGlvbnMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZ2FwOiAxNnB4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICBidXR0b24ge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgIHBhZGRpbmc6IDEycHggMjRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgfVxyXG59XHJcblxyXG4vKiBSZWNlbnQgQWN0aXZpdHkgU2VjdGlvbiAqL1xyXG4ucmVjZW50LWFjdGl2aXR5LXNlY3Rpb24ge1xyXG4gIG1hcmdpbi1ib3R0b206IDQ4cHg7XHJcbn1cclxuXHJcbi5hY3Rpdml0eS1jYXJkIHtcclxuICBAZXh0ZW5kIC5nbGFzcy1jYXJkO1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbi5hY3Rpdml0eS1saXN0IHtcclxuICBtYXgtaGVpZ2h0OiA0MDBweDtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gIHBhZGRpbmc6IDI0cHg7XHJcbn1cclxuXHJcbi5hY3Rpdml0eS1pdGVtIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAxNnB4O1xyXG4gIHBhZGRpbmc6IDE2cHggMDtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjA2KTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG5cclxuICAmOmxhc3QtY2hpbGQge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxuICB9XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjAyKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xyXG4gICAgbWFyZ2luOiAwIC0xNnB4O1xyXG4gIH1cclxufVxyXG5cclxuLmFjdGl2aXR5LWljb24ge1xyXG4gIHdpZHRoOiA0MHB4O1xyXG4gIGhlaWdodDogNDBweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBmbGV4LXNocmluazogMDtcclxuXHJcbiAgJi5jb250cmlidXRpb24ge1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSg3NiwgMTc1LCA4MCwgMC4xKTtcclxuXHJcbiAgICBtYXQtaWNvbiB7XHJcbiAgICAgIGNvbG9yOiAjNGNhZjUwO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJi5wYXlvdXQge1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgzMywgMTUwLCAyNDMsIDAuMSk7XHJcblxyXG4gICAgbWF0LWljb24ge1xyXG4gICAgICBjb2xvcjogIzIxOTZmMztcclxuICAgIH1cclxuICB9XHJcblxyXG4gICYuaW52aXRhdGlvbiB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMTUyLCAwLCAwLjEpO1xyXG5cclxuICAgIG1hdC1pY29uIHtcclxuICAgICAgY29sb3I6ICNmZjk4MDA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmLnVwZGF0ZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDE1NiwgMzksIDE3NiwgMC4xKTtcclxuXHJcbiAgICBtYXQtaWNvbiB7XHJcbiAgICAgIGNvbG9yOiAjMTU2NWMwO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbWF0LWljb24ge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4uYWN0aXZpdHktZGV0YWlscyB7XHJcbiAgZmxleDogMTtcclxufVxyXG5cclxuLmFjdGl2aXR5LWRlc2NyaXB0aW9uIHtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIG1hcmdpbi1ib3R0b206IDRweDtcclxuICBjb2xvcjogIzFhMjAyYztcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbi5hY3Rpdml0eS1tZXRhIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGdhcDogMTZweDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgY29sb3I6ICM3MTgwOTY7XHJcbn1cclxuXHJcbi5hY3Rpdml0eS1zdG9rdmVsIHtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG4uYWN0aXZpdHktYW1vdW50IHtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGNvbG9yOiAjNGNhZjUwO1xyXG4gIGZsZXgtc2hyaW5rOiAwO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuLm5vLWFjdGl2aXR5IHtcclxuICBwYWRkaW5nOiA2MHB4IDQwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAubm8tYWN0aXZpdHktY29udGVudCB7XHJcbiAgICBtYXQtaWNvbiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogNDhweDtcclxuICAgICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgICB3aWR0aDogNDhweDtcclxuICAgICAgY29sb3I6ICNjYmQ1ZTA7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbiAgICB9XHJcblxyXG4gICAgcCB7XHJcbiAgICAgIGNvbG9yOiAjNzE4MDk2O1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8qIMOiwpTCgMOiwpTCgCBQb3J0Zm9saW8gRGlzdHJpYnV0aW9uIHByZXZpZXcgKG5vLWRhdGEgc3RhdGUpIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgCAqL1xyXG4ucHJldmlldy1tb2RlIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5wcmV2aWV3LWNoYXJ0IHtcclxuICBmaWx0ZXI6IGJsdXIoMS41cHgpIHNhdHVyYXRlKDAuNik7XHJcbiAgb3BhY2l0eTogMC41NTtcclxufVxyXG5cclxuLnByZXZpZXctY2VudGVyIC5jaGFydC1hbW91bnQucHJldmlldy1hbW91bnQge1xyXG4gIGZvbnQtc2l6ZTogMTFweCAhaW1wb3J0YW50O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgY29sb3I6ICM5NGEzYjg7XHJcbiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6ICM5NGEzYjg7XHJcbiAgYmFja2dyb3VuZDogbm9uZTtcclxufVxyXG5cclxuLnByZXZpZXctYmx1ci1vdmVybGF5IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgaW5zZXQ6IDA7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUsIHRyYW5zcGFyZW50IDM1JSwgcmdiYSgyNTUsMjU1LDI1NSwwLjI1KSAxMDAlKTtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxufVxyXG5cclxuLnByZXZpZXctbGVnZW5kcyB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4ucHJldmlldy1sZWdlbmQtbGFiZWwge1xyXG4gIGZvbnQtc2l6ZTogMTFweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDZlbTtcclxuICBjb2xvcjogIzk0YTNiODtcclxuICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDhweDtcclxuICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkIHJnYmEoMCwwLDAsLjA4KTtcclxufVxyXG5cclxuLyogQmx1cnJlZC9tdXRlZCB0ZXh0IGZvciBwcmV2aWV3IGl0ZW1zICovXHJcbi5wcmV2aWV3LXRleHQge1xyXG4gIGZpbHRlcjogYmx1cigzLjVweCk7XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbn1cclxuXHJcbi5wcmV2aWV3LWl0ZW0ge1xyXG4gIG9wYWNpdHk6IDAuNjU7XHJcbn1cclxuXHJcbi5wcmV2aWV3LWN0YSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICBnYXA6IDhweDtcclxuICBtYXJnaW4tdG9wOiAxNHB4O1xyXG4gIHBhZGRpbmc6IDEwcHggMTJweDtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDEzLCA3MSwgMTYxLCAwLjA2KTtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDEzLCA3MSwgMTYxLCAwLjE0KTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBjb2xvcjogIzE1NjVjMDtcclxuICBsaW5lLWhlaWdodDogMS41O1xyXG5cclxuICBtYXQtaWNvbiB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICB3aWR0aDogMTZweDtcclxuICAgIGhlaWdodDogMTZweDtcclxuICAgIGZsZXgtc2hyaW5rOiAwO1xyXG4gICAgbWFyZ2luLXRvcDogMXB4O1xyXG4gIH1cclxufVxyXG5cclxuLnByZXZpZXctaGlnaGxpZ2h0cyB7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbn1cclxuXHJcbi8qIFJlc3BvbnNpdmUgRGVzaWduICovXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMjAwcHgpIHtcclxuICAuZGlzdHJpYnV0aW9uLWdyaWQge1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgfVxyXG5cclxuICAucGllLWNoYXJ0LXZpc3VhbCB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgLmRhc2hib2FyZC1jb250YWluZXIge1xyXG4gICAgcGFkZGluZzogMTZweDtcclxuICB9XHJcblxyXG4gIC5kYXNoYm9hcmQtaGVybyB7XHJcbiAgICBwYWRkaW5nOiAzMnB4IDI0cHg7XHJcbiAgfVxyXG5cclxuICAuZGFzaGJvYXJkLWhlcm8tY29udGVudCB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZ2FwOiAyNHB4O1xyXG4gIH1cclxuXHJcbiAgLnBvcnRmb2xpby12YWx1ZS1jYXJkIHtcclxuICAgIG1pbi13aWR0aDogYXV0byAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLmRhc2hib2FyZC1zdGF0cyB7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICB9XHJcblxyXG4gIC5zZWN0aW9uLWhlYWRlciB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICBnYXA6IDE2cHg7XHJcbiAgfVxyXG5cclxuICAucXVpY2stYWN0aW9ucy1ncmlkIHtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gIH1cclxuXHJcbiAgLnN0b2t2ZWxzLWdyaWQge1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgfVxyXG5cclxuICAuc3Rva3ZlbC1oZWFkZXIge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5zdG9rdmVsLWltYWdlLWNvbnRhaW5lciB7XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAubm8tc3Rva3ZlbHMtYWN0aW9ucyB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xyXG4gIC5kYXNoYm9hcmQtaGVybyB7XHJcbiAgICBwYWRkaW5nOiAyNHB4IDIwcHg7XHJcbiAgfVxyXG5cclxuICAuZGFzaGJvYXJkLXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMzJweDtcclxuICB9XHJcblxyXG4gIC52YWx1ZS1hbW91bnQge1xyXG4gICAgZm9udC1zaXplOiAyOHB4O1xyXG4gIH1cclxuXHJcbiAgLnNlY3Rpb24tdGl0bGUgaDIge1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  }));
}
_staticBlock();

/***/ }),

/***/ 7861:
/*!*********************************************************************************!*\
  !*** ./src/app/components/contribution-dialog/contribution-dialog.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContributionDialogComponent: () => (/* binding */ ContributionDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ 7760);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ 5759);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ 5541);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/select */ 6060);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ 3840);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/progress-spinner */ 1134);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../environments/environment */ 6052);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 9475);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 2481);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ 3855);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/form-field */ 8388);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/select */ 8724);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/button */ 9885);
var _staticBlock;
























function ContributionDialogComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 10)(1, "div", 11)(2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3, "check_circle");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](5, "Contribution Recorded!");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](7, "Your payment has been successfully processed.");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
}
function ContributionDialogComponent_ng_container_15_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 14)(1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2, "groups_off");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](4, "No stokvels found");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](6, "You are not a member of any stokvels yet. Join or create a stokvel first, then come back to contribute.");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
}
function ContributionDialogComponent_ng_container_15_form_2_mat_option_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "mat-option", 25)(1, "div", 26)(2, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](6, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const s_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("value", s_r3.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](s_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"]("R", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](6, 3, s_r3.monthlyContribution), "/mo");
  }
}
function ContributionDialogComponent_ng_container_15_form_2_mat_error_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, "Please select a stokvel");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function ContributionDialogComponent_ng_container_15_form_2_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 29)(1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2, "info_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](4, "Monthly contribution: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](7, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"]("R", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](7, 1, ctx_r1.selectedStokvel.monthlyContribution));
  }
}
function ContributionDialogComponent_ng_container_15_form_2_mat_error_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, "Amount is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function ContributionDialogComponent_ng_container_15_form_2_mat_error_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, "Amount must be greater than R0");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function ContributionDialogComponent_ng_container_15_form_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "form", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("ngSubmit", function ContributionDialogComponent_ng_container_15_form_2_Template_form_ngSubmit_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r1.submit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "mat-form-field", 16)(2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3, "Select Stokvel");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "mat-select", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](5, ContributionDialogComponent_ng_container_15_form_2_mat_option_5_Template, 7, 5, "mat-option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](6, "mat-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](7, "groups");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](8, ContributionDialogComponent_ng_container_15_form_2_mat_error_8_Template, 2, 0, "mat-error", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](9, ContributionDialogComponent_ng_container_15_form_2_div_9_Template, 8, 3, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](10, "mat-form-field", 16)(11, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](12, "Amount (ZAR)");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](13, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](14, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](15, "R\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](16, ContributionDialogComponent_ng_container_15_form_2_mat_error_16_Template, 2, 0, "mat-error", 7)(17, ContributionDialogComponent_ng_container_15_form_2_mat_error_17_Template, 2, 0, "mat-error", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](18, "mat-form-field", 16)(19, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](20, "Payment Reference (optional)");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](21, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](22, "mat-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](23, "receipt");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](24, "mat-form-field", 16)(25, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](26, "Note (optional)");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](27, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](28, "mat-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](29, "notes");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    let tmp_5_0;
    let tmp_7_0;
    let tmp_8_0;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("formGroup", ctx_r1.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("disabled", !!ctx_r1.data.preselectedStokvel);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx_r1.stokvels);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", (tmp_5_0 = ctx_r1.form.get("stokvelId")) == null ? null : tmp_5_0.hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r1.selectedStokvel);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", (tmp_7_0 = ctx_r1.form.get("amount")) == null ? null : tmp_7_0.hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", (tmp_8_0 = ctx_r1.form.get("amount")) == null ? null : tmp_8_0.hasError("min"));
  }
}
function ContributionDialogComponent_ng_container_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, ContributionDialogComponent_ng_container_15_div_1_Template, 7, 0, "div", 12)(2, ContributionDialogComponent_ng_container_15_form_2_Template, 30, 7, "form", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r1.stokvels.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r1.stokvels.length > 0);
  }
}
function ContributionDialogComponent_mat_dialog_actions_16_button_3_mat_spinner_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "mat-spinner", 35);
  }
}
function ContributionDialogComponent_mat_dialog_actions_16_button_3_mat_icon_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, "payments");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function ContributionDialogComponent_mat_dialog_actions_16_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function ContributionDialogComponent_mat_dialog_actions_16_button_3_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r1.submit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, ContributionDialogComponent_mat_dialog_actions_16_button_3_mat_spinner_1_Template, 1, 0, "mat-spinner", 34)(2, ContributionDialogComponent_mat_dialog_actions_16_button_3_mat_icon_2_Template, 2, 0, "mat-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("disabled", ctx_r1.form.invalid || ctx_r1.submitting || ctx_r1.stokvels.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r1.submitting);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", !ctx_r1.submitting);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", ctx_r1.submitting ? "Processing\u2026" : "Confirm Contribution", " ");
  }
}
function ContributionDialogComponent_mat_dialog_actions_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "mat-dialog-actions", 30)(1, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function ContributionDialogComponent_mat_dialog_actions_16_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r1.cancel());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](3, ContributionDialogComponent_mat_dialog_actions_16_button_3_Template, 4, 4, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("disabled", ctx_r1.submitting);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", ctx_r1.stokvels.length === 0 ? "Close" : "Cancel", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r1.stokvels.length > 0);
  }
}
function ContributionDialogComponent_mat_dialog_actions_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "mat-dialog-actions", 36)(1, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function ContributionDialogComponent_mat_dialog_actions_17_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r1.cancel());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2, "Done");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
}
class ContributionDialogComponent {
  get stokvels() {
    return this.data.stokvels ?? [];
  }
  get selectedStokvel() {
    const id = this.form?.get('stokvelId')?.value;
    return this.stokvels.find(s => s.id === id);
  }
  constructor(fb, http, snack, dialogRef, data) {
    this.fb = fb;
    this.http = http;
    this.snack = snack;
    this.dialogRef = dialogRef;
    this.data = data;
    this.submitting = false;
    this.success = false;
    this.form = this.fb.group({
      stokvelId: [data.preselectedStokvel?.id ?? null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required],
      amount: [data.preselectedStokvel?.monthlyContribution ?? '', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.min(1)]],
      reference: [''],
      description: ['']
    });
  }
  ngOnInit() {
    // When stokvel selection changes, auto-fill monthly contribution amount
    this.form.get('stokvelId').valueChanges.subscribe(id => {
      const stokvel = this.stokvels.find(s => s.id === id);
      if (stokvel?.monthlyContribution) {
        this.form.get('amount').setValue(stokvel.monthlyContribution);
      }
    });
  }
  submit() {
    if (this.form.invalid || this.submitting) return;
    this.submitting = true;
    const {
      stokvelId,
      amount,
      reference,
      description
    } = this.form.value;
    const payload = {
      stokvelId,
      amount,
      reference: reference || `contrib-${stokvelId}-${Date.now()}`,
      description: description || `Contribution to ${this.selectedStokvel?.name}`,
      currency: 'ZAR'
    };
    this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_10__.environment.apiUrl}transactions/contribute`, payload).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.finalize)(() => this.submitting = false)).subscribe({
      next: () => {
        this.success = true;
        this.snack.open(`✅ Contribution of R${Number(amount).toLocaleString()} recorded successfully!`, 'Close', {
          duration: 4000,
          panelClass: 'success-snackbar'
        });
        this.dialogRef.close({
          success: true,
          stokvelId,
          amount
        });
      },
      error: err => {
        const msg = err?.error?.message || 'Failed to record contribution. Please try again.';
        this.snack.open(`❌ ${msg}`, 'Close', {
          duration: 5000,
          panelClass: 'error-snackbar'
        });
      }
    });
  }
  cancel() {
    this.dialogRef.close(null);
  }
  static #_ = _staticBlock = () => (this.ɵfac = function ContributionDialogComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ContributionDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MAT_DIALOG_DATA));
  }, this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineComponent"]({
    type: ContributionDialogComponent,
    selectors: [["app-contribution-dialog"]],
    decls: 18,
    vars: 4,
    consts: [[1, "contribution-dialog"], [1, "dialog-header"], [1, "dialog-icon"], ["mat-dialog-title", ""], [1, "dialog-subtitle"], ["mat-icon-button", "", "aria-label", "Close", 1, "close-btn", 3, "click"], ["class", "success-state", 4, "ngIf"], [4, "ngIf"], ["align", "end", 4, "ngIf"], ["align", "center", 4, "ngIf"], [1, "success-state"], [1, "success-icon"], ["class", "no-stokvels", 4, "ngIf"], [3, "formGroup", "ngSubmit", 4, "ngIf"], [1, "no-stokvels"], [3, "ngSubmit", "formGroup"], ["appearance", "outline", 1, "full-width"], ["formControlName", "stokvelId", 3, "disabled"], [3, "value", 4, "ngFor", "ngForOf"], ["matPrefix", ""], ["class", "stokvel-info-chip", 4, "ngIf"], ["matInput", "", "type", "number", "formControlName", "amount", "min", "1", "placeholder", "e.g. 1500"], ["matTextPrefix", ""], ["matInput", "", "formControlName", "reference", "placeholder", "e.g. EFT ref #12345"], ["matInput", "", "formControlName", "description", "placeholder", "e.g. April contribution"], [3, "value"], [1, "stokvel-option"], [1, "option-name"], [1, "option-meta"], [1, "stokvel-info-chip"], ["align", "end"], ["mat-button", "", 3, "click", "disabled"], ["mat-raised-button", "", "color", "primary", "class", "submit-btn", 3, "disabled", "click", 4, "ngIf"], ["mat-raised-button", "", "color", "primary", 1, "submit-btn", 3, "click", "disabled"], ["diameter", "18", 4, "ngIf"], ["diameter", "18"], ["align", "center"], ["mat-raised-button", "", "color", "primary", 3, "click"]],
    template: function ContributionDialogComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](4, "payments");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "div")(6, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](7, "Make a Contribution");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](8, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](9, "Record your stokvel payment");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](10, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function ContributionDialogComponent_Template_button_click_10_listener() {
          return ctx.cancel();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](11, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](12, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](13, "mat-dialog-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](14, ContributionDialogComponent_div_14_Template, 8, 0, "div", 6)(15, ContributionDialogComponent_ng_container_15_Template, 3, 2, "ng-container", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](16, ContributionDialogComponent_mat_dialog_actions_16_Template, 4, 3, "mat-dialog-actions", 8)(17, ContributionDialogComponent_mat_dialog_actions_17_Template, 3, 0, "mat-dialog-actions", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.success);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", !ctx.success);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", !ctx.success);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.success);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogActions, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogContent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__.MatFormFieldModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatError, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatPrefix, _angular_material_input__WEBPACK_IMPORTED_MODULE_4__.MatInputModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_4__.MatInput, _angular_material_select__WEBPACK_IMPORTED_MODULE_5__.MatSelectModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_5__.MatSelect, _angular_material_select__WEBPACK_IMPORTED_MODULE_16__.MatOption, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_17__.MatIconButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIcon, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__.MatProgressSpinnerModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__.MatProgressSpinner, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__.MatSnackBarModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.DecimalPipe],
    styles: [".contribution-dialog[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-width: 400px;\n  max-width: 520px;\n}\n\n.dialog-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 24px 24px 0;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.08);\n  padding-bottom: 16px;\n  margin-bottom: 4px;\n}\n.dialog-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 20px;\n  font-weight: 700;\n  color: #1a202c;\n}\n\n.dialog-icon[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border-radius: 12px;\n  background: linear-gradient(135deg, #0d47a1, #1565c0);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.dialog-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 24px;\n  width: 24px;\n  height: 24px;\n}\n\n.dialog-subtitle[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #718096;\n  margin: 2px 0 0;\n}\n\n.close-btn[_ngcontent-%COMP%] {\n  margin-left: auto;\n  color: #718096;\n}\n\nmat-dialog-content[_ngcontent-%COMP%] {\n  padding: 16px 24px;\n  max-height: 65vh;\n  overflow-y: auto;\n}\n\n.full-width[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 8px;\n}\n\n.stokvel-option[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 8px;\n}\n.stokvel-option[_ngcontent-%COMP%]   .option-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.stokvel-option[_ngcontent-%COMP%]   .option-meta[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #059669;\n  font-weight: 600;\n}\n\n.stokvel-info-chip[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: rgba(13, 71, 161, 0.06);\n  border: 1px solid rgba(13, 71, 161, 0.15);\n  border-radius: 8px;\n  padding: 8px 12px;\n  margin-bottom: 16px;\n  font-size: 13px;\n  color: #1565c0;\n}\n.stokvel-info-chip[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.stokvel-info-chip[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n\n.submit-btn[_ngcontent-%COMP%] {\n  border-radius: 24px !important;\n  padding: 0 24px !important;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.submit-btn[_ngcontent-%COMP%]   mat-spinner[_ngcontent-%COMP%] {\n  --mdc-circular-progress-active-indicator-color: white;\n}\n\nmat-dialog-actions[_ngcontent-%COMP%] {\n  padding: 8px 24px 20px;\n}\n\n\n\n.success-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 24px 16px;\n}\n.success-state[_ngcontent-%COMP%]   .success-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 64px;\n  width: 64px;\n  height: 64px;\n  color: #059669;\n}\n.success-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n  color: #1a202c;\n  margin: 16px 0 8px;\n}\n.success-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #718096;\n  margin: 0;\n}\n\n@media (max-width: 480px) {\n  .contribution-dialog[_ngcontent-%COMP%] {\n    min-width: unset;\n    width: 100%;\n  }\n}\n.no-stokvels[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n  padding: 24px 16px;\n  text-align: center;\n  color: #718096;\n}\n.no-stokvels[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 48px;\n  width: 48px;\n  height: 48px;\n  color: #cbd5e0;\n  margin-bottom: 8px;\n}\n.no-stokvels[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 16px;\n  font-weight: 700;\n  color: #4a5568;\n}\n.no-stokvels[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 13px;\n}\n\n.balance-warn[_ngcontent-%COMP%] {\n  color: #dc2626;\n  font-weight: 600;\n  margin-left: 8px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9jb250cmlidXRpb24tZGlhbG9nL2NvbnRyaWJ1dGlvbi1kaWFsb2cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0Esb0JBQUE7RUFDQSw0Q0FBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7QUFDRjtBQUNFO0VBQUssU0FBQTtFQUFXLGVBQUE7RUFBaUIsZ0JBQUE7RUFBa0IsY0FBQTtBQUtyRDs7QUFGQTtFQUNFLFdBQUE7RUFBYSxZQUFBO0VBQWMsbUJBQUE7RUFDM0IscURBQUE7RUFDQSxhQUFBO0VBQWUsbUJBQUE7RUFBcUIsdUJBQUE7RUFDcEMsY0FBQTtBQVNGO0FBUkU7RUFBVyxZQUFBO0VBQWMsZUFBQTtFQUFpQixXQUFBO0VBQWEsWUFBQTtBQWN6RDs7QUFYQTtFQUFtQixlQUFBO0VBQWlCLGNBQUE7RUFBZ0IsZUFBQTtBQWlCcEQ7O0FBZkE7RUFBYSxpQkFBQTtFQUFtQixjQUFBO0FBb0JoQzs7QUFsQkE7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFxQkY7O0FBbEJBO0VBQWMsV0FBQTtFQUFhLGtCQUFBO0FBdUIzQjs7QUFyQkE7RUFDRSxhQUFBO0VBQWUsOEJBQUE7RUFBZ0MsbUJBQUE7RUFBcUIsUUFBQTtBQTJCdEU7QUExQkU7RUFBZSxnQkFBQTtBQTZCakI7QUE1QkU7RUFBZSxlQUFBO0VBQWlCLGNBQUE7RUFBZ0IsZ0JBQUE7QUFpQ2xEOztBQTlCQTtFQUNFLGFBQUE7RUFBZSxtQkFBQTtFQUFxQixRQUFBO0VBQ3BDLG1DQUFBO0VBQWlDLHlDQUFBO0VBQ2pDLGtCQUFBO0VBQW9CLGlCQUFBO0VBQW1CLG1CQUFBO0VBQXFCLGVBQUE7RUFBaUIsY0FBQTtBQXdDL0U7QUF2Q0U7RUFBVyxlQUFBO0VBQWlCLFdBQUE7RUFBYSxZQUFBO0FBNEMzQztBQTNDRTtFQUFTLGdCQUFBO0FBOENYOztBQTNDQTtFQUNFLDhCQUFBO0VBQ0EsMEJBQUE7RUFDQSxhQUFBO0VBQWUsbUJBQUE7RUFBcUIsUUFBQTtBQWdEdEM7QUEvQ0U7RUFBYyxxREFBQTtBQWtEaEI7O0FBL0NBO0VBQXFCLHNCQUFBO0FBbURyQjs7QUFqREEsa0JBQUE7QUFDQTtFQUNFLGtCQUFBO0VBQW9CLGtCQUFBO0FBcUR0QjtBQXBERTtFQUNFLGVBQUE7RUFBaUIsV0FBQTtFQUFhLFlBQUE7RUFBYyxjQUFBO0FBeURoRDtBQXZERTtFQUFLLGVBQUE7RUFBaUIsZ0JBQUE7RUFBa0IsY0FBQTtFQUFnQixrQkFBQTtBQTZEMUQ7QUE1REU7RUFBSSxjQUFBO0VBQWdCLFNBQUE7QUFnRXRCOztBQTdEQTtFQUNFO0lBQXVCLGdCQUFBO0lBQWtCLFdBQUE7RUFrRXpDO0FBQ0Y7QUFoRUE7RUFDRSxhQUFBO0VBQWUsc0JBQUE7RUFBd0IsbUJBQUE7RUFBcUIsUUFBQTtFQUM1RCxrQkFBQTtFQUFvQixrQkFBQTtFQUFvQixjQUFBO0FBdUUxQztBQXRFRTtFQUFXLGVBQUE7RUFBaUIsV0FBQTtFQUFhLFlBQUE7RUFBYyxjQUFBO0VBQWdCLGtCQUFBO0FBNkV6RTtBQTVFRTtFQUFLLFNBQUE7RUFBVyxlQUFBO0VBQWlCLGdCQUFBO0VBQWtCLGNBQUE7QUFrRnJEO0FBakZFO0VBQUksU0FBQTtFQUFXLGVBQUE7QUFxRmpCOztBQWxGQTtFQUFnQixjQUFBO0VBQWdCLGdCQUFBO0VBQWtCLGdCQUFBO0FBd0ZsRCIsInNvdXJjZXNDb250ZW50IjpbIi5jb250cmlidXRpb24tZGlhbG9nIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgbWluLXdpZHRoOiA0MDBweDtcclxuICBtYXgtd2lkdGg6IDUyMHB4O1xyXG59XHJcblxyXG4uZGlhbG9nLWhlYWRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMTZweDtcclxuICBwYWRkaW5nOiAyNHB4IDI0cHggMDtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLDAsMCwuMDgpO1xyXG4gIHBhZGRpbmctYm90dG9tOiAxNnB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDRweDtcclxuXHJcbiAgaDIgeyBtYXJnaW46IDA7IGZvbnQtc2l6ZTogMjBweDsgZm9udC13ZWlnaHQ6IDcwMDsgY29sb3I6ICMxYTIwMmM7IH1cclxufVxyXG5cclxuLmRpYWxvZy1pY29uIHtcclxuICB3aWR0aDogNDhweDsgaGVpZ2h0OiA0OHB4OyBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMwZDQ3YTEsICMxNTY1YzApO1xyXG4gIGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGZsZXgtc2hyaW5rOiAwO1xyXG4gIG1hdC1pY29uIHsgY29sb3I6IHdoaXRlOyBmb250LXNpemU6IDI0cHg7IHdpZHRoOiAyNHB4OyBoZWlnaHQ6IDI0cHg7IH1cclxufVxyXG5cclxuLmRpYWxvZy1zdWJ0aXRsZSB7IGZvbnQtc2l6ZTogMTNweDsgY29sb3I6ICM3MTgwOTY7IG1hcmdpbjogMnB4IDAgMDsgfVxyXG5cclxuLmNsb3NlLWJ0biB7IG1hcmdpbi1sZWZ0OiBhdXRvOyBjb2xvcjogIzcxODA5NjsgfVxyXG5cclxubWF0LWRpYWxvZy1jb250ZW50IHtcclxuICBwYWRkaW5nOiAxNnB4IDI0cHg7XHJcbiAgbWF4LWhlaWdodDogNjV2aDtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG59XHJcblxyXG4uZnVsbC13aWR0aCB7IHdpZHRoOiAxMDAlOyBtYXJnaW4tYm90dG9tOiA4cHg7IH1cclxuXHJcbi5zdG9rdmVsLW9wdGlvbiB7XHJcbiAgZGlzcGxheTogZmxleDsganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDhweDtcclxuICAub3B0aW9uLW5hbWUgeyBmb250LXdlaWdodDogNjAwOyB9XHJcbiAgLm9wdGlvbi1tZXRhIHsgZm9udC1zaXplOiAxMnB4OyBjb2xvcjogIzA1OTY2OTsgZm9udC13ZWlnaHQ6IDYwMDsgfVxyXG59XHJcblxyXG4uc3Rva3ZlbC1pbmZvLWNoaXAge1xyXG4gIGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGdhcDogOHB4O1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMTMsNzEsMTYxLC4wNik7IGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTMsNzEsMTYxLC4xNSk7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4OyBwYWRkaW5nOiA4cHggMTJweDsgbWFyZ2luLWJvdHRvbTogMTZweDsgZm9udC1zaXplOiAxM3B4OyBjb2xvcjogIzE1NjVjMDtcclxuICBtYXQtaWNvbiB7IGZvbnQtc2l6ZTogMThweDsgd2lkdGg6IDE4cHg7IGhlaWdodDogMThweDsgfVxyXG4gIHN0cm9uZyB7IGZvbnQtd2VpZ2h0OiA3MDA7IH1cclxufVxyXG5cclxuLnN1Ym1pdC1idG4ge1xyXG4gIGJvcmRlci1yYWRpdXM6IDI0cHggIWltcG9ydGFudDtcclxuICBwYWRkaW5nOiAwIDI0cHggIWltcG9ydGFudDtcclxuICBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDhweDtcclxuICBtYXQtc3Bpbm5lciB7IC0tbWRjLWNpcmN1bGFyLXByb2dyZXNzLWFjdGl2ZS1pbmRpY2F0b3ItY29sb3I6IHdoaXRlOyB9XHJcbn1cclxuXHJcbm1hdC1kaWFsb2ctYWN0aW9ucyB7IHBhZGRpbmc6IDhweCAyNHB4IDIwcHg7IH1cclxuXHJcbi8qIFN1Y2Nlc3Mgc3RhdGUgKi9cclxuLnN1Y2Nlc3Mtc3RhdGUge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjsgcGFkZGluZzogMjRweCAxNnB4O1xyXG4gIC5zdWNjZXNzLWljb24gbWF0LWljb24ge1xyXG4gICAgZm9udC1zaXplOiA2NHB4OyB3aWR0aDogNjRweDsgaGVpZ2h0OiA2NHB4OyBjb2xvcjogIzA1OTY2OTtcclxuICB9XHJcbiAgaDMgeyBmb250LXNpemU6IDIwcHg7IGZvbnQtd2VpZ2h0OiA3MDA7IGNvbG9yOiAjMWEyMDJjOyBtYXJnaW46IDE2cHggMCA4cHg7IH1cclxuICBwIHsgY29sb3I6ICM3MTgwOTY7IG1hcmdpbjogMDsgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcclxuICAuY29udHJpYnV0aW9uLWRpYWxvZyB7IG1pbi13aWR0aDogdW5zZXQ7IHdpZHRoOiAxMDAlOyB9XHJcbn1cclxuXHJcbi5uby1zdG9rdmVscyB7XHJcbiAgZGlzcGxheTogZmxleDsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZ2FwOiA4cHg7XHJcbiAgcGFkZGluZzogMjRweCAxNnB4OyB0ZXh0LWFsaWduOiBjZW50ZXI7IGNvbG9yOiAjNzE4MDk2O1xyXG4gIG1hdC1pY29uIHsgZm9udC1zaXplOiA0OHB4OyB3aWR0aDogNDhweDsgaGVpZ2h0OiA0OHB4OyBjb2xvcjogI2NiZDVlMDsgbWFyZ2luLWJvdHRvbTogOHB4OyB9XHJcbiAgaDQgeyBtYXJnaW46IDA7IGZvbnQtc2l6ZTogMTZweDsgZm9udC13ZWlnaHQ6IDcwMDsgY29sb3I6ICM0YTU1Njg7IH1cclxuICBwIHsgbWFyZ2luOiAwOyBmb250LXNpemU6IDEzcHg7IH1cclxufVxyXG5cclxuLmJhbGFuY2Utd2FybiB7IGNvbG9yOiAjZGMyNjI2OyBmb250LXdlaWdodDogNjAwOyBtYXJnaW4tbGVmdDogOHB4OyB9XHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  }));
}
_staticBlock();

/***/ })

}]);
//# sourceMappingURL=src_app_components_dashboard_dashboard_component_ts.js.map