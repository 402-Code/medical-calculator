import React, { forwardRef, useContext, useState } from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import SymSelector from './SymSelector';
import {UserContext} from '../../../context/UserContext';

const Transition = (props, ref) => {
  return <Slide direction="up" ref={ref} {...props} />;
};

export default function SymScreen({kidname}) {
  const [open, setOpen] = useState(false);
  const userContext = useContext(UserContext)
  const handleClickOpen = () => {
    setOpen(true);
  };
  const kid = userContext.user.kids.find(kid => kid.name === kidname)
  const handleSave = (selected) => {
     axios.post(`api/diseases/${kid.diseases[0]._id}/symptom`, { selected })
    .then((res) => console.log(res))
    .catch(err => console.log(err));
     
  setOpen(false);
  };

  return (
    <div>
      <Button sx={{ color: '#2196F3' }} className="doses__item" onClick={handleClickOpen}>
        Dodaj
      </Button>
      <Dialog fullScreen open={open} onClose={() => setOpen(false)} TransitionComponent={forwardRef(Transition)}>
        <SymSelector open={open} onCancel={() => setOpen(false)} onSave={handleSave} />
      </Dialog>
    </div>
  );
}
