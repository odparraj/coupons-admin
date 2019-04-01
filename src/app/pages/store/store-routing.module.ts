import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsListComponent } from './pages/products-list/products-list.component';
import { StoreComponent } from './store.component';

const routes: Routes = [{
  path: '',
  component: StoreComponent,
  children: [
    {
      path: 'products-list',
      component: ProductsListComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StoreRoutingModule { }
