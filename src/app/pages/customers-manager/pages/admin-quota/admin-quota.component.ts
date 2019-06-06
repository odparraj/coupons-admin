import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CustomTableComponent } from '../../../../shared/components/custom-table/custom-table.component';
import { NbSearchService } from '@nebular/theme';
import { Config } from '../../../../shared/models/Config';
import { Action } from '../../../../shared/models/Action';

@Component({
  selector: 'admin-quota',
  templateUrl: './admin-quota.component.html',
  styleUrls: ['./admin-quota.component.scss']
})
export class AdminQuotaComponent implements OnInit {
  currentAction: string = 'index';
  currentTransactionDetails: any;
  @Input() user = null;
  transactions_endpoint=`api/customers/${this.user}/transactions`;
  new_quota : Quota = {
    amount: null,
    description: null,
    input_data: null,
    user_id: this.user,
  };
  constructor(private http: HttpClient) {
  }
  ngOnInit() {

  }
  private reset_new_quota(){
    this.new_quota = {
      amount: null,
      description: null,
      input_data: null,
      user_id: this.user,
    };
  }
  async add_quota() {
    if(this.new_quota.amount){
      await this.http.post(`${this.transactions_endpoint}`, this.new_quota).toPromise().then((data) => {
        console.log('add_quota...', data);
        this.currentAction = 'index';
      }).catch(console.error);
      this.reset_new_quota();
    }
  }
  /*
  *--Data de Ejemplo para Cuenta
  */
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
        key: 'description',
      },
    ],
    endpoint: this.transactions_endpoint,
    filters:[
      {
        name: 'user_id',
        value: this.user
      }
    ]
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


  quota_tot = {
    'spent': 200000,
    'date' : '2019-03-23',
    'available':'',
    'orders':'',
    'mean':'',
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
    {value:100000, category:'Prueba', comments:"Any comment", created_by:"David", date:"2019-03-22"},
    {value:200000, category:'Birthday', comments:"Any comment", created_by:"David", date:"2019-03-23"},
  ];
}

class Quota {
  amount: number;
  user_id: string;
  description: string;
  input_data: any = null;
}
