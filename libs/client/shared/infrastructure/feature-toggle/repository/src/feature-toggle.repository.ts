import { NgxsDataRepository } from '@angular-ru/ngxs/repositories';
import { State, Store } from '@ngxs/store';
import { DataAction, StateRepository } from '@angular-ru/ngxs/decorators';
import {
  featureToggleStateKey,
  FeatureToggleStateModel,
  initialFeatureToggleStateModel,
} from './feature-toggle-state.model';
import { FeatureToggleDataService } from './feature-toggle.data-service';
import { Injectable } from '@angular/core';
import { first, Observable, switchMap, tap } from 'rxjs';
import {
  CallState,
  defaultErrorResultState,
  loadedResultState,
  loadingResultState,
} from '@ddd-architecture/client/shared/infrastructure/store/utils';
import { patch } from '@ngxs/store/operators';
import { FeatureToggleSelectors } from './feature-toggle.selectors';
import { catchErrorReturnNull } from '@ddd-architecture/shared/utils';

@Injectable()
@StateRepository()
@State<FeatureToggleStateModel>({
  name: featureToggleStateKey,
  defaults: initialFeatureToggleStateModel,
})
export class FeatureToggleRepository extends NgxsDataRepository<FeatureToggleStateModel> {
  constructor(
    private dataService: FeatureToggleDataService,
    private store: Store
  ) {
    super();
  }

  @DataAction({ cancelUncompleted: true })
  getFeatureToggles(): Observable<CallState> {
    this.ctx.setState(
      patch({
        featureToggles: loadingResultState(this.ctx.getState().featureToggles),
      })
    );
    return this.dataService.getFeatureToggles().pipe(
      tap((response) => {
        this.ctx.setState(
          patch({ featureToggles: loadedResultState(response) })
        );
      }),
      catchErrorReturnNull(() => {
        this.ctx.setState(
          patch({
            featureToggles: defaultErrorResultState(
              this.ctx.getState().featureToggles
            ),
          })
        );
      }),
      // todo refactoring
      switchMap(() =>
        this.store
          .select(FeatureToggleSelectors.featureTogglesCallState())
          .pipe(first())
      )
    );
  }
}
