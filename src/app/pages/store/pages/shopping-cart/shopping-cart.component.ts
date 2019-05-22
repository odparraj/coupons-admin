import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  order = [];

  constructor(private router: Router, private http: HttpClient) { }
  sum: number;
  ngOnInit() {
    this.sum = 0;
    for (let i =0;i<this.order.length; i++) {
      this.sum += this.order[i].amount*this.order[i].price;
    }
    this.get_cart();
    this.update_sum();
  }
  async get_cart(){
    await this.http.get('api/me/cart').toPromise().then((data) => {
      let items = data['data'] as [];
      this.order = items;
      // items.forEach((item) => {
      //   this.order['data'][item['id']] = item;
      // });
    }).catch(console.error);
  }
  update_sum(){
    this.sum = 0;
    this.order.forEach((item) => {
      this.sum += item.price*item.quantity;
    });
  }
  increase_quantity(product_id:Number) {
    this.http.post('api/me/cart', {product_id: product_id, quantity: 1}).toPromise().then((data) => {
      console.log('add...', data);
    });
    this.update_sum();
  }
  decrease_quantity(product_id:Number) {
    this.http.post('api/me/cart', {product_id: product_id, quantity: -1}).toPromise().then((data) => {
      console.log('delete...', data);
    });
    this.update_sum();
    // this.sum = 0;
    // for (let i =0;i<this.order.length; i++) {
    //   if (this.order[i].id === id && this.order[i].amount > 1){
    //     this.order[i].amount--;
    //   }
    //   this.sum += this.order[i].amount*this.order[i].price;
    // }
  }
  update_cart(){
    
  }
  goToPayment(){
    this.router.navigate(['/pages/store/payment-gateway']);
  }
}
