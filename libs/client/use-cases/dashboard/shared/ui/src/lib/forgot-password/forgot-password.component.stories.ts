import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { ForgotPasswordComponent } from './forgot-password.component';

export default {
  title: 'ForgotPasswordComponent',
  component: ForgotPasswordComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
} as Meta<ForgotPasswordComponent>;

const Template: Story<ForgotPasswordComponent> = (
  args: ForgotPasswordComponent
) => ({
  props: args,
});

export const Initial = Template.bind({});
Initial.args = {};
