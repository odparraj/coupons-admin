import { Action } from '@ngrx/store';

export enum RolesActionType {
  SYNC_ROLES = '[Roles] Roles Sync app',
}

export class SyncRolesAction implements Action {
  readonly type = RolesActionType.SYNC_ROLES;
  constructor(public payload: string[]) { }
}

export type RolesActions = SyncRolesAction;