import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { JsonPipe } from '@angular/common';
import { UiViewHeader } from './view-header.interface';

@Component({
  selector: 'ddd-view-header',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './view-header.component.html',
  styleUrls: ['./view-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ViewHeaderComponent {
  @Input() header: UiViewHeader | null = null;
  @Output() backButtonClicked = new EventEmitter<void>();
}
