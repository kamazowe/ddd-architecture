import {
  GetCurrentUserResponsePayload,
  GetPartListResponsePayload,
} from '@ddd-architecture/shared/contracts';
import {
  DefaultErrorType,
  initialResultState,
  ResultState,
} from '@ddd-architecture/client/shared/infrastructure/store/utils';

export interface CurrentUserStateModel {
  details: ResultState<GetCurrentUserResponsePayload, DefaultErrorType>;
}

export const initialCurrentUserStateModel: CurrentUserStateModel = {
  details: initialResultState(),
};

export const currentUserStateKey = 'CURRENT_USER';
