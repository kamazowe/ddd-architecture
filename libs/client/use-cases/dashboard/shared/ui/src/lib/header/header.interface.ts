import { UiDropdownAction } from '../button-dropdown/button-dropdown.interface';

export interface UiHeader {
  // todo UiImage interface
  avatarUrl: string | null;
  buttonDropdownActionList: UiDropdownAction[];
  menuIconDisplayed: boolean;
}
