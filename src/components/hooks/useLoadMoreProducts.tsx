import { IProduct } from "@/common/types/global";
import { useLazyGetProductsQuery } from "@/redux/services/products.service";
import { useCallback, useEffect, useState } from "react";

function useLoadMoreProducts({ limit }: { limit: number } = { limit: 10 }) {
  const [skip, setSkip] = useState(0);
  const [products, setProducts] = useState<IProduct[]>([]);
  const [getProducts, { data, isFetching, ...queryInfo }] =
    useLazyGetProductsQuery();

  const handleGetProducts = useCallback(async () => {
    try {
      const response = await getProducts({
        limit,
        skip: skip || 0,
      }).unwrap();
      if (skip === 0) {
        setProducts(response.products); // in dev environment strict  mode useEffect will be called twice, so we need to ensure initial product is set once
      } else {
        setProducts((prev) => [...prev, ...response.products]);
      }
      setSkip((prevSkip) => prevSkip + limit);
    } catch (err) {}
  }, [getProducts, limit, skip]);

  useEffect(() => {
    if (!products?.length && !isFetching) {
      console.log({ products, isFetching });
      handleGetProducts();
    }
  }, [handleGetProducts, isFetching, products, products?.length]);

  const loadMore = () => {
    handleGetProducts();
  };

  return { loadMore, products, isFetching, ...queryInfo };
}

export default useLoadMoreProducts;
