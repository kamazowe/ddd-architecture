import { EntityId } from '@ddd-architecture/shared/utils';

export const addItemListToCartUrl = `cart/add-item-list`;

// request payload
export type AddItemListToCartRequestPayload =
  AddItemListItemToCartRequestPayload[];

export interface AddItemListItemToCartRequestPayload {
  partId: EntityId;
  quantity: number;
}
