import { createAction, props } from '@ngrx/store';

const loadPartLists = createAction('[PartList] Load PartLists');

const loadPartListsSuccess = createAction(
  '[PartList] Load PartLists Success',
  props<{ data: any }>()
);

const loadPartListsFailure = createAction(
  '[PartList] Load PartLists Failure',
  props<{ error: any }>()
);

const leavePartListsView = createAction('[PartList] leave PartLists View');

export const PartListActions = {
  loadPartLists,
  loadPartListsSuccess,
  loadPartListsFailure,
  leavePartListsView,
};
