import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { PartCardComponent } from './part-card.component';

export default {
  title: 'PartCardComponent',
  component: PartCardComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<PartCardComponent>;

const Template: Story<PartCardComponent> = (args: PartCardComponent) => ({
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
}