import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorizationRoutingModule } from './authorization-routing.module';
import { AuthorizationComponent } from './authorization.component';
import { UsersComponent } from './pages/users/users.component';
import { RolesComponent } from './pages/roles/roles.component';
import { ThemeModule } from '../../@theme/theme.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [AuthorizationComponent, UsersComponent, RolesComponent],
  imports: [
    CommonModule,
    AuthorizationRoutingModule,
    ThemeModule,
    SharedModule
  ],
  entryComponents: [AuthorizationComponent],
})
export class AuthorizationModule { }
