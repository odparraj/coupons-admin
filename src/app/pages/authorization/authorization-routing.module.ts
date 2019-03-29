import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorizationComponent } from './authorization.component';
import { UsersComponent } from './pages/users/users.component';
import { RolesComponent } from './pages/roles/roles.component';
import { PermissionsComponent } from './pages/permissions/permissions.component';
import { EditUserComponent } from './pages/edit-user/edit-user.component';

const routes: Routes = [{
  path: '',
  component: AuthorizationComponent,
  children: [
    {
      path: 'users',
      component: UsersComponent,
    },
    {
      path: 'roles',
      component: RolesComponent,
    },
    {
      path: 'permissions',
      component: PermissionsComponent,
    },
    {
      path: 'edit-user',
      component: EditUserComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthorizationRoutingModule { }
