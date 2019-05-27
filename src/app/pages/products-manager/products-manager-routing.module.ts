import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsManagerComponent } from './products-manager.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProductTaxonomiesComponent } from './pages/product-taxonomies/product-taxonomies.component';
import { ProductTaxonsComponent } from './pages/product-taxons/product-taxons.component';

const routes: Routes = [{
  path: '',
  component: ProductsManagerComponent,
  children: [
    {
      path: 'products',
      component: ProductsComponent,
    },
    {
      path: 'services',
      component: ProductsComponent,
    },
    {
      path: 'taxonomies',
      component: ProductTaxonomiesComponent,
    },
    {
      path: 'taxons',
      component: ProductTaxonsComponent,
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsManagerRoutingModule { }
