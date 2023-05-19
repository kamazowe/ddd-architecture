import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { LoginFormComponent } from './login-form.component';
import {StoreModule} from "@ngrx/store";

export default {
  title: 'LoginFormComponent',
  component: LoginFormComponent,
  decorators: [
    moduleMetadata({
      imports: [
        StoreModule.forRoot({})
      ],
    }),
  ],
} as Meta<LoginFormComponent>;

const Template: Story<LoginFormComponent> = (args: LoginFormComponent) => ({
  props: args,
});

export const Initial = Template.bind({});
Initial.args = {};
