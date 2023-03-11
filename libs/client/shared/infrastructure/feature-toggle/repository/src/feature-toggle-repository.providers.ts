import { EnvironmentProviders, importProvidersFrom } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { FeatureToggleRepository } from './feature-toggle.repository';

export const featureToggleRepositoryProviders: EnvironmentProviders[] = [
  importProvidersFrom(NgxsModule.forFeature([FeatureToggleRepository])),
];
