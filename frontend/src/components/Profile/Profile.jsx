import React, { useContext, useState, useEffect } from "react";
import { useNavigate, useParams } from 'react-router-dom'
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
import calculateAge from '../../utils/utils';

function Profile() {
  const [name, setName]=useState('')
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState('');
  const [gender, setGender] = useState("female");
  const [avatar, setAvatar] = useState('');
  const [image, setImage] = useState('');
  const [dob, setDob] = useState('');

  const ctx = useContext(ChildContext);
  const navigate = useNavigate();
  const {kidname} = useParams();

  useEffect(()=>{
    if(kidname !== undefined) {
      populateKidData();
    }
  },[])

  useEffect(() => {
    if (gender === "male") {
      setAvatar(boy);
    } else if (gender === "female") {
      setAvatar(girl);
    }
  }, [gender]);

  useEffect(() => {
    let result = Number((
        ((weight) / (height ** 2 )
        ) * 10000).toFixed(1))
    if (!result || result < 0) {
      result = 0
    }
    setBmi(result);
  }, [weight, height])

  const handleSubmit =(e)=> {
    e.preventDefault();
    let kid={};

    if(kidname !== undefined) {
      kid = updateKid(kidname);

    } else {
      kid = {name, height, weight, gender, bmi, avatar, dob};
    }

    ctx.setKids([...ctx.kids, kid]);
    navigate('/');
  }

  const changeAvatar = () => {
    if (gender === "female") {
      setAvatar(boy);
    } else if (gender === "male") {
      setAvatar(girl);
    }
  };

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      const img = URL.createObjectURL(event.target.files[0]);
      setImage(img);
    }
  };
  const populateKidData = () => {
    const editedKid = ctx.kids.find(kid => kid.name === kidname)
    setName(editedKid.name);
    setWeight(parseInt(editedKid.weight));
    setHeight(editedKid.height);
    setAvatar(editedKid.avatar);
    setBmi(editedKid.bmi);
    setGender(editedKid.gender);
    setDob(editedKid.dob);
  }
  const updateKid=(kidname)=> {
    const editedKid = ctx.kids.filter(kid => kid.name === kidname);
    editedKid.name = name;
    editedKid.height = height;
    editedKid.weight = weight;
    editedKid.gender = gender;
    editedKid.dob = dob;
    const kidIndex = ctx.kids.findIndex(kid => kid.name === kidname);
    ctx.kids.splice(kidIndex, 1);
    return editedKid;
  }

  return (
      <form onSubmit={handleSubmit}>
        <Box className="profile">

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
              sx={{ m: 1, width: 220, backgroundColor: "primary" }}
              InputLabelProps={{ shrink: true }}
              value={dob}
              onChange={e=>setDob(e.target.value)}
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
              id="filled-number"
              type="number"
              InputLabelProps={{ shrink: true }}
              variant="filled"
              value={calculateAge(dob) | 0}
              disabled
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
              sx={{ fontSize: "30" }}
              onChange={(e) => setHeight(e.target.value)}
              id="filled-number"
              type="number"
              InputLabelProps={{ shrink: true }}
              InputProps={{
                endAdornment: <InputAdornment position="end">cm</InputAdornment>,
              }}
              variant="filled"
              value={height}
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
              onChange={(e) => setWeight(e.target.value)}
              id="filled-number"
              type="number"
              InputLabelProps={{ shrink: true }}
              InputProps={{
                endAdornment: <InputAdornment position="end">kg</InputAdornment>,
              }}
              variant="filled"
              value={weight}
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
                value={gender}
                onChange={e=>setGender(e.target.value)}
            >
              <FormControlLabel
                  sx={{ m: "1" }}
                  value="female"
                  control={
                    <Radio/>
                  }
                  label="Dziewczynka"
              />
              <FormControlLabel
                  sx={{ m: "1" }}
                  value='male'
                  control={
                    <Radio/>
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

          <Button variant='contained' color='primary' type='submit'>{kidname ? 'Zapisz zmiany' : 'Dodaj dziecko'}</Button>
        </Box>

      </form>
  );
}

export default Profile;
