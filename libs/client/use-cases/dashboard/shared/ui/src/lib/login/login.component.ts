import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import {
  TuiTextfieldControllerModule,
  TuiHintModule,
  TuiButtonModule,
  TuiLinkModule,
} from '@taiga-ui/core';
import { TuiDataListWrapperModule, TuiIslandModule } from '@taiga-ui/kit';

@Component({
  selector: 'ddd-login',
  standalone: true,
  imports: [
    CommonModule,
    TuiTextfieldControllerModule,
    TuiHintModule,
    TuiDataListWrapperModule,
    ReactiveFormsModule,
    TuiButtonModule,
    TuiLinkModule,
    TuiIslandModule,
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({});

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
    });
  }

  onSubmit(): void {
    console.log(this.loginForm.value);
  }
}
