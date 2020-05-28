import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormChangeProductPage } from './form-change-product.page';

const routes: Routes = [
  {
    path: '',
    component: FormChangeProductPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormChangeProductPageRoutingModule {}
