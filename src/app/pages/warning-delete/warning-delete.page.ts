import { Component, OnInit } from '@angular/core';
import { Product, CartService } from 'src/app/services/cart.service';
import { ModalController } from '@ionic/angular';
import { NavParams} from '@ionic/angular';

@Component({
  selector: 'app-warning-delete',
  templateUrl: './warning-delete.page.html',
  styleUrls: ['./warning-delete.page.scss'],
})
export class WarningDeletePage implements OnInit {

  constructor(private cartService: CartService, private ModalCtrl: ModalController,  public navParams : NavParams) {}

  public product;

  ngOnInit() {
    this.product = this.navParams.get('product');
  }

  close(){
    this.ModalCtrl.dismiss();
  }

  delete(product){
    this.cartService.removeProductAdmin(product);
  }

}
