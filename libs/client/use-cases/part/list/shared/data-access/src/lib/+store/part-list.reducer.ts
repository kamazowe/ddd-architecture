import { createReducer, on } from '@ngrx/store';
import {
  PartListActions,
  PartListPageActions,
} from './actions/part-list.actions';
import { GetPartListResponsePayload } from '@ddd-architecture/shared/contracts';
import {
  DefaultErrorType,
  errorResultState,
  initialResultState,
  loadedResultState,
  loadingResultState,
  ResultState,
} from '@ddd-architecture/client/shared/infrastructure/store/utils';

export const partListFeatureKey = 'partList';

export interface PartListState {
  partList: ResultState<GetPartListResponsePayload, DefaultErrorType>;
}

export const initialState: PartListState = {
  partList: initialResultState(),
};

export const reducer = createReducer(
  initialState,

  on(PartListPageActions.partListPageEnter, (state) => ({
    ...state,
    loading: true,
    partList: loadingResultState(state.partList),
  })),
  on(PartListActions.partListLoadedSuccess, (state, action) => ({
    ...state,
    partList: loadedResultState(action.payload),
  })),
  on(PartListActions.partListLoadedFailure, (state, action) => ({
    ...state,
    partList: errorResultState(state.partList, { error: true }),
  })),
  on(PartListPageActions.partListPageLeave, (state, action) => ({
    ...state,
    partList: { ...initialState.partList },
  }))
);
