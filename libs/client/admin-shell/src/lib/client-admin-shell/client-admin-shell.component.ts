import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ddd-client-admin-shell',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './client-admin-shell.component.html',
  styleUrls: ['./client-admin-shell.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientAdminShellComponent {}
