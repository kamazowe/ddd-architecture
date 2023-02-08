import { createAction, props } from '@ngrx/store';
import { LoginRequestPayload } from '@ddd-architecture/shared/contracts';
import {
  ActionErrorPayload,
  ActionPayload,
  DefaultErrorType,
} from '@ddd-architecture/client/shared/infrastructure/store/utils';

const login = createAction(
  '[Login Page] Login',
  props<ActionPayload<LoginRequestPayload>>()
);

const loginSuccess = createAction('[Auth] Login Success');

const loginFailure = createAction(
  '[Auth] Login Failure',
  props<ActionErrorPayload<DefaultErrorType>>()
);

export const AuthActions = {
  loginSuccess,
  loginFailure,
};

export const AuthLoginPageActions = {
  login,
};

export const AuthRegistrationPageActions = {};

export const AuthForgotPasswordPageActions = {};

export const AuthChangedPasswordPageActions = {};
