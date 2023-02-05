// path
export const registerUrl = `auth/register`;

// request payload
export interface RegisterRequestPayload {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  address: RegisterUserAddress | null;
}

export interface RegisterUserAddress {
  street: string;
  zipCode: string;
  city: string;
}
