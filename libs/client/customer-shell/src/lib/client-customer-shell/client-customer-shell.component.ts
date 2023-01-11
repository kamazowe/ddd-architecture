import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TuiButtonModule, TuiSvgModule } from '@taiga-ui/core';
import {
  sanitizerProvider,
  svgSrcProcessorProvider,
} from '@ddd-architecture/client/shared/infrastructure/taiga/feature';

@Component({
  selector: 'ddd-client-customer-shell',
  standalone: true,
  imports: [TuiButtonModule, TuiSvgModule],
  providers: [sanitizerProvider, svgSrcProcessorProvider],
  templateUrl: './client-customer-shell.component.html',
  styleUrls: ['./client-customer-shell.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientCustomerShellComponent {}
