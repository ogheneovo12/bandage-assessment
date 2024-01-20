import Products from "@/app/Products";
import Brand1 from "@/assets/images/brands/fa-brands-1.svg";
import Brand2 from "@/assets/images/brands/fa-brands-2.svg";
import Brand3 from "@/assets/images/brands/fa-brands-3.svg";
import Brand4 from "@/assets/images/brands/fa-brands-4.svg";
import Brand5 from "@/assets/images/brands/fa-brands-5.svg";
import Brand6 from "@/assets/images/brands/fa-brands-6.svg";
import ArrowNextIcon from "@/assets/svg/arrow-next.svg";
import { IProduct } from "@/common/types/global";
import { ApiService } from "@/redux/services";
import { ProductServiceEndpoints } from "@/redux/services/products.service";
import { store } from "@/redux/store";
import { Box, Breadcrumbs, Container, Divider, Link, Stack, Typography } from "@mui/material";
import ProductExtraInfoTabs from "./ProductExtraInfoTabs";
import { ProductImageCarousel } from "./ProductImageCarousel";
import ProductInfo from "./ProductInfo";



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
  } catch (err) { }

};

export default async function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  const product: IProduct | undefined = await getProduct(params.id);


  return (
    <>
      <header className="bg-lightgray">
        <Container>
          <Box minHeight={"92px"} padding={"24px 0px"}>
            <Breadcrumbs separator={<ArrowNextIcon className="text-[#BDBDBD] text-sm font-bold" />}>
              <Link href="/" >
                <Typography color={"text.primary"} fontWeight={"bold"} fontSize={"14px"}>Home</Typography>
              </Link>
              <Typography color={"secondary.light"} fontWeight={"bold"} fontSize={"14px"}>
                Shop
              </Typography>
            </Breadcrumbs>
          </Box>
          <Box minHeight={"598px"} >
            <Stack direction={"row"} spacing={"30px"}>
              <ProductImageCarousel productImages={product?.images} />
               <ProductInfo product={product} />
            </Stack>
          </Box>
        </Container>

      </header>
      <section>
        <Container>
          <ProductExtraInfoTabs product={product} />
        </Container>
      </section>
      <section className="bg-lightgray py-12">
        <Container>
          <Typography variant="h3">BESTSELLER PRODUCTS </Typography>
          <Divider sx={{ color: "primary.secondary", my: "24px" }} />
          <Products hideLoadMore contentClassName="text-left" />
          <Stack padding={'50px 0px'} direction={"row"} alignItems={"center"} justifyContent={"space-evenly"} flexWrap={"wrap"}>
            <Brand1 className="m-2" />
            <Brand2 className="m-2" />
            <Brand3 className="m-2" />
            <Brand4 className="m-2" />
            <Brand5 className="m-2" />
            <Brand6 className="m-2" />
          </Stack>
        </Container>

      </section>
    </>
  );
}
