import { Component } from '@angular/core';
import { ClientCustomerShellComponent } from '@ddd-architecture/client/customer-shell';

@Component({
  standalone: true,
  imports: [ClientCustomerShellComponent],
  selector: 'ddd-architecture-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'customer';
}
