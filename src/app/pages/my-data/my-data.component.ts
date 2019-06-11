import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-data',
  template: `
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class MyDataComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
