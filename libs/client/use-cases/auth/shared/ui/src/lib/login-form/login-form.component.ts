/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import {
  TuiTextfieldControllerModule,
  TuiButtonModule,
  TuiLinkModule,
  TuiLoaderModule,
} from '@taiga-ui/core';
import {
  TuiDataListWrapperModule,
  TuiIslandModule,
  TuiInputPasswordModule,
  TuiInputModule,
} from '@taiga-ui/kit';
import { AuthLoginFeatureService } from '../../../../feature-login/src/lib/services/auth-login-feature.service';
import { filterCallState, LoadingState } from '@ddd-architecture/client/shared/infrastructure/store/utils';

export interface UiLoginFormValue {
  username: string;
  password: string;
}

@Component({
  selector: 'ddd-architecture-login-form',
  standalone: true,
  imports: [
    CommonModule,
    TuiTextfieldControllerModule,
    TuiDataListWrapperModule,
    ReactiveFormsModule,
    TuiButtonModule,
    TuiLinkModule,
    TuiIslandModule,
    TuiInputPasswordModule,
    TuiInputModule,
    TuiLoaderModule,
  ],
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [AuthLoginFeatureService],
})
export class LoginFormComponent {
  @Output() submitted = new EventEmitter<UiLoginFormValue>();

  loading$ = this.authLoginFeatureService.loginCallState$.pipe(filterCallState([LoadingState.LOADING]));

  constructor(public authLoginFeatureService: AuthLoginFeatureService) {}

  loginForm: FormGroup = new FormGroup({
    username: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required),
  });

  onSubmit(): void {
    this.submitted.emit(this.loginForm.value);
  }
}
