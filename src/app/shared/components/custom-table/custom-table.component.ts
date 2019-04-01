import { Component, OnInit, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { flatMap } from 'rxjs/operators';
import { Config } from '../../models/Config';
import { Action } from '../../models/Action';
import { ResponseData } from '../../models/ResponseData';

@Component({
  selector: 'custom-table',
  templateUrl: './custom-table.component.html',
  styleUrls: ['./custom-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomTableComponent implements OnInit {
  @Input() config: Config = {
    title: '',
    columns: [],
    endpoint: '',
  };

  @Input() actions: Array<Action> = [];

  @Output() action: EventEmitter<any> = new EventEmitter();

  title: string = '';
  columns: Array<any> = [];
  items: Observable<ResponseData>;
  endpoint: string = '';
  paginate: any = {};

  currentPage: number = 1;
  total: number;
  perPage: number = 15;
  loading: boolean;

  constructor(private http: HttpClient) {

  }

  ngOnInit() {
    this.endpoint = this.config.endpoint ? this.config.endpoint : '';
    this.items = this.config.endpoint ? this.getData(1) : of([]);
    this.columns = this.config.columns ? this.config.columns : [];
    this.title = this.config.title ? this.config.title : '';
  }

  getData(page: number) {
    return this.http.get<ResponseData>(`${this.endpoint}?page=${page}`).pipe(
      flatMap((data) => {
        this.paginate = data.paginate;
        this.currentPage = data.paginate.current_page;
        this.total = data.paginate.total;
        this.perPage = data.paginate.per_page;
        return of(data['data']);
      }),
    );
  }

  getProp(obj, dotString) {
    let arr = dotString.split(".");
    while (arr.length && (obj = obj[arr.shift()]));
    return obj;
  }

  getPage(page: number) {
    this.items = this.getData(page);
  }

  onAction(action, data = null) {
    this.action.emit({
      action: action,
      data: data,
    });
  }

}
