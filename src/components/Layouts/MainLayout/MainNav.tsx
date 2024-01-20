"use client";
import {
  Box,
  Collapse,
  Container,
  Stack,
  Link,
  useTheme,
  useMediaQuery,
  Typography,
} from "@mui/material";
import React, { useMemo } from "react";
import AccountIcon from "@/assets/svg/account.svg";
import SearchIcon from "@/assets/svg/search.svg";
import CartIcon from "@/assets/svg/cart.svg";
import WishlistIcon from "@/assets/svg/wishlist.svg";
import MenuIcon from "@/assets/svg/ham-menu.svg";
import { v4 } from "uuid";

type MenuItem = {
  name: string;
  path: string;
};

const menuItems: MenuItem[] = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Shop",
    path: "/shop",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Blog",
    path: "/blog",
  },
  {
    name: "Contact",
    path: "/contact",
  },
  {
    name: "Pages",
    path: "/pages",
  },
];

const MobileOnlyMenu: MenuItem[] = [];

const MainNav = () => {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const isTabOrBigger = useMediaQuery(theme.breakpoints.up("tablet"));
  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const openMobileNav = useMemo(() => {
    return !isTabOrBigger && open;
  }, [isTabOrBigger, open]);
  return (
    <Box>
      <Container>
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Stack
            direction={"row"}
            spacing={"40px"}
            alignItems={"center"}
            padding={"30px 0px"}
          >
            <Link href="/" className="lg:w-[187px]">
              <Typography variant="h3">Bandage</Typography>
            </Link>
            <Stack
              display={{ xs: "none", tablet: "flex" }}
              className="text-sm"
              direction={"row"}
              alignItems={"center"}
              spacing={"21px"}
            >
              {menuItems.map((item) => (
                <Link href={item.path} key={`${v4()}_${item.name}`}>
                  {item.name}
                </Link>
              ))}
            </Stack>
          </Stack>
          <Stack className="text-sm" direction="row" alignItems={"center"}>
            <Link
              href="/login"
              className="items-center p-[15px] hidden md:flex"
            >
              <AccountIcon className="mr-2" /> Login / Register
            </Link>
            <button className="p-[15px]">
              <SearchIcon />
            </button>
            <button className="p-[15px]">
              <CartIcon />
            </button>
            <button className="p-[15px] hidden md:inline-block">
              <WishlistIcon />
            </button>
            <button className="p-[15px] hidden md:inline-block">
              <WishlistIcon />
            </button>
            <button
              onClick={handleClick}
              className="p-[15px] md:hidden inline-block"
            >
              <MenuIcon />
            </button>
          </Stack>
        </Stack>
        <Collapse in={openMobileNav} timeout="auto" unmountOnExit>
          <Stack className="text-3xl" alignItems={"center"} spacing={"30px"}>
            {menuItems.map((item) => (
              <Link href={item.path} key={`${v4()}_${item.name}`}>
                {item.name}
              </Link>
            ))}
          </Stack>
        </Collapse>
      </Container>
    </Box>
  );
};

export default MainNav;
