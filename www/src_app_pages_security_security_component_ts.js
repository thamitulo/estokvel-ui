"use strict";
(self["webpackChunkestokvel_ui"] = self["webpackChunkestokvel_ui"] || []).push([["src_app_pages_security_security_component_ts"],{

/***/ 6501:
/*!******************************************************!*\
  !*** ./src/app/pages/security/security.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SecurityComponent: () => (/* binding */ SecurityComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 4487);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ 3777);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ 3840);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2481);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);
var _staticBlock;











class SecurityComponent {
  constructor(snackBar) {
    this.snackBar = snackBar;
  }
  // Smooth scroll to section
  scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }
  openContactForm() {
    this.snackBar.open('Opening contact form...', 'Close', {
      duration: 2000
    });
    // Open a contact modal or navigate
  }
  static #_ = _staticBlock = () => (this.ɵfac = function SecurityComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || SecurityComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__.MatSnackBar));
  }, this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: SecurityComponent,
    selectors: [["app-security"]],
    decls: 446,
    vars: 0,
    consts: [[1, "security-container"], [1, "security-hero"], [1, "hero-content"], [1, "hero-icon"], [1, "hero-title"], [1, "hero-subtitle"], [1, "trust-badges"], [1, "container"], [1, "badges-grid"], [1, "badge-item"], [1, "security-content"], [1, "navigation-section"], [1, "nav-card"], [1, "nav-links"], ["href", "#encryption", 1, "nav-link"], ["href", "#compliance", 1, "nav-link"], ["href", "#authentication", 1, "nav-link"], ["href", "#infrastructure", 1, "nav-link"], ["href", "#monitoring", 1, "nav-link"], ["href", "#privacy", 1, "nav-link"], ["href", "#best-practices", 1, "nav-link"], ["href", "#incident", 1, "nav-link"], [1, "security-sections"], ["id", "encryption", 1, "security-section"], [1, "section-header"], [1, "section-icon"], [1, "section-subtitle"], [1, "section-content"], [1, "features-grid"], [1, "feature-card"], [1, "feature-icon"], ["id", "compliance", 1, "security-section"], [1, "compliance-cards"], [1, "compliance-card"], [1, "compliance-icon", "popia"], [1, "compliance-icon", "fica"], [1, "compliance-icon", "soc"], ["id", "authentication", 1, "security-section"], [1, "auth-features"], [1, "auth-feature"], [1, "auth-icon"], [1, "auth-content"], ["id", "infrastructure", 1, "security-section"], [1, "infrastructure-grid"], [1, "infra-item"], ["id", "monitoring", 1, "security-section"], [1, "monitoring-features"], [1, "monitoring-card"], ["id", "privacy", 1, "security-section"], [1, "privacy-features"], [1, "privacy-card"], [1, "privacy-link"], ["routerLink", "/privacy-policy", 1, "privacy-btn"], ["id", "best-practices", 1, "security-section"], [1, "practices-grid"], [1, "practice-card"], [1, "practice-number"], [1, "practice-content"], ["id", "incident", 1, "security-section"], [1, "incident-cards"], [1, "incident-card"], [1, "report-section"], [1, "report-options"], ["href", "mailto:security@estokvel.co.za", 1, "report-btn"], ["mat-stroked-button", "", 1, "report-btn", 3, "click"], [1, "report-note"], [1, "commitment-section"], [1, "commitment-card"], [1, "commitment-content"], [1, "update-info"]],
    template: function SecurityComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "section", 1)(2, "div", 2)(3, "div", 3)(4, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "security");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "Security & Trust Center");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "Protecting your financial data is our highest priority");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "section", 6)(11, "div", 7)(12, "div", 8)(13, "div", 9)(14, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, "https");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, "256-bit SSL Encryption");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "div", 9)(19, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20, "verified_user");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22, "POPIA Compliant");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "div", 9)(24, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25, "vpn_lock");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](27, "Bank-Level Security");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "div", 9)(29, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](30, "cloud_done");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](32, "SOC 2 Certified");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "section", 10)(34, "div", 7)(35, "div", 11)(36, "mat-card", 12)(37, "mat-card-content")(38, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](39, "Security Overview");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "div", 13)(41, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](42, "Data Encryption");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](44, "Compliance");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](45, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](46, "Authentication");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](47, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](48, "Infrastructure");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](49, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](50, "Monitoring");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](51, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](52, "Privacy");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](53, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](54, "Best Practices");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](55, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](56, "Incident Response");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](57, "div", 22)(58, "section", 23)(59, "div", 24)(60, "div", 25)(61, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](62, "enhanced_encryption");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](63, "div")(64, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](65, "Data Encryption");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](66, "p", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](67, "Protecting your data at rest and in transit");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](68, "div", 27)(69, "div", 28)(70, "div", 29)(71, "div", 30)(72, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](73, "swap_vert");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](74, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](75, "In Transit");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](76, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](77, "All data transmitted between your device and our servers is encrypted using TLS 1.2/1.3 with 256-bit encryption.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](78, "div", 29)(79, "div", 30)(80, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](81, "storage");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](82, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](83, "At Rest");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](84, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](85, "Sensitive data is encrypted using AES-256 encryption before being stored in our databases.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](86, "div", 29)(87, "div", 30)(88, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](89, "key");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](90, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](91, "Key Management");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](92, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](93, "Encryption keys are managed using industry-standard key management systems with regular rotation.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](94, "section", 31)(95, "div", 24)(96, "div", 25)(97, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](98, "gavel");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](99, "div")(100, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](101, "Compliance & Certifications");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](102, "p", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](103, "Meeting the highest standards of data protection");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](104, "div", 27)(105, "div", 32)(106, "mat-card", 33)(107, "mat-card-content")(108, "div", 34)(109, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](110, "balance");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](111, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](112, "POPIA Compliant");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](113, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](114, "Fully compliant with South Africa's Protection of Personal Information Act (POPIA). We implement strict data processing principles and user rights management.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](115, "ul")(116, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](117, "Data minimization and purpose limitation");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](118, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](119, "User consent management");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](120, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](121, "Right to access and deletion");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](122, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](123, "Data breach notification procedures");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](124, "mat-card", 33)(125, "mat-card-content")(126, "div", 35)(127, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](128, "account_balance");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](129, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](130, "FICA Ready");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](131, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](132, "Designed to support Financial Intelligence Centre Act (FICA) compliance for financial institutions using our platform.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](133, "ul")(134, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](135, "Customer identification procedures");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](136, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](137, "Transaction monitoring capabilities");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](138, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](139, "Suspicious activity reporting");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](140, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](141, "Record keeping requirements");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](142, "mat-card", 33)(143, "mat-card-content")(144, "div", 36)(145, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](146, "verified");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](147, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](148, "SOC 2 Type II");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](149, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](150, "Successfully completed SOC 2 Type II audits covering security, availability, processing integrity, confidentiality, and privacy.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](151, "ul")(152, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](153, "Regular third-party security audits");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](154, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](155, "Continuous monitoring and improvement");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](156, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](157, "Transparent reporting practices");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](158, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](159, "Independent verification");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](160, "section", 37)(161, "div", 24)(162, "div", 25)(163, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](164, "fingerprint");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](165, "div")(166, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](167, "Authentication & Access");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](168, "p", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](169, "Multi-layered protection for your account");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](170, "div", 27)(171, "div", 38)(172, "div", 39)(173, "div", 40)(174, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](175, "two_factor_authentication");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](176, "div", 41)(177, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](178, "Two-Factor Authentication (2FA)");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](179, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](180, "Mandatory 2FA for all user accounts using TOTP or SMS verification. Additional security for administrative functions and high-value transactions.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](181, "div", 39)(182, "div", 40)(183, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](184, "password");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](185, "div", 41)(186, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](187, "Password Security");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](188, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](189, "Strong password requirements with bcrypt hashing. Regular password expiration and prevention of password reuse.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](190, "div", 39)(191, "div", 40)(192, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](193, "device_hub");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](194, "div", 41)(195, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](196, "Session Management");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](197, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](198, "Automatic session timeout after 15 minutes of inactivity. Single sign-on (SSO) capability for enterprise customers.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](199, "div", 39)(200, "div", 40)(201, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](202, "admin_panel_settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](203, "div", 41)(204, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](205, "Role-Based Access");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](206, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](207, "Granular permission system for stokvel administrators and members. Principle of least privilege enforced.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](208, "section", 42)(209, "div", 24)(210, "div", 25)(211, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](212, "cloud");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](213, "div")(214, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](215, "Infrastructure Security");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](216, "p", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](217, "Enterprise-grade cloud infrastructure");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](218, "div", 27)(219, "div", 43)(220, "div", 44)(221, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](222, "Cloud Infrastructure");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](223, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](224, "Hosted on AWS with multiple availability zones for high availability. Regular security patching and updates.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](225, "div", 44)(226, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](227, "Network Security");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](228, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](229, "Web Application Firewall (WAF), DDoS protection, and intrusion detection systems. All traffic filtered through security layers.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](230, "div", 44)(231, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](232, "Backup & Recovery");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](233, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](234, "Automated daily backups with 30-day retention. Disaster recovery plans tested quarterly. Point-in-time recovery capability.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](235, "div", 44)(236, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](237, "Physical Security");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](238, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](239, "Data centers with 24/7 monitoring, biometric access controls, and environmental controls. SAS 70 Type II certified facilities.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](240, "section", 45)(241, "div", 24)(242, "div", 25)(243, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](244, "monitoring");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](245, "div")(246, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](247, "Monitoring & Detection");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](248, "p", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](249, "24/7 surveillance and threat detection");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](250, "div", 27)(251, "div", 46)(252, "div", 47)(253, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](254, "Real-time Monitoring");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](255, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](256, "Continuous monitoring of system logs, network traffic, and user activities. Automated alerts for suspicious patterns.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](257, "div", 47)(258, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](259, "Vulnerability Scanning");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](260, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](261, "Regular automated and manual vulnerability assessments. Third-party penetration testing conducted quarterly.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](262, "div", 47)(263, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](264, "SIEM Integration");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](265, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](266, "Security Information and Event Management (SIEM) system for centralized log analysis and threat correlation.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](267, "div", 47)(268, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](269, "Fraud Detection");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](270, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](271, "AI-powered fraud detection systems analyzing transaction patterns and user behavior for anomalies.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](272, "section", 48)(273, "div", 24)(274, "div", 25)(275, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](276, "visibility_off");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](277, "div")(278, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](279, "Privacy Protection");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](280, "p", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](281, "Your data privacy is our commitment");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](282, "div", 27)(283, "div", 49)(284, "div", 50)(285, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](286, "data_usage");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](287, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](288, "Data Minimization");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](289, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](290, "We only collect data necessary for providing our services. No unnecessary personal information is stored.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](291, "div", 50)(292, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](293, "share");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](294, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](295, "Limited Sharing");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](296, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](297, "Personal data is never sold to third parties. Sharing only occurs with your consent or as required by law.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](298, "div", 50)(299, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](300, "delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](301, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](302, "Right to Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](303, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](304, "Full compliance with right to deletion requests. Data permanently removed within 30 days of request.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](305, "div", 50)(306, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](307, "visibility");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](308, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](309, "Transparency");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](310, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](311, "Clear privacy policies and regular transparency reports. You control what data is shared within your stokvel.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](312, "div", 51)(313, "a", 52)(314, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](315, "policy");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](316, " View Full Privacy Policy ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](317, "section", 53)(318, "div", 24)(319, "div", 25)(320, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](321, "school");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](322, "div")(323, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](324, "Security Best Practices");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](325, "p", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](326, "How you can help keep your account secure");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](327, "div", 27)(328, "div", 54)(329, "div", 55)(330, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](331, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](332, "div", 57)(333, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](334, "Enable 2FA");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](335, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](336, "Always use two-factor authentication for an extra layer of security beyond your password.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](337, "div", 55)(338, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](339, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](340, "div", 57)(341, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](342, "Strong Passwords");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](343, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](344, "Use unique, complex passwords for your eStokvel account. Consider using a password manager.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](345, "div", 55)(346, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](347, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](348, "div", 57)(349, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](350, "Regular Updates");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](351, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](352, "Keep your devices and browsers updated with the latest security patches.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](353, "div", 55)(354, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](355, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](356, "div", 57)(357, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](358, "Watch for Phishing");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](359, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](360, "Be cautious of suspicious emails or messages asking for your login credentials.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](361, "div", 55)(362, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](363, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](364, "div", 57)(365, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](366, "Monitor Activity");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](367, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](368, "Regularly review your account activity and report any unauthorized transactions immediately.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](369, "div", 55)(370, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](371, "6");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](372, "div", 57)(373, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](374, "Secure Devices");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](375, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](376, "Use device passwords, biometric locks, and avoid accessing your account on public computers.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](377, "section", 58)(378, "div", 24)(379, "div", 25)(380, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](381, "emergency");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](382, "div")(383, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](384, "Incident Response");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](385, "p", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](386, "Our commitment to transparency and rapid response");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](387, "div", 27)(388, "div", 59)(389, "mat-card", 60)(390, "mat-card-header")(391, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](392, "Response Team");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](393, "mat-card-content")(394, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](395, "Dedicated security incident response team available 24/7 to handle any security concerns or breaches.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](396, "mat-card", 60)(397, "mat-card-header")(398, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](399, "Notification Process");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](400, "mat-card-content")(401, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](402, "We commit to notifying affected users within 72 hours of confirming a security incident that impacts their data.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](403, "mat-card", 60)(404, "mat-card-header")(405, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](406, "Continuous Improvement");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](407, "mat-card-content")(408, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](409, "Every incident is thoroughly analyzed to improve our security measures and prevent future occurrences.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](410, "div", 61)(411, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](412, "Report a Security Concern");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](413, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](414, "If you suspect any security issue or vulnerability, please report it immediately:");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](415, "div", 62)(416, "a", 63)(417, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](418, "email");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](419, " Email Security Team ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](420, "button", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SecurityComponent_Template_button_click_420_listener() {
          return ctx.openContactForm();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](421, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](422, "contact_support");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](423, " Contact Support ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](424, "p", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](425, "We offer a responsible disclosure program and welcome security researchers to help us improve.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](426, "div", 66)(427, "mat-card", 67)(428, "mat-card-content")(429, "div", 68)(430, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](431, "verified");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](432, "div")(433, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](434, "Our Security Commitment");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](435, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](436, "At eStokvel, security is not an afterthought\u2014it's fundamental to everything we do. We continuously invest in security infrastructure, employee training, and best practices to protect your financial data and maintain your trust.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](437, "div", 69)(438, "p")(439, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](440, "Last Security Review:");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](441, " October 2024");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](442, "p")(443, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](444, "Next Scheduled Audit:");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](445, " January 2025");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()()()();
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardTitle, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButton],
    styles: ["@charset \"UTF-8\";\n.security-container[_ngcontent-%COMP%] {\n  font-family: \"Roboto\", sans-serif;\n  color: #333;\n  line-height: 1.6;\n}\n\n\n\n.security-hero[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, rgba(32, 76, 120, 0.9), rgba(24, 91, 194, 0.9));\n  background-size: cover;\n  background-position: center;\n  color: white;\n  padding: 100px 20px;\n  text-align: center;\n}\n.security-hero[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%] {\n  max-width: 800px;\n  margin: 0 auto;\n}\n.security-hero[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%]   .hero-icon[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n}\n.security-hero[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%]   .hero-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 64px;\n  height: 64px;\n  width: 64px;\n  color: white;\n  background: rgba(255, 255, 255, 0.2);\n  padding: 20px;\n  border-radius: 50%;\n}\n.security-hero[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%]   .hero-title[_ngcontent-%COMP%] {\n  font-size: 48px;\n  font-weight: 700;\n  margin-bottom: 20px;\n  color: white;\n}\n@media (max-width: 768px) {\n  .security-hero[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%]   .hero-title[_ngcontent-%COMP%] {\n    font-size: 36px;\n  }\n}\n.security-hero[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%]   .hero-subtitle[_ngcontent-%COMP%] {\n  font-size: 20px;\n  opacity: 0.9;\n  max-width: 600px;\n  margin: 0 auto;\n  font-weight: 400;\n}\n@media (max-width: 768px) {\n  .security-hero[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%]   .hero-subtitle[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n}\n\n\n\n.trust-badges[_ngcontent-%COMP%] {\n  background: white;\n  padding: 40px 20px;\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);\n}\n.trust-badges[_ngcontent-%COMP%]   .badges-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 30px;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.trust-badges[_ngcontent-%COMP%]   .badges-grid[_ngcontent-%COMP%]   .badge-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  gap: 15px;\n}\n.trust-badges[_ngcontent-%COMP%]   .badges-grid[_ngcontent-%COMP%]   .badge-item[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 40px;\n  color: #0d47a1;\n  background: rgba(13, 71, 161, 0.1);\n  padding: 15px;\n  border-radius: 50%;\n}\n.trust-badges[_ngcontent-%COMP%]   .badges-grid[_ngcontent-%COMP%]   .badge-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #333;\n  font-size: 16px;\n}\n\n\n\n.security-content[_ngcontent-%COMP%] {\n  padding: 60px 0;\n  background: #f8f9fa;\n}\n\n.container[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 20px;\n}\n\n\n\n.navigation-section[_ngcontent-%COMP%] {\n  margin-bottom: 40px;\n}\n.navigation-section[_ngcontent-%COMP%]   .nav-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);\n}\n.navigation-section[_ngcontent-%COMP%]   .nav-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%] {\n  padding: 30px;\n}\n.navigation-section[_ngcontent-%COMP%]   .nav-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 600;\n  color: #333;\n  margin-bottom: 20px;\n  text-align: center;\n}\n.navigation-section[_ngcontent-%COMP%]   .nav-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  gap: 12px;\n}\n.navigation-section[_ngcontent-%COMP%]   .nav-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  display: block;\n  padding: 12px 16px;\n  background: #f0f7ff;\n  color: #333;\n  text-decoration: none;\n  border-radius: 8px;\n  font-size: 14px;\n  font-weight: 500;\n  transition: all 0.3s ease;\n  border-left: 3px solid transparent;\n}\n.navigation-section[_ngcontent-%COMP%]   .nav-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover {\n  background: #e1f0ff;\n  border-left-color: #2196f3;\n  color: #2196f3;\n  transform: translateX(5px);\n}\n\n\n\n.security-sections[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);\n  padding: 40px;\n}\n\n.security-section[_ngcontent-%COMP%] {\n  margin-bottom: 60px;\n  padding-bottom: 40px;\n  border-bottom: 1px solid #e9ecef;\n}\n.security-section[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n  margin-bottom: 0;\n  padding-bottom: 0;\n}\n.security-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n  margin-bottom: 40px;\n}\n.security-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   .section-icon[_ngcontent-%COMP%] {\n  width: 70px;\n  height: 70px;\n  background: linear-gradient(135deg, #2196f3, #1976d2);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.security-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   .section-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 32px;\n  color: white;\n}\n.security-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 32px;\n  font-weight: 700;\n  color: #333;\n  margin-bottom: 8px;\n}\n@media (max-width: 768px) {\n  .security-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 26px;\n  }\n}\n.security-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   .section-subtitle[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #666;\n  margin: 0;\n}\n\n\n\n.features-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 30px;\n}\n.features-grid[_ngcontent-%COMP%]   .feature-card[_ngcontent-%COMP%] {\n  padding: 30px;\n  background: #f8f9fa;\n  border-radius: 12px;\n  border-left: 4px solid #2196f3;\n  transition: transform 0.3s ease;\n}\n.features-grid[_ngcontent-%COMP%]   .feature-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5px);\n  box-shadow: 0 8px 25px rgba(33, 150, 243, 0.1);\n}\n.features-grid[_ngcontent-%COMP%]   .feature-card[_ngcontent-%COMP%]   .feature-icon[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.features-grid[_ngcontent-%COMP%]   .feature-card[_ngcontent-%COMP%]   .feature-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 40px;\n  color: #2196f3;\n}\n.features-grid[_ngcontent-%COMP%]   .feature-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 600;\n  color: #333;\n  margin-bottom: 15px;\n}\n.features-grid[_ngcontent-%COMP%]   .feature-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #666;\n  line-height: 1.6;\n  margin: 0;\n}\n\n\n\n.compliance-cards[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 30px;\n}\n.compliance-cards[_ngcontent-%COMP%]   .compliance-card[_ngcontent-%COMP%] {\n  border-radius: 12px;\n  overflow: hidden;\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);\n  transition: transform 0.3s ease;\n}\n.compliance-cards[_ngcontent-%COMP%]   .compliance-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5px);\n}\n.compliance-cards[_ngcontent-%COMP%]   .compliance-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%] {\n  padding: 30px;\n}\n.compliance-cards[_ngcontent-%COMP%]   .compliance-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .compliance-icon[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 20px;\n}\n.compliance-cards[_ngcontent-%COMP%]   .compliance-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .compliance-icon.popia[_ngcontent-%COMP%] {\n  background: rgba(76, 175, 80, 0.1);\n}\n.compliance-cards[_ngcontent-%COMP%]   .compliance-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .compliance-icon.popia[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #4caf50;\n}\n.compliance-cards[_ngcontent-%COMP%]   .compliance-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .compliance-icon.fica[_ngcontent-%COMP%] {\n  background: rgba(255, 152, 0, 0.1);\n}\n.compliance-cards[_ngcontent-%COMP%]   .compliance-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .compliance-icon.fica[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #ff9800;\n}\n.compliance-cards[_ngcontent-%COMP%]   .compliance-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .compliance-icon.soc[_ngcontent-%COMP%] {\n  background: rgba(33, 150, 243, 0.1);\n}\n.compliance-cards[_ngcontent-%COMP%]   .compliance-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .compliance-icon.soc[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #2196f3;\n}\n.compliance-cards[_ngcontent-%COMP%]   .compliance-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .compliance-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 32px;\n}\n.compliance-cards[_ngcontent-%COMP%]   .compliance-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 600;\n  color: #333;\n  margin-bottom: 15px;\n}\n.compliance-cards[_ngcontent-%COMP%]   .compliance-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #666;\n  line-height: 1.6;\n  margin-bottom: 20px;\n}\n.compliance-cards[_ngcontent-%COMP%]   .compliance-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  padding-left: 20px;\n  margin: 0;\n}\n.compliance-cards[_ngcontent-%COMP%]   .compliance-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  color: #666;\n  margin-bottom: 8px;\n  line-height: 1.5;\n}\n.compliance-cards[_ngcontent-%COMP%]   .compliance-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::before {\n  content: \"\u2022\";\n  color: #2196f3;\n  font-weight: bold;\n  display: inline-block;\n  width: 1em;\n  margin-left: -1em;\n}\n\n\n\n.auth-features[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 25px;\n}\n.auth-features[_ngcontent-%COMP%]   .auth-feature[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 20px;\n  padding: 25px;\n  background: #f8f9fa;\n  border-radius: 12px;\n  border-left: 4px solid #4caf50;\n  transition: transform 0.3s ease;\n}\n.auth-features[_ngcontent-%COMP%]   .auth-feature[_ngcontent-%COMP%]:hover {\n  transform: translateX(10px);\n}\n.auth-features[_ngcontent-%COMP%]   .auth-feature[_ngcontent-%COMP%]   .auth-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 32px;\n  color: #4caf50;\n}\n.auth-features[_ngcontent-%COMP%]   .auth-feature[_ngcontent-%COMP%]   .auth-content[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.auth-features[_ngcontent-%COMP%]   .auth-feature[_ngcontent-%COMP%]   .auth-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  color: #333;\n  margin-bottom: 10px;\n}\n.auth-features[_ngcontent-%COMP%]   .auth-feature[_ngcontent-%COMP%]   .auth-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #666;\n  line-height: 1.6;\n  margin: 0;\n}\n\n\n\n.infrastructure-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 25px;\n}\n.infrastructure-grid[_ngcontent-%COMP%]   .infra-item[_ngcontent-%COMP%] {\n  padding: 25px;\n  background: #f8f9fa;\n  border-radius: 12px;\n  border-top: 4px solid #ff9800;\n}\n.infrastructure-grid[_ngcontent-%COMP%]   .infra-item[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  color: #333;\n  margin-bottom: 12px;\n}\n.infrastructure-grid[_ngcontent-%COMP%]   .infra-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #666;\n  line-height: 1.6;\n  margin: 0;\n}\n\n\n\n.monitoring-features[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 25px;\n}\n.monitoring-features[_ngcontent-%COMP%]   .monitoring-card[_ngcontent-%COMP%] {\n  padding: 25px;\n  background: #f0f7ff;\n  border-radius: 12px;\n  border: 2px solid #e1f0ff;\n}\n.monitoring-features[_ngcontent-%COMP%]   .monitoring-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  color: #333;\n  margin-bottom: 12px;\n}\n.monitoring-features[_ngcontent-%COMP%]   .monitoring-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #666;\n  line-height: 1.6;\n  margin: 0;\n}\n\n\n\n.privacy-features[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 25px;\n  margin-bottom: 30px;\n}\n.privacy-features[_ngcontent-%COMP%]   .privacy-card[_ngcontent-%COMP%] {\n  padding: 25px;\n  background: #f8f9fa;\n  border-radius: 12px;\n  text-align: center;\n  transition: transform 0.3s ease;\n}\n.privacy-features[_ngcontent-%COMP%]   .privacy-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5px);\n}\n.privacy-features[_ngcontent-%COMP%]   .privacy-card[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 40px;\n  color: #1565c0;\n  margin-bottom: 20px;\n}\n.privacy-features[_ngcontent-%COMP%]   .privacy-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  color: #333;\n  margin-bottom: 12px;\n}\n.privacy-features[_ngcontent-%COMP%]   .privacy-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #666;\n  line-height: 1.6;\n  margin: 0;\n}\n\n.privacy-link[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.privacy-link[_ngcontent-%COMP%]   .privacy-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 10px;\n  padding: 12px 24px;\n  background: #1565c0;\n  color: white;\n  text-decoration: none;\n  border-radius: 8px;\n  font-weight: 600;\n  transition: all 0.3s ease;\n}\n.privacy-link[_ngcontent-%COMP%]   .privacy-btn[_ngcontent-%COMP%]:hover {\n  background: #059669;\n  transform: translateY(-2px);\n}\n.privacy-link[_ngcontent-%COMP%]   .privacy-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n\n\n\n.practices-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 25px;\n}\n.practices-grid[_ngcontent-%COMP%]   .practice-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 20px;\n  padding: 25px;\n  background: #f8f9fa;\n  border-radius: 12px;\n  border-left: 4px solid #ff9800;\n  transition: all 0.3s ease;\n}\n.practices-grid[_ngcontent-%COMP%]   .practice-card[_ngcontent-%COMP%]:hover {\n  background: #fff3e0;\n  transform: translateX(5px);\n}\n.practices-grid[_ngcontent-%COMP%]   .practice-card[_ngcontent-%COMP%]   .practice-number[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  background: #ff9800;\n  color: white;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 700;\n  font-size: 18px;\n  flex-shrink: 0;\n}\n.practices-grid[_ngcontent-%COMP%]   .practice-card[_ngcontent-%COMP%]   .practice-content[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.practices-grid[_ngcontent-%COMP%]   .practice-card[_ngcontent-%COMP%]   .practice-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  color: #333;\n  margin-bottom: 8px;\n}\n.practices-grid[_ngcontent-%COMP%]   .practice-card[_ngcontent-%COMP%]   .practice-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #666;\n  line-height: 1.6;\n  margin: 0;\n}\n\n\n\n.incident-cards[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 25px;\n  margin-bottom: 40px;\n}\n.incident-cards[_ngcontent-%COMP%]   .incident-card[_ngcontent-%COMP%] {\n  border-radius: 12px;\n  overflow: hidden;\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);\n}\n.incident-cards[_ngcontent-%COMP%]   .incident-card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  padding: 20px;\n}\n.incident-cards[_ngcontent-%COMP%]   .incident-card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%]   mat-card-title[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  color: #333;\n  margin: 0;\n}\n.incident-cards[_ngcontent-%COMP%]   .incident-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n.incident-cards[_ngcontent-%COMP%]   .incident-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #666;\n  line-height: 1.6;\n  margin: 0;\n}\n\n.report-section[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 40px;\n  background: #f0f7ff;\n  border-radius: 12px;\n  border: 2px dashed #2196f3;\n}\n.report-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 600;\n  color: #333;\n  margin-bottom: 15px;\n}\n.report-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #666;\n  margin-bottom: 20px;\n  max-width: 600px;\n  margin-left: auto;\n  margin-right: auto;\n}\n.report-section[_ngcontent-%COMP%]   .report-options[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 20px;\n  justify-content: center;\n  margin-bottom: 20px;\n  flex-wrap: wrap;\n}\n.report-section[_ngcontent-%COMP%]   .report-options[_ngcontent-%COMP%]   .report-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 12px 24px;\n  text-decoration: none;\n}\n.report-section[_ngcontent-%COMP%]   .report-options[_ngcontent-%COMP%]   .report-btn[_ngcontent-%COMP%]:first-child {\n  background: #2196f3;\n  color: white;\n}\n.report-section[_ngcontent-%COMP%]   .report-options[_ngcontent-%COMP%]   .report-btn[_ngcontent-%COMP%]:first-child:hover {\n  background: #1976d2;\n}\n.report-section[_ngcontent-%COMP%]   .report-options[_ngcontent-%COMP%]   .report-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.report-section[_ngcontent-%COMP%]   .report-note[_ngcontent-%COMP%] {\n  color: #666;\n  font-size: 14px;\n  font-style: italic;\n  margin: 0;\n}\n\n\n\n.commitment-section[_ngcontent-%COMP%] {\n  margin-top: 60px;\n  padding-top: 40px;\n  border-top: 2px solid #e9ecef;\n}\n.commitment-section[_ngcontent-%COMP%]   .commitment-card[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, rgba(33, 150, 243, 0.05), rgba(25, 118, 210, 0.05));\n  border: 2px solid rgba(33, 150, 243, 0.1);\n  border-radius: 12px;\n}\n.commitment-section[_ngcontent-%COMP%]   .commitment-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%] {\n  padding: 40px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 30px;\n}\n@media (max-width: 768px) {\n  .commitment-section[_ngcontent-%COMP%]   .commitment-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%] {\n    flex-direction: column;\n    text-align: center;\n  }\n}\n.commitment-section[_ngcontent-%COMP%]   .commitment-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .commitment-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n  flex: 1;\n}\n.commitment-section[_ngcontent-%COMP%]   .commitment-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .commitment-content[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 48px;\n  color: #2196f3;\n  height: 48px;\n  width: 48px;\n}\n.commitment-section[_ngcontent-%COMP%]   .commitment-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .commitment-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 700;\n  color: #333;\n  margin-bottom: 12px;\n}\n.commitment-section[_ngcontent-%COMP%]   .commitment-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .commitment-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #666;\n  margin: 0;\n  max-width: 600px;\n  line-height: 1.6;\n}\n.commitment-section[_ngcontent-%COMP%]   .commitment-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .update-info[_ngcontent-%COMP%] {\n  text-align: right;\n}\n@media (max-width: 768px) {\n  .commitment-section[_ngcontent-%COMP%]   .commitment-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .update-info[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n}\n.commitment-section[_ngcontent-%COMP%]   .commitment-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .update-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #666;\n  margin: 5px 0;\n}\n.commitment-section[_ngcontent-%COMP%]   .commitment-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .update-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #333;\n}\n\n\n\n@media (max-width: 768px) {\n  .security-hero[_ngcontent-%COMP%] {\n    padding: 60px 20px;\n  }\n  .security-hero[_ngcontent-%COMP%]   .hero-title[_ngcontent-%COMP%] {\n    font-size: 36px;\n  }\n  .security-content[_ngcontent-%COMP%] {\n    padding: 40px 0;\n  }\n  .security-sections[_ngcontent-%COMP%] {\n    padding: 25px;\n  }\n  .section-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    text-align: center;\n    gap: 15px !important;\n  }\n  .section-header[_ngcontent-%COMP%]   .section-icon[_ngcontent-%COMP%] {\n    margin: 0 auto;\n  }\n  .navigation-section[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr !important;\n  }\n  .features-grid[_ngcontent-%COMP%], \n   .compliance-cards[_ngcontent-%COMP%], \n   .infrastructure-grid[_ngcontent-%COMP%], \n   .monitoring-features[_ngcontent-%COMP%], \n   .privacy-features[_ngcontent-%COMP%], \n   .practices-grid[_ngcontent-%COMP%], \n   .incident-cards[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr !important;\n  }\n  .auth-feature[_ngcontent-%COMP%] {\n    flex-direction: column;\n    text-align: center;\n    gap: 15px !important;\n  }\n  .report-options[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: center;\n  }\n  .report-options[_ngcontent-%COMP%]   .report-btn[_ngcontent-%COMP%] {\n    width: 100%;\n    max-width: 300px;\n    justify-content: center;\n  }\n}\n\n\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.feature-card[_ngcontent-%COMP%], \n.compliance-card[_ngcontent-%COMP%], \n.auth-feature[_ngcontent-%COMP%], \n.infra-item[_ngcontent-%COMP%], \n.privacy-card[_ngcontent-%COMP%], \n.practice-card[_ngcontent-%COMP%], \n.incident-card[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fadeIn 0.6s ease-out;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvc2VjdXJpdHkvc2VjdXJpdHkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBQWhCO0VBQ0UsaUNBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUFFRjs7QUFDQSxpQkFBQTtBQUNBO0VBQ0UsbUZBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFFRjtBQUFFO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0FBRUo7QUFBSTtFQUNFLG1CQUFBO0FBRU47QUFBTTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQUVSO0FBRUk7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFBTjtBQUVNO0VBTkY7SUFPSSxlQUFBO0VBQ047QUFDRjtBQUVJO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQUFOO0FBRU07RUFQRjtJQVFJLGVBQUE7RUFDTjtBQUNGOztBQUlBLGlCQUFBO0FBQ0E7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMENBQUE7QUFERjtBQUdFO0VBQ0UsYUFBQTtFQUNBLDJEQUFBO0VBQ0EsU0FBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQURKO0FBR0k7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtBQUROO0FBR007RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGtDQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBRFI7QUFJTTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFGUjs7QUFRQSxpQkFBQTtBQUNBO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0FBTEY7O0FBUUE7RUFDRSxpQkFB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UTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQS9FVjtBQWtGUTtFQUNFLFdBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQWhGVjtBQW9GTTtFQUNFLGlCQUFBO0FBbEZSO0FBb0ZRO0VBSEY7SUFJSSxrQkFBQTtFQWpGUjtBQUNGO0FBbUZRO0VBQ0UsV0FBQTtFQUNBLGFBQUE7QUFqRlY7QUFtRlU7RUFDRSxXQUFBO0FBakZaOztBQXlGQSxzQkFBQTtBQUNBO0VBQ0U7SUFDRSxrQkFBQTtFQXRGRjtFQXdGRTtJQUNFLGVBQUE7RUF0Rko7RUEwRkE7SUFDRSxlQUFBO0VBeEZGO0VBMkZBO0lBQ0UsYUFBQTtFQXpGRjtFQTRGQTtJQUNFLHNCQUFBO0lBQ0Esa0JBQUE7SUFDQSxvQkFBQTtFQTFGRjtFQTRGRTtJQUNFLGNBQUE7RUExRko7RUErRkU7SUFDRSxxQ0FBQTtFQTdGSjtFQWlHQTs7Ozs7OztJQU9FLHFDQUFBO0VBL0ZGO0VBa0dBO0lBQ0Usc0JBQUE7SUFDQSxrQkFBQTtJQUNBLG9CQUFBO0VBaEdGO0VBbUdBO0lBQ0Usc0JBQUE7SUFDQSxtQkFBQTtFQWpHRjtFQW1HRTtJQUNFLFdBQUE7SUFDQSxnQkFBQTtJQUNBLHVCQUFBO0VBakdKO0FBQ0Y7QUFxR0EsY0FBQTtBQUNBO0VBQ0U7SUFDRSxVQUFBO0lBQ0EsMkJBQUE7RUFuR0Y7RUFxR0E7SUFDRSxVQUFBO0lBQ0Esd0JBQUE7RUFuR0Y7QUFDRjtBQXNHQTs7Ozs7OztFQU9FLCtCQUFBO0FBcEdGIiwic291cmNlc0NvbnRlbnQiOlsiLnNlY3VyaXR5LWNvbnRhaW5lciB7XHJcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG4gIGNvbG9yOiAjMzMzO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjY7XHJcbn1cclxuXHJcbi8qIEhlcm8gU2VjdGlvbiAqL1xyXG4uc2VjdXJpdHktaGVybyB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiYSgzMiwgNzYsIDEyMCwgMC45KSwgcmdiYSgyNCwgOTEsIDE5NCwgMC45KSk7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDEwMHB4IDIwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAuaGVyby1jb250ZW50IHtcclxuICAgIG1heC13aWR0aDogODAwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuXHJcbiAgICAuaGVyby1pY29uIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuXHJcbiAgICAgIG1hdC1pY29uIHtcclxuICAgICAgICBmb250LXNpemU6IDY0cHg7XHJcbiAgICAgICAgaGVpZ2h0OiA2NHB4O1xyXG4gICAgICAgIHdpZHRoOiA2NHB4O1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XHJcbiAgICAgICAgcGFkZGluZzogMjBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuaGVyby10aXRsZSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogNDhweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG5cclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAzNnB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmhlcm8tc3VidGl0bGUge1xyXG4gICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgIG9wYWNpdHk6IDAuOTtcclxuICAgICAgbWF4LXdpZHRoOiA2MDBweDtcclxuICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcblxyXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8qIFRydXN0IEJhZGdlcyAqL1xyXG4udHJ1c3QtYmFkZ2VzIHtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBwYWRkaW5nOiA0MHB4IDIwcHg7XHJcbiAgYm94LXNoYWRvdzogMCA0cHggMTVweCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xyXG5cclxuICAuYmFkZ2VzLWdyaWQge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjAwcHgsIDFmcikpO1xyXG4gICAgZ2FwOiAzMHB4O1xyXG4gICAgbWF4LXdpZHRoOiAxMjAwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuXHJcbiAgICAuYmFkZ2UtaXRlbSB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgZ2FwOiAxNXB4O1xyXG5cclxuICAgICAgbWF0LWljb24ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgICAgICBjb2xvcjogIzBkNDdhMTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDEzLCA3MSwgMTYxLCAwLjEpO1xyXG4gICAgICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBzcGFuIHtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLyogTWFpbiBDb250ZW50ICovXHJcbi5zZWN1cml0eS1jb250ZW50IHtcclxuICBwYWRkaW5nOiA2MHB4IDA7XHJcbiAgYmFja2dyb3VuZDogI2Y4ZjlmYTtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgcGFkZGluZzogMCAyMHB4O1xyXG59XHJcblxyXG4vKiBOYXZpZ2F0aW9uIFNlY3Rpb24gKi9cclxuLm5hdmlnYXRpb24tc2VjdGlvbiB7XHJcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuXHJcbiAgLm5hdi1jYXJkIHtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjA4KTtcclxuXHJcbiAgICBtYXQtY2FyZC1jb250ZW50IHtcclxuICAgICAgcGFkZGluZzogMzBweDtcclxuXHJcbiAgICAgIGgzIHtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICBjb2xvcjogIzMzMztcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgfVxyXG5cclxuICAgICAgLm5hdi1saW5rcyB7XHJcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgyMDBweCwgMWZyKSk7XHJcbiAgICAgICAgZ2FwOiAxMnB4O1xyXG5cclxuICAgICAgICAubmF2LWxpbmsge1xyXG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxMnB4IDE2cHg7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZjBmN2ZmO1xyXG4gICAgICAgICAgY29sb3I6ICMzMzM7XHJcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuICAgICAgICAgIGJvcmRlci1sZWZ0OiAzcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcblxyXG4gICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNlMWYwZmY7XHJcbiAgICAgICAgICAgIGJvcmRlci1sZWZ0LWNvbG9yOiAjMjE5NmYzO1xyXG4gICAgICAgICAgICBjb2xvcjogIzIxOTZmMztcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDVweCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vKiBTZWN1cml0eSBTZWN0aW9ucyAqL1xyXG4uc2VjdXJpdHktc2VjdGlvbnMge1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgYm94LXNoYWRvdzogMCA0cHggMTVweCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xyXG4gIHBhZGRpbmc6IDQwcHg7XHJcbn1cclxuXHJcbi5zZWN1cml0eS1zZWN0aW9uIHtcclxuICBtYXJnaW4tYm90dG9tOiA2MHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiA0MHB4O1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTllY2VmO1xyXG5cclxuICAmOmxhc3QtY2hpbGQge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMDtcclxuICB9XHJcblxyXG4gIC5zZWN0aW9uLWhlYWRlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdhcDogMjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcblxyXG4gICAgLnNlY3Rpb24taWNvbiB7XHJcbiAgICAgIHdpZHRoOiA3MHB4O1xyXG4gICAgICBoZWlnaHQ6IDcwcHg7XHJcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMyMTk2ZjMsICMxOTc2ZDIpO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBmbGV4LXNocmluazogMDtcclxuXHJcbiAgICAgIG1hdC1pY29uIHtcclxuICAgICAgICBmb250LXNpemU6IDMycHg7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaDIge1xyXG4gICAgICBmb250LXNpemU6IDMycHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcblxyXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICBmb250LXNpemU6IDI2cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuc2VjdGlvbi1zdWJ0aXRsZSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgY29sb3I6ICM2NjY7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8qIEZlYXR1cmVzIEdyaWQgKi9cclxuLmZlYXR1cmVzLWdyaWQge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgzMDBweCwgMWZyKSk7XHJcbiAgZ2FwOiAzMHB4O1xyXG5cclxuICAuZmVhdHVyZS1jYXJkIHtcclxuICAgIHBhZGRpbmc6IDMwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjhmOWZhO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgIGJvcmRlci1sZWZ0OiA0cHggc29saWQgIzIxOTZmMztcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2U7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNXB4KTtcclxuICAgICAgYm94LXNoYWRvdzogMCA4cHggMjVweCByZ2JhKDMzLCAxNTAsIDI0MywgMC4xKTtcclxuICAgIH1cclxuXHJcbiAgICAuZmVhdHVyZS1pY29uIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuXHJcbiAgICAgIG1hdC1pY29uIHtcclxuICAgICAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICAgICAgY29sb3I6ICMyMTk2ZjM7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBoMyB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgY29sb3I6ICMzMzM7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgcCB7XHJcbiAgICAgIGNvbG9yOiAjNjY2O1xyXG4gICAgICBsaW5lLWhlaWdodDogMS42O1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vKiBDb21wbGlhbmNlIENhcmRzICovXHJcbi5jb21wbGlhbmNlLWNhcmRzIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMzAwcHgsIDFmcikpO1xyXG4gIGdhcDogMzBweDtcclxuXHJcbiAgLmNvbXBsaWFuY2UtY2FyZCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjA4KTtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2U7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNXB4KTtcclxuICAgIH1cclxuXHJcbiAgICBtYXQtY2FyZC1jb250ZW50IHtcclxuICAgICAgcGFkZGluZzogMzBweDtcclxuXHJcbiAgICAgIC5jb21wbGlhbmNlLWljb24ge1xyXG4gICAgICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgICAgIGhlaWdodDogNjBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcblxyXG4gICAgICAgICYucG9waWEge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiYSg3NiwgMTc1LCA4MCwgMC4xKTtcclxuXHJcbiAgICAgICAgICBtYXQtaWNvbiB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNGNhZjUwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJi5maWNhIHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAxNTIsIDAsIDAuMSk7XHJcblxyXG4gICAgICAgICAgbWF0LWljb24ge1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmOTgwMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICYuc29jIHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMzMsIDE1MCwgMjQzLCAwLjEpO1xyXG5cclxuICAgICAgICAgIG1hdC1pY29uIHtcclxuICAgICAgICAgICAgY29sb3I6ICMyMTk2ZjM7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBtYXQtaWNvbiB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDMycHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBoMyB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgY29sb3I6ICMzMzM7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgcCB7XHJcbiAgICAgICAgY29sb3I6ICM2NjY7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNjtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICB1bCB7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuXHJcbiAgICAgICAgbGkge1xyXG4gICAgICAgICAgY29sb3I6ICM2NjY7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS41O1xyXG5cclxuICAgICAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICfDosKAwqInO1xyXG4gICAgICAgICAgICBjb2xvcjogIzIxOTZmMztcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgd2lkdGg6IDFlbTtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IC0xZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vKiBBdXRoZW50aWNhdGlvbiBGZWF0dXJlcyAqL1xyXG4uYXV0aC1mZWF0dXJlcyB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBnYXA6IDI1cHg7XHJcblxyXG4gIC5hdXRoLWZlYXR1cmUge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgZ2FwOiAyMHB4O1xyXG4gICAgcGFkZGluZzogMjVweDtcclxuICAgIGJhY2tncm91bmQ6ICNmOGY5ZmE7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCAjNGNhZjUwO1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZTtcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwcHgpO1xyXG4gICAgfVxyXG5cclxuICAgIC5hdXRoLWljb24ge1xyXG4gICAgICBtYXQtaWNvbiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAzMnB4O1xyXG4gICAgICAgIGNvbG9yOiAjNGNhZjUwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmF1dGgtY29udGVudCB7XHJcbiAgICAgIGZsZXg6IDE7XHJcblxyXG4gICAgICBoMyB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgY29sb3I6ICMzMzM7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgcCB7XHJcbiAgICAgICAgY29sb3I6ICM2NjY7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNjtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8qIEluZnJhc3RydWN0dXJlIEdyaWQgKi9cclxuLmluZnJhc3RydWN0dXJlLWdyaWQge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyNTBweCwgMWZyKSk7XHJcbiAgZ2FwOiAyNXB4O1xyXG5cclxuICAuaW5mcmEtaXRlbSB7XHJcbiAgICBwYWRkaW5nOiAyNXB4O1xyXG4gICAgYmFja2dyb3VuZDogI2Y4ZjlmYTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICBib3JkZXItdG9wOiA0cHggc29saWQgI2ZmOTgwMDtcclxuXHJcbiAgICBoMyB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgY29sb3I6ICMzMzM7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDEycHg7XHJcbiAgICB9XHJcblxyXG4gICAgcCB7XHJcbiAgICAgIGNvbG9yOiAjNjY2O1xyXG4gICAgICBsaW5lLWhlaWdodDogMS42O1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vKiBNb25pdG9yaW5nIEZlYXR1cmVzICovXHJcbi5tb25pdG9yaW5nLWZlYXR1cmVzIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjUwcHgsIDFmcikpO1xyXG4gIGdhcDogMjVweDtcclxuXHJcbiAgLm1vbml0b3JpbmctY2FyZCB7XHJcbiAgICBwYWRkaW5nOiAyNXB4O1xyXG4gICAgYmFja2dyb3VuZDogI2YwZjdmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZTFmMGZmO1xyXG5cclxuICAgIGgzIHtcclxuICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICBjb2xvcjogIzMzMztcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMTJweDtcclxuICAgIH1cclxuXHJcbiAgICBwIHtcclxuICAgICAgY29sb3I6ICM2NjY7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjY7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8qIFByaXZhY3kgRmVhdHVyZXMgKi9cclxuLnByaXZhY3ktZmVhdHVyZXMge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyNTBweCwgMWZyKSk7XHJcbiAgZ2FwOiAyNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcblxyXG4gIC5wcml2YWN5LWNhcmQge1xyXG4gICAgcGFkZGluZzogMjVweDtcclxuICAgIGJhY2tncm91bmQ6ICNmOGY5ZmE7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZTtcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpO1xyXG4gICAgfVxyXG5cclxuICAgIG1hdC1pY29uIHtcclxuICAgICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgICBjb2xvcjogIzE1NjVjMDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIH1cclxuXHJcbiAgICBoMyB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgY29sb3I6ICMzMzM7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDEycHg7XHJcbiAgICB9XHJcblxyXG4gICAgcCB7XHJcbiAgICAgIGNvbG9yOiAjNjY2O1xyXG4gICAgICBsaW5lLWhlaWdodDogMS42O1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4ucHJpdmFjeS1saW5rIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gIC5wcml2YWN5LWJ0biB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6IDEwcHg7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDI0cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMTU2NWMwO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICMwNTk2Njk7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcclxuICAgIH1cclxuXHJcbiAgICBtYXQtaWNvbiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8qIEJlc3QgUHJhY3RpY2VzICovXHJcbi5wcmFjdGljZXMtZ3JpZCB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDMwMHB4LCAxZnIpKTtcclxuICBnYXA6IDI1cHg7XHJcblxyXG4gIC5wcmFjdGljZS1jYXJkIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgIGdhcDogMjBweDtcclxuICAgIHBhZGRpbmc6IDI1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjhmOWZhO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgIGJvcmRlci1sZWZ0OiA0cHggc29saWQgI2ZmOTgwMDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNmZmYzZTA7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1cHgpO1xyXG4gICAgfVxyXG5cclxuICAgIC5wcmFjdGljZS1udW1iZXIge1xyXG4gICAgICB3aWR0aDogNDBweDtcclxuICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjZmY5ODAwO1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgZmxleC1zaHJpbms6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLnByYWN0aWNlLWNvbnRlbnQge1xyXG4gICAgICBmbGV4OiAxO1xyXG5cclxuICAgICAgaDMge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgcCB7XHJcbiAgICAgICAgY29sb3I6ICM2NjY7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNjtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8qIEluY2lkZW50IFJlc3BvbnNlICovXHJcbi5pbmNpZGVudC1jYXJkcyB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDMwMHB4LCAxZnIpKTtcclxuICBnYXA6IDI1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuXHJcbiAgLmluY2lkZW50LWNhcmQge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBib3gtc2hhZG93OiAwIDRweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4wOCk7XHJcblxyXG4gICAgbWF0LWNhcmQtaGVhZGVyIHtcclxuICAgICAgYmFja2dyb3VuZDogI2Y4ZjlmYTtcclxuICAgICAgcGFkZGluZzogMjBweDtcclxuXHJcbiAgICAgIG1hdC1jYXJkLXRpdGxlIHtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICBjb2xvcjogIzMzMztcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBtYXQtY2FyZC1jb250ZW50IHtcclxuICAgICAgcGFkZGluZzogMjBweDtcclxuXHJcbiAgICAgIHAge1xyXG4gICAgICAgIGNvbG9yOiAjNjY2O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjY7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4ucmVwb3J0LXNlY3Rpb24ge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiA0MHB4O1xyXG4gIGJhY2tncm91bmQ6ICNmMGY3ZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICBib3JkZXI6IDJweCBkYXNoZWQgIzIxOTZmMztcclxuXHJcbiAgaDMge1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICB9XHJcblxyXG4gIHAge1xyXG4gICAgY29sb3I6ICM2NjY7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgbWF4LXdpZHRoOiA2MDBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIH1cclxuXHJcbiAgLnJlcG9ydC1vcHRpb25zIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBnYXA6IDIwcHg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcblxyXG4gICAgLnJlcG9ydC1idG4ge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBnYXA6IDEwcHg7XHJcbiAgICAgIHBhZGRpbmc6IDEycHggMjRweDtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5cclxuICAgICAgJjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzIxOTZmMztcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcblxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogIzE5NzZkMjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIG1hdC1pY29uIHtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5yZXBvcnQtbm90ZSB7XHJcbiAgICBjb2xvcjogIzY2NjtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcbn1cclxuXHJcbi8qIENvbW1pdG1lbnQgU2VjdGlvbiAqL1xyXG4uY29tbWl0bWVudC1zZWN0aW9uIHtcclxuICBtYXJnaW4tdG9wOiA2MHB4O1xyXG4gIHBhZGRpbmctdG9wOiA0MHB4O1xyXG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCAjZTllY2VmO1xyXG5cclxuICAuY29tbWl0bWVudC1jYXJkIHtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYmEoMzMsIDE1MCwgMjQzLCAwLjA1KSwgcmdiYSgyNSwgMTE4LCAyMTAsIDAuMDUpKTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMzMsIDE1MCwgMjQzLCAwLjEpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuXHJcbiAgICBtYXQtY2FyZC1jb250ZW50IHtcclxuICAgICAgcGFkZGluZzogNDBweDtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgIGdhcDogMzBweDtcclxuXHJcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuY29tbWl0bWVudC1jb250ZW50IHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgZ2FwOiAyMHB4O1xyXG4gICAgICAgIGZsZXg6IDE7XHJcblxyXG4gICAgICAgIG1hdC1pY29uIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogNDhweDtcclxuICAgICAgICAgIGNvbG9yOiAjMjE5NmYzO1xyXG4gICAgICAgICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgICAgICAgd2lkdGg6IDQ4cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBoMyB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgY29sb3I6ICMzMzM7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcCB7XHJcbiAgICAgICAgICBjb2xvcjogIzY2NjtcclxuICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgIG1heC13aWR0aDogNjAwcHg7XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS42O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLnVwZGF0ZS1pbmZvIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuXHJcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwIHtcclxuICAgICAgICAgIGNvbG9yOiAjNjY2O1xyXG4gICAgICAgICAgbWFyZ2luOiA1cHggMDtcclxuXHJcbiAgICAgICAgICBzdHJvbmcge1xyXG4gICAgICAgICAgICBjb2xvcjogIzMzMztcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8qIFJlc3BvbnNpdmUgRGVzaWduICovXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC5zZWN1cml0eS1oZXJvIHtcclxuICAgIHBhZGRpbmc6IDYwcHggMjBweDtcclxuXHJcbiAgICAuaGVyby10aXRsZSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMzZweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5zZWN1cml0eS1jb250ZW50IHtcclxuICAgIHBhZGRpbmc6IDQwcHggMDtcclxuICB9XHJcblxyXG4gIC5zZWN1cml0eS1zZWN0aW9ucyB7XHJcbiAgICBwYWRkaW5nOiAyNXB4O1xyXG4gIH1cclxuXHJcbiAgLnNlY3Rpb24taGVhZGVyIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBnYXA6IDE1cHggIWltcG9ydGFudDtcclxuXHJcbiAgICAuc2VjdGlvbi1pY29uIHtcclxuICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAubmF2aWdhdGlvbi1zZWN0aW9uIHtcclxuICAgIC5uYXYtbGlua3Mge1xyXG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmZlYXR1cmVzLWdyaWQsXHJcbiAgLmNvbXBsaWFuY2UtY2FyZHMsXHJcbiAgLmluZnJhc3RydWN0dXJlLWdyaWQsXHJcbiAgLm1vbml0b3JpbmctZmVhdHVyZXMsXHJcbiAgLnByaXZhY3ktZmVhdHVyZXMsXHJcbiAgLnByYWN0aWNlcy1ncmlkLFxyXG4gIC5pbmNpZGVudC1jYXJkcyB7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLmF1dGgtZmVhdHVyZSB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZ2FwOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAucmVwb3J0LW9wdGlvbnMge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgLnJlcG9ydC1idG4ge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgbWF4LXdpZHRoOiAzMDBweDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vKiBBbmltYXRpb24gKi9cclxuQGtleWZyYW1lcyBmYWRlSW4ge1xyXG4gIGZyb20ge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMHB4KTtcclxuICB9XHJcbiAgdG8ge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICB9XHJcbn1cclxuXHJcbi5mZWF0dXJlLWNhcmQsXHJcbi5jb21wbGlhbmNlLWNhcmQsXHJcbi5hdXRoLWZlYXR1cmUsXHJcbi5pbmZyYS1pdGVtLFxyXG4ucHJpdmFjeS1jYXJkLFxyXG4ucHJhY3RpY2UtY2FyZCxcclxuLmluY2lkZW50LWNhcmQge1xyXG4gIGFuaW1hdGlvbjogZmFkZUluIDAuNnMgZWFzZS1vdXQ7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  }));
}
_staticBlock();

/***/ })

}]);
//# sourceMappingURL=src_app_pages_security_security_component_ts.js.map