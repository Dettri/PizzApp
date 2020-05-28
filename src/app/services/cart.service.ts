import { Injectable } from '@angular/core';
import { Url } from 'url';
import { BehaviorSubject } from 'rxjs';

export interface Product {
  id: number,
  name: string,
  price: number,
  amount: number;
  ingredients: number[];
}

export interface ingredients {
  id: number,
  name: string
}

@Injectable({
  providedIn: 'root'
})

export class CartService {

  data: Product[] = [
    { id: 0, name: 'Chèvre Miel', price: 13, amount: 1, ingredients: [1, 2]},
    { id: 1, name: 'Paysane', price: 12, amount: 1, ingredients: [3, 5, 6]},
    { id: 2, name: 'Royal', price: 12, amount: 1, ingredients: [1, 5, 6]},
    { id: 3, name: 'Chorizo', price: 13, amount: 1, ingredients: [2, 4, 6, 7]},
    { id: 4, name: 'Provencale', price: 13, amount: 1, ingredients: [1, 3, 5]},
    { id: 5, name: 'Poulet', price: 14, amount: 1, ingredients: [3,6, 8]},
    { id: 6, name: 'Fromage', price: 11, amount: 1, ingredients: [2, 5, 8]}
  ]; 

  ingredients: ingredients[] = [
    {id: 0, name: 'Creme'},
    {id: 1, name: 'Tomate'},
    {id: 2, name: 'Jambon'},
    {id: 3, name: 'Poulet'},
    {id: 4, name: 'Chorizzo'},
    {id: 5, name: 'Pesto'},
    {id: 6, name: 'Fromage'},
    {id: 7, name: 'Champignon'},
    {id: 8, name: 'Lardon'}
  ];

  private cart = [];
  private cartItemCount = new BehaviorSubject(0);

  constructor() { }

  // INFO  PRODUCT
  getProduct(){
    return this.data;
  }
  
  getCart(){
    return this.cart;
  }

  getCartItemCount(){
    return this.cartItemCount;
  }

  // PANIER
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

  // INFORMATIONS INGREDIENTS
  getIngredients(){
    return this.ingredients;
  }

  // ADMINISTRATION
  removeProductAdmin(product){
    this.data.splice(product.id, 1);
  }

  addProductAdmin(f){
    //this.data.splice(9, 0, f.value.name)
    //this.data.push(name,price)
    this.data.splice(0,0,f.value);
  }

  changeProductAdmin(f, getActualProduct){
    this.data.splice(getActualProduct.id,1,f.value);
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