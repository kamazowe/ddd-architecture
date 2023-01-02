import { formatFiles, Tree, } from '@nrwl/devkit';
import { libraryGenerator,componentGenerator } from '@nrwl/angular/generators';
import { Schema } from './schema';
import { createAngularLibraryGeneratorSchema } from './angular-library-generator-schema';
import { createAngularComponentGeneratorSchema } from './angular-component-generator-schema';


export default async function (tree: Tree, generatorSchema: Schema) {
  const librarySchema = createAngularLibraryGeneratorSchema(generatorSchema)
  await libraryGenerator(tree, librarySchema);
  const componentSchema = createAngularComponentGeneratorSchema(generatorSchema, librarySchema)
  await componentGenerator(tree, componentSchema)

  await formatFiles(tree);
  // return () => {
  //   installPackagesTask(tree);
  // };
}
