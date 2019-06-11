import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';
import { PermissionGuard } from '../utils/guards/permission-guard.service';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  data: {
    permission: 'pages',
  },
  canActivate: [PermissionGuard],
  children: [
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
      data: {
        permission: 'dashboard',
      },
    },
    {
      path: 'dashboard',
      component: DashboardComponent,
      data: {
        permission: 'dashboard',
      },
    },
    {
      path: 'authorization',
      loadChildren: './authorization/authorization.module#AuthorizationModule',
      data: {
        permission: 'authorization',
      },
    },
    {
      path: 'customers-manager',
      loadChildren: './customers-manager/customers-manager.module#CustomersManagerModule',
      data: {
        permission: 'customers_manager',
      },
    },
    {
      path: 'store',
      loadChildren: './store/store.module#StoreModule',
      data: {
        permission: 'store',
      },
    },
    {
      path: 'products-manager',
      loadChildren: './products-manager/products-manager.module#ProductsManagerModule',
      data: {
        permission: 'products_manager',
      },
    },
    {
      path: 'services-manager',
      loadChildren: './products-manager/products-manager.module#ProductsManagerModule',
      data: {
        permission: 'services_manager',
      },
    },
    {
      path: 'my-data',
      loadChildren: './my-data/my-data.module#MyDataModule',
      data: {
        permission: 'my_data',
      },
    },
    {
      path: '**',
      component: NotFoundComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
