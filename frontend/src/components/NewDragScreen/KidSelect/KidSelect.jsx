import React, { useContext } from "react";
import "./KidSelect.scss";
import Carousel from "react-material-ui-carousel";
import { Link } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import { Button } from "@mui/material";
import Kid from "./Kid/Kid";
import { ChildContext } from "../../../context/ChildContext";

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

function KidSelect({ activeKid }) {
  const { kids } = useContext(ChildContext);
  if (thereIsOnlyOneKid(kids)) {
    return (
      <div className="kid-select">
        <Kid kid={kids[0]} />
        {addKidButton()}
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
            },
          }}
        >
          {kids.map((kid, i) => (
            <Kid kid={kid} key={i} />
          ))}
        </Carousel>
        {addKidButton()}
      </div>
    );
  }
}

export default KidSelect;
