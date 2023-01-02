export const isDefined = <T>(value: T | undefined | null): value is T => value !== null && value !== undefined;

type NonEmptyArr<T> = [T, ...T[]];

export const isNoEmptyArray = <T>(value: Array<T> | undefined | null): value is NonEmptyArr<T> => {
  return Array.isArray(value) && value.length !== 0;
}

export const isEmptyArray = <T>(value: Array<T> | undefined | null): boolean => {
  return Array.isArray(value) && value.length === 0;
}

export const getUniqueValues = <T>(value: Array<T>): Array<T> => {
  return Array.from(new Set(value))
}
