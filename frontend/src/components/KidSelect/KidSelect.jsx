import React, { useState } from "react";
import "./KidSelect.scss";
import Carousel from "react-material-ui-carousel";
import { Link } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import {
  Button,
  ButtonGroup,
  Avatar,
  Card,
  CardContent,
  CardActions,
  Typography,
} from "@mui/material";
import { useRef } from "react";

const thereIsOnlyOneKid = (arr) => {
  return arr.length === 1;
};

const addKidButton = () => {
  return (
    <Button
      sx={{ float: "right" }}
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

function KidSelect({ kids }) {
  const activeKid = useRef(kids[0]);

  const startNewDragButton = () => {
    return (
      <Button
        sx={{ mt: 4, mx: "auto", display: "table" }}
        variant="contained"
        onClick={() => console.log(activeKid.current.name)}
      >
        Rozpocznij podawanie leku
      </Button>
    );
  };

  if (thereIsOnlyOneKid(kids)) {
    return (
      <div className="kid-select">
        <Kid kid={kids[0]} />
        {addKidButton()}
        {startNewDragButton()}
      </div>
    );
  } else {
    return (
      <div className="kid-select">
        <Carousel
          onChange={(active) => (activeKid.current = kids[active])}
          navButtonsAlwaysVisible={true}
          autoPlay={false}
          animation="slide"
          indicators={false}
          cycleNavigation={true}
          fullHeightHover={true}
          PrevIcon={<div />}
          navButtonsProps={{
            style: {
              position: "absolute",
              right: 0,
              // backgroundColor: 'white',
              // color: 'black',
            },
          }}
        >
          {kids.map((kid, i) => (
            <Kid kid={kid} key={i} />
          ))}
        </Carousel>
        {addKidButton()}
        {startNewDragButton()}
      </div>
    );
  }
}

function Kid({ kid }) {
  return (
    <>
      <Card variant="outlined">
        <CardContent className="kid-select__kid__id" sx={{ p: 2 }}>
          <Avatar sx={{ width: 50, height: 50 }}>MM</Avatar>
          <Typography variant="h4">{kid.name}</Typography>
        </CardContent>
        <CardActions sx={{ pt: 0 }}>
          <ButtonGroup variant="contained">
            <Button component={Link} to={`/history/${kid.name}`}>
              Historia dawkowania
            </Button>
            <Button component={Link} to={`/edit/${kid.name}`}>
              Edytuj
            </Button>
          </ButtonGroup>
        </CardActions>
      </Card>
    </>
  );
}

export default KidSelect;
