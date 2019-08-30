import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalesManagerRoutingModule } from './sales-manager-routing.module';
import { SalesManagerComponent } from './sales-manager.component';
import { SalesComponent } from './pages/sales/sales.component';
import { ThemeModule } from '../../@theme/theme.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [SalesManagerComponent, SalesComponent],
  imports: [
    CommonModule,
    SalesManagerRoutingModule,
    ThemeModule,
    SharedModule
  ],
  entryComponents: [SalesManagerComponent],
})
export class SalesManagerModule { }
