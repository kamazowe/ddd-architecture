import { Observable, of } from 'rxjs';
import {
  CallState,
  LoadingState,
} from '@ddd-architecture/client/shared/infrastructure/store/utils';
import { RegisterRequestPayload } from '@ddd-architecture/shared/contracts';
import { AuthRegistrationFeatureProvider } from '../providers/auth-registration-feature.provider';

// TODO impl
export class AuthRegistrationFeatureService
  implements AuthRegistrationFeatureProvider
{
  registrationCallState$: Observable<CallState> = of(LoadingState.INIT);

  registration(payload: RegisterRequestPayload): void {
    return undefined;
  }
}
