import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  shopping_cart_items: any[]=[];

  constructor() { }
  // save products in Localstorage
  addProduct = (product:any) => {
    let items = this.get_shopping_cart_item();

    // if there items saved before, push it to items array and save it to localstorage
    if (items){
      items.push(product);
      localStorage.setItem('shopping_cart',JSON.stringify(items))

    } else {

      this.shopping_cart_items.push(product);
      localStorage.setItem('shopping_cart',JSON.stringify(this.shopping_cart_items))

    }

  }


  // to get saved cart items in localstorage
  get_shopping_cart_item =()=> {
    let items:any = localStorage.getItem('shopping_cart');
    return JSON.parse(items);

  }

  // Get Length of Cart Items
  getCartLength=()=>{
    //run get saved item func , and get the length
    let items = this.get_shopping_cart_item();
    // If no length , return 0
    return items?this.get_shopping_cart_item().length:0
  }
  getTotal =()=>{
    let items = this.get_shopping_cart_item();
    // console.log('Total ',items);
    return items?.reduce((acc:any,item:any)=> acc+item.price,0)
  }


  removeItem = (checkout_product:any) => {

    console.log('Calling function!',checkout_product)
    let items   = this.get_shopping_cart_item();
    console.log(items);

    // const index = items.findIndex((item:any) => item.id == p.id);
    const index = items.findIndex((item:any) => items.id == checkout_product.id);
    // const index = items.findIndex((item:any) => item.id == checkout_product.id )
    // const index = items.findIndex(item=> item.id === checkout_product.id);

    console.log('index',index);
    if (index >= 0){
        console.log('Hitting If');
        items.splice(index,1);
        return localStorage.setItem('shopping_cart',JSON.stringify(items));
    } else {
      console.log('not yet');

    }
  }
}
