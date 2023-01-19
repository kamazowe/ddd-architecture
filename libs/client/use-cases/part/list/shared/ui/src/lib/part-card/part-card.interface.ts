import {
  LabeledValue,
  UiImage,
} from '@ddd-architecture/client/shared/infrastructure/utils';
import { EntityId } from '@ddd-architecture/shared/utils';

export interface UiPartCardProperty {
  label: string;
  value: string;
  unit: string | null;
}

export interface UiPartCard {
  id: EntityId;
  name: string;
  image: UiImage | null;
  price: {
    value: number;
    unit: string;
  } | null;
  available: {
    isInStock: boolean;
  } | null;
  menu: {
    displayed: boolean;
    options: LabeledValue<string>[];
  };
  sellable: {
    defaultQuantity: number;
    enabled: boolean;
    displayed: boolean;
  };
  properties: UiPartCardProperty[];
}
