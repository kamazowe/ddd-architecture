import { EntityId } from '@ddd-architecture/shared/utils';
import { Image } from '../../common/image.interface';

export const getCurrentUserUrl = `users/current-user`;

// response payload
export interface GetCurrentUserResponsePayload {
  id: EntityId;
  name: string;
  avatar: Image | null;
  permissions: Permissions;
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
