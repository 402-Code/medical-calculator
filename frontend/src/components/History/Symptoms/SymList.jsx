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
        {symptomsList.map((symptom, index) => (
          <Symptom
            key={symptom}
            name={symptom}
            selected={symptoms.includes(index)}
            onSelect={() =>
              onChange((state) => (state.includes(index) ? state.filter((v) => v !== index) : [...state, index]))
            }
          />
        ))}
      </div>
    </Box>
  );
};

export default SymList;
