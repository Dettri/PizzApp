import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CartService } from '../services/cart.service';
import { ModalController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { CartModalPage } from '../pages/cart-modal/cart-modal.page';
import { InfoModalPage } from '../pages/info-modal/info-modal.page';
import { AdministrationPage } from '../pages/administration/administration.page';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  cart=[];
  products=[];
  cartItemCount : BehaviorSubject<number>;

  // animation
  @ViewChild('cart', {static: false, read: ElementRef})fab: ElementRef;

  constructor(private cartService : CartService, private modalCtrl: ModalController) {}

  ngOnInit(){
    this.products = this.cartService.getProduct();
    this.cart = this.cartService.getCart();
    this.cartItemCount = this.cartService.getCartItemCount();
  }

  addToCart(product){
    this.animateCSS('tada');
    this.cartService.addProduct(product);
  }

  async openCart(){
    let modal = await this.modalCtrl.create({
      component: CartModalPage,
      cssClass: 'cart-modal'
    });
    modal.present();
  } 

  async openInfo(product){
    let modal = await this.modalCtrl.create({
      component: InfoModalPage,
      componentProps: { ActualProduct: product },
      cssClass: 'info-modal',
    });
    modal.present();
  }

  async openAdministration(product){
    let modal = await this.modalCtrl.create({
      component: AdministrationPage,
      componentProps: { ActualProduct: product },
      cssClass: 'admin-modal',
    });
    modal.present();
  }

  animateCSS(animationName, keepAnimated = false){
    const node = this.fab.nativeElement;
    node.classList.add('animated', animationName)

    function handleAnimationEnd(){
      if (!keepAnimated){
        node.classList.remove('animated', animationName);
      }
      node.removeEventListener('animationend', handleAnimationEnd);
    }
    node.addEventListener('animationend', handleAnimationEnd);
  }
}
