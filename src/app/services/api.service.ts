import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private _jsonURL = 'assets/data/products.json'
  constructor(private _http:HttpClient) { }
  connectAPI():Observable<any>{
    return this._http.get(this._jsonURL)
  }
}
