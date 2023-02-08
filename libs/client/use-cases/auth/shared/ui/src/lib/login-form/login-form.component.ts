import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';

// TODO mock
export interface UiLoginFormValue {
  username: string;
  password: string;
}

@Component({
  selector: 'ddd-architecture-login-form',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginFormComponent {
  @Output() submitted = new EventEmitter<UiLoginFormValue>();

  // TODO mock
  onSubmit(): void {
    const mock: UiLoginFormValue = {
      username: 'admin',
      password: 'admin',
    };
    this.submitted.emit(mock);
  }
}
