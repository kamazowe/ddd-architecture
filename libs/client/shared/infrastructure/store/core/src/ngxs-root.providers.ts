import { EnvironmentProviders, importProvidersFrom } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { NgxsDataPluginModule } from '@angular-ru/ngxs';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';

export const ngxsRootProviders: EnvironmentProviders[] = [
  importProvidersFrom(NgxsModule.forRoot([])),
  importProvidersFrom(NgxsLoggerPluginModule.forRoot()),
  importProvidersFrom(NgxsReduxDevtoolsPluginModule.forRoot()),
  importProvidersFrom(NgxsDataPluginModule.forRoot()),
];
