import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  @Input() inputNumber;
  @Input() product;
  @Input() title;
  
  constructor() { }

  ngOnInit(): void {
  }

}
