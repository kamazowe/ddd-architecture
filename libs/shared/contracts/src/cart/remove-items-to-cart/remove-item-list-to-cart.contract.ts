import { EntityId } from '@ddd-architecture/shared/utils';

export const removeItemListToCartUrl = `cart/remove-item-list`;

// request payload
export type RemoveItemListToCartRequestPayload = EntityId[];
