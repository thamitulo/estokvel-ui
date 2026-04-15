"use strict";
(self["webpackChunkestokvel_ui"] = self["webpackChunkestokvel_ui"] || []).push([["src_app_pages_press_press_component_ts"],{

/***/ 3991:
/*!************************************************!*\
  !*** ./src/app/pages/press/press.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PressComponent: () => (/* binding */ PressComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ 3777);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ 3840);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ 5759);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ 5541);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/checkbox */ 7024);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/progress-spinner */ 1134);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2481);
/* harmony import */ var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/clipboard */ 2352);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ 8388);
var _staticBlock;






















function PressComponent_mat_error_157_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Email is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function PressComponent_mat_error_158_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Please enter a valid email ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function PressComponent_span_162_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Subscribe");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function PressComponent_mat_spinner_163_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "mat-spinner", 48);
  }
}
class PressComponent {
  constructor(fb, snackBar, clipboard) {
    this.fb = fb;
    this.snackBar = snackBar;
    this.clipboard = clipboard;
    this.isSubmitting = false;
    this.newsletterForm = this.fb.group({
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.email]],
      consent: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.requiredTrue]
    });
  }
  ngOnInit() {}
  shareArticle() {
    const articleUrl = 'https://www.itweb.co.za/article/estokvel-turns-stokvels-into-business-entities/KwbrpOqgjpAMDLZn';
    const articleTitle = 'eStokvel turns stokvels into business entities - ITWeb';
    const shareText = `Check out this article about eStokvel transforming traditional stokvels into business entities:`;
    if (navigator.share) {
      navigator.share({
        title: articleTitle,
        text: shareText,
        url: articleUrl
      }).catch(error => {
        console.log('Error sharing:', error);
        this.copyToClipboard(articleUrl);
      });
    } else {
      this.copyToClipboard(articleUrl);
    }
  }
  copyToClipboard(text) {
    this.clipboard.copy(text);
    this.snackBar.open('Article link copied to clipboard!', 'Close', {
      duration: 3000,
      panelClass: ['success-snackbar']
    });
  }
  downloadAsset(assetType) {
    // use to trigger actual downloads
    // For now, show a snackbar message
    let message = '';
    switch (assetType) {
      case 'logos':
        message = 'Downloading brand logos...';
        break;
      case 'photos':
        message = 'Downloading team photos...';
        break;
      case 'presskit':
        message = 'Downloading press kit...';
        break;
      default:
        message = 'Downloading media asset...';
    }
    this.snackBar.open(message, 'Close', {
      duration: 3000,
      panelClass: ['info-snackbar']
    });
    // Simulate download
    setTimeout(() => {
      this.snackBar.open('Download complete!', 'Close', {
        duration: 2000
      });
    }, 1000);
  }
  openContactForm() {
    const email = 'press@estokvel.co.za';
    const subject = 'Press Inquiry - eStokvel';
    const body = `Dear eStokvel Press Team,\n\nI would like to inquire about:\n\n[Please describe your inquiry here]\n\nBest regards,\n[Your Name]\n[Your Media Outlet]`;
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoLink, '_blank');
  }
  onSubmitNewsletter() {
    if (this.newsletterForm.valid) {
      this.isSubmitting = true;
      // Simulate API call
      setTimeout(() => {
        this.isSubmitting = false;
        this.newsletterForm.reset();
        this.snackBar.open('Thank you for subscribing to our press updates!', 'Close', {
          duration: 4000,
          panelClass: ['success-snackbar']
        });
      }, 1500);
    }
  }
  static #_ = _staticBlock = () => (this.ɵfac = function PressComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || PressComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_11__.Clipboard));
  }, this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
    type: PressComponent,
    selectors: [["app-press"]],
    decls: 166,
    vars: 6,
    consts: [[1, "press-container"], [1, "press-hero"], [1, "hero-content"], [1, "hero-title"], [1, "hero-subtitle"], [1, "press-content"], [1, "container"], [1, "coverage-section"], [1, "section-header"], [1, "section-subtitle"], [1, "featured-article"], [1, "article-card"], [1, "article-header"], [1, "source-info"], ["src", "assets/images/press/itweb-logo.png", "alt", "ITWeb Logo", "onerror", "this.src='assets/images/press/default-logo.png'", 1, "source-logo"], [1, "source-details"], [1, "source-name"], [1, "article-date"], [1, "article-type"], [1, "article-title"], [1, "article-excerpt"], [1, "article-highlights"], [1, "article-actions"], ["href", "https://www.itweb.co.za/article/estokvel-turns-stokvels-into-business-entities/KwbrpOqgjpAMDLZn", "target", "_blank", "rel", "noopener noreferrer", "mat-raised-button", "", "color", "primary", 1, "read-article-btn"], ["mat-stroked-button", "", "color", "primary", 1, "share-btn", 3, "click"], [1, "media-assets"], [1, "assets-grid"], [1, "asset-card"], [1, "asset-icon"], ["mat-button", "", "color", "primary", 3, "click"], [1, "press-contact"], [1, "contact-card"], [1, "contact-header"], [1, "contact-icon"], [1, "contact-info"], [1, "contact-details"], [1, "contact-item"], ["mat-raised-button", "", "color", "primary", 1, "contact-btn", 3, "click"], [1, "newsletter-section"], [1, "newsletter-card"], [1, "newsletter-form", 3, "formGroup"], ["appearance", "outline", 1, "full-width"], ["matInput", "", "formControlName", "email", "type", "email", "placeholder", "Enter your email"], [4, "ngIf"], ["formControlName", "consent", "color", "primary"], ["mat-raised-button", "", "color", "primary", "type", "submit", 1, "subscribe-btn", 3, "disabled"], ["diameter", "20", 4, "ngIf"], [1, "privacy-note"], ["diameter", "20"]],
    template: function PressComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 0)(1, "section", 1)(2, "div", 2)(3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4, "Press & Media");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6, "Stay updated with the latest news and coverage about eStokvel");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "section", 5)(8, "div", 6)(9, "div", 7)(10, "div", 8)(11, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](12, "Latest Coverage");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](14, "Read what the media is saying about eStokvel");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "div", 10)(16, "mat-card", 11)(17, "div", 12)(18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](19, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](20, "div", 15)(21, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](22, "ITWeb");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](23, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](24, "September 2024");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](25, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](26, "Feature Article");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](27, "mat-card-content")(28, "h3", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](29, "eStokvel turns stokvels into business entities");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](30, "div", 20)(31, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](32, "eStokvel, a South African fintech startup, is revolutionizing traditional stokvels by transforming them into formal business entities through its digital platform.");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](33, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](34, "The platform enables stokvel groups to manage their finances transparently, access banking services, and operate with legal recognition, bridging the gap between informal savings groups and formal financial systems.");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](35, "div", 21)(36, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](37, "Key Highlights:");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](38, "ul")(39, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](40, "Digital transformation of traditional stokvels");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](41, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](42, "Legal entity status for stokvel groups");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](43, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](44, "Transparent financial management tools");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](45, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](46, "Integration with formal banking systems");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](47, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](48, "Focus on financial inclusion and empowerment");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](49, "div", 22)(50, "a", 23)(51, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](52, "open_in_new");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](53, " Read Full Article on ITWeb ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](54, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function PressComponent_Template_button_click_54_listener() {
          return ctx.shareArticle();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](55, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](56, "share");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](57, " Share Article ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](58, "div", 25)(59, "div", 8)(60, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](61, "Media Assets");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](62, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](63, "Download official eStokvel media resources");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](64, "div", 26)(65, "mat-card", 27)(66, "mat-card-content")(67, "div", 28)(68, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](69, "photo_library");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](70, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](71, "Brand Logos");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](72, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](73, "Official eStokvel logos in various formats");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](74, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function PressComponent_Template_button_click_74_listener() {
          return ctx.downloadAsset("logos");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](75, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](76, "download");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](77, " Download ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](78, "mat-card", 27)(79, "mat-card-content")(80, "div", 28)(81, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](82, "portrait");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](83, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](84, "Team Photos");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](85, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](86, "High-resolution photos of our team");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](87, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function PressComponent_Template_button_click_87_listener() {
          return ctx.downloadAsset("photos");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](88, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](89, "download");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](90, " Download ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](91, "mat-card", 27)(92, "mat-card-content")(93, "div", 28)(94, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](95, "description");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](96, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](97, "Press Kit");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](98, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](99, "Complete company information pack");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](100, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function PressComponent_Template_button_click_100_listener() {
          return ctx.downloadAsset("presskit");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](101, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](102, "download");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](103, " Download ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](104, "div", 30)(105, "mat-card", 31)(106, "mat-card-content")(107, "div", 32)(108, "div", 33)(109, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](110, "contact_mail");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](111, "div", 34)(112, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](113, "Press & Media Inquiries");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](114, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](115, "For media inquiries, interview requests, or additional information, please contact our press team.");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](116, "div", 35)(117, "div", 36)(118, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](119, "person");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](120, "div")(121, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](122, "Press Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](123, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](124, "Marketing & Communications Team");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](125, "div", 36)(126, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](127, "email");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](128, "div")(129, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](130, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](131, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](132, "press@estokvel.co.za");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](133, "div", 36)(134, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](135, "phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](136, "div")(137, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](138, "Phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](139, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](140, "+27 11 234 5678");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](141, "button", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function PressComponent_Template_button_click_141_listener() {
          return ctx.openContactForm();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](142, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](143, "mail");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](144, " Contact Press Team ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](145, "div", 38)(146, "mat-card", 39)(147, "mat-card-content")(148, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](149, "Stay Updated");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](150, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](151, "Subscribe to receive press releases and company updates");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](152, "form", 40)(153, "mat-form-field", 41)(154, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](155, "Your Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](156, "input", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](157, PressComponent_mat_error_157_Template, 2, 0, "mat-error", 43)(158, PressComponent_mat_error_158_Template, 2, 0, "mat-error", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](159, "mat-checkbox", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](160, " I agree to receive press releases and updates from eStokvel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](161, "button", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](162, PressComponent_span_162_Template, 2, 0, "span", 43)(163, PressComponent_mat_spinner_163_Template, 1, 0, "mat-spinner", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](164, "p", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](165, "We respect your privacy. Unsubscribe at any time.");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()()()();
      }
      if (rf & 2) {
        let tmp_1_0;
        let tmp_2_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](152);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("formGroup", ctx.newsletterForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", (tmp_1_0 = ctx.newsletterForm.get("email")) == null ? null : tmp_1_0.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", (tmp_2_0 = ctx.newsletterForm.get("email")) == null ? null : tmp_2_0.hasError("email"));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", ctx.newsletterForm.invalid || ctx.isSubmitting);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx.isSubmitting);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.isSubmitting);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName, _angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButton, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCardModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCardContent, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIcon, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatFormFieldModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatError, _angular_material_input__WEBPACK_IMPORTED_MODULE_6__.MatInputModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_6__.MatInput, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__.MatCheckboxModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__.MatCheckbox, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__.MatSnackBarModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__.MatProgressSpinnerModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__.MatProgressSpinner],
    styles: [".press-container[_ngcontent-%COMP%] {\n  font-family: \"Roboto\", sans-serif;\n  color: #333;\n  line-height: 1.6;\n}\n\n\n\n.press-hero[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, rgba(6, 29, 74, 0.9), rgba(13, 71, 161, 0.9));\n  background-size: cover;\n  background-position: center;\n  color: white;\n  padding: 80px 20px;\n  text-align: center;\n}\n.press-hero[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%] {\n  max-width: 800px;\n  margin: 0 auto;\n}\n.press-hero[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%]   .hero-title[_ngcontent-%COMP%] {\n  font-size: 48px;\n  font-weight: 700;\n  margin-bottom: 20px;\n  color: white;\n}\n@media (max-width: 768px) {\n  .press-hero[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%]   .hero-title[_ngcontent-%COMP%] {\n    font-size: 36px;\n  }\n}\n.press-hero[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%]   .hero-subtitle[_ngcontent-%COMP%] {\n  font-size: 20px;\n  opacity: 0.9;\n  max-width: 600px;\n  margin: 0 auto;\n}\n@media (max-width: 768px) {\n  .press-hero[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%]   .hero-subtitle[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n}\n\n\n\n.press-content[_ngcontent-%COMP%] {\n  padding: 60px 0;\n  background: #f8f9fa;\n}\n\n.container[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 20px;\n}\n\n.section-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 40px;\n}\n.section-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 36px;\n  font-weight: 700;\n  color: #333;\n  margin-bottom: 10px;\n}\n@media (max-width: 768px) {\n  .section-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 28px;\n  }\n}\n.section-header[_ngcontent-%COMP%]   .section-subtitle[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #666;\n  max-width: 500px;\n  margin: 0 auto;\n}\n.section-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 600;\n  color: #333;\n  margin-bottom: 10px;\n}\n\n\n\n.featured-article[_ngcontent-%COMP%] {\n  margin-bottom: 60px;\n}\n\n.article-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);\n  overflow: hidden;\n}\n.article-card[_ngcontent-%COMP%]   .article-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px 30px;\n  background: #f8f9fa;\n  border-bottom: 1px solid #e9ecef;\n}\n.article-card[_ngcontent-%COMP%]   .article-header[_ngcontent-%COMP%]   .source-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 15px;\n}\n.article-card[_ngcontent-%COMP%]   .article-header[_ngcontent-%COMP%]   .source-info[_ngcontent-%COMP%]   .source-logo[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  object-fit: contain;\n  border-radius: 8px;\n  background: white;\n  padding: 5px;\n  border: 1px solid #dee2e6;\n}\n.article-card[_ngcontent-%COMP%]   .article-header[_ngcontent-%COMP%]   .source-info[_ngcontent-%COMP%]   .source-details[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.article-card[_ngcontent-%COMP%]   .article-header[_ngcontent-%COMP%]   .source-info[_ngcontent-%COMP%]   .source-details[_ngcontent-%COMP%]   .source-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #333;\n  font-size: 16px;\n}\n.article-card[_ngcontent-%COMP%]   .article-header[_ngcontent-%COMP%]   .source-info[_ngcontent-%COMP%]   .source-details[_ngcontent-%COMP%]   .article-date[_ngcontent-%COMP%] {\n  color: #666;\n  font-size: 14px;\n}\n.article-card[_ngcontent-%COMP%]   .article-header[_ngcontent-%COMP%]   .article-type[_ngcontent-%COMP%] {\n  background: rgba(13, 71, 161, 0.1);\n  color: #0d47a1;\n  padding: 6px 12px;\n  border-radius: 20px;\n  font-size: 14px;\n  font-weight: 600;\n}\n.article-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%] {\n  padding: 30px;\n}\n.article-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .article-title[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 700;\n  color: #333;\n  margin-bottom: 25px;\n  line-height: 1.3;\n}\n@media (max-width: 768px) {\n  .article-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .article-title[_ngcontent-%COMP%] {\n    font-size: 24px;\n  }\n}\n.article-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .article-excerpt[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n}\n.article-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .article-excerpt[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #666;\n  line-height: 1.8;\n  margin-bottom: 15px;\n}\n.article-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .article-excerpt[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.article-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .article-highlights[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n  padding: 20px;\n  background: #f8f9fa;\n  border-radius: 8px;\n}\n.article-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .article-highlights[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  color: #333;\n  margin-bottom: 15px;\n}\n.article-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .article-highlights[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  padding-left: 20px;\n  color: #666;\n}\n.article-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .article-highlights[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n  line-height: 1.5;\n}\n.article-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .article-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 15px;\n  flex-wrap: wrap;\n}\n.article-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .article-actions[_ngcontent-%COMP%]   .read-article-btn[_ngcontent-%COMP%], \n.article-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .article-actions[_ngcontent-%COMP%]   .share-btn[_ngcontent-%COMP%] {\n  padding: 12px 24px;\n  font-weight: 600;\n}\n.article-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .article-actions[_ngcontent-%COMP%]   .read-article-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], \n.article-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .article-actions[_ngcontent-%COMP%]   .share-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}\n.article-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .article-actions[_ngcontent-%COMP%]   .read-article-btn[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #092e6b, #0d47a1);\n  color: white;\n}\n.article-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .article-actions[_ngcontent-%COMP%]   .read-article-btn[_ngcontent-%COMP%]:hover {\n  background: linear-gradient(135deg, #0d47a1, #1565c0);\n}\n\n\n\n.media-assets[_ngcontent-%COMP%] {\n  margin-bottom: 60px;\n}\n.media-assets[_ngcontent-%COMP%]   .assets-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 25px;\n  margin-top: 30px;\n}\n.media-assets[_ngcontent-%COMP%]   .asset-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);\n  text-align: center;\n  padding: 30px 20px;\n  transition: transform 0.3s ease;\n}\n.media-assets[_ngcontent-%COMP%]   .asset-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5px);\n  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);\n}\n.media-assets[_ngcontent-%COMP%]   .asset-card[_ngcontent-%COMP%]   .asset-icon[_ngcontent-%COMP%] {\n  width: 70px;\n  height: 70px;\n  background: rgba(13, 71, 161, 0.1);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto 20px;\n}\n.media-assets[_ngcontent-%COMP%]   .asset-card[_ngcontent-%COMP%]   .asset-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 32px;\n  color: #0d47a1;\n}\n.media-assets[_ngcontent-%COMP%]   .asset-card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  color: #333;\n  margin-bottom: 10px;\n}\n.media-assets[_ngcontent-%COMP%]   .asset-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #666;\n  margin-bottom: 20px;\n  font-size: 14px;\n}\n.media-assets[_ngcontent-%COMP%]   .asset-card[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  margin-right: 5px;\n}\n\n\n\n.press-contact[_ngcontent-%COMP%] {\n  margin-bottom: 60px;\n}\n.press-contact[_ngcontent-%COMP%]   .contact-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);\n}\n.press-contact[_ngcontent-%COMP%]   .contact-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%] {\n  padding: 40px;\n}\n.press-contact[_ngcontent-%COMP%]   .contact-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .contact-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n  margin-bottom: 30px;\n}\n.press-contact[_ngcontent-%COMP%]   .contact-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .contact-header[_ngcontent-%COMP%]   .contact-icon[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  background: linear-gradient(135deg, #092e6b, #0d47a1);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.press-contact[_ngcontent-%COMP%]   .contact-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .contact-header[_ngcontent-%COMP%]   .contact-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 32px;\n  color: white;\n}\n.press-contact[_ngcontent-%COMP%]   .contact-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .contact-header[_ngcontent-%COMP%]   .contact-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 700;\n  color: #333;\n  margin-bottom: 8px;\n}\n.press-contact[_ngcontent-%COMP%]   .contact-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .contact-header[_ngcontent-%COMP%]   .contact-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #666;\n  margin: 0;\n}\n.press-contact[_ngcontent-%COMP%]   .contact-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .contact-details[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 25px;\n  margin-bottom: 30px;\n}\n.press-contact[_ngcontent-%COMP%]   .contact-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .contact-details[_ngcontent-%COMP%]   .contact-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 15px;\n  padding: 20px;\n  background: #f8f9fa;\n  border-radius: 8px;\n}\n.press-contact[_ngcontent-%COMP%]   .contact-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .contact-details[_ngcontent-%COMP%]   .contact-item[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #0d47a1;\n  font-size: 24px;\n}\n.press-contact[_ngcontent-%COMP%]   .contact-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .contact-details[_ngcontent-%COMP%]   .contact-item[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  font-weight: 600;\n  color: #333;\n  margin-bottom: 4px;\n}\n.press-contact[_ngcontent-%COMP%]   .contact-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .contact-details[_ngcontent-%COMP%]   .contact-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #666;\n  margin: 0;\n  font-size: 14px;\n}\n.press-contact[_ngcontent-%COMP%]   .contact-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .contact-btn[_ngcontent-%COMP%] {\n  padding: 14px 32px;\n  font-weight: 600;\n}\n.press-contact[_ngcontent-%COMP%]   .contact-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .contact-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}\n\n\n\n.newsletter-section[_ngcontent-%COMP%]   .newsletter-card[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, rgba(6, 29, 74, 0.05), rgba(13, 71, 161, 0.05));\n  border: 2px solid rgba(13, 71, 161, 0.1);\n  border-radius: 12px;\n}\n.newsletter-section[_ngcontent-%COMP%]   .newsletter-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%] {\n  padding: 40px;\n  text-align: center;\n}\n.newsletter-section[_ngcontent-%COMP%]   .newsletter-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 700;\n  color: #333;\n  margin-bottom: 15px;\n}\n.newsletter-section[_ngcontent-%COMP%]   .newsletter-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #666;\n  margin-bottom: 30px;\n  font-size: 16px;\n  max-width: 600px;\n  margin-left: auto;\n  margin-right: auto;\n}\n.newsletter-section[_ngcontent-%COMP%]   .newsletter-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .newsletter-form[_ngcontent-%COMP%] {\n  max-width: 500px;\n  margin: 0 auto 20px;\n}\n.newsletter-section[_ngcontent-%COMP%]   .newsletter-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .newsletter-form[_ngcontent-%COMP%]   .full-width[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 20px;\n}\n.newsletter-section[_ngcontent-%COMP%]   .newsletter-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .newsletter-form[_ngcontent-%COMP%]   mat-checkbox[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 25px;\n  text-align: left;\n  color: #666;\n}\n.newsletter-section[_ngcontent-%COMP%]   .newsletter-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .newsletter-form[_ngcontent-%COMP%]   .subscribe-btn[_ngcontent-%COMP%] {\n  padding: 12px 40px;\n  font-weight: 600;\n}\n.newsletter-section[_ngcontent-%COMP%]   .newsletter-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .newsletter-form[_ngcontent-%COMP%]   .subscribe-btn[_ngcontent-%COMP%]   mat-spinner[_ngcontent-%COMP%] {\n  margin: 0 auto;\n}\n.newsletter-section[_ngcontent-%COMP%]   .newsletter-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .privacy-note[_ngcontent-%COMP%] {\n  color: #888;\n  font-size: 14px;\n  margin: 20px 0 0;\n}\n\n\n\n@media (max-width: 768px) {\n  .press-hero[_ngcontent-%COMP%] {\n    padding: 60px 20px;\n  }\n  .press-hero[_ngcontent-%COMP%]   .hero-title[_ngcontent-%COMP%] {\n    font-size: 36px;\n  }\n  .press-hero[_ngcontent-%COMP%]   .hero-subtitle[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n  .press-content[_ngcontent-%COMP%] {\n    padding: 40px 0;\n  }\n  .article-card[_ngcontent-%COMP%]   .article-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 15px;\n  }\n  .article-card[_ngcontent-%COMP%]   .article-header[_ngcontent-%COMP%]   .article-type[_ngcontent-%COMP%] {\n    align-self: flex-start;\n  }\n  .article-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%] {\n    padding: 20px;\n  }\n  .article-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .article-title[_ngcontent-%COMP%] {\n    font-size: 24px;\n  }\n  .contact-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%] {\n    padding: 25px;\n  }\n  .newsletter-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%] {\n    padding: 25px;\n  }\n  .article-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .article-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .assets-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr !important;\n  }\n  .contact-details[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr !important;\n  }\n}\n\n\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.article-card[_ngcontent-%COMP%], \n.asset-card[_ngcontent-%COMP%], \n.contact-card[_ngcontent-%COMP%], \n.newsletter-card[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fadeIn 0.6s ease-out;\n}\n\n\n\n  .success-snackbar {\n  background: #4caf50 !important;\n  color: white !important;\n}\n  .info-snackbar {\n  background: #2196f3 !important;\n  color: white !important;\n}\n  .error-snackbar {\n  background: #f44336 !important;\n  color: white !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvcHJlc3MvcHJlc3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQ0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBLGlCQUFBO0FBQ0E7RUFDRSxpRkFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQUNGO0FBQ0U7RUFDRSxnQkFBQTtFQUNBLGNBQUE7QUFDSjtBQUNJO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBQ047QUFDTTtFQU5GO0lBT0ksZUFBQTtFQUVOO0FBQ0Y7QUFDSTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBQ047QUFDTTtFQU5GO0lBT0ksZUFBQTtFQUVOO0FBQ0Y7O0FBR0EsaUJBQUE7QUFDQTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtBQUFGOztBQUdBO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQUFGOztBQUdBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtBQUFGO0FBRUU7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUFBSjtBQUVJO0VBTkY7SUFPSSxlQUFBO0VBQ0o7QUFDRjtBQUVFO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFBSjtBQUdFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FBREo7O0FBS0EscUJBQUE7QUFDQTtFQUNFLG1CQUFBO0FBRkY7O0FBS0E7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUNBQUE7RUFDQSxnQkFBQTtBQUZGO0FBSUU7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQ0FBQTtBQUZKO0FBSUk7RUFD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O0VBeEVGO0VBMkVBO0lBQ0UscUNBQUE7RUF6RUY7QUFDRjtBQTRFQSxjQUFBO0FBQ0E7RUFDRTtJQUNFLFVBQUE7SUFDQSwyQkFBQTtFQTFFRjtFQTRFQTtJQUNFLFVBQUE7SUFDQSx3QkFBQTtFQTFFRjtBQUNGO0FBNkVBOzs7O0VBSUUsK0JBQUE7QUEzRUY7O0FBOEVBLG9CQUFBO0FBRUU7RUFDRSw4QkFBQTtFQUNBLHVCQUFBO0FBNUVKO0FBK0VFO0VBQ0UsOEJBQUE7RUFDQSx1QkFBQTtBQTdFSjtBQWdGRTtFQUNFLDhCQUFBO0VBQ0EsdUJBQUE7QUE5RUoiLCJzb3VyY2VzQ29udGVudCI6WyIucHJlc3MtY29udGFpbmVyIHtcclxuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbiAgY29sb3I6ICMzMzM7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNjtcclxufVxyXG5cclxuLyogSGVybyBTZWN0aW9uICovXHJcbi5wcmVzcy1oZXJvIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2JhKDYsIDI5LCA3NCwgMC45KSwgcmdiYSgxMywgNzEsIDE2MSwgMC45KSk7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDgwcHggMjBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gIC5oZXJvLWNvbnRlbnQge1xyXG4gICAgbWF4LXdpZHRoOiA4MDBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG5cclxuICAgIC5oZXJvLXRpdGxlIHtcclxuICAgICAgZm9udC1zaXplOiA0OHB4O1xyXG4gICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcblxyXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICBmb250LXNpemU6IDM2cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuaGVyby1zdWJ0aXRsZSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgb3BhY2l0eTogMC45O1xyXG4gICAgICBtYXgtd2lkdGg6IDYwMHB4O1xyXG4gICAgICBtYXJnaW46IDAgYXV0bztcclxuXHJcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLyogTWFpbiBDb250ZW50ICovXHJcbi5wcmVzcy1jb250ZW50IHtcclxuICBwYWRkaW5nOiA2MHB4IDA7XHJcbiAgYmFja2dyb3VuZDogI2Y4ZjlmYTtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgcGFkZGluZzogMCAyMHB4O1xyXG59XHJcblxyXG4uc2VjdGlvbi1oZWFkZXIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG5cclxuICBoMiB7XHJcbiAgICBmb250LXNpemU6IDM2cHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgY29sb3I6ICMzMzM7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG5cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuc2VjdGlvbi1zdWJ0aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBjb2xvcjogIzY2NjtcclxuICAgIG1heC13aWR0aDogNTAwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICB9XHJcblxyXG4gIGgzIHtcclxuICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBjb2xvcjogIzMzMztcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4vKiBGZWF0dXJlZCBBcnRpY2xlICovXHJcbi5mZWF0dXJlZC1hcnRpY2xlIHtcclxuICBtYXJnaW4tYm90dG9tOiA2MHB4O1xyXG59XHJcblxyXG4uYXJ0aWNsZS1jYXJkIHtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIGJveC1zaGFkb3c6IDAgNXB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG4gIC5hcnRpY2xlLWhlYWRlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDIwcHggMzBweDtcclxuICAgIGJhY2tncm91bmQ6ICNmOGY5ZmE7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U5ZWNlZjtcclxuXHJcbiAgICAuc291cmNlLWluZm8ge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBnYXA6IDE1cHg7XHJcblxyXG4gICAgICAuc291cmNlLWxvZ28ge1xyXG4gICAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICBvYmplY3QtZml0OiBjb250YWluO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2RlZTJlNjtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnNvdXJjZS1kZXRhaWxzIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG4gICAgICAgIC5zb3VyY2UtbmFtZSB7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgY29sb3I6ICMzMzM7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYXJ0aWNsZS1kYXRlIHtcclxuICAgICAgICAgIGNvbG9yOiAjNjY2O1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5hcnRpY2xlLXR5cGUge1xyXG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDEzLCA3MSwgMTYxLCAwLjEpO1xyXG4gICAgICBjb2xvcjogIzBkNDdhMTtcclxuICAgICAgcGFkZGluZzogNnB4IDEycHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG1hdC1jYXJkLWNvbnRlbnQge1xyXG4gICAgcGFkZGluZzogMzBweDtcclxuXHJcbiAgICAuYXJ0aWNsZS10aXRsZSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgY29sb3I6ICMzMzM7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjM7XHJcblxyXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuYXJ0aWNsZS1leGNlcnB0IHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuXHJcbiAgICAgIHAge1xyXG4gICAgICAgIGNvbG9yOiAjNjY2O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuXHJcbiAgICAgICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmFydGljbGUtaGlnaGxpZ2h0cyB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNmOGY5ZmE7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuXHJcbiAgICAgIGg0IHtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICBjb2xvcjogIzMzMztcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICB1bCB7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gICAgICAgIGNvbG9yOiAjNjY2O1xyXG5cclxuICAgICAgICBsaSB7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5hcnRpY2xlLWFjdGlvbnMge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBnYXA6IDE1cHg7XHJcbiAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuXHJcbiAgICAgIC5yZWFkLWFydGljbGUtYnRuLFxyXG4gICAgICAuc2hhcmUtYnRuIHtcclxuICAgICAgICBwYWRkaW5nOiAxMnB4IDI0cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuXHJcbiAgICAgICAgbWF0LWljb24ge1xyXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAucmVhZC1hcnRpY2xlLWJ0biB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzA5MmU2YiwgIzBkNDdhMSk7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG5cclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMwZDQ3YTEsICMxNTY1YzApO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLyogTWVkaWEgQXNzZXRzICovXHJcbi5tZWRpYS1hc3NldHMge1xyXG4gIG1hcmdpbi1ib3R0b206IDYwcHg7XHJcblxyXG4gIC5hc3NldHMtZ3JpZCB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyODBweCwgMWZyKSk7XHJcbiAgICBnYXA6IDI1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gIH1cclxuXHJcbiAgLmFzc2V0LWNhcmQge1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgYm94LXNoYWRvdzogMCA0cHggMTVweCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMzBweCAyMHB4O1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZTtcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpO1xyXG4gICAgICBib3gtc2hhZG93OiAwIDhweCAyNXB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XHJcbiAgICB9XHJcblxyXG4gICAgLmFzc2V0LWljb24ge1xyXG4gICAgICB3aWR0aDogNzBweDtcclxuICAgICAgaGVpZ2h0OiA3MHB4O1xyXG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDEzLCA3MSwgMTYxLCAwLjEpO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBtYXJnaW46IDAgYXV0byAyMHB4O1xyXG5cclxuICAgICAgbWF0LWljb24ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzJweDtcclxuICAgICAgICBjb2xvcjogIzBkNDdhMTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGg0IHtcclxuICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICBjb2xvcjogIzMzMztcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIH1cclxuXHJcbiAgICBwIHtcclxuICAgICAgY29sb3I6ICM2NjY7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIH1cclxuXHJcbiAgICBidXR0b24ge1xyXG4gICAgICBtYXQtaWNvbiB7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8qIFByZXNzIENvbnRhY3QgKi9cclxuLnByZXNzLWNvbnRhY3Qge1xyXG4gIG1hcmdpbi1ib3R0b206IDYwcHg7XHJcblxyXG4gIC5jb250YWN0LWNhcmQge1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgYm94LXNoYWRvdzogMCA1cHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcblxyXG4gICAgbWF0LWNhcmQtY29udGVudCB7XHJcbiAgICAgIHBhZGRpbmc6IDQwcHg7XHJcblxyXG4gICAgICAuY29udGFjdC1oZWFkZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBnYXA6IDIwcHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuXHJcbiAgICAgICAgLmNvbnRhY3QtaWNvbiB7XHJcbiAgICAgICAgICB3aWR0aDogNjBweDtcclxuICAgICAgICAgIGhlaWdodDogNjBweDtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMwOTJlNmIsICMwZDQ3YTEpO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgICBtYXQtaWNvbiB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzJweDtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNvbnRhY3QtaW5mbyB7XHJcbiAgICAgICAgICBoMyB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgY29sb3I6ICMzMzM7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgY29sb3I6ICM2NjY7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5jb250YWN0LWRldGFpbHMge1xyXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyNTBweCwgMWZyKSk7XHJcbiAgICAgICAgZ2FwOiAyNXB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcblxyXG4gICAgICAgIC5jb250YWN0LWl0ZW0ge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICBnYXA6IDE1cHg7XHJcbiAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogI2Y4ZjlmYTtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuXHJcbiAgICAgICAgICBtYXQtaWNvbiB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMGQ0N2ExO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgc3Ryb25nIHtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNjY2O1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5jb250YWN0LWJ0biB7XHJcbiAgICAgICAgcGFkZGluZzogMTRweCAzMnB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcblxyXG4gICAgICAgIG1hdC1pY29uIHtcclxuICAgICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLyogTmV3c2xldHRlciBTZWN0aW9uICovXHJcbi5uZXdzbGV0dGVyLXNlY3Rpb24ge1xyXG4gIC5uZXdzbGV0dGVyLWNhcmQge1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiYSg2LCAyOSwgNzQsIDAuMDUpLCByZ2JhKDEzLCA3MSwgMTYxLCAwLjA1KSk7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDEzLCA3MSwgMTYxLCAwLjEpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuXHJcbiAgICBtYXQtY2FyZC1jb250ZW50IHtcclxuICAgICAgcGFkZGluZzogNDBweDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgICAgaDMge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHAge1xyXG4gICAgICAgIGNvbG9yOiAjNjY2O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIG1heC13aWR0aDogNjAwcHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAubmV3c2xldHRlci1mb3JtIHtcclxuICAgICAgICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvIDIwcHg7XHJcblxyXG4gICAgICAgIC5mdWxsLXdpZHRoIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG1hdC1jaGVja2JveCB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgY29sb3I6ICM2NjY7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuc3Vic2NyaWJlLWJ0biB7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxMnB4IDQwcHg7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG5cclxuICAgICAgICAgIG1hdC1zcGlubmVyIHtcclxuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAucHJpdmFjeS1ub3RlIHtcclxuICAgICAgICBjb2xvcjogIzg4ODtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgbWFyZ2luOiAyMHB4IDAgMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLyogUmVzcG9uc2l2ZSBEZXNpZ24gKi9cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgLnByZXNzLWhlcm8ge1xyXG4gICAgcGFkZGluZzogNjBweCAyMHB4O1xyXG5cclxuICAgIC5oZXJvLXRpdGxlIHtcclxuICAgICAgZm9udC1zaXplOiAzNnB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5oZXJvLXN1YnRpdGxlIHtcclxuICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnByZXNzLWNvbnRlbnQge1xyXG4gICAgcGFkZGluZzogNDBweCAwO1xyXG4gIH1cclxuXHJcbiAgLmFydGljbGUtY2FyZCB7XHJcbiAgICAuYXJ0aWNsZS1oZWFkZXIge1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgICAgZ2FwOiAxNXB4O1xyXG5cclxuICAgICAgLmFydGljbGUtdHlwZSB7XHJcbiAgICAgICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG1hdC1jYXJkLWNvbnRlbnQge1xyXG4gICAgICBwYWRkaW5nOiAyMHB4O1xyXG5cclxuICAgICAgLmFydGljbGUtdGl0bGUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmNvbnRhY3QtY2FyZCBtYXQtY2FyZC1jb250ZW50IHtcclxuICAgIHBhZGRpbmc6IDI1cHg7XHJcbiAgfVxyXG5cclxuICAubmV3c2xldHRlci1jYXJkIG1hdC1jYXJkLWNvbnRlbnQge1xyXG4gICAgcGFkZGluZzogMjVweDtcclxuICB9XHJcblxyXG4gIC5hcnRpY2xlLWFjdGlvbnMge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgICBidXR0b24ge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5hc3NldHMtZ3JpZCB7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLmNvbnRhY3QtZGV0YWlscyB7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuLyogQW5pbWF0aW9uICovXHJcbkBrZXlmcmFtZXMgZmFkZUluIHtcclxuICBmcm9tIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjBweCk7XHJcbiAgfVxyXG4gIHRvIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgfVxyXG59XHJcblxyXG4uYXJ0aWNsZS1jYXJkLFxyXG4uYXNzZXQtY2FyZCxcclxuLmNvbnRhY3QtY2FyZCxcclxuLm5ld3NsZXR0ZXItY2FyZCB7XHJcbiAgYW5pbWF0aW9uOiBmYWRlSW4gMC42cyBlYXNlLW91dDtcclxufVxyXG5cclxuLyogU25hY2tiYXIgU3R5bGVzICovXHJcbjo6bmctZGVlcCB7XHJcbiAgLnN1Y2Nlc3Mtc25hY2tiYXIge1xyXG4gICAgYmFja2dyb3VuZDogIzRjYWY1MCAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuaW5mby1zbmFja2JhciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMjE5NmYzICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5lcnJvci1zbmFja2JhciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjQ0MzM2ICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  }));
}
_staticBlock();

/***/ })

}]);
//# sourceMappingURL=src_app_pages_press_press_component_ts.js.map