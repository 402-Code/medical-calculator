import React from 'react';
import Box from '@mui/material/Box';
import Symptom from './Symptom';

const symptomsList = [
  'Ból głowy',
  'Dreszcze',
  'Osłabienie',
  'Nudności',
  'Ból gardła',
  'Katar',
  'Kaszel mokry',
  'Kaszel suchy',
  'Wymioty',
  'Ból w klatce piersiowej',
  'Ból mięśni'
];

const SymList = ({ symptoms, onChange }) => {
  return (
    <Box sx={{ '& button': { m: 0.5 } }}>
      <div>
        {symptomsList.map((symptom) => (
          <Symptom
            key={symptom}
            name={symptom}
            selected={symptoms.includes(symptom)}
            onSelect={() =>
              onChange((state) => (state.includes(symptom) ? state.filter((v) => v !== symptom) : [...state, symptom]))
            }
          />
        ))}
      </div>
    </Box>
  );
};

export default SymList;
