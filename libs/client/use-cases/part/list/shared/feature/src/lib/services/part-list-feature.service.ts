import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { PartListFeatureProvider } from '../providers/part-list-feature.provider';
import {
  PartListPageActions,
  PartListSelectors,
  PartListState,
} from '@ddd-architecture/client/use-cases/part/list/shared/data-access';
import { Store } from '@ngrx/store';
import { UiPartCard } from '@ddd-architecture/client/use-cases/part/list/shared/ui';
import { CallState } from '@ddd-architecture/client/shared/infrastructure/store/utils';
import { PartListViewQuery } from './part-list-view.query';

@Injectable()
export class PartListFeatureService implements PartListFeatureProvider {
  partCardList$: Observable<UiPartCard[] | null> =
    this.partListViewQuery.partCardList$;
  partCardListCallState$: Observable<CallState> = this.store.select(
    PartListSelectors.selectPartListCallState
  );

  constructor(
    private store: Store<PartListState>,
    private partListViewQuery: PartListViewQuery
  ) {}

  partListPageEnter(): void {
    this.store.dispatch(PartListPageActions.partListPageEnter());
  }

  partListPageleave(): void {
    this.store.dispatch(PartListPageActions.partListPageLeave());
  }
}
