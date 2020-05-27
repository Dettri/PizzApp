import { Component, OnInit } from '@angular/core';
import { ingredients, Product, CartService } from 'src/app/services/cart.service';
import { ModalController } from '@ionic/angular';
import { NavParams} from '@ionic/angular';

@Component({
  selector: 'app-info-modal',
  templateUrl: './info-modal.page.html',
  styleUrls: ['./info-modal.page.scss'],
})
export class InfoModalPage implements OnInit {

  data: Product[] = [];
  ingredients: ingredients[] = [];
  correctIngredients: string[] = [];
  getActualProduct;

  constructor(private cartService: CartService, private ModalCtrl: ModalController, public navParams : NavParams) {}

  ngOnInit() {
    console.log(this.navParams.get('ActualProduct'));
    this.getActualProduct = this.navParams.get('ActualProduct');
    this.data = this.cartService.getProduct();
    this.ingredients = this.cartService.getIngredients();
    
    /*
    for (var i = 0; i < this.getActualProduct.length; i++) {
      this.correctIngredients.fill(this.getActualProduct.ingredients)
    }
    */

    for (let [index, p] of this.getActualProduct.entries()){
      if (p.id === this.ingredients.indexOf){
        this.correctIngredients.fill(this.ingredients.values.name)
      }
    }
  }

  close(){
    this.ModalCtrl.dismiss();
  }

}
