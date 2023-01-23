import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TuiButtonModule, TuiSvgModule } from '@taiga-ui/core';
import { TuiIslandModule } from '@taiga-ui/kit';
import { UiPartCard } from './part-card.interface';

@Component({
  selector: 'ddd-part-card',
  standalone: true,
  imports: [CommonModule, TuiIslandModule, TuiButtonModule, TuiSvgModule],
  templateUrl: './part-card.component.html',
  styleUrls: ['./part-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PartCardComponent {
  partCard: UiPartCard | null = null;
}
