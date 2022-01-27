import React, { useContext } from "react";
import {
  Fab,
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  InputAdornment,
  Box,
  Avatar,
  Typography,
} from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import boy from "../../img/avatars/boy.png";
import girl from "../../img/avatars/girl.png";
// import '@fontsource/roboto/500.css';
import "./Profile.scss";
import { KidContext } from "../../context/KidConext";

function Profile() {
  const context = useContext(KidContext);

  const changeAvatar = () => {
    if (context.gender === "female") {
      context.setAvatar(boy);
    } else if (context.gender === "male") {
      context.setAvatar(girl);
    }
  };

  const handleBmi = () => {
    const result = Number(
      ((context.weight / context.height ** 2) * 100000).toFixed(1)
    );
    context.setBmi(result);
  };

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      const img = URL.createObjectURL(event.target.files[0]);
      context.setImage(img);
    }
  };

  return (
    <>
      <Box className="profile">
        <Fab className="profile__avatar" component="label">
          <Avatar
            src={!context.image ? context.avatar : context.image}
            sx={{ width: 100, height: 100 }}
          />
          <input type="file" hidden onChange={onImageChange} />
        </Fab>

        <TextField
          className="profile__item"
          id="filled-basic"
          label="Imię"
          variant="filled"
        />

        <Typography
          className="profile__description"
          variant="subtitle1"
          gutterBottom
          component="div"
        >
          Data urodzenia:
        </Typography>

        <TextField
          id="date"
          type="date"
          defaultValue="dd-MM-yyyy"
          sx={{ m: 1, width: 220, backgroundColor: "primary" }}
          InputLabelProps={{ shrink: true }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <CalendarTodayIcon />
              </InputAdornment>
            ),
          }}
        />

        <Typography
          className="profile__description"
          variant="subtitle1"
          gutterBottom
          component="div"
        >
          Wzrost:
        </Typography>

        <TextField
          onKeyDown={handleBmi}
          sx={{ fontSize: "30" }}
          onChange={(e) => context.setHeight(e.target.value)}
          id="filled-number"
          type="number"
          InputLabelProps={{ shrink: true }}
          InputProps={{
            endAdornment: <InputAdornment position="end">cm</InputAdornment>,
          }}
          variant="filled"
        />

        <Typography
          className="profile__description"
          variant="subtitle1"
          gutterBottom
          component="div"
        >
          Waga:
        </Typography>

        <TextField
          onKeyDown={handleBmi}
          onChange={(e) => context.setWeight(e.target.value)}
          id="filled-number"
          type="number"
          InputLabelProps={{ shrink: true }}
          InputProps={{
            endAdornment: <InputAdornment position="end">kg</InputAdornment>,
          }}
          variant="filled"
        />

        <Typography
          className="profile__description"
          variant="subtitle1"
          gutterBottom
          component="div"
        >
          Płeć:
        </Typography>
        <FormControl className="profile__item">
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel
              sx={{ m: "1" }}
              value="female"
              control={
                <Radio
                  onChange={(e) => {
                    context.setGender(e.target.value);
                    changeAvatar();
                  }}
                />
              }
              label="Dziewczynka"
            />
            <FormControlLabel
              sx={{ m: "1" }}
              value="male"
              control={
                <Radio
                  onChange={(e) => {
                    context.setGender(e.target.value);
                    changeAvatar();
                  }}
                />
              }
              label="Chłopiec"
            />
          </RadioGroup>
        </FormControl>

        <Typography
          className="profile__description"
          variant="subtitle1"
          gutterBottom
          component="div"
        >
          BMI:
        </Typography>
        <Typography
          className="profile__item"
          variant="subtitle1"
          gutterBottom
          component="div"
        >
          {!context.bmi ? "0" : context.bmi}
        </Typography>
      </Box>
    </>
  );
}

export default Profile;
