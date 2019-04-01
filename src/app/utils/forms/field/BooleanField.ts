import {
  DynamicCheckboxModel,
} from '@ng-dynamic-forms/core';
import { aBaseField } from './aBaseField';
import { SelectField } from './SelectField';

export class BooleanField extends SelectField {
  xtype: string = 'BooleanField';
  constructor(data){
    super(data);
    /* this.name = data.name;
    this.allowBlank = data.allowBlank !== undefined ? data.allowBlank : this.allowBlank;
    this.defaultValue = data.defaultValue !== undefined ? data.defaultValue : this.defaultValue;
    this.value = data.value;
    this.levelSecurity = data.levelSecurity !== undefined ? data.levelSecurity : this.levelSecurity; */
  }

  /* translate(): DynamicCheckboxModel {
    return new DynamicCheckboxModel({
      id: this.name,
      label: this.formatName(),
      value: this.value
    });
  }

  validators(){
    return {}
  }

  errorMessages() {
    return {}
  } */
}
