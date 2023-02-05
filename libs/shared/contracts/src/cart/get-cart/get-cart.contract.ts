import { EntityId } from '@ddd-architecture/shared/utils';
import { Image } from '../../common/image.interface';
import { TranslatedCode } from '../../common/translated-code.type';

export const getCartUrl = `cart`;

// response payload
export interface GetCartResponsePayload {
  items: GetCartPartListItemResponsePayload[];
}

export interface GetCartPartListItemResponsePayload {
  id: EntityId;
  name: string;
  image: Image | null;
  price: {
    value: number;
    unit: string;
  } | null;
  available: {
    isInStock: boolean;
  } | null;
  sellable: boolean;
  properties: PartProperty[];
}

// TODO in the future, we want to make the label fields dependent on the language
interface PartProperty {
  name: TranslatedCode;
  value: TranslatedCode;
  unit: TranslatedCode | null;
}
