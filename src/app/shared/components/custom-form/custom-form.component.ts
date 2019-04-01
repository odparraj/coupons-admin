import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BaseForm } from '../../../utils/forms/form/BaseForm';

import { DynamicFormLayout, DynamicFormControlModel, DynamicFormService } from '@ng-dynamic-forms/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'custom-form',
  templateUrl: './custom-form.component.html',
  styleUrls: ['./custom-form.component.scss'],
})
export class CustomFormComponent implements OnInit {

  @Input() debug:boolean= false;
  @Input() title: string = '';
  @Input() model: Array<any>;
  @Output() submit: EventEmitter<any> = new EventEmitter();
  @Output() cancel: EventEmitter<any> = new EventEmitter();
  formBack: BaseForm;
  formLayout: DynamicFormLayout = {};
  formModel: DynamicFormControlModel[];
  formGroup: FormGroup;

  constructor(private formService: DynamicFormService) { }

  async ngOnInit() {
    this.formBack = new BaseForm(this.model);
    this.formModel = this.formBack.getDynamicForm();
    this.formGroup = this.formService.createFormGroup(this.formModel);
  }

  getJson(obj?) {
    obj = obj || this.formGroup.value;
    for (let key in obj) {
      if (key.indexOf('*') !== -1) {
        this.parseDotNotation(key, obj[key], obj);
      }
    }
    return obj;
  }

  parseDotNotation(str, val, obj) {
    let currentObj = obj,
      keys = str.split('*'),
      i, l = Math.max(1, keys.length - 1),
      key;

    for (i = 0; i < l; ++i) {
      key = keys[i];
      currentObj[key] = currentObj[key] || {};
      currentObj = currentObj[key];
    }
    currentObj[keys[i]] = val;
    delete obj[str];
  }

  send(){
    if (this.formGroup.valid){
      this.submit.emit(this.getJson());
    }else{
      Object.keys(this.formGroup.controls).forEach(field => {
        const control = this.formGroup.get(field);
        control.markAsTouched({ onlySelf: true });
      });
    }
  }
  onCancel(){
    this.cancel.emit(null);
  }

}
