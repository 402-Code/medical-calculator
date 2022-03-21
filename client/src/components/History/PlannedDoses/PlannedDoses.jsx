import React, { useContext, useEffect, useState } from 'react';
import { Table, TableHead, TableRow, TableCell, TableBody, Paper, Typography, Button } from '@mui/material';
import axios from 'axios';
import { UserContext } from '../../../context/UserContext';
import getLastApplication from './getLastApplication';
import scheduleApplicationsArray from './scheduleApplicationsArray';
import LastAppliedDose from './LastAppliedDose';

const NO_OF_PLANNED_APPLICATIONS = 4;

const PlannedDoses = ({ kidName }) => {
  const [lastApplication, setLastApplication] = useState({});
  const [plannedApplications, setPlannedApplications] = useState([]);
  const [activeDiseaseId, setActiveDiseaseId] = useState('');
  const { user } = useContext(UserContext);

  useEffect(() => {
    (async () => {
      const { lastApplication, diseaseId, drug } = await getLastApplication(user, kidName);
      setActiveDiseaseId(diseaseId);

      console.log(lastApplication);
      const plannedArray = scheduleApplicationsArray(
        NO_OF_PLANNED_APPLICATIONS,
        new Date(lastApplication.createdAt),
        drug
      );

      setPlannedApplications(plannedArray);
      console.log(plannedArray);
    })();
  }, [lastApplication]);

  const handleDrugApplication = async () => {
    const response = await axios.post(`/api/diseases/${activeDiseaseId}/drug-application`, {
      drugId: plannedApplications[0].drugId
    });
    console.log(response);
    setLastApplication(response.data.drugApplications.slice(-1)[0]);
  };

  return (
    <>
      <LastAppliedDose kidName={kidName} />
      <Paper elevation={16} square sx={{ pb: 2, px: 2, boxShadow: 'none' }}>
        <Typography variant="h5" component="h2" sx={{ py: 2 }}>
          Plan kolejnych dawek:
        </Typography>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Godz.</TableCell>
              <TableCell>Lek</TableCell>
              <TableCell>Dawka</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {plannedApplications.map((row, index) => (
              <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell>
                  {row.hour}:{row.minutes}
                </TableCell>
                <TableCell>{row.drugName}</TableCell>
                <TableCell>{row.dose}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Button variant="contained" onClick={handleDrugApplication}>
          Podaj lek
        </Button>
      </Paper>
    </>
  );
};

export default PlannedDoses;
