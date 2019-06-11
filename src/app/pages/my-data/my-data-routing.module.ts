import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyDataModule } from './my-data.module';
import { QuotaComponent } from './pages/quota/quota.component';

const routes: Routes = [{
  path: '',
  component: MyDataModule,
  children: [
    {
      path: 'quota',
      component: QuotaComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyDataRoutingModule { }
