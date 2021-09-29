import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-check-out-products',
  templateUrl: './check-out-products.component.html',
  styleUrls: ['./check-out-products.component.scss']
})
export class CheckOutProductsComponent implements OnInit {
  @Input() checkout_product:any[] = [];
  @Output() deleteEvent:EventEmitter<any> = new EventEmitter();


  constructor(public _shoppingCart:ShoppingCartService) { }




  ngOnInit(): void {
    console.log('Products ',this.checkout_product)
  }
  removeItem(checkout_product:any){
    this._shoppingCart.removeItem(checkout_product);
    this.deleteEvent.emit(checkout_product);
  }
}
