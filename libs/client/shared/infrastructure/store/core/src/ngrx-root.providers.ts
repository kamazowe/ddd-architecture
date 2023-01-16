import { EnvironmentProviders } from '@angular/core';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideRouterStore } from '@ngrx/router-store';

export const ngrxRootProviders: EnvironmentProviders[] = [
  provideStore(),
  provideEffects([]),
  provideStoreDevtools(),
  provideRouterStore(),
];
