import { Component, OnInit, Input } from '@angular/core';
import { CrudComponent } from '../../../../shared/components/crud/crud.component';
import { Config } from '../../../../shared/models/Config';
import { Action } from '../../../../shared/models/Action';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'service-aditionals',
  templateUrl: './service-aditionals.component.html',
  styleUrls: ['./service-aditionals.component.scss']
})
export class ServiceAditionalsComponent extends CrudComponent implements OnInit {

  @Input() service_id: number;
  @Input() service_name: string = "";

  endpoint= 'api/service-aditionals';
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
    },
  };
  
  config: Config = {
    title: `${this.service_name} - Service Aditionals`,
    columns: [
      {
        name: 'Name',
        key: 'name',
      },
      {
        name: 'Description',
        key: 'description',
      },
    ],
    endpoint: `${this.endpoint}/${this.service_id}`,
  };

  actions: Array<Action> = [
    {
      name: 'edit',
      btnClass: 'btn btn-primary',
      iconClass: 'fas fa-edit',
      title: 'Edit Aditional',
    },
    {
      name: 'delete',
      btnClass: 'btn btn-danger',
      iconClass: 'fas fa-trash-alt',
      title: 'Remove Aditional',
    },
  ];

  globalActions: Array<Action> = [
    {
      name: 'returnToServices',
      btnClass: 'btn btn-danger',
      iconClass: 'fas fa-undo-alt',
      title: 'Return to Services',
      text: 'Back',
    },
    {
      name: 'create',
      btnClass: 'btn btn-primary',
      iconClass: 'fas fa-plus',
      title: 'Create Service Aditional',
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

  create(data) {
    this.currentAction = 'create';
    console.log('create', data);
  }

  edit(data) {
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

  returnToServices(data) {
    this.router.navigate(['/pages/services-manager/services']);
  }
}