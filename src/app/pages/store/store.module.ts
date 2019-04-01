import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreRoutingModule } from './store-routing.module';
import { ProductsListComponent } from './pages/products-list/products-list.component';
import { StoreComponent } from './store.component';
import { ThemeModule } from '../../@theme/theme.module';
import { ShoppingCartComponent } from './pages/shopping-cart/shopping-cart.component';

@NgModule({
  declarations: [ProductsListComponent, StoreComponent, ShoppingCartComponent],
  imports: [
    CommonModule,
    StoreRoutingModule,
    ThemeModule
  ]
})
export class StoreModule { }
