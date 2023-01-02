import { Component } from '@angular/core';
import { ClientAdminShellComponent } from '@ddd-architecture/client/admin-shell';

@Component({
  standalone: true,
  imports: [ClientAdminShellComponent],
  selector: 'ddd-architecture-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'admin';
}
