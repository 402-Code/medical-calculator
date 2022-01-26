import React from "react";
import "./KidSelect.scss";
import Carousel from "react-material-ui-carousel";
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

const thereIsOnlyOneKid = (arr) => {
  return arr.length === 1;
};

function KidSelect({ kids }) {
  if (thereIsOnlyOneKid(kids)) {
    return (
      <div className="kid-select">
        <Kid kid={kids[0]} />
      </div>
    );
  } else {
    return (
      <div className="kid-select">
        <Carousel
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
            <Kid key={i} kid={kid} />
          ))}
        </Carousel>
        <Button
          sx={{ float: "right" }}
          variant="contained"
          size="small"
          startIcon={<AddIcon />}
        >
          Dodaj dziecko
        </Button>
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
            <Button>Historia dawkowania</Button>
            <Button>Edytuj</Button>
          </ButtonGroup>
        </CardActions>
      </Card>
    </>
  );
}

export default KidSelect;
