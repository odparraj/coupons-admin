import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  increase_quantity(id:Number) {
    for (let i =0;i<this.order.length; i++) {
      if (this.order[i].id === id){
        this.order[i].amount++;
      }
    }
  }
  decrease_quantity(id:Number) {
    for (let i =0;i<this.order.length; i++) {
      if (this.order[i].id === id){
        this.order[i].amount--;
      }
    }
  }
  delete_product(id:Number){
    this.order = this.order.filter(product => product.id !== id);
  }
  order = [
    {id:0, name:"Zapatos", brand:"Nike", price:100000, image:"", amount:1},
    {id:1, name:"Balón", brand:"Nike", price:50000, image:"", amount:1},
  ]
}
