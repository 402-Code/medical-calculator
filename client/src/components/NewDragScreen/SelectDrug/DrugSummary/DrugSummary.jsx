/* eslint-disable no-nested-ternary */
import React from 'react';
import { Typography, Paper } from '@mui/material';

import MedicationCantBeServed from './MedicationCantBeServed';
import MedicationInfo from './MedicationInfo';

const DrugSummary = ({ activeKid, selectedMedicine, canDrugBeServed, activeDrug }) => {
  return (
    <Paper elevation={16} square sx={{ my: 2, pb: 2, px: 2, boxShadow: 'none' }}>
      <Typography variant="h5" component="h2" sx={{ py: 2 }}>
        Informacje o wybranym leku:
      </Typography>
      {selectedMedicine === '' ? (
        <NoMedicationSelected />
      ) : canDrugBeServed === true ? (
        <MedicationInfo activeKid={activeKid} selectedDrug={activeDrug} />
      ) : (
        <MedicationCantBeServed activeKid={activeKid} selectedDrug={activeDrug} />
      )}
    </Paper>
  );
};

const NoMedicationSelected = () => {
  return (
    <Typography variant="body2">
      Wybierz lekarstwo z listy aby wyświetlić informacje na temat dawkowania oraz rozpocząć podawanie leku.
    </Typography>
  );
};

export default DrugSummary;
