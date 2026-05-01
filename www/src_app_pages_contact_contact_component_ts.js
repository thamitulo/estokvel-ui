"use strict";
(self["webpackChunkestokvel_ui"] = self["webpackChunkestokvel_ui"] || []).push([["src_app_pages_contact_contact_component_ts"],{

/***/ 2951:
/*!****************************************************!*\
  !*** ./src/app/pages/contact/contact.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContactComponent: () => (/* binding */ ContactComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 4487);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../material.module */ 9439);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2481);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 5422);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ 8388);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ 5541);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/select */ 8724);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ 6060);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ 3840);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ 9885);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/card */ 3777);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/expansion */ 9322);
var _staticBlock;
















function ContactComponent_mat_error_163_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " First name is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function ContactComponent_mat_error_170_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Last name is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function ContactComponent_mat_error_177_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Email is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function ContactComponent_mat_error_178_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Please enter a valid email ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function ContactComponent_mat_error_201_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Please select a subject ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function ContactComponent_mat_error_206_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Message is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function ContactComponent_mat_error_207_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Message must be at least 10 characters ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function ContactComponent_mat_card_214_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-card", 74)(1, "mat-card-content")(2, "div", 75)(3, "div", 76)(4, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "whatsapp");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 77)(7, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "WhatsApp Support");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "p", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](10, "span", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, " Online now ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "p", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, " Chat with us instantly on WhatsApp for quick answers to your questions. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "button", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ContactComponent_mat_card_214_Template_button_click_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.openWhatsAppChat());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "whatsapp");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, " Start WhatsApp Chat ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "div", 82)(19, "div", 30)(20, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, "schedule");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23, "Instant response");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "div", 30)(25, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26, "attach_file");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28, "Share screenshots");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "div", 30)(30, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](31, "security");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](33, "Secure & private");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
  }
}
function ContactComponent_mat_card_215_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-card", 83)(1, "mat-card-content")(2, "div", 84)(3, "div", 85)(4, "div", 86)(5, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "support_agent");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 87)(8, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "eStokvel Support");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "p", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](11, "span", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, " Typing... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "button", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ContactComponent_mat_card_215_Template_button_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.closeWhatsAppChat());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "div", 89)(17, "div", 90)(18, "div", 91)(19, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20, "Hello! \uD83D\uDC4B Welcome to eStokvel support. How can we help you today?");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "span", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22, "10:30 AM");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "div", 93)(24, "div", 91)(25, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26, "Hi, I need help with creating my first stokvel.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "span", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28, "10:31 AM");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "div", 90)(30, "div", 91)(31, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](32, "I'd be happy to help you set up your first stokvel! Let me guide you through the process.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "span", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](34, "10:31 AM");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "div", 94)(36, "mat-form-field", 49)(37, "input", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function ContactComponent_mat_card_215_Template_input_ngModelChange_37_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx_r1.chatMessage, $event) || (ctx_r1.chatMessage = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("keyup.enter", function ContactComponent_mat_card_215_Template_input_keyup_enter_37_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.sendChatMessage());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "mat-icon", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](39, "sentiment_satisfied_alt");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "button", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ContactComponent_mat_card_215_Template_button_click_40_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.sendChatMessage());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](42, "send");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "div", 97)(44, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](45, "Quick questions:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "div", 98)(47, "button", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ContactComponent_mat_card_215_Template_button_click_47_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.sendQuickMessage("How do I create a stokvel?"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](48, " Create stokvel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](49, "button", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ContactComponent_mat_card_215_Template_button_click_49_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.sendQuickMessage("How do I invite members?"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](50, " Invite members ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](51, "button", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ContactComponent_mat_card_215_Template_button_click_51_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.sendQuickMessage("What are the fees?"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](52, " Pricing ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.chatMessage);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", !ctx_r1.chatMessage.trim());
  }
}
class ContactComponent {
  constructor(fb, snackBar, router) {
    this.fb = fb;
    this.snackBar = snackBar;
    this.router = router;
    // WhatsApp chat state
    this.whatsappChatOpen = false;
    this.chatMessage = '';
    this.isSubmitting = false;
    this.whatsappNumber = '0788778174';
    this.supportEmail = 'support@estokvel.co.za';
    this.supportPhone = '0788778174';
    this.emergencyPhone = '0788778174';
    this.contactForm = this.createContactForm();
  }
  // Create contact form
  createContactForm() {
    return this.fb.group({
      firstName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.minLength(2)]],
      lastName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.minLength(2)]],
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.email]],
      phone: [''],
      subject: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      message: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.minLength(10)]]
    });
  }
  openWhatsAppChat() {
    const message = `Hello eStokvel support! I need assistance with:`;
    const url = `https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
    this.snackBar.open('Opening WhatsApp...', 'Close', {
      duration: 3000
    });
  }
  // Open simulated WhatsApp chat window
  openWhatsAppChatWindow() {
    this.whatsappChatOpen = true;
  }
  // Close WhatsApp chat window
  closeWhatsAppChat() {
    this.whatsappChatOpen = false;
    this.chatMessage = '';
  }
  // Send chat message
  sendChatMessage() {
    if (this.chatMessage.trim()) {
      // In a real app, this would send the message to your backend/WhatsApp API
      this.snackBar.open('Message sent! We\'ll reply shortly.', 'Close', {
        duration: 3000
      });
      // Simulate auto-reply after 2 seconds
      setTimeout(() => {
        this.snackBar.open('New message received in WhatsApp!', 'Close', {
          duration: 3000
        });
      }, 2000);
      this.chatMessage = '';
    }
  }
  // Send quick message
  sendQuickMessage(message) {
    this.chatMessage = message;
    this.sendChatMessage();
  }
  // Open email client
  openEmail() {
    const subject = 'eStokvel Support Request';
    const body = `Hello eStokvel team,\n\nI would like to get help with:\n\n`;
    const url = `mailto:${this.supportEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(url, '_blank');
  }
  // Call support
  callSupport() {
    window.open(`tel:${this.supportPhone}`, '_self');
  }
  // Call emergency support
  callEmergency() {
    window.open(`tel:${this.emergencyPhone}`, '_self');
  }
  // Open help center
  openHelpCenter() {
    this.router.navigate(['/help-center']);
  }
  // Submit contact form
  onSubmit() {
    if (this.contactForm.valid) {
      this.isSubmitting = true;
      // Simulate API call
      setTimeout(() => {
        console.log('Form submitted:', this.contactForm.value);
        this.snackBar.open('Thank you for your message! We\'ll get back to you within 24 hours.', 'Close', {
          duration: 5000,
          panelClass: ['success-snackbar']
        });
        this.contactForm.reset();
        this.isSubmitting = false;
      }, 2000);
    } else {
      this.snackBar.open('Please fill in all required fields correctly', 'Close', {
        duration: 3000,
        panelClass: ['error-snackbar']
      });
    }
  }
  // Get current year for footer
  get currentYear() {
    return new Date().getFullYear();
  }
  static #_ = _staticBlock = () => (this.ɵfac = function ContactComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ContactComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router));
  }, this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: ContactComponent,
    selectors: [["app-contact"]],
    decls: 290,
    vars: 12,
    consts: [[1, "contact-container"], [1, "contact-hero"], [1, "hero-background"], [1, "floating-shapes"], [1, "shape", "shape-1"], [1, "shape", "shape-2"], [1, "shape", "shape-3"], [1, "hero-content"], [1, "breadcrumb-nav"], ["routerLink", "/home", 1, "breadcrumb-link"], [1, "breadcrumb-separator"], [1, "breadcrumb-active"], [1, "hero-title"], [1, "hero-subtitle"], [1, "contact-stats"], [1, "stat-card"], [1, "stat-icon"], [1, "stat-content"], [1, "stat-value"], [1, "stat-label"], [1, "contact-content"], [1, "content-layout"], [1, "contact-methods"], [1, "contact-card"], [1, "section-description"], [1, "method-grid"], [1, "method-card", "whatsapp", 3, "click"], [1, "method-icon"], [1, "method-content"], [1, "method-features"], [1, "feature"], [1, "method-action"], ["mat-raised-button", "", 1, "whatsapp-btn"], [1, "method-card", "email", 3, "click"], [1, "contact-info"], [1, "info-item"], ["mat-raised-button", "", 1, "email-btn"], [1, "method-card", "phone", 3, "click"], ["mat-raised-button", "", 1, "phone-btn"], [1, "method-card", "help", 3, "click"], ["mat-raised-button", "", 1, "help-btn"], [1, "form-card"], [1, "contact-form", 3, "ngSubmit", "formGroup"], [1, "form-row"], ["appearance", "outline", 1, "half-width"], ["matInput", "", "formControlName", "firstName", "required", ""], ["matSuffix", ""], [4, "ngIf"], ["matInput", "", "formControlName", "lastName", "required", ""], ["appearance", "outline", 1, "full-width"], ["matInput", "", "formControlName", "email", "type", "email", "required", ""], ["matInput", "", "formControlName", "phone", "type", "tel"], ["formControlName", "subject", "required", ""], ["value", "general"], ["value", "technical"], ["value", "billing"], ["value", "feature"], ["value", "partnership"], ["value", "other"], ["matInput", "", "formControlName", "message", "rows", "6", "required", ""], [1, "form-actions"], ["mat-raised-button", "", "color", "primary", "type", "submit", 1, "submit-btn", 3, "disabled"], [1, "contact-sidebar"], ["class", "whatsapp-widget", 4, "ngIf"], ["class", "whatsapp-chat-window", 4, "ngIf"], [1, "office-card"], [1, "office-info"], [1, "info-content"], [1, "emergency-card"], [1, "emergency-header"], ["mat-raised-button", "", "color", "warn", 1, "emergency-btn", 3, "click"], [1, "faq-section"], [1, "faq-content"], [1, "faq-grid"], [1, "whatsapp-widget"], [1, "widget-header"], [1, "whatsapp-icon"], [1, "widget-info"], [1, "status", "online"], [1, "status-dot"], [1, "widget-description"], ["mat-raised-button", "", 1, "whatsapp-chat-btn", 3, "click"], [1, "widget-features"], [1, "whatsapp-chat-window"], [1, "chat-header"], [1, "chat-info"], [1, "chat-avatar"], [1, "chat-details"], ["mat-icon-button", "", 1, "close-chat", 3, "click"], [1, "chat-messages"], [1, "message", "received"], [1, "message-content"], [1, "message-time"], [1, "message", "sent"], [1, "chat-input"], ["matInput", "", "placeholder", "Type your message...", 3, "ngModelChange", "keyup.enter", "ngModel"], ["mat-icon-button", "", "color", "primary", 3, "click", "disabled"], [1, "quick-replies"], [1, "quick-buttons"], ["mat-stroked-button", "", 3, "click"]],
    template: function ContactComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "div", 4)(5, "div", 5)(6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 7)(8, "nav", 8)(9, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "/");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "Contact Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "h1", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "Get in Touch");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, "We're here to help you with any questions about eStokvel");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "div", 14)(20, "div", 15)(21, "div", 16)(22, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23, "support_agent");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "div", 17)(25, "h3", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26, "24/7");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28, "Support");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "div", 15)(30, "div", 16)(31, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](32, "schedule");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "div", 17)(34, "h3", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](35, "< 2 min");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](37, "Response Time");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "div", 15)(39, "div", 16)(40, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](41, "verified");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](42, "div", 17)(43, "h3", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](44, "100%");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](45, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](46, "Satisfaction");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](47, "div", 20)(48, "div", 21)(49, "div", 22)(50, "mat-card", 23)(51, "mat-card-content")(52, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](53, "Contact Methods");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](54, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](55, "Choose your preferred way to get in touch with us");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](56, "div", 25)(57, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ContactComponent_Template_div_click_57_listener() {
          return ctx.openWhatsAppChat();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](58, "div", 27)(59, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](60, "whatsapp");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](61, "div", 28)(62, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](63, "WhatsApp Chat");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](64, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](65, "Instant messaging support with our team");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](66, "div", 29)(67, "span", 30)(68, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](69, "check_circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](70, " Instant response ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](71, "span", 30)(72, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](73, "check_circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](74, " File sharing ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](75, "span", 30)(76, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](77, "check_circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](78, " 24/7 available ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](79, "div", 31)(80, "button", 32)(81, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](82, "whatsapp");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](83, " Start Chat ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](84, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ContactComponent_Template_div_click_84_listener() {
          return ctx.openEmail();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](85, "div", 27)(86, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](87, "email");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](88, "div", 28)(89, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](90, "Email Support");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](91, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](92, "Send us a detailed message and get a response within hours");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](93, "div", 34)(94, "span", 35)(95, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](96, "email");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](97, " support@estokvel.co.za ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](98, "div", 31)(99, "button", 36)(100, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](101, "email");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](102, " Send Email ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](103, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ContactComponent_Template_div_click_103_listener() {
          return ctx.callSupport();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](104, "div", 27)(105, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](106, "phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](107, "div", 28)(108, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](109, "Phone Support");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](110, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](111, "Speak directly with our support team");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](112, "div", 34)(113, "span", 35)(114, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](115, "phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](116, " 011 234 5678 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](117, "span", 35)(118, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](119, "schedule");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](120, " Mon-Fri: 8AM-6PM ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](121, "div", 31)(122, "button", 38)(123, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](124, "phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](125, " Call Now ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](126, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ContactComponent_Template_div_click_126_listener() {
          return ctx.openHelpCenter();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](127, "div", 27)(128, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](129, "help_center");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](130, "div", 28)(131, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](132, "Help Center");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](133, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](134, "Find answers to common questions in our knowledge base");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](135, "div", 29)(136, "span", 30)(137, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](138, "article");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](139, " FAQs & Guides ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](140, "span", 30)(141, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](142, "video_library");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](143, " Tutorial Videos ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](144, "div", 31)(145, "button", 40)(146, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](147, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](148, " Browse Articles ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](149, "mat-card", 41)(150, "mat-card-content")(151, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](152, "Send us a Message");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](153, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](154, "Prefer to fill out a form? We'll get back to you within 24 hours.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](155, "form", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngSubmit", function ContactComponent_Template_form_ngSubmit_155_listener() {
          return ctx.onSubmit();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](156, "div", 43)(157, "mat-form-field", 44)(158, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](159, "First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](160, "input", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](161, "mat-icon", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](162, "person");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](163, ContactComponent_mat_error_163_Template, 2, 0, "mat-error", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](164, "mat-form-field", 44)(165, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](166, "Last Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](167, "input", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](168, "mat-icon", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](169, "person");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](170, ContactComponent_mat_error_170_Template, 2, 0, "mat-error", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](171, "mat-form-field", 49)(172, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](173, "Email Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](174, "input", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](175, "mat-icon", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](176, "email");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](177, ContactComponent_mat_error_177_Template, 2, 0, "mat-error", 47)(178, ContactComponent_mat_error_178_Template, 2, 0, "mat-error", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](179, "mat-form-field", 49)(180, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](181, "Phone Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](182, "input", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](183, "mat-icon", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](184, "phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](185, "mat-form-field", 49)(186, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](187, "Subject");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](188, "mat-select", 52)(189, "mat-option", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](190, "General Inquiry");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](191, "mat-option", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](192, "Technical Support");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](193, "mat-option", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](194, "Billing Issue");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](195, "mat-option", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](196, "Feature Request");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](197, "mat-option", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](198, "Partnership");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](199, "mat-option", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](200, "Other");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](201, ContactComponent_mat_error_201_Template, 2, 0, "mat-error", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](202, "mat-form-field", 49)(203, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](204, "Message");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](205, "textarea", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](206, ContactComponent_mat_error_206_Template, 2, 0, "mat-error", 47)(207, ContactComponent_mat_error_207_Template, 2, 0, "mat-error", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](208, "div", 60)(209, "button", 61)(210, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](211, "send");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](212);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](213, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](214, ContactComponent_mat_card_214_Template, 34, 0, "mat-card", 63)(215, ContactComponent_mat_card_215_Template, 53, 2, "mat-card", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](216, "mat-card", 65)(217, "mat-card-content")(218, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](219, "Our Office");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](220, "div", 66)(221, "div", 35)(222, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](223, "location_on");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](224, "div", 67)(225, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](226, "Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](227, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](228, "123 Innovation Street");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](229, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](230, "Johannesburg, 2000");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](231, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](232, "South Africa");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](233, "div", 35)(234, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](235, "schedule");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](236, "div", 67)(237, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](238, "Business Hours");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](239, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](240, "Monday - Friday: 8:00 AM - 6:00 PM");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](241, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](242, "Saturday: 9:00 AM - 1:00 PM");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](243, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](244, "Sunday: Closed");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](245, "div", 35)(246, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](247, "language");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](248, "div", 67)(249, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](250, "Languages");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](251, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](252, "English, Zulu, Xhosa, Sotho");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](253, "mat-card", 68)(254, "mat-card-content")(255, "div", 69)(256, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](257, "warning");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](258, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](259, "Urgent Support");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](260, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](261, "For urgent account or security issues that need immediate attention.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](262, "button", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ContactComponent_Template_button_click_262_listener() {
          return ctx.callEmergency();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](263, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](264, "emergency");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](265, " Emergency Support ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](266, "div", 71)(267, "div", 72)(268, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](269, "Frequently Asked Questions");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](270, "div", 73)(271, "mat-accordion")(272, "mat-expansion-panel")(273, "mat-expansion-panel-header")(274, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](275, "What are your support hours?");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](276, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](277, "WhatsApp support is available 24/7. Phone support is available Monday-Friday from 8AM-6PM.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](278, "mat-expansion-panel")(279, "mat-expansion-panel-header")(280, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](281, "How secure is my financial data?");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](282, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](283, "We use bank-level encryption and comply with POPIA regulations to keep your data safe and secure.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](284, "mat-expansion-panel")(285, "mat-expansion-panel-header")(286, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](287, "Can I use eStokvel outside South Africa?");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](288, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](289, "Currently, eStokvel is only available for South African residents with valid SA ID numbers.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()();
      }
      if (rf & 2) {
        let tmp_1_0;
        let tmp_2_0;
        let tmp_3_0;
        let tmp_4_0;
        let tmp_5_0;
        let tmp_6_0;
        let tmp_7_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](155);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.contactForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (tmp_1_0 = ctx.contactForm.get("firstName")) == null ? null : tmp_1_0.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (tmp_2_0 = ctx.contactForm.get("lastName")) == null ? null : tmp_2_0.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (tmp_3_0 = ctx.contactForm.get("email")) == null ? null : tmp_3_0.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (tmp_4_0 = ctx.contactForm.get("email")) == null ? null : tmp_4_0.hasError("email"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (tmp_5_0 = ctx.contactForm.get("subject")) == null ? null : tmp_5_0.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (tmp_6_0 = ctx.contactForm.get("message")) == null ? null : tmp_6_0.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (tmp_7_0 = ctx.contactForm.get("message")) == null ? null : tmp_7_0.hasError("minlength"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", !ctx.contactForm.valid || ctx.isSubmitting);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx.isSubmitting ? "Sending..." : "Send Message", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.whatsappChatOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.whatsappChatOpen);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _material_module__WEBPACK_IMPORTED_MODULE_3__.MaterialModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatError, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatSuffix, _angular_material_input__WEBPACK_IMPORTED_MODULE_9__.MatInput, _angular_material_select__WEBPACK_IMPORTED_MODULE_11__.MatSelect, _angular_material_select__WEBPACK_IMPORTED_MODULE_10__.MatOption, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_14__.MatIconButton, _angular_material_card__WEBPACK_IMPORTED_MODULE_15__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_15__.MatCardContent, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__.MatAccordion, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__.MatExpansionPanel, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__.MatExpansionPanelHeader, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__.MatExpansionPanelTitle, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel],
    styles: [".contact-container[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  background: white;\n}\n\n\n\n.contact-hero[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #092e6b 0%, #0d47a1 100%);\n  color: white;\n  padding: 80px 20px 60px;\n  position: relative;\n  overflow: hidden;\n}\n\n.hero-background[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  opacity: 0.1;\n}\n.hero-background[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: radial-gradient(circle at 20% 80%, rgba(255, 255, 255, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.05) 0%, transparent 50%);\n}\n\n.floating-shapes[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n.floating-shapes[_ngcontent-%COMP%]   .shape[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.1);\n}\n.floating-shapes[_ngcontent-%COMP%]   .shape.shape-1[_ngcontent-%COMP%] {\n  width: 120px;\n  height: 120px;\n  top: 10%;\n  right: 10%;\n  animation: _ngcontent-%COMP%_float 8s ease-in-out infinite;\n}\n.floating-shapes[_ngcontent-%COMP%]   .shape.shape-2[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  bottom: 20%;\n  left: 5%;\n  animation: _ngcontent-%COMP%_float 6s ease-in-out infinite reverse;\n}\n.floating-shapes[_ngcontent-%COMP%]   .shape.shape-3[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  top: 40%;\n  right: 20%;\n  animation: _ngcontent-%COMP%_float 10s ease-in-out infinite;\n}\n\n@keyframes _ngcontent-%COMP%_float {\n  0%, 100% {\n    transform: translateY(0px) rotate(0deg);\n  }\n  50% {\n    transform: translateY(-20px) rotate(180deg);\n  }\n}\n.hero-content[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  max-width: 1200px;\n  margin: 0 auto;\n  text-align: center;\n}\n\n.breadcrumb-nav[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  margin-bottom: 30px;\n  font-size: 14px;\n}\n\n.breadcrumb-link[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.8);\n  text-decoration: none;\n  transition: color 0.3s;\n}\n.breadcrumb-link[_ngcontent-%COMP%]:hover {\n  color: white;\n}\n\n.breadcrumb-separator[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.6);\n}\n\n.breadcrumb-active[_ngcontent-%COMP%] {\n  color: white;\n  font-weight: 600;\n}\n\n.hero-title[_ngcontent-%COMP%] {\n  font-size: 48px;\n  font-weight: 700;\n  margin: 0 0 20px;\n  color: white;\n}\n@media (max-width: 768px) {\n  .hero-title[_ngcontent-%COMP%] {\n    font-size: 36px;\n  }\n}\n\n.hero-subtitle[_ngcontent-%COMP%] {\n  font-size: 20px;\n  opacity: 0.9;\n  margin: 0 0 40px;\n  font-weight: 400;\n  max-width: 600px;\n  margin-left: auto;\n  margin-right: auto;\n}\n@media (max-width: 768px) {\n  .hero-subtitle[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n}\n\n.contact-stats[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  gap: 30px;\n  flex-wrap: wrap;\n  margin-top: 40px;\n}\n@media (max-width: 768px) {\n  .contact-stats[_ngcontent-%COMP%] {\n    gap: 20px;\n  }\n}\n\n.stat-card[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.15);\n  -webkit-backdrop-filter: blur(10px);\n          backdrop-filter: blur(10px);\n  border-radius: 12px;\n  padding: 24px;\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  min-width: 180px;\n}\n@media (max-width: 768px) {\n  .stat-card[_ngcontent-%COMP%] {\n    min-width: 140px;\n    padding: 20px;\n  }\n}\n\n.stat-icon[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  background: rgba(255, 255, 255, 0.2);\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.stat-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n  height: 24px;\n  width: 24px;\n  color: white;\n}\n\n.stat-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 700;\n  margin: 0 0 4px;\n  color: white;\n}\n@media (max-width: 768px) {\n  .stat-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 24px;\n  }\n}\n.stat-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 14px;\n  opacity: 0.9;\n  color: rgba(255, 255, 255, 0.9);\n}\n\n\n\n.contact-content[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 60px 20px;\n}\n\n.content-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 2fr 1fr;\n  gap: 40px;\n}\n@media (max-width: 968px) {\n  .content-layout[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 30px;\n  }\n}\n\n\n\n.contact-methods[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 30px;\n}\n\nmat-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);\n  overflow: hidden;\n}\n\n.contact-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%] {\n  padding: 30px;\n}\n\n.section-description[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #666;\n  margin: 0 0 30px;\n  line-height: 1.5;\n}\n\n.method-grid[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 20px;\n}\n\n.method-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n  padding: 24px;\n  border: 2px solid #f0f0f0;\n  border-radius: 12px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  background: #fafafa;\n}\n.method-card[_ngcontent-%COMP%]:hover {\n  border-color: #0d47a1;\n  transform: translateY(-2px);\n  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);\n}\n.method-card.whatsapp[_ngcontent-%COMP%]:hover {\n  border-color: #25D366;\n  background: rgba(37, 211, 102, 0.05);\n}\n.method-card.email[_ngcontent-%COMP%]:hover {\n  border-color: #EA4335;\n  background: rgba(234, 67, 53, 0.05);\n}\n.method-card.phone[_ngcontent-%COMP%]:hover {\n  border-color: #34B7F1;\n  background: rgba(52, 183, 241, 0.05);\n}\n.method-card.help[_ngcontent-%COMP%]:hover {\n  border-color: #FF9800;\n  background: rgba(255, 152, 0, 0.05);\n}\n\n.method-icon[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.whatsapp[_ngcontent-%COMP%]   .method-icon[_ngcontent-%COMP%] {\n  background: rgba(37, 211, 102, 0.1);\n  color: #25D366;\n}\n.email[_ngcontent-%COMP%]   .method-icon[_ngcontent-%COMP%] {\n  background: rgba(234, 67, 53, 0.1);\n  color: #EA4335;\n}\n.phone[_ngcontent-%COMP%]   .method-icon[_ngcontent-%COMP%] {\n  background: rgba(52, 183, 241, 0.1);\n  color: #34B7F1;\n}\n.help[_ngcontent-%COMP%]   .method-icon[_ngcontent-%COMP%] {\n  background: rgba(255, 152, 0, 0.1);\n  color: #FF9800;\n}\n.method-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 28px;\n  height: 28px;\n  width: 28px;\n}\n\n.method-content[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.method-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  margin: 0 0 8px;\n  color: #333;\n}\n.method-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #666;\n  margin: 0 0 12px;\n  line-height: 1.5;\n}\n\n.method-features[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.method-features[_ngcontent-%COMP%]   .feature[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 12px;\n  color: #666;\n}\n.method-features[_ngcontent-%COMP%]   .feature[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n  height: 14px;\n  width: 14px;\n  color: #4caf50;\n}\n\n.contact-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.contact-info[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 14px;\n  color: #666;\n}\n.contact-info[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  height: 16px;\n  width: 16px;\n}\n\n.method-action[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n}\n.method-action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.method-action[_ngcontent-%COMP%]   button.whatsapp-btn[_ngcontent-%COMP%] {\n  background: #25D366;\n  color: white;\n}\n.method-action[_ngcontent-%COMP%]   button.whatsapp-btn[_ngcontent-%COMP%]:hover {\n  background: #128C7E;\n}\n.method-action[_ngcontent-%COMP%]   button.email-btn[_ngcontent-%COMP%] {\n  background: #EA4335;\n  color: white;\n}\n.method-action[_ngcontent-%COMP%]   button.email-btn[_ngcontent-%COMP%]:hover {\n  background: #D14836;\n}\n.method-action[_ngcontent-%COMP%]   button.phone-btn[_ngcontent-%COMP%] {\n  background: #34B7F1;\n  color: white;\n}\n.method-action[_ngcontent-%COMP%]   button.phone-btn[_ngcontent-%COMP%]:hover {\n  background: #0A8ED9;\n}\n.method-action[_ngcontent-%COMP%]   button.help-btn[_ngcontent-%COMP%] {\n  background: #FF9800;\n  color: white;\n}\n.method-action[_ngcontent-%COMP%]   button.help-btn[_ngcontent-%COMP%]:hover {\n  background: #F57C00;\n}\n.method-action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}\n\n\n\n.form-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%] {\n  padding: 30px;\n}\n\n.contact-form[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n}\n@media (max-width: 768px) {\n  .contact-form[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.contact-form[_ngcontent-%COMP%]   .half-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.contact-form[_ngcontent-%COMP%]   .full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.form-actions[_ngcontent-%COMP%] {\n  margin-top: 24px;\n}\n.form-actions[_ngcontent-%COMP%]   .submit-btn[_ngcontent-%COMP%] {\n  padding: 12px 32px;\n  font-weight: 600;\n}\n.form-actions[_ngcontent-%COMP%]   .submit-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}\n\n\n\n.contact-sidebar[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n}\n\n\n\n.whatsapp-widget[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%] {\n  padding: 24px;\n  text-align: center;\n}\n\n.widget-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 16px;\n}\n\n.whatsapp-icon[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  background: rgba(37, 211, 102, 0.1);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.whatsapp-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n  height: 24px;\n  width: 24px;\n  color: #25D366;\n}\n\n.widget-info[_ngcontent-%COMP%] {\n  text-align: left;\n  flex: 1;\n}\n.widget-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  margin: 0 0 4px;\n  color: #333;\n}\n\n.status[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 12px;\n  color: #666;\n}\n.status.online[_ngcontent-%COMP%] {\n  color: #4caf50;\n}\n\n.status-dot[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  background: #4caf50;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_pulse 2s infinite;\n}\n\n@keyframes _ngcontent-%COMP%_pulse {\n  0% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.5;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n.widget-description[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #666;\n  margin: 0 0 20px;\n  line-height: 1.5;\n}\n\n.whatsapp-chat-btn[_ngcontent-%COMP%] {\n  background: #25D366;\n  color: white;\n  font-weight: 600;\n  width: 100%;\n  margin-bottom: 20px;\n}\n.whatsapp-chat-btn[_ngcontent-%COMP%]:hover {\n  background: #128C7E;\n}\n.whatsapp-chat-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}\n\n.widget-features[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.widget-features[_ngcontent-%COMP%]   .feature[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 12px;\n  color: #666;\n}\n.widget-features[_ngcontent-%COMP%]   .feature[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n  height: 14px;\n  width: 14px;\n  color: #25D366;\n}\n\n\n\n.whatsapp-chat-window[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%] {\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  height: 500px;\n}\n\n.chat-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 16px 20px;\n  background: #25D366;\n  color: white;\n}\n\n.chat-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n\n.chat-avatar[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  background: rgba(255, 255, 255, 0.2);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.chat-avatar[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.chat-details[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0 0 2px;\n  font-size: 16px;\n  font-weight: 600;\n}\n.chat-details[_ngcontent-%COMP%]   .status[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.9);\n}\n\n.close-chat[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.chat-messages[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 20px;\n  overflow-y: auto;\n  background: #f0f0f0;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n\n.message[_ngcontent-%COMP%] {\n  display: flex;\n}\n.message.received[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n}\n.message.sent[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n\n.message-content[_ngcontent-%COMP%] {\n  max-width: 70%;\n  padding: 12px 16px;\n  border-radius: 18px;\n  position: relative;\n}\n.received[_ngcontent-%COMP%]   .message-content[_ngcontent-%COMP%] {\n  background: white;\n  border-bottom-left-radius: 4px;\n}\n.sent[_ngcontent-%COMP%]   .message-content[_ngcontent-%COMP%] {\n  background: #dcf8c6;\n  border-bottom-right-radius: 4px;\n}\n.message-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 4px;\n  font-size: 14px;\n  line-height: 1.4;\n}\n\n.message-time[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #999;\n  text-align: right;\n}\n\n.chat-input[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  padding: 16px 20px;\n  background: white;\n  border-top: 1px solid #f0f0f0;\n}\n\n.quick-replies[_ngcontent-%COMP%] {\n  padding: 16px 20px;\n  background: #f8f9fa;\n  border-top: 1px solid #f0f0f0;\n}\n.quick-replies[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 8px;\n  font-size: 12px;\n  color: #666;\n}\n\n.quick-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.quick-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  font-size: 11px;\n  padding: 4px 8px;\n  border-radius: 12px;\n}\n\n\n\n.office-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%] {\n  padding: 24px;\n}\n.office-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  margin: 0 0 16px;\n  color: #333;\n}\n\n.office-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n\n.info-item[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n}\n.info-item[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #0d47a1;\n  margin-top: 2px;\n  flex-shrink: 0;\n}\n\n.info-content[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 14px;\n  color: #333;\n  margin-bottom: 4px;\n}\n.info-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 13px;\n  color: #666;\n  line-height: 1.4;\n}\n\n\n\n.emergency-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%] {\n  padding: 24px;\n  text-align: center;\n}\n\n.emergency-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  margin-bottom: 12px;\n}\n.emergency-header[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #f44336;\n}\n.emergency-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  margin: 0;\n  color: #333;\n}\n\n.emergency-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #666;\n  margin: 0 0 16px;\n  line-height: 1.5;\n}\n\n.emergency-btn[_ngcontent-%COMP%] {\n  background: #f44336;\n  color: white;\n  font-weight: 600;\n  width: 100%;\n}\n.emergency-btn[_ngcontent-%COMP%]:hover {\n  background: #d32f2f;\n}\n.emergency-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}\n\n\n\n.faq-section[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);\n  padding: 60px 20px;\n}\n\n.faq-content[_ngcontent-%COMP%] {\n  max-width: 800px;\n  margin: 0 auto;\n}\n.faq-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 32px;\n  font-weight: 700;\n  margin: 0 0 40px;\n  color: #333;\n  text-align: center;\n}\n@media (max-width: 768px) {\n  .faq-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 28px;\n  }\n}\n\n.faq-grid[_ngcontent-%COMP%]   mat-expansion-panel[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n  border-radius: 8px !important;\n}\n.faq-grid[_ngcontent-%COMP%]   mat-expansion-panel[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.faq-grid[_ngcontent-%COMP%]   mat-panel-title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #333;\n}\n\n\n\n@media (max-width: 768px) {\n  .contact-hero[_ngcontent-%COMP%] {\n    padding: 60px 20px 40px;\n  }\n  .hero-title[_ngcontent-%COMP%] {\n    font-size: 36px;\n  }\n  .hero-subtitle[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n  .contact-stats[_ngcontent-%COMP%] {\n    gap: 16px;\n  }\n  .stat-card[_ngcontent-%COMP%] {\n    min-width: 140px;\n    padding: 16px;\n  }\n  .contact-content[_ngcontent-%COMP%] {\n    padding: 40px 15px;\n  }\n  .content-layout[_ngcontent-%COMP%] {\n    gap: 30px;\n  }\n  .method-card[_ngcontent-%COMP%] {\n    flex-direction: column;\n    text-align: center;\n    gap: 16px;\n  }\n  .method-action[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .method-action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .whatsapp-chat-window[_ngcontent-%COMP%] {\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    z-index: 1000;\n    border-radius: 0;\n  }\n}\n@media (max-width: 480px) {\n  .hero-title[_ngcontent-%COMP%] {\n    font-size: 28px;\n  }\n  .hero-subtitle[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n  .contact-stats[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: center;\n  }\n  .stat-card[_ngcontent-%COMP%] {\n    width: 100%;\n    max-width: 250px;\n  }\n  .form-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtBQUFGOztBQUdBLGlCQUFBO0FBQ0E7RUFDRSw2REFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFBRjs7QUFHQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7QUFBRjtBQUVFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLCtLQUNFO0FBRE47O0FBTUE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBSEY7QUFLRTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQ0FBQTtBQUhKO0FBS0k7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0Esd0NBQUE7QUFITjtBQU1JO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtFQUNBLGdEQUFBO0FBSk47QUFPSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSx5Q0FBQTtBQUxOOztBQVVBO0VBQ0U7SUFBVyx1Q0FBQTtFQU5YO0VBT0E7SUFBTSwyQ0FBQTtFQUpOO0FBQ0Y7QUFNQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBSkY7O0FBT0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFKRjs7QUFPQTtFQUNFLCtCQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtBQUpGO0FBTUU7RUFDRSxZQUFBO0FBSko7O0FBUUE7RUFD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QXVFSTtFQUNFLGdCQUFBO0FBckVOO0FBeUVFO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0FBdkVKOztBQTJFQSxzQkFBQTtBQUNBO0VBQ0U7SUFDRSx1QkFBQTtFQXhFRjtFQTJFQTtJQUNFLGVBQUE7RUF6RUY7RUE0RUE7SUFDRSxlQUFBO0VBMUVGO0VBNkVBO0lBQ0UsU0FBQTtFQTNFRjtFQThFQTtJQUNFLGdCQUFBO0lBQ0EsYUFBQTtFQTVFRjtFQStFQTtJQUNFLGtCQUFBO0VBN0VGO0VBZ0ZBO0lBQ0UsU0FBQTtFQTlFRjtFQWlGQTtJQUNFLHNCQUFBO0lBQ0Esa0JBQUE7SUFDQSxTQUFBO0VBL0VGO0VBa0ZBO0lBQ0UsV0FBQTtFQWhGRjtFQWtGRTtJQUNFLFdBQUE7RUFoRko7RUFvRkE7SUFDRSxlQUFBO0lBQ0EsTUFBQTtJQUNBLE9BQUE7SUFDQSxRQUFBO0lBQ0EsU0FBQTtJQUNBLGFBQUE7SUFDQSxnQkFBQTtFQWxGRjtBQUNGO0FBcUZBO0VBQ0U7SUFDRSxlQUFBO0VBbkZGO0VBc0ZBO0lBQ0UsZUFBQTtFQXBGRjtFQXVGQTtJQUNFLHNCQUFBO0lBQ0EsbUJBQUE7RUFyRkY7RUF3RkE7SUFDRSxXQUFBO0lBQ0EsZ0JBQUE7RUF0RkY7RUF5RkE7SUFDRSwwQkFBQTtFQXZGRjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLy8gY29udGFjdC5jb21wb25lbnQuc2Nzc1xyXG4uY29udGFjdC1jb250YWluZXIge1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG59XHJcblxyXG4vKiBIZXJvIFNlY3Rpb24gKi9cclxuLmNvbnRhY3QtaGVybyB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzA5MmU2YiAwJSwgIzBkNDdhMSAxMDAlKTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogODBweCAyMHB4IDYwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5oZXJvLWJhY2tncm91bmQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICBib3R0b206IDA7XHJcbiAgb3BhY2l0eTogMC4xO1xyXG5cclxuICAmOjpiZWZvcmUge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBiYWNrZ3JvdW5kOlxyXG4gICAgICByYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0IDIwJSA4MCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKSAwJSwgdHJhbnNwYXJlbnQgNTAlKSxcclxuICAgICAgcmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCA4MCUgMjAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpIDAlLCB0cmFuc3BhcmVudCA1MCUpO1xyXG4gIH1cclxufVxyXG5cclxuLmZsb2F0aW5nLXNoYXBlcyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuXHJcbiAgLnNoYXBlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcclxuXHJcbiAgICAmLnNoYXBlLTEge1xyXG4gICAgICB3aWR0aDogMTIwcHg7XHJcbiAgICAgIGhlaWdodDogMTIwcHg7XHJcbiAgICAgIHRvcDogMTAlO1xyXG4gICAgICByaWdodDogMTAlO1xyXG4gICAgICBhbmltYXRpb246IGZsb2F0IDhzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xyXG4gICAgfVxyXG5cclxuICAgICYuc2hhcGUtMiB7XHJcbiAgICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICAgIGJvdHRvbTogMjAlO1xyXG4gICAgICBsZWZ0OiA1JTtcclxuICAgICAgYW5pbWF0aW9uOiBmbG9hdCA2cyBlYXNlLWluLW91dCBpbmZpbml0ZSByZXZlcnNlO1xyXG4gICAgfVxyXG5cclxuICAgICYuc2hhcGUtMyB7XHJcbiAgICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICAgIHRvcDogNDAlO1xyXG4gICAgICByaWdodDogMjAlO1xyXG4gICAgICBhbmltYXRpb246IGZsb2F0IDEwcyBlYXNlLWluLW91dCBpbmZpbml0ZTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZmxvYXQge1xyXG4gIDAlLCAxMDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCkgcm90YXRlKDBkZWcpOyB9XHJcbiAgNTAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMHB4KSByb3RhdGUoMTgwZGVnKTsgfVxyXG59XHJcblxyXG4uaGVyby1jb250ZW50IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgei1pbmRleDogMjtcclxuICBtYXgtd2lkdGg6IDEyMDBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5icmVhZGNydW1iLW5hdiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGdhcDogOHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG4uYnJlYWRjcnVtYi1saW5rIHtcclxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzO1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbn1cclxuXHJcbi5icmVhZGNydW1iLXNlcGFyYXRvciB7XHJcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcclxufVxyXG5cclxuLmJyZWFkY3J1bWItYWN0aXZlIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLmhlcm8tdGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogNDhweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIG1hcmdpbjogMCAwIDIwcHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIGZvbnQtc2l6ZTogMzZweDtcclxuICB9XHJcbn1cclxuXHJcbi5oZXJvLXN1YnRpdGxlIHtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgb3BhY2l0eTogMC45O1xyXG4gIG1hcmdpbjogMCAwIDQwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBtYXgtd2lkdGg6IDYwMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgfVxyXG59XHJcblxyXG4uY29udGFjdC1zdGF0cyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBnYXA6IDMwcHg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIG1hcmdpbi10b3A6IDQwcHg7XHJcblxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgZ2FwOiAyMHB4O1xyXG4gIH1cclxufVxyXG5cclxuLnN0YXQtY2FyZCB7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KTtcclxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICBwYWRkaW5nOiAyNHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDE2cHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xyXG4gIG1pbi13aWR0aDogMTgwcHg7XHJcblxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgbWluLXdpZHRoOiAxNDBweDtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4uc3RhdC1pY29uIHtcclxuICB3aWR0aDogNTBweDtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICBtYXQtaWNvbiB7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICB3aWR0aDogMjRweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbn1cclxuXHJcbi5zdGF0LWNvbnRlbnQge1xyXG4gIGgzIHtcclxuICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBtYXJnaW46IDAgMCA0cHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcblxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHAge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgb3BhY2l0eTogMC45O1xyXG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KTtcclxuICB9XHJcbn1cclxuXHJcbi8qIE1haW4gQ29udGVudCAqL1xyXG4uY29udGFjdC1jb250ZW50IHtcclxuICBtYXgtd2lkdGg6IDEyMDBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBwYWRkaW5nOiA2MHB4IDIwcHg7XHJcbn1cclxuXHJcbi5jb250ZW50LWxheW91dCB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAxZnI7XHJcbiAgZ2FwOiA0MHB4O1xyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogOTY4cHgpIHtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gICAgZ2FwOiAzMHB4O1xyXG4gIH1cclxufVxyXG5cclxuLyogQ29udGFjdCBNZXRob2RzICovXHJcbi5jb250YWN0LW1ldGhvZHMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBnYXA6IDMwcHg7XHJcbn1cclxuXHJcbm1hdC1jYXJkIHtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5jb250YWN0LWNhcmQge1xyXG4gIG1hdC1jYXJkLWNvbnRlbnQge1xyXG4gICAgcGFkZGluZzogMzBweDtcclxuICB9XHJcbn1cclxuXHJcbi5zZWN0aW9uLWRlc2NyaXB0aW9uIHtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgY29sb3I6ICM2NjY7XHJcbiAgbWFyZ2luOiAwIDAgMzBweDtcclxuICBsaW5lLWhlaWdodDogMS41O1xyXG59XHJcblxyXG4ubWV0aG9kLWdyaWQge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ2FwOiAyMHB4O1xyXG59XHJcblxyXG4ubWV0aG9kLWNhcmQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDIwcHg7XHJcbiAgcGFkZGluZzogMjRweDtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjZjBmMGYwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbiAgYmFja2dyb3VuZDogI2ZhZmFmYTtcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBib3JkZXItY29sb3I6ICMwZDQ3YTE7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XHJcbiAgICBib3gtc2hhZG93OiAwIDZweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICB9XHJcblxyXG4gICYud2hhdHNhcHA6aG92ZXIge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjMjVEMzY2O1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgzNywgMjExLCAxMDIsIDAuMDUpO1xyXG4gIH1cclxuXHJcbiAgJi5lbWFpbDpob3ZlciB7XHJcbiAgICBib3JkZXItY29sb3I6ICNFQTQzMzU7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDIzNCwgNjcsIDUzLCAwLjA1KTtcclxuICB9XHJcblxyXG4gICYucGhvbmU6aG92ZXIge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjMzRCN0YxO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSg1MiwgMTgzLCAyNDEsIDAuMDUpO1xyXG4gIH1cclxuXHJcbiAgJi5oZWxwOmhvdmVyIHtcclxuICAgIGJvcmRlci1jb2xvcjogI0ZGOTgwMDtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAxNTIsIDAsIDAuMDUpO1xyXG4gIH1cclxufVxyXG5cclxuLm1ldGhvZC1pY29uIHtcclxuICB3aWR0aDogNjBweDtcclxuICBoZWlnaHQ6IDYwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZmxleC1zaHJpbms6IDA7XHJcblxyXG4gIC53aGF0c2FwcCAmIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMzcsIDIxMSwgMTAyLCAwLjEpO1xyXG4gICAgY29sb3I6ICMyNUQzNjY7XHJcbiAgfVxyXG5cclxuICAuZW1haWwgJiB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDIzNCwgNjcsIDUzLCAwLjEpO1xyXG4gICAgY29sb3I6ICNFQTQzMzU7XHJcbiAgfVxyXG5cclxuICAucGhvbmUgJiB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDUyLCAxODMsIDI0MSwgMC4xKTtcclxuICAgIGNvbG9yOiAjMzRCN0YxO1xyXG4gIH1cclxuXHJcbiAgLmhlbHAgJiB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMTUyLCAwLCAwLjEpO1xyXG4gICAgY29sb3I6ICNGRjk4MDA7XHJcbiAgfVxyXG5cclxuICBtYXQtaWNvbiB7XHJcbiAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICBoZWlnaHQ6IDI4cHg7XHJcbiAgICB3aWR0aDogMjhweDtcclxuICB9XHJcbn1cclxuXHJcbi5tZXRob2QtY29udGVudCB7XHJcbiAgZmxleDogMTtcclxuXHJcbiAgaDMge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIG1hcmdpbjogMCAwIDhweDtcclxuICAgIGNvbG9yOiAjMzMzO1xyXG4gIH1cclxuXHJcbiAgcCB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBjb2xvcjogIzY2NjtcclxuICAgIG1hcmdpbjogMCAwIDEycHg7XHJcbiAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gIH1cclxufVxyXG5cclxuLm1ldGhvZC1mZWF0dXJlcyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGdhcDogNnB4O1xyXG5cclxuICAuZmVhdHVyZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdhcDogNnB4O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgY29sb3I6ICM2NjY7XHJcblxyXG4gICAgbWF0LWljb24ge1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIGhlaWdodDogMTRweDtcclxuICAgICAgd2lkdGg6IDE0cHg7XHJcbiAgICAgIGNvbG9yOiAjNGNhZjUwO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmNvbnRhY3QtaW5mbyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGdhcDogOHB4O1xyXG5cclxuICAuaW5mby1pdGVtIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiA4cHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBjb2xvcjogIzY2NjtcclxuXHJcbiAgICBtYXQtaWNvbiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgaGVpZ2h0OiAxNnB4O1xyXG4gICAgICB3aWR0aDogMTZweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5tZXRob2QtYWN0aW9uIHtcclxuICBmbGV4LXNocmluazogMDtcclxuXHJcbiAgYnV0dG9uIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcblxyXG4gICAgJi53aGF0c2FwcC1idG4ge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjMjVEMzY2O1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcblxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjMTI4QzdFO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJi5lbWFpbC1idG4ge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjRUE0MzM1O1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcblxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjRDE0ODM2O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJi5waG9uZS1idG4ge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjMzRCN0YxO1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcblxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjMEE4RUQ5O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJi5oZWxwLWJ0biB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNGRjk4MDA7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNGNTdDMDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBtYXQtaWNvbiB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLyogQ29udGFjdCBGb3JtICovXHJcbi5mb3JtLWNhcmQge1xyXG4gIG1hdC1jYXJkLWNvbnRlbnQge1xyXG4gICAgcGFkZGluZzogMzBweDtcclxuICB9XHJcbn1cclxuXHJcbi5jb250YWN0LWZvcm0ge1xyXG4gIC5mb3JtLXJvdyB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xyXG4gICAgZ2FwOiAxNnB4O1xyXG5cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5oYWxmLXdpZHRoIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLmZ1bGwtd2lkdGgge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG59XHJcblxyXG4uZm9ybS1hY3Rpb25zIHtcclxuICBtYXJnaW4tdG9wOiAyNHB4O1xyXG5cclxuICAuc3VibWl0LWJ0biB7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDMycHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG5cclxuICAgIG1hdC1pY29uIHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vKiBTaWRlYmFyICovXHJcbi5jb250YWN0LXNpZGViYXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBnYXA6IDI0cHg7XHJcbn1cclxuXHJcbi8qIFdoYXRzQXBwIFdpZGdldCAqL1xyXG4ud2hhdHNhcHAtd2lkZ2V0IHtcclxuICBtYXQtY2FyZC1jb250ZW50IHtcclxuICAgIHBhZGRpbmc6IDI0cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG59XHJcblxyXG4ud2lkZ2V0LWhlYWRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMTJweDtcclxuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG59XHJcblxyXG4ud2hhdHNhcHAtaWNvbiB7XHJcbiAgd2lkdGg6IDUwcHg7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMzcsIDIxMSwgMTAyLCAwLjEpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gIG1hdC1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGhlaWdodDogMjRweDtcclxuICAgIHdpZHRoOiAyNHB4O1xyXG4gICAgY29sb3I6ICMyNUQzNjY7XHJcbiAgfVxyXG59XHJcblxyXG4ud2lkZ2V0LWluZm8ge1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgZmxleDogMTtcclxuXHJcbiAgaDMge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIG1hcmdpbjogMCAwIDRweDtcclxuICAgIGNvbG9yOiAjMzMzO1xyXG4gIH1cclxufVxyXG5cclxuLnN0YXR1cyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogNnB4O1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBjb2xvcjogIzY2NjtcclxuXHJcbiAgJi5vbmxpbmUge1xyXG4gICAgY29sb3I6ICM0Y2FmNTA7XHJcbiAgfVxyXG59XHJcblxyXG4uc3RhdHVzLWRvdCB7XHJcbiAgd2lkdGg6IDhweDtcclxuICBoZWlnaHQ6IDhweDtcclxuICBiYWNrZ3JvdW5kOiAjNGNhZjUwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBhbmltYXRpb246IHB1bHNlIDJzIGluZmluaXRlO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHB1bHNlIHtcclxuICAwJSB7IG9wYWNpdHk6IDE7IH1cclxuICA1MCUgeyBvcGFjaXR5OiAwLjU7IH1cclxuICAxMDAlIHsgb3BhY2l0eTogMTsgfVxyXG59XHJcblxyXG4ud2lkZ2V0LWRlc2NyaXB0aW9uIHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgY29sb3I6ICM2NjY7XHJcbiAgbWFyZ2luOiAwIDAgMjBweDtcclxuICBsaW5lLWhlaWdodDogMS41O1xyXG59XHJcblxyXG4ud2hhdHNhcHAtY2hhdC1idG4ge1xyXG4gIGJhY2tncm91bmQ6ICMyNUQzNjY7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMTI4QzdFO1xyXG4gIH1cclxuXHJcbiAgbWF0LWljb24ge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgfVxyXG59XHJcblxyXG4ud2lkZ2V0LWZlYXR1cmVzIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZ2FwOiA4cHg7XHJcblxyXG4gIC5mZWF0dXJlIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiA4cHg7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBjb2xvcjogIzY2NjtcclxuXHJcbiAgICBtYXQtaWNvbiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgaGVpZ2h0OiAxNHB4O1xyXG4gICAgICB3aWR0aDogMTRweDtcclxuICAgICAgY29sb3I6ICMyNUQzNjY7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vKiBXaGF0c0FwcCBDaGF0IFdpbmRvdyAqL1xyXG4ud2hhdHNhcHAtY2hhdC13aW5kb3cge1xyXG4gIG1hdC1jYXJkLWNvbnRlbnQge1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgaGVpZ2h0OiA1MDBweDtcclxuICB9XHJcbn1cclxuXHJcbi5jaGF0LWhlYWRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAxNnB4IDIwcHg7XHJcbiAgYmFja2dyb3VuZDogIzI1RDM2NjtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5jaGF0LWluZm8ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDEycHg7XHJcbn1cclxuXHJcbi5jaGF0LWF2YXRhciB7XHJcbiAgd2lkdGg6IDQwcHg7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICBtYXQtaWNvbiB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG59XHJcblxyXG4uY2hhdC1kZXRhaWxzIHtcclxuICBoNCB7XHJcbiAgICBtYXJnaW46IDAgMCAycHg7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gIH1cclxuXHJcbiAgLnN0YXR1cyB7XHJcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpO1xyXG4gIH1cclxufVxyXG5cclxuLmNsb3NlLWNoYXQge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmNoYXQtbWVzc2FnZXMge1xyXG4gIGZsZXg6IDE7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gIGJhY2tncm91bmQ6ICNmMGYwZjA7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGdhcDogMTZweDtcclxufVxyXG5cclxuLm1lc3NhZ2Uge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gICYucmVjZWl2ZWQge1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIH1cclxuXHJcbiAgJi5zZW50IHtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgfVxyXG59XHJcblxyXG4ubWVzc2FnZS1jb250ZW50IHtcclxuICBtYXgtd2lkdGg6IDcwJTtcclxuICBwYWRkaW5nOiAxMnB4IDE2cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMThweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gIC5yZWNlaXZlZCAmIHtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNHB4O1xyXG4gIH1cclxuXHJcbiAgLnNlbnQgJiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZGNmOGM2O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDRweDtcclxuICB9XHJcblxyXG4gIHAge1xyXG4gICAgbWFyZ2luOiAwIDAgNHB4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNDtcclxuICB9XHJcbn1cclxuXHJcbi5tZXNzYWdlLXRpbWUge1xyXG4gIGZvbnQtc2l6ZTogMTFweDtcclxuICBjb2xvcjogIzk5OTtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxuLmNoYXQtaW5wdXQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZ2FwOiA4cHg7XHJcbiAgcGFkZGluZzogMTZweCAyMHB4O1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZjBmMGYwO1xyXG59XHJcblxyXG4ucXVpY2stcmVwbGllcyB7XHJcbiAgcGFkZGluZzogMTZweCAyMHB4O1xyXG4gIGJhY2tncm91bmQ6ICNmOGY5ZmE7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNmMGYwZjA7XHJcblxyXG4gIHAge1xyXG4gICAgbWFyZ2luOiAwIDAgOHB4O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgY29sb3I6ICM2NjY7XHJcbiAgfVxyXG59XHJcblxyXG4ucXVpY2stYnV0dG9ucyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgZ2FwOiA4cHg7XHJcblxyXG4gIGJ1dHRvbiB7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICBwYWRkaW5nOiA0cHggOHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICB9XHJcbn1cclxuXHJcbi8qIE9mZmljZSBJbmZvcm1hdGlvbiAqL1xyXG4ub2ZmaWNlLWNhcmQge1xyXG4gIG1hdC1jYXJkLWNvbnRlbnQge1xyXG4gICAgcGFkZGluZzogMjRweDtcclxuICB9XHJcblxyXG4gIGgzIHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBtYXJnaW46IDAgMCAxNnB4O1xyXG4gICAgY29sb3I6ICMzMzM7XHJcbiAgfVxyXG59XHJcblxyXG4ub2ZmaWNlLWluZm8ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBnYXA6IDE2cHg7XHJcbn1cclxuXHJcbi5pbmZvLWl0ZW0ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZ2FwOiAxMnB4O1xyXG5cclxuICBtYXQtaWNvbiB7XHJcbiAgICBjb2xvcjogIzBkNDdhMTtcclxuICAgIG1hcmdpbi10b3A6IDJweDtcclxuICAgIGZsZXgtc2hyaW5rOiAwO1xyXG4gIH1cclxufVxyXG5cclxuLmluZm8tY29udGVudCB7XHJcbiAgc3Ryb25nIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6ICMzMzM7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0cHg7XHJcbiAgfVxyXG5cclxuICBwIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGNvbG9yOiAjNjY2O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNDtcclxuICB9XHJcbn1cclxuXHJcbi8qIEVtZXJnZW5jeSBDYXJkICovXHJcbi5lbWVyZ2VuY3ktY2FyZCB7XHJcbiAgbWF0LWNhcmQtY29udGVudCB7XHJcbiAgICBwYWRkaW5nOiAyNHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxufVxyXG5cclxuLmVtZXJnZW5jeS1oZWFkZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBnYXA6IDhweDtcclxuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xyXG5cclxuICBtYXQtaWNvbiB7XHJcbiAgICBjb2xvcjogI2Y0NDMzNjtcclxuICB9XHJcblxyXG4gIGgzIHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBjb2xvcjogIzMzMztcclxuICB9XHJcbn1cclxuXHJcbi5lbWVyZ2VuY3ktY2FyZCBwIHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgY29sb3I6ICM2NjY7XHJcbiAgbWFyZ2luOiAwIDAgMTZweDtcclxuICBsaW5lLWhlaWdodDogMS41O1xyXG59XHJcblxyXG4uZW1lcmdlbmN5LWJ0biB7XHJcbiAgYmFja2dyb3VuZDogI2Y0NDMzNjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICB3aWR0aDogMTAwJTtcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZDMyZjJmO1xyXG4gIH1cclxuXHJcbiAgbWF0LWljb24ge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgfVxyXG59XHJcblxyXG4vKiBGQVEgU2VjdGlvbiAqL1xyXG4uZmFxLXNlY3Rpb24ge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNmOGZhZmMgMCUsICNlMmU4ZjAgMTAwJSk7XHJcbiAgcGFkZGluZzogNjBweCAyMHB4O1xyXG59XHJcblxyXG4uZmFxLWNvbnRlbnQge1xyXG4gIG1heC13aWR0aDogODAwcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcblxyXG4gIGgyIHtcclxuICAgIGZvbnQtc2l6ZTogMzJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBtYXJnaW46IDAgMCA0MHB4O1xyXG4gICAgY29sb3I6ICMzMzM7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5mYXEtZ3JpZCB7XHJcbiAgbWF0LWV4cGFuc2lvbi1wYW5lbCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4ICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG1hdC1wYW5lbC10aXRsZSB7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgY29sb3I6ICMzMzM7XHJcbiAgfVxyXG59XHJcblxyXG4vKiBSZXNwb25zaXZlIERlc2lnbiAqL1xyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAuY29udGFjdC1oZXJvIHtcclxuICAgIHBhZGRpbmc6IDYwcHggMjBweCA0MHB4O1xyXG4gIH1cclxuXHJcbiAgLmhlcm8tdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAzNnB4O1xyXG4gIH1cclxuXHJcbiAgLmhlcm8tc3VidGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gIH1cclxuXHJcbiAgLmNvbnRhY3Qtc3RhdHMge1xyXG4gICAgZ2FwOiAxNnB4O1xyXG4gIH1cclxuXHJcbiAgLnN0YXQtY2FyZCB7XHJcbiAgICBtaW4td2lkdGg6IDE0MHB4O1xyXG4gICAgcGFkZGluZzogMTZweDtcclxuICB9XHJcblxyXG4gIC5jb250YWN0LWNvbnRlbnQge1xyXG4gICAgcGFkZGluZzogNDBweCAxNXB4O1xyXG4gIH1cclxuXHJcbiAgLmNvbnRlbnQtbGF5b3V0IHtcclxuICAgIGdhcDogMzBweDtcclxuICB9XHJcblxyXG4gIC5tZXRob2QtY2FyZCB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZ2FwOiAxNnB4O1xyXG4gIH1cclxuXHJcbiAgLm1ldGhvZC1hY3Rpb24ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgYnV0dG9uIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAud2hhdHNhcHAtY2hhdC13aW5kb3cge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgei1pbmRleDogMTAwMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcclxuICAuaGVyby10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgfVxyXG5cclxuICAuaGVyby1zdWJ0aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgfVxyXG5cclxuICAuY29udGFjdC1zdGF0cyB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5zdGF0LWNhcmQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IDI1MHB4O1xyXG4gIH1cclxuXHJcbiAgLmZvcm0tcm93IHtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  }));
}
_staticBlock();

/***/ })

}]);
//# sourceMappingURL=src_app_pages_contact_contact_component_ts.js.map