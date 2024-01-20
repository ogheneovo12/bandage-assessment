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
