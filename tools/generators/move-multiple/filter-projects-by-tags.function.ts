import { getProjects, Tree } from '@nrwl/devkit';
import { ProjectConfiguration } from 'nx/src/config/workspace-json-project-json';
import { GeneratorSchema } from './index';
import { isDefined } from './utils';


export type Tag = string


export interface ProjectToMove {
  name:string;
  catalog:string
}

export const getProjectTags = (schema: GeneratorSchema): Tag[] => {
  const separator = ','
  return isDefined(schema.projectTags) ? schema.projectTags.split(separator) : []
}

const filterProjectsByTags = async (tree: Tree, tags: Tag[]): Promise<Map<string, ProjectConfiguration>> => {
  const map: Map<string, ProjectConfiguration> = new Map();
  const allProjects = await getProjects(tree)

  const conditionFilter = (projectConfiguration: ProjectConfiguration, searchedTags: Tag[]): boolean => {
    return searchedTags.every(searchedTag => projectConfiguration.tags.some(projectTag => projectTag === searchedTag))
  }

  allProjects.forEach((projectConfiguration, key) => {
    if (conditionFilter(projectConfiguration, tags)) {
      map.set(key, projectConfiguration)
    }
  })
  return map
}

const filterProjectsByNames = async (tree: Tree, projectNames: string[]): Promise<Array<ProjectConfiguration>> => {
  const map: Map<string, ProjectConfiguration> = new Map();
  const allProjects = await getProjects(tree)

  const conditionFilter = (projectConfiguration: ProjectConfiguration, projectNames: string[]): boolean => {
    return projectNames.every(searchedTag => projectConfiguration.tags.some(projectTag => projectTag === searchedTag))
  }

  return projectNames.map((name) => {
   return allProjects.get(name)
  })
}


// todo przetestować kiedy name === undefined
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
  const projectNames: string[] = []
  return foundProjectsByNames.map((projectConfiguration) => {
    return createProjectToMoveFromProjectConfiguration(projectConfiguration)
  });
}

