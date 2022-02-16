import { Injectable } from '@angular/core';
import { HttpClient }  from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class OrderServiceService {

  constructor(private http: HttpClient) { }

  host = 'http://localhost:3001/';

  getOrders() {
    return this.http.get(this.host + 'api/orders');
  }

}
