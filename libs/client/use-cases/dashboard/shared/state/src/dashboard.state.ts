import { Action, State, Store } from '@ngxs/store';
import {
  dashboardStateKey,
  DashboardStateModel,
  initialDashboardStateModel,
} from './dashboard-state.model';
import { Injectable } from '@angular/core';
import { DashboardActions } from './dashboard.actions';
import { CurrentUserRepository } from '@ddd-architecture/client/use-cases/current-user/shared/repository';
import { FeatureToggleRepository } from '@ddd-architecture/client/shared/infrastructure/feature-toggle/repository';
import { NgxsDataRepository } from '@angular-ru/ngxs/repositories';
import { StateRepository } from '@angular-ru/ngxs/decorators';

@Injectable()
@StateRepository()
@State<DashboardStateModel>({
  name: dashboardStateKey,
  defaults: initialDashboardStateModel,
})
export class DashboardState extends NgxsDataRepository<DashboardStateModel> {
  constructor(
    private store: Store,
    private currentUserRepository: CurrentUserRepository,
    private featureToggleRepository: FeatureToggleRepository
  ) {
    super();
  }

  @Action(DashboardActions.PageOpened)
  pageOpened(): void {
    this.currentUserRepository.getCurrentUser();
    this.featureToggleRepository.getFeatureToggles();
  }

  @Action(DashboardActions.PageClosed)
  pageClosed(): void {
    this.reset();
    this.currentUserRepository.reset();
    this.featureToggleRepository.reset();
  }
}
