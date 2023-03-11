import { RouteProviders } from '@ddd-architecture/client/shared/infrastructure/utils';
import { BreakpointsObserverProvider } from '@ddd-architecture/client/shared/infrastructure/breakpoints';
import { storeNotificationProviders } from '@ddd-architecture/client/shared/infrastructure/notification/data-access';
import { importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TuiAlertModule, TuiRootModule } from '@taiga-ui/core';
import { provideRouter } from '@angular/router';
import { shellRoutes } from '../shell.routes';
import {
  ngrxRootProviders,
  ngxsRootProviders,
} from '@ddd-architecture/client/shared/infrastructure/store/core';
import { svgProviders } from '@ddd-architecture/client/shared/infrastructure/taiga/feature';
import { HttpClientModule } from '@angular/common/http';
import { storageProviders } from '@ddd-architecture/client/shared/infrastructure/storage';
import { authTokenProviders } from '@ddd-architecture/client/shared/infrastructure/auth-token';
import { routerRouteProviders } from '@ddd-architecture/client/shared/infrastructure/router';
import { repositoryProviders } from './repository.providers';

export const rootProviders: RouteProviders = [
  importProvidersFrom([
    BrowserModule,
    BrowserAnimationsModule,
    TuiRootModule,
    TuiAlertModule,
    HttpClientModule,
  ]),
  provideRouter(shellRoutes),
  ...ngrxRootProviders,
  ...ngxsRootProviders,
  ...svgProviders,
  ...BreakpointsObserverProvider,
  ...storeNotificationProviders,
  ...storageProviders,
  ...authTokenProviders,
  ...routerRouteProviders,
  ...repositoryProviders,
];
