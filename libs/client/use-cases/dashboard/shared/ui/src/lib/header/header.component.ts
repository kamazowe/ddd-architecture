import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { TuiButtonModule, TuiSvgModule } from '@taiga-ui/core';
import { ButtonDropdownComponent } from '../button-dropdown/button-dropdown.component';
import { UiHeader } from './header.interface';
import { UIButtonDropdown } from '../button-dropdown/button-dropdown.interface';

@Component({
  selector: 'ddd-header',
  standalone: true,
  imports: [
    // todo CommonModule
    CommonModule,
    ButtonDropdownComponent,
    TuiButtonModule,
    TuiSvgModule,
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  @Output() menuIconClicked = new EventEmitter<void>();
  @Output() cartIconClicked = new EventEmitter<void>();
  @Output() avatarIconClicked = new EventEmitter<void>();
  @Output() profileActionClicked = new EventEmitter<string>();

  _header: UiHeader | null = null;
  buttonDropdown: UIButtonDropdown | null = null;

  readonly buttonLabel = 'Profile';

  @Input() set header(value: UiHeader) {
    this._header = value;
    this.buttonDropdown = {
      actionList: value.buttonDropdownActionList,
      buttonLabel: this.buttonLabel,
    };
  }

  onClickMenuIcon(): void {
    this.menuIconClicked.emit();
  }

  onClickCartIcon(): void {
    this.cartIconClicked.emit();
  }

  onClickAvatarIcon(): void {
    this.avatarIconClicked.emit();
  }

  onClickMyProfileAction(option: string): void {
    this.profileActionClicked.emit(option);
  }
}
