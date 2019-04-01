import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'store',
  template: `
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class StoreComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
