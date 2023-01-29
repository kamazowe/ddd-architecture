import { RouteProviders } from '@ddd-architecture/client/shared/infrastructure/utils';
import { BreakpointsObserverProvider } from '@ddd-architecture/client/shared/infrastructure/breakpoints';
import { storeNotificationProviders } from '@ddd-architecture/client/shared/infrastructure/notification/data-access';
import { importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TuiAlertModule, TuiRootModule } from '@taiga-ui/core';
import { provideRouter } from '@angular/router';
import { shellRoutes } from '../shell.routes';
import { ngrxRootProviders } from '@ddd-architecture/client/shared/infrastructure/store/core';
import { svgProviders } from '@ddd-architecture/client/shared/infrastructure/taiga/feature';
import { HttpClientModule } from '@angular/common/http';

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
  ...svgProviders,
  ...BreakpointsObserverProvider,
  ...storeNotificationProviders,
];
