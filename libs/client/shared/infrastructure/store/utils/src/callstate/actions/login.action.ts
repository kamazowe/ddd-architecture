import { Action } from '@ngrx/store';
import { ActionErrorPayload, ActionPayload } from '../../action-payload.type';

export const LOAD_LOGIN_STATE = '[Login] Load State';
export const LOAD_LOGIN_STATE_FAIL = '[Login] Load State Fail';
export const LOAD_LOGIN_STATE_SUCCESS = '[Login] Load State Success';

export class LoadLoginState implements Action {
  readonly type = LOAD_LOGIN_STATE;
}

export class LoadLoginStateFail implements Action {
  readonly type = LOAD_LOGIN_STATE_FAIL;
  constructor(public payload: ActionErrorPayload<string>) {}
}

export class LoadLoginStateSuccess implements Action {
  readonly type = LOAD_LOGIN_STATE_SUCCESS;
  constructor(public payload: ActionPayload<string>) {}
}

export type LoginAction =
  | LoadLoginState
  | LoadLoginStateFail
  | LoadLoginStateSuccess;
