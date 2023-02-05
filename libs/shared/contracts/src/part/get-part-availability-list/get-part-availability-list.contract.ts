import { EntityId } from '@ddd-architecture/shared/utils';

export const getPartAvailabilityListUrl = `part/availability-list`;

export type GetPartAvailabilityListResponsePayload =
  GetPartAvailabilityListItemResponsePayload[];
export type GetPartAvailabilityListRequestPayload =
  GetPartAvailabilityListItemRequestPayload[];

export interface GetPartAvailabilityListItemRequestPayload {
  partId: EntityId;
}

export interface GetPartAvailabilityListItemResponsePayload {
  partId: EntityId;
  quantity: number;
}
