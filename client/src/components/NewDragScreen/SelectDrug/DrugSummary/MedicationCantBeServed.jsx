import React, { useState, useEffect } from 'react';
import { Alert } from '@mui/material';
import { differenceInMonths } from 'date-fns'

const MedicationCantBeServed = ({ activeKid, selectedDrug = {} }) => {
  const { applicationRequirement } = selectedDrug;
  const [age, setAge] = useState()
  const kidsDateOfBirth = new Date(activeKid.dateOfBirth)
  const kidsAgeInMonths = differenceInMonths(new Date(), kidsDateOfBirth)

  useEffect(() => {
    if (applicationRequirement?.minAge >= kidsAgeInMonths) {
      (setAge(`poniżej ${applicationRequirement?.minAge}`))
    } else if (applicationRequirement?.maxAge <= kidsAgeInMonths) {
      (setAge(`powyżej ${applicationRequirement?.maxAge}`))
    }
  })

  return (
    <Alert severity="warning" variant="outlined" sx={{ fontSize: 'large' }}>
      Wybranego leku <strong>nie można</strong> podawać dziecku {age} miesiecy!
    </Alert>
  );
};

export default MedicationCantBeServed;
