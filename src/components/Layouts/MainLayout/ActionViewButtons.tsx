"use client";
import CartIcon from "@/assets/svg/cart.svg";
import WishlistIcon from "@/assets/svg/wishlist.svg";
import Cart from "@/components/Cart";
import Wishlist from "@/components/WishLists";
import useDialogOrPopup, {
  DialogOrPopup,
} from "@/components/hooks/useDialogOrPopup";
import { selectCart, selectWishList } from "@/redux/features/selectors";
import { IconButton, NoSsr } from "@mui/material";
import cx from "classnames";
import { useSelector } from "react-redux";

export const CartViewButton = ({
  className = "flex",
}: {
  className?: string;
}) => {
  const cart = useSelector(selectCart);
  const { open, handleClickOpen, handleCloseDialog, anchorEl } =
    useDialogOrPopup();
  const id = open ? "cart-popover" : undefined;

  return (
    <NoSsr>
      <div
        className={cx("p-[15px] text-xs items-center text-primary", className)}
      >
        <IconButton
          aria-describedby={id}
          onClick={handleClickOpen}
          color="primary"
          className="mr-[5px]"
        >
          <CartIcon />
        </IconButton>
        {cart?.totalQuantity}
      </div>
      <DialogOrPopup
        id={id}
        open={open}
        onClose={handleCloseDialog}
        anchorEl={anchorEl}
        ariaTitle="Cart modal"
      >
        <Cart />
      </DialogOrPopup>
    </NoSsr>
  );
};

export function WishlistViewButton({
  className = "flex",
}: {
  className?: string;
}) {
  const wishlist = useSelector(selectWishList);
  const { open, handleClickOpen, handleCloseDialog, anchorEl } =
    useDialogOrPopup();

  const id = open ? "wishlist-popover" : undefined;

  return (
    <NoSsr>
      <div
        className={cx("p-[15px]  text-xs items-center text-primary", className)}
      >
        <IconButton
          aria-describedby={id}
          onClick={handleClickOpen}
          color="primary"
          className="mr-[5px]"
        >
          <WishlistIcon />
        </IconButton>
        {wishlist?.length}
      </div>

      <DialogOrPopup
        id={id}
        open={open}
        onClose={handleCloseDialog}
        anchorEl={anchorEl}
        ariaTitle="wishlist modal"
      >
        <Wishlist />
      </DialogOrPopup>
    </NoSsr>
  );
}
