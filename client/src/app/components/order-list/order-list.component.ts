import { Component, OnInit } from '@angular/core';
import { OrderServiceService } from '../../services/order-service/order-service.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  orders;

  constructor(private orderService: OrderServiceService) {
    
  }

  
  ngOnInit(): void {
    this.getOrders();
  }

  async getOrders() {
    this.orderService.getOrders().subscribe( (orders: any) => {
      this.orders = orders;
    });
  }

}
