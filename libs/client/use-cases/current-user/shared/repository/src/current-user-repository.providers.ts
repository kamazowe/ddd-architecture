import { EnvironmentProviders, importProvidersFrom } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { CurrentUserRepository } from './current-user.repository';

export const currentUserRepositoryProviders: EnvironmentProviders[] = [
  importProvidersFrom(NgxsModule.forFeature([CurrentUserRepository])),
];
