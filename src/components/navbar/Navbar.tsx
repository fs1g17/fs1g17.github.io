import React, { FC } from "react";
import { Link, LinkProps, useLocation } from "react-router-dom";

import { styled } from "@mui/material/styles";
import { AppBar, Typography, Toolbar, useTheme, Box } from "@mui/material";

const NavbarLink = styled(Link)<LinkProps>(({ theme }) => ({
  marginLeft: 10,
  marginRight: 10,
  textDecoration: "none",
}));

const Navbar: FC = () => {
  const theme = useTheme();
  const location = useLocation();

  const getColor = (targetLocation: string) => {
    console.log("location: ", location.pathname.toString());
    console.log("targetLocation: ", targetLocation);
    return targetLocation === location.pathname.toString()
      ? theme.palette.secondary.main
      : "#FFFFFF";
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "primary.main",
        height: 60,
        width: "100%",
        margin: 0,
      }}
    >
      <Toolbar>
        <Typography variant="h4">Navbar</Typography>
        <Box sx={{ marginLeft: "auto" }}>
          <NavbarLink to="/">
            <Typography variant="largeSemibold" color={getColor("/")}>
              About
            </Typography>
          </NavbarLink>
          <NavbarLink to="/blog">
            <Typography variant="largeSemibold" color={getColor("/blog")}>
              Blog
            </Typography>
          </NavbarLink>
          <NavbarLink to="/newsletter">
            <Typography variant="largeSemibold" color={getColor("/newsletter")}>
              Newsletter
            </Typography>
          </NavbarLink>
          <NavbarLink to="/shop">
            <Typography variant="largeSemibold" color={getColor("/shop")}>
              Shop
            </Typography>
          </NavbarLink>
          <NavbarLink to="/contact">
            <Typography variant="largeSemibold" color={getColor("/contact")}>
              Contact
            </Typography>
          </NavbarLink>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
