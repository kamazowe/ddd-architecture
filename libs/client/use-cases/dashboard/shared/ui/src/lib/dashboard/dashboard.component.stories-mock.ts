import { UiDashboard } from './dashboard.interface';
import {
  headerStoriesMockDesktopWithAvatar,
  headerStoriesMockMobileDevices,
} from '../header/header.component.stories-mock';
import { navbarStoriesMockWithData } from '../navbar/navbar.component.stories-mock';

export const dashboardMobileDevicesStoriesMock: UiDashboard = {
  navbar: navbarStoriesMockWithData,
  header: headerStoriesMockMobileDevices,
  isMobile: true,
};

export const dashboardDesktopStoriesMock: UiDashboard = {
  navbar: navbarStoriesMockWithData,
  header: headerStoriesMockDesktopWithAvatar,
  isMobile: false,
};
