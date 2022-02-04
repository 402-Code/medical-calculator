import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  InputLabel,
  Select,
  MenuItem,
  FormControl,
  Typography,
  Paper,
  FormHelperText,
  Button,
} from "@mui/material";
import DrugSummary from "../DrugSummary/DrugSummary";
import TEMP_DRUG from "../../mocks/tempDrug.json";

const medicationList = JSON.parse(JSON.stringify(TEMP_DRUG));

const SelectDrug = ({ selectedDrug, activeKid }) => {
  const [activeSubstance, setActiveSubstance] = useState("");
  const [selectedDrugState, setSelectedDrugState] = useState("");
  const [requiredActivSubst, setRequiredActivSubst] = useState("");
  const [requiredMedicine, setRequiredMedicine] = useState("");
  let navigate = useNavigate();

  let uniqueActiveSub = [];

  const handleChangeSelect1 = (event) => {
    setActiveSubstance(event.target.value);
    setRequiredMedicine("");
  };
  const handleChangeSelect2 = (event) => {
    setSelectedDrugState(event.target.value);
  };
  useEffect(() => {
    selectedDrug.current = selectedDrugState;
  }, [selectedDrugState]);

  function handleStartNewDrug() {
    if (selectedDrug.current === "" && activeSubstance === "") {
      setRequiredActivSubst("Najpierw wybierz substancję czynną");
    } else if (selectedDrug.current === "") {
      setRequiredMedicine("Wybierz lekarstwo");
    } else {
      navigate("/history/" + activeKid.current.name);
    }
  }

  const handleErrorSelect2 = () => {
    if (activeSubstance === "") {
      setRequiredActivSubst("Najpierw wybierz substancję czynną");
    } else {
      setRequiredMedicine("");
    }
  };

  return (
    <>
      <Paper elevation={16} square sx={{ pb: 4, px: 3, boxShadow: "none" }}>
        <Typography variant="h5" component="h2" sx={{ py: 2 }}>
          Wyszukaj lek:
        </Typography>
        <FormControl fullWidth sx={{ mb: 2 }} error={!!requiredActivSubst}>
          <InputLabel>Substancja czynna</InputLabel>
          <Select
            value={activeSubstance}
            label="Substancja czynna"
            onChange={handleChangeSelect1}
            onFocus={() => setRequiredActivSubst("")}
          >
            {medicationList.map((med) => {
              if (!uniqueActiveSub.includes(med.active_substance)) {
                uniqueActiveSub.push(med.active_substance);
                return (
                  <MenuItem
                    value={med.active_substance}
                    key={med.active_substance}
                  >
                    {med.active_substance}
                  </MenuItem>
                );
              }
            })}
          </Select>
          <FormHelperText>{requiredActivSubst}</FormHelperText>
        </FormControl>
        <FormControl fullWidth error={!!requiredMedicine}>
          <InputLabel>Lekarstwo</InputLabel>
          <Select
            value={selectedDrugState}
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
            })}
          </Select>
          <FormHelperText>{requiredMedicine}</FormHelperText>
        </FormControl>
      </Paper>
      <DrugSummary activeKid={activeKid} selectedDrug={selectedDrugState} />
      <Button
        sx={{ my: 3, mx: "auto", display: "table" }}
        variant="contained"
        onClick={handleStartNewDrug}
      >
        Rozpocznij podawanie leku
      </Button>
    </>
  );
};

export default SelectDrug;
