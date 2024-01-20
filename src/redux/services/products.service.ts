import { IProduct } from "@/common/types/global";
import { ApiService } from ".";

export interface IGetProductsResponse {
  products: IProduct[];
  total: number;
  skip: number;
  limit: number;
}

export const productService = ApiService.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query<
      IGetProductsResponse,
      { skip?: number; limit?: number }
    >({
      query: (params) => ({
        url: "/products",
        params,
      }),
    }),
    getProduct: builder.query({
      query: (id) => `/products/${id}`,
    }),
  }),
  // @ts-ignore
  overrideExisting: module.hot?.status() === "apply",
});

export const {
  endpoints: ProductServiceEndpoints,
  useGetProductQuery,
  useGetProductsQuery,
  useLazyGetProductsQuery,
} = productService;
