import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'request-quota',
  templateUrl: './request-quota.component.html',
  styleUrls: ['./request-quota.component.scss']
})
export class RequestQuotaComponent implements OnInit {

  current_action = "create";

  constructor() { }

  request_quota() {
    this.current_action = "confirm";
  }

  ngOnInit() {
  }

}
