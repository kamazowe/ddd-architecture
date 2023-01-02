import { getProjects, Tree } from '@nrwl/devkit';
import { ProjectConfiguration } from 'nx/src/config/workspace-json-project-json';
import { GeneratorSchema } from './index';
import { isDefined } from './_internal_utils';


export type Tag = string

export const filterProjectsByTags = async (tree: Tree, tags: Tag[]): Promise<Map<string, ProjectConfiguration>> => {
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

export const filterProjectsByNames = async (tree: Tree, projectNames: string[]): Promise<Array<ProjectConfiguration>> => {
  const allProjects = await getProjects(tree)
  return projectNames.map((name) => {
   return allProjects.get(name)
  })
}

export const getProjectTags = (schema: GeneratorSchema): Tag[] => {
  const separator = ','
  return isDefined(schema.projectTags) ? schema.projectTags.split(separator) : []
}

