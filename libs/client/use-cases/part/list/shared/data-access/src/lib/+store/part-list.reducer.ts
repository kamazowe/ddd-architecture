import { Action, createReducer, on } from '@ngrx/store';
import { PartListActions } from './actions/part-list.actions';

export const partListFeatureKey = 'partList';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface PartListState {
  counter: number;
  loading: boolean;
}

export const initialState: PartListState = {
  counter: 0,
  loading: false,
};

export const reducer = createReducer(
  initialState,

  on(PartListActions.loadPartLists, (state) => ({
    ...state,
    loading: true,
  })),
  on(PartListActions.loadPartListsSuccess, (state, action) => ({
    ...state,
    loading: false,
    counter: state.counter + 1,
  })),
  on(PartListActions.loadPartListsFailure, (state, action) => ({
    ...state,
    loading: false,
  })),
  on(PartListActions.leavePartListsView, (state, action) => ({
    ...initialState,
  }))
);
