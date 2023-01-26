import { Observable } from 'rxjs';
import { CallState } from '@ddd-architecture/client/shared/infrastructure/store/utils';
import { UiPartCard } from '@ddd-architecture/client/use-cases/part/list/shared/ui';

export abstract class PartListFeatureProvider {
  abstract readonly partCardList$: Observable<UiPartCard[] | null>;
  abstract readonly partCardListCallState$: Observable<CallState>;

  abstract partListPageEnter(): void;
  abstract partListPageleave(): void;
}
