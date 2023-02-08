import { CallState } from './result-state';
import { isErrorCallState } from './is-error-callState.function';
import { ArrayElement } from '@ddd-architecture/shared/utils';

export const isCallState = <T extends CallState>(
  source: CallState,
  searchedCallState: T
): source is T => {
  return (
    source === searchedCallState ||
    (isErrorCallState(source) && isErrorCallState(searchedCallState))
  );
};

export const includesCallStates = <T extends CallState[]>(
  source: CallState,
  searchedCallStates: T
): source is ArrayElement<T> => {
  return searchedCallStates.some((findCallState) =>
    isCallState(source, findCallState)
  );
};
