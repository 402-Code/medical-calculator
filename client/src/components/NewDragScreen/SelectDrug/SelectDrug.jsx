import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { InputLabel, Select, MenuItem, FormControl, Typography, Paper, FormHelperText, Button } from '@mui/material';
import axios from 'axios';
import DrugSummary from './DrugSummary/DrugSummary';
import { UserContext } from '../../../context/UserContext';

const SelectDrug = ({ activeKid }) => {
  const [activeSubstance, setActiveSubstance] = useState('');
  const [selectedMedicine, setSelectedMedicine] = useState('');
  const [requiredActivSubst, setRequiredActivSubst] = useState('');
  const [requiredMedicine, setRequiredMedicine] = useState('');
  const [activeDrug, setActiveDrug] = useState();
  const [drugs, setDrugs] = useState([]);
  const { refresh } = useContext(UserContext);
  const navigate = useNavigate();

  const uniqueActiveSub = [];

  const getDrugFromDataBase = async () => {
    const response = await axios.get(`/api/drugs/${activeKid._id}`);
    setDrugs(response.data);
  };

  useEffect(() => {
    getDrugFromDataBase();
    setSelectedMedicine('');
    setActiveSubstance('');
  }, [activeKid._id]);

  const handleActiveSubstanceChange = (event) => {
    setActiveSubstance(event.target.value);
    setRequiredMedicine('');
  };

  const handleMedicationSelectChange = (event) => {
    const selectedMedicine = event.target.value;
    if (selectedMedicine) {
      const drug = drugs.find(({ name }) => name === selectedMedicine);
      setActiveDrug(drug);
    }
    setSelectedMedicine(selectedMedicine);
  };

  const handleStartNewDrug = async () => {
    if (selectedMedicine === '' && activeSubstance === '') {
      setRequiredActivSubst('Najpierw wybierz substancję czynną');
    } else if (selectedMedicine === '') {
      setRequiredMedicine('Wybierz lekarstwo');
    } else {
      const drug = drugs.find(({ name }) => name === selectedMedicine);
      await axios.post('api/diseases', { initialDrugId: drug._id, kidId: activeKid._id });
      await refresh();
      navigate(`/history/${activeKid.name}`);
    }
  };

  const handleErrorSelect2 = () => {
    if (activeSubstance === '') {
      setRequiredActivSubst('Najpierw wybierz substancję czynną');
    } else {
      setRequiredMedicine('');
    }
  };

  const canDrugBeServed = activeDrug?.isApplicable;

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
            onChange={handleActiveSubstanceChange}
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
            onChange={handleMedicationSelectChange}
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
        activeDrug={activeDrug}
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
