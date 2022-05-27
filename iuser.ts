
export interface IUser {
  name: string;
  email: string;
  phone: string[];
  passward: string;
  address: {
    city: string;
    street: string;
  };
}
