"use client";
import CartIcon from "@/assets/svg/cart.svg";
import { ICartProduct, IProduct } from "@/common/types/global";
import {
  addItemToCart,
  removeItemFromCart,
  updateCartItem,
} from "@/redux/features";
import { selectCart } from "@/redux/features/selectors";
import { useAddToCartMutation } from "@/redux/services/cart.service";
import { IconButton, Stack, Tooltip, Typography } from "@mui/material";
import { useMemo } from "react";
import toast from "react-hot-toast";
import { BiPlus } from "react-icons/bi";
import { BsTrash } from "react-icons/bs";
import { FaMinus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

export function CartActionButton({
  product,
  cartProduct,
}: {
  product?: IProduct;
  cartProduct?: ICartProduct;
}) {
  const cart = useSelector(selectCart);
  const [addToCart] = useAddToCartMutation();
  //   const [updateCart] = useUpdateCartMutation();

  const dispatch = useDispatch();
  const productId = product?.id || cartProduct?.id;

  const inCart = useMemo(
    () => cart?.products.find((p) => p.id === productId),
    [product, cart]
  );

  function handleAddToCart() {
    try {
      if (product && !inCart) {
        dispatch(addItemToCart({ product }));
        // note: a new cart get's created every call
        addToCart({
          userId: 1,
          products: cart.products
            .map((p) => ({
              id: p.id,
              quantity: p.quantity,
            }))
            .concat({ id: product?.id, quantity: 1 }),
        });
        toast.success("Product added to cart");
      }
    } catch (err) {
      //TODO: decide where to do rollback, for failure here or matcher
      //empty
    }
  }

  function handleDeleteItemFromCart() {
    try {
      if (productId && inCart) {
        dispatch(removeItemFromCart({ productId: productId }));
        toast.success("Product removed from cart");
      }
    } catch (err) {
      //empty
    }
  }

  function handleUpdateCart(quantity: number) {
    try {
      if (productId && inCart) {
        if (quantity <= 0) {
          handleDeleteItemFromCart();
        } else {
          dispatch(updateCartItem({ productId, quantity: quantity }));
          // update server api fails to update cart as cart is not tracked

          //   updateCart({
          //     id: cart?.id || 1,
          //     products: cart.products.map((p) => ({
          //       id: p.id,
          //       quantity: p.id === product?.id ? quantity : p.quantity,
          //     })),
          //   });
        }
        toast.success("Cart updated");
      }
    } catch (err) {
      //empty
    }
  }

  return !inCart ? (
    <Tooltip title="Add Product To Cart">
      <IconButton
        aria-label="add item to cart"
        onClick={handleAddToCart}
        className="circled-icon"
      >
        <CartIcon />
      </IconButton>
    </Tooltip>
  ) : (
    <Stack direction={"row"} alignItems={"center"} spacing={"10px"}>
      <Tooltip title="increase product quantity in cart">
        <IconButton
          size="small"
          aria-label="increase product quantity in cart"
          onClick={() => handleUpdateCart(inCart?.quantity + 1)}
        >
          <BiPlus />
        </IconButton>
      </Tooltip>
      <Typography fontSize="12px" aria-label="product quantity in cart">
        {inCart?.quantity}
      </Typography>
      <Tooltip title="decrease product quantity in cart">
        <IconButton
          size="small"
          aria-label="decrease product quantity in cart"
          onClick={() => handleUpdateCart(inCart?.quantity - 1)}
        >
          <FaMinus />
        </IconButton>
      </Tooltip>
      <Tooltip title="remove product from cart">
        <IconButton
          size="small"
          aria-label="remove product from cart"
          onClick={handleDeleteItemFromCart}
        >
          <BsTrash />
        </IconButton>
      </Tooltip>
    </Stack>
  );
}
