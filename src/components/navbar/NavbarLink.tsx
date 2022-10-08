import React, { FC } from "react";
import { Link, LinkProps } from "react-router-dom";

import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";

const StyledLink = styled(Link)<LinkProps>(({ theme }) => ({
  marginRight: 20,
  textDecoration: "none",
}));

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

export default NavbarLink;
