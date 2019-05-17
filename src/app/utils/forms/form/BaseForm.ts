import { aForm } from './aForm';
import { NumberField } from '../field/NumberField';
import { DateField } from '../field//DateField';
import { BooleanField } from '../field/BooleanField';
import { SelectField } from '../field/SelectField';
import { DynamicFormControlModel } from '@ng-dynamic-forms/core';
import { EmailField } from '../field/EmailField';
import { PasswordField } from '../field/PasswordField';
import { TextField } from '../field/TextField';
import { CheckboxField } from '../field/CheckboxField';
import { FileField } from '../field/FileField';
import { HiddenField } from '../field/HiddenField';

const namespace = {
    NumberField: NumberField,
    DateField: DateField,
    BooleanField: BooleanField,
    SelectField: SelectField,
    EmailField: EmailField,
    PasswordField: PasswordField,
    TextField: TextField,
    CheckboxField: CheckboxField,
    FileField: FileField,
    HiddenField: HiddenField,
};

export class BaseForm extends aForm {
    defaultItem = 'ContainerField';
    constructor(config) {
        super();
        this.loadItems(config['items']);
    }

    public static create(config: any) {
        return new BaseForm(config);
    }

    protected loadItems(items, prefixName= null) {
        for (const key in items) {
            const item = items[key];
            const xtype = item['xtype'] ? item['xtype'] : 'interno';
            if (xtype === 'interno' || xtype === this.defaultItem) {
                const items = item['items'] ? item['items'] : item;
                this.loadItems(items, key);
            } else {
                if (prefixName){
                    const newItem = JSON.parse(JSON.stringify(item));
                    newItem.name = `${prefixName}*${item.name}`;
                    eval(`this.items.push(new namespace['${xtype}'](newItem));`);

                } else {
                    eval(`this.items.push(new namespace['${xtype}'](item));`);
                }
            }
        }
    }

    getDynamicForm(levelSegurity= 0){
        const form: Array<DynamicFormControlModel> = [];

        for (let i = 0; i < this.items.length; i++){
            form.push(this.items[i].translate(levelSegurity));
        }
        return form;
    }
}
