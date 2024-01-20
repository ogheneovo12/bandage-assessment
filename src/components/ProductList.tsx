import { IProduct } from "@/common/types/global";
import { formatCurrency } from "@/common/utils/currency.utils";
import { Grid } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export function ProductItem({
  product,
  getLink,
}: {
  product: IProduct;
  getLink?: (product: IProduct) => string;
}) {
  const Wrapper = ({ children }: React.PropsWithChildren) =>
    getLink ? <Link href={getLink(product)}>{children}</Link> : <>{children}</>;

  const discountPrice =
    product.price - (product.price * product.discountPercentage) / 100;
  return (
    <Wrapper>
      <div>
        <div className="relative h-[233px]">
          <Image
            fill
            className="w-full h-full object-cover"
            src={product.thumbnail}
            alt={product.title}
          />
        </div>

        <div className="p-6 text-center">
          <h5 className="text-base text-color-text-primary font-bold">
            {product.title}
          </h5>
          <p className="my-[10px] text-sm font-bold text-secondary">
            {product.brand}
          </p>
          <p className="text-base">
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
}: {
  products: IProduct[];
  getLink?: (product: IProduct) => string;
}) {
  return (
    <Grid container columns={15} spacing={{ xs: "0px", sm: "30px" }}>
      {products.map((product) => (
        <Grid item xs={15} sm={5} lg={3} key={product.id}>
          <ProductItem product={product} getLink={getLink} />
        </Grid>
      ))}
    </Grid>
  );
}

export default ProductList;
