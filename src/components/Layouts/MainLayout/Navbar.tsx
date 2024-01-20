import React from "react";
import TopNav from "./TopNav";
import MainNav from "./MainNav";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@emotion/react";

const Navbar = () => {
  const mobileNav = useMediaQuery("(max-width: 768px)");

  return (
    <nav>
      <TopNav />
      <MainNav />
    </nav>
  );
};

export default Navbar;
