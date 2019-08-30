import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SalesManagerComponent } from './sales-manager.component';
import { SalesComponent } from './pages/sales/sales.component';

const routes: Routes = [{
  path: '',
  component: SalesManagerComponent,
  children: [
    {
      path: 'sales',
      component: SalesComponent,
    },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesManagerRoutingModule { }
