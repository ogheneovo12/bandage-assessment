"use client";
import ProductList from "@/components/ProductList";
import useLoadMoreProducts from "@/components/hooks/useLoadMoreProducts";
import { Button, Typography } from "@mui/material";
import React from "react";

function Products() {
  const { products, loadMore, isFetching } = useLoadMoreProducts();
  return (
    <div>
      {isFetching && <div>Loading...</div>}
      <ProductList products={products} getLink={(p) => `/product/${p?.id}`} />
      <div className="flex justify-center my-6">
        <Button
          onClick={loadMore}
          variant="outlined"
          color="primary"
          sx={{ padding: "15px 40px" }}
          disabled={isFetching}
        >
          <Typography
            fontSize={"14px"}
            fontWeight={"bold"}
            color="primary.main"
          >
            LOAD MORE PRODUCTS
          </Typography>
        </Button>
      </div>
    </div>
  );
}

Products.propTypes = {};

export default Products;