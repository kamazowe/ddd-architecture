

// navbar component input payload : NavbarElement[] | null
export interface UiNavbarElement {
  label: string;
  path:UiNavbarElementPath;
}

// navbar component output payload: UiNavbarElementPath
export enum UiNavbarElementPath {
  parts= 'parts'
}
