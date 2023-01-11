import { TUI_SANITIZER } from '@taiga-ui/core';
import { NgDompurifySanitizer } from '@tinkoff/ng-dompurify';

export const sanitizerProvider = {
  provide: TUI_SANITIZER,
  useClass: NgDompurifySanitizer,
};
