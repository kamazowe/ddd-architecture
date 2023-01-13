import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TuiButtonModule, TuiRootModule, TuiSvgModule } from '@taiga-ui/core';
import {
  sanitizerProvider,
  svgSrcProcessorProvider,
} from '@ddd-architecture/client/shared/infrastructure/taiga/feature';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'ddd-client-customer-shell',
  standalone: true,
  imports: [
    TuiRootModule,
    RouterOutlet,
    TuiButtonModule,
    TuiSvgModule,
    RouterOutlet,
  ],
  providers: [sanitizerProvider, svgSrcProcessorProvider],
  templateUrl: './client-customer-shell.component.html',
  styleUrls: ['./client-customer-shell.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientCustomerShellComponent {}
