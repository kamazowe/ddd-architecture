import { createAction, props } from '@ngrx/store';
import { NotificationPayload } from '../notification.payload';
import { ActionPayload } from '@ddd-architecture/client/shared/infrastructure/store/utils';

export const showSuccessNotification = createAction(
  '[Notification] Show Success Notification',
  props<ActionPayload<NotificationPayload>>()
);

export const showFailureNotification = createAction(
  '[Notification] Show Failure Notification',
  props<ActionPayload<NotificationPayload>>()
);

export const NotificationActions = {
  showFailureNotification,
  showSuccessNotification,
};
