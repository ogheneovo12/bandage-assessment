import { montserrat } from "@/assets/fonts";
import { createTheme } from "@mui/material/styles";
import NextLink, { LinkProps } from "next/link";
import { Ref, RefAttributes, forwardRef } from "react";

const LinkBehaviour = forwardRef<HTMLAnchorElement, LinkProps>(
  function LinkBehaviour(props, ref) {
    return <NextLink ref={ref} {...props} />;
  }
);

export const globalTheme = createTheme({
  palette: {
    text: {
      primary: "#252B42",
      secondary: "#737373",
    },
    primary: {
      main: "#23A6F0",
    },
    secondary: {
      main: "#23856D",
      light: "#BDBDBD",
      // dark: will be calculated from palette.secondary.main,
      contrastText: "#47008F",
    },
  },
  components: {
    MuiLink: {
      defaultProps: {
        underline: "none",
        component: LinkBehaviour,
        color(theme) {
          return theme.palette.text.secondary;
        },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      tablet: 768,
      md: 900,
      mdx: 966,
      lg: 1200,
      xl: 1536,
    },
  },
  typography: (palette) => ({
    fontFamily: `var(--font-montserrat)`,
    h2: {
      fontSize: "40px",
      fontStyle: "normal",
      fontWeight: 700,
      lineHeight: "50px", // 125%
      letterSpacing: "0.2px",
      color: palette.text.primary,
    },
    h3: {
      fontSize: "24px",
      fontWeight: 700,
      letterSpacing: "0.1px",
      lineHeight: "32px",
      color: palette.text.primary,
    },
    h4: {
      fontSize: "20px",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "30px", // 150%
      letterSpacing: "0.2px",
      color: palette.text.primary,
    },
    h6: {
      fontSize: "14px",
      fontStyle: "normal",
      fontWeight: 700,
      lineHeight: "24px", // 171.429%
      letterSpacing: "0.2px",
      color: palette.text.primary,
    },
    subtitle1: {
      fontSize: "20px",
      fontWeight: 400,
      lineHeight: "30px",
      letterSpacing: "0.2px",
      color: palette.text.secondary,
    },
    subtitle2: {
      fontSize: "14px",
      fontWeight: 400,
      lineHeight: "20px",
      letterSpacing: "0.2px",
      color: palette.text.secondary,
    },
  }),
});
