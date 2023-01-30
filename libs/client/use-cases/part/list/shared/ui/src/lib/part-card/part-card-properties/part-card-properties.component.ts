import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TuiLabelModule } from '@taiga-ui/core';
import { TuiIslandModule } from '@taiga-ui/kit';
import { UiPartCardProperty } from '../part-card.interface';

@Component({
  selector: 'ddd-part-card-properties',
  standalone: true,
  imports: [CommonModule, TuiIslandModule, TuiLabelModule],
  templateUrl: './part-card-properties.component.html',
  styleUrls: ['./part-card-properties.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PartCardPropertiesComponent {
  @Input() partCardProperties: UiPartCardProperty[] | null = null;
}
