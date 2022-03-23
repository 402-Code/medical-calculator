import React, { useContext, useEffect, useState } from 'react';
import { Table, TableHead, TableRow, TableCell, TableFooter, TablePagination, Paper, Typography } from '@mui/material';
import axios from 'axios';
import TablePaginationActions from './subComponents/TablePaginationActions';
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

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return isLoading ? (
    <LoadingInProcess />
  ) : (
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
            </TableRow>
          </TableHead>
          <HistoryTableBody historyArray={historyArray} drug={drug} page={page} rowsPerPage={rowsPerPage} />
          <TableFooter>
            <TableRow>
              <TablePagination
                sx={{ border: 0 }}
                rowsPerPageOptions={[5, 10, 25]}
                colSpan={4}
                count={historyArray.length}
                rowsPerPage={rowsPerPage}
                page={page}
                SelectProps={{
                  inputProps: {
                    'aria-label': 'rows per page'
                  },
                  native: true
                }}
                labelRowsPerPage="Wyświetl:"
                labelDisplayedRows={({ count, page }) => `${page} z ${Math.floor(count / rowsPerPage)}`}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </Paper>
    </Paper>
  );
};

export default DosesHistory;
