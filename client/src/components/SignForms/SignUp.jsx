import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const SignUp = ({ isOpen, setOpen }) => {
  const handleClose = () => {
    setOpen(false);
  };

  const handleSignUp = () => {
    setOpen(false);
    // TODO register user
  };

  return (
    <Dialog open={isOpen} onClose={handleClose}>
      <DialogTitle>Tworzenie nowego konta</DialogTitle>
      <DialogContent>
        <DialogContentText sx={{ pb: 2 }}>Podaj email i hasło aby utworzyć konto w aplikacji.</DialogContentText>
        <TextField autoFocus margin="dense" label="email" type="email" fullWidth variant="outlined" />
        <TextField margin="dense" label="hasło" type="password" fullWidth variant="outlined" />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleSignUp}>Utówrz konto</Button>
      </DialogActions>
    </Dialog>
  );
};

export default SignUp;
