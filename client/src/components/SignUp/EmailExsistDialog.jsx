import React from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';

const EmailExsistDialog = ({ message, open, setOpen }) => {
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open alert dialog
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        // aria-labelledby="alert-dialog-title"
        // aria-describedby="alert-dialog-description"
      >
        {/* <DialogTitle id="alert-dialog-title">Use Google's location service?</DialogTitle> */}
        <DialogContent>
          <DialogContentText id="alert-dialog-description">{message}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Załóż nowe konto</Button>
          <Button onClick={handleClose} autoFocus>
            Zaloguj się
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default EmailExsistDialog;
