import { Tree } from '@nrwl/devkit';
import { componentGenerator } from '@nrwl/angular/generators';

interface DefaultComponentGeneratorSchema {
  style: 'scss';
  changeDetection: 'OnPush';
  displayBlock: boolean;
  standalone: boolean;
  type: string;
}

const defaultComponentGeneratorSchema: DefaultComponentGeneratorSchema = {
  style: 'scss',
  changeDetection: 'OnPush',
  displayBlock: true,
  standalone: true,
  type: 'component',
};

export interface ComponentGeneratorSchema {
  name: string;
  project: string;
  export?: boolean;
  skipTests?: boolean;
}

export const customComponentGenerator = (
  tree: Tree,
  schema: ComponentGeneratorSchema
): any => {
  return componentGenerator(tree, {
    ...defaultComponentGeneratorSchema,
    ...schema,
  });
};
