import { moduleMetadata, Story, Meta } from '@storybook/angular';
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

export const Primary = Template.bind({});
Primary.args = {};
