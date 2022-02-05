import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  Divider,
  Typography,
} from "@mui/material";

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

export default MedicationCantBeServed;
