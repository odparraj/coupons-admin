import {
  DynamicInputModel,
} from '@ng-dynamic-forms/core';
import { aBaseField } from './aBaseField';
import { DatePipe } from '@angular/common';

export class DateField extends aBaseField<Date> {
  datePipe= new DatePipe('en-US');
  xtype: string = 'DateField';
  constructor(data){
    super();
    this.name = data.name;
    this.allowBlank = data.allowBlank !== undefined ? data.allowBlank : this.allowBlank;
    this.defaultValue = data.defaultValue !== undefined ? data.defaultValue : this.defaultValue;
    this.value = data.value;
    this.levelSecurity = data.levelSecurity !== undefined ? data.levelSecurity : this.levelSecurity;
  }

  translate(levelSecurity= 0): DynamicInputModel {
    return new DynamicInputModel({
      id: this.name,
      disabled: this.levelSecurity > levelSecurity,
      hidden: this.levelSecurity > levelSecurity,
      placeholder: this.formatName(),
      label: this.formatName(),
      inputType: 'date',
      value: this.value ? this.value : this.defaultValue, // this.datePipe.transform(this.value,'yyyy-MM-dd'): this.datePipe.transform(this.defaultValue,'yyyy-MM-dd'),
      validators: this.validators(),
      errorMessages: this.errorMessages(),
    });
  }

  validators() {
    const result = {};

    if (!this.allowBlank) {
      result['required'] = null;
    }

    return result;
  }

  errorMessages() {
    return {
      required: `{{ label }} is required.`,
    };
  }
}
