import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TuiButtonModule, TuiSvgModule } from '@taiga-ui/core';
@Component({
  selector: 'ddd-view-header',
  standalone: true,
  imports: [CommonModule, TuiButtonModule, TuiSvgModule],
  templateUrl: './view-header.component.html',
  styleUrls: ['./view-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ViewHeaderComponent {}
