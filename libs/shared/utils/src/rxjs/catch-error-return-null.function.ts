import { catchError, of, OperatorFunction } from 'rxjs';

export const catchErrorReturnNull = (
  callback: () => void
): OperatorFunction<any, null> => {
  return (source$) =>
    source$.pipe(
      catchError((error) => {
        callback();
        return of(null);
      })
    );
};
