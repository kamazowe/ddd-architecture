import { createSelector } from '@ngxs/store';
import { FeatureToggleStateModel } from './feature-toggle-state.model';
import { FeatureToggleRepository } from './feature-toggle.repository';

export class FeatureToggleSelectors {
  static featureToggles() {
    return createSelector(
      [FeatureToggleSelectors.featureTogglesResultState()],
      (state: FeatureToggleStateModel['featureToggles']) => {
        return state.result;
      }
    );
  }

  static featureTogglesCallState() {
    return createSelector(
      [FeatureToggleSelectors.featureTogglesResultState()],
      (state: FeatureToggleStateModel['featureToggles']) => {
        return state.callState;
      }
    );
  }

  private static featureTogglesResultState() {
    return createSelector(
      [FeatureToggleRepository],
      (state: FeatureToggleStateModel) => {
        return state.featureToggles;
      }
    );
  }
}
