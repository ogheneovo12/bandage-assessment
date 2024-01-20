import { RootState } from '@/redux/store';

export const selectCart = (state: RootState) => state.app.cart;
export const selectWishList = (state: RootState) => state.app.wishList;