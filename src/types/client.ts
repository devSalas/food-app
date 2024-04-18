export interface Client {
  id?: number;
  name: string;
  image: string;
  address: string;
  phone: string;
  email: string;
  password: string;
  createdAt?: Date;
  updatedAt?: Date;
}
