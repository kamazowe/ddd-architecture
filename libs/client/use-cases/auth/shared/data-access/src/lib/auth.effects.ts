import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';
import * as AuthActions from './auth.actions';

@Injectable()
export class AuthEffects {
  loginAuths$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActions.loginAuths),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        EMPTY.pipe(
          map((data) => AuthActions.loginAuthsSuccess({ data })),
          catchError((error) => of(AuthActions.loginAuthsFailure({ error })))
        )
      )
    );
  });

  constructor(private actions$: Actions) {}
}
