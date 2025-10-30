import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FaqComponent } from './shared/faq/faq.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  {
    path: 'home',
    loadComponent: () =>
      import('./pages/home/home.component').then(m => m.HomeComponent)
  },

  {
    path: 'create-stokvel',
    loadComponent: () =>
      import('./pages/stokvel-create/stokvel-create.component')
        .then(m => m.CreateStokvelComponent)
  },

  { path: '**', redirectTo: 'home' },

  
  { path: 'faq', component: FaqComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
