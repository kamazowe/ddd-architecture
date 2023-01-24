import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { DashboardComponent } from '@ddd-architecture/client/use-cases/dashboard/shared/ui';
import { RouterOutlet } from '@angular/router';
import { DashboardFeatureProvider } from '../providers/dashboard-feature.provider';

@Component({
  selector: 'ddd-client-use-cases-dashboard-shared-feature',
  standalone: true,
  imports: [AsyncPipe, RouterOutlet, DashboardComponent],
  templateUrl: './client-use-cases-dashboard-shared-feature.component.html',
  styleUrls: ['./client-use-cases-dashboard-shared-feature.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientUseCasesDashboardSharedFeatureComponent {
  dashboard$ = this.dashboardFeatureProvider.dashboard$;

  constructor(private dashboardFeatureProvider: DashboardFeatureProvider) {}
}
