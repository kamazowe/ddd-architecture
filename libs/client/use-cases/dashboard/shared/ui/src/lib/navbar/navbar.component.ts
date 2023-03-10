import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { UiNavbar } from './navbar.interface';
import { TuiLinkModule, TuiModeModule } from '@taiga-ui/core';
import { TuiTabsModule } from '@taiga-ui/kit';
@Component({
  selector: 'ddd-navbar',
  standalone: true,
  imports: [NgIf, NgFor, TuiLinkModule, TuiTabsModule, TuiModeModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  @Input() navbar: UiNavbar | null = null;
  @Output() sidenavRoute = new EventEmitter<string>();

  onSelectLink(routeNumber: string): void {
    this.sidenavRoute.emit(routeNumber);
  }

  onTrackBy(index: number): number {
    return index;
  }
}
