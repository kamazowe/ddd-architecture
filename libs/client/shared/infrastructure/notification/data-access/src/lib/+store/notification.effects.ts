import { Inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { concatMap, mergeMap, tap } from 'rxjs/operators';
import * as NotificationActions from './notification.actions';
import { TuiAlertService, TuiNotification } from '@taiga-ui/core';

@Injectable()
export class NotificationEffects {
  showSuccessNotifications$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(NotificationActions.showSuccessNotification),
        mergeMap(({ payload }) =>
          this.alertService.open(payload.description, {
            label: payload.title,
            status: TuiNotification.Success,
          })
        )
      );
    },
    { dispatch: false }
  );

  showFailureNotifications$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(NotificationActions.showFailureNotification),
        mergeMap(({ payload }) =>
          this.alertService.open(payload.description, {
            label: payload.title,
            status: TuiNotification.Error,
          })
        )
      );
    },
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    @Inject(TuiAlertService) private alertService: TuiAlertService
  ) {}
}
