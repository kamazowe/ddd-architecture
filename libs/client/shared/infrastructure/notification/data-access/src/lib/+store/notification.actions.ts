import { createAction, props } from '@ngrx/store';
import { NotificationPayload } from '../notification.payload';

export const showSuccessNotification = createAction(
  '[Notification] Show Success Notification',
  props<{ payload: NotificationPayload }>()
);

export const showFailureNotification = createAction(
  '[Notification] Show Failure Notification',
  props<{ payload: NotificationPayload }>()
);

export const NotificationActions = {
  showFailureNotification,
  showSuccessNotification,
};
