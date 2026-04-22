"use strict";
(self["webpackChunkestokvel_ui"] = self["webpackChunkestokvel_ui"] || []).push([["src_app_components_stokvel-detail_stokvel-detail_component_ts"],{

/***/ 8707:
/*!***********************************************************************!*\
  !*** ./src/app/components/stokvel-detail/stokvel-detail.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StokvelDetailComponent: () => (/* binding */ StokvelDetailComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 4487);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 9452);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 1318);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 6647);
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../material.module */ 9439);
/* harmony import */ var _utils_StokvelUtils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/StokvelUtils */ 9259);
/* harmony import */ var _stokvel_join_join_stokvel_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../stokvel-join/join-stokvel-modal */ 3570);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2481);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 5422);
/* harmony import */ var _services_stokvel_stokvel_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services/stokvel/stokvel.service */ 7093);
/* harmony import */ var _services_user_user_service_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../services/user/user-service.service */ 2915);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/dialog */ 7760);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ 3840);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/tooltip */ 9710);
var _staticBlock;
















const _c0 = () => [1, 2, 3];
function StokvelDetailComponent_div_0_button_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "button", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function StokvelDetailComponent_div_0_button_33_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r3);
      const stokvel_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().ngIf;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.manageStokvel(stokvel_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "manage_accounts");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, " Manage Stokvel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function StokvelDetailComponent_div_0_ng_container_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 58)(2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, "check_circle");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4, " You're a Member ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "button", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function StokvelDetailComponent_div_0_ng_container_34_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r5);
      const stokvel_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().ngIf;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.messageAdmins(stokvel_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](7, "mail_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8, " Message Admins ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "button", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function StokvelDetailComponent_div_0_ng_container_34_Template_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r5);
      const stokvel_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().ngIf;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.leaveStokvel(stokvel_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](11, "exit_to_app");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](12, " Leave ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
  }
}
function StokvelDetailComponent_div_0_button_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "button", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function StokvelDetailComponent_div_0_button_35_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r6);
      const stokvel_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().ngIf;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.openJoinModal(stokvel_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "person_add");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, " Request to Join ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function StokvelDetailComponent_div_0_span_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 62)(1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "block");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, " Group Full ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function StokvelDetailComponent_div_0_span_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 63)(1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "lock");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, " Private \u00B7 Invite Only ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function StokvelDetailComponent_div_0_div_67_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "div", 28);
  }
}
function StokvelDetailComponent_div_0_div_68_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 25)(1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "flag");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "div")(4, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](6, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8, "Target");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const stokvel_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("R", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](6, 1, stokvel_r4.targetAmount));
  }
}
function StokvelDetailComponent_div_0_div_71_div_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " \uD83C\uDF89 Savings goal reached! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function StokvelDetailComponent_div_0_div_71_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 34)(1, "div", 35)(2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, "show_chart");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5, "Savings Progress");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "span", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](8, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](10, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "div", 67)(12, "div", 68)(13, "span", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](14, "Collected");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "span", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](17, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](18, "div", 71)(19, "span", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](20, "Remaining");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](21, "span", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](23, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](24, StokvelDetailComponent_div_0_div_71_div_24_Template, 2, 0, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const stokvel_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().ngIf;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](8, 7, ctx_r1.getProgress(stokvel_r4), "1.0-0"), "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵstyleProp"]("width", ctx_r1.getProgress(stokvel_r4), "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", "pf-" + ctx_r1.getProgressColor(stokvel_r4));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("R", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](17, 10, ctx_r1.getCollected(stokvel_r4)));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("R", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](23, 12, ctx_r1.getRemaining(stokvel_r4)));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r1.getProgress(stokvel_r4) >= 100);
  }
}
function StokvelDetailComponent_div_0_div_127_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 37)(1, "div", 38)(2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, "flag");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "div")(5, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6, "Target");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](9, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const stokvel_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("R", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](9, 1, stokvel_r4.targetAmount));
  }
}
function StokvelDetailComponent_div_0_div_128_div_9_span_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Default");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function StokvelDetailComponent_div_0_div_128_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 78)(1, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "div", 80)(4, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](8, StokvelDetailComponent_div_0_div_128_div_9_span_8_Template, 2, 0, "span", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const rule_r7 = ctx.$implicit;
    const i_r8 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](i_r8 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](rule_r7.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](rule_r7.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", rule_r7.isDefault);
  }
}
function StokvelDetailComponent_div_0_div_128_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 34)(1, "div", 35)(2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, "gavel");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5, "Group Rules");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "span", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](9, StokvelDetailComponent_div_0_div_128_div_9_Template, 9, 4, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const stokvel_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](stokvel_r4.rules.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", stokvel_r4.rules);
  }
}
function StokvelDetailComponent_div_0_div_158_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 85)(1, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "div", 87)(4, "span", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "span", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "span", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](9, "Admin");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const m_r9 = ctx.$implicit;
    const stokvel_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2).ngIf;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r1.getInitials(m_r9.displayName || m_r9.userName), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](m_r9.displayName || m_r9.userName);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r1.maskEmail(m_r9.userEmail, stokvel_r4));
  }
}
function StokvelDetailComponent_div_0_div_158_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 34)(1, "div", 35)(2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, "admin_panel_settings");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5, "Administrators");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "span", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](9, StokvelDetailComponent_div_0_div_158_div_9_Template, 10, 3, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const stokvel_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](stokvel_r4.adminMembers.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", stokvel_r4.adminMembers);
  }
}
function StokvelDetailComponent_div_0_div_159_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 85)(1, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "div", 87)(4, "span", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "span", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](8, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "span", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const m_r10 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r1.getInitials(m_r10.displayName || m_r10.userName), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](m_r10.displayName || m_r10.userName);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("Joined ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](8, 5, m_r10.joinedDate, "MMM y"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", "ms-" + (m_r10 == null ? null : m_r10.membershipStatus == null ? null : m_r10.membershipStatus.toLowerCase()));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", m_r10.membershipStatus, " ");
  }
}
function StokvelDetailComponent_div_0_div_159_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 34)(1, "div", 35)(2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, "group");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5, "Members");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "span", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](9, StokvelDetailComponent_div_0_div_159_div_9_Template, 11, 8, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const stokvel_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](stokvel_r4.regularMembers.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", stokvel_r4.regularMembers);
  }
}
function StokvelDetailComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 2)(1, "div", 3)(2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](3, "div", 5)(4, "div", 6)(5, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "div", 8)(7, "div", 9)(8, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function StokvelDetailComponent_div_0_Template_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.goBack());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](10, "arrow_back");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](12, "Back");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "div", 11)(14, "span", 12)(15, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](18, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](19, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](21, "div", 14)(22, "div", 15)(23, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](25, "div", 16)(26, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](28, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](30, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](32, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](33, StokvelDetailComponent_div_0_button_33_Template, 4, 0, "button", 19)(34, StokvelDetailComponent_div_0_ng_container_34_Template, 13, 0, "ng-container", 20)(35, StokvelDetailComponent_div_0_button_35_Template, 4, 0, "button", 21)(36, StokvelDetailComponent_div_0_span_36_Template, 4, 0, "span", 22)(37, StokvelDetailComponent_div_0_span_37_Template, 4, 0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](38, "div", 24)(39, "div", 25)(40, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](41, "group");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](42, "div")(43, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](44);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](45, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](46, "Members");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](47, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](48, "div", 25)(49, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](50, "payments");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](51, "div")(52, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](53);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](54, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](55, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](56, "Monthly");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](57, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](58, "div", 25)(59, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](60, "sync");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](61, "div")(62, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](63);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](64, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](65, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](66, "Payout Cycle");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](67, StokvelDetailComponent_div_0_div_67_Template, 1, 0, "div", 29)(68, StokvelDetailComponent_div_0_div_68_Template, 9, 3, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](69, "div", 31)(70, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](71, StokvelDetailComponent_div_0_div_71_Template, 25, 14, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](72, "div", 34)(73, "div", 35)(74, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](75, "info_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](76, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](77, "About this Stokvel");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](78, "div", 36)(79, "div", 37)(80, "div", 38)(81, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](82, "category");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](83, "div")(84, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](85, "Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](86, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](87);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](88, "div", 37)(89, "div", 38)(90, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](91, "lock");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](92, "div")(93, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](94, "Privacy");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](95, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](96);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](97, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](98, "div", 37)(99, "div", 38)(100, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](101, "autorenew");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](102, "div")(103, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](104, "Rotation");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](105, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](106);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](107, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](108, "div", 37)(109, "div", 38)(110, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](111, "admin_panel_settings");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](112, "div")(113, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](114, "Admins");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](115, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](116);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](117, "div", 37)(118, "div", 38)(119, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](120, "calendar_today");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](121, "div")(122, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](123, "Created");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](124, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](125);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](126, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](127, StokvelDetailComponent_div_0_div_127_Template, 10, 3, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](128, StokvelDetailComponent_div_0_div_128_Template, 10, 2, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](129, "div", 42)(130, "div", 43)(131, "div", 35)(132, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](133, "people");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](134, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](135, "Membership");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](136, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](137, "svg", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](138, "circle", 46)(139, "circle", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](140, "div", 48)(141, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](142);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](143, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](144);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](145, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](146, "members");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](147, "div", 52)(148, "div", 53)(149, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](150);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](151, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](152, "Seats open");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](153, "div", 56)(154, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](155);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](156, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](157, "Admins");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](158, StokvelDetailComponent_div_0_div_158_Template, 10, 2, "div", 33)(159, StokvelDetailComponent_div_0_div_159_Template, 10, 2, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const stokvel_r4 = ctx.ngIf;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", ctx_r1.getBannerClass(stokvel_r4.type));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"]((stokvel_r4 == null ? null : stokvel_r4.privacy) === "PUBLIC" ? "lock_open" : "lock");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](18, 37, stokvel_r4 == null ? null : stokvel_r4.privacy), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", "st-" + (stokvel_r4 == null ? null : stokvel_r4.status == null ? null : stokvel_r4.status.toLowerCase()));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", stokvel_r4.status, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r1.getTypeIcon(stokvel_r4.type));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r1.getTypeLabel(stokvel_r4.type));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](stokvel_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](stokvel_r4.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r1.isAdmin(stokvel_r4));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx_r1.isAdmin(stokvel_r4) && ctx_r1.isMember(stokvel_r4));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx_r1.isMember(stokvel_r4) && ctx_r1.isPublicStokvel(stokvel_r4) && !ctx_r1.isFull(stokvel_r4));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx_r1.isMember(stokvel_r4) && ctx_r1.isPublicStokvel(stokvel_r4) && ctx_r1.isFull(stokvel_r4));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx_r1.isMember(stokvel_r4) && !ctx_r1.isPublicStokvel(stokvel_r4));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate2"]("", stokvel_r4.totalMembers ?? stokvel_r4.memberCount + stokvel_r4.adminCount, " / ", stokvel_r4.maxMembers);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("R", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](54, 39, stokvel_r4.monthlyContribution));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](64, 41, stokvel_r4.payoutCycle));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", stokvel_r4.targetAmount);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", stokvel_r4.targetAmount);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", stokvel_r4.targetAmount);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r1.getTypeLabel(stokvel_r4.type));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](97, 43, stokvel_r4.privacy));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](107, 45, stokvel_r4.rotationOrder));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](stokvel_r4.adminCount);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](126, 47, stokvel_r4.createdAt, "mediumDate"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", stokvel_r4.targetAmount);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", stokvel_r4.rules == null ? null : stokvel_r4.rules.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵstyleProp"]("stroke-dashoffset", ctx_r1.getGaugeDashOffset(stokvel_r4));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", "rc-" + ctx_r1.getBannerClass(stokvel_r4.type));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](stokvel_r4.totalMembers ?? stokvel_r4.memberCount + stokvel_r4.adminCount);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("/ ", stokvel_r4.maxMembers);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](stokvel_r4.maxMembers - (stokvel_r4.totalMembers ?? stokvel_r4.memberCount + stokvel_r4.adminCount));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](stokvel_r4.adminCount);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", stokvel_r4.adminMembers == null ? null : stokvel_r4.adminMembers.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", stokvel_r4.regularMembers == null ? null : stokvel_r4.regularMembers.length);
  }
}
function StokvelDetailComponent_ng_template_2_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "div", 98)(2, "div", 99)(3, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function StokvelDetailComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, StokvelDetailComponent_ng_template_2_div_2_Template, 4, 0, "div", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](1, _c0));
  }
}
class StokvelDetailComponent {
  constructor(route, router, stokvelService, userService, dialog, snackBar) {
    this.route = route;
    this.router = router;
    this.stokvelService = stokvelService;
    this.userService = userService;
    this.dialog = dialog;
    this.snackBar = snackBar;
    this.CIRCUMFERENCE = 251.2;
  }
  ngOnInit() {
    this.stokvel$ = this.route.paramMap.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.switchMap)(params => {
      const id = Number(params.get('id'));
      return this.stokvelService.getStokvelById(id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(err => {
        if (err?.status === 403) {
          this.snackBar.open('This is a private stokvel — you need an invitation to view it.', 'Close', {
            duration: 5000
          });
          this.router.navigate(['/stokvels']);
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(null);
        }
        return this.stokvelService.getPublicStokvelById(id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(() => {
          this.snackBar.open('Could not load stokvel details', 'Close', {
            duration: 4000
          });
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(null);
        }));
      }));
    }));
  }
  // ── Membership helpers ──────────────────────────────────────────────────
  isAdmin(s) {
    return s.currentUserRole === 'ADMIN' || s.isOwner === true;
  }
  isMember(s) {
    return s.isMember === true;
  }
  isPublicStokvel(s) {
    return s.privacy?.toUpperCase() === 'PUBLIC';
  }
  isFull(s) {
    const total = s.totalMembers ?? s.memberCount + s.adminCount;
    return total >= s.maxMembers;
  }
  // ── Navigation ──────────────────────────────────────────────────────────
  goBack() {
    this.router.navigate(['/stokvels']);
  }
  manageStokvel(s) {
    this.router.navigate(['/stokvels', s.id, 'manage']);
  }
  // ── Actions ─────────────────────────────────────────────────────────────
  leaveStokvel(stokvel) {
    const confirmed = window.confirm(`Are you sure you want to leave "${stokvel.name}"?\nThis action cannot be undone.`);
    if (!confirmed) return;
    this.stokvelService.leaveStokvel(stokvel.id).subscribe({
      next: () => {
        this.snackBar.open(`You have left "${stokvel.name}"`, 'Close', {
          duration: 4000
        });
        this.router.navigate(['/stokvels']);
      },
      error: err => {
        const msg = err?.error?.message || 'Could not leave stokvel. You may be the last admin.';
        this.snackBar.open(msg, 'Close', {
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
      this.snackBar.open('No admin contact info available.', 'Close', {
        duration: 3000
      });
    }
  }
  openJoinModal(stokvel) {
    this.userService.user$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.switchMap)(user => {
      const ref = this.dialog.open(_stokvel_join_join_stokvel_modal__WEBPACK_IMPORTED_MODULE_7__.JoinStokvelModalComponent, {
        width: '500px',
        data: {
          stokvelId: stokvel.id,
          stokvelName: stokvel.name,
          currentUserId: user?.id ?? '',
          userProfile: user,
          monthlyContribution: stokvel.monthlyContribution
        }
      });
      return ref.afterClosed();
    })).subscribe(result => {
      if (result) this.snackBar.open('Join request submitted!', 'Close', {
        duration: 3000
      });
    });
  }
  // ── Type helpers ────────────────────────────────────────────────────────
  getTypeIcon(type) {
    return {
      INVESTMENT: 'trending_up',
      PROPERTY: 'home',
      FAMILY: 'diversity_3',
      BURIAL: 'favorite',
      ROTATIONAL: 'autorenew'
    }[type?.toUpperCase()] ?? 'savings';
  }
  getTypeLabel(type) {
    return {
      INVESTMENT: 'Investment Club',
      PROPERTY: 'Property Stokvel',
      FAMILY: 'Family Fund',
      BURIAL: 'Burial Society',
      ROTATIONAL: 'Rotational Savings'
    }[type?.toUpperCase()] ?? type;
  }
  getBannerClass(type) {
    return {
      INVESTMENT: 'banner-investment',
      PROPERTY: 'banner-property',
      FAMILY: 'banner-family',
      BURIAL: 'banner-burial',
      ROTATIONAL: 'banner-rotational'
    }[type?.toUpperCase()] ?? 'banner-default';
  }
  // ── Progress ────────────────────────────────────────────────────────────
  getProgress(s) {
    return _utils_StokvelUtils__WEBPACK_IMPORTED_MODULE_6__.StokvelUtils.getProgress(s);
  }
  getProgressColor(s) {
    return _utils_StokvelUtils__WEBPACK_IMPORTED_MODULE_6__.StokvelUtils.progressColor(s);
  }
  getCollected(s) {
    return _utils_StokvelUtils__WEBPACK_IMPORTED_MODULE_6__.StokvelUtils.getCollectedAmount(s);
  }
  getRemaining(s) {
    return _utils_StokvelUtils__WEBPACK_IMPORTED_MODULE_6__.StokvelUtils.getRemainingAmount(s);
  }
  // ── SVG gauge ───────────────────────────────────────────────────────────
  getGaugeDashOffset(s) {
    if (!s.maxMembers) return this.CIRCUMFERENCE;
    const total = s.totalMembers ?? s.memberCount + s.adminCount;
    return this.CIRCUMFERENCE * (1 - Math.min(total / s.maxMembers, 1));
  }
  // ── Avatar initials ─────────────────────────────────────────────────────
  getInitials(name) {
    if (!name) return '?';
    return name.split(' ').slice(0, 2).map(w => w[0]).join('').toUpperCase();
  }
  /**
   * Mask an email for non-admin viewers (POPIA compliance).
   * admin@example.com → ad***@ex***.com
   * Returns the original if the viewer is an admin.
   */
  maskEmail(email, stokvel) {
    if (!email) return '';
    if (this.isAdmin(stokvel)) return email; // admins see full email
    const [local, domain] = email.split('@');
    if (!domain) return email;
    const maskedLocal = local.slice(0, 2) + '***';
    const [domainName, ...tldParts] = domain.split('.');
    const maskedDomain = domainName.slice(0, 2) + '***';
    return `${maskedLocal}@${maskedDomain}.${tldParts.join('.')}`;
  }
  static #_ = _staticBlock = () => (this.ɵfac = function StokvelDetailComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || StokvelDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_stokvel_stokvel_service__WEBPACK_IMPORTED_MODULE_11__.StokvelService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_user_user_service_service__WEBPACK_IMPORTED_MODULE_12__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_14__.MatSnackBar));
  }, this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
    type: StokvelDetailComponent,
    selectors: [["app-stokvel-detail"]],
    decls: 4,
    vars: 4,
    consts: [["loadingTpl", ""], ["class", "detail-page", 4, "ngIf", "ngIfElse"], [1, "detail-page"], [1, "detail-hero", 3, "ngClass"], [1, "hero-orbs"], [1, "orb", "orb-1"], [1, "orb", "orb-2"], [1, "orb", "orb-3"], [1, "hero-inner"], [1, "hero-nav"], [1, "back-btn", 3, "click"], [1, "hero-badges"], [1, "hbadge", "privacy"], [1, "hbadge", "status", 3, "ngClass"], [1, "hero-main"], [1, "type-icon-wrap"], [1, "hero-text"], [1, "type-pill"], [1, "hero-actions"], ["class", "btn-manage", 3, "click", 4, "ngIf"], [4, "ngIf"], ["class", "btn-join", 3, "click", 4, "ngIf"], ["class", "hbadge badge-full", 4, "ngIf"], ["class", "hbadge badge-private", 4, "ngIf"], [1, "hero-ribbon"], [1, "ribbon-stat"], [1, "rv"], [1, "rl"], [1, "ribbon-divider"], ["class", "ribbon-divider", 4, "ngIf"], ["class", "ribbon-stat", 4, "ngIf"], [1, "detail-body"], [1, "col-main"], ["class", "detail-card", 4, "ngIf"], [1, "detail-card"], [1, "card-head"], [1, "info-grid"], [1, "ig-item"], [1, "ig-icon"], [1, "ig-lbl"], [1, "ig-val"], ["class", "ig-item", 4, "ngIf"], [1, "col-side"], [1, "detail-card", "gauge-card"], [1, "gauge-ring"], ["viewBox", "0 0 100 100", 1, "ring-svg"], ["cx", "50", "cy", "50", "r", "40", 1, "ring-bg"], ["cx", "50", "cy", "50", "r", "40", 1, "ring-fill", 3, "ngClass"], [1, "gauge-label"], [1, "gl-num"], [1, "gl-den"], [1, "gl-sub"], [1, "gauge-meta"], [1, "gm-item", "available"], [1, "gm-num"], [1, "gm-lbl"], [1, "gm-item", "admins"], [1, "btn-manage", 3, "click"], [1, "member-tag"], ["matTooltip", "Email the admins", 1, "btn-action", "btn-message", 3, "click"], ["matTooltip", "Request to leave this stokvel", 1, "btn-action", "btn-leave", 3, "click"], [1, "btn-join", 3, "click"], [1, "hbadge", "badge-full"], [1, "hbadge", "badge-private"], [1, "pct-badge"], [1, "prog-track"], [1, "prog-fill", 3, "ngClass"], [1, "prog-row"], [1, "prog-col"], [1, "prog-lbl"], [1, "prog-val", "collected"], [1, "prog-col", "right"], [1, "prog-val", "remaining"], ["class", "goal-reached", 4, "ngIf"], [1, "goal-reached"], [1, "count-tag"], [1, "rules-list"], ["class", "rule-row", 4, "ngFor", "ngForOf"], [1, "rule-row"], [1, "rule-num"], [1, "rule-body"], ["class", "rule-tag default", 4, "ngIf"], [1, "rule-tag", "default"], [1, "member-list"], ["class", "member-row", 4, "ngFor", "ngForOf"], [1, "member-row"], [1, "member-avatar", "admin-av"], [1, "member-info"], [1, "m-name"], [1, "m-email"], [1, "m-role-tag"], [1, "member-avatar"], [1, "m-meta"], [1, "m-status", 3, "ngClass"], [1, "skeleton-hero", "sk-pulse"], [1, "skeleton-body"], ["class", "sk-card sk-pulse", 4, "ngFor", "ngForOf"], [1, "sk-card", "sk-pulse"], [1, "sk-line", "sk-h"], [1, "sk-line", "sk-m"], [1, "sk-line", "sk-s"]],
    template: function StokvelDetailComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](0, StokvelDetailComponent_div_0_Template, 160, 50, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, StokvelDetailComponent_ng_template_2_Template, 3, 2, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);
      }
      if (rf & 2) {
        const loadingTpl_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](1, 2, ctx.stokvel$))("ngIfElse", loadingTpl_r11);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule, _material_module__WEBPACK_IMPORTED_MODULE_5__.MaterialModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__.MatIcon, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__.MatTooltip, _angular_common__WEBPACK_IMPORTED_MODULE_0__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_0__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_0__.TitleCasePipe, _angular_common__WEBPACK_IMPORTED_MODULE_0__.DatePipe],
    styles: ["@keyframes _ngcontent-%COMP%_float {\n  0%, 100% {\n    transform: translateY(0) scale(1);\n  }\n  50% {\n    transform: translateY(-20px) scale(1.04);\n  }\n}\n@keyframes _ngcontent-%COMP%_pulse {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.45;\n  }\n}\n.detail-page[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  background: #f8fafc;\n  font-family: \"Inter\", sans-serif;\n}\n\n.detail-hero[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  padding-bottom: 0;\n  color: #fff;\n}\n.detail-hero[_ngcontent-%COMP%]   .hero-orbs[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  pointer-events: none;\n}\n.detail-hero[_ngcontent-%COMP%]   .hero-orbs[_ngcontent-%COMP%]   .orb[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.07);\n}\n.detail-hero[_ngcontent-%COMP%]   .hero-orbs[_ngcontent-%COMP%]   .orb-1[_ngcontent-%COMP%] {\n  width: 380px;\n  height: 380px;\n  top: -120px;\n  right: -80px;\n  animation: _ngcontent-%COMP%_float 10s ease-in-out infinite;\n}\n.detail-hero[_ngcontent-%COMP%]   .hero-orbs[_ngcontent-%COMP%]   .orb-2[_ngcontent-%COMP%] {\n  width: 220px;\n  height: 220px;\n  bottom: -60px;\n  left: 8%;\n  animation: _ngcontent-%COMP%_float 13s ease-in-out infinite reverse;\n}\n.detail-hero[_ngcontent-%COMP%]   .hero-orbs[_ngcontent-%COMP%]   .orb-3[_ngcontent-%COMP%] {\n  width: 140px;\n  height: 140px;\n  top: 40%;\n  right: 22%;\n  animation: _ngcontent-%COMP%_float 8s ease-in-out infinite;\n}\n.detail-hero[_ngcontent-%COMP%]   .hero-inner[_ngcontent-%COMP%] {\n  position: relative;\n  max-width: 1280px;\n  margin: 0 auto;\n  padding: 28px 32px 0;\n}\n\n.banner-investment[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #1976d2, #0d47a1);\n}\n\n.banner-property[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #388e3c, #1b5e20);\n}\n\n.banner-family[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #f57c00, #e65100);\n}\n\n.banner-burial[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #795548, #3e2723);\n}\n\n.banner-rotational[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #00897b, #004d40);\n}\n\n.banner-default[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #1565c0, #092e6b);\n}\n\n.hero-nav[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 28px;\n}\n\n.back-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  background: rgba(255, 255, 255, 0.18);\n  -webkit-backdrop-filter: blur(8px);\n          backdrop-filter: blur(8px);\n  border: 1px solid rgba(255, 255, 255, 0.3);\n  border-radius: 999px;\n  color: #fff;\n  padding: 8px 18px;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: inherit;\n  transition: background 0.2s;\n}\n.back-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.28);\n}\n.back-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n\n.hero-badges[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n\n.hbadge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 5px 12px;\n  border-radius: 999px;\n  font-size: 12px;\n  font-weight: 600;\n  background: rgba(0, 0, 0, 0.3);\n  letter-spacing: 0.4px;\n}\n.hbadge[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 13px;\n  width: 13px;\n  height: 13px;\n}\n.hbadge.status.st-active[_ngcontent-%COMP%] {\n  background: rgba(16, 185, 129, 0.35);\n}\n.hbadge.status.st-inactive[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.35);\n}\n.hbadge.status.st-closed[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.35);\n}\n.hbadge.status.st-pending[_ngcontent-%COMP%] {\n  background: rgba(139, 92, 246, 0.35);\n}\n\n.hero-main[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 24px;\n  margin-bottom: 36px;\n  flex-wrap: wrap;\n}\n\n.type-icon-wrap[_ngcontent-%COMP%] {\n  width: 72px;\n  height: 72px;\n  border-radius: 20px;\n  flex-shrink: 0;\n  background: rgba(255, 255, 255, 0.2);\n  -webkit-backdrop-filter: blur(6px);\n          backdrop-filter: blur(6px);\n  border: 1.5px solid rgba(255, 255, 255, 0.3);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.type-icon-wrap[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 36px;\n  width: 36px;\n  height: 36px;\n  color: #fff;\n}\n\n.hero-text[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 200px;\n}\n.hero-text[_ngcontent-%COMP%]   .type-pill[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 4px 12px;\n  border-radius: 999px;\n  background: rgba(255, 255, 255, 0.2);\n  font-size: 12px;\n  font-weight: 700;\n  letter-spacing: 0.8px;\n  text-transform: uppercase;\n  margin-bottom: 8px;\n}\n.hero-text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: clamp(24px, 4vw, 40px);\n  font-weight: 800;\n  margin: 0 0 10px;\n  line-height: 1.15;\n}\n.hero-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  opacity: 0.85;\n  font-size: 15px;\n  max-width: 560px;\n  line-height: 1.55;\n}\n\n.hero-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  align-items: flex-end;\n  flex-shrink: 0;\n}\n\n.btn-action[_ngcontent-%COMP%], .btn-manage[_ngcontent-%COMP%], .btn-join[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 20px;\n  border-radius: 12px;\n  border: none;\n  font-size: 13px;\n  font-weight: 700;\n  cursor: pointer;\n  font-family: inherit;\n  transition: all 0.2s;\n}\n.btn-action[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], .btn-manage[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], .btn-join[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 17px;\n  width: 17px;\n  height: 17px;\n}\n\n.btn-join[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #d97706, #f59e0b);\n  color: #fff;\n  box-shadow: 0 4px 16px rgba(217, 119, 6, 0.35);\n}\n.btn-join[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 24px rgba(217, 119, 6, 0.45);\n}\n.btn-join[_ngcontent-%COMP%]:disabled {\n  opacity: 0.55;\n  cursor: not-allowed;\n  transform: none;\n}\n\n.btn-manage[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #065f46, #059669);\n  color: #fff;\n  box-shadow: 0 4px 16px rgba(5, 150, 105, 0.35);\n}\n.btn-manage[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 24px rgba(5, 150, 105, 0.45);\n}\n\n.btn-message[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.15);\n  border: 1.5px solid rgba(255, 255, 255, 0.35);\n  color: #fff;\n}\n.btn-message[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.25);\n}\n\n.btn-leave[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.15);\n  border: 1.5px solid rgba(239, 68, 68, 0.4);\n  color: #fca5a5;\n}\n.btn-leave[_ngcontent-%COMP%]:hover {\n  background: rgba(239, 68, 68, 0.25);\n}\n\n.member-tag[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  background: rgba(16, 185, 129, 0.18);\n  border: 1px solid rgba(16, 185, 129, 0.45);\n  color: #ecfdf5;\n  padding: 10px 18px;\n  border-radius: 12px;\n  font-size: 13px;\n  font-weight: 700;\n}\n.member-tag[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  color: #6ee7b7;\n}\n\n.badge-full[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 14px;\n  border-radius: 10px;\n  font-size: 12px;\n  font-weight: 700;\n  background: rgba(255, 255, 255, 0.12);\n  border: 1px solid rgba(255, 255, 255, 0.25);\n  color: rgba(255, 255, 255, 0.7);\n}\n.badge-full[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n}\n\n.badge-private[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 14px;\n  border-radius: 10px;\n  font-size: 12px;\n  font-weight: 700;\n  background: rgba(233, 213, 255, 0.15);\n  border: 1px solid rgba(233, 213, 255, 0.4);\n  color: #e9d5ff;\n}\n.badge-private[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n}\n\n.owner-tag[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  background: rgba(255, 255, 255, 0.18);\n  border: 1px solid rgba(255, 255, 255, 0.35);\n  padding: 8px 16px;\n  border-radius: 12px;\n  font-size: 13px;\n  font-weight: 600;\n}\n.owner-tag[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n  color: #ffd54f;\n}\n\n.hero-ribbon[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0;\n  background: rgba(0, 0, 0, 0.25);\n  -webkit-backdrop-filter: blur(12px);\n          backdrop-filter: blur(12px);\n  border-radius: 16px 16px 0 0;\n  overflow: hidden;\n}\n\n.ribbon-stat[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 18px 28px;\n  flex: 1;\n}\n.ribbon-stat[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 22px;\n  width: 22px;\n  height: 22px;\n  opacity: 0.8;\n}\n.ribbon-stat[_ngcontent-%COMP%]   .rv[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 18px;\n  font-weight: 800;\n  line-height: 1.1;\n}\n.ribbon-stat[_ngcontent-%COMP%]   .rl[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 11px;\n  opacity: 0.7;\n  text-transform: uppercase;\n  letter-spacing: 0.6px;\n}\n\n.ribbon-divider[_ngcontent-%COMP%] {\n  width: 1px;\n  height: 36px;\n  background: rgba(255, 255, 255, 0.2);\n  flex-shrink: 0;\n}\n\n.detail-body[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 360px;\n  gap: 24px;\n  max-width: 1280px;\n  margin: 0 auto;\n  padding: 28px 32px 56px;\n}\n\n.col-main[_ngcontent-%COMP%], .col-side[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n\n.detail-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 20px;\n  box-shadow: 0 4px 24px rgba(13, 71, 161, 0.08), 0 1px 4px rgba(13, 71, 161, 0.04);\n  padding: 24px;\n  overflow: hidden;\n}\n\n.card-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 20px;\n}\n.card-head[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #1565c0;\n  font-size: 22px;\n  width: 22px;\n  height: 22px;\n}\n.card-head[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 16px;\n  font-weight: 700;\n  color: #111827;\n  flex: 1;\n}\n\n.count-tag[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #0d47a1, #1565c0);\n  color: #fff;\n  font-size: 12px;\n  font-weight: 700;\n  padding: 2px 10px;\n  border-radius: 999px;\n}\n\n.pct-badge[_ngcontent-%COMP%] {\n  background: rgba(21, 101, 192, 0.1);\n  color: #1565c0;\n  font-size: 14px;\n  font-weight: 800;\n  padding: 3px 12px;\n  border-radius: 999px;\n}\n\n.prog-track[_ngcontent-%COMP%] {\n  height: 10px;\n  background: #f3f4f6;\n  border-radius: 99px;\n  overflow: hidden;\n  margin-bottom: 14px;\n}\n.prog-track[_ngcontent-%COMP%]   .prog-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 99px;\n  transition: width 0.8s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.prog-track[_ngcontent-%COMP%]   .prog-fill.pf-warn[_ngcontent-%COMP%] {\n  background: linear-gradient(90deg, #f59e0b, #d97706);\n}\n.prog-track[_ngcontent-%COMP%]   .prog-fill.pf-accent[_ngcontent-%COMP%] {\n  background: linear-gradient(90deg, #8b5cf6, #7c3aed);\n}\n.prog-track[_ngcontent-%COMP%]   .prog-fill.pf-primary[_ngcontent-%COMP%] {\n  background: linear-gradient(90deg, #10b981, #059669);\n}\n\n.prog-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n\n.prog-col[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.prog-col.right[_ngcontent-%COMP%] {\n  align-items: flex-end;\n}\n.prog-col[_ngcontent-%COMP%]   .prog-lbl[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #9ca3af;\n}\n.prog-col[_ngcontent-%COMP%]   .prog-val[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 800;\n}\n.prog-col[_ngcontent-%COMP%]   .prog-val.collected[_ngcontent-%COMP%] {\n  color: #10b981;\n}\n.prog-col[_ngcontent-%COMP%]   .prog-val.remaining[_ngcontent-%COMP%] {\n  color: #6b7280;\n}\n\n.goal-reached[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 12px;\n  background: #dcfce7;\n  color: #166534;\n  padding: 10px;\n  border-radius: 10px;\n  font-size: 14px;\n  font-weight: 600;\n}\n\n.info-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));\n  gap: 12px;\n}\n\n.ig-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  background: #f9fafb;\n  border-radius: 12px;\n  padding: 12px;\n}\n.ig-item[_ngcontent-%COMP%]   .ig-icon[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 10px;\n  background: rgba(21, 101, 192, 0.1);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.ig-item[_ngcontent-%COMP%]   .ig-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #1565c0;\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.ig-item[_ngcontent-%COMP%]   .ig-lbl[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 11px;\n  color: #9ca3af;\n}\n.ig-item[_ngcontent-%COMP%]   .ig-val[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 14px;\n  font-weight: 700;\n  color: #111827;\n  margin-top: 2px;\n}\n\n.rules-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n}\n\n.rule-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 14px;\n  padding: 14px 0;\n  border-bottom: 1px solid #f3f4f6;\n}\n.rule-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.rule-row[_ngcontent-%COMP%]   .rule-num[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  border-radius: 8px;\n  flex-shrink: 0;\n  background: linear-gradient(135deg, #0d47a1, #1565c0);\n  color: #fff;\n  font-size: 12px;\n  font-weight: 800;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-top: 2px;\n}\n.rule-row[_ngcontent-%COMP%]   .rule-body[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.rule-row[_ngcontent-%COMP%]   .rule-body[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #111827;\n}\n.rule-row[_ngcontent-%COMP%]   .rule-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 4px 0 0;\n  font-size: 13px;\n  color: #6b7280;\n  line-height: 1.5;\n}\n.rule-row[_ngcontent-%COMP%]   .rule-tag[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 700;\n  padding: 2px 8px;\n  border-radius: 999px;\n}\n.rule-row[_ngcontent-%COMP%]   .rule-tag.default[_ngcontent-%COMP%] {\n  background: #ede9fe;\n  color: #5b21b6;\n}\n\n.gauge-card[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.gauge-ring[_ngcontent-%COMP%] {\n  position: relative;\n  width: 160px;\n  margin: 0 auto 20px;\n}\n.gauge-ring[_ngcontent-%COMP%]   .ring-svg[_ngcontent-%COMP%] {\n  width: 100%;\n  transform: rotate(-90deg);\n}\n.gauge-ring[_ngcontent-%COMP%]   .ring-bg[_ngcontent-%COMP%] {\n  fill: none;\n  stroke: #f3f4f6;\n  stroke-width: 8;\n}\n.gauge-ring[_ngcontent-%COMP%]   .ring-fill[_ngcontent-%COMP%] {\n  fill: none;\n  stroke-width: 8;\n  stroke-linecap: round;\n  stroke-dasharray: 251.2;\n  transition: stroke-dashoffset 0.9s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.gauge-ring[_ngcontent-%COMP%]   .rc-banner-investment[_ngcontent-%COMP%] {\n  stroke: #1976d2;\n}\n.gauge-ring[_ngcontent-%COMP%]   .rc-banner-property[_ngcontent-%COMP%] {\n  stroke: #388e3c;\n}\n.gauge-ring[_ngcontent-%COMP%]   .rc-banner-family[_ngcontent-%COMP%] {\n  stroke: #f57c00;\n}\n.gauge-ring[_ngcontent-%COMP%]   .rc-banner-burial[_ngcontent-%COMP%] {\n  stroke: #795548;\n}\n.gauge-ring[_ngcontent-%COMP%]   .rc-banner-rotational[_ngcontent-%COMP%] {\n  stroke: #8e24aa;\n}\n.gauge-ring[_ngcontent-%COMP%]   .rc-banner-default[_ngcontent-%COMP%] {\n  stroke: #1565c0;\n}\n.gauge-ring[_ngcontent-%COMP%]   .gauge-label[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.gauge-ring[_ngcontent-%COMP%]   .gauge-label[_ngcontent-%COMP%]   .gl-num[_ngcontent-%COMP%] {\n  font-size: 32px;\n  font-weight: 800;\n  color: #111827;\n  line-height: 1;\n}\n.gauge-ring[_ngcontent-%COMP%]   .gauge-label[_ngcontent-%COMP%]   .gl-den[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #9ca3af;\n}\n.gauge-ring[_ngcontent-%COMP%]   .gauge-label[_ngcontent-%COMP%]   .gl-sub[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #9ca3af;\n  text-transform: uppercase;\n  letter-spacing: 0.6px;\n}\n\n.gauge-meta[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  gap: 32px;\n}\n.gauge-meta[_ngcontent-%COMP%]   .gm-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 2px;\n}\n.gauge-meta[_ngcontent-%COMP%]   .gm-num[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 800;\n}\n.gauge-meta[_ngcontent-%COMP%]   .gm-lbl[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #9ca3af;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.gauge-meta[_ngcontent-%COMP%]   .available[_ngcontent-%COMP%]   .gm-num[_ngcontent-%COMP%] {\n  color: #10b981;\n}\n.gauge-meta[_ngcontent-%COMP%]   .admins[_ngcontent-%COMP%]   .gm-num[_ngcontent-%COMP%] {\n  color: #1565c0;\n}\n\n.member-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n}\n\n.member-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 10px 0;\n  border-bottom: 1px solid #f9fafb;\n}\n.member-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n\n.member-avatar[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 12px;\n  flex-shrink: 0;\n  background: linear-gradient(135deg, #e5e7eb, #d1d5db);\n  color: #374151;\n  font-size: 14px;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.member-avatar.admin-av[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, rgba(21, 101, 192, 0.15), rgba(5, 150, 105, 0.2));\n  color: #1565c0;\n}\n\n.member-info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.member-info[_ngcontent-%COMP%]   .m-name[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 14px;\n  font-weight: 600;\n  color: #111827;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.member-info[_ngcontent-%COMP%]   .m-email[_ngcontent-%COMP%], .member-info[_ngcontent-%COMP%]   .m-meta[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 12px;\n  color: #9ca3af;\n}\n\n.m-role-tag[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 700;\n  padding: 3px 9px;\n  border-radius: 999px;\n  background: rgba(21, 101, 192, 0.1);\n  color: #1565c0;\n  flex-shrink: 0;\n}\n\n.m-status[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 700;\n  padding: 3px 9px;\n  border-radius: 999px;\n  flex-shrink: 0;\n}\n.m-status.ms-active[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #166534;\n}\n.m-status.ms-inactive[_ngcontent-%COMP%] {\n  background: #fef9c3;\n  color: #854d0e;\n}\n.m-status.ms-pending[_ngcontent-%COMP%] {\n  background: #ede9fe;\n  color: #5b21b6;\n}\n\n.sk-pulse[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_pulse 1.5s ease-in-out infinite;\n}\n\n.skeleton-hero[_ngcontent-%COMP%] {\n  height: 340px;\n  background: linear-gradient(135deg, #e5e7eb, #d1d5db);\n  margin-bottom: 28px;\n}\n\n.skeleton-body[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 360px;\n  gap: 24px;\n  max-width: 1280px;\n  margin: 0 auto;\n  padding: 0 32px;\n}\n\n.sk-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 20px;\n  padding: 24px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n\n.sk-line[_ngcontent-%COMP%] {\n  border-radius: 6px;\n  background: #f3f4f6;\n}\n.sk-line.sk-h[_ngcontent-%COMP%] {\n  height: 18px;\n  width: 50%;\n}\n.sk-line.sk-m[_ngcontent-%COMP%] {\n  height: 14px;\n  width: 85%;\n}\n.sk-line.sk-s[_ngcontent-%COMP%] {\n  height: 14px;\n  width: 65%;\n}\n\n@media (max-width: 1024px) {\n  .detail-body[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .col-side[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  }\n  .skeleton-body[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n@media (max-width: 640px) {\n  .detail-hero[_ngcontent-%COMP%]   .hero-inner[_ngcontent-%COMP%] {\n    padding: 20px 16px 0;\n  }\n  .detail-body[_ngcontent-%COMP%] {\n    padding: 20px 16px 40px;\n  }\n  .hero-main[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .hero-actions[_ngcontent-%COMP%] {\n    align-items: flex-start;\n  }\n  .hero-ribbon[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n    border-radius: 12px 12px 0 0;\n  }\n  .ribbon-stat[_ngcontent-%COMP%] {\n    flex: none;\n    width: 50%;\n    border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n  }\n  .ribbon-divider[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .info-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n  }\n  .col-side[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9zdG9rdmVsLWRldGFpbC9zdG9rdmVsLWRldGFpbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPQTtFQUNFO0lBQVcsaUNBQUE7RUFMWDtFQU1BO0lBQVksd0NBQUE7RUFIWjtBQUNGO0FBSUE7RUFDRTtJQUFXLFVBQUE7RUFEWDtFQUVBO0lBQVksYUFBQTtFQUNaO0FBQ0Y7QUFFQTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQ0FBQTtBQUFGOztBQUlBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQURGO0FBR0U7RUFBYSxrQkFBQTtFQUFvQixRQUFBO0VBQVUsb0JBQUE7QUFFN0M7QUFESTtFQUFPLGtCQUFBO0VBQW9CLGtCQUFBO0VBQW9CLHFDQUFBO0FBTW5EO0FBTEk7RUFBUyxZQUFBO0VBQWMsYUFBQTtFQUFlLFdBQUE7RUFBYSxZQUFBO0VBQWMseUNBQUE7QUFZckU7QUFYSTtFQUFTLFlBQUE7RUFBYyxhQUFBO0VBQWUsYUFBQTtFQUFlLFFBQUE7RUFBVyxpREFBQTtBQWtCcEU7QUFqQkk7RUFBUyxZQUFBO0VBQWMsYUFBQTtFQUFlLFFBQUE7RUFBYSxVQUFBO0VBQVksd0NBQUE7QUF3Qm5FO0FBckJFO0VBQWMsa0JBQUE7RUFBb0IsaUJBQUE7RUFBbUIsY0FBQTtFQUFnQixvQkFBQTtBQTJCdkU7O0FBdkJBO0VBQXFCLHFEQUFBO0FBMkJyQjs7QUExQkE7RUFBcUIscURBQUE7QUE4QnJCOztBQTdCQTtFQUFxQixxREFBQTtBQWlDckI7O0FBaENBO0VBQXFCLHFEQUFBO0FBb0NyQjs7QUFuQ0E7RUFBcUIscURBQUE7QUF1Q3JCOztBQXRDQTtFQUFxQixxREFBQTtBQTBDckI7O0FBdkNBO0VBQ0UsYUFBQTtFQUFlLDhCQUFBO0VBQWdDLG1CQUFBO0VBQXFCLG1CQUFBO0FBNkN0RTs7QUExQ0E7RUFDRSxvQkFBQTtFQUFz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QTVaQTtFQUFZLDBDQUFBO0FBZ2FaOztBQS9aQTtFQUFpQixhQUFBO0VBQWUscURBQUE7RUFBdUQsbUJBQUE7QUFxYXZGOztBQXBhQTtFQUFpQixhQUFBO0VBQWUsZ0NBQUE7RUFBa0MsU0FBQTtFQUFXLGlCQUFBO0VBQW1CLGNBQUE7RUFBZ0IsZUFBQTtBQTZhaEg7O0FBNWFBO0VBQ0UsZ0JBQUE7RUFBa0IsbUJBL1hWO0VBK1hrQyxhQUFBO0VBQzFDLHlDQUFBO0VBQ0EsYUFBQTtFQUFlLHNCQUFBO0VBQXdCLFNBQUE7QUFtYnpDOztBQWpiQTtFQUFXLGtCQUFBO0VBQW9CLG1CQUFBO0FBc2IvQjtBQXJiRTtFQUFTLFlBQUE7RUFBYyxVQUFBO0FBeWJ6QjtBQXhiRTtFQUFTLFlBQUE7RUFBYyxVQUFBO0FBNGJ6QjtBQTNiRTtFQUFTLFlBQUE7RUFBYyxVQUFBO0FBK2J6Qjs7QUEzYkE7RUFDRTtJQUFlLDBCQUFBO0VBK2JmO0VBOWJBO0lBQVksYUFBQTtJQUFlLDREQUFBO0VBa2MzQjtFQWpjQTtJQUFpQiwwQkFBQTtFQW9jakI7QUFDRjtBQWxjQTtFQUNFO0lBQTJCLG9CQUFBO0VBcWMzQjtFQXBjQTtJQUFlLHVCQUFBO0VBdWNmO0VBdGNBO0lBQWEsc0JBQUE7RUF5Y2I7RUF4Y0E7SUFBZ0IsdUJBQUE7RUEyY2hCO0VBMWNBO0lBQWUsZUFBQTtJQUFpQiw0QkFBQTtFQThjaEM7RUE3Y0E7SUFBZSxVQUFBO0lBQVksVUFBQTtJQUFZLGlEQUFBO0VBa2R2QztFQWpkQTtJQUFrQixhQUFBO0VBb2RsQjtFQW5kQTtJQUFhLDhCQUFBO0VBc2RiO0VBcmRBO0lBQVksMEJBQUE7RUF3ZFo7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi8vIMOiwpTCgMOiwpTCgMOiwpTCgCBWYXJpYWJsZXMgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXHJcbiRicmFuZDogICAjMTU2NWMwO1xyXG4kbmF2eTogICAgIzBkNDdhMTtcclxuJHRlYWw6ICAgICMwNTk2Njk7XHJcbiRyYWRpdXM6ICAyMHB4O1xyXG4kc2hhZG93OiAgMCA0cHggMjRweCByZ2JhKDEzLDcxLDE2MSwuMDgpLCAwIDFweCA0cHggcmdiYSgxMyw3MSwxNjEsLjA0KTtcclxuXHJcbkBrZXlmcmFtZXMgZmxvYXQge1xyXG4gIDAlLCAxMDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApIHNjYWxlKDEpOyB9XHJcbiAgNTAlICAgICAgIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMHB4KSBzY2FsZSgxLjA0KTsgfVxyXG59XHJcbkBrZXlmcmFtZXMgcHVsc2Uge1xyXG4gIDAlLCAxMDAlIHsgb3BhY2l0eTogMTsgfVxyXG4gIDUwJSAgICAgICB7IG9wYWNpdHk6IC40NTsgfVxyXG59XHJcblxyXG4vLyDDosKUwoDDosKUwoDDosKUwoAgUGFnZSB3cmFwcGVyIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxyXG4uZGV0YWlsLXBhZ2Uge1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gIGJhY2tncm91bmQ6ICNmOGZhZmM7XHJcbiAgZm9udC1mYW1pbHk6ICdJbnRlcicsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi8vIMOiwpTCgMOiwpTCgMOiwpTCgCBIZXJvIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxyXG4uZGV0YWlsLWhlcm8ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHBhZGRpbmctYm90dG9tOiAwO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG5cclxuICAuaGVyby1vcmJzIHsgcG9zaXRpb246IGFic29sdXRlOyBpbnNldDogMDsgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICAub3JiIHsgcG9zaXRpb246IGFic29sdXRlOyBib3JkZXItcmFkaXVzOiA1MCU7IGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsLjA3KTsgfVxyXG4gICAgLm9yYi0xIHsgd2lkdGg6IDM4MHB4OyBoZWlnaHQ6IDM4MHB4OyB0b3A6IC0xMjBweDsgcmlnaHQ6IC04MHB4OyBhbmltYXRpb246IGZsb2F0IDEwcyBlYXNlLWluLW91dCBpbmZpbml0ZTsgfVxyXG4gICAgLm9yYi0yIHsgd2lkdGg6IDIyMHB4OyBoZWlnaHQ6IDIyMHB4OyBib3R0b206IC02MHB4OyBsZWZ0OiA4JTsgIGFuaW1hdGlvbjogZmxvYXQgMTNzIGVhc2UtaW4tb3V0IGluZmluaXRlIHJldmVyc2U7IH1cclxuICAgIC5vcmItMyB7IHdpZHRoOiAxNDBweDsgaGVpZ2h0OiAxNDBweDsgdG9wOiA0MCU7ICAgIHJpZ2h0OiAyMiU7IGFuaW1hdGlvbjogZmxvYXQgOHMgIGVhc2UtaW4tb3V0IGluZmluaXRlOyB9XHJcbiAgfVxyXG5cclxuICAuaGVyby1pbm5lciB7IHBvc2l0aW9uOiByZWxhdGl2ZTsgbWF4LXdpZHRoOiAxMjgwcHg7IG1hcmdpbjogMCBhdXRvOyBwYWRkaW5nOiAyOHB4IDMycHggMDsgfVxyXG59XHJcblxyXG4vLyBUeXBlIGdyYWRpZW50cyDDosKAwpQgbmF2eSBmaW5hbmNpYWwgcGFsZXR0ZVxyXG4uYmFubmVyLWludmVzdG1lbnQgeyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMTk3NmQyLCAjMGQ0N2ExKTsgfVxyXG4uYmFubmVyLXByb3BlcnR5ICAgeyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMzg4ZTNjLCAjMWI1ZTIwKTsgfVxyXG4uYmFubmVyLWZhbWlseSAgICAgeyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZjU3YzAwLCAjZTY1MTAwKTsgfVxyXG4uYmFubmVyLWJ1cmlhbCAgICAgeyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjNzk1NTQ4LCAjM2UyNzIzKTsgfVxyXG4uYmFubmVyLXJvdGF0aW9uYWwgeyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMDA4OTdiLCAjMDA0ZDQwKTsgfVxyXG4uYmFubmVyLWRlZmF1bHQgICAgeyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMTU2NWMwLCAjMDkyZTZiKTsgfVxyXG5cclxuLy8gw6LClMKAw6LClMKAIE5hdiByb3dcclxuLmhlcm8tbmF2IHtcclxuICBkaXNwbGF5OiBmbGV4OyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IGFsaWduLWl0ZW1zOiBjZW50ZXI7IG1hcmdpbi1ib3R0b206IDI4cHg7XHJcbn1cclxuXHJcbi5iYWNrLWJ0biB7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGdhcDogNnB4O1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsLjE4KTsgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDhweCk7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwuMyk7IGJvcmRlci1yYWRpdXM6IDk5OXB4O1xyXG4gIGNvbG9yOiAjZmZmOyBwYWRkaW5nOiA4cHggMThweDtcclxuICBmb250LXNpemU6IDE0cHg7IGZvbnQtd2VpZ2h0OiA2MDA7IGN1cnNvcjogcG9pbnRlcjsgZm9udC1mYW1pbHk6IGluaGVyaXQ7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAuMnM7XHJcbiAgJjpob3ZlciB7IGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsLjI4KTsgfVxyXG4gIG1hdC1pY29uIHsgZm9udC1zaXplOiAxOHB4OyB3aWR0aDogMThweDsgaGVpZ2h0OiAxOHB4OyB9XHJcbn1cclxuXHJcbi5oZXJvLWJhZGdlcyB7IGRpc3BsYXk6IGZsZXg7IGdhcDogOHB4OyB9XHJcbi5oYmFkZ2Uge1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDRweDtcclxuICBwYWRkaW5nOiA1cHggMTJweDsgYm9yZGVyLXJhZGl1czogOTk5cHg7IGZvbnQtc2l6ZTogMTJweDsgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLC4zKTsgbGV0dGVyLXNwYWNpbmc6IC40cHg7XHJcbiAgbWF0LWljb24geyBmb250LXNpemU6IDEzcHg7IHdpZHRoOiAxM3B4OyBoZWlnaHQ6IDEzcHg7IH1cclxuXHJcbiAgJi5zdGF0dXMge1xyXG4gICAgJi5zdC1hY3RpdmUgIHsgYmFja2dyb3VuZDogcmdiYSgxNiwxODUsMTI5LC4zNSk7IH1cclxuICAgICYuc3QtaW5hY3RpdmV7IGJhY2tncm91bmQ6IHJnYmEoMjQ1LDE1OCwxMSwuMzUpOyB9XHJcbiAgICAmLnN0LWNsb3NlZCAgeyBiYWNrZ3JvdW5kOiByZ2JhKDIzOSw2OCw2OCwuMzUpOyB9XHJcbiAgICAmLnN0LXBlbmRpbmcgeyBiYWNrZ3JvdW5kOiByZ2JhKDEzOSw5MiwyNDYsLjM1KTsgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gw6LClMKAw6LClMKAIE1haW4gaGVybyBjb250ZW50XHJcbi5oZXJvLW1haW4ge1xyXG4gIGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0OyBnYXA6IDI0cHg7IG1hcmdpbi1ib3R0b206IDM2cHg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG59XHJcblxyXG4udHlwZS1pY29uLXdyYXAge1xyXG4gIHdpZHRoOiA3MnB4OyBoZWlnaHQ6IDcycHg7IGJvcmRlci1yYWRpdXM6IDIwcHg7IGZsZXgtc2hyaW5rOiAwO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsLjIpOyBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNnB4KTtcclxuICBib3JkZXI6IDEuNXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsLjMpO1xyXG4gIGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIG1hdC1pY29uIHsgZm9udC1zaXplOiAzNnB4OyB3aWR0aDogMzZweDsgaGVpZ2h0OiAzNnB4OyBjb2xvcjogI2ZmZjsgfVxyXG59XHJcblxyXG4uaGVyby10ZXh0IHtcclxuICBmbGV4OiAxOyBtaW4td2lkdGg6IDIwMHB4O1xyXG4gIC50eXBlLXBpbGwge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrOyBwYWRkaW5nOiA0cHggMTJweDsgYm9yZGVyLXJhZGl1czogOTk5cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LC4yKTsgZm9udC1zaXplOiAxMnB4OyBmb250LXdlaWdodDogNzAwO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC44cHg7IHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7IG1hcmdpbi1ib3R0b206IDhweDtcclxuICB9XHJcbiAgaDEgeyBmb250LXNpemU6IGNsYW1wKDI0cHgsNHZ3LDQwcHgpOyBmb250LXdlaWdodDogODAwOyBtYXJnaW46IDAgMCAxMHB4OyBsaW5lLWhlaWdodDogMS4xNTsgfVxyXG4gIHAgIHsgbWFyZ2luOiAwOyBvcGFjaXR5OiAuODU7IGZvbnQtc2l6ZTogMTVweDsgbWF4LXdpZHRoOiA1NjBweDsgbGluZS1oZWlnaHQ6IDEuNTU7IH1cclxufVxyXG5cclxuLmhlcm8tYWN0aW9ucyB7IGRpc3BsYXk6IGZsZXg7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IGdhcDogMTBweDsgYWxpZ24taXRlbXM6IGZsZXgtZW5kOyBmbGV4LXNocmluazogMDsgfVxyXG5cclxuLy8gU2hhcmVkIGhlcm8gYnV0dG9uIGJhc2VcclxuJWhlcm8tYnRuIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZ2FwOiA4cHg7XHJcbiAgcGFkZGluZzogMTBweCAyMHB4OyBib3JkZXItcmFkaXVzOiAxMnB4OyBib3JkZXI6IG5vbmU7XHJcbiAgZm9udC1zaXplOiAxM3B4OyBmb250LXdlaWdodDogNzAwOyBjdXJzb3I6IHBvaW50ZXI7IGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG4gIHRyYW5zaXRpb246IGFsbCAuMnM7XHJcbiAgbWF0LWljb24geyBmb250LXNpemU6IDE3cHg7IHdpZHRoOiAxN3B4OyBoZWlnaHQ6IDE3cHg7IH1cclxufVxyXG5cclxuLmJ0bi1qb2luIHtcclxuICBAZXh0ZW5kICVoZXJvLWJ0bjtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZDk3NzA2LCAjZjU5ZTBiKTtcclxuICBjb2xvcjogI2ZmZjsgYm94LXNoYWRvdzogMCA0cHggMTZweCByZ2JhKDIxNywxMTksNiwuMzUpO1xyXG4gICY6aG92ZXI6bm90KDpkaXNhYmxlZCkgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7IGJveC1zaGFkb3c6IDAgOHB4IDI0cHggcmdiYSgyMTcsMTE5LDYsLjQ1KTsgfVxyXG4gICY6ZGlzYWJsZWQgeyBvcGFjaXR5OiAuNTU7IGN1cnNvcjogbm90LWFsbG93ZWQ7IHRyYW5zZm9ybTogbm9uZTsgfVxyXG59XHJcblxyXG4uYnRuLW1hbmFnZSB7XHJcbiAgQGV4dGVuZCAlaGVyby1idG47XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzA2NWY0NiwgIzA1OTY2OSk7XHJcbiAgY29sb3I6ICNmZmY7IGJveC1zaGFkb3c6IDAgNHB4IDE2cHggcmdiYSg1LDE1MCwxMDUsLjM1KTtcclxuICAmOmhvdmVyIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpOyBib3gtc2hhZG93OiAwIDhweCAyNHB4IHJnYmEoNSwxNTAsMTA1LC40NSk7IH1cclxufVxyXG5cclxuLy8gTWVtYmVyIGFjdGlvbiBidXR0b25zIHNob3duIGluIGhlcm9cclxuLmJ0bi1hY3Rpb24ge1xyXG4gIEBleHRlbmQgJWhlcm8tYnRuO1xyXG59XHJcblxyXG4uYnRuLW1lc3NhZ2Uge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsLjE1KTsgYm9yZGVyOiAxLjVweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LC4zNSk7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgJjpob3ZlciB7IGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsLjI1KTsgfVxyXG59XHJcblxyXG4uYnRuLWxlYXZlIHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDIzOSw2OCw2OCwuMTUpOyBib3JkZXI6IDEuNXB4IHNvbGlkIHJnYmEoMjM5LDY4LDY4LC40KTtcclxuICBjb2xvcjogI2ZjYTVhNTtcclxuICAmOmhvdmVyIHsgYmFja2dyb3VuZDogcmdiYSgyMzksNjgsNjgsLjI1KTsgfVxyXG59XHJcblxyXG4ubWVtYmVyLXRhZyB7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGdhcDogNnB4O1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMTYsMTg1LDEyOSwuMTgpOyBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDE2LDE4NSwxMjksLjQ1KTtcclxuICBjb2xvcjogI2VjZmRmNTtcclxuICBwYWRkaW5nOiAxMHB4IDE4cHg7IGJvcmRlci1yYWRpdXM6IDEycHg7IGZvbnQtc2l6ZTogMTNweDsgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBtYXQtaWNvbiB7IGZvbnQtc2l6ZTogMThweDsgd2lkdGg6IDE4cHg7IGhlaWdodDogMThweDsgY29sb3I6ICM2ZWU3Yjc7IH1cclxufVxyXG5cclxuLy8gUHJpdmFjeSBiYWRnZXMgdXNlZCBpbmxpbmUgaW4gaGVyby1hY3Rpb25zXHJcbi5iYWRnZS1mdWxsIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZ2FwOiA2cHg7XHJcbiAgcGFkZGluZzogOHB4IDE0cHg7IGJvcmRlci1yYWRpdXM6IDEwcHg7IGZvbnQtc2l6ZTogMTJweDsgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LC4xMik7IGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsLjI1KTtcclxuICBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwuNyk7XHJcbiAgbWF0LWljb24geyBmb250LXNpemU6IDE2cHg7IHdpZHRoOiAxNnB4OyBoZWlnaHQ6IDE2cHg7IH1cclxufVxyXG5cclxuLmJhZGdlLXByaXZhdGUge1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDZweDtcclxuICBwYWRkaW5nOiA4cHggMTRweDsgYm9yZGVyLXJhZGl1czogMTBweDsgZm9udC1zaXplOiAxMnB4OyBmb250LXdlaWdodDogNzAwO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjMzLDIxMywyNTUsLjE1KTsgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyMzMsMjEzLDI1NSwuNCk7XHJcbiAgY29sb3I6ICNlOWQ1ZmY7XHJcbiAgbWF0LWljb24geyBmb250LXNpemU6IDE2cHg7IHdpZHRoOiAxNnB4OyBoZWlnaHQ6IDE2cHg7IH1cclxufVxyXG5cclxuLm93bmVyLXRhZyB7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGdhcDogNnB4O1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsLjE4KTsgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwuMzUpO1xyXG4gIHBhZGRpbmc6IDhweCAxNnB4OyBib3JkZXItcmFkaXVzOiAxMnB4OyBmb250LXNpemU6IDEzcHg7IGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgbWF0LWljb24geyBmb250LXNpemU6IDE2cHg7IHdpZHRoOiAxNnB4OyBoZWlnaHQ6IDE2cHg7IGNvbG9yOiAjZmZkNTRmOyB9XHJcbn1cclxuXHJcbi8vIMOiwpTCgMOiwpTCgCBTdGF0cyByaWJib25cclxuLmhlcm8tcmliYm9uIHtcclxuICBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDA7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwuMjUpOyBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTJweCk7XHJcbiAgYm9yZGVyLXJhZGl1czogMTZweCAxNnB4IDAgMDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4ucmliYm9uLXN0YXQge1xyXG4gIGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGdhcDogMTJweDtcclxuICBwYWRkaW5nOiAxOHB4IDI4cHg7IGZsZXg6IDE7XHJcbiAgbWF0LWljb24geyBmb250LXNpemU6IDIycHg7IHdpZHRoOiAyMnB4OyBoZWlnaHQ6IDIycHg7IG9wYWNpdHk6IC44OyB9XHJcbiAgLnJ2IHsgZGlzcGxheTogYmxvY2s7IGZvbnQtc2l6ZTogMThweDsgZm9udC13ZWlnaHQ6IDgwMDsgbGluZS1oZWlnaHQ6IDEuMTsgfVxyXG4gIC5ybCB7IGRpc3BsYXk6IGJsb2NrOyBmb250LXNpemU6IDExcHg7IG9wYWNpdHk6IC43OyB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyBsZXR0ZXItc3BhY2luZzogLjZweDsgfVxyXG59XHJcblxyXG4ucmliYm9uLWRpdmlkZXIgeyB3aWR0aDogMXB4OyBoZWlnaHQ6IDM2cHg7IGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsLjIpOyBmbGV4LXNocmluazogMDsgfVxyXG5cclxuLy8gw6LClMKAw6LClMKAw6LClMKAIEJvZHkgbGF5b3V0IMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxyXG4uZGV0YWlsLWJvZHkge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMzYwcHg7XHJcbiAgZ2FwOiAyNHB4O1xyXG4gIG1heC13aWR0aDogMTI4MHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIHBhZGRpbmc6IDI4cHggMzJweCA1NnB4O1xyXG59XHJcblxyXG4uY29sLW1haW4sIC5jb2wtc2lkZSB7IGRpc3BsYXk6IGZsZXg7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IGdhcDogMjBweDsgfVxyXG5cclxuLy8gw6LClMKAw6LClMKAw6LClMKAIENhcmQgYmFzZSDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcclxuLmRldGFpbC1jYXJkIHtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIGJvcmRlci1yYWRpdXM6ICRyYWRpdXM7XHJcbiAgYm94LXNoYWRvdzogJHNoYWRvdztcclxuICBwYWRkaW5nOiAyNHB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5jYXJkLWhlYWQge1xyXG4gIGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGdhcDogMTBweDsgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICBtYXQtaWNvbiB7IGNvbG9yOiAkYnJhbmQ7IGZvbnQtc2l6ZTogMjJweDsgd2lkdGg6IDIycHg7IGhlaWdodDogMjJweDsgfVxyXG4gIGgzIHsgbWFyZ2luOiAwOyBmb250LXNpemU6IDE2cHg7IGZvbnQtd2VpZ2h0OiA3MDA7IGNvbG9yOiAjMTExODI3OyBmbGV4OiAxOyB9XHJcbn1cclxuXHJcbi5jb3VudC10YWcge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICRuYXZ5LCAkYnJhbmQpO1xyXG4gIGNvbG9yOiAjZmZmOyBmb250LXNpemU6IDEycHg7IGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgcGFkZGluZzogMnB4IDEwcHg7IGJvcmRlci1yYWRpdXM6IDk5OXB4O1xyXG59XHJcblxyXG4ucGN0LWJhZGdlIHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDIxLCAxMDEsIDE5MiwgLjEpOyBjb2xvcjogJGJyYW5kO1xyXG4gIGZvbnQtc2l6ZTogMTRweDsgZm9udC13ZWlnaHQ6IDgwMDsgcGFkZGluZzogM3B4IDEycHg7IGJvcmRlci1yYWRpdXM6IDk5OXB4O1xyXG59XHJcblxyXG4vLyDDosKUwoDDosKUwoDDosKUwoAgUHJvZ3Jlc3MgY2FyZCDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcclxuLnByb2ctdHJhY2sge1xyXG4gIGhlaWdodDogMTBweDsgYmFja2dyb3VuZDogI2YzZjRmNjsgYm9yZGVyLXJhZGl1czogOTlweDsgb3ZlcmZsb3c6IGhpZGRlbjsgbWFyZ2luLWJvdHRvbTogMTRweDtcclxuICAucHJvZy1maWxsIHtcclxuICAgIGhlaWdodDogMTAwJTsgYm9yZGVyLXJhZGl1czogOTlweDsgdHJhbnNpdGlvbjogd2lkdGggLjhzIGN1YmljLWJlemllciguNCwwLC4yLDEpO1xyXG4gICAgJi5wZi13YXJuICAgIHsgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjZjU5ZTBiLCAjZDk3NzA2KTsgfVxyXG4gICAgJi5wZi1hY2NlbnQgIHsgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjOGI1Y2Y2LCAjN2MzYWVkKTsgfVxyXG4gICAgJi5wZi1wcmltYXJ5IHsgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjMTBiOTgxLCAjMDU5NjY5KTsgfVxyXG4gIH1cclxufVxyXG5cclxuLnByb2ctcm93IHsgZGlzcGxheTogZmxleDsganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyB9XHJcbi5wcm9nLWNvbCB7IGRpc3BsYXk6IGZsZXg7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgJi5yaWdodCB7IGFsaWduLWl0ZW1zOiBmbGV4LWVuZDsgfVxyXG4gIC5wcm9nLWxibCB7IGZvbnQtc2l6ZTogMTJweDsgY29sb3I6ICM5Y2EzYWY7IH1cclxuICAucHJvZy12YWwgeyBmb250LXNpemU6IDE4cHg7IGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICAmLmNvbGxlY3RlZCB7IGNvbG9yOiAjMTBiOTgxOyB9XHJcbiAgICAmLnJlbWFpbmluZyB7IGNvbG9yOiAjNmI3MjgwOyB9XHJcbiAgfVxyXG59XHJcblxyXG4uZ29hbC1yZWFjaGVkIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7IG1hcmdpbi10b3A6IDEycHg7XHJcbiAgYmFja2dyb3VuZDogI2RjZmNlNzsgY29sb3I6ICMxNjY1MzQ7IHBhZGRpbmc6IDEwcHg7IGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgZm9udC1zaXplOiAxNHB4OyBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4vLyDDosKUwoDDosKUwoDDosKUwoAgSW5mbyBncmlkIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxyXG4uaW5mby1ncmlkIHtcclxuICBkaXNwbGF5OiBncmlkOyBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgxODBweCwgMWZyKSk7IGdhcDogMTJweDtcclxufVxyXG5cclxuLmlnLWl0ZW0ge1xyXG4gIGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGdhcDogMTJweDtcclxuICBiYWNrZ3JvdW5kOiAjZjlmYWZiOyBib3JkZXItcmFkaXVzOiAxMnB4OyBwYWRkaW5nOiAxMnB4O1xyXG5cclxuICAuaWctaWNvbiB7XHJcbiAgICB3aWR0aDogMzZweDsgaGVpZ2h0OiAzNnB4OyBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyMSwgMTAxLCAxOTIsIC4xKTsgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IGZsZXgtc2hyaW5rOiAwO1xyXG4gICAgbWF0LWljb24geyBjb2xvcjogJGJyYW5kOyBmb250LXNpemU6IDE4cHg7IHdpZHRoOiAxOHB4OyBoZWlnaHQ6IDE4cHg7IH1cclxuICB9XHJcbiAgLmlnLWxibCB7IGRpc3BsYXk6IGJsb2NrOyBmb250LXNpemU6IDExcHg7IGNvbG9yOiAjOWNhM2FmOyB9XHJcbiAgLmlnLXZhbCB7IGRpc3BsYXk6IGJsb2NrOyBmb250LXNpemU6IDE0cHg7IGZvbnQtd2VpZ2h0OiA3MDA7IGNvbG9yOiAjMTExODI3OyBtYXJnaW4tdG9wOiAycHg7IH1cclxufVxyXG5cclxuLy8gw6LClMKAw6LClMKAw6LClMKAIFJ1bGVzIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxyXG4ucnVsZXMtbGlzdCB7IGRpc3BsYXk6IGZsZXg7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IGdhcDogMDsgfVxyXG5cclxuLnJ1bGUtcm93IHtcclxuICBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogZmxleC1zdGFydDsgZ2FwOiAxNHB4O1xyXG4gIHBhZGRpbmc6IDE0cHggMDsgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmM2Y0ZjY7XHJcbiAgJjpsYXN0LWNoaWxkIHsgYm9yZGVyLWJvdHRvbTogbm9uZTsgfVxyXG5cclxuICAucnVsZS1udW0ge1xyXG4gICAgd2lkdGg6IDI4cHg7IGhlaWdodDogMjhweDsgYm9yZGVyLXJhZGl1czogOHB4OyBmbGV4LXNocmluazogMDtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICRuYXZ5LCAkYnJhbmQpO1xyXG4gICAgY29sb3I6ICNmZmY7IGZvbnQtc2l6ZTogMTJweDsgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgIGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGp1c3RpZnktY29udGVudDogY2VudGVyOyBtYXJnaW4tdG9wOiAycHg7XHJcbiAgfVxyXG4gIC5ydWxlLWJvZHkgeyBmbGV4OiAxO1xyXG4gICAgc3Ryb25nIHsgZm9udC1zaXplOiAxNHB4OyBjb2xvcjogIzExMTgyNzsgfVxyXG4gICAgcCB7IG1hcmdpbjogNHB4IDAgMDsgZm9udC1zaXplOiAxM3B4OyBjb2xvcjogIzZiNzI4MDsgbGluZS1oZWlnaHQ6IDEuNTsgfVxyXG4gIH1cclxuICAucnVsZS10YWcgeyBmb250LXNpemU6IDEwcHg7IGZvbnQtd2VpZ2h0OiA3MDA7IHBhZGRpbmc6IDJweCA4cHg7IGJvcmRlci1yYWRpdXM6IDk5OXB4O1xyXG4gICAgJi5kZWZhdWx0IHsgYmFja2dyb3VuZDogI2VkZTlmZTsgY29sb3I6ICM1YjIxYjY7IH1cclxuICB9XHJcbn1cclxuXHJcbi8vIMOiwpTCgMOiwpTCgMOiwpTCgCBNZW1iZXJzaGlwIGdhdWdlIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxyXG4uZ2F1Z2UtY2FyZCB7IHRleHQtYWxpZ246IGNlbnRlcjsgfVxyXG5cclxuLmdhdWdlLXJpbmcge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgd2lkdGg6IDE2MHB4OyBtYXJnaW46IDAgYXV0byAyMHB4O1xyXG5cclxuICAucmluZy1zdmcgeyB3aWR0aDogMTAwJTsgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTsgfVxyXG5cclxuICAucmluZy1iZyAgeyBmaWxsOiBub25lOyBzdHJva2U6ICNmM2Y0ZjY7IHN0cm9rZS13aWR0aDogODsgfVxyXG4gIC5yaW5nLWZpbGwge1xyXG4gICAgZmlsbDogbm9uZTsgc3Ryb2tlLXdpZHRoOiA4OyBzdHJva2UtbGluZWNhcDogcm91bmQ7XHJcbiAgICBzdHJva2UtZGFzaGFycmF5OiAyNTEuMjsgLy8gMsOPwoAgw4PClyA0MFxyXG4gICAgdHJhbnNpdGlvbjogc3Ryb2tlLWRhc2hvZmZzZXQgLjlzIGN1YmljLWJlemllciguNCwwLC4yLDEpO1xyXG4gIH1cclxuXHJcbiAgLy8gUmluZyBjb2xvdXIgcGVyIGJhbm5lciB0eXBlXHJcbiAgLnJjLWJhbm5lci1pbnZlc3RtZW50IHsgc3Ryb2tlOiAjMTk3NmQyOyB9XHJcbiAgLnJjLWJhbm5lci1wcm9wZXJ0eSAgIHsgc3Ryb2tlOiAjMzg4ZTNjOyB9XHJcbiAgLnJjLWJhbm5lci1mYW1pbHkgICAgIHsgc3Ryb2tlOiAjZjU3YzAwOyB9XHJcbiAgLnJjLWJhbm5lci1idXJpYWwgICAgIHsgc3Ryb2tlOiAjNzk1NTQ4OyB9XHJcbiAgLnJjLWJhbm5lci1yb3RhdGlvbmFsIHsgc3Ryb2tlOiAjOGUyNGFhOyB9XHJcbiAgLnJjLWJhbm5lci1kZWZhdWx0ICAgIHsgc3Ryb2tlOiAkYnJhbmQ7IH1cclxuXHJcbiAgLmdhdWdlLWxhYmVsIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgaW5zZXQ6IDA7IGRpc3BsYXk6IGZsZXg7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIC5nbC1udW0geyBmb250LXNpemU6IDMycHg7IGZvbnQtd2VpZ2h0OiA4MDA7IGNvbG9yOiAjMTExODI3OyBsaW5lLWhlaWdodDogMTsgfVxyXG4gICAgLmdsLWRlbiB7IGZvbnQtc2l6ZTogMTRweDsgY29sb3I6ICM5Y2EzYWY7IH1cclxuICAgIC5nbC1zdWIgeyBmb250LXNpemU6IDExcHg7IGNvbG9yOiAjOWNhM2FmOyB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyBsZXR0ZXItc3BhY2luZzogLjZweDsgfVxyXG4gIH1cclxufVxyXG5cclxuLmdhdWdlLW1ldGEge1xyXG4gIGRpc3BsYXk6IGZsZXg7IGp1c3RpZnktY29udGVudDogY2VudGVyOyBnYXA6IDMycHg7XHJcbiAgLmdtLWl0ZW0geyBkaXNwbGF5OiBmbGV4OyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDJweDsgfVxyXG4gIC5nbS1udW0geyBmb250LXNpemU6IDIycHg7IGZvbnQtd2VpZ2h0OiA4MDA7IH1cclxuICAuZ20tbGJsIHsgZm9udC1zaXplOiAxMXB4OyBjb2xvcjogIzljYTNhZjsgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgbGV0dGVyLXNwYWNpbmc6IC41cHg7IH1cclxuICAuYXZhaWxhYmxlIC5nbS1udW0geyBjb2xvcjogIzEwYjk4MTsgfVxyXG4gIC5hZG1pbnMgICAgLmdtLW51bSB7IGNvbG9yOiAkYnJhbmQ7IH1cclxufVxyXG5cclxuLy8gw6LClMKAw6LClMKAw6LClMKAIE1lbWJlcnMgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXHJcbi5tZW1iZXItbGlzdCB7IGRpc3BsYXk6IGZsZXg7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IGdhcDogMDsgfVxyXG5cclxuLm1lbWJlci1yb3cge1xyXG4gIGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGdhcDogMTJweDtcclxuICBwYWRkaW5nOiAxMHB4IDA7IGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjlmYWZiO1xyXG4gICY6bGFzdC1jaGlsZCB7IGJvcmRlci1ib3R0b206IG5vbmU7IH1cclxufVxyXG5cclxuLm1lbWJlci1hdmF0YXIge1xyXG4gIHdpZHRoOiA0MHB4OyBoZWlnaHQ6IDQwcHg7IGJvcmRlci1yYWRpdXM6IDEycHg7IGZsZXgtc2hyaW5rOiAwO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNlNWU3ZWIsICNkMWQ1ZGIpO1xyXG4gIGNvbG9yOiAjMzc0MTUxOyBmb250LXNpemU6IDE0cHg7IGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gICYuYWRtaW4tYXYge1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiYSgyMSwgMTAxLCAxOTIsIC4xNSksIHJnYmEoNSwgMTUwLCAxMDUsIC4yKSk7XHJcbiAgICBjb2xvcjogJGJyYW5kO1xyXG4gIH1cclxufVxyXG5cclxuLm1lbWJlci1pbmZvIHsgZmxleDogMTsgbWluLXdpZHRoOiAwO1xyXG4gIC5tLW5hbWUgeyBkaXNwbGF5OiBibG9jazsgZm9udC1zaXplOiAxNHB4OyBmb250LXdlaWdodDogNjAwOyBjb2xvcjogIzExMTgyNzsgd2hpdGUtc3BhY2U6IG5vd3JhcDsgb3ZlcmZsb3c6IGhpZGRlbjsgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7IH1cclxuICAubS1lbWFpbCwgLm0tbWV0YSB7IGRpc3BsYXk6IGJsb2NrOyBmb250LXNpemU6IDEycHg7IGNvbG9yOiAjOWNhM2FmOyB9XHJcbn1cclxuXHJcbi5tLXJvbGUtdGFnIHtcclxuICBmb250LXNpemU6IDEwcHg7IGZvbnQtd2VpZ2h0OiA3MDA7IHBhZGRpbmc6IDNweCA5cHg7IGJvcmRlci1yYWRpdXM6IDk5OXB4O1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjEsIDEwMSwgMTkyLCAuMSk7IGNvbG9yOiAkYnJhbmQ7IGZsZXgtc2hyaW5rOiAwO1xyXG59XHJcblxyXG4ubS1zdGF0dXMge1xyXG4gIGZvbnQtc2l6ZTogMTBweDsgZm9udC13ZWlnaHQ6IDcwMDsgcGFkZGluZzogM3B4IDlweDsgYm9yZGVyLXJhZGl1czogOTk5cHg7IGZsZXgtc2hyaW5rOiAwO1xyXG4gICYubXMtYWN0aXZlICAgeyBiYWNrZ3JvdW5kOiAjZGNmY2U3OyBjb2xvcjogIzE2NjUzNDsgfVxyXG4gICYubXMtaW5hY3RpdmUgeyBiYWNrZ3JvdW5kOiAjZmVmOWMzOyBjb2xvcjogIzg1NGQwZTsgfVxyXG4gICYubXMtcGVuZGluZyAgeyBiYWNrZ3JvdW5kOiAjZWRlOWZlOyBjb2xvcjogIzViMjFiNjsgfVxyXG59XHJcblxyXG4vLyDDosKUwoDDosKUwoDDosKUwoAgTG9hZGluZyBza2VsZXRvbiDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcclxuLnNrLXB1bHNlIHsgYW5pbWF0aW9uOiBwdWxzZSAxLjVzIGVhc2UtaW4tb3V0IGluZmluaXRlOyB9XHJcbi5za2VsZXRvbi1oZXJvIHsgaGVpZ2h0OiAzNDBweDsgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2U1ZTdlYiwgI2QxZDVkYik7IG1hcmdpbi1ib3R0b206IDI4cHg7IH1cclxuLnNrZWxldG9uLWJvZHkgeyBkaXNwbGF5OiBncmlkOyBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzNjBweDsgZ2FwOiAyNHB4OyBtYXgtd2lkdGg6IDEyODBweDsgbWFyZ2luOiAwIGF1dG87IHBhZGRpbmc6IDAgMzJweDsgfVxyXG4uc2stY2FyZCB7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjsgYm9yZGVyLXJhZGl1czogJHJhZGl1czsgcGFkZGluZzogMjRweDtcclxuICBib3gtc2hhZG93OiAwIDJweCA4cHggcmdiYSgwLDAsMCwuMDYpO1xyXG4gIGRpc3BsYXk6IGZsZXg7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IGdhcDogMTJweDtcclxufVxyXG4uc2stbGluZSB7IGJvcmRlci1yYWRpdXM6IDZweDsgYmFja2dyb3VuZDogI2YzZjRmNjtcclxuICAmLnNrLWggeyBoZWlnaHQ6IDE4cHg7IHdpZHRoOiA1MCU7IH1cclxuICAmLnNrLW0geyBoZWlnaHQ6IDE0cHg7IHdpZHRoOiA4NSU7IH1cclxuICAmLnNrLXMgeyBoZWlnaHQ6IDE0cHg7IHdpZHRoOiA2NSU7IH1cclxufVxyXG5cclxuLy8gw6LClMKAw6LClMKAw6LClMKAIFJlc3BvbnNpdmUgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIHtcclxuICAuZGV0YWlsLWJvZHkgeyBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjsgfVxyXG4gIC5jb2wtc2lkZSB7IGRpc3BsYXk6IGdyaWQ7IGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDMwMHB4LCAxZnIpKTsgfVxyXG4gIC5za2VsZXRvbi1ib2R5IHsgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7IH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDY0MHB4KSB7XHJcbiAgLmRldGFpbC1oZXJvIC5oZXJvLWlubmVyIHsgcGFkZGluZzogMjBweCAxNnB4IDA7IH1cclxuICAuZGV0YWlsLWJvZHkgeyBwYWRkaW5nOiAyMHB4IDE2cHggNDBweDsgfVxyXG4gIC5oZXJvLW1haW4geyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyB9XHJcbiAgLmhlcm8tYWN0aW9ucyB7IGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0OyB9XHJcbiAgLmhlcm8tcmliYm9uIHsgZmxleC13cmFwOiB3cmFwOyBib3JkZXItcmFkaXVzOiAxMnB4IDEycHggMCAwOyB9XHJcbiAgLnJpYmJvbi1zdGF0IHsgZmxleDogbm9uZTsgd2lkdGg6IDUwJTsgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsLjEpOyB9XHJcbiAgLnJpYmJvbi1kaXZpZGVyIHsgZGlzcGxheTogbm9uZTsgfVxyXG4gIC5pbmZvLWdyaWQgeyBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7IH1cclxuICAuY29sLXNpZGUgeyBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjsgfVxyXG59XHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  }));
}
_staticBlock();

/***/ })

}]);
//# sourceMappingURL=src_app_components_stokvel-detail_stokvel-detail_component_ts.js.map