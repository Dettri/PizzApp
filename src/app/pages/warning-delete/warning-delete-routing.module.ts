import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WarningDeletePage } from './warning-delete.page';

const routes: Routes = [
  {
    path: '',
    component: WarningDeletePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WarningDeletePageRoutingModule {}
