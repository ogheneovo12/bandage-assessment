import { ApiService } from "@/redux/services";
import { ProductServiceEndpoints } from "@/redux/services/products.service";
import { store } from "@/redux/store";
import { Box, Typography } from "@mui/material";

// USED SERVER SIDE HERE TO SHOW HOW TO USE SERVER SIDE DATA FETCHING
// CLIENT SIDE CAN BE USED AS WELL
// DOWNSIDE OF SERVER SIDE IS VERCEL HAS A 10 SECOND TIMEOUT LIMIT FOR EDGE FUNCTIONS FOR FREE TIER
const getProduct = async (productId: string) => {
  try {
    const response = await store
      .dispatch(ProductServiceEndpoints.getProduct.initiate(productId))
      .unwrap();
    store.dispatch(ApiService.util.resetApiState()); //cancel all timers
    return response;
  } catch (err) {}
  return null;
};

export default async function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  const product = await getProduct(params.id);
  console.log({ product });

  return (
    <>
      <header>
        <h1>Product Page</h1>
        <Box>
          <Typography>{product?.name}</Typography>
        </Box>
      </header>
    </>
  );
}
