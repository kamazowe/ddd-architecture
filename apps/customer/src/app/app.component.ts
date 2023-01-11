import { Component } from '@angular/core';
import { ClientCustomerShellComponent } from '@ddd-architecture/client/customer-shell';
import { TuiRootModule } from '@taiga-ui/core';

@Component({
  standalone: true,
  imports: [TuiRootModule, ClientCustomerShellComponent],
  selector: 'ddd-architecture-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'customer';
}
