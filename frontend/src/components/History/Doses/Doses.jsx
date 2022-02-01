import React, { useEffect } from "react";
import {
  Checkbox,
  Typography,
  Box,
  Button,
  TextField,
  InputAdornment,
} from "@mui/material";
import "./Doses.scss";

const Doses = ({ drug }) => {
  const [checked, setChecked] = React.useState(false);
  const [time, setTime] = React.useState(0);

  const titlesArray = [
    "Godzina",
    "Nazwa leku",
    "Dawka",
    "Temperatura",
    "Objawy",
  ].map((item, key) => (
    <Typography
      key={key}
      className="doses__titles"
      sx={{ fontSize: "10px" }}
      variant="subtitle2"
      component="div"
    >
      {item}
    </Typography>
  ));

  useEffect(() => {
    const now = new Date();
    const hour = now.getHours();
    let minutes = now.getMinutes();
    if (minutes < 10) {
      minutes = "0" + minutes;
    }

    const currentTime = `${hour}:${minutes}`;
    const defaultTime = ["8:00", "14:00", "20:00", "02:00"];

    if (!checked) {
      setTime(defaultTime);
    } else {
      setTime(currentTime);
    }
  }, [checked]);

  const dose = [1, 2, 3, 4].map((item, key) => {
    return (
      <Box
        key={key}
        value={item}
        className="doses__items"
        component="div"
        sx={{ border: "2px solid black" }}
      >
        <Typography
          key={key}
          className="doses__item"
          sx={{ fontSize: "10px" }}
          variant="subtitle2"
          component="div"
        >
          {time}
        </Typography>
        <Typography
          className="doses__item"
          sx={{ fontSize: "10px" }}
          variant="subtitle2"
          component="div"
        >
          {drug.medication}
        </Typography>
        <Typography
          className="doses__item"
          sx={{ fontSize: "10px" }}
          variant="subtitle2"
          component="div"
        >
          {drug.weight_based_calculations.dose_per_1kg.amount}
          {drug.weight_based_calculations.dose_per_1kg.unit}
        </Typography>
        <TextField
          className="doses__item"
          sx={{ width: "50px" }}
          inputProps={{ style: { fontSize: 11 } }}
          id="standard-number"
          type="number"
          variant="standard"
          InputProps={{
            endAdornment: <InputAdornment position="end">°C</InputAdornment>,
          }}
          aria-describedby="standard--helper-text"
        />

        <Button
          sx={{ fontSize: "9px" }}
          className="doses__description"
          variant="text"
        >
          Dodaj
        </Button>
        <Checkbox
          onChange={(e) => setChecked(e.target.checked)}
          color="default"
        />
      </Box>
    );
  });

  return (
    <Box
      className="doses"
      component="div"
      sx={{ p: 2, border: "2px solid black" }}
    >
      <Box
        className="doses__header"
        component="div"
        sx={{ border: "2px solid black" }}
      >
        {titlesArray}
      </Box>
      <Box>{dose}</Box>
    </Box>
  );
};

export default Doses;
