import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TuiButtonModule, TuiRootModule, TuiSvgModule } from '@taiga-ui/core';

@Component({
  selector: 'ddd-client-admin-shell',
  standalone: true,
  imports: [TuiRootModule, TuiButtonModule, TuiSvgModule],
  templateUrl: './client-admin-shell.component.html',
  styleUrls: ['./client-admin-shell.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientAdminShellComponent {}
