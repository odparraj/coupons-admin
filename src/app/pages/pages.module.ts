import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { PagesRoutingModule } from './pages-routing.module';
import { ThemeModule } from '../@theme/theme.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { ServicesManagerComponent } from './services-manager/services-manager.component';
import { ServicesComponent } from './services-manager/pages/services/services.component';
import { ServiceAditionalsComponent } from './services-manager/pages/service-aditionals/service-aditionals.component';
import { ServiceCategoriesComponent } from './services-manager/pages/service-categories/service-categories.component';

const PAGES_COMPONENTS = [
  PagesComponent,
];

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    DashboardModule,
    MiscellaneousModule,
  ],
  declarations: [
    ...PAGES_COMPONENTS,
    ServicesManagerComponent,
    ServicesComponent,
    ServiceAditionalsComponent,
    ServiceCategoriesComponent,
  ],
})
export class PagesModule {
}
