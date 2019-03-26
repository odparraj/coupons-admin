import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorizationRoutingModule } from './authorization-routing.module';
import { AuthorizationComponent } from './authorization.component';
import { UsersComponent } from './pages/users/users.component';
import { RolesComponent } from './pages/roles/roles.component';
import { PermissionsComponent } from './pages/permissions/permissions.component';
import { TableComponent } from './components/table/table.component';
import { NbUserModule, NbCardModule, NbListModule, NbInputModule, NbActionsModule, NbButtonModule } from '@nebular/theme';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AuthorizationComponent, UsersComponent, RolesComponent, PermissionsComponent, TableComponent],
  imports: [
    CommonModule,
    AuthorizationRoutingModule,
    NbCardModule,
    NbListModule,
    NbUserModule,
    NbInputModule,
    FormsModule,
    NbActionsModule,
    NbButtonModule,
  ],
  entryComponents: [AuthorizationComponent],
})
export class AuthorizationModule { }
