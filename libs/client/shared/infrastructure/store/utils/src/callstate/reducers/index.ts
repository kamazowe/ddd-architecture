import { createFeatureSelector, createSelector } from '@ngrx/store';
import { LoginState } from './login.reducer';
import * as fromLogin from './login.reducer';

export const getLoginValues = createFeatureSelector<LoginState>('data');

export const getLoginStateEmailValue = createSelector(
  getLoginValues,
  (state: LoginState) => state.data?.email
);

export const getAllLoginValues = createSelector(
  getLoginValues,
  fromLogin.getLoginData
);
export const getLoginLoaded = createSelector(
  getLoginValues,
  fromLogin.getLoginLoaded
);
export const getLoginLoading = createSelector(
  getLoginValues,
  fromLogin.getLoginLoading
);
