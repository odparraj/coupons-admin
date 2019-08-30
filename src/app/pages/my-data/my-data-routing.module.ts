import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuotaComponent } from './pages/quota/quota.component';
import { MyDataComponent } from './my-data.component';
import { DescriptionPageComponent } from './pages/description-page/description-page.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { RequestQuotaComponent } from './pages/request-quota/request-quota.component';

const routes: Routes = [{
  path: '',
  component: MyDataComponent,
  children: [
    {
      path: 'quota',
      component: QuotaComponent
    },
    {
      path: 'description-page',
      component: DescriptionPageComponent
    },
    {
      path: 'request-quota',
      component: RequestQuotaComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes), CKEditorModule],
  exports: [RouterModule]
})
export class MyDataRoutingModule { }
