"use strict";
(self["webpackChunkestokvel_ui"] = self["webpackChunkestokvel_ui"] || []).push([["src_app_pages_blog_blog_component_ts"],{

/***/ 4453:
/*!**********************************************!*\
  !*** ./src/app/pages/blog/blog.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BlogComponent: () => (/* binding */ BlogComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 4487);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../material.module */ 9439);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2481);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ 8388);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ 5541);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 3840);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/card */ 3777);
var _staticBlock;














function BlogComponent_mat_card_38_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "img", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const post_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", post_r2.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"])("alt", post_r2.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", post_r2.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", post_r2.category, " ");
  }
}
function BlogComponent_mat_card_38_span_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const tag_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](tag_r3);
  }
}
function BlogComponent_mat_card_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-card", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, BlogComponent_mat_card_38_div_1_Template, 4, 4, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "mat-card-content")(3, "div", 50)(4, "div", 29)(5, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "img", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 52)(8, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "Thami Tulo");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](12, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 55)(14, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, "schedule");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "h3", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "p", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](23, BlogComponent_mat_card_38_span_23_Template, 2, 1, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "mat-card-actions")(25, "button", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BlogComponent_mat_card_38_Template_button_click_25_listener() {
      const post_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r3.readPost(post_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](27, "arrow_forward");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28, " Read More ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "div", 61)(30, "span", 33)(31, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](32, "visibility");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "span", 33)(35, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](36, "favorite");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const post_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("featured", post_r2.featured);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", post_r2.imageUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](12, 10, post_r2.date, "mediumDate"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](post_r2.readTime);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](post_r2.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](post_r2.excerpt);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", post_r2.tags);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", post_r2.views, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", post_r2.likes, " ");
  }
}
function BlogComponent_div_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 66)(1, "button", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BlogComponent_div_39_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r3.loadMorePosts());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " Load More Posts ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function BlogComponent_button_74_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BlogComponent_button_74_Template_button_click_0_listener() {
      const category_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6).$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r3.filterPosts(category_r7.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "span", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "span", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const category_r7 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("active", ctx_r3.currentFilter === category_r7.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](category_r7.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](category_r7.count);
  }
}
function BlogComponent_div_80_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BlogComponent_div_80_Template_div_click_0_listener() {
      const post_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r8).$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r3.readPost(post_r9));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 72)(2, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 73)(5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const post_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](post_r9.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](7, 3, post_r9.date, "shortDate"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", post_r9.views, " views");
  }
}
function BlogComponent_div_99_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BlogComponent_div_99_div_7_Template_div_click_0_listener() {
      const post_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r10).$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r3.readPost(post_r11));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 80)(4, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "arrow_forward");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const post_r11 = ctx.$implicit;
    const i_r12 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("0", i_r12 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](post_r11.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](post_r11.excerpt);
  }
}
function BlogComponent_div_99_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 74)(1, "div", 75)(2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Welcome to eStokvel Series");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Start your journey with our comprehensive guide series");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, BlogComponent_div_99_div_7_Template, 10, 3, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r3.welcomeSeries);
  }
}
class BlogComponent {
  constructor(snackBar) {
    this.snackBar = snackBar;
    // Blog posts data
    this.allPosts = [{
      id: '1',
      title: 'Welcome to eStokvel: A Personal Message from Thami Tulo',
      excerpt: 'Join me on this exciting journey as we revolutionize traditional stokvels for the digital age. Discover why I created eStokvel and our vision for the future.',
      content: 'Full blog post content here...',
      date: new Date('2024-01-15'),
      readTime: '5 min read',
      category: 'welcome',
      tags: ['welcome', 'introduction', 'founder'],
      views: 1250,
      likes: 89,
      featured: true,
      imageUrl: '/assets/images/blog/welcome-post.jpg'
    }, {
      id: '2',
      title: 'Why Traditional Stokvels Need a Digital Transformation',
      excerpt: 'Exploring the challenges faced by traditional stokvels and how technology can solve them while preserving the cultural essence of these savings groups.',
      content: 'Full blog post content here...',
      date: new Date('2024-01-12'),
      readTime: '7 min read',
      category: 'platform',
      tags: ['digital transformation', 'technology', 'savings'],
      views: 890,
      likes: 67,
      featured: true,
      imageUrl: '/assets/images/blog/digital-transformation.jpg'
    }, {
      id: '3',
      title: '5 Essential Tips for Starting Your First Stokvel',
      excerpt: 'New to stokvels? Here are my top 5 tips for starting a successful stokvel that will stand the test of time and help you achieve your financial goals.',
      content: 'Full blog post content here...',
      date: new Date('2024-01-10'),
      readTime: '6 min read',
      category: 'tips',
      tags: ['beginners', 'tips', 'starting'],
      views: 1560,
      likes: 112,
      featured: false
    }, {
      id: '4',
      title: 'Understanding eStokvel: Platform Features & Benefits',
      excerpt: 'A comprehensive guide to all the features eStokvel offers to make stokvel management easier, more secure, and more efficient.',
      content: 'Full blog post content here...',
      date: new Date('2024-01-08'),
      readTime: '8 min read',
      category: 'platform',
      tags: ['features', 'platform', 'guide'],
      views: 720,
      likes: 45,
      featured: false
    }, {
      id: '5',
      title: 'Building Trust in Digital Financial Platforms',
      excerpt: 'How eStokvel ensures security, transparency, and trust - the three pillars that make traditional stokvels successful.',
      content: 'Full blog post content here...',
      date: new Date('2024-01-05'),
      readTime: '5 min read',
      category: 'platform',
      tags: ['trust', 'security', 'transparency'],
      views: 630,
      likes: 38,
      featured: false
    }, {
      id: '6',
      title: 'The Power of Community in Financial Growth',
      excerpt: 'Why stokvels are more than just savings groups - they are communities that support each other financially and emotionally.',
      content: 'Full blog post content here...',
      date: new Date('2024-01-03'),
      readTime: '4 min read',
      category: 'tips',
      tags: ['community', 'growth', 'support'],
      views: 940,
      likes: 76,
      featured: false
    }];
    // Welcome series posts
    this.welcomeSeries = [{
      id: '1',
      title: 'Welcome to eStokvel: A Personal Message',
      excerpt: 'Join me on this exciting journey as we revolutionize traditional stokvels',
      content: '',
      date: new Date('2024-01-15'),
      readTime: '5 min',
      category: 'welcome',
      tags: [],
      views: 1250,
      likes: 89,
      featured: false
    }, {
      id: '2',
      title: 'Getting Started: Your First Stokvel',
      excerpt: 'Step-by-step guide to creating and managing your first digital stokvel',
      content: '',
      date: new Date('2024-01-14'),
      readTime: '6 min',
      category: 'welcome',
      tags: [],
      views: 890,
      likes: 67,
      featured: false
    }, {
      id: '3',
      title: 'Understanding Platform Features',
      excerpt: 'Master all the tools and features eStokvel offers for your stokvel',
      content: '',
      date: new Date('2024-01-13'),
      readTime: '7 min',
      category: 'welcome',
      tags: [],
      views: 760,
      likes: 54,
      featured: false
    }];
    // Categories
    this.categories = [{
      id: 'all',
      name: 'All Posts',
      count: 6
    }, {
      id: 'welcome',
      name: 'Welcome Series',
      count: 3
    }, {
      id: 'tips',
      name: 'Stokvel Tips',
      count: 2
    }, {
      id: 'platform',
      name: 'Platform Features',
      count: 3
    }];
    // Popular posts (top 3 by views)
    this.popularPosts = this.allPosts.sort((a, b) => b.views - a.views).slice(0, 3);
    // Filtering
    this.currentFilter = 'all';
    this.filteredPosts = this.allPosts;
    this.postsToShow = 4;
    // Newsletter
    this.newsletterEmail = '';
  }
  // Filter posts by category
  filterPosts(category) {
    this.currentFilter = category;
    if (category === 'all') {
      this.filteredPosts = this.allPosts.slice(0, this.postsToShow);
    } else {
      this.filteredPosts = this.allPosts.filter(post => post.category === category).slice(0, this.postsToShow);
    }
  }
  // Load more posts
  loadMorePosts() {
    this.postsToShow += 4;
    this.filterPosts(this.currentFilter);
  }
  // Read a blog post
  readPost(post) {
    // In a real app, this would navigate to the blog post detail page
    this.snackBar.open(`Opening: "${post.title}"`, 'Close', {
      duration: 3000
    });
    // Simulate view count increase
    post.views++;
  }
  // Subscribe to newsletter
  subscribeNewsletter() {
    if (this.newsletterEmail) {
      // In a real app, this would call a newsletter subscription service
      this.snackBar.open('Thank you for subscribing to our newsletter!', 'Close', {
        duration: 5000,
        panelClass: ['success-snackbar']
      });
      this.newsletterEmail = '';
    } else {
      this.snackBar.open('Please enter a valid email address', 'Close', {
        duration: 3000,
        panelClass: ['error-snackbar']
      });
    }
  }
  // Get total number of posts
  get totalPosts() {
    return this.allPosts.length;
  }
  // Get current year for footer
  get currentYear() {
    return new Date().getFullYear();
  }
  static #_ = _staticBlock = () => (this.ɵfac = function BlogComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || BlogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__.MatSnackBar));
  }, this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: BlogComponent,
    selectors: [["app-blog"]],
    decls: 100,
    vars: 13,
    consts: [[1, "blog-container"], [1, "blog-hero"], [1, "hero-background"], [1, "floating-shapes"], [1, "shape", "shape-1"], [1, "shape", "shape-2"], [1, "shape", "shape-3"], [1, "hero-content"], [1, "breadcrumb-nav"], ["routerLink", "/home", 1, "breadcrumb-link"], [1, "breadcrumb-separator"], [1, "breadcrumb-active"], [1, "hero-title"], [1, "hero-subtitle"], [1, "featured-badge"], [1, "blog-content"], [1, "content-layout"], [1, "posts-section"], [1, "section-header"], [1, "filter-options"], ["mat-button", "", 3, "click"], [1, "posts-grid"], ["class", "blog-post-card featured", 3, "featured", 4, "ngFor", "ngForOf"], ["class", "load-more", 4, "ngIf"], [1, "sidebar"], [1, "author-card"], [1, "author-profile"], [1, "author-avatar-large"], ["src", "/assets/images/thami-avatar.jpg", "alt", "Thami Tulo"], [1, "author-info"], [1, "author-title"], [1, "author-bio"], [1, "author-stats"], [1, "stat"], [1, "categories-card"], [1, "categories-list"], ["mat-button", "", "class", "category-item", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "popular-card"], [1, "popular-list"], ["class", "popular-item", 3, "click", 4, "ngFor", "ngForOf"], [1, "newsletter-card"], [1, "newsletter-icon"], [1, "newsletter-form", 3, "ngSubmit"], ["appearance", "outline", 1, "full-width"], ["matInput", "", "type", "email", "name", "newsletterEmail", "required", "", 3, "ngModelChange", "ngModel"], ["matSuffix", ""], ["mat-raised-button", "", "color", "primary", "type", "submit", 1, "full-width"], ["class", "welcome-series", 4, "ngIf"], [1, "blog-post-card", "featured"], ["class", "post-image", 4, "ngIf"], [1, "post-meta"], [1, "author-avatar"], [1, "author-details"], [1, "author-name"], [1, "post-date"], [1, "read-time"], [1, "post-title"], [1, "post-excerpt"], [1, "post-tags"], ["class", "post-tag", 4, "ngFor", "ngForOf"], ["mat-button", "", "color", "primary", 3, "click"], [1, "post-stats"], [1, "post-image"], [3, "src", "alt"], [1, "post-category", 3, "ngClass"], [1, "post-tag"], [1, "load-more"], ["mat-raised-button", "", "color", "primary", 3, "click"], ["mat-button", "", 1, "category-item", 3, "click"], [1, "category-name"], [1, "category-count"], [1, "popular-item", 3, "click"], [1, "popular-content"], [1, "popular-meta"], [1, "welcome-series"], [1, "series-header"], [1, "series-grid"], ["class", "series-item", 3, "click", 4, "ngFor", "ngForOf"], [1, "series-item", 3, "click"], [1, "series-number"], [1, "series-content"]],
    template: function BlogComponent_Template(rf, ctx) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "Blog");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "h1", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "eStokvel Blog");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, "Insights, stories, and updates from our journey to revolutionize stokvels in South Africa");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "div", 14)(20, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, "star");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23, "Featured: Welcome to eStokvel");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "div", 15)(25, "div", 16)(26, "div", 17)(27, "div", 18)(28, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](29, "Latest Posts");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "div", 19)(31, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BlogComponent_Template_button_click_31_listener() {
          return ctx.filterPosts("all");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](32, " All Posts ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BlogComponent_Template_button_click_33_listener() {
          return ctx.filterPosts("welcome");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](34, " Welcome Series ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BlogComponent_Template_button_click_35_listener() {
          return ctx.filterPosts("tips");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](36, " Stokvel Tips ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](38, BlogComponent_mat_card_38_Template, 38, 13, "mat-card", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](39, BlogComponent_div_39_Template, 3, 0, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "div", 24)(41, "mat-card", 25)(42, "mat-card-content")(43, "div", 26)(44, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](45, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "div", 29)(47, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](48, "Thami Tulo");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](49, "p", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](50, "Founder & CEO, eStokvel");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](51, "p", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](52, " Passionate about transforming traditional stokvels through technology. Building community-driven financial solutions for South Africans. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](53, "div", 32)(54, "div", 33)(55, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](56);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](57, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](58, "Posts");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](59, "div", 33)(60, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](61, "10K+");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](62, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](63, "Readers");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](64, "div", 33)(65, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](66, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](67, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](68, "Years");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](69, "mat-card", 34)(70, "mat-card-content")(71, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](72, "Categories");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](73, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](74, BlogComponent_button_74_Template, 5, 4, "button", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](75, "mat-card", 37)(76, "mat-card-content")(77, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](78, "Popular Posts");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](79, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](80, BlogComponent_div_80_Template, 12, 6, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](81, "mat-card", 40)(82, "mat-card-content")(83, "div", 41)(84, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](85, "email");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](86, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](87, "Stay Updated");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](88, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](89, "Get the latest stokvel tips and platform updates directly in your inbox.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](90, "form", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngSubmit", function BlogComponent_Template_form_ngSubmit_90_listener() {
          return ctx.subscribeNewsletter();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](91, "mat-form-field", 43)(92, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](93, "Your email address");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](94, "input", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function BlogComponent_Template_input_ngModelChange_94_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx.newsletterEmail, $event) || (ctx.newsletterEmail = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](95, "mat-icon", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](96, "email");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](97, "button", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](98, " Subscribe ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](99, BlogComponent_div_99_Template, 8, 1, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("active", ctx.currentFilter === "all");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("active", ctx.currentFilter === "welcome");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("active", ctx.currentFilter === "tips");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.filteredPosts);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.filteredPosts.length < ctx.allPosts.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.totalPosts);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.categories);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.popularPosts);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx.newsletterEmail);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.currentFilter === "all" || ctx.currentFilter === "welcome");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink, _material_module__WEBPACK_IMPORTED_MODULE_3__.MaterialModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatSuffix, _angular_material_input__WEBPACK_IMPORTED_MODULE_8__.MatInput, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButton, _angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCardActions, _angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCardContent, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgForm, _angular_common__WEBPACK_IMPORTED_MODULE_0__.DatePipe],
    styles: [".blog-container[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  background: white;\n}\n\n\n\n.blog-hero[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #092e6b 0%, #0d47a1 100%);\n  color: white;\n  padding: 80px 20px 60px;\n  position: relative;\n  overflow: hidden;\n}\n\n.hero-background[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  opacity: 0.1;\n}\n.hero-background[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: radial-gradient(circle at 20% 80%, rgba(255, 255, 255, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.05) 0%, transparent 50%);\n}\n\n.floating-shapes[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n.floating-shapes[_ngcontent-%COMP%]   .shape[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.1);\n}\n.floating-shapes[_ngcontent-%COMP%]   .shape.shape-1[_ngcontent-%COMP%] {\n  width: 120px;\n  height: 120px;\n  top: 10%;\n  right: 10%;\n  animation: _ngcontent-%COMP%_float 8s ease-in-out infinite;\n}\n.floating-shapes[_ngcontent-%COMP%]   .shape.shape-2[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  bottom: 20%;\n  left: 5%;\n  animation: _ngcontent-%COMP%_float 6s ease-in-out infinite reverse;\n}\n.floating-shapes[_ngcontent-%COMP%]   .shape.shape-3[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  top: 40%;\n  right: 20%;\n  animation: _ngcontent-%COMP%_float 10s ease-in-out infinite;\n}\n\n@keyframes _ngcontent-%COMP%_float {\n  0%, 100% {\n    transform: translateY(0px) rotate(0deg);\n  }\n  50% {\n    transform: translateY(-20px) rotate(180deg);\n  }\n}\n.hero-content[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  max-width: 1200px;\n  margin: 0 auto;\n  text-align: center;\n}\n\n.breadcrumb-nav[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  margin-bottom: 30px;\n  font-size: 14px;\n}\n\n.breadcrumb-link[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.8);\n  text-decoration: none;\n  transition: color 0.3s;\n}\n.breadcrumb-link[_ngcontent-%COMP%]:hover {\n  color: white;\n}\n\n.breadcrumb-separator[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.6);\n}\n\n.breadcrumb-active[_ngcontent-%COMP%] {\n  color: white;\n  font-weight: 600;\n}\n\n.hero-title[_ngcontent-%COMP%] {\n  font-size: 48px;\n  font-weight: 700;\n  margin: 0 0 20px;\n  color: white;\n}\n@media (max-width: 768px) {\n  .hero-title[_ngcontent-%COMP%] {\n    font-size: 36px;\n  }\n}\n\n.hero-subtitle[_ngcontent-%COMP%] {\n  font-size: 20px;\n  opacity: 0.9;\n  margin: 0 0 30px;\n  font-weight: 400;\n  max-width: 600px;\n  margin-left: auto;\n  margin-right: auto;\n}\n@media (max-width: 768px) {\n  .hero-subtitle[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n}\n\n.featured-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 20px;\n  background: rgba(255, 255, 255, 0.2);\n  border-radius: 25px;\n  -webkit-backdrop-filter: blur(10px);\n          backdrop-filter: blur(10px);\n  border: 1px solid rgba(255, 255, 255, 0.3);\n}\n.featured-badge[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  height: 16px;\n  width: 16px;\n}\n.featured-badge[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n}\n\n\n\n.blog-content[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 60px 20px;\n}\n\n.content-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 2fr 1fr;\n  gap: 40px;\n}\n@media (max-width: 968px) {\n  .content-layout[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 30px;\n  }\n}\n\n\n\n.section-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 30px;\n}\n@media (max-width: 768px) {\n  .section-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 16px;\n  }\n}\n.section-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 32px;\n  font-weight: 700;\n  color: #333;\n  margin: 0;\n}\n@media (max-width: 768px) {\n  .section-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 28px;\n  }\n}\n\n.filter-options[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.filter-options[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border-radius: 20px;\n  font-weight: 500;\n}\n.filter-options[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\n  background: #0d47a1;\n  color: white;\n}\n\n.posts-grid[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 30px;\n}\n\n\n\n.blog-post-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);\n  overflow: hidden;\n  transition: all 0.3s ease;\n}\n.blog-post-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5px);\n  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);\n}\n.blog-post-card.featured[_ngcontent-%COMP%] {\n  border-left: 4px solid #0d47a1;\n}\n\n.post-image[_ngcontent-%COMP%] {\n  position: relative;\n  height: 200px;\n  overflow: hidden;\n}\n.post-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n\n.post-category[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 16px;\n  left: 16px;\n  padding: 6px 12px;\n  border-radius: 20px;\n  font-size: 12px;\n  font-weight: 600;\n  text-transform: uppercase;\n}\n.post-category.welcome[_ngcontent-%COMP%] {\n  background: #0d47a1;\n  color: white;\n}\n.post-category.tips[_ngcontent-%COMP%] {\n  background: #ff9800;\n  color: white;\n}\n.post-category.platform[_ngcontent-%COMP%] {\n  background: #2196f3;\n  color: white;\n}\n\nmat-card-content[_ngcontent-%COMP%] {\n  padding: 24px;\n}\n\n.post-meta[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 16px;\n}\n@media (max-width: 480px) {\n  .post-meta[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 12px;\n  }\n}\n\n.author-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n\n.author-avatar[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  overflow: hidden;\n}\n.author-avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n\n.author-details[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.author-details[_ngcontent-%COMP%]   .author-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #333;\n  font-size: 14px;\n}\n.author-details[_ngcontent-%COMP%]   .post-date[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #666;\n}\n\n.read-time[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 12px;\n  color: #666;\n}\n.read-time[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n  height: 14px;\n  width: 14px;\n}\n\n.post-title[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n  margin: 0 0 12px;\n  color: #333;\n  line-height: 1.3;\n}\n@media (max-width: 768px) {\n  .post-title[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n}\n\n.post-excerpt[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #666;\n  line-height: 1.6;\n  margin: 0 0 16px;\n}\n\n.post-tags[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n\n.post-tag[_ngcontent-%COMP%] {\n  padding: 4px 8px;\n  background: #f0f0f0;\n  border-radius: 12px;\n  font-size: 11px;\n  color: #666;\n  font-weight: 500;\n}\n\nmat-card-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 16px 24px;\n  border-top: 1px solid #f0f0f0;\n}\n@media (max-width: 480px) {\n  mat-card-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 12px;\n    align-items: flex-start;\n  }\n}\n\n.post-stats[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n}\n.post-stats[_ngcontent-%COMP%]   .stat[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 12px;\n  color: #666;\n}\n.post-stats[_ngcontent-%COMP%]   .stat[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n  height: 14px;\n  width: 14px;\n}\n\n.load-more[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 40px;\n}\n\n\n\n.sidebar[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n}\n\nmat-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);\n}\n\n\n\n.author-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%] {\n  padding: 24px;\n}\n\n.author-profile[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 20px;\n}\n\n.author-avatar-large[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  overflow: hidden;\n  margin: 0 auto 16px;\n  border: 3px solid #f0f0f0;\n}\n.author-avatar-large[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n\n.author-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n  margin: 0 0 4px;\n  color: #333;\n}\n.author-info[_ngcontent-%COMP%]   .author-title[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #0d47a1;\n  font-weight: 600;\n  margin: 0 0 12px;\n}\n.author-info[_ngcontent-%COMP%]   .author-bio[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #666;\n  line-height: 1.5;\n  margin: 0;\n}\n\n.author-stats[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n  border-top: 1px solid #f0f0f0;\n  padding-top: 20px;\n}\n.author-stats[_ngcontent-%COMP%]   .stat[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.author-stats[_ngcontent-%COMP%]   .stat[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 20px;\n  font-weight: 700;\n  color: #333;\n  margin-bottom: 4px;\n}\n.author-stats[_ngcontent-%COMP%]   .stat[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #666;\n}\n\n\n\n.categories-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%] {\n  padding: 24px;\n}\n.categories-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n  margin: 0 0 16px;\n  color: #333;\n}\n\n.categories-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n\n.category-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 12px 16px;\n  border-radius: 8px;\n  transition: all 0.3s ease;\n}\n.category-item[_ngcontent-%COMP%]:hover {\n  background: #f8f9fa;\n}\n.category-item.active[_ngcontent-%COMP%] {\n  background: rgba(13, 71, 161, 0.1);\n  color: #0d47a1;\n}\n.category-item[_ngcontent-%COMP%]   .category-name[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n.category-item[_ngcontent-%COMP%]   .category-count[_ngcontent-%COMP%] {\n  font-size: 12px;\n  background: #f0f0f0;\n  padding: 2px 8px;\n  border-radius: 12px;\n}\n\n\n\n.popular-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%] {\n  padding: 24px;\n}\n.popular-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n  margin: 0 0 16px;\n  color: #333;\n}\n\n.popular-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n\n.popular-item[_ngcontent-%COMP%] {\n  padding: 12px;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.popular-item[_ngcontent-%COMP%]:hover {\n  background: #f8f9fa;\n}\n.popular-item[_ngcontent-%COMP%]:hover   h4[_ngcontent-%COMP%] {\n  color: #0d47a1;\n}\n.popular-item[_ngcontent-%COMP%]   .popular-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  margin: 0 0 4px;\n  color: #333;\n  line-height: 1.4;\n}\n.popular-item[_ngcontent-%COMP%]   .popular-content[_ngcontent-%COMP%]   .popular-meta[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  font-size: 12px;\n  color: #666;\n}\n\n\n\n.newsletter-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%] {\n  padding: 24px;\n  text-align: center;\n}\n\n.newsletter-icon[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  background: rgba(13, 71, 161, 0.1);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto 16px;\n}\n.newsletter-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 28px;\n  height: 28px;\n  width: 28px;\n  color: #0d47a1;\n}\n\n.newsletter-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n  margin: 0 0 8px;\n  color: #333;\n}\n.newsletter-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #666;\n  line-height: 1.5;\n  margin: 0 0 20px;\n}\n\n.newsletter-form[_ngcontent-%COMP%]   .full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n\n\n.welcome-series[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);\n  padding: 60px 20px;\n  margin-top: 40px;\n}\n\n.series-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 40px;\n}\n.series-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 32px;\n  font-weight: 700;\n  margin: 0 0 12px;\n  color: #333;\n}\n@media (max-width: 768px) {\n  .series-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 28px;\n  }\n}\n.series-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #666;\n  margin: 0;\n}\n\n.series-grid[_ngcontent-%COMP%] {\n  max-width: 1000px;\n  margin: 0 auto;\n  display: grid;\n  gap: 20px;\n}\n\n.series-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n  padding: 24px;\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.series-item[_ngcontent-%COMP%]:hover {\n  transform: translateX(10px);\n  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);\n}\n.series-item[_ngcontent-%COMP%]:hover   .series-number[_ngcontent-%COMP%] {\n  background: #0d47a1;\n  color: white;\n}\n.series-item[_ngcontent-%COMP%]:hover   mat-icon[_ngcontent-%COMP%] {\n  color: #0d47a1;\n}\n\n.series-number[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  background: #f0f0f0;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 18px;\n  font-weight: 700;\n  color: #666;\n  transition: all 0.3s ease;\n  flex-shrink: 0;\n}\n\n.series-content[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.series-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  margin: 0 0 8px;\n  color: #333;\n}\n.series-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #666;\n  line-height: 1.5;\n  margin: 0;\n}\n\n.series-item[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #999;\n  transition: color 0.3s ease;\n}\n\n\n\n@media (max-width: 768px) {\n  .blog-hero[_ngcontent-%COMP%] {\n    padding: 60px 20px 40px;\n  }\n  .hero-title[_ngcontent-%COMP%] {\n    font-size: 36px;\n  }\n  .hero-subtitle[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n  .blog-content[_ngcontent-%COMP%] {\n    padding: 40px 15px;\n  }\n  .content-layout[_ngcontent-%COMP%] {\n    gap: 30px;\n  }\n  .section-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 28px;\n  }\n  .welcome-series[_ngcontent-%COMP%] {\n    padding: 40px 15px;\n  }\n  .series-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 28px;\n  }\n  .series-item[_ngcontent-%COMP%] {\n    flex-direction: column;\n    text-align: center;\n    gap: 16px;\n  }\n}\n@media (max-width: 480px) {\n  .hero-title[_ngcontent-%COMP%] {\n    font-size: 28px;\n  }\n  .hero-subtitle[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n  .posts-grid[_ngcontent-%COMP%] {\n    gap: 20px;\n  }\n  .post-meta[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 12px;\n  }\n  mat-card-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 12px;\n    align-items: flex-start;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvYmxvZy9ibG9nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtBQUFGOztBQUdBLGlCQUFBO0FBQ0E7RUFDRSw2REFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFBRjs7QUFHQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7QUFBRjtBQUVFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLCtLQUNFO0FBRE47O0FBTUE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBSEY7QUFLRTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQ0FBQTtBQUhKO0FBS0k7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0Esd0NBQUE7QUFITjtBQU1JO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtFQUNBLGdEQUFBO0FBSk47QUFPSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSx5Q0FBQTtBQUxOOztBQVVBO0VBQ0U7SUFBVyx1Q0FBQTtFQU5YO0VBT0E7SUFBTSwyQ0FBQTtFQUpOO0FBQ0Y7QUFNQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBSkY7O0FBT0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFKRjs7QUFPQTtFQUNFLCtCQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtBQUpGO0FBTUU7RUFDRSxZQUFBO0FBSko7O0FBUUE7RUFDRSwrQkFB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QUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtBQXBERjs7QUF1REE7RUFDRSxPQUFBO0FBcERGO0FBc0RFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUFwREo7QUF1REU7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtBQXJESjs7QUF5REE7RUFDRSxXQUFBO0VBQ0EsMkJBQUE7QUF0REY7O0FBeURBLHNCQUFBO0FBQ0E7RUFDRTtJQUNFLHVCQUFBO0VBdERGO0VBeURBO0lBQ0UsZUFBQTtFQXZERjtFQTBEQTtJQUNFLGVBQUE7RUF4REY7RUEyREE7SUFDRSxrQkFBQTtFQXpERjtFQTREQTtJQUNFLFNBQUE7RUExREY7RUE2REE7SUFDRSxlQUFBO0VBM0RGO0VBOERBO0lBQ0Usa0JBQUE7RUE1REY7RUErREE7SUFDRSxlQUFBO0VBN0RGO0VBZ0VBO0lBQ0Usc0JBQUE7SUFDQSxrQkFBQTtJQUNBLFNBQUE7RUE5REY7QUFDRjtBQWlFQTtFQUNFO0lBQ0UsZUFBQTtFQS9ERjtFQWtFQTtJQUNFLGVBQUE7RUFoRUY7RUFtRUE7SUFDRSxTQUFBO0VBakVGO0VBb0VBO0lBQ0Usc0JBQUE7SUFDQSx1QkFBQTtJQUNBLFNBQUE7RUFsRUY7RUFxRUE7SUFDRSxzQkFBQTtJQUNBLFNBQUE7SUFDQSx1QkFBQTtFQW5FRjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLy8gYmxvZy5jb21wb25lbnQuc2Nzc1xyXG4uYmxvZy1jb250YWluZXIge1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG59XHJcblxyXG4vKiBIZXJvIFNlY3Rpb24gKi9cclxuLmJsb2ctaGVybyB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzA5MmU2YiAwJSwgIzBkNDdhMSAxMDAlKTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogODBweCAyMHB4IDYwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5oZXJvLWJhY2tncm91bmQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICBib3R0b206IDA7XHJcbiAgb3BhY2l0eTogMC4xO1xyXG5cclxuICAmOjpiZWZvcmUge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBiYWNrZ3JvdW5kOlxyXG4gICAgICByYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0IDIwJSA4MCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKSAwJSwgdHJhbnNwYXJlbnQgNTAlKSxcclxuICAgICAgcmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCA4MCUgMjAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpIDAlLCB0cmFuc3BhcmVudCA1MCUpO1xyXG4gIH1cclxufVxyXG5cclxuLmZsb2F0aW5nLXNoYXBlcyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuXHJcbiAgLnNoYXBlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcclxuXHJcbiAgICAmLnNoYXBlLTEge1xyXG4gICAgICB3aWR0aDogMTIwcHg7XHJcbiAgICAgIGhlaWdodDogMTIwcHg7XHJcbiAgICAgIHRvcDogMTAlO1xyXG4gICAgICByaWdodDogMTAlO1xyXG4gICAgICBhbmltYXRpb246IGZsb2F0IDhzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xyXG4gICAgfVxyXG5cclxuICAgICYuc2hhcGUtMiB7XHJcbiAgICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICAgIGJvdHRvbTogMjAlO1xyXG4gICAgICBsZWZ0OiA1JTtcclxuICAgICAgYW5pbWF0aW9uOiBmbG9hdCA2cyBlYXNlLWluLW91dCBpbmZpbml0ZSByZXZlcnNlO1xyXG4gICAgfVxyXG5cclxuICAgICYuc2hhcGUtMyB7XHJcbiAgICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICAgIHRvcDogNDAlO1xyXG4gICAgICByaWdodDogMjAlO1xyXG4gICAgICBhbmltYXRpb246IGZsb2F0IDEwcyBlYXNlLWluLW91dCBpbmZpbml0ZTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZmxvYXQge1xyXG4gIDAlLCAxMDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCkgcm90YXRlKDBkZWcpOyB9XHJcbiAgNTAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMHB4KSByb3RhdGUoMTgwZGVnKTsgfVxyXG59XHJcblxyXG4uaGVyby1jb250ZW50IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgei1pbmRleDogMjtcclxuICBtYXgtd2lkdGg6IDEyMDBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5icmVhZGNydW1iLW5hdiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGdhcDogOHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG4uYnJlYWRjcnVtYi1saW5rIHtcclxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzO1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbn1cclxuXHJcbi5icmVhZGNydW1iLXNlcGFyYXRvciB7XHJcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcclxufVxyXG5cclxuLmJyZWFkY3J1bWItYWN0aXZlIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLmhlcm8tdGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogNDhweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIG1hcmdpbjogMCAwIDIwcHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIGZvbnQtc2l6ZTogMzZweDtcclxuICB9XHJcbn1cclxuXHJcbi5oZXJvLXN1YnRpdGxlIHtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgb3BhY2l0eTogMC45O1xyXG4gIG1hcmdpbjogMCAwIDMwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBtYXgtd2lkdGg6IDYwMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgfVxyXG59XHJcblxyXG4uZmVhdHVyZWQtYmFkZ2Uge1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiA4cHg7XHJcbiAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcclxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XHJcblxyXG4gIG1hdC1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGhlaWdodDogMTZweDtcclxuICAgIHdpZHRoOiAxNnB4O1xyXG4gIH1cclxuXHJcbiAgc3BhbiB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gIH1cclxufVxyXG5cclxuLyogTWFpbiBDb250ZW50ICovXHJcbi5ibG9nLWNvbnRlbnQge1xyXG4gIG1heC13aWR0aDogMTIwMHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIHBhZGRpbmc6IDYwcHggMjBweDtcclxufVxyXG5cclxuLmNvbnRlbnQtbGF5b3V0IHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDFmcjtcclxuICBnYXA6IDQwcHg7XHJcblxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA5NjhweCkge1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgICBnYXA6IDMwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4vKiBQb3N0cyBTZWN0aW9uICovXHJcbi5zZWN0aW9uLWhlYWRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgIGdhcDogMTZweDtcclxuICB9XHJcblxyXG4gIGgyIHtcclxuICAgIGZvbnQtc2l6ZTogMzJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBjb2xvcjogIzMzMztcclxuICAgIG1hcmdpbjogMDtcclxuXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmZpbHRlci1vcHRpb25zIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGdhcDogOHB4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuXHJcbiAgYnV0dG9uIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG5cclxuICAgICYuYWN0aXZlIHtcclxuICAgICAgYmFja2dyb3VuZDogIzBkNDdhMTtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLnBvc3RzLWdyaWQge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ2FwOiAzMHB4O1xyXG59XHJcblxyXG4vKiBCbG9nIFBvc3QgQ2FyZHMgKi9cclxuLmJsb2ctcG9zdC1jYXJkIHtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCk7XHJcbiAgICBib3gtc2hhZG93OiAwIDhweCAzMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcbiAgfVxyXG5cclxuICAmLmZlYXR1cmVkIHtcclxuICAgIGJvcmRlci1sZWZ0OiA0cHggc29saWQgIzBkNDdhMTtcclxuICB9XHJcbn1cclxuXHJcbi5wb3N0LWltYWdlIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgaGVpZ2h0OiAyMDBweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG5cclxuICBpbWcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICB9XHJcbn1cclxuXHJcbi5wb3N0LWNhdGVnb3J5IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAxNnB4O1xyXG4gIGxlZnQ6IDE2cHg7XHJcbiAgcGFkZGluZzogNnB4IDEycHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG5cclxuICAmLndlbGNvbWUge1xyXG4gICAgYmFja2dyb3VuZDogIzBkNDdhMTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcblxyXG4gICYudGlwcyB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmY5ODAwO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuXHJcbiAgJi5wbGF0Zm9ybSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMjE5NmYzO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxufVxyXG5cclxubWF0LWNhcmQtY29udGVudCB7XHJcbiAgcGFkZGluZzogMjRweDtcclxufVxyXG5cclxuLnBvc3QtbWV0YSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgIGdhcDogMTJweDtcclxuICB9XHJcbn1cclxuXHJcbi5hdXRob3ItaW5mbyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMTJweDtcclxufVxyXG5cclxuLmF1dGhvci1hdmF0YXIge1xyXG4gIHdpZHRoOiA0MHB4O1xyXG4gIGhlaWdodDogNDBweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbiAgaW1nIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgfVxyXG59XHJcblxyXG4uYXV0aG9yLWRldGFpbHMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgLmF1dGhvci1uYW1lIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBjb2xvcjogIzMzMztcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICB9XHJcblxyXG4gIC5wb3N0LWRhdGUge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgY29sb3I6ICM2NjY7XHJcbiAgfVxyXG59XHJcblxyXG4ucmVhZC10aW1lIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiA0cHg7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGNvbG9yOiAjNjY2O1xyXG5cclxuICBtYXQtaWNvbiB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBoZWlnaHQ6IDE0cHg7XHJcbiAgICB3aWR0aDogMTRweDtcclxuICB9XHJcbn1cclxuXHJcbi5wb3N0LXRpdGxlIHtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBtYXJnaW46IDAgMCAxMnB4O1xyXG4gIGNvbG9yOiAjMzMzO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjM7XHJcblxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gIH1cclxufVxyXG5cclxuLnBvc3QtZXhjZXJwdCB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGNvbG9yOiAjNjY2O1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjY7XHJcbiAgbWFyZ2luOiAwIDAgMTZweDtcclxufVxyXG5cclxuLnBvc3QtdGFncyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBnYXA6IDhweDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbn1cclxuXHJcbi5wb3N0LXRhZyB7XHJcbiAgcGFkZGluZzogNHB4IDhweDtcclxuICBiYWNrZ3JvdW5kOiAjZjBmMGYwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgZm9udC1zaXplOiAxMXB4O1xyXG4gIGNvbG9yOiAjNjY2O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbm1hdC1jYXJkLWFjdGlvbnMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMTZweCAyNHB4O1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZjBmMGYwO1xyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBnYXA6IDEycHg7XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICB9XHJcbn1cclxuXHJcbi5wb3N0LXN0YXRzIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGdhcDogMTZweDtcclxuXHJcbiAgLnN0YXQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6IDRweDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGNvbG9yOiAjNjY2O1xyXG5cclxuICAgIG1hdC1pY29uIHtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICBoZWlnaHQ6IDE0cHg7XHJcbiAgICAgIHdpZHRoOiAxNHB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmxvYWQtbW9yZSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi10b3A6IDQwcHg7XHJcbn1cclxuXHJcbi8qIFNpZGViYXIgKi9cclxuLnNpZGViYXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBnYXA6IDI0cHg7XHJcbn1cclxuXHJcbm1hdC1jYXJkIHtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG59XHJcblxyXG4vKiBBdXRob3IgQ2FyZCAqL1xyXG4uYXV0aG9yLWNhcmQge1xyXG4gIG1hdC1jYXJkLWNvbnRlbnQge1xyXG4gICAgcGFkZGluZzogMjRweDtcclxuICB9XHJcbn1cclxuXHJcbi5hdXRob3ItcHJvZmlsZSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi5hdXRob3ItYXZhdGFyLWxhcmdlIHtcclxuICB3aWR0aDogODBweDtcclxuICBoZWlnaHQ6IDgwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgbWFyZ2luOiAwIGF1dG8gMTZweDtcclxuICBib3JkZXI6IDNweCBzb2xpZCAjZjBmMGYwO1xyXG5cclxuICBpbWcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICB9XHJcbn1cclxuXHJcbi5hdXRob3ItaW5mbyB7XHJcbiAgaDMge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIG1hcmdpbjogMCAwIDRweDtcclxuICAgIGNvbG9yOiAjMzMzO1xyXG4gIH1cclxuXHJcbiAgLmF1dGhvci10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBjb2xvcjogIzBkNDdhMTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBtYXJnaW46IDAgMCAxMnB4O1xyXG4gIH1cclxuXHJcbiAgLmF1dGhvci1iaW8ge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6ICM2NjY7XHJcbiAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxufVxyXG5cclxuLmF1dGhvci1zdGF0cyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgI2YwZjBmMDtcclxuICBwYWRkaW5nLXRvcDogMjBweDtcclxuXHJcbiAgLnN0YXQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgIHN0cm9uZyB7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XHJcbiAgICB9XHJcblxyXG4gICAgc3BhbiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgY29sb3I6ICM2NjY7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vKiBDYXRlZ29yaWVzIENhcmQgKi9cclxuLmNhdGVnb3JpZXMtY2FyZCB7XHJcbiAgbWF0LWNhcmQtY29udGVudCB7XHJcbiAgICBwYWRkaW5nOiAyNHB4O1xyXG5cclxuICAgIGgzIHtcclxuICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICBtYXJnaW46IDAgMCAxNnB4O1xyXG4gICAgICBjb2xvcjogIzMzMztcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5jYXRlZ29yaWVzLWxpc3Qge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBnYXA6IDhweDtcclxufVxyXG5cclxuLmNhdGVnb3J5LWl0ZW0ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMTJweCAxNnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICNmOGY5ZmE7XHJcbiAgfVxyXG5cclxuICAmLmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDEzLCA3MSwgMTYxLCAwLjEpO1xyXG4gICAgY29sb3I6ICMwZDQ3YTE7XHJcbiAgfVxyXG5cclxuICAuY2F0ZWdvcnktbmFtZSB7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gIH1cclxuXHJcbiAgLmNhdGVnb3J5LWNvdW50IHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGJhY2tncm91bmQ6ICNmMGYwZjA7XHJcbiAgICBwYWRkaW5nOiAycHggOHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICB9XHJcbn1cclxuXHJcbi8qIFBvcHVsYXIgUG9zdHMgQ2FyZCAqL1xyXG4ucG9wdWxhci1jYXJkIHtcclxuICBtYXQtY2FyZC1jb250ZW50IHtcclxuICAgIHBhZGRpbmc6IDI0cHg7XHJcblxyXG4gICAgaDMge1xyXG4gICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgIG1hcmdpbjogMCAwIDE2cHg7XHJcbiAgICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLnBvcHVsYXItbGlzdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGdhcDogMTZweDtcclxufVxyXG5cclxuLnBvcHVsYXItaXRlbSB7XHJcbiAgcGFkZGluZzogMTJweDtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogI2Y4ZjlmYTtcclxuXHJcbiAgICBoNCB7XHJcbiAgICAgIGNvbG9yOiAjMGQ0N2ExO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnBvcHVsYXItY29udGVudCB7XHJcbiAgICBoNCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgbWFyZ2luOiAwIDAgNHB4O1xyXG4gICAgICBjb2xvcjogIzMzMztcclxuICAgICAgbGluZS1oZWlnaHQ6IDEuNDtcclxuICAgIH1cclxuXHJcbiAgICAucG9wdWxhci1tZXRhIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZ2FwOiA4cHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgY29sb3I6ICM2NjY7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vKiBOZXdzbGV0dGVyIENhcmQgKi9cclxuLm5ld3NsZXR0ZXItY2FyZCB7XHJcbiAgbWF0LWNhcmQtY29udGVudCB7XHJcbiAgICBwYWRkaW5nOiAyNHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxufVxyXG5cclxuLm5ld3NsZXR0ZXItaWNvbiB7XHJcbiAgd2lkdGg6IDYwcHg7XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMTMsIDcxLCAxNjEsIDAuMSk7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBtYXJnaW46IDAgYXV0byAxNnB4O1xyXG5cclxuICBtYXQtaWNvbiB7XHJcbiAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICBoZWlnaHQ6IDI4cHg7XHJcbiAgICB3aWR0aDogMjhweDtcclxuICAgIGNvbG9yOiAjMGQ0N2ExO1xyXG4gIH1cclxufVxyXG5cclxuLm5ld3NsZXR0ZXItY2FyZCB7XHJcbiAgaDMge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIG1hcmdpbjogMCAwIDhweDtcclxuICAgIGNvbG9yOiAjMzMzO1xyXG4gIH1cclxuXHJcbiAgcCB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBjb2xvcjogIzY2NjtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICBtYXJnaW46IDAgMCAyMHB4O1xyXG4gIH1cclxufVxyXG5cclxuLm5ld3NsZXR0ZXItZm9ybSB7XHJcbiAgLmZ1bGwtd2lkdGgge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG59XHJcblxyXG4vKiBXZWxjb21lIFNlcmllcyAqL1xyXG4ud2VsY29tZS1zZXJpZXMge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNmOGZhZmMgMCUsICNlMmU4ZjAgMTAwJSk7XHJcbiAgcGFkZGluZzogNjBweCAyMHB4O1xyXG4gIG1hcmdpbi10b3A6IDQwcHg7XHJcbn1cclxuXHJcbi5zZXJpZXMtaGVhZGVyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuXHJcbiAgaDIge1xyXG4gICAgZm9udC1zaXplOiAzMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIG1hcmdpbjogMCAwIDEycHg7XHJcbiAgICBjb2xvcjogIzMzMztcclxuXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcCB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBjb2xvcjogIzY2NjtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcbn1cclxuXHJcbi5zZXJpZXMtZ3JpZCB7XHJcbiAgbWF4LXdpZHRoOiAxMDAwcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBnYXA6IDIwcHg7XHJcbn1cclxuXHJcbi5zZXJpZXMtaXRlbSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMjBweDtcclxuICBwYWRkaW5nOiAyNHB4O1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgYm94LXNoYWRvdzogMCA0cHggMTVweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwcHgpO1xyXG4gICAgYm94LXNoYWRvdzogMCA2cHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xyXG5cclxuICAgIC5zZXJpZXMtbnVtYmVyIHtcclxuICAgICAgYmFja2dyb3VuZDogIzBkNDdhMTtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG5cclxuICAgIG1hdC1pY29uIHtcclxuICAgICAgY29sb3I6ICMwZDQ3YTE7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uc2VyaWVzLW51bWJlciB7XHJcbiAgd2lkdGg6IDUwcHg7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIGJhY2tncm91bmQ6ICNmMGYwZjA7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBjb2xvcjogIzY2NjtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gIGZsZXgtc2hyaW5rOiAwO1xyXG59XHJcblxyXG4uc2VyaWVzLWNvbnRlbnQge1xyXG4gIGZsZXg6IDE7XHJcblxyXG4gIGg0IHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBtYXJnaW46IDAgMCA4cHg7XHJcbiAgICBjb2xvcjogIzMzMztcclxuICB9XHJcblxyXG4gIHAge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6ICM2NjY7XHJcbiAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxufVxyXG5cclxuLnNlcmllcy1pdGVtIG1hdC1pY29uIHtcclxuICBjb2xvcjogIzk5OTtcclxuICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzIGVhc2U7XHJcbn1cclxuXHJcbi8qIFJlc3BvbnNpdmUgRGVzaWduICovXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC5ibG9nLWhlcm8ge1xyXG4gICAgcGFkZGluZzogNjBweCAyMHB4IDQwcHg7XHJcbiAgfVxyXG5cclxuICAuaGVyby10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDM2cHg7XHJcbiAgfVxyXG5cclxuICAuaGVyby1zdWJ0aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgfVxyXG5cclxuICAuYmxvZy1jb250ZW50IHtcclxuICAgIHBhZGRpbmc6IDQwcHggMTVweDtcclxuICB9XHJcblxyXG4gIC5jb250ZW50LWxheW91dCB7XHJcbiAgICBnYXA6IDMwcHg7XHJcbiAgfVxyXG5cclxuICAuc2VjdGlvbi1oZWFkZXIgaDIge1xyXG4gICAgZm9udC1zaXplOiAyOHB4O1xyXG4gIH1cclxuXHJcbiAgLndlbGNvbWUtc2VyaWVzIHtcclxuICAgIHBhZGRpbmc6IDQwcHggMTVweDtcclxuICB9XHJcblxyXG4gIC5zZXJpZXMtaGVhZGVyIGgyIHtcclxuICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICB9XHJcblxyXG4gIC5zZXJpZXMtaXRlbSB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZ2FwOiAxNnB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcbiAgLmhlcm8tdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAyOHB4O1xyXG4gIH1cclxuXHJcbiAgLmhlcm8tc3VidGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gIH1cclxuXHJcbiAgLnBvc3RzLWdyaWQge1xyXG4gICAgZ2FwOiAyMHB4O1xyXG4gIH1cclxuXHJcbiAgLnBvc3QtbWV0YSB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICBnYXA6IDEycHg7XHJcbiAgfVxyXG5cclxuICBtYXQtY2FyZC1hY3Rpb25zIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBnYXA6IDEycHg7XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  }));
}
_staticBlock();

/***/ })

}]);
//# sourceMappingURL=src_app_pages_blog_blog_component_ts.js.map