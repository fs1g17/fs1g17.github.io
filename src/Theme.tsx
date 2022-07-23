import React from "react";

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
    h1: {
      fontSize: 80,
      fontWeight: "bold",
    },
    h2: {
      fontSize: 60,
      fontWeight: "bold",
    },
    h3: {
      fontSize: 30,
      fontWeight: "bold",
    },
    h4: {
      fontSize: 24,
      fontWeight: "bold",
    },
    large: {
      fontSize: 24,
    },
    medeium: {
      fontSize: 20,
    },
    caption: {
      fontSize: 18,
      textTransform: "uppercase",
    },
    normal: {
      fontSize: 16,
    },
    small: {
      fontSize: 12,
    },
    largeSemibold: {
      fontSize: 24,
      fontWeight: "medium",
    },
    medeiumSemibold: {
      fontSize: 20,
      fontWeight: "medium",
    },
    captionSemibold: {
      fontSize: 18,
      fontWeight: "medium",
      textTransform: "uppercase",
    },
    normalSemibold: {
      fontSize: 16,
      fontWeight: "medium",
    },
    smallSemibold: {
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
