import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { DashboardComponent } from './dashboard.component';
import {
  dashboardDesktopStoriesMock,
  dashboardMobileDevicesStoriesMock,
} from './dashboard.component.stories-mock';

export default {
  title: 'DashboardComponent',
  component: DashboardComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
} as Meta<DashboardComponent>;

const Template: Story<DashboardComponent> = (args: DashboardComponent) => ({
  props: args,
});

export const Desktop = Template.bind({});
Desktop.args = {
  dashboard: dashboardDesktopStoriesMock,
};

export const MobileDevices = Template.bind({});
MobileDevices.args = {
  dashboard: dashboardMobileDevicesStoriesMock,
};
