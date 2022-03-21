import React, { forwardRef, useState } from 'react';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import SymSelector from './SymSelector';

const Transition = (props, ref) => {
  return <Slide direction="up" ref={ref} {...props} />;
};

export default function SymScreen({ open, setOpen }) {
  const [symptoms, setSymptoms] = useState([]);

  const handleSave = (selected) => {
    setSymptoms(selected);
    setOpen(false);
  };

  return (
    <Dialog fullScreen open={open} onClose={() => setOpen(false)} TransitionComponent={forwardRef(Transition)}>
      <SymSelector open={open} symptoms={symptoms} onCancel={() => setOpen(false)} onSave={handleSave} />
    </Dialog>
  );
}
