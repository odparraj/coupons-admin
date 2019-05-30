import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsListComponent } from './pages/products-list/products-list.component';
import { StoreComponent } from './store.component';
import { ShoppingCartComponent } from './pages/shopping-cart/shopping-cart.component';
import { PaymentGatewayComponent } from './pages/payment-gateway/payment-gateway.component';
import { BillComponent } from './pages/bill/bill.component';
import { ServiceComponent } from './pages/service/service.component';

const routes: Routes = [{
  path: '',
  component: StoreComponent,
  children: [
    {
      path: 'products-list',
      component: ProductsListComponent,
    },
    {
      path: 'services-list',
      component: ProductsListComponent,
    },
    {
      path: 'shopping-cart',
      component: ShoppingCartComponent,
    },
    {
      path: 'payment-gateway',
      component: PaymentGatewayComponent,
    },
    {
      path: 'bill',
      component: BillComponent,
    },
    {
      path: 'service',
      component: ServiceComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StoreRoutingModule { }
