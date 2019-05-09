import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsManagerComponent } from './products-manager.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProductsCategoriesComponent } from './pages/products-categories/products-categories.component';

const routes: Routes = [{
  path: '',
  component: ProductsManagerComponent,
  children: [
    {
      path: 'products',
      component: ProductsComponent,
    },
    {
      path: 'categories',
      component: ProductsCategoriesComponent,
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsManagerRoutingModule { }
