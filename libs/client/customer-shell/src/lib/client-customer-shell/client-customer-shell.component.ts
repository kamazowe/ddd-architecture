import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  TuiAlertModule,
  TuiButtonModule,
  TuiRootModule,
  TuiSvgModule,
} from '@taiga-ui/core';
import { RouterOutlet } from '@angular/router';
import { svgProviders } from '@ddd-architecture/client/shared/infrastructure/taiga/feature';

@Component({
  selector: 'ddd-client-customer-shell',
  standalone: true,
  imports: [
    TuiRootModule,
    RouterOutlet,
    TuiButtonModule,
    TuiSvgModule,
    RouterOutlet,
    TuiAlertModule,
  ],
  providers: [...svgProviders],
  templateUrl: './client-customer-shell.component.html',
  styleUrls: ['./client-customer-shell.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientCustomerShellComponent {}
