import React from 'react';
import { TableRow, TableCell, TableBody } from '@mui/material';

const HistoryTableBody = ({ historyArray, drug, page, rowsPerPage }) => {
  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - historyArray.length) : 0;
  return (
    <TableBody>
      {(rowsPerPage > 0 ? historyArray.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) : historyArray).map(
        (row) => (
          <TableRow key={row._id}>
            <TableCell>
              {new Date(row.createdAt).getDate()}.{new Date(row.createdAt).getMonth()}
            </TableCell>
            <TableCell>{new Date(row.createdAt).toLocaleTimeString().slice(0, 5)}</TableCell>
            {row.drugId ? (
              <TableCell>
                {drug.name}, {drug.schedulingPolicy[0].recommendedDose.value}
                {drug.schedulingPolicy[0].recommendedDose.unit}
              </TableCell>
            ) : (
              <TableCell>{row.symptoms.join(', ')}</TableCell>
            )}
          </TableRow>
        )
      )}

      {emptyRows > 0 && (
        <TableRow style={{ height: 53 * emptyRows }}>
          <TableCell colSpan={6} />
        </TableRow>
      )}
    </TableBody>
  );
};

export default HistoryTableBody;
