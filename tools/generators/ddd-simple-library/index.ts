import { Tree, formatFiles } from '@nrwl/devkit';
import { customLibraryGenerator } from '../common/library-generator.function';

export interface Schema {
  directory?: string;
  name: string;
  tags?: string;
}

export default async function (tree: Tree, schema: Schema) {
  await customLibraryGenerator(tree, schema);

  await formatFiles(tree);
}
