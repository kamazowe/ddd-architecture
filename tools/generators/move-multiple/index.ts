import { Tree } from '@nrwl/devkit';
import { getProjectTags, } from './filter-projects-by-tags.function';
import { isNoEmptyArray } from './_internal_utils';
import { moveGenerator } from '@nrwl/workspace';
import {
  findProjectsToMoveByNames,
  findProjectsToMoveByTags,
  getProjectDestination,
  ProjectToMove,
  ProjectToMoveMap
} from './project-to-move';


export interface GeneratorSchema {
  destination: string;
  projectNames?: string[];
  projectTags?: string;
  updateImportPath?: boolean
  importPath?: string;
  skipFormat?: boolean;
}

const getValidProjectsToMoveByTags = async (tree: Tree, schema: GeneratorSchema): Promise<ProjectToMove[]> => {
  const projectTags = getProjectTags(schema)
  if (isNoEmptyArray(projectTags)) {
    return findProjectsToMoveByTags(tree, projectTags)
  } else {
    return []
  }
}

const getValidProjectsToMoveByProjectNames = async (tree: Tree, schema: GeneratorSchema): Promise<ProjectToMove[]> => {
  if (isNoEmptyArray(schema.projectNames)) {
    const validProjectNames = schema.projectNames.filter(name => name !== '');
    return findProjectsToMoveByNames(tree, validProjectNames);
  } else {
    return []
  }
}

export default async function (tree: Tree, schema: GeneratorSchema) {
  // TODO test
  console.log('schema', schema)
  const projectsToMoveMap = new ProjectToMoveMap()

  // projects by tags
  const validProjectsToMoveByTags = await getValidProjectsToMoveByTags(tree, schema)
  if (validProjectsToMoveByTags.length) {
    projectsToMoveMap.setMany(validProjectsToMoveByTags)
  }

  //  projects by project names
  const validProjectsToMoveByProjectNames = await getValidProjectsToMoveByProjectNames(tree, schema)
  if (validProjectsToMoveByProjectNames.length) {
    projectsToMoveMap.setMany(validProjectsToMoveByProjectNames)
  }

  if (projectsToMoveMap.size === 0) {
    throw new Error('No projects found to move')
  }

  console.info(`projects found for move (${projectsToMoveMap.size}): `, projectsToMoveMap.getValues())
  await Promise.all(projectsToMoveMap.getValues().map(projectData => {
    return moveGenerator(tree, {
      projectName: projectData.name,
      destination: getProjectDestination(schema.destination, projectData.catalog),
      importPath: schema.importPath,
      updateImportPath: schema.updateImportPath,
      skipFormat: schema.skipFormat,
    })
  }))
}
