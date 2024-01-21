"use client";
import React from "react";
import Image from "next/image";
import { IProduct } from "@/common/types/global";
import { Link, Typography } from "@mui/material";

const FeaturedProductsMasonry = ({
  products = [],
}: {
  products: IProduct[];
}) => {
  const [first, ...rest] = products;

  return (
    <div className="flex wrapper flex-col lg:flex-row lg:h-[500px] lg:overflow-hidden">
      <div className=" md:min-w-[452px] flex-grow h-[300px]  lg:h-full p-2 relative">
        <Image
          className="w-full h-full object-cover"
          src={first?.thumbnail}
          alt=""
        />
        <div className="absolute p-6 top-0 right-0 left-0">
          <Typography
            fontWeight={"bold"}
            variant="subtitle2"
            color="success.main"
          >
            {first?.stock} items
          </Typography>
          <Typography
            textTransform={"uppercase"}
            variant={"h1"}
            fontSize={{ xs: "24px", md: "40px" }}
            fontWeight={"bold"}
          >
            {first?.category}
          </Typography>
          <Link href={`/product/${first?.id}`}>
            <Typography variant="h6">Read More</Typography>
          </Link>
        </div>
      </div>

      {rest?.length ? <SubProducts products={rest?.slice(0, 3)} /> : null}
    </div>
  );
};

function SubProducts({ products = [] }: { products: IProduct[] }) {
  const heightClass = products?.length >= 2 ? "h-2/4" : "h-full";
  const wrapClass = products?.length >= 2 ? "flex-wrap" : "nowrap";
  return (
    <div className={`flex ${wrapClass} flex-col xsm:flex-row lg:w-1/2 h-full`}>
      {products?.map((product, i) => (
        <div
          key={`sub_${product.id}_${i}`}
          className={`relative p-2  ${heightClass} flex-grow xsm:basis-2/4 h-[300px] lg:h-auto lg:min-h-[50%]`}
        >
          <div className="absolute p-6 top-0 right-0 left-0">
            <Typography
              fontWeight={"bold"}
              variant="subtitle2"
              color="success.main"
            >
              {product?.stock} items
            </Typography>
            <Typography textTransform={"uppercase"} variant={"h3"}>
              {product?.category}
            </Typography>
            <Link href={`/product/${product?.id}`}>
              <Typography variant="h6">ReadMore</Typography>
            </Link>
          </div>
          <Image
            className="w-full h-full object-cover"
            src={product.thumbnail}
            alt=""
          />
        </div>
      ))}
    </div>
  );
}

export default FeaturedProductsMasonry;
