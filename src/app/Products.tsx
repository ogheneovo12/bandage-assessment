"use client";
import { getErrorMessage } from "@/common/utils/fetch.utils";
import ProductList, { ProductListLoader } from "@/components/ProductList";
import useLoadMoreProducts from "@/components/hooks/useLoadMoreProducts";
import { Alert, AlertTitle, Box, Button, Typography } from "@mui/material";
import React from "react";

function Products({
  hideLoadMore = false,
  contentClassName,
}: {
  hideLoadMore?: boolean;
  contentClassName?: string;
}) {
  const { products, loadMore, isFetching, error, isError } =
    useLoadMoreProducts();
  return (
    <div>
      {!products?.length && isError ? (
        <Box>
          <Alert severity="error">
            <AlertTitle>Oops!! Error Occured</AlertTitle>
            {getErrorMessage(error)}
          </Alert>
        </Box>
      ) : null}
      <ProductList
        products={products}
        getLink={(p) => `/product/${p?.id}`}
        contentClassName={contentClassName}
      />
      {isFetching && <ProductListLoader />}
      <div className="flex justify-center my-6">
        {!hideLoadMore && (
          <Button
            data-aos="fade-dpn"
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
              {products?.length > 0 ? "LOAD MORE PRODUCTS" : "LOAD PRODUCTS"}
            </Typography>
          </Button>
        )}
      </div>
    </div>
  );
}

Products.propTypes = {};

export default Products;
