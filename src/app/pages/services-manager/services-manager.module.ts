import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesManagerRoutingModule } from './services-manager-routing.module';
import { ThemeModule } from '../../@theme/theme.module';
import { SharedModule } from '../../shared/shared.module';
import { ServicesManagerComponent } from './services-manager.component';
import { ServicesComponent } from './pages/services/services.component';
import { ServiceCategoriesComponent } from './pages/service-categories/service-categories.component';
import { ServiceAditionalsComponent } from './pages/service-aditionals/service-aditionals.component';

@NgModule({
  declarations: [ServicesManagerComponent,ServicesComponent,ServiceCategoriesComponent,ServiceAditionalsComponent],
  imports: [
    CommonModule,
    ServicesManagerRoutingModule,
    ThemeModule,
    SharedModule
  ]
})
export class ServicesManagerModule { }
