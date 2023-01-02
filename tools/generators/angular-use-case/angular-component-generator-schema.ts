import { formatFiles, installPackagesTask, Tree, } from '@nrwl/devkit';
import { libraryGenerator, UnitTestRunner } from '@nrwl/angular/generators';
import { Linter } from '@nrwl/linter';
import componentGenerator from '@nrwl/angular/src/generators/component/component';
import { AngularLibraryGeneratorSchema } from './angular-library-generator-schema';
import { Schema } from './schema';
import { isDefined } from '../move-multiple/_internal_utils';


interface AngularComponentGeneratorSchema {
  name: string;
  path?: string;
  project?: string;
  displayBlock?: boolean;
  inlineStyle?: boolean;
  inlineTemplate?: boolean;
  standalone?: boolean;
  viewEncapsulation?: 'Emulated' | 'None' | 'ShadowDom';
  changeDetection?: 'Default' | 'OnPush';
  style?: 'css' | 'scss' | 'sass' | 'less' | 'none';
  skipTests?: boolean;
  type?: string;
  flat?: boolean;
  skipImport?: boolean;
  selector?: string;
  module?: string;
  skipSelector?: boolean;
  export?: boolean;
}

type RequiredAngularComponentGeneratorSchema = Pick<AngularComponentGeneratorSchema, 'project'>
// todo type
type ConfigurableAngularComponentGeneratorSchema = AngularComponentGeneratorSchema


const defaultAngularLibraryGeneratorSchema: ConfigurableAngularComponentGeneratorSchema = {
  name: 'default',
  style: 'scss',
  standalone: true,
  changeDetection: 'OnPush',
  displayBlock: true,
  export: true
}

// todo test
const getProjectName = (schema: Schema,librarySchema:AngularLibraryGeneratorSchema ):string => {
  if(isDefined(schema.directory)){
    const tmp = schema.directory.split('/').join('-') + '-' + schema.name.split('/').join('-')
    console.log('schema',schema)
    console.log('librarySchema',librarySchema)
    console.log('test',tmp)
    return tmp
  }else {
    return schema.name
  }
}

export const createAngularComponentGeneratorSchema = (generatorSchema: Schema,librarySchema:AngularLibraryGeneratorSchema ): AngularComponentGeneratorSchema => {
  const requiredAngularLibraryGeneratorSchema: RequiredAngularComponentGeneratorSchema = {
    project: getProjectName(generatorSchema,librarySchema),
  }
  const configurableAngularLibraryGeneratorSchema: ConfigurableAngularComponentGeneratorSchema = {
    name: generatorSchema.name ?? defaultAngularLibraryGeneratorSchema.name,
    style: generatorSchema.style ?? defaultAngularLibraryGeneratorSchema.style,
    standalone: generatorSchema.standalone ?? defaultAngularLibraryGeneratorSchema.standalone,
    changeDetection: generatorSchema.changeDetection ?? defaultAngularLibraryGeneratorSchema.changeDetection,
    displayBlock: generatorSchema.displayBlock ?? defaultAngularLibraryGeneratorSchema.displayBlock,
    export: generatorSchema.export ?? defaultAngularLibraryGeneratorSchema.export,
  }
  // fixme
  console.warn('generatorSchema', generatorSchema)
  const tmp2= {
    ...configurableAngularLibraryGeneratorSchema,
    ...requiredAngularLibraryGeneratorSchema,
  }
  console.log('createAngularComponentGeneratorSchema',tmp2)
  return tmp2
}
