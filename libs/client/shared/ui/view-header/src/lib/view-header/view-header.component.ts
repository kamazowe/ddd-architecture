import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { JsonPipe } from '@angular/common';
import { UiViewHeader } from './view-header.interface';
import { TuiButtonModule, TuiSvgModule } from '@taiga-ui/core';
@Component({
  selector: 'ddd-view-header',
  standalone: true,
  imports: [JsonPipe, TuiButtonModule, TuiSvgModule ],
  templateUrl: './view-header.component.html',
  styleUrls: ['./view-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ViewHeaderComponent {
  @Input() header: UiViewHeader | null = null;
  @Output() prevButtonClicked = new EventEmitter<void>();

  onClickPrevButton(): void {
    this.prevButtonClicked.emit();
  }
}
