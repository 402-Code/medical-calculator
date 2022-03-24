import React, { useState, useEffect } from 'react';
import { Alert } from '@mui/material';
import { differenceInMonths } from 'date-fns';

const MedicationCantBeServed = ({ activeKid, selectedDrug = {} }) => {
  const { applicationRequirement } = selectedDrug;
  const [alert, setAlert] = useState();
  const kidsDateOfBirth = new Date(activeKid.dateOfBirth);
  const kidsAgeInMonths = differenceInMonths(new Date(), kidsDateOfBirth);
  useEffect(() => {
    if (applicationRequirement?.minAge >= kidsAgeInMonths) {
      setAlert(`poniżej ${applicationRequirement?.minAge} miesięcy`);
    } else if (applicationRequirement?.maxAge <= kidsAgeInMonths) {
      setAlert(`powyżej ${applicationRequirement?.maxAge} miesięcy`);
    }
  });

  return (
    <Alert severity="warning" variant="outlined" sx={{ fontSize: 'large' }}>
      Wybranego leku <strong>nie można</strong> podawać dziecku {alert}!
    </Alert>
  );
};

export default MedicationCantBeServed;
