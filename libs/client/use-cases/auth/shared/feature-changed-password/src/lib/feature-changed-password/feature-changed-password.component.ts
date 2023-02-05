import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangedPasswordFormComponent } from '@ddd-architecture/client/use-cases/auth/shared/ui';

@Component({
  selector: 'ddd-architecture-feature-changed-password',
  standalone: true,
  imports: [CommonModule, ChangedPasswordFormComponent],
  templateUrl: './feature-changed-password.component.html',
  styleUrls: ['./feature-changed-password.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureChangedPasswordComponent {}
