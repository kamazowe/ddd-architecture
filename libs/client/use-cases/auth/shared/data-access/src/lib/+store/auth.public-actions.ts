import { createAction, props } from '@ngrx/store';
import { LoginRequestPayload } from '@ddd-architecture/shared/contracts';
import { ActionPayload } from '@ddd-architecture/client/shared/infrastructure/store/utils';

const login = createAction(
  '[Login Page] Login',
  props<ActionPayload<LoginRequestPayload>>()
);

const logout = createAction('[Dashboard Page] Logout');

export const AuthLoginPageActions = {
  login,
};

export const AuthDashboardPageActions = {
  logout,
};

export const AuthRegistrationPageActions = {};

export const AuthForgotPasswordPageActions = {};

export const AuthChangedPasswordPageActions = {};
