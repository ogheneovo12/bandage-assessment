import avatarImg from "@/assets/images/user1.jpg";
import { posts, products } from "@/common/mock/dummy";
import FeaturedProductsMasonry from "@/components/FeaturedProductMasonry";
import PostCard from "@/components/PostCard";
import TestimonialCard from "@/components/TestimonialCard";
import { Button, Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { v4 } from "uuid";
import FeatureList from "./FeatureList";
import Products from "./Products";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bandage - Home",
};

export default function Home() {
  return (
    <>
      <section className="py-24">
        <Container data-aos="fade-dowm">
          <FeaturedProductsMasonry products={products} />
        </Container>
      </section>
      <section>
        <Container>
          <div data-aos="fade-up" className="text-center mb-[56px]">
            <Typography
              variant="subtitle1"
              visibility={{ xs: "hidden", sm: "visible" }}
            >
              Featured Products
            </Typography>
            <Typography variant="h3">BESTSELLER PRODUCTS</Typography>
            <Typography variant="subtitle2">
              Problems trying to resolve the conflict between
            </Typography>
          </div>
          <Products />
        </Container>
      </section>
      <section className="py-20">
        <Container>
          <div data-aos="fade-down" className="text-center mb-[56px]">
            <Typography variant="subtitle1">Featured Products</Typography>
            <Typography variant="h3">THE BEST SERVICES</Typography>
            <Typography variant="subtitle2">
              Problems trying to resolve the conflict between
            </Typography>
          </div>
          <FeatureList />
        </Container>
      </section>
      <section className="py-20">
        <Container>
          <div data-aos="flip-down" className="text-center mb-[56px]">
            <Typography
              variant="subtitle2"
              fontWeight={"bold"}
              color="primary.main"
            >
              Practice Advice
            </Typography>
            <Typography variant="h2">Featured Posts</Typography>
          </div>
          <div className="max-w-[1050px] mx-auto">
            <Grid
              container
              rowSpacing={2}
              columnSpacing={{ xs: "0px", sm: "10px" }}
              justifyContent={"center"}
            >
              {posts.map((post) => (
                <Grid item xs={12} sm={6} md={4} key={v4()}>
                  <PostCard post={post} />
                </Grid>
              ))}
            </Grid>
          </div>
        </Container>
      </section>
      <section className="py-20 overflow-hidden">
        <Container>
          <div className="max-w-[1050px] mx-auto">
            <Grid container columnSpacing={{ xs: "0px", sm: "10px" }}>
              <Grid data-aos="fade-right" item xs={12} md={6}>
                <div className="relative">
                  <Typography textAlign={"center"} variant="h3" mb={"28px"}>
                    What they say about us
                  </Typography>
                  <TestimonialCard
                    avatar={avatarImg?.src}
                    testimony="Slate helps you see how many more days you need to work to 
reach your financial goal."
                    fullname="Regina Miles"
                    role="Designer"
                  />
                </div>
              </Grid>
              <Grid data-aos="fade-left" item container xs={12} md={6} spacing={"5px"}>
                {Array.from({ length: 9 }).map((_, index) => (
                  <Grid item key={v4()} xs={4}>
                    <div className="relative w-full h-[112px] sm:h-[142px]">
                      <Image
                        fill
                        src={"https://picsum.photos/200"}
                        alt="Picture of the author"
                        className="object-cover "
                        sizes="(max-width: 600px) 100vw, 50vw"
                      />
                    </div>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </div>
        </Container>
      </section>
      <section className="overflow-hidden bg-cta bg-center bg-cover min-h-screen flex items-center justify-center">
        <Container className="text-center">
          <Stack
            spacing={"30px"}
            maxWidth={"571px"}
            mx="auto"
            alignItems={"center"}
            data-aos="fade-down-left"
          >
            <Typography variant="h6" color={"primary.main"}>
              Designing Better Experience
            </Typography>
            <Typography variant="h2">
              Problems trying to resolve the conflict between
            </Typography>
            <Typography variant="subtitle2">
              Problems trying to resolve the conflict between the two major
              realms of Classical physics:
            </Typography>
            <Typography variant="h3" color="secondary.main">
              $16.48
            </Typography>
            <Button
              variant="contained"
              color="primary"
              sx={{ padding: "15px 40px" }}
            >
              <Typography fontSize={"14px"} fontWeight={"bold"} color="white">
                ADD YOUR CALL TO ACTION
              </Typography>
            </Button>
          </Stack>
        </Container>
      </section>
    </>
  );
}
