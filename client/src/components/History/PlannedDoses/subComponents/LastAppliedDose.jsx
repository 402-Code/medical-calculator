import React, { useEffect, useState } from 'react';
import { Paper, Typography, Box } from '@mui/material';

const LastAppliedDose = ({ lastApplication, drug }) => {
  const [lastApplicationDate, setLastApplicationDate] = useState({});

  useEffect(() => {
    const date = new Date(lastApplication.createdAt);
    setLastApplicationDate(date);
  }, [lastApplication]);

  console.log(lastApplicationDate.toLocaleString());
  return (
    <Paper elevation={16} square sx={{ mb: 2, pb: 2, px: 2, boxShadow: 'none' }}>
      <Typography variant="h5" component="h2" sx={{ py: 2 }}>
        Ostatnio:
      </Typography>
      <Box sx={{ display: 'flex' }}>
        <Typography sx={{ ml: 1 }}>{lastApplicationDate.toLocaleString().slice(0, 5)}</Typography>
        <Typography sx={{ ml: 1 }}>{lastApplicationDate.toLocaleString().slice(12, 17)}</Typography>
        <Typography sx={{ ml: 1 }}>{drug.name}</Typography>
      </Box>
    </Paper>
  );
};

export default LastAppliedDose;
