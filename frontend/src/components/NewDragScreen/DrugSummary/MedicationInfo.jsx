import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  Divider,
  Typography,
} from "@mui/material";
import singleDose from "./toDisplay/singleDose";

const MedicationInfo = ({ activeKid, selectedDrug }) => {
  return (
    <>
      <List sx={{ width: "100%", bgcolor: "transparent", p: 0 }}>
        <Divider variant="middle" />
        <ListItem sx={{ py: 0.5 }}>
          <ListItemText
            primary={
              <Typography variant="body1" color="text.primary">
                Pojedyńcza dawka: {singleDose(activeKid, selectedDrug)}
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

export default MedicationInfo;
