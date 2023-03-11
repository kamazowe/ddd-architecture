import { GetFeatureTogglesResponsePayload } from '@ddd-architecture/shared/contracts';
import {
  DefaultErrorType,
  initialResultState,
  ResultState,
} from '@ddd-architecture/client/shared/infrastructure/store/utils';

export interface FeatureToggleStateModel {
  featureToggles: ResultState<
    GetFeatureTogglesResponsePayload,
    DefaultErrorType
  >;
}

export const initialFeatureToggleStateModel: FeatureToggleStateModel = {
  featureToggles: initialResultState(),
};

export const featureToggleStateKey = 'FEATURE_TOGGLE';
