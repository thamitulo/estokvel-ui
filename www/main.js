"use strict";
(self["webpackChunkestokvel_ui"] = self["webpackChunkestokvel_ui"] || []).push([["main"],{

/***/ 92:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var C_Projects_thami_estokvel_ui_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2481);
/* harmony import */ var _services_mobile_platform_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/mobile-platform.service */ 2688);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 5422);
/* harmony import */ var _shared_mobile_nav_mobile_nav_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/mobile-nav/mobile-nav.component */ 9302);
/* harmony import */ var _shared_mobile_header_mobile_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/mobile-header/mobile-header.component */ 8556);
/* harmony import */ var _shared_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/toolbar/toolbar.component */ 7044);
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/footer/footer.component */ 3568);

var _staticBlock;








function AppComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "app-mobile-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "main", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "router-outlet");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "app-mobile-nav");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
}
function AppComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-toolbar");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "main", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "router-outlet");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "app-footer");
  }
}
class AppComponent {
  /** true when running inside a native Android/iOS app */
  get isNative() {
    return this.platformService.isNative;
  }
  constructor(platformService) {
    this.platformService = platformService;
    this.title = 'estokvel-ui';
  }
  ngOnInit() {
    var _this = this;
    return (0,C_Projects_thami_estokvel_ui_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // Initialize native mobile plugins (StatusBar, SplashScreen, back-button, etc.)
      yield _this.platformService.initializeApp();
    })();
  }
  static #_ = _staticBlock = () => (this.ɵfac = function AppComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_mobile_platform_service__WEBPACK_IMPORTED_MODULE_2__.MobilePlatformService));
  }, this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["app-root"]],
    standalone: false,
    decls: 3,
    vars: 2,
    consts: [["webLayout", ""], [4, "ngIf", "ngIfElse"], [1, "native-shell"], [1, "native-content"], [1, "main-content"]],
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, AppComponent_ng_container_0_Template, 6, 0, "ng-container", 1)(1, AppComponent_ng_template_1_Template, 4, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
      }
      if (rf & 2) {
        const webLayout_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isNative)("ngIfElse", webLayout_r1);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterOutlet, _shared_mobile_nav_mobile_nav_component__WEBPACK_IMPORTED_MODULE_5__.MobileNavComponent, _shared_mobile_header_mobile_header_component__WEBPACK_IMPORTED_MODULE_6__.MobileHeaderComponent, _shared_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_7__.ToolbarComponent, _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__.FooterComponent],
    styles: ["@charset \"UTF-8\";\n\n\n.main-content[_ngcontent-%COMP%] {\n  margin-top: 104px;\n  min-height: calc(100vh - 104px);\n  overflow-x: hidden;\n  background: transparent;\n}\n\n@media (max-width: 992px) {\n  .main-content[_ngcontent-%COMP%] {\n    margin-top: 64px;\n    min-height: calc(100vh - 64px);\n  }\n}\n\n\n.native-shell[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100dvh; \n\n  height: 100vh; \n\n  overflow: hidden;\n  background: #f0f5fb;\n}\n\n.native-content[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  overflow-x: hidden;\n  -webkit-overflow-scrolling: touch;\n  overscroll-behavior-y: contain;\n  \n\n  padding-top: calc(56px + env(safe-area-inset-top));\n  padding-top: calc(56px + constant(safe-area-inset-top));\n  \n\n  padding-bottom: calc(64px + env(safe-area-inset-bottom));\n  padding-bottom: calc(64px + constant(safe-area-inset-bottom));\n  \n\n  padding-left: env(safe-area-inset-left);\n  padding-right: env(safe-area-inset-right);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUFoQixpRkFBQTtBQUNBO0VBQ0UsaUJBQUE7RUFDQSwrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7QUFFRjs7QUFDQTtFQUNFO0lBQ0UsZ0JBQUE7SUFDQSw4QkFBQTtFQUVGO0FBQ0Y7QUFDQSxpRkFBQTtBQUNBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQSxFQUFBLDRCQUFBO0VBQ0EsYUFBQSxFQUFBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxPQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlDQUFBO0VBQ0EsOEJBQUE7RUFFQSwrQ0FBQTtFQUNBLGtEQUFBO0VBQ0EsdURBQUE7RUFFQSw0Q0FBQTtFQUNBLHdEQUFBO0VBQ0EsNkRBQUE7RUFFQSx3Q0FBQTtFQUNBLHVDQUFBO0VBQ0EseUNBQUE7QUFGRiIsInNvdXJjZXNDb250ZW50IjpbIi8qIMOiwpTCgMOiwpTCgCBXZWIgbGF5b3V0IMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgCAqL1xyXG4ubWFpbi1jb250ZW50IHtcclxuICBtYXJnaW4tdG9wOiAxMDRweDtcclxuICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTA0cHgpO1xyXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KSB7XHJcbiAgLm1haW4tY29udGVudCB7XHJcbiAgICBtYXJnaW4tdG9wOiA2NHB4O1xyXG4gICAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDY0cHgpO1xyXG4gIH1cclxufVxyXG5cclxuLyogw6LClMKAw6LClMKAIE5hdGl2ZSBtb2JpbGUgc2hlbGwgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAICovXHJcbi5uYXRpdmUtc2hlbGwge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBoZWlnaHQ6IDEwMGR2aDsgICAgICAgICAgLyogZHluYW1pYyB2aWV3cG9ydCBoZWlnaHQgKi9cclxuICBoZWlnaHQ6IDEwMHZoOyAgICAgICAgICAgLyogZmFsbGJhY2sgKi9cclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGJhY2tncm91bmQ6ICNmMGY1ZmI7XHJcbn1cclxuXHJcbi5uYXRpdmUtY29udGVudCB7XHJcbiAgZmxleDogMTtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XHJcbiAgb3ZlcnNjcm9sbC1iZWhhdmlvci15OiBjb250YWluO1xyXG5cclxuICAvKiBQdXNoIGNvbnRlbnQgYmVsb3cgdGhlIGZpeGVkIG1vYmlsZSBoZWFkZXIgKi9cclxuICBwYWRkaW5nLXRvcDogY2FsYyg1NnB4ICsgZW52KHNhZmUtYXJlYS1pbnNldC10b3ApKTtcclxuICBwYWRkaW5nLXRvcDogY2FsYyg1NnB4ICsgY29uc3RhbnQoc2FmZS1hcmVhLWluc2V0LXRvcCkpO1xyXG5cclxuICAvKiBQdXNoIGNvbnRlbnQgYWJvdmUgdGhlIGZpeGVkIGJvdHRvbSBuYXYgKi9cclxuICBwYWRkaW5nLWJvdHRvbTogY2FsYyg2NHB4ICsgZW52KHNhZmUtYXJlYS1pbnNldC1ib3R0b20pKTtcclxuICBwYWRkaW5nLWJvdHRvbTogY2FsYyg2NHB4ICsgY29uc3RhbnQoc2FmZS1hcmVhLWluc2V0LWJvdHRvbSkpO1xyXG5cclxuICAvKiBMZWZ0IC8gcmlnaHQgc2FmZSBhcmVhcyAobGFuZHNjYXBlKSAqL1xyXG4gIHBhZGRpbmctbGVmdDogZW52KHNhZmUtYXJlYS1pbnNldC1sZWZ0KTtcclxuICBwYWRkaW5nLXJpZ2h0OiBlbnYoc2FmZS1hcmVhLWluc2V0LXJpZ2h0KTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  }));
}
_staticBlock();

/***/ }),

/***/ 583:
/*!*********************************************************************************!*\
  !*** ./src/app/components/notifications/notification-bell/notification-bell.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NotificationBellComponent: () => (/* binding */ NotificationBellComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 4487);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 9240);
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../material.module */ 9439);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2481);
/* harmony import */ var _services_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/notifications/notifications.service */ 637);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ 3840);
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/badge */ 6256);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 9885);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/menu */ 1034);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/progress-spinner */ 1134);
var _staticBlock;













function NotificationBellComponent_mat_icon_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " notifications ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matBadge", ctx_r1.unreadCount);
  }
}
function NotificationBellComponent_mat_icon_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "notifications");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function NotificationBellComponent_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function NotificationBellComponent_button_8_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.markAllAsRead());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Mark all as read ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function NotificationBellComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "mat-spinner", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Loading notifications...");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function NotificationBellComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 17)(1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "notifications_off");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "No notifications yet");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function NotificationBellComponent_div_12_a_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " View details ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const notification_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", notification_r5.actionUrl);
  }
}
function NotificationBellComponent_div_12_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function NotificationBellComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function NotificationBellComponent_div_12_Template_div_click_0_listener() {
      const notification_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.markAsRead(notification_r5.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 19)(2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 20)(5, "div", 21)(6, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](12, NotificationBellComponent_div_12_a_12_Template, 2, 1, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, NotificationBellComponent_div_12_div_13_Template, 2, 0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const notification_r5 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("unread", notification_r5.isUnread);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx_r1.getNotificationColor(notification_r5.type));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.getNotificationIcon(notification_r5.type));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](notification_r5.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.formatTime(notification_r5.createdAt));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](notification_r5.message);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", notification_r5.actionUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", notification_r5.isUnread);
  }
}
class NotificationBellComponent {
  constructor(notificationService) {
    this.notificationService = notificationService;
    this.notifications = [];
    this.unreadCount = 0;
    this.isLoading = false;
    this.isMenuOpen = false;
    this.backendUnavailable = false; // true when backend is unreachable
    this.refreshInterval = 30000;
    this.consecutiveFailures = 0;
    this.maxConsecutiveFailures = 3; // pause polling after 3 failures
  }
  ngOnInit() {
    this.loadNotifications();
    this.startPolling();
  }
  ngOnDestroy() {
    if (this.pollSubscription) {
      this.pollSubscription.unsubscribe();
    }
  }
  loadNotifications() {
    this.isLoading = true;
    this.notificationService.getRecentNotifications(5).subscribe({
      next: notifications => {
        this.notifications = notifications;
        this.unreadCount = notifications.filter(n => n.isUnread).length;
        this.isLoading = false;
        this.consecutiveFailures = 0;
        this.backendUnavailable = false;
      },
      error: error => {
        this.isLoading = false;
        this.consecutiveFailures++;
        if (error.status === 0) {
          // Network error (ERR_CONNECTION_REFUSED) — backend is down
          this.backendUnavailable = true;
          if (this.consecutiveFailures <= 1) {
            // Only log once to avoid console spam
            console.warn('Notification service unavailable: backend not reachable at localhost:8080');
          }
        } else if (error.status === 401) {
          // Not authenticated yet — expected during page load before token is ready, suppress noise
        } else {
          console.error('Failed to load notifications:', error);
        }
      }
    });
  }
  startPolling() {
    this.pollSubscription = (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.interval)(this.refreshInterval).subscribe(() => {
      // Pause polling if backend is unreachable (avoid flooding console/network)
      if (this.isMenuOpen) return;
      if (this.consecutiveFailures >= this.maxConsecutiveFailures) {
        // After 3 failures, retry only every 5th interval (~2.5 min) to detect recovery
        if (this.consecutiveFailures % 5 !== 0) {
          this.consecutiveFailures++;
          return;
        }
      }
      this.loadNotifications();
    });
  }
  markAsRead(notificationId) {
    this.notificationService.markAsRead(notificationId).subscribe({
      next: () => {
        const notification = this.notifications.find(n => n.id === notificationId);
        if (notification) {
          notification.isUnread = false;
          this.unreadCount = Math.max(0, this.unreadCount - 1);
        }
      },
      error: error => {
        console.error('Failed to mark notification as read:', error);
      }
    });
  }
  markAllAsRead() {
    this.notificationService.markAllAsRead().subscribe({
      next: () => {
        this.notifications.forEach(n => n.isUnread = false);
        this.unreadCount = 0;
      },
      error: error => {
        console.error('Failed to mark all as read:', error);
      }
    });
  }
  onMenuOpened() {
    this.isMenuOpen = true;
  }
  onMenuClosed() {
    this.isMenuOpen = false;
  }
  getNotificationIcon(type) {
    switch (type) {
      case 'STOKVEL_JOIN_REQUEST':
        return 'person_add';
      case 'STOKVEL_JOIN_APPROVED':
        return 'check_circle';
      case 'STOKVEL_JOIN_REJECTED':
        return 'cancel';
      case 'PAYMENT_RECEIVED':
        return 'payments';
      case 'SYSTEM_ANNOUNCEMENT':
        return 'campaign';
      default:
        return 'notifications';
    }
  }
  getNotificationColor(type) {
    switch (type) {
      case 'STOKVEL_JOIN_REQUEST':
        return 'primary';
      case 'STOKVEL_JOIN_APPROVED':
        return 'success';
      case 'STOKVEL_JOIN_REJECTED':
        return 'warn';
      default:
        return 'default';
    }
  }
  formatTime(dateString) {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);
    if (diffMins < 1) return 'Just now';
    if (diffMins < 60) return `${diffMins}m ago`;
    if (diffHours < 24) return `${diffHours}h ago`;
    if (diffDays < 7) return `${diffDays}d ago`;
    return date.toLocaleDateString();
  }
  static #_ = _staticBlock = () => (this.ɵfac = function NotificationBellComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || NotificationBellComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_6__.NotificationService));
  }, this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: NotificationBellComponent,
    selectors: [["app-notification-bell"]],
    decls: 18,
    vars: 7,
    consts: [["notificationMenu", "matMenu"], ["mat-icon-button", "", 1, "notification-bell", 3, "menuOpened", "menuClosed", "matMenuTriggerFor"], ["matBadgeColor", "warn", "matBadgeSize", "small", 3, "matBadge", 4, "ngIf"], [4, "ngIf"], [1, "notification-menu"], [1, "notification-header"], ["mat-button", "", "color", "primary", 3, "click", 4, "ngIf"], [1, "notification-list"], ["class", "loading-section", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], ["class", "notification-item", 3, "unread", "click", 4, "ngFor", "ngForOf"], [1, "notification-footer"], ["mat-button", "", "routerLink", "/notifications", 1, "view-all-btn"], ["matBadgeColor", "warn", "matBadgeSize", "small", 3, "matBadge"], ["mat-button", "", "color", "primary", 3, "click"], [1, "loading-section"], ["diameter", "30"], [1, "empty-state"], [1, "notification-item", 3, "click"], [1, "notification-icon", 3, "ngClass"], [1, "notification-content"], [1, "notification-title"], [1, "notification-time"], [1, "notification-message"], ["class", "notification-action", 3, "routerLink", 4, "ngIf"], ["class", "notification-status", 4, "ngIf"], [1, "notification-action", 3, "routerLink"], [1, "notification-status"], [1, "unread-dot"]],
    template: function NotificationBellComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("menuOpened", function NotificationBellComponent_Template_button_menuOpened_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx.onMenuOpened());
        })("menuClosed", function NotificationBellComponent_Template_button_menuClosed_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx.onMenuClosed());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, NotificationBellComponent_mat_icon_1_Template, 2, 1, "mat-icon", 2)(2, NotificationBellComponent_mat_icon_2_Template, 2, 0, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "mat-menu", 4, 0)(5, "div", 5)(6, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "Notifications");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, NotificationBellComponent_button_8_Template, 2, 0, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, NotificationBellComponent_div_10_Template, 4, 0, "div", 8)(11, NotificationBellComponent_div_11_Template, 5, 0, "div", 9)(12, NotificationBellComponent_div_12_Template, 14, 9, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 11)(14, "a", 12)(15, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "list");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, " View all notifications ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        const notificationMenu_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matMenuTriggerFor", notificationMenu_r6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.unreadCount > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.unreadCount === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.unreadCount > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.isLoading && ctx.notifications.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.notifications);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink, _material_module__WEBPACK_IMPORTED_MODULE_3__.MaterialModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIcon, _angular_material_badge__WEBPACK_IMPORTED_MODULE_8__.MatBadge, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatIconButton, _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__.MatMenuTrigger, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__.MatProgressSpinner],
    styles: [".notification-bell[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.notification-bell[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n  width: 24px;\n  height: 24px;\n  transition: transform 0.3s ease;\n}\n.notification-bell[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1);\n}\n.notification-bell[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 600;\n  top: -4px;\n  right: -4px;\n}\n\n.notification-menu[_ngcontent-%COMP%] {\n  width: 380px;\n  max-width: 90vw;\n  max-height: 500px;\n}\n.notification-menu[_ngcontent-%COMP%]   .notification-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 16px 24px;\n  border-bottom: 1px solid #e0e0e0;\n}\n.notification-menu[_ngcontent-%COMP%]   .notification-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-weight: 600;\n  font-size: 16px;\n  color: #333;\n}\n.notification-menu[_ngcontent-%COMP%]   .notification-list[_ngcontent-%COMP%] {\n  max-height: 350px;\n  overflow-y: auto;\n}\n.notification-menu[_ngcontent-%COMP%]   .notification-list[_ngcontent-%COMP%]   .loading-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 40px 20px;\n  gap: 16px;\n}\n.notification-menu[_ngcontent-%COMP%]   .notification-list[_ngcontent-%COMP%]   .loading-section[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #666;\n  font-size: 14px;\n}\n.notification-menu[_ngcontent-%COMP%]   .notification-list[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 40px 20px;\n  text-align: center;\n}\n.notification-menu[_ngcontent-%COMP%]   .notification-list[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 48px;\n  height: 48px;\n  width: 48px;\n  color: #bdbdbd;\n  margin-bottom: 16px;\n}\n.notification-menu[_ngcontent-%COMP%]   .notification-list[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #666;\n  margin: 0;\n  font-size: 14px;\n}\n.notification-menu[_ngcontent-%COMP%]   .notification-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  padding: 16px;\n  border-bottom: 1px solid #f5f5f5;\n  cursor: pointer;\n  transition: background 0.2s;\n  position: relative;\n}\n.notification-menu[_ngcontent-%COMP%]   .notification-item[_ngcontent-%COMP%]:hover {\n  background: #f5f5f5;\n}\n.notification-menu[_ngcontent-%COMP%]   .notification-item.unread[_ngcontent-%COMP%] {\n  background: #f0f7ff;\n}\n.notification-menu[_ngcontent-%COMP%]   .notification-item[_ngcontent-%COMP%]   .notification-icon[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-right: 12px;\n  flex-shrink: 0;\n}\n.notification-menu[_ngcontent-%COMP%]   .notification-item[_ngcontent-%COMP%]   .notification-icon.primary[_ngcontent-%COMP%] {\n  background: rgba(13, 71, 161, 0.1);\n  color: #0d47a1;\n}\n.notification-menu[_ngcontent-%COMP%]   .notification-item[_ngcontent-%COMP%]   .notification-icon.success[_ngcontent-%COMP%] {\n  background: rgba(76, 175, 80, 0.1);\n  color: #4caf50;\n}\n.notification-menu[_ngcontent-%COMP%]   .notification-item[_ngcontent-%COMP%]   .notification-icon.warn[_ngcontent-%COMP%] {\n  background: rgba(255, 152, 0, 0.1);\n  color: #ff9800;\n}\n.notification-menu[_ngcontent-%COMP%]   .notification-item[_ngcontent-%COMP%]   .notification-icon.default[_ngcontent-%COMP%] {\n  background: rgba(158, 158, 158, 0.1);\n  color: #9e9e9e;\n}\n.notification-menu[_ngcontent-%COMP%]   .notification-item[_ngcontent-%COMP%]   .notification-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.notification-menu[_ngcontent-%COMP%]   .notification-item[_ngcontent-%COMP%]   .notification-content[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.notification-menu[_ngcontent-%COMP%]   .notification-item[_ngcontent-%COMP%]   .notification-content[_ngcontent-%COMP%]   .notification-title[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 4px;\n}\n.notification-menu[_ngcontent-%COMP%]   .notification-item[_ngcontent-%COMP%]   .notification-content[_ngcontent-%COMP%]   .notification-title[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: #333;\n  flex: 1;\n}\n.notification-menu[_ngcontent-%COMP%]   .notification-item[_ngcontent-%COMP%]   .notification-content[_ngcontent-%COMP%]   .notification-title[_ngcontent-%COMP%]   .notification-time[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #999;\n  white-space: nowrap;\n  margin-left: 8px;\n}\n.notification-menu[_ngcontent-%COMP%]   .notification-item[_ngcontent-%COMP%]   .notification-content[_ngcontent-%COMP%]   .notification-message[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #666;\n  margin: 0 0 8px 0;\n  line-height: 1.4;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.notification-menu[_ngcontent-%COMP%]   .notification-item[_ngcontent-%COMP%]   .notification-content[_ngcontent-%COMP%]   .notification-action[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #0d47a1;\n  text-decoration: none;\n  font-weight: 500;\n}\n.notification-menu[_ngcontent-%COMP%]   .notification-item[_ngcontent-%COMP%]   .notification-content[_ngcontent-%COMP%]   .notification-action[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.notification-menu[_ngcontent-%COMP%]   .notification-item[_ngcontent-%COMP%]   .notification-status[_ngcontent-%COMP%]   .unread-dot[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  background: #0d47a1;\n  border-radius: 50%;\n  margin-left: 8px;\n}\n.notification-menu[_ngcontent-%COMP%]   .notification-footer[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  border-top: 1px solid #e0e0e0;\n  text-align: center;\n}\n.notification-menu[_ngcontent-%COMP%]   .notification-footer[_ngcontent-%COMP%]   .view-all-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  color: #0d47a1;\n}\n.notification-menu[_ngcontent-%COMP%]   .notification-footer[_ngcontent-%COMP%]   .view-all-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  margin-right: 8px;\n  font-size: 18px;\n}\n.notification-menu[_ngcontent-%COMP%]   .notification-footer[_ngcontent-%COMP%]   .view-all-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(13, 71, 161, 0.04);\n}\n\n\n\n@media (max-width: 480px) {\n  .notification-menu[_ngcontent-%COMP%] {\n    width: 320px;\n    max-width: 95vw;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9ub3RpZmljYXRpb25zL25vdGlmaWNhdGlvbi1iZWxsL25vdGlmaWNhdGlvbi1iZWxsLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBQUY7QUFFRTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLCtCQUFBO0FBQUo7QUFFSTtFQUNFLHFCQUFBO0FBQU47QUFJRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FBRko7O0FBTUE7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBSEY7QUFLRTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQ0FBQTtBQUhKO0FBS0k7RUFDRSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQUhOO0FBT0U7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0FBTEo7QUFPSTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0FBTE47QUFPTTtFQUNFLFdBQUE7RUFDQSxlQUFBO0FBTFI7QUFTSTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQVBOO0FBU007RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUFQUjtBQVVNO0VBQ0UsV0FBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0FBUlI7QUFhRTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxnQ0FBQTtFQUNBLGVBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0FBWEo7QUFhSTtFQUNFLG1CQUFBO0FBWE47QUFjSTtFQUNFLG1CQUFBO0FBWk47QUFlSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQWJOO0FBZU07RUFDRSxrQ0FBQTtFQUNBLGNBQUE7QUFiUjtBQWdCTTtFQUNFLGtDQUFBO0VBQ0EsY0FBQTtBQWRSO0FBaUJNO0VBQ0Usa0NBQUE7RUFDQSxjQUFBO0FBZlI7QUFrQk07RUFDRSxvQ0FBQTtFQUNBLGNBQUE7QUFoQlI7QUFtQk07RUFDRSxlQUFBO0FBakJSO0FBcUJJO0VBQ0UsT0FBQTtFQUNBLFlBQUE7QUFuQk47QUFxQk07RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0FBbkJSO0FBcUJRO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLE9BQUE7QUFuQlY7QUFzQlE7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFwQlY7QUF3Qk07RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQkFBQTtBQXRCUjtBQXlCTTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQXZCUjtBQXlCUTtFQUNFLDBCQUFBO0FBdkJWO0FBNkJNO0VBQ0UsVUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUEzQlI7QUFnQ0U7RUFDRSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0Esa0JBQUE7QUE5Qko7QUFnQ0k7RUFDRSxXQUFBO0VBQ0EsY0FBQTtBQTlCTjtBQWdDTTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtBQTlCUjtBQWlDTTtFQUNFLG1DQUFBO0FBL0JSOztBQXFDQSxtREFBQTtBQUNBO0VBQ0U7SUFDRSxZQUFBO0lBQ0EsZUFBQTtFQWxDRjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLy8gbm90aWZpY2F0aW9uLWJlbGwuY29tcG9uZW50LnNjc3NcclxuLm5vdGlmaWNhdGlvbi1iZWxsIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICAubWF0LWljb24ge1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgd2lkdGg6IDI0cHg7XHJcbiAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlO1xyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAubWF0LWJhZGdlLWNvbnRlbnQge1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIHRvcDogLTRweDtcclxuICAgIHJpZ2h0OiAtNHB4O1xyXG4gIH1cclxufVxyXG5cclxuLm5vdGlmaWNhdGlvbi1tZW51IHtcclxuICB3aWR0aDogMzgwcHg7XHJcbiAgbWF4LXdpZHRoOiA5MHZ3O1xyXG4gIG1heC1oZWlnaHQ6IDUwMHB4O1xyXG5cclxuICAubm90aWZpY2F0aW9uLWhlYWRlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDE2cHggMjRweDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTBlMGUwO1xyXG5cclxuICAgIGgzIHtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLm5vdGlmaWNhdGlvbi1saXN0IHtcclxuICAgIG1heC1oZWlnaHQ6IDM1MHB4O1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxuXHJcbiAgICAubG9hZGluZy1zZWN0aW9uIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgcGFkZGluZzogNDBweCAyMHB4O1xyXG4gICAgICBnYXA6IDE2cHg7XHJcblxyXG4gICAgICBzcGFuIHtcclxuICAgICAgICBjb2xvcjogIzY2NjtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuZW1wdHktc3RhdGUge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBwYWRkaW5nOiA0MHB4IDIwcHg7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICAgIG1hdC1pY29uIHtcclxuICAgICAgICBmb250LXNpemU6IDQ4cHg7XHJcbiAgICAgICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgICAgIHdpZHRoOiA0OHB4O1xyXG4gICAgICAgIGNvbG9yOiAjYmRiZGJkO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHAge1xyXG4gICAgICAgIGNvbG9yOiAjNjY2O1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5ub3RpZmljYXRpb24taXRlbSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICBwYWRkaW5nOiAxNnB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmNWY1ZjU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMnM7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNmNWY1ZjU7XHJcbiAgICB9XHJcblxyXG4gICAgJi51bnJlYWQge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjZjBmN2ZmO1xyXG4gICAgfVxyXG5cclxuICAgIC5ub3RpZmljYXRpb24taWNvbiB7XHJcbiAgICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMTJweDtcclxuICAgICAgZmxleC1zaHJpbms6IDA7XHJcblxyXG4gICAgICAmLnByaW1hcnkge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMTMsIDcxLCAxNjEsIDAuMSk7XHJcbiAgICAgICAgY29sb3I6ICMwZDQ3YTE7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYuc3VjY2VzcyB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSg3NiwgMTc1LCA4MCwgMC4xKTtcclxuICAgICAgICBjb2xvcjogIzRjYWY1MDtcclxuICAgICAgfVxyXG5cclxuICAgICAgJi53YXJuIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMTUyLCAwLCAwLjEpO1xyXG4gICAgICAgIGNvbG9yOiAjZmY5ODAwO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmLmRlZmF1bHQge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMTU4LCAxNTgsIDE1OCwgMC4xKTtcclxuICAgICAgICBjb2xvcjogIzllOWU5ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgbWF0LWljb24ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5ub3RpZmljYXRpb24tY29udGVudCB7XHJcbiAgICAgIGZsZXg6IDE7XHJcbiAgICAgIG1pbi13aWR0aDogMDtcclxuXHJcbiAgICAgIC5ub3RpZmljYXRpb24tdGl0bGUge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcclxuXHJcbiAgICAgICAgc3Ryb25nIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICBjb2xvcjogIzMzMztcclxuICAgICAgICAgIGZsZXg6IDE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubm90aWZpY2F0aW9uLXRpbWUge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgICAgICAgY29sb3I6ICM5OTk7XHJcbiAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5ub3RpZmljYXRpb24tbWVzc2FnZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgIGNvbG9yOiAjNjY2O1xyXG4gICAgICAgIG1hcmdpbjogMCAwIDhweCAwO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjQ7XHJcbiAgICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICAgICAgLXdlYmtpdC1saW5lLWNsYW1wOiAyO1xyXG4gICAgICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgfVxyXG5cclxuICAgICAgLm5vdGlmaWNhdGlvbi1hY3Rpb24ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBjb2xvcjogIzBkNDdhMTtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAubm90aWZpY2F0aW9uLXN0YXR1cyB7XHJcbiAgICAgIC51bnJlYWQtZG90IHtcclxuICAgICAgICB3aWR0aDogOHB4O1xyXG4gICAgICAgIGhlaWdodDogOHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICMwZDQ3YTE7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5ub3RpZmljYXRpb24tZm9vdGVyIHtcclxuICAgIHBhZGRpbmc6IDEycHggMTZweDtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZTBlMGUwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgIC52aWV3LWFsbC1idG4ge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgY29sb3I6ICMwZDQ3YTE7XHJcblxyXG4gICAgICBtYXQtaWNvbiB7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDEzLCA3MSwgMTYxLCAwLjA0KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLyogTW9iaWxlIHJlc3BvbnNpdmUgc3R5bGVzIGZvciBub3RpZmljYXRpb24gbWVudSAqL1xyXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcclxuICAubm90aWZpY2F0aW9uLW1lbnUge1xyXG4gICAgd2lkdGg6IDMyMHB4O1xyXG4gICAgbWF4LXdpZHRoOiA5NXZ3O1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  }));
}
_staticBlock();

/***/ }),

/***/ 635:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ 2190);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 4114);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ 92);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 3855);
/* harmony import */ var _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @auth0/auth0-angular */ 7989);
/* harmony import */ var _auth_interceptor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth.interceptor */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./environments/environment */ 6052);
/* harmony import */ var _shared_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/toolbar/toolbar.component */ 7044);
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./material.module */ 9439);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3835);
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/footer/footer.component */ 3568);
/* harmony import */ var _shared_faq_faq_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/faq/faq.component */ 4672);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngrx/store */ 1383);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngrx/effects */ 347);
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngrx/store-devtools */ 1925);
/* harmony import */ var _store_auth_auth_reducer__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./store/auth/auth.reducer */ 3075);
/* harmony import */ var _store_auth_auth_effects__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./store/auth/auth.effects */ 2361);
/* harmony import */ var _components_notifications_notification_bell_notification_bell__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/notifications/notification-bell/notification-bell */ 583);
/* harmony import */ var _shared_mobile_nav_mobile_nav_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./shared/mobile-nav/mobile-nav.component */ 9302);
/* harmony import */ var _shared_mobile_header_mobile_header_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./shared/mobile-header/mobile-header.component */ 8556);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/core */ 2481);
var _staticBlock;


























class AppModule {
  static #_ = _staticBlock = () => (this.ɵfac = function AppModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || AppModule)();
  }, this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdefineNgModule"]({
    type: AppModule,
    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent]
  }), this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdefineInjector"]({
    providers: [{
      provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HTTP_INTERCEPTORS,
      useClass: _auth_interceptor__WEBPACK_IMPORTED_MODULE_5__.AuthHttpInterceptor,
      multi: true
    }, (0,_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.provideHttpClient)((0,_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.withInterceptorsFromDi)())],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__.BrowserModule, _angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule, _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_4__.AuthModule.forRoot({
      domain: _environments_environment__WEBPACK_IMPORTED_MODULE_6__.environment.auth0.domain,
      clientId: _environments_environment__WEBPACK_IMPORTED_MODULE_6__.environment.auth0.clientId,
      authorizationParams: {
        // Dynamically resolve the redirect URI so it works for:
        //   - Web:     http://localhost:4200
        //   - Android: http://localhost  (Capacitor WebView)
        //   - iOS:     capacitor://localhost
        redirect_uri: window.location.origin,
        audience: _environments_environment__WEBPACK_IMPORTED_MODULE_6__.environment.auth0.audience
      },
      // Use refresh tokens + localStorage for native mobile persistence
      useRefreshTokens: true,
      cacheLocation: 'localstorage',
      httpInterceptor: {
        allowedList: [{
          uri: `${_environments_environment__WEBPACK_IMPORTED_MODULE_6__.environment.apiUrl}/*`,
          tokenOptions: {
            authorizationParams: {
              audience: _environments_environment__WEBPACK_IMPORTED_MODULE_6__.environment.auth0.audience
            }
          }
        }]
      }
    }), _material_module__WEBPACK_IMPORTED_MODULE_8__.MaterialModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__.BrowserAnimationsModule,
    // NgRx store setup
    _ngrx_store__WEBPACK_IMPORTED_MODULE_13__.StoreModule.forRoot({
      auth: _store_auth_auth_reducer__WEBPACK_IMPORTED_MODULE_16__.authReducer
    }), _ngrx_effects__WEBPACK_IMPORTED_MODULE_14__.EffectsModule.forRoot([_store_auth_auth_effects__WEBPACK_IMPORTED_MODULE_17__.AuthEffects]), _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_15__.StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: _environments_environment__WEBPACK_IMPORTED_MODULE_6__.environment.production
    }),
    // Standalone components
    _components_notifications_notification_bell_notification_bell__WEBPACK_IMPORTED_MODULE_18__.NotificationBellComponent, _shared_mobile_nav_mobile_nav_component__WEBPACK_IMPORTED_MODULE_19__.MobileNavComponent, _shared_mobile_header_mobile_header_component__WEBPACK_IMPORTED_MODULE_20__.MobileHeaderComponent]
  }));
}
_staticBlock();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent, _shared_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_7__.ToolbarComponent, _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__.FooterComponent, _shared_faq_faq_component__WEBPACK_IMPORTED_MODULE_11__.FaqComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__.BrowserModule, _angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule, _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_4__.AuthModule, _material_module__WEBPACK_IMPORTED_MODULE_8__.MaterialModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__.BrowserAnimationsModule, _ngrx_store__WEBPACK_IMPORTED_MODULE_13__.StoreRootModule, _ngrx_effects__WEBPACK_IMPORTED_MODULE_14__.EffectsRootModule, _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_15__.StoreDevtoolsModule,
    // Standalone components
    _components_notifications_notification_bell_notification_bell__WEBPACK_IMPORTED_MODULE_18__.NotificationBellComponent, _shared_mobile_nav_mobile_nav_component__WEBPACK_IMPORTED_MODULE_19__.MobileNavComponent, _shared_mobile_header_mobile_header_component__WEBPACK_IMPORTED_MODULE_20__.MobileHeaderComponent]
  });
})();

/***/ }),

/***/ 637:
/*!*****************************************************************!*\
  !*** ./src/app/services/notifications/notifications.service.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NotificationService: () => (/* binding */ NotificationService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 3855);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 271);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ 6052);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4205);
var _staticBlock;





class NotificationService {
  constructor(http) {
    this.http = http;
    this.apiUrl = `${_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiUrl}notifications`;
  }
  getRecentNotifications(limit = 10) {
    const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams().set('limit', limit.toString());
    return this.http.get(`${this.apiUrl}/recent`, {
      params
    });
  }
  getAllNotifications(page = 0, size = 20) {
    const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams().set('page', page.toString()).set('size', size.toString());
    return this.http.get(`${this.apiUrl}`, {
      params
    });
  }
  getUnreadCount() {
    return this.http.get(`${this.apiUrl}/unread-count`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(dto => dto.unreadCount ?? 0));
  }
  getUnreadCountFull() {
    return this.http.get(`${this.apiUrl}/unread-count`);
  }
  getPendingJoinRequests() {
    return this.http.get(`${this.apiUrl}/join-requests/pending`);
  }
  markAsRead(notificationId) {
    return this.http.patch(`${this.apiUrl}/${notificationId}/read`, {});
  }
  markAllAsRead() {
    return this.http.patch(`${this.apiUrl}/read-all`, {});
  }
  sendJoinRequestResponse(notificationId, response) {
    return this.http.post(`${this.apiUrl}/${notificationId}/response`, response);
  }
  deleteNotification(notificationId) {
    return this.http.delete(`${this.apiUrl}/${notificationId}`);
  }
  static #_ = _staticBlock = () => (this.ɵfac = function NotificationService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || NotificationService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient));
  }, this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
    token: NotificationService,
    factory: NotificationService.ɵfac,
    providedIn: 'root'
  }));
}
_staticBlock();

/***/ }),

/***/ 869:
/*!*************************************************!*\
  !*** ./src/app/services/cache/cache.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CacheService: () => (/* binding */ CacheService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 4876);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 6301);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4205);
var _staticBlock;



class CacheService {
  constructor() {
    this.cache = new Map();
    this.DEFAULT_TTL = 59 * 60 * 1000; // 59 minutes default
  }
  get(key) {
    const item = this.cache.get(key);
    if (!item) {
      return null;
    }
    // Check if cache has expired
    if (item.ttl && Date.now() - item.timestamp > item.ttl) {
      this.cache.delete(key);
      return null;
    }
    return item.data;
  }
  set(key, data, ttl) {
    const cacheItem = {
      data: data.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.shareReplay)(1)),
      timestamp: Date.now(),
      ttl: ttl || this.DEFAULT_TTL
    };
    this.cache.set(key, cacheItem);
    // Auto-cleanup when TTL expires
    if (cacheItem.ttl) {
      (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.timer)(cacheItem.ttl).subscribe(() => {
        this.cache.delete(key);
      });
    }
  }
  delete(key) {
    this.cache.delete(key);
  }
  clear() {
    this.cache.clear();
  }
  has(key) {
    const item = this.cache.get(key);
    if (!item) return false;
    if (item.ttl && Date.now() - item.timestamp > item.ttl) {
      this.cache.delete(key);
      return false;
    }
    return true;
  }
  static #_ = _staticBlock = () => (this.ɵfac = function CacheService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || CacheService)();
  }, this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: CacheService,
    factory: CacheService.ɵfac,
    providedIn: 'root'
  }));
}
_staticBlock();

/***/ }),

/***/ 1690:
/*!******************************************!*\
  !*** ./src/app/store/auth/auth.model.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initialAuthState: () => (/* binding */ initialAuthState)
/* harmony export */ });
const initialAuthState = {
  user: null,
  token: null,
  isLoggedIn: false
};

/***/ }),

/***/ 2361:
/*!********************************************!*\
  !*** ./src/app/store/auth/auth.effects.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthEffects: () => (/* binding */ AuthEffects)
/* harmony export */ });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/effects */ 347);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 8764);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 9452);
/* harmony import */ var _auth_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.actions */ 4772);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4205);
var _staticBlock;






class AuthEffects {
  constructor(actions$) {
    this.actions$ = actions$;
    /**
     * Persist user and token to localStorage whenever loginSuccess or logout occurs
     * This effect does NOT dispatch any new actions
     */
    this.persistAuth$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.ofType)(_auth_actions__WEBPACK_IMPORTED_MODULE_3__.loginSuccess, _auth_actions__WEBPACK_IMPORTED_MODULE_3__.logout), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.tap)(action => {
      if (action.type === '[Auth] Login Success') {
        localStorage.setItem('user', JSON.stringify(action.user));
        localStorage.setItem('token', action.token);
      } else {
        localStorage.removeItem('user');
        localStorage.removeItem('token');
      }
    })), {
      dispatch: false
    });
    /**
     * Restore auth state from localStorage when the app starts
     * This effect dispatches the restoreAuth action
     */
    this.restoreAuth$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.createEffect)(() => {
      const user = localStorage.getItem('user');
      const token = localStorage.getItem('token');
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(_auth_actions__WEBPACK_IMPORTED_MODULE_3__.restoreAuth({
        user: user ? JSON.parse(user) : null,
        token: token || null
      }));
    });
  }
  static #_ = _staticBlock = () => (this.ɵfac = function AuthEffects_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || AuthEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.Actions));
  }, this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
    token: AuthEffects,
    factory: AuthEffects.ɵfac
  }));
}
_staticBlock();

/***/ }),

/***/ 2688:
/*!*****************************************************!*\
  !*** ./src/app/services/mobile-platform.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MobilePlatformService: () => (/* binding */ MobilePlatformService)
/* harmony export */ });
/* harmony import */ var C_Projects_thami_estokvel_ui_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @capacitor/core */ 4070);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4205);

var _staticBlock;


/**
 * Service for detecting the current platform (native iOS/Android vs web)
 * and providing access to native Capacitor plugins via the bridge.
 */
class MobilePlatformService {
  constructor() {
    /** true when running inside a native Android or iOS app */
    this.isNative = _capacitor_core__WEBPACK_IMPORTED_MODULE_1__.Capacitor.isNativePlatform();
    /** 'ios' | 'android' | 'web' */
    this.platform = _capacitor_core__WEBPACK_IMPORTED_MODULE_1__.Capacitor.getPlatform();
    this.isIos = this.platform === 'ios';
    this.isAndroid = this.platform === 'android';
    this.isWeb = this.platform === 'web';
  }
  /**
   * Direct access to the Capacitor native bridge plugins.
   * These are auto-registered by the native runtime when running on device;
   * the npm packages (@capacitor/status-bar etc.) add TypeScript typings only.
   */
  get nativePlugins() {
    return window?.Capacitor?.Plugins ?? {};
  }
  initializeApp() {
    var _this = this;
    return (0,C_Projects_thami_estokvel_ui_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this.isNative) return;
      yield _this.initStatusBar();
      yield _this.initSplashScreen();
      yield _this.setupKeyboard();
      yield _this.setupBackButton();
    })();
  }
  initStatusBar() {
    var _this2 = this;
    return (0,C_Projects_thami_estokvel_ui_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const {
          StatusBar,
          Style
        } = _this2.nativePlugins;
        if (!StatusBar) return;
        yield StatusBar.setStyle({
          style: 'Dark'
        });
        if (_this2.isAndroid) {
          yield StatusBar.setBackgroundColor({
            color: '#061d4a'
          });
          yield StatusBar.setOverlaysWebView({
            overlay: false
          });
        }
      } catch (e) {
        console.debug('[MobilePlatform] StatusBar plugin not available:', e);
      }
    })();
  }
  initSplashScreen() {
    var _this3 = this;
    return (0,C_Projects_thami_estokvel_ui_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const {
          SplashScreen
        } = _this3.nativePlugins;
        if (!SplashScreen) return;
        yield SplashScreen.hide({
          fadeOutDuration: 300
        });
      } catch (e) {
        console.debug('[MobilePlatform] SplashScreen plugin not available:', e);
      }
    })();
  }
  setupKeyboard() {
    var _this4 = this;
    return (0,C_Projects_thami_estokvel_ui_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const {
          Keyboard
        } = _this4.nativePlugins;
        if (!Keyboard) return;
        yield Keyboard.setAccessoryBarVisible({
          isVisible: true
        });
      } catch (e) {
        console.debug('[MobilePlatform] Keyboard plugin not available:', e);
      }
    })();
  }
  setupBackButton() {
    var _this5 = this;
    return (0,C_Projects_thami_estokvel_ui_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const {
          App
        } = _this5.nativePlugins;
        if (!App) return;
        App.addListener('backButton', ({
          canGoBack
        }) => {
          if (!canGoBack) {
            App.exitApp();
          } else {
            window.history.back();
          }
        });
      } catch (e) {
        console.debug('[MobilePlatform] App plugin not available:', e);
      }
    })();
  }
  triggerHaptic() {
    var _this6 = this;
    return (0,C_Projects_thami_estokvel_ui_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (type = 'light') {
      if (!_this6.isNative) return;
      try {
        const {
          Haptics,
          ImpactStyle
        } = _this6.nativePlugins;
        if (!Haptics) return;
        yield Haptics.impact({
          style: type
        });
      } catch (e) {/* graceful */}
    }).apply(this, arguments);
  }
  static #_ = _staticBlock = () => (this.ɵfac = function MobilePlatformService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || MobilePlatformService)();
  }, this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: MobilePlatformService,
    factory: MobilePlatformService.ɵfac,
    providedIn: 'root'
  }));
}
_staticBlock();

/***/ }),

/***/ 2915:
/*!*******************************************************!*\
  !*** ./src/app/services/user/user-service.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserService: () => (/* binding */ UserService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 5797);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 9452);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 1318);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 1567);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 6647);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 4334);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 8764);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../environments/environment */ 6052);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @auth0/auth0-angular */ 7989);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ 3855);
var _staticBlock;






class UserService {
  constructor(auth, http) {
    this.auth = auth;
    this.http = http;
    this._userSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(null);
    this.user$ = this._userSubject.asObservable();
    this.userName$ = this.user$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(user => user?.name || user?.email || null));
    // Subscribe to Auth0 user$ and update local BehaviorSubject
    this.auth.user$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.tap)(auth0User => {
      if (auth0User) {
        const appUser = {
          id: auth0User.sub,
          name: auth0User.name,
          email: auth0User.email,
          picture: auth0User.picture
        };
        this._userSubject.next(appUser);
      } else {
        this._userSubject.next(null);
      }
    })).subscribe();
    // Claim any pending email-based invitations once authenticated
    this.auth.isAuthenticated$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(isAuth => isAuth), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(() => this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_8__.environment.apiUrl}stokvel-members/claim-invitations`, {}).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(null))))).subscribe(result => {
      if (result && result.claimed > 0) {
        console.info('Claimed', result.claimed, 'pending stokvel invitation(s)');
      }
    });
  }
  setUser(user) {
    this._userSubject.next(user);
  }
  static #_ = _staticBlock = () => (this.ɵfac = function UserService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_10__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClient));
  }, this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjectable"]({
    token: UserService,
    factory: UserService.ɵfac,
    providedIn: 'root'
  }));
}
_staticBlock();

/***/ }),

/***/ 3075:
/*!********************************************!*\
  !*** ./src/app/store/auth/auth.reducer.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   authReducer: () => (/* binding */ authReducer)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 1383);
/* harmony import */ var _auth_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.model */ 1690);
/* harmony import */ var _auth_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.actions */ 4772);



const authReducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createReducer)(_auth_model__WEBPACK_IMPORTED_MODULE_1__.initialAuthState, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_auth_actions__WEBPACK_IMPORTED_MODULE_2__.loginSuccess, (state, {
  user,
  token
}) => ({
  ...state,
  user,
  token,
  isLoggedIn: true
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_auth_actions__WEBPACK_IMPORTED_MODULE_2__.logout, state => ({
  ...state,
  user: null,
  token: null,
  isLoggedIn: false
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_auth_actions__WEBPACK_IMPORTED_MODULE_2__.restoreAuth, (state, {
  user,
  token
}) => ({
  ...state,
  user,
  token,
  isLoggedIn: !!user
})));

/***/ }),

/***/ 3568:
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FooterComponent: () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2481);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 4487);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ 3840);
var _staticBlock;



class FooterComponent {
  constructor() {
    this.year = new Date().getFullYear();
    this.currentYear = new Date().getFullYear();
    this.socialLinks = {};
    this.contactInfo = {};
    this.appLinks = {
      playStore: 'https://play.google.com/store/apps/details?id=co.za.estokvel',
      appStore: 'https://apps.apple.com/za/app/estokvel/id123456789'
    };
  }
  ngOnInit() {
    this.socialLinks = this.getSocialLinks();
    this.contactInfo = this.getContactInfo();
  }
  // Contact Information
  getContactInfo() {
    return {
      supportEmail: 'support@estokvel.co.za',
      generalEmail: 'info@estokvel.co.za',
      phone: '+27 788 778 174',
      emergencyPhone: '+27 788 778 174',
      address: '11 Van Der Kloof Street, Amarosa, 1724, South Africa',
      whatsapp: '+27 788 778 174',
      businessHours: {
        weekdays: '8:00 AM - 6:00 PM',
        saturday: '9:00 AM - 1:00 PM',
        sunday: 'Closed'
      }
    };
  }
  getSocialLinks() {
    return {
      facebook: 'https://facebook.com/estokvel',
      twitter: 'https://twitter.com/estokvel',
      instagram: 'https://instagram.com/estokvel',
      linkedin: 'https://linkedin.com/company/estokvel',
      youtube: 'https://youtube.com/estokvel'
    };
  }
  static #_ = _staticBlock = () => (this.ɵfac = function FooterComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || FooterComponent)();
  }, this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: FooterComponent,
    selectors: [["app-footer"]],
    standalone: false,
    decls: 143,
    vars: 11,
    consts: [[1, "footer"], [1, "footer-content"], [1, "footer-column"], ["routerLink", "/about-us", "routerLinkActive", "active"], ["routerLink", "/careers", "routerLinkActive", "active"], ["routerLink", "/press", "routerLinkActive", "active"], ["routerLink", "/blog", "routerLinkActive", "active"], ["routerLink", "/contact", "routerLinkActive", "active"], ["routerLink", "/help-center", "routerLinkActive", "active"], ["routerLink", "/security", "routerLinkActive", "active"], ["routerLink", "/privacy-policy", "routerLinkActive", "active"], ["routerLink", "/terms", "routerLinkActive", "active"], ["routerLink", "/stokvel-basics", "routerLinkActive", "active"], ["routerLink", "/tutorials", "routerLinkActive", "active"], ["routerLink", "/glossary", "routerLinkActive", "active"], ["routerLink", "/faq", "routerLinkActive", "active"], ["routerLink", "/resources", "routerLinkActive", "active"], ["routerLink", "/regulatory", "routerLinkActive", "active"], ["routerLink", "/compliance", "routerLinkActive", "active"], ["routerLink", "/popia", "routerLinkActive", "active"], ["routerLink", "/fsca", "routerLinkActive", "active"], ["routerLink", "/disclaimer", "routerLinkActive", "active"], [1, "footer-column", "connect-column"], [1, "social-links"], ["target", "_blank", "rel", "noopener noreferrer", "aria-label", "Facebook", 1, "social-link", 3, "href"], ["target", "_blank", "rel", "noopener noreferrer", "aria-label", "Twitter", 1, "social-link", 3, "href"], ["target", "_blank", "rel", "noopener noreferrer", "aria-label", "Instagram", 1, "social-link", 3, "href"], ["target", "_blank", "rel", "noopener noreferrer", "aria-label", "LinkedIn", 1, "social-link", 3, "href"], ["target", "_blank", "rel", "noopener noreferrer", "aria-label", "YouTube", 1, "social-link", 3, "href"], [1, "contact-info"], [1, "contact-item"], [1, "contact-icon"], [1, "contact-text"], [1, "app-download"], [1, "download-title"], [1, "download-buttons"], ["target", "_blank", "rel", "noopener noreferrer", 1, "download-btn", "play-store", 3, "href"], [1, "store-icon"], [1, "store-text"], [1, "get-text"], [1, "store-name"], ["target", "_blank", "rel", "noopener noreferrer", 1, "download-btn", "app-store", 3, "href"], [1, "footer-bottom"], [1, "compliance-badges"], [1, "compliance-badge"]],
    template: function FooterComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0)(1, "div", 1)(2, "div", 2)(3, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Company");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul")(6, "li")(7, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "About Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li")(10, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Careers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li")(13, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Press");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li")(16, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Blog");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li")(19, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 2)(22, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Support");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "ul")(25, "li")(26, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Contact Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li")(29, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Help Center");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li")(32, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Security");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li")(35, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Privacy Policy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li")(38, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Terms of Service");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 2)(41, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Learn");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "ul")(44, "li")(45, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Stokvel Basics");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "li")(48, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Tutorials");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "li")(51, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Glossary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "li")(54, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "FAQs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "li")(57, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Resources");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 2)(60, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Legal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "ul")(63, "li")(64, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Regulatory");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "li")(67, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Compliance");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "li")(70, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "POPIA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "li")(73, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "FSCA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "li")(76, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Disclaimer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 22)(79, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Connect With Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 23)(82, "a", 24)(83, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "thumb_up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "a", 25)(86, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "alternate_email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "a", 26)(89, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "photo_camera");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "a", 27)(92, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "business_center");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "a", 28)(95, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "smart_display");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 29)(98, "div", 30)(99, "mat-icon", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 30)(104, "mat-icon", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 30)(109, "mat-icon", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "chat");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 33)(114, "p", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "Download our app");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 35)(117, "a", 36)(118, "mat-icon", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "android");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 38)(121, "span", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "GET IT ON");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "span", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "Google Play");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "a", 41)(126, "mat-icon", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "apple");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div", 38)(129, "span", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "Download on the");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "span", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "App Store");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 42)(134, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div", 43)(137, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "POPIA Compliant");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "NASASA Member");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "FSCA Registered");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.socialLinks.facebook, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.socialLinks.twitter, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.socialLinks.instagram, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.socialLinks.linkedin, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.socialLinks.youtube, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.contactInfo.supportEmail);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.contactInfo.phone);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.contactInfo.whatsapp);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.appLinks.playStore, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.appLinks.appStore, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A9 ", ctx.year, " eStokvel. All rights reserved. eStokvel is an approved NASASA member. FSP No: 12345");
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkActive, _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__.MatIcon],
    styles: ["@charset \"UTF-8\";\n\n\nfooter[_ngcontent-%COMP%] {\n  background: linear-gradient(160deg, #061d4a 0%, #0d47a1 50%, #1565c0 100%);\n  color: white;\n  padding: 60px 20px 20px;\n}\n\n.footer-content[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 40px;\n  margin-bottom: 40px;\n}\n\n.footer-column[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 18px;\n  margin-bottom: 20px;\n  position: relative;\n  padding-bottom: 10px;\n  color: white;\n}\n\n.footer-column[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  width: 40px;\n  height: 2px;\n  background: linear-gradient(90deg, #d97706, #f59e0b);\n}\n\n.footer-column[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n\n.footer-column[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n\n.footer-column[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #e0e0e0;\n  text-decoration: none;\n  transition: color 0.3s;\n  font-size: 14px;\n}\n\n.footer-column[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: white;\n}\n\n\n\n.connect-column[_ngcontent-%COMP%]   .social-links[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  margin-bottom: 25px;\n}\n.connect-column[_ngcontent-%COMP%]   .social-link[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 40px;\n  height: 40px;\n  background-color: rgba(255, 255, 255, 0.1);\n  border-radius: 50%;\n  transition: all 0.3s ease;\n  text-decoration: none;\n}\n.connect-column[_ngcontent-%COMP%]   .social-link[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n}\n.connect-column[_ngcontent-%COMP%]   .social-link[_ngcontent-%COMP%]:hover {\n  background-color: rgba(255, 255, 255, 0.2);\n  transform: translateY(-2px);\n}\n.connect-column[_ngcontent-%COMP%]   .contact-info[_ngcontent-%COMP%] {\n  margin-bottom: 25px;\n}\n.connect-column[_ngcontent-%COMP%]   .contact-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 12px;\n  color: #e0e0e0;\n}\n.connect-column[_ngcontent-%COMP%]   .contact-item[_ngcontent-%COMP%]   .contact-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #f59e0b;\n  width: 18px;\n  height: 18px;\n  color: #ff9800;\n}\n.connect-column[_ngcontent-%COMP%]   .contact-item[_ngcontent-%COMP%]   .contact-text[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #e0e0e0;\n}\n.connect-column[_ngcontent-%COMP%]   .app-download[_ngcontent-%COMP%]   .download-title[_ngcontent-%COMP%] {\n  color: #e0e0e0;\n  margin-bottom: 15px;\n  font-size: 14px;\n  font-weight: 500;\n}\n.connect-column[_ngcontent-%COMP%]   .app-download[_ngcontent-%COMP%]   .download-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  align-items: center;\n}\n.connect-column[_ngcontent-%COMP%]   .app-download[_ngcontent-%COMP%]   .download-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 12px;\n  background-color: rgba(255, 255, 255, 0.1);\n  border-radius: 6px;\n  text-decoration: none;\n  transition: all 0.3s ease;\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  min-width: 140px;\n  \n\n}\n.connect-column[_ngcontent-%COMP%]   .app-download[_ngcontent-%COMP%]   .download-btn[_ngcontent-%COMP%]:hover {\n  background-color: rgba(255, 255, 255, 0.15);\n  transform: translateY(-1px);\n}\n.connect-column[_ngcontent-%COMP%]   .app-download[_ngcontent-%COMP%]   .download-btn[_ngcontent-%COMP%]   .store-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n  color: white;\n}\n.connect-column[_ngcontent-%COMP%]   .app-download[_ngcontent-%COMP%]   .download-btn[_ngcontent-%COMP%]   .store-text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  line-height: 1.2;\n}\n.connect-column[_ngcontent-%COMP%]   .app-download[_ngcontent-%COMP%]   .download-btn[_ngcontent-%COMP%]   .store-text[_ngcontent-%COMP%]   .get-text[_ngcontent-%COMP%] {\n  font-size: 8px;\n  color: #e0e0e0;\n  text-transform: uppercase;\n}\n.connect-column[_ngcontent-%COMP%]   .app-download[_ngcontent-%COMP%]   .download-btn[_ngcontent-%COMP%]   .store-text[_ngcontent-%COMP%]   .store-name[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: white;\n  font-weight: 500;\n}\n.connect-column[_ngcontent-%COMP%]   .app-download[_ngcontent-%COMP%]   .download-btn.play-store[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(76, 175, 80, 0.1) 100%);\n}\n.connect-column[_ngcontent-%COMP%]   .app-download[_ngcontent-%COMP%]   .download-btn.play-store[_ngcontent-%COMP%]   .store-icon[_ngcontent-%COMP%] {\n  color: #4caf50;\n}\n.connect-column[_ngcontent-%COMP%]   .app-download[_ngcontent-%COMP%]   .download-btn.app-store[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(33, 150, 243, 0.1) 100%);\n}\n.connect-column[_ngcontent-%COMP%]   .app-download[_ngcontent-%COMP%]   .download-btn.app-store[_ngcontent-%COMP%]   .store-icon[_ngcontent-%COMP%] {\n  color: #2196f3;\n}\n\n.footer-bottom[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding-top: 20px;\n  border-top: 1px solid rgba(255, 255, 255, 0.1);\n  text-align: center;\n  color: #e0e0e0;\n  font-size: 14px;\n}\n.footer-bottom[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n}\n.footer-bottom[_ngcontent-%COMP%]   .compliance-badges[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  gap: 15px;\n  flex-wrap: wrap;\n}\n.footer-bottom[_ngcontent-%COMP%]   .compliance-badge[_ngcontent-%COMP%] {\n  padding: 6px 12px;\n  background-color: rgba(255, 255, 255, 0.1);\n  border-radius: 20px;\n  font-size: 12px;\n  color: #e0e0e0;\n  border: 1px solid rgba(255, 255, 255, 0.2);\n}\n\n\n\n@media (max-width: 768px) {\n  .footer-content[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));\n    gap: 30px;\n  }\n  .connect-column[_ngcontent-%COMP%]   .social-links[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n  .connect-column[_ngcontent-%COMP%]   .app-download[_ngcontent-%COMP%]   .download-buttons[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .connect-column[_ngcontent-%COMP%]   .app-download[_ngcontent-%COMP%]   .download-btn[_ngcontent-%COMP%] {\n    min-width: auto;\n    justify-content: center;\n  }\n  .footer-bottom[_ngcontent-%COMP%]   .compliance-badges[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: center;\n    gap: 10px;\n  }\n}\n@media (max-width: 480px) {\n  footer[_ngcontent-%COMP%] {\n    padding: 40px 15px 15px;\n  }\n  .footer-content[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 25px;\n    text-align: center;\n  }\n  .footer-column[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]::after {\n    left: 50%;\n    transform: translateX(-50%);\n  }\n  .connect-column[_ngcontent-%COMP%]   .social-links[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n  .connect-column[_ngcontent-%COMP%]   .app-download[_ngcontent-%COMP%]   .download-buttons[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .connect-column[_ngcontent-%COMP%]   .app-download[_ngcontent-%COMP%]   .download-btn[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n}\n\n\nfooter[_ngcontent-%COMP%] {\n  background: linear-gradient(160deg, #061d4a 0%, #0a2e74 40%, #1565c0 100%);\n  position: relative;\n  overflow: hidden;\n}\n\nfooter[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  inset: 0;\n  background: radial-gradient(circle at 90% 15%, rgba(212, 175, 55, 0.12), transparent 42%);\n  pointer-events: none;\n}\n\n.footer-content[_ngcontent-%COMP%], \n.footer-bottom[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n}\n\n.footer-content[_ngcontent-%COMP%] {\n  max-width: 1280px;\n  gap: 24px;\n}\n\n.footer-column[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.06);\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  border-radius: 14px;\n  padding: 18px 16px;\n  backdrop-filter: blur(6px);\n  -webkit-backdrop-filter: blur(6px);\n}\n\n.footer-column[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n\n.footer-column[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  opacity: 0.95;\n}\n\n.footer-column[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n  text-decoration: underline;\n  text-underline-offset: 3px;\n}\n\n.connect-column[_ngcontent-%COMP%]   .social-link[_ngcontent-%COMP%] {\n  border: 1px solid rgba(255, 255, 255, 0.22);\n}\n\n.connect-column[_ngcontent-%COMP%]   .download-btn[_ngcontent-%COMP%] {\n  border-radius: 10px;\n}\n\n\n\n.connect-column[_ngcontent-%COMP%]   .app-download[_ngcontent-%COMP%]   .download-buttons[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));\n  gap: 12px;\n  align-items: stretch;\n  width: 100%;\n}\n\n.connect-column[_ngcontent-%COMP%]   .app-download[_ngcontent-%COMP%]   .download-btn[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 24px 1fr;\n  align-items: center;\n  column-gap: 10px;\n  min-height: 52px;\n  min-width: 0;\n  width: 100%;\n  padding: 10px 12px;\n  box-sizing: border-box;\n}\n\n.connect-column[_ngcontent-%COMP%]   .app-download[_ngcontent-%COMP%]   .store-icon[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  font-size: 24px;\n  line-height: 24px;\n  place-self: center;\n}\n\n.connect-column[_ngcontent-%COMP%]   .app-download[_ngcontent-%COMP%]   .store-text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  min-height: 30px;\n  min-width: 0;\n  line-height: 1.15;\n}\n\n.connect-column[_ngcontent-%COMP%]   .app-download[_ngcontent-%COMP%]   .get-text[_ngcontent-%COMP%], \n.connect-column[_ngcontent-%COMP%]   .app-download[_ngcontent-%COMP%]   .store-name[_ngcontent-%COMP%] {\n  display: block;\n}\n\n@media (max-width: 768px) {\n  .connect-column[_ngcontent-%COMP%]   .app-download[_ngcontent-%COMP%]   .download-buttons[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.footer-bottom[_ngcontent-%COMP%] {\n  max-width: 1280px;\n  border-top-color: rgba(255, 255, 255, 0.18);\n}\n\n.footer-bottom[_ngcontent-%COMP%]   .compliance-badge[_ngcontent-%COMP%] {\n  border-radius: 999px;\n}\n\n\n\n.connect-column[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  line-height: 1;\n  vertical-align: middle;\n  flex-shrink: 0;\n}\n\n.connect-column[_ngcontent-%COMP%]   .social-link[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.connect-column[_ngcontent-%COMP%]   .contact-item[_ngcontent-%COMP%] {\n  align-items: center;\n}\n\n.connect-column[_ngcontent-%COMP%]   .download-btn[_ngcontent-%COMP%] {\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBQWhCLDBCQUFBO0FBQ0E7RUFDRSwwRUFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtBQUVGOztBQUNBO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLDJEQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0FBRUY7O0FBQ0E7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtBQUVGOztBQUNBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLG9EQUFBO0FBRUY7O0FBQ0E7RUFDRSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FBRUY7O0FBQ0E7RUFDRSxtQkFBQTtBQUVGOztBQUNBO0VBQ0UsY0FBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0FBRUY7O0FBQ0E7RUFDRSxZQUFBO0FBRUY7O0FBQ0EsbUNBQUE7QUFFRTtFQUNFLGFBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7QUFDSjtBQUVFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDBDQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0FBQUo7QUFFSTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFBTjtBQUdJO0VBQ0UsMENBQUE7RUFDQSwyQkFBQTtBQUROO0FBS0U7RUFDRSxtQkFBQTtBQUhKO0FBTUU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FBSko7QUFNSTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FBSk47QUFPSTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FBTE47QUFVSTtFQUNFLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQVJOO0FBV0k7RUFDRSxhQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0FBVE47QUFZSTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7RUFDQSxpQkFBQTtFQUNBLDBDQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EsMENBQUE7RUFDQSxnQkFBQTtFQWdDQSxtQ0FBQTtBQXpDTjtBQVdNO0VBQ0UsMkNBQUE7RUFDQSwyQkFBQTtBQVRSO0FBWU07RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBVlI7QUFhTTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FBWFI7QUFhUTtFQUNFLGNBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7QUFYVjtBQWNRO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQVpWO0FBaUJNO0VBQ0UsNkZBQUE7QUFmUjtBQWlCUTtFQUNFLGNBQUE7QUFmVjtBQW1CTTtFQUNFLDhGQUFBO0FBakJSO0FBbUJRO0VBQ0UsY0FBQTtBQWpCVjs7QUF3QkE7RUFDRSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLDhDQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQXJCRjtBQXVCRTtFQUNFLG1CQUFBO0FBckJKO0FBd0JFO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7QUF0Qko7QUF5QkU7RUFDRSxpQkFBQTtFQUNBLDBDQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLDBDQUFBO0FBdkJKOztBQTJCQSxzQkFBQTtBQUNBO0VBQ0U7SUFDRSwyREFBQTtJQUNBLFNBQUE7RUF4QkY7RUE0QkU7SUFDRSx1QkFBQTtFQTFCSjtFQThCSTtJQUNFLHNCQUFBO0lBQ0Esb0JBQUE7RUE1Qk47RUErQkk7SUFDRSxlQUFBO0lBQ0EsdUJBQUE7RUE3Qk47RUFtQ0U7SUFDRSxzQkFBQTtJQUNBLG1CQUFBO0lBQ0EsU0FBQTtFQWpDSjtBQUNGO0FBcUNBO0VBQ0U7SUFDRSx1QkFBQTtFQW5DRjtFQXNDQTtJQUNFLDBCQUFBO0lBQ0EsU0FBQTtJQUNBLGtCQUFBO0VBcENGO0VBdUNBO0lBQ0UsU0FBQTtJQUNBLDJCQUFBO0VBckNGO0VBeUNFO0lBQ0UsdUJBQUE7RUF2Q0o7RUEyQ0k7SUFDRSxzQkFBQTtFQXpDTjtFQTRDSTtJQUNFLHVCQUFBO0VBMUNOO0FBQ0Y7QUErQ0EsNENBQUE7QUFDQTtFQUNFLDBFQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQTdDRjs7QUFnREE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EseUZBQUE7RUFDQSxvQkFBQTtBQTdDRjs7QUFnREE7O0VBRUUsa0JBQUE7RUFDQSxVQUFBO0FBN0NGOztBQWdEQTtFQUNFLGlCQUFBO0VBQ0EsU0FBQTtBQTdDRjs7QUFnREE7RUFDRSxxQ0FBQTtFQUNBLDBDQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0VBQ0Esa0NBQUE7QUE3Q0Y7O0FBZ0RBO0VBQ0UsZUFBQTtBQTdDRjs7QUFnREE7RUFDRSxhQUFBO0FBN0NGOztBQWdEQTtFQUNFLFVBQUE7RUFDQSwwQkFBQTtFQUNBLDBCQUFBO0FBN0NGOztBQWdEQTtFQUNFLDJDQUFBO0FBN0NGOztBQWdEQTtFQUNFLG1CQUFBO0FBN0NGOztBQWdEQSxpRkFBQTtBQUNBO0VBQ0UsYUFBQTtFQUNBLDJEQUFBO0VBQ0EsU0FBQTtFQUNBLG9CQUFBO0VBQ0EsV0FBQTtBQTdDRjs7QUFnREE7RUFDRSxhQUFBO0VBQ0EsK0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7QUE3Q0Y7O0FBZ0RBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQTdDRjs7QUFnREE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBN0NGOztBQWdEQTs7RUFFRSxjQUFBO0FBN0NGOztBQWdEQTtFQUNFO0lBQ0UsMEJBQUE7RUE3Q0Y7QUFDRjtBQWdEQTtFQUNFLGlCQUFBO0VBQ0EsMkNBQUE7QUE5Q0Y7O0FBaURBO0VBQ0Usb0JBQUE7QUE5Q0Y7O0FBaURBLHFEQUFBO0FBQ0E7RUFDRSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0FBOUNGOztBQWlEQTtFQUNFLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQTlDRjs7QUFpREE7RUFDRSxtQkFBQTtBQTlDRjs7QUFpREE7RUFDRSxtQkFBQTtBQTlDRiIsInNvdXJjZXNDb250ZW50IjpbIi8qIGZvb3Rlci5jb21wb25lbnQuc2NzcyAqL1xyXG5mb290ZXIge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxNjBkZWcsICMwNjFkNGEgMCUsICMwZDQ3YTEgNTAlLCAjMTU2NWMwIDEwMCUpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiA2MHB4IDIwcHggMjBweDtcclxufVxyXG5cclxuLmZvb3Rlci1jb250ZW50IHtcclxuICBtYXgtd2lkdGg6IDEyMDBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjAwcHgsIDFmcikpO1xyXG4gIGdhcDogNDBweDtcclxuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG59XHJcblxyXG4uZm9vdGVyLWNvbHVtbiBoMyB7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmZvb3Rlci1jb2x1bW4gaDM6OmFmdGVyIHtcclxuICBjb250ZW50OiAnJztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMDtcclxuICBib3R0b206IDA7XHJcbiAgd2lkdGg6IDQwcHg7XHJcbiAgaGVpZ2h0OiAycHg7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjZDk3NzA2LCAjZjU5ZTBiKTtcclxufVxyXG5cclxuLmZvb3Rlci1jb2x1bW4gdWwge1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5mb290ZXItY29sdW1uIHVsIGxpIHtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4uZm9vdGVyLWNvbHVtbiBhIHtcclxuICBjb2xvcjogI2UwZTBlMDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4zcztcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbi5mb290ZXItY29sdW1uIGE6aG92ZXIge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLyogQ29ubmVjdCBDb2x1bW4gU3BlY2lmaWMgU3R5bGVzICovXHJcbi5jb25uZWN0LWNvbHVtbiB7XHJcbiAgLnNvY2lhbC1saW5rcyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZ2FwOiAxMnB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxuICB9XHJcblxyXG4gIC5zb2NpYWwtbGluayB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5cclxuICAgIG1hdC1pY29uIHtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmNvbnRhY3QtaW5mbyB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG4gIH1cclxuXHJcbiAgLmNvbnRhY3QtaXRlbSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdhcDogMTJweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEycHg7XHJcbiAgICBjb2xvcjogI2UwZTBlMDtcclxuXHJcbiAgICAuY29udGFjdC1pY29uIHtcclxuICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICBjb2xvcjogI2Y1OWUwYjtcclxuICAgICAgd2lkdGg6IDE4cHg7XHJcbiAgICAgIGhlaWdodDogMThweDtcclxuICAgICAgY29sb3I6ICNmZjk4MDA7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbnRhY3QtdGV4dCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgY29sb3I6ICNlMGUwZTA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuYXBwLWRvd25sb2FkIHtcclxuICAgIC5kb3dubG9hZC10aXRsZSB7XHJcbiAgICAgIGNvbG9yOiAjZTBlMGUwO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICB9XHJcblxyXG4gICAgLmRvd25sb2FkLWJ1dHRvbnMge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBnYXA6IDEycHg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLmRvd25sb2FkLWJ0biB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGdhcDogOHB4O1xyXG4gICAgICBwYWRkaW5nOiA4cHggMTJweDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xyXG4gICAgICBtaW4td2lkdGg6IDE0MHB4O1xyXG5cclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5zdG9yZS1pY29uIHtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnN0b3JlLXRleHQge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBsaW5lLWhlaWdodDogMS4yO1xyXG5cclxuICAgICAgICAuZ2V0LXRleHQge1xyXG4gICAgICAgICAgZm9udC1zaXplOiA4cHg7XHJcbiAgICAgICAgICBjb2xvcjogI2UwZTBlMDtcclxuICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuc3RvcmUtbmFtZSB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLyogU3BlY2lmaWMgc3R5bGVzIGZvciBlYWNoIHN0b3JlICovXHJcbiAgICAgICYucGxheS1zdG9yZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpIDAlLCByZ2JhKDc2LCAxNzUsIDgwLCAwLjEpIDEwMCUpO1xyXG5cclxuICAgICAgICAuc3RvcmUtaWNvbiB7XHJcbiAgICAgICAgICBjb2xvcjogIzRjYWY1MDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYuYXBwLXN0b3JlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSkgMCUsIHJnYmEoMzMsIDE1MCwgMjQzLCAwLjEpIDEwMCUpO1xyXG5cclxuICAgICAgICAuc3RvcmUtaWNvbiB7XHJcbiAgICAgICAgICBjb2xvcjogIzIxOTZmMztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5mb290ZXItYm90dG9tIHtcclxuICBtYXgtd2lkdGg6IDEyMDBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBwYWRkaW5nLXRvcDogMjBweDtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogI2UwZTBlMDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcblxyXG4gIHAge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICB9XHJcblxyXG4gIC5jb21wbGlhbmNlLWJhZGdlcyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBnYXA6IDE1cHg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgfVxyXG5cclxuICAuY29tcGxpYW5jZS1iYWRnZSB7XHJcbiAgICBwYWRkaW5nOiA2cHggMTJweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBjb2xvcjogI2UwZTBlMDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcclxuICB9XHJcbn1cclxuXHJcbi8qIFJlc3BvbnNpdmUgRGVzaWduICovXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC5mb290ZXItY29udGVudCB7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDE1MHB4LCAxZnIpKTtcclxuICAgIGdhcDogMzBweDtcclxuICB9XHJcblxyXG4gIC5jb25uZWN0LWNvbHVtbiB7XHJcbiAgICAuc29jaWFsLWxpbmtzIHtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLmFwcC1kb3dubG9hZCB7XHJcbiAgICAgIC5kb3dubG9hZC1idXR0b25zIHtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuZG93bmxvYWQtYnRuIHtcclxuICAgICAgICBtaW4td2lkdGg6IGF1dG87XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5mb290ZXItYm90dG9tIHtcclxuICAgIC5jb21wbGlhbmNlLWJhZGdlcyB7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGdhcDogMTBweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xyXG4gIGZvb3RlciB7XHJcbiAgICBwYWRkaW5nOiA0MHB4IDE1cHggMTVweDtcclxuICB9XHJcblxyXG4gIC5mb290ZXItY29udGVudCB7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICAgIGdhcDogMjVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5mb290ZXItY29sdW1uIGgzOjphZnRlciB7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgfVxyXG5cclxuICAuY29ubmVjdC1jb2x1bW4ge1xyXG4gICAgLnNvY2lhbC1saW5rcyB7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC5hcHAtZG93bmxvYWQge1xyXG4gICAgICAuZG93bmxvYWQtYnV0dG9ucyB7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmRvd25sb2FkLWJ0biB7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8qIE1vZGVybiByZWZyZXNoIG92ZXJyaWRlcyDDosKAwpMgbmF2eSBwYWxldHRlICovXHJcbmZvb3RlciB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE2MGRlZywgIzA2MWQ0YSAwJSwgIzBhMmU3NCA0MCUsICMxNTY1YzAgMTAwJSk7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbmZvb3Rlcjo6YmVmb3JlIHtcclxuICBjb250ZW50OiAnJztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgaW5zZXQ6IDA7XHJcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCA5MCUgMTUlLCByZ2JhKDIxMiwgMTc1LCA1NSwgMC4xMiksIHRyYW5zcGFyZW50IDQyJSk7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbn1cclxuXHJcbi5mb290ZXItY29udGVudCxcclxuLmZvb3Rlci1ib3R0b20ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiAxO1xyXG59XHJcblxyXG4uZm9vdGVyLWNvbnRlbnQge1xyXG4gIG1heC13aWR0aDogMTI4MHB4O1xyXG4gIGdhcDogMjRweDtcclxufVxyXG5cclxuLmZvb3Rlci1jb2x1bW4ge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNik7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE0cHg7XHJcbiAgcGFkZGluZzogMThweCAxNnB4O1xyXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig2cHgpO1xyXG4gIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDZweCk7XHJcbn1cclxuXHJcbi5mb290ZXItY29sdW1uIGgzIHtcclxuICBmb250LXNpemU6IDFyZW07XHJcbn1cclxuXHJcbi5mb290ZXItY29sdW1uIGEge1xyXG4gIG9wYWNpdHk6IDAuOTU7XHJcbn1cclxuXHJcbi5mb290ZXItY29sdW1uIGE6aG92ZXIge1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgdGV4dC11bmRlcmxpbmUtb2Zmc2V0OiAzcHg7XHJcbn1cclxuXHJcbi5jb25uZWN0LWNvbHVtbiAuc29jaWFsLWxpbmsge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yMik7XHJcbn1cclxuXHJcbi5jb25uZWN0LWNvbHVtbiAuZG93bmxvYWQtYnRuIHtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG4vKiBFbnN1cmUgYXBwIHN0b3JlIGJ1dHRvbnMgYWxpZ24gY29uc2lzdGVudGx5IHJlZ2FyZGxlc3Mgb2YgbGFiZWwgbGVuZ3RoL2Nhc2UuICovXHJcbi5jb25uZWN0LWNvbHVtbiAuYXBwLWRvd25sb2FkIC5kb3dubG9hZC1idXR0b25zIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMTYwcHgsIDFmcikpO1xyXG4gIGdhcDogMTJweDtcclxuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmNvbm5lY3QtY29sdW1uIC5hcHAtZG93bmxvYWQgLmRvd25sb2FkLWJ0biB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI0cHggMWZyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgY29sdW1uLWdhcDogMTBweDtcclxuICBtaW4taGVpZ2h0OiA1MnB4O1xyXG4gIG1pbi13aWR0aDogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAxMHB4IDEycHg7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuLmNvbm5lY3QtY29sdW1uIC5hcHAtZG93bmxvYWQgLnN0b3JlLWljb24ge1xyXG4gIHdpZHRoOiAyNHB4O1xyXG4gIGhlaWdodDogMjRweDtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgcGxhY2Utc2VsZjogY2VudGVyO1xyXG59XHJcblxyXG4uY29ubmVjdC1jb2x1bW4gLmFwcC1kb3dubG9hZCAuc3RvcmUtdGV4dCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIG1pbi1oZWlnaHQ6IDMwcHg7XHJcbiAgbWluLXdpZHRoOiAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjE1O1xyXG59XHJcblxyXG4uY29ubmVjdC1jb2x1bW4gLmFwcC1kb3dubG9hZCAuZ2V0LXRleHQsXHJcbi5jb25uZWN0LWNvbHVtbiAuYXBwLWRvd25sb2FkIC5zdG9yZS1uYW1lIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgLmNvbm5lY3QtY29sdW1uIC5hcHAtZG93bmxvYWQgLmRvd25sb2FkLWJ1dHRvbnMge1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgfVxyXG59XHJcblxyXG4uZm9vdGVyLWJvdHRvbSB7XHJcbiAgbWF4LXdpZHRoOiAxMjgwcHg7XHJcbiAgYm9yZGVyLXRvcC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE4KTtcclxufVxyXG5cclxuLmZvb3Rlci1ib3R0b20gLmNvbXBsaWFuY2UtYmFkZ2Uge1xyXG4gIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xyXG59XHJcblxyXG4vKiBJY29uIGFsaWdubWVudCBoYXJkZW5pbmcgZm9yIHRoZSBjb25uZWN0IGNvbHVtbi4gKi9cclxuLmNvbm5lY3QtY29sdW1uIG1hdC1pY29uIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGxpbmUtaGVpZ2h0OiAxO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgZmxleC1zaHJpbms6IDA7XHJcbn1cclxuXHJcbi5jb25uZWN0LWNvbHVtbiAuc29jaWFsLWxpbmsge1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jb25uZWN0LWNvbHVtbiAuY29udGFjdC1pdGVtIHtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uY29ubmVjdC1jb2x1bW4gLmRvd25sb2FkLWJ0biB7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  }));
}
_staticBlock();

/***/ }),

/***/ 4114:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ 4487);
/* harmony import */ var _shared_faq_faq_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/faq/faq.component */ 4672);
/* harmony import */ var _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @auth0/auth0-angular */ 7989);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2481);
var _staticBlock;





const routes = [{
  path: '',
  redirectTo: 'home',
  pathMatch: 'full'
}, {
  path: 'home',
  loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_components_stokvel-join_join-stokvel-modal_ts"), __webpack_require__.e("src_app_pages_home_home_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/home/home.component */ 5047)).then(m => m.HomeComponent)
}, {
  path: 'about-us',
  loadComponent: () => __webpack_require__.e(/*! import() */ "src_app_pages_about-us_about-us_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/about-us/about-us.component */ 2457)).then(m => m.AboutUsComponent),
  title: 'About Us - eStokvel'
}, {
  path: 'contact-us',
  loadComponent: () => __webpack_require__.e(/*! import() */ "src_app_pages_contact_contact_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/contact/contact.component */ 2951)).then(m => m.ContactComponent),
  title: 'Contact Us - eStokvel'
}, {
  path: 'careers',
  loadComponent: () => __webpack_require__.e(/*! import() */ "src_app_pages_careers_careers_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/careers/careers.component */ 4711)).then(m => m.CareersComponent),
  title: 'CareersComponent - eStokvel'
}, {
  path: 'press',
  loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_press_press_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/press/press.component */ 3991)).then(m => m.PressComponent),
  title: 'PressComponent - eStokvel'
}, {
  path: 'legal',
  loadComponent: () => __webpack_require__.e(/*! import() */ "src_app_pages_legal_legal_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/legal/legal.component */ 3792)).then(m => m.LegalComponent),
  title: 'LegalComponent - eStokvel'
}, {
  path: 'privacy-policy',
  loadComponent: () => __webpack_require__.e(/*! import() */ "src_app_pages_privacy-policy_privacy-policy_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/privacy-policy/privacy-policy.component */ 8855)).then(m => m.PrivacyPolicyComponent),
  title: 'Privacy Policy - eStokvel'
}, {
  path: 'contact',
  loadComponent: () => __webpack_require__.e(/*! import() */ "src_app_pages_contact_contact_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/contact/contact.component */ 2951)).then(m => m.ContactComponent),
  title: 'Contact Us - eStokvel'
}, {
  path: 'security',
  loadComponent: () => __webpack_require__.e(/*! import() */ "src_app_pages_security_security_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/security/security.component */ 6501)).then(m => m.SecurityComponent),
  title: 'Security - eStokvel'
}, {
  path: 'terms',
  loadComponent: () => __webpack_require__.e(/*! import() */ "src_app_pages_terms_terms_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/terms/terms.component */ 9599)).then(m => m.TermsComponent),
  title: 'Terms of Service - eStokvel'
}, {
  path: 'stokvel-basics',
  loadComponent: () => __webpack_require__.e(/*! import() */ "src_app_pages_stokvel-basics_stokvel-basics_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/stokvel-basics/stokvel-basics.component */ 9573)).then(m => m.StokvelBasicsComponent),
  title: 'Stokvel Basics - eStokvel'
}, {
  path: 'tutorials',
  loadComponent: () => __webpack_require__.e(/*! import() */ "src_app_pages_tutorials_tutorials_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/tutorials/tutorials.component */ 911)).then(m => m.TutorialsComponent),
  title: 'Tutorials - eStokvel'
}, {
  path: 'glossary',
  loadComponent: () => __webpack_require__.e(/*! import() */ "src_app_pages_glossary_glossary_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/glossary/glossary.component */ 2133)).then(m => m.GlossaryComponent),
  title: 'Glossary - eStokvel'
}, {
  path: 'regulatory',
  loadComponent: () => __webpack_require__.e(/*! import() */ "src_app_pages_regulatory_regulatory_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/regulatory/regulatory.component */ 2497)).then(m => m.RegulatoryComponent),
  title: 'Regulatory - eStokvel'
}, {
  path: 'compliance',
  loadComponent: () => __webpack_require__.e(/*! import() */ "src_app_pages_compliance_compliance_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/compliance/compliance.component */ 8327)).then(m => m.ComplianceComponent),
  title: 'Compliance - eStokvel'
}, {
  path: 'popia',
  loadComponent: () => __webpack_require__.e(/*! import() */ "src_app_pages_popia_popia_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/popia/popia.component */ 6219)).then(m => m.PopiaComponent),
  title: 'POPIA - eStokvel'
}, {
  path: 'dashboard',
  loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_components_dashboard_dashboard_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./components/dashboard/dashboard.component */ 4441)).then(m => m.DashboardComponent),
  canActivate: [_auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_2__.AuthGuard]
}, {
  path: 'create-stokvel',
  loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_components_stokvel-create_stokvel-create_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./components/stokvel-create/stokvel-create.component */ 2337)).then(m => m.StokvelCreateComponent),
  canActivate: [_auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_2__.AuthGuard]
}, {
  path: 'stokvels',
  loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_components_stokvel-join_join-stokvel-modal_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_components_stokvel-list_stokvel-list_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./components/stokvel-list/stokvel-list.component */ 9617)).then(m => m.StokvelListComponent),
  title: 'Browse Stokvels - eStokvel'
}, {
  path: 'stokvels/:id',
  loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_components_stokvel-join_join-stokvel-modal_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_components_stokvel-detail_stokvel-detail_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./components/stokvel-detail/stokvel-detail.component */ 8707)).then(m => m.StokvelDetailComponent),
  canActivate: [_auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_2__.AuthGuard],
  title: 'Stokvel Details - eStokvel'
}, {
  path: 'stokvels/:id/manage',
  loadComponent: () => __webpack_require__.e(/*! import() */ "src_app_components_stokvel-manage_stokvel-manage_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./components/stokvel-manage/stokvel-manage.component */ 2235)).then(m => m.StokvelManageComponent),
  canActivate: [_auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_2__.AuthGuard],
  title: 'Manage Stokvel - eStokvel'
}, {
  path: 'wallet',
  loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_components_wallet_wallet_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./components/wallet/wallet.component */ 5425)).then(m => m.WalletComponent),
  canActivate: [_auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_2__.AuthGuard],
  title: 'My Wallet - eStokvel'
}, {
  path: 'profile',
  loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_profile_profile_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/profile/profile.component */ 2683)).then(m => m.ProfileComponent),
  canActivate: [_auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_2__.AuthGuard],
  title: 'My Profile - eStokvel'
}, {
  path: 'refer-earn',
  loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_referals_refer-and-earn_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/referals/refer-and-earn.component */ 294)).then(m => m.ReferAndEarnComponent),
  title: 'Refer & Earn - eStokvel'
}, {
  path: 'blog',
  loadComponent: () => __webpack_require__.e(/*! import() */ "src_app_pages_blog_blog_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/blog/blog.component */ 4453)).then(m => m.BlogComponent),
  title: 'Blog - eStokvel'
}, {
  path: 'faq',
  component: _shared_faq_faq_component__WEBPACK_IMPORTED_MODULE_1__.FaqComponent
}, {
  path: 'help-center',
  loadComponent: () => __webpack_require__.e(/*! import() */ "src_app_pages_help-center_help-center_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/help-center/help-center.component */ 103)).then(m => m.HelpCenterComponent),
  title: 'Help Center - eStokvel'
}, {
  path: 'resources',
  loadComponent: () => __webpack_require__.e(/*! import() */ "src_app_pages_resources_resources_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/resources/resources.component */ 9815)).then(m => m.ResourcesComponent),
  title: 'Resources - eStokvel'
}, {
  path: 'fsca',
  loadComponent: () => __webpack_require__.e(/*! import() */ "src_app_pages_fsca_fsca_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/fsca/fsca.component */ 6999)).then(m => m.FscaComponent),
  title: 'FSCA - eStokvel'
}, {
  path: 'disclaimer',
  loadComponent: () => __webpack_require__.e(/*! import() */ "src_app_pages_disclaimer_disclaimer_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/disclaimer/disclaimer.component */ 9751)).then(m => m.DisclaimerComponent),
  title: 'Disclaimer - eStokvel'
}, {
  path: 'notifications',
  loadComponent: () => __webpack_require__.e(/*! import() */ "src_app_pages_notifications_notifications_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/notifications/notifications.component */ 5603)).then(m => m.NotificationsPageComponent),
  title: 'Notifications - eStokvel'
}, {
  path: '**',
  redirectTo: 'home'
}];
class AppRoutingModule {
  static #_ = _staticBlock = () => (this.ɵfac = function AppRoutingModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || AppRoutingModule)();
  }, this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
    type: AppRoutingModule
  }), this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule]
  }));
}
_staticBlock();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule]
  });
})();

/***/ }),

/***/ 4429:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ 2190);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/app.module */ 635);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_1__.AppModule).catch(err => console.error(err));

/***/ }),

/***/ 4672:
/*!*********************************************!*\
  !*** ./src/app/shared/faq/faq.component.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FaqComponent: () => (/* binding */ FaqComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2481);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ 3840);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ 3777);
var _staticBlock;




const _c0 = ["faqCard"];
function FaqComponent_mat_card_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card", 3, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FaqComponent_mat_card_1_Template_mat_card_click_0_listener() {
      const faq_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.toggleFaq(faq_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-card-header")(3, "mat-card-title")(4, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "help_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-icon", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "expand_more");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-card-content")(10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const faq_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", faq_r2.question, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("open", faq_r2.isOpen);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("open", faq_r2.isOpen);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](faq_r2.answer);
  }
}
class FaqComponent {
  constructor() {
    this.faqs = [{
      question: 'What is estokvel?',
      answer: `estokvel is an online community that allows people to create & join 
               stokvels online. Contributions are collected monthly and distributed 
               according to the payment order.`,
      isOpen: false
    }, {
      question: 'Where do contributions go before being paid to members?',
      answer: `Contributions are collected via a secure payment system and held in a 
               bank-approved account until disbursed.`,
      isOpen: false
    }, {
      question: 'Does the administrator get a fee?',
      answer: `No, the administrator does not receive a fee. They may gain exclusive 
               competition rewards.`,
      isOpen: false
    }, {
      question: 'How do I invite people to join?',
      answer: `Use "My Stokvels" → select a stokvel → invite members. Invitations 
               are sent via email and SMS.`,
      isOpen: false
    }, {
      question: 'Is my money secure?',
      answer: `We adhere strictly to legal and banking policies. Only amounts authorized 
               by you are debited.`,
      isOpen: false
    }, {
      question: 'Is there interest earned on Savings Stokvels?',
      answer: `Currently we cannot earn interest. We are exploring opportunities 
               with our banking partners.`,
      isOpen: false
    }, {
      question: 'Will contributions always be paid?',
      answer: `We have strict mechanisms to ensure contributions are tracked and 
               disbursed reliably.`,
      isOpen: false
    }];
    this.searchTerm = '';
  }
  ngAfterViewInit() {
    this.onScroll(); // trigger initial animation check
  }
  onScroll() {
    this.faqCards.forEach((card, index) => {
      const rect = card.nativeElement.getBoundingClientRect();
      if (rect.top <= window.innerHeight * 0.85) {
        setTimeout(() => card.nativeElement.classList.add('in-view'), index * 100);
      }
    });
  }
  toggleFaq(faq) {
    faq.isOpen = !faq.isOpen;
  }
  get filteredFaqs() {
    if (!this.searchTerm) return this.faqs;
    return this.faqs.filter(f => f.question.toLowerCase().includes(this.searchTerm.toLowerCase()) || f.answer.toLowerCase().includes(this.searchTerm.toLowerCase()));
  }
  static #_ = _staticBlock = () => (this.ɵfac = function FaqComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || FaqComponent)();
  }, this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: FaqComponent,
    selectors: [["app-faq"]],
    viewQuery: function FaqComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.faqCards = _t);
      }
    },
    hostBindings: function FaqComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("scroll", function FaqComponent_scroll_HostBindingHandler() {
          return ctx.onScroll();
        }, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveWindow"]);
      }
    },
    standalone: false,
    decls: 2,
    vars: 1,
    consts: [["faqCard", ""], [1, "faq-grid"], ["class", "faq-card", 3, "click", 4, "ngFor", "ngForOf"], [1, "faq-card", 3, "click"], [1, "toggle-icon"]],
    template: function FaqComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, FaqComponent_mat_card_1_Template, 12, 6, "mat-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.filteredFaqs);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIcon, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCardTitle],
    styles: [".faq-container[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 3rem 1rem;\n  font-family: \"Roboto\", sans-serif;\n}\n.faq-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 2rem;\n  font-weight: 700;\n  font-size: 2.5rem;\n  background: linear-gradient(90deg, #0d47a1, #702878);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n.faq-container[_ngcontent-%COMP%]   .faq-search[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 2rem;\n}\n.faq-container[_ngcontent-%COMP%]   .faq-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 1.5rem;\n}\n@media (min-width: 900px) {\n  .faq-container[_ngcontent-%COMP%]   .faq-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n.faq-container[_ngcontent-%COMP%]   .faq-card[_ngcontent-%COMP%] {\n  border-radius: 1rem;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);\n  transition: transform 0.3s ease, box-shadow 0.3s ease, opacity 0.6s ease, transform 0.6s ease;\n  cursor: pointer;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  opacity: 0;\n  transform: translateY(20px);\n}\n.faq-container[_ngcontent-%COMP%]   .faq-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px);\n  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);\n}\n.faq-container[_ngcontent-%COMP%]   .faq-card.in-view[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: translateY(0);\n}\n.faq-container[_ngcontent-%COMP%]   .faq-card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 1rem 1.5rem;\n  background: linear-gradient(to right, #f06292, #ba68c8);\n  color: #fff;\n}\n.faq-container[_ngcontent-%COMP%]   .faq-card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%]   mat-card-title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 1.1rem;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.faq-container[_ngcontent-%COMP%]   .faq-card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%]   .toggle-icon[_ngcontent-%COMP%] {\n  transition: transform 0.4s ease;\n}\n.faq-container[_ngcontent-%COMP%]   .faq-card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%]   .toggle-icon.open[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n}\n.faq-container[_ngcontent-%COMP%]   .faq-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%] {\n  max-height: 0;\n  overflow: hidden;\n  transition: max-height 0.5s ease, padding 0.3s ease;\n  background: #f9f9f9;\n}\n.faq-container[_ngcontent-%COMP%]   .faq-card[_ngcontent-%COMP%]   mat-card-content.open[_ngcontent-%COMP%] {\n  max-height: 600px;\n  padding: 1rem 1.5rem;\n}\n.faq-container[_ngcontent-%COMP%]   .faq-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #444;\n  line-height: 1.7;\n}\n.faq-container[_ngcontent-%COMP%]   .faq-card[_ngcontent-%COMP%]:nth-child(even)   mat-card-header[_ngcontent-%COMP%] {\n  background: linear-gradient(to right, #ba68c8, #f06292);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2ZhcS9mYXEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGlDQUFBO0FBQ0o7QUFDSTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0RBQUE7RUFDQSw2QkFBQTtFQUNBLG9DQUFBO0FBQ047QUFFSTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtBQUFOO0FBR0k7RUFDRSxhQUFBO0VBQ0EsMEJBQUE7RUFDQSxXQUFBO0FBRE47QUFHTTtFQUxGO0lBTUkscUNBQUE7RUFBTjtBQUNGO0FBR0k7RUFDRSxtQkFBQTtFQUNBLDBDQUFBO0VBQ0EsNkZBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxVQUFBO0VBQ0EsMkJBQUE7QUFETjtBQUdNO0VBQ0UsMkJBQUE7RUFDQSwyQ0FBQTtBQURSO0FBSU07RUFDRSxVQUFBO0VBQ0Esd0JBQUE7QUFGUjtBQUtNO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxvQkFBQTtFQUNBLHVEQUFBO0VBQ0EsV0FBQTtBQUhSO0FBS1E7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQUhWO0FBTVE7RUFDRSwrQkFBQTtBQUpWO0FBS1U7RUFDRSx5QkFBQTtBQUhaO0FBUU07RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtREFBQTtFQUNBLG1CQUFBO0FBTlI7QUFRUTtFQUNFLGlCQUFBO0VBQ0Esb0JBQUE7QUFOVjtBQVNRO0VBQ0UsU0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQVBWO0FBV007RUFDRSx1REFBQTtBQVRSIiwic291cmNlc0NvbnRlbnQiOlsiLmZhcS1jb250YWluZXIge1xyXG4gICAgbWF4LXdpZHRoOiAxMjAwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHBhZGRpbmc6IDNyZW0gMXJlbTtcclxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuICBcclxuICAgIGgyIHtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG4gICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICBmb250LXNpemU6IDIuNXJlbTtcclxuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjMGQ0N2ExLCAjNzAyODc4KTtcclxuICAgICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XHJcbiAgICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIH1cclxuICBcclxuICAgIC5mYXEtc2VhcmNoIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuZmFxLWdyaWQge1xyXG4gICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICAgICAgZ2FwOiAxLjVyZW07XHJcbiAgXHJcbiAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA5MDBweCkge1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICBcclxuICAgIC5mYXEtY2FyZCB7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbiAgICAgIGJveC1zaGFkb3c6IDAgNHB4IDEycHggcmdiYSgwLDAsMCwwLjA4KTtcclxuICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZSwgYm94LXNoYWRvdyAwLjNzIGVhc2UsIG9wYWNpdHkgMC42cyBlYXNlLCB0cmFuc2Zvcm0gMC42cyBlYXNlO1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMHB4KTtcclxuICBcclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zcHgpO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMTJweCAyNHB4IHJnYmEoMCwwLDAsMC4xNSk7XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgJi5pbi12aWV3IHtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICAgICAgfVxyXG4gIFxyXG4gICAgICBtYXQtY2FyZC1oZWFkZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgcGFkZGluZzogMXJlbSAxLjVyZW07XHJcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZjA2MjkyLCAjYmE2OGM4KTtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICBcclxuICAgICAgICBtYXQtY2FyZC10aXRsZSB7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIGdhcDogMC41cmVtO1xyXG4gICAgICAgIH1cclxuICBcclxuICAgICAgICAudG9nZ2xlLWljb24ge1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNHMgZWFzZTtcclxuICAgICAgICAgICYub3BlbiB7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIG1hdC1jYXJkLWNvbnRlbnQge1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IDA7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICB0cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDAuNXMgZWFzZSwgcGFkZGluZyAwLjNzIGVhc2U7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2Y5ZjlmOTtcclxuICBcclxuICAgICAgICAmLm9wZW4ge1xyXG4gICAgICAgICAgbWF4LWhlaWdodDogNjAwcHg7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxcmVtIDEuNXJlbTtcclxuICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgcCB7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICBjb2xvcjogIzQ0NDtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjc7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgICY6bnRoLWNoaWxkKGV2ZW4pIG1hdC1jYXJkLWhlYWRlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjYmE2OGM4LCAjZjA2MjkyKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAiXSwic291cmNlUm9vdCI6IiJ9 */"]
  }));
}
_staticBlock();

/***/ }),

/***/ 4772:
/*!********************************************!*\
  !*** ./src/app/store/auth/auth.actions.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loginSuccess: () => (/* binding */ loginSuccess),
/* harmony export */   logout: () => (/* binding */ logout),
/* harmony export */   restoreAuth: () => (/* binding */ restoreAuth)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 1383);

const loginSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Auth] Login Success', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const logout = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Auth] Logout');
const restoreAuth = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Auth] Restore Auth', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());

/***/ }),

/***/ 6052:
/*!*********************************************!*\
  !*** ./src/app/environments/environment.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
const environment = {
  production: false,
  apiUrl: 'http://localhost:8080/api/',
  auth0: {
    domain: 'dev-5vp2r4v7ipexzaw3.us.auth0.com',
    clientId: 'kHhnITUZ6Wt4nyG1ipf6sPNSHZ2q8JGT',
    audience: 'https://dev-5vp2r4v7ipexzaw3.us.auth0.com/api/v2/',
    redirectUri: window.location.origin
  }
};

/***/ }),

/***/ 6747:
/*!*************************************!*\
  !*** ./src/app/auth.interceptor.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthHttpInterceptor: () => (/* binding */ AuthHttpInterceptor)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 5429);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 6647);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./environments/environment */ 6052);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @auth0/auth0-angular */ 7989);
var _staticBlock;




class AuthHttpInterceptor {
  constructor(auth) {
    this.auth = auth;
    this.excludedUrls = ['/assets/', '.json', 'auth0.com'
    // other URLs that don't need authentication
    ];
  }
  intercept(req, next) {
    if (this.isExcludedUrl(req.url) || !this.requiresAuth(req.url)) {
      return next.handle(req);
    }
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.from)(this.auth.getAccessTokenSilently()).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.switchMap)(token => {
      if (token) {
        const authReq = req.clone({
          setHeaders: {
            Authorization: `Bearer ${token}`
          }
        });
        if (!_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.production) {
          console.log(`Authenticated request to: ${req.url}`);
        }
        return next.handle(authReq);
      } else {
        if (!_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.production) {
          console.warn(`No auth token for: ${req.url}`);
        }
        return next.handle(req);
      }
    }));
  }
  requiresAuth(url) {
    return url.includes(_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiUrl) || url.startsWith('/api/');
  }
  isExcludedUrl(url) {
    return this.excludedUrls.some(excluded => url.includes(excluded));
  }
  static #_ = _staticBlock = () => (this.ɵfac = function AuthHttpInterceptor_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || AuthHttpInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_4__.AuthService));
  }, this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
    token: AuthHttpInterceptor,
    factory: AuthHttpInterceptor.ɵfac
  }));
}
_staticBlock();

/***/ }),

/***/ 7044:
/*!*****************************************************!*\
  !*** ./src/app/shared/toolbar/toolbar.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ToolbarComponent: () => (/* binding */ ToolbarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2481);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5422);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 4487);
/* harmony import */ var _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @auth0/auth0-angular */ 7989);
/* harmony import */ var _services_user_user_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/user/user-service.service */ 2915);
/* harmony import */ var _services_stokvel_stokvel_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/stokvel/stokvel.service */ 7093);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 3840);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 9885);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/toolbar */ 9552);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/list */ 4102);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/menu */ 1034);
/* harmony import */ var _components_notifications_notification_bell_notification_bell__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/notifications/notification-bell/notification-bell */ 583);
var _staticBlock;












function ToolbarComponent_button_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ToolbarComponent_button_18_Template_button_click_0_listener() {
      const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.navigate(item_r2.route));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active-link", ctx_r2.isActive(item_r2.route));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r2.label, " ");
  }
}
function ToolbarComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 20)(1, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ToolbarComponent_div_21_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.login());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Log In");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ToolbarComponent_div_21_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.login());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Sign Up");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function ToolbarComponent_ng_container_23_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const user_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("alt", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinterpolate"](user_r6.name || user_r6.nickname))("src", user_r6.picture, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
  }
}
function ToolbarComponent_ng_container_23_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const user_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, (user_r6.name || user_r6.nickname) == null ? null : (user_r6.name || user_r6.nickname).charAt(0)), " ");
  }
}
function ToolbarComponent_ng_container_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-notification-bell");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " My Profile ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "arrow_drop_down");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-menu", 24, 0)(8, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, ToolbarComponent_ng_container_23_ng_container_9_Template, 2, 3, "ng-container", 26)(10, ToolbarComponent_ng_container_23_ng_template_10_Template, 3, 3, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 27)(13, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Hi,");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "button", 30)(19, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "dashboard");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "My Dashboard");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "button", 31)(24, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "add_circle");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Create Stokvel");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "button", 32)(29, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "groups");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Browse Stokvels");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "button", 33)(34, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "settings");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Account Settings");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "button", 34)(39, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "account_balance_wallet");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "My Wallet");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "button", 35)(44, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "card_giftcard");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "Refer & Earn");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "button", 36)(49, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "help_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "Help & Support");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](53, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ToolbarComponent_ng_container_23_Template_button_click_54_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.logout());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "mat-icon", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const user_r6 = ctx.ngIf;
    const profileMenu_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](7);
    const fallbackAvatar_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matMenuTriggerFor", profileMenu_r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", user_r6.picture)("ngIfElse", fallbackAvatar_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](user_r6.name || user_r6.nickname || "there");
  }
}
class ToolbarComponent {
  constructor(router, auth, userService, stokvelService) {
    this.router = router;
    this.auth = auth;
    this.userService = userService;
    this.stokvelService = stokvelService;
    this.sidenavOpened = false;
    this.isScrolled = false;
    this.isLoggedIn = false;
    this.menuItems = [{
      label: 'Home',
      route: '/home'
    }, {
      label: 'Portfolio',
      route: '/dashboard'
    }, {
      label: 'Browse Stokvels',
      route: '/stokvels'
    }, {
      label: 'Refer & Earn',
      route: '/refer-earn'
    }, {
      label: 'About',
      route: '/about-us'
    }, {
      label: 'Blog',
      route: '/blog'
    }, {
      label: 'Contact',
      route: '/contact'
    }];
    this.user$ = this.userService.user$;
    this.userName$ = this.userService.userName$;
  }
  ngOnInit() {
    this.auth.isAuthenticated$.subscribe(isAuth => {
      this.isLoggedIn = isAuth;
    });
  }
  onWindowScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || 0;
    this.isScrolled = scrollPosition > 100;
  }
  toggleSidenav() {
    this.sidenavOpened = !this.sidenavOpened;
  }
  navigate(route) {
    this.router.navigate([route]);
    this.sidenavOpened = false;
  }
  login() {
    this.auth.loginWithRedirect({
      appState: {
        target: this.router.url
      }
    });
  }
  logout() {
    this.stokvelService.clearAllStokvelCache();
    this.auth.logout({
      logoutParams: {
        returnTo: ''
      }
    });
  }
  get visibleMenuItems() {
    return this.menuItems.filter(item => {
      if (item.label === 'Portfolio') {
        return this.isLoggedIn;
      }
      return true;
    });
  }
  isActive(route) {
    if (route === '/' || route === '/home') {
      return false;
    }
    const currentUrl = this.router.url.split('?')[0];
    return currentUrl === route || currentUrl.startsWith(route + '/');
  }
  static #_ = _staticBlock = () => (this.ɵfac = function ToolbarComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ToolbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_4__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_user_user_service_service__WEBPACK_IMPORTED_MODULE_5__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_stokvel_stokvel_service__WEBPACK_IMPORTED_MODULE_6__.StokvelService));
  }, this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: ToolbarComponent,
    selectors: [["app-toolbar"]],
    hostBindings: function ToolbarComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("scroll", function ToolbarComponent_scroll_HostBindingHandler() {
          return ctx.onWindowScroll();
        }, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveWindow"]);
      }
    },
    standalone: false,
    decls: 25,
    vars: 7,
    consts: [["profileMenu", "matMenu"], ["fallbackAvatar", ""], [1, "top-bar"], [1, "top-bar-content"], [1, "top-bar-text"], [1, "top-bar-links"], ["routerLink", "/faq"], ["routerLink", "/contact-us"], ["color", "default", 1, "main-toolbar"], [1, "toolbar-container"], [1, "toolbar-left"], ["mat-icon-button", "", 1, "mobile-menu-button", 3, "click"], [1, "logo-text", 2, "cursor", "pointer", 3, "click"], [1, "desktop-menu"], ["mat-button", "", 3, "active-link", "click", 4, "ngFor", "ngForOf"], [1, "spacer"], [1, "toolbar-right"], ["class", "auth-buttons", 4, "ngIf"], [4, "ngIf"], ["mat-button", "", 3, "click"], [1, "auth-buttons"], ["mat-stroked-button", "", "color", "primary", 1, "auth-button", "login-btn", 3, "click"], ["mat-raised-button", "", "color", "primary", 1, "auth-button", "signup-btn", 3, "click"], ["mat-button", "", 1, "profile-button", 3, "matMenuTriggerFor"], [1, "custom-profile-menu"], [1, "profile-header"], [4, "ngIf", "ngIfElse"], [1, "profile-info"], [1, "greeting"], [1, "name"], ["mat-menu-item", "", "routerLink", "/dashboard"], ["mat-menu-item", "", "routerLink", "/create-stokvel"], ["mat-menu-item", "", "routerLink", "/stokvels"], ["mat-menu-item", "", "routerLink", "/profile"], ["mat-menu-item", "", "routerLink", "/wallet"], ["mat-menu-item", "", "routerLink", "/refer-earn"], ["mat-menu-item", "", "routerLink", "/help-center"], ["mat-menu-item", "", 1, "logout-item", 3, "click"], ["color", "warn"], [1, "profile-avatar", 3, "src", "alt"], [1, "profile-avatar", "fallback-avatar"]],
    template: function ToolbarComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2)(1, "div", 3)(2, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Take control of your future, start today!");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 5)(5, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Faqs");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Contact Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-toolbar", 8)(10, "div", 9)(11, "div", 10)(12, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ToolbarComponent_Template_button_click_12_listener() {
          return ctx.toggleSidenav();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ToolbarComponent_Template_span_click_15_listener() {
          return ctx.navigate("/");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, " eStokvel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, ToolbarComponent_button_18_Template, 2, 3, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, ToolbarComponent_div_21_Template, 5, 0, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](22, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, ToolbarComponent_ng_container_23_Template, 59, 4, "ng-container", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](24, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.visibleMenuItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](22, 3, ctx.auth.isAuthenticated$));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](24, 5, ctx.auth.user$));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatIconButton, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__.MatToolbar, _angular_material_list__WEBPACK_IMPORTED_MODULE_12__.MatDivider, _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__.MatMenuTrigger, _components_notifications_notification_bell_notification_bell__WEBPACK_IMPORTED_MODULE_14__.NotificationBellComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_7__.UpperCasePipe],
    styles: ["@charset \"UTF-8\";\n\n\n.top-bar[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #092e6b 0%, #0d47a1 100%);\n  color: white;\n  padding: 8px 0;\n  font-size: 14px;\n  font-weight: 400;\n  width: 100%;\n  position: fixed;\n  top: 0;\n  z-index: 1002;\n}\n\n.top-bar-content[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 20px;\n}\n\n.top-bar-links[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 20px;\n}\n\n.top-bar-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.9);\n  text-decoration: none;\n  transition: opacity 0.3s;\n}\n.top-bar-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  opacity: 0.8;\n  text-decoration: underline;\n}\n\n\n\n.main-toolbar[_ngcontent-%COMP%] {\n  background-color: white !important;\n  color: #0f172a !important;\n  box-shadow: 0 2px 12px rgba(13, 71, 161, 0.1);\n  position: fixed;\n  top: 40px; \n\n  padding: 0 !important;\n  width: 100%;\n  z-index: 1001;\n  transition: transform 0.3s ease;\n}\n.main-toolbar.scrolled[_ngcontent-%COMP%] {\n  transform: translateY(-40px); \n\n}\n\n.toolbar-container[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  padding: 0 20px;\n  height: 64px; \n\n}\n\n.toolbar-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-shrink: 0;\n}\n\n.logo-text[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 800;\n  background: linear-gradient(135deg, #0d47a1 0%, #1565c0 50%, #1976d2 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  white-space: nowrap;\n  letter-spacing: -0.5px;\n}\n\n.spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n\n\n\n.desktop-menu[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-left: 40px;\n  flex-shrink: 0;\n}\n\n.nav-button[_ngcontent-%COMP%] {\n  color: #334155 !important;\n  font-weight: 500;\n  white-space: nowrap;\n  transition: all 0.3s ease;\n}\n.nav-button[_ngcontent-%COMP%]:hover {\n  background-color: rgba(13, 71, 161, 0.05);\n  color: #0d47a1 !important;\n}\n\n\n\n.fixed-desktop-menu[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  background: white;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n  z-index: 1000;\n  transform: translateY(-100%);\n  transition: transform 0.3s ease;\n}\n.fixed-desktop-menu.visible[_ngcontent-%COMP%] {\n  transform: translateY(0);\n}\n\n.fixed-menu-container[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 12px 20px;\n  gap: 8px;\n}\n\n\n\n.toolbar-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  flex-shrink: 0;\n}\n\n\n\n.auth-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  flex-shrink: 0;\n}\n\n.auth-button[_ngcontent-%COMP%] {\n  font-weight: 600;\n  white-space: nowrap;\n  transition: all 0.3s ease;\n}\n.auth-button.login-btn[_ngcontent-%COMP%] {\n  border-color: #0d47a1;\n  color: #0d47a1;\n}\n.auth-button.login-btn[_ngcontent-%COMP%]:hover {\n  background-color: rgba(13, 71, 161, 0.05);\n}\n.auth-button.signup-btn[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #0d47a1 0%, #1565c0 100%);\n  color: white;\n}\n.auth-button.signup-btn[_ngcontent-%COMP%]:hover {\n  opacity: 0.9;\n  transform: translateY(-1px);\n}\n\n\n\n.profile-button[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  color: #334155 !important;\n  white-space: nowrap;\n}\n.profile-button[_ngcontent-%COMP%]:hover {\n  color: #0d47a1 !important;\n}\n\n.mobile-menu-button[_ngcontent-%COMP%] {\n  display: none;\n  color: #333;\n}\n\n.custom-profile-menu[_ngcontent-%COMP%] {\n  min-width: 200px;\n}\n\n.profile-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 12px 16px;\n  gap: 12px;\n  background: linear-gradient(135deg, #f0f5fb 0%, #e8f0fe 100%);\n}\n.profile-header[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 40px;\n  width: 40px;\n  height: 40px;\n  color: #0d47a1;\n}\n\n.profile-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.profile-info[_ngcontent-%COMP%]   .greeting[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #666;\n}\n.profile-info[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #333;\n}\n\n.logout-item[_ngcontent-%COMP%] {\n  color: #f44336;\n}\n.logout-item[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #f44336;\n}\n\n\n\nbody[_ngcontent-%COMP%] {\n  padding-top: 104px; \n\n}\n\n\n\n@media (max-width: 1200px) {\n  .toolbar-container[_ngcontent-%COMP%], \n   .top-bar-content[_ngcontent-%COMP%], \n   .fixed-menu-container[_ngcontent-%COMP%] {\n    padding: 0 16px;\n  }\n}\n@media (max-width: 992px) {\n  .desktop-menu[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .fixed-desktop-menu[_ngcontent-%COMP%] {\n    display: none; \n\n  }\n  .mobile-menu-button[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .auth-buttons[_ngcontent-%COMP%] {\n    display: none;\n  }\n  body[_ngcontent-%COMP%] {\n    padding-top: 64px; \n\n  }\n  .main-toolbar[_ngcontent-%COMP%] {\n    top: 0; \n\n  }\n  .top-bar[_ngcontent-%COMP%] {\n    display: none; \n\n  }\n}\n@media (max-width: 768px) {\n  .top-bar-content[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 8px;\n    text-align: center;\n  }\n  .top-bar-links[_ngcontent-%COMP%] {\n    gap: 15px;\n  }\n  .logo-text[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n  .toolbar-container[_ngcontent-%COMP%] {\n    padding: 0 12px;\n    height: 56px; \n\n  }\n}\n@media (max-width: 480px) {\n  .top-bar[_ngcontent-%COMP%] {\n    font-size: 12px;\n    padding: 6px 0;\n  }\n  .top-bar-content[_ngcontent-%COMP%] {\n    padding: 0 10px;\n  }\n  .top-bar-links[_ngcontent-%COMP%] {\n    gap: 10px;\n  }\n  .logo-text[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n}\n.profile-avatar[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  object-fit: cover;\n  border: 2px solid #1565c0;\n}\n\n.fallback-avatar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: linear-gradient(135deg, #0d47a1 0%, #1565c0 100%);\n  color: white;\n  font-weight: bold;\n  font-size: 18px;\n  text-transform: uppercase;\n}\n\n.desktop-menu[_ngcontent-%COMP%]   button.active-link[_ngcontent-%COMP%] {\n  background-color: rgba(13, 71, 161, 0.1);\n  color: #0d47a1;\n  font-weight: 600;\n}\n\n\n\n.main-toolbar[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.97) !important;\n  backdrop-filter: blur(12px);\n  -webkit-backdrop-filter: blur(12px);\n  border-bottom: 1px solid rgba(13, 71, 161, 0.1);\n  box-shadow: 0 4px 20px rgba(13, 71, 161, 0.08);\n}\n\n.toolbar-container[_ngcontent-%COMP%], .fixed-menu-container[_ngcontent-%COMP%] {\n  max-width: 1280px;\n}\n\n.logo-text[_ngcontent-%COMP%] {\n  font-size: 1.6rem;\n  letter-spacing: -0.03em;\n}\n\n.desktop-menu[_ngcontent-%COMP%] {\n  gap: 4px;\n}\n\n.desktop-menu[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .nav-button[_ngcontent-%COMP%] {\n  border-radius: 999px;\n  padding: 0 14px;\n  height: 38px;\n}\n\n.auth-button.login-btn[_ngcontent-%COMP%] {\n  border-width: 1.5px;\n}\n\n.auth-button.signup-btn[_ngcontent-%COMP%] {\n  box-shadow: 0 8px 18px rgba(13, 71, 161, 0.28);\n}\n\n.profile-button[_ngcontent-%COMP%] {\n  border-radius: 999px;\n  padding: 6px 10px;\n}\n\n.custom-profile-menu[_ngcontent-%COMP%] {\n  border-radius: 14px;\n  overflow: hidden;\n}\n\n.profile-avatar[_ngcontent-%COMP%] {\n  border-color: #1565c0 !important;\n  box-shadow: 0 4px 12px rgba(13, 71, 161, 0.2);\n}\n\n@media (max-width: 992px) {\n  .toolbar-container[_ngcontent-%COMP%] {\n    height: 60px;\n  }\n  .logo-text[_ngcontent-%COMP%] {\n    font-size: 1.32rem;\n  }\n}\n\n\n.active-link[_ngcontent-%COMP%] {\n  color: #0d47a1 !important;\n  font-weight: 700 !important;\n  background: rgba(13, 71, 161, 0.1) !important;\n}\n\n\n\n.profile-avatar[_ngcontent-%COMP%] {\n  border-color: #1565c0 !important;\n  box-shadow: 0 4px 12px rgba(13, 71, 161, 0.2) !important;\n}\n\n.fallback-avatar[_ngcontent-%COMP%] {\n  background-color: #0d47a1 !important;\n}\n\n.desktop-menu[_ngcontent-%COMP%]   button.active-link[_ngcontent-%COMP%] {\n  background-color: rgba(13, 71, 161, 0.12) !important;\n  color: #0d47a1 !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL3Rvb2xiYXIvdG9vbGJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFBaEIsNENBQUE7QUFDQTtFQUNFLDZEQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLE1BQUE7RUFDQSxhQUFBO0FBRUY7O0FBQ0E7RUFDRSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFFRjs7QUFDQTtFQUNFLGFBQUE7RUFDQSxTQUFBO0FBRUY7O0FBQ0E7RUFDRSwrQkFBQTtFQUNBLHFCQUFBO0VBQ0Esd0JBQUE7QUFFRjtBQUFFO0VBQ0UsWUFBQTtFQUNBLDBCQUFBO0FBRUo7O0FBRUEsMENBQUE7QUFDQTtFQUNFLGtDQUFBO0VBQ0EseUJBQUE7RUFDQSw2Q0FBQTtFQUNBLGVBQUE7RUFDQSxTQUFBLEVBQUEsc0JBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsK0JBQUE7QUFDRjtBQUNFO0VBQ0UsNEJBQUEsRUFBQSxvQ0FBQTtBQUNKOztBQUdBO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBLEVBQUEsNEJBQUE7QUFBRjs7QUFHQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxjQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwRUFBQTtFQUNBLDZCQUFBO0VBQ0Esb0NBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FBQUY7O0FBR0E7RUFDRSxjQUFBO0FBQUY7O0FBR0Esb0NBQUE7QUFDQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFBRjs7QUFHQTtFQUNFLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FBQUY7QUFFRTtFQUNFLHlDQUFBO0VBQ0EseUJBQUE7QUFBSjs7QUFJQSx1QkFBQTtBQUNBO0VBQ0UsZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EseUNBQUE7RUFDQSxhQUFBO0VBQ0EsNEJBQUE7RUFDQSwrQkFBQTtBQURGO0FBR0U7RUFDRSx3QkFBQTtBQURKOztBQUtBO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7QUFGRjs7QUFLQSwwQkFBQTtBQUNBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLGNBQUE7QUFGRjs7QUFLQSxpQkFBQTtBQUNBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLGNBQUE7QUFGRjs7QUFLQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBQUZGO0FBSUU7RUFDRSxxQkFBQTtFQUNBLGNBQUE7QUFGSjtBQUlJO0VBQ0UseUNBQUE7QUFGTjtBQU1FO0VBQ0UsNkRBQUE7RUFDQSxZQUFBO0FBSko7QUFNSTtFQUNFLFlBQUE7RUFDQSwyQkFBQTtBQUpOOztBQVNBLG1CQUFBO0FBQ0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQU5GO0FBUUU7RUFDRSx5QkFBQTtBQU5KOztBQVVBO0VBQ0UsYUFBQTtFQUNBLFdBQUE7QUFQRjs7QUFVQTtFQUNFLGdCQUFBO0FBUEY7O0FBVUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSw2REFBQTtBQVBGO0FBU0U7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FBUEo7O0FBV0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7QUFSRjtBQVVFO0VBQ0UsZUFBQTtFQUNBLFdBQUE7QUFSSjtBQVdFO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0FBVEo7O0FBYUE7RUFDRSxjQUFBO0FBVkY7QUFZRTtFQUNFLGNBQUE7QUFWSjs7QUFjQSw2Q0FBQTtBQUNBO0VBQ0Usa0JBQUEsRUFBQSx5Q0FBQTtBQVhGOztBQWNBLHNCQUFBO0FBQ0E7RUFDRTs7O0lBR0UsZUFBQTtFQVhGO0FBQ0Y7QUFjQTtFQUNFO0lBQ0UsYUFBQTtFQVpGO0VBZUE7SUFDRSxhQUFBLEVBQUEsOEJBQUE7RUFiRjtFQWdCQTtJQUNFLGNBQUE7RUFkRjtFQWlCQTtJQUNFLGFBQUE7RUFmRjtFQWtCQTtJQUNFLGlCQUFBLEVBQUEsZ0NBQUE7RUFoQkY7RUFtQkE7SUFDRSxNQUFBLEVBQUEsNkJBQUE7RUFqQkY7RUFvQkE7SUFDRSxhQUFBLEVBQUEsMkJBQUE7RUFsQkY7QUFDRjtBQXFCQTtFQUNFO0lBQ0Usc0JBQUE7SUFDQSxRQUFBO0lBQ0Esa0JBQUE7RUFuQkY7RUFzQkE7SUFDRSxTQUFBO0VBcEJGO0VBdUJBO0lBQ0UsZUFBQTtFQXJCRjtFQXdCQTtJQUNFLGVBQUE7SUFDQSxZQUFBLEVBQUEsNkJBQUE7RUF0QkY7QUFDRjtBQXlCQTtFQUNFO0lBQ0UsZUFBQTtJQUNBLGNBQUE7RUF2QkY7RUEwQkE7SUFDRSxlQUFBO0VBeEJGO0VBMkJBO0lBQ0UsU0FBQTtFQXpCRjtFQTRCQTtJQUNFLGVBQUE7RUExQkY7QUFDRjtBQTZCQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0FBM0JGOztBQThCQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsNkRBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7QUEzQkY7O0FBOEJBO0VBQ0Usd0NBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUEzQkY7O0FBOEJBLGdGQUFBO0FBQ0E7RUFDRSxnREFBQTtFQUNBLDJCQUFBO0VBQ0EsbUNBQUE7RUFDQSwrQ0FBQTtFQUNBLDhDQUFBO0FBM0JGOztBQThCQTtFQUE0QyxpQkFBQTtBQTFCNUM7O0FBMkJBO0VBQWEsaUJBQUE7RUFBbUIsdUJBQUE7QUF0QmhDOztBQXVCQTtFQUFnQixRQUFBO0FBbkJoQjs7QUFvQkE7RUFBb0Msb0JBQUE7RUFBc0IsZUFBQTtFQUFpQixZQUFBO0FBZDNFOztBQWVBO0VBQXlCLG1CQUFBO0FBWHpCOztBQVlBO0VBQTBCLDhDQUFBO0FBUjFCOztBQVNBO0VBQWtCLG9CQUFBO0VBQXNCLGlCQUFBO0FBSnhDOztBQUtBO0VBQXVCLG1CQUFBO0VBQXFCLGdCQUFBO0FBQTVDOztBQUNBO0VBQWtCLGdDQUFBO0VBQWtDLDZDQUFBO0FBSXBEOztBQUhBO0VBQTRCO0lBQXFCLFlBQUE7RUFRL0M7RUFSK0Q7SUFBYSxrQkFBQTtFQVc1RTtBQUNGO0FBVkEsb0JBQUE7QUFDQTtFQUNFLHlCQUFBO0VBQ0EsMkJBQUE7RUFDQSw2Q0FBQTtBQVlGOztBQVRBLDhDQUFBO0FBQ0E7RUFBa0IsZ0NBQUE7RUFBa0Msd0RBQUE7QUFjcEQ7O0FBYkE7RUFBbUIsb0NBQUE7QUFpQm5COztBQWhCQTtFQUFtQyxvREFBQTtFQUFrRCx5QkFBQTtBQXFCckYiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBUb3AgQmFyIMOiwoDCkyBEZWVwIE5hdnkgKHRydXN0IC8gYXV0aG9yaXR5KSAqL1xyXG4udG9wLWJhciB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzA5MmU2YiAwJSwgIzBkNDdhMSAxMDAlKTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogOHB4IDA7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICB6LWluZGV4OiAxMDAyO1xyXG59XHJcblxyXG4udG9wLWJhci1jb250ZW50IHtcclxuICBtYXgtd2lkdGg6IDEyMDBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDAgMjBweDtcclxufVxyXG5cclxuLnRvcC1iYXItbGlua3Mge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZ2FwOiAyMHB4O1xyXG59XHJcblxyXG4udG9wLWJhci1saW5rcyBhIHtcclxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3M7XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgb3BhY2l0eTogMC44O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgfVxyXG59XHJcblxyXG4vKiBNYWluIFRvb2xiYXIgw6LCgMKTIFdoaXRlIHdpdGggbmF2eSBzaGFkb3cgKi9cclxuLm1haW4tdG9vbGJhciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICBjb2xvcjogIzBmMTcyYSAhaW1wb3J0YW50O1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDEycHggcmdiYSgxMywgNzEsIDE2MSwgMC4xKTtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiA0MHB4OyAvKiBIZWlnaHQgb2YgdG9wIGJhciAqL1xyXG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxuICB3aWR0aDogMTAwJTtcclxuICB6LWluZGV4OiAxMDAxO1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2U7XHJcblxyXG4gICYuc2Nyb2xsZWQge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC00MHB4KTsgLyogSGlkZSBtYWluIHRvb2xiYXIgd2hlbiBzY3JvbGxlZCAqL1xyXG4gIH1cclxufVxyXG5cclxuLnRvb2xiYXItY29udGFpbmVyIHtcclxuICBtYXgtd2lkdGg6IDEyMDBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMCAyMHB4O1xyXG4gIGhlaWdodDogNjRweDsgLyogU3RhbmRhcmQgdG9vbGJhciBoZWlnaHQgKi9cclxufVxyXG5cclxuLnRvb2xiYXItbGVmdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMTBweDtcclxuICBmbGV4LXNocmluazogMDtcclxufVxyXG5cclxuLmxvZ28tdGV4dCB7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzBkNDdhMSAwJSwgIzE1NjVjMCA1MCUsICMxOTc2ZDIgMTAwJSk7XHJcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XHJcbiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjVweDtcclxufVxyXG5cclxuLnNwYWNlciB7XHJcbiAgZmxleDogMSAxIGF1dG87XHJcbn1cclxuXHJcbi8qIERlc2t0b3AgTWVudSAtIE5hdmlnYXRpb24gTGlua3MgKi9cclxuLmRlc2t0b3AtbWVudSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogOHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiA0MHB4O1xyXG4gIGZsZXgtc2hyaW5rOiAwO1xyXG59XHJcblxyXG4ubmF2LWJ1dHRvbiB7XHJcbiAgY29sb3I6ICMzMzQxNTUgIWltcG9ydGFudDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEzLCA3MSwgMTYxLCAwLjA1KTtcclxuICAgIGNvbG9yOiAjMGQ0N2ExICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG4vKiBGaXhlZCBEZXNrdG9wIE1lbnUgKi9cclxuLmZpeGVkLWRlc2t0b3AtbWVudSB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDEycHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gIHotaW5kZXg6IDEwMDA7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKTtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlO1xyXG5cclxuICAmLnZpc2libGUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gIH1cclxufVxyXG5cclxuLmZpeGVkLW1lbnUtY29udGFpbmVyIHtcclxuICBtYXgtd2lkdGg6IDEyMDBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMTJweCAyMHB4O1xyXG4gIGdhcDogOHB4O1xyXG59XHJcblxyXG4vKiBUb29sYmFyIFJpZ2h0IFNlY3Rpb24gKi9cclxuLnRvb2xiYXItcmlnaHQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDE2cHg7XHJcbiAgZmxleC1zaHJpbms6IDA7XHJcbn1cclxuXHJcbi8qIEF1dGggQnV0dG9ucyAqL1xyXG4uYXV0aC1idXR0b25zIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAxMnB4O1xyXG4gIGZsZXgtc2hyaW5rOiAwO1xyXG59XHJcblxyXG4uYXV0aC1idXR0b24ge1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG5cclxuICAmLmxvZ2luLWJ0biB7XHJcbiAgICBib3JkZXItY29sb3I6ICMwZDQ3YTE7XHJcbiAgICBjb2xvcjogIzBkNDdhMTtcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMywgNzEsIDE2MSwgMC4wNSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmLnNpZ251cC1idG4ge1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzBkNDdhMSAwJSwgIzE1NjVjMCAxMDAlKTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgb3BhY2l0eTogMC45O1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vKiBQcm9maWxlIGJ1dHRvbiAqL1xyXG4ucHJvZmlsZS1idXR0b24ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDRweDtcclxuICBjb2xvcjogIzMzNDE1NSAhaW1wb3J0YW50O1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgY29sb3I6ICMwZDQ3YTEgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbi5tb2JpbGUtbWVudS1idXR0b24ge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgY29sb3I6ICMzMzM7XHJcbn1cclxuXHJcbi5jdXN0b20tcHJvZmlsZS1tZW51IHtcclxuICBtaW4td2lkdGg6IDIwMHB4O1xyXG59XHJcblxyXG4ucHJvZmlsZS1oZWFkZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAxMnB4IDE2cHg7XHJcbiAgZ2FwOiAxMnB4O1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNmMGY1ZmIgMCUsICNlOGYwZmUgMTAwJSk7XHJcblxyXG4gIG1hdC1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgY29sb3I6ICMwZDQ3YTE7XHJcbiAgfVxyXG59XHJcblxyXG4ucHJvZmlsZS1pbmZvIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG4gIC5ncmVldGluZyB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBjb2xvcjogIzY2NjtcclxuICB9XHJcblxyXG4gIC5uYW1lIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBjb2xvcjogIzMzMztcclxuICB9XHJcbn1cclxuXHJcbi5sb2dvdXQtaXRlbSB7XHJcbiAgY29sb3I6ICNmNDQzMzY7XHJcblxyXG4gIG1hdC1pY29uIHtcclxuICAgIGNvbG9yOiAjZjQ0MzM2O1xyXG4gIH1cclxufVxyXG5cclxuLyogQm9keSBwYWRkaW5nIHRvIGFjY291bnQgZm9yIGZpeGVkIGhlYWRlciAqL1xyXG5ib2R5IHtcclxuICBwYWRkaW5nLXRvcDogMTA0cHg7IC8qIFRvcCBiYXIgKDQwcHgpICsgTWFpbiB0b29sYmFyICg2NHB4KSAqL1xyXG59XHJcblxyXG4vKiBSZXNwb25zaXZlIFN0eWxlcyAqL1xyXG5AbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KSB7XHJcbiAgLnRvb2xiYXItY29udGFpbmVyLFxyXG4gIC50b3AtYmFyLWNvbnRlbnQsXHJcbiAgLmZpeGVkLW1lbnUtY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDAgMTZweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCkge1xyXG4gIC5kZXNrdG9wLW1lbnUge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcblxyXG4gIC5maXhlZC1kZXNrdG9wLW1lbnUge1xyXG4gICAgZGlzcGxheTogbm9uZTsgLyogSGlkZSBmaXhlZCBtZW51IG9uIG1vYmlsZSAqL1xyXG4gIH1cclxuXHJcbiAgLm1vYmlsZS1tZW51LWJ1dHRvbiB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcblxyXG4gIC5hdXRoLWJ1dHRvbnMge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcblxyXG4gIGJvZHkge1xyXG4gICAgcGFkZGluZy10b3A6IDY0cHg7IC8qIE9ubHkgbWFpbiB0b29sYmFyIG9uIG1vYmlsZSAqL1xyXG4gIH1cclxuXHJcbiAgLm1haW4tdG9vbGJhciB7XHJcbiAgICB0b3A6IDA7IC8qIFRvcCBiYXIgaGlkZGVuIG9uIG1vYmlsZSAqL1xyXG4gIH1cclxuXHJcbiAgLnRvcC1iYXIge1xyXG4gICAgZGlzcGxheTogbm9uZTsgLyogSGlkZSB0b3AgYmFyIG9uIG1vYmlsZSAqL1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgLnRvcC1iYXItY29udGVudCB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZ2FwOiA4cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAudG9wLWJhci1saW5rcyB7XHJcbiAgICBnYXA6IDE1cHg7XHJcbiAgfVxyXG5cclxuICAubG9nby10ZXh0IHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICB9XHJcblxyXG4gIC50b29sYmFyLWNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nOiAwIDEycHg7XHJcbiAgICBoZWlnaHQ6IDU2cHg7IC8qIFNtYWxsZXIgaGVpZ2h0IG9uIG1vYmlsZSAqL1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcbiAgLnRvcC1iYXIge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgcGFkZGluZzogNnB4IDA7XHJcbiAgfVxyXG5cclxuICAudG9wLWJhci1jb250ZW50IHtcclxuICAgIHBhZGRpbmc6IDAgMTBweDtcclxuICB9XHJcblxyXG4gIC50b3AtYmFyLWxpbmtzIHtcclxuICAgIGdhcDogMTBweDtcclxuICB9XHJcblxyXG4gIC5sb2dvLXRleHQge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gIH1cclxufVxyXG5cclxuLnByb2ZpbGUtYXZhdGFyIHtcclxuICB3aWR0aDogNDBweDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICMxNTY1YzA7XHJcbn1cclxuXHJcbi5mYWxsYmFjay1hdmF0YXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMGQ0N2ExIDAlLCAjMTU2NWMwIDEwMCUpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG5cclxuLmRlc2t0b3AtbWVudSBidXR0b24uYWN0aXZlLWxpbmsge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTMsIDcxLCAxNjEsIDAuMTApO1xyXG4gIGNvbG9yOiAjMGQ0N2ExO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbi8qIMOiwpTCgMOiwpTCgMOiwpTCgCBNb2Rlcm4gb3ZlcnJpZGVzIChuYXZ5IHBhbGV0dGUpIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgCAqL1xyXG4ubWFpbi10b29sYmFyIHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LC45NykgIWltcG9ydGFudDtcclxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTJweCk7XHJcbiAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTJweCk7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMTMsNzEsMTYxLC4xMCk7XHJcbiAgYm94LXNoYWRvdzogMCA0cHggMjBweCByZ2JhKDEzLDcxLDE2MSwuMDgpO1xyXG59XHJcblxyXG4udG9vbGJhci1jb250YWluZXIsIC5maXhlZC1tZW51LWNvbnRhaW5lciB7IG1heC13aWR0aDogMTI4MHB4OyB9XHJcbi5sb2dvLXRleHQgeyBmb250LXNpemU6IDEuNnJlbTsgbGV0dGVyLXNwYWNpbmc6IC0wLjAzZW07IH1cclxuLmRlc2t0b3AtbWVudSB7IGdhcDogNHB4OyB9XHJcbi5kZXNrdG9wLW1lbnUgYnV0dG9uLCAubmF2LWJ1dHRvbiB7IGJvcmRlci1yYWRpdXM6IDk5OXB4OyBwYWRkaW5nOiAwIDE0cHg7IGhlaWdodDogMzhweDsgfVxyXG4uYXV0aC1idXR0b24ubG9naW4tYnRuIHsgYm9yZGVyLXdpZHRoOiAxLjVweDsgfVxyXG4uYXV0aC1idXR0b24uc2lnbnVwLWJ0biB7IGJveC1zaGFkb3c6IDAgOHB4IDE4cHggcmdiYSgxMyw3MSwxNjEsLjI4KTsgfVxyXG4ucHJvZmlsZS1idXR0b24geyBib3JkZXItcmFkaXVzOiA5OTlweDsgcGFkZGluZzogNnB4IDEwcHg7IH1cclxuLmN1c3RvbS1wcm9maWxlLW1lbnUgeyBib3JkZXItcmFkaXVzOiAxNHB4OyBvdmVyZmxvdzogaGlkZGVuOyB9XHJcbi5wcm9maWxlLWF2YXRhciB7IGJvcmRlci1jb2xvcjogIzE1NjVjMCAhaW1wb3J0YW50OyBib3gtc2hhZG93OiAwIDRweCAxMnB4IHJnYmEoMTMsNzEsMTYxLC4yKTsgfVxyXG5AbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHsgLnRvb2xiYXItY29udGFpbmVyIHsgaGVpZ2h0OiA2MHB4OyB9IC5sb2dvLXRleHQgeyBmb250LXNpemU6IDEuMzJyZW07IH0gfVxyXG5cclxuLyogYWN0aXZlIG5hdiBsaW5rICovXHJcbi5hY3RpdmUtbGluayB7XHJcbiAgY29sb3I6ICMwZDQ3YTEgIWltcG9ydGFudDtcclxuICBmb250LXdlaWdodDogNzAwICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgxMyw3MSwxNjEsLjEwKSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4vKiDDosKUwoDDosKUwoAgVW5kbyB0aGUgbGVnYWN5IHBpbmsgb3ZlcnJpZGUgYmxvY2sgw6LClMKAw6LClMKAICovXHJcbi5wcm9maWxlLWF2YXRhciB7IGJvcmRlci1jb2xvcjogIzE1NjVjMCAhaW1wb3J0YW50OyBib3gtc2hhZG93OiAwIDRweCAxMnB4IHJnYmEoMTMsNzEsMTYxLC4yKSAhaW1wb3J0YW50OyB9XHJcbi5mYWxsYmFjay1hdmF0YXIgeyBiYWNrZ3JvdW5kLWNvbG9yOiAjMGQ0N2ExICFpbXBvcnRhbnQ7IH1cclxuLmRlc2t0b3AtbWVudSBidXR0b24uYWN0aXZlLWxpbmsgeyBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEzLDcxLDE2MSwuMTIpICFpbXBvcnRhbnQ7IGNvbG9yOiAjMGQ0N2ExICFpbXBvcnRhbnQ7IH1cclxuXHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  }));
}
_staticBlock();

/***/ }),

/***/ 7093:
/*!*****************************************************!*\
  !*** ./src/app/services/stokvel/stokvel.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StokvelService: () => (/* binding */ StokvelService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 3855);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ 6052);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 8764);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _cache_cache_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../cache/cache.service */ 869);
var _staticBlock;






class StokvelService {
  constructor(http, handler, cacheService) {
    this.http = http;
    this.handler = handler;
    this.cacheService = cacheService;
    this.apiUrl = `${_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiUrl}stokvels`;
    this.cache = new Map();
    this.httpWithoutInterceptor = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient(handler);
  }
  getStokvelTypes() {
    return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiUrl}public/stokvel-types`);
  }
  getSavingsTerms() {
    return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiUrl}public/savings-terms`);
  }
  createStokvel(stokvelData) {
    return this.http.post(`${this.apiUrl}`, stokvelData).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(() => {
      this.clearAllStokvelCache();
    }));
  }
  getUserStokvels(auth0Id) {
    const cacheKey = `user-stokvels-${auth0Id}`;
    const cached = this.cacheService.get(cacheKey);
    if (cached) {
      return cached;
    }
    const request$ = this.http.get(`${this.apiUrl}/my-stokvels`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(response => response.content));
    this.cacheService.set(cacheKey, request$, 2 * 60 * 1000); // 2 minutes TTL
    return request$;
  }
  // Get with forced refresh (bypass cache)
  getUserStokvelsForceRefresh(auth0Id) {
    const cacheKey = `user-stokvels-${auth0Id}`;
    this.cacheService.delete(cacheKey);
    return this.getUserStokvels(auth0Id);
  }
  // Get full paginated response with caching
  getUserStokvelsPaginated(auth0Id, page = 0, size = 10) {
    const cacheKey = `user-stokvels-paginated-${auth0Id}-${page}-${size}`;
    const cached = this.cacheService.get(cacheKey);
    if (cached) {
      return cached;
    }
    const request$ = this.http.get(`${this.apiUrl}/my-stokvels?page=${page}&size=${size}`);
    this.cacheService.set(cacheKey, request$, 2 * 60 * 1000);
    return request$;
  }
  // Clear cache when stokvel is created/updated
  clearUserStokvelsCache(auth0Id) {
    const keysToDelete = [];
    this.cacheService['cache'].forEach((value, key) => {
      if (key.startsWith(`user-stokvels-${auth0Id}`)) {
        keysToDelete.push(key);
      }
    });
    keysToDelete.forEach(key => this.cacheService.delete(key));
  }
  clearAllStokvelCache() {
    const keysToDelete = [];
    this.cacheService['cache'].forEach((value, key) => {
      if (key.startsWith('user-stokvels-')) {
        keysToDelete.push(key);
      }
    });
    keysToDelete.forEach(key => this.cacheService.delete(key));
  }
  getPublicStokvels(page = 0, size = 10) {
    const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams().set('page', page.toString()).set('size', size.toString());
    // Uses PublicController endpoint (/api/public/) which requires no authentication
    return this.httpWithoutInterceptor.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiUrl}public/get-public-stokvels`, {
      params
    });
  }
  joinStokvel(payload) {
    return this.http.post(`${this.apiUrl}/join-request`, payload);
  }
  getStokvelById(id) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
  /** Fetches a PUBLIC stokvel detail without requiring authentication */
  getPublicStokvelById(id) {
    return this.httpWithoutInterceptor.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiUrl}public/stokvels/${id}`);
  }
  /** Returns IDs of stokvels the current user is a member of (any role) */
  getJoinedStokvelIds() {
    return this.http.get(`${this.apiUrl}/joined`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(stokvels => stokvels.map(s => s.id)));
  }
  getJoinedStokvels() {
    return this.http.get(`${this.apiUrl}/joined`);
  }
  getPendingJoinRequests(stokvelId) {
    return this.http.get(`${this.apiUrl}/${stokvelId}/join-requests/pending`);
  }
  updateJoinRequestStatus(requestId, status, adminNotes) {
    return this.http.put(`${this.apiUrl}/join-requests/${requestId}/status`, {
      status,
      adminNotes
    });
  }
  removeMember(stokvelId, memberId) {
    return this.http.delete(`${this.apiUrl}/${stokvelId}/members/${memberId}`);
  }
  // ── Admin Removal Proposals ──────────────────────────────────────────────
  proposeAdminRemoval(stokvelId, targetMemberId, reason) {
    return this.http.post(`${this.apiUrl}/${stokvelId}/removal-proposals`, {
      targetMemberId,
      reason
    });
  }
  getPendingRemovalProposals(stokvelId) {
    return this.http.get(`${this.apiUrl}/${stokvelId}/removal-proposals/pending`);
  }
  approveRemovalProposal(stokvelId, proposalId, notes) {
    return this.http.put(`${this.apiUrl}/${stokvelId}/removal-proposals/${proposalId}/approve`, {
      notes
    });
  }
  rejectRemovalProposal(stokvelId, proposalId, notes) {
    return this.http.put(`${this.apiUrl}/${stokvelId}/removal-proposals/${proposalId}/reject`, {
      notes
    });
  }
  cancelRemovalProposal(stokvelId, proposalId) {
    return this.http.delete(`${this.apiUrl}/${stokvelId}/removal-proposals/${proposalId}`);
  }
  leaveStokvel(stokvelId) {
    return this.http.post(`${this.apiUrl}/${stokvelId}/leave`, {});
  }
  getAdminStokvelIds() {
    return this.http.get(`${this.apiUrl}/admin/stokvel-ids`);
  }
  // Dashboard endpoints
  getDashboardSummary() {
    return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiUrl}dashboard/summary`);
  }
  getRecentActivities(limit = 10) {
    const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams().set('limit', limit.toString());
    return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiUrl}dashboard/recent-activities`, {
      params
    });
  }
  getPortfolioDistribution() {
    return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiUrl}dashboard/portfolio-distribution`);
  }
  getMyStokvelsDetailed() {
    return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiUrl}dashboard/my-stokvels-detailed`);
  }
  static #_ = _staticBlock = () => (this.ɵfac = function StokvelService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || StokvelService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpBackend), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_cache_cache_service__WEBPACK_IMPORTED_MODULE_5__.CacheService));
  }, this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
    token: StokvelService,
    factory: StokvelService.ɵfac,
    providedIn: 'root'
  }));
}
_staticBlock();

/***/ }),

/***/ 8556:
/*!*****************************************************************!*\
  !*** ./src/app/shared/mobile-header/mobile-header.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MobileHeaderComponent: () => (/* binding */ MobileHeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 4487);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ 3840);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/menu */ 1034);
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/badge */ 6256);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/list */ 4102);
/* harmony import */ var _components_notifications_notification_bell_notification_bell__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/notifications/notification-bell/notification-bell */ 583);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2481);
/* harmony import */ var _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @auth0/auth0-angular */ 7989);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 5422);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ 9885);
var _staticBlock;
















function MobileHeaderComponent_ng_container_9_ng_container_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const user_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("src", user_r3.picture, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeUrl"])("alt", user_r3.name);
  }
}
function MobileHeaderComponent_ng_container_9_ng_container_3_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const user_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 1, (user_r3.name || user_r3.nickname) == null ? null : (user_r3.name || user_r3.nickname).charAt(0)), " ");
  }
}
function MobileHeaderComponent_ng_container_9_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, MobileHeaderComponent_ng_container_9_ng_container_3_ng_container_1_Template, 2, 2, "ng-container", 10)(2, MobileHeaderComponent_ng_container_9_ng_container_3_ng_template_2_Template, 3, 3, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const user_r3 = ctx.ngIf;
    const avatarIcon_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", user_r3.picture)("ngIfElse", avatarIcon_r4);
  }
}
function MobileHeaderComponent_ng_container_9_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 19)(2, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](6, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const user_r5 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](user_r5.name || user_r5.nickname || "User");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](user_r5.email);
  }
}
function MobileHeaderComponent_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "app-notification-bell");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](3, MobileHeaderComponent_ng_container_9_ng_container_3_Template, 4, 2, "ng-container", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "mat-menu", 13, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](7, MobileHeaderComponent_ng_container_9_ng_container_7_Template, 7, 2, "ng-container", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](8, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function MobileHeaderComponent_ng_container_9_Template_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r2);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r5.navigateTo("/dashboard"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](11, "dashboard");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](12, " My Dashboard ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function MobileHeaderComponent_ng_container_9_Template_button_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r2);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r5.navigateTo("/create-stokvel"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](15, "add_circle");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](16, " Create Stokvel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](17, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function MobileHeaderComponent_ng_container_9_Template_button_click_17_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r2);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r5.navigateTo("/stokvels"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](18, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](19, "groups");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](20, " Browse Stokvels ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](21, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function MobileHeaderComponent_ng_container_9_Template_button_click_21_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r2);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r5.navigateTo("/refer-earn"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](22, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](23, "card_giftcard");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](24, " Refer & Earn ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](25, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](26, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function MobileHeaderComponent_ng_container_9_Template_button_click_26_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r2);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r5.logout());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](27, "mat-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](28, "logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](29, " Sign Out ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const profileMenu_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](6);
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("matMenuTriggerFor", profileMenu_r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](4, 3, ctx_r5.user$));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](8, 5, ctx_r5.user$));
  }
}
function MobileHeaderComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function MobileHeaderComponent_ng_template_11_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r8);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r5.login());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Sign In ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
class MobileHeaderComponent {
  constructor(auth, router) {
    this.auth = auth;
    this.router = router;
    this.isAuthenticated$ = auth.isAuthenticated$;
    this.user$ = auth.user$;
  }
  login() {
    this.auth.loginWithRedirect({
      appState: {
        target: this.router.url
      }
    });
  }
  logout() {
    this.auth.logout({
      logoutParams: {
        returnTo: window.location.origin
      }
    });
  }
  navigateTo(route) {
    this.router.navigate([route]);
  }
  static #_ = _staticBlock = () => (this.ɵfac = function MobileHeaderComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || MobileHeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_10__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.Router));
  }, this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
    type: MobileHeaderComponent,
    selectors: [["app-mobile-header"]],
    decls: 13,
    vars: 4,
    consts: [["loginBtn", ""], ["profileMenu", "matMenu"], ["avatarIcon", ""], [1, "mobile-header"], [1, "status-bar-spacer"], [1, "header-row"], [1, "logo-btn", 3, "click"], [1, "logo-icon"], [1, "logo-text"], [1, "header-actions"], [4, "ngIf", "ngIfElse"], ["mat-icon-button", "", "aria-label", "Profile menu", 1, "profile-menu-btn", 3, "matMenuTriggerFor"], [4, "ngIf"], [1, "mobile-profile-menu"], ["mat-menu-item", "", 3, "click"], ["mat-menu-item", "", 1, "logout-btn", 3, "click"], ["color", "warn"], [1, "user-avatar", 3, "src", "alt"], [1, "avatar-initials"], [1, "menu-profile-header"], [1, "menu-user-name"], [1, "menu-user-email"], ["mat-flat-button", "", "color", "primary", 1, "login-btn", 3, "click"]],
    template: function MobileHeaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "header", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "div", 5)(3, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function MobileHeaderComponent_Template_button_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx.navigateTo("/home"));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5, "\u20BF");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](7, "eStokvel");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](9, MobileHeaderComponent_ng_container_9_Template, 30, 7, "ng-container", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](10, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](11, MobileHeaderComponent_ng_template_11_Template, 2, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        const loginBtn_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](10, 2, ctx.isAuthenticated$))("ngIfElse", loginBtn_r9);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatIconButton, _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__.MatMenuModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__.MatMenuTrigger, _angular_material_badge__WEBPACK_IMPORTED_MODULE_5__.MatBadgeModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__.MatDividerModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__.MatDivider, _components_notifications_notification_bell_notification_bell__WEBPACK_IMPORTED_MODULE_7__.NotificationBellComponent, _angular_common__WEBPACK_IMPORTED_MODULE_0__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_0__.UpperCasePipe],
    styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n\n.mobile-header[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 999;\n  background: linear-gradient(135deg, #061d4a 0%, #0d47a1 100%);\n  box-shadow: 0 2px 16px rgba(6, 29, 74, 0.4);\n}\n\n.status-bar-spacer[_ngcontent-%COMP%] {\n  height: env(safe-area-inset-top);\n  height: constant(safe-area-inset-top);\n}\n\n.header-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 16px;\n  height: 56px;\n  gap: 12px;\n}\n\n.logo-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  padding: 0;\n}\n\n.logo-icon[_ngcontent-%COMP%] {\n  font-size: 22px;\n  color: #f59e0b;\n}\n\n.logo-text[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 800;\n  color: #ffffff;\n  letter-spacing: -0.02em;\n}\n\n.header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n\n.profile-menu-btn[_ngcontent-%COMP%] {\n  color: white;\n  width: 40px;\n  height: 40px;\n}\n\n.user-avatar[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  object-fit: cover;\n  border: 2px solid rgba(255, 255, 255, 0.4);\n}\n\n.avatar-initials[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.2);\n  border: 2px solid rgba(255, 255, 255, 0.4);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 14px;\n  font-weight: 700;\n  color: white;\n}\n\n.login-btn[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 700;\n  height: 36px;\n  border-radius: 18px;\n}\n\n.menu-profile-header[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n\n.menu-user-name[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 700;\n  color: #1a202c;\n}\n\n.menu-user-email[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #718096;\n}\n\n.logout-btn[_ngcontent-%COMP%] {\n  color: #dc2626;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL21vYmlsZS1oZWFkZXIvbW9iaWxlLWhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0EsNkRBQUE7RUFDQSwyQ0FBQTtBQUNGOztBQUVBO0VBRUUsZ0NBQUE7RUFDQSxxQ0FBQTtBQUFGOztBQUdBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7QUFBRjs7QUFHQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtBQUFGOztBQUdBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtBQUFGOztBQUdBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtBQUFGOztBQUdBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBQUY7O0FBR0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSwwQ0FBQTtBQUFGOztBQUdBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG9DQUFBO0VBQ0EsMENBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQUFGOztBQUdBO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxRQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQUFGOztBQUdBO0VBQ0UsY0FBQTtBQUFGIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4ubW9iaWxlLWhlYWRlciB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHotaW5kZXg6IDk5OTtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMDYxZDRhIDAlLCAjMGQ0N2ExIDEwMCUpO1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDE2cHggcmdiYSg2LCAyOSwgNzQsIDAuNCk7XHJcbn1cclxuXHJcbi5zdGF0dXMtYmFyLXNwYWNlciB7XHJcbiAgLy8gRmlsbCB0aGUgaU9TL0FuZHJvaWQgc3RhdHVzIGJhciBoZWlnaHRcclxuICBoZWlnaHQ6IGVudihzYWZlLWFyZWEtaW5zZXQtdG9wKTtcclxuICBoZWlnaHQ6IGNvbnN0YW50KHNhZmUtYXJlYS1pbnNldC10b3ApO1xyXG59XHJcblxyXG4uaGVhZGVyLXJvdyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBwYWRkaW5nOiAwIDE2cHg7XHJcbiAgaGVpZ2h0OiA1NnB4O1xyXG4gIGdhcDogMTJweDtcclxufVxyXG5cclxuLmxvZ28tYnRuIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiA4cHg7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4ubG9nby1pY29uIHtcclxuICBmb250LXNpemU6IDIycHg7XHJcbiAgY29sb3I6ICNmNTllMGI7XHJcbn1cclxuXHJcbi5sb2dvLXRleHQge1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBmb250LXdlaWdodDogODAwO1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIGxldHRlci1zcGFjaW5nOiAtMC4wMmVtO1xyXG59XHJcblxyXG4uaGVhZGVyLWFjdGlvbnMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDRweDtcclxufVxyXG5cclxuLnByb2ZpbGUtbWVudS1idG4ge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB3aWR0aDogNDBweDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbn1cclxuXHJcbi51c2VyLWF2YXRhciB7XHJcbiAgd2lkdGg6IDMycHg7XHJcbiAgaGVpZ2h0OiAzMnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCk7XHJcbn1cclxuXHJcbi5hdmF0YXItaW5pdGlhbHMge1xyXG4gIHdpZHRoOiAzMnB4O1xyXG4gIGhlaWdodDogMzJweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4ubG9naW4tYnRuIHtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBoZWlnaHQ6IDM2cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMThweDtcclxufVxyXG5cclxuLm1lbnUtcHJvZmlsZS1oZWFkZXIge1xyXG4gIHBhZGRpbmc6IDEycHggMTZweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZ2FwOiAycHg7XHJcbn1cclxuXHJcbi5tZW51LXVzZXItbmFtZSB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgY29sb3I6ICMxYTIwMmM7XHJcbn1cclxuXHJcbi5tZW51LXVzZXItZW1haWwge1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBjb2xvcjogIzcxODA5NjtcclxufVxyXG5cclxuLmxvZ291dC1idG4ge1xyXG4gIGNvbG9yOiAjZGMyNjI2O1xyXG59XHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  }));
}
_staticBlock();

/***/ }),

/***/ 9302:
/*!***********************************************************!*\
  !*** ./src/app/shared/mobile-nav/mobile-nav.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MobileNavComponent: () => (/* binding */ MobileNavComponent)
/* harmony export */ });
/* harmony import */ var C_Projects_thami_estokvel_ui_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 4487);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ 3840);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/core */ 6362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2481);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 5422);
/* harmony import */ var _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @auth0/auth0-angular */ 7989);
/* harmony import */ var _services_mobile_platform_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/mobile-platform.service */ 2688);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/core */ 4157);

var _staticBlock;











function MobileNavComponent_ng_container_1_button_1_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "span", 9);
  }
}
function MobileNavComponent_ng_container_1_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function MobileNavComponent_ng_container_1_button_1_Template_button_click_0_listener() {
      const tab_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r2.navigate(tab_r2, true));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 5)(2, "mat-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, MobileNavComponent_ng_container_1_button_1_span_4_Template, 1, 0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const tab_r2 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("active", ctx_r2.isActive(tab_r2.route));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matRippleCentered", true)("matRippleUnbounded", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("aria-label", tab_r2.label)("aria-current", ctx_r2.isActive(tab_r2.route) ? "page" : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r2.isActive(tab_r2.route) ? tab_r2.activeIcon : tab_r2.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.isActive(tab_r2.route));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](tab_r2.label);
  }
}
function MobileNavComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, MobileNavComponent_ng_container_1_button_1_Template, 7, 9, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r2.tabs);
  }
}
function MobileNavComponent_ng_template_3_button_0_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "span", 9);
  }
}
function MobileNavComponent_ng_template_3_button_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function MobileNavComponent_ng_template_3_button_0_Template_button_click_0_listener() {
      const tab_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r2.navigate(tab_r5, false));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 5)(2, "mat-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, MobileNavComponent_ng_template_3_button_0_span_4_Template, 1, 0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const tab_r5 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("active", ctx_r2.isActive(tab_r5.route))("auth-required", tab_r5.requiresAuth);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matRippleCentered", true)("matRippleUnbounded", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("aria-label", tab_r5.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r2.isActive(tab_r5.route) ? tab_r5.activeIcon : tab_r5.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.isActive(tab_r5.route));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](tab_r5.label);
  }
}
function MobileNavComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, MobileNavComponent_ng_template_3_button_0_Template, 7, 10, "button", 10);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r2.tabs);
  }
}
class MobileNavComponent {
  constructor(router, auth, platformService) {
    this.router = router;
    this.auth = auth;
    this.platformService = platformService;
    this.tabs = [{
      label: 'Home',
      icon: 'home_outline',
      activeIcon: 'home',
      route: '/home'
    }, {
      label: 'Stokvels',
      icon: 'groups_outline',
      activeIcon: 'groups',
      route: '/stokvels'
    }, {
      label: 'Wallet',
      icon: 'account_balance_wallet',
      activeIcon: 'account_balance_wallet',
      route: '/wallet',
      requiresAuth: true
    }, {
      label: 'Dashboard',
      icon: 'dashboard_outline',
      activeIcon: 'dashboard',
      route: '/dashboard',
      requiresAuth: true
    }, {
      label: 'Profile',
      icon: 'person_outline',
      activeIcon: 'person',
      route: '/profile',
      requiresAuth: true
    }];
    this.isAuthenticated$ = auth.isAuthenticated$;
  }
  ngOnInit() {}
  isActive(route) {
    const currentUrl = this.router.url.split('?')[0];
    if (route === '/home') {
      return currentUrl === '/home' || currentUrl === '/';
    }
    return currentUrl === route || currentUrl.startsWith(route + '/');
  }
  navigate(tab, isAuthenticated) {
    var _this = this;
    return (0,C_Projects_thami_estokvel_ui_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this.platformService.triggerHaptic('light');
      if (tab.requiresAuth && !isAuthenticated) {
        _this.auth.loginWithRedirect({
          appState: {
            target: tab.route
          }
        });
        return;
      }
      _this.router.navigate([tab.route]);
    })();
  }
  static #_ = _staticBlock = () => (this.ɵfac = function MobileNavComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || MobileNavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_8__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_mobile_platform_service__WEBPACK_IMPORTED_MODULE_9__.MobilePlatformService));
  }, this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: MobileNavComponent,
    selectors: [["app-mobile-nav"]],
    decls: 5,
    vars: 4,
    consts: [["unauthNav", ""], ["role", "navigation", "aria-label", "Main navigation", 1, "mobile-bottom-nav"], [4, "ngIf", "ngIfElse"], ["class", "nav-tab", "matRipple", "", 3, "active", "matRippleCentered", "matRippleUnbounded", "click", 4, "ngFor", "ngForOf"], ["matRipple", "", 1, "nav-tab", 3, "click", "matRippleCentered", "matRippleUnbounded"], [1, "tab-icon-wrap"], [1, "tab-icon"], ["class", "active-dot", 4, "ngIf"], [1, "tab-label"], [1, "active-dot"], ["class", "nav-tab", "matRipple", "", 3, "active", "auth-required", "matRippleCentered", "matRippleUnbounded", "click", 4, "ngFor", "ngForOf"]],
    template: function MobileNavComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, MobileNavComponent_ng_container_1_Template, 2, 1, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, MobileNavComponent_ng_template_3_Template, 1, 1, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        const unauthNav_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 2, ctx.isAuthenticated$))("ngIfElse", unauthNav_r6);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIcon, _angular_material_core__WEBPACK_IMPORTED_MODULE_4__.MatRippleModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_10__.MatRipple, _angular_common__WEBPACK_IMPORTED_MODULE_2__.AsyncPipe],
    styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n\n.mobile-bottom-nav[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 1000;\n  display: flex;\n  align-items: stretch;\n  background: rgba(255, 255, 255, 0.97);\n  backdrop-filter: blur(20px);\n  -webkit-backdrop-filter: blur(20px);\n  border-top: 1px solid rgba(0, 0, 0, 0.08);\n  box-shadow: 0 -4px 24px rgba(0, 0, 0, 0.08);\n  padding-bottom: env(safe-area-inset-bottom);\n  padding-bottom: constant(safe-area-inset-bottom);\n  height: calc(64px + env(safe-area-inset-bottom));\n}\n\n.nav-tab[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 4px;\n  padding: 8px 4px;\n  border: none;\n  background: transparent;\n  cursor: pointer;\n  color: #94a3b8;\n  transition: color 0.2s ease;\n  position: relative;\n  overflow: hidden;\n  border-radius: 0;\n  min-height: 64px;\n}\n.nav-tab.active[_ngcontent-%COMP%] {\n  color: #0d47a1;\n}\n.nav-tab.active[_ngcontent-%COMP%]   .tab-icon[_ngcontent-%COMP%] {\n  transform: scale(1.1);\n}\n.nav-tab.auth-required[_ngcontent-%COMP%]:not(.active) {\n  opacity: 0.6;\n}\n.nav-tab[_ngcontent-%COMP%]:hover {\n  color: #1565c0;\n}\n.nav-tab[_ngcontent-%COMP%]:nth-child(3)   .tab-icon[_ngcontent-%COMP%] {\n  color: #d97706;\n}\n.nav-tab[_ngcontent-%COMP%]:nth-child(3).active   .tab-icon[_ngcontent-%COMP%] {\n  color: #d97706;\n}\n\n.tab-icon-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.tab-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n  width: 24px;\n  height: 24px;\n  transition: transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);\n}\n\n.active-dot[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: -4px;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 4px;\n  height: 4px;\n  background: #0d47a1;\n  border-radius: 50%;\n}\n\n.tab-label[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 600;\n  letter-spacing: 0.02em;\n  line-height: 1;\n}\n\n.nav-tab[_ngcontent-%COMP%]:nth-child(3)   .tab-icon-wrap[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  inset: -8px;\n  border-radius: 16px;\n  background: linear-gradient(135deg, rgba(217, 119, 6, 0.1), rgba(245, 158, 11, 0.15));\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL21vYmlsZS1uYXYvbW9iaWxlLW5hdi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0VBQ0EscUNBQUE7RUFDQSwyQkFBQTtFQUNBLG1DQUFBO0VBQ0EseUNBQUE7RUFDQSwyQ0FBQTtFQUVBLDJDQUFBO0VBQ0EsZ0RBQUE7RUFDQSxnREFBQTtBQUFGOztBQUdBO0VBQ0UsT0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxRQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFBRjtBQUVFO0VBQ0UsY0FBQTtBQUFKO0FBRUk7RUFDRSxxQkFBQTtBQUFOO0FBSUU7RUFDRSxZQUFBO0FBRko7QUFLRTtFQUNFLGNBQUE7QUFISjtBQVFJO0VBQ0UsY0FBQTtBQU5OO0FBU0k7RUFDRSxjQUFBO0FBUE47O0FBWUE7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBVEY7O0FBWUE7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSw0REFBQTtBQVRGOztBQVlBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLDJCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBVEY7O0FBWUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7QUFURjs7QUFjRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLHFGQUFBO0FBWEoiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5tb2JpbGUtYm90dG9tLW5hdiB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHotaW5kZXg6IDEwMDA7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOTcpO1xyXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigyMHB4KTtcclxuICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cigyMHB4KTtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjA4KTtcclxuICBib3gtc2hhZG93OiAwIC00cHggMjRweCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xyXG4gIC8vIFNhZmUgYXJlYSBmb3IgaU9TIGhvbWUgaW5kaWNhdG9yXHJcbiAgcGFkZGluZy1ib3R0b206IGVudihzYWZlLWFyZWEtaW5zZXQtYm90dG9tKTtcclxuICBwYWRkaW5nLWJvdHRvbTogY29uc3RhbnQoc2FmZS1hcmVhLWluc2V0LWJvdHRvbSk7XHJcbiAgaGVpZ2h0OiBjYWxjKDY0cHggKyBlbnYoc2FmZS1hcmVhLWluc2V0LWJvdHRvbSkpO1xyXG59XHJcblxyXG4ubmF2LXRhYiB7XHJcbiAgZmxleDogMTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBnYXA6IDRweDtcclxuICBwYWRkaW5nOiA4cHggNHB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgY29sb3I6ICM5NGEzYjg7XHJcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4ycyBlYXNlO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgbWluLWhlaWdodDogNjRweDtcclxuXHJcbiAgJi5hY3RpdmUge1xyXG4gICAgY29sb3I6ICMwZDQ3YTE7XHJcblxyXG4gICAgLnRhYi1pY29uIHtcclxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJi5hdXRoLXJlcXVpcmVkOm5vdCguYWN0aXZlKSB7XHJcbiAgICBvcGFjaXR5OiAwLjY7XHJcbiAgfVxyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjMTU2NWMwO1xyXG4gIH1cclxuXHJcbiAgLy8gQ2VudGVyIHRhYiAoQ3JlYXRlKSBzdHlsaW5nXHJcbiAgJjpudGgtY2hpbGQoMykge1xyXG4gICAgLnRhYi1pY29uIHtcclxuICAgICAgY29sb3I6ICNkOTc3MDY7XHJcbiAgICB9XHJcblxyXG4gICAgJi5hY3RpdmUgLnRhYi1pY29uIHtcclxuICAgICAgY29sb3I6ICNkOTc3MDY7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4udGFiLWljb24td3JhcCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLnRhYi1pY29uIHtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgd2lkdGg6IDI0cHg7XHJcbiAgaGVpZ2h0OiAyNHB4O1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGN1YmljLWJlemllcigwLjM0LCAxLjU2LCAwLjY0LCAxKTtcclxufVxyXG5cclxuLmFjdGl2ZS1kb3Qge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IC00cHg7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuICB3aWR0aDogNHB4O1xyXG4gIGhlaWdodDogNHB4O1xyXG4gIGJhY2tncm91bmQ6ICMwZDQ3YTE7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcblxyXG4udGFiLWxhYmVsIHtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xyXG4gIGxpbmUtaGVpZ2h0OiAxO1xyXG59XHJcblxyXG4vLyBDZW50ZXIgRkFCLXN0eWxlIGNyZWF0ZSBidXR0b25cclxuLm5hdi10YWI6bnRoLWNoaWxkKDMpIHtcclxuICAudGFiLWljb24td3JhcDo6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgaW5zZXQ6IC04cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiYSgyMTcsIDExOSwgNiwgMC4xKSwgcmdiYSgyNDUsIDE1OCwgMTEsIDAuMTUpKTtcclxuICB9XHJcbn1cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  }));
}
_staticBlock();

/***/ }),

/***/ 9439:
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MaterialModule: () => (/* binding */ MaterialModule)
/* harmony export */ });
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/toolbar */ 9552);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ 3840);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/sidenav */ 7049);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/list */ 943);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ 3777);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/table */ 78);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/menu */ 1034);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ 5759);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/progress-bar */ 6354);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ 7760);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/paginator */ 4624);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/tooltip */ 5073);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/expansion */ 9322);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/select */ 6060);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/core */ 4277);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/datepicker */ 1977);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/checkbox */ 7024);
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/stepper */ 6622);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/input */ 5541);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/progress-spinner */ 1134);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/radio */ 3804);
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/badge */ 6256);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/tabs */ 8223);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/chips */ 2772);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/core */ 2481);
var _staticBlock;



























class MaterialModule {
  static #_ = _staticBlock = () => (this.ɵfac = function MaterialModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || MaterialModule)();
  }, this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵdefineNgModule"]({
    type: MaterialModule
  }), this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵdefineInjector"]({
    imports: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatFormFieldModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_20__.MatInputModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_15__.MatSelectModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__.MatIconModule, _angular_material_badge__WEBPACK_IMPORTED_MODULE_23__.MatBadgeModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_1__.MatButtonModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_18__.MatCheckboxModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_0__.MatToolbarModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__.MatSidenavModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_4__.MatListModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatTableModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__.MatMenuModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_9__.MatProgressBarModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialogModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__.MatSnackBarModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__.MatPaginatorModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_22__.MatRadioModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__.MatTooltipModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_14__.MatExpansionModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_16__.MatOptionModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__.MatDatepickerModule, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_19__.MatStepperModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__.MatProgressSpinnerModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_24__.MatTabsModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_25__.MatChipsModule]
  }));
}
_staticBlock();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵsetNgModuleScope"](MaterialModule, {
    exports: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatFormFieldModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_20__.MatInputModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_15__.MatSelectModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__.MatIconModule, _angular_material_badge__WEBPACK_IMPORTED_MODULE_23__.MatBadgeModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_1__.MatButtonModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_18__.MatCheckboxModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_0__.MatToolbarModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__.MatSidenavModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_4__.MatListModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatTableModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__.MatMenuModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_9__.MatProgressBarModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialogModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__.MatSnackBarModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__.MatPaginatorModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_22__.MatRadioModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__.MatTooltipModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_14__.MatExpansionModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_16__.MatOptionModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__.MatDatepickerModule, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_19__.MatStepperModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__.MatProgressSpinnerModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_24__.MatTabsModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_25__.MatChipsModule]
  });
})();

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4429)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map