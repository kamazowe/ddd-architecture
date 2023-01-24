import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { ButtonDropdownComponent } from './button-dropdown.component';
import { buttonDropdownStoriesMockPrimary } from './button-dropdown.component.stories-mock';

export default {
  title: 'Button Dropdown',
  component: ButtonDropdownComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
} as Meta<ButtonDropdownComponent>;

const Template: Story<ButtonDropdownComponent> = (
  args: ButtonDropdownComponent
) => ({
  props: args,
});

export const Primary = Template.bind({});

Primary.args = {
  buttonDropdown: buttonDropdownStoriesMockPrimary,
};
