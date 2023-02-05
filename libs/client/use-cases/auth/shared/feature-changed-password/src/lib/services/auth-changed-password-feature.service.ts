import { AuthChangedPasswordFeatureProvider } from '../providers/auth-changed-password-feature.provider';
import { Observable, of } from 'rxjs';
import {
  CallState,
  LoadingState,
} from '@ddd-architecture/client/shared/infrastructure/store/utils';
import { ChangedPasswordRequestPayload } from '@ddd-architecture/shared/contracts';

// TODO impl
export class AuthChangedPasswordFeatureService
  implements AuthChangedPasswordFeatureProvider
{
  changedPasswordCallState$: Observable<CallState> = of(LoadingState.INIT);

  changedPassword(payload: ChangedPasswordRequestPayload): void {
    return undefined;
  }
}
