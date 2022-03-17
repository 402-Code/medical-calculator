import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { InputLabel, Select, MenuItem, FormControl, Typography, Paper, FormHelperText, Button } from '@mui/material';
import DrugSummary from './DrugSummary/DrugSummary';
import TEMP_DRUG from '../../mocks/tempDrug.json';

const medicationList = JSON.parse(JSON.stringify(TEMP_DRUG));

const SelectDrug = ({ setSelectedDrug, activeKid }) => {
  const [activeSubstance, setActiveSubstance] = useState('');
  const [selectedMedicine, setSelectedMedicine] = useState('');
  const [requiredActivSubst, setRequiredActivSubst] = useState('');
  const [requiredMedicine, setRequiredMedicine] = useState('');
  const [canDrugBeServed, setCanDrugBeServed] = useState(false);
  const navigate = useNavigate();

  const uniqueActiveSub = [];
  // Reset selected drug on component render
  useEffect(() => {
    setSelectedDrug({});
  }, []);

  const handleChangeSelect1 = (event) => {
    setActiveSubstance(event.target.value);
    setRequiredMedicine('');
  };
  const handleChangeSelect2 = (event) => {
    setSelectedMedicine(event.target.value);
  };

  function handleStartNewDrug() {
    if (selectedMedicine === '' && activeSubstance === '') {
      setRequiredActivSubst('Najpierw wybierz substancję czynną');
    } else if (selectedMedicine === '') {
      setRequiredMedicine('Wybierz lekarstwo');
    } else {
      medicationList.map((med) => (med.medication === selectedMedicine ? setSelectedDrug(med) : null));
      navigate(`/history/${activeKid.name}`);
    }
  }

  const handleErrorSelect2 = () => {
    if (activeSubstance === '') {
      setRequiredActivSubst('Najpierw wybierz substancję czynną');
    } else {
      setRequiredMedicine('');
    }
  };

  return (
    <>
      <Paper elevation={16} square sx={{ pb: 2, px: 2, boxShadow: 'none' }}>
        <Typography variant="h5" component="h2" sx={{ py: 2 }}>
          Wyszukaj lek:
        </Typography>
        <FormControl fullWidth sx={{ mb: 2 }} error={!!requiredActivSubst}>
          <InputLabel>Substancja czynna</InputLabel>
          <Select
            value={activeSubstance}
            label="Substancja czynna"
            onChange={handleChangeSelect1}
            onFocus={() => setRequiredActivSubst('')}
          >
            {medicationList.map((med) => {
              if (!uniqueActiveSub.includes(med.active_substance)) {
                uniqueActiveSub.push(med.active_substance);
                return (
                  <MenuItem value={med.active_substance} key={med.active_substance}>
                    {med.active_substance}
                  </MenuItem>
                );
              }
              return null;
            })}
          </Select>
          <FormHelperText>{requiredActivSubst}</FormHelperText>
        </FormControl>
        <FormControl fullWidth error={!!requiredMedicine}>
          <InputLabel>Lekarstwo</InputLabel>
          <Select
            value={selectedMedicine}
            label="Lekarstwo"
            onChange={handleChangeSelect2}
            onFocus={handleErrorSelect2}
          >
            {medicationList.map((med) => {
              if (med.active_substance === activeSubstance) {
                return (
                  <MenuItem value={med.medication} key={med.medication}>
                    {med.medication}
                  </MenuItem>
                );
              }
              return null;
            })}
          </Select>
          <FormHelperText>{requiredMedicine}</FormHelperText>
        </FormControl>
      </Paper>
      <DrugSummary
        activeKid={activeKid}
        selectedMedicine={selectedMedicine}
        canDrugBeServed={canDrugBeServed}
        setCanDrugBeServed={setCanDrugBeServed}
      />
      {canDrugBeServed ? (
        <Button sx={{ my: 3, mx: 'auto', display: 'table' }} variant="contained" onClick={handleStartNewDrug}>
          Rozpocznij podawanie leku
        </Button>
      ) : null}
    </>
  );
};

export default SelectDrug;
