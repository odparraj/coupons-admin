import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsListComponent } from './pages/products-list/products-list.component';
import { StoreComponent } from './store.component';
import { ShoppingCartComponent } from './pages/shopping-cart/shopping-cart.component';
import { PaymentGatewayComponent } from './pages/payment-gateway/payment-gateway.component';

const routes: Routes = [{
  path: '',
  component: StoreComponent,
  children: [
    {
      path: 'products-list',
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
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StoreRoutingModule { }
