import { NgxsDataRepository } from '@angular-ru/ngxs/repositories';
import { State, Store } from '@ngxs/store';
import {
  DataAction,
  Payload,
  StateRepository,
} from '@angular-ru/ngxs/decorators';
import {
  currentUserStateKey,
  CurrentUserStateModel,
  initialCurrentUserStateModel,
} from './current-user-state.model';
import { CurrentUserDataService } from './current-user.data-service';
import { Injectable } from '@angular/core';
import { first, Observable, switchMap, tap } from 'rxjs';
import {
  CallState,
  defaultErrorResultState,
  loadedResultState,
  loadingResultState,
} from '@ddd-architecture/client/shared/infrastructure/store/utils';
import { patch } from '@ngxs/store/operators';
import { CurrentUserSelectors } from './current-user.selectors';
import { catchErrorReturnNull } from '@ddd-architecture/shared/utils';

@Injectable()
@StateRepository()
@State<CurrentUserStateModel>({
  name: currentUserStateKey,
  defaults: initialCurrentUserStateModel,
})
export class CurrentUserRepository extends NgxsDataRepository<CurrentUserStateModel> {
  constructor(
    private dataService: CurrentUserDataService,
    private store: Store
  ) {
    super();
  }

  @DataAction({ cancelUncompleted: true })
  getCurrentUser(): Observable<CallState> {
    this.ctx.setState(
      patch({ details: loadingResultState(this.ctx.getState().details) })
    );
    return this.dataService.getCurrentUser().pipe(
      tap((response) => {
        this.ctx.setState(patch({ details: loadedResultState(response) }));
      }),
      catchErrorReturnNull(() => {
        this.ctx.setState(
          patch({
            details: defaultErrorResultState(this.ctx.getState().details),
          })
        );
      }),
      // todo refactoring
      switchMap(() =>
        this.store
          .select(CurrentUserSelectors.currentUserDetailsCallState())
          .pipe(first())
      )
    );
  }
}
