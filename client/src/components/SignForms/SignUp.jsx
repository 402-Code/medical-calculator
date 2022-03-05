import React, { useState } from 'react';
import { Card, Box, Typography, TextField, Button } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { TextFieldsOutlined } from '@mui/icons-material';
import { signUpSchema } from './SignUpSchema';
import ControllerTextField from './ControllerTextField';

const SignUp = () => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const { control, handleSubmit } = useForm({
    resolver: yupResolver(signUpSchema)
  });
  // const { control, handleSubmit } = useForm();

  const handleSignUp = (data) => {
    console.log(data);
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
          {/* <Controller
            name="userName"
            control={control}
            defaultValue=""
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField
                value={value}
                onChange={onChange}
                label="Imię"
                type="text"
                margin="dense"
                fullWidth
                variant="outlined"
                error={!!error}
                helperText={error ? error.message : null}
              />
            )}
          /> */}
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
