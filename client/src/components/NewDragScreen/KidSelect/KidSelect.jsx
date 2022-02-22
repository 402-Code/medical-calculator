import React, { useContext } from 'react';
import Carousel from 'react-material-ui-carousel';
import { Link } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import { Button, Paper } from '@mui/material';
import Kid from './Kid/Kid';
import { ChildContext } from '../../../context/ChildContext';

const thereIsOnlyOneKid = (arr) => {
  return arr.length === 1;
};

const addKidButton = () => {
  return (
    <Button
      sx={{ float: 'right', mt: 0.5 }}
      variant="contained"
      size="small"
      startIcon={<AddIcon />}
      component={Link}
      to="/addkid"
    >
      Dodaj dziecko
    </Button>
  );
};

function KidSelect({ activeKid, setActiveKid }) {
  const { kids } = useContext(ChildContext);

  if (thereIsOnlyOneKid(kids)) {
    return (
      <Paper elevation={24} sx={{ m: 1, mb: 6, boxShadow: 'none' }}>
        <Kid kid={kids[0]} />
        {addKidButton()}
      </Paper>
    );
  }

  return (
    <Paper elevation={24} sx={{ m: 1, mb: 6 }}>
      <Carousel
        index={kids.indexOf(activeKid)}
        onChange={(active) => setActiveKid(kids[active])}
        navButtonsAlwaysVisible
        autoPlay={false}
        animation="slide"
        indicators={false}
        cycleNavigation
        fullHeightHover
        PrevIcon={<div />}
        navButtonsProps={{
          style: {
            position: 'absolute',
            right: 0
          }
        }}
      >
        {kids.map((kid, i) => (
          <Kid kid={kid} key={i} />
        ))}
      </Carousel>
      {addKidButton()}
    </Paper>
  );
}

export default KidSelect;
