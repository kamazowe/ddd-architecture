import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, concatMap, map } from 'rxjs/operators';
import { of } from 'rxjs';
import { PartListActions } from './actions/part-list.actions';
import { PartListDataService } from '../services/part-list-data.service';

@Injectable()
export class PartListEffects {
  loadPartLists$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(PartListActions.loadPartLists),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        this.service.loadPartList().pipe(
          map((data) => PartListActions.loadPartListsSuccess({ data })),
          catchError((error) =>
            of(PartListActions.loadPartListsFailure({ error }))
          )
        )
      )
    );
  });

  constructor(
    private actions$: Actions,
    private service: PartListDataService
  ) {}
}
