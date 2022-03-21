import React, { useContext, useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
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
} from '@mui/material';
import boy from '../../img/avatars/boy.png';
import girl from '../../img/avatars/girl.png';
import './Profile.scss';
import { UserContext } from '../../context/UserContext';
import calculateAge from '../../utils/utils';
import today from '../../utils/today';
import routes from '../../routes';

function Profile() {
  const [name, setName] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState('');
  const [gender, setGender] = useState('female');
  const [avatar, setAvatar] = useState('');
  const [image, setImage] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');

  const ctx = useContext(UserContext);
  const navigate = useNavigate();

  const { kidname } = useParams();

  let isNameTaken;
  if (ctx.user.kids) {
    isNameTaken = ctx.user.kids?.some((item) => item.name.toLowerCase() === name.toLowerCase());
  }

  const location = window.location.pathname;

  const populateKidData = () => {
    const editedKid = ctx.user.kids.find((kid) => kid.name === kidname);
    setName(editedKid.name);
    setWeight(editedKid.weight);
    setHeight(editedKid.height);
    setAvatar(editedKid.avatar);
    setBmi(editedKid.bmi);
    setGender(editedKid.gender);
    setDateOfBirth(editedKid.dateOfBirth);
  };

  useEffect(() => {
    if (kidname !== undefined) {
      populateKidData();
    }
  }, []);

  useEffect(() => {
    if (gender === 'male') {
      setAvatar(boy);
    } else if (gender === 'female') {
      setAvatar(girl);
    }
  }, [gender]);

  useEffect(() => {
    let result = Number(((weight / height ** 2) * 10000).toFixed(1));
    if (!result || result < 0) {
      result = 0;
    }
    setBmi(result);
  }, [weight, height]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userId = ctx.user.id;
    const kid = { name, height, weight, gender, avatar, dateOfBirth };

    if (kidname) {
      const kidId = ctx.user.kids.find((kid) => kid.name === kidname)._id;
      await axios.put(`/api/users/${userId}/kids/${kidId}`, kid);
    } else {
      await axios.post(`/api/users/${userId}/kids`, kid);
    }

    await ctx.refresh();
    navigate(routes.findDrug);
  };

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      const img = URL.createObjectURL(event.target.files[0]);
      setImage(img);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box className="profile">
        <Fab className="profile__avatar" component="label" sx={{ alignSelf: 'center', pl: 0.5 }}>
          <Avatar src={!image ? avatar : image} sx={{ width: 80, height: 80 }} />
          <input type="file" hidden onChange={onImageChange} />
        </Fab>

        <TextField
          error={!!(isNameTaken && location === '/addkid')}
          className="profile__item"
          id="filled-basic"
          label={isNameTaken && location === '/addkid' ? `Imię już istnieje` : `Imię`}
          variant="filled"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <Typography className="profile__description" variant="subtitle1" gutterBottom component="div">
          Data urodzenia:
        </Typography>

        <TextField
          id="date"
          type="date"
          sx={{ m: 1, width: 220, backgroundColor: 'primary' }}
          InputProps={{ inputProps: { max: today } }}
          InputLabelProps={{ shrink: true }}
          value={dateOfBirth.substring(0, 10)}
          onChange={(e) => setDateOfBirth(e.target.value)}
          required
        />

        <Typography className="profile__description" variant="subtitle1" gutterBottom component="div">
          Wzrost:
        </Typography>

        <TextField
          sx={{ fontSize: '30' }}
          onChange={(e) => setHeight(e.target.value)}
          id="filled-number"
          type="number"
          InputLabelProps={{ shrink: true }}
          InputProps={{
            endAdornment: <InputAdornment position="end">cm</InputAdornment>
          }}
          variant="filled"
          value={height}
          required
        />

        <Typography className="profile__description" variant="subtitle1" gutterBottom component="div">
          Waga:
        </Typography>

        <TextField
          onChange={(e) => setWeight(e.target.value)}
          id="filled-number"
          type="number"
          InputLabelProps={{ shrink: true }}
          InputProps={{
            endAdornment: <InputAdornment position="end">kg</InputAdornment>
          }}
          variant="filled"
          value={weight}
          required
        />

        <Typography className="profile__description" variant="subtitle1" gutterBottom component="div">
          Płeć:
        </Typography>
        <FormControl className="profile__item">
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <FormControlLabel sx={{ m: '1' }} value="female" control={<Radio />} label="Dziewczynka" />
            <FormControlLabel sx={{ m: '1' }} value="male" control={<Radio />} label="Chłopiec" />
          </RadioGroup>
        </FormControl>

        <Typography className="profile__description" variant="subtitle1" gutterBottom component="div">
          Wiek:
        </Typography>

        <Typography className="profile__item" variant="subtitle1" gutterBottom component="div">
          {calculateAge(dateOfBirth) * 12 || ''} mies
        </Typography>

        <Typography className="profile__description" variant="subtitle1" gutterBottom component="div">
          BMI:
        </Typography>
        <Typography className="profile__item" variant="subtitle1" gutterBottom component="div">
          {bmi}
        </Typography>

        <Button variant="contained" color="primary" type="submit">
          {kidname ? 'Zapisz zmiany' : 'Dodaj dziecko'}
        </Button>
      </Box>
    </form>
  );
}

export default Profile;