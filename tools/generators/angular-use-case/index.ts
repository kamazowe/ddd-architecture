import { Tree, formatFiles, installPackagesTask, } from '@nrwl/devkit';
import { libraryGenerator, UnitTestRunner } from '@nrwl/angular/generators';
import { Linter } from '@nrwl/linter';


 interface Schema {
   name:string;
   directory?: string;
   tags?: string;
   displayBlock?: boolean;
   standalone?: boolean;
   prefix?: string;
 }

 interface AngularLibraryGeneratorSchema {
   name:string;
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

 type RequiredAngularLibraryGeneratorSchema = Pick<AngularLibraryGeneratorSchema,'skipModule' | 'standalone'>
 type ConfigurableAngularLibraryGeneratorSchema = Omit<AngularLibraryGeneratorSchema,keyof RequiredAngularLibraryGeneratorSchema>


const defaultAngularLibraryGeneratorSchema: ConfigurableAngularLibraryGeneratorSchema =  {
  name: 'default',
  style:'scss',
  standaloneConfig: true,
  changeDetection: 'OnPush',
  displayBlock: true,
  linter: Linter.EsLint,
  unitTestRunner: UnitTestRunner.Jest
}

// TODO
const createAngularLibraryGeneratorSchema = (generatorSchema:Schema,defaultAngularLibraryGeneratorSchema): AngularLibraryGeneratorSchema =>{
  const requiredAngularLibraryGeneratorSchema : RequiredAngularLibraryGeneratorSchema = {
    skipModule: true,
    standalone: false,
  }
  const configurableAngularLibraryGeneratorSchema: ConfigurableAngularLibraryGeneratorSchema = {
    ...defaultAngularLibraryGeneratorSchema,
    name: generatorSchema.name ?? defaultAngularLibraryGeneratorSchema.name,
    directory: generatorSchema.directory ?? defaultAngularLibraryGeneratorSchema.directory,
    tags: generatorSchema.tags ?? defaultAngularLibraryGeneratorSchema.tags,
    displayBlock: generatorSchema.displayBlock ?? defaultAngularLibraryGeneratorSchema.displayBlock ,
    prefix: generatorSchema.prefix ?? defaultAngularLibraryGeneratorSchema.prefix ,
  }
  // fixme
  console.warn('generatorSchema',generatorSchema)
   return {
     ...configurableAngularLibraryGeneratorSchema,
     ...requiredAngularLibraryGeneratorSchema,
   }
}



export default async function (tree: Tree, generatorSchema: Schema) {
  const tmp = await libraryGenerator(tree, createAngularLibraryGeneratorSchema(generatorSchema,defaultAngularLibraryGeneratorSchema));
  console.log('tmp',tmp)
  await formatFiles(tree);
  return () => {
    installPackagesTask(tree);
  };
}
