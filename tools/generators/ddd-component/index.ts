import { formatFiles, Tree } from '@nrwl/devkit';
import {
  ComponentGeneratorSchema,
  customComponentGenerator,
} from '../common/component-generator.function';

export type Schema = ComponentGeneratorSchema;

export default async function (tree: Tree, schema: Schema) {
  await customComponentGenerator(tree, schema);

  await formatFiles(tree);
}
