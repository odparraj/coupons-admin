import { Component, OnInit } from '@angular/core';
import { CrudComponent } from '../../../../shared/components/crud/crud.component';
import { Config } from '../../../../shared/models/Config';
import { Action } from '../../../../shared/models/Action';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'customer-categories',
  templateUrl: './customer-categories.component.html',
  styleUrls: ['./customer-categories.component.scss']
})
export class CustomerCategoriesComponent extends CrudComponent implements OnInit {

  endpoint= 'api/me/customer-categories';
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

  config: Config = {
    title: 'Customer Categories',
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
      name: 'editRoles',
      btnClass: 'btn btn-success',
      iconClass: 'fas fa-user-plus',
      title: 'Edit Role',
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

}
