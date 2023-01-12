import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewHeaderComponent } from '@ddd-architecture/client/shared/ui/view-header';
import { PartCardComponent } from '@ddd-architecture/client/use-cases/part/list/shared/ui';

@Component({
  selector: 'ddd-client-use-cases-part-list-shared-feature',
  standalone: true,
  imports: [CommonModule,ViewHeaderComponent,PartCardComponent],
  templateUrl: './client-use-cases-part-list-shared-feature.component.html',
  styleUrls: ['./client-use-cases-part-list-shared-feature.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientUseCasesPartListSharedFeatureComponent {}
