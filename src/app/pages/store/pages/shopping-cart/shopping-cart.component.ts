import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  items = [];

  constructor(private router: Router, private http: HttpClient) { }
  sum: number;
  cart: any = {total : 0};
  ngOnInit() {
    this.sum = 0;
    for (let i =0;i<this.items.length; i++) {
      this.sum += this.items[i].amount*this.items[i].price;
    }
    this.get_cart();
  }
  async get_cart(){
    await this.http.get('api/me/cart').toPromise().then((data) => {
      this.cart = data['data'];
      let items = data['data']['items'] as [];
      this.items = items;
      // items.forEach((item) => {
      //   this.items['data'][item['id']] = item;
      // });
    }).catch(console.error);
    console.log(this.items);
  }
  increase_quantity(item) {
    this.http.post('api/me/cart', {product_id: item.product.id, quantity: 1}).toPromise().then((data) => {
      console.log('add...', data);
      this.items = data['data']['items'];
      this.cart = data['data'];
    });
  }
  decrease_quantity(item) {
    console.log(item);
    if(item.quantity >1){
      this.http.post('api/me/cart', {product_id: item.product.id, quantity: -1}).toPromise().then((data) => {
        console.log('delete...', data);
        this.cart = data['data'];
        this.items = data['data']['items'];
      });
    } else {
      this.delete_product(item);
    }
    // this.sum = 0;
    // for (let i =0;i<this.items.length; i++) {
    //   if (this.items[i].id === id && this.items[i].amount > 1){
    //     this.items[i].amount--;
    //   }
    //   this.sum += this.items[i].amount*this.items[i].price;
    // }
  }
  delete_product(item){
    this.http.delete(`api/me/cart?product_id=${item.product.id}`).toPromise().then((data) => {
      console.log('delete...', data);
      this.items = data['data']['items'];
    });
    // this.http.post('api/me/cart', {product_id: product_id, quantity: -this.items[]}).toPromise().then((data) => {
    //   console.log('delete...', data);
    // });
    // this.update_sum();
  }
  update_cart(){
    
  }
  goToPayment(){
    this.router.navigate(['/pages/store/payment-gateway']);
  }
}
