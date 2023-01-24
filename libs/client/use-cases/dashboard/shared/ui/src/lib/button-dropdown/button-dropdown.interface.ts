export interface UiDropdownAction {
  label: string;
  value: string;
}

export interface UIButtonDropdown {
  actionList: UiDropdownAction[];
  buttonLabel: string;
}
