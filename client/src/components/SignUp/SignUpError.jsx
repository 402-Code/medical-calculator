import React from 'react';
import { Alert, Collapse } from '@mui/material';

const SignUpError = ({ message = 'Nie udało się utworzyć konta. Sprawdź połączenie z internetem.', open, setOpen }) => {
  return (
    <Collapse in={open}>
      <Alert onClose={() => setOpen(false)} severity="error" variant="filled" sx={{ fontSize: 'large', my: 2 }}>
        {message}
      </Alert>
    </Collapse>
  );
};

export default SignUpError;
