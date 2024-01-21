"use client";
import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { ThemeProvider } from "@mui/material";
import { globalTheme } from "@/components/Mui/theme";
import Aos from "aos";
import { Toaster } from "react-hot-toast";

function MainLayout({ children }: React.PropsWithChildren<void>) {
  useEffect(() => {
    Aos.init({ duration: 1000, once: true, easing: "ease-in-out" });
  });
  return (
    <ThemeProvider theme={globalTheme}>
      <Navbar />
      <main>{children}</main>
      <Toaster position="top-center" reverseOrder={false} />
      <Footer />
    </ThemeProvider>
  );
}

MainLayout.propTypes = {};

export default MainLayout;
