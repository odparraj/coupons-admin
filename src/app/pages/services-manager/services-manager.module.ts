import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesManagerRoutingModule } from './services-manager-routing.module';
import { ThemeModule } from '../../@theme/theme.module';
import { SharedModule } from '../../shared/shared.module';
import { ServicesManagerComponent } from './services-manager.component';
import { ServicesComponent } from './pages/services/services.component';

@NgModule({
  declarations: [ServicesManagerComponent,ServicesComponent],
  imports: [
    CommonModule,
    ServicesManagerRoutingModule,
    ThemeModule,
    SharedModule
  ]
})
export class ServicesManagerModule { }
