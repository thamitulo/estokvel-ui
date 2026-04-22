"use strict";
(self["webpackChunkestokvel_ui"] = self["webpackChunkestokvel_ui"] || []).push([["src_app_pages_stokvel-basics_stokvel-basics_component_ts"],{

/***/ 9573:
/*!******************************************************************!*\
  !*** ./src/app/pages/stokvel-basics/stokvel-basics.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StokvelBasicsComponent: () => (/* binding */ StokvelBasicsComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 4487);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ 3840);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/expansion */ 9322);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2481);
var _staticBlock;











function StokvelBasicsComponent_mat_expansion_panel_132_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-expansion-panel")(1, "mat-expansion-panel-header")(2, "mat-panel-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const faq_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](faq_r1.q);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](faq_r1.a);
  }
}
class StokvelBasicsComponent {
  constructor() {
    this.faqs = [{
      q: 'What is a stokvel?',
      a: 'A stokvel is a type of informal savings club or investment society where members agree to contribute a fixed amount of money to a common fund on a weekly, fortnightly or monthly basis.'
    }, {
      q: 'How many members do I need?',
      a: 'eStokvel requires a minimum of 3 members to start a stokvel group. There is no hard maximum, but most groups range from 5 to 20 members.'
    }, {
      q: 'What types of stokvels are available?',
      a: 'eStokvel supports Burial Societies, Grocery Stokvels, Investment Clubs, Burial Societies, Social Stokvels and General Savings groups.'
    }, {
      q: 'Is my money safe?',
      a: 'Yes. All transactions are processed through secure, encrypted payment channels and eStokvel is fully POPIA-compliant.'
    }, {
      q: 'When do I get paid out?',
      a: 'Payouts follow the cycle agreed upon when the stokvel was created — monthly, bi-monthly or annually depending on the group structure.'
    }];
  }
  static #_ = _staticBlock = () => (this.ɵfac = function StokvelBasicsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || StokvelBasicsComponent)();
  }, this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: StokvelBasicsComponent,
    selectors: [["app-stokvel-basics"]],
    decls: 147,
    vars: 1,
    consts: [[1, "sb-page"], [1, "sb-hero"], [1, "sb-hero-inner"], [1, "sb-eyebrow"], [1, "sb-hero-actions"], ["mat-flat-button", "", "color", "primary", "routerLink", "/create-stokvel"], ["mat-stroked-button", "", "routerLink", "/stokvels"], [1, "sb-section"], [1, "sb-container"], [1, "sb-lead"], [1, "sb-stat-row"], [1, "sb-stat"], [1, "sb-stat-num"], [1, "sb-stat-lbl"], [1, "sb-section", "sb-section-alt"], [1, "sb-types-grid"], [1, "sb-type-card"], [1, "sb-steps"], [1, "sb-step"], [1, "sb-step-num"], [1, "sb-step-body"], [4, "ngFor", "ngForOf"], [1, "sb-cta"], [1, "sb-cta-actions"]],
    template: function StokvelBasicsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "section", 1)(2, "div", 2)(3, "div", 3)(4, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "school");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, " Learning Centre");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Stokvel Basics");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Everything you need to know about stokvels \u2014 South Africa's most beloved savings tradition, now digitised.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 4)(12, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "Start a Stokvel");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, "Browse Stokvels");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "section", 7)(17, "div", 8)(18, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, "What is a Stokvel?");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, " A stokvel is a type of informal savings club or credit association where a group of people agree to contribute fixed amounts at regular intervals. The pooled funds are then given to one member at a time in rotation. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23, " Stokvels have been part of South African culture for generations, rooted in the concept of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25, "ubuntu");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26, ". eStokvel brings this powerful tradition into the digital age with transparency, security and convenience. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "div", 10)(28, "div", 11)(29, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](30, "R50B+");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](32, "Circulated annually in SA");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "div", 11)(34, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](35, "11M+");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](37, "South Africans participate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "div", 11)(39, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](40, "800K+");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](42, "Active stokvel groups");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "section", 14)(44, "div", 8)(45, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](46, "Types of Stokvels");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](47, "div", 15)(48, "div", 16)(49, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](50, "sync_alt");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](51, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](52, "Rotating Stokvel");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](53, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](54, "Each member receives the full pot in rotation. Simple, fair and time-tested.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](55, "div", 16)(56, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](57, "shopping_cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](58, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](59, "Grocery Stokvel");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](60, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](61, "Members save throughout the year and make a big grocery purchase together, usually around December.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](62, "div", 16)(63, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](64, "trending_up");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](65, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](66, "Investment Club");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](67, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](68, "Members pool funds and invest together in shares, property or other assets for long-term growth.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](69, "div", 16)(70, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](71, "favorite");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](72, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](73, "Burial Society");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](74, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](75, "Members contribute monthly to a fund that covers funeral expenses for members and their families.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](76, "div", 16)(77, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](78, "celebration");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](79, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](80, "Social Stokvel");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](81, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](82, "Combines savings with social events \u2014 members take turns hosting gatherings funded by the pot.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](83, "div", 16)(84, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](85, "savings");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](86, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](87, "General Savings");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](88, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](89, "A flexible structure where everyone saves towards a shared goal, paid out at cycle end.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](90, "section", 7)(91, "div", 8)(92, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](93, "How eStokvel Works");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](94, "div", 17)(95, "div", 18)(96, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](97, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](98, "div", 20)(99, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](100, "Create or Join");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](101, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](102, "Sign up, then either create your own stokvel or browse and join an existing public group.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](103, "div", 18)(104, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](105, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](106, "div", 20)(107, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](108, "Agree on Rules");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](109, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](110, "Set the contribution amount, frequency, members and payout cycle. A digital constitution is generated automatically.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](111, "div", 18)(112, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](113, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](114, "div", 20)(115, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](116, "Contribute Monthly");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](117, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](118, "Secure digital payments with automated reminders ensure nobody misses a contribution.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](119, "div", 18)(120, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](121, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](122, "div", 20)(123, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](124, "Receive Payouts");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](125, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](126, "Funds are distributed to members according to the agreed schedule \u2014 transparently and on time.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](127, "section", 14)(128, "div", 8)(129, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](130, "Frequently Asked Questions");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](131, "mat-accordion");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](132, StokvelBasicsComponent_mat_expansion_panel_132_Template, 6, 2, "mat-expansion-panel", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](133, "section", 22)(134, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](135, "Ready to get started?");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](136, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](137, "Join thousands of South Africans saving smarter with eStokvel.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](138, "div", 23)(139, "button", 5)(140, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](141, "add_circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](142, " Create a Stokvel");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](143, "button", 6)(144, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](145, "explore");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](146, " Browse Stokvels");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](132);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.faqs);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink, _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButton, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__.MatExpansionModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__.MatAccordion, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__.MatExpansionPanel, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__.MatExpansionPanelHeader, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__.MatExpansionPanelTitle],
    styles: ["@charset \"UTF-8\";\n.sb-page[_ngcontent-%COMP%] {\n  font-family: \"Inter\", sans-serif;\n  color: #1e293b;\n}\n\n\n\n.sb-hero[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #0d47a1 0%, #1565c0 60%, #00796b 100%);\n  color: #fff;\n  padding: 80px 24px 64px;\n  text-align: center;\n}\n.sb-hero[_ngcontent-%COMP%]   .sb-hero-inner[_ngcontent-%COMP%] {\n  max-width: 720px;\n  margin: 0 auto;\n}\n.sb-hero[_ngcontent-%COMP%]   .sb-eyebrow[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  background: rgba(255, 255, 255, 0.15);\n  border-radius: 20px;\n  padding: 4px 14px;\n  font-size: 0.82rem;\n  font-weight: 600;\n  letter-spacing: 0.05em;\n  margin-bottom: 20px;\n}\n.sb-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 2.8rem;\n  font-weight: 800;\n  margin: 0 0 16px;\n}\n.sb-hero[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  opacity: 0.88;\n  margin: 0 0 32px;\n}\n.sb-hero[_ngcontent-%COMP%]   .sb-hero-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n.sb-hero[_ngcontent-%COMP%]   .sb-hero-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  padding: 10px 24px;\n}\n.sb-hero[_ngcontent-%COMP%]   .sb-hero-actions[_ngcontent-%COMP%]   button[mat-stroked-button][_ngcontent-%COMP%] {\n  border-color: #fff;\n  color: #fff;\n}\n\n\n\n.sb-section[_ngcontent-%COMP%] {\n  padding: 64px 24px;\n}\n\n.sb-section-alt[_ngcontent-%COMP%] {\n  background: #f8fafc;\n}\n\n.sb-container[_ngcontent-%COMP%] {\n  max-width: 900px;\n  margin: 0 auto;\n}\n\nh2[_ngcontent-%COMP%] {\n  font-size: 1.8rem;\n  font-weight: 700;\n  margin: 0 0 16px;\n  color: #0d47a1;\n}\n\n.sb-lead[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  color: #64748b;\n  margin-bottom: 16px;\n}\n\n\n\n.sb-stat-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 24px;\n  flex-wrap: wrap;\n  margin-top: 40px;\n}\n\n.sb-stat[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 140px;\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  padding: 24px;\n  text-align: center;\n}\n\n.sb-stat-num[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 2rem;\n  font-weight: 800;\n  color: #0d47a1;\n}\n\n.sb-stat-lbl[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.82rem;\n  color: #64748b;\n  margin-top: 4px;\n}\n\n\n\n.sb-types-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));\n  gap: 20px;\n  margin-top: 24px;\n}\n\n.sb-type-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  padding: 24px;\n  transition: box-shadow 0.2s;\n}\n.sb-type-card[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #0d47a1;\n  font-size: 2rem;\n  width: 2rem;\n  height: 2rem;\n  margin-bottom: 12px;\n}\n.sb-type-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 700;\n  margin: 0 0 8px;\n}\n.sb-type-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  color: #64748b;\n  margin: 0;\n}\n.sb-type-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);\n}\n\n\n\n.sb-steps[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  margin-top: 24px;\n}\n\n.sb-step[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 20px;\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  padding: 24px;\n}\n\n.sb-step-num[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background: #0d47a1;\n  color: #fff;\n  font-weight: 800;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1rem;\n}\n\n.sb-step-body[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 700;\n  margin: 0 0 6px;\n}\n.sb-step-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  color: #64748b;\n  margin: 0;\n}\n\n\n\nmat-expansion-panel[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n  border-radius: 8px !important;\n}\n\n\n\n.sb-cta[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #0d47a1, #00796b);\n  color: #fff;\n  text-align: center;\n  padding: 64px 24px;\n}\n.sb-cta[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #fff;\n  margin-bottom: 12px;\n}\n.sb-cta[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  opacity: 0.88;\n  margin-bottom: 32px;\n}\n\n.sb-cta-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n.sb-cta-actions[_ngcontent-%COMP%]   button[mat-stroked-button][_ngcontent-%COMP%] {\n  border-color: #fff;\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvc3Rva3ZlbC1iYXNpY3Mvc3Rva3ZlbC1iYXNpY3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBUWhCO0VBQVcsZ0NBQUE7RUFBa0MsY0FKdEM7QUFBUDs7QUFNQSxlQUFBO0FBQ0E7RUFDRSwwRUFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0FBSEY7QUFLRTtFQUFpQixnQkFBQTtFQUFrQixjQUFBO0FBRHJDO0FBR0U7RUFDRSxvQkFBQTtFQUFzQixtQkFBQTtFQUFxQixRQUFBO0VBQzNDLHFDQUFBO0VBQW1DLG1CQUFBO0VBQ25DLGlCQUFBO0VBQW1CLGtCQUFBO0VBQW1CLGdCQUFBO0VBQ3RDLHNCQUFBO0VBQXVCLG1CQUFBO0FBSzNCO0FBRkU7RUFBSyxpQkFBQTtFQUFtQixnQkFBQTtFQUFrQixnQkFBQTtBQU81QztBQU5FO0VBQUssaUJBQUE7RUFBbUIsYUFBQTtFQUFjLGdCQUFBO0FBV3hDO0FBVEU7RUFDRSxhQUFBO0VBQWUsdUJBQUE7RUFBeUIsU0FBQTtFQUFXLGVBQUE7QUFjdkQ7QUFiSTtFQUFTLGtCQUFBO0VBQW9CLGtCQUFBO0FBaUJqQztBQWhCSTtFQUE2QixrQkFBQTtFQUFvQixXQUFBO0FBb0JyRDs7QUFoQkEsa0JBQUE7QUFDQTtFQUFjLGtCQUFBO0FBb0JkOztBQW5CQTtFQUFrQixtQkFuQ2I7QUEwREw7O0FBckJBO0VBQWdCLGdCQUFBO0VBQWtCLGNBQUE7QUEwQmxDOztBQXhCQTtFQUFLLGlCQUFBO0VBQW1CLGdCQUFBO0VBQWtCLGdCQUFBO0VBQWtCLGNBMUNyRDtBQXlFUDs7QUE3QkE7RUFBVyxpQkFBQTtFQUFtQixjQXZDdEI7RUF1Q3FDLG1CQUFBO0FBbUM3Qzs7QUFqQ0EsZ0JBQUE7QUFDQTtFQUNFLGFBQUE7RUFBZSxTQUFBO0VBQVcsZUFBQTtFQUFpQixnQkFBQTtBQXVDN0M7O0FBckNBO0VBQ0UsT0FBQTtFQUFTLGdCQUFBO0VBQWtCLGdCQUFBO0VBQzNCLHlCQUFBO0VBQTJCLG1CQUFBO0VBQzNCLGFBQUE7RUFBZSxrQkFBQTtBQTRDakI7O0FBMUNBO0VBQWUsY0FBQTtFQUFnQixlQUFBO0VBQWlCLGdCQUFBO0VBQWtCLGNBdkQzRDtBQXdHUDs7QUFoREE7RUFBZSxjQUFBO0VBQWdCLGtCQUFBO0VBQW1CLGNBbkQxQztFQW1EeUQsZUFBQTtBQXVEakU7O0FBckRBLGdCQUFBO0FBQ0E7RUFDRSxhQUFBO0VBQWUsNERBQUE7RUFBOEQsU0FBQTtFQUFXLGdCQUFBO0FBMkQxRjs7QUF6REE7RUFDRSxnQkFBQTtFQUFrQix5QkFBQTtFQUEyQixtQkFBQTtFQUM3QyxhQUFBO0VBQWUsMkJBQUE7QUErRGpCO0FBOURFO0VBQVcsY0FqRU47RUFpRW9CLGVBQUE7RUFBaUIsV0FBQTtFQUFhLFlBQUE7RUFBYyxtQkFBQTtBQXFFdkU7QUFwRUU7RUFBSyxlQUFBO0VBQWlCLGdCQUFBO0VBQWtCLGVBQUE7QUF5RTFDO0FBeEVFO0VBQUssa0JBQUE7RUFBbUIsY0E5RGxCO0VBOERpQyxTQUFBO0FBNkV6QztBQTVFRTtFQUFVLDBDQUFBO0FBK0VaOztBQTVFQSxnQkFBQTtBQUNBO0VBQVksYUFBQTtFQUFlLHNCQUFBO0VBQXdCLFNBQUE7RUFBVyxnQkFBQTtBQW1GOUQ7O0FBbEZBO0VBQ0UsYUFBQTtFQUFlLHVCQUFBO0VBQXlCLFNBQUE7RUFDeEMsZ0JBQUE7RUFBa0IseUJBQUE7RUFBMkIsbUJBQUE7RUFBcUIsYUFBQTtBQTBGcEU7O0FBeEZBO0VBQ0UsY0FBQTtFQUFnQixXQUFBO0VBQWEsWUFBQTtFQUFjLGtCQUFBO0VBQzNDLG1CQS9FSztFQStFYyxXQUFBO0VBQWEsZ0JBQUE7RUFDaEMsYUFBQTtFQUFlLG1CQUFBO0VBQXFCLHVCQUFBO0VBQXlCLGVBQUE7QUFtRy9EOztBQWhHRTtFQUFLLGVBQUE7RUFBaUIsZ0JBQUE7RUFBa0IsZUFBQTtBQXNHMUM7QUFyR0U7RUFBSyxrQkFBQTtFQUFtQixjQS9FbEI7RUErRWlDLFNBQUE7QUEwR3pDOztBQXZHQSwwQkFBQTtBQUNBO0VBQXNCLGtCQUFBO0VBQW9CLDZCQUFBO0FBNEcxQzs7QUExR0EsY0FBQTtBQUNBO0VBQ0UscURBQUE7RUFDQSxXQUFBO0VBQWEsa0JBQUE7RUFBb0Isa0JBQUE7QUErR25DO0FBOUdFO0VBQUssV0FBQTtFQUFhLG1CQUFBO0FBa0hwQjtBQWpIRTtFQUFLLGFBQUE7RUFBYyxtQkFBQTtBQXFIckI7O0FBbkhBO0VBQ0UsYUFBQTtFQUFlLHVCQUFBO0VBQXlCLFNBQUE7RUFBVyxlQUFBO0FBeUhyRDtBQXhIRTtFQUE2QixrQkFBQTtFQUFvQixXQUFBO0FBNEhuRCIsInNvdXJjZXNDb250ZW50IjpbIiRuYXZ5OiAjMGQ0N2ExO1xyXG4kdGVhbDogIzAwNzk2YjtcclxuJGdvbGQ6ICNmNTllMGI7XHJcbiRiZzogI2Y4ZmFmYztcclxuJHRleHQ6ICMxZTI5M2I7XHJcbiRtdXRlZDogIzY0NzQ4YjtcclxuJGJvcmRlcjogI2UyZThmMDtcclxuXHJcbi5zYi1wYWdlIHsgZm9udC1mYW1pbHk6ICdJbnRlcicsIHNhbnMtc2VyaWY7IGNvbG9yOiAkdGV4dDsgfVxyXG5cclxuLyogw6LClMKAw6LClMKAIEhlcm8gw6LClMKAw6LClMKAICovXHJcbi5zYi1oZXJvIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAkbmF2eSAwJSwgIzE1NjVjMCA2MCUsICR0ZWFsIDEwMCUpO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHBhZGRpbmc6IDgwcHggMjRweCA2NHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgLnNiLWhlcm8taW5uZXIgeyBtYXgtd2lkdGg6IDcyMHB4OyBtYXJnaW46IDAgYXV0bzsgfVxyXG5cclxuICAuc2ItZXllYnJvdyB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZ2FwOiA2cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LC4xNSk7IGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBwYWRkaW5nOiA0cHggMTRweDsgZm9udC1zaXplOiAuODJyZW07IGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLjA1ZW07IG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgfVxyXG5cclxuICBoMSB7IGZvbnQtc2l6ZTogMi44cmVtOyBmb250LXdlaWdodDogODAwOyBtYXJnaW46IDAgMCAxNnB4OyB9XHJcbiAgcCAgeyBmb250LXNpemU6IDEuMXJlbTsgb3BhY2l0eTogLjg4OyBtYXJnaW46IDAgMCAzMnB4OyB9XHJcblxyXG4gIC5zYi1oZXJvLWFjdGlvbnMge1xyXG4gICAgZGlzcGxheTogZmxleDsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IGdhcDogMTZweDsgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgYnV0dG9uIHsgYm9yZGVyLXJhZGl1czogOHB4OyBwYWRkaW5nOiAxMHB4IDI0cHg7IH1cclxuICAgIGJ1dHRvblttYXQtc3Ryb2tlZC1idXR0b25dIHsgYm9yZGVyLWNvbG9yOiAjZmZmOyBjb2xvcjogI2ZmZjsgfVxyXG4gIH1cclxufVxyXG5cclxuLyogw6LClMKAw6LClMKAIFNlY3Rpb24gw6LClMKAw6LClMKAICovXHJcbi5zYi1zZWN0aW9uIHsgcGFkZGluZzogNjRweCAyNHB4OyB9XHJcbi5zYi1zZWN0aW9uLWFsdCB7IGJhY2tncm91bmQ6ICRiZzsgfVxyXG5cclxuLnNiLWNvbnRhaW5lciB7IG1heC13aWR0aDogOTAwcHg7IG1hcmdpbjogMCBhdXRvOyB9XHJcblxyXG5oMiB7IGZvbnQtc2l6ZTogMS44cmVtOyBmb250LXdlaWdodDogNzAwOyBtYXJnaW46IDAgMCAxNnB4OyBjb2xvcjogJG5hdnk7IH1cclxuXHJcbi5zYi1sZWFkIHsgZm9udC1zaXplOiAxLjFyZW07IGNvbG9yOiAkbXV0ZWQ7IG1hcmdpbi1ib3R0b206IDE2cHg7IH1cclxuXHJcbi8qIMOiwpTCgMOiwpTCgCBTdGF0cyDDosKUwoDDosKUwoAgKi9cclxuLnNiLXN0YXQtcm93IHtcclxuICBkaXNwbGF5OiBmbGV4OyBnYXA6IDI0cHg7IGZsZXgtd3JhcDogd3JhcDsgbWFyZ2luLXRvcDogNDBweDtcclxufVxyXG4uc2Itc3RhdCB7XHJcbiAgZmxleDogMTsgbWluLXdpZHRoOiAxNDBweDsgYmFja2dyb3VuZDogI2ZmZjtcclxuICBib3JkZXI6IDFweCBzb2xpZCAkYm9yZGVyOyBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIHBhZGRpbmc6IDI0cHg7IHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uc2Itc3RhdC1udW0geyBkaXNwbGF5OiBibG9jazsgZm9udC1zaXplOiAycmVtOyBmb250LXdlaWdodDogODAwOyBjb2xvcjogJG5hdnk7IH1cclxuLnNiLXN0YXQtbGJsIHsgZGlzcGxheTogYmxvY2s7IGZvbnQtc2l6ZTogLjgycmVtOyBjb2xvcjogJG11dGVkOyBtYXJnaW4tdG9wOiA0cHg7IH1cclxuXHJcbi8qIMOiwpTCgMOiwpTCgCBUeXBlcyDDosKUwoDDosKUwoAgKi9cclxuLnNiLXR5cGVzLWdyaWQge1xyXG4gIGRpc3BsYXk6IGdyaWQ7IGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDIzMHB4LCAxZnIpKTsgZ2FwOiAyMHB4OyBtYXJnaW4tdG9wOiAyNHB4O1xyXG59XHJcbi5zYi10eXBlLWNhcmQge1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7IGJvcmRlcjogMXB4IHNvbGlkICRib3JkZXI7IGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgcGFkZGluZzogMjRweDsgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAuMnM7XHJcbiAgbWF0LWljb24geyBjb2xvcjogJG5hdnk7IGZvbnQtc2l6ZTogMnJlbTsgd2lkdGg6IDJyZW07IGhlaWdodDogMnJlbTsgbWFyZ2luLWJvdHRvbTogMTJweDsgfVxyXG4gIGgzIHsgZm9udC1zaXplOiAxcmVtOyBmb250LXdlaWdodDogNzAwOyBtYXJnaW46IDAgMCA4cHg7IH1cclxuICBwICB7IGZvbnQtc2l6ZTogLjg4cmVtOyBjb2xvcjogJG11dGVkOyBtYXJnaW46IDA7IH1cclxuICAmOmhvdmVyIHsgYm94LXNoYWRvdzogMCA0cHggMjBweCByZ2JhKDAsMCwwLC4wOCk7IH1cclxufVxyXG5cclxuLyogw6LClMKAw6LClMKAIFN0ZXBzIMOiwpTCgMOiwpTCgCAqL1xyXG4uc2Itc3RlcHMgeyBkaXNwbGF5OiBmbGV4OyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBnYXA6IDIwcHg7IG1hcmdpbi10b3A6IDI0cHg7IH1cclxuLnNiLXN0ZXAge1xyXG4gIGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0OyBnYXA6IDIwcHg7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjsgYm9yZGVyOiAxcHggc29saWQgJGJvcmRlcjsgYm9yZGVyLXJhZGl1czogMTJweDsgcGFkZGluZzogMjRweDtcclxufVxyXG4uc2Itc3RlcC1udW0ge1xyXG4gIGZsZXgtc2hyaW5rOiAwOyB3aWR0aDogNDBweDsgaGVpZ2h0OiA0MHB4OyBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYmFja2dyb3VuZDogJG5hdnk7IGNvbG9yOiAjZmZmOyBmb250LXdlaWdodDogODAwO1xyXG4gIGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGp1c3RpZnktY29udGVudDogY2VudGVyOyBmb250LXNpemU6IDFyZW07XHJcbn1cclxuLnNiLXN0ZXAtYm9keSB7XHJcbiAgaDQgeyBmb250LXNpemU6IDFyZW07IGZvbnQtd2VpZ2h0OiA3MDA7IG1hcmdpbjogMCAwIDZweDsgfVxyXG4gIHAgIHsgZm9udC1zaXplOiAuODhyZW07IGNvbG9yOiAkbXV0ZWQ7IG1hcmdpbjogMDsgfVxyXG59XHJcblxyXG4vKiDDosKUwoDDosKUwoAgRkFRIChleHBhbnNpb24pIMOiwpTCgMOiwpTCgCAqL1xyXG5tYXQtZXhwYW5zaW9uLXBhbmVsIHsgbWFyZ2luLWJvdHRvbTogOHB4OyBib3JkZXItcmFkaXVzOiA4cHggIWltcG9ydGFudDsgfVxyXG5cclxuLyogw6LClMKAw6LClMKAIENUQSDDosKUwoDDosKUwoAgKi9cclxuLnNiLWN0YSB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgJG5hdnksICR0ZWFsKTtcclxuICBjb2xvcjogI2ZmZjsgdGV4dC1hbGlnbjogY2VudGVyOyBwYWRkaW5nOiA2NHB4IDI0cHg7XHJcbiAgaDIgeyBjb2xvcjogI2ZmZjsgbWFyZ2luLWJvdHRvbTogMTJweDsgfVxyXG4gIHAgIHsgb3BhY2l0eTogLjg4OyBtYXJnaW4tYm90dG9tOiAzMnB4OyB9XHJcbn1cclxuLnNiLWN0YS1hY3Rpb25zIHtcclxuICBkaXNwbGF5OiBmbGV4OyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgZ2FwOiAxNnB4OyBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgYnV0dG9uW21hdC1zdHJva2VkLWJ1dHRvbl0geyBib3JkZXItY29sb3I6ICNmZmY7IGNvbG9yOiAjZmZmOyB9XHJcbn1cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  }));
}
_staticBlock();

/***/ })

}]);
//# sourceMappingURL=src_app_pages_stokvel-basics_stokvel-basics_component_ts.js.map