import { createAction, props } from '@ngrx/store';
import { LoginResponsePayload } from '@ddd-architecture/shared/contracts';
import {
  ActionErrorPayload,
  ActionPayload,
  DefaultErrorType,
} from '@ddd-architecture/client/shared/infrastructure/store/utils';

const loginSuccess = createAction(
  '[Auth] Login Success',
  props<ActionPayload<LoginResponsePayload>>()
);

const loginFailure = createAction(
  '[Auth] Login Failure',
  props<ActionErrorPayload<DefaultErrorType>>()
);

export const AuthActions = {
  loginSuccess,
  loginFailure,
};
