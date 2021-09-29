import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  checkoutItems:any[]=[];
  constructor(public _shopping_cart:ShoppingCartService) { }

  ngOnInit(): void {
    this.getShoppingCart();
  }

  getShoppingCart() {

    this.checkoutItems = this._shopping_cart.get_shopping_cart_item();
  }
  deleteEventHandler(){
    console.log('Called');

    this.getShoppingCart();
  }

}
