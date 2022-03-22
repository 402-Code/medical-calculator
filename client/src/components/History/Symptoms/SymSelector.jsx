import React, { useState } from 'react';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import SymList from './SymList';

const SymSelector = ({ onSave, onCancel }) => {
  const [symptoms, setSymptoms] = useState([]);
  
  return (
    <>
      <AppBar sx={{ position: 'relative' }}>
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={onCancel} aria-label="close">
            <CloseIcon />
          </IconButton>
          <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
            Wybierz objawy
          </Typography>
          <Button
            autoFocus
            color="inherit"
            onClick={() => {
              onSave(symptoms);
            }}
          >
            zapisz
          </Button>
        </Toolbar>
      </AppBar>
      <SymList symptoms={symptoms} onChange={setSymptoms} />
    </>
  );
};

export default SymSelector;
