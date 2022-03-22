import React, { forwardRef, useContext } from 'react';
import axios from 'axios';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import SymSelector from './SymSelector';
import { UserContext } from '../../../context/UserContext';

function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
}

export default function SymScreen({ kidname, open, setOpen }) {
  const userContext = useContext(UserContext);

  const kid = userContext.user.kids.find((kid) => kid.name === kidname);
  const handleSave = (selected) => {
    axios
      .post(`api/diseases/${kid.diseases[0]._id}/symptom`, { selected })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    setOpen(false);
  };

  return (
    <Dialog fullScreen open={open} onClose={() => setOpen(false)} TransitionComponent={forwardRef(Transition)}>
      <SymSelector open={open} onCancel={() => setOpen(false)} onSave={handleSave} />
    </Dialog>
  );
}
