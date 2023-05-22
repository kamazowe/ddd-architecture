export interface RegisterFormInterface {
  firstName: string;
  lastName: string;
  email: string;
  adress: {
    street: string;
    houseNumber: number;
    flatNumber: number;
    zipcode: number;
    city: string;
  };
  password: string;
  replyPassword: string;
}
