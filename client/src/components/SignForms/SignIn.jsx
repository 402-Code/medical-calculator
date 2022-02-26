import React, { useState } from 'react';
import { Card, Box, Typography, TextField, Button } from '@mui/material';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    // TODO login user
    setEmail('');
    setPassword('');
  };

  const navigateToSignUp = () => {
    // TODO
  };

  return (
    <>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
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
            Logowanie
          </Typography>
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
          <Button onClick={handleSignIn} sx={{ alignSelf: 'end', mt: 1 }}>
            Zaloguj się
          </Button>
        </Card>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 2 }}>
        <Typography variant="p">Nie masz konta?</Typography>
        <Button onClick={navigateToSignUp}>Utwórz</Button>
      </Box>
    </>
  );
};

export default SignIn;
