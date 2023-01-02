export const isDefined = <T>(value: T | undefined | null): value is T => value !== null && value !== undefined;

type NonEmptyArr<T> = [T, ...T[]];

export const isNoEmptyArray = <T>(value: Array<T> | undefined | null): value is NonEmptyArr<T> => {
  return Array.isArray(value) && value.length !== 0;
}

export abstract class InternalMap<T> {

  private readonly projects: Map<string, T> = new Map();

  protected abstract getId(value: T): string;

  setMany(values: T[]): void {
    values.forEach(value => {
      this.projects.set(this.getId(value), value)
    })
  }

  getValues(): T[] {
    return Array.from(this.projects.values())
  }

  get size() {
    return this.projects.size
  }
}
