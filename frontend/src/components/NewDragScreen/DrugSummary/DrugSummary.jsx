import React, { useState, useEffect } from "react";
import {
  List,
  ListItem,
  ListItemText,
  Divider,
  Typography,
  Paper,
} from "@mui/material";
import ageInMonths from "../../../utils/ageInMonths";
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

const MedicationCantBeServed = ({ activeKid }) => {
  const a = activeKid.gender === "female" ? "mała" : "mały";
  return (
    <List sx={{ width: "100%", bgcolor: "transparent", p: 0 }}>
      <Divider variant="middle" />
      <ListItem sx={{ py: 0.5 }}>
        <ListItemText
          primary={
            <Typography variant="body1" color="text.primary">
              {activeKid.name} jest za {a} aby dostać ten lek
            </Typography>
          }
        />
      </ListItem>
      <Divider variant="middle" />
    </List>
  );
};

const MedicationInfo = () => {
  return (
    <>
      <List sx={{ width: "100%", bgcolor: "transparent", p: 0 }}>
        <Divider variant="middle" />
        <ListItem sx={{ py: 0.5 }}>
          <ListItemText
            primary={
              <Typography variant="body1" color="text.primary">
                Pojedyńcza dawka:{" "}
                {/* {TEMP_DRUG.weight_based_calculations.dose_per_1kg.amount} */}
                {/* {TEMP_DRUG.weight_based_calculations.dose_per_1kg.unit} */}
              </Typography>
            }
          />
        </ListItem>
        <Divider variant="middle" />
        <ListItem sx={{ py: 0.5 }}>
          <ListItemText
            primary={
              <Typography variant="body1" color="text.primary">
                Odstęp pomiędzy podaniem kolejnych dawek:{" "}
                {/* {TEMP_DRUG.dose_interval_in_hours} godzin */}
              </Typography>
            }
          />
        </ListItem>
        <Divider variant="middle" />
        <ListItem sx={{ py: 0.5 }}>
          <ListItemText
            primary={
              <Typography variant="body1" color="text.primary">
                Maksymalna dawka dzienna:{" "}
                {/* {TEMP_DRUG.weight_based_calculations.max_daily_dose[0].max_per_1kg} */}
                {/* {TEMP_DRUG.weight_based_calculations.max_daily_dose[0].unit} */}
              </Typography>
            }
          />
        </ListItem>
      </List>
    </>
  );
};
export default DrugSummary;
