import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServicesManagerComponent } from './services-manager.component';
import { ServicesComponent } from './pages/services/services.component';
import { ServiceCategoriesComponent } from './pages/service-categories/service-categories.component';
import { ServiceAditionalsComponent } from './pages/service-aditionals/service-aditionals.component';

const routes: Routes = [{
  path: '',
  component: ServicesManagerComponent,
  children: [
    {
      path: 'services',
      component: ServicesComponent,
    },
    {
      path: 'categories',
      component: ServiceCategoriesComponent,
    },
    {
      path: 'aditionals',
      component: ServiceAditionalsComponent,
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicesManagerRoutingModule { }
