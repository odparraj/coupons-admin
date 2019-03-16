import {
  ActionReducerMap,
  MetaReducer,
  ActionReducer,
  Action,
} from '@ngrx/store';

import * as fromAuth from './auth.reducer';

import { AuthActionType } from '../actions/auth.actions';
import { IAuth } from '../../../models/auth.model';

export interface AppState {
  auth: IAuth;
}

export const Appreducers: ActionReducerMap<AppState> = {
  auth: fromAuth.AuthReducer,
};

export function clearState(reducer: ActionReducer<AppState>): ActionReducer<AppState> {
  return function (state: AppState, action: Action): AppState {
    if (action.type === AuthActionType.SINGOUT) {
      state = undefined;
    }
    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<AppState>[] = [clearState];
