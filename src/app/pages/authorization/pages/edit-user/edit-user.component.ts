import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {

  constructor() { }
  
  ngOnInit() {
  }

  email: string = "example@terapp.com";
  address: string;
  cellphone: string;
  value_new_quota: number;
  category: string;
  comments: string;

  eraseChanges() {
    this.email="";
    this.address="";
    this.cellphone="";
  }

  updateUser() {
    console.log(this.email);
  }

  assign_new_quota() {
    var quota = {value:this.value_new_quota, category:this.category, comments:this.comments, created_by:"David", date:"2019-03-29"};
    this.quotas.push(quota);
  }
  /*
  *--Data de Ejemplo para Cuenta
  */

  quota_tot = {
    'spent': 200000,
    'date' : '2019-03-23'
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
