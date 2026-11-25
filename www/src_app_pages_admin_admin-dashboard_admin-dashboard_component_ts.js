"use strict";
(self["webpackChunkikage_ui"] = self["webpackChunkikage_ui"] || []).push([["src_app_pages_admin_admin-dashboard_admin-dashboard_component_ts"],{

/***/ 4147:
/*!**************************************************************************!*\
  !*** ./src/app/pages/admin/admin-dashboard/admin-dashboard.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminDashboardComponent: () => (/* binding */ AdminDashboardComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 4487);
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../material.module */ 9439);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2481);
/* harmony import */ var _services_admin_admin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/admin/admin.service */ 4545);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ 3840);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/progress-spinner */ 1134);
var _staticBlock;









const _c0 = a0 => ["/admin/stokvels", a0];
function AdminDashboardComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "mat-spinner", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Loading platform stats\u2026");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function AdminDashboardComponent_ng_container_9_div_98_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 32)(1, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "span")(6, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "span")(15, "a", 37)(16, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "open_in_new");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const s_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](i_r2 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](s_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"](s_r1.type == null ? null : s_r1.type.toLowerCase());
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](s_r1.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r2.fmt(s_r1.memberCount));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r2.money(s_r1.totalContributions));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](s_r1.createdByName);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](9, _c0, s_r1.id));
  }
}
function AdminDashboardComponent_ng_container_9_div_99_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "No stokvels yet");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function AdminDashboardComponent_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 8)(2, "div", 9)(3, "div", 10)(4, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "account_balance");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Total Stokvels");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 9)(13, "div", 14)(14, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "people");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "Unique Users");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 9)(23, "div", 15)(24, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, "savings");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, "Contributions (All Time)");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "div", 9)(33, "div", 16)(34, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35, "autorenew");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](39, "Rotational Stokvels");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "div", 17)(43, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](44, "monetization_on");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](45, " Revenue & Subscriptions ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "div", 18)(47, "div", 19)(48, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](49, "Platform Fees Collected");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "div", 19)(53, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](54, "Referral Rewards Paid");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](56);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "div", 19)(58, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](59, "Pro Subscribers");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](60, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](61);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](62, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](63, "PRO");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](64, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](65, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](66, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](67);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](68, "div", 19)(69, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](70, "Business Subscribers");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](71, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](72);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](73, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](74, "BIZ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](75, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](76, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](77, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](78);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](79, "div", 17)(80, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](81, "leaderboard");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](82, " Top Stokvels by Members ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](83, "div", 28)(84, "div", 29)(85, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](86, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](87, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](88, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](89, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](90, "Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](91, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](92, "Members");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](93, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](94, "Contributions");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](95, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](96, "Created By");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](97, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](98, AdminDashboardComponent_ng_container_9_div_98_Template, 18, 11, "div", 30)(99, AdminDashboardComponent_ng_container_9_div_99_Template, 2, 0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r2.fmt(ctx_r2.stats.totalStokvels));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", ctx_r2.fmt(ctx_r2.stats.activeStokvels), " active \u00B7 ", ctx_r2.fmt(ctx_r2.stats.stokvelsCreatedThisMonth), " new this month");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r2.fmt(ctx_r2.stats.totalUsers));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", ctx_r2.fmt(ctx_r2.stats.activeUsers), " active \u00B7 ", ctx_r2.fmt(ctx_r2.stats.totalMemberships), " total memberships");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r2.money(ctx_r2.stats.totalContributionsAllTime));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", ctx_r2.money(ctx_r2.stats.totalContributionsThisMonth), " this month");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r2.fmt(ctx_r2.stats.rotationalStokvels));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", ctx_r2.fmt(ctx_r2.stats.totalReferrals), " referrals \u00B7 ", ctx_r2.fmt(ctx_r2.stats.completedReferrals), " converted");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r2.money(ctx_r2.stats.totalFeesCollected));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r2.money(ctx_r2.stats.totalReferralRewardsPaid));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", ctx_r2.fmt(ctx_r2.stats.proSubscribers), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("width", ctx_r2.tierPercent("PRO"), "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", ctx_r2.tierPercent("PRO"), "% of users");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", ctx_r2.fmt(ctx_r2.stats.businessSubscribers), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("width", ctx_r2.tierPercent("BUSINESS"), "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", ctx_r2.tierPercent("BUSINESS"), "% of users");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r2.stats.topStokvels);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !(ctx_r2.stats.topStokvels == null ? null : ctx_r2.stats.topStokvels.length));
  }
}
function AdminDashboardComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 39)(1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "error_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r2.error, " ");
  }
}
class AdminDashboardComponent {
  constructor(adminService) {
    this.adminService = adminService;
    this.stats = null;
    this.loading = true;
    this.error = '';
  }
  ngOnInit() {
    this.adminService.getStats().subscribe({
      next: s => {
        this.stats = s;
        this.loading = false;
      },
      error: () => {
        this.error = 'Failed to load stats';
        this.loading = false;
      }
    });
  }
  fmt(n) {
    if (n == null) return '0';
    if (n >= 1_000_000) return (n / 1_000_000).toFixed(1) + 'M';
    if (n >= 1_000) return (n / 1_000).toFixed(1) + 'k';
    return n.toFixed(0);
  }
  money(n) {
    if (n == null) return 'R0';
    if (n >= 1_000_000) return 'R' + (n / 1_000_000).toFixed(2) + 'M';
    if (n >= 1_000) return 'R' + (n / 1_000).toFixed(1) + 'k';
    return 'R' + n.toFixed(2);
  }
  tierPercent(tier) {
    if (!this.stats || !this.stats.totalUsers) return 0;
    const n = tier === 'PRO' ? this.stats.proSubscribers : this.stats.businessSubscribers;
    return Math.round(n / this.stats.totalUsers * 100);
  }
  static #_ = _staticBlock = () => (this.ɵfac = function AdminDashboardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || AdminDashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_admin_admin_service__WEBPACK_IMPORTED_MODULE_4__.AdminService));
  }, this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: AdminDashboardComponent,
    selectors: [["app-admin-dashboard"]],
    decls: 11,
    vars: 4,
    consts: [[1, "admin-page"], [1, "page-header"], [1, "timestamp"], ["class", "loading-state", 4, "ngIf"], [4, "ngIf"], ["class", "error-state", 4, "ngIf"], [1, "loading-state"], ["diameter", "48"], [1, "kpi-grid"], [1, "kpi-card"], [1, "kpi-icon", "green"], [1, "kpi-val"], [1, "kpi-label"], [1, "kpi-sub"], [1, "kpi-icon", "blue"], [1, "kpi-icon", "orange"], [1, "kpi-icon", "purple"], [1, "section-title"], [1, "revenue-grid"], [1, "rev-card"], [1, "rev-label"], [1, "rev-val"], [1, "rev-badge", "pro"], [1, "rev-progress"], [1, "rev-bar"], [1, "rev-pct"], [1, "rev-badge", "biz"], [1, "rev-bar", "biz-bar"], [1, "top-table"], [1, "tt-head"], ["class", "tt-row", 4, "ngFor", "ngForOf"], ["class", "tt-empty", 4, "ngIf"], [1, "tt-row"], [1, "rank"], [1, "sname"], [1, "type-chip"], [1, "muted"], [1, "view-link", 3, "routerLink"], [1, "tt-empty"], [1, "error-state"]],
    template: function AdminDashboardComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h1")(3, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, " Platform Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, AdminDashboardComponent_div_8_Template, 4, 0, "div", 3)(9, AdminDashboardComponent_ng_container_9_Template, 100, 23, "ng-container", 4)(10, AdminDashboardComponent_div_10_Template, 4, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Live \u00B7 ", ctx.loading ? "Loading\u2026" : "Last refreshed now");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.loading && ctx.stats);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.loading && ctx.error);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink, _material_module__WEBPACK_IMPORTED_MODULE_2__.MaterialModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIcon, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__.MatProgressSpinner],
    styles: [".admin-page[_ngcontent-%COMP%] {\n  padding: 32px;\n  max-width: 1400px;\n}\n\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 28px;\n}\n.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 1.5rem;\n  font-weight: 800;\n  margin: 0;\n  color: #1a1a2e;\n}\n.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #4ade80;\n}\n.page-header[_ngcontent-%COMP%]   .timestamp[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #999;\n}\n\n.loading-state[_ngcontent-%COMP%], .error-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 60px;\n  color: #888;\n}\n.loading-state[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], .error-state[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 40px;\n  height: 40px;\n  width: 40px;\n  margin-bottom: 12px;\n  color: #e53935;\n}\n\n.kpi-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\n  gap: 16px;\n  margin-bottom: 28px;\n}\n\n.kpi-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  padding: 24px;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);\n}\n.kpi-card[_ngcontent-%COMP%]   .kpi-icon[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 12px;\n}\n.kpi-card[_ngcontent-%COMP%]   .kpi-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 22px;\n  height: 22px;\n  width: 22px;\n  color: #fff;\n}\n.kpi-card[_ngcontent-%COMP%]   .kpi-icon.green[_ngcontent-%COMP%] {\n  background: #2e7d32;\n}\n.kpi-card[_ngcontent-%COMP%]   .kpi-icon.blue[_ngcontent-%COMP%] {\n  background: #1565c0;\n}\n.kpi-card[_ngcontent-%COMP%]   .kpi-icon.orange[_ngcontent-%COMP%] {\n  background: #e65100;\n}\n.kpi-card[_ngcontent-%COMP%]   .kpi-icon.purple[_ngcontent-%COMP%] {\n  background: #6a1b9a;\n}\n.kpi-card[_ngcontent-%COMP%]   .kpi-val[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 800;\n  color: #1a1a2e;\n}\n.kpi-card[_ngcontent-%COMP%]   .kpi-label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: #555;\n  margin-bottom: 4px;\n}\n.kpi-card[_ngcontent-%COMP%]   .kpi-sub[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #888;\n}\n\n.section-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 1rem;\n  font-weight: 700;\n  color: #1a1a2e;\n  margin: 8px 0 16px;\n}\n.section-title[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #6a1b9a;\n}\n\n.revenue-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 16px;\n  margin-bottom: 28px;\n}\n\n.rev-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  padding: 20px;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);\n}\n.rev-card[_ngcontent-%COMP%]   .rev-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #777;\n  margin-bottom: 6px;\n}\n.rev-card[_ngcontent-%COMP%]   .rev-val[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 800;\n  color: #1a1a2e;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.rev-card[_ngcontent-%COMP%]   .rev-badge[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 700;\n  padding: 2px 8px;\n  border-radius: 10px;\n  letter-spacing: 0.5px;\n}\n.rev-card[_ngcontent-%COMP%]   .rev-badge.pro[_ngcontent-%COMP%] {\n  background: #e3f2fd;\n  color: #1565c0;\n}\n.rev-card[_ngcontent-%COMP%]   .rev-badge.biz[_ngcontent-%COMP%] {\n  background: #f3e5f5;\n  color: #6a1b9a;\n}\n.rev-card[_ngcontent-%COMP%]   .rev-progress[_ngcontent-%COMP%] {\n  background: #eee;\n  border-radius: 4px;\n  height: 6px;\n  margin: 10px 0 4px;\n  overflow: hidden;\n}\n.rev-card[_ngcontent-%COMP%]   .rev-bar[_ngcontent-%COMP%] {\n  background: #1565c0;\n  height: 100%;\n  border-radius: 4px;\n  transition: width 0.4s;\n}\n.rev-card[_ngcontent-%COMP%]   .rev-bar.biz-bar[_ngcontent-%COMP%] {\n  background: #6a1b9a;\n}\n.rev-card[_ngcontent-%COMP%]   .rev-pct[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #888;\n}\n\n.top-table[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);\n  overflow: hidden;\n}\n\n.tt-head[_ngcontent-%COMP%], .tt-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 40px 1fr 100px 80px 120px 1fr 48px;\n  align-items: center;\n  padding: 12px 20px;\n  gap: 12px;\n  font-size: 13px;\n}\n\n.tt-head[_ngcontent-%COMP%] {\n  background: #f5f5f5;\n  font-weight: 700;\n  color: #555;\n  font-size: 12px;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n\n.tt-row[_ngcontent-%COMP%] {\n  border-top: 1px solid #f0f0f0;\n}\n.tt-row[_ngcontent-%COMP%]:hover {\n  background: #fafafa;\n}\n\n.rank[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #1a1a2e;\n}\n\n.sname[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n\n.muted[_ngcontent-%COMP%] {\n  color: #888;\n}\n\n.type-chip[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  padding: 2px 10px;\n  border-radius: 10px;\n}\n.type-chip.rotational[_ngcontent-%COMP%] {\n  background: #e3f2fd;\n  color: #1565c0;\n}\n.type-chip.savings[_ngcontent-%COMP%] {\n  background: #e8f5e9;\n  color: #2e7d32;\n}\n.type-chip.investment[_ngcontent-%COMP%] {\n  background: #fff3e0;\n  color: #e65100;\n}\n\n.view-link[_ngcontent-%COMP%] {\n  color: #888;\n  display: flex;\n  align-items: center;\n}\n.view-link[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  height: 18px;\n  width: 18px;\n}\n.view-link[_ngcontent-%COMP%]:hover {\n  color: #1565c0;\n}\n\n.tt-empty[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 32px;\n  color: #aaa;\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvYWRtaW4vYWRtaW4tZGFzaGJvYXJkL2FkbWluLWRhc2hib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtBQUZGOztBQUtBO0VBQ0UsYUFBQTtFQUFlLG1CQUFBO0VBQXFCLDhCQUFBO0VBQ3BDLG1CQUFBO0FBQUY7QUFFRTtFQUNFLGFBQUE7RUFBZSxtQkFBQTtFQUFxQixTQUFBO0VBQ3BDLGlCQUFBO0VBQW1CLGdCQUFBO0VBQWtCLFNBQUE7RUFBVyxjQUFBO0FBS3BEO0FBSkk7RUFBVyxjQUFBO0FBT2Y7QUFKRTtFQUFhLGVBQUE7RUFBaUIsV0FBQTtBQVFoQzs7QUFMQTtFQUNFLGFBQUE7RUFBZSxzQkFBQTtFQUF3QixtQkFBQTtFQUN2QyxhQUFBO0VBQWUsV0FBQTtBQVdqQjtBQVZFO0VBQVcsZUFBQTtFQUFpQixZQUFBO0VBQWMsV0FBQTtFQUFhLG1CQUFBO0VBQXFCLGNBQUE7QUFpQjlFOztBQWJBO0VBQ0UsYUFBQTtFQUNBLDJEQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0FBZ0JGOztBQWJBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSx5Q0FBQTtBQWdCRjtBQWRFO0VBQ0UsV0FBQTtFQUFhLFlBQUE7RUFDYixtQkFBQTtFQUNBLGFBQUE7RUFBZSxtQkFBQTtFQUFxQix1QkFBQTtFQUNwQyxtQkFBQTtBQW1CSjtBQWxCSTtFQUFXLGVBQUE7RUFBaUIsWUFBQTtFQUFjLFdBQUE7RUFBYSxXQUFBO0FBd0IzRDtBQXRCSTtFQUFXLG1CQUFBO0FBeUJmO0FBeEJJO0VBQVcsbUJBQUE7QUEyQmY7QUExQkk7RUFBVyxtQkFBQTtBQTZCZjtBQTVCSTtFQUFXLG1CQUFBO0FBK0JmO0FBNUJFO0VBQWEsZUFBQTtFQUFpQixnQkFBQTtFQUFrQixjQUFBO0FBaUNsRDtBQWhDRTtFQUFhLGVBQUE7RUFBaUIsZ0JBQUE7RUFBa0IsV0FBQTtFQUFhLGtCQUFBO0FBc0MvRDtBQXJDRTtFQUFhLGVBQUE7RUFBaUIsV0FBQTtBQXlDaEM7O0FBckNBO0VBQ0UsYUFBQTtFQUFlLG1CQUFBO0VBQXFCLFFBQUE7RUFDcEMsZUFBQTtFQUFpQixnQkFBQTtFQUFrQixjQUFBO0VBQ25DLGtCQUFBO0FBNENGO0FBM0NFO0VBQVcsY0FBQTtBQThDYjs7QUExQ0E7RUFDRSxhQUFBO0VBQ0EsMkRBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7QUE2Q0Y7O0FBMUNBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSx5Q0FBQTtBQTZDRjtBQTNDRTtFQUFhLGVBQUE7RUFBaUIsV0FBQTtFQUFhLGtCQUFBO0FBZ0Q3QztBQS9DRTtFQUFhLGlCQUFBO0VBQW1CLGdCQUFBO0VBQWtCLGNBQUE7RUFDckMsYUFBQTtFQUFlLG1CQUFBO0VBQXFCLFFBQUE7QUFzRG5EO0FBcERFO0VBQ0UsZUFBQTtFQUFpQixnQkFBQTtFQUFrQixnQkFBQTtFQUNuQyxtQkFBQTtFQUFxQixxQkFBQTtBQXlEekI7QUF4REk7RUFBUSxtQkFBQTtFQUFxQixjQUFBO0FBNERqQztBQTNESTtFQUFRLG1CQUFBO0VBQXFCLGNBQUE7QUErRGpDO0FBNURFO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBOERKO0FBM0RFO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtBQTZESjtBQTVESTtFQUFZLG1CQUFBO0FBK0RoQjtBQTVERTtFQUFXLGVBQUE7RUFBaUIsV0FBQTtBQWdFOUI7O0FBNURBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHlDQUFBO0VBQ0EsZ0JBQUE7QUErREY7O0FBNURBO0VBQ0UsYUFBQTtFQUNBLHlEQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0FBK0RGOztBQTVEQTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7QUErREY7O0FBNURBO0VBQ0UsNkJBQUE7QUErREY7QUE5REU7RUFBVSxtQkFBQTtBQWlFWjs7QUE5REE7RUFBUSxnQkFBQTtFQUFrQixjQUFBO0FBbUUxQjs7QUFsRUE7RUFBUyxnQkFBQTtBQXNFVDs7QUFyRUE7RUFBUyxXQUFBO0FBeUVUOztBQXZFQTtFQUNFLGVBQUE7RUFBaUIsZ0JBQUE7RUFDakIsaUJBQUE7RUFBbUIsbUJBQUE7QUE0RXJCO0FBM0VFO0VBQWUsbUJBQUE7RUFBcUIsY0FBQTtBQStFdEM7QUE5RUU7RUFBZSxtQkFBQTtFQUFxQixjQUFBO0FBa0Z0QztBQWpGRTtFQUFlLG1CQUFBO0VBQXFCLGNBQUE7QUFxRnRDOztBQWxGQTtFQUNFLFdBQUE7RUFBYSxhQUFBO0VBQWUsbUJBQUE7QUF1RjlCO0FBdEZFO0VBQVcsZUFBQTtFQUFpQixZQUFBO0VBQWMsV0FBQTtBQTJGNUM7QUExRkU7RUFBVSxjQUFBO0FBNkZaOztBQTFGQTtFQUNFLGtCQUFBO0VBQW9CLGFBQUE7RUFBZSxXQUFBO0VBQWEsZUFBQTtBQWdHbEQiLCJzb3VyY2VzQ29udGVudCI6WyJAdXNlICdzYXNzOmNvbG9yJztcclxuXHJcbi8vIHNoYXJlZCBhZG1pbiBwYWdlIHN0eWxlc1xyXG4uYWRtaW4tcGFnZSB7XHJcbiAgcGFkZGluZzogMzJweDtcclxuICBtYXgtd2lkdGg6IDE0MDBweDtcclxufVxyXG5cclxuLnBhZ2UtaGVhZGVyIHtcclxuICBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgbWFyZ2luLWJvdHRvbTogMjhweDtcclxuXHJcbiAgaDEge1xyXG4gICAgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZ2FwOiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07IGZvbnQtd2VpZ2h0OiA4MDA7IG1hcmdpbjogMDsgY29sb3I6ICMxYTFhMmU7XHJcbiAgICBtYXQtaWNvbiB7IGNvbG9yOiAjNGFkZTgwOyB9XHJcbiAgfVxyXG5cclxuICAudGltZXN0YW1wIHsgZm9udC1zaXplOiAxMnB4OyBjb2xvcjogIzk5OTsgfVxyXG59XHJcblxyXG4ubG9hZGluZy1zdGF0ZSwgLmVycm9yLXN0YXRlIHtcclxuICBkaXNwbGF5OiBmbGV4OyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDYwcHg7IGNvbG9yOiAjODg4O1xyXG4gIG1hdC1pY29uIHsgZm9udC1zaXplOiA0MHB4OyBoZWlnaHQ6IDQwcHg7IHdpZHRoOiA0MHB4OyBtYXJnaW4tYm90dG9tOiAxMnB4OyBjb2xvcjogI2U1MzkzNTsgfVxyXG59XHJcblxyXG4vLyDDosKUwoDDosKUwoAgS1BJIGdyaWQgw6LClMKAw6LClMKAXHJcbi5rcGktZ3JpZCB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDIyMHB4LCAxZnIpKTtcclxuICBnYXA6IDE2cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjhweDtcclxufVxyXG5cclxuLmtwaS1jYXJkIHtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgcGFkZGluZzogMjRweDtcclxuICBib3gtc2hhZG93OiAwIDFweCA0cHggcmdiYSgwLDAsMCwuMDgpO1xyXG5cclxuICAua3BpLWljb24ge1xyXG4gICAgd2lkdGg6IDQ0cHg7IGhlaWdodDogNDRweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDEycHg7XHJcbiAgICBtYXQtaWNvbiB7IGZvbnQtc2l6ZTogMjJweDsgaGVpZ2h0OiAyMnB4OyB3aWR0aDogMjJweDsgY29sb3I6ICNmZmY7IH1cclxuXHJcbiAgICAmLmdyZWVuICB7IGJhY2tncm91bmQ6ICMyZTdkMzI7IH1cclxuICAgICYuYmx1ZSAgIHsgYmFja2dyb3VuZDogIzE1NjVjMDsgfVxyXG4gICAgJi5vcmFuZ2UgeyBiYWNrZ3JvdW5kOiAjZTY1MTAwOyB9XHJcbiAgICAmLnB1cnBsZSB7IGJhY2tncm91bmQ6ICM2YTFiOWE7IH1cclxuICB9XHJcblxyXG4gIC5rcGktdmFsICAgeyBmb250LXNpemU6IDJyZW07IGZvbnQtd2VpZ2h0OiA4MDA7IGNvbG9yOiAjMWExYTJlOyB9XHJcbiAgLmtwaS1sYWJlbCB7IGZvbnQtc2l6ZTogMTNweDsgZm9udC13ZWlnaHQ6IDYwMDsgY29sb3I6ICM1NTU7IG1hcmdpbi1ib3R0b206IDRweDsgfVxyXG4gIC5rcGktc3ViICAgeyBmb250LXNpemU6IDEycHg7IGNvbG9yOiAjODg4OyB9XHJcbn1cclxuXHJcbi8vIMOiwpTCgMOiwpTCgCBTZWN0aW9uIHRpdGxlIMOiwpTCgMOiwpTCgFxyXG4uc2VjdGlvbi10aXRsZSB7XHJcbiAgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZ2FwOiA4cHg7XHJcbiAgZm9udC1zaXplOiAxcmVtOyBmb250LXdlaWdodDogNzAwOyBjb2xvcjogIzFhMWEyZTtcclxuICBtYXJnaW46IDhweCAwIDE2cHg7XHJcbiAgbWF0LWljb24geyBjb2xvcjogIzZhMWI5YTsgfVxyXG59XHJcblxyXG4vLyDDosKUwoDDosKUwoAgUmV2ZW51ZSBncmlkIMOiwpTCgMOiwpTCgFxyXG4ucmV2ZW51ZS1ncmlkIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjAwcHgsIDFmcikpO1xyXG4gIGdhcDogMTZweDtcclxuICBtYXJnaW4tYm90dG9tOiAyOHB4O1xyXG59XHJcblxyXG4ucmV2LWNhcmQge1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIGJveC1zaGFkb3c6IDAgMXB4IDRweCByZ2JhKDAsMCwwLC4wOCk7XHJcblxyXG4gIC5yZXYtbGFiZWwgeyBmb250LXNpemU6IDEycHg7IGNvbG9yOiAjNzc3OyBtYXJnaW4tYm90dG9tOiA2cHg7IH1cclxuICAucmV2LXZhbCAgIHsgZm9udC1zaXplOiAxLjVyZW07IGZvbnQtd2VpZ2h0OiA4MDA7IGNvbG9yOiAjMWExYTJlO1xyXG4gICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDhweDsgfVxyXG5cclxuICAucmV2LWJhZGdlIHtcclxuICAgIGZvbnQtc2l6ZTogMTBweDsgZm9udC13ZWlnaHQ6IDcwMDsgcGFkZGluZzogMnB4IDhweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7IGxldHRlci1zcGFjaW5nOiAuNXB4O1xyXG4gICAgJi5wcm8geyBiYWNrZ3JvdW5kOiAjZTNmMmZkOyBjb2xvcjogIzE1NjVjMDsgfVxyXG4gICAgJi5iaXogeyBiYWNrZ3JvdW5kOiAjZjNlNWY1OyBjb2xvcjogIzZhMWI5YTsgfVxyXG4gIH1cclxuXHJcbiAgLnJldi1wcm9ncmVzcyB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZWVlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgaGVpZ2h0OiA2cHg7XHJcbiAgICBtYXJnaW46IDEwcHggMCA0cHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIH1cclxuXHJcbiAgLnJldi1iYXIge1xyXG4gICAgYmFja2dyb3VuZDogIzE1NjVjMDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIHRyYW5zaXRpb246IHdpZHRoIC40cztcclxuICAgICYuYml6LWJhciB7IGJhY2tncm91bmQ6ICM2YTFiOWE7IH1cclxuICB9XHJcblxyXG4gIC5yZXYtcGN0IHsgZm9udC1zaXplOiAxMXB4OyBjb2xvcjogIzg4ODsgfVxyXG59XHJcblxyXG4vLyDDosKUwoDDosKUwoAgVG9wIHRhYmxlIMOiwpTCgMOiwpTCgFxyXG4udG9wLXRhYmxlIHtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgYm94LXNoYWRvdzogMCAxcHggNHB4IHJnYmEoMCwwLDAsLjA4KTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4udHQtaGVhZCwgLnR0LXJvdyB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDQwcHggMWZyIDEwMHB4IDgwcHggMTIwcHggMWZyIDQ4cHg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAxMnB4IDIwcHg7XHJcbiAgZ2FwOiAxMnB4O1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxufVxyXG5cclxuLnR0LWhlYWQge1xyXG4gIGJhY2tncm91bmQ6ICNmNWY1ZjU7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBjb2xvcjogIzU1NTtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBsZXR0ZXItc3BhY2luZzogLjRweDtcclxufVxyXG5cclxuLnR0LXJvdyB7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNmMGYwZjA7XHJcbiAgJjpob3ZlciB7IGJhY2tncm91bmQ6ICNmYWZhZmE7IH1cclxufVxyXG5cclxuLnJhbmsgeyBmb250LXdlaWdodDogNzAwOyBjb2xvcjogIzFhMWEyZTsgfVxyXG4uc25hbWUgeyBmb250LXdlaWdodDogNjAwOyB9XHJcbi5tdXRlZCB7IGNvbG9yOiAjODg4OyB9XHJcblxyXG4udHlwZS1jaGlwIHtcclxuICBmb250LXNpemU6IDExcHg7IGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgcGFkZGluZzogMnB4IDEwcHg7IGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgJi5yb3RhdGlvbmFsIHsgYmFja2dyb3VuZDogI2UzZjJmZDsgY29sb3I6ICMxNTY1YzA7IH1cclxuICAmLnNhdmluZ3MgICAgeyBiYWNrZ3JvdW5kOiAjZThmNWU5OyBjb2xvcjogIzJlN2QzMjsgfVxyXG4gICYuaW52ZXN0bWVudCB7IGJhY2tncm91bmQ6ICNmZmYzZTA7IGNvbG9yOiAjZTY1MTAwOyB9XHJcbn1cclxuXHJcbi52aWV3LWxpbmsge1xyXG4gIGNvbG9yOiAjODg4OyBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hdC1pY29uIHsgZm9udC1zaXplOiAxOHB4OyBoZWlnaHQ6IDE4cHg7IHdpZHRoOiAxOHB4OyB9XHJcbiAgJjpob3ZlciB7IGNvbG9yOiAjMTU2NWMwOyB9XHJcbn1cclxuXHJcbi50dC1lbXB0eSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyOyBwYWRkaW5nOiAzMnB4OyBjb2xvcjogI2FhYTsgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  }));
}
_staticBlock();

/***/ })

}]);
//# sourceMappingURL=src_app_pages_admin_admin-dashboard_admin-dashboard_component_ts.js.map