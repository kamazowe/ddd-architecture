import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TuiRootModule } from '@taiga-ui/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'ddd-client-customer-shell',
  standalone: true,
  imports: [TuiRootModule, RouterOutlet],
  templateUrl: './client-customer-shell.component.html',
  styleUrls: ['./client-customer-shell.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientCustomerShellComponent {}
