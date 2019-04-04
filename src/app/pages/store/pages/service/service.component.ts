import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {

  constructor(private router: Router) { }
  base_selected;
  //aditionals_selected = [];
  sum: number = 0;
  ngOnInit() {
  }
  select_base(id:number) {
    this.sum = this.service.bases[id].price;
    this.base_selected = id;
  }
  check_aditional(e,id:number) {
    this.sum = this.service.bases[this.base_selected].price;
    for (let i =0;i<this.service.aditionals.length; i++) {
      if (this.service.aditionals[i].id === id && e.target.checked){
        this.sum += this.service.aditionals[i].amount*this.service.aditionals[i].price;
      }
    }
  }
  increase_quantity(id:number) {
    this.sum = 0;
    for (let i =0;i<this.service.aditionals.length; i++) {
      if (this.service.aditionals[i].id === id && this.service.aditionals[i].amount !== this.service.aditionals[i].max_amount){
        this.service.aditionals[i].amount++;
      }
      this.sum += this.service.aditionals[i].amount*this.service.aditionals[i].price;
    }
  }
  decrease_quantity(id:number) {
    this.sum = 0;
    for (let i =0;i<this.service.aditionals.length; i++) {
      if (this.service.aditionals[i].id === id && this.service.aditionals[i].amount > 1){
        this.service.aditionals[i].amount--;
      }
      this.sum += this.service.aditionals[i].amount*this.service.aditionals[i].price;
    }
  }
  delete_product(id:number){
    this.order = this.order.filter(product => product.id !== id);
    this.ngOnInit()
  }
  goToPayment(){
    this.router.navigate(['/pages/store/payment-gateway']);
  }
  order = [
    {id:0, name:"Zapatos", brand:"Nike", price:100000, image:"", amount:1},
    {id:1, name:"Balón", brand:"Nike", price:50000, image:"", amount:1},
  ]
  service = {
    name: "Cabañas Yurimena",
    bases: [
      {
        id: 0,
        name: "4 cabañas", 
        price: 200000,
        description: "Descripción de la base a adquirir"
      },
      {
        id:1,
        name: "6 cabañas", 
        price: 300000,
        description: "Descripción de la base a adquirir"
      },
    ],
    aditionals: [
      {
        id: 0,
        name: "Cabaña extra",
        price: 80000,
        description: "Descripción del adicional a adquirir",
        max_amount:5,
        amount:1,
      },
      {
        id: 1,
        name: "Día extra",
        price: 100000,
        description: "Descripción del adicional a adquirir",
        max_amount:5,
        amount:1,
      },
    ]
  }

}
