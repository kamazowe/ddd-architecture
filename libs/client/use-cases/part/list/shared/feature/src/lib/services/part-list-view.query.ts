import { combineLatest, map, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import {
  GetPartListResponsePayload,
  PartProperty,
} from '@ddd-architecture/shared/contracts';
import {
  UiPartCard,
  UiPartCardProperty,
} from '@ddd-architecture/client/use-cases/part/list/shared/ui';
import {
  PartListSelectors,
  PartListState,
} from '@ddd-architecture/client/use-cases/part/list/shared/data-access';
import { Store } from '@ngrx/store';
import { isDefined } from '@ddd-architecture/shared/utils';

@Injectable()
export class PartListViewQuery {
  partCardList$: Observable<UiPartCard[] | null> = this.getEmitters().pipe(
    map(([partList]) => this.mapToViewResult(partList))
  );

  constructor(private store: Store<PartListState>) {}

  private getEmitters(): Observable<[GetPartListResponsePayload | null]> {
    return combineLatest([this.store.select(PartListSelectors.selectPartList)]);
  }

  private mapToViewResult(
    partList: GetPartListResponsePayload | null
  ): UiPartCard[] | null {
    return !isDefined(partList)
      ? null
      : partList.map((partListItem) => ({
          id: partListItem.id,
          name: partListItem.name,
          image: partListItem.image,
          price: partListItem.price,
          available: partListItem.available,
          menu: this.getPartCardMenu(),
          sellable: this.getPartCardSellable(),
          properties: partListItem.properties.map((property) =>
            this.getPartCardProperty(property)
          ),
        }));
  }

  private getPartCardMenu(): UiPartCard['menu'] {
    return {
      displayed: true,
      options: [],
    };
  }

  private getPartCardSellable(): UiPartCard['sellable'] {
    return {
      defaultQuantity: 1,
      enabled: true,
      displayed: true,
    };
  }

  private getPartCardProperty(property: PartProperty): UiPartCardProperty {
    return {
      label: property.name.label,
      value: property.value.label,
      unit: property.unit?.label ?? null,
    };
  }
}
