import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'services-manager',
  template: `
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class ServicesManagerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
