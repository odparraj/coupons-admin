import { Component, OnInit } from '@angular/core';
import { tap, take } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { AppState } from './../@core/store/reducer';
import * as AuthActions from './../@core/store/actions/auth.actions';
import { NbTokenService } from '@nebular/auth';

import { MENU_ITEMS } from './pages-menu';
import { NbMenuItem } from '@nebular/theme';
import { NbAccessChecker } from '@nebular/security';

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
  ) { }

  ngOnInit() {
    this.menu.forEach((item: NbMenuItem) => {
      this.resolvePermisision(item);
    });

    const getToken = this.tokenService.get().pipe(
      tap( (token) => {
        this.appStore.dispatch(new AuthActions.SingInAction({
          isLogin: true,
          token: token.getValue(),
        }));
      }),
      take(1),
    );

    getToken.subscribe(token => {});
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
}
