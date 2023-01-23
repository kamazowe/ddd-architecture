import { svgProviders } from '@ddd-architecture/client/shared/infrastructure/taiga/feature';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { PartCardComponent } from './part-card.component';
import { UiPartCard } from './part-card.interface';

export default {
  title: 'PartCardComponent',
  component: PartCardComponent,
  decorators: [
    moduleMetadata({
      imports: [],
      providers: [...svgProviders],
    }),
  ],
} as Meta<PartCardComponent>;

const Template: Story<PartCardComponent> = (args: PartCardComponent) => ({
  props: args,
});

export const Initial = Template.bind({});
Initial.args = {
  partCard: null,
};

const mock: UiPartCard = {
  id: '[mock] 2123',
  name: '[mock] partName',
  image: null,
  price: {
    value: 120,
    unit: '$',
  },
  available: {
    isInStock: true,
  },
  menu: {
    displayed: true,
    options: [],
  },
  sellable: {
    defaultQuantity: 123,
    displayed: true,
    enabled: false,
  },
  properties: [
    {
      label: 'Size',
      value: '1.2',
      unit: 'meter',
    },
    {
      label: 'Weight',
      value: '12',
      unit: 'kilogram',
    },
  ],
};

const imgMock = { ...mock };
imgMock.image = {
  src: 'jsdhflsehge',
  alt: 'ghosduvgesg',
};

export const NoImage = Template.bind({});
NoImage.args = {
  partCard: mock,
};

export const WithImgae = Template.bind({});
WithImgae.args = {
  partCard: imgMock,
};
