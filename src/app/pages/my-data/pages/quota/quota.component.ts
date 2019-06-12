import { Component, OnInit, Input } from '@angular/core';
import { Config } from '../../../../shared/models/Config';
import { Action } from '../../../../shared/models/Action';
import { HttpClient } from '@angular/common/http';
import { CustomTableComponent } from '../../../../shared/components/custom-table/custom-table.component';

@Component({
  selector: 'quota',
  templateUrl: './quota.component.html',
  styleUrls: ['./quota.component.scss']
})
export class QuotaComponent implements OnInit {
  currentTransactionDetails: string;
  currentAction: string = 'index';
  transactions_endpoint: string = "api/me/transactions";
  get_quota_endpoint: string = "api/me/quota";
  quota: any = {};
  constructor(private http: HttpClient) {
  }
  async ngOnInit() {
    await this.http.get(this.get_quota_endpoint).toPromise().then((data) => {
      this.quota = data['data'];
    }).catch(console.error);
    console.log(this.quota);
  }

  config: Config = {
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
    endpoint: this.transactions_endpoint,
    filters:[]
  };
}
