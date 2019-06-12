import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { NbRoleProvider } from '@nebular/security';
import { AppState } from '../store/reducer';
import { Store } from '@ngrx/store';

@Injectable()
export class RoleProvider implements NbRoleProvider {

  constructor(private state: Store<AppState>) {
  }

  getRole(): Observable<Array<string>> {
    return this.state.select('roles');
  }
}