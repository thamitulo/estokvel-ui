"use strict";
(self["webpackChunkestokvel_ui"] = self["webpackChunkestokvel_ui"] || []).push([["src_app_components_stokvel-list_stokvel-list_component_ts"],{

/***/ 9617:
/*!*******************************************************************!*\
  !*** ./src/app/components/stokvel-list/stokvel-list.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StokvelListComponent: () => (/* binding */ StokvelListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ 7760);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 5422);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 4487);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 1873);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 9452);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 1318);
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../material.module */ 9439);
/* harmony import */ var _services_stokvel_stokvel_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services/stokvel/stokvel.service */ 7093);
/* harmony import */ var _utils_StokvelUtils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../utils/StokvelUtils */ 9259);
/* harmony import */ var _services_user_user_service_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../services/user/user-service.service */ 2915);
/* harmony import */ var _stokvel_join_join_stokvel_modal__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../stokvel-join/join-stokvel-modal */ 3570);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 2481);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/icon */ 3840);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/button */ 9885);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/paginator */ 4624);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/tooltip */ 9710);
var _staticBlock;




















const _c0 = () => [1, 2, 3, 4, 5, 6];
const _c1 = () => [6, 9, 12];
function StokvelListComponent_button_43_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function StokvelListComponent_button_43_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.searchControl.setValue(""));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
}
function StokvelListComponent_div_69_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 28)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](3, "div", 29)(4, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function StokvelListComponent_div_69_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.viewMode = "grid");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](5, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](6, "grid_view");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](7, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function StokvelListComponent_div_69_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.viewMode = "list");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](8, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](9, "view_list");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate2"]("", ctx_r1.filteredStokvels.length, " stokvel", ctx_r1.filteredStokvels.length !== 1 ? "s" : "", " found");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵclassProp"]("active", ctx_r1.viewMode === "grid");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵclassProp"]("active", ctx_r1.viewMode === "list");
  }
}
function StokvelListComponent_div_70_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](1, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](2, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](3, "div", 37)(4, "div", 38)(5, "div", 39)(6, "div", 40)(7, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
}
function StokvelListComponent_div_70_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](1, StokvelListComponent_div_70_div_1_Template, 8, 0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpureFunction0"](1, _c0));
  }
}
function StokvelListComponent_div_71_div_1_div_47_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 70)(1, "div", 71)(2, "span", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](3, "Towards target");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](4, "span", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](6, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](7, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](8, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](9, "div", 76)(10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](12, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](13, "span", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](15, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const stokvel_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind2"](6, 6, ctx_r1.progress(stokvel_r5), "1.0-0"), "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵstyleProp"]("width", ctx_r1.progress(stokvel_r5), "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngClass", "prog-" + ctx_r1.progressColor(stokvel_r5));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"]("R", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](12, 9, ctx_r1.getCollectedAmount(stokvel_r5)), " raised");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"]("R", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](15, 11, stokvel_r5.targetAmount), " goal");
  }
}
function StokvelListComponent_div_71_div_1_span_53_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1, "\uD83C\uDF89 Goal Reached!");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}
function StokvelListComponent_div_71_div_1_button_59_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "button", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function StokvelListComponent_div_71_div_1_button_59_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);
      const stokvel_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.manageStokvel(stokvel_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "manage_accounts");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](3, " Manage ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}
function StokvelListComponent_div_71_div_1_ng_container_60_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "span", 80)(2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](3, "check_circle");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](4, " Member ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](5, "button", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function StokvelListComponent_div_71_div_1_ng_container_60_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);
      const stokvel_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.messageAdmins(stokvel_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](6, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](7, "mail_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](8, " Message Admins ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](9, "button", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function StokvelListComponent_div_71_div_1_ng_container_60_Template_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);
      const stokvel_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.leaveStokvel(stokvel_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](10, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](11, "exit_to_app");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](12, " Leave ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerEnd"]();
  }
}
function StokvelListComponent_div_71_div_1_button_61_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "button", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function StokvelListComponent_div_71_div_1_button_61_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);
      const stokvel_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.joinStokvel(stokvel_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "person_add");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](3, " Request to Join ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}
function StokvelListComponent_div_71_div_1_span_62_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span", 84)(1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "block");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](3, " Group Full ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}
function StokvelListComponent_div_71_div_1_span_63_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span", 85)(1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "lock");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](3, " Private \u00B7 Invite Only ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}
function StokvelListComponent_div_71_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 43)(1, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](2, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](3, "div", 46)(4, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](6, "div", 47)(7, "span", 48)(8, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](11, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](13, "div", 50)(14, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](16, "h3", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](18, "p", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](20, "div", 54)(21, "div", 55)(22, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](23, "group");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](24, "div")(25, "span", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](27, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](29, "div", 55)(30, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](31, "payments");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](32, "div")(33, "span", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](35, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](36, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](37, "/ month");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](38, "div", 55)(39, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](40, "sync");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](41, "div")(42, "span", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](43);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](44, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](45, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](46, "payout");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](47, StokvelListComponent_div_71_div_1_div_47_Template, 16, 13, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](48, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](49, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](50, "div", 61)(51, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](52);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](53, StokvelListComponent_div_71_div_1_span_53_Template, 2, 0, "span", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](54, "div", 63)(55, "button", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function StokvelListComponent_div_71_div_1_Template_button_click_55_listener() {
      const stokvel_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.viewDetail(stokvel_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](56, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](57, "visibility");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](58, " View Details ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](59, StokvelListComponent_div_71_div_1_button_59_Template, 4, 0, "button", 65)(60, StokvelListComponent_div_71_div_1_ng_container_60_Template, 13, 0, "ng-container", 66)(61, StokvelListComponent_div_71_div_1_button_61_Template, 4, 0, "button", 67)(62, StokvelListComponent_div_71_div_1_span_62_Template, 4, 0, "span", 68)(63, StokvelListComponent_div_71_div_1_span_63_Template, 4, 0, "span", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const stokvel_r5 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngClass", ctx_r1.getTypeBannerClass(stokvel_r5.type));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r1.getTypeIcon(stokvel_r5.type));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵclassProp"]("public", stokvel_r5.privacy === "PUBLIC");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](stokvel_r5.privacy === "PUBLIC" ? "lock_open" : "lock");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", stokvel_r5.privacy === "PUBLIC" ? "Public" : "Private", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngClass", "status-" + (stokvel_r5 == null ? null : stokvel_r5.status == null ? null : stokvel_r5.status.toLowerCase()));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", stokvel_r5.status, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r1.getTypeLabel(stokvel_r5.type));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](stokvel_r5.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](stokvel_r5.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](stokvel_r5.totalMembers ?? stokvel_r5.memberCount + stokvel_r5.adminCount);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"]("/ ", stokvel_r5.maxMembers, " members");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"]("R", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](35, 26, stokvel_r5.monthlyContribution));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](44, 28, stokvel_r5.payoutCycle));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", stokvel_r5.targetAmount);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵstyleProp"]("width", ctx_r1.getSeatsFillPercent(stokvel_r5), "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate2"]("", stokvel_r5.maxMembers - (stokvel_r5.totalMembers ?? stokvel_r5.memberCount + stokvel_r5.adminCount), " seat", stokvel_r5.maxMembers - (stokvel_r5.totalMembers ?? stokvel_r5.memberCount + stokvel_r5.adminCount) !== 1 ? "s" : "", " available ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.progress(stokvel_r5) >= 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.isAdmin(stokvel_r5));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", !ctx_r1.isAdmin(stokvel_r5) && ctx_r1.isMember(stokvel_r5));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", !ctx_r1.isMember(stokvel_r5) && ctx_r1.isPublic(stokvel_r5) && !ctx_r1.isFull(stokvel_r5));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", !ctx_r1.isMember(stokvel_r5) && ctx_r1.isPublic(stokvel_r5) && ctx_r1.isFull(stokvel_r5));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", !ctx_r1.isMember(stokvel_r5) && !ctx_r1.isPublic(stokvel_r5));
  }
}
function StokvelListComponent_div_71_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](1, StokvelListComponent_div_71_div_1_Template, 64, 30, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵclassProp"]("list-mode", ctx_r1.viewMode === "list");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", ctx_r1.pagedStokvels)("ngForTrackBy", ctx_r1.trackById);
  }
}
function StokvelListComponent_div_72_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 86)(1, "div", 87)(2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](3, "search_off");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](4, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](5, "No stokvels found");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](7, "Try adjusting your search or filter. New stokvels are added regularly.");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](8, "button", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function StokvelListComponent_div_72_Template_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      ctx_r1.searchControl.setValue("");
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.setFilter("ALL"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](9, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](10, "refresh");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](11, " Clear filters ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
}
function StokvelListComponent_div_73_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 89)(1, "mat-paginator", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("page", function StokvelListComponent_div_73_Template_mat_paginator_page_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.pageChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("length", ctx_r1.filteredStokvels.length)("pageSize", ctx_r1.pageSize)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpureFunction0"](4, _c1))("pageIndex", ctx_r1.pageIndex);
  }
}
class StokvelListComponent {
  constructor() {
    this.stokvelService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_services_stokvel_stokvel_service__WEBPACK_IMPORTED_MODULE_11__.StokvelService);
    this.dialog = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialog);
    this.snack = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__.MatSnackBar);
    this.router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router);
    this.userService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_services_user_user_service_service__WEBPACK_IMPORTED_MODULE_13__.UserService);
    this.sourceStokvels = [];
    this.filteredStokvels = [];
    this.pagedStokvels = [];
    /** IDs of stokvels the current user is already a member/admin of */
    this.joinedStokvelIds = new Set();
    /** IDs of stokvels the current user is an admin of */
    this.adminStokvelIds = new Set();
    this.pageIndex = 0;
    this.pageSize = 9;
    this.isLoading = false;
    this.viewMode = 'grid';
    this.activeFilter = 'ALL';
    this.searchControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('');
  }
  // ── Hero stats
  get totalMembers() {
    // totalMembers = adminCount + memberCount (everyone in the stokvel)
    return this.sourceStokvels.reduce((s, st) => s + (st.totalMembers ?? (st.memberCount ?? 0) + (st.adminCount ?? 0)), 0);
  }
  get totalMonthly() {
    return this.sourceStokvels.reduce((s, st) => s + (st.monthlyContribution ?? 0), 0);
  }
  ngOnInit() {
    this.isLoading = true;
    // Load public stokvels + user membership data in parallel
    (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.forkJoin)({
      public: this.stokvelService.getPublicStokvels(),
      joined: this.stokvelService.getJoinedStokvelIds().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)([]))),
      admin: this.stokvelService.getAdminStokvelIds().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)([])))
    }).subscribe({
      next: ({
        public: response,
        joined,
        admin
      }) => {
        this.joinedStokvelIds = new Set(joined);
        this.adminStokvelIds = new Set(admin);
        this.sourceStokvels = response.content;
        this.filteredStokvels = [...response.content];
        this.updatePagedData();
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
      }
    });
    this.searchControl.valueChanges.subscribe(value => {
      this.applyFilters(value ?? '');
    });
  }
  // ── Membership helpers
  isAdmin(stokvel) {
    return this.adminStokvelIds.has(stokvel.id);
  }
  isMember(stokvel) {
    return this.joinedStokvelIds.has(stokvel.id);
  }
  isPublic(stokvel) {
    return stokvel.privacy?.toUpperCase() === 'PUBLIC';
  }
  isFull(stokvel) {
    const total = stokvel.totalMembers ?? stokvel.memberCount + stokvel.adminCount;
    return total >= stokvel.maxMembers;
  }
  /** Non-member can request to join only if the stokvel is PUBLIC and not full */
  canRequestJoin(stokvel) {
    return !this.isMember(stokvel) && this.isPublic(stokvel) && !this.isFull(stokvel);
  }
  setFilter(type) {
    this.activeFilter = type;
    this.applyFilters(this.searchControl.value ?? '');
  }
  applyFilters(search) {
    const term = search.trim().toLowerCase();
    this.filteredStokvels = this.sourceStokvels.filter(s => {
      const matchesSearch = !term || s.name?.toLowerCase().includes(term) || s.description?.toLowerCase().includes(term) || s.type?.toLowerCase().includes(term);
      const matchesType = this.activeFilter === 'ALL' || s.type?.toUpperCase() === this.activeFilter;
      return matchesSearch && matchesType;
    });
    this.pageIndex = 0;
    this.updatePagedData();
  }
  updatePagedData() {
    const start = this.pageIndex * this.pageSize;
    this.pagedStokvels = this.filteredStokvels.slice(start, start + this.pageSize);
  }
  pageChange(event) {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.updatePagedData();
  }
  trackById(_, s) {
    return s.id;
  }
  // ── StokvelUtils delegates
  progress(stokvel) {
    return _utils_StokvelUtils__WEBPACK_IMPORTED_MODULE_12__.StokvelUtils.getProgress(stokvel);
  }
  progressColor(stokvel) {
    return _utils_StokvelUtils__WEBPACK_IMPORTED_MODULE_12__.StokvelUtils.progressColor(stokvel);
  }
  getCollectedAmount(stokvel) {
    return _utils_StokvelUtils__WEBPACK_IMPORTED_MODULE_12__.StokvelUtils.getCollectedAmount(stokvel);
  }
  getSeatsFillPercent(stokvel) {
    if (!stokvel.maxMembers) return 0;
    const total = stokvel.totalMembers ?? stokvel.memberCount + stokvel.adminCount;
    return Math.min(total / stokvel.maxMembers * 100, 100);
  }
  // ── Type helpers
  getTypeIcon(type) {
    const map = {
      INVESTMENT: 'trending_up',
      PROPERTY: 'home',
      FAMILY: 'diversity_3',
      BURIAL: 'favorite',
      ROTATIONAL: 'autorenew'
    };
    return map[type?.toUpperCase()] ?? 'savings';
  }
  getTypeLabel(type) {
    const map = {
      INVESTMENT: 'Investment Club',
      PROPERTY: 'Property Stokvel',
      FAMILY: 'Family Fund',
      BURIAL: 'Burial Society',
      ROTATIONAL: 'Rotational Savings'
    };
    return map[type?.toUpperCase()] ?? type;
  }
  getTypeBannerClass(type) {
    const map = {
      INVESTMENT: 'banner-investment',
      PROPERTY: 'banner-property',
      FAMILY: 'banner-family',
      BURIAL: 'banner-burial',
      ROTATIONAL: 'banner-rotational'
    };
    return map[type?.toUpperCase()] ?? 'banner-default';
  }
  // ── Actions
  viewDetail(stokvel) {
    this.router.navigate(['/stokvels', stokvel.id]);
  }
  manageStokvel(stokvel) {
    this.router.navigate(['/stokvels', stokvel.id, 'manage']);
  }
  joinStokvel(stokvel) {
    this.userService.user$.subscribe(user => {
      const dialogRef = this.dialog.open(_stokvel_join_join_stokvel_modal__WEBPACK_IMPORTED_MODULE_14__.JoinStokvelModalComponent, {
        width: '500px',
        data: {
          stokvelId: stokvel.id,
          stokvelName: stokvel.name,
          currentUserId: user?.id ?? '',
          userProfile: user,
          monthlyContribution: stokvel.monthlyContribution
        }
      });
      dialogRef.afterClosed().subscribe(result => {
        if (result) this.snack.open('Join request submitted!', 'Close', {
          duration: 4000
        });
      });
    });
  }
  leaveStokvel(stokvel) {
    const confirmed = window.confirm(`Are you sure you want to leave "${stokvel.name}"?\nThis action cannot be undone.`);
    if (!confirmed) return;
    this.stokvelService.leaveStokvel(stokvel.id).subscribe({
      next: () => {
        this.joinedStokvelIds.delete(stokvel.id);
        this.snack.open(`You have left "${stokvel.name}"`, 'Close', {
          duration: 4000
        });
      },
      error: err => {
        const msg = err?.error?.message || 'Could not leave stokvel. You may be the last admin.';
        this.snack.open(msg, 'Close', {
          duration: 5000,
          panelClass: 'error-snackbar'
        });
      }
    });
  }
  messageAdmins(stokvel) {
    if (stokvel.adminMembers?.length) {
      const emails = stokvel.adminMembers.map(a => a.userEmail).join(',');
      window.open(`mailto:${emails}?subject=Re: ${stokvel.name}&body=Hi admin,`, '_blank');
    } else {
      this.snack.open('No admin contact found for this stokvel.', 'Close', {
        duration: 3000
      });
    }
  }
  static #_ = _staticBlock = () => (this.ɵfac = function StokvelListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || StokvelListComponent)();
  }, this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineComponent"]({
    type: StokvelListComponent,
    selectors: [["app-stokvel-list"]],
    decls: 74,
    vars: 24,
    consts: [[1, "browse-container"], [1, "browse-hero"], [1, "hero-bg"], [1, "hero-orb", "orb-1"], [1, "hero-orb", "orb-2"], [1, "hero-orb", "orb-3"], [1, "hero-content"], [1, "hero-text"], [1, "hero-badge"], [1, "hero-highlight"], [1, "hero-stats"], [1, "hero-stat"], [1, "stat-num"], [1, "stat-lbl"], [1, "hero-divider"], [1, "filters-section"], [1, "search-bar-wrap"], [1, "search-icon"], ["placeholder", "Search by name, type or description\u2026", 1, "search-input", 3, "formControl"], ["mat-icon-button", "", "class", "clear-btn", 3, "click", 4, "ngIf"], [1, "filter-chips"], [1, "chip", 3, "click"], ["class", "results-meta", 4, "ngIf"], ["class", "stokvel-grid", 4, "ngIf"], ["class", "stokvel-grid", 3, "list-mode", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], ["class", "paginator-wrap", 4, "ngIf"], ["mat-icon-button", "", 1, "clear-btn", 3, "click"], [1, "results-meta"], [1, "sort-toggle"], ["mat-icon-button", "", "matTooltip", "Grid view", 3, "click"], ["mat-icon-button", "", "matTooltip", "List view", 3, "click"], [1, "stokvel-grid"], ["class", "skeleton-card", 4, "ngFor", "ngForOf"], [1, "skeleton-card"], [1, "sk-banner"], [1, "sk-body"], [1, "sk-line", "sk-title"], [1, "sk-line", "sk-sub"], [1, "sk-line", "sk-text"], [1, "sk-line", "sk-short"], [1, "sk-bar"], ["class", "stokvel-card", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "stokvel-card"], [1, "card-banner", 3, "ngClass"], [1, "banner-pattern"], [1, "banner-icon"], [1, "banner-badges"], [1, "badge-privacy"], [1, "badge-status", 3, "ngClass"], [1, "card-body"], [1, "card-type-label"], [1, "card-title"], [1, "card-desc"], [1, "card-stats"], [1, "c-stat"], [1, "c-stat-val"], [1, "c-stat-lbl"], ["class", "card-progress", 4, "ngIf"], [1, "seats-bar"], [1, "seats-fill"], [1, "seats-label"], ["class", "goal-badge", 4, "ngIf"], [1, "card-actions"], [1, "btn-details", 3, "click"], ["class", "btn-manage", 3, "click", 4, "ngIf"], [4, "ngIf"], ["class", "btn-join", 3, "click", 4, "ngIf"], ["class", "chip-full", 4, "ngIf"], ["class", "chip-private", 4, "ngIf"], [1, "card-progress"], [1, "prog-header"], [1, "prog-label"], [1, "prog-pct"], [1, "prog-track"], [1, "prog-fill", 3, "ngClass"], [1, "prog-meta"], [1, "prog-target"], [1, "goal-badge"], [1, "btn-manage", 3, "click"], [1, "chip-member"], ["matTooltip", "Send an email to this stokvel's admins", 1, "btn-message", 3, "click"], ["matTooltip", "Request to leave this stokvel", 1, "btn-leave", 3, "click"], [1, "btn-join", 3, "click"], [1, "chip-full"], [1, "chip-private"], [1, "empty-state"], [1, "empty-icon"], [1, "chip", "chip-active", 3, "click"], [1, "paginator-wrap"], ["showFirstLastButtons", "", 3, "page", "length", "pageSize", "pageSizeOptions", "pageIndex"]],
    template: function StokvelListComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 0)(1, "section", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](3, "div", 3)(4, "div", 4)(5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](6, "div", 6)(7, "div", 7)(8, "div", 8)(9, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](10, "explore");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](11, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](12, "Discover Stokvels");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](13, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](14, "Find Your ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](15, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](16, "Community");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](18, "Join a savings group that matches your goals and start building wealth together");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](19, "div", 10)(20, "div", 11)(21, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](23, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](24, "Active Stokvels");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](25, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](26, "div", 11)(27, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](29, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](30, "Total Members");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](31, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](32, "div", 11)(33, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](35, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](36, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](37, "Monthly Pool");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](38, "section", 15)(39, "div", 16)(40, "mat-icon", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](41, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](42, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](43, StokvelListComponent_button_43_Template, 3, 0, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](44, "div", 20)(45, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function StokvelListComponent_Template_button_click_45_listener() {
          return ctx.setFilter("ALL");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](46, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](47, "apps");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](48, " All ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](49, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function StokvelListComponent_Template_button_click_49_listener() {
          return ctx.setFilter("INVESTMENT");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](50, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](51, "trending_up");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](52, " Investment ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](53, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function StokvelListComponent_Template_button_click_53_listener() {
          return ctx.setFilter("PROPERTY");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](54, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](55, "home");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](56, " Property ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](57, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function StokvelListComponent_Template_button_click_57_listener() {
          return ctx.setFilter("FAMILY");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](58, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](59, "diversity_3");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](60, " Family ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](61, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function StokvelListComponent_Template_button_click_61_listener() {
          return ctx.setFilter("BURIAL");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](62, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](63, "favorite");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](64, " Burial ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](65, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function StokvelListComponent_Template_button_click_65_listener() {
          return ctx.setFilter("ROTATIONAL");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](66, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](67, "autorenew");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](68, " Rotational ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](69, StokvelListComponent_div_69_Template, 10, 6, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](70, StokvelListComponent_div_70_Template, 2, 2, "div", 23)(71, StokvelListComponent_div_71_Template, 2, 4, "div", 24)(72, StokvelListComponent_div_72_Template, 12, 0, "div", 25)(73, StokvelListComponent_div_73_Template, 2, 5, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx.sourceStokvels.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx.totalMembers);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"]("R", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](35, 22, ctx.totalMonthly));
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("formControl", ctx.searchControl);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.searchControl.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵclassProp"]("chip-active", ctx.activeFilter === "ALL");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵclassProp"]("chip-active", ctx.activeFilter === "INVESTMENT");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵclassProp"]("chip-active", ctx.activeFilter === "PROPERTY");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵclassProp"]("chip-active", ctx.activeFilter === "FAMILY");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵclassProp"]("chip-active", ctx.activeFilter === "BURIAL");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵclassProp"]("chip-active", ctx.activeFilter === "ROTATIONAL");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", !ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", !ctx.isLoading && ctx.pagedStokvels.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", !ctx.isLoading && ctx.filteredStokvels.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", !ctx.isLoading && ctx.filteredStokvels.length > 0);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlDirective, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule, _material_module__WEBPACK_IMPORTED_MODULE_10__.MaterialModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_17__.MatIconButton, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__.MatPaginator, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__.MatTooltip, _angular_common__WEBPACK_IMPORTED_MODULE_4__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_4__.TitleCasePipe],
    styles: ["@keyframes _ngcontent-%COMP%_pulse {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.45;\n  }\n}\n@keyframes _ngcontent-%COMP%_float {\n  0%, 100% {\n    transform: translateY(0) scale(1);\n  }\n  50% {\n    transform: translateY(-18px) scale(1.05);\n  }\n}\n.browse-container[_ngcontent-%COMP%] {\n  padding: 0 24px 48px;\n  max-width: 1320px;\n  margin: 0 auto;\n  font-family: \"Inter\", sans-serif;\n}\n\n.browse-hero[_ngcontent-%COMP%] {\n  position: relative;\n  background: linear-gradient(135deg, #061d4a 0%, #0d47a1 55%, #1565c0 100%);\n  border-radius: 0 0 32px 32px;\n  margin: 0 -24px 40px;\n  padding: 56px 48px 48px;\n  color: #fff;\n  overflow: hidden;\n}\n.browse-hero[_ngcontent-%COMP%]   .hero-bg[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  pointer-events: none;\n}\n.browse-hero[_ngcontent-%COMP%]   .hero-bg[_ngcontent-%COMP%]   .hero-orb[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.08);\n}\n.browse-hero[_ngcontent-%COMP%]   .hero-bg[_ngcontent-%COMP%]   .hero-orb.orb-1[_ngcontent-%COMP%] {\n  width: 300px;\n  height: 300px;\n  top: -80px;\n  right: -60px;\n  animation: _ngcontent-%COMP%_float 9s ease-in-out infinite;\n}\n.browse-hero[_ngcontent-%COMP%]   .hero-bg[_ngcontent-%COMP%]   .hero-orb.orb-2[_ngcontent-%COMP%] {\n  width: 180px;\n  height: 180px;\n  bottom: -60px;\n  left: 5%;\n  animation: _ngcontent-%COMP%_float 12s ease-in-out infinite reverse;\n}\n.browse-hero[_ngcontent-%COMP%]   .hero-bg[_ngcontent-%COMP%]   .hero-orb.orb-3[_ngcontent-%COMP%] {\n  width: 120px;\n  height: 120px;\n  top: 30%;\n  right: 20%;\n  animation: _ngcontent-%COMP%_float 7s ease-in-out infinite;\n}\n.browse-hero[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 32px;\n}\n.browse-hero[_ngcontent-%COMP%]   .hero-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  background: rgba(255, 255, 255, 0.18);\n  -webkit-backdrop-filter: blur(8px);\n          backdrop-filter: blur(8px);\n  border: 1px solid rgba(255, 255, 255, 0.3);\n  padding: 6px 14px;\n  border-radius: 999px;\n  font-size: 13px;\n  font-weight: 600;\n  letter-spacing: 0.5px;\n  margin-bottom: 16px;\n}\n.browse-hero[_ngcontent-%COMP%]   .hero-badge[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n}\n.browse-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: clamp(28px, 4vw, 44px);\n  font-weight: 800;\n  line-height: 1.15;\n  margin: 0 0 12px;\n  letter-spacing: -0.5px;\n}\n.browse-hero[_ngcontent-%COMP%]   .hero-highlight[_ngcontent-%COMP%] {\n  background: linear-gradient(90deg, #fff 0%, rgba(255, 255, 255, 0.7) 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  text-decoration: underline;\n  text-decoration-color: rgba(255, 255, 255, 0.4);\n}\n.browse-hero[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  opacity: 0.85;\n  font-size: 16px;\n  max-width: 420px;\n}\n.browse-hero[_ngcontent-%COMP%]   .hero-stats[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 28px;\n  background: rgba(255, 255, 255, 0.12);\n  -webkit-backdrop-filter: blur(12px);\n          backdrop-filter: blur(12px);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  border-radius: 20px;\n  padding: 20px 28px;\n  flex-shrink: 0;\n}\n.browse-hero[_ngcontent-%COMP%]   .hero-stat[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 2px;\n}\n.browse-hero[_ngcontent-%COMP%]   .hero-stat[_ngcontent-%COMP%]   .stat-num[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 800;\n  line-height: 1;\n}\n.browse-hero[_ngcontent-%COMP%]   .hero-stat[_ngcontent-%COMP%]   .stat-lbl[_ngcontent-%COMP%] {\n  font-size: 11px;\n  opacity: 0.75;\n  text-transform: uppercase;\n  letter-spacing: 0.6px;\n}\n.browse-hero[_ngcontent-%COMP%]   .hero-divider[_ngcontent-%COMP%] {\n  width: 1px;\n  height: 36px;\n  background: rgba(255, 255, 255, 0.25);\n}\n\n.filters-section[_ngcontent-%COMP%] {\n  margin-bottom: 32px;\n}\n\n.search-bar-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  background: #fff;\n  border: 1.5px solid #e5e7eb;\n  border-radius: 14px;\n  padding: 0 16px;\n  margin-bottom: 20px;\n  transition: border-color 0.2s, box-shadow 0.2s;\n  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.06);\n}\n.search-bar-wrap[_ngcontent-%COMP%]:focus-within {\n  border-color: #1565c0;\n  box-shadow: 0 0 0 3px rgba(21, 101, 192, 0.12);\n}\n.search-bar-wrap[_ngcontent-%COMP%]   .search-icon[_ngcontent-%COMP%] {\n  color: #9ca3af;\n  font-size: 20px;\n  flex-shrink: 0;\n}\n.search-bar-wrap[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%] {\n  flex: 1;\n  border: none;\n  outline: none;\n  font-size: 15px;\n  padding: 14px 0;\n  background: transparent;\n  color: #111827;\n  font-family: inherit;\n}\n.search-bar-wrap[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]::placeholder {\n  color: #9ca3af;\n}\n.search-bar-wrap[_ngcontent-%COMP%]   .clear-btn[_ngcontent-%COMP%] {\n  color: #9ca3af;\n}\n\n.filter-chips[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n  margin-bottom: 16px;\n}\n\n.chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 16px;\n  border-radius: 999px;\n  border: 1.5px solid #e5e7eb;\n  background: #fff;\n  font-size: 13px;\n  font-weight: 500;\n  color: #374151;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.chip[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n}\n.chip[_ngcontent-%COMP%]:hover {\n  border-color: #1565c0;\n  color: #1565c0;\n  background: rgba(21, 101, 192, 0.04);\n}\n.chip.chip-active[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #0d47a1, #1565c0);\n  border-color: transparent;\n  color: #fff;\n  box-shadow: 0 4px 12px rgba(13, 71, 161, 0.35);\n}\n\n.results-meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  color: #6b7280;\n  font-size: 13px;\n}\n.results-meta[_ngcontent-%COMP%]   .sort-toggle[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n}\n.results-meta[_ngcontent-%COMP%]   .sort-toggle[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  color: #9ca3af;\n  transition: color 0.2s;\n}\n.results-meta[_ngcontent-%COMP%]   .sort-toggle[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\n  color: #1565c0;\n}\n\n.stokvel-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));\n  gap: 24px;\n  margin-bottom: 32px;\n}\n.stokvel-grid.list-mode[_ngcontent-%COMP%] {\n  grid-template-columns: 1fr;\n}\n.stokvel-grid.list-mode[_ngcontent-%COMP%]   .stokvel-card[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 140px 1fr auto;\n  border-radius: 16px;\n}\n.stokvel-grid.list-mode[_ngcontent-%COMP%]   .stokvel-card[_ngcontent-%COMP%]   .card-banner[_ngcontent-%COMP%] {\n  border-radius: 16px 0 0 16px;\n  min-height: unset;\n}\n.stokvel-grid.list-mode[_ngcontent-%COMP%]   .stokvel-card[_ngcontent-%COMP%]   .card-actions[_ngcontent-%COMP%] {\n  flex-direction: column;\n  justify-content: center;\n  padding: 20px;\n  border-top: none;\n  border-left: 1px solid #f3f4f6;\n}\n\n.stokvel-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 20px;\n  box-shadow: 0 4px 24px rgba(13, 71, 161, 0.08), 0 1px 4px rgba(13, 71, 161, 0.05);\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\n}\n.stokvel-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-6px);\n  box-shadow: 0 16px 48px rgba(13, 71, 161, 0.16), 0 4px 12px rgba(13, 71, 161, 0.08);\n}\n\n.card-banner[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 120px;\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  padding: 16px;\n  overflow: hidden;\n}\n.card-banner[_ngcontent-%COMP%]   .banner-pattern[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  opacity: 0.12;\n  background-image: radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 50%, white 1px, transparent 1px);\n  background-size: 24px 24px;\n}\n.card-banner[_ngcontent-%COMP%]   .banner-icon[_ngcontent-%COMP%] {\n  width: 52px;\n  height: 52px;\n  border-radius: 14px;\n  background: rgba(255, 255, 255, 0.22);\n  -webkit-backdrop-filter: blur(4px);\n          backdrop-filter: blur(4px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid rgba(255, 255, 255, 0.3);\n}\n.card-banner[_ngcontent-%COMP%]   .banner-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 26px;\n  width: 26px;\n  height: 26px;\n  color: #fff;\n}\n.card-banner[_ngcontent-%COMP%]   .banner-badges[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  gap: 6px;\n}\n\n.banner-investment[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #1976d2, #0d47a1);\n}\n\n.banner-property[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #388e3c, #1b5e20);\n}\n\n.banner-family[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #f57c00, #e65100);\n}\n\n.banner-burial[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #795548, #3e2723);\n}\n\n.banner-rotational[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #00897b, #004d40);\n}\n\n.banner-default[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #1565c0, #092e6b);\n}\n\n.badge-privacy[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 11px;\n  font-weight: 600;\n  letter-spacing: 0.4px;\n  padding: 4px 10px;\n  border-radius: 999px;\n  background: rgba(0, 0, 0, 0.35);\n  color: rgba(255, 255, 255, 0.9);\n}\n.badge-privacy[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 12px;\n  width: 12px;\n  height: 12px;\n}\n.badge-privacy.public[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.25);\n}\n\n.badge-status[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.6px;\n  padding: 3px 9px;\n  border-radius: 999px;\n}\n.badge-status.status-active[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #166534;\n}\n.badge-status.status-inactive[_ngcontent-%COMP%] {\n  background: #fef9c3;\n  color: #854d0e;\n}\n.badge-status.status-closed[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.badge-status.status-pending[_ngcontent-%COMP%] {\n  background: #ede9fe;\n  color: #5b21b6;\n}\n\n.card-body[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 20px 20px 12px;\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n}\n\n.card-type-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  letter-spacing: 1px;\n  text-transform: uppercase;\n  color: #1565c0;\n  margin-bottom: 6px;\n}\n\n.card-title[_ngcontent-%COMP%] {\n  font-size: 17px;\n  font-weight: 700;\n  color: #111827;\n  margin: 0 0 8px;\n  line-height: 1.3;\n  display: -webkit-box;\n  -webkit-line-clamp: 1;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n\n.card-desc[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #6b7280;\n  line-height: 1.55;\n  margin: 0 0 16px;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n\n.card-stats[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 8px;\n  margin-bottom: 16px;\n}\n.card-stats[_ngcontent-%COMP%]   .c-stat[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: #f9fafb;\n  border-radius: 10px;\n  padding: 10px;\n}\n.card-stats[_ngcontent-%COMP%]   .c-stat[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  color: #1565c0;\n  flex-shrink: 0;\n}\n.card-stats[_ngcontent-%COMP%]   .c-stat[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n}\n.card-stats[_ngcontent-%COMP%]   .c-stat[_ngcontent-%COMP%]   .c-stat-val[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 700;\n  color: #111827;\n  line-height: 1.2;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.card-stats[_ngcontent-%COMP%]   .c-stat[_ngcontent-%COMP%]   .c-stat-lbl[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: #9ca3af;\n}\n\n.card-progress[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n}\n.card-progress[_ngcontent-%COMP%]   .prog-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: baseline;\n  margin-bottom: 6px;\n}\n.card-progress[_ngcontent-%COMP%]   .prog-header[_ngcontent-%COMP%]   .prog-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #9ca3af;\n}\n.card-progress[_ngcontent-%COMP%]   .prog-header[_ngcontent-%COMP%]   .prog-pct[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 700;\n  color: #1565c0;\n}\n.card-progress[_ngcontent-%COMP%]   .prog-track[_ngcontent-%COMP%] {\n  height: 7px;\n  background: #f3f4f6;\n  border-radius: 99px;\n  overflow: hidden;\n}\n.card-progress[_ngcontent-%COMP%]   .prog-track[_ngcontent-%COMP%]   .prog-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 99px;\n  transition: width 0.6s ease;\n}\n.card-progress[_ngcontent-%COMP%]   .prog-track[_ngcontent-%COMP%]   .prog-fill.prog-warn[_ngcontent-%COMP%] {\n  background: linear-gradient(90deg, #f59e0b, #d97706);\n}\n.card-progress[_ngcontent-%COMP%]   .prog-track[_ngcontent-%COMP%]   .prog-fill.prog-accent[_ngcontent-%COMP%] {\n  background: linear-gradient(90deg, #8b5cf6, #7c3aed);\n}\n.card-progress[_ngcontent-%COMP%]   .prog-track[_ngcontent-%COMP%]   .prog-fill.prog-primary[_ngcontent-%COMP%] {\n  background: linear-gradient(90deg, #10b981, #059669);\n}\n.card-progress[_ngcontent-%COMP%]   .prog-meta[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  font-size: 11px;\n  color: #9ca3af;\n  margin-top: 4px;\n}\n.card-progress[_ngcontent-%COMP%]   .prog-meta[_ngcontent-%COMP%]   .prog-target[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #4b5563;\n}\n\n.seats-bar[_ngcontent-%COMP%] {\n  height: 5px;\n  background: #f3f4f6;\n  border-radius: 99px;\n  overflow: hidden;\n  margin-bottom: 6px;\n}\n.seats-bar[_ngcontent-%COMP%]   .seats-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 99px;\n  background: linear-gradient(90deg, #0d47a1, #1565c0);\n  transition: width 0.5s ease;\n}\n\n.seats-label[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 11px;\n  color: #9ca3af;\n  margin-bottom: 4px;\n}\n.seats-label[_ngcontent-%COMP%]   .goal-badge[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #166534;\n  font-weight: 600;\n}\n\n.card-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  padding: 14px 20px 18px;\n  border-top: 1px solid #f3f4f6;\n  margin-top: auto;\n  align-items: center;\n}\n.card-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .card-actions[_ngcontent-%COMP%]   .chip-member[_ngcontent-%COMP%], .card-actions[_ngcontent-%COMP%]   .chip-full[_ngcontent-%COMP%], .card-actions[_ngcontent-%COMP%]   .chip-private[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  border-radius: 10px;\n  font-size: 12px;\n  font-weight: 600;\n  font-family: inherit;\n  padding: 8px 12px;\n  transition: all 0.2s;\n}\n.card-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], .card-actions[_ngcontent-%COMP%]   .chip-member[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], .card-actions[_ngcontent-%COMP%]   .chip-full[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], .card-actions[_ngcontent-%COMP%]   .chip-private[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 15px;\n  width: 15px;\n  height: 15px;\n}\n.card-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border: none;\n  cursor: pointer;\n}\n.card-actions[_ngcontent-%COMP%]   .btn-details[_ngcontent-%COMP%] {\n  background: #f3f4f6;\n  color: #374151;\n}\n.card-actions[_ngcontent-%COMP%]   .btn-details[_ngcontent-%COMP%]:hover {\n  background: #e5e7eb;\n}\n.card-actions[_ngcontent-%COMP%]   .btn-join[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #0d47a1, #1565c0);\n  color: #fff;\n  box-shadow: 0 4px 12px rgba(13, 71, 161, 0.28);\n}\n.card-actions[_ngcontent-%COMP%]   .btn-join[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 6px 20px rgba(13, 71, 161, 0.42);\n  transform: translateY(-1px);\n}\n.card-actions[_ngcontent-%COMP%]   .btn-manage[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #065f46, #059669);\n  color: #fff;\n  box-shadow: 0 4px 12px rgba(5, 150, 105, 0.28);\n}\n.card-actions[_ngcontent-%COMP%]   .btn-manage[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 6px 20px rgba(5, 150, 105, 0.42);\n  transform: translateY(-1px);\n}\n.card-actions[_ngcontent-%COMP%]   .btn-message[_ngcontent-%COMP%] {\n  background: #eff6ff;\n  color: #1d4ed8;\n  border: 1.5px solid #bfdbfe;\n}\n.card-actions[_ngcontent-%COMP%]   .btn-message[_ngcontent-%COMP%]:hover {\n  background: #dbeafe;\n}\n.card-actions[_ngcontent-%COMP%]   .btn-leave[_ngcontent-%COMP%] {\n  background: #fef2f2;\n  color: #b91c1c;\n  border: 1.5px solid #fecaca;\n}\n.card-actions[_ngcontent-%COMP%]   .btn-leave[_ngcontent-%COMP%]:hover {\n  background: #fee2e2;\n}\n.card-actions[_ngcontent-%COMP%]   .chip-member[_ngcontent-%COMP%] {\n  background: #ecfdf5;\n  color: #065f46;\n  border: 1.5px solid #6ee7b7;\n}\n.card-actions[_ngcontent-%COMP%]   .chip-full[_ngcontent-%COMP%] {\n  background: #f9fafb;\n  color: #6b7280;\n  border: 1.5px solid #e5e7eb;\n}\n.card-actions[_ngcontent-%COMP%]   .chip-private[_ngcontent-%COMP%] {\n  background: #fdf4ff;\n  color: #7e22ce;\n  border: 1.5px solid #e9d5ff;\n}\n\n.skeleton-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 20px;\n  box-shadow: 0 4px 24px rgba(13, 71, 161, 0.08), 0 1px 4px rgba(13, 71, 161, 0.05);\n  overflow: hidden;\n  animation: _ngcontent-%COMP%_pulse 1.5s ease-in-out infinite;\n}\n.skeleton-card[_ngcontent-%COMP%]   .sk-banner[_ngcontent-%COMP%] {\n  height: 120px;\n  background: linear-gradient(135deg, #e5e7eb, #d1d5db);\n}\n.skeleton-card[_ngcontent-%COMP%]   .sk-body[_ngcontent-%COMP%] {\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.skeleton-card[_ngcontent-%COMP%]   .sk-line[_ngcontent-%COMP%] {\n  border-radius: 6px;\n  background: #f3f4f6;\n}\n.skeleton-card[_ngcontent-%COMP%]   .sk-line.sk-title[_ngcontent-%COMP%] {\n  height: 18px;\n  width: 70%;\n}\n.skeleton-card[_ngcontent-%COMP%]   .sk-line.sk-sub[_ngcontent-%COMP%] {\n  height: 13px;\n  width: 45%;\n}\n.skeleton-card[_ngcontent-%COMP%]   .sk-line.sk-text[_ngcontent-%COMP%] {\n  height: 13px;\n  width: 100%;\n}\n.skeleton-card[_ngcontent-%COMP%]   .sk-line.sk-short[_ngcontent-%COMP%] {\n  height: 13px;\n  width: 55%;\n}\n.skeleton-card[_ngcontent-%COMP%]   .sk-bar[_ngcontent-%COMP%] {\n  height: 7px;\n  border-radius: 99px;\n  background: #f3f4f6;\n  margin-top: 4px;\n}\n\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 80px 24px;\n}\n.empty-state[_ngcontent-%COMP%]   .empty-icon[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  background: linear-gradient(135deg, rgba(13, 71, 161, 0.1), rgba(21, 101, 192, 0.1));\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto 20px;\n}\n.empty-state[_ngcontent-%COMP%]   .empty-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 40px;\n  width: 40px;\n  height: 40px;\n  color: #1565c0;\n}\n.empty-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n  color: #111827;\n  margin: 0 0 8px;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #6b7280;\n  font-size: 14px;\n  margin: 0 0 24px;\n}\n\n.paginator-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n.paginator-wrap[_ngcontent-%COMP%]     mat-paginator {\n  background: transparent;\n}\n.paginator-wrap[_ngcontent-%COMP%]     mat-paginator .mat-mdc-paginator-container {\n  justify-content: center;\n}\n\n@media (max-width: 768px) {\n  .browse-hero[_ngcontent-%COMP%] {\n    margin: 0 -24px 28px;\n    padding: 36px 24px 32px;\n  }\n  .browse-hero[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .browse-hero[_ngcontent-%COMP%]   .hero-stats[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n  }\n  .browse-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 28px;\n  }\n  .stokvel-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .card-stats[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n@media (max-width: 480px) {\n  .card-stats[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n  }\n  .card-stats[_ngcontent-%COMP%]   .c-stat[_ngcontent-%COMP%]:last-child {\n    grid-column: span 2;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9zdG9rdmVsLWxpc3Qvc3Rva3ZlbC1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9CQTtFQUNFO0lBQVcsVUFBQTtFQWxCWDtFQW1CQTtJQUFZLGFBQUE7RUFoQlo7QUFDRjtBQWlCQTtFQUNFO0lBQVcsaUNBQUE7RUFkWDtFQWVBO0lBQVksd0NBQUE7RUFaWjtBQUNGO0FBZUE7RUFDRSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGdDQUFBO0FBYkY7O0FBaUJBO0VBQ0Usa0JBQUE7RUFDQSwwRUFBQTtFQUNBLDRCQUFBO0VBQ0Esb0JBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQWRGO0FBZ0JFO0VBQ0Usa0JBQUE7RUFBb0IsUUFBQTtFQUFVLG9CQUFBO0FBWmxDO0FBYUk7RUFDRSxrQkFBQTtFQUFvQixrQkFBQTtFQUNwQixxQ0FBQTtBQVZOO0FBV007RUFBVSxZQUFBO0VBQWMsYUFBQTtFQUFlLFVBQUE7RUFBWSxZQUFBO0VBQWMsd0NBQUE7QUFKdkU7QUFLTTtFQUFVLFlBQUE7RUFBYyxhQUFBO0VBQWUsYUFBQTtFQUFlLFFBQUE7RUFBVSxpREFBQTtBQUV0RTtBQURNO0VBQVUsWUFBQTtFQUFjLGFBQUE7RUFBZSxRQUFBO0VBQVUsVUFBQTtFQUFZLHdDQUFBO0FBUW5FO0FBSkU7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7QUFNSjtBQUhFO0VBQ0Usb0JBQUE7RUFBc0IsbUJBQUE7RUFBcUIsUUFBQTtFQUMzQyxxQ0FBQTtFQUNBLGtDQUFBO1VBQUEsMEJBQUE7RUFDQSwwQ0FBQTtFQUNBLGlCQUFBO0VBQW1CLG9CQUFBO0VBQ25CLGVBQUE7RUFBaUIsZ0JBQUE7RUFBa0IscUJBQUE7RUFDbkMsbUJBQUE7QUFVSjtBQVRJO0VBQVcsZUFBQTtFQUFpQixX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O0VBQ0Usa0JBQUE7RUFBb0Isa0JBQUE7QUE4UHRCO0FBN1BFO0VBQ0UsV0FBQTtFQUFhLFlBQUE7RUFBYyxrQkFBQTtFQUMzQixvRkFBQTtFQUNBLGFBQUE7RUFBZSxtQkFBQTtFQUFxQix1QkFBQTtFQUF5QixtQkFBQTtBQW9RakU7QUFuUUk7RUFBVyxlQUFBO0VBQWlCLFdBQUE7RUFBYSxZQUFBO0VBQWMsY0FuYjdDO0FBNHJCZDtBQXZRRTtFQUFLLGVBQUE7RUFBaUIsZ0JBQUE7RUFBa0IsY0FBQTtFQUFnQixlQUFBO0FBNlExRDtBQTVRRTtFQUFLLGNBQUE7RUFBZ0IsZUFBQTtFQUFpQixnQkFBQTtBQWlSeEM7O0FBN1FBO0VBQ0UsYUFBQTtFQUFlLHVCQUFBO0FBaVJqQjtBQWhSRTtFQUNFLHVCQUFBO0FBa1JKO0FBalJJO0VBQStCLHVCQUFBO0FBb1JuQzs7QUEvUUE7RUFDRTtJQUNFLG9CQUFBO0lBQXNCLHVCQUFBO0VBbVJ4QjtFQWxSRTtJQUFnQixzQkFBQTtFQXFSbEI7RUFwUkU7SUFBYyxXQUFBO0lBQWEsdUJBQUE7RUF3UjdCO0VBdlJFO0lBQUssZUFBQTtFQTBSUDtFQXhSQTtJQUFnQiwwQkFBQTtFQTJSaEI7RUExUkE7SUFBYyxxQ0FBQTtFQTZSZDtBQUNGO0FBM1JBO0VBQ0U7SUFBYyw4QkFBQTtFQThSZDtFQTlSOEM7SUFBcUIsbUJBQUE7RUFpU25FO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIvLyDDosKUwoDDosKUwoDDosKUwoAgVmFyaWFibGVzIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxyXG4kYnJhbmQ6ICAgICAgICMxNTY1YzA7XHJcbiRicmFuZC1kYXJrOiAgIzBkNDdhMTtcclxuJHRlYWw6ICAgICAgICAjMDU5NjY5O1xyXG4kZ29sZDogICAgICAgICNkOTc3MDY7XHJcbiRyYWRpdXMtY2FyZDogMjBweDtcclxuJHNoYWRvdy1jYXJkOiAwIDRweCAyNHB4IHJnYmEoMTMsNzEsMTYxLC4wOCksIDAgMXB4IDRweCByZ2JhKDEzLDcxLDE2MSwuMDUpO1xyXG4kc2hhZG93LWhvdmVyOiAwIDE2cHggNDhweCByZ2JhKDEzLDcxLDE2MSwuMTYpLCAwIDRweCAxMnB4IHJnYmEoMTMsNzEsMTYxLC4wOCk7XHJcblxyXG4vLyBUeXBlIHBhbGV0dGVcclxuJGNvbG9yczogKFxyXG4gIGludmVzdG1lbnQ6ICgjMWU4OGU1LCAjMGQ0N2ExKSxcclxuICBwcm9wZXJ0eTogICAoIzQzYTA0NywgIzFiNWUyMCksXHJcbiAgZmFtaWx5OiAgICAgKCNmYjhjMDAsICNlNjUxMDApLFxyXG4gIGJ1cmlhbDogICAgICgjNmQ0YzQxLCAjM2UyNzIzKSxcclxuICByb3RhdGlvbmFsOiAoIzAwODk3YiwgIzAwNGQ0MCksXHJcbiAgZGVmYXVsdDogICAgKCMxNTY1YzAsICMwOTJlNmIpLFxyXG4pO1xyXG5cclxuLy8gw6LClMKAw6LClMKAw6LClMKAIFNrZWxldG9uIHB1bHNlIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxyXG5Aa2V5ZnJhbWVzIHB1bHNlIHtcclxuICAwJSwgMTAwJSB7IG9wYWNpdHk6IDE7IH1cclxuICA1MCUgICAgICAgeyBvcGFjaXR5OiAuNDU7IH1cclxufVxyXG5Aa2V5ZnJhbWVzIGZsb2F0IHtcclxuICAwJSwgMTAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKSBzY2FsZSgxKTsgfVxyXG4gIDUwJSAgICAgICB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMThweCkgc2NhbGUoMS4wNSk7IH1cclxufVxyXG5cclxuLy8gw6LClMKAw6LClMKAw6LClMKAIFdyYXBwZXIgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXHJcbi5icm93c2UtY29udGFpbmVyIHtcclxuICBwYWRkaW5nOiAwIDI0cHggNDhweDtcclxuICBtYXgtd2lkdGg6IDEzMjBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBmb250LWZhbWlseTogJ0ludGVyJywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLy8gw6LClMKAw6LClMKAw6LClMKAIEhlcm8gw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXHJcbi5icm93c2UtaGVybyB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMwNjFkNGEgMCUsICMwZDQ3YTEgNTUlLCAjMTU2NWMwIDEwMCUpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAgMCAzMnB4IDMycHg7XHJcbiAgbWFyZ2luOiAwIC0yNHB4IDQwcHg7XHJcbiAgcGFkZGluZzogNTZweCA0OHB4IDQ4cHg7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbiAgLmhlcm8tYmcge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlOyBpbnNldDogMDsgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICAuaGVyby1vcmIge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7IGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwuMDgpO1xyXG4gICAgICAmLm9yYi0xIHsgd2lkdGg6IDMwMHB4OyBoZWlnaHQ6IDMwMHB4OyB0b3A6IC04MHB4OyByaWdodDogLTYwcHg7IGFuaW1hdGlvbjogZmxvYXQgOXMgZWFzZS1pbi1vdXQgaW5maW5pdGU7IH1cclxuICAgICAgJi5vcmItMiB7IHdpZHRoOiAxODBweDsgaGVpZ2h0OiAxODBweDsgYm90dG9tOiAtNjBweDsgbGVmdDogNSU7IGFuaW1hdGlvbjogZmxvYXQgMTJzIGVhc2UtaW4tb3V0IGluZmluaXRlIHJldmVyc2U7IH1cclxuICAgICAgJi5vcmItMyB7IHdpZHRoOiAxMjBweDsgaGVpZ2h0OiAxMjBweDsgdG9wOiAzMCU7IHJpZ2h0OiAyMCU7IGFuaW1hdGlvbjogZmxvYXQgN3MgZWFzZS1pbi1vdXQgaW5maW5pdGU7IH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5oZXJvLWNvbnRlbnQge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBnYXA6IDMycHg7XHJcbiAgfVxyXG5cclxuICAuaGVyby1iYWRnZSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZ2FwOiA2cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LC4xOCk7XHJcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoOHB4KTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsLjMpO1xyXG4gICAgcGFkZGluZzogNnB4IDE0cHg7IGJvcmRlci1yYWRpdXM6IDk5OXB4O1xyXG4gICAgZm9udC1zaXplOiAxM3B4OyBmb250LXdlaWdodDogNjAwOyBsZXR0ZXItc3BhY2luZzogLjVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbiAgICBtYXQtaWNvbiB7IGZvbnQtc2l6ZTogMTZweDsgd2lkdGg6IDE2cHg7IGhlaWdodDogMTZweDsgfVxyXG4gIH1cclxuXHJcbiAgaDEge1xyXG4gICAgZm9udC1zaXplOiBjbGFtcCgyOHB4LCA0dncsIDQ0cHgpO1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDsgbGluZS1oZWlnaHQ6IDEuMTU7XHJcbiAgICBtYXJnaW46IDAgMCAxMnB4OyBsZXR0ZXItc3BhY2luZzogLS41cHg7XHJcbiAgfVxyXG5cclxuICAuaGVyby1oaWdobGlnaHQge1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjZmZmIDAlLCByZ2JhKDI1NSwyNTUsMjU1LC43KSAxMDAlKTtcclxuICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0OyAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsgdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LC40KTtcclxuICB9XHJcblxyXG4gIHAgeyBtYXJnaW46IDA7IG9wYWNpdHk6IC44NTsgZm9udC1zaXplOiAxNnB4OyBtYXgtd2lkdGg6IDQyMHB4OyB9XHJcblxyXG4gIC5oZXJvLXN0YXRzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGdhcDogMjhweDtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsLjEyKTtcclxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMnB4KTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsLjIpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDsgcGFkZGluZzogMjBweCAyOHB4O1xyXG4gICAgZmxleC1zaHJpbms6IDA7XHJcbiAgfVxyXG5cclxuICAuaGVyby1zdGF0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGdhcDogMnB4O1xyXG4gICAgLnN0YXQtbnVtIHsgZm9udC1zaXplOiAyMnB4OyBmb250LXdlaWdodDogODAwOyBsaW5lLWhlaWdodDogMTsgfVxyXG4gICAgLnN0YXQtbGJsIHsgZm9udC1zaXplOiAxMXB4OyBvcGFjaXR5OiAuNzU7IHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7IGxldHRlci1zcGFjaW5nOiAuNnB4OyB9XHJcbiAgfVxyXG5cclxuICAuaGVyby1kaXZpZGVyIHtcclxuICAgIHdpZHRoOiAxcHg7IGhlaWdodDogMzZweDsgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwuMjUpO1xyXG4gIH1cclxufVxyXG5cclxuLy8gw6LClMKAw6LClMKAw6LClMKAIEZpbHRlcnMgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXHJcbi5maWx0ZXJzLXNlY3Rpb24ge1xyXG4gIG1hcmdpbi1ib3R0b206IDMycHg7XHJcbn1cclxuXHJcbi5zZWFyY2gtYmFyLXdyYXAge1xyXG4gIGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGdhcDogMTJweDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIGJvcmRlcjogMS41cHggc29saWQgI2U1ZTdlYjtcclxuICBib3JkZXItcmFkaXVzOiAxNHB4O1xyXG4gIHBhZGRpbmc6IDAgMTZweDtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAuMnMsIGJveC1zaGFkb3cgLjJzO1xyXG4gIGJveC1zaGFkb3c6IDAgMXB4IDZweCByZ2JhKDAsMCwwLC4wNik7XHJcblxyXG4gICY6Zm9jdXMtd2l0aGluIHtcclxuICAgIGJvcmRlci1jb2xvcjogJGJyYW5kO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDAgM3B4IHJnYmEoMjEsIDEwMSwgMTkyLCAuMTIpO1xyXG4gIH1cclxuXHJcbiAgLnNlYXJjaC1pY29uIHsgY29sb3I6ICM5Y2EzYWY7IGZvbnQtc2l6ZTogMjBweDsgZmxleC1zaHJpbms6IDA7IH1cclxuXHJcbiAgLnNlYXJjaC1pbnB1dCB7XHJcbiAgICBmbGV4OiAxOyBib3JkZXI6IG5vbmU7IG91dGxpbmU6IG5vbmU7XHJcbiAgICBmb250LXNpemU6IDE1cHg7IHBhZGRpbmc6IDE0cHggMDtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50OyBjb2xvcjogIzExMTgyNztcclxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG4gICAgJjo6cGxhY2Vob2xkZXIgeyBjb2xvcjogIzljYTNhZjsgfVxyXG4gIH1cclxuXHJcbiAgLmNsZWFyLWJ0biB7IGNvbG9yOiAjOWNhM2FmOyB9XHJcbn1cclxuXHJcbi5maWx0ZXItY2hpcHMge1xyXG4gIGRpc3BsYXk6IGZsZXg7IGZsZXgtd3JhcDogd3JhcDsgZ2FwOiAxMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbn1cclxuXHJcbi5jaGlwIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZ2FwOiA2cHg7XHJcbiAgcGFkZGluZzogOHB4IDE2cHg7IGJvcmRlci1yYWRpdXM6IDk5OXB4O1xyXG4gIGJvcmRlcjogMS41cHggc29saWQgI2U1ZTdlYjsgYmFja2dyb3VuZDogI2ZmZjtcclxuICBmb250LXNpemU6IDEzcHg7IGZvbnQtd2VpZ2h0OiA1MDA7IGNvbG9yOiAjMzc0MTUxO1xyXG4gIGN1cnNvcjogcG9pbnRlcjsgdHJhbnNpdGlvbjogYWxsIC4ycztcclxuICBtYXQtaWNvbiB7IGZvbnQtc2l6ZTogMTZweDsgd2lkdGg6IDE2cHg7IGhlaWdodDogMTZweDsgfVxyXG5cclxuICAmOmhvdmVyIHsgYm9yZGVyLWNvbG9yOiAkYnJhbmQ7IGNvbG9yOiAkYnJhbmQ7IGJhY2tncm91bmQ6IHJnYmEoMjEsMTAxLDE5MiwuMDQpOyB9XHJcblxyXG4gICYuY2hpcC1hY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgJGJyYW5kLWRhcmssICRicmFuZCk7XHJcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50OyBjb2xvcjogI2ZmZjtcclxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDEycHggcmdiYSgxMyw3MSwxNjEsLjM1KTtcclxuICB9XHJcbn1cclxuXHJcbi5yZXN1bHRzLW1ldGEge1xyXG4gIGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBjb2xvcjogIzZiNzI4MDsgZm9udC1zaXplOiAxM3B4O1xyXG5cclxuICAuc29ydC10b2dnbGUge1xyXG4gICAgZGlzcGxheTogZmxleDsgZ2FwOiA0cHg7XHJcbiAgICBidXR0b24geyBjb2xvcjogIzljYTNhZjsgdHJhbnNpdGlvbjogY29sb3IgLjJzOyB9XHJcbiAgICBidXR0b24uYWN0aXZlIHsgY29sb3I6ICRicmFuZDsgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gw6LClMKAw6LClMKAw6LClMKAIEdyaWQgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXHJcbi5zdG9rdmVsLWdyaWQge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMzQwcHgsIDFmcikpO1xyXG4gIGdhcDogMjRweDtcclxuICBtYXJnaW4tYm90dG9tOiAzMnB4O1xyXG5cclxuICAmLmxpc3QtbW9kZSB7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICAgIC5zdG9rdmVsLWNhcmQge1xyXG4gICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDE0MHB4IDFmciBhdXRvO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xyXG5cclxuICAgICAgLmNhcmQtYmFubmVyIHsgYm9yZGVyLXJhZGl1czogMTZweCAwIDAgMTZweDsgbWluLWhlaWdodDogdW5zZXQ7IH1cclxuICAgICAgLmNhcmQtYWN0aW9ucyB7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IGp1c3RpZnktY29udGVudDogY2VudGVyOyBwYWRkaW5nOiAyMHB4OyBib3JkZXItdG9wOiBub25lOyBib3JkZXItbGVmdDogMXB4IHNvbGlkICNmM2Y0ZjY7IH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIMOiwpTCgMOiwpTCgMOiwpTCgCBDYXJkIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxyXG4uc3Rva3ZlbC1jYXJkIHtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIGJvcmRlci1yYWRpdXM6ICRyYWRpdXMtY2FyZDtcclxuICBib3gtc2hhZG93OiAkc2hhZG93LWNhcmQ7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBkaXNwbGF5OiBmbGV4OyBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuM3MgZWFzZSwgYm94LXNoYWRvdyAuM3MgZWFzZTtcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTZweCk7XHJcbiAgICBib3gtc2hhZG93OiAkc2hhZG93LWhvdmVyO1xyXG4gIH1cclxufVxyXG5cclxuLy8gw6LClMKAw6LClMKAIEJhbm5lclxyXG4uY2FyZC1iYW5uZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtaW4taGVpZ2h0OiAxMjBweDtcclxuICBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogZmxleC1lbmQ7IGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBwYWRkaW5nOiAxNnB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG4gIC5iYW5uZXItcGF0dGVybiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7IGluc2V0OiAwOyBvcGFjaXR5OiAuMTI7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0IDIwJSA1MCUsIHdoaXRlIDFweCwgdHJhbnNwYXJlbnQgMXB4KSxcclxuICAgICAgICAgICAgICAgICAgICAgIHJhZGlhbC1ncmFkaWVudChjaXJjbGUgYXQgODAlIDUwJSwgd2hpdGUgMXB4LCB0cmFuc3BhcmVudCAxcHgpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAyNHB4IDI0cHg7XHJcbiAgfVxyXG5cclxuICAuYmFubmVyLWljb24ge1xyXG4gICAgd2lkdGg6IDUycHg7IGhlaWdodDogNTJweDsgYm9yZGVyLXJhZGl1czogMTRweDtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsLjIyKTtcclxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig0cHgpO1xyXG4gICAgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LC4zKTtcclxuICAgIG1hdC1pY29uIHsgZm9udC1zaXplOiAyNnB4OyB3aWR0aDogMjZweDsgaGVpZ2h0OiAyNnB4OyBjb2xvcjogI2ZmZjsgfVxyXG4gIH1cclxuXHJcbiAgLmJhbm5lci1iYWRnZXMge1xyXG4gICAgZGlzcGxheTogZmxleDsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgYWxpZ24taXRlbXM6IGZsZXgtZW5kOyBnYXA6IDZweDtcclxuICB9XHJcbn1cclxuXHJcbi8vIFR5cGUgY29sb3Vyc1xyXG4uYmFubmVyLWludmVzdG1lbnQgeyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMTk3NmQyLCAjMGQ0N2ExKTsgfVxyXG4uYmFubmVyLXByb3BlcnR5ICAgeyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMzg4ZTNjLCAjMWI1ZTIwKTsgfVxyXG4uYmFubmVyLWZhbWlseSAgICAgeyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZjU3YzAwLCAjZTY1MTAwKTsgfVxyXG4uYmFubmVyLWJ1cmlhbCAgICAgeyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjNzk1NTQ4LCAjM2UyNzIzKTsgfVxyXG4uYmFubmVyLXJvdGF0aW9uYWwgeyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMDA4OTdiLCAjMDA0ZDQwKTsgfVxyXG4uYmFubmVyLWRlZmF1bHQgICAgeyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMTU2NWMwLCAjMDkyZTZiKTsgfVxyXG5cclxuLy8gw6LClMKAw6LClMKAIEJhZGdlc1xyXG4uYmFkZ2UtcHJpdmFjeSB7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGdhcDogNHB4O1xyXG4gIGZvbnQtc2l6ZTogMTFweDsgZm9udC13ZWlnaHQ6IDYwMDsgbGV0dGVyLXNwYWNpbmc6IC40cHg7XHJcbiAgcGFkZGluZzogNHB4IDEwcHg7IGJvcmRlci1yYWRpdXM6IDk5OXB4O1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsLjM1KTsgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsLjkpO1xyXG4gIG1hdC1pY29uIHsgZm9udC1zaXplOiAxMnB4OyB3aWR0aDogMTJweDsgaGVpZ2h0OiAxMnB4OyB9XHJcblxyXG4gICYucHVibGljIHsgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwuMjUpOyB9XHJcbn1cclxuXHJcbi5iYWRnZS1zdGF0dXMge1xyXG4gIGZvbnQtc2l6ZTogMTBweDsgZm9udC13ZWlnaHQ6IDcwMDsgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgbGV0dGVyLXNwYWNpbmc6IC42cHg7XHJcbiAgcGFkZGluZzogM3B4IDlweDsgYm9yZGVyLXJhZGl1czogOTk5cHg7XHJcbiAgJi5zdGF0dXMtYWN0aXZlIHsgYmFja2dyb3VuZDogI2RjZmNlNzsgY29sb3I6ICMxNjY1MzQ7IH1cclxuICAmLnN0YXR1cy1pbmFjdGl2ZSB7IGJhY2tncm91bmQ6ICNmZWY5YzM7IGNvbG9yOiAjODU0ZDBlOyB9XHJcbiAgJi5zdGF0dXMtY2xvc2VkIHsgYmFja2dyb3VuZDogI2ZlZTJlMjsgY29sb3I6ICM5OTFiMWI7IH1cclxuICAmLnN0YXR1cy1wZW5kaW5nIHsgYmFja2dyb3VuZDogI2VkZTlmZTsgY29sb3I6ICM1YjIxYjY7IH1cclxufVxyXG5cclxuLy8gw6LClMKAw6LClMKAIEJvZHlcclxuLmNhcmQtYm9keSB7XHJcbiAgZmxleDogMTsgcGFkZGluZzogMjBweCAyMHB4IDEycHg7XHJcbiAgZGlzcGxheTogZmxleDsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgZ2FwOiAwO1xyXG59XHJcblxyXG4uY2FyZC10eXBlLWxhYmVsIHtcclxuICBmb250LXNpemU6IDExcHg7IGZvbnQtd2VpZ2h0OiA3MDA7IGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgY29sb3I6ICRicmFuZDsgbWFyZ2luLWJvdHRvbTogNnB4O1xyXG59XHJcblxyXG4uY2FyZC10aXRsZSB7XHJcbiAgZm9udC1zaXplOiAxN3B4OyBmb250LXdlaWdodDogNzAwOyBjb2xvcjogIzExMTgyNztcclxuICBtYXJnaW46IDAgMCA4cHg7IGxpbmUtaGVpZ2h0OiAxLjM7XHJcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7IC13ZWJraXQtbGluZS1jbGFtcDogMTsgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDsgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLmNhcmQtZGVzYyB7XHJcbiAgZm9udC1zaXplOiAxM3B4OyBjb2xvcjogIzZiNzI4MDsgbGluZS1oZWlnaHQ6IDEuNTU7XHJcbiAgbWFyZ2luOiAwIDAgMTZweDtcclxuICBkaXNwbGF5OiAtd2Via2l0LWJveDsgLXdlYmtpdC1saW5lLWNsYW1wOiAyOyAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsOyBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4vLyDDosKUwoDDosKUwoAgU3RhdHNcclxuLmNhcmQtc3RhdHMge1xyXG4gIGRpc3BsYXk6IGdyaWQ7IGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XHJcbiAgZ2FwOiA4cHg7IG1hcmdpbi1ib3R0b206IDE2cHg7XHJcblxyXG4gIC5jLXN0YXQge1xyXG4gICAgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZ2FwOiA4cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjlmYWZiOyBib3JkZXItcmFkaXVzOiAxMHB4OyBwYWRkaW5nOiAxMHB4O1xyXG4gICAgbWF0LWljb24geyBmb250LXNpemU6IDE4cHg7IHdpZHRoOiAxOHB4OyBoZWlnaHQ6IDE4cHg7IGNvbG9yOiAkYnJhbmQ7IGZsZXgtc2hyaW5rOiAwOyB9XHJcbiAgICBkaXYgeyBkaXNwbGF5OiBmbGV4OyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBtaW4td2lkdGg6IDA7IH1cclxuICAgIC5jLXN0YXQtdmFsIHsgZm9udC1zaXplOiAxM3B4OyBmb250LXdlaWdodDogNzAwOyBjb2xvcjogIzExMTgyNzsgbGluZS1oZWlnaHQ6IDEuMjsgd2hpdGUtc3BhY2U6IG5vd3JhcDsgb3ZlcmZsb3c6IGhpZGRlbjsgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7IH1cclxuICAgIC5jLXN0YXQtbGJsIHsgZm9udC1zaXplOiAxMHB4OyBjb2xvcjogIzljYTNhZjsgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gw6LClMKAw6LClMKAIFByb2dyZXNzXHJcbi5jYXJkLXByb2dyZXNzIHtcclxuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xyXG5cclxuICAucHJvZy1oZWFkZXIge1xyXG4gICAgZGlzcGxheTogZmxleDsganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyBhbGlnbi1pdGVtczogYmFzZWxpbmU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA2cHg7XHJcbiAgICAucHJvZy1sYWJlbCB7IGZvbnQtc2l6ZTogMTJweDsgY29sb3I6ICM5Y2EzYWY7IH1cclxuICAgIC5wcm9nLXBjdCB7IGZvbnQtc2l6ZTogMTNweDsgZm9udC13ZWlnaHQ6IDcwMDsgY29sb3I6ICRicmFuZDsgfVxyXG4gIH1cclxuXHJcbiAgLnByb2ctdHJhY2sge1xyXG4gICAgaGVpZ2h0OiA3cHg7IGJhY2tncm91bmQ6ICNmM2Y0ZjY7IGJvcmRlci1yYWRpdXM6IDk5cHg7IG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAucHJvZy1maWxsIHtcclxuICAgICAgaGVpZ2h0OiAxMDAlOyBib3JkZXItcmFkaXVzOiA5OXB4OyB0cmFuc2l0aW9uOiB3aWR0aCAuNnMgZWFzZTtcclxuICAgICAgJi5wcm9nLXdhcm4gICAgeyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNmNTllMGIsICNkOTc3MDYpOyB9XHJcbiAgICAgICYucHJvZy1hY2NlbnQgIHsgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjOGI1Y2Y2LCAjN2MzYWVkKTsgfVxyXG4gICAgICAmLnByb2ctcHJpbWFyeSB7IGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzEwYjk4MSwgIzA1OTY2OSk7IH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5wcm9nLW1ldGEge1xyXG4gICAgZGlzcGxheTogZmxleDsganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgZm9udC1zaXplOiAxMXB4OyBjb2xvcjogIzljYTNhZjsgbWFyZ2luLXRvcDogNHB4O1xyXG4gICAgLnByb2ctdGFyZ2V0IHsgZm9udC13ZWlnaHQ6IDYwMDsgY29sb3I6ICM0YjU1NjM7IH1cclxuICB9XHJcbn1cclxuXHJcbi8vIMOiwpTCgMOiwpTCgCBTZWF0cyBiYXJcclxuLnNlYXRzLWJhciB7XHJcbiAgaGVpZ2h0OiA1cHg7IGJhY2tncm91bmQ6ICNmM2Y0ZjY7IGJvcmRlci1yYWRpdXM6IDk5cHg7IG92ZXJmbG93OiBoaWRkZW47IG1hcmdpbi1ib3R0b206IDZweDtcclxuICAuc2VhdHMtZmlsbCB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7IGJvcmRlci1yYWRpdXM6IDk5cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICRicmFuZC1kYXJrLCAkYnJhbmQpO1xyXG4gICAgdHJhbnNpdGlvbjogd2lkdGggLjVzIGVhc2U7XHJcbiAgfVxyXG59XHJcblxyXG4uc2VhdHMtbGFiZWwge1xyXG4gIGRpc3BsYXk6IGZsZXg7IGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmb250LXNpemU6IDExcHg7IGNvbG9yOiAjOWNhM2FmOyBtYXJnaW4tYm90dG9tOiA0cHg7XHJcbiAgLmdvYWwtYmFkZ2UgeyBmb250LXNpemU6IDEycHg7IGNvbG9yOiAjMTY2NTM0OyBmb250LXdlaWdodDogNjAwOyB9XHJcbn1cclxuXHJcbi8vIMOiwpTCgMOiwpTCgCBBY3Rpb25zXHJcbi5jYXJkLWFjdGlvbnMge1xyXG4gIGRpc3BsYXk6IGZsZXg7IGZsZXgtd3JhcDogd3JhcDsgZ2FwOiA4cHg7IHBhZGRpbmc6IDE0cHggMjBweCAxOHB4O1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZjNmNGY2OyBtYXJnaW4tdG9wOiBhdXRvOyBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICBidXR0b24sIC5jaGlwLW1lbWJlciwgLmNoaXAtZnVsbCwgLmNoaXAtcHJpdmF0ZSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBnYXA6IDZweDsgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDsgZm9udC13ZWlnaHQ6IDYwMDsgZm9udC1mYW1pbHk6IGluaGVyaXQ7XHJcbiAgICBwYWRkaW5nOiA4cHggMTJweDsgdHJhbnNpdGlvbjogYWxsIC4ycztcclxuICAgIG1hdC1pY29uIHsgZm9udC1zaXplOiAxNXB4OyB3aWR0aDogMTVweDsgaGVpZ2h0OiAxNXB4OyB9XHJcbiAgfVxyXG5cclxuICBidXR0b24geyBib3JkZXI6IG5vbmU7IGN1cnNvcjogcG9pbnRlcjsgfVxyXG5cclxuICAuYnRuLWRldGFpbHMge1xyXG4gICAgYmFja2dyb3VuZDogI2YzZjRmNjsgY29sb3I6ICMzNzQxNTE7XHJcbiAgICAmOmhvdmVyIHsgYmFja2dyb3VuZDogI2U1ZTdlYjsgfVxyXG4gIH1cclxuXHJcbiAgLmJ0bi1qb2luIHtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICRicmFuZC1kYXJrLCAkYnJhbmQpO1xyXG4gICAgY29sb3I6ICNmZmY7IGJveC1zaGFkb3c6IDAgNHB4IDEycHggcmdiYSgxMyw3MSwxNjEsLjI4KTtcclxuICAgICY6aG92ZXIgeyBib3gtc2hhZG93OiAwIDZweCAyMHB4IHJnYmEoMTMsNzEsMTYxLC40Mik7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTsgfVxyXG4gIH1cclxuXHJcbiAgLmJ0bi1tYW5hZ2Uge1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzA2NWY0NiwgIzA1OTY2OSk7XHJcbiAgICBjb2xvcjogI2ZmZjsgYm94LXNoYWRvdzogMCA0cHggMTJweCByZ2JhKDUsMTUwLDEwNSwuMjgpO1xyXG4gICAgJjpob3ZlciB7IGJveC1zaGFkb3c6IDAgNnB4IDIwcHggcmdiYSg1LDE1MCwxMDUsLjQyKTsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpOyB9XHJcbiAgfVxyXG5cclxuICAuYnRuLW1lc3NhZ2Uge1xyXG4gICAgYmFja2dyb3VuZDogI2VmZjZmZjsgY29sb3I6ICMxZDRlZDg7IGJvcmRlcjogMS41cHggc29saWQgI2JmZGJmZTtcclxuICAgICY6aG92ZXIgeyBiYWNrZ3JvdW5kOiAjZGJlYWZlOyB9XHJcbiAgfVxyXG5cclxuICAuYnRuLWxlYXZlIHtcclxuICAgIGJhY2tncm91bmQ6ICNmZWYyZjI7IGNvbG9yOiAjYjkxYzFjOyBib3JkZXI6IDEuNXB4IHNvbGlkICNmZWNhY2E7XHJcbiAgICAmOmhvdmVyIHsgYmFja2dyb3VuZDogI2ZlZTJlMjsgfVxyXG4gIH1cclxuXHJcbiAgLy8gU3RhdHVzIGNoaXBzIChub3QgYnV0dG9ucylcclxuICAuY2hpcC1tZW1iZXIge1xyXG4gICAgYmFja2dyb3VuZDogI2VjZmRmNTsgY29sb3I6ICMwNjVmNDY7XHJcbiAgICBib3JkZXI6IDEuNXB4IHNvbGlkICM2ZWU3Yjc7XHJcbiAgfVxyXG5cclxuICAuY2hpcC1mdWxsIHtcclxuICAgIGJhY2tncm91bmQ6ICNmOWZhZmI7IGNvbG9yOiAjNmI3MjgwO1xyXG4gICAgYm9yZGVyOiAxLjVweCBzb2xpZCAjZTVlN2ViO1xyXG4gIH1cclxuXHJcbiAgLmNoaXAtcHJpdmF0ZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmRmNGZmOyBjb2xvcjogIzdlMjJjZTtcclxuICAgIGJvcmRlcjogMS41cHggc29saWQgI2U5ZDVmZjtcclxuICB9XHJcbn1cclxuXHJcbi8vIMOiwpTCgMOiwpTCgMOiwpTCgCBTa2VsZXRvbiDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcclxuLnNrZWxldG9uLWNhcmQge1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7IGJvcmRlci1yYWRpdXM6ICRyYWRpdXMtY2FyZDtcclxuICBib3gtc2hhZG93OiAkc2hhZG93LWNhcmQ7IG92ZXJmbG93OiBoaWRkZW47XHJcbiAgYW5pbWF0aW9uOiBwdWxzZSAxLjVzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xyXG5cclxuICAuc2stYmFubmVyIHsgaGVpZ2h0OiAxMjBweDsgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2U1ZTdlYiwgI2QxZDVkYik7IH1cclxuICAuc2stYm9keSB7IHBhZGRpbmc6IDIwcHg7IGRpc3BsYXk6IGZsZXg7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IGdhcDogMTBweDsgfVxyXG4gIC5zay1saW5lIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDsgYmFja2dyb3VuZDogI2YzZjRmNjtcclxuICAgICYuc2stdGl0bGUgeyBoZWlnaHQ6IDE4cHg7IHdpZHRoOiA3MCU7IH1cclxuICAgICYuc2stc3ViICAgeyBoZWlnaHQ6IDEzcHg7IHdpZHRoOiA0NSU7IH1cclxuICAgICYuc2stdGV4dCAgeyBoZWlnaHQ6IDEzcHg7IHdpZHRoOiAxMDAlOyB9XHJcbiAgICAmLnNrLXNob3J0IHsgaGVpZ2h0OiAxM3B4OyB3aWR0aDogNTUlOyB9XHJcbiAgfVxyXG4gIC5zay1iYXIgeyBoZWlnaHQ6IDdweDsgYm9yZGVyLXJhZGl1czogOTlweDsgYmFja2dyb3VuZDogI2YzZjRmNjsgbWFyZ2luLXRvcDogNHB4OyB9XHJcbn1cclxuXHJcbi8vIMOiwpTCgMOiwpTCgMOiwpTCgCBFbXB0eSBzdGF0ZSDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcclxuLmVtcHR5LXN0YXRlIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7IHBhZGRpbmc6IDgwcHggMjRweDtcclxuICAuZW1wdHktaWNvbiB7XHJcbiAgICB3aWR0aDogODBweDsgaGVpZ2h0OiA4MHB4OyBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2JhKDEzLDcxLDE2MSwuMTApLCByZ2JhKDIxLDEwMSwxOTIsLjEwKSk7XHJcbiAgICBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgbWFyZ2luOiAwIGF1dG8gMjBweDtcclxuICAgIG1hdC1pY29uIHsgZm9udC1zaXplOiA0MHB4OyB3aWR0aDogNDBweDsgaGVpZ2h0OiA0MHB4OyBjb2xvcjogJGJyYW5kOyB9XHJcbiAgfVxyXG4gIGgzIHsgZm9udC1zaXplOiAyMHB4OyBmb250LXdlaWdodDogNzAwOyBjb2xvcjogIzExMTgyNzsgbWFyZ2luOiAwIDAgOHB4OyB9XHJcbiAgcCAgeyBjb2xvcjogIzZiNzI4MDsgZm9udC1zaXplOiAxNHB4OyBtYXJnaW46IDAgMCAyNHB4OyB9XHJcbn1cclxuXHJcbi8vIMOiwpTCgMOiwpTCgMOiwpTCgCBQYWdpbmF0b3Igw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXHJcbi5wYWdpbmF0b3Itd3JhcCB7XHJcbiAgZGlzcGxheTogZmxleDsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgOjpuZy1kZWVwIG1hdC1wYWdpbmF0b3Ige1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAubWF0LW1kYy1wYWdpbmF0b3ItY29udGFpbmVyIHsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IH1cclxuICB9XHJcbn1cclxuXHJcbi8vIMOiwpTCgMOiwpTCgMOiwpTCgCBSZXNwb25zaXZlIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAuYnJvd3NlLWhlcm8ge1xyXG4gICAgbWFyZ2luOiAwIC0yNHB4IDI4cHg7IHBhZGRpbmc6IDM2cHggMjRweCAzMnB4O1xyXG4gICAgLmhlcm8tY29udGVudCB7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IH1cclxuICAgIC5oZXJvLXN0YXRzIHsgd2lkdGg6IDEwMCU7IGp1c3RpZnktY29udGVudDogY2VudGVyOyB9XHJcbiAgICBoMSB7IGZvbnQtc2l6ZTogMjhweDsgfVxyXG4gIH1cclxuICAuc3Rva3ZlbC1ncmlkIHsgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7IH1cclxuICAuY2FyZC1zdGF0cyB7IGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7IH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcbiAgLmNhcmQtc3RhdHMgeyBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7IC5jLXN0YXQ6bGFzdC1jaGlsZCB7IGdyaWQtY29sdW1uOiBzcGFuIDI7IH0gfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  }));
}
_staticBlock();

/***/ })

}]);
//# sourceMappingURL=src_app_components_stokvel-list_stokvel-list_component_ts.js.map