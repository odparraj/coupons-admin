import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorizationRoutingModule } from './authorization-routing.module';
import { AuthorizationComponent } from './authorization.component';
import { TableActionsComponent } from './components/table-actions/table-actions.component';

@NgModule({
  declarations: [AuthorizationComponent, TableActionsComponent],
  imports: [
    CommonModule,
    AuthorizationRoutingModule,
  ],
  entryComponents: [AuthorizationComponent],
})
export class AuthorizationModule { }
