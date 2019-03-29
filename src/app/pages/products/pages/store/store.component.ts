import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  data = [
    {'name': 'Lemmonade', 'price': 2000},
    {'name': 'Lemmonade Coconut', 'price': 4000},
    {'name': 'Juice', 'price': 3000},
  ];
  
}
