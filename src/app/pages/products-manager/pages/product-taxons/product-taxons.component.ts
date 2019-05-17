import { Component, OnInit, Input } from '@angular/core';
import { Config } from '../../../../shared/models/Config';
import { Action } from '../../../../shared/models/Action';
import { CrudComponent } from '../../../../shared/components/crud/crud.component';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'product-taxons',
  templateUrl: './product-taxons.component.html',
  styleUrls: ['./product-taxons.component.scss']
})
export class ProductTaxonsComponent extends CrudComponent implements OnInit {

  @Input() taxonomy_id: number;
  @Input() taxomomy_name: string = "";
  @Input() parent_id: number = null;
  @Input() parent_name: string = "";

  endpoint= 'api/product-taxons';
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
      'taxonomy_id': {
        'xtype': 'HiddenField',
        'allowBlank': false,
        'defaultValue': '',
        'name': 'taxonomy_id',
        'value': this.taxonomy_id,
        'levelSecurity': 0,
      },
      'parent_id': {
        'xtype': 'HiddenField',
        'allowBlank': false,
        'defaultValue': '',
        'name': 'parent_id',
        'value': this.parent_id,
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
      'taxonomy_id': {
        'xtype': 'HiddenField',
        'allowBlank': false,
        'defaultValue': '',
        'name': 'taxonomy_id',
        'value': this.taxonomy_id,
        'levelSecurity': 0,
      },
      'parent_id': {
        'xtype': 'HiddenField',
        'allowBlank': false,
        'defaultValue': '',
        'name': 'parent_id',
        'value': this.parent_id,
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

  syncModel= {};
  
  config: Config = {
    title: 'Product Categories',
    columns: [
      {
        name: 'Name',
        key: 'name',
      },
      {
        name: 'Description',
        key: 'ext_title',
      }
    ],
    endpoint: `${this.endpoint}?taxonomy_id=${this.taxonomy_id}&parent_id=${this.parent_id}`,
  };

  actions: Array<Action> = [
    {
      name: 'edit',
      btnClass: 'btn btn-primary',
      iconClass: 'fas fa-edit',
      title: 'Edit Category',
    },
    {
      name: 'addChildren',
      btnClass: 'btn btn-success',
      iconClass: 'fas fa-plus',
      title: 'Add Children',
    },
    {
      name: 'delete',
      btnClass: 'btn btn-danger',
      iconClass: 'fas fa-trash-alt',
      title: 'Remove Category',
    },
  ];

  globalActions: Array<Action> = [
    {
      name: 'create',
      btnClass: 'btn btn-primary',
      iconClass: 'fas fa-plus',
      title: 'Create Product Category',
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

  addChildren(data){
    this.router.navigate(['/pages/products-manager/taxons'],{ queryParams: { taxonomy_id: this.taxonomy_id, parent_id: data.parent_id } });
  }

}
