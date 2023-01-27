import { Tree } from '@nrwl/devkit';
import { wrapAngularDevkitSchematic } from 'nx/src/adapter/ngcli-adapter';

export interface DataServiceGeneratorSchema {
  name: string;
  project: string;
  skipTests?: boolean;
}

export const customDataServiceGenerator = (
  tree: Tree,
  schema: DataServiceGeneratorSchema
): Promise<unknown> => {
  return wrapAngularDevkitSchematic('@schematics/angular', 'service')(
    tree,
    schema
  );
};
