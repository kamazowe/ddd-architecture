import { Provider } from '@angular/core';
import { sanitizerProvider } from './sanitizer.provider';
import { svgSrcProcessorProvider } from './svg-src-processor.provider';

export const svgProviders: Provider[] = [
  sanitizerProvider,
  svgSrcProcessorProvider,
];
