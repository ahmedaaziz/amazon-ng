import { ShoppingCartService } from './../../services/shopping-cart.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  @Input() products: any[] = [];
  constructor(private _shopping_service:ShoppingCartService) { }

  ngOnInit(): void {
  }
  addToCart(product:any){
    this._shopping_service.addProduct(product);

  }

}
