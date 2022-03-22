import React, { useContext, useEffect, useState } from 'react';
import { Button, Box, ButtonGroup } from '@mui/material';
import axios from 'axios';
import { UserContext } from '../../../context/UserContext';
import getLastApplication from './getLastApplication';
import scheduleApplicationsArray from './scheduleApplicationsArray';
import LastAppliedDose from './subComponents/LastAppliedDose';
import SymScreen from '../Symptoms/SymScreen';
import PlannedDosesTable from './subComponents/PlannedDosesTable';
import LoadingInProcess from '../../LoadingInProcess/LoadingInProcess';

const NO_OF_PLANNED_APPLICATIONS = 4;

const PlannedDoses = ({ kidName }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [lastApplication, setLastApplication] = useState({});
  const [drug, setDrug] = useState({});
  const [plannedApplications, setPlannedApplications] = useState([]);
  const [activeDiseaseId, setActiveDiseaseId] = useState('');
  const { user, refresh } = useContext(UserContext);
  const [symptomsOpen, setSymptomsOpen] = useState(false);

  useEffect(() => {
    (async () => {
      await refresh();
      const { lastApplication, diseaseId, drug } = await getLastApplication(user, kidName);
      setDrug(drug);
      setActiveDiseaseId(diseaseId);
      setLastApplication(lastApplication);
      setIsLoading(false);
      console.log('GET lastApplication useEffect');
    })();
  }, []);

  useEffect(() => {
    const plannedArray = scheduleApplicationsArray(
      NO_OF_PLANNED_APPLICATIONS,
      new Date(lastApplication.createdAt),
      drug
    );

    setPlannedApplications(plannedArray);
  }, [lastApplication]);

  const handleDrugApplication = async () => {
    try {
      const response = await axios.post(`/api/diseases/${activeDiseaseId}/drug-application`, {
        drugId: plannedApplications[0].drugId
      });
      setLastApplication(response.data.drugApplications.slice(-1)[0]);
    } catch (err) {
      // TODO - co tu zrobić
    }
  };

  const handleAddSymptoms = () => {
    setSymptomsOpen(true);
  };

  return isLoading ? (
    <LoadingInProcess />
  ) : (
    <>
      <LastAppliedDose lastApplication={lastApplication} drug={drug} />
      <PlannedDosesTable plannedApplications={plannedApplications}>
        <Box sx={{ mt: 2, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 2 }}>
          <ButtonGroup variant="contained">
            <Button onClick={handleDrugApplication}>Podaj dawkę leku</Button>
            <Button onClick={handleAddSymptoms}>Dodaj symptomy</Button>
          </ButtonGroup>
        </Box>
      </PlannedDosesTable>
      <SymScreen open={symptomsOpen} setOpen={setSymptomsOpen} />
    </>
  );
};

export default PlannedDoses;
