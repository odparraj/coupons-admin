import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'products-manager',
  template: `
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class ProductsManagerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
