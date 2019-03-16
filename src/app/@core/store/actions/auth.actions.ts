import { Action } from '@ngrx/store';
import { IAuth } from '../../../models/auth.model';


export enum AuthActionType {
  SINGIN = '[Auth] singIn app',
  SINGOUT = '[Auth] singOut app',
}

export class SingInAction implements Action {
  readonly type = AuthActionType.SINGIN;
  constructor(public payload: IAuth) { }
}

export class SingOutAction implements Action {
  readonly type = AuthActionType.SINGOUT;
}

export type AuthActions =
  SingInAction |
  SingOutAction;
