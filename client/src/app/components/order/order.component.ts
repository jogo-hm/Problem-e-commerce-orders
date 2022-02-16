import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  @Input() inputNumber: number

  routeImage: String = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.6N-qhCKqJC8WHhpWsiD_bwHaD4%26pid%3DApi&f=1";
  
  constructor() { }

  ngOnInit(): void {
  }

}
