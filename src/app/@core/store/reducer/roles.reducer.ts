import { AppState } from './index';
import { RolesActions, RolesActionType } from '../actions/roles.actions';

export const initialState: string[] = ['guest'];

export function RolesReducer(state = initialState, action: RolesActions): string[] {
  switch (action.type) {
    case RolesActionType.SYNC_ROLES:
      return action.payload;

    default:
      return state;
  }
}

export interface RolesState extends AppState {
  'Roles': string[];
}