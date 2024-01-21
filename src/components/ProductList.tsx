import { IProduct } from "@/common/types/global";
import { formatCurrency } from "@/common/utils/currency.utils";
import { Grid, Skeleton, Stack } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { v4 } from "uuid";

export function ProductItem({
  product,
  getLink,
  contentClassName = "text-center",
}: {
  product: IProduct;
  getLink?: (product: IProduct) => string;
  contentClassName?: string;
}) {
  const Wrapper = ({ children }: React.PropsWithChildren) =>
    getLink ? <Link href={getLink(product)}>{children}</Link> : <>{children}</>;

  const discountPrice =
    product.price - (product.price * product.discountPercentage) / 100;
  return (
    <Wrapper>
      <div data-aos="flip-right">
        <div className="relative h-[233px]">
          <Image
            fill
            className="w-full h-full object-cover"
            src={product.thumbnail}
            alt={product.title}
          />
        </div>

        <div className={`p-6  bg-white ${contentClassName}`}>
          <h5 className="text-base text-color-text-primary font-bold">
            {product.title}
          </h5>
          <p className="my-[10px] text-sm font-bold text-secondary">
            {product.brand}
          </p>
          <p className="text-base align-middle">
            <span className="text-muted">
              {formatCurrency(discountPrice?.toFixed(2), "$")}
            </span>{" "}
            <span className="font-bold text-secondary">
              {formatCurrency(product.price?.toFixed(2), "$")}
            </span>
          </p>
        </div>
      </div>
    </Wrapper>
  );
}

export function ProductList({
  products = [],
  getLink,
  contentClassName,
}: {
  products: IProduct[];
  getLink?: (product: IProduct) => string;
  contentClassName?: string;
}) {
  return (
    <Grid container columns={15} spacing={{ xs: "0px", sm: "30px" }}>
      {products.map((product) => (
        <Grid item xs={15} sm={5} lg={3} key={product.id}>
          <ProductItem
            product={product}
            getLink={getLink}
            contentClassName={contentClassName}
          />
        </Grid>
      ))}
    </Grid>
  );
}

export function ProductSkeleton() {
  return (
    <div>
      <Skeleton
        animation="wave"
        variant="rectangular"
        width={"100%"}
        height={233}
      />
      <div className={`p-6  bg-white flex flex-col items-center`}>
        <Skeleton
          animation="wave"
          variant="rounded"
          height={10}
          width={"70%"}
        />
        <Skeleton
          variant="rounded"
          sx={{ my: "20px" }}
          height={10}
          width={"80%"}
          animation="wave"
        />
        <Stack width={"100%"} spacing={"4px"} direction={"row"}>
          <Skeleton
            animation="wave"
            variant="rounded"
            height={10}
            width={"50%"}
          />
          <Skeleton
            animation="wave"
            variant="rounded"
            height={10}
            width={"50%"}
          />
        </Stack>
      </div>
    </div>
  );
}

export function ProductListLoader() {
  return (
    <Grid container columns={15} spacing={{ xs: "0px", sm: "30px" }}>
      {Array.from({ length: 5 }).map((product) => (
        <Grid item xs={15} sm={5} lg={3} key={v4()}>
          <ProductSkeleton />
        </Grid>
      ))}
    </Grid>
  );
}

export default ProductList;
