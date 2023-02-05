import { Observable } from 'rxjs';
import { CallState } from '@ddd-architecture/client/shared/infrastructure/store/utils';
import { ChangedPasswordRequestPayload } from '@ddd-architecture/shared/contracts';

export abstract class AuthChangedPasswordFeatureProvider {
  // TODO payload interface
  abstract changedPassword(payload: ChangedPasswordRequestPayload): void;

  abstract changedPasswordCallState$: Observable<CallState>;
}
