import React, { useContext } from "react";
import { ChildContext } from "../../../context/ChildContext";
import { Box, Avatar, Typography } from "@mui/material";

const HistoryName = ({ kidName }) => {
  const { kids } = useContext(ChildContext);
  let kidToDisplay;
  kids.map((kid) => {
    if (kid.name === kidName) {
      kidToDisplay = kid;
    }
  });

  return (
    <Box sx={{ display: "flex", alignItems: "center", m: 1 }}>
      <Avatar
        alt={kidToDisplay.name.slice(0, 2)}
        src={kidToDisplay.avatar}
        sx={{ width: 40, height: 40, mr: 1 }}
      />
      <Typography variant="h5">{kidToDisplay.name}</Typography>
    </Box>
  );
};

export default HistoryName;
