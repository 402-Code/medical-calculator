import React, { useContext } from 'react';
import { Box, Avatar, Typography } from '@mui/material';
// import { ChildContext } from '../../../context/ChildContext';
import { UserContext } from '../../../context/UserContext';

const HistoryName = ({ kidName }) => {
  // const { kids } = useContext(ChildContext);
  // const kidToDisplay = kids.find((kid) => kid.name === kidName);

  const { kids } = useContext(UserContext);
  const kidToDisplay = kids.find((kid) => kid.name === kidName);

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', m: 1 }}>
      <Avatar alt={kidToDisplay.name.slice(0, 2)} src={kidToDisplay.avatar} sx={{ width: 40, height: 40, mr: 1 }} />
      <Typography variant="h5">{kidToDisplay.name}</Typography>
    </Box>
  );
};

export default HistoryName;
