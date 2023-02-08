import { isCallState, includesCallStates } from './is-callState.function';
import { LoadingState } from './result-state';

describe('isCallState function: ', () => {
  test('should be truthy', () => {
    expect(isCallState(LoadingState.LOADED, LoadingState.LOADED)).toBeTruthy();
    expect(isCallState({ error: true }, { error: true })).toBeTruthy();
  });
  test('should not be truthy', () => {
    expect(isCallState(LoadingState.INIT, LoadingState.LOADED)).toBeFalsy();
    expect(isCallState({ error: true }, LoadingState.LOADED)).toBeFalsy();
  });
});

describe('includes callStates function: ', () => {
  test('should be truthy ', () => {
    expect(
      includesCallStates(LoadingState.LOADED, [LoadingState.LOADED])
    ).toBeTruthy();
    expect(
      includesCallStates(LoadingState.INIT, [
        LoadingState.LOADED,
        LoadingState.INIT,
      ])
    ).toBeTruthy();
    expect(includesCallStates({ error: true }, [{ error: true }])).toBeTruthy();
  });

  test('should not be truthy', () => {
    expect(
      includesCallStates(LoadingState.INIT, [LoadingState.LOADED])
    ).toBeFalsy();
    expect(
      includesCallStates({ error: true }, [LoadingState.LOADED])
    ).toBeFalsy();
    expect(
      includesCallStates(LoadingState.LOADING, [
        LoadingState.LOADED,
        LoadingState.INIT,
      ])
    ).toBeFalsy();
    expect(includesCallStates({ error: true }, [])).toBeFalsy();
    expect(includesCallStates(LoadingState.INIT, [])).toBeFalsy();
  });
});
