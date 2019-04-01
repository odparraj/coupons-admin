import { TextField } from './TextField';

export class EmailField extends TextField {
    xtype: string = 'EmailField';
    inputType: string =  'email';
    constructor(data) {
        super(data);
    }

    validators() {
        const result = {
            email: null,
        };

        if (!this.allowBlank) {
            result['required'] = null;
        }

        return result;
    }

    errorMessages() {
        return {
            required: `{{ label }} is required.`,
            email: `{{ label }} has invalid format.`,
        };
    }
}
