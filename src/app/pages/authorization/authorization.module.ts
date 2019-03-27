import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorizationRoutingModule } from './authorization-routing.module';
import { AuthorizationComponent } from './authorization.component';
import { UsersComponent } from './pages/users/users.component';
import { RolesComponent } from './pages/roles/roles.component';
import { PermissionsComponent } from './pages/permissions/permissions.component';

import { UserModalComponent } from './components/user-modal/user-modal.component';
import { ThemeModule } from '../../@theme/theme.module';
import { NbDialogService } from '@nebular/theme';

@NgModule({
  declarations: [AuthorizationComponent, UsersComponent, RolesComponent, PermissionsComponent, UserModalComponent],
  imports: [
    CommonModule,
    AuthorizationRoutingModule,
    ThemeModule,
  ],
  entryComponents:[ UserModalComponent ],
  providers:[
    NbDialogService
  ]
  //entryComponents: [AuthorizationComponent, UserModalComponent],
})
export class AuthorizationModule { }
