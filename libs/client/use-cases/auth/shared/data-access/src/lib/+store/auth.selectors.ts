import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromAuth from './auth.reducer';

export const selectAuthState = createFeatureSelector<fromAuth.AuthState>(
  fromAuth.authFeatureKey
);

const selectLoginCallState = createSelector(
  selectAuthState,
  (state) => state.loginCallState
);

export const AuthSelectors = {
  selectLoginCallState,
};
