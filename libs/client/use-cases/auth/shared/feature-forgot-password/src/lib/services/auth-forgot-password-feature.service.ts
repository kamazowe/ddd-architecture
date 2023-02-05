import { AuthForgotPasswordFeatureProvider } from '../providers/auth-forgot-password-feature.provider';
import { Observable, of } from 'rxjs';
import {
  CallState,
  LoadingState,
} from '@ddd-architecture/client/shared/infrastructure/store/utils';
import { ForgotPasswordRequestPayload } from '@ddd-architecture/shared/contracts';

// TODO impl
export class AuthForgotPasswordFeatureService
  implements AuthForgotPasswordFeatureProvider
{
  forgotPasswordCallState$: Observable<CallState> = of(LoadingState.INIT);

  forgotPassword(payload: ForgotPasswordRequestPayload): void {
    return undefined;
  }
}
