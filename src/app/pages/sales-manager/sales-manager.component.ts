import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sales-manager',
  template: `
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class SalesManagerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
