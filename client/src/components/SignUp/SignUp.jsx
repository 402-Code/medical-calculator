import React, { useState } from 'react';
import axios from 'axios';
import { Card, Box, Typography, Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { signUpSchema } from './SignUpSchema';
import ControllerTextField from './ControllerTextField';
import EmailExsistDialog from './EmailExsistDialog';

const SERVER_ADDRESS = 'http://localhost:3000';

const SignUp = () => {
  const [emailDialogOpen, setEmailDialogOpen] = useState(false);
  const [resMessage, setResMessage] = useState('');
  const { control, handleSubmit } = useForm({
    resolver: yupResolver(signUpSchema)
  });

  const handleSignUp = async (user) => {
    let response;
    try {
      response = await axios.post(`${SERVER_ADDRESS}/api/auth/sign-up`, {
        username: user.imię,
        email: user.email,
        password: user.confirmPassword
      });
      console.log(response);
      // TODO login

      // const res = JSON.parse(response);
      if (response.data.message) {
        setResMessage(response.message);
        setEmailDialogOpen(true);
      }
    } catch (err) {
      console.log(err);
    }
  };

  // TODO clean textFields

  // TODO navigate to ADDKID or REGISTER again

  const navigateToSignIn = () => {
    // TODO
  };

  return (
    <>
      <EmailExsistDialog message={resMessage} open={emailDialogOpen} setOpen={setEmailDialogOpen} />
      <Box component="form" sx={{ display: 'flex', justifyContent: 'center' }}>
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
          <ControllerTextField name="imię" label="Imię" fieldType="text" control={control} />
          <ControllerTextField name="email" label="email" fieldType="text" control={control} />
          <ControllerTextField name="hasło" label="hasło" fieldType="password" control={control} />
          <ControllerTextField name="confirmPassword" label="potwierdź hasło" fieldType="password" control={control} />
          <Button type="submit" onClick={handleSubmit(handleSignUp)} sx={{ alignSelf: 'end', mt: 1 }}>
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
