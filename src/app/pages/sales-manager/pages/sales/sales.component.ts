import { Component, OnInit } from '@angular/core';
import { CrudComponent } from '../../../../shared/components/crud/crud.component';
import { Config } from '../../../../shared/models/Config';
import { Action } from '../../../../shared/models/Action';
import { HttpClient } from '@angular/common/http';
import { order_status } from '../../../../utils/config/variables';

@Component({
  selector: 'sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss']
})
export class SalesComponent extends CrudComponent implements OnInit {
  endpoint= 'api/orders';
  currentItem: string;
  currentAction: string = 'index';
  createModel = {};
  editModel = {};
  adminModel = {
    items: {
      'status': {
        'xtype': 'SelectField',
        'allowBlank': false,
        'defaultValue': '',
        'name': 'status',
        'value': '',
        'values': order_status,
        'levelSecurity': 0,
      },
    },
  };

  syncModel= {};
  
  config: Config = {
    title: 'Sales',
    columns: [
      {
        name: 'Order Number',
        key: 'number',
      },
      {
        name: 'Address',
        key: 'notes',
      },
      {
        name: 'Status',
        key: 'status',
      },
      {
        name: 'Date',
        key: 'created_at',
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
  ];
  globalActions = []

  constructor(private http: HttpClient) {
    super();
  }

  ngOnInit() {
  }

  store() {}
  create() {}

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

  async edit(data) {
    this.currentItem = data.id;
    await this.http.get(`api/users/${data.id}/roles`).toPromise().then((data)=>{
      let roles = data['data'] as [];
      roles.forEach(role => {
        this.adminModel.items.role.value = role['name'];
        console.log('role:', role['name']);
      });
    }).catch(console.error);
    this.currentAction = 'admin';
    console.log('edit', data);
  }

  update(data) {
    this.http.put(`${this.endpoint}/${this.currentItem}`, data).toPromise().then(() => {
      console.log('update', data);
      this.currentAction = 'index';
    }).catch(console.error);
  }
}
