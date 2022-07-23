import React, { FC } from 'react';
import { Link } from "react-router-dom";

import { AppBar, Typography, Theme, Toolbar, useTheme } from '@mui/material';

const Navbar: FC = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: 'primary.main', height: 60, width: '100%', margin: 0 }}>
      <Toolbar>
        <Typography variant="h4">
          Navbar
        </Typography>
        <div>
          <Link to="/">
            About
          </Link>
          <Link to="/blog">
            Blog
          </Link>
          <Link to="/newsletter">
            Newsletter
          </Link>
          <Link to="/shop">
            Shop
          </Link>
          <Link to="/contact">
            Contact
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
