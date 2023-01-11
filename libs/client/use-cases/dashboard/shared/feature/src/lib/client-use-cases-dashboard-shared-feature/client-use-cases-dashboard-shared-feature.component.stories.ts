import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { ClientUseCasesDashboardSharedFeatureComponent } from './client-use-cases-dashboard-shared-feature.component';

export default {
  title: 'ClientUseCasesDashboardSharedFeatureComponent',
  component: ClientUseCasesDashboardSharedFeatureComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
} as Meta<ClientUseCasesDashboardSharedFeatureComponent>;

const Template: Story<ClientUseCasesDashboardSharedFeatureComponent> = (
  args: ClientUseCasesDashboardSharedFeatureComponent
) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {};
