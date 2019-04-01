import {
  DynamicSelectModel,
} from '@ng-dynamic-forms/core';
import { aBaseField } from './aBaseField';
import { of, Observable } from 'rxjs';

export class SelectField extends aBaseField<string> {
  xtype: string = 'SelectField';
  values: Array<string> = [];
  constructor(data) {
    super();
    this.name = data.name;
    this.allowBlank = data.allowBlank !== undefined ? data.allowBlank : this.allowBlank;
    this.defaultValue = data.defaultValue !== undefined ? data.defaultValue : this.defaultValue;
    this.value = data.value;
    this.levelSecurity = data.levelSecurity !== undefined ? data.levelSecurity : this.levelSecurity;
    this.values = data.values !== undefined ? data.values : this.value;
  }

  translate(levelSecurity= 0): DynamicSelectModel<string> {
    return new DynamicSelectModel<string>({
      id: this.name,
      disabled: this.levelSecurity > levelSecurity,
      hidden: this.levelSecurity > levelSecurity,
      placeholder: this.formatName(),
      label: this.formatName(),
      options: this.options(),
      value: this.value ? this.value : this.defaultValue,
      validators: this.validators(),
      errorMessages: this.errorMessages(),
    });
  }

  validators() {
    const result = {};

    if (! this.allowBlank) {
      result['required'] = null;
    }

    return result;
  }

  errorMessages() {
    return {
      required: `{{ label }} is required.`,
    };
  }

  options(): Observable<any>{
    const result = [];
    for (let i = 0; i < this.values.length; i++){
      result.push({
        label: this.getTitleCase(this.values[i]),
        value: this.values[i],
      });
    }
    return of(result);
  }
}
