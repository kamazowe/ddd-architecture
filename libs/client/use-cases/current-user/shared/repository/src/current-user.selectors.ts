import { createSelector } from '@ngxs/store';
import { CurrentUserStateModel } from './current-user-state.model';
import { CurrentUserRepository } from './current-user.repository';

export class CurrentUserSelectors {
  static currentUserDetails() {
    return createSelector(
      [CurrentUserSelectors.currentUserDetailsResultState()],
      (state: CurrentUserStateModel['details']) => {
        return state.result;
      }
    );
  }

  static currentUserDetailsCallState() {
    return createSelector(
      [CurrentUserSelectors.currentUserDetailsResultState()],
      (state: CurrentUserStateModel['details']) => {
        return state.callState;
      }
    );
  }

  private static currentUserDetailsResultState() {
    return createSelector(
      [CurrentUserRepository],
      (state: CurrentUserStateModel) => {
        return state.details;
      }
    );
  }
}
