import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FaqComponent } from './shared/faq/faq.component';
import { AuthGuard } from "@auth0/auth0-angular";

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
    title: 'ContactComponent Us - eStokvel'
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
      import('./pages/stokvel-create/stokvel-create.component')
        .then(m => m.CreateStokvelComponent)
  },
  {
    path: 'refer-earn',
    loadComponent: () =>
      import('./pages/referals/refer-and-earn.component').then(m => m.ReferAndEarnComponent),
    title: 'Refer & Earn - eStokvel'
  },
  {
    path: 'blog',
    loadComponent: () =>
      import('./pages/blog/blog.component').then(m => m.BlogComponent),
    title: 'Blog - eStokvel'
  },
  { path: 'faq', component: FaqComponent },

  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
