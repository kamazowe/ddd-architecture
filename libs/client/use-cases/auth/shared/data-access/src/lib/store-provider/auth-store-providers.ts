import { provideState } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { RouteProviders } from '@ddd-architecture/client/shared/infrastructure/utils';
import { authFeatureKey, reducer } from '../+store/auth.reducer';
import { AuthEffects } from '../+store/auth.effects';
import { EntryPointsNavigatorService } from '@ddd-architecture/client/shared/infrastructure/router';

export const authStoreProviders: RouteProviders = [
  provideState(authFeatureKey, reducer),
  provideEffects(AuthEffects),
  EntryPointsNavigatorService,
];
