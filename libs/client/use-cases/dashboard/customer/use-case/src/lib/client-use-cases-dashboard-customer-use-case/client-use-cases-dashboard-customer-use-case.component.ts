import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientUseCasesDashboardSharedFeatureComponent } from '@ddd-architecture/client/use-cases/dashboard/shared/feature';
import { dashboardUseCaseProviders } from '../providers/dashboard-use-case.providers';

@Component({
  selector: 'ddd-client-use-cases-dashboard-customer-use-case',
  standalone: true,
  imports: [CommonModule, ClientUseCasesDashboardSharedFeatureComponent],
  templateUrl: './client-use-cases-dashboard-customer-use-case.component.html',
  styleUrls: ['./client-use-cases-dashboard-customer-use-case.component.scss'],
  providers: dashboardUseCaseProviders,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientUseCasesDashboardCustomerUseCaseComponent {}
