import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {
  service_id : number;
  service_price : number;
  service_name : string = "";
  service_description : string = "";
  additionals = [];
  sum: number = 0;

  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) {
  }
  
  async ngOnInit() {
    this.service_id = this.route.snapshot.queryParams.service_id;
    this.service_price = parseFloat(this.route.snapshot.queryParams.service_price);
    this.service_name = this.route.snapshot.queryParams.service_name;
    this.service_description = this.route.snapshot.queryParams.service_description;
    await this.http.get(`api/products?type=additional&parent_id=${this.service_id}`).toPromise().then((data) => {
      let additionals = data['data'] as [];
      let additionals_local = [];
      additionals.forEach((additional) => {
        additionals_local[additional['id']] = {
          'id': additional['id'],
          'name': additional['name'],
          'price': additional['price'],
          'amount': 1,
          'checked': false,
          'description': additional['description'],
        };
        this.additionals.push(additionals_local[additional['id']]);        
      });
    }).catch(console.error);
    this.sum = this.service_price;
  }

  check_additional(e,aditional,id:number) {
    this.additionals[id].checked = e.target.checked;
    this.update_sum();
  }
  update_sum(){
    this.sum = this.service_price;
    for(let i = 0; i < this.additionals.length; i++){
      this.sum += this.additionals[i].checked ? this.additionals[i].price * this.additionals[i].amount : 0;
    }
  }
  increase_quantity(aditional, i) {
    this.additionals[i].amount++;
    this.update_sum();
  }
  decrease_quantity(aditional, i) {
    this.additionals[i].amount = this.additionals[i].amount > 1 ? this.additionals[i].amount - 1 : 1;
    this.update_sum();
  }
  delete_product(id:number){
  }
  goToPayment(){
    this.router.navigate(['/pages/store/payment-gateway']);
  }

}
