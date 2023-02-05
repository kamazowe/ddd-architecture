import { Action, createReducer, on } from '@ngrx/store';
import * as AuthActions from './auth.actions';

export const authFeatureKey = 'auth';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface State {}

export const initialState: State = {};

export const reducer = createReducer(
  initialState,

  on(AuthActions.loginAuths, (state) => state),
  on(AuthActions.loginAuthsSuccess, (state, action) => state),
  on(AuthActions.loginAuthsFailure, (state, action) => state)
);
