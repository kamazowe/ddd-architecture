import { Observable } from 'rxjs';
import {
  GetCurrentUserResponsePayload,
  PermissionAllowedActions,
  Permissions,
  PermissionScope,
} from '@ddd-architecture/shared/contracts';

export abstract class CurrentUserDetailsApiProvider {
  abstract isLoggedIn$: Observable<boolean>;

  abstract permissions$: Observable<Permissions>;
  abstract currentUser$: Observable<GetCurrentUserResponsePayload>;

  abstract permissionsForScope$: (
    scope: PermissionScope
  ) => Observable<PermissionAllowedActions>;
}
