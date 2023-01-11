import { TUI_SVG_SRC_PROCESSOR } from '@taiga-ui/core';

export const svgSrcProcessorProvider = {
  provide: TUI_SVG_SRC_PROCESSOR,
  useFactory: () => {
    return (src: string): string => {
      const myCustomPrefix = 'tui::';

      return src.startsWith(myCustomPrefix)
        ? `assets/tui/${src.replace(myCustomPrefix, '')}.svg`
        : src;
    };
  },
};
