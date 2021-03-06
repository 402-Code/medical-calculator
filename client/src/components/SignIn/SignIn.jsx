import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Box, Typography, TextField, Button } from '@mui/material';
import axios from 'axios';
import icon from '../../icons/180.png';
import routes from '../../routes';
import SignUpError from '../SignUp/SignUpError';
import useAuth from '../RequireAuth/useAuth';

const SignIn = () => {
  const { refresh } = useAuth();
  const navigate = useNavigate();
  const [errorDialogOpen, setErrorDialogOpen] = useState(false);
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSignIn = async (e) => {
    e.preventDefault();
    const userData = {
      email,
      password
    };

    try {
      await axios.post('/api/auth/sign-in', userData);
      await refresh();
      navigate(routes.findDrug);
    } catch (err) {
      if (err?.response) setErrorMessage(err?.response?.data?.message);
      setErrorDialogOpen(true);
    }
  };

  const navigateToSignUp = () => {
    navigate(routes.signUp);
  };

  return (
    <>
      <Box component="form" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Card
          elevation={16}
          sx={{
            flexBasis: 350,
            mx: 2,
            my: 3,
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            boxShadow: 'none'
          }}
        >
          <Box sx={{ alignSelf: 'start', display: 'flex', alignItems: 'end', mb: 3 }}>
            <img src={icon} alt="icon" height="35px" loading="lazy" />
            <Typography>Medical Calculator</Typography>
          </Box>
          <Typography variant="h4" component="div">
            Logowanie
          </Typography>
          <SignUpError message={errorMessage} open={errorDialogOpen} setOpen={setErrorDialogOpen} />
          <TextField
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            label="email"
            type="email"
            margin="dense"
            fullWidth
            variant="outlined"
            required
            autoComplete="on"
          />
          <TextField
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            label="has??o"
            type="password"
            margin="dense"
            fullWidth
            variant="outlined"
            required
          />
          <Button type="submit" onClick={handleSignIn} sx={{ alignSelf: 'end', mt: 1 }}>
            Zaloguj si??
          </Button>
        </Card>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 2 }}>
        <Typography variant="p">Nie masz konta?</Typography>
        <Button onClick={navigateToSignUp}>Utw??rz</Button>
      </Box>
    </>
  );
};

export default SignIn;
