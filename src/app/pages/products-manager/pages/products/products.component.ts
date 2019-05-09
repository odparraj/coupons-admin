import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CrudComponent } from '../../../../shared/components/crud/crud.component';
import { Config } from '../../../../shared/models/Config';
import { Action } from '../../../../shared/models/Action';
import { option } from '../../../../utils/forms/field/SelectField';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent extends CrudComponent implements OnInit  {

  endpoint= 'api/products';
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
      'full_price': {
        'xtype': 'NumberField',
        'allowBlank': false,
        'defaultValue': '',
        'name': 'full_price',
        'value': '',
        'levelSecurity': 0,
      },
      'current_price': {
        'xtype': 'NumberField',
        'allowBlank': false,
        'defaultValue': '',
        'name': 'current_price',
        'value': '',
        'levelSecurity': 0,
      },
      'discount_final_date': {
        'xtype': 'DateField',
        'allowBlank': true,
        'defaultValue': '',
        'name': 'discount_final_date',
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
      'full_price': {
        'xtype': 'NumberField',
        'allowBlank': false,
        'defaultValue': '',
        'name': 'full_price',
        'value': '',
        'levelSecurity': 0,
      },
      'current_price': {
        'xtype': 'NumberField',
        'allowBlank': false,
        'defaultValue': '',
        'name': 'current_price',
        'value': '',
        'levelSecurity': 0,
      },
      'discount_final_date': {
        'xtype': 'DateField',
        'allowBlank': true,
        'defaultValue': '',
        'name': 'discount_final_date',
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
    title: 'Products',
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
    endpoint: 'api/products',
  };

  actions: Array<Action> = [
    {
      name: 'edit',
      btnClass: 'btn btn-primary',
      iconClass: 'fas fa-edit',
      title: 'Edit Product',
    },
    {
      name: 'delete',
      btnClass: 'btn btn-danger',
      iconClass: 'fas fa-trash-alt',
      title: 'Remove Product',
    },
  ];

  globalActions: Array<Action> = [
    {
      name: 'create',
      btnClass: 'btn btn-primary',
      iconClass: 'fas fa-plus',
      title: 'Create Product',
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

  async create(data) {
    await this.http.get('api/product-categories').toPromise().then((data_categories) => {
      let product_categories = data_categories['data'] as [];
      let options : Array<option>;
      product_categories.forEach((category) => {
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
    await this.http.get('api/product-categories').toPromise().then((data_categories) => {
      let product_categories = data_categories['data'] as [];
      let product_categories_names : Array<string>;
      product_categories.forEach((category) => {
        product_categories_names.push(category['name']);
      });
      this.editModel['items']['category'] = {
        'xtype': 'SelectField',
        'allowBlank': false,
        'name': 'category',
        'label': 'Categiry',
        'value': data.category,
        'values': product_categories,
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

}
