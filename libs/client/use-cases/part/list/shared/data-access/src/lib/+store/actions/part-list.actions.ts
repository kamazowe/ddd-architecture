import { createAction, props } from '@ngrx/store';
import { GetPartListResponsePayload } from '@ddd-architecture/shared/contracts';
import { DefaultErrorType } from '@ddd-architecture/client/shared/infrastructure/store/utils';

const partListPageEnter = createAction('[Part List Page] page list page enter');
const partListPageLeave = createAction(
  '[Part List Page ] part list page leave'
);

const partListLoadedSuccess = createAction(
  '[Page List] Page List Loaded Success',
  props<{ payload: GetPartListResponsePayload }>()
);

const partListLoadedFailure = createAction(
  '[Page List] Page List Loaded Failure',
  props<{ error: DefaultErrorType }>()
);

export const PartListActions = {
  partListLoadedSuccess,
  partListLoadedFailure,
};

export const PartListPageActions = {
  partListPageEnter,
  partListPageLeave,
};
