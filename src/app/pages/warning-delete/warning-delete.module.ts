import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WarningDeletePageRoutingModule } from './warning-delete-routing.module';

import { WarningDeletePage } from './warning-delete.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WarningDeletePageRoutingModule
  ],
  declarations: [WarningDeletePage]
})
export class WarningDeletePageModule {}
