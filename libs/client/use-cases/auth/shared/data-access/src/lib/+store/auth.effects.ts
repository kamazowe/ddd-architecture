import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map } from 'rxjs/operators';
import { AuthActions, AuthLoginPageActions } from './auth.actions';
import { fetch } from '@nrwl/angular';
import { AuthDataService } from '../services/auth-data.service';

@Injectable()
export class AuthEffects {
  loginPage$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthLoginPageActions.login),
      fetch({
        run: ({ payload }) => {
          return this.service
            .login(payload)
            .pipe(map(() => AuthActions.loginSuccess()));
        },
        onError: (action, error: unknown) =>
          AuthActions.loginFailure({ payload: { error: true } }),
      })
    );
  });

  constructor(private actions$: Actions, private service: AuthDataService) {}
}
