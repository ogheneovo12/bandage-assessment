import { Box, Container, Link, Stack } from "@mui/material";
import React from "react";
import MailIcon from "@/assets/svg/mail.svg";
import PhoneIcon from "@/assets/svg/phone.svg";
import FacebookIcon from "@/assets/svg/facebook.svg";
import TwitterIcon from "@/assets/svg/twitter.svg";
import InstagramIcon from "@/assets/svg/instagram.svg";
import YoutubeIcon from "@/assets/svg/youtube.svg";

const TopNav = () => {
  return (
    <Box
      data-aos="fade-down"
      sx={{
        backgroundColor: "secondary.main",
        color: "#fff",
        display: { xs: "none", tablet: "block" },
      }}
    >
      <Container>
        <Stack
          className="text-sm font-bold"
          justifyContent={"space-between"}
          alignItems={"center"}
          direction="row"
          spacing={2}
          minHeight={46}
          padding={"10px 0px"}
        >
          <Stack
            direction={{ xs: "column", mdx: "row" }}
            spacing={{ xs: 1, mdx: 2 }}
            alignItems={{ xs: "flex-start", mdx: "center" }}
          >
            <Link href="/" color="#fff" className="flex items-center">
              <PhoneIcon className="mr-2" /> (225) 555-0118
            </Link>
            <Link href="/" color="#fff" className="flex items-center">
              <MailIcon className="mr-2" /> michelle.rivera@example.com
            </Link>
          </Stack>
          <div>Follow Us and get a chance to win 80% off</div>
          <Stack
            direction={{ xs: "column", mdx: "row" }}
            spacing={{ xs: 1, mdx: 2 }}
            alignItems={{ xs: "flex-start", mdx: "center" }}
          >
            <span>Follow Us :</span>
            <Stack direction="row" spacing={2} paddingRight={"15px"}>
              <Link href="/" color="#fff">
                <InstagramIcon />
              </Link>
              <Link href="/">
                <YoutubeIcon />
              </Link>
              <Link href="/" color="#fff">
                <FacebookIcon />
              </Link>
              <Link href="/" color="#fff">
                <TwitterIcon />
              </Link>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default TopNav;
