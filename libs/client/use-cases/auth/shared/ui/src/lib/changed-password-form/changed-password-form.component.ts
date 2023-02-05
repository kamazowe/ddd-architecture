import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ddd-architecture-changed-password-form',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './changed-password-form.component.html',
  styleUrls: ['./changed-password-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChangedPasswordFormComponent {}
