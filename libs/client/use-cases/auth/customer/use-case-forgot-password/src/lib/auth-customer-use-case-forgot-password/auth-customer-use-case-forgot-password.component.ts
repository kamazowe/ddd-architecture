import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthDashboardComponent } from '@ddd-architecture/client/use-cases/auth/shared/ui';
import { FeatureForgotPasswordComponent } from '@ddd-architecture/client/use-cases/auth/shared/feature-forgot-password';
import { authForgotPasswordUseCaseProviders } from '../providers/auth-forgot-password-use-case.providers';

@Component({
  selector: 'ddd-architecture-auth-customer-use-case-forgot-password',
  standalone: true,
  imports: [
    CommonModule,
    AuthDashboardComponent,
    FeatureForgotPasswordComponent,
  ],
  templateUrl: './auth-customer-use-case-forgot-password.component.html',
  styleUrls: ['./auth-customer-use-case-forgot-password.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: authForgotPasswordUseCaseProviders,
})
export class AuthCustomerUseCaseForgotPasswordComponent {}
