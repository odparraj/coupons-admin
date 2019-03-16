import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';
import { tap } from 'rxjs/operators';
import { NbAccessChecker } from '@nebular/security';

@Injectable()
export class PermissionGuard implements CanActivate {

  constructor(private accessChecker: NbAccessChecker, private router: Router) {
  }
  canActivate(next: ActivatedRouteSnapshot) {
    const permission = next.data.permission;

    if (! permission) {
      return false;
    }

    return this.accessChecker.isGranted('view', permission)
      .pipe(
        tap(isGranted => {
          if (!isGranted) {
            this.router.navigate(['pages']);
          }
        }),
      );
  }
}
