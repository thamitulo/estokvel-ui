import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FaqComponent } from './shared/faq/faq.component';
import { AuthGuard } from "@auth0/auth0-angular";
import { AdminGuard } from './guards/admin.guard';
import {StokvelCreateComponent} from "./components/stokvel-create/stokvel-create.component";

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  {
    path: 'kyc',
    loadComponent: () =>
      import('./pages/kyc/kyc.component').then(m => m.KycComponent),
    canActivate: [AuthGuard],
    title: 'Identity Verification - iKage'
  },

  {
    path: 'home',
    loadComponent: () =>
      import('./pages/home/home.component').then(m => m.HomeComponent)
  },

  {
    path: 'about-us',
    loadComponent: () =>
      import('./pages/about-us/about-us.component').then(m => m.AboutUsComponent),
    title: 'About Us - iKage'
  },

  {
    path: 'pricing',
    loadComponent: () =>
      import('./pages/pricing/pricing.component').then(m => m.PricingComponent),
    title: 'Pricing - iKage'
  },

  {
    path: 'contact-us',
    loadComponent: () =>
      import('./pages/contact/contact.component').then(m => m.ContactComponent),
    title: 'Contact Us - iKage'
  },

  {
    path: 'careers',
    loadComponent: () =>
      import('./pages/careers/careers.component').then(m => m.CareersComponent),
    title: 'CareersComponent - iKage'
  },

  {
    path: 'press',
    loadComponent: () =>
      import('./pages/press/press.component').then(m => m.PressComponent),
    title: 'PressComponent - iKage'
  },

  {
    path: 'legal',
    loadComponent: () =>
      import('./pages/legal/legal.component').then(m => m.LegalComponent),
    title: 'LegalComponent - iKage'
  },

  {
    path: 'privacy-policy',
    loadComponent: () =>
      import('./pages/privacy-policy/privacy-policy.component').then(m => m.PrivacyPolicyComponent),
    title: 'Privacy Policy - iKage'
  },

  {
    path: 'contact',
    loadComponent: () =>
      import('./pages/contact/contact.component').then(m => m.ContactComponent),
    title: 'Contact Us - iKage'
  },

  {
    path: 'security',
    loadComponent: () =>
      import('./pages/security/security.component').then(m => m.SecurityComponent),
    title: 'Security - iKage'
  },

  {
    path: 'terms',
    loadComponent: () =>
      import('./pages/terms/terms.component').then(m => m.TermsComponent),
    title: 'Terms of Service - iKage'
  },

  {
    path: 'stokvel-basics',
    loadComponent: () =>
      import('./pages/stokvel-basics/stokvel-basics.component').then(m => m.StokvelBasicsComponent),
    title: 'Stokvel Basics - iKage'
  },

  {
    path: 'tutorials',
    loadComponent: () =>
      import('./pages/tutorials/tutorials.component').then(m => m.TutorialsComponent),
    title: 'Tutorials - iKage'
  },

  {
    path: 'glossary',
    loadComponent: () =>
      import('./pages/glossary/glossary.component').then(m => m.GlossaryComponent),
    title: 'Glossary - iKage'
  },

  {
    path: 'regulatory',
    loadComponent: () =>
      import('./pages/regulatory/regulatory.component').then(m => m.RegulatoryComponent),
    title: 'Regulatory - iKage'
  },

  {
    path: 'compliance',
    loadComponent: () =>
      import('./pages/compliance/compliance.component').then(m => m.ComplianceComponent),
    title: 'Compliance - iKage'
  },

  {
    path: 'popia',
    loadComponent: () =>
      import('./pages/popia/popia.component').then(m => m.PopiaComponent),
    title: 'POPIA - iKage'
  },

  {
    path: 'dashboard',
    loadComponent: () =>
      import('./components/dashboard/dashboard.component').then(m => m.DashboardComponent),
    canActivate: [AuthGuard]
  },

  {
    path: 'create-stokvel',
    loadComponent: () =>
      import('./components/stokvel-create/stokvel-create.component')
        .then(m => m.StokvelCreateComponent),
    canActivate: [AuthGuard]
  },
  {
    path: 'stokvels',
    loadComponent: () =>
      import('./components/stokvel-list/stokvel-list.component').then(m => m.StokvelListComponent),
    title: 'Browse Stokvels - iKage'
  },
  {
    path: 'stokvels/:id',
    loadComponent: () =>
      import('./components/stokvel-detail/stokvel-detail.component').then(m => m.StokvelDetailComponent),
    canActivate: [AuthGuard],
    title: 'Stokvel Details - iKage'
  },
  {
    path: 'stokvels/:id/manage',
    loadComponent: () =>
      import('./components/stokvel-manage/stokvel-manage.component').then(m => m.StokvelManageComponent),
    canActivate: [AuthGuard],
    title: 'Manage Stokvel - iKage'
  },
  {
    path: 'wallet',
    loadComponent: () =>
      import('./components/wallet/wallet.component').then(m => m.WalletComponent),
    canActivate: [AuthGuard],
    title: 'My Wallet - iKage'
  },
  {
    path: 'profile',
    loadComponent: () =>
      import('./pages/profile/profile.component').then(m => m.ProfileComponent),
    canActivate: [AuthGuard],
    title: 'My Profile - iKage'
  },
  {
    path: 'refer-earn',
    loadComponent: () =>
      import('./pages/referals/refer-and-earn.component').then(m => m.ReferAndEarnComponent),
    title: 'Refer & Earn - iKage'
  },
  { path: 'blog',
    loadComponent: () =>
      import('./pages/blog/blog.component').then(m => m.BlogComponent),
    title: 'Blog - iKage'
  },
  { path: 'faq', component: FaqComponent },

  {
    path: 'help-center',
    loadComponent: () =>
      import('./pages/help-center/help-center.component').then(m => m.HelpCenterComponent),
    title: 'Help Center - iKage'
  },
  {
    path: 'resources',
    loadComponent: () =>
      import('./pages/resources/resources.component').then(m => m.ResourcesComponent),
    title: 'Resources - iKage'
  },
  {
    path: 'fsca',
    loadComponent: () =>
      import('./pages/fsca/fsca.component').then(m => m.FscaComponent),
    title: 'FSCA - iKage'
  },
  {
    path: 'disclaimer',
    loadComponent: () =>
      import('./pages/disclaimer/disclaimer.component').then(m => m.DisclaimerComponent),
    title: 'Disclaimer - iKage'
  },
  {
    path: 'notifications',
    loadComponent: () =>
      import('./pages/notifications/notifications.component').then(m => m.NotificationsPageComponent),
    title: 'Notifications - iKage'
  },

  // ── Super-Admin Backoffice ────────────────────────────────────────────────
  {
    path: 'admin/login',
    loadComponent: () =>
      import('./pages/admin/admin-login/admin-login.component').then(m => m.AdminLoginComponent),
    title: 'Admin Login - iKage'
  },
  {
    path: 'admin',
    loadComponent: () =>
      import('./pages/admin/admin-layout/admin-layout.component').then(m => m.AdminLayoutComponent),
    canActivate: [AdminGuard],
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./pages/admin/admin-dashboard/admin-dashboard.component').then(m => m.AdminDashboardComponent),
        title: 'Dashboard - Admin'
      },
      {
        path: 'stokvels',
        loadComponent: () =>
          import('./pages/admin/admin-stokvels/admin-stokvels.component').then(m => m.AdminStokvelsComponent),
        title: 'Stokvels - Admin'
      },
      {
        path: 'users',
        loadComponent: () =>
          import('./pages/admin/admin-users/admin-users.component').then(m => m.AdminUsersComponent),
        title: 'Users - Admin'
      }
    ]
  },

  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
