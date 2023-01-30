import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { PartCardPropertiesComponent } from './part-card-properties.component';
import { UiPartCardProperty } from '../part-card.interface';

export default {
  title: 'PartCardPropertiesComponent',
  component: PartCardPropertiesComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
} as Meta<PartCardPropertiesComponent>;

const Template: Story<PartCardPropertiesComponent> = (
  args: PartCardPropertiesComponent
) => ({
  props: args,
});

export const Initial = Template.bind({});
Initial.args = {
  partCardProperties: null,
};

const mock: UiPartCardProperty[] = [
  {
    label: 'super-part',
    value: '1000',
    unit: 'kg',
  },
  {
    label: 'regular-part',
    value: '20849',
    unit: 't',
  },
  {
    label: 'regular-part',
    value: '20849',
    unit: 't',
  },
  {
    label: 'regular-part',
    value: '20849',
    unit: 't',
  },
  {
    label: 'regular-part',
    value: '20849',
    unit: 't',
  },
  {
    label: 'regular-part',
    value: '20849',
    unit: 't',
  },
  {
    label: 'regular-part',
    value: '20849',
    unit: 't',
  },
  {
    label: 'regular-part',
    value: '20849',
    unit: 't',
  },
  {
    label: 'regular-part',
    value: '20849',
    unit: 't',
  },
  {
    label: 'regular-part',
    value: '20849',
    unit: 't',
  },
  {
    label: 'regular-part',
    value: '20849',
    unit: 't',
  },
  {
    label: 'regular-part',
    value: '20849',
    unit: 't',
  },
  {
    label: 'regular-part',
    value: '20849',
    unit: 't',
  },
  {
    label: 'regular-part',
    value: '20849',
    unit: 't',
  },
  {
    label: 'regular-part',
    value: '20849',
    unit: 't',
  },
  {
    label: 'regular-part',
    value: '20849',
    unit: 't',
  },
  {
    label: 'regular-part',
    value: '20849',
    unit: 't',
  },
  {
    label: 'regular-part',
    value: '20849',
    unit: 't',
  },
  {
    label: 'regular-part',
    value: '20849',
    unit: 't',
  },
  {
    label: 'regular-part',
    value: '20849',
    unit: 't',
  },
  {
    label: 'regular-part',
    value: '20849',
    unit: 't',
  },
  {
    label: 'regular-part',
    value: '20849',
    unit: 't',
  },
  {
    label: 'regular-part',
    value: '20849',
    unit: 't',
  },
  {
    label: 'regular-part',
    value: '20849',
    unit: 't',
  },
  {
    label: 'regular-part',
    value: '20849',
    unit: 't',
  },
  {
    label: 'regular-part',
    value: '20849',
    unit: 't',
  },
  {
    label: 'regular-part',
    value: '20849',
    unit: 't',
  },
  {
    label: 'regular-part',
    value: '20849',
    unit: 't',
  },
  {
    label: 'regular-part',
    value: '20849',
    unit: 't',
  },
  {
    label: 'regular-part',
    value: '20849',
    unit: 't',
  },
  {
    label: 'regular-part',
    value: '20849',
    unit: 't',
  },
];

export const WithProperties = Template.bind({});
WithProperties.args = {
  partCardProperties: mock,
};
