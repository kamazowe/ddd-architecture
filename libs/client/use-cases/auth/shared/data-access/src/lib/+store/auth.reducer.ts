import { createReducer, on } from '@ngrx/store';
import { AuthActions } from './auth.actions';
import {
  CallState,
  LoadingState,
} from '@ddd-architecture/client/shared/infrastructure/store/utils';
import { AuthLoginPageActions } from './auth.public-actions';

export const authFeatureKey = 'auth';

export interface AuthState {
  loginCallState: CallState;
}

export const initialState: AuthState = {
  loginCallState: LoadingState.INIT,
};

export const reducer = createReducer(
  initialState,
  on(AuthLoginPageActions.login, (state) => ({
    ...state,
    loginCallState: LoadingState.LOADING,
  })),
  on(AuthActions.loginFailure, (state, action) => ({
    ...state,
    loginCallState: action.payload,
  })),
  on(AuthActions.loginSuccess, (state, action) => ({
    ...state,
    loginCallState: LoadingState.LOADED,
  }))
);
