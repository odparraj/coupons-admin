import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServicesManagerComponent } from './services-manager.component';
import { ServicesComponent } from './pages/services/services.component';

const routes: Routes = [{
  path: '',
  component: ServicesManagerComponent,
  children: [
    {
      path: 'services',
      component: ServicesComponent,
    },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicesManagerRoutingModule { }
