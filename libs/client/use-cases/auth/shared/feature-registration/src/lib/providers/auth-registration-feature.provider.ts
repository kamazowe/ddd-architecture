import { Observable } from 'rxjs';
import { CallState } from '@ddd-architecture/client/shared/infrastructure/store/utils';
import { RegisterRequestPayload } from '@ddd-architecture/shared/contracts';

export abstract class AuthRegistrationFeatureProvider {
  abstract registration(payload: RegisterRequestPayload): void;
  abstract registrationCallState$: Observable<CallState>;
}
