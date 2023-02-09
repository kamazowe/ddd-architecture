import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { ForgotPasswordFormComponent } from './forgot-password-form.component';

export default {
  title: 'ForgotPasswordFormComponent',
  component: ForgotPasswordFormComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
} as Meta<ForgotPasswordFormComponent>;

const Template: Story<ForgotPasswordFormComponent> = (
  args: ForgotPasswordFormComponent
) => ({
  props: args,
});

export const Initial = Template.bind({});
Initial.args = {};
