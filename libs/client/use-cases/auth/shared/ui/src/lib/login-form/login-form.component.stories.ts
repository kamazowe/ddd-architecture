import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { LoginFormComponent } from './login-form.component';

export default {
  title: 'LoginFormComponent',
  component: LoginFormComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
} as Meta<LoginFormComponent>;

const Template: Story<LoginFormComponent> = (args: LoginFormComponent) => ({
  props: args,
});

export const Initial = Template.bind({});
Initial.args = {};
