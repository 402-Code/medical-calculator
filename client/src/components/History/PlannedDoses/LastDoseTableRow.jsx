import React, { useEffect, useContext, useState } from 'react';
import { TableRow, TableCell, Typography } from '@mui/material';
import { UserContext } from '../../../context/UserContext';
import getLastApplication from './getLastApplication';

// TODO - dose - linia 25 (624)

const LastDoseTableRow = ({ kidName }) => {
  const [lastApplication, setLastApplication] = useState({});
  const [drug, setDrug] = useState({});
  const { user } = useContext(UserContext);

  useEffect(() => {
    (async () => {
      const { lastApplication, drug } = await getLastApplication(user, kidName);
      setLastApplication(lastApplication);
      setDrug(drug);
      console.log(lastApplication);
    })();
  }, []);

  return (
    <TableRow key={100}>
      <TableCell>
        <Typography>Ostatnio:</Typography>
      </TableCell>
      <TableCell>{lastApplication?.createdAt?.slice(11, 16)}</TableCell>
      <TableCell>{drug.name}</TableCell>
      <TableCell>{642}</TableCell>
    </TableRow>
  );
};

export default LastDoseTableRow;
