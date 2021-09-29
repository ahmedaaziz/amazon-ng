import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/authentication/auth.service';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public _shopping_carte:ShoppingCartService,public auth:AuthService) { }

  ngOnInit(): void {
  }
  signOut(){
    this.auth.logOut();
  }
}
