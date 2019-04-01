import { TextField } from './TextField';

export class PasswordField extends TextField {
    xtype: string = 'PasswordField';
    inputType: string = 'password';
    constructor(data) {
        super(data);
    }

    validators() {
        const result = {
            minLength: 6,
        };

        if (!this.allowBlank) {
            result['required'] = null;
        }

        return result;
    }

    errorMessages() {
        return {
            required: `{{ label }} is required.`,
            minLength: `{{ label }} has min length 6.`,
        };
    }
}
