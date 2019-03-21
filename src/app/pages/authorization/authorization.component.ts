import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-authorization',
  template: `
    <router-outlet></router-outlet>
  `,
  styles: [],
})
export class AuthorizationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
