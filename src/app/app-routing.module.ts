import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  { path: 'about', loadChildren: './about/about.module#AboutPageModule' },
  {
    path: 'cart-modal',
    loadChildren: () => import('./pages/cart-modal/cart-modal.module').then( m => m.CartModalPageModule)
  },
  {
    path: 'info-modal',
    loadChildren: () => import('./pages/info-modal/info-modal.module').then( m => m.InfoModalPageModule)
  },
  {
    path: 'administration',
    loadChildren: () => import('./pages/administration/administration.module').then( m => m.AdministrationPageModule)
  },
  {
    path: 'form-product',
    loadChildren: () => import('./pages/form-product/form-product.module').then( m => m.FormProductPageModule)
  },
  {
    path: 'warning-delete',
    loadChildren: () => import('./pages/warning-delete/warning-delete.module').then( m => m.WarningDeletePageModule)
  },
  {
    path: 'form-change-product',
    loadChildren: () => import('./pages/form-change-product/form-change-product.module').then( m => m.FormChangeProductPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
