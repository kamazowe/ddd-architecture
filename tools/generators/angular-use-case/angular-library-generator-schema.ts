import { UnitTestRunner } from '@nrwl/angular/generators';
import { Linter } from '@nrwl/linter';
import { Schema } from './schema';

export interface AngularLibraryGeneratorSchema {
  name: string;
  style: 'css' | 'scss' | 'sass' | 'less' | 'none';
  tags?: string;
  prefix?: string;
  directory?: string;
  standaloneConfig: boolean;
  changeDetection: 'Default' | 'OnPush';
  displayBlock: boolean;
  linter: Linter;
  standalone: boolean;
  skipModule: boolean;
  unitTestRunner: UnitTestRunner;
}

type RequiredAngularLibraryGeneratorSchema = Pick<AngularLibraryGeneratorSchema, 'skipModule' | 'standalone'>
type ConfigurableAngularLibraryGeneratorSchema = Omit<AngularLibraryGeneratorSchema, keyof RequiredAngularLibraryGeneratorSchema>


const defaultAngularLibraryGeneratorSchema: ConfigurableAngularLibraryGeneratorSchema = {
  name: 'default',
  style: 'scss',
  standaloneConfig: true,
  changeDetection: 'OnPush',
  displayBlock: true,
  linter: Linter.EsLint,
  unitTestRunner: UnitTestRunner.Jest
}

// TODO
export const createAngularLibraryGeneratorSchema = (generatorSchema: Schema): AngularLibraryGeneratorSchema => {
  const requiredAngularLibraryGeneratorSchema: RequiredAngularLibraryGeneratorSchema = {
    skipModule: true,
    standalone: false,
  }
  const configurableAngularLibraryGeneratorSchema: ConfigurableAngularLibraryGeneratorSchema = {
    ...defaultAngularLibraryGeneratorSchema,
    name: generatorSchema.name ?? defaultAngularLibraryGeneratorSchema.name,
    directory: generatorSchema.directory ?? defaultAngularLibraryGeneratorSchema.directory,
    tags: generatorSchema.tags ?? defaultAngularLibraryGeneratorSchema.tags,
    displayBlock: generatorSchema.displayBlock ?? defaultAngularLibraryGeneratorSchema.displayBlock,
    prefix: generatorSchema.prefix ?? defaultAngularLibraryGeneratorSchema.prefix,
  }
  // fixme
  console.warn('generatorSchema', generatorSchema)
  return {
    ...configurableAngularLibraryGeneratorSchema,
    ...requiredAngularLibraryGeneratorSchema,
  }
}
