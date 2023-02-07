import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
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
  selector: 'ddd-change-password',
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
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChangePasswordComponent implements OnInit {
  changePasswordForm: FormGroup = new FormGroup({});

  ngOnInit() {
    this.changePasswordForm = new FormGroup({
      newPassword: new FormControl(null, Validators.required),
      replyNewPassword: new FormControl(null, Validators.required),
    });
  }

  onSubmit(): void {
    console.log(this.changePasswordForm.value);
  }
}
