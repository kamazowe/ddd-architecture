import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { HeaderComponent } from './header.component';
import {
  headerStoriesMockDesktop,
  headerStoriesMockDesktopWithAvatar,
  headerStoriesMockMobileDevices,
} from './header.component.stories-mock';
import { UiHeaderProvider } from './ui-header.provider';

class UiHeaderProviderMock implements UiHeaderProvider {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  profileActionClicked(value: string): void {}
}

export default {
  title: 'HeaderComponent',
  component: HeaderComponent,
  decorators: [
    moduleMetadata({
      imports: [],
      providers: [
        {
          provide: UiHeaderProvider,
          useClass: UiHeaderProviderMock,
        },
      ],
    }),
  ],
} as Meta<HeaderComponent>;

const Template: Story<HeaderComponent> = (args: HeaderComponent) => ({
  props: args,
});

export const Desktop = Template.bind({});
Desktop.args = {
  header: headerStoriesMockDesktop,
};

export const MobileDevices = Template.bind({});
MobileDevices.args = {
  header: headerStoriesMockMobileDevices,
};

export const DesktopWithAvatar = Template.bind({});
DesktopWithAvatar.args = {
  header: headerStoriesMockDesktopWithAvatar,
};
