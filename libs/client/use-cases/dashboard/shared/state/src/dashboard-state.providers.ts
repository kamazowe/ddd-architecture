import { EnvironmentProviders, importProvidersFrom } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { DashboardState } from './dashboard.state';

export const dashboardStateProviders: EnvironmentProviders[] = [
  importProvidersFrom(NgxsModule.forFeature([DashboardState])),
];
