import { Injectable } from '@angular/core';
import { HttpClient }  from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class OrderServiceService {

  constructor(private http: HttpClient) { }

  getOrders() {
    return this.http.get('/api/orders');
  }

}
