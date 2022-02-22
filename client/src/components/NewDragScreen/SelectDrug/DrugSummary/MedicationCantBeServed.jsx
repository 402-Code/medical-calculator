import React from 'react';
import { Alert, AlertTitle } from '@mui/material';

const MedicationCantBeServed = ({ activeKid, selectedDrug }) => {
  const a = activeKid.gender === 'female' ? 'mała' : 'mały';
  return (
    <Alert severity="warning" variant="outlined" sx={{ fontSize: 'large' }}>
      <AlertTitle sx={{ fontSize: 'large' }}>
        {activeKid.name} jest za {a}
      </AlertTitle>
      Wybranego leku <strong>nie można</strong> podać dziecku poniżej {selectedDrug.min_access_age_in_months}-go
      miesiąca życia.
    </Alert>
  );
};

export default MedicationCantBeServed;
