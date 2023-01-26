import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromPartList from './part-list.reducer';

export const selectPartListState =
  createFeatureSelector<fromPartList.PartListState>(
    fromPartList.partListFeatureKey
  );

const selectPartListResultState = createSelector(
  selectPartListState,
  (state) => state.partList
);

const selectPartListCallState = createSelector(
  selectPartListResultState,
  (state) => state.callState
);

const selectPartList = createSelector(
  selectPartListResultState,
  (state) => state.result
);

export const PartListSelectors = {
  selectPartListCallState,
  selectPartList,
};
