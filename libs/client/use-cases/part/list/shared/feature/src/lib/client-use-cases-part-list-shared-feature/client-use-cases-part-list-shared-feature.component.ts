import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  UiViewHeader,
  ViewHeaderComponent,
} from '@ddd-architecture/client/shared/ui/view-header';
import { PartCardComponent } from '@ddd-architecture/client/use-cases/part/list/shared/ui';
import { PushModule } from '@ngrx/component';
import { PartListFeatureProvider } from '../providers/part-list-feature.provider';

@Component({
  selector: 'ddd-client-use-cases-part-list-shared-feature',
  standalone: true,
  imports: [CommonModule, ViewHeaderComponent, PartCardComponent, PushModule],
  templateUrl: './client-use-cases-part-list-shared-feature.component.html',
  styleUrls: ['./client-use-cases-part-list-shared-feature.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientUseCasesPartListSharedFeatureComponent implements OnDestroy {
  readonly viewHeader: UiViewHeader = { title: 'Part List' };

  partList$ = this.partListFeatureProvider.partCardList$;
  callState$ = this.partListFeatureProvider.partCardListCallState$;

  constructor(private partListFeatureProvider: PartListFeatureProvider) {
    this.partListFeatureProvider.partListPageEnter();
  }

  ngOnDestroy(): void {
    this.partListFeatureProvider.partListPageleave();
  }
}
