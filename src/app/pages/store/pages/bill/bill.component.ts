import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.scss']
})
export class BillComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  print() {
    window.print();
  }

  sendByEmail() {
    
  }

  sale = {
    uuid: "0000001",
    shipping: "",
    price: "150000",
    discount: "15000",
    payed: "135000",
    products: [
      {id:0, name:"Zapatos", brand:"Nike", price:100000, image:"", amount:1},
      {id:1, name:"Balón", brand:"Nike", price:50000, image:"", amount:1},
    ]
  }

}
