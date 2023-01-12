import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ddd-part-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './part-card.component.html',
  styleUrls: ['./part-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PartCardComponent {}
