"use strict";
(self["webpackChunkestokvel_ui"] = self["webpackChunkestokvel_ui"] || []).push([["src_app_pages_notifications_notifications_component_ts"],{

/***/ 5603:
/*!****************************************************************!*\
  !*** ./src/app/pages/notifications/notifications.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NotificationsPageComponent: () => (/* binding */ NotificationsPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 4487);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ 3840);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2481);
var _staticBlock;









function NotificationsPageComponent_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", ctx_r0.unreadCount, " unread");
  }
}
function NotificationsPageComponent_span_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r0.unreadCount);
  }
}
function NotificationsPageComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 18)(1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "notifications_none");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "All caught up!");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function NotificationsPageComponent_div_19_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r0.setFilter("all"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "View all notifications");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("You have no ", ctx_r0.activeFilter === "unread" ? "unread " : "", "notifications.");
  }
}
function NotificationsPageComponent_div_20_div_1_span_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "span", 29);
  }
}
function NotificationsPageComponent_div_20_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function NotificationsPageComponent_div_20_div_1_Template_div_click_0_listener() {
      const n_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r0.markRead(n_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 23)(2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 24)(5, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, NotificationsPageComponent_div_20_div_1_span_7_Template, 1, 0, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "span", 28)(11, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "schedule");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const n_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("unread", !n_r4.read);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", n_r4.iconClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](n_r4.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", n_r4.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !n_r4.read);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](n_r4.message);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", n_r4.time);
  }
}
function NotificationsPageComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, NotificationsPageComponent_div_20_div_1_Template, 14, 8, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r0.displayedNotifications);
  }
}
class NotificationsPageComponent {
  constructor() {
    this.activeFilter = 'all';
    this.notifications = [{
      id: 1,
      icon: 'payments',
      iconClass: 'icon-teal',
      title: 'Contribution Received',
      message: 'Your monthly contribution of R1,500 for "Family Savings Club" has been received and confirmed.',
      time: '2 hours ago',
      read: false
    }, {
      id: 2,
      icon: 'group_add',
      iconClass: 'icon-navy',
      title: 'New Member Joined',
      message: 'Sipho Nkosi has joined your stokvel "Neighbourhood Savers". You now have 8/10 members.',
      time: '5 hours ago',
      read: false
    }, {
      id: 3,
      icon: 'account_balance_wallet',
      iconClass: 'icon-gold',
      title: 'Payout Processed',
      message: 'Your payout of R12,000 from "Office Stokvel" has been processed and sent to your wallet.',
      time: '1 day ago',
      read: false
    }, {
      id: 4,
      icon: 'notification_important',
      iconClass: 'icon-red',
      title: 'Contribution Due Tomorrow',
      message: 'Reminder: Your contribution of R800 for "Women\'s Investment Club" is due tomorrow, 23 April 2026.',
      time: '1 day ago',
      read: true
    }, {
      id: 5,
      icon: 'check_circle',
      iconClass: 'icon-teal',
      title: 'Stokvel Activated',
      message: 'Your stokvel "Family Savings Club" is now active. All members have confirmed participation.',
      time: '3 days ago',
      read: true
    }, {
      id: 6,
      icon: 'person_add',
      iconClass: 'icon-navy',
      title: 'Invitation Accepted',
      message: 'Nomsa Dlamini has accepted your invitation to join "Neighbourhood Savers".',
      time: '4 days ago',
      read: true
    }, {
      id: 7,
      icon: 'security',
      iconClass: 'icon-navy',
      title: 'Security Alert',
      message: 'A new device logged into your eStokvel account. If this was not you, please change your password immediately.',
      time: '1 week ago',
      read: true
    }, {
      id: 8,
      icon: 'star',
      iconClass: 'icon-gold',
      title: 'Referral Bonus Earned',
      message: 'You\'ve earned a R50 referral bonus! Your friend Thabo Molefe joined eStokvel using your referral link.',
      time: '1 week ago',
      read: true
    }];
  }
  ngOnInit() {}
  get unreadCount() {
    return this.notifications.filter(n => !n.read).length;
  }
  get displayedNotifications() {
    return this.activeFilter === 'unread' ? this.notifications.filter(n => !n.read) : this.notifications;
  }
  markAllRead() {
    this.notifications.forEach(n => n.read = true);
  }
  markRead(notification) {
    notification.read = true;
  }
  setFilter(filter) {
    this.activeFilter = filter;
  }
  static #_ = _staticBlock = () => (this.ɵfac = function NotificationsPageComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || NotificationsPageComponent)();
  }, this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: NotificationsPageComponent,
    selectors: [["app-notifications-page"]],
    decls: 30,
    vars: 9,
    consts: [[1, "notif-page"], [1, "notif-header"], [1, "notif-header-inner"], [1, "notif-title-row"], ["class", "notif-badge", 4, "ngIf"], [1, "notif-header-actions"], [1, "notif-filter-tabs"], [1, "filter-tab", 3, "click"], ["class", "tab-count", 4, "ngIf"], ["mat-stroked-button", "", 1, "mark-all-btn", 3, "click", "disabled"], [1, "notif-container"], ["class", "notif-empty", 4, "ngIf"], ["class", "notif-list", 4, "ngIf"], [1, "notif-footer"], ["mat-stroked-button", "", "routerLink", "/dashboard"], ["mat-stroked-button", "", "routerLink", "/profile"], [1, "notif-badge"], [1, "tab-count"], [1, "notif-empty"], ["mat-stroked-button", "", 3, "click"], [1, "notif-list"], ["class", "notif-item", 3, "unread", "click", 4, "ngFor", "ngForOf"], [1, "notif-item", 3, "click"], [1, "notif-icon-wrap", 3, "ngClass"], [1, "notif-body"], [1, "notif-item-title"], ["class", "notif-unread-dot", 4, "ngIf"], [1, "notif-msg"], [1, "notif-time"], [1, "notif-unread-dot"]],
    template: function NotificationsPageComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Notifications");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, NotificationsPageComponent_span_6_Template, 2, 1, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 5)(8, "div", 6)(9, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function NotificationsPageComponent_Template_button_click_9_listener() {
          return ctx.setFilter("all");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "All");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function NotificationsPageComponent_Template_button_click_11_listener() {
          return ctx.setFilter("unread");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, " Unread ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, NotificationsPageComponent_span_13_Template, 2, 1, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function NotificationsPageComponent_Template_button_click_14_listener() {
          return ctx.markAllRead();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "done_all");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, " Mark all read ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](19, NotificationsPageComponent_div_19_Template, 9, 1, "div", 11)(20, NotificationsPageComponent_div_20_Template, 2, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "div", 13)(22, "button", 14)(23, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24, "dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25, " Go to Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "button", 15)(27, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28, "notifications_active");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](29, " Notification Preferences");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.unreadCount > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("active", ctx.activeFilter === "all");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("active", ctx.activeFilter === "unread");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.unreadCount > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx.unreadCount === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.displayedNotifications.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.displayedNotifications.length > 0);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink, _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButton],
    styles: ["@charset \"UTF-8\";\n.notif-page[_ngcontent-%COMP%] {\n  font-family: \"Inter\", sans-serif;\n  color: #1e293b;\n  min-height: 100vh;\n}\n\n\n\n.notif-header[_ngcontent-%COMP%] {\n  background: #fff;\n  border-bottom: 1px solid #e2e8f0;\n  padding: 28px 24px 20px;\n  position: sticky;\n  top: 0;\n  z-index: 10;\n}\n\n.notif-header-inner[_ngcontent-%COMP%] {\n  max-width: 720px;\n  margin: 0 auto;\n}\n\n.notif-title-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  margin-bottom: 16px;\n}\n.notif-title-row[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 1.8rem;\n  font-weight: 800;\n  margin: 0;\n}\n\n.notif-badge[_ngcontent-%COMP%] {\n  background: #dc2626;\n  color: #fff;\n  font-size: 0.75rem;\n  font-weight: 700;\n  border-radius: 20px;\n  padding: 2px 10px;\n}\n\n.notif-header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n\n.notif-filter-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  background: #f8fafc;\n  border-radius: 8px;\n  padding: 4px;\n  gap: 4px;\n}\n\n.filter-tab[_ngcontent-%COMP%] {\n  padding: 6px 16px;\n  border-radius: 6px;\n  border: none;\n  cursor: pointer;\n  font-size: 0.88rem;\n  font-weight: 600;\n  color: #64748b;\n  background: transparent;\n  transition: all 0.15s;\n}\n.filter-tab.active[_ngcontent-%COMP%] {\n  background: #fff;\n  color: #0d47a1;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);\n}\n\n.tab-count[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  background: #dc2626;\n  color: #fff;\n  border-radius: 20px;\n  padding: 1px 7px;\n  font-size: 0.7rem;\n  margin-left: 4px;\n}\n\n.mark-all-btn[_ngcontent-%COMP%] {\n  font-size: 0.85rem !important;\n}\n\n\n\n.notif-container[_ngcontent-%COMP%] {\n  max-width: 720px;\n  margin: 0 auto;\n  padding: 16px 24px;\n}\n\n.notif-empty[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 80px 24px;\n}\n.notif-empty[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 3.5rem;\n  width: 3.5rem;\n  height: 3.5rem;\n  color: #64748b;\n  margin-bottom: 12px;\n}\n.notif-empty[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  font-weight: 700;\n  margin: 0 0 8px;\n}\n.notif-empty[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #64748b;\n  margin-bottom: 20px;\n}\n\n.notif-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n\n.notif-item[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  align-items: flex-start;\n  padding: 16px 14px;\n  border-radius: 10px;\n  cursor: pointer;\n  transition: background 0.15s;\n}\n.notif-item[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n}\n.notif-item.unread[_ngcontent-%COMP%] {\n  background: #eff6ff;\n}\n.notif-item.unread[_ngcontent-%COMP%]:hover {\n  background: #dbeafe;\n}\n.notif-item.unread[_ngcontent-%COMP%]   .notif-item-title[_ngcontent-%COMP%] {\n  color: #0d47a1;\n}\n\n.notif-icon-wrap[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 44px;\n  height: 44px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.notif-icon-wrap[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  width: 1.4rem;\n  height: 1.4rem;\n  color: #fff;\n}\n.notif-icon-wrap.icon-navy[_ngcontent-%COMP%] {\n  background: #0d47a1;\n}\n.notif-icon-wrap.icon-teal[_ngcontent-%COMP%] {\n  background: #00796b;\n}\n.notif-icon-wrap.icon-gold[_ngcontent-%COMP%] {\n  background: #f59e0b;\n}\n.notif-icon-wrap.icon-red[_ngcontent-%COMP%] {\n  background: #dc2626;\n}\n\n.notif-body[_ngcontent-%COMP%] {\n  flex: 1;\n}\n\n.notif-item-title[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 700;\n  margin-bottom: 4px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  color: #1e293b;\n}\n\n.notif-unread-dot[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: #0d47a1;\n  flex-shrink: 0;\n}\n\n.notif-msg[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  color: #64748b;\n  margin: 0 0 6px;\n  line-height: 1.5;\n}\n\n.notif-time[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 0.78rem;\n  color: #64748b;\n}\n.notif-time[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  width: 0.9rem;\n  height: 0.9rem;\n}\n\n\n\n.notif-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  gap: 16px;\n  flex-wrap: wrap;\n  padding: 28px 24px;\n  border-top: 1px solid #e2e8f0;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvbm90aWZpY2F0aW9ucy9ub3RpZmljYXRpb25zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUdoQjtFQUFjLGdDQUFBO0VBQWtDLGNBRjNCO0VBRXlDLGlCQUFBO0FBRTlEOztBQUFBLGlCQUFBO0FBQ0E7RUFDRSxnQkFBQTtFQUFrQixnQ0FBQTtFQUNsQix1QkFBQTtFQUF5QixnQkFBQTtFQUFrQixNQUFBO0VBQVEsV0FBQTtBQU9yRDs7QUFMQTtFQUFzQixnQkFBQTtFQUFrQixjQUFBO0FBVXhDOztBQVRBO0VBQ0UsYUFBQTtFQUFlLG1CQUFBO0VBQXFCLFNBQUE7RUFBVyxtQkFBQTtBQWVqRDtBQWRFO0VBQUssaUJBQUE7RUFBbUIsZ0JBQUE7RUFBa0IsU0FBQTtBQW1CNUM7O0FBakJBO0VBQ0UsbUJBQUE7RUFBcUIsV0FBQTtFQUNyQixrQkFBQTtFQUFtQixnQkFBQTtFQUFrQixtQkFBQTtFQUFxQixpQkFBQTtBQXdCNUQ7O0FBdEJBO0VBQXdCLGFBQUE7RUFBZSxtQkFBQTtFQUFxQiw4QkFBQTtFQUFnQyxlQUFBO0VBQWlCLFNBQUE7QUE4QjdHOztBQTVCQTtFQUFxQixhQUFBO0VBQWUsbUJBcEIvQjtFQW9CZ0Qsa0JBQUE7RUFBb0IsWUFBQTtFQUFjLFFBQUE7QUFvQ3ZGOztBQW5DQTtFQUNFLGlCQUFBO0VBQW1CLGtCQUFBO0VBQW9CLFlBQUE7RUFBYyxlQUFBO0VBQ3JELGtCQUFBO0VBQW1CLGdCQUFBO0VBQWtCLGNBdkJEO0VBdUJnQix1QkFBQTtFQUF5QixxQkFBQTtBQTZDL0U7QUE1Q0U7RUFBVyxnQkFBQTtFQUFrQixjQXpCeEI7RUF5QnNDLHdDQUFBO0FBaUQ3Qzs7QUEvQ0E7RUFDRSxvQkFBQTtFQUFzQixtQkFBQTtFQUFxQix1QkFBQTtFQUMzQyxtQkFBQTtFQUFxQixXQUFBO0VBQWEsbUJBQUE7RUFBcUIsZ0JBQUE7RUFBa0IsaUJBQUE7RUFBa0IsZ0JBQUE7QUF5RDdGOztBQXZEQTtFQUFnQiw2QkFBQTtBQTJEaEI7O0FBekRBLGVBQUE7QUFDQTtFQUFtQixnQkFBQTtFQUFrQixjQUFBO0VBQWdCLGtCQUFBO0FBK0RyRDs7QUE3REE7RUFDRSxrQkFBQTtFQUFvQixrQkFBQTtBQWlFdEI7QUFoRUU7RUFBVyxpQkFBQTtFQUFtQixhQUFBO0VBQWUsY0FBQTtFQUFnQixjQXJDekI7RUFxQ3dDLG1CQUFBO0FBdUU5RTtBQXRFRTtFQUFLLGlCQUFBO0VBQW1CLGdCQUFBO0VBQWtCLGVBQUE7QUEyRTVDO0FBMUVFO0VBQUssY0F2QytCO0VBdUNoQixtQkFBQTtBQThFdEI7O0FBM0VBO0VBQWMsYUFBQTtFQUFlLHNCQUFBO0VBQXdCLFFBQUE7QUFpRnJEOztBQS9FQTtFQUNFLGFBQUE7RUFBZSxTQUFBO0VBQVcsdUJBQUE7RUFDMUIsa0JBQUE7RUFBb0IsbUJBQUE7RUFBcUIsZUFBQTtFQUFpQiw0QkFBQTtBQXVGNUQ7QUF0RkU7RUFBVSxtQkEvQ1A7QUF3SUw7QUF4RkU7RUFBVyxtQkFBQTtBQTJGYjtBQTFGSTtFQUFVLG1CQUFBO0FBNkZkO0FBNUZJO0VBQW9CLGNBbkRqQjtBQWtKUDs7QUEzRkE7RUFDRSxjQUFBO0VBQWdCLFdBQUE7RUFBYSxZQUFBO0VBQWMsbUJBQUE7RUFDM0MsYUFBQTtFQUFlLG1CQUFBO0VBQXFCLHVCQUFBO0FBbUd0QztBQWxHRTtFQUFXLGlCQUFBO0VBQW1CLGFBQUE7RUFBZSxjQUFBO0VBQWdCLFdBQUE7QUF3Ry9EO0FBdkdFO0VBQWMsbUJBM0RUO0FBcUtQO0FBekdFO0VBQWUsbUJBNURNO0FBd0t2QjtBQTNHRTtFQUFlLG1CQTdEc0I7QUEyS3ZDO0FBN0dFO0VBQWUsbUJBQUE7QUFnSGpCOztBQTdHQTtFQUFjLE9BQUE7QUFpSGQ7O0FBL0dBO0VBQ0Usa0JBQUE7RUFBbUIsZ0JBQUE7RUFBa0Isa0JBQUE7RUFDckMsYUFBQTtFQUFlLG1CQUFBO0VBQXFCLFFBQUE7RUFBVSxjQXBFM0I7QUEyTHJCOztBQXJIQTtFQUNFLFVBQUE7RUFBWSxXQUFBO0VBQWEsa0JBQUE7RUFBb0IsbUJBeEV4QztFQXdFMkQsY0FBQTtBQTRIbEU7O0FBMUhBO0VBQWEsa0JBQUE7RUFBbUIsY0F6RU07RUF5RVMsZUFBQTtFQUFpQixnQkFBQTtBQWlJaEU7O0FBaElBO0VBQ0Usb0JBQUE7RUFBc0IsbUJBQUE7RUFBcUIsUUFBQTtFQUFVLGtCQUFBO0VBQW1CLGNBM0VwQztBQWtOdEM7QUF0SUU7RUFBVyxpQkFBQTtFQUFrQixhQUFBO0VBQWMsY0FBQTtBQTJJN0M7O0FBeElBLGlCQUFBO0FBQ0E7RUFDRSxhQUFBO0VBQWUsdUJBQUE7RUFBeUIsU0FBQTtFQUFXLGVBQUE7RUFDbkQsa0JBQUE7RUFBb0IsNkJBQUE7QUErSXRCIiwic291cmNlc0NvbnRlbnQiOlsiJG5hdnk6ICMwZDQ3YTE7ICR0ZWFsOiAjMDA3OTZiOyAkZ29sZDogI2Y1OWUwYjtcclxuJGJnOiAjZjhmYWZjOyAkdGV4dDogIzFlMjkzYjsgJG11dGVkOiAjNjQ3NDhiOyAkYm9yZGVyOiAjZTJlOGYwO1xyXG5cclxuLm5vdGlmLXBhZ2UgeyBmb250LWZhbWlseTogJ0ludGVyJywgc2Fucy1zZXJpZjsgY29sb3I6ICR0ZXh0OyBtaW4taGVpZ2h0OiAxMDB2aDsgfVxyXG5cclxuLyogw6LClMKAw6LClMKAIEhlYWRlciDDosKUwoDDosKUwoAgKi9cclxuLm5vdGlmLWhlYWRlciB7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjsgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRib3JkZXI7XHJcbiAgcGFkZGluZzogMjhweCAyNHB4IDIwcHg7IHBvc2l0aW9uOiBzdGlja3k7IHRvcDogMDsgei1pbmRleDogMTA7XHJcbn1cclxuLm5vdGlmLWhlYWRlci1pbm5lciB7IG1heC13aWR0aDogNzIwcHg7IG1hcmdpbjogMCBhdXRvOyB9XHJcbi5ub3RpZi10aXRsZS1yb3cge1xyXG4gIGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGdhcDogMTRweDsgbWFyZ2luLWJvdHRvbTogMTZweDtcclxuICBoMSB7IGZvbnQtc2l6ZTogMS44cmVtOyBmb250LXdlaWdodDogODAwOyBtYXJnaW46IDA7IH1cclxufVxyXG4ubm90aWYtYmFkZ2Uge1xyXG4gIGJhY2tncm91bmQ6ICNkYzI2MjY7IGNvbG9yOiAjZmZmO1xyXG4gIGZvbnQtc2l6ZTogLjc1cmVtOyBmb250LXdlaWdodDogNzAwOyBib3JkZXItcmFkaXVzOiAyMHB4OyBwYWRkaW5nOiAycHggMTBweDtcclxufVxyXG4ubm90aWYtaGVhZGVyLWFjdGlvbnMgeyBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IGZsZXgtd3JhcDogd3JhcDsgZ2FwOiAxMnB4OyB9XHJcblxyXG4ubm90aWYtZmlsdGVyLXRhYnMgeyBkaXNwbGF5OiBmbGV4OyBiYWNrZ3JvdW5kOiAkYmc7IGJvcmRlci1yYWRpdXM6IDhweDsgcGFkZGluZzogNHB4OyBnYXA6IDRweDsgfVxyXG4uZmlsdGVyLXRhYiB7XHJcbiAgcGFkZGluZzogNnB4IDE2cHg7IGJvcmRlci1yYWRpdXM6IDZweDsgYm9yZGVyOiBub25lOyBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZm9udC1zaXplOiAuODhyZW07IGZvbnQtd2VpZ2h0OiA2MDA7IGNvbG9yOiAkbXV0ZWQ7IGJhY2tncm91bmQ6IHRyYW5zcGFyZW50OyB0cmFuc2l0aW9uOiBhbGwgLjE1cztcclxuICAmLmFjdGl2ZSB7IGJhY2tncm91bmQ6ICNmZmY7IGNvbG9yOiAkbmF2eTsgYm94LXNoYWRvdzogMCAxcHggNHB4IHJnYmEoMCwwLDAsLjEpOyB9XHJcbn1cclxuLnRhYi1jb3VudCB7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGJhY2tncm91bmQ6ICNkYzI2MjY7IGNvbG9yOiAjZmZmOyBib3JkZXItcmFkaXVzOiAyMHB4OyBwYWRkaW5nOiAxcHggN3B4OyBmb250LXNpemU6IC43cmVtOyBtYXJnaW4tbGVmdDogNHB4O1xyXG59XHJcbi5tYXJrLWFsbC1idG4geyBmb250LXNpemU6IC44NXJlbSAhaW1wb3J0YW50OyB9XHJcblxyXG4vKiDDosKUwoDDosKUwoAgTGlzdCDDosKUwoDDosKUwoAgKi9cclxuLm5vdGlmLWNvbnRhaW5lciB7IG1heC13aWR0aDogNzIwcHg7IG1hcmdpbjogMCBhdXRvOyBwYWRkaW5nOiAxNnB4IDI0cHg7IH1cclxuXHJcbi5ub3RpZi1lbXB0eSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyOyBwYWRkaW5nOiA4MHB4IDI0cHg7XHJcbiAgbWF0LWljb24geyBmb250LXNpemU6IDMuNXJlbTsgd2lkdGg6IDMuNXJlbTsgaGVpZ2h0OiAzLjVyZW07IGNvbG9yOiAkbXV0ZWQ7IG1hcmdpbi1ib3R0b206IDEycHg7IH1cclxuICBoMyB7IGZvbnQtc2l6ZTogMS4ycmVtOyBmb250LXdlaWdodDogNzAwOyBtYXJnaW46IDAgMCA4cHg7IH1cclxuICBwICB7IGNvbG9yOiAkbXV0ZWQ7IG1hcmdpbi1ib3R0b206IDIwcHg7IH1cclxufVxyXG5cclxuLm5vdGlmLWxpc3QgeyBkaXNwbGF5OiBmbGV4OyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBnYXA6IDJweDsgfVxyXG5cclxuLm5vdGlmLWl0ZW0ge1xyXG4gIGRpc3BsYXk6IGZsZXg7IGdhcDogMTZweDsgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgcGFkZGluZzogMTZweCAxNHB4OyBib3JkZXItcmFkaXVzOiAxMHB4OyBjdXJzb3I6IHBvaW50ZXI7IHRyYW5zaXRpb246IGJhY2tncm91bmQgLjE1cztcclxuICAmOmhvdmVyIHsgYmFja2dyb3VuZDogJGJnOyB9XHJcbiAgJi51bnJlYWQgeyBiYWNrZ3JvdW5kOiAjZWZmNmZmO1xyXG4gICAgJjpob3ZlciB7IGJhY2tncm91bmQ6ICNkYmVhZmU7IH1cclxuICAgIC5ub3RpZi1pdGVtLXRpdGxlIHsgY29sb3I6ICRuYXZ5OyB9XHJcbiAgfVxyXG59XHJcblxyXG4ubm90aWYtaWNvbi13cmFwIHtcclxuICBmbGV4LXNocmluazogMDsgd2lkdGg6IDQ0cHg7IGhlaWdodDogNDRweDsgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBtYXQtaWNvbiB7IGZvbnQtc2l6ZTogMS40cmVtOyB3aWR0aDogMS40cmVtOyBoZWlnaHQ6IDEuNHJlbTsgY29sb3I6ICNmZmY7IH1cclxuICAmLmljb24tbmF2eSB7IGJhY2tncm91bmQ6ICRuYXZ5OyB9XHJcbiAgJi5pY29uLXRlYWwgIHsgYmFja2dyb3VuZDogJHRlYWw7IH1cclxuICAmLmljb24tZ29sZCAgeyBiYWNrZ3JvdW5kOiAkZ29sZDsgfVxyXG4gICYuaWNvbi1yZWQgICB7IGJhY2tncm91bmQ6ICNkYzI2MjY7IH1cclxufVxyXG5cclxuLm5vdGlmLWJvZHkgeyBmbGV4OiAxOyB9XHJcblxyXG4ubm90aWYtaXRlbS10aXRsZSB7XHJcbiAgZm9udC1zaXplOiAuOTVyZW07IGZvbnQtd2VpZ2h0OiA3MDA7IG1hcmdpbi1ib3R0b206IDRweDtcclxuICBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDhweDsgY29sb3I6ICR0ZXh0O1xyXG59XHJcbi5ub3RpZi11bnJlYWQtZG90IHtcclxuICB3aWR0aDogOHB4OyBoZWlnaHQ6IDhweDsgYm9yZGVyLXJhZGl1czogNTAlOyBiYWNrZ3JvdW5kOiAkbmF2eTsgZmxleC1zaHJpbms6IDA7XHJcbn1cclxuLm5vdGlmLW1zZyB7IGZvbnQtc2l6ZTogLjg4cmVtOyBjb2xvcjogJG11dGVkOyBtYXJnaW46IDAgMCA2cHg7IGxpbmUtaGVpZ2h0OiAxLjU7IH1cclxuLm5vdGlmLXRpbWUge1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDRweDsgZm9udC1zaXplOiAuNzhyZW07IGNvbG9yOiAkbXV0ZWQ7XHJcbiAgbWF0LWljb24geyBmb250LXNpemU6IC45cmVtOyB3aWR0aDogLjlyZW07IGhlaWdodDogLjlyZW07IH1cclxufVxyXG5cclxuLyogw6LClMKAw6LClMKAIEZvb3RlciDDosKUwoDDosKUwoAgKi9cclxuLm5vdGlmLWZvb3RlciB7XHJcbiAgZGlzcGxheTogZmxleDsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IGdhcDogMTZweDsgZmxleC13cmFwOiB3cmFwO1xyXG4gIHBhZGRpbmc6IDI4cHggMjRweDsgYm9yZGVyLXRvcDogMXB4IHNvbGlkICRib3JkZXI7XHJcbn1cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  }));
}
_staticBlock();

/***/ })

}]);
//# sourceMappingURL=src_app_pages_notifications_notifications_component_ts.js.map