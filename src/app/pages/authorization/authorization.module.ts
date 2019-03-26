import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorizationRoutingModule } from './authorization-routing.module';
import { AuthorizationComponent } from './authorization.component';
import { UsersComponent } from './pages/users/users.component';
import { RolesComponent } from './pages/roles/roles.component';
import { PermissionsComponent } from './pages/permissions/permissions.component';
import { TableComponent } from './components/table/table.component';
import { NbUserModule, NbCardModule, NbListModule, NbInputModule, NbActionsModule, NbButtonModule, NbDialogModule } from '@nebular/theme';
import { FormsModule } from '@angular/forms';
import { UserModalComponent } from './components/user-modal/user-modal.component';

@NgModule({
  declarations: [AuthorizationComponent, UsersComponent, RolesComponent, PermissionsComponent, UserModalComponent],
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
    NbDialogModule.forChild(),
  ],
  entryComponents: [AuthorizationComponent],
})
export class AuthorizationModule { }
