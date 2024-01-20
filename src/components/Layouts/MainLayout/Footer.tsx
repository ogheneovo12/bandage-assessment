import {
  Box,
  Button,
  Container,
  Grid,
  Link,
  Stack,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import React from "react";
import FacebookSolidIcon from "@/assets/svg/facebook-solid.svg";
import TwitterSolidIcon from "@/assets/svg/twitter-solid.svg";
import InstagramSolidIcon from "@/assets/svg/instagram-solid.svg";

interface INavLink {
  title: string;
  link: string;
}

const footerLinks: Record<string, INavLink[]> = {
  "Company Info": [
    {
      title: "About Us",
      link: "/about",
    },
    {
      title: "Careers",
      link: "/careers",
    },
    {
      title: "We are hiring",
      link: "/jobs",
    },
    {
      title: "Blog",
      link: "/blog",
    },
  ],
  legal: [
    {
      title: "About Us",
      link: "/about",
    },
    {
      title: "Careers",
      link: "/careers",
    },
    {
      title: "We are hiring",
      link: "/jobs",
    },
    {
      title: "Blog",
      link: "/blog",
    },
  ],
  Features: [
    {
      title: "Business Marketing",
      link: "/business-marketing",
    },
    {
      title: "User Analytic",
      link: "/user-analytic",
    },
    {
      title: "Live Chat",
      link: "/live-chat",
    },
    {
      title: "Unlimited Support",
      link: "/unlimited-support",
    },
  ],
  Resources: [
    {
      title: "IOS & Android",
      link: "/ios-and-android",
    },
    {
      title: "Watch a Demo",
      link: "/watch-a-demo",
    },
    {
      title: "Customers",
      link: "/customers",
    },
    {
      title: "API",
      link: "/api",
    },
  ],
};

const SubTextField = styled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    borderRadius: "5px 0px 0px 5px",
    backgroundColor: "#F9F9F9",
  },
  "& .MuiInputBase-input": {
    fontSize: "14px",
    lineHeight: "28px",
    color: theme.palette.text.secondary,
    border: "none",
  },
  "& .MuiOutlinedInput-root:hover fieldset": {
    border: "1px solid #E6E6E6",
  },
  "& input + fieldset": {
    border: "1px solid #E6E6E6",
  },
  "& input:hover + fieldset": {
    border: "1px solid #E6E6E6",
    outline: "none",
  },
}));

const Footer = () => {
  return (
    <footer className="">
      <Box className="bg-lightgray px-[47px]">
        <Container sx={{ borderBottom: "1px solid #E6E6E6" }}>
          <Stack
            justifyContent={"space-between"}
            alignItems={{ xs: "flex-start", md: "center" }}
            padding={"40px 0"}
            direction={{ xs: "column", md: "row" }}
            spacing={"20px"}
          >
            <Typography variant="h3">Bandage</Typography>
            <Stack direction={"row"} spacing={"20px"} mt={"20px"}>
              <FacebookSolidIcon />
              <TwitterSolidIcon />
              <InstagramSolidIcon />
            </Stack>
          </Stack>
        </Container>
      </Box>
      <Box className="px-[47px]">
        <Container>
          <Stack
            direction={"row"}
            padding={"50px 0px"}
            flexWrap={{ xs: "wrap", md: "nowrap" }}
          >
            <Grid container rowSpacing={"30px"} mb={{ xs: "30px", md: "0px" }}>
              {Object.keys(footerLinks).map((key) => (
                <Grid item xs={12} sm={6} tablet={4} md={3} key={key}>
                  <Stack spacing={"10px"}>
                    <Typography variant="h6" mb="10px">
                      {key}
                    </Typography>
                    {footerLinks[key].map((link) => (
                      <Link
                        href={link.link}
                        key={link.title}
                        variant="subtitle2"
                        fontWeight={"bold"}
                      >
                        {link.title}
                      </Link>
                    ))}
                  </Stack>
                </Grid>
              ))}
            </Grid>

            <Box width={"100%"} maxWidth={"321px"}>
              <Typography
                fontSize={"16px"}
                fontWeight={"700"}
                variant="h5"
                color="text.primary"
                mb={"20px"}
              >
                Get in touch
              </Typography>
              <Stack direction={"row"} borderRadius={"5px"}>
                <SubTextField sx={{ borderRadius: "5px 0px 5px 0px" }} />
                <Button
                  variant="contained"
                  color="primary"
                  sx={{
                    borderRadius: "0px 5px 5px 0px",
                    boxShadow: "none",
                    padding: "15px 22.5px",
                  }}
                >
                  <Typography
                    variant="subtitle2"
                    color="white"
                    textTransform={"capitalize"}
                  >
                    Subscribe
                  </Typography>
                </Button>
              </Stack>
              <Typography
                variant="subtitle2"
                fontSize={"12px"}
                lineHeight={"28px"}
              >
                Lore imp sum dolor Amit
              </Typography>
            </Box>
          </Stack>
        </Container>
      </Box>
      <Box className="bg-lightgray px-[47px] text-center sm:text-left">
        <Container sx={{ padding: "25px 0px" }}>
          <Typography variant="h6" color="text.secondary">
            Made With Love By Finland All Right Reserved{" "}
          </Typography>
        </Container>
      </Box>
    </footer>
  );
};

export default Footer;
