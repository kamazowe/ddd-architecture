import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import {
  TuiButtonModule,
  TuiDataListModule,
  TuiDropdownModule,
  TuiHostedDropdownModule,
} from '@taiga-ui/core';
import { UIButtonDropdown } from './button-dropdown.interface';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'ddd-button-dropdown',
  standalone: true,
  imports: [
    NgFor,
    NgIf,
    TuiHostedDropdownModule,
    TuiDataListModule,
    TuiDropdownModule,
    TuiButtonModule,
  ],
  templateUrl: './button-dropdown.component.html',
  styleUrls: ['./button-dropdown.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonDropdownComponent {
  @Input() buttonDropdown: UIButtonDropdown | null = null;

  @Output() optionClicked = new EventEmitter<string>();

  onClick(actionValue: string): void {
    this.optionClicked.emit(actionValue);
  }

  onTrackBy(index: number): number {
    return index;
  }
}
