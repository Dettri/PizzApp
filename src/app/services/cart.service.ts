import { Injectable } from '@angular/core';
import { Url } from 'url';
import { BehaviorSubject } from 'rxjs';

export interface Product {
  id: number,
  name: string,
  price: number,
  amount: number;
}

@Injectable({
  providedIn: 'root'
})

export class CartService {

  data: Product[] = [
    { id: 0, name: 'Chèvre Miel', price: 12, amount: 1},
    { id: 1, name: 'Paysane', price: 12, amount: 1},
    { id: 2, name: 'Royal', price: 12, amount: 1},
    { id: 3, name: 'Chorizo', price: 13, amount: 1},
    { id: 4, name: 'Chèvre Miel', price: 12, amount: 1},
    { id: 5, name: 'Chèvre Miel', price: 12, amount: 1}
  ]

  private cart = [];
  private cartItemCount = new BehaviorSubject(0);

  constructor() { }

  getProduct(){
    return this.data;
  }
  
  getCart(){
    return this.cart;
  }

  getCartItemCount(){
    return this.cartItemCount;
  }

  addProduct(product){
    let added = false;
    for (let p of this.cart){
      if (p.id === product.id) {
        p.amount += 1;
        added = true;
        break;
      }
    }
    if(!added){
      this.cart.push(product);
    }
    this.cartItemCount.next(this.cartItemCount.value + 1);
  }

  decreaseProduct(product){
    for (let [index, p] of this.cart.entries()){
      if (p.id === product.id){
        p.amount -= 1;
        if (p.amount == 0) {
          this.cart.splice(index, 1);
        }
      }
    }
    this.cartItemCount.next(this.cartItemCount.value - 1);
  }

  removeProduct(product){
    for (let [index, p] of this.cart.entries()){
      if (p.id === product.id){
        this.cartItemCount.next(this.cartItemCount.value - p.amount);
        this.cart.splice(index, 1);
      }
    }
  }
  
  /*
  data: any;

  ngOnInit() {
    fetch('./assets/data/datajson.json').then(res => res.json())
    .then(json => {
      this.data = json;
    });
  }

  addProduct(product){
    let added = false;
    for (let item of this.data){
      if (item.id === product.id) {
        item.amount += 1;
        added = true;
        break;
      }
    }
    if(!added){
      this.cart.push(product);
    }
    this.cartItemCount.next(this.cartItemCount.value + 1);
  }


  decreaseProduct(product){
    for (let [index, item] of this.cart.entries()){
      if (item.id === product.id){
        item.amount -= 1;
        if (item.amount == 0) {
          this.cart.splice(index, 1);
        }
      }
    }
    this.cartItemCount.next(this.cartItemCount.value - 1);
  }

  removeProduct(product){
    for (let [index, item] of this.cart.entries()){
      if (item.id === product.id){
        this.cartItemCount.next(this.cartItemCount.value - item.amount);
        this.cart.splice(index, 1);
      }
    }
  }
  */
}