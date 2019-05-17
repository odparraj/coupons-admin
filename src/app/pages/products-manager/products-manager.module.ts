import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsManagerRoutingModule } from './products-manager-routing.module';
import { ProductsManagerComponent } from './products-manager.component';
import { ProductsComponent } from './pages/products/products.component';
import { ThemeModule } from '../../@theme/theme.module';
import { SharedModule } from '../../shared/shared.module';
import { ProductTaxonomiesComponent } from './pages/product-taxonomies/product-taxonomies.component';
import { ProductTaxonsComponent } from './pages/product-taxons/product-taxons.component';

@NgModule({
  declarations: [ProductsManagerComponent, ProductsComponent, ProductTaxonomiesComponent, ProductTaxonsComponent],
  imports: [
    CommonModule,
    ProductsManagerRoutingModule,
    ThemeModule,
    SharedModule
  ]
})
export class ProductsManagerModule { }
