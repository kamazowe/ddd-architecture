import { ChangeDetectionStrategy, Component, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TuiDropdownModule } from '@taiga-ui/core';

// import { UIHeader } from './header.interface';
@Component({
  selector: 'ddd-header',
  standalone: true,
  imports: [CommonModule, TuiDropdownModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class HeaderComponent implements OnInit{
  @Output() menuIconClicked = new EventEmitter<void>();
  @Output() cartIconClicked = new EventEmitter<void>();
  @Output() avatarIconClicked = new EventEmitter<void>();

  avatarAwailable = false;
  open = false;

  ngOnInit(): void {
    // MORE COMPLEX LOGIC SOON
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
    this.open = !this.open;
  }

  onObscured(obscured: any): void {
    if (obscured) {
      this.open = false;
    }
  }

  onActiveZone(active: any): void {
    this.open = active && this.open;
  }
}