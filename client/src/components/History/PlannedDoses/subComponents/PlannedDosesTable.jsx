import React from 'react';
import { Table, TableHead, TableRow, TableCell, TableBody, Paper, Typography } from '@mui/material';

const PlannedDosesTable = ({ plannedApplications, children }) => {
  return (
    <Paper elevation={16} square sx={{ pb: 2, px: 2, boxShadow: 'none' }}>
      <Typography variant="h5" component="h2" sx={{ py: 2 }}>
        Plan kolejnych dawek:
      </Typography>
      <Paper variant="outlined" sx={{ background: 'none', boxShadow: 'none', borderRadius: 0 }}>
        <Table stickyHeader size="small">
          <TableHead>
            <TableRow>
              <TableCell>Dzień</TableCell>
              <TableCell>Godz.</TableCell>
              <TableCell>Lek</TableCell>
              <TableCell>Dawka</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {plannedApplications.map((row, index) => (
              <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell>{row.day}</TableCell>
                <TableCell>{row.hoursAndMinutes}</TableCell>
                <TableCell>{row.drugName}</TableCell>
                <TableCell>{row.dose}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
      {children}
    </Paper>
  );
};

export default PlannedDosesTable;
