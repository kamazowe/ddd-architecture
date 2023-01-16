import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewHeaderComponent } from '@ddd-architecture/client/shared/ui/view-header';
import { PartCardComponent } from '@ddd-architecture/client/use-cases/part/list/shared/ui';
import { Store } from '@ngrx/store';
import {
  PartListActions,
  PartListSelectors,
  PartListState,
} from '@ddd-architecture/client/use-cases/part/list/shared/data-access';
import { PushModule } from '@ngrx/component';

@Component({
  selector: 'ddd-client-use-cases-part-list-shared-feature',
  standalone: true,
  imports: [CommonModule, ViewHeaderComponent, PartCardComponent, PushModule],
  templateUrl: './client-use-cases-part-list-shared-feature.component.html',
  styleUrls: ['./client-use-cases-part-list-shared-feature.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientUseCasesPartListSharedFeatureComponent {
  counter$ = this.store.select(PartListSelectors.selectCounter);
  loading$ = this.store.select(PartListSelectors.selectLoading);

  constructor(private store: Store<PartListState>) {
    this.store.dispatch(PartListActions.loadPartLists());
  }
}
