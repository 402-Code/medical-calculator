import React, { useState } from 'react';
import { Card, Box, Typography, TextField, Button } from '@mui/material';

const SignUp = () => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = () => {
    // TODO register user
    setUserName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  const navigateToSignIn = () => {
    // TODO
  };

  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
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
            <img src="/180.png" alt="icon" height="35px" loading="lazy" />
            <Typography>Medical Calculator</Typography>
          </Box>
          <Typography variant="h4" component="div">
            Tworzenie konta
          </Typography>
          <TextField
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            label="Imię"
            type="text"
            margin="dense"
            fullWidth
            variant="outlined"
          />
          <TextField
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            label="email"
            type="email"
            margin="dense"
            fullWidth
            variant="outlined"
          />
          <TextField
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            label="hasło"
            type="password"
            margin="dense"
            fullWidth
            variant="outlined"
          />
          <TextField
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            label="potwierdź hasło"
            type="password"
            margin="dense"
            fullWidth
            variant="outlined"
          />
          <Button onClick={handleSignUp} sx={{ alignSelf: 'end', mt: 1 }}>
            Utwórz konto
          </Button>
        </Card>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 2 }}>
        <Typography variant="p">Masz już konto?</Typography>
        <Button onClick={navigateToSignIn}>Zaloguj się</Button>
      </Box>
    </>
  );
};

export default SignUp;
