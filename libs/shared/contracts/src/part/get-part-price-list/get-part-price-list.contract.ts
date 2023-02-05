import { EntityId } from '@ddd-architecture/shared/utils';
import { TranslatedCode } from '../../common/translated-code.type';

export const getPartPriceListUrl = `part/price-list`;

export type GetPartPriceListResponsePayload =
  GetPartPriceListItemResponsePayload[];
export type GetPartPriceListRequestPayload =
  GetPartPriceListItemRequestPayload[];

export interface GetPartPriceListItemRequestPayload {
  partId: EntityId;
}

export interface GetPartPriceListItemResponsePayload {
  partId: EntityId;
  price: Price;
}

export interface Price {
  pricePerUnit: number;
  unit: TranslatedCode;
  total: number;
  quantity: number;
}
