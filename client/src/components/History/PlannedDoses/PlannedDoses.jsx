import React, { useContext, useEffect, useState } from 'react';
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Typography,
  Button,
  Box,
  ButtonGroup
} from '@mui/material';
import axios from 'axios';
import { UserContext } from '../../../context/UserContext';
import getLastApplication from './getLastApplication';
import scheduleApplicationsArray from './scheduleApplicationsArray';
import LastAppliedDose from './LastAppliedDose';
import SymScreen from '../Symptoms/SymScreen';

const NO_OF_PLANNED_APPLICATIONS = 4;

const PlannedDoses = ({ kidName }) => {
  const [lastApplication, setLastApplication] = useState({});
  const [plannedApplications, setPlannedApplications] = useState([]);
  const [activeDiseaseId, setActiveDiseaseId] = useState('');
  const { user } = useContext(UserContext);

  const [symptomsOpen, setSymptomsOpen] = useState(false);

  useEffect(() => {
    (async () => {
      const { lastApplication, diseaseId, drug } = await getLastApplication(user, kidName);
      setActiveDiseaseId(diseaseId);

      const plannedArray = scheduleApplicationsArray(
        NO_OF_PLANNED_APPLICATIONS,
        new Date(lastApplication.createdAt),
        drug
      );

      setPlannedApplications(plannedArray);
    })();
  }, [lastApplication]);

  const handleDrugApplication = async () => {
    try {
      const response = await axios.post(`/api/diseases/${activeDiseaseId}/drug-application`, {
        drugId: plannedApplications[0].drugId
      });
      console.log(response);
      setLastApplication(response.data.drugApplications.slice(-1)[0]);
    } catch (err) {
      // TODO - co tu zrobić
    }
  };

  const handleAddSymptoms = () => {
    setSymptomsOpen(true);
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
              <TableRow key={index}>
                <TableCell>{row.hourAndMinutes}</TableCell>
                <TableCell>{row.drugName}</TableCell>
                <TableCell>{row.dose}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Box sx={{ mt: 2, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 2 }}>
          <ButtonGroup variant="contained">
            <Button onClick={handleDrugApplication}>Podaj lek</Button>
            <Button onClick={handleAddSymptoms}>Dodaj symptomy</Button>
          </ButtonGroup>
        </Box>
      </Paper>
      <SymScreen open={symptomsOpen} setOpen={setSymptomsOpen} />
    </>
  );
};

export default PlannedDoses;
