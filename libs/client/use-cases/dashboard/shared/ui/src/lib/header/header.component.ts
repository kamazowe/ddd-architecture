import { ChangeDetectionStrategy, Component, Output, EventEmitter, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TuiButtonModule, TuiSvgModule } from '@taiga-ui/core';

@Component({
  selector: 'ddd-header',
  standalone: true,
  imports: [CommonModule, TuiButtonModule, TuiSvgModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class HeaderComponent implements OnInit{
  @Output() menuIconClicked = new EventEmitter<void>();
  @Output() cartIconClicked = new EventEmitter<void>();
  @Output() avatarIconClicked = new EventEmitter<void>();
  @Output() profileIconClicked = new EventEmitter<void>();

  // TODO header: (add dropdown profile menu)

  avatarEnabled = false;

  ngOnInit(): void {
    this.avatarEnabled = true;
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
    this.profileIconClicked.emit()
  }
}