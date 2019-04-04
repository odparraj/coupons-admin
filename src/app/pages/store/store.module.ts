import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreRoutingModule } from './store-routing.module';
import { ProductsListComponent } from './pages/products-list/products-list.component';

import { ThemeModule } from '../../@theme/theme.module';
import { ShoppingCartComponent } from './pages/shopping-cart/shopping-cart.component';
import { PaymentGatewayComponent } from './pages/payment-gateway/payment-gateway.component';
import { BillComponent } from './pages/bill/bill.component';
import { StoreComponent } from './store.component';

@NgModule({
  declarations: [ProductsListComponent, ShoppingCartComponent, PaymentGatewayComponent, BillComponent, StoreComponent],
  imports: [
    CommonModule,
    StoreRoutingModule,
    ThemeModule
  ]
})
export class StoreModule { }
