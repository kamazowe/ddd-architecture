import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRequestPayload } from '@ddd-architecture/shared/contracts';
import { AuthLoginFeatureProvider } from '../providers/auth-login-feature.provider';
import { LoginFormComponent } from '@ddd-architecture/client/use-cases/auth/shared/ui';

@Component({
  selector: 'ddd-architecture-feature-login',
  standalone: true,
  imports: [CommonModule, LoginFormComponent],
  templateUrl: './feature-login.component.html',
  styleUrls: ['./feature-login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureLoginComponent {
  loginCallState$ = this.featureProvider.loginCallState$;

  constructor(private featureProvider: AuthLoginFeatureProvider) {}

  // TODO payload interface
  onLogin(payload: LoginRequestPayload): void {
    this.featureProvider.login(payload);
  }
}
