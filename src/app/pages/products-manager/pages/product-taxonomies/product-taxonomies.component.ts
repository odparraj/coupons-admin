import { Component, OnInit, Input } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { CrudComponent } from '../../../../shared/components/crud/crud.component';
import { Config } from '../../../../shared/models/Config';
import { Action } from '../../../../shared/models/Action';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'product-taxonomies',
  templateUrl: './product-taxonomies.component.html',
  styleUrls: ['./product-taxonomies.component.scss']
})
export class ProductTaxonomiesComponent extends CrudComponent implements OnInit  {

  @Input() type : string = null;

  endpoint= 'api/taxonomies';
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
      // 'type': {
      //   'xtype': 'HiddenField',
      //   'allowBlank': true,
      //   'defaultValue': '',
      //   'name': 'type',
      //   'value': '',
      //   'levelSecurity': 0,
      // },
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
      // 'type': {
      //   'xtype': 'HiddenField',
      //   'allowBlank': true,
      //   'defaultValue': '',
      //   'name': 'type',
      //   'value': '',
      //   'levelSecurity': 0,
      // },
    },
  };

  syncModel= {};
  
  config: Config = {
    title: 'Categories',
    columns: [
      {
        name: 'Name',
        key: 'name',
      },
    ],
    endpoint: this.endpoint,
    filters: []
  };

  actions: Array<Action> = [
    {
      name: 'edit',
      btnClass: 'btn btn-primary',
      iconClass: 'fas fa-edit',
      title: 'Edit Category',
    },
    {
      name: 'addTaxon',
      btnClass: 'btn btn-success',
      iconClass: 'fas fa-sitemap',
      title: 'Add Taxon',
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

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) {
    super();
  }

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.type = params['type'];
      // this.createModel.items.type.value = params['type'];
      // this.editModel.items.type.value = params['type'];
      this.config.title = `${params['type'].charAt(0).toUpperCase() + params['type'].slice(1)} ${this.config.title}`;
    });
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

  addTaxon(data){
    this.router.navigate(['/pages/products-manager/taxons'],{ queryParams: { taxonomy_id: data.id, taxonomy_name: data.name, type: this.type } });
  }

}
