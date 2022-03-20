import React from 'react';
import { Box, Typography } from '@mui/material';
import img404 from '../../icons/404.png';

const Error404 = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <Box sx={{ m: 2, maxWidth: '400px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography variant="h5">Ojej!</Typography>
        <Typography variant="body">Nic tutaj nie ma.</Typography>
        <img src={img404} alt="404" width="80%" loading="lazy" />
      </Box>
    </Box>
  );
};

export default Error404;
