import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FooterComponent,
  HeaderComponent,
  NavbarComponent,
} from '@ddd-architecture/client/use-cases/dashboard/shared/ui';

@Component({
  selector: 'ddd-client-use-cases-dashboard-shared-feature',
  standalone: true,
  imports: [CommonModule, NavbarComponent, FooterComponent, HeaderComponent],
  templateUrl: './client-use-cases-dashboard-shared-feature.component.html',
  styleUrls: ['./client-use-cases-dashboard-shared-feature.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientUseCasesDashboardSharedFeatureComponent {}
