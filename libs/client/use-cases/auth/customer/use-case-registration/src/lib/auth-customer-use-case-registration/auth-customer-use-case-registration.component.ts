import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthDashboardComponent } from '@ddd-architecture/client/use-cases/auth/shared/ui';
import { FeatureRegistrationComponent } from '@ddd-architecture/client/use-cases/auth/shared/feature-registration';
import { authRegistrationUseCaseProviders } from '../providers/auth-registration-use-case.providers';

@Component({
  selector: 'ddd-architecture-auth-customer-use-case-registration',
  standalone: true,
  imports: [CommonModule, AuthDashboardComponent, FeatureRegistrationComponent],
  templateUrl: './auth-customer-use-case-registration.component.html',
  styleUrls: ['./auth-customer-use-case-registration.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: authRegistrationUseCaseProviders,
})
export class AuthCustomerUseCaseRegistrationComponent {}
