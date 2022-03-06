import React from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const SignUpError = ({ open, setOpen }) => {
  const navigate = useNavigate();

  const handleSignUp = () => {
    setOpen(false);
  };

  const handleSignIn = () => {
    // TODO navigate to login
    navigate('/signin');
  };

  return (
    <Dialog open={open}>
      <DialogTitle>Błąd</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Utworzenie nowego konta nie powiodło się. Sprawdź swoje połączenie z internetem.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleSignUp}>Utwórz inne konto</Button>
        <Button onClick={handleSignIn}>Zaloguj się</Button>
      </DialogActions>
    </Dialog>
  );
};

export default SignUpError;
