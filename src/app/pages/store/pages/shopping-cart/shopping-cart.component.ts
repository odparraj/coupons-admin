import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  constructor(private router: Router) { }
  sum: number;
  ngOnInit() {
    this.sum = 0;
    for (let i =0;i<this.order.length; i++) {
      this.sum += this.order[i].amount*this.order[i].price;
    }
  }
  increase_quantity(id:Number) {
    this.sum = 0;
    for (let i =0;i<this.order.length; i++) {
      if (this.order[i].id === id){
        this.order[i].amount++;
      }
      this.sum += this.order[i].amount*this.order[i].price;
    }
  }
  decrease_quantity(id:Number) {
    this.sum = 0;
    for (let i =0;i<this.order.length; i++) {
      if (this.order[i].id === id && this.order[i].amount > 1){
        this.order[i].amount--;
      }
      this.sum += this.order[i].amount*this.order[i].price;
    }
  }
  delete_product(id:Number){
    this.order = this.order.filter(product => product.id !== id);
    this.ngOnInit()
  }
  goToPayment(){
    this.router.navigate(['/pages/store/payment-gateway']);
  }
  order = [
    {id:0, name:"Zapatos", brand:"Nike", price:100000, image:"", amount:1},
    {id:1, name:"Balón", brand:"Nike", price:50000, image:"", amount:1},
  ]
}
