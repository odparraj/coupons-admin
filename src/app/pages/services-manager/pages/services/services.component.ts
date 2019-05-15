import { Component, OnInit } from '@angular/core';
import { CrudComponent } from '../../../../shared/components/crud/crud.component';
import { Config } from '../../../../shared/models/Config';
import { HttpClient } from '@angular/common/http';
import { option } from '../../../../utils/forms/field/SelectField';
import { Action } from '../../../../shared/models/Action';
import { Router } from '@angular/router';

@Component({
  selector: 'services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent extends CrudComponent implements OnInit {

  endpoint= 'api/services';
  currentItem: string;
  currentAction: string = 'index';
  createModel = {
    items: {
      'name': {
        'xtype': 'TextField',
        'allowBlank': false,
        'defaultValue': '',
        'name': 'name',
        'value': '',
        'levelSecurity': 0,
      },
      'price': {
        'xtype': 'NumberField',
        'allowBlank': false,
        'defaultValue': '',
        'name': 'full_price',
        'value': '',
        'levelSecurity': 0,
      },
      'description': {
        'xtype': 'TextField',
        'allowBlank': false,
        'defaultValue': '',
        'name': 'description',
        'value': '',
        'levelSecurity': 0,
      },
      'image': {
        'xtype': 'FileField',
        'allowBlank': true,
        'defaultValue': '',
        'name': 'image',
        'value': '',
        'levelSecurity': 0,
      },
    },
  };

  editModel = {
    items: {
      'name': {
        'xtype': 'TextField',
        'allowBlank': false,
        'defaultValue': '',
        'name': 'name',
        'value': '',
        'levelSecurity': 0,
      },
      'price': {
        'xtype': 'NumberField',
        'allowBlank': false,
        'defaultValue': '',
        'name': 'full_price',
        'value': '',
        'levelSecurity': 0,
      },
      'description': {
        'xtype': 'TextField',
        'allowBlank': false,
        'defaultValue': '',
        'name': 'description',
        'value': '',
        'levelSecurity': 0,
      },
      'image': {
        'xtype': 'FileField',
        'allowBlank': false,
        'defaultValue': '',
        'name': 'image',
        'value': '',
        'levelSecurity': 0,
      },
    },
  };

  syncModel= {};
  
  config: Config = {
    title: 'Services',
    columns: [
      {
        name: 'Name',
        key: 'name',
      },
      {
        name: 'Full Price',
        key: 'full_price',
      },
      {
        name: 'Current Price',
        key: 'current_price',
      },
    ],
    endpoint: this.endpoint,
  };

  actions: Array<Action> = [
    {
      name: 'edit',
      btnClass: 'btn btn-primary',
      iconClass: 'fas fa-edit',
      title: 'Edit Service',
    },
    {
      name: 'adminAditionals',
      btnClass: 'btn btn-warning',
      iconClass: 'fas fa-edit',
      title: 'Admin Aditionals',
    },
    {
      name: 'delete',
      btnClass: 'btn btn-danger',
      iconClass: 'fas fa-trash-alt',
      title: 'Remove Service',
    },
  ];

  globalActions: Array<Action> = [
    {
      name: 'create',
      btnClass: 'btn btn-primary',
      iconClass: 'fas fa-plus',
      title: 'Create Service',
      text: 'New',
    },
  ];

  constructor(private http: HttpClient, private router: Router) {
    
    super();
  }

  ngOnInit() {
  }

  delete(data) {
    if (window.confirm('Are you sure you want to delete?')) {
      this.currentAction = 'delete';
      this.http.delete(`${this.endpoint}/${data.id}`, data).toPromise().then(() => {
        console.log('delete', data);
        this.currentAction = 'index';
      }).catch(console.error);
    } else {
      this.currentAction = 'index';
    }
  }

  async create(data) {
    await this.http.get('api/service-categories').toPromise().then((data_categories) => {
      let service_categories = data_categories['data'] as [];
      let options : Array<option>;
      service_categories.forEach((category) => {
        options.push({
          label: category['name'],
          value: category['id']
        });
      });
      this.createModel['items']['category'] = {
        'xtype': 'SelectField',
        'allowBlank': false,
        'name': 'category',
        'label': 'Category',
        'value': false,
        'values': options,
        'levelSecurity': 0,
      };
    }).catch(console.error);
    this.currentAction = 'create';
    console.log('create', data);
  }

  async edit(data) {
    await this.http.get('api/service-categories').toPromise().then((data_categories) => {
      let service_categories = data_categories['data'] as [];
      let options : Array<option>;
      service_categories.forEach((category) => {
        options.push({
          label: category['name'],
          value: category['id']
        });
      });
      this.editModel['items']['category'] = {
        'xtype': 'SelectField',
        'allowBlank': false,
        'name': 'category',
        'label': 'Categiry',
        'value': data.category,
        'values': options,
        'levelSecurity': 0,
      };
    }).catch(console.error);
    this.editModel.items.name.value = data.name;
    this.currentAction = 'edit';
    console.log('edit', data);
  }

  update(data) {
    this.http.put(`${this.endpoint}/${data.id}`, data).toPromise().then(() => {
      console.log('update', data);
      this.currentAction = 'index';
    }).catch(console.error);
  }

  store(data){
    this.http.post(this.endpoint, data).toPromise().then(() => {
      console.log('store', data);
      this.currentAction = 'index';
    }).catch(console.error);
  }

  adminAditionals(data){
    this.router.navigate(['/pages/services-manager/aditionals'],{ queryParams: { service_id: data.id, service_name: data.name } });
  }

}
