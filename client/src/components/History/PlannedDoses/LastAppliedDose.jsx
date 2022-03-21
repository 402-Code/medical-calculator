import React, { useEffect, useContext, useState } from 'react';
import { Paper, Typography, Box } from '@mui/material';
import { UserContext } from '../../../context/UserContext';
import getLastApplication from './getLastApplication';

const LastAppliedDose = ({ kidName }) => {
  const [lastApplication, setLastApplication] = useState({});
  const [drug, setDrug] = useState({});
  const { user } = useContext(UserContext);

  useEffect(() => {
    (async () => {
      const { lastApplication, drug } = await getLastApplication(user, kidName);
      setLastApplication(lastApplication);
      setDrug(drug);
    })();
  }, []);

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
