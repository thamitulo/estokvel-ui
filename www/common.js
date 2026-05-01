"use strict";
(self["webpackChunkestokvel_ui"] = self["webpackChunkestokvel_ui"] || []).push([["common"],{

/***/ 2352:
/*!**********************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2022/clipboard.mjs ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CDK_COPY_TO_CLIPBOARD_CONFIG: () => (/* binding */ CDK_COPY_TO_CLIPBOARD_CONFIG),
/* harmony export */   CdkCopyToClipboard: () => (/* binding */ CdkCopyToClipboard),
/* harmony export */   Clipboard: () => (/* binding */ Clipboard),
/* harmony export */   ClipboardModule: () => (/* binding */ ClipboardModule),
/* harmony export */   PendingCopy: () => (/* binding */ PendingCopy)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2481);



/**
 * A pending copy-to-clipboard operation.
 *
 * The implementation of copying text to the clipboard modifies the DOM and
 * forces a re-layout. This re-layout can take too long if the string is large,
 * causing the execCommand('copy') to happen too long after the user clicked.
 * This results in the browser refusing to copy. This object lets the
 * re-layout happen in a separate tick from copying by providing a copy function
 * that can be called later.
 *
 * Destroy must be called when no longer in use, regardless of whether `copy` is
 * called.
 */
class PendingCopy {
  _document;
  _textarea;
  constructor(text, _document) {
    this._document = _document;
    const textarea = this._textarea = this._document.createElement('textarea');
    const styles = textarea.style;
    // Hide the element for display and accessibility. Set a fixed position so the page layout
    // isn't affected. We use `fixed` with `top: 0`, because focus is moved into the textarea
    // for a split second and if it's off-screen, some browsers will attempt to scroll it into view.
    styles.position = 'fixed';
    styles.top = styles.opacity = '0';
    styles.left = '-999em';
    textarea.setAttribute('aria-hidden', 'true');
    textarea.value = text;
    // Making the textarea `readonly` prevents the screen from jumping on iOS Safari (see #25169).
    textarea.readOnly = true;
    // The element needs to be inserted into the fullscreen container, if the page
    // is in fullscreen mode, otherwise the browser won't execute the copy command.
    (this._document.fullscreenElement || this._document.body).appendChild(textarea);
  }
  /** Finishes copying the text. */
  copy() {
    const textarea = this._textarea;
    let successful = false;
    try {
      // Older browsers could throw if copy is not supported.
      if (textarea) {
        const currentFocus = this._document.activeElement;
        textarea.select();
        textarea.setSelectionRange(0, textarea.value.length);
        successful = this._document.execCommand('copy');
        if (currentFocus) {
          currentFocus.focus();
        }
      }
    } catch {
      // Discard error.
      // Initial setting of {@code successful} will represent failure here.
    }
    return successful;
  }
  /** Cleans up DOM changes used to perform the copy operation. */
  destroy() {
    const textarea = this._textarea;
    if (textarea) {
      textarea.remove();
      this._textarea = undefined;
    }
  }
}

/**
 * A service for copying text to the clipboard.
 */
class Clipboard {
  _document = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.DOCUMENT);
  constructor() {}
  /**
   * Copies the provided text into the user's clipboard.
   *
   * @param text The string to copy.
   * @returns Whether the operation was successful.
   */
  copy(text) {
    const pendingCopy = this.beginCopy(text);
    const successful = pendingCopy.copy();
    pendingCopy.destroy();
    return successful;
  }
  /**
   * Prepares a string to be copied later. This is useful for large strings
   * which take too long to successfully render and be copied in the same tick.
   *
   * The caller must call `destroy` on the returned `PendingCopy`.
   *
   * @param text The string to copy.
   * @returns the pending copy operation.
   */
  beginCopy(text) {
    return new PendingCopy(text, this._document);
  }
  static ɵfac = function Clipboard_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || Clipboard)();
  };
  static ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: Clipboard,
    factory: Clipboard.ɵfac,
    providedIn: 'root'
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__.setClassMetadata(Clipboard, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], () => [], null);
})();

/** Injection token that can be used to provide the default options to `CdkCopyToClipboard`. */
const CDK_COPY_TO_CLIPBOARD_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('CDK_COPY_TO_CLIPBOARD_CONFIG');
/**
 * Provides behavior for a button that when clicked copies content into user's
 * clipboard.
 */
class CdkCopyToClipboard {
  _clipboard = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(Clipboard);
  _ngZone = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone);
  /** Content to be copied. */
  text = '';
  /**
   * How many times to attempt to copy the text. This may be necessary for longer text, because
   * the browser needs time to fill an intermediate textarea element and copy the content.
   */
  attempts = 1;
  /**
   * Emits when some text is copied to the clipboard. The
   * emitted value indicates whether copying was successful.
   */
  copied = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
  /** Copies that are currently being attempted. */
  _pending = new Set();
  /** Whether the directive has been destroyed. */
  _destroyed;
  /** Timeout for the current copy attempt. */
  _currentTimeout;
  constructor() {
    const config = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(CDK_COPY_TO_CLIPBOARD_CONFIG, {
      optional: true
    });
    if (config && config.attempts != null) {
      this.attempts = config.attempts;
    }
  }
  /** Copies the current text to the clipboard. */
  copy(attempts = this.attempts) {
    if (attempts > 1) {
      let remainingAttempts = attempts;
      const pending = this._clipboard.beginCopy(this.text);
      this._pending.add(pending);
      const attempt = () => {
        const successful = pending.copy();
        if (!successful && --remainingAttempts && !this._destroyed) {
          // We use 1 for the timeout since it's more predictable when flushing in unit tests.
          this._currentTimeout = this._ngZone.runOutsideAngular(() => setTimeout(attempt, 1));
        } else {
          this._currentTimeout = null;
          this._pending.delete(pending);
          pending.destroy();
          this.copied.emit(successful);
        }
      };
      attempt();
    } else {
      this.copied.emit(this._clipboard.copy(this.text));
    }
  }
  ngOnDestroy() {
    if (this._currentTimeout) {
      clearTimeout(this._currentTimeout);
    }
    this._pending.forEach(copy => copy.destroy());
    this._pending.clear();
    this._destroyed = true;
  }
  static ɵfac = function CdkCopyToClipboard_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || CdkCopyToClipboard)();
  };
  static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
    type: CdkCopyToClipboard,
    selectors: [["", "cdkCopyToClipboard", ""]],
    hostBindings: function CdkCopyToClipboard_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CdkCopyToClipboard_click_HostBindingHandler() {
          return ctx.copy();
        });
      }
    },
    inputs: {
      text: [0, "cdkCopyToClipboard", "text"],
      attempts: [0, "cdkCopyToClipboardAttempts", "attempts"]
    },
    outputs: {
      copied: "cdkCopyToClipboardCopied"
    }
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__.setClassMetadata(CdkCopyToClipboard, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
    args: [{
      selector: '[cdkCopyToClipboard]',
      host: {
        '(click)': 'copy()'
      }
    }]
  }], () => [], {
    text: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
      args: ['cdkCopyToClipboard']
    }],
    attempts: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
      args: ['cdkCopyToClipboardAttempts']
    }],
    copied: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output,
      args: ['cdkCopyToClipboardCopied']
    }]
  });
})();
class ClipboardModule {
  static ɵfac = function ClipboardModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ClipboardModule)();
  };
  static ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: ClipboardModule
  });
  static ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({});
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__.setClassMetadata(ClipboardModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule,
    args: [{
      imports: [CdkCopyToClipboard],
      exports: [CdkCopyToClipboard]
    }]
  }], null, null);
})();


/***/ }),

/***/ 6121:
/*!***********************************!*\
  !*** ./src/app/models/stokvel.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StokvelType: () => (/* binding */ StokvelType)
/* harmony export */ });
var _staticBlock;
class StokvelType {
  constructor(name) {
    this.name = name;
  }
  static values() {
    return [StokvelType.INVESTMENT, StokvelType.PROPERTY, StokvelType.FAMILY, StokvelType.BURIAL, StokvelType.ROTATIONAL];
  }
  static #_ = _staticBlock = () => (this.INVESTMENT = new StokvelType('investment'), this.PROPERTY = new StokvelType('property'), this.FAMILY = new StokvelType('family'), this.BURIAL = new StokvelType('burial'), this.ROTATIONAL = new StokvelType('rotational'));
}
_staticBlock();

/***/ }),

/***/ 6881:
/*!*********************************************************!*\
  !*** ./src/app/services/stokvel/transaction.service.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TransactionService: () => (/* binding */ TransactionService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 3855);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ 6052);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4205);
var _staticBlock;




class TransactionService {
  constructor(http) {
    this.http = http;
    this.apiUrl = `${_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiUrl}transactions`;
  }
  /**
   * Record a contribution to a stokvel
   */
  contribute(request) {
    return this.http.post(`${this.apiUrl}/contribute`, request);
  }
  /**
   * Record a payout from a stokvel
   */
  payout(request) {
    return this.http.post(`${this.apiUrl}/payout`, request);
  }
  /**
   * Get recent transactions for current user
   */
  getRecentTransactions(limit = 10) {
    const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams().set('limit', limit.toString());
    return this.http.get(`${this.apiUrl}/recent`, {
      params
    });
  }
  /**
   * Get account balance for current user
   */
  getBalance() {
    return this.http.get(`${this.apiUrl}/balance`);
  }
  /**
   * Get all transactions for a specific stokvel
   */
  getStokvelTransactions(stokvelId) {
    return this.http.get(`${this.apiUrl}/stokvels/${stokvelId}`);
  }
  /**
   * Deposit funds into user's wallet
   */
  depositToWallet(amount, reference) {
    return this.http.post(`${this.apiUrl}/wallet/deposit`, {
      amount,
      reference: reference || `deposit-${Date.now()}`,
      currency: 'ZAR'
    });
  }
  /**
   * Transfer funds from wallet to a stokvel
   */
  transferToStokvel(request) {
    return this.http.post(`${this.apiUrl}/wallet/transfer`, request);
  }
  static #_ = _staticBlock = () => (this.ɵfac = function TransactionService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || TransactionService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient));
  }, this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: TransactionService,
    factory: TransactionService.ɵfac,
    providedIn: 'root'
  }));
}
_staticBlock();

/***/ }),

/***/ 9259:
/*!***************************************!*\
  !*** ./src/app/utils/StokvelUtils.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StokvelUtils: () => (/* binding */ StokvelUtils)
/* harmony export */ });
/* harmony import */ var _models_stokvel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/stokvel */ 6121);

class StokvelUtils {
  static getCollectedAmount(stokvel) {
    // Use backend-calculated collectedAmount when available, otherwise estimate from members × monthly contribution
    if (stokvel.collectedAmount != null) return stokvel.collectedAmount;
    const memberCount = stokvel.totalMembers ?? (stokvel.memberCount ?? 0) + (stokvel.adminCount ?? 0);
    return (stokvel.monthlyContribution ?? 0) * memberCount;
  }
  static getProgress(stokvel) {
    const collected = this.getCollectedAmount(stokvel);
    const progress = collected / (stokvel.targetAmount || 0) * 100;
    return Math.min(progress, 100);
  }
  static getRemainingAmount(stokvel) {
    const collected = this.getCollectedAmount(stokvel);
    return Math.max((stokvel?.targetAmount || 0) - collected, 0);
  }
  static isTargetReached(stokvel) {
    return this.getProgress(stokvel) >= 100;
  }
  static getFormattedProgress(stokvel) {
    return `${this.getProgress(stokvel).toFixed(1)}%`;
  }
  getCollectedAmount(stokvel) {
    return stokvel?.collectedAmount ?? 0;
  }
  static progressColor(stokvel) {
    const pct = this.getProgress(stokvel);
    if (pct >= 100) return 'primary';
    if (pct >= 50) return 'accent';
    return 'warn';
  }
  static defaultRules() {
    return [{
      id: 1,
      title: 'Regular Contributions',
      description: 'All members must make their contributions by the 7th of each month.',
      enabled: true
    }, {
      id: 2,
      title: 'Transparency',
      description: 'All financial transactions and records will be visible to all members.',
      enabled: true
    }, {
      id: 3,
      title: 'Meeting Attendance',
      description: 'Members should attend at least 75% of scheduled meetings.',
      enabled: true
    }, {
      id: 4,
      title: 'Payout Schedule',
      description: 'Payouts will follow the agreed rotational schedule strictly.',
      enabled: true
    }, {
      id: 5,
      title: 'New Member Approval',
      description: 'New members must be approved by majority vote of existing members.',
      enabled: true
    }];
  }
  static getStokvelTypeDisplayName(typeName) {
    const displayNames = {
      [_models_stokvel__WEBPACK_IMPORTED_MODULE_0__.StokvelType.INVESTMENT.name]: 'Investment Group',
      [_models_stokvel__WEBPACK_IMPORTED_MODULE_0__.StokvelType.PROPERTY.name]: 'Property Stokvel',
      [_models_stokvel__WEBPACK_IMPORTED_MODULE_0__.StokvelType.FAMILY.name]: 'Family Stokvel',
      [_models_stokvel__WEBPACK_IMPORTED_MODULE_0__.StokvelType.BURIAL.name]: 'Burial Stokvel',
      [_models_stokvel__WEBPACK_IMPORTED_MODULE_0__.StokvelType.ROTATIONAL.name]: 'Rotational Payment Stokvel'
    };
    return displayNames[typeName] || typeName;
  }
}

/***/ })

}]);
//# sourceMappingURL=common.js.map