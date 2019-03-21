import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorizationComponent } from './authorization.component';
import { UsersComponent } from './pages/users/users.component';
import { RolesComponent } from './pages/roles/roles.component';
import { PermissionsComponent } from './pages/permissions/permissions.component';

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
    }
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthorizationRoutingModule { }
