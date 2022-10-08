import React, { FC } from "react";
import { useLocation } from "react-router-dom";

import { styled } from "@mui/material/styles";
import {
  AppBar,
  AppBarProps,
  Typography,
  Toolbar,
  useTheme,
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  IconButton,
  Drawer
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
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

const drawerWidth = 240;
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
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map(({ path, label }) => (
          <ListItem key={path} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }} href={path}>
              <ListItemText primary={label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const getColor = (targetLocation: string) => {
    return location.pathname.toString().includes(targetLocation)
      ? theme.palette.secondary.main
      : "#FFFFFF";
  };

  const container = window !== undefined ? () => window.document.body : undefined;

  return (
    <>
      <StyledAppBar>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h4"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Navbar
          </Typography>
          <Box sx={{ marginLeft: "auto", display: { xs: 'none', sm: 'block' } }}>
            {navItems.map(({ path, label }) => (
              <NavbarLink path={path} label={label} color={getColor(path)} />
            ))}
          </Box>
        </Toolbar>
      </StyledAppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{ display: { xs: 'block', sm: 'none' }, '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }}}
        >
          {drawer}
        </Drawer>
      </Box>
    </>
  );
};

export default Navbar;
