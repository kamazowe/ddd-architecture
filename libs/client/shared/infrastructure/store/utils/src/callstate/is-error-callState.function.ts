import { CallState, CallStateError } from './result-state';
import { isDefined } from '@ddd-architecture/shared/utils';

export const isErrorCallState = <T>(
  source: CallState<T>
): source is CallStateError<T> => {
  return isDefined((source as CallStateError<boolean>).error);
};
