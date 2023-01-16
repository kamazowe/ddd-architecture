import { ChangeDetectionStrategy, Component, Output, EventEmitter, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TuiDropdownModule, TuiButtonModule, TuiSvgModule, TuiHostedDropdownModule, TuiHostedDropdownComponent } from '@taiga-ui/core';

@Component({
  selector: 'ddd-header',
  standalone: true,
  imports: [CommonModule, TuiDropdownModule, TuiButtonModule, TuiSvgModule, TuiHostedDropdownModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class HeaderComponent implements OnInit{
  @Output() menuIconClicked = new EventEmitter<void>();
  @Output() cartIconClicked = new EventEmitter<void>();
  @Output() avatarIconClicked = new EventEmitter<void>();

  @ViewChild(TuiHostedDropdownComponent)
  component?: TuiHostedDropdownComponent;

  readonly items = ["Profile", "Log Out"];

  open = false;

  avatarAwailable = false;

  ngOnInit(): void {
    this.avatarAwailable = true;
  }

  onClickMenuIcon(): void {
    this.menuIconClicked.emit()
  }
  onClickCartIcon(): void {
    this.cartIconClicked.emit()
  }

  onClickAvatarIcon(): void {
    this.avatarIconClicked.emit()
  }

  onClickProfileIcon(): void {
    this.open = false;
    this.component?.nativeFocusableElement?.focus();
  }
}