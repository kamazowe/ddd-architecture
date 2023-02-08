import { Observable } from 'rxjs';
import { CallState } from '@ddd-architecture/client/shared/infrastructure/store/utils';
import { UiLoginFormValue } from '@ddd-architecture/client/use-cases/auth/shared/ui';

export abstract class AuthLoginFeatureProvider {
  // TODO payload interface
  abstract login(payload: UiLoginFormValue): void;

  abstract loginCallState$: Observable<CallState>;
}
