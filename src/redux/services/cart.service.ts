import { ICart, IProduct } from "@/common/types/global";
import { ApiService } from ".";

export interface IBasicCartProduct {
  id: number;
  quantity: number;
}
export interface IAddToCartPayload {
  userId: number;
  products: IBasicCartProduct[];
}

export const cartService = ApiService.injectEndpoints({
  endpoints: (builder) => ({
    addToCart: builder.mutation<ICart, IAddToCartPayload>({
      query: (body) => ({
        url: "/carts/add",
        method: "Post",
        body,
      }),
    }),
    updateCart: builder.mutation<
      ICart,
      { id: number; products: IBasicCartProduct[] }
    >({
      query: (body) => ({
        url: `/carts/${body.id}`,
        method: "Put",
        body,
      }),
    }),
    removeFromCart: builder.mutation<ICart, number>({
      query: (id) => ({
        url: `/carts/${id}`,
        method: "Delete",
      }),
    }),
  }),
  // @ts-ignore
  overrideExisting: module.hot?.status() === "apply",
});

export const {
  endpoints: cartServiceEndpoints,
  useAddToCartMutation,
  useRemoveFromCartMutation,
  useUpdateCartMutation,
} = cartService;
