import * as fromLogin from '../actions/login.action';

export interface LoginState {
  data: { email: string; password: string } | null;
  loaded: boolean;
  loading: boolean;
}

export const InitalState: LoginState = {
  data: null,
  loaded: false,
  loading: false,
};

export function reducer(
  state = InitalState,
  action: fromLogin.LoginAction
): LoginState {
  switch (action.type) {
    case fromLogin.LOAD_LOGIN_STATE: {
      return {
        ...state,
        loading: true,
      };
    }

    case fromLogin.LOAD_LOGIN_STATE_SUCCESS: {
      return {
        ...state,
        loading: false,
        loaded: true,
      };
    }

    case fromLogin.LOAD_LOGIN_STATE_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false,
      };
    }
  }

  return state;
}

export const getLoginLoading = (state: LoginState) => state.loading;
export const getLoginLoaded = (state: LoginState) => state.loaded;
export const getLoginData = (state: LoginState) => state.data;
