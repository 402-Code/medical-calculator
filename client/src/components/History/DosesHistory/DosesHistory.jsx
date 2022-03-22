import React, { useContext, useEffect, useState } from 'react';
import { Table, TableHead, TableRow, TableCell, TableBody, Paper, Typography } from '@mui/material';
import axios from 'axios';
import { UserContext } from '../../../context/UserContext';

const DosesHistory = ({ kidName }) => {
  const [historyArray, setHistoryArray] = useState([]);
  const [drug, setDrug] = useState('');
  const { user } = useContext(UserContext);

  useEffect(() => {
    (async () => {
      const kid = user.kids.find((kid) => kid.name === kidName);
      const { drugApplications, symptomsSpotted } = kid.diseases[0];

      const { data } = await axios.get('/api/drugs');
      const drug = data.find((drug) => drug._id === kid.diseases[0].initialDrug);
      setDrug(drug);

      const sortedByDate = [...drugApplications, ...symptomsSpotted].sort(
        (a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt)
      );
      setHistoryArray(sortedByDate);
    })();
  }, []);

  return (
    <Paper elevation={16} square sx={{ pb: 2, px: 2, boxShadow: 'none' }}>
      <Typography variant="h5" component="h2" sx={{ py: 2 }}>
        Historia dawkowania:
      </Typography>
      <Paper variant="outlined" sx={{ background: 'none', boxShadow: 'none' }}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Data</TableCell>
              <TableCell>Godzina</TableCell>
              <TableCell>Lek / Symptomy</TableCell>
              <TableCell>Dawka</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {historyArray.map((row) => (
              <TableRow key={row._id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell>{new Date(row.createdAt).toLocaleString().slice(0, 5)}</TableCell>
                <TableCell>{new Date(row.createdAt).toLocaleString().slice(12, 17)}</TableCell>
                {row.drugId ? <TableCell>{drug.name}</TableCell> : <TableCell>{row.symptoms}</TableCell>}
                {row.drugId ? <TableCell>352</TableCell> : <TableCell />}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Paper>
  );
};

export default DosesHistory;
