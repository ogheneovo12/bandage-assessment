"use client";
import CartIcon from "@/assets/svg/cart.svg";
import { IProduct } from "@/common/types/global";
import {
  addItemToCart,
  removeItemFromCart,
  updateCartItem,
} from "@/redux/features";
import { selectCart } from "@/redux/features/selectors";
import {
  useAddToCartMutation,
  useRemoveFromCartMutation,
  useUpdateCartMutation,
} from "@/redux/services/cart.service";
import { IconButton, Stack, Typography } from "@mui/material";
import { removeItem } from "localforage";
import { useMemo } from "react";
import { BsTrash } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";

export function CartActionButton({ product }: { product?: IProduct }) {
  const cart = useSelector(selectCart);
  const [addToCart] = useAddToCartMutation();
  const [updateCart] = useUpdateCartMutation();

  const dispatch = useDispatch();

  const inCart = useMemo(
    () => cart?.products.find((p) => p.id === product?.id),
    [product, cart]
  );

  function handleAddToCart() {
    try {
      if (product && !inCart) {
        dispatch(addItemToCart({ product }));
        //call on server
        addToCart({ userId: 1, products: [{ id: product?.id, quantity: 1 }] });
      }
    } catch (err) {
      //TODO: decide where to do rollback, for failure here or matcher
      //empty
    }
  }

  function handleDeleteItemFromCart() {
    try {
      if (product && inCart) {
        dispatch(removeItemFromCart({ productId: product?.id }));
      }
    } catch (err) {
      //empty
    }
  }

  function handleUpdateCart(quantity: number) {
    try {
      if (product && inCart) {
        if (quantity <= 0) {
          handleDeleteItemFromCart();
        } else {
          dispatch(
            updateCartItem({ productId: product?.id, quantity: quantity })
          );
          // update server api fails to update cart as cart is not tracked
          //   updateCart({
          //     id: cart?.id || 1,
          //     products: cart.products.map((p) => ({
          //       id: p.id,
          //       quantity: p.id === product?.id ? quantity : p.quantity,
          //     })),
          //   });
        }
      }
    } catch (err) {
      //empty
    }
  }

  return !inCart ? (
    <button onClick={handleAddToCart} className="circled-icon">
      <CartIcon />
    </button>
  ) : (
    <Stack direction={"row"}>
      <button onClick={() => handleUpdateCart(inCart?.quantity + 1)}>+</button>
      <Typography>{inCart?.quantity}</Typography>
      <button onClick={() => handleUpdateCart(inCart?.quantity - 1)}>-</button>
      <IconButton onClick={handleDeleteItemFromCart}>
        <BsTrash />
      </IconButton>
    </Stack>
  );
}
