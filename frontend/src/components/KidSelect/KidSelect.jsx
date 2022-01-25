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

function KidSelect(props) {
  // Temporary kids
  const kids = [
    {
      name: "Franio",
    },
    {
      name: "Ziutka",
    },
  ];

  return (
    <div className="kid-select">
      <Carousel
        autoPlay={false}
        animation="slide"
        indicators={false}
        cycleNavigation={true}
        navButtonsAlwaysVisible={true}
        fullHeightHover={true}
        PrevIcon={<div/>}
        navButtonsProps={{
          style: {
            position: 'absolute',
            right: 0,
            // backgroundColor: 'white',
            // color: 'black',
            // borderRadius: 0,
            // top: '0px !important', // TODO - Doesn't work
            // height: "100%", //TODO - and then this
          },
        }}
      >
        {kids.map((kid, i) => (
          <Kid key={i} item={kid} />
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

function Kid(props) {
  return (
    <>
      <Card variant="outlined">
        <CardContent className="kid-select__kid__id" sx={{ p: 2 }}>
          <Avatar sx={{ width: 50, height: 50 }}>MM</Avatar>
          <Typography variant="h4">{props.item.name}</Typography>
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
