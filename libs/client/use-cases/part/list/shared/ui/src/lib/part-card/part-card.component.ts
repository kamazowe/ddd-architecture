import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TuiButtonModule, TuiSvgModule, TuiLabelModule } from '@taiga-ui/core';
import { TuiIslandModule } from '@taiga-ui/kit';
import { UiPartCard } from './part-card.interface';
import { PartCardPropertiesComponent } from './part-card-properties/part-card-properties.component';

@Component({
  selector: 'ddd-part-card',
  standalone: true,
  imports: [
    CommonModule,
    TuiIslandModule,
    TuiButtonModule,
    TuiSvgModule,
    TuiLabelModule,
    PartCardPropertiesComponent,
  ],
  templateUrl: './part-card.component.html',
  styleUrls: ['./part-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PartCardComponent {
  @Input() partCard: UiPartCard | null = null;

  defaultImage = 'assets/images/Placeholder-image.png';
}
