import { libraryGenerator } from '@nrwl/angular/generators';
import { Tree } from '@nrwl/devkit';

interface DefaultLibraryGenerator {
  publishable: boolean;
  buildable: boolean;
  standaloneConfig: boolean;
  skipFormat: boolean;
  skipModule: boolean;
  simpleName: boolean;
  flat: boolean;
}
const defaultLibraryGenerator: DefaultLibraryGenerator = {
  publishable: false,
  buildable: false,
  standaloneConfig: true,
  skipFormat: false,
  skipModule: true,
  simpleName: false,
  flat: false,
};

export interface LibraryGeneratorSchema {
  directory?: string;
  name: string;
  tags?: string;
  skipTests?: boolean;
}

export const customLibraryGenerator = (
  tree: Tree,
  schema: LibraryGeneratorSchema
): Promise<() => void> => {
  return libraryGenerator(tree, {
    ...defaultLibraryGenerator,
    ...schema,
  });
};
