import { rootMain } from '../../../../../../.storybook/main';

import type { StorybookConfig, Options } from '@storybook/core-common';

const config: StorybookConfig = {
  ...rootMain,
  core: { ...rootMain.core, builder: 'webpack5' },
  stories: [
    ...rootMain.stories,
    '../../../../**/*.stories.mdx',
    '../../../../**/*.stories.@(ts)',
  ],
  addons: [...(rootMain.addons || [])],
  webpackFinal: async (config, { configType }: Options) => {
    // apply any global webpack configs that might have been specified in .storybook/main.ts
    if (rootMain.webpackFinal) {
      config = await rootMain.webpackFinal(config, { configType } as Options);
    }

    // add your own webpack tweaks if needed

    return config;
  },
  staticDirs: [
    {
      from: '../../../../../../libs/client/shared/infrastructure/assets/src/lib/images',
      to: '/assets/images',
    },
    {
      from: '../../../../../../node_modules/@taiga-ui/icons/src',
      to: '/assets/tui',
    },
  ],
};

module.exports = config;
