import { InternalMap } from './_internal_utils';
import { Tree } from '@nrwl/devkit';
import { filterProjectsByNames, filterProjectsByTags, Tag } from './filter-projects-by-tags.function';
import { ProjectConfiguration } from 'nx/src/config/workspace-json-project-json';


export interface ProjectToMove {
  name:string;
  catalog:string
}

export class ProjectToMoveMap extends InternalMap<ProjectToMove> {
  protected getId(value: ProjectToMove): string {
    return `${value.name}-${value.catalog}`
  }
}

// TODO
// export interface ProjectConfiguration {
//   /**
//    * Project's name. Optional if specified in workspace.json
//    */
//   name?: string;
const createProjectToMoveFromProjectConfiguration = (projectConfiguration: ProjectConfiguration): ProjectToMove =>  {
  const getCatalog = (rootPath:string):string => {
    const separator = '/'
    const arr = rootPath.split(separator)
    const lastIndex = arr.length-1
    return arr[lastIndex]
  }
  return {
    name: projectConfiguration.name,
    catalog: getCatalog(projectConfiguration.root)
  }
}

export const findProjectsToMoveByTags = async (tree: Tree, tags: Tag[]): Promise<Array<ProjectToMove>> => {
  const foundProjectsByTags = await filterProjectsByTags(tree, tags)
  const projectNames: ProjectToMove[] = []
  foundProjectsByTags.forEach((projectConfiguration, key) => {
    projectNames.push(createProjectToMoveFromProjectConfiguration(projectConfiguration))
  });
  return projectNames;
}

export const findProjectsToMoveByNames = async (tree: Tree, names: string[]): Promise<Array<ProjectToMove>> => {
  const foundProjectsByNames = await filterProjectsByNames(tree, names)
  return foundProjectsByNames.map((projectConfiguration) => {
    return createProjectToMoveFromProjectConfiguration(projectConfiguration)
  });
}

export const getProjectDestination = (schemaDestination: string, projectCatalog: string): string => {
  return `${schemaDestination}/${projectCatalog}`
}
