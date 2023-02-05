export const changedPasswordUrl = `auth/changed-password`;

// request payload
export interface ChangedPasswordRequestPayload {
  oldPassword: string;
  newPassword: string;
}
