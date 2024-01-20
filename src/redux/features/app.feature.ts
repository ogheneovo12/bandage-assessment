import { HYDRATE_ACTION_TYPE } from "@/common/constants";
import { ICart, IProduct } from "@/common/types/global";
import { RootState } from "@/redux/store";

import {
  calculateCart,
  mapProductToCartProduct,
} from "@/common/utils/cart.utils";
import { createAction, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { cartServiceEndpoints } from "../services/cart.service";

export interface IAppState {
  wishList: IProduct[];
  cart: ICart;
}

// Initial state
const initialState: IAppState = {
  wishList: [],
  cart: {
    id: 0,
    products: [],
    total: 0,
    discountedTotal: 0,
    userId: 1,
    totalProducts: 0,
    totalQuantity: 0,
  },
};

const hydrate = createAction<RootState>(HYDRATE_ACTION_TYPE);

// Actual Slice
export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    addToWishList(
      state,
      {
        payload: { product },
      }: PayloadAction<{
        product: IProduct;
      }>
    ) {
      //remove existing
      const filtered = state.wishList.filter(
        (wish) => wish?.id !== product?.id
      );
      state.wishList = [...filtered, product];
    },
    removeFromWishList(
      state,
      { payload: { productId } }: PayloadAction<{ productId: number }>
    ) {
      state.wishList = state.wishList.filter((wish) => wish?.id !== productId);
    },
    addItemToCart(state, { payload }: PayloadAction<{ product: IProduct }>) {
      //check if item already exists then update quantity
      const existingProduct = state.cart?.products.find(
        (product) => product.id === payload.product.id
      );
      const cartProduct = mapProductToCartProduct(payload.product);

      if (existingProduct) {
        state.cart = {
          ...state.cart,
          products: state.cart.products.map((product) => {
            if (product.id === payload.product.id) {
              return cartProduct;
            }
            return product;
          }),
        };
        return;
      } else {
        state.cart = {
          ...state.cart,
          products: [...state.cart.products, cartProduct],
        };
      }
      state.cart = calculateCart(state.cart);
    },
    updateCartItem(
      state,
      { payload }: PayloadAction<{ productId: number; quantity: number }>
    ) {
      console.log(payload);
      state.cart = {
        ...state.cart,
        products: state.cart.products.map((product) => {
          if (product.id === payload.productId) {
            return {
              ...product,
              quantity: payload.quantity,
            };
          }
          return product;
        }),
      };
      state.cart = calculateCart(state.cart);
    },
    removeItemFromCart(
      state,
      { payload: { productId } }: PayloadAction<{ productId: number }>
    ) {
      state.cart = {
        ...state.cart,
        products: state.cart.products.filter(
          (product) => product.id !== productId
        ),
      };
      state.cart = calculateCart(state.cart);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(hydrate, (state, action) => {
      return {
        ...state,
        ...action.payload.app,
      };
    });
    builder.addMatcher(
      cartServiceEndpoints.addToCart.matchFulfilled,
      (state, { payload }) => {
        state.cart = payload;
      }
    );

    // MIGRATED FROM HERE TO REDUCER BECAUSE THE API WASN'T KEEPING TRACK OF CART
    // HENCE UPDATE AND REMOVAL OF CART KEPT RETURNING 404

    // builder.addMatcher(cartServiceEndpoints.updateCart.matchFulfilled, (state, { payload }) => {
    //   state.cart = payload;
    // }),
    // builder.addMatcher(cartServiceEndpoints.removeFromCart.matchFulfilled, (state, { payload }) => {
    //   state.cart = payload;
    // }),
  },
});

export const {
  addToWishList,
  removeFromWishList,
  addItemToCart,
  removeItemFromCart,
  updateCartItem,
} = appSlice.actions;

export default appSlice.reducer;
