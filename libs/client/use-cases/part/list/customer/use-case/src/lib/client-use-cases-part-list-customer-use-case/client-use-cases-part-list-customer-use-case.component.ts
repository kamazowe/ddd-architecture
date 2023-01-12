import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ClientUseCasesPartListSharedFeatureComponent
} from '@ddd-architecture/client/use-cases/part/list/shared/feature';

@Component({
  selector: 'ddd-client-use-cases-part-list-customer-use-case',
  standalone: true,
  imports: [CommonModule, ClientUseCasesPartListSharedFeatureComponent],
  templateUrl: './client-use-cases-part-list-customer-use-case.component.html',
  styleUrls: ['./client-use-cases-part-list-customer-use-case.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientUseCasesPartListCustomerUseCaseComponent {
}
