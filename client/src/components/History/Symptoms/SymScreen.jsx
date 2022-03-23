import React, { forwardRef, useContext } from 'react';
import axios from 'axios';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import SymSelector from './SymSelector';
import { UserContext } from '../../../context/UserContext';

// eslint-disable-next-line prefer-arrow-callback
const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function SymScreen({ kidname, open, setOpen }) {
  const { user, refresh } = useContext(UserContext);

  const kid = user.kids.find((kid) => kid.name === kidname);
  const handleSave = async (selected) => {
    await axios.post(`api/diseases/${kid.diseases[0]._id}/symptom`, { selected });
    await refresh();
    setOpen(false);
  };

  return (
    <Dialog fullScreen open={open} onClose={() => setOpen(false)} TransitionComponent={Transition}>
      <SymSelector open={open} onCancel={() => setOpen(false)} onSave={handleSave} />
    </Dialog>
  );
}
