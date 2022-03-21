import React, { useContext, useEffect, useState } from 'react';
import { Table, TableHead, TableRow, TableCell, TableBody, Paper, Button } from '@mui/material';
import { UserContext } from '../../../context/UserContext';
import getLastApplication from './getLastApplication';
import scheduleApplicationsArray from './scheduleApplicationsArray';
import LastDoseTableRow from './LastDoseTableRow';

const NO_OF_PLANNED_APPLICATIONS = 4;

const PlannedDoses = ({ kidName }) => {
  const [plannedApplications, setPlannedApplications] = useState([]);
  const { user } = useContext(UserContext);

  useEffect(() => {
    (async () => {
      const { lastApplication, drug } = await getLastApplication(user, kidName);

      const plannedArray = scheduleApplicationsArray(
        NO_OF_PLANNED_APPLICATIONS,
        new Date(lastApplication.createdAt),
        drug
      );

      setPlannedApplications(plannedArray);
    })();
  }, []);

  return (
    <Paper elevation={16} square sx={{ pb: 2, px: 2, boxShadow: 'none' }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Godz.</TableCell>
            <TableCell>Lek</TableCell>
            <TableCell>Dawka</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <LastDoseTableRow kidName={kidName} />
          {plannedApplications.map((row) => (
            <TableRow key={row.hour} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell>
                <Button>Podaj</Button>
              </TableCell>
              <TableCell>
                {row.hour}:{row.minutes}
              </TableCell>
              <TableCell>{row.drugName}</TableCell>
              <TableCell>{row.dose}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default PlannedDoses;
