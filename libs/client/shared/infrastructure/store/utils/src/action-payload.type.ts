export interface ActionPayload<T> {
  payload: T;
}

export interface ActionErrorPayload<ErrorType> {
  payload: {
    error: ErrorType;
  };
}
