import { UiHeader } from '../header/header.interface';
import { UiNavbar } from '../navbar/navbar.interface';

export interface UiDashboard {
  navbar: UiNavbar;
  header: UiHeader;
  isMobile: boolean;
}
