import React, { useContext, useEffect, useState } from 'react';
import { Table, TableHead, TableRow, TableCell, Paper, Typography, TableContainer } from '@mui/material';
import axios from 'axios';
import { UserContext } from '../../../context/UserContext';
import LoadingInProcess from '../../LoadingInProcess/LoadingInProcess';
import HistoryTableBody from './subComponents/HistoryTableBody';

const DosesHistory = ({ kidName }) => {
  const [isLoading, setIsLoading] = useState(true);
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
      setIsLoading(false);
    })();
  }, []);

  return isLoading ? (
    <LoadingInProcess />
  ) : (
    <Paper elevation={16} square sx={{ pb: 2, px: 2, boxShadow: 'none' }}>
      <Typography variant="h5" component="h2" sx={{ py: 2 }}>
        Historia choroby:
      </Typography>
      <Paper variant="outlined" sx={{ background: 'none', boxShadow: 'none', borderRadius: 0 }}>
        <TableContainer sx={{ maxHeight: '65%' }}>
          <Table stickyHeader size="small">
            <TableHead>
              <TableRow>
                <TableCell>Data</TableCell>
                <TableCell>Godzina</TableCell>
                <TableCell>Lek / Symptomy</TableCell>
              </TableRow>
            </TableHead>
            <HistoryTableBody historyArray={historyArray} drug={drug} />
          </Table>
        </TableContainer>
      </Paper>
    </Paper>
  );
};

export default DosesHistory;
