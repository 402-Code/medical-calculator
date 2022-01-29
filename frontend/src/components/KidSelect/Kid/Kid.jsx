import React from "react";
import "../KidSelect.scss";
import { Link } from "react-router-dom";
import {
  Button,
  ButtonGroup,
  Avatar,
  Card,
  CardContent,
  CardActions,
  Typography,
} from "@mui/material";

function Kid({ kid }) {
  return (
    <>
      <Card  elevation={16}>
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

export default Kid;
