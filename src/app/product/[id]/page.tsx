import { ProductServiceEndpoints } from "@/redux/services/products.service";
import { store } from "@/redux/store";

const getProduct = async (productId: string) => {
  try {
    const response = await store
      .dispatch(ProductServiceEndpoints.getProduct.initiate(productId))
      .unwrap();

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

  return <div>{product?.name}</div>;
}
