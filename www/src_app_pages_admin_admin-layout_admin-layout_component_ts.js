"use strict";
(self["webpackChunkikage_ui"] = self["webpackChunkikage_ui"] || []).push([["src_app_pages_admin_admin-layout_admin-layout_component_ts"],{

/***/ 4801:
/*!********************************************************************!*\
  !*** ./src/app/pages/admin/admin-layout/admin-layout.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminLayoutComponent: () => (/* binding */ AdminLayoutComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 4487);
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../material.module */ 9439);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2481);
/* harmony import */ var _services_admin_admin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/admin/admin.service */ 4545);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 5422);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 3840);
var _staticBlock;








function AdminLayoutComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 12)(1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 14)(4, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Super Admin");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.initials);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.user.displayName);
  }
}
class AdminLayoutComponent {
  constructor(adminService, router) {
    this.adminService = adminService;
    this.router = router;
    this.user = null;
  }
  ngOnInit() {
    this.user = this.adminService.currentUser;
  }
  get initials() {
    if (!this.user?.displayName) return 'SA';
    return this.user.displayName.split(' ').map(p => p[0]).join('').substring(0, 2).toUpperCase();
  }
  logout() {
    this.adminService.logout();
    this.router.navigate(['/admin/login']);
  }
  static #_ = _staticBlock = () => (this.ɵfac = function AdminLayoutComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || AdminLayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_admin_admin_service__WEBPACK_IMPORTED_MODULE_4__.AdminService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router));
  }, this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: AdminLayoutComponent,
    selectors: [["app-admin-layout"]],
    decls: 35,
    vars: 1,
    consts: [[1, "admin-shell"], [1, "admin-sidebar"], [1, "sidebar-brand"], [1, "brand-icon"], ["class", "admin-user-chip", 4, "ngIf"], [1, "sidebar-nav"], ["routerLink", "/admin/dashboard", "routerLinkActive", "active", 1, "nav-item"], ["routerLink", "/admin/stokvels", "routerLinkActive", "active", 1, "nav-item"], ["routerLink", "/admin/users", "routerLinkActive", "active", 1, "nav-item"], [1, "sidebar-footer"], [1, "logout-btn", 3, "click"], [1, "admin-main"], [1, "admin-user-chip"], [1, "admin-avatar"], [1, "admin-user-info"], [1, "admin-name"], [1, "admin-role"]],
    template: function AdminLayoutComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "aside", 1)(2, "div", 2)(3, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "shield");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "iKage");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Backoffice");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, AdminLayoutComponent_div_10_Template, 8, 2, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "nav", 5)(12, "a", 6)(13, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "a", 7)(18, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "account_balance");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "Stokvels");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "a", 8)(23, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "people");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "Users");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 9)(28, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AdminLayoutComponent_Template_button_click_28_listener() {
          return ctx.logout();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, "logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, "Sign Out");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "main", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](34, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.user);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkActive, _material_module__WEBPACK_IMPORTED_MODULE_2__.MaterialModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIcon],
    styles: ["@charset \"UTF-8\";\n.admin-shell[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 100vh;\n  background: #f0f2f5;\n}\n\n\n\n.admin-sidebar[_ngcontent-%COMP%] {\n  width: 240px;\n  min-height: 100vh;\n  background: #1a1a2e;\n  color: #fff;\n  display: flex;\n  flex-direction: column;\n  position: fixed;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  z-index: 100;\n}\n\n.sidebar-brand[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 24px 20px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n  font-size: 14px;\n  line-height: 1.4;\n}\n.sidebar-brand[_ngcontent-%COMP%]   .brand-icon[_ngcontent-%COMP%] {\n  font-size: 28px;\n  height: 28px;\n  width: 28px;\n  color: #4ade80;\n}\n.sidebar-brand[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n\n.admin-user-chip[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 16px 20px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n}\n\n.admin-avatar[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  background: #16213e;\n  color: #4ade80;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 13px;\n  font-weight: 700;\n  flex-shrink: 0;\n}\n\n.admin-user-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n}\n\n.admin-name[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.admin-role[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #4ade80;\n}\n\n.sidebar-nav[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 16px 0;\n}\n\n.nav-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px 20px;\n  color: rgba(255, 255, 255, 0.7);\n  text-decoration: none;\n  font-size: 14px;\n  border-left: 3px solid transparent;\n  transition: all 0.15s;\n}\n.nav-item[_ngcontent-%COMP%]:hover {\n  color: #fff;\n  background: rgba(255, 255, 255, 0.06);\n}\n.nav-item.active[_ngcontent-%COMP%] {\n  color: #4ade80;\n  border-left-color: #4ade80;\n  background: rgba(74, 222, 128, 0.08);\n}\n.nav-item[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  height: 20px;\n  width: 20px;\n}\n\n.sidebar-footer[_ngcontent-%COMP%] {\n  padding: 16px 20px;\n  border-top: 1px solid rgba(255, 255, 255, 0.1);\n}\n\n.logout-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  background: none;\n  border: none;\n  color: rgba(255, 255, 255, 0.6);\n  font-size: 14px;\n  cursor: pointer;\n  padding: 8px 0;\n  width: 100%;\n  transition: color 0.15s;\n}\n.logout-btn[_ngcontent-%COMP%]:hover {\n  color: #ff6b6b;\n}\n.logout-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  height: 20px;\n  width: 20px;\n}\n\n\n\n.admin-main[_ngcontent-%COMP%] {\n  margin-left: 240px;\n  flex: 1;\n  padding: 0;\n  min-height: 100vh;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvYWRtaW4vYWRtaW4tbGF5b3V0L2FkbWluLWxheW91dC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBQ1o7RUFBZSxhQUFBO0VBQWUsaUJBQUE7RUFBbUIsbUJBQUE7QUFJckQ7O0FBRkksa0JBQUE7QUFDQTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxNQUFBO0VBQVEsT0FBQTtFQUFTLFNBQUE7RUFDakIsWUFBQTtBQU9OOztBQUpJO0VBQ0UsYUFBQTtFQUFlLG1CQUFBO0VBQXFCLFNBQUE7RUFDcEMsa0JBQUE7RUFDQSxpREFBQTtFQUNBLGVBQUE7RUFBaUIsZ0JBQUE7QUFVdkI7QUFUTTtFQUFjLGVBQUE7RUFBaUIsWUFBQTtFQUFjLFdBQUE7RUFBYSxjQUFBO0FBZWhFO0FBZE07RUFBUyxlQUFBO0FBaUJmOztBQWRJO0VBQ0UsYUFBQTtFQUFlLG1CQUFBO0VBQXFCLFNBQUE7RUFDcEMsa0JBQUE7RUFDQSxpREFBQTtBQW1CTjs7QUFoQkk7RUFDRSxXQUFBO0VBQWEsWUFBQTtFQUFjLGtCQUFBO0VBQzNCLG1CQUFBO0VBQXFCLGNBQUE7RUFDckIsYUFBQTtFQUFlLG1CQUFBO0VBQXFCLHVCQUFBO0VBQ3BDLGVBQUE7RUFBaUIsZ0JBQUE7RUFBa0IsY0FBQTtBQTBCekM7O0FBdkJJO0VBQW1CLGFBQUE7RUFBZSxzQkFBQTtFQUF3QixnQkFBQTtBQTZCOUQ7O0FBNUJJO0VBQWMsZUFBQTtFQUFpQixnQkFBQTtFQUFrQixtQkFBQTtFQUFxQixnQkFBQTtFQUFrQix1QkFBQTtBQW9DNUY7O0FBbkNJO0VBQWMsZUFBQTtFQUFpQixjQUFBO0FBd0NuQzs7QUF0Q0k7RUFDRSxPQUFBO0VBQ0EsZUFBQTtBQXlDTjs7QUF0Q0k7RUFDRSxhQUFBO0VBQWUsbUJBQUE7RUFBcUIsU0FBQTtFQUNwQyxrQkFBQTtFQUNBLCtCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0NBQUE7RUFDQSxxQkFBQTtBQTJDTjtBQXpDTTtFQUFVLFdBQUE7RUFBYSxxQ0FBQTtBQTZDN0I7QUEzQ007RUFDRSxjQUFBO0VBQ0EsMEJBQUE7RUFDQSxvQ0FBQTtBQTZDUjtBQTFDTTtFQUFXLGVBQUE7RUFBaUIsWUFBQTtFQUFjLFdBQUE7QUErQ2hEOztBQTVDSTtFQUNFLGtCQUFBO0VBQ0EsOENBQUE7QUErQ047O0FBNUNJO0VBQ0UsYUFBQTtFQUFlLG1CQUFBO0VBQXFCLFNBQUE7RUFDcEMsZ0JBQUE7RUFBa0IsWUFBQTtFQUNsQiwrQkFBQTtFQUNBLGVBQUE7RUFBaUIsZUFBQTtFQUNqQixjQUFBO0VBQWdCLFdBQUE7RUFDaEIsdUJBQUE7QUFvRE47QUFsRE07RUFBVSxjQUFBO0FBcURoQjtBQXBETTtFQUFXLGVBQUE7RUFBaUIsWUFBQTtFQUFjLFdBQUE7QUF5RGhEOztBQXRESSxlQUFBO0FBQ0E7RUFDRSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7QUF5RE4iLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAuYWRtaW4tc2hlbGwgeyBkaXNwbGF5OiBmbGV4OyBtaW4taGVpZ2h0OiAxMDB2aDsgYmFja2dyb3VuZDogI2YwZjJmNTsgfVxuXG4gICAgLyogw6LClMKAw6LClMKAIFNpZGViYXIgw6LClMKAw6LClMKAICovXG4gICAgLmFkbWluLXNpZGViYXIge1xuICAgICAgd2lkdGg6IDI0MHB4O1xuICAgICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgICBiYWNrZ3JvdW5kOiAjMWExYTJlO1xuICAgICAgY29sb3I6ICNmZmY7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgIHRvcDogMDsgbGVmdDogMDsgYm90dG9tOiAwO1xuICAgICAgei1pbmRleDogMTAwO1xuICAgIH1cblxuICAgIC5zaWRlYmFyLWJyYW5kIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGdhcDogMTBweDtcbiAgICAgIHBhZGRpbmc6IDI0cHggMjBweDtcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LC4xKTtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDsgbGluZS1oZWlnaHQ6IDEuNDtcbiAgICAgIC5icmFuZC1pY29uIHsgZm9udC1zaXplOiAyOHB4OyBoZWlnaHQ6IDI4cHg7IHdpZHRoOiAyOHB4OyBjb2xvcjogIzRhZGU4MDsgfVxuICAgICAgc3Ryb25nIHsgZm9udC1zaXplOiAxNXB4OyB9XG4gICAgfVxuXG4gICAgLmFkbWluLXVzZXItY2hpcCB7XG4gICAgICBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDEwcHg7XG4gICAgICBwYWRkaW5nOiAxNnB4IDIwcHg7XG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwuMSk7XG4gICAgfVxuXG4gICAgLmFkbWluLWF2YXRhciB7XG4gICAgICB3aWR0aDogMzZweDsgaGVpZ2h0OiAzNnB4OyBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICBiYWNrZ3JvdW5kOiAjMTYyMTNlOyBjb2xvcjogIzRhZGU4MDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgZm9udC1zaXplOiAxM3B4OyBmb250LXdlaWdodDogNzAwOyBmbGV4LXNocmluazogMDtcbiAgICB9XG5cbiAgICAuYWRtaW4tdXNlci1pbmZvIHsgZGlzcGxheTogZmxleDsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgb3ZlcmZsb3c6IGhpZGRlbjsgfVxuICAgIC5hZG1pbi1uYW1lIHsgZm9udC1zaXplOiAxM3B4OyBmb250LXdlaWdodDogNjAwOyB3aGl0ZS1zcGFjZTogbm93cmFwOyBvdmVyZmxvdzogaGlkZGVuOyB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpczsgfVxuICAgIC5hZG1pbi1yb2xlIHsgZm9udC1zaXplOiAxMXB4OyBjb2xvcjogIzRhZGU4MDsgfVxuXG4gICAgLnNpZGViYXItbmF2IHtcbiAgICAgIGZsZXg6IDE7XG4gICAgICBwYWRkaW5nOiAxNnB4IDA7XG4gICAgfVxuXG4gICAgLm5hdi1pdGVtIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGdhcDogMTJweDtcbiAgICAgIHBhZGRpbmc6IDEycHggMjBweDtcbiAgICAgIGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LC43KTtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGJvcmRlci1sZWZ0OiAzcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgLjE1cztcblxuICAgICAgJjpob3ZlciB7IGNvbG9yOiAjZmZmOyBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LC4wNik7IH1cblxuICAgICAgJi5hY3RpdmUge1xuICAgICAgICBjb2xvcjogIzRhZGU4MDtcbiAgICAgICAgYm9yZGVyLWxlZnQtY29sb3I6ICM0YWRlODA7XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoNzQsMjIyLDEyOCwuMDgpO1xuICAgICAgfVxuXG4gICAgICBtYXQtaWNvbiB7IGZvbnQtc2l6ZTogMjBweDsgaGVpZ2h0OiAyMHB4OyB3aWR0aDogMjBweDsgfVxuICAgIH1cblxuICAgIC5zaWRlYmFyLWZvb3RlciB7XG4gICAgICBwYWRkaW5nOiAxNnB4IDIwcHg7XG4gICAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwuMSk7XG4gICAgfVxuXG4gICAgLmxvZ291dC1idG4ge1xuICAgICAgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZ2FwOiAxMHB4O1xuICAgICAgYmFja2dyb3VuZDogbm9uZTsgYm9yZGVyOiBub25lO1xuICAgICAgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsLjYpO1xuICAgICAgZm9udC1zaXplOiAxNHB4OyBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBwYWRkaW5nOiA4cHggMDsgd2lkdGg6IDEwMCU7XG4gICAgICB0cmFuc2l0aW9uOiBjb2xvciAuMTVzO1xuXG4gICAgICAmOmhvdmVyIHsgY29sb3I6ICNmZjZiNmI7IH1cbiAgICAgIG1hdC1pY29uIHsgZm9udC1zaXplOiAyMHB4OyBoZWlnaHQ6IDIwcHg7IHdpZHRoOiAyMHB4OyB9XG4gICAgfVxuXG4gICAgLyogw6LClMKAw6LClMKAIE1haW4gw6LClMKAw6LClMKAICovXG4gICAgLmFkbWluLW1haW4ge1xuICAgICAgbWFyZ2luLWxlZnQ6IDI0MHB4O1xuICAgICAgZmxleDogMTtcbiAgICAgIHBhZGRpbmc6IDA7XG4gICAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICB9XG4gICJdLCJzb3VyY2VSb290IjoiIn0= */"]
  }));
}
_staticBlock();

/***/ })

}]);
//# sourceMappingURL=src_app_pages_admin_admin-layout_admin-layout_component_ts.js.map