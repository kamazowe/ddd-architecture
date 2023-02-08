import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, tap } from 'rxjs/operators';
import { AuthActions } from './auth.actions';
import { fetch } from '@nrwl/angular';
import { AuthDataService } from '../services/auth-data.service';
import { AuthTokenService } from '@ddd-architecture/client/shared/infrastructure/auth-token';
import { NotificationActions } from '@ddd-architecture/client/shared/infrastructure/notification/data-access';
import {
  AuthDashboardPageActions,
  AuthLoginPageActions,
} from './auth.public-actions';
import { EntryPointsNavigatorService } from '@ddd-architecture/client/shared/infrastructure/router';

@Injectable()
export class AuthEffects {
  loginPage$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthLoginPageActions.login),
      fetch({
        run: ({ payload }) => {
          return this.authDataService
            .login(payload)
            .pipe(map((payload) => AuthActions.loginSuccess({ payload })));
        },
        onError: (action, error: unknown) =>
          AuthActions.loginFailure({ payload: { error: true } }),
      })
    );
  });

  loginSuccess$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(AuthActions.loginSuccess),
        tap(({ payload }) => {
          this.authTokenService.login(payload.token);
        })
      );
    },
    { dispatch: false }
  );

  loginFail$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActions.loginFailure),
      map(() =>
        NotificationActions.showFailureNotification({
          payload: { title: null, description: 'something was wrong' },
        })
      )
    );
  });

  logout$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(AuthDashboardPageActions.logout),
        tap(() => {
          this.authTokenService.logout();
          this.entryPointsNavigatorService.goToLoginPage();
        })
      );
    },
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private authDataService: AuthDataService,
    private entryPointsNavigatorService: EntryPointsNavigatorService,
    private authTokenService: AuthTokenService
  ) {}
}
