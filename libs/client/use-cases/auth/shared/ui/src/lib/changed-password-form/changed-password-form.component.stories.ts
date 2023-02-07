import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { ChangedPasswordFormComponent } from './changed-password-form.component';

export default {
  title: 'ChangedPasswordFormComponent',
  component: ChangedPasswordFormComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
} as Meta<ChangedPasswordFormComponent>;

const Template: Story<ChangedPasswordFormComponent> = (
  args: ChangedPasswordFormComponent
) => ({
  props: args,
});

export const Initial = Template.bind({});
Initial.args = {};