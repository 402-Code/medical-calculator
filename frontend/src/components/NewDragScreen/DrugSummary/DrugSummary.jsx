import React, { useEffect, useState } from "react";
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
import TEMP_KIDS from "../../mocks/tempKids";

//Wyświeltane dane są NIEPOPRAWNE!! trzeba zmienić wyświetlane elementy po dodaniu komponentu Drug Calculations
const medicationList = JSON.parse(JSON.stringify(TEMP_DRUG));

const DrugSummary = ({ activeKid, selectedDrug }) => {
  const [selectedDrugObject, setSDO] = useState({});
  
  useEffect(() => {
    medicationList.map((med) => {
      if (med.medication === selectedDrug) {
        setSDO(med);
      }
    });
  }, [selectedDrug]);
  
  return (
    <div className="drug-summary">
      <Paper
        elevation={8}
        square
        sx={{ mt: 4, pb: 4, px: 3, boxShadow: "none" }}
      >
        { selectedDrug === ""
        ? <NoMedicationSelected />
        : ageInMonths(TEMP_KIDS[0]) >= selectedDrugObject.min_access_age_in_months
          ? <MedicationInfo />
          : <MedicationCantBeServed />
        }
      </Paper>
    </div>
  );
};

const NoMedicationSelected = () => {
  return (
    <Typography variant="body2" sx={{ py: 2 }}>
      Wybierz lekarstwo z listy aby wyświetlić informacje o dawkowaniu
    </Typography>
  );
};

const MedicationCantBeServed = () => {
  return (
    <Typography variant="h5" component="h2" sx={{ py: 2 }}>
      Nie można podać wybranego leku w tym wieku
    </Typography>
  );
};

const MedicationInfo = () => {
  return (
    <>
      <Typography variant="h5" component="h2" sx={{ py: 2 }}>
        Informacje o wybranym leku:
      </Typography>
      <List sx={{ width: "100%", bgcolor: "transparent", p: 0 }}>
        <ListItem sx={{ py: 0.5 }}>
          <ListItemText
            primary={
              <Typography variant="body1" color="text.primary">
                Czy ten lek może być podany w tym wieku?
              </Typography>
            }
          />
        </ListItem>
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
