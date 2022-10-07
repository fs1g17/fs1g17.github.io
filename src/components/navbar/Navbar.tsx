import React, { FC } from "react";
import { useLocation } from "react-router-dom";

import { styled } from "@mui/material/styles";
import {
  AppBar,
  AppBarProps,
  Typography,
  Toolbar,
  useTheme,
  Box
} from "@mui/material";
import NavbarLink from "./NavbarLink";

const StyledAppBar = styled(AppBar)<AppBarProps>(({ theme }) => ({
  position: "fixed",
  zIndex: "10000",
  backgroundColor: "primary.main",
  height: 60,
  width: "100%",
  margin: 0,
}));

interface NavItem {
  path: string;
  label: string;
}

const navItems: NavItem[] = [
  {
    path: "/about",
    label: "About"
  },
  {
    path: "/blog",
    label: "Blog"
  },
  {
    path: "/shop",
    label: "Shop"
  },
  {
    path: "/contact",
    label: "Contact"
  },
]

const Navbar: FC = () => {
  const theme = useTheme();
  const location = useLocation();

  const getColor = (targetLocation: string) => {
    return location.pathname.toString().includes(targetLocation)
      ? theme.palette.secondary.main
      : "#FFFFFF";
  };

  return (
    <StyledAppBar>
      <Toolbar>
        <Typography variant="h4">Navbar</Typography>
        <Box sx={{ marginLeft: "auto" }}>
          {navItems.map(({ path, label }) => (
            <NavbarLink path={path} label={label} color={getColor(path)} />
          ))}
        </Box>
      </Toolbar>
    </StyledAppBar>
  );
};

export default Navbar;
