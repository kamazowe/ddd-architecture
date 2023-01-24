import { componentWrapperDecorator, moduleMetadata } from '@storybook/angular';
import { TuiRootModule } from '@taiga-ui/core';
import { svgProviders } from '@ddd-architecture/client/shared/infrastructure/taiga/feature';

const tuiRootTemplate = (story: unknown) => `<tui-root>
  <!-- content of your app -->
  ${story}
  <!--
     If you need, you can add something between Taiga portal layers:
    -->
  <ng-container ngProjectAs="tuiOverContent">
    <!-- Content over app content -->
  </ng-container>
  <ng-container ngProjectAs="tuiOverDialogs">
    <!-- Content over dialogs -->
  </ng-container>
  <ng-container ngProjectAs="tuiOverAlerts">
    <!-- Content over notifications -->
  </ng-container>
  <ng-container ngProjectAs="tuiOverPortals">
    <!-- Content over dropdowns -->
  </ng-container>
  <ng-container ngProjectAs="tuiOverHints">
    <!-- Content over hints -->
  </ng-container>
</tui-root>
`;

// modules: BrowserModule,BrowserAnimationsModule  are needed to start
export const tuiDecorators = [
  moduleMetadata({
    imports: [TuiRootModule],
    providers: [...svgProviders],
  }),
  componentWrapperDecorator((story) => `${tuiRootTemplate(story)}`),
];
