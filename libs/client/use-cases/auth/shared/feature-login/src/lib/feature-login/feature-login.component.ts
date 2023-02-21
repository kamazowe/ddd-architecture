/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthLoginFeatureProvider } from '../providers/auth-login-feature.provider';
import {
  LoginFormComponent,
  UiLoginFormValue,
} from '../../../../ui/src/lib/login-form/login-form.component';
import { Observable } from 'rxjs';
import { CallState } from '@ddd-architecture/client/shared/infrastructure/store/utils';

@Component({
  selector: 'ddd-architecture-feature-login',
  standalone: true,
  imports: [CommonModule, LoginFormComponent],
  templateUrl: './feature-login.component.html',
  styleUrls: ['./feature-login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureLoginComponent {
  loginCallState$: Observable<CallState> = this.featureProvider.loginCallState$;

  constructor(private featureProvider: AuthLoginFeatureProvider) {}

  onLogin(payload: UiLoginFormValue): void {
    this.featureProvider.login(payload);
  }
}
