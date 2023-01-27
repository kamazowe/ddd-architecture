import { Tree } from '@nrwl/devkit';
import { wrapAngularDevkitSchematic } from 'nx/src/adapter/ngcli-adapter';

interface DefaultLibraryGeneratorSchema {
  flat: boolean;
}

const defaultLibraryGeneratorSchema: DefaultLibraryGeneratorSchema = {
  flat: true,
};

export interface NgrxFeatureGeneratorSchema {
  ngrxFeatureName: string;
  projectName: string;
  apiActions: boolean;
  skipTests?: boolean;
  actionPrefix?: string;
}

interface ExternalNgrxFeatureSchema {
  path?: string;
  project: string;
  name: string;
  flat?: boolean;
  module?: boolean;
  skipTests?: boolean;
  reducers?: string;
  group?: boolean;
  api?: boolean;
  prefix?: string;
}

const mapToExternalNgrxFeatureSchema = (
  defaultLibraryGenerator: DefaultLibraryGeneratorSchema,
  schema: NgrxFeatureGeneratorSchema
): ExternalNgrxFeatureSchema => {
  return {
    ...defaultLibraryGenerator,
    name: schema.ngrxFeatureName,
    project: schema.projectName,
    api: schema.apiActions,
    prefix: schema.actionPrefix,
    skipTests: schema.skipTests,
  };
};

export const customNgrxFeatureGenerator = (
  tree: Tree,
  schema: NgrxFeatureGeneratorSchema
): Promise<unknown> => {
  return wrapAngularDevkitSchematic('@ngrx/schematics', 'feature')(
    tree,
    mapToExternalNgrxFeatureSchema(defaultLibraryGeneratorSchema, schema)
  );
};
