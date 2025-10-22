import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateStokvelComponent } from './stokvel-create.component';

const routes: Routes = [{ path: '', component: CreateStokvelComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StokvelCreateRoutingModule { }
