import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { ViewHeaderComponent } from './view-header.component';
import { svgProviders } from '@ddd-architecture/client/shared/infrastructure/taiga/feature';

export default {
  title: 'ViewHeaderComponent',
  component: ViewHeaderComponent,
  decorators: [
    moduleMetadata({
      imports: [],
      providers: [...svgProviders],
    }),
  ],
} as Meta<ViewHeaderComponent>;

const Template: Story<ViewHeaderComponent> = (args: ViewHeaderComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {};
