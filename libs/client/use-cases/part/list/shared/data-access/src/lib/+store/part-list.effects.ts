import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map } from 'rxjs/operators';
import {
  PartListActions,
  PartListPageActions,
} from './actions/part-list.actions';
import { PartListDataService } from '../services/part-list-data.service';
import { NotificationActions } from '@ddd-architecture/client/shared/infrastructure/notification/data-access';
import { fetch } from '@nrwl/angular';

@Injectable()
export class PartListEffects {
  loadPartLists$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(PartListPageActions.partListPageEnter),
      fetch({
        run: () => {
          return this.service
            .loadPartList()
            .pipe(
              map((payload) =>
                PartListActions.partListLoadedSuccess({ payload })
              )
            );
        },
        onError: (action: unknown, error: unknown) => {
          return PartListActions.partListLoadedFailure({
            payload: { error: true },
          });
        },
      })
    );
  });

  partListLoadedSuccess$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(PartListActions.partListLoadedSuccess),
      map(() =>
        NotificationActions.showSuccessNotification({
          payload: { title: null, description: 'loaded parts' },
        })
      )
    );
  });

  loadPartListsFailure$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(PartListActions.partListLoadedFailure),
      map(() =>
        NotificationActions.showFailureNotification({
          payload: { title: null, description: 'something was wrong' },
        })
      )
    );
  });

  constructor(
    private actions$: Actions,
    private service: PartListDataService
  ) {}
}
