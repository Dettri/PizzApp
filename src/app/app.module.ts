import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CartModalPage } from './pages/cart-modal/cart-modal.page';
import { InfoModalPage } from './pages/info-modal/info-modal.page';
import { CartModalPageModule } from './pages/cart-modal/cart-modal.module';
import { InfoModalPageModule } from './pages/info-modal/info-modal.module';
import { AdministrationPageModule } from './pages/administration/administration.module';
import { FormProductPageModule } from './pages/form-product/form-product.module';
import { WarningDeletePageModule } from './pages/warning-delete/warning-delete.module';
import { FormChangeProductPageModule } from './pages/form-change-product/form-change-product.module';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule, 
    CartModalPageModule,
    InfoModalPageModule,
    AdministrationPageModule,
    FormProductPageModule,
    WarningDeletePageModule,
    FormChangeProductPageModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
