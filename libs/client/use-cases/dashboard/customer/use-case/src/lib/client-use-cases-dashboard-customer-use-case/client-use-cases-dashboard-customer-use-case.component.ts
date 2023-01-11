import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ddd-client-use-cases-dashboard-customer-use-case',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './client-use-cases-dashboard-customer-use-case.component.html',
  styleUrls: ['./client-use-cases-dashboard-customer-use-case.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientUseCasesDashboardCustomerUseCaseComponent {}
