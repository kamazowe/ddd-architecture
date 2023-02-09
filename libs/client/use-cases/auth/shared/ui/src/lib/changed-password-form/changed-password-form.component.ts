import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TuiTextfieldControllerModule, TuiButtonModule } from '@taiga-ui/core';
import {
  TuiDataListWrapperModule,
  TuiIslandModule,
  TuiInputPasswordModule,
  TuiInputModule,
} from '@taiga-ui/kit';

@Component({
  selector: 'ddd-architecture-changed-password-form',
  standalone: true,
  imports: [
    CommonModule,
    TuiTextfieldControllerModule,
    TuiDataListWrapperModule,
    ReactiveFormsModule,
    TuiButtonModule,
    TuiIslandModule,
    TuiInputPasswordModule,
    TuiInputModule,
  ],
  templateUrl: './changed-password-form.component.html',
  styleUrls: ['./changed-password-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChangedPasswordFormComponent {
  changePasswordForm: FormGroup = new FormGroup({
    newPassword: new FormControl(null, Validators.required),
    replyNewPassword: new FormControl(null, Validators.required),
  });

  onSubmit(): void {
    console.log(this.changePasswordForm.value);
  }
}
