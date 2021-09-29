import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  products: any[] = [];
  constructor(private _api:ApiService) { }

  ngOnInit(): void {
    this.getProducts()
  }
  getProducts(){
    this._api.connectAPI().subscribe(res => {
      console.log('Response =>',res);
      this.products = res;
    })
  }
}
