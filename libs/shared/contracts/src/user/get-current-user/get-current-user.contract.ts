import { EntityId } from '@ddd-architecture/shared/utils';
import { Image } from '../../common/image.interface';

export const getCurrentUserUrl = `user/current-user`;

// response payload
export interface GetCurrentUserResponsePayload {
  id: EntityId;
  firstName: string;
  lastName: string;
  email: string;
  avatar: Image | null;
  permissions: Permissions;
  address: CurrentUserAddress | null;
}

export enum PermissionsAction {
  create = 'create',
  update = 'update',
  delete = 'delete',
  read = 'read',
}

export type PermissionAllowedActions = Record<PermissionsAction, boolean>;

export enum PermissionScope {
  parts = 'parts',
  machines = 'machines',
}

export type Permissions = Record<PermissionScope, PermissionAllowedActions>;

export interface CurrentUserAddress {
  street: string;
  zipCode: string;
  city: string;
}
