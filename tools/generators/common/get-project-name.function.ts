const changeSpecialMark = (path: string): string => {
  // special chars : / and _
  const regex = /\/|\_/g;
  const changedSpecialChar = '-';
  return path.replace(regex, changedSpecialChar);
};

export const getUnificationDictionary = (path: string): string => {
  const specialMark = '/';
  let result = path.startsWith(specialMark) ? path.slice(1) : path;
  result = result.endsWith(specialMark) ? result.slice(0, -1) : result;
  return result;
};

export const getProjectName = (name: string, directory?: string): string => {
  const dictionaryStartChar = '/';
  if (directory === undefined || directory === null || directory === '') {
    return changeSpecialMark(name);
  } else if (directory === dictionaryStartChar) {
    return changeSpecialMark(name);
  } else {
    return changeSpecialMark(
      `${getUnificationDictionary(directory)}${dictionaryStartChar}${name}`
    );
  }
};
