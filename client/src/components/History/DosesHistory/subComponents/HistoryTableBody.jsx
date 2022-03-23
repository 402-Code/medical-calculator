import React from 'react';
import { TableRow, TableCell, TableBody } from '@mui/material';

const HistoryTableBody = ({ historyArray, drug }) => {
  return (
    <TableBody>
      {historyArray.map((row) => (
        <TableRow key={row._id}>
          <TableCell>
            {new Date(row.createdAt).getDate()}.{new Date(row.createdAt).getMonth() + 1}
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
      ))}
    </TableBody>
  );
};

export default HistoryTableBody;
