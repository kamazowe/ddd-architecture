import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ddd-architecture-forgot-password-form',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './forgot-password-form.component.html',
  styleUrls: ['./forgot-password-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ForgotPasswordFormComponent {}
