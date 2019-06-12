import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyDataRoutingModule } from './my-data-routing.module';
import { MyDataComponent } from './my-data.component';
import { QuotaComponent } from './pages/quota/quota.component';
import { ThemeModule } from '../../@theme/theme.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [MyDataComponent, QuotaComponent],
  imports: [
    CommonModule,
    MyDataRoutingModule,
    ThemeModule,
    SharedModule
  ],
  entryComponents: [MyDataComponent],
})
export class MyDataModule { }
