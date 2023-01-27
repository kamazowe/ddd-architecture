import { formatFiles, Tree } from '@nrwl/devkit';
import { getProjectName } from '../common/get-project-name.function';
import {
  LibraryGeneratorSchema,
  customLibraryGenerator,
} from '../common/library-generator.function';
import {
  NgrxFeatureGeneratorSchema,
  customNgrxFeatureGenerator,
} from './ngrx-feature-generator.function';
import {
  DataServiceGeneratorSchema,
  customDataServiceGenerator,
} from './data-service-generator.function';

export type Schema = LibraryGeneratorSchema &
  Omit<NgrxFeatureGeneratorSchema, 'projectName'> &
  DataServiceSchema;

interface DataServiceSchema {
  dataServiceEnabled: boolean;
}

export default async function (tree: Tree, schema: Schema) {
  const libSchema: LibraryGeneratorSchema = {
    name: schema.name,
    directory: schema.directory,
    tags: schema.tags,
  };
  await customLibraryGenerator(tree, libSchema);

  const projectName = getProjectName(schema.name, schema.directory);

  const ngrxFeatureSchema: NgrxFeatureGeneratorSchema = {
    ngrxFeatureName: schema.ngrxFeatureName,
    projectName: projectName,
    apiActions: schema.apiActions,
    skipTests: schema.skipTests,
    actionPrefix: schema.actionPrefix,
  };

  await customNgrxFeatureGenerator(tree, ngrxFeatureSchema);

  if (schema.dataServiceEnabled) {
    const dataServiceSchema: DataServiceGeneratorSchema = {
      name: schema.ngrxFeatureName,
      project: projectName,
      skipTests: schema.skipTests,
    };
    await customDataServiceGenerator(tree, dataServiceSchema);
  }

  await formatFiles(tree);
}
