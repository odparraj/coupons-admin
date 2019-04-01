import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Action } from '../../models/Action';

@Component({
  selector: 'custom-actions',
  templateUrl: './custom-actions.component.html',
  styleUrls: ['./custom-actions.component.scss'],
})
export class CustomActionsComponent implements OnInit {

  @Input() actions: Array<Action> = [];
  @Output() action: EventEmitter<string> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onClick(action: string, data: any = null){
    this.action.emit(action);
  }

}
