import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthForgotPasswordFeatureProvider } from '../providers/auth-forgot-password-feature.provider';
import { ForgotPasswordRequestPayload } from '@ddd-architecture/shared/contracts';
import { ForgotPasswordFormComponent } from '@ddd-architecture/client/use-cases/auth/shared/ui';

@Component({
  selector: 'ddd-architecture-feature-forgot-password',
  standalone: true,
  imports: [CommonModule, ForgotPasswordFormComponent],
  templateUrl: './feature-forgot-password.component.html',
  styleUrls: ['./feature-forgot-password.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureForgotPasswordComponent {
  changedPasswordCallState$ = this.featureProvider.forgotPasswordCallState$;

  constructor(private featureProvider: AuthForgotPasswordFeatureProvider) {}

  // TODO payload interface
  onChangedPassword(payload: ForgotPasswordRequestPayload): void {
    this.featureProvider.forgotPassword(payload);
  }
}
