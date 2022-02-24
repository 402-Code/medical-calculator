import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const SignUp = ({ isOpen, setOpen }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleClose = () => {
    setOpen(false);
    setPassword('');
  };

  const handleSignUp = () => {
    setOpen(false);
    // TODO register user
    setEmail('');
    setPassword('');
  };

  return (
    <Dialog open={isOpen} onClose={handleClose}>
      <DialogTitle>Tworzenie nowego konta</DialogTitle>
      <DialogContent>
        <DialogContentText sx={{ pb: 2 }}>Podaj email i hasło aby utworzyć konto w aplikacji.</DialogContentText>
        <TextField
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoFocus
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
      </DialogContent>
      <DialogActions>
        <Button onClick={handleSignUp}>Utówrz konto</Button>
      </DialogActions>
    </Dialog>
  );
};

export default SignUp;
