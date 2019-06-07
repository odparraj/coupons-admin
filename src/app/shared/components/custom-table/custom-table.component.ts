import { Component, OnInit, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { flatMap, concat } from 'rxjs/operators';
import { Config } from '../../models/Config';
import { Action } from '../../models/Action';
import { ResponseData } from '../../models/ResponseData';
import { NbSearchService } from '@nebular/theme';

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
    filters: [],
  };

  @Input() actions: Array<Action> = [];

  @Output() action: EventEmitter<any> = new EventEmitter();

  title: string = '';
  columns: Array<any> = [];
  filters: Array<any> = [];
  items: Observable<ResponseData>;
  endpoint: string = '';
  paginate: any = {};

  currentPage: number = 1;
  total: number;
  perPage: number = 15;
  loading: boolean;
  search: string = "";
  filter: string = "";
  column: string = "";
  constructor(private http: HttpClient, private searchService: NbSearchService) {
    this.searchService.onSearchSubmit()
      .subscribe((data: any) => {
        this.search = data.term;
        this.getPage(1);
      })
  }

  ngOnInit() {
    this.endpoint = this.config.endpoint ? this.config.endpoint : '';
    this.items = this.config.endpoint ? this.getData(1) : of([]);
    this.columns = this.config.columns ? this.config.columns : [];
    this.title = this.config.title ? this.config.title : '';
    this.filters = this.config.filters ? this.config.filters : [];
  }

  getData(page: number) {
    this.filter="";
    let params = {};
    this.config.filters.forEach(filter => {
      params[filter.name] = filter.value;
    });
    if(this.column && this.search){
      params[this.column] = this.search;
    }
    params['page'] = page;
    return this.http.get<ResponseData>(this.endpoint, {params: params}).pipe(
      flatMap((data) => {
        this.paginate = data.pagination;
        this.currentPage = data.pagination.currentPage;
        this.total = data.pagination.total;
        this.perPage = data.pagination.perPage;
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
