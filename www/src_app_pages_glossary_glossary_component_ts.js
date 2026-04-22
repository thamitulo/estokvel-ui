"use strict";
(self["webpackChunkestokvel_ui"] = self["webpackChunkestokvel_ui"] || []).push([["src_app_pages_glossary_glossary_component_ts"],{

/***/ 2133:
/*!******************************************************!*\
  !*** ./src/app/pages/glossary/glossary.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GlossaryComponent: () => (/* binding */ GlossaryComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 4487);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ 3840);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2481);
var _staticBlock;









function GlossaryComponent_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const l_r1 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("active", ctx_r1.hasTerms(l_r1));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("href", ctx_r1.hasTerms(l_r1) ? "#letter-" + l_r1 : null, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](l_r1);
  }
}
function GlossaryComponent_ng_container_15_div_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 16)(1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const t_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](t_r3.term);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](t_r3.def);
  }
}
function GlossaryComponent_ng_container_15_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 13)(1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, GlossaryComponent_ng_container_15_div_1_div_3_Template, 5, 2, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const l_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("id", "letter-" + l_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](l_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r1.getTermsByLetter(l_r4));
  }
}
function GlossaryComponent_ng_container_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, GlossaryComponent_ng_container_15_div_1_Template, 4, 3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const l_r4 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.hasTerms(l_r4));
  }
}
class GlossaryComponent {
  constructor() {
    this.terms = [{
      term: 'Stokvel',
      def: 'An informal savings or investment club where members pool funds and receive payouts in rotation or at agreed intervals.'
    }, {
      term: 'Contribution',
      def: 'The fixed amount each member pays into the group fund on a regular basis (weekly, monthly, etc.).'
    }, {
      term: 'Payout Cycle',
      def: 'The agreed frequency at which the pooled funds are distributed to a member — monthly, bi-monthly or annually.'
    }, {
      term: 'Rotating Stokvel',
      def: 'A stokvel structure where each member receives the full pot once per cycle in a pre-agreed order.'
    }, {
      term: 'Investment Club',
      def: 'A stokvel where pooled funds are collectively invested in shares, property or other assets.'
    }, {
      term: 'Burial Society',
      def: 'A communal fund used to cover funeral and related expenses for members and their families.'
    }, {
      term: 'POPIA',
      def: 'Protection of Personal Information Act — South African legislation governing how personal data must be handled.'
    }, {
      term: 'Digital Constitution',
      def: 'An eStokvel-generated electronic document outlining the rules, obligations and rights of all stokvel members.'
    }, {
      term: 'Organiser',
      def: 'The member who creates and administers the stokvel group on eStokvel.'
    }, {
      term: 'Member',
      def: 'Any person who has joined and been accepted into a stokvel group.'
    }, {
      term: 'Privacy (Public/Private)',
      def: 'Public stokvels are open for anyone to join. Private stokvels require an invitation from the organiser.'
    }, {
      term: 'eStokvel Wallet',
      def: 'The in-app digital wallet used to store, send and receive stokvel funds securely.'
    }];
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  }
  getTermsByLetter(letter) {
    return this.terms.filter(t => t.term.toUpperCase().startsWith(letter));
  }
  hasTerms(letter) {
    return this.getTermsByLetter(letter).length > 0;
  }
  static #_ = _staticBlock = () => (this.ɵfac = function GlossaryComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || GlossaryComponent)();
  }, this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: GlossaryComponent,
    selectors: [["app-glossary"]],
    decls: 27,
    vars: 2,
    consts: [[1, "gl-page"], [1, "gl-hero"], [1, "gl-hero-inner"], [1, "gl-eyebrow"], [1, "gl-alpha-nav"], [4, "ngFor", "ngForOf"], [1, "gl-section"], [1, "gl-container"], [1, "gl-cta"], ["mat-flat-button", "", "color", "primary", "routerLink", "/contact"], ["mat-stroked-button", "", "routerLink", "/stokvel-basics"], [1, "gl-alpha-link"], ["class", "gl-letter-group", 3, "id", 4, "ngIf"], [1, "gl-letter-group", 3, "id"], [1, "gl-letter-heading"], ["class", "gl-term-card", 4, "ngFor", "ngForOf"], [1, "gl-term-card"]],
    template: function GlossaryComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "section", 1)(2, "div", 2)(3, "div", 3)(4, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "menu_book");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, " Reference");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Glossary");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Key terms and definitions to help you navigate the world of stokvels and eStokvel.");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, GlossaryComponent_ng_container_12_Template, 3, 4, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "section", 6)(14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, GlossaryComponent_ng_container_15_Template, 2, 1, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "section", 8)(17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, "Still have questions?");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "button", 9)(20, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, "mail");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, " Contact Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "button", 10)(24, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, "school");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26, " Stokvel Basics");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.alphabet);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.alphabet);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink, _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButton],
    styles: [".gl-page[_ngcontent-%COMP%] {\n  font-family: \"Inter\", sans-serif;\n  color: #1e293b;\n}\n\n.gl-hero[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #0d47a1, #00796b);\n  color: #fff;\n  padding: 72px 24px 56px;\n  text-align: center;\n}\n.gl-hero[_ngcontent-%COMP%]   .gl-hero-inner[_ngcontent-%COMP%] {\n  max-width: 680px;\n  margin: 0 auto;\n}\n.gl-hero[_ngcontent-%COMP%]   .gl-eyebrow[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  background: rgba(255, 255, 255, 0.15);\n  border-radius: 20px;\n  padding: 4px 14px;\n  font-size: 0.82rem;\n  font-weight: 600;\n  margin-bottom: 16px;\n}\n.gl-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 2.6rem;\n  font-weight: 800;\n  margin: 0 0 12px;\n}\n.gl-hero[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  opacity: 0.88;\n  margin: 0;\n}\n\n.gl-alpha-nav[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 6px;\n  padding: 20px 24px;\n  background: #fff;\n  border-bottom: 1px solid #e2e8f0;\n  position: sticky;\n  top: 64px;\n  z-index: 10;\n}\n\n.gl-alpha-link[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 6px;\n  font-weight: 700;\n  font-size: 0.85rem;\n  color: #64748b;\n  text-decoration: none;\n  transition: all 0.15s;\n}\n.gl-alpha-link.active[_ngcontent-%COMP%] {\n  color: #0d47a1;\n  background: rgba(13, 71, 161, 0.08);\n  cursor: pointer;\n}\n.gl-alpha-link.active[_ngcontent-%COMP%]:hover {\n  background: rgba(13, 71, 161, 0.15);\n}\n\n.gl-section[_ngcontent-%COMP%] {\n  padding: 48px 24px 64px;\n}\n\n.gl-container[_ngcontent-%COMP%] {\n  max-width: 860px;\n  margin: 0 auto;\n}\n\n.gl-letter-group[_ngcontent-%COMP%] {\n  margin-bottom: 40px;\n}\n\n.gl-letter-heading[_ngcontent-%COMP%] {\n  font-size: 1.8rem;\n  font-weight: 800;\n  color: #0d47a1;\n  border-bottom: 2px solid #0d47a1;\n  padding-bottom: 8px;\n  margin-bottom: 16px;\n}\n\n.gl-term-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  padding: 20px 24px;\n  margin-bottom: 10px;\n}\n.gl-term-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 700;\n  margin: 0 0 6px;\n}\n.gl-term-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  color: #64748b;\n  margin: 0;\n}\n\n.gl-cta[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border-top: 1px solid #e2e8f0;\n  padding: 40px 24px;\n  text-align: center;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-wrap: wrap;\n  gap: 16px;\n}\n.gl-cta[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-weight: 600;\n  font-size: 1rem;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvZ2xvc3NhcnkvZ2xvc3NhcnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFBVyxnQ0FBQTtFQUFrQyxjQUZ4QjtBQUVyQjs7QUFFQTtFQUNFLHFEQUFBO0VBQ0EsV0FBQTtFQUFhLHVCQUFBO0VBQXlCLGtCQUFBO0FBR3hDO0FBRkU7RUFBaUIsZ0JBQUE7RUFBa0IsY0FBQTtBQU1yQztBQUxFO0VBQWMsb0JBQUE7RUFBc0IsbUJBQUE7RUFBcUIsUUFBQTtFQUFVLHFDQUFBO0VBQW1DLG1CQUFBO0VBQXFCLGlCQUFBO0VBQW1CLGtCQUFBO0VBQW1CLGdCQUFBO0VBQWtCLG1CQUFBO0FBZ0JyTDtBQWZFO0VBQUssaUJBQUE7RUFBbUIsZ0JBQUE7RUFBa0IsZ0JBQUE7QUFvQjVDO0FBbkJFO0VBQUssYUFBQTtFQUFjLFNBQUE7QUF1QnJCOztBQXBCQTtFQUNFLGFBQUE7RUFBZSxlQUFBO0VBQWlCLHVCQUFBO0VBQXlCLFFBQUE7RUFDekQsa0JBQUE7RUFBb0IsZ0JBQUE7RUFBa0IsZ0NBQUE7RUFDdEMsZ0JBQUE7RUFBa0IsU0FBQTtFQUFXLFdBQUE7QUE4Qi9COztBQTVCQTtFQUNFLFdBQUE7RUFBYSxZQUFBO0VBQWMsYUFBQTtFQUFlLG1CQUFBO0VBQXFCLHVCQUFBO0VBQy9ELGtCQUFBO0VBQW9CLGdCQUFBO0VBQWtCLGtCQUFBO0VBQW1CLGNBcEJyQjtFQXFCcEMscUJBQUE7RUFBdUIscUJBQUE7QUF1Q3pCO0FBdENFO0VBQVcsY0F2Qk47RUF1Qm9CLG1DQUFBO0VBQTZCLGVBQUE7QUEyQ3hEO0FBMUNFO0VBQWlCLG1DQUFBO0FBNkNuQjs7QUExQ0E7RUFBYyx1QkFBQTtBQThDZDs7QUE3Q0E7RUFBZ0IsZ0JBQUE7RUFBa0IsY0FBQTtBQWtEbEM7O0FBaERBO0VBQW1CLG1CQUFBO0FBb0RuQjs7QUFuREE7RUFBcUIsaUJBQUE7RUFBbUIsZ0JBQUE7RUFBa0IsY0EvQm5EO0VBK0JpRSxnQ0FBQTtFQUFnQyxtQkFBQTtFQUFxQixtQkFBQTtBQTREN0g7O0FBM0RBO0VBQWdCLGdCQUFBO0VBQWtCLHlCQUFBO0VBQTJCLG1CQUFBO0VBQXFCLGtCQUFBO0VBQW9CLG1CQUFBO0FBbUV0RztBQWxFRTtFQUFLLGVBQUE7RUFBaUIsZ0JBQUE7RUFBa0IsZUFBQTtBQXVFMUM7QUF0RUU7RUFBSyxrQkFBQTtFQUFtQixjQWpDWTtFQWlDRyxTQUFBO0FBMkV6Qzs7QUF4RUE7RUFDRSxtQkFyQ0c7RUFxQ2MsNkJBQUE7RUFDakIsa0JBQUE7RUFBb0Isa0JBQUE7RUFBb0IsYUFBQTtFQUFlLG1CQUFBO0VBQXFCLHVCQUFBO0VBQXlCLGVBQUE7RUFBaUIsU0FBQTtBQWtGeEg7QUFqRkU7RUFBSSxTQUFBO0VBQVcsZ0JBQUE7RUFBa0IsZUFBQTtBQXNGbkMiLCJzb3VyY2VzQ29udGVudCI6WyIkbmF2eTogIzBkNDdhMTsgJHRlYWw6ICMwMDc5NmI7ICRnb2xkOiAjZjU5ZTBiO1xyXG4kYmc6ICNmOGZhZmM7ICR0ZXh0OiAjMWUyOTNiOyAkbXV0ZWQ6ICM2NDc0OGI7ICRib3JkZXI6ICNlMmU4ZjA7XHJcblxyXG4uZ2wtcGFnZSB7IGZvbnQtZmFtaWx5OiAnSW50ZXInLCBzYW5zLXNlcmlmOyBjb2xvcjogJHRleHQ7IH1cclxuXHJcbi5nbC1oZXJvIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAkbmF2eSwgJHRlYWwpO1xyXG4gIGNvbG9yOiAjZmZmOyBwYWRkaW5nOiA3MnB4IDI0cHggNTZweDsgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIC5nbC1oZXJvLWlubmVyIHsgbWF4LXdpZHRoOiA2ODBweDsgbWFyZ2luOiAwIGF1dG87IH1cclxuICAuZ2wtZXllYnJvdyB7IGRpc3BsYXk6IGlubGluZS1mbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDZweDsgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwuMTUpOyBib3JkZXItcmFkaXVzOiAyMHB4OyBwYWRkaW5nOiA0cHggMTRweDsgZm9udC1zaXplOiAuODJyZW07IGZvbnQtd2VpZ2h0OiA2MDA7IG1hcmdpbi1ib3R0b206IDE2cHg7IH1cclxuICBoMSB7IGZvbnQtc2l6ZTogMi42cmVtOyBmb250LXdlaWdodDogODAwOyBtYXJnaW46IDAgMCAxMnB4OyB9XHJcbiAgcCAgeyBvcGFjaXR5OiAuODg7IG1hcmdpbjogMDsgfVxyXG59XHJcblxyXG4uZ2wtYWxwaGEtbmF2IHtcclxuICBkaXNwbGF5OiBmbGV4OyBmbGV4LXdyYXA6IHdyYXA7IGp1c3RpZnktY29udGVudDogY2VudGVyOyBnYXA6IDZweDtcclxuICBwYWRkaW5nOiAyMHB4IDI0cHg7IGJhY2tncm91bmQ6ICNmZmY7IGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkYm9yZGVyO1xyXG4gIHBvc2l0aW9uOiBzdGlja3k7IHRvcDogNjRweDsgei1pbmRleDogMTA7XHJcbn1cclxuLmdsLWFscGhhLWxpbmsge1xyXG4gIHdpZHRoOiAzMnB4OyBoZWlnaHQ6IDMycHg7IGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDZweDsgZm9udC13ZWlnaHQ6IDcwMDsgZm9udC1zaXplOiAuODVyZW07IGNvbG9yOiAkbXV0ZWQ7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyB0cmFuc2l0aW9uOiBhbGwgLjE1cztcclxuICAmLmFjdGl2ZSB7IGNvbG9yOiAkbmF2eTsgYmFja2dyb3VuZDogcmdiYSgkbmF2eSwuMDgpOyBjdXJzb3I6IHBvaW50ZXI7IH1cclxuICAmLmFjdGl2ZTpob3ZlciB7IGJhY2tncm91bmQ6IHJnYmEoJG5hdnksLjE1KTsgfVxyXG59XHJcblxyXG4uZ2wtc2VjdGlvbiB7IHBhZGRpbmc6IDQ4cHggMjRweCA2NHB4OyB9XHJcbi5nbC1jb250YWluZXIgeyBtYXgtd2lkdGg6IDg2MHB4OyBtYXJnaW46IDAgYXV0bzsgfVxyXG5cclxuLmdsLWxldHRlci1ncm91cCB7IG1hcmdpbi1ib3R0b206IDQwcHg7IH1cclxuLmdsLWxldHRlci1oZWFkaW5nIHsgZm9udC1zaXplOiAxLjhyZW07IGZvbnQtd2VpZ2h0OiA4MDA7IGNvbG9yOiAkbmF2eTsgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICRuYXZ5OyBwYWRkaW5nLWJvdHRvbTogOHB4OyBtYXJnaW4tYm90dG9tOiAxNnB4OyB9XHJcbi5nbC10ZXJtLWNhcmQgeyBiYWNrZ3JvdW5kOiAjZmZmOyBib3JkZXI6IDFweCBzb2xpZCAkYm9yZGVyOyBib3JkZXItcmFkaXVzOiAxMHB4OyBwYWRkaW5nOiAyMHB4IDI0cHg7IG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgaDMgeyBmb250LXNpemU6IDFyZW07IGZvbnQtd2VpZ2h0OiA3MDA7IG1hcmdpbjogMCAwIDZweDsgfVxyXG4gIHAgIHsgZm9udC1zaXplOiAuODhyZW07IGNvbG9yOiAkbXV0ZWQ7IG1hcmdpbjogMDsgfVxyXG59XHJcblxyXG4uZ2wtY3RhIHtcclxuICBiYWNrZ3JvdW5kOiAkYmc7IGJvcmRlci10b3A6IDFweCBzb2xpZCAkYm9yZGVyO1xyXG4gIHBhZGRpbmc6IDQwcHggMjRweDsgdGV4dC1hbGlnbjogY2VudGVyOyBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgZmxleC13cmFwOiB3cmFwOyBnYXA6IDE2cHg7XHJcbiAgcCB7IG1hcmdpbjogMDsgZm9udC13ZWlnaHQ6IDYwMDsgZm9udC1zaXplOiAxcmVtOyB9XHJcbn1cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  }));
}
_staticBlock();

/***/ })

}]);
//# sourceMappingURL=src_app_pages_glossary_glossary_component_ts.js.map