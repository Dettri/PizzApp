import { Component, OnInit } from '@angular/core';
import { Product, CartService } from 'src/app/services/cart.service';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { NavParams} from '@ionic/angular';

@Component({
  selector: 'app-form-change-product',
  templateUrl: './form-change-product.page.html',
  styleUrls: ['./form-change-product.page.scss'],
})
export class FormChangeProductPage implements OnInit {

  public getActualProduct;
  name: string;
  price: number;

  constructor(private cartService: CartService, private ModalCtrl: ModalController,  public navParams : NavParams) {}

  ngOnInit() {
  this.getActualProduct = this.navParams.get('ActualProduct');
  }
  
  close(){
    this.ModalCtrl.dismiss();
  }

  AdminForm(f, getActualProduct){
    this.cartService.changeProductAdmin(f, getActualProduct);
  }
}
