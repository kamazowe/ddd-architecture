import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromPartList from './part-list.reducer';

export const selectPartListState =
  createFeatureSelector<fromPartList.PartListState>(
    fromPartList.partListFeatureKey
  );

const selectCounter = createSelector(
  selectPartListState,
  (state) => state.counter
);
const selectLoading = createSelector(
  selectPartListState,
  (state) => state.loading
);

export const PartListSelectors = {
  selectPartListState,
  selectCounter,
  selectLoading,
};
