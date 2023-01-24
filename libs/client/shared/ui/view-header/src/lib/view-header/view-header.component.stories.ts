import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { ViewHeaderComponent } from './view-header.component';

export default {
  title: 'ViewHeaderComponent',
  component: ViewHeaderComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
} as Meta<ViewHeaderComponent>;

const Template: Story<ViewHeaderComponent> = (args: ViewHeaderComponent) => ({
  props: args,
});

export const Initial = Template.bind({});
Initial.args = {};

export const WithViewHeaderData = Template.bind({});
WithViewHeaderData.args = {
  header: {
    title: 'my mock',
  },
};
