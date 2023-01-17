import { provideEffects } from '@ngrx/effects';
import { RouteProviders } from '@ddd-architecture/client/shared/infrastructure/utils';
import { NotificationEffects } from './+store/notification.effects';

export const storeNotificationProviders: RouteProviders = [
  provideEffects(NotificationEffects),
];
