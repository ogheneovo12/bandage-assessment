"use client";
import CartIcon from "@/assets/svg/cart.svg";
import WishlistIcon from "@/assets/svg/wishlist.svg";
import Wishlist from "@/components/WishLists";
import { selectCart, selectWishList } from "@/redux/features/selectors";
import { Popover } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

export const CartViewButton = () => {
  const cart = useSelector(selectCart);

  return (
    <button className="p-[15px] flex text-xs items-end text-primary">
      <CartIcon className="mr-[5px]" /> {cart?.totalQuantity}
    </button>
  );
};

export function WishlistViewButton() {
  const wishlist = useSelector(selectWishList);
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "wishlist-popover" : undefined;

  return (
    <>
      <button
        aria-describedby={id}
        className="p-[15px] flex text-xs items-end text-primary"
        onClick={handleClick}
      >
        <WishlistIcon className="mr-[5px]" /> {wishlist?.length}
      </button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Wishlist />
      </Popover>
    </>
  );
}
