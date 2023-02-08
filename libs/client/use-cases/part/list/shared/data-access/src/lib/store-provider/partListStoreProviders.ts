import { provideState } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { PartListEffects } from '../+store/part-list.effects';
import { partListFeatureKey, reducer } from '../+store/part-list.reducer';
import { RouteProviders } from '@ddd-architecture/client/shared/infrastructure/utils';

export const partListStoreProviders: RouteProviders = [
  provideState(partListFeatureKey, reducer),
  provideEffects(PartListEffects),
];
