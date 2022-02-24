import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const Register = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleRegister = () => {
    setOpen(false);
    // TODO register user
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open form dialog
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Tworzenie konta</DialogTitle>
        <DialogContent>
          <DialogContentText sx={{ pb: 2 }}>Podaj email i hasło aby utworzyć konto w aplikacji.</DialogContentText>
          <TextField autoFocus margin="dense" label="email" type="email" fullWidth variant="outlined" />
          <TextField margin="dense" label="hasło" type="password" fullWidth variant="outlined" />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleRegister}>Utówrz konto</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Register;
