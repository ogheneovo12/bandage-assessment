import React from "react";
import Image from "next/image";
import { IProduct } from "@/common/types/global";

const FeaturedProductsMasonry = ({
  products = [],
}: {
  products: IProduct[];
}) => {
  const [first, ...rest] = products;

  return (
    <div className="flex wrapper">
      <div className=" min-w-[451px] flex-grow h-full p-2">
        <Image
          className="w-full h-full object-cover"
          src={first?.thumbnail}
          alt=""
        />
      </div>

      {rest?.length ? <SubProducts products={rest} /> : null}
    </div>
  );
};

function SubProducts({ products = [] }: { products: IProduct[] }) {
  const heightClass = products?.length >= 3 ? "h-2/4" : "h-full";
  const wrapClass = products?.length >= 3 ? "flex-wrap" : "";
  return (
    <div className={`flex ${wrapClass} md:w-1/2 h-full`}>
      {products?.map((product, i) => (
        <div
          key={`sub_${product.id}_${i}`}
          className={` p-2 flex-grow ${heightClass} min-half`}
        >
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
