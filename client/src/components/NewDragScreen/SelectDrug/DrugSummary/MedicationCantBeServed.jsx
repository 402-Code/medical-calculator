import React, { useState } from 'react';
import { Alert, AlertTitle } from '@mui/material';
import ageInMonths from '../../../../utils/ageInMonths';

const MedicationCantBeServed = ({ activeKid, selectedDrug }) => {
  const { applicationRequirement } = selectedDrug;
  const a = activeKid.gender === 'female' ? 'mała' : 'mały';
  const [age1, setAge] = useState('')

  if (ageInMonths(activeKid) <= applicationRequirement?.minAge) setAge(applicationRequirement?.minAge)

  if (ageInMonths(activeKid) >= applicationRequirement?.maxAge) setAge(applicationRequirement?.maxAge)

  console.log(age1);

  return (
    <Alert severity="warning" variant="outlined" sx={{ fontSize: 'large' }}>
      <AlertTitle sx={{ fontSize: 'large' }}>
        {activeKid.name} jest za {a}
      </AlertTitle>
      Wybranego leku <strong>nie można</strong> podać dziecku poniżej {age1}-go
      miesiąca życia.
    </Alert>
  )
};

export default MedicationCantBeServed;
