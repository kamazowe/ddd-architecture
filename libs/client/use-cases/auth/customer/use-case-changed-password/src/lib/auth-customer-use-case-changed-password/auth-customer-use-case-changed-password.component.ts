import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthDashboardComponent } from '@ddd-architecture/client/use-cases/auth/shared/ui';
import { FeatureChangedPasswordComponent } from '@ddd-architecture/client/use-cases/auth/shared/feature-changed-password';
import { authChangedPasswordUseCaseProviders } from '../providers/auth-changed-password-use-case.providers';

@Component({
  selector: 'ddd-architecture-auth-customer-use-case-changed-password',
  standalone: true,
  imports: [
    CommonModule,
    AuthDashboardComponent,
    FeatureChangedPasswordComponent,
  ],
  templateUrl: './auth-customer-use-case-changed-password.component.html',
  styleUrls: ['./auth-customer-use-case-changed-password.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: authChangedPasswordUseCaseProviders,
})
export class AuthCustomerUseCaseChangedPasswordComponent {}
