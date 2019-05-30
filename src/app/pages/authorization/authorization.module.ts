import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorizationRoutingModule } from './authorization-routing.module';
import { AuthorizationComponent } from './authorization.component';
import { UsersComponent } from './pages/users/users.component';
import { RolesComponent } from './pages/roles/roles.component';
import { PermissionsComponent } from './pages/permissions/permissions.component';
import { ThemeModule } from '../../@theme/theme.module';
import { SharedModule } from '../../shared/shared.module';
import { AdminQuotaComponent } from './pages/admin-quota/admin-quota.component';
import { CustomersCategoriesComponent } from './pages/customers-categories/customers-categories.component';

@NgModule({
  declarations: [AuthorizationComponent, UsersComponent, RolesComponent, PermissionsComponent, AdminQuotaComponent, CustomersCategoriesComponent],
  imports: [
    CommonModule,
    AuthorizationRoutingModule,
    ThemeModule,
    SharedModule
  ],
  entryComponents: [AuthorizationComponent],
})
export class AuthorizationModule { }
