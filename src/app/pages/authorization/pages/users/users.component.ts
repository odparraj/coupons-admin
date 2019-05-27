import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { CrudComponent } from '../../../../shared/components/crud/crud.component';
import { Config } from '../../../../shared/models/Config';
import { Action } from '../../../../shared/models/Action';

@Component({
  selector: 'users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent extends CrudComponent implements OnInit {

  endpoint= 'api/users';
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
    title: 'Users',
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

  async editRoles(data) {
    await this.http.get('api/roles').toPromise().then((data) => {
      let roles = data['data'] as [];
      this.syncModel = {};
      this.syncModel['items'] = {}
      roles.forEach((role) => {
        this.syncModel['items'][role['id']] = {
          'xtype': 'CheckboxField',
          'allowBlank': false,
          'name': role['id'],
          'label': role['name'],
          'value': false,
          'levelSecurity': 0,
        };
      });
    }).catch(console.error);

    await this.http.get(`api/users/${data.id}/roles`).toPromise().then((data)=>{
      let roles = data['data'] as [];
      roles.forEach((role) => {
        if( this.syncModel['items'].hasOwnProperty(role['id']) ){
          this.syncModel['items'][role['id']]['value'] = true;
        }
      }); 
    }).catch(console.error);

    this.currentAction = 'editRoles';
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

}
