import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsManagerRoutingModule } from './products-manager-routing.module';
import { ProductsManagerComponent } from './products-manager.component';
import { ProductsComponent } from './pages/products/products.component';
import { ThemeModule } from '../../@theme/theme.module';
import { SharedModule } from '../../shared/shared.module';
import { ProductsCategoriesComponent } from './pages/products-categories/products-categories.component';

@NgModule({
  declarations: [ProductsManagerComponent, ProductsComponent, ProductsCategoriesComponent],
  imports: [
    CommonModule,
    ProductsManagerRoutingModule,
    ThemeModule,
    SharedModule
  ]
})
export class ProductsManagerModule { }
