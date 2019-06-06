import { Component, OnInit } from '@angular/core';
import { Config } from '../../../../shared/models/Config';
import { Action } from '../../../../shared/models/Action';
import { HttpClient } from '@angular/common/http';
import { CrudComponent } from '../../../../shared/components/crud/crud.component';

@Component({
  selector: 'customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent extends CrudComponent implements OnInit {

  endpoint= 'api/me/customers';
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
      'email': {
        'xtype': 'EmailField',
        'allowBlank': false,
        'defaultValue': '',
        'name': 'email',
        'value': '',
        'levelSecurity': 0,
      },
      'password': {
        'xtype': 'PasswordField',
        'allowBlank': false,
        'defaultValue': '',
        'name': 'password',
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
      'email': {
        'xtype': 'EmailField',
        'allowBlank': false,
        'defaultValue': '',
        'name': 'email',
        'value': '',
        'levelSecurity': 0,
      },
      'password': {
        'xtype': 'PasswordField',
        'allowBlank': false,
        'defaultValue': '',
        'name': 'password',
        'value': '',
        'levelSecurity': 0,
      },
    },
  };

  syncModel= {};
  
  config: Config = {
    title: 'Customers',
    columns: [
      {
        name: 'Name',
        key: 'name',
      },
      {
        name: 'Email',
        key: 'email',
      },
    ],
    endpoint: this.endpoint,
    filters:[]
  };

  actions: Array<Action> = [
    {
      name: 'edit',
      btnClass: 'btn btn-primary',
      iconClass: 'fas fa-edit',
      title: 'Edit User',
    },
    {
      name: 'editCategory',
      btnClass: 'btn btn-success',
      iconClass: 'fas fa-user-plus',
      title: 'Edit Category',
    },
    {
      name: 'adminQuota',
      btnClass: 'btn btn-warning',
      iconClass: 'fas fa-credit-card',
      title: 'Edit Role',
    },
    {
      name: 'delete',
      btnClass: 'btn btn-danger',
      iconClass: 'fas fa-trash-alt',
      title: 'Remove User',
    },
  ];

  globalActions: Array<Action> = [
    {
      name: 'create',
      btnClass: 'btn btn-primary',
      iconClass: 'fas fa-plus',
      title: 'Create User',
      text: 'New',
    },
  ];

  constructor(private http: HttpClient) {
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

  create(data) {
    this.currentAction = 'create';
    console.log('create', data);
  }

  edit(data) {
    this.editModel.items.email.value = data.email;
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

  async editCategory(data) {
    await this.http.get('api/me/categories').toPromise().then((data) => {
      let categories = data['data'] as [];
      this.syncModel = {};
      this.syncModel['items'] = {}
      categories.forEach((category) => {
        this.syncModel['items'][category['id']] = {
          'xtype': 'CheckboxField',
          'allowBlank': false,
          'name': category['id'],
          'label': category['name'],
          'value': false,
          'levelSecurity': 0,
        };
      });
    }).catch(console.error);

    await this.http.get(`api/customers/${data.id}/category`).toPromise().then((data)=>{
      let categories = data['data'] as [];
      categories.forEach((category) => {
        if( this.syncModel['items'].hasOwnProperty(category['id']) ){
          this.syncModel['items'][category['id']]['value'] = true;
        }
      }); 
    }).catch(console.error);

    this.currentAction = 'editCategory';
    this.currentItem = data.id;
    console.log('edit Roles', data, this.currentAction);
  }
  syncRoles(data) {
    console.log('syncRoles', data);
    let roles= [];
    for(let key in data){
      if(data[key]){
        roles.push({id: key});
      }
    }
    this.http.post(`${this.endpoint}/${this.currentItem}/sync-roles`, roles).toPromise().then((data) => {
      console.log('syncRoles...', data);
      this.currentAction = 'index';
    }).catch(console.error);
  }
  adminQuota(data){
    this.currentItem = data.id;
    this.currentAction="adminQuota";
  }

}
