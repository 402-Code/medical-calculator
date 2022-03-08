import React, { useState } from 'react';
import axios from 'axios';
import { Card, Box, Typography, Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import { routes } from '../../routes';
import { signUpSchema } from './SignUpSchema';
import icon from '../../icons/180.png';
import ControlledTextField from './ControlledTextField';
import SignUpError from './SignUpError';

const SignUp = () => {
  const navigate = useNavigate();
  const [errorDialogOpen, setErrorDialogOpen] = useState(true);
  const [errorMessage, setErrorMessage] = useState();
  const { control, handleSubmit, reset } = useForm({
    resolver: yupResolver(signUpSchema)
  });

  const handleSignUp = async (user) => {
    try {
      await axios.post('/api/auth/sign-up', {
        username: user.imię,
        email: user.email,
        password: user.confirmPassword
      });
      navigate(routes.signIn);
    } catch (err) {
      // TODO sprawdzić czy error jest typu Axios
      setErrorMessage(err.response.data.message);
      setErrorDialogOpen(true);
      reset();
    }
  };

  const navigateToSignIn = () => {
    // TODO navigate to login
    navigate('signin');
  };

  return (
    <>
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
            <img src={icon} alt="icon" height="35px" loading="lazy" />
            <Typography>Medical Calculator</Typography>
          </Box>
          <Typography variant="h4" component="div">
            Tworzenie konta
          </Typography>
          <SignUpError message={errorMessage} open={errorDialogOpen} setOpen={setErrorDialogOpen} />
          <ControlledTextField name="imię" label="Imię" fieldType="text" control={control} />
          <ControlledTextField name="email" label="email" fieldType="text" control={control} />
          <ControlledTextField name="hasło" label="hasło" fieldType="password" control={control} />
          <ControlledTextField name="confirmPassword" label="potwierdź hasło" fieldType="password" control={control} />
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
