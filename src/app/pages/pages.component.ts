import { Component, OnInit } from '@angular/core';
import { tap, take } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { AppState } from './../@core/store/reducer';
import * as AuthActions from './../@core/store/actions/auth.actions';
import { NbTokenService } from '@nebular/auth';

import { MENU_ITEMS } from './pages-menu';
import { NbMenuItem } from '@nebular/theme';
import { NbAccessChecker } from '@nebular/security';
import { HttpClient } from '@angular/common/http';
import { SyncRolesAction } from '../@core/store/actions/roles.actions';

@Component({
  selector: 'ngx-pages',
  template: `
    <ngx-sample-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-sample-layout>
  `,
})
export class PagesComponent implements OnInit {

  public menu: NbMenuItem[] = MENU_ITEMS;

  constructor(
    private accessChecker: NbAccessChecker,
    private tokenService: NbTokenService,
    private appStore: Store<AppState>,
    private http: HttpClient,
  ) { }

  ngOnInit() {
    this.updateStore();
    this.menu.forEach((item: NbMenuItem) => {
      this.resolvePermisision(item);
    });
  }

  private resolvePermisision(item: NbMenuItem) {
    item.hidden = true;
    const permission = item.data ? item.data.permission : undefined;
    if (permission) {
      this.accessChecker.isGranted('view', permission).subscribe(hasPermission => {
        if (hasPermission) {
          item.hidden = false;
          if (this.hasChildren(item)) {
            item.children.forEach(child => {
              this.resolvePermisision(child);
            });
          }
        }
      });
    }
  }

  private hasChildren(item: NbMenuItem): boolean {
    return item.children ? item.children.length > 0 : false;
  }

  private updateStore() {
    this.appStore.select('roles').subscribe((roles)=>{
      if(roles[0]=='guest'){
        this.tokenService.get().toPromise().then((token)=>{
          this.appStore.dispatch(new AuthActions.SingInAction({
            isLogin: true,
            token: token.getValue(),
          }));
        }).catch(console.error);

        this.http.get('api/me/roles').toPromise().then((response)=>{
          console.log(response);
          let roles = response['data'] as [];
          this.appStore.dispatch(new SyncRolesAction( roles.map((role)=>{return role['name']}) ));
          let profile = {
            name: response['data']['name'],
            email: response['data']['email'],
          }

        }).catch(console.error);
      }
    });
  }
}
