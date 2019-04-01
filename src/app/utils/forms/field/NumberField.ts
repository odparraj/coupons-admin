import {
  DynamicInputModel,
} from '@ng-dynamic-forms/core';
import { aBaseField } from './aBaseField';
import { of } from 'rxjs';

export class NumberField extends aBaseField<number> {
  xtype: string = 'NumberField';
  allowBlank: boolean = true;
  allowDecimal: boolean = false;
  minValue: number = 0;
  maxValue: number = null;
  defaultValue: number = 0;

  constructor(data) {
    super();
    this.name = data.name;
    this.allowBlank = data.allowBlank !== undefined ? data.allowBlank : this.allowBlank;
    this.minValue = data.minValue !== undefined ? data.minValue : this.minValue;
    this.maxValue = data.maxValue !== undefined ? data.maxValue : this.maxValue;
    this.defaultValue = data.defaultValue !== undefined ? data.defaultValue : this.defaultValue;
    this.value = data.value;
    this.levelSecurity = data.levelSecurity !== undefined ? data.levelSecurity : this.levelSecurity;
  }

  translate(levelSecurity= 0): DynamicInputModel {
    return new DynamicInputModel({
      id: this.name,
      disabled: this.levelSecurity > levelSecurity,
      hidden: this.levelSecurity > levelSecurity,
      value: this.value ? this.value : this.defaultValue,
      placeholder: this.formatName(),
      label: this.formatName(),
      inputType: 'number',
      validators: this.validators(),
      errorMessages: this.errorMessages(),
    });
  }

  validators() {
    const result = {};

    if (!this.allowBlank) {
      result['required'] = null;
    }

    if (!isNaN(this.minValue)) {
      result['min'] = this.minValue;
    }

    if (!isNaN(this.maxValue)) {
      result['max'] = this.maxValue;
    }
    return result;
  }

  errorMessages() {
    return {
      required: `{{ label }} is required.`,
      min: `{{ label }} has min value ${this.minValue}`,
      max: `{{ label }} has max value ${this.maxValue}.`,
    };
  }
}
