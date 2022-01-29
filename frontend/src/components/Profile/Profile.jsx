import React, { useContext, useState } from "react";
import { useNavigate } from 'react-router-dom'
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
    Button
} from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import boy from "../../img/avatars/boy.png";
import girl from "../../img/avatars/girl.png";
// import '@fontsource/roboto/500.css';
import "./Profile.scss";
import { ChildContext } from "../../context/ChildContext";

function Profile() {
  const [name, setName]=useState('')
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [bmi, setBmi] = useState(0);
  const [age, setAge] = useState(0);
  const [gender, setGender] = useState("");
  const [avatar, setAvatar] = useState();
  const [image, setImage] = useState("");
  
  const ctx = useContext(ChildContext);
  const navigate = useNavigate();

  const handleSubmit =(e)=> {
    e.preventDefault();
    const kid = {name, age, height, weight, gender, bmi, avatar};
    ctx.setKids([...ctx.kids, kid]);
    console.log({name, age, height, weight, gender, bmi, avatar});
    navigate('/');
  }

  const changeAvatar = () => {
    if (gender === "female") {
      setAvatar(boy);
    } else if (gender === "male") {
      setAvatar(girl);
    }
  };

  const handleBmi = () => {
    const result = Number(
      ((weight / height ** 2) * 100000).toFixed(1)
    );
    setBmi(result);
  };

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      const img = URL.createObjectURL(event.target.files[0]);
      setImage(img);
    }
  };

  return (
      <Box className="profile">
        <form onSubmit={handleSubmit}>
        <Fab className="profile__avatar" component="label">
          <Avatar
            src={!image ? avatar : image}
            sx={{ width: 100, height: 100 }}
          />
          <input type="file" hidden onChange={onImageChange} />
        </Fab>

        <TextField
          className="profile__item"
          id="filled-basic"
          label="Imię"
          variant="filled"
          value={name}
          onChange={(e)=>setName(e.target.value)}
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
            Wiek:
          </Typography>

          <TextField
              sx={{ fontSize: "30" }}
              onChange={(e) => setAge(e.target.value)}
              id="filled-number"
              type="number"
              InputLabelProps={{ shrink: true }}
              variant="filled"
              value={age}
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
          onChange={(e) => setHeight(e.target.value)}
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
          onChange={(e) => setWeight(e.target.value)}
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
                    setGender(e.target.value);
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
                    setGender(e.target.value);
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
          {!bmi ? "0" : bmi}
        </Typography>

          <Button variant='contained' color='primary' type='submit'>Karyna dodaj bombelka</Button>
        </form>
      </Box>
  );
}

export default Profile;
