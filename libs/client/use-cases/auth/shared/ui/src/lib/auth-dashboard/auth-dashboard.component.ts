import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ddd-architecture-auth-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './auth-dashboard.component.html',
  styleUrls: ['./auth-dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthDashboardComponent {}
