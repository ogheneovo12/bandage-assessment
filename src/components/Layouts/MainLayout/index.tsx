"use client";
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { ThemeProvider } from "@mui/material";
import { globalTheme } from "@/components/Mui/theme";

function MainLayout({ children }: React.PropsWithChildren<void>) {
  return (
    <ThemeProvider theme={globalTheme}>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </ThemeProvider>
  );
}

MainLayout.propTypes = {};

export default MainLayout;
