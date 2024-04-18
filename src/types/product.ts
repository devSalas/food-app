export interface Product {
  id?: number;
  name: string;
  image: string;
  price: number;
  category_id: number;
  createdAt?: Date;
  updateAt?: Date;
  description: string
  ingredients: string;
}
