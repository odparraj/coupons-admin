import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'customers-manager',
  template: `
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class CustomersManagerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
