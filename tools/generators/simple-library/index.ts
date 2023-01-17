import { Tree, formatFiles } from '@nrwl/devkit';
import { libraryGenerator } from '@nrwl/angular/generators';

export default async function (tree: Tree, schema: any) {
  await libraryGenerator(tree, schema);
  await formatFiles(tree);
}
