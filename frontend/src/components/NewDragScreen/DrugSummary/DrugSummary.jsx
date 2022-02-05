import React, { useState, useEffect } from "react";
import {
  Typography,
  Paper,
} from "@mui/material";
import ageInMonths from "../../../utils/ageInMonths";
import MedicationCantBeServed from "./MedicationCantBeServed"
import MedicationInfo from "./MedicationInfo"
import TEMP_DRUG from "../../mocks/tempDrug.json";

//Wyświeltane dane są NIEPOPRAWNE!! trzeba zmienić wyświetlane elementy po dodaniu komponentu Drug Calculations
const medicationList = JSON.parse(JSON.stringify(TEMP_DRUG));

const DrugSummary = ({ activeKid, selectedMedicine }) => {
  const [selectedDrug, setSelectedDrug] = useState({});

  useEffect(() => {
    medicationList.map((med) =>
      med.medication === selectedMedicine ? setSelectedDrug(med) : null
    );
  }, [selectedMedicine]);

  return (
    <div className="drug-summary">
      <Paper
        elevation={16}
        square
        sx={{ mt: 4, pb: 4, px: 3, boxShadow: "none" }}
      >
      <Typography variant="h5" component="h2" sx={{ py: 2 }}>
        Informacje o wybranym leku:
      </Typography>
        { selectedMedicine === ""
        ? <NoMedicationSelected />
        : ageInMonths(activeKid) >= selectedDrug.min_access_age_in_months
          ? <MedicationInfo />
          : <MedicationCantBeServed activeKid={activeKid}/>
        }
      </Paper>
    </div>
  );
};

const NoMedicationSelected = () => {
  return (
    <Typography variant="body2" sx={{ py: 2 }}>
      Wybierz lekarstwo z listy aby wyświetlić informacje na temat dawkowania
    </Typography>
  );
};

export default DrugSummary;
