import { Observable } from 'rxjs';
import { CallState } from '@ddd-architecture/client/shared/infrastructure/store/utils';
import { ForgotPasswordRequestPayload } from '@ddd-architecture/shared/contracts';

export abstract class AuthForgotPasswordFeatureProvider {
  // TODO payload interface
  abstract forgotPassword(payload: ForgotPasswordRequestPayload): void;
  abstract forgotPasswordCallState$: Observable<CallState>;
}
