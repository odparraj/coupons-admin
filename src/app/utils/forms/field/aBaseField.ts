import { iField } from './iField';
import { DynamicFormControlModel } from '@ng-dynamic-forms/core';
import { TitleCasePipe } from '@angular/common';

export abstract class aBaseField<T> implements iField<T> {
  titleCase: TitleCasePipe = new TitleCasePipe();
  public xtype: string = 'basefield';
  public name: string;
  public value: T;
  public defaultValue: T;
  public levelSecurity: number = 0;
  public allowBlank: boolean = true;

  abstract translate(levelSecurity: number): DynamicFormControlModel;

  abstract validators(): any;

  abstract errorMessages(): any;

  formatName(){
    return this.getTitleCase(this.name);
  }

  getTitleCase(string: string){
    return this.titleCase.transform(string.split(/(?=[A-Z])/).join(' ').replace(/\*/g, ' / ').replace(/_/g, ' '));
  }

}
