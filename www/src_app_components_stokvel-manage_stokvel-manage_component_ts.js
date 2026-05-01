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
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 40);
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
function StokvelManageComponent_div_0_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function StokvelManageComponent_div_0_div_17_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r1.activeTab = 2);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "gavel");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate2"](" ", ctx_r1.pendingProposals.length, " removal proposal", ctx_r1.pendingProposals.length !== 1 ? "s" : "", " awaiting ratification ");
  }
}
function StokvelManageComponent_div_0_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "people");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "\u00A0Members ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r1.allMembers.length);
  }
}
function StokvelManageComponent_div_0_span_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Only one admin exists \u2014 admin removal is blocked. Assign another admin first. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function StokvelManageComponent_div_0_span_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Removing a ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, "regular member");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4, " is immediate. Removing an ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6, "admin");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7, " requires ratification by another admin. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function StokvelManageComponent_div_0_div_38_button_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 56)(1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "block");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
}
function StokvelManageComponent_div_0_div_38_ng_container_21_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 59)(1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "hourglass_top");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, " Pending ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function StokvelManageComponent_div_0_div_38_ng_container_21_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function StokvelManageComponent_div_0_div_38_ng_container_21_button_2_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r5);
      const m_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r1.openProposalForm(m_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "gavel");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, " Propose Removal ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function StokvelManageComponent_div_0_div_38_ng_container_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, StokvelManageComponent_div_0_div_38_ng_container_21_span_1_Template, 4, 0, "span", 57)(2, StokvelManageComponent_div_0_div_38_ng_container_21_button_2_Template, 4, 0, "button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const m_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r1.hasPendingProposalFor(m_r6));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx_r1.hasPendingProposalFor(m_r6));
  }
}
function StokvelManageComponent_div_0_div_38_button_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function StokvelManageComponent_div_0_div_38_button_22_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r7);
      const m_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r1.removeMember(m_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "person_remove");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const m_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", ctx_r1.removingMemberId === (m_r6.id ?? -1));
  }
}
function StokvelManageComponent_div_0_div_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 43)(1, "div", 44)(2, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "div", 46)(5, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](9, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "div", 49)(11, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "div", 49)(14, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](16, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](18, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](19, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](20, StokvelManageComponent_div_0_div_38_button_20_Template, 3, 0, "button", 54)(21, StokvelManageComponent_div_0_div_38_ng_container_21_Template, 3, 2, "ng-container", 15)(22, StokvelManageComponent_div_0_div_38_button_22_Template, 3, 1, "button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const m_r6 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("admin-av", m_r6.role === "ADMIN");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx_r1.getInitials(m_r6.displayName || m_r6.userName), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](m_r6.displayName || m_r6.userName);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](m_r6.userEmail ? _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind3"](9, 14, m_r6.userEmail, 0, 3) + "***@" + (m_r6.userEmail.split("@")[1] || "") : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("admin-tag", m_r6.role === "ADMIN");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](m_r6.role);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", "st-" + (m_r6.membershipStatus == null ? null : m_r6.membershipStatus.toLowerCase()));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", m_r6.membershipStatus, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](18, 18, m_r6.joinedDate, "MMM y"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r1.isLastAdmin(m_r6));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r1.requiresProposal(m_r6));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", m_r6.role !== "ADMIN");
  }
}
function StokvelManageComponent_div_0_div_39_mat_spinner_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "mat-spinner", 70);
  }
}
function StokvelManageComponent_div_0_div_39_mat_icon_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "send");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function StokvelManageComponent_div_0_div_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 62)(1, "div", 63)(2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, "gavel");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "p", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7, " This proposal will be sent to all other admins for ratification. The removal will only be executed once ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](9, "another admin approves");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](10, " it. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "mat-form-field", 25)(12, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](13, "Reason (optional)");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](14, "textarea", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtwoWayListener"]("ngModelChange", function StokvelManageComponent_div_0_div_39_Template_textarea_ngModelChange_14_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r8);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtwoWayBindingSet"](ctx_r1.proposalReason, $event) || (ctx_r1.proposalReason = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "div", 66)(16, "button", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function StokvelManageComponent_div_0_div_39_Template_button_click_16_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r8);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r1.cancelProposalForm());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](17, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](18, "button", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function StokvelManageComponent_div_0_div_39_Template_button_click_18_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r8);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r1.submitProposal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](19, StokvelManageComponent_div_0_div_39_mat_spinner_19_Template, 1, 0, "mat-spinner", 69)(20, StokvelManageComponent_div_0_div_39_mat_icon_20_Template, 2, 0, "mat-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("Propose Admin Removal: ", ctx_r1.proposalTargetMember.displayName || ctx_r1.proposalTargetMember.userName);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.proposalReason);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", ctx_r1.proposalLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r1.proposalLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx_r1.proposalLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx_r1.proposalLoading ? "Submitting\u2026" : "Submit Proposal", " ");
  }
}
function StokvelManageComponent_div_0_ng_template_41_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r1.pendingRequests.length);
  }
}
function StokvelManageComponent_div_0_ng_template_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "how_to_reg");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "\u00A0Join Requests ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](3, StokvelManageComponent_div_0_ng_template_41_span_3_Template, 2, 1, "span", 71);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r1.pendingRequests.length);
  }
}
function StokvelManageComponent_div_0_div_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 73)(1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "check_circle_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4, "No pending join requests");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
}
function StokvelManageComponent_div_0_div_44_div_1_span_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const req_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](req_r10.message);
  }
}
function StokvelManageComponent_div_0_div_44_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 76)(1, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "div", 78)(4, "span", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "span", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](8, StokvelManageComponent_div_0_div_44_div_1_span_8_Template, 2, 1, "span", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "span", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](11, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](12, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "div", 83)(14, "button", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function StokvelManageComponent_div_0_div_44_div_1_Template_button_click_14_listener() {
      const req_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r9).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r1.approveRequest(req_r10.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](16, "check");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](17, " Approve ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](18, "button", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function StokvelManageComponent_div_0_div_44_div_1_Template_button_click_18_listener() {
      const req_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r9).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r1.rejectRequest(req_r10.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](19, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](20, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](21, " Reject ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const req_r10 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r1.getInitials(req_r10.fullName));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](req_r10.fullName);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](req_r10.userEmail);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", req_r10.message);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate2"](" R", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](11, 6, req_r10.contributionAmount), " contribution \u00B7 ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](12, 8, req_r10.createdAt, "mediumDate"), " ");
  }
}
function StokvelManageComponent_div_0_div_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, StokvelManageComponent_div_0_div_44_div_1_Template, 22, 11, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r1.pendingRequests);
  }
}
function StokvelManageComponent_div_0_ng_template_46_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r1.pendingProposals.length);
  }
}
function StokvelManageComponent_div_0_ng_template_46_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "gavel");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "\u00A0Proposals ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](3, StokvelManageComponent_div_0_ng_template_46_span_3_Template, 2, 1, "span", 71);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r1.pendingProposals.length);
  }
}
function StokvelManageComponent_div_0_div_48_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 73)(1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "gavel");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4, "No pending admin removal proposals");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "span", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6, " Proposals are created when an admin nominates another admin for removal. A second admin must ratify before any removal takes effect. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
}
function StokvelManageComponent_div_0_ng_container_49_div_11_span_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 103)(1, "mat-icon", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "notes");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const p_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", p_r11.reason, " ");
  }
}
function StokvelManageComponent_div_0_ng_container_49_div_11_ng_container_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "span", 104)(2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, "star");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4, " You proposed this ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "button", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function StokvelManageComponent_div_0_ng_container_49_div_11_ng_container_25_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r12);
      const p_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r1.cancelProposal(p_r11));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7, "undo");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8, " Withdraw ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
  }
}
function StokvelManageComponent_div_0_ng_container_49_div_11_ng_container_26_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 107)(2, "mat-form-field", 108)(3, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4, "Optional note (shown to removed admin)");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "textarea", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtwoWayListener"]("ngModelChange", function StokvelManageComponent_div_0_ng_container_49_div_11_ng_container_26_ng_container_5_Template_textarea_ngModelChange_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r13);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtwoWayBindingSet"](ctx_r1.proposalApproveNote, $event) || (ctx_r1.proposalApproveNote = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "div", 110)(7, "button", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function StokvelManageComponent_div_0_ng_container_49_div_11_ng_container_26_ng_container_5_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r13);
      const p_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r1.approveProposal(p_r11));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](9, "check_circle");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](10, " Confirm Removal ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "button", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function StokvelManageComponent_div_0_ng_container_49_div_11_ng_container_26_ng_container_5_Template_button_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r13);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](5);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r1.proposalApproveId = null);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](13, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](14, " Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.proposalApproveNote);
  }
}
function StokvelManageComponent_div_0_ng_container_49_div_11_ng_container_26_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function StokvelManageComponent_div_0_ng_container_49_div_11_ng_container_26_ng_template_6_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r14);
      const p_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r1.openApproveForm(p_r11));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "check_circle");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, " Approve & Remove ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function StokvelManageComponent_div_0_ng_container_49_div_11_ng_container_26_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 107)(2, "mat-form-field", 108)(3, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4, "Optional reason for rejection");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "textarea", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtwoWayListener"]("ngModelChange", function StokvelManageComponent_div_0_ng_container_49_div_11_ng_container_26_ng_container_8_Template_textarea_ngModelChange_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r15);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtwoWayBindingSet"](ctx_r1.proposalRejectNote, $event) || (ctx_r1.proposalRejectNote = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "div", 110)(7, "button", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function StokvelManageComponent_div_0_ng_container_49_div_11_ng_container_26_ng_container_8_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r15);
      const p_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r1.rejectProposal(p_r11));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](9, "cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](10, " Confirm Rejection ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "button", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function StokvelManageComponent_div_0_ng_container_49_div_11_ng_container_26_ng_container_8_Template_button_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r15);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](5);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r1.proposalRejectId = null);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](13, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](14, " Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.proposalRejectNote);
  }
}
function StokvelManageComponent_div_0_ng_container_49_div_11_ng_container_26_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function StokvelManageComponent_div_0_ng_container_49_div_11_ng_container_26_ng_template_9_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r16);
      const p_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r1.openRejectForm(p_r11));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, " Reject ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function StokvelManageComponent_div_0_ng_container_49_div_11_ng_container_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 105)(2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, "info_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4, " As a co-admin, you can ratify or reject this proposal. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](5, StokvelManageComponent_div_0_ng_container_49_div_11_ng_container_26_ng_container_5_Template, 15, 1, "ng-container", 106)(6, StokvelManageComponent_div_0_ng_container_49_div_11_ng_container_26_ng_template_6_Template, 4, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplateRefExtractor"])(8, StokvelManageComponent_div_0_ng_container_49_div_11_ng_container_26_ng_container_8_Template, 15, 1, "ng-container", 106)(9, StokvelManageComponent_div_0_ng_container_49_div_11_ng_container_26_ng_template_9_Template, 4, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const showApproveBtn_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](7);
    const showRejectBtn_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](10);
    const p_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r1.proposalApproveId === p_r11.id)("ngIfElse", showApproveBtn_r17);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r1.proposalRejectId === p_r11.id)("ngIfElse", showRejectBtn_r18);
  }
}
function StokvelManageComponent_div_0_ng_container_49_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 92)(1, "div", 93)(2, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "div", 95)(5, "span", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "span", 97)(8, "mat-icon", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](9, "person");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](10, " Proposed by ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "span", 97)(14, "mat-icon", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](15, "schedule");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](17, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](18, StokvelManageComponent_div_0_ng_container_49_div_11_span_18_Template, 4, 1, "span", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](19, "div", 100)(20, "span", 101)(21, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](22, "hourglass_top");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](23, " Awaiting Ratification ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](24, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](25, StokvelManageComponent_div_0_ng_container_49_div_11_ng_container_25_Template, 9, 0, "ng-container", 15)(26, StokvelManageComponent_div_0_ng_container_49_div_11_ng_container_26_Template, 11, 4, "ng-container", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const p_r11 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r1.getInitials(p_r11.targetName));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](p_r11.targetName);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](p_r11.proposedByName);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](17, 7, p_r11.createdAt, "mediumDate"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", p_r11.reason);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r1.isProposer(p_r11));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx_r1.isProposer(p_r11));
  }
}
function StokvelManageComponent_div_0_ng_container_49_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 88)(2, "h2", 89)(3, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4, "gavel");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5, " Admin Removal Proposals");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "p", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7, " Each proposal requires ratification by a ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](9, "different admin");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](10, " (not the proposer) before the removal is executed. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](11, StokvelManageComponent_div_0_ng_container_49_div_11_Template, 27, 10, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r1.pendingProposals);
  }
}
function StokvelManageComponent_div_0_ng_template_51_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "person_add");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "\u00A0Invite ");
  }
}
function StokvelManageComponent_div_0_mat_error_68_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Email is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function StokvelManageComponent_div_0_mat_error_69_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Enter a valid email");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function StokvelManageComponent_div_0_mat_spinner_81_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "mat-spinner", 111);
  }
}
function StokvelManageComponent_div_0_mat_icon_82_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "person_add");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function StokvelManageComponent_div_0_ng_template_85_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r1.outstandingCount);
  }
}
function StokvelManageComponent_div_0_ng_template_85_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "payments");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "\u00A0Request Payment ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](3, StokvelManageComponent_div_0_ng_template_85_span_3_Template, 2, 1, "span", 71);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r1.outstandingCount > 0);
  }
}
function StokvelManageComponent_div_0_span_99_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Checking contributions\u2026");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function StokvelManageComponent_div_0_span_100_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " \u2705 All members are up to date \u2014 no outstanding contributions ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function StokvelManageComponent_div_0_span_101_Template(rf, ctx) {
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
function StokvelManageComponent_div_0_div_102_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 116)(1, "div", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "div", 118)(4, "span", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "span", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](8, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "span", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](11, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const m_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r1.getInitials(m_r19.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](m_r19.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("Contributed: R", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](8, 4, m_r19.contributed), " \u00B7 Expected more");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("R", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](11, 6, m_r19.outstanding), " owed");
  }
}
function StokvelManageComponent_div_0_div_102_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, StokvelManageComponent_div_0_div_102_div_1_div_1_Template, 12, 8, "div", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const m_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", m_r19.hasOutstanding);
  }
}
function StokvelManageComponent_div_0_div_102_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, StokvelManageComponent_div_0_div_102_div_1_Template, 2, 1, "div", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind3"](2, 1, ctx_r1.outstandingMembers, 0, 20));
  }
}
function StokvelManageComponent_div_0_mat_error_112_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Amount is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function StokvelManageComponent_div_0_mat_error_113_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Must be greater than R0");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function StokvelManageComponent_div_0_mat_spinner_115_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "mat-spinner", 111);
  }
}
function StokvelManageComponent_div_0_mat_icon_116_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "send");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function StokvelManageComponent_div_0_div_118_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 122)(1, "mat-icon");
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
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 4)(1, "div", 5)(2, "button", 6);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "div", 7)(7, "div", 8)(8, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](9, "manage_accounts");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "div")(11, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](15, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](16, StokvelManageComponent_div_0_div_16_Template, 4, 2, "div", 9)(17, StokvelManageComponent_div_0_div_17_Template, 4, 2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](18, "mat-tab-group", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtwoWayListener"]("selectedIndexChange", function StokvelManageComponent_div_0_Template_mat_tab_group_selectedIndexChange_18_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtwoWayBindingSet"](ctx_r1.activeTab, $event) || (ctx_r1.activeTab = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](19, "mat-tab");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](20, StokvelManageComponent_div_0_ng_template_20_Template, 5, 1, "ng-template", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](21, "div", 13)(22, "div", 14)(23, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](24, "info_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](25, StokvelManageComponent_div_0_span_25_Template, 2, 0, "span", 15)(26, StokvelManageComponent_div_0_span_26_Template, 8, 0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](27, "div", 16)(28, "div", 17)(29, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](30, "Member");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](31, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](32, "Role");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](33, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](34, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](35, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](36, "Joined");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](37, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](38, StokvelManageComponent_div_0_div_38_Template, 23, 21, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](39, StokvelManageComponent_div_0_div_39_Template, 22, 6, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](40, "mat-tab");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](41, StokvelManageComponent_div_0_ng_template_41_Template, 4, 1, "ng-template", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](42, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](43, StokvelManageComponent_div_0_div_43_Template, 5, 0, "div", 20)(44, StokvelManageComponent_div_0_div_44_Template, 2, 1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](45, "mat-tab");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](46, StokvelManageComponent_div_0_ng_template_46_Template, 4, 1, "ng-template", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](47, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](48, StokvelManageComponent_div_0_div_48_Template, 7, 0, "div", 20)(49, StokvelManageComponent_div_0_ng_container_49_Template, 12, 1, "ng-container", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](50, "mat-tab");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](51, StokvelManageComponent_div_0_ng_template_51_Template, 3, 0, "ng-template", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](52, "div", 13)(53, "div", 22)(54, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](55, "Invite a Member by Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](56, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](57, " Enter the email address of the person you'd like to add. They'll receive an invitation and their membership will be set to ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](58, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](59, "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](60, " until they accept. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](61, "form", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngSubmit", function StokvelManageComponent_div_0_Template_form_ngSubmit_61_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r1.inviteMember());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](62, "mat-form-field", 25)(63, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](64, "Email address");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](65, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](66, "mat-icon", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](67, "email");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](68, StokvelManageComponent_div_0_mat_error_68_Template, 2, 0, "mat-error", 15)(69, StokvelManageComponent_div_0_mat_error_69_Template, 2, 0, "mat-error", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](70, "mat-form-field", 25)(71, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](72, "Role");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](73, "mat-select", 28)(74, "mat-option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](75, "Member");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](76, "mat-option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](77, "Admin");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](78, "mat-icon", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](79, "manage_accounts");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](80, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](81, StokvelManageComponent_div_0_mat_spinner_81_Template, 1, 0, "mat-spinner", 32)(82, StokvelManageComponent_div_0_mat_icon_82_Template, 2, 0, "mat-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](83);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](84, "mat-tab");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](85, StokvelManageComponent_div_0_ng_template_85_Template, 4, 1, "ng-template", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](86, "div", 13)(87, "div", 22)(88, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](89, "Send Payment Reminder");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](90, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](91, " Reminders are sent ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](92, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](93, "only to members with outstanding contributions");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](94, ". Members who are up to date will not be emailed. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](95, "div", 33)(96, "div", 34)(97, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](98, "warning_amber");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](99, StokvelManageComponent_div_0_span_99_Template, 2, 0, "span", 15)(100, StokvelManageComponent_div_0_span_100_Template, 2, 0, "span", 15)(101, StokvelManageComponent_div_0_span_101_Template, 4, 2, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](102, StokvelManageComponent_div_0_div_102_Template, 3, 5, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](103, "form", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngSubmit", function StokvelManageComponent_div_0_Template_form_ngSubmit_103_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r1.requestPayment());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](104, "mat-form-field", 25)(105, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](106, "Monthly Contribution Amount (ZAR)");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](107, "input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](108, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](109, "R\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](110, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](111, "Used to calculate each member's outstanding balance");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](112, StokvelManageComponent_div_0_mat_error_112_Template, 2, 0, "mat-error", 15)(113, StokvelManageComponent_div_0_mat_error_113_Template, 2, 0, "mat-error", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](114, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](115, StokvelManageComponent_div_0_mat_spinner_115_Template, 1, 0, "mat-spinner", 32)(116, StokvelManageComponent_div_0_mat_icon_116_Template, 2, 0, "mat-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](117);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](118, StokvelManageComponent_div_0_div_118_Template, 5, 0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    let tmp_16_0;
    let tmp_17_0;
    let tmp_27_0;
    let tmp_28_0;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("Manage: ", ctx_r1.stokvel.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate2"]("", ctx_r1.stokvel.totalMembers ?? ctx_r1.stokvel.memberCount + ctx_r1.stokvel.adminCount, " members \u00B7 ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](15, 33, ctx_r1.stokvel.privacy));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r1.pendingRequests.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r1.pendingProposals.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtwoWayProperty"]("selectedIndex", ctx_r1.activeTab);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r1.adminCount <= 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r1.adminCount > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r1.allMembers);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r1.showProposalForm && ctx_r1.proposalTargetMember);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r1.pendingRequests.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r1.pendingRequests.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r1.pendingProposals.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r1.pendingProposals.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("formGroup", ctx_r1.inviteForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", (tmp_16_0 = ctx_r1.inviteForm.get("email")) == null ? null : tmp_16_0.hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", (tmp_17_0 = ctx_r1.inviteForm.get("email")) == null ? null : tmp_17_0.hasError("email"));
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
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", (tmp_27_0 = ctx_r1.paymentForm.get("amount")) == null ? null : tmp_27_0.hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", (tmp_28_0 = ctx_r1.paymentForm.get("amount")) == null ? null : tmp_28_0.hasError("min"));
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
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "mat-spinner", 124);
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
    this.pendingProposals = []; // admin removal proposals
    this.currentUserAuth0Id = '';
    this.isLoading = true;
    this.activeTab = 0;
    this.inviteLoading = false;
    this.paymentLoading = false;
    // Outstanding members preview
    this.outstandingMembers = [];
    this.outstandingLoading = false;
    // Remove confirmation
    this.removingMemberId = null;
    // Proposal state
    this.proposalTargetMember = null;
    this.proposalReason = '';
    this.proposalLoading = false;
    this.showProposalForm = false;
    // Ratify proposal (another admin approves the removal)
    this.proposalApproveId = null;
    this.proposalApproveNote = '';
    this.proposalRejectId = null;
    this.proposalRejectNote = '';
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
    // Get current user ID for proposal logic
    this.userService.user$.subscribe(u => {
      if (u?.id) this.currentUserAuth0Id = u.id;
    });
    this.route.paramMap.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMap)(params => {
      const id = Number(params.get('id'));
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.forkJoin)({
        stokvel: this.stokvelService.getStokvelById(id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(null))),
        pending: this.stokvelService.getPendingJoinRequests(id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)([]))),
        proposals: this.stokvelService.getPendingRemovalProposals(id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)([])))
      });
    })).subscribe(({
      stokvel,
      pending,
      proposals
    }) => {
      this.stokvel = stokvel;
      this.pendingRequests = pending;
      this.pendingProposals = proposals;
      if (!stokvel || !stokvel.isOwner && stokvel.currentUserRole !== 'ADMIN') {
        this.snack.open('Access denied – admins only', 'Close', {
          duration: 4000
        });
        const redirectId = stokvel?.id ?? this.route.snapshot.paramMap.get('id');
        this.router.navigate(redirectId ? ['/stokvels', redirectId] : ['/stokvels']);
        return;
      }
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
  get adminCount() {
    return this.stokvel?.adminMembers?.length ?? 0;
  }
  /** True if this member is the ONLY admin */
  isLastAdmin(member) {
    return member.role === 'ADMIN' && this.adminCount <= 1;
  }
  /** True if removing this admin requires a proposal (multiple admins) */
  requiresProposal(member) {
    return member.role === 'ADMIN' && this.adminCount > 1;
  }
  /** True if current user already has a pending proposal targeting this member */
  hasPendingProposalFor(member) {
    return this.pendingProposals.some(p => p.targetMemberId === member.id);
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
  // ── Invite member ────────────────────────────────────────────────────────
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
  // ── Remove REGULAR member (immediate) ────────────────────────────────────
  removeMember(member) {
    if (!member.id || !this.stokvel) return;
    if (this.isLastAdmin(member)) {
      this.snack.open('❌ Cannot remove the only admin. Assign another admin first.', 'Close', {
        duration: 5000
      });
      return;
    }
    if (this.requiresProposal(member)) {
      this.snack.open('Admin removal requires ratification — use "Propose Removal" below.', 'Close', {
        duration: 5000
      });
      return;
    }
    const name = member.displayName || member.userName;
    const confirmed = window.confirm(`Remove ${name} from "${this.stokvel.name}"?\nThis action cannot be undone.`);
    if (!confirmed) return;
    this.removingMemberId = member.id;
    this.stokvelService.removeMember(this.stokvel.id, member.id).subscribe({
      next: () => {
        this.removingMemberId = null;
        this.snack.open(`${name} removed`, 'Close', {
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
  // ── Propose removal of an ADMIN (requires ratification) ──────────────────
  openProposalForm(member) {
    this.proposalTargetMember = member;
    this.proposalReason = '';
    this.showProposalForm = true;
  }
  cancelProposalForm() {
    this.showProposalForm = false;
    this.proposalTargetMember = null;
  }
  submitProposal() {
    if (!this.proposalTargetMember?.id || !this.stokvel) return;
    this.proposalLoading = true;
    this.stokvelService.proposeAdminRemoval(this.stokvel.id, this.proposalTargetMember.id, this.proposalReason).subscribe({
      next: p => {
        this.proposalLoading = false;
        this.showProposalForm = false;
        this.pendingProposals = [...this.pendingProposals, p];
        this.snack.open(`✅ Removal proposal submitted. Other admins have been notified to ratify.`, 'Close', {
          duration: 6000
        });
        this.proposalTargetMember = null;
      },
      error: err => {
        this.proposalLoading = false;
        this.snack.open(err?.error?.error || 'Failed to submit proposal', 'Close', {
          duration: 5000,
          panelClass: 'error-snackbar'
        });
      }
    });
  }
  openApproveForm(proposal) {
    this.proposalApproveId = proposal.id;
    this.proposalApproveNote = '';
    this.proposalRejectId = null;
  }
  openRejectForm(proposal) {
    this.proposalRejectId = proposal.id;
    this.proposalRejectNote = '';
    this.proposalApproveId = null;
  }
  approveProposal(proposal) {
    if (!this.stokvel) return;
    this.stokvelService.approveRemovalProposal(this.stokvel.id, proposal.id, this.proposalApproveNote).subscribe({
      next: () => {
        this.pendingProposals = this.pendingProposals.filter(p => p.id !== proposal.id);
        this.proposalApproveId = null;
        this.snack.open(`✅ Admin removal approved and executed.`, 'Close', {
          duration: 4000
        });
        this.stokvelService.getStokvelById(this.stokvel.id).subscribe(s => this.stokvel = s);
      },
      error: err => this.snack.open(err?.error?.error || 'Could not approve proposal', 'Close', {
        duration: 5000,
        panelClass: 'error-snackbar'
      })
    });
  }
  rejectProposal(proposal) {
    if (!this.stokvel) return;
    this.stokvelService.rejectRemovalProposal(this.stokvel.id, proposal.id, this.proposalRejectNote).subscribe({
      next: () => {
        this.pendingProposals = this.pendingProposals.filter(p => p.id !== proposal.id);
        this.proposalRejectId = null;
        this.snack.open('Removal proposal rejected.', 'Close', {
          duration: 3000
        });
      },
      error: err => this.snack.open(err?.error?.error || 'Could not reject proposal', 'Close', {
        duration: 5000,
        panelClass: 'error-snackbar'
      })
    });
  }
  cancelProposal(proposal) {
    if (!this.stokvel) return;
    this.stokvelService.cancelRemovalProposal(this.stokvel.id, proposal.id).subscribe({
      next: () => {
        this.pendingProposals = this.pendingProposals.filter(p => p.id !== proposal.id);
        this.snack.open('Proposal cancelled.', 'Close', {
          duration: 3000
        });
      },
      error: err => this.snack.open(err?.error?.error || 'Could not cancel', 'Close', {
        duration: 4000
      })
    });
  }
  /** Whether the current user is the proposer */
  isProposer(proposal) {
    return proposal.proposedByAuth0Id === this.currentUserAuth0Id;
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
    consts: [["loadingTpl", ""], ["showApproveBtn", ""], ["showRejectBtn", ""], ["class", "manage-page", 4, "ngIf", "ngIfElse"], [1, "manage-page"], [1, "manage-header"], [1, "back-btn", 3, "click"], [1, "header-title"], [1, "header-icon"], ["class", "pending-badge", 3, "click", 4, "ngIf"], ["class", "pending-badge proposal-badge", 3, "click", 4, "ngIf"], ["animationDuration", "200ms", 1, "manage-tabs", 3, "selectedIndexChange", "selectedIndex"], ["mat-tab-label", ""], [1, "tab-body"], [1, "section-note"], [4, "ngIf"], [1, "member-table"], [1, "mt-row", "mt-head"], ["class", "mt-row", 4, "ngFor", "ngForOf"], ["class", "proposal-form-card", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], ["class", "request-list", 4, "ngIf"], [1, "form-card"], [1, "form-note"], [1, "invite-form", 3, "ngSubmit", "formGroup"], ["appearance", "outline", 1, "full-width"], ["matInput", "", "formControlName", "email", "type", "email", "placeholder", "e.g. jane@example.com"], ["matPrefix", ""], ["formControlName", "role"], ["value", "MEMBER"], ["value", "ADMIN"], ["type", "submit", 1, "btn-primary", 3, "disabled"], ["diameter", "18", 4, "ngIf"], [1, "outstanding-preview"], [1, "op-header"], ["class", "op-list", 4, "ngIf"], ["matInput", "", "type", "number", "formControlName", "amount", "min", "1"], ["matTextPrefix", ""], ["type", "submit", 1, "btn-primary", "btn-payment", 3, "disabled"], ["class", "payment-info", 4, "ngIf"], [1, "pending-badge", 3, "click"], [1, "pending-badge", "proposal-badge", 3, "click"], [1, "tab-count"], [1, "mt-row"], [1, "mt-cell", "member-cell"], [1, "avatar"], [1, "member-info"], [1, "m-name"], [1, "m-email"], [1, "mt-cell"], [1, "role-tag"], [1, "status-tag", 3, "ngClass"], [1, "mt-cell", "muted"], [1, "mt-cell", "action-cell"], ["class", "btn-remove", "disabled", "", "matTooltip", "Cannot remove the only admin", 4, "ngIf"], ["class", "btn-remove", "matTooltip", "Remove member", 3, "disabled", "click", 4, "ngIf"], ["disabled", "", "matTooltip", "Cannot remove the only admin", 1, "btn-remove"], ["class", "proposal-pending-label", "matTooltip", "Removal proposal is pending ratification", 4, "ngIf"], ["class", "btn-propose", "matTooltip", "Propose removal (requires another admin to ratify)", 3, "click", 4, "ngIf"], ["matTooltip", "Removal proposal is pending ratification", 1, "proposal-pending-label"], ["matTooltip", "Propose removal (requires another admin to ratify)", 1, "btn-propose", 3, "click"], ["matTooltip", "Remove member", 1, "btn-remove", 3, "click", "disabled"], [1, "proposal-form-card"], [1, "proposal-form-header"], [1, "proposal-form-note"], ["matInput", "", "rows", "3", "placeholder", "e.g. Inactive for 3 months, repeated non-compliance\u2026", 3, "ngModelChange", "ngModel"], [1, "proposal-form-actions"], [1, "btn-cancel-sm", 3, "click"], [1, "btn-danger", 3, "click", "disabled"], ["diameter", "16", 4, "ngIf"], ["diameter", "16"], ["class", "tab-count pending", 4, "ngIf"], [1, "tab-count", "pending"], [1, "empty-state"], [1, "request-list"], ["class", "request-card", 4, "ngFor", "ngForOf"], [1, "request-card"], [1, "req-avatar"], [1, "req-info"], [1, "req-name"], [1, "req-email"], ["class", "req-msg", 4, "ngIf"], [1, "req-meta"], [1, "req-actions"], [1, "btn-approve", 3, "click"], [1, "btn-reject", 3, "click"], [1, "req-msg"], [1, "empty-hint"], [1, "proposals-header"], [1, "proposals-title"], [1, "proposals-note"], ["class", "proposal-card", 4, "ngFor", "ngForOf"], [1, "proposal-card"], [1, "proposal-info"], [1, "proposal-avatar"], [1, "proposal-details"], [1, "proposal-target"], [1, "proposal-sub"], [1, "sub-icon"], ["class", "proposal-reason", 4, "ngIf"], [1, "proposal-status"], [1, "status-chip", "pending-chip"], [1, "proposal-actions"], [1, "proposal-reason"], [1, "proposal-yours"], [1, "ratify-prompt"], [4, "ngIf", "ngIfElse"], [1, "inline-note-form"], ["appearance", "outline", 1, "note-field"], ["matInput", "", "rows", "2", 3, "ngModelChange", "ngModel"], [1, "inline-note-actions"], ["diameter", "18"], [1, "op-list"], ["class", "op-row", 4, "ngFor", "ngForOf"], [1, "op-row"], ["class", "op-member", 4, "ngIf"], [1, "op-member"], [1, "avatar-sm"], [1, "op-info"], [1, "op-name"], [1, "op-sub"], [1, "op-amount"], [1, "payment-info"], [1, "manage-loading"], ["diameter", "48"]],
    template: function StokvelManageComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](0, StokvelManageComponent_div_0_Template, 119, 35, "div", 3)(1, StokvelManageComponent_ng_template_1_Template, 4, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplateRefExtractor"]);
      }
      if (rf & 2) {
        const loadingTpl_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx.isLoading && ctx.stokvel)("ngIfElse", loadingTpl_r20);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _material_module__WEBPACK_IMPORTED_MODULE_7__.MaterialModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__.MatHint, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__.MatError, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__.MatPrefix, _angular_material_input__WEBPACK_IMPORTED_MODULE_17__.MatInput, _angular_material_select__WEBPACK_IMPORTED_MODULE_19__.MatSelect, _angular_material_select__WEBPACK_IMPORTED_MODULE_18__.MatOption, _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__.MatIcon, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_21__.MatTooltip, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_22__.MatProgressSpinner, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_23__.MatTabLabel, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_23__.MatTab, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_23__.MatTabGroup, _angular_common__WEBPACK_IMPORTED_MODULE_0__.SlicePipe, _angular_common__WEBPACK_IMPORTED_MODULE_0__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_0__.TitleCasePipe, _angular_common__WEBPACK_IMPORTED_MODULE_0__.DatePipe],
    styles: [".manage-page[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  background: #f8fafc;\n  font-family: \"Inter\", sans-serif;\n  padding: 0 0 56px;\n}\n\n.manage-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n  flex-wrap: wrap;\n  background: linear-gradient(135deg, #0d47a1, #1565c0);\n  padding: 28px 32px;\n  color: #fff;\n}\n\n.back-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  background: rgba(255, 255, 255, 0.18);\n  border: 1px solid rgba(255, 255, 255, 0.3);\n  border-radius: 999px;\n  color: #fff;\n  padding: 7px 16px;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: inherit;\n  transition: background 0.2s;\n  flex-shrink: 0;\n}\n.back-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.28);\n}\n.back-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 17px;\n  width: 17px;\n  height: 17px;\n}\n\n.header-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  flex: 1;\n}\n.header-title[_ngcontent-%COMP%]   .header-icon[_ngcontent-%COMP%] {\n  width: 52px;\n  height: 52px;\n  border-radius: 14px;\n  background: rgba(255, 255, 255, 0.2);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.header-title[_ngcontent-%COMP%]   .header-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 28px;\n  width: 28px;\n  height: 28px;\n}\n.header-title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 22px;\n  font-weight: 800;\n}\n.header-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 4px 0 0;\n  font-size: 13px;\n  opacity: 0.8;\n}\n\n.pending-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  background: rgba(245, 158, 11, 0.9);\n  color: #fff;\n  padding: 8px 18px;\n  border-radius: 999px;\n  font-size: 13px;\n  font-weight: 700;\n  cursor: pointer;\n  transition: background 0.2s;\n}\n.pending-badge[_ngcontent-%COMP%]:hover {\n  background: #d97706;\n}\n.pending-badge[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  animation: _ngcontent-%COMP%_ring 0.8s ease-in-out infinite alternate;\n}\n\n@keyframes _ngcontent-%COMP%_ring {\n  from {\n    transform: rotate(-10deg);\n  }\n  to {\n    transform: rotate(10deg);\n  }\n}\n.manage-tabs[_ngcontent-%COMP%] {\n  margin: 0 32px;\n}\n.manage-tabs[_ngcontent-%COMP%]     .mat-mdc-tab-header {\n  background: #fff;\n  border-radius: 16px 16px 0 0;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);\n}\n.manage-tabs[_ngcontent-%COMP%]     .mat-mdc-tab-label-container {\n  padding: 0 8px;\n}\n.manage-tabs[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  vertical-align: middle;\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n\n.tab-count[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 20px;\n  height: 20px;\n  border-radius: 999px;\n  background: rgba(21, 101, 192, 0.12);\n  color: #1565c0;\n  font-size: 11px;\n  font-weight: 700;\n  padding: 0 6px;\n  margin-left: 6px;\n}\n.tab-count.pending[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #b45309;\n}\n\n.tab-body[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 0 0 16px 16px;\n  padding: 28px 28px 32px;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);\n  min-height: 300px;\n}\n\n.section-note[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: #eff6ff;\n  border: 1px solid #bfdbfe;\n  border-radius: 10px;\n  padding: 10px 14px;\n  font-size: 13px;\n  color: #1d4ed8;\n  margin-bottom: 20px;\n}\n.section-note[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n  flex-shrink: 0;\n}\n\n.member-table[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n\n.mt-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 2fr 100px 110px 110px 52px;\n  gap: 12px;\n  align-items: center;\n  padding: 12px 8px;\n  border-bottom: 1px solid #f3f4f6;\n}\n.mt-row.mt-head[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.6px;\n  color: #9ca3af;\n  border-bottom: 2px solid #e5e7eb;\n}\n.mt-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n\n.member-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n\n.avatar[_ngcontent-%COMP%] {\n  width: 38px;\n  height: 38px;\n  border-radius: 10px;\n  flex-shrink: 0;\n  background: linear-gradient(135deg, #e5e7eb, #d1d5db);\n  color: #374151;\n  font-size: 13px;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.avatar.admin-av[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, rgba(21, 101, 192, 0.15), rgba(5, 150, 105, 0.2));\n  color: #1565c0;\n}\n\n.member-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.member-info[_ngcontent-%COMP%]   .m-name[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: #111827;\n}\n.member-info[_ngcontent-%COMP%]   .m-email[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #9ca3af;\n}\n\n.muted[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #9ca3af;\n}\n\n.role-tag[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  padding: 3px 10px;\n  border-radius: 999px;\n  background: #f3f4f6;\n  color: #6b7280;\n}\n.role-tag.admin-tag[_ngcontent-%COMP%] {\n  background: rgba(21, 101, 192, 0.1);\n  color: #1565c0;\n}\n\n.status-tag[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  padding: 3px 10px;\n  border-radius: 999px;\n}\n.status-tag.st-active[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #166534;\n}\n.status-tag.st-pending[_ngcontent-%COMP%] {\n  background: #fef9c3;\n  color: #854d0e;\n}\n.status-tag.st-inactive[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #991b1b;\n}\n\n.action-cell[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n}\n\n.btn-remove[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 34px;\n  height: 34px;\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n  background: #fef2f2;\n  color: #b91c1c;\n  transition: background 0.2s;\n}\n.btn-remove[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.btn-remove[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #fee2e2;\n}\n.btn-remove[_ngcontent-%COMP%]:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n\n.request-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n\n.request-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 16px;\n  background: #f9fafb;\n  border: 1px solid #e5e7eb;\n  border-radius: 16px;\n  padding: 16px;\n  flex-wrap: wrap;\n}\n\n.req-avatar[_ngcontent-%COMP%] {\n  width: 46px;\n  height: 46px;\n  border-radius: 12px;\n  flex-shrink: 0;\n  background: linear-gradient(135deg, #0d47a1, #1565c0);\n  color: #fff;\n  font-size: 15px;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.req-info[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n  min-width: 180px;\n}\n.req-info[_ngcontent-%COMP%]   .req-name[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 700;\n  color: #111827;\n}\n.req-info[_ngcontent-%COMP%]   .req-email[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #6b7280;\n}\n.req-info[_ngcontent-%COMP%]   .req-msg[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #374151;\n  font-style: italic;\n  margin-top: 4px;\n}\n.req-info[_ngcontent-%COMP%]   .req-meta[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #9ca3af;\n  margin-top: 4px;\n}\n\n.req-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  flex-shrink: 0;\n  align-self: center;\n}\n\n.btn-approve[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 18px;\n  border: none;\n  border-radius: 10px;\n  cursor: pointer;\n  font-family: inherit;\n  background: linear-gradient(135deg, #065f46, #059669);\n  color: #fff;\n  font-size: 13px;\n  font-weight: 700;\n  transition: all 0.2s;\n}\n.btn-approve[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n}\n.btn-approve[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 12px rgba(5, 150, 105, 0.35);\n  transform: translateY(-1px);\n}\n\n.btn-reject[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 18px;\n  border-radius: 10px;\n  cursor: pointer;\n  font-family: inherit;\n  background: #fef2f2;\n  border: 1.5px solid #fecaca;\n  color: #b91c1c;\n  font-size: 13px;\n  font-weight: 700;\n  transition: all 0.2s;\n}\n.btn-reject[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n}\n.btn-reject[_ngcontent-%COMP%]:hover {\n  background: #fee2e2;\n}\n\n.outstanding-preview[_ngcontent-%COMP%] {\n  background: #fffbeb;\n  border: 1px solid #fde68a;\n  border-radius: 12px;\n  padding: 14px 16px;\n  margin-bottom: 20px;\n}\n\n.op-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 14px;\n  font-weight: 600;\n  color: #92400e;\n  margin-bottom: 4px;\n}\n.op-header[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  color: #d97706;\n  flex-shrink: 0;\n}\n.op-header[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #b45309;\n}\n\n.op-list[_ngcontent-%COMP%] {\n  margin-top: 12px;\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  max-height: 220px;\n  overflow-y: auto;\n}\n\n.op-row[_ngcontent-%COMP%] {\n  display: contents;\n}\n\n.op-member[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  background: #fff;\n  border: 1px solid #fde68a;\n  border-radius: 8px;\n  padding: 8px 12px;\n}\n\n.avatar-sm[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 8px;\n  flex-shrink: 0;\n  background: linear-gradient(135deg, #fde68a, #f59e0b);\n  color: #92400e;\n  font-size: 11px;\n  font-weight: 800;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.op-info[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n}\n.op-info[_ngcontent-%COMP%]   .op-name[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: #111827;\n}\n.op-info[_ngcontent-%COMP%]   .op-sub[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #9ca3af;\n}\n\n.op-amount[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 700;\n  color: #b91c1c;\n  background: #fee2e2;\n  padding: 3px 8px;\n  border-radius: 6px;\n  flex-shrink: 0;\n}\n\n.form-card[_ngcontent-%COMP%] {\n  max-width: 520px;\n}\n.form-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n  color: #111827;\n  margin: 0 0 8px;\n}\n\n.form-note[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #6b7280;\n  line-height: 1.6;\n  margin-bottom: 24px;\n}\n.form-note[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], .form-note[_ngcontent-%COMP%]   em[_ngcontent-%COMP%] {\n  color: #374151;\n}\n\n.invite-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n\n.full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.btn-primary[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 28px;\n  border: none;\n  border-radius: 12px;\n  cursor: pointer;\n  font-family: inherit;\n  background: linear-gradient(135deg, #0d47a1, #1565c0);\n  color: #fff;\n  font-size: 14px;\n  font-weight: 700;\n  box-shadow: 0 4px 14px rgba(13, 71, 161, 0.3);\n  transition: all 0.2s;\n}\n.btn-primary[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  box-shadow: 0 6px 20px rgba(13, 71, 161, 0.42);\n  transform: translateY(-1px);\n}\n.btn-primary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.55;\n  cursor: not-allowed;\n  transform: none;\n  box-shadow: none;\n}\n.btn-primary.btn-payment[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #065f46, #059669);\n  box-shadow: 0 4px 14px rgba(5, 150, 105, 0.3);\n}\n\n.payment-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 8px;\n  background: #f0fdf4;\n  border: 1px solid #bbf7d0;\n  border-radius: 10px;\n  padding: 12px 14px;\n  font-size: 13px;\n  color: #166534;\n  margin-top: 16px;\n}\n.payment-info[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n  flex-shrink: 0;\n  margin-top: 1px;\n}\n\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 48px 16px;\n}\n.empty-state[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 48px;\n  width: 48px;\n  height: 48px;\n  color: #d1d5db;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: #9ca3af;\n  margin: 12px 0 0;\n}\n\n.manage-loading[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: 60vh;\n  gap: 20px;\n}\n.manage-loading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #9ca3af;\n  font-size: 15px;\n}\n\n.proposal-badge[_ngcontent-%COMP%] {\n  background: rgba(220, 38, 38, 0.85);\n}\n.proposal-badge[_ngcontent-%COMP%]:hover {\n  background: rgba(185, 28, 28, 0.95);\n}\n\n.btn-propose[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  background: #fff3cd;\n  border: 1.5px solid #f59e0b;\n  border-radius: 8px;\n  color: #92400e;\n  padding: 5px 12px;\n  font-size: 12px;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: inherit;\n  transition: background 0.2s;\n}\n.btn-propose[_ngcontent-%COMP%]:hover {\n  background: #fde68a;\n}\n.btn-propose[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 15px;\n  width: 15px;\n  height: 15px;\n}\n\n.proposal-pending-label[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  color: #d97706;\n  font-size: 12px;\n  font-weight: 600;\n}\n.proposal-pending-label[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 15px;\n  width: 15px;\n  height: 15px;\n}\n\n.proposal-form-card[_ngcontent-%COMP%] {\n  margin-top: 24px;\n  background: #fffbeb;\n  border: 1.5px solid #f59e0b;\n  border-radius: 14px;\n  padding: 24px;\n}\n\n.proposal-form-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 12px;\n}\n.proposal-form-header[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #b45309;\n  font-size: 22px;\n  width: 22px;\n  height: 22px;\n}\n.proposal-form-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 16px;\n  color: #78350f;\n}\n\n.proposal-form-note[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #92400e;\n  margin: 0 0 16px;\n  background: rgba(245, 158, 11, 0.12);\n  border-radius: 8px;\n  padding: 10px 14px;\n}\n\n.proposal-form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  justify-content: flex-end;\n  margin-top: 12px;\n}\n\n.proposals-section[_ngcontent-%COMP%] {\n  margin-top: 32px;\n  border-top: 2px dashed #fca5a5;\n  padding-top: 24px;\n}\n\n.proposals-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 16px;\n  color: #b91c1c;\n  margin: 0 0 8px;\n}\n.proposals-title[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n}\n\n.proposals-note[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #6b7280;\n  margin: 0 0 16px;\n}\n\n.proposal-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 12px;\n  background: #fff;\n  border: 1.5px solid #fca5a5;\n  border-radius: 12px;\n  padding: 16px;\n  margin-bottom: 12px;\n}\n\n.proposal-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n\n.proposal-avatar[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background: #fee2e2;\n  color: #b91c1c;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 14px;\n  font-weight: 700;\n  flex-shrink: 0;\n}\n\n.proposal-target[_ngcontent-%COMP%] {\n  display: block;\n  font-weight: 600;\n  font-size: 15px;\n  color: #111827;\n}\n\n.proposal-sub[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 12px;\n  color: #9ca3af;\n}\n\n.proposal-reason[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 12px;\n  color: #6b7280;\n  font-style: italic;\n  margin-top: 2px;\n}\n\n.proposal-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n\n.proposal-yours[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #6b7280;\n  font-style: italic;\n}\n\n.proposals-header[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.proposals-header[_ngcontent-%COMP%]   h2.proposals-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 18px;\n  color: #b91c1c;\n  margin: 0 0 6px;\n}\n.proposals-header[_ngcontent-%COMP%]   h2.proposals-title[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 22px;\n  width: 22px;\n  height: 22px;\n}\n\n.proposal-details[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n}\n\n.proposal-status[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.status-chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 5px 12px;\n  border-radius: 999px;\n  font-size: 12px;\n  font-weight: 600;\n}\n.status-chip[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 15px;\n  width: 15px;\n  height: 15px;\n}\n\n.pending-chip[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #92400e;\n}\n\n.sub-icon[_ngcontent-%COMP%] {\n  font-size: 13px !important;\n  width: 13px !important;\n  height: 13px !important;\n  vertical-align: middle;\n  margin-right: 3px;\n}\n\n.ratify-prompt[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  width: 100%;\n  font-size: 12px;\n  color: #1d4ed8;\n  background: #eff6ff;\n  border-radius: 8px;\n  padding: 8px 12px;\n}\n.ratify-prompt[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n}\n\n.empty-hint[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 13px;\n  color: #9ca3af;\n  margin-top: 8px;\n  max-width: 420px;\n}\n\n.btn-cancel-sm[_ngcontent-%COMP%] {\n  padding: 6px 14px;\n  background: #f3f4f6;\n  border: 1px solid #d1d5db;\n  border-radius: 8px;\n  font-size: 13px;\n  font-weight: 500;\n  color: #374151;\n  cursor: pointer;\n  font-family: inherit;\n}\n.btn-cancel-sm[_ngcontent-%COMP%]:hover {\n  background: #e5e7eb;\n}\n\n.btn-danger[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 18px;\n  background: #dc2626;\n  color: #fff;\n  border: none;\n  border-radius: 8px;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: inherit;\n}\n.btn-danger[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #b91c1c;\n}\n.btn-danger[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-danger[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n}\n\n.inline-note-form[_ngcontent-%COMP%] {\n  margin-top: 12px;\n  padding: 14px;\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.inline-note-form[_ngcontent-%COMP%]   .note-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.inline-note-form[_ngcontent-%COMP%]   .inline-note-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n\n@media (max-width: 768px) {\n  .manage-header[_ngcontent-%COMP%] {\n    padding: 20px 16px;\n  }\n  .manage-tabs[_ngcontent-%COMP%] {\n    margin: 0 16px;\n  }\n  .tab-body[_ngcontent-%COMP%] {\n    padding: 20px 16px;\n  }\n  .mt-row[_ngcontent-%COMP%] {\n    grid-template-columns: 2fr 80px 36px;\n  }\n  .mt-row[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:nth-child(3), .mt-row[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:nth-child(4) {\n    display: none;\n  }\n  .req-actions[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9zdG9rdmVsLW1hbmFnZS9zdG9rdmVsLW1hbmFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQ0FBQTtFQUNBLGlCQUFBO0FBSkY7O0FBUUE7RUFDRSxhQUFBO0VBQWUsbUJBQUE7RUFBcUIsU0FBQTtFQUFXLGVBQUE7RUFDL0MscURBQUE7RUFDQSxrQkFBQTtFQUFvQixXQUFBO0FBRHRCOztBQUlBO0VBQ0Usb0JBQUE7RUFBc0IsbUJBQUE7RUFBcUIsUUFBQTtFQUMzQyxxQ0FBQTtFQUFtQywwQ0FBQTtFQUNuQyxvQkFBQTtFQUFzQixXQUFBO0VBQWEsaUJBQUE7RUFDbkMsZUFBQTtFQUFpQixnQkFBQTtFQUFrQixlQUFBO0VBQWlCLG9CQUFBO0VBQ3BELDJCQUFBO0VBQTRCLGNBQUE7QUFROUI7QUFQRTtFQUFVLHFDQUFBO0FBVVo7QUFURTtFQUFXLGVBQUE7RUFBaUIsV0FBQTtFQUFhLFlBQUE7QUFjM0M7O0FBWEE7RUFDRSxhQUFBO0VBQWUsbUJBQUE7RUFBcUIsU0FBQTtFQUFXLE9BQUE7QUFpQmpEO0FBaEJFO0VBQ0UsV0FBQTtFQUFhLFlBQUE7RUFBYyxtQkFBQTtFQUMzQixvQ0FBQTtFQUFrQyxhQUFBO0VBQWUsbUJBQUE7RUFBcUIsdUJBQUE7QUF1QjFFO0FBdEJJO0VBQVcsZUFBQTtFQUFpQixXQUFBO0VBQWEsWUFBQTtBQTJCN0M7QUF6QkU7RUFBSyxTQUFBO0VBQVcsZUFBQTtFQUFpQixnQkFBQTtBQThCbkM7QUE3QkU7RUFBSyxlQUFBO0VBQWlCLGVBQUE7RUFBaUIsWUFBQTtBQWtDekM7O0FBL0JBO0VBQ0Usb0JBQUE7RUFBc0IsbUJBQUE7RUFBcUIsUUFBQTtFQUMzQyxtQ0FBQTtFQUFpQyxXQUFBO0VBQ2pDLGlCQUFBO0VBQW1CLG9CQUFBO0VBQXNCLGVBQUE7RUFBaUIsZ0JBQUE7RUFDMUQs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bUJBQUE7QUErZlo7O0FBN2ZBO0VBQ0Usb0JBQUE7RUFBc0IsbUJBQUE7RUFBcUIsUUFBQTtFQUMzQyxpQkFBQTtFQUFtQixtQkFBQTtFQUFxQixXQUFBO0VBQ3hDLFlBQUE7RUFBYyxrQkFBQTtFQUFvQixlQUFBO0VBQWlCLGdCQUFBO0VBQ25ELGVBQUE7RUFBaUIsb0JBQUE7QUF3Z0JuQjtBQXZnQkU7RUFBeUIsbUJBQUE7QUEwZ0IzQjtBQXpnQkU7RUFBYSxZQUFBO0VBQWEsbUJBQUE7QUE2Z0I1QjtBQTVnQkU7RUFBVyxlQUFBO0VBQWlCLFdBQUE7RUFBYSxZQUFBO0FBaWhCM0M7O0FBN2dCQTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7QUFnaEJGO0FBOWdCRTtFQUNFLFdBQUE7QUFnaEJKO0FBN2dCRTtFQUNFLGFBQUE7RUFDQSxRQUFBO0VBQ0EsZUFBQTtBQStnQko7O0FBMWdCQTtFQUNFO0lBQWlCLGtCQUFBO0VBOGdCakI7RUE3Z0JBO0lBQWUsY0FBQTtFQWdoQmY7RUEvZ0JBO0lBQVksa0JBQUE7RUFraEJaO0VBamhCQTtJQUFVLG9DQUFBO0VBb2hCVjtFQW5oQkE7SUFBbUQsYUFBQTtFQXNoQm5EO0VBcmhCQTtJQUFlLFdBQUE7RUF3aEJmO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIkYnJhbmQ6ICMxNTY1YzA7XHJcbiRuYXZ5OiAjMGQ0N2ExO1xyXG4kdGVhbDogIzA1OTY2OTtcclxuJHJhZGl1czogMTZweDtcclxuXHJcbi5tYW5hZ2UtcGFnZSB7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgYmFja2dyb3VuZDogI2Y4ZmFmYztcclxuICBmb250LWZhbWlseTogJ0ludGVyJywgc2Fucy1zZXJpZjtcclxuICBwYWRkaW5nOiAwIDAgNTZweDtcclxufVxyXG5cclxuLy8gw6LClMKAw6LClMKAIEhlYWRlciDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcclxuLm1hbmFnZS1oZWFkZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGdhcDogMjBweDsgZmxleC13cmFwOiB3cmFwO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMwZDQ3YTEsICMxNTY1YzApO1xyXG4gIHBhZGRpbmc6IDI4cHggMzJweDsgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5iYWNrLWJ0biB7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGdhcDogNnB4O1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsLjE4KTsgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwuMyk7XHJcbiAgYm9yZGVyLXJhZGl1czogOTk5cHg7IGNvbG9yOiAjZmZmOyBwYWRkaW5nOiA3cHggMTZweDtcclxuICBmb250LXNpemU6IDEzcHg7IGZvbnQtd2VpZ2h0OiA2MDA7IGN1cnNvcjogcG9pbnRlcjsgZm9udC1mYW1pbHk6IGluaGVyaXQ7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAuMnM7IGZsZXgtc2hyaW5rOiAwO1xyXG4gICY6aG92ZXIgeyBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LC4yOCk7IH1cclxuICBtYXQtaWNvbiB7IGZvbnQtc2l6ZTogMTdweDsgd2lkdGg6IDE3cHg7IGhlaWdodDogMTdweDsgfVxyXG59XHJcblxyXG4uaGVhZGVyLXRpdGxlIHtcclxuICBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDE2cHg7IGZsZXg6IDE7XHJcbiAgLmhlYWRlci1pY29uIHtcclxuICAgIHdpZHRoOiA1MnB4OyBoZWlnaHQ6IDUycHg7IGJvcmRlci1yYWRpdXM6IDE0cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LC4yKTsgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtYXQtaWNvbiB7IGZvbnQtc2l6ZTogMjhweDsgd2lkdGg6IDI4cHg7IGhlaWdodDogMjhweDsgfVxyXG4gIH1cclxuICBoMSB7IG1hcmdpbjogMDsgZm9udC1zaXplOiAyMnB4OyBmb250LXdlaWdodDogODAwOyB9XHJcbiAgcCAgeyBtYXJnaW46IDRweCAwIDA7IGZvbnQtc2l6ZTogMTNweDsgb3BhY2l0eTogLjg7IH1cclxufVxyXG5cclxuLnBlbmRpbmctYmFkZ2Uge1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDhweDtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDI0NSwxNTgsMTEsLjkpOyBjb2xvcjogI2ZmZjtcclxuICBwYWRkaW5nOiA4cHggMThweDsgYm9yZGVyLXJhZGl1czogOTk5cHg7IGZvbnQtc2l6ZTogMTNweDsgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBjdXJzb3I6IHBvaW50ZXI7IHRyYW5zaXRpb246IGJhY2tncm91bmQgLjJzO1xyXG4gICY6aG92ZXIgeyBiYWNrZ3JvdW5kOiAjZDk3NzA2OyB9XHJcbiAgbWF0LWljb24geyBmb250LXNpemU6IDE4cHg7IHdpZHRoOiAxOHB4OyBoZWlnaHQ6IDE4cHg7IGFuaW1hdGlvbjogcmluZyAuOHMgZWFzZS1pbi1vdXQgaW5maW5pdGUgYWx0ZXJuYXRlOyB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgcmluZyB7IGZyb20geyB0cmFuc2Zvcm06IHJvdGF0ZSgtMTBkZWcpOyB9IHRvIHsgdHJhbnNmb3JtOiByb3RhdGUoMTBkZWcpOyB9IH1cclxuXHJcbi8vIMOiwpTCgMOiwpTCgCBUYWJzIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxyXG4ubWFuYWdlLXRhYnMge1xyXG4gIG1hcmdpbjogMCAzMnB4O1xyXG4gIDo6bmctZGVlcCAubWF0LW1kYy10YWItaGVhZGVyIHsgYmFja2dyb3VuZDogI2ZmZjsgYm9yZGVyLXJhZGl1czogJHJhZGl1cyAkcmFkaXVzIDAgMDsgYm94LXNoYWRvdzogMCAycHggOHB4IHJnYmEoMCwwLDAsLjA2KTsgfVxyXG4gIDo6bmctZGVlcCAubWF0LW1kYy10YWItbGFiZWwtY29udGFpbmVyIHsgcGFkZGluZzogMCA4cHg7IH1cclxuICBtYXQtaWNvbiB7IHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7IGZvbnQtc2l6ZTogMThweDsgd2lkdGg6IDE4cHg7IGhlaWdodDogMThweDsgfVxyXG59XHJcblxyXG4udGFiLWNvdW50IHtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgbWluLXdpZHRoOiAyMHB4OyBoZWlnaHQ6IDIwcHg7IGJvcmRlci1yYWRpdXM6IDk5OXB4O1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjEsMTAxLDE5MiwuMTIpOyBjb2xvcjogJGJyYW5kO1xyXG4gIGZvbnQtc2l6ZTogMTFweDsgZm9udC13ZWlnaHQ6IDcwMDsgcGFkZGluZzogMCA2cHg7IG1hcmdpbi1sZWZ0OiA2cHg7XHJcbiAgJi5wZW5kaW5nIHsgYmFja2dyb3VuZDogI2ZlZjNjNzsgY29sb3I6ICNiNDUzMDk7IH1cclxufVxyXG5cclxuLnRhYi1ib2R5IHtcclxuICBiYWNrZ3JvdW5kOiAjZmZmOyBib3JkZXItcmFkaXVzOiAwIDAgJHJhZGl1cyAkcmFkaXVzO1xyXG4gIHBhZGRpbmc6IDI4cHggMjhweCAzMnB4O1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDE2cHggcmdiYSgwLDAsMCwuMDYpO1xyXG4gIG1pbi1oZWlnaHQ6IDMwMHB4O1xyXG59XHJcblxyXG4uc2VjdGlvbi1ub3RlIHtcclxuICBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDhweDtcclxuICBiYWNrZ3JvdW5kOiAjZWZmNmZmOyBib3JkZXI6IDFweCBzb2xpZCAjYmZkYmZlOyBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIHBhZGRpbmc6IDEwcHggMTRweDsgZm9udC1zaXplOiAxM3B4OyBjb2xvcjogIzFkNGVkODsgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICBtYXQtaWNvbiB7IGZvbnQtc2l6ZTogMTZweDsgd2lkdGg6IDE2cHg7IGhlaWdodDogMTZweDsgZmxleC1zaHJpbms6IDA7IH1cclxufVxyXG5cclxuLy8gw6LClMKAw6LClMKAIE1lbWJlciB0YWJsZSDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcclxuLm1lbWJlci10YWJsZSB7IG92ZXJmbG93LXg6IGF1dG87IH1cclxuXHJcbi5tdC1yb3cge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgMTAwcHggMTEwcHggMTEwcHggNTJweDtcclxuICBnYXA6IDEycHg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMTJweCA4cHg7IGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjNmNGY2O1xyXG5cclxuICAmLm10LWhlYWQge1xyXG4gICAgZm9udC1zaXplOiAxMXB4OyBmb250LXdlaWdodDogNzAwOyB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC42cHg7IGNvbG9yOiAjOWNhM2FmOyBib3JkZXItYm90dG9tOiAycHggc29saWQgI2U1ZTdlYjtcclxuICB9XHJcbiAgJjpsYXN0LWNoaWxkIHsgYm9yZGVyLWJvdHRvbTogbm9uZTsgfVxyXG59XHJcblxyXG4ubWVtYmVyLWNlbGwgeyBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDEycHg7IH1cclxuXHJcbi5hdmF0YXIge1xyXG4gIHdpZHRoOiAzOHB4OyBoZWlnaHQ6IDM4cHg7IGJvcmRlci1yYWRpdXM6IDEwcHg7IGZsZXgtc2hyaW5rOiAwO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNlNWU3ZWIsICNkMWQ1ZGIpO1xyXG4gIGNvbG9yOiAjMzc0MTUxOyBmb250LXNpemU6IDEzcHg7IGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgJi5hZG1pbi1hdiB7IGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYmEoMjEsMTAxLDE5MiwuMTUpLCByZ2JhKDUsMTUwLDEwNSwuMikpOyBjb2xvcjogJGJyYW5kOyB9XHJcbn1cclxuXHJcbi5tZW1iZXItaW5mbyB7XHJcbiAgZGlzcGxheTogZmxleDsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAubS1uYW1lIHsgZm9udC1zaXplOiAxNHB4OyBmb250LXdlaWdodDogNjAwOyBjb2xvcjogIzExMTgyNzsgfVxyXG4gIC5tLWVtYWlsIHsgZm9udC1zaXplOiAxMnB4OyBjb2xvcjogIzljYTNhZjsgfVxyXG59XHJcblxyXG4ubXV0ZWQgeyBmb250LXNpemU6IDEzcHg7IGNvbG9yOiAjOWNhM2FmOyB9XHJcblxyXG4ucm9sZS10YWcge1xyXG4gIGZvbnQtc2l6ZTogMTFweDsgZm9udC13ZWlnaHQ6IDcwMDsgcGFkZGluZzogM3B4IDEwcHg7IGJvcmRlci1yYWRpdXM6IDk5OXB4O1xyXG4gIGJhY2tncm91bmQ6ICNmM2Y0ZjY7IGNvbG9yOiAjNmI3MjgwO1xyXG4gICYuYWRtaW4tdGFnIHsgYmFja2dyb3VuZDogcmdiYSgyMSwxMDEsMTkyLC4xKTsgY29sb3I6ICRicmFuZDsgfVxyXG59XHJcblxyXG4uc3RhdHVzLXRhZyB7XHJcbiAgZm9udC1zaXplOiAxMXB4OyBmb250LXdlaWdodDogNzAwOyBwYWRkaW5nOiAzcHggMTBweDsgYm9yZGVyLXJhZGl1czogOTk5cHg7XHJcbiAgJi5zdC1hY3RpdmUgICB7IGJhY2tncm91bmQ6ICNkY2ZjZTc7IGNvbG9yOiAjMTY2NTM0OyB9XHJcbiAgJi5zdC1wZW5kaW5nICB7IGJhY2tncm91bmQ6ICNmZWY5YzM7IGNvbG9yOiAjODU0ZDBlOyB9XHJcbiAgJi5zdC1pbmFjdGl2ZSB7IGJhY2tncm91bmQ6ICNmZWUyZTI7IGNvbG9yOiAjOTkxYjFiOyB9XHJcbn1cclxuXHJcbi5hY3Rpb24tY2VsbCB7IGRpc3BsYXk6IGZsZXg7IGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7IH1cclxuXHJcbi5idG4tcmVtb3ZlIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgd2lkdGg6IDM0cHg7IGhlaWdodDogMzRweDsgYm9yZGVyOiBub25lOyBib3JkZXItcmFkaXVzOiA4cHg7IGN1cnNvcjogcG9pbnRlcjtcclxuICBiYWNrZ3JvdW5kOiAjZmVmMmYyOyBjb2xvcjogI2I5MWMxYzsgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAuMnM7XHJcbiAgbWF0LWljb24geyBmb250LXNpemU6IDE4cHg7IHdpZHRoOiAxOHB4OyBoZWlnaHQ6IDE4cHg7IH1cclxuICAmOmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHsgYmFja2dyb3VuZDogI2ZlZTJlMjsgfVxyXG4gICY6ZGlzYWJsZWQgeyBvcGFjaXR5OiAuNDsgY3Vyc29yOiBub3QtYWxsb3dlZDsgfVxyXG59XHJcblxyXG4vLyDDosKUwoDDosKUwoAgSm9pbiByZXF1ZXN0cyDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcclxuLnJlcXVlc3QtbGlzdCB7IGRpc3BsYXk6IGZsZXg7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IGdhcDogMTRweDsgfVxyXG5cclxuLnJlcXVlc3QtY2FyZCB7XHJcbiAgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7IGdhcDogMTZweDtcclxuICBiYWNrZ3JvdW5kOiAjZjlmYWZiOyBib3JkZXI6IDFweCBzb2xpZCAjZTVlN2ViOyBib3JkZXItcmFkaXVzOiAkcmFkaXVzOyBwYWRkaW5nOiAxNnB4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxufVxyXG5cclxuLnJlcS1hdmF0YXIge1xyXG4gIHdpZHRoOiA0NnB4OyBoZWlnaHQ6IDQ2cHg7IGJvcmRlci1yYWRpdXM6IDEycHg7IGZsZXgtc2hyaW5rOiAwO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICRuYXZ5LCAkYnJhbmQpO1xyXG4gIGNvbG9yOiAjZmZmOyBmb250LXNpemU6IDE1cHg7IGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5yZXEtaW5mbyB7XHJcbiAgZmxleDogMTsgZGlzcGxheTogZmxleDsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgZ2FwOiAzcHg7IG1pbi13aWR0aDogMTgwcHg7XHJcbiAgLnJlcS1uYW1lICB7IGZvbnQtc2l6ZTogMTVweDsgZm9udC13ZWlnaHQ6IDcwMDsgY29sb3I6ICMxMTE4Mjc7IH1cclxuICAucmVxLWVtYWlsIHsgZm9udC1zaXplOiAxM3B4OyBjb2xvcjogIzZiNzI4MDsgfVxyXG4gIC5yZXEtbXNnICAgeyBmb250LXNpemU6IDEzcHg7IGNvbG9yOiAjMzc0MTUxOyBmb250LXN0eWxlOiBpdGFsaWM7IG1hcmdpbi10b3A6IDRweDsgfVxyXG4gIC5yZXEtbWV0YSAgeyBmb250LXNpemU6IDEycHg7IGNvbG9yOiAjOWNhM2FmOyBtYXJnaW4tdG9wOiA0cHg7IH1cclxufVxyXG5cclxuLnJlcS1hY3Rpb25zIHsgZGlzcGxheTogZmxleDsgZ2FwOiAxMHB4OyBmbGV4LXNocmluazogMDsgYWxpZ24tc2VsZjogY2VudGVyOyB9XHJcblxyXG4uYnRuLWFwcHJvdmUge1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDZweDtcclxuICBwYWRkaW5nOiA4cHggMThweDsgYm9yZGVyOiBub25lOyBib3JkZXItcmFkaXVzOiAxMHB4OyBjdXJzb3I6IHBvaW50ZXI7IGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMwNjVmNDYsICMwNTk2NjkpO1xyXG4gIGNvbG9yOiAjZmZmOyBmb250LXNpemU6IDEzcHg7IGZvbnQtd2VpZ2h0OiA3MDA7IHRyYW5zaXRpb246IGFsbCAuMnM7XHJcbiAgbWF0LWljb24geyBmb250LXNpemU6IDE2cHg7IHdpZHRoOiAxNnB4OyBoZWlnaHQ6IDE2cHg7IH1cclxuICAmOmhvdmVyIHsgYm94LXNoYWRvdzogMCA0cHggMTJweCByZ2JhKDUsMTUwLDEwNSwuMzUpOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7IH1cclxufVxyXG5cclxuLmJ0bi1yZWplY3Qge1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDZweDtcclxuICBwYWRkaW5nOiA4cHggMThweDsgYm9yZGVyLXJhZGl1czogMTBweDsgY3Vyc29yOiBwb2ludGVyOyBmb250LWZhbWlseTogaW5oZXJpdDtcclxuICBiYWNrZ3JvdW5kOiAjZmVmMmYyOyBib3JkZXI6IDEuNXB4IHNvbGlkICNmZWNhY2E7XHJcbiAgY29sb3I6ICNiOTFjMWM7IGZvbnQtc2l6ZTogMTNweDsgZm9udC13ZWlnaHQ6IDcwMDsgdHJhbnNpdGlvbjogYWxsIC4ycztcclxuICBtYXQtaWNvbiB7IGZvbnQtc2l6ZTogMTZweDsgd2lkdGg6IDE2cHg7IGhlaWdodDogMTZweDsgfVxyXG4gICY6aG92ZXIgeyBiYWNrZ3JvdW5kOiAjZmVlMmUyOyB9XHJcbn1cclxuXHJcbi8vIMOiwpTCgMOiwpTCgCBPdXRzdGFuZGluZyBwcmV2aWV3IMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxyXG4ub3V0c3RhbmRpbmctcHJldmlldyB7XHJcbiAgYmFja2dyb3VuZDogI2ZmZmJlYjsgYm9yZGVyOiAxcHggc29saWQgI2ZkZTY4YTsgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICBwYWRkaW5nOiAxNHB4IDE2cHg7IG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi5vcC1oZWFkZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGdhcDogOHB4O1xyXG4gIGZvbnQtc2l6ZTogMTRweDsgZm9udC13ZWlnaHQ6IDYwMDsgY29sb3I6ICM5MjQwMGU7IG1hcmdpbi1ib3R0b206IDRweDtcclxuICBtYXQtaWNvbiB7IGZvbnQtc2l6ZTogMThweDsgd2lkdGg6IDE4cHg7IGhlaWdodDogMThweDsgY29sb3I6ICNkOTc3MDY7IGZsZXgtc2hyaW5rOiAwOyB9XHJcbiAgc3Ryb25nIHsgY29sb3I6ICNiNDUzMDk7IH1cclxufVxyXG5cclxuLm9wLWxpc3QgeyBtYXJnaW4tdG9wOiAxMnB4OyBkaXNwbGF5OiBmbGV4OyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBnYXA6IDZweDsgbWF4LWhlaWdodDogMjIwcHg7IG92ZXJmbG93LXk6IGF1dG87IH1cclxuXHJcbi5vcC1yb3cgeyBkaXNwbGF5OiBjb250ZW50czsgfVxyXG5cclxuLm9wLW1lbWJlciB7XHJcbiAgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZ2FwOiAxMHB4O1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7IGJvcmRlcjogMXB4IHNvbGlkICNmZGU2OGE7IGJvcmRlci1yYWRpdXM6IDhweDsgcGFkZGluZzogOHB4IDEycHg7XHJcbn1cclxuXHJcbi5hdmF0YXItc20ge1xyXG4gIHdpZHRoOiAzMnB4OyBoZWlnaHQ6IDMycHg7IGJvcmRlci1yYWRpdXM6IDhweDsgZmxleC1zaHJpbms6IDA7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2ZkZTY4YSwgI2Y1OWUwYik7XHJcbiAgY29sb3I6ICM5MjQwMGU7IGZvbnQtc2l6ZTogMTFweDsgZm9udC13ZWlnaHQ6IDgwMDtcclxuICBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLm9wLWluZm8geyBmbGV4OiAxOyBkaXNwbGF5OiBmbGV4OyBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIC5vcC1uYW1lIHsgZm9udC1zaXplOiAxM3B4OyBmb250LXdlaWdodDogNjAwOyBjb2xvcjogIzExMTgyNzsgfVxyXG4gIC5vcC1zdWIgIHsgZm9udC1zaXplOiAxMXB4OyBjb2xvcjogIzljYTNhZjsgfVxyXG59XHJcblxyXG4ub3AtYW1vdW50IHtcclxuICBmb250LXNpemU6IDEzcHg7IGZvbnQtd2VpZ2h0OiA3MDA7IGNvbG9yOiAjYjkxYzFjO1xyXG4gIGJhY2tncm91bmQ6ICNmZWUyZTI7IHBhZGRpbmc6IDNweCA4cHg7IGJvcmRlci1yYWRpdXM6IDZweDsgZmxleC1zaHJpbms6IDA7XHJcbn1cclxuXHJcbi8vIMOiwpTCgMOiwpTCgCBGb3JtcyDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcclxuLmZvcm0tY2FyZCB7XHJcbiAgbWF4LXdpZHRoOiA1MjBweDtcclxuICBoMyB7IGZvbnQtc2l6ZTogMThweDsgZm9udC13ZWlnaHQ6IDcwMDsgY29sb3I6ICMxMTE4Mjc7IG1hcmdpbjogMCAwIDhweDsgfVxyXG59XHJcblxyXG4uZm9ybS1ub3RlIHtcclxuICBmb250LXNpemU6IDE0cHg7IGNvbG9yOiAjNmI3MjgwOyBsaW5lLWhlaWdodDogMS42OyBtYXJnaW4tYm90dG9tOiAyNHB4O1xyXG4gIHN0cm9uZywgZW0geyBjb2xvcjogIzM3NDE1MTsgfVxyXG59XHJcblxyXG4uaW52aXRlLWZvcm0geyBkaXNwbGF5OiBmbGV4OyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBnYXA6IDRweDsgfVxyXG4uZnVsbC13aWR0aCB7IHdpZHRoOiAxMDAlOyB9XHJcblxyXG4uYnRuLXByaW1hcnkge1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDhweDtcclxuICBwYWRkaW5nOiAxMnB4IDI4cHg7IGJvcmRlcjogbm9uZTsgYm9yZGVyLXJhZGl1czogMTJweDsgY3Vyc29yOiBwb2ludGVyOyBmb250LWZhbWlseTogaW5oZXJpdDtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAkbmF2eSwgJGJyYW5kKTtcclxuICBjb2xvcjogI2ZmZjsgZm9udC1zaXplOiAxNHB4OyBmb250LXdlaWdodDogNzAwO1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDE0cHggcmdiYSgxMyw3MSwxNjEsLjMpOyB0cmFuc2l0aW9uOiBhbGwgLjJzO1xyXG4gIG1hdC1pY29uIHsgZm9udC1zaXplOiAxOHB4OyB3aWR0aDogMThweDsgaGVpZ2h0OiAxOHB4OyB9XHJcbiAgJjpob3Zlcjpub3QoOmRpc2FibGVkKSB7IGJveC1zaGFkb3c6IDAgNnB4IDIwcHggcmdiYSgxMyw3MSwxNjEsLjQyKTsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpOyB9XHJcbiAgJjpkaXNhYmxlZCB7IG9wYWNpdHk6IC41NTsgY3Vyc29yOiBub3QtYWxsb3dlZDsgdHJhbnNmb3JtOiBub25lOyBib3gtc2hhZG93OiBub25lOyB9XHJcbiAgJi5idG4tcGF5bWVudCB7IGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMwNjVmNDYsICR0ZWFsKTsgYm94LXNoYWRvdzogMCA0cHggMTRweCByZ2JhKDUsMTUwLDEwNSwuMyk7IH1cclxufVxyXG5cclxuLnBheW1lbnQtaW5mbyB7XHJcbiAgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7IGdhcDogOHB4O1xyXG4gIGJhY2tncm91bmQ6ICNmMGZkZjQ7IGJvcmRlcjogMXB4IHNvbGlkICNiYmY3ZDA7IGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgcGFkZGluZzogMTJweCAxNHB4OyBmb250LXNpemU6IDEzcHg7IGNvbG9yOiAjMTY2NTM0OyBtYXJnaW4tdG9wOiAxNnB4O1xyXG4gIG1hdC1pY29uIHsgZm9udC1zaXplOiAxNnB4OyB3aWR0aDogMTZweDsgaGVpZ2h0OiAxNnB4OyBmbGV4LXNocmluazogMDsgbWFyZ2luLXRvcDogMXB4OyB9XHJcbn1cclxuXHJcbi8vIMOiwpTCgMOiwpTCgCBFbXB0eSAvIExvYWRpbmcgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXHJcbi5lbXB0eS1zdGF0ZSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyOyBwYWRkaW5nOiA0OHB4IDE2cHg7XHJcbiAgbWF0LWljb24geyBmb250LXNpemU6IDQ4cHg7IHdpZHRoOiA0OHB4OyBoZWlnaHQ6IDQ4cHg7IGNvbG9yOiAjZDFkNWRiOyB9XHJcbiAgcCB7IGZvbnQtc2l6ZTogMTVweDsgY29sb3I6ICM5Y2EzYWY7IG1hcmdpbjogMTJweCAwIDA7IH1cclxufVxyXG5cclxuLm1hbmFnZS1sb2FkaW5nIHtcclxuICBkaXNwbGF5OiBmbGV4OyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBhbGlnbi1pdGVtczogY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBtaW4taGVpZ2h0OiA2MHZoOyBnYXA6IDIwcHg7XHJcbiAgcCB7IGNvbG9yOiAjOWNhM2FmOyBmb250LXNpemU6IDE1cHg7IH1cclxufVxyXG5cclxuLy8gw6LClMKAw6LClMKAIFByb3Bvc2FsIGJhZGdlIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxyXG4ucHJvcG9zYWwtYmFkZ2Uge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjIwLDM4LDM4LC44NSk7XHJcbiAgJjpob3ZlciB7IGJhY2tncm91bmQ6IHJnYmEoMTg1LDI4LDI4LC45NSk7IH1cclxufVxyXG5cclxuLy8gw6LClMKAw6LClMKAIFByb3Bvc2UgcmVtb3ZhbCBidXR0b24gw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXHJcbi5idG4tcHJvcG9zZSB7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGdhcDogNHB4O1xyXG4gIGJhY2tncm91bmQ6ICNmZmYzY2Q7IGJvcmRlcjogMS41cHggc29saWQgI2Y1OWUwYjsgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIGNvbG9yOiAjOTI0MDBlOyBwYWRkaW5nOiA1cHggMTJweDsgZm9udC1zaXplOiAxMnB4OyBmb250LXdlaWdodDogNjAwO1xyXG4gIGN1cnNvcjogcG9pbnRlcjsgZm9udC1mYW1pbHk6IGluaGVyaXQ7IHRyYW5zaXRpb246IGJhY2tncm91bmQgLjJzO1xyXG4gICY6aG92ZXIgeyBiYWNrZ3JvdW5kOiAjZmRlNjhhOyB9XHJcbiAgbWF0LWljb24geyBmb250LXNpemU6IDE1cHg7IHdpZHRoOiAxNXB4OyBoZWlnaHQ6IDE1cHg7IH1cclxufVxyXG5cclxuLnByb3Bvc2FsLXBlbmRpbmctbGFiZWwge1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDRweDtcclxuICBjb2xvcjogI2Q5NzcwNjsgZm9udC1zaXplOiAxMnB4OyBmb250LXdlaWdodDogNjAwO1xyXG4gIG1hdC1pY29uIHsgZm9udC1zaXplOiAxNXB4OyB3aWR0aDogMTVweDsgaGVpZ2h0OiAxNXB4OyB9XHJcbn1cclxuXHJcbi8vIMOiwpTCgMOiwpTCgCBJbmxpbmUgcHJvcG9zYWwgZm9ybSDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcclxuLnByb3Bvc2FsLWZvcm0tY2FyZCB7XHJcbiAgbWFyZ2luLXRvcDogMjRweDsgYmFja2dyb3VuZDogI2ZmZmJlYjsgYm9yZGVyOiAxLjVweCBzb2xpZCAjZjU5ZTBiO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE0cHg7IHBhZGRpbmc6IDI0cHg7XHJcbn1cclxuLnByb3Bvc2FsLWZvcm0taGVhZGVyIHtcclxuICBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDEwcHg7IG1hcmdpbi1ib3R0b206IDEycHg7XHJcbiAgbWF0LWljb24geyBjb2xvcjogI2I0NTMwOTsgZm9udC1zaXplOiAyMnB4OyB3aWR0aDogMjJweDsgaGVpZ2h0OiAyMnB4OyB9XHJcbiAgaDMgeyBtYXJnaW46IDA7IGZvbnQtc2l6ZTogMTZweDsgY29sb3I6ICM3ODM1MGY7IH1cclxufVxyXG4ucHJvcG9zYWwtZm9ybS1ub3RlIHtcclxuICBmb250LXNpemU6IDEzcHg7IGNvbG9yOiAjOTI0MDBlOyBtYXJnaW46IDAgMCAxNnB4O1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjQ1LDE1OCwxMSwuMTIpOyBib3JkZXItcmFkaXVzOiA4cHg7IHBhZGRpbmc6IDEwcHggMTRweDtcclxufVxyXG4ucHJvcG9zYWwtZm9ybS1hY3Rpb25zIHtcclxuICBkaXNwbGF5OiBmbGV4OyBnYXA6IDEycHg7IGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7IG1hcmdpbi10b3A6IDEycHg7XHJcbn1cclxuXHJcbi8vIMOiwpTCgMOiwpTCgCBQZW5kaW5nIHByb3Bvc2FscyBzZWN0aW9uIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxyXG4ucHJvcG9zYWxzLXNlY3Rpb24ge1xyXG4gIG1hcmdpbi10b3A6IDMycHg7XHJcbiAgYm9yZGVyLXRvcDogMnB4IGRhc2hlZCAjZmNhNWE1O1xyXG4gIHBhZGRpbmctdG9wOiAyNHB4O1xyXG59XHJcbi5wcm9wb3NhbHMtdGl0bGUge1xyXG4gIGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGdhcDogOHB4OyBmb250LXNpemU6IDE2cHg7XHJcbiAgY29sb3I6ICNiOTFjMWM7IG1hcmdpbjogMCAwIDhweDtcclxuICBtYXQtaWNvbiB7IGZvbnQtc2l6ZTogMjBweDsgd2lkdGg6IDIwcHg7IGhlaWdodDogMjBweDsgfVxyXG59XHJcbi5wcm9wb3NhbHMtbm90ZSB7XHJcbiAgZm9udC1zaXplOiAxM3B4OyBjb2xvcjogIzZiNzI4MDsgbWFyZ2luOiAwIDAgMTZweDtcclxufVxyXG4ucHJvcG9zYWwtY2FyZCB7XHJcbiAgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyBmbGV4LXdyYXA6IHdyYXA7IGdhcDogMTJweDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmOyBib3JkZXI6IDEuNXB4IHNvbGlkICNmY2E1YTU7IGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgcGFkZGluZzogMTZweDsgbWFyZ2luLWJvdHRvbTogMTJweDtcclxufVxyXG4ucHJvcG9zYWwtaW5mbyB7XHJcbiAgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZ2FwOiAxMnB4O1xyXG59XHJcbi5wcm9wb3NhbC1hdmF0YXIge1xyXG4gIHdpZHRoOiA0MHB4OyBoZWlnaHQ6IDQwcHg7IGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBiYWNrZ3JvdW5kOiAjZmVlMmUyOyBjb2xvcjogI2I5MWMxYztcclxuICBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBmb250LXNpemU6IDE0cHg7IGZvbnQtd2VpZ2h0OiA3MDA7IGZsZXgtc2hyaW5rOiAwO1xyXG59XHJcbi5wcm9wb3NhbC10YXJnZXQgeyBkaXNwbGF5OiBibG9jazsgZm9udC13ZWlnaHQ6IDYwMDsgZm9udC1zaXplOiAxNXB4OyBjb2xvcjogIzExMTgyNzsgfVxyXG4ucHJvcG9zYWwtc3ViIHsgZGlzcGxheTogYmxvY2s7IGZvbnQtc2l6ZTogMTJweDsgY29sb3I6ICM5Y2EzYWY7IH1cclxuLnByb3Bvc2FsLXJlYXNvbiB7IGRpc3BsYXk6IGJsb2NrOyBmb250LXNpemU6IDEycHg7IGNvbG9yOiAjNmI3MjgwOyBmb250LXN0eWxlOiBpdGFsaWM7IG1hcmdpbi10b3A6IDJweDsgfVxyXG4ucHJvcG9zYWwtYWN0aW9ucyB7IGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGdhcDogOHB4OyBmbGV4LXdyYXA6IHdyYXA7IH1cclxuLnByb3Bvc2FsLXlvdXJzIHsgZm9udC1zaXplOiAxMnB4OyBjb2xvcjogIzZiNzI4MDsgZm9udC1zdHlsZTogaXRhbGljOyB9XHJcblxyXG4vLyDDosKUwoDDosKUwoAgRGVkaWNhdGVkIFByb3Bvc2FscyB0YWIgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXHJcbi5wcm9wb3NhbHMtaGVhZGVyIHtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIGgyLnByb3Bvc2Fscy10aXRsZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDhweDsgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgY29sb3I6ICNiOTFjMWM7IG1hcmdpbjogMCAwIDZweDtcclxuICAgIG1hdC1pY29uIHsgZm9udC1zaXplOiAyMnB4OyB3aWR0aDogMjJweDsgaGVpZ2h0OiAyMnB4OyB9XHJcbiAgfVxyXG59XHJcblxyXG4ucHJvcG9zYWwtZGV0YWlscyB7IGRpc3BsYXk6IGZsZXg7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IGdhcDogM3B4OyB9XHJcblxyXG4ucHJvcG9zYWwtc3RhdHVzIHsgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxyXG5cclxuLnN0YXR1cy1jaGlwIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZ2FwOiA1cHg7XHJcbiAgcGFkZGluZzogNXB4IDEycHg7IGJvcmRlci1yYWRpdXM6IDk5OXB4OyBmb250LXNpemU6IDEycHg7IGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgbWF0LWljb24geyBmb250LXNpemU6IDE1cHg7IHdpZHRoOiAxNXB4OyBoZWlnaHQ6IDE1cHg7IH1cclxufVxyXG4ucGVuZGluZy1jaGlwIHsgYmFja2dyb3VuZDogI2ZlZjNjNzsgY29sb3I6ICM5MjQwMGU7IH1cclxuXHJcbi5zdWItaWNvbiB7IGZvbnQtc2l6ZTogMTNweCAhaW1wb3J0YW50OyB3aWR0aDogMTNweCAhaW1wb3J0YW50OyBoZWlnaHQ6IDEzcHggIWltcG9ydGFudDsgdmVydGljYWwtYWxpZ246IG1pZGRsZTsgbWFyZ2luLXJpZ2h0OiAzcHg7IH1cclxuXHJcbi5yYXRpZnktcHJvbXB0IHtcclxuICBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDZweDsgd2lkdGg6IDEwMCU7XHJcbiAgZm9udC1zaXplOiAxMnB4OyBjb2xvcjogIzFkNGVkODsgYmFja2dyb3VuZDogI2VmZjZmZjtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7IHBhZGRpbmc6IDhweCAxMnB4O1xyXG4gIG1hdC1pY29uIHsgZm9udC1zaXplOiAxNnB4OyB3aWR0aDogMTZweDsgaGVpZ2h0OiAxNnB4OyB9XHJcbn1cclxuXHJcbi5lbXB0eS1oaW50IHtcclxuICBkaXNwbGF5OiBibG9jazsgZm9udC1zaXplOiAxM3B4OyBjb2xvcjogIzljYTNhZjsgbWFyZ2luLXRvcDogOHB4OyBtYXgtd2lkdGg6IDQyMHB4O1xyXG59XHJcblxyXG4vLyDDosKUwoDDosKUwoAgVXRpbGl0eSDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcclxuLmJ0bi1jYW5jZWwtc20ge1xyXG4gIHBhZGRpbmc6IDZweCAxNHB4OyBiYWNrZ3JvdW5kOiAjZjNmNGY2OyBib3JkZXI6IDFweCBzb2xpZCAjZDFkNWRiO1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDsgZm9udC1zaXplOiAxM3B4OyBmb250LXdlaWdodDogNTAwOyBjb2xvcjogIzM3NDE1MTtcclxuICBjdXJzb3I6IHBvaW50ZXI7IGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG4gICY6aG92ZXIgeyBiYWNrZ3JvdW5kOiAjZTVlN2ViOyB9XHJcbn1cclxuLmJ0bi1kYW5nZXIge1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDZweDtcclxuICBwYWRkaW5nOiA4cHggMThweDsgYmFja2dyb3VuZDogI2RjMjYyNjsgY29sb3I6ICNmZmY7XHJcbiAgYm9yZGVyOiBub25lOyBib3JkZXItcmFkaXVzOiA4cHg7IGZvbnQtc2l6ZTogMTNweDsgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBjdXJzb3I6IHBvaW50ZXI7IGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG4gICY6aG92ZXI6bm90KDpkaXNhYmxlZCkgeyBiYWNrZ3JvdW5kOiAjYjkxYzFjOyB9XHJcbiAgJjpkaXNhYmxlZCB7IG9wYWNpdHk6IC42OyBjdXJzb3I6IG5vdC1hbGxvd2VkOyB9XHJcbiAgbWF0LWljb24geyBmb250LXNpemU6IDE2cHg7IHdpZHRoOiAxNnB4OyBoZWlnaHQ6IDE2cHg7IH1cclxufVxyXG5cclxuLy8gw6LClMKAw6LClMKAIElubGluZSBub3RlIGZvcm1zIGZvciBwcm9wb3NhbCByYXRpZmljYXRpb24gw6LClMKAw6LClMKAw6LClMKAw6/Cv8K9w6/Cv8K9w6/Cv8K9w6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXHJcbi5pbmxpbmUtbm90ZS1mb3JtIHtcclxuICBtYXJnaW4tdG9wOiAxMnB4O1xyXG4gIHBhZGRpbmc6IDE0cHg7XHJcbiAgYmFja2dyb3VuZDogI2Y4ZmFmYztcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZTJlOGYwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGdhcDogMTBweDtcclxuXHJcbiAgLm5vdGUtZmllbGQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAuaW5saW5lLW5vdGUtYWN0aW9ucyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZ2FwOiA4cHg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgfVxyXG59XHJcblxyXG4vLyDDosKUwoDDosKUwoAgUmVzcG9uc2l2ZSDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgLm1hbmFnZS1oZWFkZXIgeyBwYWRkaW5nOiAyMHB4IDE2cHg7IH1cclxuICAubWFuYWdlLXRhYnMgeyBtYXJnaW46IDAgMTZweDsgfVxyXG4gIC50YWItYm9keSB7IHBhZGRpbmc6IDIwcHggMTZweDsgfVxyXG4gIC5tdC1yb3cgeyBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciA4MHB4IDM2cHg7IH1cclxuICAubXQtcm93ID4gOm50aC1jaGlsZCgzKSwgLm10LXJvdyA+IDpudGgtY2hpbGQoNCkgeyBkaXNwbGF5OiBub25lOyB9XHJcbiAgLnJlcS1hY3Rpb25zIHsgd2lkdGg6IDEwMCU7IH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  }));
}
_staticBlock();

/***/ })

}]);
//# sourceMappingURL=src_app_components_stokvel-manage_stokvel-manage_component_ts.js.map