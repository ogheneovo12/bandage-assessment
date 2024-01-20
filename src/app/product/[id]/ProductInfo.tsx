"use client";
import CartIcon from "@/assets/svg/cart.svg";
import EyeIcon from "@/assets/svg/eye.svg";
import StarHalf from "@/assets/svg/star-empty.svg";
import StarIcon from "@/assets/svg/star.svg";
import WishlistIcon from "@/assets/svg/wishlist.svg";
import { IProduct } from "@/common/types/global";
import { formatCurrency } from "@/common/utils/currency.utils";
import { addToWishList, removeFromWishList } from "@/redux/features";
import { selectWishList } from "@/redux/features/selectors";
import { useAddToCartMutation } from "@/redux/services/cart.service";
import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import cx from "classnames";
import { CartActionButton } from "./CartActionButton";

const colors = ["#23A6F0", "#2DC071", "#E77C40", "#252B42"];

function ProductInfo({ product }: { product?: IProduct }) {
  const wishlist = useSelector(selectWishList);
  const [addToCart] = useAddToCartMutation();
  const dispatch = useDispatch();
  const inWishList = useMemo(
    () => !!wishlist?.find((p) => p.id === product?.id),
    [product, wishlist]
  );

  function handleAddToCart() {
    try {
      if (product) {
        addToCart({ userId: 1, products: [{ id: product?.id, quantity: 1 }] });
      }
    } catch (err) {
      //empty
    }
  }

  function toggleWishList() {
    if (product) {
      if (inWishList) {
        dispatch(removeFromWishList({ productId: product?.id }));
      } else {
        dispatch(addToWishList({ product }));
      }
    }
  }

  return (
    <Box padding={"24px"} sx={{ flexGrow: "1" }}>
      <Typography variant="h4">{product?.title}</Typography>
      <Stack mt="12px" direction={"row"} spacing={"10px"} alignItems={"center"}>
        <Stack direction={"row"} spacing={"5px"}>
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarHalf />
        </Stack>
        <Typography variant="subtitle2" fontWeight={"700"}>
          10 Reviews
        </Typography>
      </Stack>
      <Typography variant="h3" mt="20px">
        {formatCurrency(product?.price?.toFixed(2) || "0", "$")}
      </Typography>
      <Stack direction={"row"} alignItems={"center"} mt="5px">
        <Typography variant="h6" color="text.secondary">
          Availability :
        </Typography>
        <Typography ml="5px" variant="h6" color="primary.main">
          {(product?.stock || 0) > 0 ? "In Stock" : "Out of Stock"}
        </Typography>
      </Stack>
      <Divider sx={{ mt: "119px", mb: "29px" }} />
      <Stack direction={"row"} spacing={"10px"}>
        {colors?.map((color) => (
          <div
            className="w-[30px] h-[30px] rounded-full"
            style={{ backgroundColor: color }}
            key={color}
          ></div>
        ))}
      </Stack>
      <Stack mt="67px" direction={"row"} spacing={"10px"}>
        <Button
          variant="contained"
          sx={{ boxShadow: "none", width: "150px", padding: "10px 20px" }}
          color="primary"
        >
          <Typography
            textTransform={"capitalize"}
            fontWeight={"700"}
            fontSize={"14px"}
            color={"white"}
          >
            Select Options
          </Typography>
        </Button>
        <Stack direction={"row"} spacing={"10px"}>
          <button
            className={cx("circled-icon", {
              "bg-secondary text-white": inWishList,
            })}
            onClick={toggleWishList}
          >
            <WishlistIcon />
          </button>
          <CartActionButton product={product} />
          <button className="circled-icon">
            <EyeIcon />
          </button>
        </Stack>
      </Stack>
    </Box>
  );
}

ProductInfo.propTypes = {};

export default ProductInfo;
