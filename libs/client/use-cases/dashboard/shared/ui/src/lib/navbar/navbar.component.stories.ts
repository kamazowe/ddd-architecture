import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { NavbarComponent } from './navbar.component';
import { navbarStoriesMockWithData } from './navbar.component.stories-mock';

export default {
  title: 'NavbarComponent',
  component: NavbarComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
} as Meta<NavbarComponent>;

const Template: Story<NavbarComponent> = (args: NavbarComponent) => ({
  props: args,
});

export const Initial = Template.bind({});
Initial.args = {};

export const WithData = Template.bind({});
WithData.args = {
  navbar: navbarStoriesMockWithData,
};
