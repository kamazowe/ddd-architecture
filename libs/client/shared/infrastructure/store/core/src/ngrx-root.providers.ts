import { EnvironmentProviders } from '@angular/core';
import { ActionReducerMap, provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import {
  provideRouterStore,
  routerReducer,
  RouterReducerState,
} from '@ngrx/router-store';
import { SerializedRouterStateSnapshot } from '@ngrx/router-store/src/serializers/full_serializer';

export interface RouterState {
  router: RouterReducerState<SerializedRouterStateSnapshot>;
}

export const reducers: ActionReducerMap<RouterState> = {
  router: routerReducer,
};

export const ngrxRootProviders: EnvironmentProviders[] = [
  provideStore(reducers),
  provideEffects([]),
  provideStoreDevtools(),
  provideRouterStore(),
];
