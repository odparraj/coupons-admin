import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'table-actions',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() data;
  constructor() { }

  ngOnInit() {
  }
  
}
