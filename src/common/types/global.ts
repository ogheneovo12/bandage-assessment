import { StaticImageData } from "next/image";

export interface IProduct {
  id: number;
  title: string;
  description: string;
  price: 549;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string | StaticImageData;
  images?: (string | StaticImageData)[];
}

export interface ICartProduct {
  id: number;
  title: string;
  price: number;
  quantity: number;
  total: number;
  discountPercentage: number;
  discountedPrice: number;
  thumbnail: string | StaticImageData;
}

export interface ICart {
  id: number;
  products: ICartProduct[];
  total: number; // total was calculated with quantity
  discountedTotal: number;
  userId: 1; // user id is 1
  totalProducts: number;
  totalQuantity: number; // total quantity of itemsI
}

export type MenuItem = {
  name: string;
  path: string;
};
