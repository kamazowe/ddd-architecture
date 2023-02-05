import { Observable } from 'rxjs';
import { CallState } from '@ddd-architecture/client/shared/infrastructure/store/utils';
import { LoginRequestPayload } from '@ddd-architecture/shared/contracts';

export abstract class AuthLoginFeatureProvider {
  // TODO payload interface
  abstract login(payload: LoginRequestPayload): void;
  abstract loginCallState$: Observable<CallState>;
}
