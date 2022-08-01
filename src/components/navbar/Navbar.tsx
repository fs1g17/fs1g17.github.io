import React, { FC } from "react";
import { Link, LinkProps, useLocation } from "react-router-dom";

import { styled } from "@mui/material/styles";
import {
  AppBar,
  AppBarProps,
  Typography,
  Toolbar,
  useTheme,
  Box,
} from "@mui/material";

const StyledLink = styled(Link)<LinkProps>(({ theme }) => ({
  marginLeft: 10,
  marginRight: 10,
  textDecoration: "none",
}));

const StyledAppBar = styled(AppBar)<AppBarProps>(({ theme }) => ({
  position: "fixed",
  zIndex: "10000",
  backgroundColor: "primary.main",
  height: 60,
  width: "100%",
  margin: 0,
}));

const Navbar: FC = () => {
  const theme = useTheme();
  const location = useLocation();

  const getColor = (targetLocation: string) => {
    return targetLocation === location.pathname.toString()
      ? theme.palette.secondary.main
      : "#FFFFFF";
  };

  return (
    <StyledAppBar>
      <Toolbar>
        <Typography variant="h4">Navbar</Typography>
        <Box sx={{ marginLeft: "auto" }}>
          <NavbarLink path="/" label="About" color={getColor("/")} />
          <NavbarLink path="/blog" label="Blog" color={getColor("/blog")} />
          <NavbarLink path="/shop" label="Shop" color={getColor("/shop")} />
          <NavbarLink
            path="/contact"
            label="Contact"
            color={getColor("/contact")}
          />
        </Box>
      </Toolbar>
    </StyledAppBar>
  );
};

interface NavbarLinkProps {
  path: string;
  label: string;
  color: string;
}

const NavbarLink: FC<NavbarLinkProps> = ({ path, label, color }) => (
  <StyledLink to={path}>
    <Typography variant="largeSemibold" color={color}>
      {label}
    </Typography>
  </StyledLink>
);

export default Navbar;
