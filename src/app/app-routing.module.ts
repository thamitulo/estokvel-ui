import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FaqComponent } from './shared/faq/faq.component';
import { AuthGuard } from "@auth0/auth0-angular";
import {StokvelCreateComponent} from "./components/stokvel-create/stokvel-create.component";

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  {
    path: 'home',
    loadComponent: () =>
      import('./pages/home/home.component').then(m => m.HomeComponent)
  },

  {
    path: 'about-us',
    loadComponent: () =>
      import('./pages/about-us/about-us.component').then(m => m.AboutUsComponent),
    title: 'About Us - eStokvel'
  },
  {
    path: 'contact-us',
    loadComponent: () =>
      import('./pages/contact/contact.component').then(m => m.ContactComponent),
    title: 'Contact Us - eStokvel'
  },

  {
    path: 'careers',
    loadComponent: () =>
      import('./pages/careers/careers.component').then(m => m.CareersComponent),
    title: 'CareersComponent - eStokvel'
  },

  {
    path: 'press',
    loadComponent: () =>
      import('./pages/press/press.component').then(m => m.PressComponent),
    title: 'PressComponent - eStokvel'
  },

  {
    path: 'legal',
    loadComponent: () =>
      import('./pages/legal/legal.component').then(m => m.LegalComponent),
    title: 'LegalComponent - eStokvel'
  },

  {
    path: 'privacy-policy',
    loadComponent: () =>
      import('./pages/privacy-policy/privacy-policy.component').then(m => m.PrivacyPolicyComponent),
    title: 'Privacy Policy - eStokvel'
  },

  {
    path: 'contact',
    loadComponent: () =>
      import('./pages/contact/contact.component').then(m => m.ContactComponent),
    title: 'Contact Us - eStokvel'
  },

  {
    path: 'security',
    loadComponent: () =>
      import('./pages/security/security.component').then(m => m.SecurityComponent),
    title: 'Security - eStokvel'
  },

  {
    path: 'terms',
    loadComponent: () =>
      import('./pages/terms/terms.component').then(m => m.TermsComponent),
    title: 'Terms of Service - eStokvel'
  },

  {
    path: 'stokvel-basics',
    loadComponent: () =>
      import('./pages/stokvel-basics/stokvel-basics.component').then(m => m.StokvelBasicsComponent),
    title: 'Stokvel Basics - eStokvel'
  },

  {
    path: 'tutorials',
    loadComponent: () =>
      import('./pages/tutorials/tutorials.component').then(m => m.TutorialsComponent),
    title: 'Tutorials - eStokvel'
  },

  {
    path: 'glossary',
    loadComponent: () =>
      import('./pages/glossary/glossary.component').then(m => m.GlossaryComponent),
    title: 'Glossary - eStokvel'
  },

  {
    path: 'regulatory',
    loadComponent: () =>
      import('./pages/regulatory/regulatory.component').then(m => m.RegulatoryComponent),
    title: 'Regulatory - eStokvel'
  },

  {
    path: 'compliance',
    loadComponent: () =>
      import('./pages/compliance/compliance.component').then(m => m.ComplianceComponent),
    title: 'Compliance - eStokvel'
  },

  {
    path: 'popia',
    loadComponent: () =>
      import('./pages/popia/popia.component').then(m => m.PopiaComponent),
    title: 'POPIA - eStokvel'
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
    title: 'Browse Stokvels - eStokvel'
  },
  {
    path: 'stokvels/:id',
    loadComponent: () =>
      import('./components/stokvel-detail/stokvel-detail.component').then(m => m.StokvelDetailComponent),
    canActivate: [AuthGuard],
    title: 'Stokvel Details - eStokvel'
  },
  {
    path: 'stokvels/:id/manage',
    loadComponent: () =>
      import('./components/stokvel-manage/stokvel-manage.component').then(m => m.StokvelManageComponent),
    canActivate: [AuthGuard],
    title: 'Manage Stokvel - eStokvel'
  },
  {
    path: 'wallet',
    loadComponent: () =>
      import('./components/wallet/wallet.component').then(m => m.WalletComponent),
    canActivate: [AuthGuard],
    title: 'My Wallet - eStokvel'
  },
  {
    path: 'profile',
    loadComponent: () =>
      import('./pages/profile/profile.component').then(m => m.ProfileComponent),
    canActivate: [AuthGuard],
    title: 'My Profile - eStokvel'
  },
  {
    path: 'refer-earn',
    loadComponent: () =>
      import('./pages/referals/refer-and-earn.component').then(m => m.ReferAndEarnComponent),
    title: 'Refer & Earn - eStokvel'
  },
  { path: 'blog',
    loadComponent: () =>
      import('./pages/blog/blog.component').then(m => m.BlogComponent),
    title: 'Blog - eStokvel'
  },
  { path: 'faq', component: FaqComponent },

  {
    path: 'help-center',
    loadComponent: () =>
      import('./pages/help-center/help-center.component').then(m => m.HelpCenterComponent),
    title: 'Help Center - eStokvel'
  },
  {
    path: 'resources',
    loadComponent: () =>
      import('./pages/resources/resources.component').then(m => m.ResourcesComponent),
    title: 'Resources - eStokvel'
  },
  {
    path: 'fsca',
    loadComponent: () =>
      import('./pages/fsca/fsca.component').then(m => m.FscaComponent),
    title: 'FSCA - eStokvel'
  },
  {
    path: 'disclaimer',
    loadComponent: () =>
      import('./pages/disclaimer/disclaimer.component').then(m => m.DisclaimerComponent),
    title: 'Disclaimer - eStokvel'
  },
  {
    path: 'notifications',
    loadComponent: () =>
      import('./pages/notifications/notifications.component').then(m => m.NotificationsPageComponent),
    title: 'Notifications - eStokvel'
  },

  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
