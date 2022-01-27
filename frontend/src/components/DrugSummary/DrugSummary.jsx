import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  Divider,
  Typography,
} from "@mui/material";

//Wyświeltane dane są NIEPOPRAWNE!! trzeba zmienić wyświetlane elementy po dodaniu komponentu Drug Calculations

const DrugSummary = ({ drug }) => {
  return (
    <div className="drug-summary">
      <Typography variant="h5" component="div">
        Informacje o wybranym leku:
      </Typography>
      <List sx={{ width: "100%", bgcolor: "background.paper", p: "0" }}>
        <ListItem>
          <ListItemText
            primary={
              <Typography variant="body1" color="text.primary">
                Mininamlny wiek podania leku: {drug.min_access_age_in_months}{" "}
                miesiące*
              </Typography>
            }
          />
        </ListItem>
        <Divider variant="middle" />
        <ListItem>
          <ListItemText
            primary={
              <Typography variant="body1" color="text.primary">
                Pojedyńcza dawka:{" "}
                {drug.weight_based_calculations.dose_per_1kg.amount}
                {drug.weight_based_calculations.dose_per_1kg.unit}
              </Typography>
            }
          />
        </ListItem>
        <Divider variant="middle" />
        <ListItem>
          <ListItemText
            primary={
              <Typography variant="body1" color="text.primary">
                Odstęp pomiędzy podaniem kolejnych dawek:{" "}
                {drug.dose_interval_in_hours} godzin
              </Typography>
            }
          />
        </ListItem>
        <Divider variant="middle" />
        <ListItem>
          <ListItemText
            primary={
              <Typography variant="body1" color="text.primary">
                Maksymalna dawka dzienna:{" "}
                {drug.weight_based_calculations.max_daily_dose[0].max_per_1kg}
                {drug.weight_based_calculations.max_daily_dose[0].unit}
              </Typography>
            }
          />
        </ListItem>
        <Divider variant="middle" />
      </List>
    </div>
  );
};

export default DrugSummary;
