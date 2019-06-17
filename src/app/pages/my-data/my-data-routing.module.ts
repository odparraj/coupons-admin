import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuotaComponent } from './pages/quota/quota.component';
import { MyDataComponent } from './my-data.component';

const routes: Routes = [{
  path: '',
  component: MyDataComponent,
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
