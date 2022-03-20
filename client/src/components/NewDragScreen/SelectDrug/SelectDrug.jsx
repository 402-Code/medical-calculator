import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { InputLabel, Select, MenuItem, FormControl, Typography, Paper, FormHelperText, Button } from '@mui/material';
import axios from 'axios';
import DrugSummary from './DrugSummary/DrugSummary';


const SelectDrug = ({ setSelectedDrug, activeKid }) => {
  const [activeSubstance, setActiveSubstance] = useState('');
  const [selectedMedicine, setSelectedMedicine] = useState('');
  const [requiredActivSubst, setRequiredActivSubst] = useState('');
  const [requiredMedicine, setRequiredMedicine] = useState('');
  const [canDrugBeServed, setCanDrugBeServed] = useState(false);
  const [drugs, setDrugs] = useState([]);
  const navigate = useNavigate();

  const uniqueActiveSub = [];

  const getDrugFromDataBase = async () => {
    // eslint-disable-next-line no-underscore-dangle
    const response = await axios.get(`/api/drugs/${activeKid._id}`)
    setDrugs(response.data)
  }

  // Reset selected drug on component render
  useEffect(() => {
    setSelectedDrug({});
    getDrugFromDataBase()
  }, [activeKid._id]);

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
      drugs.map((med) => (med.name === selectedMedicine ? setSelectedDrug(med) : null));
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
            defaultValue=""
          >
            {drugs.map((med) => {
              if (!uniqueActiveSub.includes(med.activeIngredient)) {
                uniqueActiveSub.push(med.activeIngredient);
                return (
                  <MenuItem value={med.activeIngredient} key={med.activeIngredient}>
                    {med.activeIngredient}
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
            defaultValue=""
          >
            {drugs.map((med) => {
              if (med.activeIngredient === activeSubstance) {
                return (
                  <MenuItem value={med.name} key={med.name}>
                    {med.name}
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
        drugs={drugs}
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
