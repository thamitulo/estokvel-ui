"use strict";
(self["webpackChunkestokvel_ui"] = self["webpackChunkestokvel_ui"] || []).push([["src_app_pages_profile_profile_component_ts"],{

/***/ 2683:
/*!****************************************************!*\
  !*** ./src/app/pages/profile/profile.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProfileComponent: () => (/* binding */ ProfileComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 4487);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../material.module */ 9439);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 1318);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 6647);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 9452);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2481);
/* harmony import */ var _services_user_user_service_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/user/user-service.service */ 2915);
/* harmony import */ var _services_stokvel_stokvel_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services/stokvel/stokvel.service */ 7093);
/* harmony import */ var _services_stokvel_transaction_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../services/stokvel/transaction.service */ 6881);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 5422);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ 3840);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/progress-spinner */ 1134);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/tabs */ 8223);
var _staticBlock;
















function ProfileComponent_div_0_img_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "img", 30);
  }
  if (rf & 2) {
    const user_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("src", user_r2.picture, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeUrl"])("alt", user_r2.name);
  }
}
function ProfileComponent_div_0_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const user_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().ngIf;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r2.getInitials(user_r2.name));
  }
}
function ProfileComponent_div_0_div_35_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 35)(1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "groups");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4, "You haven't joined any stokvels yet.");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ProfileComponent_div_0_div_35_div_1_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r2.navigateTo("/stokvels"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6, "Browse Stokvels");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
}
function ProfileComponent_div_0_div_35_div_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ProfileComponent_div_0_div_35_div_2_div_1_Template_div_click_0_listener() {
      const s_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r5).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r2.navigateTo("/stokvels/" + s_r6.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 39)(2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, "savings");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "div", 41)(11, "span")(12, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](13, "group");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "span")(16, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](17, "payments");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](19, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](20, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const s_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("admin", s_r6.isOwner || s_r6.currentUserRole === "ADMIN");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", s_r6.isOwner || s_r6.currentUserRole === "ADMIN" ? "Admin" : "Member", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](s_r6.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](s_r6.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate2"](" ", s_r6.totalMembers ?? s_r6.memberCount + s_r6.adminCount, "/", s_r6.maxMembers);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" R", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](19, 10, s_r6.monthlyContribution), "/mo");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", "st-" + (s_r6.status == null ? null : s_r6.status.toLowerCase()));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](s_r6.status);
  }
}
function ProfileComponent_div_0_div_35_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, ProfileComponent_div_0_div_35_div_2_div_1_Template, 22, 12, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const stokvels_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", stokvels_r7);
  }
}
function ProfileComponent_div_0_div_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, ProfileComponent_div_0_div_35_div_1_Template, 7, 0, "div", 33)(2, ProfileComponent_div_0_div_35_div_2_Template, 2, 1, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const stokvels_r7 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", stokvels_r7.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", stokvels_r7.length > 0);
  }
}
function ProfileComponent_div_0_div_38_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 35)(1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "receipt_long");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4, "No transactions yet. Make a deposit or contribute to a stokvel.");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ProfileComponent_div_0_div_38_div_1_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r9);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r2.navigateTo("/wallet"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6, "Go to Wallet");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
}
function ProfileComponent_div_0_div_38_div_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 47)(1, "div", 48)(2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "div", 49)(5, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](9, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](12, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const tx_r10 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵstyleProp"]("color", ctx_r2.getTxColor(tx_r10.type));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r2.getTxIcon(tx_r10.type));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](tx_r10.description || tx_r10.reference);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](9, 11, tx_r10.createdAt, "medium"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵstyleProp"]("color", ctx_r2.getTxColor(tx_r10.type));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate2"](" ", tx_r10.type === "CREDIT" ? "+" : "-", "R", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](12, 14, tx_r10.amount, "1.2-2"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", "s-" + (tx_r10.status == null ? null : tx_r10.status.toLowerCase()));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](tx_r10.status);
  }
}
function ProfileComponent_div_0_div_38_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, ProfileComponent_div_0_div_38_div_2_div_1_Template, 15, 17, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const txs_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", txs_r11);
  }
}
function ProfileComponent_div_0_div_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, ProfileComponent_div_0_div_38_div_1_Template, 7, 0, "div", 33)(2, ProfileComponent_div_0_div_38_div_2_Template, 2, 1, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ProfileComponent_div_0_div_38_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r8);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r2.navigateTo("/wallet"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5, "open_in_new");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6, " Full Wallet View ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const txs_r11 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", txs_r11.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", txs_r11.length > 0);
  }
}
function ProfileComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 2)(1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "div", 5)(4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](5, ProfileComponent_div_0_img_5_Template, 1, 2, "img", 7)(6, ProfileComponent_div_0_div_6_Template, 2, 1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "div", 9)(8, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "div", 11)(13, "span", 12)(14, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](15, "verified_user");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](16, " Auth0 Account");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](17, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ProfileComponent_div_0_Template_span_click_17_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r1);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r2.navigateTo("/wallet"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](18, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](19, "account_balance_wallet");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](21, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](22, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](23, "div", 14)(24, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ProfileComponent_div_0_Template_button_click_24_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r1);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r2.navigateTo("/wallet"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](25, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](26, "account_balance_wallet");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](27, " My Wallet ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](28, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ProfileComponent_div_0_Template_button_click_28_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r1);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r2.navigateTo("/dashboard"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](29, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](30, "dashboard");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](31, " Dashboard ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](32, "div", 17)(33, "mat-tab-group", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayListener"]("selectedIndexChange", function ProfileComponent_div_0_Template_mat_tab_group_selectedIndexChange_33_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r1);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayBindingSet"](ctx_r2.activeTab, $event) || (ctx_r2.activeTab = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](34, "mat-tab", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](35, ProfileComponent_div_0_div_35_Template, 3, 2, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](36, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](37, "mat-tab", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](38, ProfileComponent_div_0_div_38_Template, 7, 2, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](39, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](40, "mat-tab", 22)(41, "div", 23)(42, "div", 24)(43, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](44, "person");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](45, "div")(46, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](47, "Display Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](48, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](49);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](50, "div", 24)(51, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](52, "email");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](53, "div")(54, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](55, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](56, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](57);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](58, "div", 24)(59, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](60, "fingerprint");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](61, "div")(62, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](63, "User ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](64, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](65);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](66, "div", 28)(67, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](68, "info_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](69, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](70, "Account details are managed by Auth0. To update your name, email or password, please contact support.");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](71, "div", 29)(72, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ProfileComponent_div_0_Template_button_click_72_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r1);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r2.navigateTo("/contact-us"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](73, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](74, "help_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](75, " Contact Support ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()()()();
  }
  if (rf & 2) {
    const user_r2 = ctx.ngIf;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", user_r2.picture);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !user_r2.picture);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](user_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](user_r2.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" Balance: R", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](22, 13, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](21, 11, ctx_r2.walletBalance$), "1.2-2"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayProperty"]("selectedIndex", ctx_r2.activeTab);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](36, 16, ctx_r2.userStokvels$));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](39, 18, ctx_r2.recentTransactions$));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](user_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](user_r2.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](user_r2.id);
  }
}
function ProfileComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "mat-spinner", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, "Loading your profile\u2026");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
}
class ProfileComponent {
  constructor(userService, stokvelService, txService, router, snack) {
    this.userService = userService;
    this.stokvelService = stokvelService;
    this.txService = txService;
    this.router = router;
    this.snack = snack;
    this.activeTab = 0;
    this.user$ = this.userService.user$;
    this.userStokvels$ = this.user$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMap)(user => user?.id ? this.stokvelService.getUserStokvels(user.id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)([]))) : (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)([])));
    this.recentTransactions$ = this.txService.getRecentTransactions(10).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)([])));
    this.walletBalance$ = this.txService.getBalance().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(res => res.balance ?? 0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)(0)));
  }
  ngOnInit() {}
  getInitials(name) {
    if (!name) return '?';
    return name.split(' ').slice(0, 2).map(w => w[0]).join('').toUpperCase();
  }
  getTxIcon(type) {
    return type === 'CREDIT' ? 'add_circle' : 'remove_circle';
  }
  getTxColor(type) {
    return type === 'CREDIT' ? '#10b981' : '#ef4444';
  }
  navigateTo(path) {
    this.router.navigate([path]);
  }
  static #_ = _staticBlock = () => (this.ɵfac = function ProfileComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_user_user_service_service__WEBPACK_IMPORTED_MODULE_10__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_stokvel_stokvel_service__WEBPACK_IMPORTED_MODULE_11__.StokvelService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_stokvel_transaction_service__WEBPACK_IMPORTED_MODULE_12__.TransactionService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_14__.MatSnackBar));
  }, this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
    type: ProfileComponent,
    selectors: [["app-profile"]],
    decls: 4,
    vars: 6,
    consts: [["class", "profile-page", 4, "ngIf"], ["class", "profile-loading", 4, "ngIf"], [1, "profile-page"], [1, "profile-hero"], [1, "hero-bg"], [1, "hero-content"], [1, "avatar-wrap"], ["class", "avatar-img", 3, "src", "alt", 4, "ngIf"], ["class", "avatar-initials", 4, "ngIf"], [1, "hero-text"], [1, "hero-email"], [1, "hero-badges"], [1, "badge"], [1, "badge", "wallet-badge", 3, "click"], [1, "hero-actions"], [1, "btn-action", 3, "click"], [1, "btn-action", "secondary", 3, "click"], [1, "profile-body"], [1, "profile-tabs", 3, "selectedIndexChange", "selectedIndex"], ["label", "My Stokvels"], ["class", "tab-content", 4, "ngIf"], ["label", "Transaction History"], ["label", "Account Info"], [1, "tab-content", "account-info"], [1, "info-card"], [1, "info-label"], [1, "info-value"], [1, "info-value", "id-mono"], [1, "account-note"], [1, "account-actions"], [1, "avatar-img", 3, "src", "alt"], [1, "avatar-initials"], [1, "tab-content"], ["class", "empty-state", 4, "ngIf"], ["class", "stokvel-grid", 4, "ngIf"], [1, "empty-state"], [1, "stokvel-grid"], ["class", "stokvel-card", 3, "click", 4, "ngFor", "ngForOf"], [1, "stokvel-card", 3, "click"], [1, "sc-header"], [1, "role-tag"], [1, "sc-stats"], [1, "sc-status", 3, "ngClass"], ["class", "tx-list", 4, "ngIf"], [1, "btn-action", "mt-16", 3, "click"], [1, "tx-list"], ["class", "tx-row", 4, "ngFor", "ngForOf"], [1, "tx-row"], [1, "tx-icon"], [1, "tx-info"], [1, "tx-desc"], [1, "tx-date"], [1, "tx-amount"], [1, "tx-status", 3, "ngClass"], [1, "profile-loading"], ["diameter", "48"]],
    template: function ProfileComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](0, ProfileComponent_div_0_Template, 76, 20, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, ProfileComponent_div_2_Template, 4, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](3, "async");
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](1, 2, ctx.user$));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](3, 4, ctx.user$));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.ReactiveFormsModule, _material_module__WEBPACK_IMPORTED_MODULE_3__.MaterialModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__.MatIcon, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_16__.MatProgressSpinner, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_17__.MatTab, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_17__.MatTabGroup, _angular_common__WEBPACK_IMPORTED_MODULE_0__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_0__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_0__.DatePipe],
    styles: ["@charset \"UTF-8\";\n.profile-page[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  background: #f0f4f8;\n}\n\n.profile-hero[_ngcontent-%COMP%] {\n  position: relative;\n  background: linear-gradient(135deg, #1e3a5f 0%, #2563eb 60%, #7c3aed 100%);\n  padding: 48px 24px 40px;\n  overflow: hidden;\n}\n\n.hero-bg[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background: radial-gradient(ellipse at 80% 50%, rgba(124, 58, 237, 0.3) 0%, transparent 60%);\n}\n\n.hero-content[_ngcontent-%COMP%] {\n  position: relative;\n  max-width: 900px;\n  margin: 0 auto;\n  display: flex;\n  gap: 24px;\n  align-items: center;\n  flex-wrap: wrap;\n}\n\n.avatar-wrap[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n}\n\n.avatar-img[_ngcontent-%COMP%] {\n  width: 90px;\n  height: 90px;\n  border-radius: 50%;\n  border: 3px solid rgba(255, 255, 255, 0.4);\n  object-fit: cover;\n}\n\n.avatar-initials[_ngcontent-%COMP%] {\n  width: 90px;\n  height: 90px;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.2);\n  border: 3px solid rgba(255, 255, 255, 0.4);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 2rem;\n  font-weight: 700;\n  color: #fff;\n}\n\n.hero-text[_ngcontent-%COMP%] {\n  flex: 1;\n  color: #fff;\n}\n\n.hero-text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0 0 4px;\n  font-size: 1.8rem;\n}\n\n.hero-email[_ngcontent-%COMP%] {\n  opacity: 0.8;\n  margin: 0 0 12px;\n}\n\n.hero-badges[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n\n.badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  background: rgba(255, 255, 255, 0.15);\n  border: 1px solid rgba(255, 255, 255, 0.25);\n  padding: 4px 12px;\n  border-radius: 20px;\n  font-size: 0.8rem;\n  color: #fff;\n}\n.badge[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n\n.wallet-badge[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.wallet-badge[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.25);\n}\n\n.hero-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n\n.btn-action[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 20px;\n  border-radius: 8px;\n  background: rgba(255, 255, 255, 0.9);\n  color: #1e3a5f;\n  border: none;\n  cursor: pointer;\n  font-weight: 600;\n  transition: all 0.2s;\n}\n.btn-action[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n}\n\n.btn-action[_ngcontent-%COMP%]:hover {\n  background: #fff;\n  transform: translateY(-1px);\n}\n\n.btn-action.secondary[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.15);\n  color: #fff;\n  border: 1px solid rgba(255, 255, 255, 0.3);\n}\n\n.btn-action.secondary[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.25);\n}\n\n.mt-16[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n\n\n\n.profile-body[_ngcontent-%COMP%] {\n  max-width: 900px;\n  margin: 0 auto;\n  padding: 24px 16px;\n}\n\n.profile-tabs[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);\n  overflow: hidden;\n}\n\n.tab-content[_ngcontent-%COMP%] {\n  padding: 24px;\n  min-height: 200px;\n}\n\n\n\n.stokvel-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));\n  gap: 16px;\n}\n\n.stokvel-card[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  padding: 16px;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n\n.stokvel-card[_ngcontent-%COMP%]:hover {\n  border-color: #2563eb;\n  box-shadow: 0 4px 16px rgba(37, 99, 235, 0.1);\n  transform: translateY(-2px);\n}\n\n.sc-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 8px;\n}\n\n.sc-header[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #2563eb;\n}\n\n.role-tag[_ngcontent-%COMP%] {\n  padding: 2px 10px;\n  border-radius: 12px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  background: #dbeafe;\n  color: #1d4ed8;\n}\n\n.role-tag.admin[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #92400e;\n}\n\n.stokvel-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 4px;\n  font-size: 1rem;\n  color: #1e293b;\n}\n\n.stokvel-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: #64748b;\n  margin: 0 0 10px;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n\n.sc-stats[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  font-size: 0.8rem;\n  color: #64748b;\n}\n\n.sc-stats[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.sc-stats[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n}\n\n.sc-status[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 600;\n  padding: 2px 8px;\n  border-radius: 8px;\n  background: #d1fae5;\n  color: #065f46;\n  margin-top: 8px;\n  display: inline-block;\n}\n\n.sc-status.st-pending[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #92400e;\n}\n\n.sc-status.st-closed[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #991b1b;\n}\n\n\n\n.tx-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.tx-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px;\n  border-radius: 10px;\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n}\n\n.tx-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n}\n\n.tx-info[_ngcontent-%COMP%] {\n  flex: 1;\n}\n\n.tx-desc[_ngcontent-%COMP%] {\n  display: block;\n  font-weight: 500;\n  font-size: 0.9rem;\n}\n\n.tx-date[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: #94a3b8;\n}\n\n.tx-amount[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 1rem;\n  white-space: nowrap;\n}\n\n.tx-status[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  padding: 2px 8px;\n  border-radius: 8px;\n  background: #d1fae5;\n  color: #065f46;\n}\n\n.tx-status.s-pending[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #92400e;\n}\n\n.tx-status.s-failed[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #991b1b;\n}\n\n\n\n.account-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n\n.info-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding: 14px 18px;\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n}\n\n.info-card[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #2563eb;\n}\n\n.info-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.78rem;\n  color: #94a3b8;\n}\n\n.info-value[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #1e293b;\n}\n\n.id-mono[_ngcontent-%COMP%] {\n  font-family: monospace;\n  font-size: 0.82rem;\n}\n\n.account-note[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  align-items: flex-start;\n  padding: 12px;\n  background: #eff6ff;\n  border-radius: 10px;\n  font-size: 0.85rem;\n  color: #1e40af;\n}\n.account-note[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #2563eb;\n  margin-top: 2px;\n}\n\n.account-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n}\n\n.account-actions[_ngcontent-%COMP%]   .btn-action[_ngcontent-%COMP%] {\n  background: #2563eb;\n  color: #fff;\n}\n\n.account-actions[_ngcontent-%COMP%]   .btn-action[_ngcontent-%COMP%]:hover {\n  background: #1d4ed8;\n}\n\n\n\n.empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 12px;\n  padding: 40px;\n  color: #94a3b8;\n  text-align: center;\n}\n\n.empty-state[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  color: #cbd5e1;\n}\n\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.empty-state[_ngcontent-%COMP%]   .btn-action[_ngcontent-%COMP%] {\n  background: #2563eb;\n  color: #fff;\n}\n\n\n\n.profile-loading[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: 60vh;\n  gap: 16px;\n  color: #64748b;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUFoQjtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7QUFFRjs7QUFDQTtFQUNFLGtCQUFBO0VBQ0EsMEVBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FBRUY7O0FBQ0E7RUFDRSxrQkFBQTtFQUFvQixRQUFBO0VBQ3BCLDRGQUFBO0FBR0Y7O0FBQUE7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBR0Y7O0FBQUE7RUFBZSxjQUFBO0FBSWY7O0FBSEE7RUFDRSxXQUFBO0VBQWEsWUFBQTtFQUNiLGtCQUFBO0VBQ0EsMENBQUE7RUFDQSxpQkFBQTtBQU9GOztBQUxBO0VBQ0UsV0FBQTtFQUFhLFlBQUE7RUFDYixrQkFBQTtFQUNBLG9DQUFBO0VBQ0EsMENBQUE7RUFDQSxhQUFBO0VBQWUsbUJBQUE7RUFBcUIsdUJBQUE7RUFDcEMsZUFBQTtFQUFpQixnQkFBQTtFQUFrQixXQUFBO0FBYXJDOztBQVZBO0VBQWEsT0FBQTtFQUFTLFdBQUE7QUFldEI7O0FBZEE7RUFBZ0IsZUFBQTtFQUFpQixpQkFBQTtBQW1CakM7O0FBbEJBO0VBQWMsWUFBQTtFQUFjLGdCQUFBO0FBdUI1Qjs7QUFyQkE7RUFBZSxhQUFBO0VBQWUsU0FBQTtFQUFXLGVBQUE7QUEyQnpDOztBQTFCQTtFQUNFLG9CQUFBO0VBQXNCLG1CQUFBO0VBQXFCLFFBQUE7RUFDM0MscUNBQUE7RUFDQSwyQ0FBQTtFQUNBLGlCQUFBO0VBQW1CLG1CQUFBO0VBQ25CLGlCQUFBO0VBQW1CLFdBQUE7QUFpQ3JCO0FBaENFO0VBQVcsZUFBQTtBQW1DYjs7QUFqQ0E7RUFBZ0IsZUFBQTtBQXFDaEI7O0FBcENBO0VBQXNCLHFDQUFBO0FBd0N0Qjs7QUF0Q0E7RUFB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QkFBQTtBQUNBO0VBQWdCLGFBQUE7RUFBZSxzQkFBQTtFQUF3QixTQUFBO0FBeUx2RDs7QUF4TEE7RUFDRSxhQUFBO0VBQWUsbUJBQUE7RUFBcUIsU0FBQTtFQUNwQyxrQkFBQTtFQUFvQixtQkFBQTtFQUNwQix5QkFBQTtFQUEyQixtQkFBQTtBQStMN0I7O0FBN0xBO0VBQXNCLGNBQUE7QUFpTXRCOztBQWhNQTtFQUFjLGNBQUE7RUFBZ0Isa0JBQUE7RUFBb0IsY0FBQTtBQXNNbEQ7O0FBck1BO0VBQWMsZ0JBQUE7RUFBa0IsY0FBQTtBQTBNaEM7O0FBek1BO0VBQVcsc0JBQUE7RUFBd0Isa0JBQUE7QUE4TW5DOztBQTdNQTtFQUNFLGFBQUE7RUFBZSxTQUFBO0VBQVcsdUJBQUE7RUFDMUIsYUFBQTtFQUFlLG1CQUFBO0VBQXFCLG1CQUFBO0VBQ3BDLGtCQUFBO0VBQW9CLGNBQUE7QUFxTnRCO0FBcE5FO0VBQVcsY0FBQTtFQUFnQixlQUFBO0FBd043Qjs7QUF0TkE7RUFBbUIsYUFBQTtFQUFlLFNBQUE7QUEyTmxDOztBQTFOQTtFQUErQixtQkFBQTtFQUFxQixXQUFBO0FBK05wRDs7QUE5TkE7RUFBcUMsbUJBQUE7QUFrT3JDOztBQWhPQSxzQkFBQTtBQUNBO0VBQ0UsYUFBQTtFQUFlLHNCQUFBO0VBQXdCLG1CQUFBO0VBQ3ZDLFNBQUE7RUFBVyxhQUFBO0VBQWUsY0FBQTtFQUFnQixrQkFBQTtBQXdPNUM7O0FBdE9BO0VBQXdCLGVBQUE7RUFBaUIsY0FBQTtBQTJPekM7O0FBMU9BO0VBQWlCLFNBQUE7QUE4T2pCOztBQTdPQTtFQUEyQixtQkFBQTtFQUFxQixXQUFBO0FBa1BoRDs7QUFoUEEsa0JBQUE7QUFDQTtFQUNFLGFBQUE7RUFBZSxzQkFBQTtFQUF3QixtQkFBQTtFQUN2Qyx1QkFBQTtFQUF5QixnQkFBQTtFQUFrQixTQUFBO0VBQVcsY0FBQTtBQXdQeEQiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZmlsZS1wYWdlIHtcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICBiYWNrZ3JvdW5kOiAjZjBmNGY4O1xyXG59XHJcblxyXG4ucHJvZmlsZS1oZXJvIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzFlM2E1ZiAwJSwgIzI1NjNlYiA2MCUsICM3YzNhZWQgMTAwJSk7XHJcbiAgcGFkZGluZzogNDhweCAyNHB4IDQwcHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLmhlcm8tYmcge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTsgaW5zZXQ6IDA7XHJcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGVsbGlwc2UgYXQgODAlIDUwJSwgcmdiYSgxMjQsNTgsMjM3LDAuMykgMCUsIHRyYW5zcGFyZW50IDYwJSk7XHJcbn1cclxuXHJcbi5oZXJvLWNvbnRlbnQge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXgtd2lkdGg6IDkwMHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZ2FwOiAyNHB4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG59XHJcblxyXG4uYXZhdGFyLXdyYXAgeyBmbGV4LXNocmluazogMDsgfVxyXG4uYXZhdGFyLWltZyB7XHJcbiAgd2lkdGg6IDkwcHg7IGhlaWdodDogOTBweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYm9yZGVyOiAzcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwLjQpO1xyXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xyXG59XHJcbi5hdmF0YXItaW5pdGlhbHMge1xyXG4gIHdpZHRoOiA5MHB4OyBoZWlnaHQ6IDkwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsMC4yKTtcclxuICBib3JkZXI6IDNweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuNCk7XHJcbiAgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAycmVtOyBmb250LXdlaWdodDogNzAwOyBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLmhlcm8tdGV4dCB7IGZsZXg6IDE7IGNvbG9yOiAjZmZmOyB9XHJcbi5oZXJvLXRleHQgaDEgeyBtYXJnaW46IDAgMCA0cHg7IGZvbnQtc2l6ZTogMS44cmVtOyB9XHJcbi5oZXJvLWVtYWlsIHsgb3BhY2l0eTogMC44OyBtYXJnaW46IDAgMCAxMnB4OyB9XHJcblxyXG4uaGVyby1iYWRnZXMgeyBkaXNwbGF5OiBmbGV4OyBnYXA6IDEwcHg7IGZsZXgtd3JhcDogd3JhcDsgfVxyXG4uYmFkZ2Uge1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDZweDtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuMTUpO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC4yNSk7XHJcbiAgcGFkZGluZzogNHB4IDEycHg7IGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgZm9udC1zaXplOiAwLjhyZW07IGNvbG9yOiAjZmZmO1xyXG4gIG1hdC1pY29uIHsgZm9udC1zaXplOiAxcmVtOyB9XHJcbn1cclxuLndhbGxldC1iYWRnZSB7IGN1cnNvcjogcG9pbnRlcjsgfVxyXG4ud2FsbGV0LWJhZGdlOmhvdmVyIHsgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwwLjI1KTsgfVxyXG5cclxuLmhlcm8tYWN0aW9ucyB7IGRpc3BsYXk6IGZsZXg7IGdhcDogMTJweDsgZmxleC13cmFwOiB3cmFwOyB9XHJcbi5idG4tYWN0aW9uIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZ2FwOiA4cHg7XHJcbiAgcGFkZGluZzogMTBweCAyMHB4OyBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwwLjkpOyBjb2xvcjogIzFlM2E1ZjtcclxuICBib3JkZXI6IG5vbmU7IGN1cnNvcjogcG9pbnRlcjsgZm9udC13ZWlnaHQ6IDYwMDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcclxuICBtYXQtaWNvbiB7IGZvbnQtc2l6ZTogMS4xcmVtOyB9XHJcbn1cclxuLmJ0bi1hY3Rpb246aG92ZXIgeyBiYWNrZ3JvdW5kOiAjZmZmOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7IH1cclxuLmJ0bi1hY3Rpb24uc2Vjb25kYXJ5IHsgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwwLjE1KTsgY29sb3I6ICNmZmY7IGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC4zKTsgfVxyXG4uYnRuLWFjdGlvbi5zZWNvbmRhcnk6aG92ZXIgeyBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuMjUpOyB9XHJcbi5tdC0xNiB7IG1hcmdpbi10b3A6IDE2cHg7IH1cclxuXHJcbi8qIMOiwpTCgMOiwpTCgCBCb2R5IMOiwpTCgMOiwpTCgCAqL1xyXG4ucHJvZmlsZS1ib2R5IHtcclxuICBtYXgtd2lkdGg6IDkwMHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIHBhZGRpbmc6IDI0cHggMTZweDtcclxufVxyXG5cclxuLnByb2ZpbGUtdGFicyB7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDEycHggcmdiYSgwLDAsMCwwLjA4KTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4udGFiLWNvbnRlbnQge1xyXG4gIHBhZGRpbmc6IDI0cHg7XHJcbiAgbWluLWhlaWdodDogMjAwcHg7XHJcbn1cclxuXHJcbi8qIMOiwpTCgMOiwpTCgCBTdG9rdmVscyBncmlkIMOiwpTCgMOiwpTCgCAqL1xyXG4uc3Rva3ZlbC1ncmlkIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDI2MHB4LCAxZnIpKTtcclxuICBnYXA6IDE2cHg7XHJcbn1cclxuLnN0b2t2ZWwtY2FyZCB7XHJcbiAgYmFja2dyb3VuZDogI2Y4ZmFmYztcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZTJlOGYwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgcGFkZGluZzogMTZweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XHJcbn1cclxuLnN0b2t2ZWwtY2FyZDpob3ZlciB7IGJvcmRlci1jb2xvcjogIzI1NjNlYjsgYm94LXNoYWRvdzogMCA0cHggMTZweCByZ2JhKDM3LDk5LDIzNSwwLjEpOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7IH1cclxuLnNjLWhlYWRlciB7IGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGdhcDogOHB4OyBtYXJnaW4tYm90dG9tOiA4cHg7IH1cclxuLnNjLWhlYWRlciBtYXQtaWNvbiB7IGNvbG9yOiAjMjU2M2ViOyB9XHJcbi5yb2xlLXRhZyB7IHBhZGRpbmc6IDJweCAxMHB4OyBib3JkZXItcmFkaXVzOiAxMnB4OyBmb250LXNpemU6IDAuNzVyZW07IGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgYmFja2dyb3VuZDogI2RiZWFmZTsgY29sb3I6ICMxZDRlZDg7IH1cclxuLnJvbGUtdGFnLmFkbWluIHsgYmFja2dyb3VuZDogI2ZlZjNjNzsgY29sb3I6ICM5MjQwMGU7IH1cclxuLnN0b2t2ZWwtY2FyZCBoMyB7IG1hcmdpbjogMCAwIDRweDsgZm9udC1zaXplOiAxcmVtOyBjb2xvcjogIzFlMjkzYjsgfVxyXG4uc3Rva3ZlbC1jYXJkIHAgeyBmb250LXNpemU6IDAuODVyZW07IGNvbG9yOiAjNjQ3NDhiOyBtYXJnaW46IDAgMCAxMHB4OyBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAtd2Via2l0LWxpbmUtY2xhbXA6IDI7IC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7IG92ZXJmbG93OiBoaWRkZW47IH1cclxuLnNjLXN0YXRzIHsgZGlzcGxheTogZmxleDsgZ2FwOiAxMnB4OyBmb250LXNpemU6IDAuOHJlbTsgY29sb3I6ICM2NDc0OGI7IH1cclxuLnNjLXN0YXRzIHNwYW4geyBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDRweDsgbWF0LWljb24geyBmb250LXNpemU6IDAuOXJlbTsgfSB9XHJcbi5zYy1zdGF0dXMgeyBmb250LXNpemU6IDAuNzVyZW07IGZvbnQtd2VpZ2h0OiA2MDA7IHBhZGRpbmc6IDJweCA4cHg7IGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBiYWNrZ3JvdW5kOiAjZDFmYWU1OyBjb2xvcjogIzA2NWY0NjsgbWFyZ2luLXRvcDogOHB4OyBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IH1cclxuLnNjLXN0YXR1cy5zdC1wZW5kaW5nIHsgYmFja2dyb3VuZDogI2ZlZjNjNzsgY29sb3I6ICM5MjQwMGU7IH1cclxuLnNjLXN0YXR1cy5zdC1jbG9zZWQgeyBiYWNrZ3JvdW5kOiAjZmVlMmUyOyBjb2xvcjogIzk5MWIxYjsgfVxyXG5cclxuLyogw6LClMKAw6LClMKAIFRyYW5zYWN0aW9uIGxpc3Qgw6LClMKAw6LClMKAICovXHJcbi50eC1saXN0IHsgZGlzcGxheTogZmxleDsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgZ2FwOiAxMHB4OyB9XHJcbi50eC1yb3cge1xyXG4gIGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGdhcDogMTJweDtcclxuICBwYWRkaW5nOiAxMnB4OyBib3JkZXItcmFkaXVzOiAxMHB4OyBiYWNrZ3JvdW5kOiAjZjhmYWZjO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlMmU4ZjA7XHJcbn1cclxuLnR4LWljb24gbWF0LWljb24geyBmb250LXNpemU6IDEuNXJlbTsgfVxyXG4udHgtaW5mbyB7IGZsZXg6IDE7IH1cclxuLnR4LWRlc2MgeyBkaXNwbGF5OiBibG9jazsgZm9udC13ZWlnaHQ6IDUwMDsgZm9udC1zaXplOiAwLjlyZW07IH1cclxuLnR4LWRhdGUgeyBmb250LXNpemU6IDAuNzhyZW07IGNvbG9yOiAjOTRhM2I4OyB9XHJcbi50eC1hbW91bnQgeyBmb250LXdlaWdodDogNzAwOyBmb250LXNpemU6IDFyZW07IHdoaXRlLXNwYWNlOiBub3dyYXA7IH1cclxuLnR4LXN0YXR1cyB7IGZvbnQtc2l6ZTogMC43MnJlbTsgcGFkZGluZzogMnB4IDhweDsgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIGJhY2tncm91bmQ6ICNkMWZhZTU7IGNvbG9yOiAjMDY1ZjQ2OyB9XHJcbi50eC1zdGF0dXMucy1wZW5kaW5nIHsgYmFja2dyb3VuZDogI2ZlZjNjNzsgY29sb3I6ICM5MjQwMGU7IH1cclxuLnR4LXN0YXR1cy5zLWZhaWxlZCB7IGJhY2tncm91bmQ6ICNmZWUyZTI7IGNvbG9yOiAjOTkxYjFiOyB9XHJcblxyXG4vKiDDosKUwoDDosKUwoAgQWNjb3VudCBpbmZvIMOiwpTCgMOiwpTCgCAqL1xyXG4uYWNjb3VudC1pbmZvIHsgZGlzcGxheTogZmxleDsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgZ2FwOiAxMnB4OyB9XHJcbi5pbmZvLWNhcmQge1xyXG4gIGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGdhcDogMTRweDtcclxuICBwYWRkaW5nOiAxNHB4IDE4cHg7IGJhY2tncm91bmQ6ICNmOGZhZmM7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2UyZThmMDsgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG4uaW5mby1jYXJkIG1hdC1pY29uIHsgY29sb3I6ICMyNTYzZWI7IH1cclxuLmluZm8tbGFiZWwgeyBkaXNwbGF5OiBibG9jazsgZm9udC1zaXplOiAwLjc4cmVtOyBjb2xvcjogIzk0YTNiODsgfVxyXG4uaW5mby12YWx1ZSB7IGZvbnQtd2VpZ2h0OiA2MDA7IGNvbG9yOiAjMWUyOTNiOyB9XHJcbi5pZC1tb25vIHsgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTsgZm9udC1zaXplOiAwLjgycmVtOyB9XHJcbi5hY2NvdW50LW5vdGUge1xyXG4gIGRpc3BsYXk6IGZsZXg7IGdhcDogMTBweDsgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgcGFkZGluZzogMTJweDsgYmFja2dyb3VuZDogI2VmZjZmZjsgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBmb250LXNpemU6IDAuODVyZW07IGNvbG9yOiAjMWU0MGFmO1xyXG4gIG1hdC1pY29uIHsgY29sb3I6ICMyNTYzZWI7IG1hcmdpbi10b3A6IDJweDsgfVxyXG59XHJcbi5hY2NvdW50LWFjdGlvbnMgeyBkaXNwbGF5OiBmbGV4OyBnYXA6IDEycHg7IH1cclxuLmFjY291bnQtYWN0aW9ucyAuYnRuLWFjdGlvbiB7IGJhY2tncm91bmQ6ICMyNTYzZWI7IGNvbG9yOiAjZmZmOyB9XHJcbi5hY2NvdW50LWFjdGlvbnMgLmJ0bi1hY3Rpb246aG92ZXIgeyBiYWNrZ3JvdW5kOiAjMWQ0ZWQ4OyB9XHJcblxyXG4vKiDDosKUwoDDosKUwoAgRW1wdHkgc3RhdGUgw6LClMKAw6LClMKAICovXHJcbi5lbXB0eS1zdGF0ZSB7XHJcbiAgZGlzcGxheTogZmxleDsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDEycHg7IHBhZGRpbmc6IDQwcHg7IGNvbG9yOiAjOTRhM2I4OyB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmVtcHR5LXN0YXRlIG1hdC1pY29uIHsgZm9udC1zaXplOiAzcmVtOyBjb2xvcjogI2NiZDVlMTsgfVxyXG4uZW1wdHktc3RhdGUgcCB7IG1hcmdpbjogMDsgfVxyXG4uZW1wdHktc3RhdGUgLmJ0bi1hY3Rpb24geyBiYWNrZ3JvdW5kOiAjMjU2M2ViOyBjb2xvcjogI2ZmZjsgfVxyXG5cclxuLyogw6LClMKAw6LClMKAIExvYWRpbmcgw6LClMKAw6LClMKAICovXHJcbi5wcm9maWxlLWxvYWRpbmcge1xyXG4gIGRpc3BsYXk6IGZsZXg7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IG1pbi1oZWlnaHQ6IDYwdmg7IGdhcDogMTZweDsgY29sb3I6ICM2NDc0OGI7XHJcbn1cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  }));
}
_staticBlock();

/***/ })

}]);
//# sourceMappingURL=src_app_pages_profile_profile_component_ts.js.map