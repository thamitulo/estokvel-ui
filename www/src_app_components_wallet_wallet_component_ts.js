"use strict";
(self["webpackChunkestokvel_ui"] = self["webpackChunkestokvel_ui"] || []).push([["src_app_components_wallet_wallet_component_ts"],{

/***/ 5425:
/*!*******************************************************!*\
  !*** ./src/app/components/wallet/wallet.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WalletComponent: () => (/* binding */ WalletComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 4487);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../material.module */ 9439);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 5797);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 9452);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 1318);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 9475);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 6647);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 4334);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 2481);
/* harmony import */ var _services_stokvel_transaction_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../services/stokvel/transaction.service */ 6881);
/* harmony import */ var _services_stokvel_stokvel_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../services/stokvel/stokvel.service */ 7093);
/* harmony import */ var _services_user_user_service_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../services/user/user-service.service */ 2915);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/form-field */ 8388);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/input */ 5541);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/select */ 8724);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/select */ 6060);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/icon */ 3840);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/card */ 3777);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/table */ 78);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/progress-spinner */ 1134);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/chips */ 2772);
var _staticBlock;























const _c0 = () => ["type", "description", "amount", "balance", "status", "date"];
function WalletComponent_div_48_ng_container_56_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 40)(1, "div", 41)(2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "div", 42)(5, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](9, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](10, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](12, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](13, "div", 46)(14, "mat-chip");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const tx_r3 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵstyleProp"]("color", ctx_r1.getTransactionColor(tx_r3.type));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r1.getTransactionIcon(tx_r3.type));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](tx_r3.description || tx_r3.reference);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](9, 14, tx_r3.createdAt, "mediumDate"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵstyleProp"]("color", ctx_r1.getTransactionColor(tx_r3.type));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate2"](" ", tx_r3.type === "CREDIT" ? "+" : "-", "R", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](12, 17, tx_r3.amount, "1.2-2"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵstyleProp"]("color", ctx_r1.getStatusColor(tx_r3.status));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵstyleProp"]("background", ctx_r1.getStatusColor(tx_r3.status) + "22");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](tx_r3.status);
  }
}
function WalletComponent_div_48_ng_container_56_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, WalletComponent_div_48_ng_container_56_div_1_div_1_Template, 16, 20, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const txs_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind3"](2, 1, txs_r4, 0, 5));
  }
}
function WalletComponent_div_48_ng_container_56_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 47)(1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, "history");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4, "No transactions yet. Deposit funds or contribute to a stokvel to get started.");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
}
function WalletComponent_div_48_ng_container_56_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, WalletComponent_div_48_ng_container_56_div_1_Template, 3, 5, "div", 37)(2, WalletComponent_div_48_ng_container_56_ng_template_2_Template, 5, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const txs_r4 = ctx.ngIf;
    const noTx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", txs_r4.length > 0)("ngIfElse", noTx_r5);
  }
}
function WalletComponent_div_48_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 22)(1, "div", 23)(2, "mat-card", 24)(3, "mat-card-content")(4, "div", 25)(5, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6, "account_balance_wallet");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](8, "Available Balance");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](9, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](11, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](12, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](13, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](14, "Funds available for transfer");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](15, "mat-card", 24)(16, "mat-card-content")(17, "div", 28)(18, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](19, "groups");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](20, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](21, "My Stokvels");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](22, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](24, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](25, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](26, "Active memberships");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](27, "mat-card", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function WalletComponent_div_48_Template_mat_card_click_27_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r1.setTab("deposit"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](28, "mat-card-content")(29, "div", 30)(30, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](31, "add_circle_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](32, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](33, "Add Funds");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](34, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](35, "Deposit money into your wallet to make contributions");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](36, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](37, "Deposit Now");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](38, "mat-card", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function WalletComponent_div_48_Template_mat_card_click_38_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r1.setTab("transfer"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](39, "mat-card-content")(40, "div", 32)(41, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](42, "send");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](43, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](44, "Contribute to Stokvel");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](45, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](46, "Transfer from your wallet directly to a stokvel account");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](47, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](48, "Transfer Now");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](49, "mat-card", 34)(50, "mat-card-header")(51, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](52, "Recent Transactions");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](53, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function WalletComponent_div_48_Template_button_click_53_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r1.setTab("history"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](54, "View All");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](55, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](56, WalletComponent_div_48_ng_container_56_Template, 4, 2, "ng-container", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](57, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("R", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](12, 5, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](11, 3, ctx_r1.balance$), "1.2-2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](((tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](24, 8, ctx_r1.userStokvels$)) == null ? null : tmp_2_0.length) || 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](57, 10, ctx_r1.transactions$));
  }
}
function WalletComponent_div_49_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 71)(1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "div")(4, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassProp"]("routed-stokvel", ctx_r1.lastDepositResult.routedToStokvel)("routed-wallet", !ctx_r1.lastDepositResult.routedToStokvel);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r1.lastDepositResult.routedToStokvel ? "check_circle" : "account_balance_wallet");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r1.lastDepositResult.routedToStokvel ? "Contribution recorded" : "Credited to your wallet");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r1.lastDepositResult.routingMessage);
  }
}
function WalletComponent_div_49_mat_option_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-option", 54)(1, "div", 55)(2, "mat-icon", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3, "groups");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "div", 57)(5, "span", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](9, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const s_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("value", s_r7.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](s_r7.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate2"](" R", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](9, 4, s_r7.monthlyContribution), "/mo \u2022 ", s_r7.isOwner ? "\u2B50 Admin" : "\uD83D\uDC64 Member", " ");
  }
}
function WalletComponent_div_49_div_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 73)(1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, "info_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4, " Monthly contribution: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](7, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const s_r8 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("R", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](7, 3, s_r8.monthlyContribution));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate2"](" \u2022 ", (s_r8.memberCount ?? 0) + (s_r8.adminCount ?? 0), "/", s_r8.maxMembers, " members ");
  }
}
function WalletComponent_div_49_div_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 74)(1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, "info_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4, "Funds will be held in your personal wallet. You can transfer to a stokvel anytime.");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
}
function WalletComponent_div_49_mat_error_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "Amount is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function WalletComponent_div_49_mat_error_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "Amount must be greater than R0");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function WalletComponent_div_49_mat_spinner_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "mat-spinner", 75);
  }
}
function WalletComponent_div_49_mat_icon_46_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r1.selectedDepositStokvel ? "savings" : "add_circle");
  }
}
function WalletComponent_div_49_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 22)(1, "mat-card", 48)(2, "mat-card-header")(3, "div", 49)(4, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5, "add_circle");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](7, "Deposit Funds");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](8, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](9, "Add money directly to a stokvel or your wallet");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](10, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](11, WalletComponent_div_49_div_11_Template, 8, 7, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](12, "form", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ngSubmit", function WalletComponent_div_49_Template_form_ngSubmit_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r1.deposit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](13, "mat-form-field", 52)(14, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](15, "Destination");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](16, "mat-select", 53)(17, "mat-option", 54)(18, "div", 55)(19, "mat-icon", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](20, "account_balance_wallet");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](21, "div", 57)(22, "span", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](23, "My Wallet");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](24, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](25, "Funds held in your personal wallet");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](26, WalletComponent_div_49_mat_option_26_Template, 10, 6, "mat-option", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](27, "mat-icon", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](28, "route");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](29, WalletComponent_div_49_div_29_Template, 9, 5, "div", 62)(30, WalletComponent_div_49_div_30_Template, 5, 0, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](31, "mat-form-field", 52)(32, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](33, "Amount (ZAR)");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](34, "input", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](35, "span", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](36, "R\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](37, "mat-icon", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](38, "payments");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](39, WalletComponent_div_49_mat_error_39_Template, 2, 0, "mat-error", 36)(40, WalletComponent_div_49_mat_error_40_Template, 2, 0, "mat-error", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](41, "div", 67)(42, "button", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function WalletComponent_div_49_Template_button_click_42_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r1.setTab("overview"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](43, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](44, "button", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](45, WalletComponent_div_49_mat_spinner_45_Template, 1, 0, "mat-spinner", 70)(46, WalletComponent_div_49_mat_icon_46_Template, 2, 1, "mat-icon", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](47);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    let tmp_7_0;
    let tmp_8_0;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r1.lastDepositResult);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("formGroup", ctx_r1.depositForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("value", null);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r1.stokvels);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r1.selectedDepositStokvel);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !ctx_r1.selectedDepositStokvel);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", (tmp_7_0 = ctx_r1.depositForm.get("amount")) == null ? null : tmp_7_0.hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", (tmp_8_0 = ctx_r1.depositForm.get("amount")) == null ? null : tmp_8_0.hasError("min"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("disabled", ctx_r1.depositSubmitting);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("disabled", ctx_r1.depositForm.invalid || ctx_r1.depositSubmitting);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r1.depositSubmitting);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !ctx_r1.depositSubmitting);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx_r1.depositSubmitting ? "Processing\u2026" : ctx_r1.selectedDepositStokvel ? "Contribute to Stokvel" : "Deposit to Wallet", " ");
  }
}
function WalletComponent_div_50_span_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " \u26A0\uFE0F Your wallet is empty. Please deposit funds first. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function WalletComponent_div_50_ng_container_22_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 82)(1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, "warning");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4, "You are not a member of any stokvels yet. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "a", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6, "Browse stokvels");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](7, " to join one first. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
}
function WalletComponent_div_50_ng_container_22_form_2_mat_option_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-option", 54)(1, "div", 55)(2, "mat-icon", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3, "groups");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "div", 57)(5, "span", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](9, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const s_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("value", s_r10.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](s_r10.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate2"]("R", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](9, 4, s_r10.monthlyContribution), "/mo \u2022 ", s_r10.isOwner ? "\u2B50 Admin" : "\uD83D\uDC64 Member");
  }
}
function WalletComponent_div_50_ng_container_22_form_2_mat_error_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "Please select a stokvel");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function WalletComponent_div_50_ng_container_22_form_2_mat_error_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "Amount is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function WalletComponent_div_50_ng_container_22_form_2_mat_error_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "Amount must be greater than R0");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function WalletComponent_div_50_ng_container_22_form_2_mat_spinner_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "mat-spinner", 75);
  }
}
function WalletComponent_div_50_ng_container_22_form_2_mat_icon_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "send");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function WalletComponent_div_50_ng_container_22_form_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "form", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ngSubmit", function WalletComponent_div_50_ng_container_22_form_2_Template_form_ngSubmit_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r9);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r1.transfer());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "mat-form-field", 52)(2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3, "Select Stokvel");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "mat-select", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](5, WalletComponent_div_50_ng_container_22_form_2_mat_option_5_Template, 10, 6, "mat-option", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "mat-icon", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](7, "groups");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](8, WalletComponent_div_50_ng_container_22_form_2_mat_error_8_Template, 2, 0, "mat-error", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](9, "mat-form-field", 52)(10, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](11, "Amount (ZAR)");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](12, "input", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](13, "span", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](14, "R\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](15, "mat-icon", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](16, "payments");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](17, WalletComponent_div_50_ng_container_22_form_2_mat_error_17_Template, 2, 0, "mat-error", 36)(18, WalletComponent_div_50_ng_container_22_form_2_mat_error_18_Template, 2, 0, "mat-error", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](19, "mat-form-field", 52)(20, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](21, "Description (optional)");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](22, "input", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](23, "mat-icon", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](24, "notes");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](25, "mat-form-field", 52)(26, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](27, "Reference (optional)");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](28, "input", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](29, "mat-icon", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](30, "receipt");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](31, "div", 67)(32, "button", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function WalletComponent_div_50_ng_container_22_form_2_Template_button_click_32_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r9);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r1.setTab("overview"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](33, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](34, "button", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](35, WalletComponent_div_50_ng_container_22_form_2_mat_spinner_35_Template, 1, 0, "mat-spinner", 70)(36, WalletComponent_div_50_ng_container_22_form_2_mat_icon_36_Template, 2, 0, "mat-icon", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    let tmp_6_0;
    let tmp_7_0;
    let tmp_8_0;
    const stokvels_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().ngIf;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("formGroup", ctx_r1.transferForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", stokvels_r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", (tmp_6_0 = ctx_r1.transferForm.get("stokvelId")) == null ? null : tmp_6_0.hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", (tmp_7_0 = ctx_r1.transferForm.get("amount")) == null ? null : tmp_7_0.hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", (tmp_8_0 = ctx_r1.transferForm.get("amount")) == null ? null : tmp_8_0.hasError("min"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("disabled", ctx_r1.transferSubmitting);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("disabled", ctx_r1.transferForm.invalid || ctx_r1.transferSubmitting);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r1.transferSubmitting);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !ctx_r1.transferSubmitting);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx_r1.transferSubmitting ? "Processing\u2026" : "Transfer Funds", " ");
  }
}
function WalletComponent_div_50_ng_container_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, WalletComponent_div_50_ng_container_22_div_1_Template, 8, 0, "div", 80)(2, WalletComponent_div_50_ng_container_22_form_2_Template, 38, 10, "form", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const stokvels_r11 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", stokvels_r11.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", stokvels_r11.length > 0);
  }
}
function WalletComponent_div_50_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 22)(1, "mat-card", 48)(2, "mat-card-header")(3, "div", 76)(4, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5, "send");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](7, "Transfer to Stokvel");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](8, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](9, "Move funds from your wallet to a stokvel account");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](10, "mat-card-content")(11, "div", 77)(12, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](13, "account_balance_wallet");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](15, "Available: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](16, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](18, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](19, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](20, WalletComponent_div_50_span_20_Template, 2, 0, "span", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](21, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](22, WalletComponent_div_50_ng_container_22_Template, 3, 2, "ng-container", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](23, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("R", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](19, 5, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](18, 3, ctx_r1.balance$), "1.2-2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](21, 8, ctx_r1.balance$) === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](23, 10, ctx_r1.userStokvels$));
  }
}
function WalletComponent_div_51_ng_container_8_div_1_th_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "th", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function WalletComponent_div_51_ng_container_8_div_1_td_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "td", 103)(1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const tx_r12 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵstyleProp"]("color", ctx_r1.getTransactionColor(tx_r12.type));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r1.getTransactionIcon(tx_r12.type));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", tx_r12.type, " ");
  }
}
function WalletComponent_div_51_ng_container_8_div_1_th_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "th", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function WalletComponent_div_51_ng_container_8_div_1_td_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "td", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const tx_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](tx_r13.description || tx_r13.reference);
  }
}
function WalletComponent_div_51_ng_container_8_div_1_th_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "th", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function WalletComponent_div_51_ng_container_8_div_1_td_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "td", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const tx_r14 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵstyleProp"]("color", ctx_r1.getTransactionColor(tx_r14.type));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate2"](" ", tx_r14.type === "CREDIT" ? "+" : "-", "R", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](2, 4, tx_r14.amount, "1.2-2"), " ");
  }
}
function WalletComponent_div_51_ng_container_8_div_1_th_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "th", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "Balance After");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function WalletComponent_div_51_ng_container_8_div_1_td_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "td", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const tx_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", tx_r15.balanceAfterTransaction != null ? "R" + _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](2, 1, tx_r15.balanceAfterTransaction, "1.2-2") : "\u2014", " ");
  }
}
function WalletComponent_div_51_ng_container_8_div_1_th_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "th", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function WalletComponent_div_51_ng_container_8_div_1_td_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "td", 103)(1, "span", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const tx_r16 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵstyleProp"]("color", ctx_r1.getStatusColor(tx_r16.status));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](tx_r16.status);
  }
}
function WalletComponent_div_51_ng_container_8_div_1_th_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "th", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function WalletComponent_div_51_ng_container_8_div_1_td_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "td", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const tx_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](2, 1, tx_r17.createdAt, "medium"));
  }
}
function WalletComponent_div_51_ng_container_8_div_1_tr_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "tr", 105);
  }
}
function WalletComponent_div_51_ng_container_8_div_1_tr_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "tr", 106);
  }
}
function WalletComponent_div_51_ng_container_8_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 89)(1, "table", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](2, 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](3, WalletComponent_div_51_ng_container_8_div_1_th_3_Template, 2, 0, "th", 92)(4, WalletComponent_div_51_ng_container_8_div_1_td_4_Template, 4, 4, "td", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](5, 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](6, WalletComponent_div_51_ng_container_8_div_1_th_6_Template, 2, 0, "th", 92)(7, WalletComponent_div_51_ng_container_8_div_1_td_7_Template, 2, 1, "td", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](8, 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](9, WalletComponent_div_51_ng_container_8_div_1_th_9_Template, 2, 0, "th", 92)(10, WalletComponent_div_51_ng_container_8_div_1_td_10_Template, 3, 7, "td", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](11, 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](12, WalletComponent_div_51_ng_container_8_div_1_th_12_Template, 2, 0, "th", 92)(13, WalletComponent_div_51_ng_container_8_div_1_td_13_Template, 3, 4, "td", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](14, 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](15, WalletComponent_div_51_ng_container_8_div_1_th_15_Template, 2, 0, "th", 92)(16, WalletComponent_div_51_ng_container_8_div_1_td_16_Template, 3, 3, "td", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](17, 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](18, WalletComponent_div_51_ng_container_8_div_1_th_18_Template, 2, 0, "th", 92)(19, WalletComponent_div_51_ng_container_8_div_1_td_19_Template, 3, 4, "td", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](20, WalletComponent_div_51_ng_container_8_div_1_tr_20_Template, 1, 0, "tr", 100)(21, WalletComponent_div_51_ng_container_8_div_1_tr_21_Template, 1, 0, "tr", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const txs_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("dataSource", txs_r18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("matHeaderRowDef", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](3, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("matRowDefColumns", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](4, _c0));
  }
}
function WalletComponent_div_51_ng_container_8_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 47)(1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, "history");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4, "No transactions found. Start by depositing funds into your wallet.");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function WalletComponent_div_51_ng_container_8_ng_template_2_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r19);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r1.setTab("deposit"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6, "Deposit Funds");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
}
function WalletComponent_div_51_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, WalletComponent_div_51_ng_container_8_div_1_Template, 22, 5, "div", 88)(2, WalletComponent_div_51_ng_container_8_ng_template_2_Template, 7, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const txs_r18 = ctx.ngIf;
    const emptyHistory_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", txs_r18.length > 0)("ngIfElse", emptyHistory_r20);
  }
}
function WalletComponent_div_51_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 22)(1, "mat-card", 87)(2, "mat-card-header")(3, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4, "Transaction History");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6, "Your last 20 wallet transactions");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](8, WalletComponent_div_51_ng_container_8_Template, 4, 2, "ng-container", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](9, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](9, 1, ctx_r1.transactions$));
  }
}
class WalletComponent {
  constructor(fb, txService, stokvelService, userService, snack) {
    this.fb = fb;
    this.txService = txService;
    this.stokvelService = stokvelService;
    this.userService = userService;
    this.snack = snack;
    this.activeTab = 'overview';
    /** Resolved list used synchronously in deposit/transfer handlers */
    this.stokvels = [];
    this.balanceRefresh$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject(undefined);
    this.txRefresh$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject(undefined);
    this.depositSubmitting = false;
    this.transferSubmitting = false;
    /** Last deposit routing result */
    this.lastDepositResult = null;
    // stokvelId = null means "wallet only"; a chosen stokvel routes directly there
    this.depositForm = this.fb.group({
      amount: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.min(1)]],
      stokvelId: [null] // optional — null = deposit to wallet
    });
    this.transferForm = this.fb.group({
      stokvelId: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      amount: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.min(1)]],
      reference: [''],
      description: ['']
    });
    this.balance$ = this.balanceRefresh$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.switchMap)(() => this.txService.getBalance().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)({
      balance: 0
    })))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.switchMap)(res => (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)(res.balance ?? 0)));
    this.transactions$ = this.txRefresh$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.switchMap)(() => this.txService.getRecentTransactions(20).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)([])))));
    this.userStokvels$ = this.userService.user$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.switchMap)(user => user?.id ? this.stokvelService.getUserStokvels(user.id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)([]))) : (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)([])));
  }
  ngOnInit() {
    // Cache stokvels locally for form logic
    this.userStokvels$.subscribe(list => {
      this.stokvels = list;
    });
    // Deposit form: auto-fill amount when a stokvel is selected
    this.depositForm.get('stokvelId').valueChanges.subscribe(id => {
      if (id) {
        const s = this.stokvels.find(x => x.id === id);
        if (s?.monthlyContribution && !this.depositForm.get('amount').value) {
          this.depositForm.get('amount').setValue(s.monthlyContribution);
        }
      }
    });
    // Transfer form: auto-fill amount + description when stokvel changes
    this.transferForm.get('stokvelId').valueChanges.subscribe(id => {
      const s = this.stokvels.find(x => x.id === id);
      if (s?.monthlyContribution) {
        this.transferForm.get('amount').setValue(s.monthlyContribution);
        this.transferForm.get('description').setValue(`Contribution to ${s.name}`);
      }
    });
  }
  setTab(tab) {
    this.activeTab = tab;
    if (tab === 'deposit') this.lastDepositResult = null;
  }
  get selectedDepositStokvel() {
    const id = this.depositForm.get('stokvelId')?.value;
    return id ? this.stokvels.find(s => s.id === id) ?? null : null;
  }
  deposit() {
    if (this.depositForm.invalid || this.depositSubmitting) return;
    this.depositSubmitting = true;
    this.lastDepositResult = null;
    const {
      amount,
      stokvelId
    } = this.depositForm.value;
    const selectedStokvel = stokvelId ? this.stokvels.find(s => s.id === stokvelId) : null;
    // Build reference from selected stokvel name/id or leave blank for wallet-only
    const reference = selectedStokvel ? `STK-${selectedStokvel.id}` : undefined;
    this.txService.depositToWallet(amount, reference).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.finalize)(() => this.depositSubmitting = false)).subscribe({
      next: tx => {
        this.lastDepositResult = {
          routedToStokvel: tx.routedToStokvel ?? false,
          linkedStokvelName: tx.linkedStokvelName,
          routingMessage: tx.routingMessage
        };
        const msg = tx.routedToStokvel ? `✅ R${Number(amount).toLocaleString()} contributed to "${tx.linkedStokvelName}"!` : `✅ R${Number(amount).toLocaleString()} deposited to your wallet.`;
        this.snack.open(msg, 'Close', {
          duration: 5000,
          panelClass: 'success-snackbar'
        });
        this.depositForm.reset();
        this.balanceRefresh$.next();
        this.txRefresh$.next();
      },
      error: err => {
        const msg = err?.error?.message || 'Deposit failed. Please try again.';
        this.snack.open(`❌ ${msg}`, 'Close', {
          duration: 5000,
          panelClass: 'error-snackbar'
        });
      }
    });
  }
  transfer() {
    if (this.transferForm.invalid || this.transferSubmitting) return;
    this.transferSubmitting = true;
    const {
      stokvelId,
      amount,
      reference,
      description
    } = this.transferForm.value;
    // Client-side balance check before calling backend
    this.balance$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.take)(1)).subscribe(balance => {
      if (Number(amount) > balance) {
        this.transferSubmitting = false;
        this.snack.open(`❌ Insufficient balance. Available: R${Number(balance).toLocaleString('en-ZA', {
          minimumFractionDigits: 2
        })}`, 'Close', {
          duration: 5000,
          panelClass: 'error-snackbar'
        });
        return;
      }
      this.txService.transferToStokvel({
        stokvelId,
        amount,
        reference: reference || `wallet-transfer-${stokvelId}-${Date.now()}`,
        description: description || `Wallet transfer to stokvel`,
        currency: 'ZAR'
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.finalize)(() => this.transferSubmitting = false)).subscribe({
        next: () => {
          this.snack.open(`✅ R${Number(amount).toLocaleString()} transferred to stokvel!`, 'Close', {
            duration: 4000,
            panelClass: 'success-snackbar'
          });
          this.transferForm.reset();
          this.balanceRefresh$.next();
          this.txRefresh$.next();
          this.setTab('overview');
        },
        error: err => {
          const msg = err?.error?.message || 'Transfer failed. Please try again.';
          this.snack.open(`❌ ${msg}`, 'Close', {
            duration: 5000,
            panelClass: 'error-snackbar'
          });
        }
      });
    });
  }
  getTransactionIcon(type) {
    const m = {
      CREDIT: 'add_circle',
      DEBIT: 'remove_circle',
      CREDIT_REVERSAL: 'undo',
      DEBIT_REVERSAL: 'redo'
    };
    return m[type] || 'swap_horiz';
  }
  getTransactionColor(type) {
    return type === 'CREDIT' ? '#10b981' : '#ef4444';
  }
  getStatusColor(status) {
    const m = {
      COMPLETED: '#10b981',
      PENDING: '#f59e0b',
      FAILED: '#ef4444',
      REVERSED: '#8b5cf6'
    };
    return m[status] || '#6b7280';
  }
  static #_ = _staticBlock = () => (this.ɵfac = function WalletComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || WalletComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_services_stokvel_transaction_service__WEBPACK_IMPORTED_MODULE_12__.TransactionService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_services_stokvel_stokvel_service__WEBPACK_IMPORTED_MODULE_13__.StokvelService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_services_user_user_service_service__WEBPACK_IMPORTED_MODULE_14__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_15__.MatSnackBar));
  }, this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({
    type: WalletComponent,
    selectors: [["app-wallet"]],
    decls: 52,
    vars: 18,
    consts: [["noTx", ""], ["emptyHistory", ""], [1, "wallet-container"], [1, "wallet-header"], [1, "wallet-hero"], [1, "hero-bg"], [1, "floating-shape", "s1"], [1, "floating-shape", "s2"], [1, "floating-shape", "s3"], [1, "wallet-hero-content"], [1, "hero-text"], [1, "wallet-title"], [1, "wallet-subtitle"], [1, "wallet-balance-card"], [1, "balance-label"], [1, "balance-amount"], [1, "balance-actions"], ["mat-raised-button", "", "color", "primary", 3, "click"], ["mat-raised-button", "", "color", "accent", 3, "click"], [1, "wallet-tabs"], [1, "wallet-tab", 3, "click"], ["class", "wallet-content", 4, "ngIf"], [1, "wallet-content"], [1, "overview-grid"], [1, "stat-card", "glass-card"], [1, "stat-icon-wrap", "green"], [1, "stat-val"], [1, "stat-sub"], [1, "stat-icon-wrap", "blue"], [1, "stat-card", "glass-card", "action-card", 3, "click"], [1, "stat-icon-wrap", "purple"], ["mat-stroked-button", "", "color", "primary", 1, "mt-8"], [1, "stat-icon-wrap", "orange"], ["mat-stroked-button", "", "color", "accent", 1, "mt-8"], [1, "recent-tx-card", "glass-card"], ["mat-button", "", "color", "primary", 3, "click"], [4, "ngIf"], ["class", "tx-list", 4, "ngIf", "ngIfElse"], [1, "tx-list"], ["class", "tx-item", 4, "ngFor", "ngForOf"], [1, "tx-item"], [1, "tx-icon"], [1, "tx-details"], [1, "tx-desc"], [1, "tx-date"], [1, "tx-amount"], [1, "tx-status"], [1, "no-tx"], [1, "form-card", "glass-card"], [1, "form-header-icon", "green"], ["class", "routing-result", 3, "routed-stokvel", "routed-wallet", 4, "ngIf"], [1, "wallet-form", 3, "ngSubmit", "formGroup"], ["appearance", "outline", 1, "full-width"], ["formControlName", "stokvelId"], [3, "value"], [1, "stokvel-option"], [1, "option-icon", "wallet-icon"], [1, "option-text"], [1, "option-name"], [1, "option-meta"], [3, "value", 4, "ngFor", "ngForOf"], ["matPrefix", ""], ["class", "stokvel-info-chip", 4, "ngIf"], ["class", "wallet-info-chip", 4, "ngIf"], ["matInput", "", "type", "number", "formControlName", "amount", "min", "1", "placeholder", "e.g. 1500"], ["matTextPrefix", ""], ["matSuffix", ""], [1, "form-actions"], ["mat-button", "", "type", "button", 3, "click", "disabled"], ["mat-raised-button", "", "color", "primary", "type", "submit", 3, "disabled"], ["diameter", "18", 4, "ngIf"], [1, "routing-result"], [1, "option-icon", "stokvel-icon"], [1, "stokvel-info-chip"], [1, "wallet-info-chip"], ["diameter", "18"], [1, "form-header-icon", "orange"], [1, "balance-display"], ["class", "balance-warn", 4, "ngIf"], [1, "balance-warn"], ["class", "no-stokvels-warn", 4, "ngIf"], ["class", "wallet-form", 3, "formGroup", "ngSubmit", 4, "ngIf"], [1, "no-stokvels-warn"], ["routerLink", "/stokvels"], ["matInput", "", "formControlName", "description", "placeholder", "e.g. April contribution"], ["matInput", "", "formControlName", "reference", "placeholder", "e.g. ref-001"], ["mat-raised-button", "", "color", "accent", "type", "submit", 3, "disabled"], [1, "history-card", "glass-card"], ["class", "tx-table-wrap", 4, "ngIf", "ngIfElse"], [1, "tx-table-wrap"], ["mat-table", "", 1, "tx-table", 3, "dataSource"], ["matColumnDef", "type"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "description"], ["matColumnDef", "amount"], ["mat-cell", "", 3, "color", 4, "matCellDef"], ["matColumnDef", "balance"], ["matColumnDef", "status"], ["matColumnDef", "date"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], [1, "status-chip"], ["mat-header-row", ""], ["mat-row", ""]],
    template: function WalletComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "section", 2)(1, "div", 3)(2, "div", 4)(3, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](4, "div", 6)(5, "div", 7)(6, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "div", 9)(8, "div", 10)(9, "h1", 11)(10, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](11, "account_balance_wallet");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](12, " My Wallet ");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](13, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](14, "Manage your funds and contribute to stokvels");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](15, "div", 13)(16, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](17, "Available Balance");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](18, "h2", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](20, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](21, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](22, "div", 16)(23, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function WalletComponent_Template_button_click_23_listener() {
          return ctx.setTab("deposit");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](24, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](25, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](26, " Deposit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](27, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function WalletComponent_Template_button_click_27_listener() {
          return ctx.setTab("transfer");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](28, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](29, "send");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](30, " Transfer to Stokvel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](31, "div", 19)(32, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function WalletComponent_Template_button_click_32_listener() {
          return ctx.setTab("overview");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](33, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](34, "dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](35, " Overview ");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](36, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function WalletComponent_Template_button_click_36_listener() {
          return ctx.setTab("deposit");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](37, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](38, "add_circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](39, " Deposit Funds ");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](40, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function WalletComponent_Template_button_click_40_listener() {
          return ctx.setTab("transfer");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](41, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](42, "swap_horiz");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](43, " Transfer to Stokvel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](44, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function WalletComponent_Template_button_click_44_listener() {
          return ctx.setTab("history");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](45, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](46, "history");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](47, " Transaction History ");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](48, WalletComponent_div_48_Template, 58, 12, "div", 21)(49, WalletComponent_div_49_Template, 48, 13, "div", 21)(50, WalletComponent_div_50_Template, 24, 12, "div", 21)(51, WalletComponent_div_51_Template, 10, 3, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("R", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](21, 15, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](20, 13, ctx.balance$), "1.2-2"));
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassProp"]("active", ctx.activeTab === "overview");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassProp"]("active", ctx.activeTab === "deposit");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassProp"]("active", ctx.activeTab === "transfer");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassProp"]("active", ctx.activeTab === "history");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.activeTab === "overview");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.activeTab === "deposit");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.activeTab === "transfer");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.activeTab === "history");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _material_module__WEBPACK_IMPORTED_MODULE_3__.MaterialModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__.MatError, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__.MatPrefix, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__.MatSuffix, _angular_material_input__WEBPACK_IMPORTED_MODULE_17__.MatInput, _angular_material_select__WEBPACK_IMPORTED_MODULE_19__.MatSelect, _angular_material_select__WEBPACK_IMPORTED_MODULE_18__.MatOption, _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_21__.MatButton, _angular_material_card__WEBPACK_IMPORTED_MODULE_22__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_22__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_22__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_22__.MatCardSubtitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_22__.MatCardTitle, _angular_material_table__WEBPACK_IMPORTED_MODULE_23__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_23__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_23__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_23__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_23__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_23__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_23__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_23__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_23__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_23__.MatRow, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_24__.MatProgressSpinner, _angular_material_chips__WEBPACK_IMPORTED_MODULE_25__.MatChip, _angular_common__WEBPACK_IMPORTED_MODULE_0__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_0__.SlicePipe, _angular_common__WEBPACK_IMPORTED_MODULE_0__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_0__.DatePipe],
    styles: ["@charset \"UTF-8\";\n.wallet-container[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%);\n  padding-bottom: 40px;\n}\n\n\n\n.wallet-header[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #1e293b 0%, #334155 100%);\n  padding: 0;\n}\n\n.wallet-hero[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  padding: 40px 24px 32px;\n}\n\n.hero-bg[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  overflow: hidden;\n  pointer-events: none;\n}\n\n.floating-shape[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 50%;\n  background: rgba(139, 92, 246, 0.15);\n  animation: _ngcontent-%COMP%_float 8s ease-in-out infinite;\n}\n\n.s1[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 200px;\n  top: -60px;\n  right: 10%;\n  animation-delay: 0s;\n}\n\n.s2[_ngcontent-%COMP%] {\n  width: 120px;\n  height: 120px;\n  bottom: -30px;\n  left: 5%;\n  animation-delay: 2s;\n  background: rgba(59, 130, 246, 0.1);\n}\n\n.s3[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  top: 20px;\n  left: 40%;\n  animation-delay: 4s;\n  background: rgba(16, 185, 129, 0.1);\n}\n\n@keyframes _ngcontent-%COMP%_float {\n  0%, 100% {\n    transform: translateY(0) rotate(0deg);\n  }\n  50% {\n    transform: translateY(-15px) rotate(5deg);\n  }\n}\n.wallet-hero-content[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 24px;\n  max-width: 1200px;\n  margin: 0 auto;\n  flex-wrap: wrap;\n}\n\n.wallet-title[_ngcontent-%COMP%] {\n  color: #f8fafc;\n  font-size: 2rem;\n  font-weight: 700;\n  margin: 0 0 8px;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.wallet-title[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  width: 2rem;\n  height: 2rem;\n  color: #a78bfa;\n}\n\n.wallet-subtitle[_ngcontent-%COMP%] {\n  color: #94a3b8;\n  margin: 0;\n  font-size: 1rem;\n}\n\n.wallet-balance-card[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.08);\n  -webkit-backdrop-filter: blur(12px);\n          backdrop-filter: blur(12px);\n  border: 1px solid rgba(255, 255, 255, 0.12);\n  border-radius: 20px;\n  padding: 24px 32px;\n  text-align: center;\n  min-width: 280px;\n}\n\n.balance-label[_ngcontent-%COMP%] {\n  color: #94a3b8;\n  font-size: 0.85rem;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  display: block;\n  margin-bottom: 8px;\n}\n\n.balance-amount[_ngcontent-%COMP%] {\n  color: #f8fafc;\n  font-size: 2.4rem;\n  font-weight: 800;\n  margin: 0 0 20px;\n}\n\n.balance-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  justify-content: center;\n  flex-wrap: wrap;\n}\n\n\n\n.wallet-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n  padding: 16px 24px;\n  max-width: 1200px;\n  margin: 0 auto;\n  overflow-x: auto;\n}\n\n.wallet-tab[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 20px;\n  border: none;\n  border-radius: 10px;\n  background: rgba(255, 255, 255, 0.05);\n  color: #94a3b8;\n  font-size: 0.9rem;\n  font-weight: 500;\n  cursor: pointer;\n  white-space: nowrap;\n  transition: all 0.2s ease;\n}\n.wallet-tab[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.wallet-tab[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.1);\n  color: #e2e8f0;\n}\n.wallet-tab.active[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #6366f1, #8b5cf6);\n  color: #fff;\n}\n\n\n\n.wallet-content[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 24px 24px;\n}\n\n.glass-card[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.05) !important;\n  -webkit-backdrop-filter: blur(12px);\n          backdrop-filter: blur(12px);\n  border: 1px solid rgba(255, 255, 255, 0.08) !important;\n  border-radius: 16px !important;\n  color: #e2e8f0 !important;\n}\n.glass-card[_ngcontent-%COMP%]   mat-card-title[_ngcontent-%COMP%] {\n  color: #f8fafc !important;\n}\n.glass-card[_ngcontent-%COMP%]   mat-card-subtitle[_ngcontent-%COMP%] {\n  color: #94a3b8 !important;\n}\n\n\n\n.overview-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));\n  gap: 16px;\n  margin-bottom: 20px;\n}\n\n.stat-card[_ngcontent-%COMP%] {\n  padding: 8px;\n  text-align: center;\n}\n.stat-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 6px;\n}\n.stat-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #cbd5e1;\n  font-size: 0.9rem;\n  margin: 0;\n  font-weight: 500;\n}\n.stat-card[_ngcontent-%COMP%]   .stat-val[_ngcontent-%COMP%] {\n  color: #f8fafc;\n  font-size: 1.6rem;\n  font-weight: 700;\n  margin: 0;\n}\n.stat-card[_ngcontent-%COMP%]   .stat-sub[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-size: 0.8rem;\n  margin: 0;\n}\n\n.action-card[_ngcontent-%COMP%] {\n  cursor: pointer;\n  transition: transform 0.2s;\n}\n.action-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n}\n\n.mt-8[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n\n.stat-icon-wrap[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.stat-icon-wrap[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.stat-icon-wrap.green[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #10b981, #059669);\n}\n.stat-icon-wrap.blue[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #3b82f6, #2563eb);\n}\n.stat-icon-wrap.purple[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #8b5cf6, #7c3aed);\n}\n.stat-icon-wrap.orange[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #f59e0b, #d97706);\n}\n\n\n\n.recent-tx-card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.tx-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n\n.tx-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 12px;\n  background: rgba(255, 255, 255, 0.04);\n  border-radius: 10px;\n  transition: background 0.2s;\n}\n.tx-item[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.08);\n}\n\n.tx-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n  width: 24px;\n  height: 24px;\n}\n\n.tx-details[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.tx-details[_ngcontent-%COMP%]   .tx-desc[_ngcontent-%COMP%] {\n  color: #e2e8f0;\n  font-size: 0.9rem;\n  font-weight: 500;\n}\n.tx-details[_ngcontent-%COMP%]   .tx-date[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-size: 0.8rem;\n}\n\n.tx-amount[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 1rem;\n}\n\n.status-chip[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 600;\n}\n\n.no-tx[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 12px;\n  padding: 40px 20px;\n  color: #64748b;\n  text-align: center;\n}\n.no-tx[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 48px;\n  width: 48px;\n  height: 48px;\n  opacity: 0.5;\n}\n.no-tx[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n\n\n.form-card[_ngcontent-%COMP%] {\n  max-width: 560px;\n  margin: 0 auto;\n}\n.form-card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  margin-bottom: 8px;\n}\n\n.form-header-icon[_ngcontent-%COMP%] {\n  width: 52px;\n  height: 52px;\n  border-radius: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.form-header-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 26px;\n  width: 26px;\n  height: 26px;\n}\n.form-header-icon.green[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #10b981, #059669);\n}\n.form-header-icon.orange[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #f59e0b, #d97706);\n}\n\n.wallet-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  margin-top: 16px;\n}\n.wallet-form[_ngcontent-%COMP%]   .full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.info-banner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 10px;\n  background: rgba(59, 130, 246, 0.1);\n  border: 1px solid rgba(59, 130, 246, 0.25);\n  border-radius: 10px;\n  padding: 12px 16px;\n  color: #93c5fd;\n  font-size: 0.875rem;\n  margin-bottom: 8px;\n}\n.info-banner[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  margin-top: 1px;\n}\n\n.balance-display[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: rgba(16, 185, 129, 0.08);\n  border: 1px solid rgba(16, 185, 129, 0.2);\n  border-radius: 10px;\n  padding: 10px 14px;\n  color: #34d399;\n  font-size: 0.9rem;\n  margin-bottom: 16px;\n}\n.balance-display[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.balance-display[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #6ee7b7;\n}\n\n.no-stokvels-warn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  background: rgba(245, 158, 11, 0.08);\n  border: 1px solid rgba(245, 158, 11, 0.25);\n  border-radius: 10px;\n  padding: 14px 16px;\n  color: #fcd34d;\n  font-size: 0.9rem;\n}\n.no-stokvels-warn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n}\n.no-stokvels-warn[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #fbbf24;\n  text-decoration: underline;\n}\n\n.routing-result[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  border-radius: 12px;\n  padding: 14px 16px;\n  margin-bottom: 16px;\n  font-size: 0.9rem;\n}\n.routing-result[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  font-size: 22px;\n  width: 22px;\n  height: 22px;\n  margin-top: 2px;\n}\n.routing-result[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 4px;\n  font-size: 0.95rem;\n}\n.routing-result[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  opacity: 0.85;\n}\n.routing-result.routed-stokvel[_ngcontent-%COMP%] {\n  background: rgba(16, 185, 129, 0.1);\n  border: 1px solid rgba(16, 185, 129, 0.3);\n  color: #34d399;\n}\n.routing-result.routed-wallet[_ngcontent-%COMP%] {\n  background: rgba(59, 130, 246, 0.1);\n  border: 1px solid rgba(59, 130, 246, 0.3);\n  color: #93c5fd;\n}\n\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n  margin-top: 8px;\n}\n\n.stokvel-option[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 4px 0;\n}\n.stokvel-option[_ngcontent-%COMP%]   .option-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n  flex-shrink: 0;\n}\n.stokvel-option[_ngcontent-%COMP%]   .option-icon.wallet-icon[_ngcontent-%COMP%] {\n  color: #6366f1;\n}\n.stokvel-option[_ngcontent-%COMP%]   .option-icon.stokvel-icon[_ngcontent-%COMP%] {\n  color: #10b981;\n}\n.stokvel-option[_ngcontent-%COMP%]   .option-text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.stokvel-option[_ngcontent-%COMP%]   .option-text[_ngcontent-%COMP%]   .option-name[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 0.9rem;\n}\n.stokvel-option[_ngcontent-%COMP%]   .option-text[_ngcontent-%COMP%]   .option-meta[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #64748b;\n}\n\n.stokvel-info-chip[_ngcontent-%COMP%], .wallet-info-chip[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 8px;\n  border-radius: 10px;\n  padding: 10px 14px;\n  font-size: 0.85rem;\n  margin-bottom: 8px;\n}\n.stokvel-info-chip[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], .wallet-info-chip[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n  flex-shrink: 0;\n  margin-top: 1px;\n}\n\n.stokvel-info-chip[_ngcontent-%COMP%] {\n  background: rgba(16, 185, 129, 0.08);\n  border: 1px solid rgba(16, 185, 129, 0.2);\n  color: #6ee7b7;\n}\n.stokvel-info-chip[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #34d399;\n}\n\n.wallet-info-chip[_ngcontent-%COMP%] {\n  background: rgba(99, 102, 241, 0.08);\n  border: 1px solid rgba(99, 102, 241, 0.2);\n  color: #a5b4fc;\n}\n\n\n\n.tx-table-wrap[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n\n.tx-table[_ngcontent-%COMP%] {\n  width: 100%;\n  background: transparent !important;\n}\n.tx-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  color: #94a3b8 !important;\n  font-weight: 600;\n}\n.tx-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  color: #e2e8f0 !important;\n}\n.tx-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.04) !important;\n}\n\n\n\n  .wallet-form .mat-mdc-form-field-subscript-wrapper {\n  margin-bottom: 4px;\n}\n  .wallet-form .mat-mdc-text-field-wrapper {\n  background: rgba(255, 255, 255, 0.05) !important;\n}\n  .wallet-form .mat-mdc-form-field-label {\n  color: #94a3b8 !important;\n}\n  .wallet-form input {\n  color: #f8fafc !important;\n}\n\n\n\n@media (max-width: 768px) {\n  .wallet-hero-content[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .wallet-balance-card[_ngcontent-%COMP%] {\n    width: 100%;\n    min-width: unset;\n  }\n  .wallet-tabs[_ngcontent-%COMP%] {\n    padding: 12px;\n  }\n  .wallet-tab[_ngcontent-%COMP%] {\n    padding: 8px 14px;\n    font-size: 0.8rem;\n  }\n  .wallet-content[_ngcontent-%COMP%] {\n    padding: 0 12px 20px;\n  }\n  .overview-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy93YWxsZXQvd2FsbGV0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUFoQjtFQUNFLGlCQUFBO0VBQ0EsMEVBQUE7RUFDQSxvQkFBQTtBQUVGOztBQUNBLCtEQUFBO0FBQ0E7RUFDRSw2REFBQTtFQUNBLFVBQUE7QUFFRjs7QUFDQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQUVGOztBQUNBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtBQUVGOztBQUNBO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG9DQUFBO0VBQ0Esd0NBQUE7QUFFRjs7QUFBQTtFQUFNLFlBQUE7RUFBYyxhQUFBO0VBQWUsVUFBQTtFQUFZLFVBQUE7RUFBWSxtQkFBQTtBQVEzRDs7QUFQQTtFQUFNLFlBQUE7RUFBYyxhQUFBO0VBQWUsYUFBQTtFQUFlLFFBQUE7RUFBVSxtQkFBQTtFQUFxQixtQ0FBQTtBQWdCakY7O0FBZkE7RUFBTSxXQUFBO0VBQWEsWUFBQTtFQUFjLFNBQUE7RUFBVyxTQUFBO0VBQVcsbUJBQUE7RUFBcUIsbUNBQUE7QUF3QjVFOztBQXRCQTtFQUNFO0lBQVcscUNBQUE7RUEwQlg7RUF6QkE7SUFBTSx5Q0FBQTtFQTRCTjtBQUNGO0FBMUJBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsdUJBQUE7RUFDQSxTQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQTRCRjs7QUF6QkE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7QUE0QkY7QUExQkU7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FBNEJKOztBQXhCQTtFQUNFLGNBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtBQTJCRjs7QUF4QkE7RUFDRSxxQ0FBQTtFQUNBLG1DQUFBO1VBQUEsMkJBQUE7RUFDQSwyQ0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBMkJGOztBQXhCQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUEyQkY7O0FBeEJBO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQTJCRjs7QUF4QkE7RUFDRSxhQUFBO0VBQ0EsU0FBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtBQTJCRjs7QUF4QkEsaUVBQUE7QUFDQTtFQUNFLGFBQUE7RUFDQSxRQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQTJCRjs7QUF4QkE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQ0FBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QUEyQkY7QUF6QkU7RUFBVyxlQUFBO0VBQWlCLFdBQUE7RUFBYSxZQUFBO0FBOEIzQztBQTVCRTtFQUNFLG9DQUFBO0VBQ0EsY0FBQTtBQThCSjtBQTNCRTtFQUNFLHFEQUFBO0VBQ0EsV0FBQTtBQTZCSjs7QUF6QkEsaUVBQUE7QUFDQTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0FBNEJGOztBQXpCQTtFQUNFLGdEQUFBO0VBQ0EsbUNBQUE7VUFBQSwyQkFBQTtFQUNBLHNEQUFBO0VBQ0EsOEJBQUE7RUFDQSx5QkFBQTtBQTRCRjtBQTFCRTtFQUFpQix5QkFBQTtBQTZCbkI7QUE1QkU7RUFBb0IseUJBQUE7QUErQnRCOztBQTVCQSxpRUFBQTtBQUNBO0VBQ0UsYUFBQTtFQUNBLDREQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0FBK0JGOztBQTVCQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtBQStCRjtBQTdCRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtBQStCSjtBQTVCRTtFQUFLLGNBQUE7RUFBZ0IsaUJBQUE7RUFBbUIsU0FBQTtFQUFXLGdCQUFBO0FBa0NyRDtBQWpDRTtFQUFZLGNBQUE7RUFBZ0IsaUJBQUE7RUFBbUIsZ0JBQUE7RUFBa0IsU0FBQTtBQXVDbkU7QUF0Q0U7RUFBWSxjQUFBO0VBQWdCLGlCQUFBO0VBQW1CLFNBQUE7QUEyQ2pEOztBQXhDQTtFQUFlLGVBQUE7RUFBaUIsMEJBQUE7QUE2Q2hDO0FBN0M0RDtFQUFVLDJCQUFBO0FBZ0R0RTs7QUE5Q0E7RUFBUSxlQUFBO0FBa0RSOztBQWhEQTtFQUNFLFdBQUE7RUFBYSxZQUFBO0VBQ2IsbUJBQUE7RUFDQSxhQUFBO0VBQWUsbUJBQUE7RUFBcUIsdUJBQUE7QUFzRHRDO0FBckRFO0VBQVcsV0FBQTtBQXdEYjtBQXRERTtFQUFVLHFEQUFBO0FBeURaO0FBeERFO0VBQVUscURBQUE7QUEyRFo7QUExREU7RUFBVyxxREFBQTtBQTZEYjtBQTVERTtFQUFXLHFEQUFBO0FBK0RiOztBQTVEQSxpRUFBQTtBQUVFO0VBQWtCLGFBQUE7RUFBZSw4QkFBQTtFQUFnQyxtQkFBQTtBQWlFbkU7O0FBOURBO0VBQVcsYUFBQTtFQUFlLHNCQUFBO0VBQXdCLFNBQUE7QUFvRWxEOztBQWxFQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0EscUNBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0FBcUVGO0FBcEVFO0VBQVUscUNBQUE7QUF1RVo7O0FBbkVFO0VBQVcsZUFBQTtFQUFpQixXQUFBO0VBQWEsWUFBQTtBQXlFM0M7O0FBdEVBO0VBQ0UsT0FBQTtBQXlFRjtBQXhFRTtFQUFXLGNBQUE7RUFBZ0IsaUJBQUE7RUFBbUIsZ0JBQUE7QUE2RWhEO0FBNUVFO0VBQVcsY0FBQTtFQUFnQixpQkFBQTtBQWdGN0I7O0FBN0VBO0VBQWEsZ0JBQUE7RUFBa0IsZUFBQTtBQWtGL0I7O0FBaEZBO0VBQWUsa0JBQUE7RUFBb0IsZ0JBQUE7QUFxRm5DOztBQW5GQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBc0ZGO0FBcEZFO0VBQVcsZUFBQTtFQUFpQixXQUFBO0VBQWEsWUFBQTtFQUFjLFlBQUE7QUEwRnpEO0FBekZFO0VBQUksU0FBQTtBQTRGTjs7QUF6RkEsaUVBQUE7QUFDQTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtBQTRGRjtBQTFGRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtBQTRGSjs7QUF4RkE7RUFDRSxXQUFBO0VBQWEsWUFBQTtFQUNiLG1CQUFBO0VBQ0EsYUFBQTtFQUFlLG1CQUFBO0VBQXFCLHVCQUFBO0VBQ3BDLGNBQUE7QUE4RkY7QUE3RkU7RUFBVyxXQUFBO0VBQWEsZUFBQTtFQUFpQixXQUFBO0VBQWEsWUFBQTtBQW1HeEQ7QUFqR0U7RUFBVSxxREFBQTtBQW9HWjtBQW5HRTtFQUFXLHFEQUFBO0FBc0diOztBQW5HQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFFBQUE7RUFDQSxnQkFBQTtBQXNHRjtBQXBHRTtFQUFjLFdBQUE7QUF1R2hCOztBQXBHQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLFNBQUE7RUFDQSxtQ0FBQTtFQUNBLDBDQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBdUdGO0FBckdFO0VBQVcsY0FBQTtFQUFnQixlQUFBO0VBQWlCLFdBQUE7RUFBYSxZQUFBO0VBQWMsZUFBQTtBQTRHekU7O0FBekdBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtFQUNBLG9DQUFBO0VBQ0EseUNBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUE0R0Y7QUExR0U7RUFBVyxlQUFBO0VBQWlCLFdBQUE7RUFBYSxZQUFBO0FBK0czQztBQTlHRTtFQUFTLGNBQUE7QUFpSFg7O0FBOUdBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLG9DQUFBO0VBQ0EsMENBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBaUhGO0FBL0dFO0VBQVcsY0FBQTtBQWtIYjtBQWpIRTtFQUFJLGNBQUE7RUFBZ0IsMEJBQUE7QUFxSHRCOztBQWxIQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQXFIRjtBQW5IRTtFQUFXLGNBQUE7RUFBZ0IsZUFBQTtFQUFpQixXQUFBO0VBQWEsWUFBQTtFQUFjLGVBQUE7QUEwSHpFO0FBeEhFO0VBQVMsY0FBQTtFQUFnQixrQkFBQTtFQUFvQixrQkFBQTtBQTZIL0M7QUE1SEU7RUFBSSxTQUFBO0VBQVcsYUFBQTtBQWdJakI7QUE5SEU7RUFDRSxtQ0FBQTtFQUNBLHlDQUFBO0VBQ0EsY0FBQTtBQWdJSjtBQTdIRTtFQUNFLG1DQUFBO0VBQ0EseUNBQUE7RUFDQSxjQUFBO0FBK0hKOztBQTNIQTtFQUNFLGFBQUE7RUFDQSx5QkFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0FBOEhGOztBQTNIQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxjQUFBO0FBOEhGO0FBNUhFO0VBQ0UsZUFBQTtFQUFpQixXQUFBO0VBQWEsWUFBQTtFQUFjLGNBQUE7QUFpSWhEO0FBaElJO0VBQWlCLGNBQUE7QUFtSXJCO0FBbElJO0VBQWlCLGNBQUE7QUFxSXJCO0FBbElFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0FBb0lKO0FBbklJO0VBQWUsZ0JBQUE7RUFBa0IsaUJBQUE7QUF1SXJDO0FBdElJO0VBQWUsa0JBQUE7RUFBb0IsY0FBQTtBQTBJdkM7O0FBdElBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsUUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBeUlGO0FBdklFO0VBQVcsZUFBQTtFQUFpQixXQUFBO0VBQWEsWUFBQTtFQUFjLGNBQUE7RUFBZ0IsZUFBQTtBQThJekU7O0FBM0lBO0VBQ0Usb0NBQUE7RUFDQSx5Q0FBQTtFQUNBLGNBQUE7QUE4SUY7QUE3SUU7RUFBUyxjQUFBO0FBZ0pYOztBQTdJQTtFQUNFLG9DQUFBO0VBQ0EseUNBQUE7RUFDQSxjQUFBO0FBZ0pGOztBQTdJQSxrRUFBQTtBQUNBO0VBQWlCLGdCQUFBO0FBaUpqQjs7QUEvSUE7RUFDRSxXQUFBO0VBQ0Esa0NBQUE7QUFrSkY7QUFoSkU7RUFBSyx5QkFBQTtFQUEyQixnQkFBQTtBQW9KbEM7QUFuSkU7RUFBSyx5QkFBQTtBQXNKUDtBQXJKRTtFQUFjLGdEQUFBO0FBd0poQjs7QUFySkEsbUVBQUE7QUFFRTtFQUF3QyxrQkFBQTtBQXdKMUM7QUF2SkU7RUFBOEIsZ0RBQUE7QUEwSmhDO0FBekpFO0VBQTRCLHlCQUFBO0FBNEo5QjtBQTNKRTtFQUFRLHlCQUFBO0FBOEpWOztBQTNKQSxtRUFBQTtBQUNBO0VBQ0U7SUFBdUIsc0JBQUE7RUErSnZCO0VBOUpBO0lBQXVCLFdBQUE7SUFBYSxnQkFBQTtFQWtLcEM7RUFqS0E7SUFBZSxhQUFBO0VBb0tmO0VBbktBO0lBQWMsaUJBQUE7SUFBbUIsaUJBQUE7RUF1S2pDO0VBdEtBO0lBQWtCLG9CQUFBO0VBeUtsQjtFQXhLQTtJQUFpQiw4QkFBQTtFQTJLakI7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi53YWxsZXQtY29udGFpbmVyIHtcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMGYxNzJhIDAlLCAjMWUyOTNiIDUwJSwgIzBmMTcyYSAxMDAlKTtcclxuICBwYWRkaW5nLWJvdHRvbTogNDBweDtcclxufVxyXG5cclxuLyogw6LClMKAw6LClMKAw6LClMKAIEhlYWRlciDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoAgKi9cclxuLndhbGxldC1oZWFkZXIge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMxZTI5M2IgMCUsICMzMzQxNTUgMTAwJSk7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLndhbGxldC1oZXJvIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBwYWRkaW5nOiA0MHB4IDI0cHggMzJweDtcclxufVxyXG5cclxuLmhlcm8tYmcge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBpbnNldDogMDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG59XHJcblxyXG4uZmxvYXRpbmctc2hhcGUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgxMzksIDkyLCAyNDYsIDAuMTUpO1xyXG4gIGFuaW1hdGlvbjogZmxvYXQgOHMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XHJcbn1cclxuLnMxIHsgd2lkdGg6IDIwMHB4OyBoZWlnaHQ6IDIwMHB4OyB0b3A6IC02MHB4OyByaWdodDogMTAlOyBhbmltYXRpb24tZGVsYXk6IDBzOyB9XHJcbi5zMiB7IHdpZHRoOiAxMjBweDsgaGVpZ2h0OiAxMjBweDsgYm90dG9tOiAtMzBweDsgbGVmdDogNSU7IGFuaW1hdGlvbi1kZWxheTogMnM7IGJhY2tncm91bmQ6IHJnYmEoNTksIDEzMCwgMjQ2LCAwLjEpOyB9XHJcbi5zMyB7IHdpZHRoOiA4MHB4OyBoZWlnaHQ6IDgwcHg7IHRvcDogMjBweDsgbGVmdDogNDAlOyBhbmltYXRpb24tZGVsYXk6IDRzOyBiYWNrZ3JvdW5kOiByZ2JhKDE2LCAxODUsIDEyOSwgMC4xKTsgfVxyXG5cclxuQGtleWZyYW1lcyBmbG9hdCB7XHJcbiAgMCUsIDEwMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCkgcm90YXRlKDBkZWcpOyB9XHJcbiAgNTAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xNXB4KSByb3RhdGUoNWRlZyk7IH1cclxufVxyXG5cclxuLndhbGxldC1oZXJvLWNvbnRlbnQge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiAxO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gIGdhcDogMjRweDtcclxuICBtYXgtd2lkdGg6IDEyMDBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbn1cclxuXHJcbi53YWxsZXQtdGl0bGUge1xyXG4gIGNvbG9yOiAjZjhmYWZjO1xyXG4gIGZvbnQtc2l6ZTogMnJlbTtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIG1hcmdpbjogMCAwIDhweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAxMnB4O1xyXG5cclxuICBtYXQtaWNvbiB7XHJcbiAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICB3aWR0aDogMnJlbTtcclxuICAgIGhlaWdodDogMnJlbTtcclxuICAgIGNvbG9yOiAjYTc4YmZhO1xyXG4gIH1cclxufVxyXG5cclxuLndhbGxldC1zdWJ0aXRsZSB7XHJcbiAgY29sb3I6ICM5NGEzYjg7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxufVxyXG5cclxuLndhbGxldC1iYWxhbmNlLWNhcmQge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsMC4wOCk7XHJcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEycHgpO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC4xMik7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBwYWRkaW5nOiAyNHB4IDMycHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1pbi13aWR0aDogMjgwcHg7XHJcbn1cclxuXHJcbi5iYWxhbmNlLWxhYmVsIHtcclxuICBjb2xvcjogIzk0YTNiODtcclxuICBmb250LXNpemU6IDAuODVyZW07XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBsZXR0ZXItc3BhY2luZzogMC4wOGVtO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbi1ib3R0b206IDhweDtcclxufVxyXG5cclxuLmJhbGFuY2UtYW1vdW50IHtcclxuICBjb2xvcjogI2Y4ZmFmYztcclxuICBmb250LXNpemU6IDIuNHJlbTtcclxuICBmb250LXdlaWdodDogODAwO1xyXG4gIG1hcmdpbjogMCAwIDIwcHg7XHJcbn1cclxuXHJcbi5iYWxhbmNlLWFjdGlvbnMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZ2FwOiAxMnB4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxufVxyXG5cclxuLyogw6LClMKAw6LClMKAw6LClMKAIFRhYnMgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAICovXHJcbi53YWxsZXQtdGFicyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBnYXA6IDRweDtcclxuICBwYWRkaW5nOiAxNnB4IDI0cHg7XHJcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgb3ZlcmZsb3cteDogYXV0bztcclxufVxyXG5cclxuLndhbGxldC10YWIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDhweDtcclxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwwLjA1KTtcclxuICBjb2xvcjogIzk0YTNiODtcclxuICBmb250LXNpemU6IDAuOXJlbTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XHJcblxyXG4gIG1hdC1pY29uIHsgZm9udC1zaXplOiAxOHB4OyB3aWR0aDogMThweDsgaGVpZ2h0OiAxOHB4OyB9XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwwLjEpO1xyXG4gICAgY29sb3I6ICNlMmU4ZjA7XHJcbiAgfVxyXG5cclxuICAmLmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjNjM2NmYxLCAjOGI1Y2Y2KTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gIH1cclxufVxyXG5cclxuLyogw6LClMKAw6LClMKAw6LClMKAIENvbnRlbnQgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAICovXHJcbi53YWxsZXQtY29udGVudCB7XHJcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgcGFkZGluZzogMCAyNHB4IDI0cHg7XHJcbn1cclxuXHJcbi5nbGFzcy1jYXJkIHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuMDUpICFpbXBvcnRhbnQ7XHJcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEycHgpO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC4wOCkgIWltcG9ydGFudDtcclxuICBib3JkZXItcmFkaXVzOiAxNnB4ICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6ICNlMmU4ZjAgIWltcG9ydGFudDtcclxuXHJcbiAgbWF0LWNhcmQtdGl0bGUgeyBjb2xvcjogI2Y4ZmFmYyAhaW1wb3J0YW50OyB9XHJcbiAgbWF0LWNhcmQtc3VidGl0bGUgeyBjb2xvcjogIzk0YTNiOCAhaW1wb3J0YW50OyB9XHJcbn1cclxuXHJcbi8qIMOiwpTCgMOiwpTCgMOiwpTCgCBPdmVydmlldyBncmlkIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgCAqL1xyXG4ub3ZlcnZpZXctZ3JpZCB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgyMjBweCwgMWZyKSk7XHJcbiAgZ2FwOiAxNnB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi5zdGF0LWNhcmQge1xyXG4gIHBhZGRpbmc6IDhweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gIG1hdC1jYXJkLWNvbnRlbnQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiA2cHg7XHJcbiAgfVxyXG5cclxuICBoMyB7IGNvbG9yOiAjY2JkNWUxOyBmb250LXNpemU6IDAuOXJlbTsgbWFyZ2luOiAwOyBmb250LXdlaWdodDogNTAwOyB9XHJcbiAgLnN0YXQtdmFsIHsgY29sb3I6ICNmOGZhZmM7IGZvbnQtc2l6ZTogMS42cmVtOyBmb250LXdlaWdodDogNzAwOyBtYXJnaW46IDA7IH1cclxuICAuc3RhdC1zdWIgeyBjb2xvcjogIzY0NzQ4YjsgZm9udC1zaXplOiAwLjhyZW07IG1hcmdpbjogMDsgfVxyXG59XHJcblxyXG4uYWN0aW9uLWNhcmQgeyBjdXJzb3I6IHBvaW50ZXI7IHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzOyAmOmhvdmVyIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpOyB9IH1cclxuXHJcbi5tdC04IHsgbWFyZ2luLXRvcDogOHB4OyB9XHJcblxyXG4uc3RhdC1pY29uLXdyYXAge1xyXG4gIHdpZHRoOiA0OHB4OyBoZWlnaHQ6IDQ4cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBtYXQtaWNvbiB7IGNvbG9yOiAjZmZmOyB9XHJcblxyXG4gICYuZ3JlZW4geyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMTBiOTgxLCAjMDU5NjY5KTsgfVxyXG4gICYuYmx1ZSAgeyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjM2I4MmY2LCAjMjU2M2ViKTsgfVxyXG4gICYucHVycGxlIHsgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzhiNWNmNiwgIzdjM2FlZCk7IH1cclxuICAmLm9yYW5nZSB7IGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNmNTllMGIsICNkOTc3MDYpOyB9XHJcbn1cclxuXHJcbi8qIMOiwpTCgMOiwpTCgMOiwpTCgCBUcmFuc2FjdGlvbnMgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAICovXHJcbi5yZWNlbnQtdHgtY2FyZCB7XHJcbiAgbWF0LWNhcmQtaGVhZGVyIHsgZGlzcGxheTogZmxleDsganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyBhbGlnbi1pdGVtczogY2VudGVyOyB9XHJcbn1cclxuXHJcbi50eC1saXN0IHsgZGlzcGxheTogZmxleDsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgZ2FwOiAxMnB4OyB9XHJcblxyXG4udHgtaXRlbSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMTZweDtcclxuICBwYWRkaW5nOiAxMnB4O1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsMC4wNCk7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMnM7XHJcbiAgJjpob3ZlciB7IGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsMC4wOCk7IH1cclxufVxyXG5cclxuLnR4LWljb24ge1xyXG4gIG1hdC1pY29uIHsgZm9udC1zaXplOiAyNHB4OyB3aWR0aDogMjRweDsgaGVpZ2h0OiAyNHB4OyB9XHJcbn1cclxuXHJcbi50eC1kZXRhaWxzIHtcclxuICBmbGV4OiAxO1xyXG4gIC50eC1kZXNjIHsgY29sb3I6ICNlMmU4ZjA7IGZvbnQtc2l6ZTogMC45cmVtOyBmb250LXdlaWdodDogNTAwOyB9XHJcbiAgLnR4LWRhdGUgeyBjb2xvcjogIzY0NzQ4YjsgZm9udC1zaXplOiAwLjhyZW07IH1cclxufVxyXG5cclxuLnR4LWFtb3VudCB7IGZvbnQtd2VpZ2h0OiA3MDA7IGZvbnQtc2l6ZTogMXJlbTsgfVxyXG5cclxuLnN0YXR1cy1jaGlwIHsgZm9udC1zaXplOiAwLjc1cmVtOyBmb250LXdlaWdodDogNjAwOyB9XHJcblxyXG4ubm8tdHgge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMTJweDtcclxuICBwYWRkaW5nOiA0MHB4IDIwcHg7XHJcbiAgY29sb3I6ICM2NDc0OGI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICBtYXQtaWNvbiB7IGZvbnQtc2l6ZTogNDhweDsgd2lkdGg6IDQ4cHg7IGhlaWdodDogNDhweDsgb3BhY2l0eTogMC41OyB9XHJcbiAgcCB7IG1hcmdpbjogMDsgfVxyXG59XHJcblxyXG4vKiDDosKUwoDDosKUwoDDosKUwoAgRm9ybXMgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAICovXHJcbi5mb3JtLWNhcmQge1xyXG4gIG1heC13aWR0aDogNTYwcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcblxyXG4gIG1hdC1jYXJkLWhlYWRlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdhcDogMTZweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxuICB9XHJcbn1cclxuXHJcbi5mb3JtLWhlYWRlci1pY29uIHtcclxuICB3aWR0aDogNTJweDsgaGVpZ2h0OiA1MnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDE0cHg7XHJcbiAgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZmxleC1zaHJpbms6IDA7XHJcbiAgbWF0LWljb24geyBjb2xvcjogI2ZmZjsgZm9udC1zaXplOiAyNnB4OyB3aWR0aDogMjZweDsgaGVpZ2h0OiAyNnB4OyB9XHJcblxyXG4gICYuZ3JlZW4geyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMTBiOTgxLCAjMDU5NjY5KTsgfVxyXG4gICYub3JhbmdlIHsgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2Y1OWUwYiwgI2Q5NzcwNik7IH1cclxufVxyXG5cclxuLndhbGxldC1mb3JtIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZ2FwOiA0cHg7XHJcbiAgbWFyZ2luLXRvcDogMTZweDtcclxuXHJcbiAgLmZ1bGwtd2lkdGggeyB3aWR0aDogMTAwJTsgfVxyXG59XHJcblxyXG4uaW5mby1iYW5uZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgZ2FwOiAxMHB4O1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoNTksIDEzMCwgMjQ2LCAwLjEpO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoNTksIDEzMCwgMjQ2LCAwLjI1KTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIHBhZGRpbmc6IDEycHggMTZweDtcclxuICBjb2xvcjogIzkzYzVmZDtcclxuICBmb250LXNpemU6IDAuODc1cmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDhweDtcclxuXHJcbiAgbWF0LWljb24geyBmbGV4LXNocmluazogMDsgZm9udC1zaXplOiAxOHB4OyB3aWR0aDogMThweDsgaGVpZ2h0OiAxOHB4OyBtYXJnaW4tdG9wOiAxcHg7IH1cclxufVxyXG5cclxuLmJhbGFuY2UtZGlzcGxheSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogOHB4O1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMTYsIDE4NSwgMTI5LCAwLjA4KTtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDE2LCAxODUsIDEyOSwgMC4yKTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIHBhZGRpbmc6IDEwcHggMTRweDtcclxuICBjb2xvcjogIzM0ZDM5OTtcclxuICBmb250LXNpemU6IDAuOXJlbTtcclxuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG5cclxuICBtYXQtaWNvbiB7IGZvbnQtc2l6ZTogMThweDsgd2lkdGg6IDE4cHg7IGhlaWdodDogMThweDsgfVxyXG4gIHN0cm9uZyB7IGNvbG9yOiAjNmVlN2I3OyB9XHJcbn1cclxuXHJcbi5uby1zdG9rdmVscy13YXJuIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAxMHB4O1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjQ1LCAxNTgsIDExLCAwLjA4KTtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI0NSwgMTU4LCAxMSwgMC4yNSk7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBwYWRkaW5nOiAxNHB4IDE2cHg7XHJcbiAgY29sb3I6ICNmY2QzNGQ7XHJcbiAgZm9udC1zaXplOiAwLjlyZW07XHJcblxyXG4gIG1hdC1pY29uIHsgZmxleC1zaHJpbms6IDA7IH1cclxuICBhIHsgY29sb3I6ICNmYmJmMjQ7IHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyB9XHJcbn1cclxuXHJcbi5yb3V0aW5nLXJlc3VsdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICBnYXA6IDEycHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICBwYWRkaW5nOiAxNHB4IDE2cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxuICBmb250LXNpemU6IDAuOXJlbTtcclxuXHJcbiAgbWF0LWljb24geyBmbGV4LXNocmluazogMDsgZm9udC1zaXplOiAyMnB4OyB3aWR0aDogMjJweDsgaGVpZ2h0OiAyMnB4OyBtYXJnaW4tdG9wOiAycHg7IH1cclxuXHJcbiAgc3Ryb25nIHsgZGlzcGxheTogYmxvY2s7IG1hcmdpbi1ib3R0b206IDRweDsgZm9udC1zaXplOiAwLjk1cmVtOyB9XHJcbiAgcCB7IG1hcmdpbjogMDsgb3BhY2l0eTogMC44NTsgfVxyXG5cclxuICAmLnJvdXRlZC1zdG9rdmVsIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMTYsIDE4NSwgMTI5LCAwLjEpO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxNiwgMTg1LCAxMjksIDAuMyk7XHJcbiAgICBjb2xvcjogIzM0ZDM5OTtcclxuICB9XHJcblxyXG4gICYucm91dGVkLXdhbGxldCB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDU5LCAxMzAsIDI0NiwgMC4xKTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoNTksIDEzMCwgMjQ2LCAwLjMpO1xyXG4gICAgY29sb3I6ICM5M2M1ZmQ7XHJcbiAgfVxyXG59XHJcblxyXG4uZm9ybS1hY3Rpb25zIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgZ2FwOiAxMnB4O1xyXG4gIG1hcmdpbi10b3A6IDhweDtcclxufVxyXG5cclxuLnN0b2t2ZWwtb3B0aW9uIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAxMHB4O1xyXG4gIHBhZGRpbmc6IDRweCAwO1xyXG5cclxuICAub3B0aW9uLWljb24ge1xyXG4gICAgZm9udC1zaXplOiAyMHB4OyB3aWR0aDogMjBweDsgaGVpZ2h0OiAyMHB4OyBmbGV4LXNocmluazogMDtcclxuICAgICYud2FsbGV0LWljb24gIHsgY29sb3I6ICM2MzY2ZjE7IH1cclxuICAgICYuc3Rva3ZlbC1pY29uIHsgY29sb3I6ICMxMGI5ODE7IH1cclxuICB9XHJcblxyXG4gIC5vcHRpb24tdGV4dCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIC5vcHRpb24tbmFtZSB7IGZvbnQtd2VpZ2h0OiA1MDA7IGZvbnQtc2l6ZTogMC45cmVtOyB9XHJcbiAgICAub3B0aW9uLW1ldGEgeyBmb250LXNpemU6IDAuNzVyZW07IGNvbG9yOiAjNjQ3NDhiOyB9XHJcbiAgfVxyXG59XHJcblxyXG4uc3Rva3ZlbC1pbmZvLWNoaXAsIC53YWxsZXQtaW5mby1jaGlwIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gIGdhcDogOHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgcGFkZGluZzogMTBweCAxNHB4O1xyXG4gIGZvbnQtc2l6ZTogMC44NXJlbTtcclxuICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcblxyXG4gIG1hdC1pY29uIHsgZm9udC1zaXplOiAxNnB4OyB3aWR0aDogMTZweDsgaGVpZ2h0OiAxNnB4OyBmbGV4LXNocmluazogMDsgbWFyZ2luLXRvcDogMXB4OyB9XHJcbn1cclxuXHJcbi5zdG9rdmVsLWluZm8tY2hpcCB7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgxNiwgMTg1LCAxMjksIDAuMDgpO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTYsIDE4NSwgMTI5LCAwLjIpO1xyXG4gIGNvbG9yOiAjNmVlN2I3O1xyXG4gIHN0cm9uZyB7IGNvbG9yOiAjMzRkMzk5OyB9XHJcbn1cclxuXHJcbi53YWxsZXQtaW5mby1jaGlwIHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDk5LCAxMDIsIDI0MSwgMC4wOCk7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSg5OSwgMTAyLCAyNDEsIDAuMik7XHJcbiAgY29sb3I6ICNhNWI0ZmM7XHJcbn1cclxuXHJcbi8qIMOiwpTCgMOiwpTCgMOiwpTCgCBIaXN0b3J5IHRhYmxlIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgCAqL1xyXG4udHgtdGFibGUtd3JhcCB7IG92ZXJmbG93LXg6IGF1dG87IH1cclxuXHJcbi50eC10YWJsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuXHJcbiAgdGggeyBjb2xvcjogIzk0YTNiOCAhaW1wb3J0YW50OyBmb250LXdlaWdodDogNjAwOyB9XHJcbiAgdGQgeyBjb2xvcjogI2UyZThmMCAhaW1wb3J0YW50OyB9XHJcbiAgdHI6aG92ZXIgdGQgeyBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuMDQpICFpbXBvcnRhbnQ7IH1cclxufVxyXG5cclxuLyogw6LClMKAw6LClMKAw6LClMKAIEZvcm0gZmllbGQgb3ZlcnJpZGUgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAICovXHJcbjo6bmctZGVlcCAud2FsbGV0LWZvcm0ge1xyXG4gIC5tYXQtbWRjLWZvcm0tZmllbGQtc3Vic2NyaXB0LXdyYXBwZXIgeyBtYXJnaW4tYm90dG9tOiA0cHg7IH1cclxuICAubWF0LW1kYy10ZXh0LWZpZWxkLXdyYXBwZXIgeyBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuMDUpICFpbXBvcnRhbnQ7IH1cclxuICAubWF0LW1kYy1mb3JtLWZpZWxkLWxhYmVsIHsgY29sb3I6ICM5NGEzYjggIWltcG9ydGFudDsgfVxyXG4gIGlucHV0IHsgY29sb3I6ICNmOGZhZmMgIWltcG9ydGFudDsgfVxyXG59XHJcblxyXG4vKiDDosKUwoDDosKUwoDDosKUwoAgUmVzcG9uc2l2ZSDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoAgKi9cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgLndhbGxldC1oZXJvLWNvbnRlbnQgeyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyB9XHJcbiAgLndhbGxldC1iYWxhbmNlLWNhcmQgeyB3aWR0aDogMTAwJTsgbWluLXdpZHRoOiB1bnNldDsgfVxyXG4gIC53YWxsZXQtdGFicyB7IHBhZGRpbmc6IDEycHg7IH1cclxuICAud2FsbGV0LXRhYiB7IHBhZGRpbmc6IDhweCAxNHB4OyBmb250LXNpemU6IDAuOHJlbTsgfVxyXG4gIC53YWxsZXQtY29udGVudCB7IHBhZGRpbmc6IDAgMTJweCAyMHB4OyB9XHJcbiAgLm92ZXJ2aWV3LWdyaWQgeyBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7IH1cclxufVxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  }));
}
_staticBlock();

/***/ })

}]);
//# sourceMappingURL=src_app_components_wallet_wallet_component_ts.js.map