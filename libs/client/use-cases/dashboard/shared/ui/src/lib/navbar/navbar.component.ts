import { ChangeDetectionStrategy, Component, Output, EventEmitter, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TuiSvgModule } from '@taiga-ui/core';
import { UiNavbarElementPath } from './navbar.interface';

@Component({
  selector: 'ddd-navbar',
  standalone: true,
  imports: [CommonModule, TuiSvgModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  readonly UiNavbarElementPath = UiNavbarElementPath;
  @Output() sidenavRoute = new EventEmitter<UiNavbarElementPath>();
  // TODO add routes to higher component
  @Input() paths: {route: UiNavbarElementPath, label: string}[] | null = null;

  onSelectLink(routeNumber: UiNavbarElementPath): void {
    this.sidenavRoute.emit(routeNumber);
  }
}