import React from 'react';
import { List, ListItem, ListItemText, Divider, Typography } from '@mui/material';
import doseInterval from './toDisplay/doseInterval';

const MedicationInfo = ({ selectedDrug }) => {
  return (
    <List sx={{ width: '100%', bgcolor: 'transparent', p: 0 }}>
      <Divider />
      <ListItem sx={{ p: 0.5 }}>
        <ListItemText
          primary={
            <Typography variant="body1" color="text.primary">
              Pojedyńcza dawka: {selectedDrug.recommendedDose} mg
            </Typography>
          }
        />
      </ListItem>
      <Divider />
      <ListItem sx={{ p: 0.5 }}>
        <ListItemText
          primary={
            <Typography variant="body1" color="text.primary">
              Odstęp pomiędzy podaniem kolejnych dawek: {doseInterval(selectedDrug)}
            </Typography>
          }
        />
      </ListItem>
      <Divider />
      <ListItem sx={{ p: 0.5 }}>
        <ListItemText
          primary={
            <Typography variant="body1" color="text.primary">
              Maksymalna dawka dzienna: {selectedDrug.maximumDose} mg
            </Typography>
          }
        />
      </ListItem>
    </List>
  );
};

export default MedicationInfo;
