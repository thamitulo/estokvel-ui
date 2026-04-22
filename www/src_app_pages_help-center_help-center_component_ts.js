"use strict";
(self["webpackChunkestokvel_ui"] = self["webpackChunkestokvel_ui"] || []).push([["src_app_pages_help-center_help-center_component_ts"],{

/***/ 103:
/*!************************************************************!*\
  !*** ./src/app/pages/help-center/help-center.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HelpCenterComponent: () => (/* binding */ HelpCenterComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 4487);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ 3840);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/expansion */ 9322);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2481);
var _staticBlock;













function HelpCenterComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 18)(1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const cat_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](cat_r1.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](cat_r1.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", cat_r1.count, " articles");
  }
}
function HelpCenterComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 21)(1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "search_off");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "No articles found for \"");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, "\"");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function HelpCenterComponent_div_25_Template_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.searchQuery = "");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9, "Clear search");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r2.searchQuery);
  }
}
function HelpCenterComponent_div_26_mat_expansion_panel_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-expansion-panel")(1, "mat-expansion-panel-header")(2, "mat-panel-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](item_r4.q);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](item_r4.a);
  }
}
function HelpCenterComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 23)(1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "mat-accordion");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, HelpCenterComponent_div_26_mat_expansion_panel_4_Template, 6, 2, "mat-expansion-panel", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const cat_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](cat_r5.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", cat_r5.items);
  }
}
class HelpCenterComponent {
  constructor() {
    this.searchQuery = '';
    this.categories = [{
      icon: 'person_add',
      label: 'Getting Started',
      count: 8
    }, {
      icon: 'savings',
      label: 'Managing Stokvels',
      count: 12
    }, {
      icon: 'payments',
      label: 'Payments & Wallet',
      count: 10
    }, {
      icon: 'group',
      label: 'Members & Invites',
      count: 7
    }, {
      icon: 'shield',
      label: 'Security & Privacy',
      count: 6
    }, {
      icon: 'receipt_long',
      label: 'Billing & Fees',
      count: 5
    }];
    this.faqs = [{
      category: 'Getting Started',
      items: [{
        q: 'How do I create an eStokvel account?',
        a: 'Visit the eStokvel website or download the app, click "Get Started Free" and follow the registration steps. You will need a valid South African ID number and email address.'
      }, {
        q: 'Is eStokvel free to use?',
        a: 'Creating an account and joining stokvels is free. A small platform fee may apply for certain transactions. Check our pricing page for the latest fee schedule.'
      }, {
        q: 'How do I verify my identity?',
        a: 'After registration, go to your Profile and follow the KYC (Know Your Customer) steps. You will need to upload a clear photo of your South African ID or passport and a selfie for facial verification.'
      }, {
        q: 'Can I use eStokvel on my phone?',
        a: 'Yes! eStokvel is available as a Progressive Web App (PWA) and as a native app on Android and iOS. You can add it to your home screen directly from your browser.'
      }]
    }, {
      category: 'Managing Stokvels',
      items: [{
        q: 'How do I create a stokvel?',
        a: 'Log in, click "Create a Stokvel", fill in the details (name, type, contribution amount, payout cycle, maximum members) and invite your first members.'
      }, {
        q: 'What is the minimum number of members?',
        a: 'A minimum of 3 members is required to start a stokvel on eStokvel.'
      }, {
        q: 'Can I change the stokvel rules after creation?',
        a: 'Some settings can be adjusted by the organiser before the stokvel becomes active. Once the stokvel is running, core rules (contribution amount, payout cycle) are locked to protect all members.'
      }, {
        q: 'How do I remove a member?',
        a: 'As the organiser, go to the stokvel management page, find the member and select "Remove Member". Note that removal is subject to the group\'s constitution rules.'
      }]
    }, {
      category: 'Payments & Wallet',
      items: [{
        q: 'How do I make a contribution?',
        a: 'Go to your stokvel, click "Make Contribution" and choose your payment method — eStokvel Wallet, bank transfer or card. Contributions are due on the date specified in the group\'s rules.'
      }, {
        q: 'When will I receive my payout?',
        a: 'Payouts are processed according to the schedule set when the stokvel was created. You will receive a notification when your payout is ready and funds will appear in your eStokvel Wallet within 1–2 business days.'
      }, {
        q: 'How do I withdraw from my wallet?',
        a: 'Go to Wallet → Withdraw, enter the amount and your bank account details. Withdrawals typically take 1–3 business days to reflect.'
      }]
    }];
  }
  get filteredFaqs() {
    if (!this.searchQuery.trim()) return this.faqs;
    const q = this.searchQuery.toLowerCase();
    return this.faqs.map(cat => ({
      ...cat,
      items: cat.items.filter(item => item.q.toLowerCase().includes(q) || item.a.toLowerCase().includes(q))
    })).filter(cat => cat.items.length > 0);
  }
  static #_ = _staticBlock = () => (this.ɵfac = function HelpCenterComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || HelpCenterComponent)();
  }, this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
    type: HelpCenterComponent,
    selectors: [["app-help-center"]],
    decls: 43,
    vars: 4,
    consts: [[1, "hc-page"], [1, "hc-hero"], [1, "hc-hero-inner"], [1, "hc-eyebrow"], [1, "hc-search-wrap"], [1, "hc-search-icon"], ["type", "text", "placeholder", "Search help articles\u2026", 1, "hc-search-input", 3, "ngModelChange", "ngModel"], [1, "hc-section"], [1, "hc-container"], [1, "hc-cats-grid"], ["class", "hc-cat-card", 4, "ngFor", "ngForOf"], [1, "hc-section", "hc-section-alt"], ["class", "hc-no-results", 4, "ngIf"], ["class", "hc-faq-group", 4, "ngFor", "ngForOf"], [1, "hc-cta"], [1, "hc-cta-actions"], ["mat-flat-button", "", "color", "primary", "routerLink", "/contact"], ["mat-stroked-button", "", "routerLink", "/tutorials"], [1, "hc-cat-card"], [1, "hc-cat-label"], [1, "hc-cat-count"], [1, "hc-no-results"], ["mat-stroked-button", "", 3, "click"], [1, "hc-faq-group"], [4, "ngFor", "ngForOf"]],
    template: function HelpCenterComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0)(1, "section", 1)(2, "div", 2)(3, "div", 3)(4, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "help_outline");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, " Support");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, "Help Center");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, "Find answers, guides and support resources for everything eStokvel.");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "div", 4)(12, "mat-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function HelpCenterComponent_Template_input_ngModelChange_14_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx.searchQuery, $event) || (ctx.searchQuery = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "section", 7)(16, "div", 8)(17, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18, "Browse by Topic");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](20, HelpCenterComponent_div_20_Template, 7, 3, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "section", 11)(22, "div", 8)(23, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](24, "Frequently Asked Questions");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](25, HelpCenterComponent_div_25_Template, 10, 1, "div", 12)(26, HelpCenterComponent_div_26_Template, 5, 2, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "section", 14)(28, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](29, "support_agent");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](31, "Still need help?");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](32, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](33, "Our support team is available Monday\u2013Friday, 8am\u20136pm SAST.");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](34, "div", 15)(35, "button", 16)(36, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](37, "mail");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](38, " Contact Support");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](39, "button", 17)(40, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](41, "play_circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](42, " Watch Tutorials");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx.searchQuery);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.categories);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.filteredFaqs.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.filteredFaqs);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink, _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButton, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__.MatExpansionModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__.MatAccordion, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__.MatExpansionPanel, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__.MatExpansionPanelHeader, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__.MatExpansionPanelTitle, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel],
    styles: [".hc-page[_ngcontent-%COMP%] {\n  font-family: \"Inter\", sans-serif;\n  color: #1e293b;\n}\n\n.hc-hero[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #0d47a1, #1976d2 60%, #00796b);\n  color: #fff;\n  padding: 72px 24px 56px;\n  text-align: center;\n}\n.hc-hero[_ngcontent-%COMP%]   .hc-hero-inner[_ngcontent-%COMP%] {\n  max-width: 680px;\n  margin: 0 auto;\n}\n.hc-hero[_ngcontent-%COMP%]   .hc-eyebrow[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  background: rgba(255, 255, 255, 0.15);\n  border-radius: 20px;\n  padding: 4px 14px;\n  font-size: 0.82rem;\n  font-weight: 600;\n  margin-bottom: 16px;\n}\n.hc-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 2.6rem;\n  font-weight: 800;\n  margin: 0 0 12px;\n}\n.hc-hero[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  opacity: 0.88;\n  font-size: 1rem;\n  margin: 0 0 28px;\n}\n\n.hc-search-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  max-width: 500px;\n  margin: 0 auto;\n}\n.hc-search-wrap[_ngcontent-%COMP%]   .hc-search-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 14px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #64748b;\n}\n.hc-search-wrap[_ngcontent-%COMP%]   .hc-search-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 14px 16px 14px 46px;\n  border-radius: 10px;\n  border: none;\n  font-size: 1rem;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);\n  outline: none;\n}\n.hc-search-wrap[_ngcontent-%COMP%]   .hc-search-input[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.22);\n}\n\n.hc-section[_ngcontent-%COMP%] {\n  padding: 56px 24px;\n}\n\n.hc-section-alt[_ngcontent-%COMP%] {\n  background: #f8fafc;\n}\n\n.hc-container[_ngcontent-%COMP%] {\n  max-width: 900px;\n  margin: 0 auto;\n}\n\nh2[_ngcontent-%COMP%] {\n  font-size: 1.6rem;\n  font-weight: 700;\n  color: #0d47a1;\n  margin: 0 0 24px;\n}\n\n.hc-cats-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  gap: 16px;\n}\n\n.hc-cat-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  padding: 24px;\n  text-align: center;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.hc-cat-card[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #0d47a1;\n  font-size: 2rem;\n  width: 2rem;\n  height: 2rem;\n  margin-bottom: 8px;\n}\n.hc-cat-card[_ngcontent-%COMP%]   .hc-cat-label[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 0.95rem;\n  margin-bottom: 4px;\n}\n.hc-cat-card[_ngcontent-%COMP%]   .hc-cat-count[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #64748b;\n}\n.hc-cat-card[_ngcontent-%COMP%]:hover {\n  border-color: #0d47a1;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);\n}\n\n.hc-faq-group[_ngcontent-%COMP%] {\n  margin-bottom: 40px;\n}\n.hc-faq-group[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 700;\n  color: #0d47a1;\n  margin: 0 0 12px;\n  padding-bottom: 8px;\n  border-bottom: 2px solid #e2e8f0;\n}\n\nmat-expansion-panel[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n  border-radius: 8px !important;\n}\n\n.hc-no-results[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 60px 24px;\n}\n.hc-no-results[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  width: 3rem;\n  height: 3rem;\n  color: #64748b;\n  margin-bottom: 12px;\n}\n.hc-no-results[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #64748b;\n  margin-bottom: 20px;\n}\n\n.hc-cta[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #0d47a1, #00796b);\n  color: #fff;\n  padding: 64px 24px;\n  text-align: center;\n}\n.hc-cta[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  width: 3rem;\n  height: 3rem;\n  opacity: 0.7;\n  margin-bottom: 8px;\n}\n.hc-cta[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #fff;\n  margin-bottom: 8px;\n}\n.hc-cta[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  opacity: 0.88;\n  margin-bottom: 28px;\n}\n\n.hc-cta-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n.hc-cta-actions[_ngcontent-%COMP%]   button[mat-stroked-button][_ngcontent-%COMP%] {\n  border-color: #fff;\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvaGVscC1jZW50ZXIvaGVscC1jZW50ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFBVyxnQ0FBQTtFQUFrQyxjQUZ4QjtBQUVyQjs7QUFFQTtFQUNFLGtFQUFBO0VBQ0EsV0FBQTtFQUFhLHVCQUFBO0VBQXlCLGtCQUFBO0FBR3hDO0FBRkU7RUFBaUIsZ0JBQUE7RUFBa0IsY0FBQTtBQU1yQztBQUxFO0VBQWMsb0JBQUE7RUFBc0IsbUJBQUE7RUFBcUIsUUFBQTtFQUFVLHFDQUFBO0VBQW1DLG1CQUFBO0VBQXFCLGlCQUFBO0VBQW1CLGtCQUFBO0VBQW1CLGdCQUFBO0VBQWtCLG1CQUFBO0FBZ0JyTDtBQWZFO0VBQUssaUJBQUE7RUFBbUIsZ0JBQUE7RUFBa0IsZ0JBQUE7QUFvQjVDO0FBbkJFO0VBQUssYUFBQTtFQUFjLGVBQUE7RUFBaUIsZ0JBQUE7QUF3QnRDOztBQXJCQTtFQUNFLGtCQUFBO0VBQW9CLGdCQUFBO0VBQWtCLGNBQUE7QUEwQnhDO0FBekJFO0VBQWtCLGtCQUFBO0VBQW9CLFVBQUE7RUFBWSxRQUFBO0VBQVUsMkJBQUE7RUFBNkIsY0FmckQ7QUErQ3RDO0FBL0JFO0VBQ0UsV0FBQTtFQUFhLDRCQUFBO0VBQThCLG1CQUFBO0VBQXFCLFlBQUE7RUFDaEUsZUFBQTtFQUFpQiwwQ0FBQTtFQUF3QyxhQUFBO0FBc0M3RDtBQXJDSTtFQUFVLDBDQUFBO0FBd0NkOztBQXBDQTtFQUFjLGtCQUFBO0FBd0NkOztBQXZDQTtFQUFrQixtQkF4QmI7QUFtRUw7O0FBMUNBO0VBQWdCLGdCQUFBO0VBQWtCLGNBQUE7QUErQ2xDOztBQTlDQTtFQUFLLGlCQUFBO0VBQW1CLGdCQUFBO0VBQWtCLGNBM0JuQztFQTJCaUQsZ0JBQUE7QUFxRHhEOztBQW5EQTtFQUFnQixhQUFBO0VBQWUsNERBQUE7RUFBOEQsU0FBQTtBQXlEN0Y7O0FBeERBO0VBQ0UsZ0JBQUE7RUFBa0IseUJBQUE7RUFBMkIsbUJBQUE7RUFDN0MsYUFBQTtFQUFlLGtCQUFBO0VBQW9CLGVBQUE7RUFBaUIsb0JBQUE7QUFnRXREO0FBL0RFO0VBQVcsY0FqQ047RUFpQ29CLGVBQUE7RUFBaUIsV0FBQTtFQUFhLFlBQUE7RUFBYyxrQkFBQTtBQXNFdkU7QUFyRUU7RUFBZ0IsZ0JBQUE7RUFBa0Isa0JBQUE7RUFBbUIsa0JBQUE7QUEwRXZEO0FBekVFO0VBQWdCLGlCQUFBO0VBQWtCLGNBbENFO0FBK0d0QztBQTVFRTtFQUFVLHFCQXBDTDtFQW9DMEIsMENBQUE7QUFnRmpDOztBQTdFQTtFQUFnQixtQkFBQTtBQWlGaEI7QUFoRkU7RUFBSyxpQkFBQTtFQUFtQixnQkFBQTtFQUFrQixjQXhDckM7RUF3Q21ELGdCQUFBO0VBQWtCLG1CQUFBO0VBQXFCLGdDQUFBO0FBd0ZqRzs7QUF0RkE7RUFBc0Isa0JBQUE7RUFBb0IsNkJBQUE7QUEyRjFDOztBQXpGQTtFQUNFLGtCQUFBO0VBQW9CLGtCQUFBO0FBNkZ0QjtBQTVGRTtFQUFXLGVBQUE7RUFBaUIsV0FBQTtFQUFhLFlBQUE7RUFBYyxjQTdDbkI7RUE2Q2tDLG1CQUFBO0FBbUd4RTtBQWxHRTtFQUFJLGNBOUNnQztFQThDakIsbUJBQUE7QUFzR3JCOztBQW5HQTtFQUNFLHFEQUFBO0VBQ0EsV0FBQTtFQUFhLGtCQUFBO0VBQW9CLGtCQUFBO0FBd0duQztBQXZHRTtFQUFXLGVBQUE7RUFBaUIsV0FBQTtFQUFhLFlBQUE7RUFBYyxZQUFBO0VBQWEsa0JBQUE7QUE4R3RFO0FBN0dFO0VBQUssV0FBQTtFQUFhLGtCQUFBO0FBaUhwQjtBQWhIRTtFQUFLLGFBQUE7RUFBYyxtQkFBQTtBQW9IckI7O0FBbEhBO0VBQWtCLGFBQUE7RUFBZSx1QkFBQTtFQUF5QixTQUFBO0VBQVcsZUFBQTtBQXlIckU7QUF4SEU7RUFBNkIsa0JBQUE7RUFBb0IsV0FBQTtBQTRIbkQiLCJzb3VyY2VzQ29udGVudCI6WyIkbmF2eTogIzBkNDdhMTsgJHRlYWw6ICMwMDc5NmI7ICRnb2xkOiAjZjU5ZTBiO1xyXG4kYmc6ICNmOGZhZmM7ICR0ZXh0OiAjMWUyOTNiOyAkbXV0ZWQ6ICM2NDc0OGI7ICRib3JkZXI6ICNlMmU4ZjA7XHJcblxyXG4uaGMtcGFnZSB7IGZvbnQtZmFtaWx5OiAnSW50ZXInLCBzYW5zLXNlcmlmOyBjb2xvcjogJHRleHQ7IH1cclxuXHJcbi5oYy1oZXJvIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAkbmF2eSwgIzE5NzZkMiA2MCUsICR0ZWFsKTtcclxuICBjb2xvcjogI2ZmZjsgcGFkZGluZzogNzJweCAyNHB4IDU2cHg7IHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAuaGMtaGVyby1pbm5lciB7IG1heC13aWR0aDogNjgwcHg7IG1hcmdpbjogMCBhdXRvOyB9XHJcbiAgLmhjLWV5ZWJyb3cgeyBkaXNwbGF5OiBpbmxpbmUtZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZ2FwOiA2cHg7IGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsLjE1KTsgYm9yZGVyLXJhZGl1czogMjBweDsgcGFkZGluZzogNHB4IDE0cHg7IGZvbnQtc2l6ZTogLjgycmVtOyBmb250LXdlaWdodDogNjAwOyBtYXJnaW4tYm90dG9tOiAxNnB4OyB9XHJcbiAgaDEgeyBmb250LXNpemU6IDIuNnJlbTsgZm9udC13ZWlnaHQ6IDgwMDsgbWFyZ2luOiAwIDAgMTJweDsgfVxyXG4gIHAgIHsgb3BhY2l0eTogLjg4OyBmb250LXNpemU6IDFyZW07IG1hcmdpbjogMCAwIDI4cHg7IH1cclxufVxyXG5cclxuLmhjLXNlYXJjaC13cmFwIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7IG1heC13aWR0aDogNTAwcHg7IG1hcmdpbjogMCBhdXRvO1xyXG4gIC5oYy1zZWFyY2gtaWNvbiB7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgbGVmdDogMTRweDsgdG9wOiA1MCU7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTsgY29sb3I6ICRtdXRlZDsgfVxyXG4gIC5oYy1zZWFyY2gtaW5wdXQge1xyXG4gICAgd2lkdGg6IDEwMCU7IHBhZGRpbmc6IDE0cHggMTZweCAxNHB4IDQ2cHg7IGJvcmRlci1yYWRpdXM6IDEwcHg7IGJvcmRlcjogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTsgYm94LXNoYWRvdzogMCA0cHggMjBweCByZ2JhKDAsMCwwLC4xNSk7IG91dGxpbmU6IG5vbmU7XHJcbiAgICAmOmZvY3VzIHsgYm94LXNoYWRvdzogMCA0cHggMjRweCByZ2JhKDAsMCwwLC4yMik7IH1cclxuICB9XHJcbn1cclxuXHJcbi5oYy1zZWN0aW9uIHsgcGFkZGluZzogNTZweCAyNHB4OyB9XHJcbi5oYy1zZWN0aW9uLWFsdCB7IGJhY2tncm91bmQ6ICRiZzsgfVxyXG4uaGMtY29udGFpbmVyIHsgbWF4LXdpZHRoOiA5MDBweDsgbWFyZ2luOiAwIGF1dG87IH1cclxuaDIgeyBmb250LXNpemU6IDEuNnJlbTsgZm9udC13ZWlnaHQ6IDcwMDsgY29sb3I6ICRuYXZ5OyBtYXJnaW46IDAgMCAyNHB4OyB9XHJcblxyXG4uaGMtY2F0cy1ncmlkIHsgZGlzcGxheTogZ3JpZDsgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMjAwcHgsIDFmcikpOyBnYXA6IDE2cHg7IH1cclxuLmhjLWNhdC1jYXJkIHtcclxuICBiYWNrZ3JvdW5kOiAjZmZmOyBib3JkZXI6IDFweCBzb2xpZCAkYm9yZGVyOyBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIHBhZGRpbmc6IDI0cHg7IHRleHQtYWxpZ246IGNlbnRlcjsgY3Vyc29yOiBwb2ludGVyOyB0cmFuc2l0aW9uOiBhbGwgLjJzO1xyXG4gIG1hdC1pY29uIHsgY29sb3I6ICRuYXZ5OyBmb250LXNpemU6IDJyZW07IHdpZHRoOiAycmVtOyBoZWlnaHQ6IDJyZW07IG1hcmdpbi1ib3R0b206IDhweDsgfVxyXG4gIC5oYy1jYXQtbGFiZWwgeyBmb250LXdlaWdodDogNzAwOyBmb250LXNpemU6IC45NXJlbTsgbWFyZ2luLWJvdHRvbTogNHB4OyB9XHJcbiAgLmhjLWNhdC1jb3VudCB7IGZvbnQtc2l6ZTogLjhyZW07IGNvbG9yOiAkbXV0ZWQ7IH1cclxuICAmOmhvdmVyIHsgYm9yZGVyLWNvbG9yOiAkbmF2eTsgYm94LXNoYWRvdzogMCA0cHggMTZweCByZ2JhKDAsMCwwLC4wOCk7IH1cclxufVxyXG5cclxuLmhjLWZhcS1ncm91cCB7IG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbiAgaDMgeyBmb250LXNpemU6IDEuMXJlbTsgZm9udC13ZWlnaHQ6IDcwMDsgY29sb3I6ICRuYXZ5OyBtYXJnaW46IDAgMCAxMnB4OyBwYWRkaW5nLWJvdHRvbTogOHB4OyBib3JkZXItYm90dG9tOiAycHggc29saWQgJGJvcmRlcjsgfVxyXG59XHJcbm1hdC1leHBhbnNpb24tcGFuZWwgeyBtYXJnaW4tYm90dG9tOiA4cHg7IGJvcmRlci1yYWRpdXM6IDhweCAhaW1wb3J0YW50OyB9XHJcblxyXG4uaGMtbm8tcmVzdWx0cyB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyOyBwYWRkaW5nOiA2MHB4IDI0cHg7XHJcbiAgbWF0LWljb24geyBmb250LXNpemU6IDNyZW07IHdpZHRoOiAzcmVtOyBoZWlnaHQ6IDNyZW07IGNvbG9yOiAkbXV0ZWQ7IG1hcmdpbi1ib3R0b206IDEycHg7IH1cclxuICBwIHsgY29sb3I6ICRtdXRlZDsgbWFyZ2luLWJvdHRvbTogMjBweDsgfVxyXG59XHJcblxyXG4uaGMtY3RhIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAkbmF2eSwgJHRlYWwpO1xyXG4gIGNvbG9yOiAjZmZmOyBwYWRkaW5nOiA2NHB4IDI0cHg7IHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXQtaWNvbiB7IGZvbnQtc2l6ZTogM3JlbTsgd2lkdGg6IDNyZW07IGhlaWdodDogM3JlbTsgb3BhY2l0eTogLjc7IG1hcmdpbi1ib3R0b206IDhweDsgfVxyXG4gIGgyIHsgY29sb3I6ICNmZmY7IG1hcmdpbi1ib3R0b206IDhweDsgfVxyXG4gIHAgIHsgb3BhY2l0eTogLjg4OyBtYXJnaW4tYm90dG9tOiAyOHB4OyB9XHJcbn1cclxuLmhjLWN0YS1hY3Rpb25zIHsgZGlzcGxheTogZmxleDsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IGdhcDogMTZweDsgZmxleC13cmFwOiB3cmFwO1xyXG4gIGJ1dHRvblttYXQtc3Ryb2tlZC1idXR0b25dIHsgYm9yZGVyLWNvbG9yOiAjZmZmOyBjb2xvcjogI2ZmZjsgfVxyXG59XHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  }));
}
_staticBlock();

/***/ })

}]);
//# sourceMappingURL=src_app_pages_help-center_help-center_component_ts.js.map