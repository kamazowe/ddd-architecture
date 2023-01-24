import { moduleMetadata } from '@storybook/angular';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { tuiDecorators } from './tui-decorators';

export const parameters = {
  layout: 'fullscreen',
};

const appDecorators = [
  moduleMetadata({
    imports: [BrowserModule, BrowserAnimationsModule],
  }),
];

export const decorators = [...appDecorators, ...tuiDecorators];
