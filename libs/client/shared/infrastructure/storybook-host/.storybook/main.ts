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
  // TODO add assets to storybook
  staticDirs: [
    // { from: '"../../../../../../apps/customer/src/assets"', to: '/assets' },
    // { from: '"../assets"', to: '/assets' },
    // "../assets",
    // "./assets"
  ],
};

module.exports = config;
