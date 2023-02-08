import { createAction, props } from '@ngrx/store';
import { GetPartListResponsePayload } from '@ddd-architecture/shared/contracts';
import {
  ActionErrorPayload,
  ActionPayload,
  DefaultErrorType,
} from '@ddd-architecture/client/shared/infrastructure/store/utils';

const partListPageEnter = createAction('[Part List Page] page list page enter');
const partListPageLeave = createAction(
  '[Part List Page ] part list page leave'
);

export const partListLoadedSuccess = createAction(
  '[Page List] Page List Loaded Success',
  props<ActionPayload<GetPartListResponsePayload>>()
);

const partListLoadedFailure = createAction(
  '[Page List] Page List Loaded Failure',
  props<ActionErrorPayload<DefaultErrorType>>()
);

export const PartListActions = {
  partListLoadedSuccess,
  partListLoadedFailure,
};

export const PartListPageActions = {
  partListPageEnter,
  partListPageLeave,
};
