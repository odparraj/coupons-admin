import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomActionsComponent } from './components/custom-actions/custom-actions.component';
import { CustomTableComponent } from './components/custom-table/custom-table.component';
import { CustomFormComponent } from './components/custom-form/custom-form.component';
import { ThemeModule } from '../@theme/theme.module';

const COMPONENTS= [
  CustomActionsComponent,
  CustomTableComponent,
  CustomFormComponent,
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule,
    ThemeModule,
  ],
  exports: [...COMPONENTS]

})
export class SharedModule { }
