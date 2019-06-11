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

  actions: Array<Action> = [
    {
      name: 'viewTransactionDetails',
      btnClass: 'btn btn-danger',
      iconClass: 'fas fa-eye',
      title: 'View Details',
    },
  ];

  viewTransactionDetails(data) {
    this.currentTransactionDetails = data.input_data;
    this.currentAction = 'viewTransactionDetails';
  }

  syntaxHighlight(json: JSON) {
    let str = JSON.stringify(json, undefined, 4)
    str = str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    console.log(str);
    return str.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
        var cls = 'number';
        if (/^"/.test(match)) {
            if (/:$/.test(match)) {
                cls = 'key';
            } else {
                cls = 'string';
            }
        } else if (/true|false/.test(match)) {
            cls = 'boolean';
        } else if (/null/.test(match)) {
            cls = 'null';
        }
        return '<span class="' + cls + '">' + match + '</span>';
    });
  }
}
