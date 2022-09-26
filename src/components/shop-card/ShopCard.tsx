import React from 'react';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { styled } from "@mui/material/styles";

export interface ShopCardProps {
  imageUrl: string;
  title: string;
  body: string;
  url: string;
}

const ResponsiveCard = styled(Card)(({ theme }) => ({
  background: "black",
  border: '1px solid #E9052F',
  [theme.breakpoints.up("lg")]: {
    width: 350,
    height: 500
  },
  [theme.breakpoints.up("md")]: {
    width: 350,
    height: 500
  },
  [theme.breakpoints.down("sm")]: {
    width: 250,
    height: 400
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
    <CardContent>
      <Typography gutterBottom variant="h3" component="div" sx={{ width: '100%', color: '#E9052F', textAlign: 'center'}}>
        {props.title}
      </Typography>
      <Typography gutterBottom variant="body1" component="div" sx={{ width: '100%', color: '#fff', textAlign: 'center'}}>
        {props.body}
      </Typography>
    </CardContent>
  </ResponsiveCard>
);

export default ShopCard;
