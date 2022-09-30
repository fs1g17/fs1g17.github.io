import React from 'react';

import { Box, Typography } from '@mui/material';

import img from '../../../static/images/shop-card-img-1.png';

const OnlineCoaching = () => {
  return (
    <Box mt="64px" height="calc(100vh - 62px);">
      <img src={img} style={{ height: '100%'}} />
    </Box>
  );
}

export default OnlineCoaching;
