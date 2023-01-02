import { Tree } from '@nrwl/devkit';
import {
  findProjectsToMoveByNames,
  findProjectsToMoveByTags,
  getProjectTags,
  ProjectToMove
} from './filter-projects-by-tags.function';
import { getUniqueValues, isEmptyArray, isNoEmptyArray } from './utils';
import { moveGenerator } from '@nrwl/workspace';


export interface GeneratorSchema {
  destination: string;
  projectNames?: string[];
  projectTags?: string;
  updateImportPath?: boolean
  importPath?: string;
  skipFormat?: boolean;
}


class ProjectToMoveMap {


  private readonly projects: Map<string, ProjectToMove> = new Map();

  private static getId(value: ProjectToMove): string {
    return `${value.name}-${value.catalog}`
  }

  setMany(values: ProjectToMove[]): void {
    values.forEach(value => {
      this.projects.set(ProjectToMoveMap.getId(value), value)
    })
  }



  getValues(): ProjectToMove[] {
    return Array.from(this.projects.values())
  }

  get size() {
    return this.projects.size
  }
}


const getDestination = (destination: string, projectCatalog: string): string => {
  return `${destination}/${projectCatalog}`
}

export default async function (tree: Tree, schema: GeneratorSchema) {
  // TODO test
  console.log('schema', schema)
  const projectsToMoveMap = new ProjectToMoveMap()

  // project by tags
  const projectTags = getProjectTags(schema)
  if (isNoEmptyArray(projectTags)) {
    const foundProjectsByTags = await findProjectsToMoveByTags(tree, projectTags)
    projectsToMoveMap.setMany(foundProjectsByTags)
  }

  // selected projects
  if (isNoEmptyArray(schema.projectNames)) {
    const validProjectNames = schema.projectNames.filter(name => name !== '');
    const projectsToMoveByNames = await findProjectsToMoveByNames(tree, validProjectNames);
    projectsToMoveMap.setMany(projectsToMoveByNames)
  }

  if (projectsToMoveMap.size === 0) {
    throw new Error('No projects found to move')
  }

  console.info(`projects found for move (${projectsToMoveMap.size}): `, projectsToMoveMap.getValues())
  await Promise.all(projectsToMoveMap.getValues().map(projectData => {
    return moveGenerator(tree, {
      projectName: projectData.name,
      destination: getDestination(schema.destination, projectData.catalog),
      importPath: schema.importPath,
      updateImportPath: schema.updateImportPath,
      skipFormat: schema.skipFormat,
    })
  }))
  // todo nie odpala się na koncu
  console.info('Projects have been transferred')
}
