import {
    DynamicInputModel,
} from '@ng-dynamic-forms/core';
import { aBaseField } from './aBaseField';

export class HiddenField extends aBaseField<string> {
    xtype: string = 'HiddenField';
    allowBlank: boolean = true;
    defaultValue: string = '';
    inputType: string = 'text';

    constructor(data) {
        super();
        this.name = data.name;
        this.allowBlank = data.allowBlank !== undefined ? data.allowBlank : this.allowBlank;
        this.defaultValue = data.defaultValue !== undefined ? data.defaultValue : this.defaultValue;
        this.value = data.value;
        this.levelSecurity = data.levelSecurity !== undefined ? data.levelSecurity : this.levelSecurity;
    }

    translate(levelSecurity = 0): DynamicInputModel {
        return new DynamicInputModel({
            id: this.name,
            disabled: this.levelSecurity > levelSecurity,
            hidden: true,
            value: this.value ? this.value : this.defaultValue,
            placeholder: this.formatName(),
            label: this.formatName(),
            inputType: this.inputType,
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
