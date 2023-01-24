import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NgClass, NgIf } from '@angular/common';
import { TuiSidebarModule } from '@taiga-ui/addon-mobile';
import { TuiActiveZoneModule } from '@taiga-ui/cdk';
import { UiDashboard } from './dashboard.interface';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'ddd-dashboard',
  standalone: true,
  imports: [
    NgIf,
    NgClass,
    NavbarComponent,
    FooterComponent,
    HeaderComponent,
    TuiSidebarModule,
    TuiActiveZoneModule,
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent {
  @Input() dashboard: UiDashboard | null = null;

  open = false;

  toggle(open: boolean): void {
    this.open = open;
  }
}
