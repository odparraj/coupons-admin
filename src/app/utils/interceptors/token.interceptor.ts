import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse,
} from '@angular/common/http';
/* import { AuthService } from './auth/auth.service'; */
import { Observable } from 'rxjs/Observable';
import { NbTokenService } from '@nebular/auth';
import { flatMap } from 'rxjs/operators';
import 'rxjs/add/operator/do';
import { Router } from '@angular/router';
import { AppState } from '../../@core/store/reducer';
import { Store } from '@ngrx/store';
import * as AuthActions from '../../@core/store/actions/auth.actions';
import { environment } from '../../../environments/environment';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private tokenService: NbTokenService, private router: Router, private appStore: Store<AppState>) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return this.tokenService.get().pipe(
      flatMap( (token) => {
        console.log(request.url);
        request = request.clone({
          //url: `${environment.baseUrl}/${request.url}`,
          setHeaders: {
            Authorization: `Bearer ${token}`,
            Accept: 'application/json',
            ContentType: 'application/json',
          },
        });
        console.log(request.url);
        return next.handle(request).do((event: HttpEvent<any>) => {
          if (event instanceof HttpResponse) {
            // do stuff with response if you want
          }
        }, (err: any) => {
          if (err instanceof HttpErrorResponse) {
            if (err.status === 401) {
              // redirect to the login route
              // or show a modal

              this.tokenService.clear();
              this.appStore.dispatch(new AuthActions.SingOutAction());
              this.router.navigate(['auth/login']);
            }
          }
        });
      }),
    );
  }

}
