import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'payment-gateway',
  templateUrl: './payment-gateway.component.html',
  styleUrls: ['./payment-gateway.component.scss']
})
export class PaymentGatewayComponent implements OnInit {
  
  first_name: string;
  last_name: string;
  confirm_email: string;
  confirm_password: string;
  address1: string;
  address2: string;
  city: string;
  state: string;
  country: string;
  cellphone: string;

  linearMode = true;

  toggleLinearMode() {
    this.linearMode = !this.linearMode;
  }
  constructor(private router: Router) { }

  ngOnInit() {
  }

  next() { }

  confirmPayment() {
    let paymentCondition = true;
    if (paymentCondition) {
      this.router.navigate(['/pages/store/bill']);
    }
  }

  order = {

  }
}
