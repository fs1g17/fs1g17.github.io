import React from 'react';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
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
  width: 350,
  // height: 500
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
      <Typography gutterBottom variant="h3" component="div" sx={{ width: '100%', color: '#E9052F', textAlign: 'center' }}>
        {props.title}
      </Typography>
      <Typography gutterBottom variant="body1" component="div" sx={{ width: '100%', color: '#fff', textAlign: 'center' }}>
        {props.body}
      </Typography>
    </CardContent>
    <CardActions>
      <Box width="100%" display="flex" >
        <RedButton sx={{ borderRadius: 0, marginLeft: 'auto' }} href={props.url}>Learn More</RedButton>
      </Box>
    </CardActions>
  </ResponsiveCard>
);

export default ShopCard;
