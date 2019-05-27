import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CrudComponent } from '../../../../shared/components/crud/crud.component';
import { Config } from '../../../../shared/models/Config';
import { Action } from '../../../../shared/models/Action';
import { option } from '../../../../utils/forms/field/SelectField';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent extends CrudComponent implements OnInit  {

  @Input() parent_id: number = null;
  @Input() parent_name: string = null;
  @Input() type: string = "";
  endpoint= 'api/products';
  currentItem: string;
  currentAction: string = 'index';
  createModel = {
    items: {
      'sku': {
        'xtype': 'TextField',
        'allowBlank': false,
        'defaultValue': '',
        'name': 'sku',
        'value': '',
        'levelSecurity': 0,
      },
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
        'name': 'price',
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
      'parent_id': {
        'xtype': 'HiddenField',
        'allowBlank': true,
        'defaultValue': '',
        'name': 'parent_id',
        'value': '',
        'levelSecurity': 0,
      },
    },
  };

  editModel = {
    items: {

      'sku': {
        'xtype': 'TextField',
        'allowBlank': false,
        'defaultValue': '',
        'name': 'sku',
        'value': '',
        'levelSecurity': 0,
      },
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
        'name': 'price',
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
      'parent_id': {
        'xtype': 'HiddenField',
        'allowBlank': true,
        'defaultValue': '',
        'name': 'parent_id',
        'value': '',
        'levelSecurity': 0,
      },
    },
  };

  syncModel= {};
  
  config: Config = {
    title: '',
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
    endpoint: 'api/products',
    filters:[]
  };

  actions: Array<Action> = [
    {
      name: 'edit',
      btnClass: 'btn btn-primary',
      iconClass: 'fas fa-edit',
      title: 'Edit Product',
    },
    {
      name: 'editTaxons',
      btnClass: 'btn btn-warning',
      iconClass: 'fas fa-sitemap',
      title: 'Edit Categories',
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

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) {
    super();
    this.router.routeReuseStrategy.shouldReuseRoute = function() {
      return false;
    };
  }

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.type = params['type'];
      if(params['parent_id']) {
        this.parent_id = params['parent_id'];
        this.parent_name = params['parent_name'];
      }
      this.config.filters.push({name: 'type', value: params['type']});
      switch(params['type']) {
        case "product": {
          this.config.title = "Products";
          break;
        }
        case "service": {
          this.config.title = "Services";
          this.actions.push(
            {
              name: 'addAditionals',
              btnClass: 'btn btn-info',
              iconClass: 'fas fa-plus',
              title: 'Add Aditionals',
            },
          );
          break;
        }
        case "aditional": {
          this.config.title = `${params['parent_name']} - Aditionals`;
          this.createModel.items.parent_id.value = params['parent_id'];
          this.editModel.items.parent_id.value = params['parent_id'];
          this.globalActions.unshift({
            name: 'return',
            btnClass: 'btn btn-danger',
            iconClass: 'fas fa-undo-alt',
            title: 'Return',
            text: 'Back',
          });
          break;
        }
        default: {
          this.config.title = "Products";
          break;
        }
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

  async editTaxons(data) {
    let taxonomies = {};
    await this.http.get('api/taxonomies').toPromise().then((data) => {
      let taxonomies_local = data['data'] as [];
      taxonomies_local.forEach(taxonomie => {
        taxonomies[taxonomie['id']] = taxonomie;
      });
    });
    await this.http.get('api/taxons').toPromise().then((data) => {
      let taxons = data['data'] as [];
      this.syncModel = {};
      this.syncModel['items'] = {}
      taxons.forEach((taxon) => {
        if(taxon['parent_id'] == null){
          this.syncModel['items'][taxon['id']] = {
            'xtype': 'CheckboxField',
            'allowBlank': false,
            'name': taxon['id'],
            'label': `${taxonomies[taxon['taxonomy_id']]['name']} / ${taxon['name']}`,
            'value': false,
            'levelSecurity': 0,
          };
        } else {
          this.syncModel['items'][taxon['id']] = {
            'xtype': 'CheckboxField',
            'allowBlank': false,
            'name': taxon['id'],
            'label': `${this.syncModel['items'][taxon['parent_id']]['label']} / ${taxon['name']}`,
            'value': false,
            'levelSecurity': 0,
          };
        }
        
      });
    }).catch(console.error);

    await this.http.get(`api/products/${data.id}/taxons`).toPromise().then((data)=>{
      let taxons = data['data'] as [];
      taxons.forEach((taxon) => {
        if( this.syncModel['items'].hasOwnProperty(taxon['id']) ){
          this.syncModel['items'][taxon['id']]['value'] = true;
        }
      }); 
    }).catch(console.error);

    this.currentAction = 'editTaxons';
    this.currentItem = data.id;
    console.log('edit Taxons', data, this.currentAction);
  }
  syncTaxons(data) {
    console.log('syncTaxons', data);
    let taxons= [];
    for(let key in data){
      if(data[key]){
        taxons.push({id: key});
      }
    }
    this.http.post(`${this.endpoint}/${this.currentItem}/sync-taxons`, taxons).toPromise().then((data) => {
      console.log('syncTaxons...', data);
      this.currentAction = 'index';
    }).catch(console.error);
  }

  addAditionals(data) {
    console.log('addAditionals');
    this.router.navigate(['/pages/products-manager/products'],{ queryParams: { type: 'aditional', parent_id: data.id, parent_name: data.name } });
  }
  return(data){
    window.history.back();
  }
}
