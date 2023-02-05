import { createAction, props } from '@ngrx/store';

export const loginAuths = createAction('[Auth] Login Auths');

export const loginAuthsSuccess = createAction(
  '[Auth] Login Auths Success',
  props<{ data: any }>()
);

export const loginAuthsFailure = createAction(
  '[Auth] Login Auths Failure',
  props<{ error: any }>()
);
