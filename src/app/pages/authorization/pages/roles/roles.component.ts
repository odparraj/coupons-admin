import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { CrudComponent } from '../../../../shared/components/crud/crud.component';
import { Config } from '../../../../shared/models/Config';
import { Action } from '../../../../shared/models/Action';

@Component({
  selector: 'roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss'],
})
export class RolesComponent extends CrudComponent implements OnInit {

  currentItem: string;
  endpoint = 'api/roles';
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
    },
  };

  syncModel = {};

  config: Config = {
    title: 'Roles',
    columns: [
      {
        name: 'Name',
        key: 'name',
      },
    ],
    endpoint: 'api/roles',
  };

  actions: Array<Action> = [
    {
      name: 'edit',
      btnClass: 'btn btn-primary',
      iconClass: 'fas fa-edit',
      title: 'Edit User',
    },
    {
      name: 'editPermissions',
      btnClass: 'btn btn-success',
      iconClass: 'fas fa-sync-alt',
      title: 'Sync Permissions',
    },
    {
      name: 'delete',
      btnClass: 'btn btn-danger',
      iconClass: 'fas fa-trash-alt',
      title: 'Remove User',
    }
  ];

  globalActions: Array<Action> = [
    {
      name: 'create',
      btnClass: 'btn btn-primary',
      iconClass: 'fas fa-plus',
      title: 'Create User',
      text: 'new',
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
    this.editModel.items.name.value = data.name;
    this.currentAction = 'edit';
    this.currentItem = data.id;
    console.log('edit', data);
  }

  update(data) {
    this.http.put(`${this.endpoint}/${this.currentItem}`, data).toPromise().then(() => {
      console.log('update', data);
      this.currentAction = 'index';
    }).catch(console.error);
  }

  store(data) {
    this.http.post(this.endpoint, data).toPromise().then(() => {
      console.log('store', data);
      this.currentAction = 'index';
    }).catch(console.error);
  }

  async editPermissions(data) {
    await this.http.get('api/permissions').toPromise().then((data) => {
      let permissions = data['data'] as [];
      this.syncModel = {};
      this.syncModel['items'] = {}
      permissions.forEach((permission) => {
        this.syncModel['items'][permission['id']] = {
          'xtype': 'CheckboxField',
          'allowBlank': false,
          'name': permission['id'],
          'label': permission['name'],
          'value': false,
          'levelSecurity': 0,
        };
      });
    }).catch(console.error);

    await this.http.get(`api/roles/${data.id}/permissions`).toPromise().then((data)=>{
      let permissions = data['data'] as [];
      permissions.forEach((permission) => {
        if( this.syncModel['items'].hasOwnProperty(permission['id']) ){
          this.syncModel['items'][permission['id']]['value'] = true;
        }
      }); 
    }).catch(console.error);

    this.currentAction = 'editPermissions';
    this.currentItem = data.id;
    console.log('edit permissions', data, this.currentAction);
  }
  syncPermissions(data) {
    console.log('syncPermission', data);
    let permissions= [];
    for(let key in data){
      if(data[key]){
        permissions.push({id: key});
      }
    }
    this.http.post(`${this.endpoint}/${this.currentItem}/sync-permissions`, permissions).toPromise().then((data) => {
      console.log('syncPermissions...', data);
      this.currentAction = 'index';
    }).catch(console.error);
  }

}
