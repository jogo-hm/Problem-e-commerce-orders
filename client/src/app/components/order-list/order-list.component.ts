import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  orders = [
    {
      id: 1
    },
    {
      id:2
    },
    {
      id:3
    }
    ,
    {
      id:4
    }
  ]

  constructor() { }

  
  ngOnInit(): void {
  }

}
