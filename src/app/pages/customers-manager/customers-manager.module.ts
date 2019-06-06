import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersManagerRoutingModule } from './customers-manager-routing.module';
import { CustomersManagerComponent } from './customers-manager.component';
import { CustomersComponent } from './pages/customers/customers.component';
import { CustomerCategoriesComponent } from './pages/customer-categories/customer-categories.component';
import { AdminQuotaComponent } from './pages/admin-quota/admin-quota.component';
import { ThemeModule } from '../../@theme/theme.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [CustomersManagerComponent, CustomersComponent, CustomerCategoriesComponent, AdminQuotaComponent],
  imports: [
    CommonModule,
    CustomersManagerRoutingModule,
    ThemeModule,
    SharedModule
  ],
  entryComponents: [CustomersManagerComponent],
})
export class CustomersManagerModule { }
