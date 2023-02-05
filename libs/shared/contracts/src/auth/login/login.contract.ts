export const loginUrl = `auth/login`;

// request payload
export interface LoginRequestPayload {
  username: string;
  password: string;
}

// response payload
export interface LoginResponsePayload {
  // TODO
  token: string;
}
