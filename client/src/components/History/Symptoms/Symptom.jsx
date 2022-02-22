import React from 'react';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const Symptom = ({ name, selected = false, onSelect }) => (
  <Button
    startIcon={selected ? <RemoveIcon /> : <AddIcon />}
    variant="contained"
    size="medium"
    color={selected ? 'secondary' : 'primary'}
    onClick={onSelect}
  >
    {name}
  </Button>
);

export default Symptom;
