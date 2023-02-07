import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
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
  selector: 'ddd-architecture-forgot-password-form',
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
  templateUrl: './forgot-password-form.component.html',
  styleUrls: ['./forgot-password-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ForgotPasswordFormComponent implements OnInit {
  forgotPasswordForm: FormGroup = new FormGroup({});

  ngOnInit() {
    this.forgotPasswordForm = new FormGroup({
      email: new FormControl(null, Validators.required),
    });
  }

  onSubmit(): void {
    console.log(this.forgotPasswordForm.value);
  }
}