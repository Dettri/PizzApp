import { Component, OnInit } from '@angular/core';
import { Product, CartService } from 'src/app/services/cart.service';
import { ModalController } from '@ionic/angular';
import { FormProductPage } from '../form-product/form-product.page';
import { WarningDeletePage } from '../warning-delete/warning-delete.page';
import { AlertController } from '@ionic/angular';
import { FormChangeProductPage } from '../form-change-product/form-change-product.page';

@Component({
  selector: 'app-administration',
  templateUrl: './administration.page.html',
  styleUrls: ['./administration.page.scss'],
})
export class AdministrationPage implements OnInit {

  products=[];

  constructor(public alertController: AlertController, private cartService: CartService, private ModalCtrl: ModalController) {}

  ngOnInit() {
    this.products = this.cartService.getProduct();
  }

  close(){
    this.ModalCtrl.dismiss();
  }

  // ouverture formulaire
  async openWarningDelete(product){
    let modal = await this.ModalCtrl.create({
      component: WarningDeletePage,
      componentProps: { ActualProduct: product },
      cssClass: 'warningDelete-modal'
    });
    modal.present();
  } 

  
  removeProductAdmin(product){
    this.cartService.removeProductAdmin(product);
  }
  
  async presentAlertConfirm(product) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Verification',
      message: 'Etes vous sur de vouloir supprimer cette pizza ? ',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          handler: () => {
            this.removeProductAdmin(product);
          }
        }
      ]
    });

    await alert.present();
  }

  async changeProductAdmin(product){
    let modal = await this.ModalCtrl.create({
      component: FormChangeProductPage,
      componentProps: { ActualProduct: product },
      cssClass: 'formProduct-modal'
    });
    modal.present();
  } 

  // ouverture formulaire
  async openFormProduct(product){
    let modal = await this.ModalCtrl.create({
      component: FormProductPage,
      componentProps: { ActualProduct: product },
      cssClass: 'formProduct-modal'
    });
    modal.present();
  } 
}
