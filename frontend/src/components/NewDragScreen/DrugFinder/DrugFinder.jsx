import React, { useState, useEffect } from "react";
import {
  InputLabel,
  Select,
  MenuItem,
  FormControl,
  Typography,
  Paper,
} from "@mui/material";
import TEMP_DRUG from "../../mocks/tempDrug.json";

const medicationList = JSON.parse(JSON.stringify(TEMP_DRUG));

const DrugFinder = ({ selectedDrug }) => {
  const [activeSubstance, setActiveSubstance] = useState("");
  const [selectedDrugState, setSelectedDrugState] = useState("");

  let uniqueActiveSub = [];

  const handleChangeSelect1 = (event) => {
    setActiveSubstance(event.target.value);
  };
  const handleChangeSelect2 = (event) => {
    setSelectedDrugState(event.target.value);
  };
  useEffect(() => {
    selectedDrug.current = selectedDrugState;
  }, [selectedDrugState]);

  return (
    <div className="drug-finder">
      <Paper elevation={16} square sx={{ pb: 4, px: 3, boxShadow: "none" }}>
        <Typography variant="h5" component="h2" sx={{ py: 2 }}>
          Wyszukaj lek:
        </Typography>
        <FormControl fullWidth>
          <InputLabel>Substancja czynna</InputLabel>
          <Select
            value={activeSubstance}
            label="Substancja czynna"
            onChange={handleChangeSelect1}
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
        </FormControl>
        <FormControl fullWidth sx={{ mt: 2 }}>
          <InputLabel>Lekarstwo</InputLabel>
          <Select
            value={selectedDrugState}
            label="Lekarstwo"
            onChange={handleChangeSelect2}
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
        </FormControl>
      </Paper>
    </div>
  );
};

export default DrugFinder;
