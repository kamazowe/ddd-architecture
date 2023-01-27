import {
  getUnificationDictionary,
  getProjectName,
} from './get-project-name.function';

describe('get project name function ', () => {
  it('should create library with complex project name and directory', () => {
    const directory = 'client/scope-test/nested1_nestest1cd/nested2/nested3';
    const name = 'client/scope-test/nested1_nestest1cd/nested2/nested3';

    const result =
      'client-scope-test-nested1-nestest1cd-nested2-nested3-client-scope-test-nested1-nestest1cd-nested2-nested3';
    expect(getProjectName(name, directory)).toEqual(result);
  });
  it('should create library with complex project name and directory (special characters next to each other)', () => {
    const directory =
      '/directory-first_part/directory-second-part_directory-third-part';
    const name = 'name-first_part/name-second-part_name-third-part';

    const result =
      'directory-first-part-directory-second-part-directory-third-part-name-first-part-name-second-part-name-third-part';
    expect(getProjectName(name, directory)).toEqual(result);
  });
  it('should create library with complex project name and only one special char in directory field', () => {
    const directory = '/';
    const name = 'name-first_part/name-second-part_name-third-part';

    const result = 'name-first-part-name-second-part-name-third-part';
    expect(getProjectName(name, directory)).toEqual(result);
  });
  it('should create library with complex project name', () => {
    const name = 'client/scope-test/nested1_nestest1cd/nested2/nested3';
    const result = 'client-scope-test-nested1-nestest1cd-nested2-nested3';
    expect(getProjectName(name)).toEqual(result);
  });
  it('should create library with simple project name', () => {
    const name = 'test';
    const result = 'test';
    expect(getProjectName(name)).toEqual(result);
  });
  it('should create library with simple project name and dictionary', () => {
    const name = 'test';
    const dictionary = 'test';
    const result = 'test-test';
    expect(getProjectName(name, dictionary)).toEqual(result);
  });
});

describe('get unification dictionary', () => {
  it('should correct dictionary 1', () => {
    const test = '/test/';
    const result = 'test';
    expect(getUnificationDictionary(test)).toEqual(result);
  });
  it('should correct dictionary 2', () => {
    const test = 'test';
    const result = 'test';
    expect(getUnificationDictionary(test)).toEqual(result);
  });
  it('should correct dictionary 3', () => {
    const test = '/test';
    const result = 'test';
    expect(getUnificationDictionary(test)).toEqual(result);
  });
  it('should correct dictionary 4', () => {
    const test = 'test/';
    const result = 'test';
    expect(getUnificationDictionary(test)).toEqual(result);
  });
});
