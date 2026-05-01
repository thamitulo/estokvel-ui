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
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/progress-spinner */ 1134);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 819);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 3900);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2481);
/* harmony import */ var _services_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/notifications/notifications.service */ 637);
var _staticBlock;















function NotificationsPageComponent_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", ctx_r0.unreadCount, " unread");
  }
}
function NotificationsPageComponent_span_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r0.unreadCount);
  }
}
function NotificationsPageComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "mat-spinner", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, "Loading notifications\u2026");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
}
function NotificationsPageComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 22)(1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "wifi_off");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function NotificationsPageComponent_div_20_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r0.loadNotifications());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](7, "refresh");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8, " Retry ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r0.error);
  }
}
function NotificationsPageComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 24)(1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "notifications_none");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4, "All caught up!");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function NotificationsPageComponent_div_21_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r3);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r0.setFilter("all"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8, "View all notifications");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("You have no ", ctx_r0.activeFilter === "unread" ? "unread " : "", "notifications.");
  }
}
function NotificationsPageComponent_div_22_div_1_span_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "span", 35);
  }
}
function NotificationsPageComponent_div_22_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function NotificationsPageComponent_div_22_div_1_Template_div_click_0_listener() {
      const n_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r4).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r0.markRead(n_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 28)(2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "div", 29)(5, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](7, NotificationsPageComponent_div_22_div_1_span_7_Template, 1, 0, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "span", 33)(11, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](12, "schedule");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function NotificationsPageComponent_div_22_div_1_Template_button_click_14_listener($event) {
      const n_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r4).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      ctx_r0.deleteNotification(n_r5);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](16, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const n_r5 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("unread", n_r5.isUnread || n_r5.status === "UNREAD");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", ctx_r0.getIconClass(n_r5.type));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r0.getNotificationIcon(n_r5.type));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", n_r5.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", n_r5.isUnread || n_r5.status === "UNREAD");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](n_r5.message);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r0.formatTime(n_r5.createdAt));
  }
}
function NotificationsPageComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, NotificationsPageComponent_div_22_div_1_Template, 17, 8, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r0.displayedNotifications);
  }
}
class NotificationsPageComponent {
  constructor(notificationService, snackBar) {
    this.notificationService = notificationService;
    this.snackBar = snackBar;
    this.activeFilter = 'all';
    this.notifications = [];
    this.isLoading = true;
    this.error = null;
    this.currentPage = 0;
    this.pageSize = 20;
    this.hasMore = false;
    this.totalElements = 0;
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
  }
  ngOnInit() {
    this.loadNotifications();
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  loadNotifications() {
    this.isLoading = true;
    this.error = null;
    this.notificationService.getAllNotifications(this.currentPage, this.pageSize).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.destroy$)).subscribe({
      next: response => {
        this.notifications = response.content ?? [];
        this.totalElements = response.totalElements ?? 0;
        this.hasMore = this.currentPage + 1 < (response.totalPages ?? 1);
        this.isLoading = false;
      },
      error: err => {
        this.error = err?.status === 0 ? 'Backend is unavailable. Please try again later.' : 'Could not load notifications.';
        this.isLoading = false;
        // Fall back to recent notifications on paginated endpoint failure
        this.loadRecentFallback();
      }
    });
  }
  loadRecentFallback() {
    this.notificationService.getRecentNotifications(20).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.destroy$)).subscribe({
      next: list => {
        this.notifications = list;
        this.error = null;
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
      }
    });
  }
  get unreadCount() {
    return this.notifications.filter(n => n.isUnread || n.status === 'UNREAD').length;
  }
  get displayedNotifications() {
    return this.activeFilter === 'unread' ? this.notifications.filter(n => n.isUnread || n.status === 'UNREAD') : this.notifications;
  }
  markAllRead() {
    this.notificationService.markAllAsRead().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.destroy$)).subscribe({
      next: () => {
        this.notifications.forEach(n => {
          n.isUnread = false;
          n.status = 'READ';
        });
        this.snackBar.open('All notifications marked as read', 'Close', {
          duration: 3000
        });
      },
      error: () => this.snackBar.open('Could not update notifications', 'Close', {
        duration: 3000
      })
    });
  }
  markRead(notification) {
    if (!notification.isUnread && notification.status !== 'UNREAD') return;
    this.notificationService.markAsRead(notification.id).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.destroy$)).subscribe({
      next: () => {
        notification.isUnread = false;
        notification.status = 'READ';
      }
    });
  }
  deleteNotification(notification) {
    this.notificationService.deleteNotification(notification.id).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.destroy$)).subscribe({
      next: () => {
        this.notifications = this.notifications.filter(n => n.id !== notification.id);
        this.snackBar.open('Notification removed', 'Close', {
          duration: 2000
        });
      },
      error: () => this.snackBar.open('Could not delete notification', 'Close', {
        duration: 3000
      })
    });
  }
  setFilter(filter) {
    this.activeFilter = filter;
  }
  getNotificationIcon(type) {
    const map = {
      STOKVEL_JOIN_REQUEST: 'person_add',
      STOKVEL_JOIN_APPROVED: 'check_circle',
      STOKVEL_JOIN_REJECTED: 'cancel',
      STOKVEL_CONTRIBUTION_DUE: 'notification_important',
      STOKVEL_PAYOUT_PROCESSED: 'account_balance_wallet',
      PAYMENT_RECEIVED: 'payments',
      WALLET_CREDITED: 'add_circle',
      WALLET_DEBITED: 'remove_circle',
      USER_REFERRAL_REWARD: 'star',
      SECURITY_ALERT: 'security',
      SYSTEM_ANNOUNCEMENT: 'campaign'
    };
    return map[type] ?? 'notifications';
  }
  getIconClass(type) {
    const map = {
      STOKVEL_JOIN_REQUEST: 'icon-navy',
      STOKVEL_JOIN_APPROVED: 'icon-teal',
      STOKVEL_JOIN_REJECTED: 'icon-red',
      STOKVEL_CONTRIBUTION_DUE: 'icon-red',
      STOKVEL_PAYOUT_PROCESSED: 'icon-gold',
      PAYMENT_RECEIVED: 'icon-teal',
      WALLET_CREDITED: 'icon-teal',
      WALLET_DEBITED: 'icon-red',
      USER_REFERRAL_REWARD: 'icon-gold',
      SECURITY_ALERT: 'icon-navy',
      SYSTEM_ANNOUNCEMENT: 'icon-navy'
    };
    return map[type] ?? 'icon-navy';
  }
  formatTime(dateStr) {
    if (!dateStr) return '';
    const date = new Date(dateStr);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const mins = Math.floor(diffMs / 60000);
    const hours = Math.floor(diffMs / 3600000);
    const days = Math.floor(diffMs / 86400000);
    if (mins < 1) return 'Just now';
    if (mins < 60) return `${mins}m ago`;
    if (hours < 24) return `${hours}h ago`;
    if (days < 7) return `${days}d ago`;
    return date.toLocaleDateString('en-ZA');
  }
  static #_ = _staticBlock = () => (this.ɵfac = function NotificationsPageComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || NotificationsPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_10__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__.MatSnackBar));
  }, this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
    type: NotificationsPageComponent,
    selectors: [["app-notifications-page"]],
    decls: 32,
    vars: 11,
    consts: [[1, "notif-page"], [1, "notif-header"], [1, "notif-header-inner"], [1, "notif-title-row"], ["class", "notif-badge", 4, "ngIf"], [1, "notif-header-actions"], [1, "notif-filter-tabs"], [1, "filter-tab", 3, "click"], ["class", "tab-count", 4, "ngIf"], ["mat-stroked-button", "", 1, "mark-all-btn", 3, "click", "disabled"], [1, "notif-container"], ["class", "notif-loading", 4, "ngIf"], ["class", "notif-error", 4, "ngIf"], ["class", "notif-empty", 4, "ngIf"], ["class", "notif-list", 4, "ngIf"], [1, "notif-footer"], ["mat-stroked-button", "", "routerLink", "/dashboard"], ["mat-stroked-button", "", "routerLink", "/profile"], [1, "notif-badge"], [1, "tab-count"], [1, "notif-loading"], ["diameter", "36"], [1, "notif-error"], ["mat-stroked-button", "", 3, "click"], [1, "notif-empty"], [1, "notif-list"], ["class", "notif-item", 3, "unread", "click", 4, "ngFor", "ngForOf"], [1, "notif-item", 3, "click"], [1, "notif-icon-wrap", 3, "ngClass"], [1, "notif-body"], [1, "notif-item-title"], ["class", "notif-unread-dot", 4, "ngIf"], [1, "notif-msg"], [1, "notif-time"], ["title", "Dismiss notification", 1, "notif-delete-btn", 3, "click"], [1, "notif-unread-dot"]],
    template: function NotificationsPageComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5, "Notifications");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](6, NotificationsPageComponent_span_6_Template, 2, 1, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "div", 5)(8, "div", 6)(9, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function NotificationsPageComponent_Template_button_click_9_listener() {
          return ctx.setFilter("all");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](10, "All");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function NotificationsPageComponent_Template_button_click_11_listener() {
          return ctx.setFilter("unread");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](12, " Unread ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](13, NotificationsPageComponent_span_13_Template, 2, 1, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function NotificationsPageComponent_Template_button_click_14_listener() {
          return ctx.markAllRead();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](16, "done_all");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](17, " Mark all read ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](18, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](19, NotificationsPageComponent_div_19_Template, 4, 0, "div", 11)(20, NotificationsPageComponent_div_20_Template, 9, 1, "div", 12)(21, NotificationsPageComponent_div_21_Template, 9, 1, "div", 13)(22, NotificationsPageComponent_div_22_Template, 2, 1, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](23, "div", 15)(24, "button", 16)(25, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](26, "dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](27, " Go to Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](28, "button", 17)(29, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](30, "tune");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](31, " Notification Preferences");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.unreadCount > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("active", ctx.activeFilter === "all");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("active", ctx.activeFilter === "unread");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.unreadCount > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", ctx.unreadCount === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx.isLoading && ctx.error);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx.isLoading && !ctx.error && ctx.displayedNotifications.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx.isLoading && !ctx.error && ctx.displayedNotifications.length > 0);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink, _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButton, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_4__.MatProgressSpinnerModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_4__.MatProgressSpinner, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__.MatSnackBarModule],
    styles: ["@charset \"UTF-8\";\n.notif-page[_ngcontent-%COMP%] {\n  font-family: \"Inter\", sans-serif;\n  color: #1e293b;\n  min-height: 100vh;\n}\n\n\n\n.notif-header[_ngcontent-%COMP%] {\n  background: #fff;\n  border-bottom: 1px solid #e2e8f0;\n  padding: 28px 24px 20px;\n  position: sticky;\n  top: 0;\n  z-index: 10;\n}\n\n.notif-header-inner[_ngcontent-%COMP%] {\n  max-width: 720px;\n  margin: 0 auto;\n}\n\n.notif-title-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  margin-bottom: 16px;\n}\n.notif-title-row[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 1.8rem;\n  font-weight: 800;\n  margin: 0;\n}\n\n.notif-badge[_ngcontent-%COMP%] {\n  background: #dc2626;\n  color: #fff;\n  font-size: 0.75rem;\n  font-weight: 700;\n  border-radius: 20px;\n  padding: 2px 10px;\n}\n\n.notif-header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n\n.notif-filter-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  background: #f8fafc;\n  border-radius: 8px;\n  padding: 4px;\n  gap: 4px;\n}\n\n.filter-tab[_ngcontent-%COMP%] {\n  padding: 6px 16px;\n  border-radius: 6px;\n  border: none;\n  cursor: pointer;\n  font-size: 0.88rem;\n  font-weight: 600;\n  color: #64748b;\n  background: transparent;\n  transition: all 0.15s;\n}\n.filter-tab.active[_ngcontent-%COMP%] {\n  background: #fff;\n  color: #0d47a1;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);\n}\n\n.tab-count[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  background: #dc2626;\n  color: #fff;\n  border-radius: 20px;\n  padding: 1px 7px;\n  font-size: 0.7rem;\n  margin-left: 4px;\n}\n\n.mark-all-btn[_ngcontent-%COMP%] {\n  font-size: 0.85rem !important;\n}\n\n\n\n.notif-container[_ngcontent-%COMP%] {\n  max-width: 720px;\n  margin: 0 auto;\n  padding: 16px 24px;\n}\n\n.notif-empty[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 80px 24px;\n}\n.notif-empty[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 3.5rem;\n  width: 3.5rem;\n  height: 3.5rem;\n  color: #64748b;\n  margin-bottom: 12px;\n}\n.notif-empty[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  font-weight: 700;\n  margin: 0 0 8px;\n}\n.notif-empty[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #64748b;\n  margin-bottom: 20px;\n}\n\n.notif-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n\n.notif-item[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  align-items: flex-start;\n  padding: 16px 14px;\n  border-radius: 10px;\n  cursor: pointer;\n  transition: background 0.15s;\n  \n\n  display: flex;\n  align-items: flex-start;\n  gap: 14px;\n}\n.notif-item[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n}\n.notif-item.unread[_ngcontent-%COMP%] {\n  background: #eff6ff;\n}\n.notif-item.unread[_ngcontent-%COMP%]:hover {\n  background: #dbeafe;\n}\n.notif-item.unread[_ngcontent-%COMP%]   .notif-item-title[_ngcontent-%COMP%] {\n  color: #0d47a1;\n}\n\n.notif-icon-wrap[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 44px;\n  height: 44px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.notif-icon-wrap[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  width: 1.4rem;\n  height: 1.4rem;\n  color: #fff;\n}\n.notif-icon-wrap.icon-navy[_ngcontent-%COMP%] {\n  background: #0d47a1;\n}\n.notif-icon-wrap.icon-teal[_ngcontent-%COMP%] {\n  background: #00796b;\n}\n.notif-icon-wrap.icon-gold[_ngcontent-%COMP%] {\n  background: #f59e0b;\n}\n.notif-icon-wrap.icon-red[_ngcontent-%COMP%] {\n  background: #dc2626;\n}\n\n.notif-body[_ngcontent-%COMP%] {\n  flex: 1;\n}\n\n.notif-item-title[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 700;\n  margin-bottom: 4px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  color: #1e293b;\n}\n\n.notif-unread-dot[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: #0d47a1;\n  flex-shrink: 0;\n}\n\n.notif-msg[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  color: #64748b;\n  margin: 0 0 6px;\n  line-height: 1.5;\n}\n\n.notif-time[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 0.78rem;\n  color: #64748b;\n}\n.notif-time[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  width: 0.9rem;\n  height: 0.9rem;\n}\n\n\n\n.notif-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  gap: 16px;\n  flex-wrap: wrap;\n  padding: 28px 24px;\n  border-top: 1px solid #e2e8f0;\n}\n\n\n\n.notif-loading[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 64px 16px;\n  gap: 16px;\n  color: #64748b;\n}\n.notif-loading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  margin: 0;\n}\n\n.notif-error[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 64px 16px;\n  gap: 12px;\n  color: #64748b;\n  text-align: center;\n}\n.notif-error[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 48px;\n  width: 48px;\n  height: 48px;\n  color: #cbd5e1;\n}\n.notif-error[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  max-width: 320px;\n}\n\n\n\n.notif-delete-btn[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  align-self: flex-start;\n  margin-top: 2px;\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: #94a3b8;\n  padding: 4px;\n  border-radius: 6px;\n  transition: all 0.2s;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.notif-delete-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n}\n.notif-delete-btn[_ngcontent-%COMP%]:hover {\n  background: #fee2e2;\n  color: #b91c1c;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvbm90aWZpY2F0aW9ucy9ub3RpZmljYXRpb25zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUdoQjtFQUFjLGdDQUFBO0VBQWtDLGNBRjNCO0VBRXlDLGlCQUFBO0FBRTlEOztBQUFBLGlCQUFBO0FBQ0E7RUFDRSxnQkFBQTtFQUFrQixnQ0FBQTtFQUNsQix1QkFBQTtFQUF5QixnQkFBQTtFQUFrQixNQUFBO0VBQVEsV0FBQTtBQU9yRDs7QUFMQTtFQUFzQixnQkFBQTtFQUFrQixjQUFBO0FBVXhDOztBQVRBO0VBQ0UsYUFBQTtFQUFlLG1CQUFBO0VBQXFCLFNBQUE7RUFBVyxtQkFBQTtBQWVqRDtBQWRFO0VBQUssaUJBQUE7RUFBbUIsZ0JBQUE7RUFBa0IsU0FBQTtBQW1CNUM7O0FBakJBO0VBQ0UsbUJBQUE7RUFBcUIsV0FBQTtFQUNyQixrQkFBQTtFQUFtQixnQkFBQTtFQUFrQixtQkFBQTtFQUFxQixpQkFBQTtBQXdCNUQ7O0FBdEJBO0VBQXdCLGFBQUE7RUFBZSxtQkFBQTtFQUFxQiw4QkFBQTtFQUFnQyxlQUFBO0VBQWlCLFNBQUE7QUE4QjdHOztBQTVCQTtFQUFxQixhQUFBO0VBQWUsbUJBcEIvQjtFQW9CZ0Qsa0JBQUE7RUFBb0IsWUFBQTtFQUFjLFFBQUE7QUFvQ3ZGOztBQW5DQTtFQUNFLGlCQUFBO0VBQW1CLGtCQUFBO0VBQW9CLFlBQUE7RUFBYyxlQUFBO0VBQ3JELGtCQUFBO0VBQW1CLGdCQUFBO0VBQWtCLGNBdkJEO0VBdUJnQix1QkFBQTtFQUF5QixxQkFBQTtBQTZDL0U7QUE1Q0U7RUFBVyxnQkFBQTtFQUFrQixjQXpCeEI7RUF5QnNDLHdDQUFBO0FBaUQ3Qzs7QUEvQ0E7RUFDRSxvQkFBQTtFQUFzQixtQkFBQTtFQUFxQix1QkFBQTtFQUMzQyxtQkFBQTtFQUFxQixXQUFBO0VBQWEsbUJBQUE7RUFBcUIsZ0JBQUE7RUFBa0IsaUJBQUE7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QUFBO0VBQWEsWUFBQTtBQW9MM0M7QUFuTEU7RUFBVSxtQkFBQTtFQUFxQixjQUFBO0FBdUxqQyIsInNvdXJjZXNDb250ZW50IjpbIiRuYXZ5OiAjMGQ0N2ExOyAkdGVhbDogIzAwNzk2YjsgJGdvbGQ6ICNmNTllMGI7XHJcbiRiZzogI2Y4ZmFmYzsgJHRleHQ6ICMxZTI5M2I7ICRtdXRlZDogIzY0NzQ4YjsgJGJvcmRlcjogI2UyZThmMDtcclxuXHJcbi5ub3RpZi1wYWdlIHsgZm9udC1mYW1pbHk6ICdJbnRlcicsIHNhbnMtc2VyaWY7IGNvbG9yOiAkdGV4dDsgbWluLWhlaWdodDogMTAwdmg7IH1cclxuXHJcbi8qIMOiwpTCgMOiwpTCgCBIZWFkZXIgw6LClMKAw6LClMKAICovXHJcbi5ub3RpZi1oZWFkZXIge1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7IGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkYm9yZGVyO1xyXG4gIHBhZGRpbmc6IDI4cHggMjRweCAyMHB4OyBwb3NpdGlvbjogc3RpY2t5OyB0b3A6IDA7IHotaW5kZXg6IDEwO1xyXG59XHJcbi5ub3RpZi1oZWFkZXItaW5uZXIgeyBtYXgtd2lkdGg6IDcyMHB4OyBtYXJnaW46IDAgYXV0bzsgfVxyXG4ubm90aWYtdGl0bGUtcm93IHtcclxuICBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDE0cHg7IG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbiAgaDEgeyBmb250LXNpemU6IDEuOHJlbTsgZm9udC13ZWlnaHQ6IDgwMDsgbWFyZ2luOiAwOyB9XHJcbn1cclxuLm5vdGlmLWJhZGdlIHtcclxuICBiYWNrZ3JvdW5kOiAjZGMyNjI2OyBjb2xvcjogI2ZmZjtcclxuICBmb250LXNpemU6IC43NXJlbTsgZm9udC13ZWlnaHQ6IDcwMDsgYm9yZGVyLXJhZGl1czogMjBweDsgcGFkZGluZzogMnB4IDEwcHg7XHJcbn1cclxuLm5vdGlmLWhlYWRlci1hY3Rpb25zIHsgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyBmbGV4LXdyYXA6IHdyYXA7IGdhcDogMTJweDsgfVxyXG5cclxuLm5vdGlmLWZpbHRlci10YWJzIHsgZGlzcGxheTogZmxleDsgYmFja2dyb3VuZDogJGJnOyBib3JkZXItcmFkaXVzOiA4cHg7IHBhZGRpbmc6IDRweDsgZ2FwOiA0cHg7IH1cclxuLmZpbHRlci10YWIge1xyXG4gIHBhZGRpbmc6IDZweCAxNnB4OyBib3JkZXItcmFkaXVzOiA2cHg7IGJvcmRlcjogbm9uZTsgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGZvbnQtc2l6ZTogLjg4cmVtOyBmb250LXdlaWdodDogNjAwOyBjb2xvcjogJG11dGVkOyBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDsgdHJhbnNpdGlvbjogYWxsIC4xNXM7XHJcbiAgJi5hY3RpdmUgeyBiYWNrZ3JvdW5kOiAjZmZmOyBjb2xvcjogJG5hdnk7IGJveC1zaGFkb3c6IDAgMXB4IDRweCByZ2JhKDAsMCwwLC4xKTsgfVxyXG59XHJcbi50YWItY291bnQge1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kOiAjZGMyNjI2OyBjb2xvcjogI2ZmZjsgYm9yZGVyLXJhZGl1czogMjBweDsgcGFkZGluZzogMXB4IDdweDsgZm9udC1zaXplOiAuN3JlbTsgbWFyZ2luLWxlZnQ6IDRweDtcclxufVxyXG4ubWFyay1hbGwtYnRuIHsgZm9udC1zaXplOiAuODVyZW0gIWltcG9ydGFudDsgfVxyXG5cclxuLyogw6LClMKAw6LClMKAIExpc3Qgw6LClMKAw6LClMKAICovXHJcbi5ub3RpZi1jb250YWluZXIgeyBtYXgtd2lkdGg6IDcyMHB4OyBtYXJnaW46IDAgYXV0bzsgcGFkZGluZzogMTZweCAyNHB4OyB9XHJcblxyXG4ubm90aWYtZW1wdHkge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjsgcGFkZGluZzogODBweCAyNHB4O1xyXG4gIG1hdC1pY29uIHsgZm9udC1zaXplOiAzLjVyZW07IHdpZHRoOiAzLjVyZW07IGhlaWdodDogMy41cmVtOyBjb2xvcjogJG11dGVkOyBtYXJnaW4tYm90dG9tOiAxMnB4OyB9XHJcbiAgaDMgeyBmb250LXNpemU6IDEuMnJlbTsgZm9udC13ZWlnaHQ6IDcwMDsgbWFyZ2luOiAwIDAgOHB4OyB9XHJcbiAgcCAgeyBjb2xvcjogJG11dGVkOyBtYXJnaW4tYm90dG9tOiAyMHB4OyB9XHJcbn1cclxuXHJcbi5ub3RpZi1saXN0IHsgZGlzcGxheTogZmxleDsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgZ2FwOiAycHg7IH1cclxuXHJcbi5ub3RpZi1pdGVtIHtcclxuICBkaXNwbGF5OiBmbGV4OyBnYXA6IDE2cHg7IGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gIHBhZGRpbmc6IDE2cHggMTRweDsgYm9yZGVyLXJhZGl1czogMTBweDsgY3Vyc29yOiBwb2ludGVyOyB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIC4xNXM7XHJcbiAgJjpob3ZlciB7IGJhY2tncm91bmQ6ICRiZzsgfVxyXG4gICYudW5yZWFkIHsgYmFja2dyb3VuZDogI2VmZjZmZjtcclxuICAgICY6aG92ZXIgeyBiYWNrZ3JvdW5kOiAjZGJlYWZlOyB9XHJcbiAgICAubm90aWYtaXRlbS10aXRsZSB7IGNvbG9yOiAkbmF2eTsgfVxyXG4gIH1cclxuICAvKiBVcGRhdGUgbm90aWYtaXRlbSB0byBhY2NvbW1vZGF0ZSBkZWxldGUgYnV0dG9uICovXHJcbiAgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7IGdhcDogMTRweDtcclxufVxyXG5cclxuLm5vdGlmLWljb24td3JhcCB7XHJcbiAgZmxleC1zaHJpbms6IDA7IHdpZHRoOiA0NHB4OyBoZWlnaHQ6IDQ0cHg7IGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgbWF0LWljb24geyBmb250LXNpemU6IDEuNHJlbTsgd2lkdGg6IDEuNHJlbTsgaGVpZ2h0OiAxLjRyZW07IGNvbG9yOiAjZmZmOyB9XHJcbiAgJi5pY29uLW5hdnkgeyBiYWNrZ3JvdW5kOiAkbmF2eTsgfVxyXG4gICYuaWNvbi10ZWFsICB7IGJhY2tncm91bmQ6ICR0ZWFsOyB9XHJcbiAgJi5pY29uLWdvbGQgIHsgYmFja2dyb3VuZDogJGdvbGQ7IH1cclxuICAmLmljb24tcmVkICAgeyBiYWNrZ3JvdW5kOiAjZGMyNjI2OyB9XHJcbn1cclxuXHJcbi5ub3RpZi1ib2R5IHsgZmxleDogMTsgfVxyXG5cclxuLm5vdGlmLWl0ZW0tdGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogLjk1cmVtOyBmb250LXdlaWdodDogNzAwOyBtYXJnaW4tYm90dG9tOiA0cHg7XHJcbiAgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZ2FwOiA4cHg7IGNvbG9yOiAkdGV4dDtcclxufVxyXG4ubm90aWYtdW5yZWFkLWRvdCB7XHJcbiAgd2lkdGg6IDhweDsgaGVpZ2h0OiA4cHg7IGJvcmRlci1yYWRpdXM6IDUwJTsgYmFja2dyb3VuZDogJG5hdnk7IGZsZXgtc2hyaW5rOiAwO1xyXG59XHJcbi5ub3RpZi1tc2cgeyBmb250LXNpemU6IC44OHJlbTsgY29sb3I6ICRtdXRlZDsgbWFyZ2luOiAwIDAgNnB4OyBsaW5lLWhlaWdodDogMS41OyB9XHJcbi5ub3RpZi10aW1lIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZ2FwOiA0cHg7IGZvbnQtc2l6ZTogLjc4cmVtOyBjb2xvcjogJG11dGVkO1xyXG4gIG1hdC1pY29uIHsgZm9udC1zaXplOiAuOXJlbTsgd2lkdGg6IC45cmVtOyBoZWlnaHQ6IC45cmVtOyB9XHJcbn1cclxuXHJcbi8qIMOiwpTCgMOiwpTCgCBGb290ZXIgw6LClMKAw6LClMKAICovXHJcbi5ub3RpZi1mb290ZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7IGp1c3RpZnktY29udGVudDogY2VudGVyOyBnYXA6IDE2cHg7IGZsZXgtd3JhcDogd3JhcDtcclxuICBwYWRkaW5nOiAyOHB4IDI0cHg7IGJvcmRlci10b3A6IDFweCBzb2xpZCAkYm9yZGVyO1xyXG59XHJcblxyXG4vKiDDosKUwoDDosKUwoAgTG9hZGluZyAvIEVycm9yIMOiwpTCgMOiwpTCgCAqL1xyXG4ubm90aWYtbG9hZGluZyB7XHJcbiAgZGlzcGxheTogZmxleDsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgcGFkZGluZzogNjRweCAxNnB4OyBnYXA6IDE2cHg7IGNvbG9yOiAkbXV0ZWQ7XHJcbiAgcCB7IGZvbnQtc2l6ZTogMTRweDsgbWFyZ2luOiAwOyB9XHJcbn1cclxuXHJcbi5ub3RpZi1lcnJvciB7XHJcbiAgZGlzcGxheTogZmxleDsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgcGFkZGluZzogNjRweCAxNnB4OyBnYXA6IDEycHg7IGNvbG9yOiAkbXV0ZWQ7IHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXQtaWNvbiB7IGZvbnQtc2l6ZTogNDhweDsgd2lkdGg6IDQ4cHg7IGhlaWdodDogNDhweDsgY29sb3I6ICNjYmQ1ZTE7IH1cclxuICBwIHsgZm9udC1zaXplOiAxNHB4OyBtYXgtd2lkdGg6IDMyMHB4OyB9XHJcbn1cclxuXHJcbi8qIMOiwpTCgMOiwpTCgCBEZWxldGUgYnV0dG9uIMOiwpTCgMOiwpTCgCAqL1xyXG4ubm90aWYtZGVsZXRlLWJ0biB7XHJcbiAgZmxleC1zaHJpbms6IDA7IGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7IG1hcmdpbi10b3A6IDJweDtcclxuICBiYWNrZ3JvdW5kOiBub25lOyBib3JkZXI6IG5vbmU7IGN1cnNvcjogcG9pbnRlcjtcclxuICBjb2xvcjogIzk0YTNiODsgcGFkZGluZzogNHB4OyBib3JkZXItcmFkaXVzOiA2cHg7IHRyYW5zaXRpb246IGFsbCAuMnM7XHJcbiAgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgbWF0LWljb24geyBmb250LXNpemU6IDE2cHg7IHdpZHRoOiAxNnB4OyBoZWlnaHQ6IDE2cHg7IH1cclxuICAmOmhvdmVyIHsgYmFja2dyb3VuZDogI2ZlZTJlMjsgY29sb3I6ICNiOTFjMWM7IH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  }));
}
_staticBlock();

/***/ })

}]);
//# sourceMappingURL=src_app_pages_notifications_notifications_component_ts.js.map