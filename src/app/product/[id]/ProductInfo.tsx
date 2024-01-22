"use client";
import EyeIcon from "@/assets/svg/eye.svg";
import StarHalf from "@/assets/svg/star-empty.svg";
import StarIcon from "@/assets/svg/star.svg";
import WishlistIcon from "@/assets/svg/wishlist.svg";
import { IProduct } from "@/common/types/global";
import { formatCurrency } from "@/common/utils/currency.utils";
import { addToWishList, removeFromWishList } from "@/redux/features";
import { selectWishList } from "@/redux/features/selectors";
import {
  Box,
  Button,
  Divider,
  IconButton,
  NoSsr,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import cx from "classnames";
import { useMemo } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { CartActionButton } from "../../../components/CartActionButton";

const colors = ["#23A6F0", "#2DC071", "#E77C40", "#252B42"];

function ProductInfo({ product }: { product?: IProduct }) {
  const wishlist = useSelector(selectWishList);
  const dispatch = useDispatch();
  const inWishList = useMemo(
    () => !!wishlist?.find((p) => p.id === product?.id),
    [product, wishlist]
  );

  function toggleWishList() {
    if (product) {
      if (inWishList) {
        dispatch(removeFromWishList({ productId: product?.id }));
      } else {
        dispatch(addToWishList({ product }));
      }
      toast.success("WishList Update");
    }
  }
  const { price = 0, discountPercentage = 0 } = product || {};
  const discountedPrice = price - price * (discountPercentage / 100);

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
      <Stack mt="20px" direction={"row"} spacing={"5px"} alignItems={"center"}>
        <Typography
          variant="h3"
          mt="20px"
          sx={{ textDecoration: "line-through" }}
          color="secondary.light"
        >
          {formatCurrency(product?.price?.toFixed(2) || "0", "$")}
        </Typography>
        <Typography variant="h3">
          {formatCurrency(discountedPrice?.toFixed(2), "$")}
        </Typography>
      </Stack>

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
      <Stack mt="67px" direction={{ xs: "column", sm: "row" }} spacing={"10px"}>
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
          <Tooltip title="add product to wishlist">
            <IconButton
              aria-label="add product to wishlist"
              className={cx("circled-icon", {
                "!bg-secondary !text-white": inWishList,
              })}
              onClick={toggleWishList}
            >
              <WishlistIcon />
            </IconButton>
          </Tooltip>

          <IconButton className="circled-icon">
            <EyeIcon />
          </IconButton>
          <NoSsr>
            <CartActionButton product={product} />
          </NoSsr>
        </Stack>
      </Stack>
    </Box>
  );
}

ProductInfo.propTypes = {};

export default ProductInfo;
