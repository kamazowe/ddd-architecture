import { EntityId } from '@ddd-architecture/shared/utils';
import { Image } from '../../common/image.interface';
import { TranslatedCode } from '../../common/translated-code.type';

export const getPartListUrl = `part/list`;

export type GetPartListResponsePayload = GetPartListItemResponsePayload[];

export interface GetPartListItemResponsePayload {
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
export interface PartProperty {
  name: TranslatedCode;
  value: TranslatedCode;
  unit: TranslatedCode | null;
}
