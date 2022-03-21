import React from 'react';
import { Box, CircularProgress } from '@mui/material';

const LoadingInProcess = () => {
  return (
    <Box sx={{ height: '40%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <CircularProgress />
    </Box>
  );
};

export default LoadingInProcess;
