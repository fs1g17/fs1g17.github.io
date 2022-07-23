import React from "react";
import "./main.css";

import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    large: React.CSSProperties;
    medeium: React.CSSProperties;
    caption: React.CSSProperties;
    normal: React.CSSProperties;
    small: React.CSSProperties;

    largeSemibold: React.CSSProperties;
    medeiumSemibold: React.CSSProperties;
    captionSemibold: React.CSSProperties;
    normalSemibold: React.CSSProperties;
    smallSemibold: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    large?: React.CSSProperties;
    medeium?: React.CSSProperties;
    caption?: React.CSSProperties;
    normal?: React.CSSProperties;
    small?: React.CSSProperties;

    largeSemibold?: React.CSSProperties;
    medeiumSemibold?: React.CSSProperties;
    captionSemibold?: React.CSSProperties;
    normalSemibold?: React.CSSProperties;
    smallSemibold?: React.CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    large: true;
    medeium: true;
    caption: true;
    normal: true;
    small: true;

    largeSemibold: true;
    medeiumSemibold: true;
    captionSemibold: true;
    normalSemibold: true;
    smallSemibold: true;
  }
}

export const theme = createTheme({
  typography: {
    fontFamily: "Open Sans",
    h1: {
      fontFamily: "Open Sans",
      fontSize: 80,
      fontWeight: "bold",
    },
    h2: {
      fontFamily: "Open Sans",
      fontSize: 60,
      fontWeight: "bold",
    },
    h3: {
      fontFamily: "Open Sans",
      fontSize: 30,
      fontWeight: "bold",
    },
    h4: {
      fontFamily: "Open Sans",
      fontSize: 24,
      fontWeight: "bold",
    },
    large: {
      fontFamily: "Open Sans",
      fontSize: 24,
    },
    medeium: {
      fontFamily: "Open Sans",
      fontSize: 20,
    },
    caption: {
      fontFamily: "Open Sans",
      fontSize: 18,
      textTransform: "uppercase",
    },
    normal: {
      fontFamily: "Open Sans",
      fontSize: 16,
    },
    small: {
      fontFamily: "Open Sans",
      fontSize: 12,
    },
    largeSemibold: {
      fontFamily: "Open Sans",
      fontSize: 24,
      fontWeight: "medium",
    },
    medeiumSemibold: {
      fontFamily: "Open Sans",
      fontSize: 20,
      fontWeight: "medium",
    },
    captionSemibold: {
      fontFamily: "Open Sans",
      fontSize: 18,
      fontWeight: "medium",
      textTransform: "uppercase",
    },
    normalSemibold: {
      fontFamily: "Open Sans",
      fontSize: 16,
      fontWeight: "medium",
    },
    smallSemibold: {
      fontFamily: "Open Sans",
      fontSize: 12,
      fontWeight: "medium",
    },
  },
  palette: {
    primary: {
      main: "#0F0F0F",
      light: "#353535",
      dark: "#000000",
    },
    secondary: {
      main: "#E9052F",
      light: "#FF5759",
      dark: "#AE0008",
    },
  },
});
