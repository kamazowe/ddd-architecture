import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { LoginComponent } from './login.component';

export default {
  title: 'LoginComponent',
  component: LoginComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
} as Meta<LoginComponent>;

const Template: Story<LoginComponent> = (args: LoginComponent) => ({
  props: args,
});

export const Initial = Template.bind({});
Initial.args = {};
