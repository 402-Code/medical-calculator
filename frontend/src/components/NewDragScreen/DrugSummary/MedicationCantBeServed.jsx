import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  Divider,
  Typography,
  Alert,
} from "@mui/material";

const MedicationCantBeServed = ({ activeKid }) => {
  const a = activeKid.gender === "female" ? "mała" : "mały";
  return (
    <Alert severity="warning" variant="outlined" sx={{ fontSize: "large" }}>
      {activeKid.name} jest za {a} aby dostać ten lek
    </Alert>
    // <List sx={{ width: "100%", bgcolor: "transparent", p: 0 }}>
    //   <ListItem sx={{ py: 0.5 }}>
    //     <ListItemText
    //       primary={
    //       }
    //     />
    //   </ListItem>
    // </List>
  );
};

export default MedicationCantBeServed;
