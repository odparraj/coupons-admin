import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { IterableChangeRecord_ } from '@angular/core/src/change_detection/differs/default_iterable_differ';

@Component({
  selector: 'shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  items = [];

  constructor(private router: Router, private http: HttpClient) { }
  current_action="view_cart";
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
      this.delete_product(item, true);
    }
    // this.sum = 0;
    // for (let i =0;i<this.items.length; i++) {
    //   if (this.items[i].id === id && this.items[i].amount > 1){
    //     this.items[i].amount--;
    //   }
    //   this.sum += this.items[i].amount*this.items[i].price;
    // }
  }
  delete_product(data, request_confirm){
    let continue_deleting = request_confirm ? window.confirm('Are you sure you want to delete?') : true;
    if (continue_deleting) {
      this.http.delete(`api/me/cart?product_id=${data.product.id}`).toPromise().then((response) => {
        console.log('delete...', response);
        this.items = response['data']['items'];
      });
      this.items.forEach(item => {
        if(item.product.parent_id == data.product.id){
          this.delete_product(item, false);
        }
      });
    }
    // this.http.post('api/me/cart', {product_id: product_id, quantity: -this.items[]}).toPromise().then((data) => {
    //   console.log('delete...', data);
    // });
    // this.update_sum();
  }
  update_cart(){
    
  }
  goToPayment(){
    // this.router.navigate(['/pages/store/payment-gateway']);
    this.current_action = "checkout";
  }

  checkout = {
    billpayer: {
      firstname: '',
      lastname: '',
      company_name: '',
      address: {
        address: ''
      },
    },
    ship_to_billing_address: 1,
    shippingAddress: {
      address: '',
    }
  }

  payment_processed: boolean = false;
  pay() {
    this.http.post('api/me/checkout', this.checkout).toPromise().then((data)=>{
      console.log('add...', data);
      this.payment_processed = true;
    }).catch(console.error);
    this.current_action="confirm";
  }
}
