import React, { useContext, useEffect, useState } from 'react';
import { Table, TableHead, TableRow, TableCell, TableBody, Paper } from '@mui/material';
import axios from 'axios';
import { UserContext } from '../../../context/UserContext';

const Doses = ({ kidName }) => {
  const [disease, setDisease] = useState([]);
  const [drug, setDrug] = useState('');
  const { user } = useContext(UserContext);

  useEffect(() => {
    (async () => {
      const kid = user.kids.find((kid) => kid.name === kidName);
      console.log(kid.diseases[0].drugApplications);
      setDisease(kid.diseases[0].drugApplications);
      const { data } = await axios.get('/api/drugs');
      const drug = data.find((drug) => drug._id === kid.diseases[0].initialDrug).name;
      setDrug(drug);
    })();
  }, []);

  return (
    <Paper elevation={16} square sx={{ pb: 2, px: 2, boxShadow: 'none' }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Godzina</TableCell>
            <TableCell>Lek</TableCell>
            <TableCell>Dawka</TableCell>
            <TableCell>Objawy</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {disease.map((row) => (
            <TableRow key={row._id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell>{row.createdAt.slice(11, 16)}</TableCell>
              <TableCell>{drug}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default Doses;
