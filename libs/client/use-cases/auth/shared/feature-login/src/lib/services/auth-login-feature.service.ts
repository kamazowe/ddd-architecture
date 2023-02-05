import { Observable, of } from 'rxjs';
import {
  CallState,
  LoadingState,
} from '@ddd-architecture/client/shared/infrastructure/store/utils';
import { LoginRequestPayload } from '@ddd-architecture/shared/contracts';
import { AuthLoginFeatureProvider } from '../providers/auth-login-feature.provider';

// TODO impl
export class AuthLoginFeatureService implements AuthLoginFeatureProvider {
  loginCallState$: Observable<CallState> = of(LoadingState.INIT);

  login(payload: LoginRequestPayload): void {
    return undefined;
  }
}
