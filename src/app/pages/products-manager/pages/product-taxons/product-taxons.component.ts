import { Component, OnInit, Input } from '@angular/core';
import { Config } from '../../../../shared/models/Config';
import { Action } from '../../../../shared/models/Action';
import { CrudComponent } from '../../../../shared/components/crud/crud.component';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'product-taxons',
  templateUrl: './product-taxons.component.html',
  styleUrls: ['./product-taxons.component.scss']
})
export class ProductTaxonsComponent extends CrudComponent implements OnInit {

  @Input() type: string;
  @Input() taxonomy_id: string;
  @Input() taxonomy_name: string;
  @Input() parent_id: string = null;
  @Input() parent_name: string = null;

  endpoint= 'api/taxons';
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
        'value': '',
        'levelSecurity': 0,
      },
      'parent_id': {
        'xtype': 'HiddenField',
        'allowBlank': true,
        'defaultValue': '',
        'name': 'parent_id',
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
      'taxonomy_id': {
        'xtype': 'HiddenField',
        'allowBlank': false,
        'defaultValue': '',
        'name': 'taxonomy_id',
        'value': '',
        'levelSecurity': 0,
      },
      'parent_id': {
        'xtype': 'HiddenField',
        'allowBlank': true,
        'defaultValue': '',
        'name': 'parent_id',
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
    title: 'Subcategories',
    columns: [
      {
        name: 'Name',
        key: 'name',
      },
    ],
    endpoint: this.endpoint,
    filters:[],
  };

  configObservable = new Observable()

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
      iconClass: 'fas fa-sitemap',
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
      name: 'return',
      btnClass: 'btn btn-danger',
      iconClass: 'fas fa-undo-alt',
      title: 'Return',
      text: 'Back',
    },
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
    this.router.routeReuseStrategy.shouldReuseRoute = function() {
      return false;
    };
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.type = params['type'];
      this.taxonomy_id = params['taxonomy_id'];
      this.taxonomy_name = params['taxonomy_name'];
      this.createModel.items.taxonomy_id.value = params['taxonomy_id'];
      // this.createModel.items.type.value = params['type'];
      this.editModel.items.taxonomy_id.value = params['taxonomy_id'];
      // this.editModel.items.type.value = params['type'];
      this.config.title = `${params['type'].charAt(0).toUpperCase() + params['type'].slice(1)} ${this.config.title} of ${params['taxonomy_name']}`;
      if(params['parent_id']){
        this.parent_id = params['parent_id'];
        this.parent_name = params['parent_name'];
        this.config.filters.push({name:"parent_id",value: params['parent_id']});
        this.createModel.items.parent_id.value = params['parent_id'];
        this.editModel.items.parent_id.value = params['parent_id'];
        this.config.title = this.config.title.concat(` / ${params['parent_name']}`);
      } else {
        this.config.filters.push({name:"taxonomy_id",value: params['taxonomy_id']});
      }
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

  async addChildren(data){
    console.log('addChildren');
    await this.router.navigate(['/pages/products-manager/taxons'],{ queryParams: { taxonomy_id: this.taxonomy_id, taxonomy_name: this.taxonomy_name, parent_id: data.id, parent_name: this.parent_name ? `${this.parent_name} / ${data.name}` : data.name, type: this.type} });
  }

  return(data){
    window.history.back();
  }

}

