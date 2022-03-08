import React from 'react';
import { TextField } from '@mui/material';
import { Controller } from 'react-hook-form';

const ControlledTextField = ({ name, label, fieldType, control }) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue=""
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <TextField
          value={value}
          onChange={onChange}
          label={label}
          type={fieldType}
          margin="dense"
          fullWidth
          variant="outlined"
          error={!!error}
          helperText={error ? error.message : null}
        />
      )}
    />
  );
};

export default ControlledTextField;
