import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { ChangePasswordComponent } from './change-password.component';

export default {
  title: 'ChangePasswordComponent',
  component: ChangePasswordComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
} as Meta<ChangePasswordComponent>;

const Template: Story<ChangePasswordComponent> = (
  args: ChangePasswordComponent
) => ({
  props: args,
});

export const Initial = Template.bind({});
Initial.args = {};
