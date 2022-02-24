import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const SignIn = ({ isOpen, setOpen }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleClose = () => {
    setOpen(false);
    setPassword('');
  };

  const handleSignIn = () => {
    setOpen(false);
    // TODO login user
    setEmail('');
    setPassword('');
  };

  return (
    <Dialog open={isOpen} onClose={handleClose}>
      <DialogTitle>Logowanie</DialogTitle>
      <DialogContent>
        <DialogContentText sx={{ pb: 2 }}>Podaj email i hasło aby się zalogować.</DialogContentText>
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
        <Button onClick={handleSignIn}>Zaloguj się</Button>
      </DialogActions>
    </Dialog>
  );
};

export default SignIn;
