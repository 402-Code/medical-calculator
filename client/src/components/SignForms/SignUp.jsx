import React from 'react';
import { Card, Box, Typography, Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { signUpSchema } from './SignUpSchema';
import ControllerTextField from './ControllerTextField';

const SignUp = () => {
  const { control, handleSubmit } = useForm({
    resolver: yupResolver(signUpSchema)
  });
  const handleSignUp = (data) => {
    console.log(data);
    // TODO register user
  };

  const navigateToSignIn = () => {
    // TODO
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
            <img src="/180.png" alt="icon" height="35px" loading="lazy" />
            <Typography>Medical Calculator</Typography>
          </Box>
          <Typography variant="h4" component="div">
            Tworzenie konta
          </Typography>
          <ControllerTextField name="userName" label="Imię" fieldType="text" control={control} />
          <ControllerTextField name="mail" label="email" fieldType="text" control={control} />
          <ControllerTextField name="password" label="hasło" fieldType="password" control={control} />
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
