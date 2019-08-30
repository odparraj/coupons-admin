import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyDataRoutingModule } from './my-data-routing.module';
import { MyDataComponent } from './my-data.component';
import { QuotaComponent } from './pages/quota/quota.component';
import { ThemeModule } from '../../@theme/theme.module';
import { SharedModule } from '../../shared/shared.module';
import { DescriptionPageComponent } from './pages/description-page/description-page.component';
import { FormsModule } from '@angular/forms';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { RequestQuotaComponent } from './pages/request-quota/request-quota.component';

@NgModule({
  declarations: [MyDataComponent, QuotaComponent, DescriptionPageComponent, RequestQuotaComponent],
  imports: [
    CommonModule,
    MyDataRoutingModule,
    ThemeModule,
    SharedModule,
    CKEditorModule,
    FormsModule
  ],
  entryComponents: [MyDataComponent],
})
export class MyDataModule { }
