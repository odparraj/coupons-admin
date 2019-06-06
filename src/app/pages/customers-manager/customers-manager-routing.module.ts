import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomersManagerComponent } from './customers-manager.component';
import { CustomersComponent } from './pages/customers/customers.component';
import { CustomerCategoriesComponent } from './pages/customer-categories/customer-categories.component';
import { AdminQuotaComponent } from './pages/admin-quota/admin-quota.component';

const routes: Routes = [{
  path: '',
  component: CustomersManagerComponent,
  children: [
    {
      path: 'customers',
      component: CustomersComponent,
    },
    {
      path: 'customer-categories',
      component: CustomerCategoriesComponent,
    },
    {
      path: 'admin-quota',
      component: AdminQuotaComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersManagerRoutingModule { }
