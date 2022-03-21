import React from 'react';
import { Paper, Typography, Box } from '@mui/material';

const LastAppliedDose = ({ lastApplication, drug }) => {
  return (
    <Paper elevation={16} square sx={{ mb: 2, pb: 2, px: 2, boxShadow: 'none' }}>
      <Typography variant="h5" component="h2" sx={{ py: 2 }}>
        Ostatnio:
      </Typography>
      <Box sx={{ display: 'flex' }}>
        <Typography sx={{ mx: 1 }}>{lastApplication?.createdAt?.slice(11, 16)}</Typography>
        <Typography>{drug.name}</Typography>
      </Box>
    </Paper>
  );
};

export default LastAppliedDose;
