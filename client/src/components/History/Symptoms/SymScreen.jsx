import React, { forwardRef, useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import SymSelector from './SymSelector';

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function SymScreen({ symptoms, onChange }) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleSave = (selected) => {
    onChange(selected);
    setOpen(false);
  };

  return (
    <div>
      <Button sx={{ color: '#2196F3' }} className="doses__item" onClick={handleClickOpen}>
        Dodaj
      </Button>
      <Dialog fullScreen open={open} onClose={() => setOpen(false)} TransitionComponent={Transition}>
        <SymSelector open={open} symptoms={symptoms} onCancel={() => setOpen(false)} onSave={handleSave} />
      </Dialog>
    </div>
  );
}
