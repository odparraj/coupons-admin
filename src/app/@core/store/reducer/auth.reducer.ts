import { IAuth } from '../../../models';
import { AuthActions, AuthActionType } from '../actions/auth.actions';
import { AppState } from './index';

export const initialState: IAuth = {
  isLogin: false,
  token: '',
};

export function AuthReducer(state = initialState, action: AuthActions): IAuth {
  switch (action.type) {
    case AuthActionType.SINGIN:
      return {
        ...state,
        ...action.payload,
      };

    case AuthActionType.SINGOUT:
      return {
        ...state,
        ...initialState,
      };

    default:
      return state;
  }
}

export interface AuthState extends AppState {
  'Auth': IAuth;
}
