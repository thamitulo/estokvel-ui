"use strict";
(self["webpackChunkestokvel_ui"] = self["webpackChunkestokvel_ui"] || []).push([["src_app_components_stokvel-manage_stokvel-manage_component_ts"],{

/***/ 2235:
/*!***********************************************************************!*\
  !*** ./src/app/components/stokvel-manage/stokvel-manage.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StokvelManageComponent: () => (/* binding */ StokvelManageComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 4487);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 1873);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 9452);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 1318);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 6647);
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../material.module */ 9439);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../environments/environment */ 6052);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2481);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 5422);
/* harmony import */ var _services_stokvel_stokvel_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../services/stokvel/stokvel.service */ 7093);
/* harmony import */ var _services_user_user_service_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../services/user/user-service.service */ 2915);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ 3855);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/form-field */ 8388);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/input */ 5541);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/select */ 8724);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/select */ 6060);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/icon */ 3840);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/tooltip */ 9710);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/progress-spinner */ 1134);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/tabs */ 8223);
var _staticBlock;






















function StokvelManageComponent_div_0_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function StokvelManageComponent_div_0_div_16_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r1.activeTab = 1);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "notifications_active");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate2"](" ", ctx_r1.pendingRequests.length, " pending request", ctx_r1.pendingRequests.length !== 1 ? "s" : "", " ");
  }
}
function StokvelManageComponent_div_0_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "people");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "\u00A0Members ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r1.allMembers.length);
  }
}
function StokvelManageComponent_div_0_div_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 38)(1, "div", 39)(2, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "div", 41)(5, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](9, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "div", 44)(11, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "div", 44)(14, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](16, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](18, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](19, "div", 48)(20, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function StokvelManageComponent_div_0_div_36_Template_button_click_20_listener() {
      const m_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r4).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r1.removeMember(m_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](21, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](22, "person_remove");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const m_r5 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("admin-av", m_r5.role === "ADMIN");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx_r1.getInitials(m_r5.displayName || m_r5.userName), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](m_r5.displayName || m_r5.userName);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](m_r5.userEmail ? _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind3"](9, 12, m_r5.userEmail, 0, 3) + "***@" + (m_r5.userEmail.split("@")[1] || "") : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("admin-tag", m_r5.role === "ADMIN");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](m_r5.role);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", "st-" + (m_r5.membershipStatus == null ? null : m_r5.membershipStatus.toLowerCase()));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", m_r5.membershipStatus, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](18, 16, m_r5.joinedDate, "MMM y"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", ctx_r1.removingMemberId === (m_r5.id ?? -1));
  }
}
function StokvelManageComponent_div_0_ng_template_38_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r1.pendingRequests.length);
  }
}
function StokvelManageComponent_div_0_ng_template_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "how_to_reg");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "\u00A0Join Requests ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](3, StokvelManageComponent_div_0_ng_template_38_span_3_Template, 2, 1, "span", 50);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r1.pendingRequests.length);
  }
}
function StokvelManageComponent_div_0_div_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 52)(1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "check_circle_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4, "No pending join requests");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
}
function StokvelManageComponent_div_0_div_41_div_1_span_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const req_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](req_r7.message);
  }
}
function StokvelManageComponent_div_0_div_41_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 55)(1, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "div", 57)(4, "span", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](8, StokvelManageComponent_div_0_div_41_div_1_span_8_Template, 2, 1, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](11, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](12, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "div", 62)(14, "button", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function StokvelManageComponent_div_0_div_41_div_1_Template_button_click_14_listener() {
      const req_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r6).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r1.approveRequest(req_r7.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](16, "check");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](17, " Approve ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](18, "button", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function StokvelManageComponent_div_0_div_41_div_1_Template_button_click_18_listener() {
      const req_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r6).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r1.rejectRequest(req_r7.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](19, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](20, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](21, " Reject ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const req_r7 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r1.getInitials(req_r7.fullName));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](req_r7.fullName);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](req_r7.userEmail);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", req_r7.message);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate2"](" R", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](11, 6, req_r7.contributionAmount), " contribution \u00B7 ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](12, 8, req_r7.createdAt, "mediumDate"), " ");
  }
}
function StokvelManageComponent_div_0_div_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, StokvelManageComponent_div_0_div_41_div_1_Template, 22, 11, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r1.pendingRequests);
  }
}
function StokvelManageComponent_div_0_ng_template_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "person_add");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "\u00A0Invite ");
  }
}
function StokvelManageComponent_div_0_mat_error_60_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Email is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function StokvelManageComponent_div_0_mat_error_61_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Enter a valid email");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function StokvelManageComponent_div_0_mat_spinner_73_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "mat-spinner", 66);
  }
}
function StokvelManageComponent_div_0_mat_icon_74_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "person_add");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function StokvelManageComponent_div_0_ng_template_77_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r1.outstandingCount);
  }
}
function StokvelManageComponent_div_0_ng_template_77_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "payments");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "\u00A0Request Payment ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](3, StokvelManageComponent_div_0_ng_template_77_span_3_Template, 2, 1, "span", 50);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r1.outstandingCount > 0);
  }
}
function StokvelManageComponent_div_0_span_91_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Checking contributions\u2026");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function StokvelManageComponent_div_0_span_92_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " \u2705 All members are up to date \u2014 no outstanding contributions ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function StokvelManageComponent_div_0_span_93_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span")(1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r1.outstandingCount);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" member", ctx_r1.outstandingCount !== 1 ? "s" : "", " with outstanding contributions ");
  }
}
function StokvelManageComponent_div_0_div_94_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 71)(1, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "div", 73)(4, "span", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "span", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](8, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "span", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](11, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const m_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r1.getInitials(m_r8.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](m_r8.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("Contributed: R", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](8, 4, m_r8.contributed), " \u00B7 Expected more");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("R", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](11, 6, m_r8.outstanding), " owed");
  }
}
function StokvelManageComponent_div_0_div_94_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, StokvelManageComponent_div_0_div_94_div_1_div_1_Template, 12, 8, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const m_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", m_r8.hasOutstanding);
  }
}
function StokvelManageComponent_div_0_div_94_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, StokvelManageComponent_div_0_div_94_div_1_Template, 2, 1, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind3"](2, 1, ctx_r1.outstandingMembers, 0, 20));
  }
}
function StokvelManageComponent_div_0_mat_error_104_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Amount is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function StokvelManageComponent_div_0_mat_error_105_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Must be greater than R0");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function StokvelManageComponent_div_0_mat_spinner_107_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "mat-spinner", 66);
  }
}
function StokvelManageComponent_div_0_mat_icon_108_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "send");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function StokvelManageComponent_div_0_div_110_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 77)(1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "info_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4, "Each highlighted member will receive an email with their outstanding amount and a link to pay via dashboard.");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
}
function StokvelManageComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 2)(1, "div", 3)(2, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function StokvelManageComponent_div_0_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r1.goBack());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4, "arrow_back");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5, " Back to Stokvel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "div", 5)(7, "div", 6)(8, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](9, "manage_accounts");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "div")(11, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](15, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](16, StokvelManageComponent_div_0_div_16_Template, 4, 2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](17, "mat-tab-group", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtwoWayListener"]("selectedIndexChange", function StokvelManageComponent_div_0_Template_mat_tab_group_selectedIndexChange_17_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtwoWayBindingSet"](ctx_r1.activeTab, $event) || (ctx_r1.activeTab = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](18, "mat-tab");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](19, StokvelManageComponent_div_0_ng_template_19_Template, 5, 1, "ng-template", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](20, "div", 10)(21, "div", 11)(22, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](23, "info_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](24, " Only admins can remove members. Removing the last admin is not allowed. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](25, "div", 12)(26, "div", 13)(27, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](28, "Member");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](29, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](30, "Role");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](31, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](32, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](33, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](34, "Joined");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](35, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](36, StokvelManageComponent_div_0_div_36_Template, 23, 19, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](37, "mat-tab");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](38, StokvelManageComponent_div_0_ng_template_38_Template, 4, 1, "ng-template", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](39, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](40, StokvelManageComponent_div_0_div_40_Template, 5, 0, "div", 15)(41, StokvelManageComponent_div_0_div_41_Template, 2, 1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](42, "mat-tab");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](43, StokvelManageComponent_div_0_ng_template_43_Template, 3, 0, "ng-template", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](44, "div", 10)(45, "div", 17)(46, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](47, "Invite a Member by Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](48, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](49, " Enter the email address of the person you'd like to add. They'll receive an invitation and their membership will be set to ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](50, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](51, "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](52, " until they accept. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](53, "form", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngSubmit", function StokvelManageComponent_div_0_Template_form_ngSubmit_53_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r1.inviteMember());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](54, "mat-form-field", 20)(55, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](56, "Email address");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](57, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](58, "mat-icon", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](59, "email");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](60, StokvelManageComponent_div_0_mat_error_60_Template, 2, 0, "mat-error", 23)(61, StokvelManageComponent_div_0_mat_error_61_Template, 2, 0, "mat-error", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](62, "mat-form-field", 20)(63, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](64, "Role");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](65, "mat-select", 24)(66, "mat-option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](67, "Member");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](68, "mat-option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](69, "Admin");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](70, "mat-icon", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](71, "manage_accounts");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](72, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](73, StokvelManageComponent_div_0_mat_spinner_73_Template, 1, 0, "mat-spinner", 28)(74, StokvelManageComponent_div_0_mat_icon_74_Template, 2, 0, "mat-icon", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](75);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](76, "mat-tab");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](77, StokvelManageComponent_div_0_ng_template_77_Template, 4, 1, "ng-template", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](78, "div", 10)(79, "div", 17)(80, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](81, "Send Payment Reminder");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](82, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](83, " Reminders are sent ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](84, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](85, "only to members with outstanding contributions");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](86, ". Members who are up to date will not be emailed. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](87, "div", 29)(88, "div", 30)(89, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](90, "warning_amber");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](91, StokvelManageComponent_div_0_span_91_Template, 2, 0, "span", 23)(92, StokvelManageComponent_div_0_span_92_Template, 2, 0, "span", 23)(93, StokvelManageComponent_div_0_span_93_Template, 4, 2, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](94, StokvelManageComponent_div_0_div_94_Template, 3, 5, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](95, "form", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngSubmit", function StokvelManageComponent_div_0_Template_form_ngSubmit_95_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r1.requestPayment());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](96, "mat-form-field", 20)(97, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](98, "Monthly Contribution Amount (ZAR)");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](99, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](100, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](101, "R\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](102, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](103, "Used to calculate each member's outstanding balance");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](104, StokvelManageComponent_div_0_mat_error_104_Template, 2, 0, "mat-error", 23)(105, StokvelManageComponent_div_0_mat_error_105_Template, 2, 0, "mat-error", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](106, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](107, StokvelManageComponent_div_0_mat_spinner_107_Template, 1, 0, "mat-spinner", 28)(108, StokvelManageComponent_div_0_mat_icon_108_Template, 2, 0, "mat-icon", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](109);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](110, StokvelManageComponent_div_0_div_110_Template, 5, 0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    let tmp_10_0;
    let tmp_11_0;
    let tmp_21_0;
    let tmp_22_0;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("Manage: ", ctx_r1.stokvel.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate2"]("", ctx_r1.stokvel.totalMembers ?? ctx_r1.stokvel.memberCount + ctx_r1.stokvel.adminCount, " members \u00B7 ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](15, 27, ctx_r1.stokvel.privacy));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r1.pendingRequests.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtwoWayProperty"]("selectedIndex", ctx_r1.activeTab);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r1.allMembers);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r1.pendingRequests.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r1.pendingRequests.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("formGroup", ctx_r1.inviteForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", (tmp_10_0 = ctx_r1.inviteForm.get("email")) == null ? null : tmp_10_0.hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", (tmp_11_0 = ctx_r1.inviteForm.get("email")) == null ? null : tmp_11_0.hasError("email"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", ctx_r1.inviteForm.invalid || ctx_r1.inviteLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r1.inviteLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx_r1.inviteLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx_r1.inviteLoading ? "Sending\u2026" : "Send Invitation", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r1.outstandingLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx_r1.outstandingLoading && ctx_r1.outstandingCount === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx_r1.outstandingLoading && ctx_r1.outstandingCount > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx_r1.outstandingLoading && ctx_r1.outstandingCount > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("formGroup", ctx_r1.paymentForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", (tmp_21_0 = ctx_r1.paymentForm.get("amount")) == null ? null : tmp_21_0.hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", (tmp_22_0 = ctx_r1.paymentForm.get("amount")) == null ? null : tmp_22_0.hasError("min"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", ctx_r1.paymentForm.invalid || ctx_r1.paymentLoading || ctx_r1.outstandingCount === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r1.paymentLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx_r1.paymentLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx_r1.paymentLoading ? "Sending\u2026" : "Send Reminder to " + ctx_r1.outstandingCount + " Member" + (ctx_r1.outstandingCount !== 1 ? "s" : ""), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r1.outstandingCount > 0);
  }
}
function StokvelManageComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "mat-spinner", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, "Loading stokvel management\u2026");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
}
class StokvelManageComponent {
  constructor(route, router, stokvelService, userService, http, fb, snack) {
    this.route = route;
    this.router = router;
    this.stokvelService = stokvelService;
    this.userService = userService;
    this.http = http;
    this.fb = fb;
    this.snack = snack;
    this.stokvel = null;
    this.pendingRequests = [];
    this.isLoading = true;
    this.activeTab = 0;
    this.inviteLoading = false;
    this.paymentLoading = false;
    // Outstanding members preview
    this.outstandingMembers = [];
    this.outstandingLoading = false;
    // Remove confirmation
    this.removingMemberId = null;
    this.inviteForm = this.fb.group({
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.email]],
      role: ['MEMBER']
    });
    this.paymentForm = this.fb.group({
      amount: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.min(1)]],
      message: ['']
    });
  }
  ngOnInit() {
    this.route.paramMap.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMap)(params => {
      const id = Number(params.get('id'));
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.forkJoin)({
        stokvel: this.stokvelService.getStokvelById(id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(null))),
        pending: this.stokvelService.getPendingJoinRequests(id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)([])))
      });
    })).subscribe(({
      stokvel,
      pending
    }) => {
      this.stokvel = stokvel;
      this.pendingRequests = pending;
      if (!stokvel || !stokvel.isOwner && stokvel.currentUserRole !== 'ADMIN') {
        this.snack.open('Access denied – admins only', 'Close', {
          duration: 4000
        });
        this.router.navigate(['/stokvels', this.stokvel?.id ?? '']);
        return;
      }
      // Auto-fill amount with monthly contribution
      if (stokvel.monthlyContribution) {
        this.paymentForm.get('amount').setValue(stokvel.monthlyContribution);
      }
      this.isLoading = false;
      this.loadOutstandingMembers();
    });
  }
  get allMembers() {
    if (!this.stokvel) return [];
    return [...(this.stokvel.adminMembers ?? []), ...(this.stokvel.regularMembers ?? [])];
  }
  // ── Join Request actions ──────────────────────────────────────────────────
  approveRequest(requestId) {
    this.stokvelService.updateJoinRequestStatus(requestId, 'APPROVED', 'Welcome to the stokvel!').subscribe({
      next: () => {
        this.pendingRequests = this.pendingRequests.filter(r => r.id !== requestId);
        this.snack.open('✅ Join request approved', 'Close', {
          duration: 3000
        });
        // Refresh stokvel to update member list
        this.stokvelService.getStokvelById(this.stokvel.id).subscribe(s => this.stokvel = s);
      },
      error: err => this.snack.open(err?.error?.message || 'Failed to approve', 'Close', {
        duration: 4000
      })
    });
  }
  rejectRequest(requestId) {
    this.stokvelService.updateJoinRequestStatus(requestId, 'REJECTED', 'Thank you for your interest.').subscribe({
      next: () => {
        this.pendingRequests = this.pendingRequests.filter(r => r.id !== requestId);
        this.snack.open('Request rejected', 'Close', {
          duration: 3000
        });
      },
      error: err => this.snack.open(err?.error?.message || 'Failed to reject', 'Close', {
        duration: 4000
      })
    });
  }
  // ── Invite member by email ───────────────────────────────────────────────
  inviteMember() {
    if (this.inviteForm.invalid || !this.stokvel) return;
    this.inviteLoading = true;
    const {
      email,
      role
    } = this.inviteForm.value;
    this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_8__.environment.apiUrl}stokvels/${this.stokvel.id}/members`, null, {
      params: {
        userEmail: email,
        role
      }
    }).subscribe({
      next: () => {
        this.inviteLoading = false;
        this.snack.open(`✅ Invitation sent to ${email}`, 'Close', {
          duration: 4000
        });
        this.inviteForm.reset({
          email: '',
          role: 'MEMBER'
        });
        // Refresh member list
        this.stokvelService.getStokvelById(this.stokvel.id).subscribe(s => this.stokvel = s);
      },
      error: err => {
        this.inviteLoading = false;
        this.snack.open(err?.error?.message || 'Failed to invite member', 'Close', {
          duration: 5000,
          panelClass: 'error-snackbar'
        });
      }
    });
  }
  // ── Remove member ────────────────────────────────────────────────────────
  removeMember(member) {
    if (!member.id || !this.stokvel) return;
    const confirmed = window.confirm(`Remove ${member.displayName || member.userName} from "${this.stokvel.name}"?`);
    if (!confirmed) return;
    this.removingMemberId = member.id;
    this.stokvelService.removeMember(this.stokvel.id, member.id).subscribe({
      next: () => {
        this.removingMemberId = null;
        this.snack.open(`${member.displayName || member.userName} removed`, 'Close', {
          duration: 3000
        });
        this.stokvelService.getStokvelById(this.stokvel.id).subscribe(s => this.stokvel = s);
      },
      error: err => {
        this.removingMemberId = null;
        this.snack.open(err?.error?.message || 'Could not remove member', 'Close', {
          duration: 5000,
          panelClass: 'error-snackbar'
        });
      }
    });
  }
  // ── Outstanding members ──────────────────────────────────────────────────
  loadOutstandingMembers() {
    if (!this.stokvel) return;
    this.outstandingLoading = true;
    this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_8__.environment.apiUrl}stokvels/${this.stokvel.id}/members/outstanding`).subscribe({
      next: data => {
        this.outstandingMembers = data;
        this.outstandingLoading = false;
      },
      error: () => {
        this.outstandingLoading = false;
      }
    });
  }
  get outstandingCount() {
    return this.outstandingMembers.filter(m => m.hasOutstanding).length;
  }
  // ── Request payment ──────────────────────────────────────────────────────
  requestPayment() {
    if (this.paymentForm.invalid || !this.stokvel) return;
    this.paymentLoading = true;
    const {
      amount
    } = this.paymentForm.value;
    this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_8__.environment.apiUrl}stokvels/${this.stokvel.id}/request-payment`, {
      amount
    }).subscribe({
      next: res => {
        this.paymentLoading = false;
        const count = res?.remindersCount ?? 0;
        if (count === 0) {
          this.snack.open('🎉 All members are up to date — no reminders sent!', 'Close', {
            duration: 5000
          });
        } else {
          this.snack.open(`✅ Reminders sent to ${count} member${count !== 1 ? 's' : ''} with outstanding contributions`, 'Close', {
            duration: 5000
          });
        }
        this.loadOutstandingMembers(); // refresh list
      },
      error: err => {
        this.paymentLoading = false;
        this.snack.open(err?.error?.message || 'Failed to send reminders', 'Close', {
          duration: 5000,
          panelClass: 'error-snackbar'
        });
      }
    });
  }
  // ── Helpers ──────────────────────────────────────────────────────────────
  getInitials(name) {
    if (!name) return '?';
    return name.split(' ').slice(0, 2).map(w => w[0]).join('').toUpperCase();
  }
  goBack() {
    this.router.navigate(['/stokvels', this.stokvel?.id]);
  }
  static #_ = _staticBlock = () => (this.ɵfac = function StokvelManageComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || StokvelManageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_services_stokvel_stokvel_service__WEBPACK_IMPORTED_MODULE_12__.StokvelService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_services_user_user_service_service__WEBPACK_IMPORTED_MODULE_13__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_15__.MatSnackBar));
  }, this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
    type: StokvelManageComponent,
    selectors: [["app-stokvel-manage"]],
    decls: 3,
    vars: 2,
    consts: [["loadingTpl", ""], ["class", "manage-page", 4, "ngIf", "ngIfElse"], [1, "manage-page"], [1, "manage-header"], [1, "back-btn", 3, "click"], [1, "header-title"], [1, "header-icon"], ["class", "pending-badge", 3, "click", 4, "ngIf"], ["animationDuration", "200ms", 1, "manage-tabs", 3, "selectedIndexChange", "selectedIndex"], ["mat-tab-label", ""], [1, "tab-body"], [1, "section-note"], [1, "member-table"], [1, "mt-row", "mt-head"], ["class", "mt-row", 4, "ngFor", "ngForOf"], ["class", "empty-state", 4, "ngIf"], ["class", "request-list", 4, "ngIf"], [1, "form-card"], [1, "form-note"], [1, "invite-form", 3, "ngSubmit", "formGroup"], ["appearance", "outline", 1, "full-width"], ["matInput", "", "formControlName", "email", "type", "email", "placeholder", "e.g. jane@example.com"], ["matPrefix", ""], [4, "ngIf"], ["formControlName", "role"], ["value", "MEMBER"], ["value", "ADMIN"], ["type", "submit", 1, "btn-primary", 3, "disabled"], ["diameter", "18", 4, "ngIf"], [1, "outstanding-preview"], [1, "op-header"], ["class", "op-list", 4, "ngIf"], ["matInput", "", "type", "number", "formControlName", "amount", "min", "1"], ["matTextPrefix", ""], ["type", "submit", 1, "btn-primary", "btn-payment", 3, "disabled"], ["class", "payment-info", 4, "ngIf"], [1, "pending-badge", 3, "click"], [1, "tab-count"], [1, "mt-row"], [1, "mt-cell", "member-cell"], [1, "avatar"], [1, "member-info"], [1, "m-name"], [1, "m-email"], [1, "mt-cell"], [1, "role-tag"], [1, "status-tag", 3, "ngClass"], [1, "mt-cell", "muted"], [1, "mt-cell", "action-cell"], ["matTooltip", "Remove member", 1, "btn-remove", 3, "click", "disabled"], ["class", "tab-count pending", 4, "ngIf"], [1, "tab-count", "pending"], [1, "empty-state"], [1, "request-list"], ["class", "request-card", 4, "ngFor", "ngForOf"], [1, "request-card"], [1, "req-avatar"], [1, "req-info"], [1, "req-name"], [1, "req-email"], ["class", "req-msg", 4, "ngIf"], [1, "req-meta"], [1, "req-actions"], [1, "btn-approve", 3, "click"], [1, "btn-reject", 3, "click"], [1, "req-msg"], ["diameter", "18"], [1, "op-list"], ["class", "op-row", 4, "ngFor", "ngForOf"], [1, "op-row"], ["class", "op-member", 4, "ngIf"], [1, "op-member"], [1, "avatar-sm"], [1, "op-info"], [1, "op-name"], [1, "op-sub"], [1, "op-amount"], [1, "payment-info"], [1, "manage-loading"], ["diameter", "48"]],
    template: function StokvelManageComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](0, StokvelManageComponent_div_0_Template, 111, 29, "div", 1)(1, StokvelManageComponent_ng_template_1_Template, 4, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplateRefExtractor"]);
      }
      if (rf & 2) {
        const loadingTpl_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx.isLoading && ctx.stokvel)("ngIfElse", loadingTpl_r9);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _material_module__WEBPACK_IMPORTED_MODULE_7__.MaterialModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__.MatHint, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__.MatError, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__.MatPrefix, _angular_material_input__WEBPACK_IMPORTED_MODULE_17__.MatInput, _angular_material_select__WEBPACK_IMPORTED_MODULE_19__.MatSelect, _angular_material_select__WEBPACK_IMPORTED_MODULE_18__.MatOption, _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__.MatIcon, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_21__.MatTooltip, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_22__.MatProgressSpinner, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_23__.MatTabLabel, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_23__.MatTab, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_23__.MatTabGroup, _angular_common__WEBPACK_IMPORTED_MODULE_0__.SlicePipe, _angular_common__WEBPACK_IMPORTED_MODULE_0__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_0__.TitleCasePipe, _angular_common__WEBPACK_IMPORTED_MODULE_0__.DatePipe],
    styles: [".manage-page[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  background: #f8fafc;\n  font-family: \"Inter\", sans-serif;\n  padding: 0 0 56px;\n}\n\n.manage-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n  flex-wrap: wrap;\n  background: linear-gradient(135deg, #0d47a1, #1565c0);\n  padding: 28px 32px;\n  color: #fff;\n}\n\n.back-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  background: rgba(255, 255, 255, 0.18);\n  border: 1px solid rgba(255, 255, 255, 0.3);\n  border-radius: 999px;\n  color: #fff;\n  padding: 7px 16px;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: inherit;\n  transition: background 0.2s;\n  flex-shrink: 0;\n}\n.back-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.28);\n}\n.back-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 17px;\n  width: 17px;\n  height: 17px;\n}\n\n.header-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  flex: 1;\n}\n.header-title[_ngcontent-%COMP%]   .header-icon[_ngcontent-%COMP%] {\n  width: 52px;\n  height: 52px;\n  border-radius: 14px;\n  background: rgba(255, 255, 255, 0.2);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.header-title[_ngcontent-%COMP%]   .header-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 28px;\n  width: 28px;\n  height: 28px;\n}\n.header-title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 22px;\n  font-weight: 800;\n}\n.header-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 4px 0 0;\n  font-size: 13px;\n  opacity: 0.8;\n}\n\n.pending-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  background: rgba(245, 158, 11, 0.9);\n  color: #fff;\n  padding: 8px 18px;\n  border-radius: 999px;\n  font-size: 13px;\n  font-weight: 700;\n  cursor: pointer;\n  transition: background 0.2s;\n}\n.pending-badge[_ngcontent-%COMP%]:hover {\n  background: #d97706;\n}\n.pending-badge[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  animation: _ngcontent-%COMP%_ring 0.8s ease-in-out infinite alternate;\n}\n\n@keyframes _ngcontent-%COMP%_ring {\n  from {\n    transform: rotate(-10deg);\n  }\n  to {\n    transform: rotate(10deg);\n  }\n}\n.manage-tabs[_ngcontent-%COMP%] {\n  margin: 0 32px;\n}\n.manage-tabs[_ngcontent-%COMP%]     .mat-mdc-tab-header {\n  background: #fff;\n  border-radius: 16px 16px 0 0;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);\n}\n.manage-tabs[_ngcontent-%COMP%]     .mat-mdc-tab-label-container {\n  padding: 0 8px;\n}\n.manage-tabs[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  vertical-align: middle;\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n\n.tab-count[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 20px;\n  height: 20px;\n  border-radius: 999px;\n  background: rgba(21, 101, 192, 0.12);\n  color: #1565c0;\n  font-size: 11px;\n  font-weight: 700;\n  padding: 0 6px;\n  margin-left: 6px;\n}\n.tab-count.pending[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #b45309;\n}\n\n.tab-body[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 0 0 16px 16px;\n  padding: 28px 28px 32px;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);\n  min-height: 300px;\n}\n\n.section-note[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: #eff6ff;\n  border: 1px solid #bfdbfe;\n  border-radius: 10px;\n  padding: 10px 14px;\n  font-size: 13px;\n  color: #1d4ed8;\n  margin-bottom: 20px;\n}\n.section-note[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n  flex-shrink: 0;\n}\n\n.member-table[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n\n.mt-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 2fr 100px 110px 110px 52px;\n  gap: 12px;\n  align-items: center;\n  padding: 12px 8px;\n  border-bottom: 1px solid #f3f4f6;\n}\n.mt-row.mt-head[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.6px;\n  color: #9ca3af;\n  border-bottom: 2px solid #e5e7eb;\n}\n.mt-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n\n.member-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n\n.avatar[_ngcontent-%COMP%] {\n  width: 38px;\n  height: 38px;\n  border-radius: 10px;\n  flex-shrink: 0;\n  background: linear-gradient(135deg, #e5e7eb, #d1d5db);\n  color: #374151;\n  font-size: 13px;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.avatar.admin-av[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, rgba(21, 101, 192, 0.15), rgba(5, 150, 105, 0.2));\n  color: #1565c0;\n}\n\n.member-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.member-info[_ngcontent-%COMP%]   .m-name[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: #111827;\n}\n.member-info[_ngcontent-%COMP%]   .m-email[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #9ca3af;\n}\n\n.muted[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #9ca3af;\n}\n\n.role-tag[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  padding: 3px 10px;\n  border-radius: 999px;\n  background: #f3f4f6;\n  color: #6b7280;\n}\n.role-tag.admin-tag[_ngcontent-%COMP%] {\n  background: rgba(21, 101, 192, 0.1);\n  color: #1565c0;\n}\n\n.status-tag[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  padding: 3px 10px;\n  border-radius: 999px;\n}\n.status-tag.st-active[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #166534;\n}\n.status-tag.st-pending[_ngcontent-%COMP%] {\n  background: #fef9c3;\n  color: #854d0e;\n}\n.status-tag.st-inactive[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #991b1b;\n}\n\n.action-cell[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n}\n\n.btn-remove[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 34px;\n  height: 34px;\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n  background: #fef2f2;\n  color: #b91c1c;\n  transition: background 0.2s;\n}\n.btn-remove[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.btn-remove[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #fee2e2;\n}\n.btn-remove[_ngcontent-%COMP%]:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n\n.request-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n\n.request-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 16px;\n  background: #f9fafb;\n  border: 1px solid #e5e7eb;\n  border-radius: 16px;\n  padding: 16px;\n  flex-wrap: wrap;\n}\n\n.req-avatar[_ngcontent-%COMP%] {\n  width: 46px;\n  height: 46px;\n  border-radius: 12px;\n  flex-shrink: 0;\n  background: linear-gradient(135deg, #0d47a1, #1565c0);\n  color: #fff;\n  font-size: 15px;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.req-info[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n  min-width: 180px;\n}\n.req-info[_ngcontent-%COMP%]   .req-name[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 700;\n  color: #111827;\n}\n.req-info[_ngcontent-%COMP%]   .req-email[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #6b7280;\n}\n.req-info[_ngcontent-%COMP%]   .req-msg[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #374151;\n  font-style: italic;\n  margin-top: 4px;\n}\n.req-info[_ngcontent-%COMP%]   .req-meta[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #9ca3af;\n  margin-top: 4px;\n}\n\n.req-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  flex-shrink: 0;\n  align-self: center;\n}\n\n.btn-approve[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 18px;\n  border: none;\n  border-radius: 10px;\n  cursor: pointer;\n  font-family: inherit;\n  background: linear-gradient(135deg, #065f46, #059669);\n  color: #fff;\n  font-size: 13px;\n  font-weight: 700;\n  transition: all 0.2s;\n}\n.btn-approve[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n}\n.btn-approve[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 12px rgba(5, 150, 105, 0.35);\n  transform: translateY(-1px);\n}\n\n.btn-reject[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 18px;\n  border-radius: 10px;\n  cursor: pointer;\n  font-family: inherit;\n  background: #fef2f2;\n  border: 1.5px solid #fecaca;\n  color: #b91c1c;\n  font-size: 13px;\n  font-weight: 700;\n  transition: all 0.2s;\n}\n.btn-reject[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n}\n.btn-reject[_ngcontent-%COMP%]:hover {\n  background: #fee2e2;\n}\n\n.outstanding-preview[_ngcontent-%COMP%] {\n  background: #fffbeb;\n  border: 1px solid #fde68a;\n  border-radius: 12px;\n  padding: 14px 16px;\n  margin-bottom: 20px;\n}\n\n.op-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 14px;\n  font-weight: 600;\n  color: #92400e;\n  margin-bottom: 4px;\n}\n.op-header[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  color: #d97706;\n  flex-shrink: 0;\n}\n.op-header[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #b45309;\n}\n\n.op-list[_ngcontent-%COMP%] {\n  margin-top: 12px;\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  max-height: 220px;\n  overflow-y: auto;\n}\n\n.op-row[_ngcontent-%COMP%] {\n  display: contents;\n}\n\n.op-member[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  background: #fff;\n  border: 1px solid #fde68a;\n  border-radius: 8px;\n  padding: 8px 12px;\n}\n\n.avatar-sm[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 8px;\n  flex-shrink: 0;\n  background: linear-gradient(135deg, #fde68a, #f59e0b);\n  color: #92400e;\n  font-size: 11px;\n  font-weight: 800;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.op-info[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n}\n.op-info[_ngcontent-%COMP%]   .op-name[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: #111827;\n}\n.op-info[_ngcontent-%COMP%]   .op-sub[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #9ca3af;\n}\n\n.op-amount[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 700;\n  color: #b91c1c;\n  background: #fee2e2;\n  padding: 3px 8px;\n  border-radius: 6px;\n  flex-shrink: 0;\n}\n\n.form-card[_ngcontent-%COMP%] {\n  max-width: 520px;\n}\n.form-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n  color: #111827;\n  margin: 0 0 8px;\n}\n\n.form-note[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #6b7280;\n  line-height: 1.6;\n  margin-bottom: 24px;\n}\n.form-note[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], .form-note[_ngcontent-%COMP%]   em[_ngcontent-%COMP%] {\n  color: #374151;\n}\n\n.invite-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n\n.full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.btn-primary[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 28px;\n  border: none;\n  border-radius: 12px;\n  cursor: pointer;\n  font-family: inherit;\n  background: linear-gradient(135deg, #0d47a1, #1565c0);\n  color: #fff;\n  font-size: 14px;\n  font-weight: 700;\n  box-shadow: 0 4px 14px rgba(13, 71, 161, 0.3);\n  transition: all 0.2s;\n}\n.btn-primary[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  box-shadow: 0 6px 20px rgba(13, 71, 161, 0.42);\n  transform: translateY(-1px);\n}\n.btn-primary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.55;\n  cursor: not-allowed;\n  transform: none;\n  box-shadow: none;\n}\n.btn-primary.btn-payment[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #065f46, #059669);\n  box-shadow: 0 4px 14px rgba(5, 150, 105, 0.3);\n}\n\n.payment-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 8px;\n  background: #f0fdf4;\n  border: 1px solid #bbf7d0;\n  border-radius: 10px;\n  padding: 12px 14px;\n  font-size: 13px;\n  color: #166534;\n  margin-top: 16px;\n}\n.payment-info[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n  flex-shrink: 0;\n  margin-top: 1px;\n}\n\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 48px 16px;\n}\n.empty-state[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 48px;\n  width: 48px;\n  height: 48px;\n  color: #d1d5db;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: #9ca3af;\n  margin: 12px 0 0;\n}\n\n.manage-loading[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: 60vh;\n  gap: 20px;\n}\n.manage-loading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #9ca3af;\n  font-size: 15px;\n}\n\n@media (max-width: 768px) {\n  .manage-header[_ngcontent-%COMP%] {\n    padding: 20px 16px;\n  }\n  .manage-tabs[_ngcontent-%COMP%] {\n    margin: 0 16px;\n  }\n  .tab-body[_ngcontent-%COMP%] {\n    padding: 20px 16px;\n  }\n  .mt-row[_ngcontent-%COMP%] {\n    grid-template-columns: 2fr 80px 36px;\n  }\n  .mt-row[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:nth-child(3), .mt-row[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:nth-child(4) {\n    display: none;\n  }\n  .req-actions[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9zdG9rdmVsLW1hbmFnZS9zdG9rdmVsLW1hbmFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQ0FBQTtFQUNBLGlCQUFBO0FBSkY7O0FBUUE7RUFDRSxhQUFBO0VBQWUsbUJBQUE7RUFBcUIsU0FBQTtFQUFXLGVBQUE7RUFDL0MscURBQUE7RUFDQSxrQkFBQTtFQUFvQixXQUFBO0FBRHRCOztBQUlBO0VBQ0Usb0JBQUE7RUFBc0IsbUJBQUE7RUFBcUIsUUFBQTtFQUMzQyxxQ0FBQTtFQUFtQywwQ0FBQTtFQUNuQyxvQkFBQTtFQUFzQixXQUFBO0VBQWEsaUJBQUE7RUFDbkMsZUFBQTtFQUFpQixnQkFBQTtFQUFrQixlQUFBO0VBQWlCLG9CQUFBO0VBQ3BELDJCQUFBO0VBQTRCLGNBQUE7QUFROUI7QUFQRTtFQUFVLHFDQUFBO0FBVVo7QUFURTtFQUFXLGVBQUE7RUFBaUIsV0FBQTtFQUFhLFlBQUE7QUFjM0M7O0FBWEE7RUFDRSxhQUFBO0VBQWUsbUJBQUE7RUFBcUIsU0FBQTtFQUFXLE9BQUE7QUFpQmpEO0FBaEJFO0VBQ0UsV0FBQTtFQUFhLFlBQUE7RUFBYyxtQkFBQTtFQUMzQixvQ0FBQTtFQUFrQyxhQUFBO0VBQWUsbUJBQUE7RUFBcUIsdUJBQUE7QUF1QjFFO0FBdEJJO0VBQVcsZUFBQTtFQUFpQixXQUFBO0VBQWEsWUFBQTtBQTJCN0M7QUF6QkU7RUFBSyxTQUFBO0VBQVcsZUFBQTtFQUFpQixnQkFBQTtBQThCbkM7QUE3QkU7RUFBSyxlQUFBO0VBQWlCLGVBQUE7RUFBaUIsWUFBQTtBQWtDekM7O0FBL0JBO0VBQ0Usb0JBQUE7RUFBc0IsbUJBQUE7RUFBcUIsUUFBQTtFQUMzQyxtQ0FBQTtFQUFpQyxXQUFBO0VBQ2pDLGlCQUFBO0VBQW1CLG9CQUFBO0VBQXNCLGVBQUE7RUFBaUIsZ0JBQUE7RUFDMUQs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QWEsWUFBQTtFQUFjLGNBQUE7RUFBZ0IsZUFBQTtBQStVekU7O0FBM1VBO0VBQ0Usa0JBQUE7RUFBb0Isa0JBQUE7QUErVXRCO0FBOVVFO0VBQVcsZUFBQTtFQUFpQixXQUFBO0VBQWEsWUFBQTtFQUFjLGNBQUE7QUFvVnpEO0FBblZFO0VBQUksZUFBQTtFQUFpQixjQUFBO0VBQWdCLGdCQUFBO0FBd1Z2Qzs7QUFyVkE7RUFDRSxhQUFBO0VBQWUsc0JBQUE7RUFBd0IsbUJBQUE7RUFBcUIsdUJBQUE7RUFDNUQsZ0JBQUE7RUFBa0IsU0FBQTtBQTRWcEI7QUEzVkU7RUFBSSxjQUFBO0VBQWdCLGVBQUE7QUErVnRCOztBQTNWQTtFQUNFO0lBQWlCLGtCQUFBO0VBK1ZqQjtFQTlWQTtJQUFlLGNBQUE7RUFpV2Y7RUFoV0E7SUFBWSxrQkFBQTtFQW1XWjtFQWxXQTtJQUFVLG9DQUFBO0VBcVdWO0VBcFdBO0lBQW1ELGFBQUE7RUF1V25EO0VBdFdBO0lBQWUsV0FBQTtFQXlXZjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiJGJyYW5kOiAjMTU2NWMwO1xyXG4kbmF2eTogIzBkNDdhMTtcclxuJHRlYWw6ICMwNTk2Njk7XHJcbiRyYWRpdXM6IDE2cHg7XHJcblxyXG4ubWFuYWdlLXBhZ2Uge1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gIGJhY2tncm91bmQ6ICNmOGZhZmM7XHJcbiAgZm9udC1mYW1pbHk6ICdJbnRlcicsIHNhbnMtc2VyaWY7XHJcbiAgcGFkZGluZzogMCAwIDU2cHg7XHJcbn1cclxuXHJcbi8vIMOiwpTCgMOiwpTCgCBIZWFkZXIgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXHJcbi5tYW5hZ2UtaGVhZGVyIHtcclxuICBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDIwcHg7IGZsZXgtd3JhcDogd3JhcDtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMGQ0N2ExLCAjMTU2NWMwKTtcclxuICBwYWRkaW5nOiAyOHB4IDMycHg7IGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4uYmFjay1idG4ge1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDZweDtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LC4xOCk7IGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsLjMpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDk5OXB4OyBjb2xvcjogI2ZmZjsgcGFkZGluZzogN3B4IDE2cHg7XHJcbiAgZm9udC1zaXplOiAxM3B4OyBmb250LXdlaWdodDogNjAwOyBjdXJzb3I6IHBvaW50ZXI7IGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgLjJzOyBmbGV4LXNocmluazogMDtcclxuICAmOmhvdmVyIHsgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwuMjgpOyB9XHJcbiAgbWF0LWljb24geyBmb250LXNpemU6IDE3cHg7IHdpZHRoOiAxN3B4OyBoZWlnaHQ6IDE3cHg7IH1cclxufVxyXG5cclxuLmhlYWRlci10aXRsZSB7XHJcbiAgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZ2FwOiAxNnB4OyBmbGV4OiAxO1xyXG4gIC5oZWFkZXItaWNvbiB7XHJcbiAgICB3aWR0aDogNTJweDsgaGVpZ2h0OiA1MnB4OyBib3JkZXItcmFkaXVzOiAxNHB4O1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwuMik7IGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgbWF0LWljb24geyBmb250LXNpemU6IDI4cHg7IHdpZHRoOiAyOHB4OyBoZWlnaHQ6IDI4cHg7IH1cclxuICB9XHJcbiAgaDEgeyBtYXJnaW46IDA7IGZvbnQtc2l6ZTogMjJweDsgZm9udC13ZWlnaHQ6IDgwMDsgfVxyXG4gIHAgIHsgbWFyZ2luOiA0cHggMCAwOyBmb250LXNpemU6IDEzcHg7IG9wYWNpdHk6IC44OyB9XHJcbn1cclxuXHJcbi5wZW5kaW5nLWJhZGdlIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZ2FwOiA4cHg7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyNDUsMTU4LDExLC45KTsgY29sb3I6ICNmZmY7XHJcbiAgcGFkZGluZzogOHB4IDE4cHg7IGJvcmRlci1yYWRpdXM6IDk5OXB4OyBmb250LXNpemU6IDEzcHg7IGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgY3Vyc29yOiBwb2ludGVyOyB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIC4ycztcclxuICAmOmhvdmVyIHsgYmFja2dyb3VuZDogI2Q5NzcwNjsgfVxyXG4gIG1hdC1pY29uIHsgZm9udC1zaXplOiAxOHB4OyB3aWR0aDogMThweDsgaGVpZ2h0OiAxOHB4OyBhbmltYXRpb246IHJpbmcgLjhzIGVhc2UtaW4tb3V0IGluZmluaXRlIGFsdGVybmF0ZTsgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHJpbmcgeyBmcm9tIHsgdHJhbnNmb3JtOiByb3RhdGUoLTEwZGVnKTsgfSB0byB7IHRyYW5zZm9ybTogcm90YXRlKDEwZGVnKTsgfSB9XHJcblxyXG4vLyDDosKUwoDDosKUwoAgVGFicyDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcclxuLm1hbmFnZS10YWJzIHtcclxuICBtYXJnaW46IDAgMzJweDtcclxuICA6Om5nLWRlZXAgLm1hdC1tZGMtdGFiLWhlYWRlciB7IGJhY2tncm91bmQ6ICNmZmY7IGJvcmRlci1yYWRpdXM6ICRyYWRpdXMgJHJhZGl1cyAwIDA7IGJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2JhKDAsMCwwLC4wNik7IH1cclxuICA6Om5nLWRlZXAgLm1hdC1tZGMtdGFiLWxhYmVsLWNvbnRhaW5lciB7IHBhZGRpbmc6IDAgOHB4OyB9XHJcbiAgbWF0LWljb24geyB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyBmb250LXNpemU6IDE4cHg7IHdpZHRoOiAxOHB4OyBoZWlnaHQ6IDE4cHg7IH1cclxufVxyXG5cclxuLnRhYi1jb3VudCB7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIG1pbi13aWR0aDogMjBweDsgaGVpZ2h0OiAyMHB4OyBib3JkZXItcmFkaXVzOiA5OTlweDtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDIxLDEwMSwxOTIsLjEyKTsgY29sb3I6ICRicmFuZDtcclxuICBmb250LXNpemU6IDExcHg7IGZvbnQtd2VpZ2h0OiA3MDA7IHBhZGRpbmc6IDAgNnB4OyBtYXJnaW4tbGVmdDogNnB4O1xyXG4gICYucGVuZGluZyB7IGJhY2tncm91bmQ6ICNmZWYzYzc7IGNvbG9yOiAjYjQ1MzA5OyB9XHJcbn1cclxuXHJcbi50YWItYm9keSB7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjsgYm9yZGVyLXJhZGl1czogMCAwICRyYWRpdXMgJHJhZGl1cztcclxuICBwYWRkaW5nOiAyOHB4IDI4cHggMzJweDtcclxuICBib3gtc2hhZG93OiAwIDRweCAxNnB4IHJnYmEoMCwwLDAsLjA2KTtcclxuICBtaW4taGVpZ2h0OiAzMDBweDtcclxufVxyXG5cclxuLnNlY3Rpb24tbm90ZSB7XHJcbiAgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZ2FwOiA4cHg7XHJcbiAgYmFja2dyb3VuZDogI2VmZjZmZjsgYm9yZGVyOiAxcHggc29saWQgI2JmZGJmZTsgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBwYWRkaW5nOiAxMHB4IDE0cHg7IGZvbnQtc2l6ZTogMTNweDsgY29sb3I6ICMxZDRlZDg7IG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgbWF0LWljb24geyBmb250LXNpemU6IDE2cHg7IHdpZHRoOiAxNnB4OyBoZWlnaHQ6IDE2cHg7IGZsZXgtc2hyaW5rOiAwOyB9XHJcbn1cclxuXHJcbi8vIMOiwpTCgMOiwpTCgCBNZW1iZXIgdGFibGUgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXHJcbi5tZW1iZXItdGFibGUgeyBvdmVyZmxvdy14OiBhdXRvOyB9XHJcblxyXG4ubXQtcm93IHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDEwMHB4IDExMHB4IDExMHB4IDUycHg7XHJcbiAgZ2FwOiAxMnB4OyBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDEycHggOHB4OyBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2YzZjRmNjtcclxuXHJcbiAgJi5tdC1oZWFkIHtcclxuICAgIGZvbnQtc2l6ZTogMTFweDsgZm9udC13ZWlnaHQ6IDcwMDsgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAuNnB4OyBjb2xvcjogIzljYTNhZjsgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNlNWU3ZWI7XHJcbiAgfVxyXG4gICY6bGFzdC1jaGlsZCB7IGJvcmRlci1ib3R0b206IG5vbmU7IH1cclxufVxyXG5cclxuLm1lbWJlci1jZWxsIHsgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZ2FwOiAxMnB4OyB9XHJcblxyXG4uYXZhdGFyIHtcclxuICB3aWR0aDogMzhweDsgaGVpZ2h0OiAzOHB4OyBib3JkZXItcmFkaXVzOiAxMHB4OyBmbGV4LXNocmluazogMDtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZTVlN2ViLCAjZDFkNWRiKTtcclxuICBjb2xvcjogIzM3NDE1MTsgZm9udC1zaXplOiAxM3B4OyBmb250LXdlaWdodDogNzAwO1xyXG4gIGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICYuYWRtaW4tYXYgeyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2JhKDIxLDEwMSwxOTIsLjE1KSwgcmdiYSg1LDE1MCwxMDUsLjIpKTsgY29sb3I6ICRicmFuZDsgfVxyXG59XHJcblxyXG4ubWVtYmVyLWluZm8ge1xyXG4gIGRpc3BsYXk6IGZsZXg7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgLm0tbmFtZSB7IGZvbnQtc2l6ZTogMTRweDsgZm9udC13ZWlnaHQ6IDYwMDsgY29sb3I6ICMxMTE4Mjc7IH1cclxuICAubS1lbWFpbCB7IGZvbnQtc2l6ZTogMTJweDsgY29sb3I6ICM5Y2EzYWY7IH1cclxufVxyXG5cclxuLm11dGVkIHsgZm9udC1zaXplOiAxM3B4OyBjb2xvcjogIzljYTNhZjsgfVxyXG5cclxuLnJvbGUtdGFnIHtcclxuICBmb250LXNpemU6IDExcHg7IGZvbnQtd2VpZ2h0OiA3MDA7IHBhZGRpbmc6IDNweCAxMHB4OyBib3JkZXItcmFkaXVzOiA5OTlweDtcclxuICBiYWNrZ3JvdW5kOiAjZjNmNGY2OyBjb2xvcjogIzZiNzI4MDtcclxuICAmLmFkbWluLXRhZyB7IGJhY2tncm91bmQ6IHJnYmEoMjEsMTAxLDE5MiwuMSk7IGNvbG9yOiAkYnJhbmQ7IH1cclxufVxyXG5cclxuLnN0YXR1cy10YWcge1xyXG4gIGZvbnQtc2l6ZTogMTFweDsgZm9udC13ZWlnaHQ6IDcwMDsgcGFkZGluZzogM3B4IDEwcHg7IGJvcmRlci1yYWRpdXM6IDk5OXB4O1xyXG4gICYuc3QtYWN0aXZlICAgeyBiYWNrZ3JvdW5kOiAjZGNmY2U3OyBjb2xvcjogIzE2NjUzNDsgfVxyXG4gICYuc3QtcGVuZGluZyAgeyBiYWNrZ3JvdW5kOiAjZmVmOWMzOyBjb2xvcjogIzg1NGQwZTsgfVxyXG4gICYuc3QtaW5hY3RpdmUgeyBiYWNrZ3JvdW5kOiAjZmVlMmUyOyBjb2xvcjogIzk5MWIxYjsgfVxyXG59XHJcblxyXG4uYWN0aW9uLWNlbGwgeyBkaXNwbGF5OiBmbGV4OyBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kOyB9XHJcblxyXG4uYnRuLXJlbW92ZSB7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHdpZHRoOiAzNHB4OyBoZWlnaHQ6IDM0cHg7IGJvcmRlcjogbm9uZTsgYm9yZGVyLXJhZGl1czogOHB4OyBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYmFja2dyb3VuZDogI2ZlZjJmMjsgY29sb3I6ICNiOTFjMWM7IHRyYW5zaXRpb246IGJhY2tncm91bmQgLjJzO1xyXG4gIG1hdC1pY29uIHsgZm9udC1zaXplOiAxOHB4OyB3aWR0aDogMThweDsgaGVpZ2h0OiAxOHB4OyB9XHJcbiAgJjpob3Zlcjpub3QoOmRpc2FibGVkKSB7IGJhY2tncm91bmQ6ICNmZWUyZTI7IH1cclxuICAmOmRpc2FibGVkIHsgb3BhY2l0eTogLjQ7IGN1cnNvcjogbm90LWFsbG93ZWQ7IH1cclxufVxyXG5cclxuLy8gw6LClMKAw6LClMKAIEpvaW4gcmVxdWVzdHMgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXHJcbi5yZXF1ZXN0LWxpc3QgeyBkaXNwbGF5OiBmbGV4OyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBnYXA6IDE0cHg7IH1cclxuXHJcbi5yZXF1ZXN0LWNhcmQge1xyXG4gIGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0OyBnYXA6IDE2cHg7XHJcbiAgYmFja2dyb3VuZDogI2Y5ZmFmYjsgYm9yZGVyOiAxcHggc29saWQgI2U1ZTdlYjsgYm9yZGVyLXJhZGl1czogJHJhZGl1czsgcGFkZGluZzogMTZweDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbn1cclxuXHJcbi5yZXEtYXZhdGFyIHtcclxuICB3aWR0aDogNDZweDsgaGVpZ2h0OiA0NnB4OyBib3JkZXItcmFkaXVzOiAxMnB4OyBmbGV4LXNocmluazogMDtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAkbmF2eSwgJGJyYW5kKTtcclxuICBjb2xvcjogI2ZmZjsgZm9udC1zaXplOiAxNXB4OyBmb250LXdlaWdodDogNzAwO1xyXG4gIGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4ucmVxLWluZm8ge1xyXG4gIGZsZXg6IDE7IGRpc3BsYXk6IGZsZXg7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IGdhcDogM3B4OyBtaW4td2lkdGg6IDE4MHB4O1xyXG4gIC5yZXEtbmFtZSAgeyBmb250LXNpemU6IDE1cHg7IGZvbnQtd2VpZ2h0OiA3MDA7IGNvbG9yOiAjMTExODI3OyB9XHJcbiAgLnJlcS1lbWFpbCB7IGZvbnQtc2l6ZTogMTNweDsgY29sb3I6ICM2YjcyODA7IH1cclxuICAucmVxLW1zZyAgIHsgZm9udC1zaXplOiAxM3B4OyBjb2xvcjogIzM3NDE1MTsgZm9udC1zdHlsZTogaXRhbGljOyBtYXJnaW4tdG9wOiA0cHg7IH1cclxuICAucmVxLW1ldGEgIHsgZm9udC1zaXplOiAxMnB4OyBjb2xvcjogIzljYTNhZjsgbWFyZ2luLXRvcDogNHB4OyB9XHJcbn1cclxuXHJcbi5yZXEtYWN0aW9ucyB7IGRpc3BsYXk6IGZsZXg7IGdhcDogMTBweDsgZmxleC1zaHJpbms6IDA7IGFsaWduLXNlbGY6IGNlbnRlcjsgfVxyXG5cclxuLmJ0bi1hcHByb3ZlIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZ2FwOiA2cHg7XHJcbiAgcGFkZGluZzogOHB4IDE4cHg7IGJvcmRlcjogbm9uZTsgYm9yZGVyLXJhZGl1czogMTBweDsgY3Vyc29yOiBwb2ludGVyOyBmb250LWZhbWlseTogaW5oZXJpdDtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMDY1ZjQ2LCAjMDU5NjY5KTtcclxuICBjb2xvcjogI2ZmZjsgZm9udC1zaXplOiAxM3B4OyBmb250LXdlaWdodDogNzAwOyB0cmFuc2l0aW9uOiBhbGwgLjJzO1xyXG4gIG1hdC1pY29uIHsgZm9udC1zaXplOiAxNnB4OyB3aWR0aDogMTZweDsgaGVpZ2h0OiAxNnB4OyB9XHJcbiAgJjpob3ZlciB7IGJveC1zaGFkb3c6IDAgNHB4IDEycHggcmdiYSg1LDE1MCwxMDUsLjM1KTsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpOyB9XHJcbn1cclxuXHJcbi5idG4tcmVqZWN0IHtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZ2FwOiA2cHg7XHJcbiAgcGFkZGluZzogOHB4IDE4cHg7IGJvcmRlci1yYWRpdXM6IDEwcHg7IGN1cnNvcjogcG9pbnRlcjsgZm9udC1mYW1pbHk6IGluaGVyaXQ7XHJcbiAgYmFja2dyb3VuZDogI2ZlZjJmMjsgYm9yZGVyOiAxLjVweCBzb2xpZCAjZmVjYWNhO1xyXG4gIGNvbG9yOiAjYjkxYzFjOyBmb250LXNpemU6IDEzcHg7IGZvbnQtd2VpZ2h0OiA3MDA7IHRyYW5zaXRpb246IGFsbCAuMnM7XHJcbiAgbWF0LWljb24geyBmb250LXNpemU6IDE2cHg7IHdpZHRoOiAxNnB4OyBoZWlnaHQ6IDE2cHg7IH1cclxuICAmOmhvdmVyIHsgYmFja2dyb3VuZDogI2ZlZTJlMjsgfVxyXG59XHJcblxyXG4vLyDDosKUwoDDosKUwoAgT3V0c3RhbmRpbmcgcHJldmlldyDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcclxuLm91dHN0YW5kaW5nLXByZXZpZXcge1xyXG4gIGJhY2tncm91bmQ6ICNmZmZiZWI7IGJvcmRlcjogMXB4IHNvbGlkICNmZGU2OGE7IGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgcGFkZGluZzogMTRweCAxNnB4OyBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4ub3AtaGVhZGVyIHtcclxuICBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDhweDtcclxuICBmb250LXNpemU6IDE0cHg7IGZvbnQtd2VpZ2h0OiA2MDA7IGNvbG9yOiAjOTI0MDBlOyBtYXJnaW4tYm90dG9tOiA0cHg7XHJcbiAgbWF0LWljb24geyBmb250LXNpemU6IDE4cHg7IHdpZHRoOiAxOHB4OyBoZWlnaHQ6IDE4cHg7IGNvbG9yOiAjZDk3NzA2OyBmbGV4LXNocmluazogMDsgfVxyXG4gIHN0cm9uZyB7IGNvbG9yOiAjYjQ1MzA5OyB9XHJcbn1cclxuXHJcbi5vcC1saXN0IHsgbWFyZ2luLXRvcDogMTJweDsgZGlzcGxheTogZmxleDsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgZ2FwOiA2cHg7IG1heC1oZWlnaHQ6IDIyMHB4OyBvdmVyZmxvdy15OiBhdXRvOyB9XHJcblxyXG4ub3Atcm93IHsgZGlzcGxheTogY29udGVudHM7IH1cclxuXHJcbi5vcC1tZW1iZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGdhcDogMTBweDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmOyBib3JkZXI6IDFweCBzb2xpZCAjZmRlNjhhOyBib3JkZXItcmFkaXVzOiA4cHg7IHBhZGRpbmc6IDhweCAxMnB4O1xyXG59XHJcblxyXG4uYXZhdGFyLXNtIHtcclxuICB3aWR0aDogMzJweDsgaGVpZ2h0OiAzMnB4OyBib3JkZXItcmFkaXVzOiA4cHg7IGZsZXgtc2hyaW5rOiAwO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNmZGU2OGEsICNmNTllMGIpO1xyXG4gIGNvbG9yOiAjOTI0MDBlOyBmb250LXNpemU6IDExcHg7IGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5vcC1pbmZvIHsgZmxleDogMTsgZGlzcGxheTogZmxleDsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAub3AtbmFtZSB7IGZvbnQtc2l6ZTogMTNweDsgZm9udC13ZWlnaHQ6IDYwMDsgY29sb3I6ICMxMTE4Mjc7IH1cclxuICAub3Atc3ViICB7IGZvbnQtc2l6ZTogMTFweDsgY29sb3I6ICM5Y2EzYWY7IH1cclxufVxyXG5cclxuLm9wLWFtb3VudCB7XHJcbiAgZm9udC1zaXplOiAxM3B4OyBmb250LXdlaWdodDogNzAwOyBjb2xvcjogI2I5MWMxYztcclxuICBiYWNrZ3JvdW5kOiAjZmVlMmUyOyBwYWRkaW5nOiAzcHggOHB4OyBib3JkZXItcmFkaXVzOiA2cHg7IGZsZXgtc2hyaW5rOiAwO1xyXG59XHJcblxyXG4vLyDDosKUwoDDosKUwoAgRm9ybXMgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXHJcbi5mb3JtLWNhcmQge1xyXG4gIG1heC13aWR0aDogNTIwcHg7XHJcbiAgaDMgeyBmb250LXNpemU6IDE4cHg7IGZvbnQtd2VpZ2h0OiA3MDA7IGNvbG9yOiAjMTExODI3OyBtYXJnaW46IDAgMCA4cHg7IH1cclxufVxyXG5cclxuLmZvcm0tbm90ZSB7XHJcbiAgZm9udC1zaXplOiAxNHB4OyBjb2xvcjogIzZiNzI4MDsgbGluZS1oZWlnaHQ6IDEuNjsgbWFyZ2luLWJvdHRvbTogMjRweDtcclxuICBzdHJvbmcsIGVtIHsgY29sb3I6ICMzNzQxNTE7IH1cclxufVxyXG5cclxuLmludml0ZS1mb3JtIHsgZGlzcGxheTogZmxleDsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgZ2FwOiA0cHg7IH1cclxuLmZ1bGwtd2lkdGggeyB3aWR0aDogMTAwJTsgfVxyXG5cclxuLmJ0bi1wcmltYXJ5IHtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZ2FwOiA4cHg7XHJcbiAgcGFkZGluZzogMTJweCAyOHB4OyBib3JkZXI6IG5vbmU7IGJvcmRlci1yYWRpdXM6IDEycHg7IGN1cnNvcjogcG9pbnRlcjsgZm9udC1mYW1pbHk6IGluaGVyaXQ7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgJG5hdnksICRicmFuZCk7XHJcbiAgY29sb3I6ICNmZmY7IGZvbnQtc2l6ZTogMTRweDsgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBib3gtc2hhZG93OiAwIDRweCAxNHB4IHJnYmEoMTMsNzEsMTYxLC4zKTsgdHJhbnNpdGlvbjogYWxsIC4ycztcclxuICBtYXQtaWNvbiB7IGZvbnQtc2l6ZTogMThweDsgd2lkdGg6IDE4cHg7IGhlaWdodDogMThweDsgfVxyXG4gICY6aG92ZXI6bm90KDpkaXNhYmxlZCkgeyBib3gtc2hhZG93OiAwIDZweCAyMHB4IHJnYmEoMTMsNzEsMTYxLC40Mik7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTsgfVxyXG4gICY6ZGlzYWJsZWQgeyBvcGFjaXR5OiAuNTU7IGN1cnNvcjogbm90LWFsbG93ZWQ7IHRyYW5zZm9ybTogbm9uZTsgYm94LXNoYWRvdzogbm9uZTsgfVxyXG4gICYuYnRuLXBheW1lbnQgeyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMDY1ZjQ2LCAkdGVhbCk7IGJveC1zaGFkb3c6IDAgNHB4IDE0cHggcmdiYSg1LDE1MCwxMDUsLjMpOyB9XHJcbn1cclxuXHJcbi5wYXltZW50LWluZm8ge1xyXG4gIGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0OyBnYXA6IDhweDtcclxuICBiYWNrZ3JvdW5kOiAjZjBmZGY0OyBib3JkZXI6IDFweCBzb2xpZCAjYmJmN2QwOyBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIHBhZGRpbmc6IDEycHggMTRweDsgZm9udC1zaXplOiAxM3B4OyBjb2xvcjogIzE2NjUzNDsgbWFyZ2luLXRvcDogMTZweDtcclxuICBtYXQtaWNvbiB7IGZvbnQtc2l6ZTogMTZweDsgd2lkdGg6IDE2cHg7IGhlaWdodDogMTZweDsgZmxleC1zaHJpbms6IDA7IG1hcmdpbi10b3A6IDFweDsgfVxyXG59XHJcblxyXG4vLyDDosKUwoDDosKUwoAgRW1wdHkgLyBMb2FkaW5nIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxyXG4uZW1wdHktc3RhdGUge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjsgcGFkZGluZzogNDhweCAxNnB4O1xyXG4gIG1hdC1pY29uIHsgZm9udC1zaXplOiA0OHB4OyB3aWR0aDogNDhweDsgaGVpZ2h0OiA0OHB4OyBjb2xvcjogI2QxZDVkYjsgfVxyXG4gIHAgeyBmb250LXNpemU6IDE1cHg7IGNvbG9yOiAjOWNhM2FmOyBtYXJnaW46IDEycHggMCAwOyB9XHJcbn1cclxuXHJcbi5tYW5hZ2UtbG9hZGluZyB7XHJcbiAgZGlzcGxheTogZmxleDsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgbWluLWhlaWdodDogNjB2aDsgZ2FwOiAyMHB4O1xyXG4gIHAgeyBjb2xvcjogIzljYTNhZjsgZm9udC1zaXplOiAxNXB4OyB9XHJcbn1cclxuXHJcbi8vIMOiwpTCgMOiwpTCgCBSZXNwb25zaXZlIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAubWFuYWdlLWhlYWRlciB7IHBhZGRpbmc6IDIwcHggMTZweDsgfVxyXG4gIC5tYW5hZ2UtdGFicyB7IG1hcmdpbjogMCAxNnB4OyB9XHJcbiAgLnRhYi1ib2R5IHsgcGFkZGluZzogMjBweCAxNnB4OyB9XHJcbiAgLm10LXJvdyB7IGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDgwcHggMzZweDsgfVxyXG4gIC5tdC1yb3cgPiA6bnRoLWNoaWxkKDMpLCAubXQtcm93ID4gOm50aC1jaGlsZCg0KSB7IGRpc3BsYXk6IG5vbmU7IH1cclxuICAucmVxLWFjdGlvbnMgeyB3aWR0aDogMTAwJTsgfVxyXG59XHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  }));
}
_staticBlock();

/***/ })

}]);
//# sourceMappingURL=src_app_components_stokvel-manage_stokvel-manage_component_ts.js.map