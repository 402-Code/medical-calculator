import React, { useState, useEffect, useLayoutEffect } from "react";
import { Typography, Paper } from "@mui/material";
import ageInMonths from "../../../utils/ageInMonths";
import MedicationCantBeServed from "./MedicationCantBeServed";
import MedicationInfo from "./MedicationInfo";
import TEMP_DRUG from "../../mocks/tempDrug.json";

//Wyświeltane dane są NIEPOPRAWNE!! trzeba zmienić wyświetlane elementy po dodaniu komponentu Drug Calculations
const medicationList = JSON.parse(JSON.stringify(TEMP_DRUG));

const DrugSummary = ({
  activeKid,
  selectedMedicine,
  canDrugBeServed,
  setCanDrugBeServed,
}) => {
  const [selectedDrug, setSelectedDrug] = useState({});

  useEffect(() => {
    medicationList.map((med) =>
      med.medication === selectedMedicine ? setSelectedDrug(med) : null
    );
  }, [selectedMedicine]);

  useLayoutEffect(() => {
    if (ageInMonths(activeKid) >= selectedDrug.min_access_age_in_months) {
      setCanDrugBeServed(true);
    } else {
      setCanDrugBeServed(false);
    }
  }, [selectedDrug, activeKid]);

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
        : canDrugBeServed === true
          ? <MedicationInfo activeKid={activeKid} selectedDrug={selectedDrug} />
          : <MedicationCantBeServed activeKid={activeKid} selectedDrug={selectedDrug} />
        }
      </Paper>
    </div>
  );
};

const NoMedicationSelected = () => {
  return (
    <Typography variant="body2" sx={{ py: 2 }}>
      Wybierz lekarstwo z listy aby wyświetlić informacje na temat dawkowania
      oraz rozpocząć podawanie leku.
    </Typography>
  );
};

export default DrugSummary;
