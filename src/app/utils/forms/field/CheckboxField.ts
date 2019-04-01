import {
    DynamicCheckboxModel,
} from '@ng-dynamic-forms/core';
import { aBaseField } from './aBaseField';

export class CheckboxField extends aBaseField<boolean>  {
    xtype: string = 'CheckboxField';
    allowBlank: boolean = true;
    defaultValue: boolean = false;
    label: string;
    constructor(data) {
        super();
        this.name = data.name;
        this.allowBlank = data.allowBlank !== undefined ? data.allowBlank : this.allowBlank;
        this.defaultValue = data.defaultValue !== undefined ? data.defaultValue : this.defaultValue;
        this.value = data.value;
        this.levelSecurity = data.levelSecurity !== undefined ? data.levelSecurity : this.levelSecurity;
        this.label= data.label;
    }

    translate(levelSecurity = 0): DynamicCheckboxModel {
        return new DynamicCheckboxModel({
            id: this.name,
            disabled: this.levelSecurity > levelSecurity,
            hidden: this.levelSecurity > levelSecurity,
            value: this.value ? this.value : this.defaultValue,
            label: this.label ? this.label : this.formatName(),
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
