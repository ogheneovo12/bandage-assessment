import { IProduct } from "../types/global";
import cardCover1 from "@/assets/images/card-cover-1.jpg";
import cardCover2 from "@/assets/images/card-cover-2.jpg";
import cardCover3 from "@/assets/images/card-cover-3.jpg";
import cardCover4 from "@/assets/images/card-cover-4.jpg";
import postImage1 from "@/assets/images/post-image-1.png";
import postImage2 from "@/assets/images/post-image-2.png";
import postImage3 from "@/assets/images/post-image-3.png";

import { IPostCardProps } from "@/components/PostCard";

export const products: IProduct[] = [
  {
    id: 1,
    title: "iPhone 9",
    description: "An apple mobile which is nothing like apple",
    price: 549,
    discountPercentage: 12.96,
    rating: 4.69,
    stock: 94,
    brand: "Apple",
    category: "smartphones",
    thumbnail: cardCover1,
  },
  {
    id: 1,
    title: "iPhone 9",
    description: "An apple mobile which is nothing like apple",
    price: 549,
    discountPercentage: 12.96,
    rating: 4.69,
    stock: 94,
    brand: "Apple",
    category: "smartphones",
    thumbnail: cardCover2,
  },
  {
    id: 1,
    title: "iPhone 9",
    description: "An apple mobile which is nothing like apple",
    price: 549,
    discountPercentage: 12.96,
    rating: 4.69,
    stock: 94,
    brand: "Apple",
    category: "smartphones",
    thumbnail: cardCover3,
  },
  {
    id: 1,
    title: "iPhone 9",
    description: "An apple mobile which is nothing like apple",
    price: 549,
    discountPercentage: 12.96,
    rating: 4.69,
    stock: 94,
    brand: "Apple",
    category: "smartphones",
    thumbnail: cardCover4,
  },
  {
    id: 1,
    title: "iPhone 9",
    description: "An apple mobile which is nothing like apple",
    price: 549,
    discountPercentage: 12.96,
    rating: 4.69,
    stock: 94,
    brand: "Apple",
    category: "smartphones",
    thumbnail: cardCover4,
  },
  {
    id: 1,
    title: "iPhone 9",
    description: "An apple mobile which is nothing like apple",
    price: 549,
    discountPercentage: 12.96,
    rating: 4.69,
    stock: 94,
    brand: "Apple",
    category: "smartphones",
    thumbnail: cardCover4,
  },
  {
    id: 1,
    title: "iPhone 9",
    description: "An apple mobile which is nothing like apple",
    price: 549,
    discountPercentage: 12.96,
    rating: 4.69,
    stock: 94,
    brand: "Apple",
    category: "smartphones",
    thumbnail: cardCover4,
  },
];

export const basePostCard: Omit<IPostCardProps, "thumnail"> = {
  title: "Loudest à la Madison #1 (L'integral)",
  thumbnail: cardCover1,
  description: `We focus on ergonomics and meeting 
  you where you work. It's only a 
  keystroke away.`,
  date: "22 April 2021",
  comments: 10,
};

export const posts: IPostCardProps[] = [
  {
    ...basePostCard,
    thumbnail: postImage1,
  },
  {
    ...basePostCard,
    thumbnail: postImage2,
  },
  {
    ...basePostCard,
    thumbnail: postImage3,
  }
];
