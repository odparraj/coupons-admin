import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CustomTableComponent } from '../../../../shared/components/custom-table/custom-table.component';
import { NbSearchService } from '@nebular/theme';
import { Config } from '../../../../shared/models/Config';
import { Action } from '../../../../shared/models/Action';

var CONFIG = {
  title: 'Transactions',
  columns: [
    {
      name: 'Created Date',
      key: 'created_at',
    },
    {
      name: 'Amount',
      key: 'amount',
    },
    {
      name: 'Description',
      key: 'operation.name',
    },
  ],
  endpoint: '',
  filters: []
};

@Component({
  selector: 'admin-quota',
  templateUrl: './admin-quota.component.html',
  styleUrls: ['./admin-quota.component.scss']
})

export class AdminQuotaComponent implements OnInit {
  currentAction: string = 'index';
  currentTransactionDetails: any;
  @Input() user = null;
  transactions_endpoint: string;
  get_quota_endpoint: string;
  update_quota_endpoint: string;
  change_quota_status_endpoint: string;
  quota: any = {};
  new_quota_amount: number;
  quota_status: boolean;
  constructor(private http: HttpClient) {
  }
  async ngOnInit() {
    this.transactions_endpoint = `api/me/customers/${this.user}/transactions`;
    this.get_quota_endpoint = `api/me/customers/${this.user}/quota`;
    this.update_quota_endpoint = `api/me/customers/${this.user}/quota-update`;
    this.change_quota_status_endpoint = `api/me/customers/${this.user}/quota-change-active`;
    await this.http.get(this.get_quota_endpoint).toPromise().then((data) => {
      this.quota = data['data'];
    }).catch(console.error);
    this.quota_status = this.quota.is_active;
    console.log(this.quota);
    this.config = {...CONFIG,...{endpoint: this.transactions_endpoint}};
  }
  private reset_new_quota() {
    this.new_quota_amount = null;
  }
  async add_quota() {
    if (this.new_quota_amount) {
      await this.http.post(this.update_quota_endpoint, { amount: this.new_quota_amount }).toPromise().then((data) => {
        console.log('add_quota...', data);
        this.quota = data['data'];
      }).catch(console.error);
      this.reset_new_quota();
    }
  }
  async change_quota_status() {
    await this.http.post(this.change_quota_status_endpoint, { is_active: this.quota_status }).toPromise().then((data) => {
      console.log('add_quota...', data);
      this.quota = data['data'];
    }).catch(console.error);
  }
  /*
  *--Data de Ejemplo para Cuenta
  */
  config: Config;

  viewTransactionDetails(data) {
    this.currentTransactionDetails = data.input_data;
    this.currentAction = 'viewTransactionDetails';
  }

  quota_tot = {
    'spent': 200000,
    'date': '2019-03-23',
    'available': '',
    'orders': '',
    'mean': '',
  };

  /*
  *--Data de Ejemplo para Ordenes
  */

  orders = [
    {
      date: '2019-03-23',
      price: 80000,
      products: [
        {
          name: 'Zapatos',
          brand: 'Adidas',
          price: 60000,
        },
        {
          name: 'Pelota',
          brand: 'Adidas',
          price: 20000,
        },
      ]
    },
    {
      date: '2019-03-23',
      price: 100000,
      products: [
        {
          name: 'Zapatos',
          brand: 'Adidas',
          price: 60000,
        },
        {
          name: 'Medias',
          brand: 'Adidas',
          price: 20000,
        },
        {
          name: 'Pantaloneta',
          brand: 'Adidas',
          price: 20000,
        },
      ]
    }
  ];

  /*
  *--Data de Ejemplo para Cupos
  */

  quotas = [
    { value: 100000, category: 'Prueba', comments: "Any comment", created_by: "David", date: "2019-03-22" },
    { value: 200000, category: 'Birthday', comments: "Any comment", created_by: "David", date: "2019-03-23" },
  ];
}
