import React, { useState } from "react";
import {
  InputLabel,
  Select,
  MenuItem,
  FormControl,
  Typography,
  Paper,
} from "@mui/material";
import { Link } from "react-router-dom";

const SUBSTANCE = ["Ibuprofen", "Paracetamol"];
const DRUG = [
  "Ibum Forte",
  "Ibufen",
  "Ibuprom",
  "Nurofen",
  "Paracetamol DOZ",
  "Pedicetamol",
  "Apap Junior",
];

const DrugFinder = () => {
//   const [sunstance, setSubstance] = useState("Ibuprofen", "Paracetamol");
//   const [drug, setDrug] = useState(DRUG);

  const [activeSubstance, setActiveSubstance] = useState("");
  const [selectedMedication, setSelectedMedication] = useState("");

  const handleChangeSelect1 = (event) => {
    setActiveSubstance(event.target.value);
  };
  const handleChangeSelect2 = (event) => {
    setSelectedMedication(event.target.value);
  };

  return (
    <div className="drug-finder">
      <Paper elevation={16} square sx={{pb: 4, px: 3}}>
      {/* <Paper variant="outlined" sx={{pb: 4, px: 3}}> */}
      <Typography variant="h5" component="h2" sx={{py: 2}}>
        Wyszukaj lek:
      </Typography>
        <FormControl fullWidth>
          <InputLabel>Substancja czynna</InputLabel>
          <Select
            value={activeSubstance}
            label="Substancja czynna"
            onChange={handleChangeSelect1}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth sx={{mt: 2}}>
          <InputLabel>Lekarstwo</InputLabel>
          <Select
            value={selectedMedication}
            label="Lekarstwo"
            onChange={handleChangeSelect2}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </Paper>

      {/* <form>
        <label htmlFor="substance">
            Substancja czynna
            <select
                id="substance"
                onChange={(e) => {
                    return setSubstance(e.target.value);
                }}
                onBlur={(e) => setSubstance(e.target.value)}
            >
            {SUBSTANCE.map(substance => (
                  <option value={substance} key={substance}>
                      {substance}
                  </option>
                ))}
            </select>
        </label>
        <label htmlFor="drug">
            Lekarstwo
            <select
                id="drug"
                onChange={(e) => setDrug(e.target.value)}
                onBlur={(e) => setDrug(e.target.value)}
        >
            {DRUG.map(drug => (
                  <option value={drug} key={drug}>
                      {drug}
                  </option>
                ))}           
            </select>
        </label>
    </form> */}
    </div>
  );
};

export default DrugFinder;
