import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationFormComponent } from '@ddd-architecture/client/use-cases/auth/shared/ui';

@Component({
  selector: 'ddd-architecture-feature-registration',
  standalone: true,
  imports: [CommonModule, RegistrationFormComponent],
  templateUrl: './feature-registration.component.html',
  styleUrls: ['./feature-registration.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureRegistrationComponent {}
