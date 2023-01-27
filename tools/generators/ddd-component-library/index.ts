import { formatFiles, Tree } from '@nrwl/devkit';
import {
  ComponentGeneratorSchema,
  customComponentGenerator,
} from '../common/component-generator.function';
import { getProjectName } from '../common/get-project-name.function';
import {
  LibraryGeneratorSchema,
  customLibraryGenerator,
} from '../common/library-generator.function';

export interface Schema {
  libraryName: string;
  componentName: string;
  directory?: string;
  tags?: string;
  export?: boolean;
  skipTests?: boolean;
}

export default async function (tree: Tree, schema: Schema) {
  const libSchema: LibraryGeneratorSchema = {
    directory: schema.directory,
    name: schema.libraryName,
    tags: schema.tags,
    skipTests: schema.skipTests,
  };
  await customLibraryGenerator(tree, libSchema);

  const projectName = getProjectName(schema.libraryName, schema.directory);

  const componentSchema: ComponentGeneratorSchema = {
    name: schema.componentName,
    project: projectName,
    export: schema.export,
    skipTests: schema.skipTests,
  };
  await customComponentGenerator(tree, componentSchema);

  await formatFiles(tree);
}
