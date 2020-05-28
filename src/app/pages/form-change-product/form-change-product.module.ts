import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormChangeProductPageRoutingModule } from './form-change-product-routing.module';

import { FormChangeProductPage } from './form-change-product.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormChangeProductPageRoutingModule
  ],
  declarations: [FormChangeProductPage]
})
export class FormChangeProductPageModule {}
