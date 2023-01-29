import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TuiRootModule } from '@taiga-ui/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'ddd-client-customer-shell',
  standalone: true,
  imports: [TuiRootModule, RouterOutlet],
  templateUrl: './client-customer-shell.component.html',
  styleUrls: ['./client-customer-shell.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientCustomerShellComponent {
  constructor(private httpClient: HttpClient) {
    this.httpClient.get('/api/test-bff').subscribe((data) => {
      console.log('test bff', data);
    });
  }
}
