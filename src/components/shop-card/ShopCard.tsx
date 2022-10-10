import React from 'react';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Box, CardActions } from "@mui/material";
import { styled } from "@mui/material/styles";
import { RedButton } from '../button';

export interface ShopCardProps {
  imageUrl: string;
  title: string;
  body: string;
  url: string;
}

const ResponsiveCard = styled(Card)(({ theme }) => ({
  background: "black",
  border: '1px solid #E9052F',
  minWidth: 300,
  [theme.breakpoints.up('xs')]: {
    width: '100vw',
  },
  [theme.breakpoints.up('sm')]: {
    width: 350,
  },
}));

const ShopCard = (props: ShopCardProps) => (
  <ResponsiveCard>
    <CardMedia
      component="img"
      height="300"
      image={props.imageUrl}
      alt="card image"
    />
    <CardContent sx={{ height: 120 }}>
      <div style={{ fontFamily: "Open Sans", fontSize: 30, fontWeight: "bold", width: '100%', color: '#E9052F', textAlign: 'center', marginBottom: 8 }}>
        {props.title}
      </div>
      <div style={{ fontFamily: "Open Sans", fontSize: 16, width: '100%', color: '#fff', textAlign: 'center' }}>
        {props.body}
      </div>
    </CardContent>
    <CardActions>
      <Box width="100%" display="flex" >
        <RedButton sx={{ borderRadius: 0, marginLeft: 'auto' }} href={props.url}>Learn More</RedButton>
      </Box>
    </CardActions>
  </ResponsiveCard>
);

export default ShopCard;
