import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthDashboardComponent } from '@ddd-architecture/client/use-cases/auth/shared/ui';
import { FeatureLoginComponent } from '@ddd-architecture/client/use-cases/auth/shared/feature-login';
import { authLoginUseCaseProviders } from '../providers/auth-login-use-case.providers';

@Component({
  selector: 'ddd-architecture-auth-customer-use-case-login',
  standalone: true,
  imports: [CommonModule, AuthDashboardComponent, FeatureLoginComponent],
  templateUrl: './auth-customer-use-case-login.component.html',
  styleUrls: ['./auth-customer-use-case-login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: authLoginUseCaseProviders,
})
export class AuthCustomerUseCaseLoginComponent {}
